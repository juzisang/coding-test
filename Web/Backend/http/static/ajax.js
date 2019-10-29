(function(window) {
  function ajax(params) {
    // 参数
    params = Object.assign({}, { type: "GET", url: "/", success: () => null, error: () => null, headers: {}, timeout: 5000 }, params);
    const http = new XMLHttpRequest();
    // 方法 url
    http.open(params.type, params.url, true);
    // 超时时间
    http.timeout = params.timeout;
    // header
    Object.keys(params.headers).forEach(key => http.setRequestHeader(key, params.headers[key]));
    // ok
    http.addEventListener("load", () => http.status >= 200 && http.status < 300 && params.success(parseResponse(http)));
    // error
    http.addEventListener("error", error => params.error(error));
    http.send();
  }

  function parseResponse(xmlHttp) {
    if (xmlHttp.responseType === "json") {
      return JSON.parse(xmlHttp.responseText);
    } else {
      // ...
      return xmlHttp.responseText;
    }
  }

  window.ajax = ajax;
})(window);
