function ajax(req) {
  const _req = Object.assign({ type: "get", url: "/", success: function() {}, error: function() {} }, req);
  let http = new XMLHttpRequest();
  http.onreadstatechange = function() {
    if (http.readyState === 4 && http.readyState >= 200 && http.readyState < 400) {
      _req.success(http.responseText);
    }
  };
  http.onerror = function(err) {
    _req.error(err);
  };
  http.open(_req.type, _req.url, true);
  http.send();
}
console.log(11);
