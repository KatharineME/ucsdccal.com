var IframeManager = (function () {
  function c() {
    this._this = {};
    this._listener = null;
    this.init();
  }
  return (
    (c.prototype.init = function () {
      var b = this;
      window.addEventListener(
        "message",
        function (a) {
          return b.background_onMessage(a);
        },
        !1
      );
    }),
    (c.prototype.background_onMessage = function (b) {
      b = b.data;
      b.message && this._listener && this._listener(b);
    }),
    (c.prototype.setListener = function (b) {
      this._listener = b;
    }),
    (c.prototype.tell = function (b, a) {
      a = a || {};
      a.name &&
        -1 !== a.name.toLowerCase().indexOf("error") &&
        (a = { view: a.view, message: a.message, stack: a.stack });
      window.parent.postMessage({ message: b, data: a }, "*");
    }),
    c
  );
})();
