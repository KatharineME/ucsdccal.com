var cPDF_CWFrame = (function () {
    function b() {
      this.initErrors = [];
      this.domain = CWPDFReaderConfig.cwURL;
      this.version = "19.05.22-4820-755";
      this.js =
        "js/webpdf/lib/jquery.js js/webpdf/lib/raven.js js/webpdf/lib/zlib_and_gzip.min.js js/webpdf/lib/jquery.cookie.js js/webpdf/main/03_utilities.js js/webpdf/main/07_datacenter.js js/webpdf/publisher/iframe_pub.js js/webpdf/publisher/com_manager.js js/webpdf/lib/mods_parser.js".split(
          " "
        );
      this.init();
    }
    return (
      (b.prototype.init = function () {
        try {
          var a = window.location.href;
          this.version = a.substring(
            -1 !== a.indexOf("?v=") ? a.indexOf("?v=") : a.indexOf("&v=") + 3,
            a.length
          );
          this.loadJs(0);
        } catch (d) {
          this.initErrors.push(d);
        }
      }),
      (b.prototype.loadJs = function (a) {
        try {
          if (a < this.js.length) {
            var d = this;
            this.addScript(this.js[a] + "?v=" + this.version, function () {
              d.loadJs(a + 1);
            });
          }
        } catch (b) {
          this.initErrors.push(b);
        }
      }),
      (b.prototype.addScript = function (a, b) {
        var f = this,
          c = document.createElement("script"),
          g = document.getElementsByTagName("script")[0];
        b && (c.onload = b);
        c.type = "text/javascript";
        var e = CWPDFReaderConfig.staticDomainURL;
        0 <= e.indexOf("http")
          ? (c.src = e + "/" + a)
          : (c.src =
              ("https:" === document.location.protocol
                ? "https://"
                : "http://") +
              e +
              "/" +
              a);
        g.parentNode.appendChild(c);
        -1 !== a.indexOf("raven") &&
          setTimeout(function () {
            setTimeout(function () {
              for (var a = 0; a < f.initErrors.length; a++)
                -1 !== CWPDFReaderConfig.cwURL.indexOf(colwizOptions.cwURL) &&
                  Raven.captureException(f.initErrors[a]);
              !0;
            }, 2e3);
          }, 2e3);
      }),
      b
    );
  })(),
  cPDF_CW = new cPDF_CWFrame();
