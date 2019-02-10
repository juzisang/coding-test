const http = require("http");
const fs = require("fs");
const path = require("path");
const { URL } = require("url");
const util = require("util");
const readFile = util.promisify(fs.readFile);
const crypto = require("crypto");

function fileMd5(file) {
  const hash = crypto.createHash("md5");
  hash.update(file);
  return hash.digest("hex");
}

function getContentType(ext) {
  return ext === ".js" ? "application/javascript" : ext === ".html" ? "text/html" : "text/html";
}

const staticServer = http.createServer(function(req, res) {
  const url = new URL(`http://localhost:8081${req.url}`);
  const filePath = path.join(__dirname, "static", url.pathname);
  // 文件不存在
  if (!fs.existsSync(filePath)) {
    res.statusCode = 404;
    return res.end();
  }
  const fileStat = fs.statSync(filePath);
  // 目录
  if (fileStat.isDirectory()) {
    res.statusCode = 404;
    return res.end();
  }

  const ext = path.extname(filePath);
  // Etag
  const ETag = fileMd5(JSON.stringify(fileStat));
  // Last-Modified
  const lastModified = new Date(fileStat.mtimeMs).toGMTString();
  if (req.headers["if-none-match"] === ETag || req.headers["if-modified-since"] === lastModified) {
    res.writeHead(304, {
      "Content-Type": getContentType(ext),
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
      ETag,
      "Last-Modified": lastModified
    });
    return res.end();
  }
  // 200 ok
  readFile(filePath, "utf-8").then(file => {
    res.writeHead(200, {
      "Content-Type": getContentType(ext),
      "Cache-Control": "no-cache",
      Connection: "close",
      ETag,
      "Last-Modified": lastModified
    });
    const time = url.searchParams.get("time");
    if (time) {
      setTimeout(() => res.end(file), parseInt(time));
    } else {
      res.end(file);
    }
  });
});

const ajaxServer = http.createServer(function(req, res) {
  const url = new URL(`http://localhost:8081${req.url}`);
  switch (url.pathname) {
    case "/cache":
      res.writeHead("200", {
        "Content-Type": "application/json;",
        "Access-Control-Allow-Origin": "http://localhost:8081",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": "*",
        "Access-Control-Max-Age": 10000
      });
      return res.end('console.log("Hello Wrold")');
  }
  return res.end("Hello World");
});

staticServer.listen(8081, () => {
  console.log("start:http://localhost:8081/");
});

ajaxServer.listen(8082, () => {
  console.log("start:http://localhost:8082/");
});
