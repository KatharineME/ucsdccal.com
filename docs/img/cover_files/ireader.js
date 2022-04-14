var CwZ, CwH, CWParser, CWPDFReaderConfig, Handlebars, define;
window._colwizStylesPath_ = {
  "webpdf/button-chrome.css":
    "webpdf/button-chrome.4e4b96f2f70b3c71591b0d6782b89af5.css",
  "webpdf/button-web.css":
    "webpdf/button-web.4e4b96f2f70b3c71591b0d6782b89af5.css",
  "webpdf/csl.css": "webpdf/csl.e5c8e7a9ed200f27898a0737f94f74f3.css",
  "webpdf/popup-chrome.css":
    "webpdf/popup-chrome.c6b1f466455516ec57830d9b5bb84165.css",
  "webpdf/reader-chrome.css":
    "webpdf/reader-chrome.9e40f03a691803828c465bbb4d873b20.css",
  "webpdf/reader-desktop.css":
    "webpdf/reader-desktop.9e40f03a691803828c465bbb4d873b20.css",
  "webpdf/reader-web.css":
    "webpdf/reader-web.9e40f03a691803828c465bbb4d873b20.css",
};
var cPDF_Class = (function () {
    function t() {
      (this.initErrors = []),
        (this.domain = "app.wizdom.ai"),
        (this.staticDomainURL = "cdn.wizdom.ai/static"),
        (this.assetsDomainURL = "cdn.wizdom.ai/assets"),
        (this.version = "19.05.24-4827-756"),
        (this.initialized = !1),
        (this.js = [
          "js/webpdf/extension/all_pubsol.js",
          "js/webpdf/lib/initials-avatar.js",
          "js/webpdf/lib/FileSaver.js",
          "js/webpdf/lib/citation.converter.js",
          "js/extraction/authortooltip/js/00_main.js",
          "js/webpdf/lib/cwcsl.js",
          "js/webpdf/lib/citeproc.js",
        ]),
        this.init();
    }
    return (
      (t.prototype.init = function () {
        try {
          var t = this.supports_canvas_text(),
            e = this.check_mobile_browser(),
            s = this.check_for_ie();
          if (
            (publisher && publisher.readerOptions.mobileModeEnable && (e = !1),
            t && !e && s)
          ) {
            colwizOptions.appId;
            this.loadJs(0),
              this.addCSS(
                "css/" + window._colwizStylesPath_["webpdf/button-web.css"]
              );
          }
        } catch (t) {
          this.initErrors.push(t);
        }
      }),
      (t.prototype.loadJs = function (t) {
        var e = e || {};
        try {
          if (t < this.js.length)
            if (
              "js/webpdf/main/00_config.js" === this.js[t] &&
              void 0 === e.isBmkLoaded
            )
              if (void 0 === CWPDFReaderConfig) {
                var s = this.js[t] + "?v=" + this.version,
                  i = this;
                this.addScript(s, function () {
                  i.loadJs(t + 1);
                });
              } else this.loadJs(t + 1);
            else if ("js/extraction/parsers.js" === this.js[t])
              if (void 0 === CWParser) {
                s = this.js[t] + "?v=" + this.version;
                var o = this;
                this.addScript(s, function () {
                  o.loadJs(t + 1);
                });
              } else this.loadJs(t + 1);
            else if ("js/webpdf/lib/handlebars.runtime.js" === this.js[t]) {
              var a;
              "function" == typeof define &&
                define.amd &&
                ((a = define), (define = {}));
              s = this.js[t] + "?v=" + this.version;
              var r = this;
              this.addScript(s, function () {
                try {
                  (CwH = Handlebars),
                    Handlebars.noConflict(),
                    a && (define = a);
                } catch (t) {}
                r.loadJs(t + 1);
              });
            } else {
              s = this.js[t] + "?v=" + this.version;
              var n = this;
              this.addScript(s, function () {
                n.loadJs(t + 1);
              });
            }
        } catch (t) {
          this.initErrors.push(t);
        }
      }),
      (t.prototype.addScript = function (t, e) {
        try {
          var s = document.createElement("script"),
            i = document.getElementsByTagName("script")[0];
          e && (s.onload = e), (s.type = "text/javascript");
          var o = this.staticDomainURL;
          0 <= o.indexOf("http")
            ? (s.src = o + "/" + t)
            : (s.src =
                ("https:" === document.location.protocol
                  ? "https://"
                  : "http://") +
                o +
                "/" +
                t),
            i.parentNode.appendChild(s);
        } catch (t) {
          this.initErrors.push(t);
        }
      }),
      (t.prototype.addCSS = function (t) {
        try {
          var e = document.createElement("link"),
            s = document.getElementsByTagName("head")[0],
            i = void 0;
          (i =
            0 <= this.assetsDomainURL.indexOf("http")
              ? this.assetsDomainURL + "/" + t
              : ("https:" === document.location.protocol
                  ? "https://"
                  : "http://") +
                this.assetsDomainURL +
                "/" +
                t),
            e.setAttribute("rel", "stylesheet"),
            e.setAttribute("type", "text/css"),
            e.setAttribute("href", i),
            s.appendChild(e);
        } catch (t) {
          this.initErrors.push(t);
        }
      }),
      (t.prototype.supports_canvas = function () {
        return !!document.createElement("canvas").getContext;
      }),
      (t.prototype.supports_canvas_text = function () {
        if (!this.supports_canvas()) return !1;
        var t = document.createElement("canvas"),
          e = t.getContext("2d");
        return "function" == typeof e.fillText;
      }),
      (t.prototype.check_mobile_browser = function () {
        var t = !1,
          e = navigator.userAgent || navigator.vendor || window.opera;
        return (
          (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
            e
          ) ||
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
              e.substr(0, 4)
            )) &&
            (t = !0),
          t
        );
      }),
      (t.prototype.check_for_ie = function () {
        var t = navigator.userAgent;
        return t.indexOf("MSIE") < 0 || 0 <= t.indexOf("MSIE 10");
      }),
      t
    );
  })(),
  cPDF = new cPDF_Class();
