!(function (e) {
  var t = {};
  function i(o) {
    if (t[o]) return t[o].exports;
    var n = (t[o] = { i: o, l: !1, exports: {} });
    return e[o].call(n.exports, n, n.exports, i), (n.l = !0), n.exports;
  }
  (i.m = e),
    (i.c = t),
    (i.d = function (e, t, o) {
      i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o });
    }),
    (i.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (i.t = function (e, t) {
      if ((1 & t && (e = i(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var o = Object.create(null);
      if (
        (i.r(o),
        Object.defineProperty(o, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var n in e)
          i.d(
            o,
            n,
            function (t) {
              return e[t];
            }.bind(null, n)
          );
      return o;
    }),
    (i.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return i.d(t, "a", t), t;
    }),
    (i.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (i.p = ""),
    i((i.s = 3));
})([
  function (e, t, i) {
    e.exports = i.p + "widget_icons_light.ddcd59.png";
  },
  function (e, t, i) {
    e.exports = i.p + "attention@2x.0ae767.png";
  },
  function (e, t, i) {
    e.exports = i.p + "font-hotjar_5.9c506b.eot";
  },
  function (e, t, i) {
    i(4),
      i(5),
      i(6),
      i(7),
      i(8),
      i(9),
      i(10),
      i(11),
      i(12),
      i(13),
      i(14),
      i(15),
      i(16),
      i(18),
      i(19),
      i(20),
      i(21),
      i(22),
      i(23),
      i(24),
      i(25),
      i(26),
      i(27),
      i(28),
      i(34),
      i(42),
      i(43),
      i(44),
      i(45),
      i(46),
      i(49);
  },
  function (e, t, i) {
    i.p = hj.scriptDomain;
  },
  function (e, t) {
    !(function () {
      (window.hj =
        window.hj ||
        function () {
          (window.hj.q = window.hj.q || []).push(arguments);
        }),
        (window._hjSettings = window._hjSettings || {}),
        (hj.defaults = {
          host: "in.hotjar.com",
          insightsHost: "insights.hotjar.com",
          staticHost: "static.hotjar.com",
          varsHost: "vars.hotjar.com",
          errorUrl:
            "https://ba52622b91a54161b30d42dd31ccd293@sentry.hotjar.com/10",
          viewCounterEndpoint: "https://vc.hotjar.io/views",
          viewCounterHitPercentage: 0.25,
        }),
        (hj.host = _hjSettings.host || hj.defaults.host),
        (hj.insightsHost =
          _hjSettings.insightsHost || hj.defaults.insightsHost),
        (hj.staticHost = _hjSettings.staticHost || hj.defaults.staticHost),
        (hj.varsHost = _hjSettings.varsHost || hj.defaults.varsHost),
        (hj.errorUrl =
          void 0 !== _hjSettings.errorUrl
            ? _hjSettings.errorUrl
            : hj.defaults.errorUrl),
        (hj.viewCounterEndpoint =
          void 0 !== _hjSettings.viewCounterEndpoint
            ? _hjSettings.viewCounterEndpoint
            : hj.defaults.viewCounterEndpoint),
        (hj.viewCounterHitPercentage =
          void 0 !== _hjSettings.viewCounterHitPercentage
            ? _hjSettings.viewCounterHitPercentage
            : hj.defaults.viewCounterHitPercentage);
      (hj.ExceptionLogger = function (e, t) {
        t = t || {};
        var i,
          o = null,
          n = {},
          a = [],
          r = 0,
          s = null !== e,
          d =
            window.location.search.indexOf("hjErrorLoggerSamplingDisabled=1") >
            0
              ? 1
              : 0.1,
          c = t.throttleDelay || 1e3,
          l = t.maxErrors || 10,
          p = [
            "scriptversion",
            "module",
            "errorgroup",
            "errormessagegroup",
            "useragent",
          ],
          h =
            /[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*/g,
          u = /\d{1,3}\.\d{1,3}\.\d{1,3}\.(\d{1,3})/g,
          _ = /\d{4,}([-\s]?\d{4,}){2,}/g,
          g = /password(.*)/g,
          m =
            /[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/g,
          f = [
            {
              name: "raven",
              check: function () {
                return "undefined" != typeof Raven;
              },
              url:
                "https://" +
                hj.staticHost +
                "/static/vendor/raven-js/3.26.3-patched-20181219/raven.min.js",
              state: "unloaded",
              onLoad: function () {
                (i = new Raven.Client()).config(e, {
                  instrument: !1,
                  dataCallback: j,
                  collectWindowErrors: !1,
                  captureUnhandledRejections: !1,
                  release: "hj-" + window.hjBootstrap.revision,
                  sampleRate: d,
                  shouldSendCallback: function () {
                    return !/.*Google.*/.test(window.navigator.userAgent);
                  },
                }),
                  i.setUserContext({ id: _hjSettings.hjid });
              },
            },
          ];
        function b() {
          f.filter(function (e) {
            return "unloaded" === e.state;
          }).forEach(function (e) {
            e.check()
              ? w(e)
              : ((function (e) {
                  e.state = "loading";
                  var t = document.createElement("script");
                  (t.src = e.url),
                    document.getElementsByTagName("head")[0].appendChild(t);
                })(e),
                (function (e) {
                  var t = setInterval(function () {
                    e.check() && (clearInterval(t), w(e));
                  }, 10);
                })(e));
          });
        }
        function w(e) {
          (e.state = "loaded"), e.onLoad(), v() && n.startProcessing();
        }
        function v() {
          return f.every(function (e) {
            return "loaded" === e.state;
          });
        }
        function y() {
          var e = a.shift();
          e &&
            ((function (e) {
              try {
                i.captureException(e.exception, { logger: e.module });
              } catch (e) {
                k("Failed to log exception: " + e, "Exception");
              }
            })(e),
            r++);
        }
        function j(e) {
          return (
            hj.hq.each(e, function (t, i) {
              i && "object" == typeof i
                ? j(i)
                : i &&
                  "string" == typeof i &&
                  -1 == p.indexOf(t) &&
                  ((i = (i = (i = (i = (i = i.replace(u, "<XXX>")).replace(
                    h,
                    "<user@example.com>"
                  )).replace(_, "123456789012")).replace(
                    g,
                    "<******>"
                  )).replace(m, "<XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX>")),
                  (e[t] = i));
            }),
            e
          );
        }
        function k(e, t, i) {
          (void 0 !== hj.log ? hj.log.debug : function () {})(e, t, i);
        }
        return (
          (n.tryCatch = function (e, t) {
            return function () {
              try {
                return e.apply(this, arguments);
              } catch (e) {
                if (
                  (/[?&]logErrors/.test(location.search) && console.error(e),
                  window.__TESTS__)
                )
                  throw e;
                n.log(e, t || "Generic");
              }
            };
          }),
          (n.log = function (e, t) {
            var i;
            k("Exception occurred in '" + t + "'", "Exception", e),
              (i = { exception: e, module: t }),
              s && a.length < l && (v() || b(), a.push(i));
          }),
          (n.getQueue = function () {
            return a;
          }),
          (n.startProcessing = function () {
            n.isProcessing() ||
              (o = setInterval(function () {
                y(), r >= l && n.stopProcessing();
              }, c));
          }),
          (n.isProcessing = function () {
            return null !== o;
          }),
          (n.stopProcessing = function () {
            n.isProcessing() && (clearInterval(o), (o = null));
          }),
          n
        );
      }),
        (hj.exceptions = new hj.ExceptionLogger(hj.errorUrl)),
        (hj.tryCatch = hj.exceptions.tryCatch);
    })();
  },
  function (e, t) {
    try {
      !(function (e, t) {
        var i = function (e) {
          return new o(e);
        };
        (i.isValidSelector = function (e) {
          try {
            return hj.hq(e), !0;
          } catch (e) {
            return !1;
          }
        }),
          (i.isEmptyObject = function (e) {
            return !Object.keys(e).length;
          }),
          (i.isFunction = function (e) {
            return "function" == typeof e;
          }),
          (i.isWindow = function (e) {
            return e === window;
          }),
          (i.isDocument = function (e) {
            return e === window.document;
          }),
          (i.noop = function () {}),
          (i.each = function (e, t) {
            var i, o, n;
            if (
              "object" == typeof e &&
              "[object Array]" !== Object.prototype.toString.call(e)
            ) {
              if ((o = e[Object.keys(e)[0]]) && void 0 !== o.nodeName) {
                for (i in e)
                  if (
                    e.hasOwnProperty(i) &&
                    "length" !== i &&
                    !1 === t(i, e[i], e)
                  )
                    break;
              } else
                for (i in e)
                  if (e.hasOwnProperty(i) && !1 === t(i, e[i], e)) break;
            } else if (void 0 !== e)
              for (n = 0; n < e.length && !1 !== t(n, e[n], e); n += 1);
          }),
          (i.trim = function (e) {
            return "string" == typeof e ? e.replace(/^\s+|\s+$/gm, "") : "";
          }),
          (i.inArray = function (e, t) {
            var i = t.indexOf(e);
            return void 0 !== i && -1 !== i;
          }),
          (i.isUndefined = function (e) {
            return void 0 === e;
          }),
          (i.indexOf = function (e, t) {
            if ("object" == typeof t) {
              var i = t.indexOf(e);
              return void 0 !== i ? i : -1;
            }
            return -1;
          }),
          (i.ajax = function (e) {
            var t = new XMLHttpRequest();
            (e.type = e.type || "GET"),
              t.open(e.type, e.url, !0),
              "POST" === e.type &&
                e.contentType &&
                t.setRequestHeader("Content-Type", e.contentType),
              (t.onload = function () {
                t.status >= 200 && t.status < 400
                  ? i.isFunction(e.success) &&
                    e.success(t.responseText && JSON.parse(t.responseText), t)
                  : i.isFunction(e.error) && e.error(t);
              }),
              (t.onerror = function () {
                i.isFunction(e.error) && e.error(t);
              }),
              i.isFunction(e.requestAnnotator) && e.requestAnnotator(t),
              "POST" === e.type && e.data ? t.send(e.data) : t.send();
          }),
          (i.get = function (e, t) {
            var i = new XMLHttpRequest();
            i.open("GET", e, !0),
              (i.onload = function () {
                i.status >= 200 && i.status < 400 && t && t(i.responseText);
              }),
              i.send();
          }),
          (i.eventHandlers = {}),
          (i.selector = "");
        var o = function (e) {
          var o, n, a;
          if (((i.selector = e), i.isWindow(e)))
            return (this[0] = window), (this.length = 1), this;
          if (i.isDocument(e)) return (this[0] = t), (this.length = 1), this;
          if ("object" == typeof e)
            return (this[0] = e), (this.length = 1), this;
          if (
            "string" == typeof e &&
            "<" === e.charAt(0) &&
            ">" === e.charAt(e.length - 1) &&
            e.length >= 3
          )
            return (
              ((o = t.createElement("div")).innerHTML = e),
              (this[0] = o.childNodes[0]),
              (this.length = 1),
              this
            );
          if ("string" == typeof e) {
            isNaN(e.charAt(1)) ||
              ("." !== e.charAt(0) && "#" !== e.charAt(0)) ||
              (e = e.charAt(0) + "\\3" + e.charAt(1) + " " + e.slice(2));
            try {
              n = t.querySelectorAll(e);
            } catch (e) {
              return (this.length = 0), this;
            }
            for (a = 0; a < n.length; a += 1) this[a] = n[a];
            return (this.length = n.length), this;
          }
          return this;
        };
        (o.prototype.val = function (e) {
          return (
            void 0 !== e && this.length > 0 && (this[0].value = e),
            void 0 === this[0] ? void 0 : this[0] ? this[0].value : ""
          );
        }),
          (o.prototype.text = function (e) {
            return void 0 === e
              ? this[0].textContent
              : (this[0].textContent = e);
          }),
          (o.prototype.each = function (e, t) {
            Array.prototype.forEach.call(this, function (e, i, o) {
              t(i, e, o);
            });
          }),
          (o.prototype.append = function (e) {
            var o;
            "object" == typeof e
              ? "body" === i.selector
                ? t.body.appendChild(e.get(0))
                : this[0].appendChild(e.get(0))
              : "body" === i.selector
              ? (((o = t.createElement("div")).innerHTML = e),
                t.body.appendChild(o))
              : (((o = t.createElement("div")).innerHTML = e),
                this[0].appendChild(o));
          }),
          (o.prototype.hasClass = function (e) {
            return this[0].classList
              ? this[0].classList.contains(e)
              : new RegExp("(^| )" + e + "( |$)", "gi").test(this[0].className);
          }),
          (o.prototype.addClass = function (e) {
            var t;
            for (t = 0; t < this.length; t += 1)
              this[t].classList
                ? this[t].classList.add(e)
                : (this[t].className += " " + e);
            return this;
          }),
          (o.prototype.removeClass = function (e) {
            var t;
            for (t = 0; t < this.length; t += 1)
              this[t].classList
                ? this[t].classList.remove(e)
                : (this[t].className = this[t].className.replace(
                    new RegExp(
                      "(^|\\b)" + e.split(" ").join("|") + "(\\b|$)",
                      "gi"
                    ),
                    " "
                  ));
            return this;
          }),
          (o.prototype.toggleClass = function (e) {
            var t;
            for (t = 0; t < this.length; t += 1)
              this[t].classList
                ? this[t].classList.contains(e)
                  ? this[t].classList.remove(e)
                  : this[t].classList.add(e)
                : new RegExp("(^| )" + e + "( |$)", "gi").test(
                    this[0].className
                  )
                ? (this[t].className = this[t].className.replace(
                    new RegExp(
                      "(^|\\b)" + e.split(" ").join("|") + "(\\b|$)",
                      "gi"
                    ),
                    " "
                  ))
                : (this[t].className += " " + e);
            return this;
          }),
          (o.prototype.is = function (e) {
            return (function (e, t) {
              var i =
                e.matchesSelector ||
                e.msMatchesSelector ||
                e.mozMatchesSelector ||
                e.webkitMatchesSelector ||
                e.oMatchesSelector;
              if (i) return i.call(e, t);
              for (
                var o = e.parentNode.querySelectorAll(t), n = o.length;
                n >= 0;
                n -= 1
              )
                if (o[n] === e) return !0;
              return !1;
            })(this[0], e);
          }),
          (o.prototype.remove = function () {
            var e;
            for (e = 0; e < this.length; e += 1)
              this[e].parentNode.removeChild(this[e]);
          }),
          (o.prototype.click = function (e) {
            var i, o;
            for (i = 0; i < this.length; i += 1)
              (o = t.createEvent("HTMLEvents")).initEvent("click", !0, !1),
                this[i].dispatchEvent(o),
                e && e();
          }),
          (o.prototype.trigger = function (e) {
            var i,
              o,
              n,
              a = e.split(" ");
            for (i = 0; i < this.length; i += 1)
              for (o = 0; o < a.length; o += 1)
                (n = t.createEvent("HTMLEvents")).initEvent(a[o], !0, !1),
                  this[i].dispatchEvent(n);
          }),
          (o.prototype.on = function (e, o, n, a) {
            var r,
              s,
              d,
              c,
              l,
              p,
              h,
              u,
              _ = e.split(" ");
            if (((a = !!a), i.isDocument(this[0]) && "string" == typeof o))
              for (s = 0; s < _.length; s += 1)
                "string" == typeof o
                  ? ("boolean" == typeof n &&
                      !1 === n &&
                      (n = function (e) {
                        return e.preventDefault(), !1;
                      }),
                    (d = o + "." + _[s]),
                    (c = function (e) {
                      if ((l = t.querySelectorAll(o))) {
                        for (
                          p = e.target, h = -1;
                          p && -1 === (h = Array.prototype.indexOf.call(l, p));

                        )
                          p = p.parentElement;
                        h > -1 && n.call(p, e);
                      }
                    }),
                    Array.isArray(i.eventHandlers[d])
                      ? i.eventHandlers[d].push(c)
                      : ((i.eventHandlers[d] = []), i.eventHandlers[d].push(c)),
                    t.addEventListener(_[s].split(".")[0], c, !0))
                  : ("boolean" == typeof o &&
                      !1 === o &&
                      (o = function (e) {
                        return e.preventDefault(), !1;
                      }),
                    Array.isArray(i.eventHandlers.document)
                      ? i.eventHandlers.document.push(o)
                      : ((i.eventHandlers.document = []),
                        i.eventHandlers.document.push(o)),
                    this[0].addEventListener(_[s].split(".")[0], o, a));
            else if (i.isDocument(this[0]))
              for (s = 0; s < _.length; s += 1)
                "boolean" == typeof o &&
                  !1 === o &&
                  (o = function (e) {
                    return e.preventDefault(), !1;
                  }),
                  (d = "document." + _[s]),
                  Array.isArray(i.eventHandlers[d])
                    ? i.eventHandlers[d].push(o)
                    : ((i.eventHandlers[d] = []), i.eventHandlers[d].push(o)),
                  t.addEventListener(_[s].split(".")[0], o, a);
            else if (i.isWindow(this[0]))
              for (s = 0; s < _.length; s += 1)
                "boolean" == typeof o &&
                  !1 === o &&
                  (o = function (e) {
                    return e.preventDefault(), !1;
                  }),
                  (d = "window." + _[s]),
                  Array.isArray(i.eventHandlers[d])
                    ? i.eventHandlers[d].push(o)
                    : ((i.eventHandlers[d] = []), i.eventHandlers[d].push(o)),
                  window.addEventListener(_[s].split(".")[0], o, a);
            else
              for (r = 0; r < this.length; r += 1)
                for (s = 0; s < _.length; s += 1)
                  "object" == typeof o
                    ? ((u = o),
                      (o = function (e) {
                        (e.data = u), n.call(this[r], e);
                      }))
                    : "boolean" == typeof o &&
                      !1 === o &&
                      (o = function (e) {
                        return e.preventDefault(), !1;
                      }),
                    (d = i.selector + "." + _[s]),
                    Array.isArray(i.eventHandlers[d])
                      ? i.eventHandlers[d].push(o)
                      : ((i.eventHandlers[d] = []), i.eventHandlers[d].push(o)),
                    this[r].addEventListener(_[s].split(".")[0], o, a);
            return this;
          }),
          (o.prototype.off = function (e, o, n, a) {
            var r,
              s,
              d,
              c = e.split(" ");
            for (a = !!a, r = 0; r < this.length; r += 1)
              for (s = 0; s < c.length; s += 1)
                if (i.isDocument(this[r]) && "string" == typeof o)
                  if (void 0 === n) {
                    if ("object" == typeof i.eventHandlers[o + "." + c[s]]) {
                      for (
                        d = 0;
                        d < i.eventHandlers[o + "." + c[s]].length;
                        d += 1
                      )
                        t.removeEventListener(
                          c[s].split(".")[0],
                          i.eventHandlers[o + "." + c[s]][d],
                          !0
                        );
                      delete i.eventHandlers[o + "." + c[s]];
                    }
                  } else t.removeEventListener(c[s].split(".")[0], n, a);
                else if (i.isDocument(this[r]))
                  if (void 0 === o) {
                    if (
                      "object" == typeof i.eventHandlers["document." + c[s]]
                    ) {
                      for (
                        d = 0;
                        d < i.eventHandlers["document." + c[s]].length;
                        d += 1
                      )
                        t.removeEventListener(
                          c[s].split(".")[0],
                          i.eventHandlers["document." + c[s]][d],
                          a
                        );
                      delete i.eventHandlers["document." + c[s]];
                    }
                  } else t.removeEventListener(c[s].split(".")[0], o, a);
                else if (i.isWindow(this[r]))
                  if (void 0 === o) {
                    if ("object" == typeof i.eventHandlers["window." + c[s]]) {
                      for (
                        d = 0;
                        d < i.eventHandlers["window." + c[s]].length;
                        d += 1
                      )
                        window.removeEventListener(
                          c[s].split(".")[0],
                          i.eventHandlers["window." + c[s]][d],
                          a
                        );
                      delete i.eventHandlers["window." + c[s]];
                    }
                  } else window.removeEventListener(c[s].split(".")[0], o, a);
                else if (void 0 === o) {
                  if (
                    "object" == typeof i.eventHandlers[i.selector + "." + c[s]]
                  ) {
                    for (
                      d = 0;
                      d < i.eventHandlers[i.selector + "." + c[s]].length;
                      d += 1
                    )
                      this[r].removeEventListener(
                        c[s].split(".")[0],
                        i.eventHandlers[i.selector + "." + c[s]][d],
                        a
                      );
                    delete i.eventHandlers[i.selector + "." + c[s]];
                  }
                } else this[r].removeEventListener(c[s].split(".")[0], o, a);
            return this;
          }),
          (o.prototype.scrollTop = function () {
            return i.isWindow(this[0]) || i.isDocument(this[0])
              ? window.document.body.scrollTop ||
                  window.document.documentElement.scrollTop
              : this[0].scrollTop;
          }),
          (o.prototype.scrollLeft = function () {
            return i.isWindow(this[0]) || i.isDocument(this[0])
              ? t.body.scrollLeft || t.documentElement.scrollLeft
              : this[0].scrollLeft;
          }),
          (o.prototype.height = function () {
            var e;
            return i.isWindow(this[0])
              ? t.documentElement.clientHeight
              : 9 === this[0].nodeType
              ? ((e = this[0].documentElement),
                Math.max(
                  this[0].body.scrollHeight,
                  e.scrollHeight,
                  this[0].body.offsetHeight,
                  e.offsetHeight,
                  e.clientHeight
                ))
              : Math.max(this[0].scrollHeight, this[0].offsetHeight);
          }),
          (o.prototype.width = function () {
            var e;
            return i.isWindow(this[0])
              ? t.documentElement.clientWidth
              : 9 === this[0].nodeType
              ? ((e = this[0].documentElement),
                Math.max(
                  this[0].body.scrollWidth,
                  e.scrollWidth,
                  this[0].body.offsetWidth,
                  e.offsetWidth,
                  e.clientWidth
                ))
              : Math.max(this[0].scrollWidth, this[0].offsetWidth);
          }),
          (o.prototype.outerHeight = function () {
            return this[0].offsetHeight;
          }),
          (o.prototype.offset = function () {
            var e = (this[0] && this[0].ownerDocument).documentElement;
            return {
              top:
                this[0].getBoundingClientRect().top +
                window.pageYOffset -
                e.clientTop,
              left:
                this[0].getBoundingClientRect().left +
                window.pageXOffset -
                e.clientLeft,
            };
          }),
          (o.prototype.attr = function (e, t) {
            var i;
            if (t || "" === t) {
              for (i = 0; i < this.length; i += 1) this[i].setAttribute(e, t);
              return this;
            }
            return "object" == typeof this[0] &&
              null !== this[0].getAttribute(e)
              ? this[0].getAttribute(e)
              : void 0;
          }),
          (o.prototype.ready = function (e) {
            i.isDocument(this[0]) &&
              ("interactive" === t.readyState ||
              "complete" === t.readyState ||
              "loaded" === t.readyState
                ? e()
                : t.addEventListener("DOMContentLoaded", e, !1));
          }),
          (o.prototype.parent = function () {
            return i(this[0].parentNode);
          }),
          (o.prototype.get = function (e) {
            return this[e];
          }),
          (o.prototype.show = function () {
            var e;
            for (e = 0; e < this.length; e += 1) this[e].style.display = "";
            return this;
          }),
          (o.prototype.hide = function () {
            var e;
            for (e = 0; e < this.length; e += 1) this[e].style.display = "none";
            return this;
          }),
          (o.prototype.focus = function () {
            var e;
            for (e = 0; e < this.length; e += 1) this[e].focus();
            return this;
          }),
          (o.prototype.blur = function () {
            var e;
            for (e = 0; e < this.length; e += 1) this[e].blur();
            return this;
          }),
          (o.prototype.clone = function () {
            return this[0].cloneNode(!0);
          }),
          (o.prototype.removeAttr = function (e) {
            var t;
            for (t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
            return this;
          }),
          (o.prototype.find = function (e) {
            var t,
              o,
              n = i();
            try {
              t = this[0].querySelectorAll(e);
            } catch (e) {
              return (this.length = 0), this;
            }
            for (o = 0; o < t.length; o += 1) n[o] = t[o];
            return (n.length = t.length), n;
          }),
          (o.prototype.is = function (e) {
            var t,
              o = !1;
            if (!e || "object" != typeof this[0]) return !1;
            if ("object" == typeof e) return i(this[0]).get(0) === e.get(0);
            if ("string" == typeof e) {
              if (":visible" === e)
                return !(this[0].offsetWidth <= 0 && this[0].offsetHeight <= 0);
              if (":hidden" === e)
                return this[0].offsetWidth <= 0 && this[0].offsetHeight <= 0;
              if (":checked" === e) return this[0].checked;
              if (!(e.indexOf("[") > -1))
                return i(this[0]).get(0).nodeName.toLowerCase() === e;
              if (
                (t = /([A-Za-z]+)\[([A-Za-z-]+)=([A-Za-z]+)]/g.exec(e)).length
              )
                return (
                  i.each(i(this[0]).get(0).attributes, function (e, i) {
                    i.name === t[2] && i.value === t[3] && (o = !0);
                  }),
                  i(this[0]).get(0).nodeName.toLowerCase() === t[1] && o
                );
            }
          }),
          (o.prototype.css = function (e, t) {
            var i, o;
            for (o = 0; o < this.length; o += 1)
              if ("object" == typeof e) for (i in e) this[o].style[i] = e[i];
              else {
                if ("number" != typeof t && "string" != typeof t)
                  return getComputedStyle(this[o])[e];
                this[o].style[e] = t;
              }
            return this;
          }),
          (o.prototype.animate = function (e, t) {
            var o,
              n = this;
            for (void 0 === t && (t = 400), o = 0; o < n.length; o += 1)
              i.each(e, function (e, i) {
                i = i.toString();
                var a,
                  r,
                  s = parseFloat(getComputedStyle(n[o])[e]) || 0,
                  d = getComputedStyle(n[o])[e].replace(/[0-9.-]/g, ""),
                  c = parseFloat(i),
                  l = i.replace(/[0-9.-]/g, ""),
                  p = d || l,
                  h = c - s,
                  u = parseFloat(t / 10),
                  _ = h / u,
                  g = [];
                for (a = 0; a < u; a += 1)
                  (s += _),
                    g.push({
                      attribute: e,
                      value: p ? parseInt(s) + p : parseFloat(s).toFixed(1),
                    });
                g.pop(),
                  g.push({ attribute: e, value: c + p }),
                  g.length &&
                    (function e(t, i) {
                      t.style[i[0].attribute] = i[0].value;
                      i.shift();
                      i.length
                        ? (r = setTimeout(function () {
                            e(t, i);
                          }, 10))
                        : clearTimeout(r);
                    })(n[o], g);
              });
            return this;
          }),
          (o.prototype.filter = function (e) {
            return Array.prototype.filter.call(
              t.querySelectorAll(i.selector),
              function (t, i) {
                e(i, t);
              }
            );
          }),
          (e.hj = e.hj || {}),
          (e.hj.hq = e.hj.hq || i);
      })(window, document);
    } catch (e) {
      hj.exceptions.log(e, "hquery");
    }
  },
  function (e, t) {
    hj.tryCatch(function () {
      if (
        void 0 !== window.MutationObserver ||
        void 0 !== window.WebKitMutationObserver ||
        void 0 !== window.MozMutationObserver
      ) {
        var e,
          t =
            this.__extends ||
            function (e, t) {
              function i() {
                this.constructor = e;
              }
              for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
              (i.prototype = t.prototype), (e.prototype = new i());
            };
        if (
          void 0 ===
          (e =
            "undefined" != typeof WebKitMutationObserver
              ? WebKitMutationObserver
              : MutationObserver)
        )
          throw (
            (console.error("DOM Mutation Observers are required."),
            console.error(
              "https://developer.mozilla.org/en-US/docs/DOM/MutationObserver"
            ),
            Error("DOM Mutation Observers are required"))
          );
        var i,
          o = (function () {
            function e() {
              (this.nodes = []), (this.values = []);
            }
            return (
              (e.prototype.isIndex = function (e) {
                return +e == e >>> 0;
              }),
              (e.prototype.nodeId = function (t) {
                var i = t[e.ID_PROP];
                return i || (i = t[e.ID_PROP] = e.nextId_++), i;
              }),
              (e.prototype.set = function (e, t) {
                var i = this.nodeId(e);
                (this.nodes[i] = e), (this.values[i] = t);
              }),
              (e.prototype.get = function (e) {
                return (e = this.nodeId(e)), this.values[e];
              }),
              (e.prototype.has = function (e) {
                return this.nodeId(e) in this.nodes;
              }),
              (e.prototype.deleteNode = function (e) {
                (e = this.nodeId(e)),
                  delete this.nodes[e],
                  (this.values[e] = void 0);
              }),
              (e.prototype.keys = function () {
                var e,
                  t = [];
                for (e in this.nodes) this.isIndex(e) && t.push(this.nodes[e]);
                return t;
              }),
              (e.ID_PROP = "__hj_mutation_summary_node_map_id__"),
              (e.nextId_ = 1),
              e
            );
          })();
        ((f = i || (i = {}))[(f.STAYED_OUT = 0)] = "STAYED_OUT"),
          (f[(f.ENTERED = 1)] = "ENTERED"),
          (f[(f.STAYED_IN = 2)] = "STAYED_IN"),
          (f[(f.REPARENTED = 3)] = "REPARENTED"),
          (f[(f.REORDERED = 4)] = "REORDERED"),
          (f[(f.EXITED = 5)] = "EXITED");
        var n = (function () {
            function e(e, t, i, o, n, a, r, s) {
              void 0 === t && (t = !1),
                void 0 === i && (i = !1),
                void 0 === o && (o = !1),
                void 0 === n && (n = null),
                void 0 === a && (a = !1),
                void 0 === r && (r = null),
                void 0 === s && (s = null),
                (this.node = e),
                (this.childList = t),
                (this.attributes = i),
                (this.characterData = o),
                (this.oldParentNode = n),
                (this.added = a),
                (this.attributeOldValues = r),
                (this.characterDataOldValue = s),
                (this.isCaseInsensitive =
                  this.node.nodeType === Node.ELEMENT_NODE &&
                  this.node instanceof HTMLElement &&
                  this.node.ownerDocument instanceof HTMLDocument);
            }
            return (
              (e.prototype.getAttributeOldValue = function (e) {
                if (this.attributeOldValues)
                  return (
                    this.isCaseInsensitive && (e = e.toLowerCase()),
                    this.attributeOldValues[e]
                  );
              }),
              (e.prototype.getAttributeNamesMutated = function () {
                var e = [];
                if (!this.attributeOldValues) return e;
                for (var t in this.attributeOldValues) e.push(t);
                return e;
              }),
              (e.prototype.attributeMutated = function (e, t) {
                (this.attributes = !0),
                  (this.attributeOldValues = this.attributeOldValues || {}),
                  e in this.attributeOldValues ||
                    (this.attributeOldValues[e] = t);
              }),
              (e.prototype.characterDataMutated = function (e) {
                this.characterData ||
                  ((this.characterData = !0), (this.characterDataOldValue = e));
              }),
              (e.prototype.removedFromParent = function (e) {
                (this.childList = !0),
                  this.added || this.oldParentNode
                    ? (this.added = !1)
                    : (this.oldParentNode = e);
              }),
              (e.prototype.insertedIntoParent = function () {
                this.added = this.childList = !0;
              }),
              (e.prototype.getOldParent = function () {
                if (this.childList) {
                  if (this.oldParentNode) return this.oldParentNode;
                  if (this.added) return null;
                }
                return this.node.parentNode;
              }),
              e
            );
          })(),
          a = function () {
            (this.added = new o()),
              (this.removed = new o()),
              (this.maybeMoved = new o()),
              (this.oldPrevious = new o()),
              (this.moved = void 0);
          },
          r = (function (e) {
            function i(t, i) {
              e.call(this),
                (this.rootNode = t),
                (this.wasReachableCache = this.reachableCache = void 0),
                (this.anyCharacterDataChanged =
                  this.anyAttributesChanged =
                  this.anyParentsChanged =
                    !1);
              for (var o = 0; o < i.length; o++) {
                var n = i[o];
                switch (n.type) {
                  case "childList":
                    this.anyParentsChanged = !0;
                    for (var a = 0; a < n.removedNodes.length; a++) {
                      var r = n.removedNodes[a];
                      this.getChange(r).removedFromParent(n.target);
                    }
                    for (a = 0; a < n.addedNodes.length; a++)
                      (r = n.addedNodes[a]),
                        this.getChange(r).insertedIntoParent();
                    break;
                  case "attributes":
                    (this.anyAttributesChanged = !0),
                      (a = this.getChange(n.target)).attributeMutated(
                        n.attributeName,
                        n.oldValue
                      );
                    break;
                  case "characterData":
                    (this.anyCharacterDataChanged = !0),
                      (a = this.getChange(n.target)).characterDataMutated(
                        n.oldValue
                      );
                }
              }
            }
            return (
              t(i, e),
              (i.prototype.getChange = function (e) {
                var t = this.get(e);
                return t || ((t = new n(e)), this.set(e, t)), t;
              }),
              (i.prototype.getOldParent = function (e) {
                var t = this.get(e);
                return t ? t.getOldParent() : e.parentNode;
              }),
              (i.prototype.getIsReachable = function (e) {
                if (e === this.rootNode) return !0;
                if (!e) return !1;
                this.reachableCache = this.reachableCache || new o();
                var t = this.reachableCache.get(e);
                return (
                  void 0 === t &&
                    ((t = this.getIsReachable(e.parentNode)),
                    this.reachableCache.set(e, t)),
                  t
                );
              }),
              (i.prototype.getWasReachable = function (e) {
                if (e === this.rootNode) return !0;
                if (!e) return !1;
                this.wasReachableCache = this.wasReachableCache || new o();
                var t = this.wasReachableCache.get(e);
                return (
                  void 0 === t &&
                    ((t = this.getWasReachable(this.getOldParent(e))),
                    this.wasReachableCache.set(e, t)),
                  t
                );
              }),
              (i.prototype.reachabilityChange = function (e) {
                return this.getIsReachable(e)
                  ? this.getWasReachable(e)
                    ? 2
                    : 1
                  : this.getWasReachable(e)
                  ? 5
                  : 0;
              }),
              i
            );
          })(o),
          s = (function () {
            function e(e, t, i, n, a) {
              (this.rootNode = e),
                (this.mutations = t),
                (this.selectors = i),
                (this.calcReordered = n),
                (this.calcOldPreviousSibling = a),
                (this.treeChanges = new r(e, t)),
                (this.entered = []),
                (this.exited = []),
                (this.stayedIn = new o()),
                (this.visited = new o()),
                (this.matchCache =
                  this.characterDataOnly =
                  this.childListChangeMap =
                    void 0),
                this.processMutations();
            }
            return (
              (e.prototype.processMutations = function () {
                if (
                  this.treeChanges.anyParentsChanged ||
                  this.treeChanges.anyAttributesChanged
                )
                  for (
                    var e = this.treeChanges.keys(), t = 0;
                    t < e.length;
                    t++
                  )
                    this.visitNode(e[t], void 0);
              }),
              (e.prototype.visitNode = function (e, t) {
                if (!this.visited.has(e)) {
                  this.visited.set(e, !0);
                  var i = this.treeChanges.get(e),
                    o = t;
                  if (
                    (((i && i.childList) || null == o) &&
                      (o = this.treeChanges.reachabilityChange(e)),
                    0 !== o)
                  ) {
                    if ((this.matchabilityChange(e), 1 === o))
                      this.entered.push(e);
                    else if (5 === o)
                      this.exited.push(e),
                        this.ensureHasOldPreviousSiblingIfNeeded(e);
                    else if (2 === o) {
                      var n = 2;
                      i &&
                        i.childList &&
                        (i.oldParentNode !== e.parentNode
                          ? ((n = 3),
                            this.ensureHasOldPreviousSiblingIfNeeded(e))
                          : this.calcReordered &&
                            this.wasReordered(e) &&
                            (n = 4)),
                        this.stayedIn.set(e, n);
                    }
                    if (2 !== o)
                      for (i = e.firstChild; i; i = i.nextSibling)
                        this.visitNode(i, o);
                  }
                }
              }),
              (e.prototype.ensureHasOldPreviousSiblingIfNeeded = function (e) {
                if (this.calcOldPreviousSibling) {
                  this.processChildlistChanges();
                  var t = e.parentNode,
                    i = this.treeChanges.get(e);
                  i && i.oldParentNode && (t = i.oldParentNode),
                    (i = this.childListChangeMap.get(t)) ||
                      ((i = new a()), this.childListChangeMap.set(t, i)),
                    i.oldPrevious.has(e) ||
                      i.oldPrevious.set(e, e.previousSibling);
                }
              }),
              (e.prototype.getChanged = function (e, t, i) {
                for (
                  this.selectors = t, this.characterDataOnly = i, t = 0;
                  t < this.entered.length;
                  t++
                ) {
                  i = this.entered[t];
                  var o = this.matchabilityChange(i);
                  (1 === o || 2 === o) && e.added.push(i);
                }
                var n = this.stayedIn.keys();
                for (t = 0; t < n.length; t++)
                  (i = n[t]),
                    1 === (o = this.matchabilityChange(i))
                      ? e.added.push(i)
                      : 5 === o
                      ? e.removed.push(i)
                      : 2 === o &&
                        (e.reparented || e.reordered) &&
                        ((o = this.stayedIn.get(i)),
                        e.reparented && 3 === o
                          ? e.reparented.push(i)
                          : e.reordered && 4 === o && e.reordered.push(i));
                for (t = 0; t < this.exited.length; t++)
                  (i = this.exited[t]),
                    (5 === (o = this.matchabilityChange(i)) || 2 === o) &&
                      e.removed.push(i);
              }),
              (e.prototype.getOldParentNode = function (e) {
                var t = this.treeChanges.get(e);
                if (t && t.childList)
                  return t.oldParentNode ? t.oldParentNode : null;
                if (
                  0 === (t = this.treeChanges.reachabilityChange(e)) ||
                  1 === t
                )
                  throw Error("getOldParentNode requested on invalid node.");
                return e.parentNode;
              }),
              (e.prototype.getOldPreviousSibling = function (e) {
                var t = e.parentNode,
                  i = this.treeChanges.get(e);
                if (
                  (i && i.oldParentNode && (t = i.oldParentNode),
                  !(t = this.childListChangeMap.get(t)))
                )
                  throw Error(
                    "getOldPreviousSibling requested on invalid node."
                  );
                return t.oldPrevious.get(e);
              }),
              (e.prototype.getOldAttribute = function (e, t) {
                var i = this.treeChanges.get(e);
                if (!i || !i.attributes)
                  throw Error("getOldAttribute requested on invalid node.");
                if (void 0 === (i = i.getAttributeOldValue(t)))
                  throw Error(
                    "getOldAttribute requested for unchanged attribute name."
                  );
                return i;
              }),
              (e.prototype.attributeChangedNodes = function (e) {
                if (!this.treeChanges.anyAttributesChanged) return {};
                var t, i;
                if (e) {
                  (t = {}), (i = {});
                  for (var o = 0; o < e.length; o++) {
                    (t[(a = e[o])] = !0), (i[a.toLowerCase()] = a);
                  }
                }
                e = {};
                var n = this.treeChanges.keys();
                for (o = 0; o < n.length; o++) {
                  var a = n[o],
                    r = this.treeChanges.get(a);
                  if (
                    r.attributes &&
                    2 === this.treeChanges.reachabilityChange(a) &&
                    2 === this.matchabilityChange(a)
                  )
                    for (
                      var s = a, d = r.getAttributeNamesMutated(), c = 0;
                      c < d.length;
                      c++
                    )
                      (a = d[c]),
                        (!t || t[a] || (r.isCaseInsensitive && i[a])) &&
                          r.getAttributeOldValue(a) !== s.getAttribute(a) &&
                          (i && r.isCaseInsensitive && (a = i[a]),
                          (e[a] = e[a] || []),
                          e[a].push(s));
                }
                return e;
              }),
              (e.prototype.getOldCharacterData = function (e) {
                if (!(e = this.treeChanges.get(e)) || !e.characterData)
                  throw Error("getOldCharacterData requested on invalid node.");
                return e.characterDataOldValue;
              }),
              (e.prototype.getCharacterDataChanged = function () {
                if (!this.treeChanges.anyCharacterDataChanged) return [];
                for (
                  var e = this.treeChanges.keys(), t = [], i = 0;
                  i < e.length;
                  i++
                ) {
                  var o = e[i];
                  if (2 === this.treeChanges.reachabilityChange(o)) {
                    var n = this.treeChanges.get(o);
                    n.characterData &&
                      o.textContent != n.characterDataOldValue &&
                      t.push(o);
                  }
                }
                return t;
              }),
              (e.prototype.computeMatchabilityChange = function (e, t) {
                this.matchCache || (this.matchCache = []),
                  this.matchCache[e.uid] || (this.matchCache[e.uid] = new o());
                var i = this.matchCache[e.uid],
                  n = i.get(t);
                return (
                  void 0 === n &&
                    ((n = e.matchabilityChange(t, this.treeChanges.get(t))),
                    i.set(t, n)),
                  n
                );
              }),
              (e.prototype.matchabilityChange = function (e) {
                var t = this;
                if (this.characterDataOnly)
                  switch (e.nodeType) {
                    case Node.COMMENT_NODE:
                    case Node.TEXT_NODE:
                      return 2;
                    default:
                      return 0;
                  }
                if (!this.selectors) return 2;
                if (e.nodeType !== Node.ELEMENT_NODE) return 0;
                for (
                  var i = this.selectors.map(function (i) {
                      return t.computeMatchabilityChange(i, e);
                    }),
                    o = 0,
                    n = 0;
                  2 !== o && n < i.length;

                ) {
                  switch (i[n]) {
                    case 2:
                      o = 2;
                      break;
                    case 1:
                      o = 5 === o ? 2 : 1;
                      break;
                    case 5:
                      o = 1 === o ? 2 : 5;
                  }
                  n++;
                }
                return o;
              }),
              (e.prototype.getChildlistChange = function (e) {
                var t = this.childListChangeMap.get(e);
                return (
                  t || ((t = new a()), this.childListChangeMap.set(e, t)), t
                );
              }),
              (e.prototype.processChildlistChanges = function () {
                if (!this.childListChangeMap) {
                  this.childListChangeMap = new o();
                  for (var e = 0; e < this.mutations.length; e++) {
                    var t = this.mutations[e];
                    if (
                      "childList" == t.type &&
                      (2 === this.treeChanges.reachabilityChange(t.target) ||
                        this.calcOldPreviousSibling)
                    ) {
                      for (
                        var i = this.getChildlistChange(t.target),
                          n = t.previousSibling,
                          a = function (e, t) {
                            e &&
                              !i.oldPrevious.has(e) &&
                              !i.added.has(e) &&
                              !i.maybeMoved.has(e) &&
                              (!t ||
                                (!i.added.has(t) && !i.maybeMoved.has(t))) &&
                              i.oldPrevious.set(e, t);
                          },
                          r = 0;
                        r < t.removedNodes.length;
                        r++
                      ) {
                        var s = t.removedNodes[r];
                        a(s, n),
                          i.added.has(s)
                            ? i.added.deleteNode(s)
                            : (i.removed.set(s, !0),
                              i.maybeMoved.deleteNode(s)),
                          (n = s);
                      }
                      for (
                        a(t.nextSibling, n), r = 0;
                        r < t.addedNodes.length;
                        r++
                      )
                        (s = t.addedNodes[r]),
                          i.removed.has(s)
                            ? (i.removed.deleteNode(s), i.maybeMoved.set(s, !0))
                            : i.added.set(s, !0);
                    }
                  }
                }
              }),
              (e.prototype.wasReordered = function (e) {
                function t(e) {
                  if (!e || !a.maybeMoved.has(e)) return !1;
                  var i = a.moved.get(e);
                  if (void 0 !== i) return i;
                  if (r.has(e)) i = !0;
                  else {
                    if ((r.set(e, !0), d.has(e))) i = d.get(e);
                    else {
                      for (
                        i = e.previousSibling;
                        i && (a.added.has(i) || t(i));

                      )
                        i = i.previousSibling;
                      d.set(e, i);
                    }
                    i =
                      i !==
                      (function e(i) {
                        var o = s.get(i);
                        if (void 0 !== o) return o;
                        for (
                          o = a.oldPrevious.get(i);
                          o && (a.removed.has(o) || t(o));

                        )
                          o = e(o);
                        void 0 === o && (o = i.previousSibling);
                        s.set(i, o);
                        return o;
                      })(e);
                  }
                  return (
                    r.has(e)
                      ? (r.deleteNode(e), a.moved.set(e, i))
                      : (i = a.moved.get(e)),
                    i
                  );
                }
                if (!this.treeChanges.anyParentsChanged) return !1;
                this.processChildlistChanges();
                var i = e.parentNode,
                  n = this.treeChanges.get(e);
                n && n.oldParentNode && (i = n.oldParentNode);
                var a = this.childListChangeMap.get(i);
                if (!a) return !1;
                if (a.moved) return a.moved.get(e);
                a.moved = new o();
                var r = new o(),
                  s = new o(),
                  d = new o();
                return a.maybeMoved.keys().forEach(t), a.moved.get(e);
              }),
              e
            );
          })(),
          d = (function () {
            function e(e, t) {
              var i = this;
              if (
                ((this.projection = e),
                (this.added = []),
                (this.removed = []),
                (this.reparented =
                  t.all || t.element || t.characterData ? [] : void 0),
                (this.reordered = t.all ? [] : void 0),
                e.getChanged(this, t.elementFilter, t.characterData),
                t.all || t.attribute || t.attributeList)
              ) {
                var o = e.attributeChangedNodes(
                  t.attribute ? [t.attribute] : t.attributeList
                );
                t.attribute
                  ? (this.valueChanged = o[t.attribute] || [])
                  : ((this.attributeChanged = o),
                    t.attributeList &&
                      t.attributeList.forEach(function (e) {
                        i.attributeChanged.hasOwnProperty(e) ||
                          (i.attributeChanged[e] = []);
                      }));
              }
              (t.all || t.characterData) &&
                ((o = e.getCharacterDataChanged()),
                t.characterData
                  ? (this.valueChanged = o)
                  : (this.characterDataChanged = o)),
                this.reordered &&
                  (this.getOldPreviousSibling =
                    e.getOldPreviousSibling.bind(e));
            }
            return (
              (e.prototype.getOldParentNode = function (e) {
                return this.projection.getOldParentNode(e);
              }),
              (e.prototype.getOldAttribute = function (e, t) {
                return this.projection.getOldAttribute(e, t);
              }),
              (e.prototype.getOldCharacterData = function (e) {
                return this.projection.getOldCharacterData(e);
              }),
              (e.prototype.getOldPreviousSibling = function (e) {
                return this.projection.getOldPreviousSibling(e);
              }),
              e
            );
          })(),
          c = /[a-zA-Z_]+/,
          l = /[a-zA-Z0-9_\-]+/;
        function p(e) {
          return '"' + e.replace(/"/, '\\"') + '"';
        }
        var h = (function () {
            function e() {}
            return (
              (e.prototype.matches = function (e) {
                if (null === e) return !1;
                if (void 0 === this.attrValue) return !0;
                if (!this.contains) return this.attrValue == e;
                e = e.split(" ");
                for (var t = 0; t < e.length; t++)
                  if (this.attrValue === e[t]) return !0;
                return !1;
              }),
              (e.prototype.toString = function () {
                return "class" === this.attrName && this.contains
                  ? "." + this.attrValue
                  : "id" !== this.attrName || this.contains
                  ? this.contains
                    ? "[" + this.attrName + "~=" + p(this.attrValue) + "]"
                    : "attrValue" in this
                    ? "[" + this.attrName + "=" + p(this.attrValue) + "]"
                    : "[" + this.attrName + "]"
                  : "#" + this.attrValue;
              }),
              e
            );
          })(),
          u = (function () {
            function e() {
              (this.uid = e.nextUid++), (this.qualifiers = []);
            }
            var t;
            return (
              Object.defineProperty(e.prototype, "caseInsensitiveTagName", {
                get: function () {
                  return this.tagName.toUpperCase();
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "selectorString", {
                get: function () {
                  return this.tagName + this.qualifiers.join("");
                },
                enumerable: !0,
                configurable: !0,
              }),
              (e.prototype.isMatching = function (t) {
                return t[e.matchesSelector](this.selectorString);
              }),
              (e.prototype.wasMatching = function (e, t, i) {
                if (!t || !t.attributes) return i;
                if (
                  "*" !==
                    (o = t.isCaseInsensitive
                      ? this.caseInsensitiveTagName
                      : this.tagName) &&
                  o !== e.tagName
                )
                  return !1;
                for (
                  var o = [], n = !1, a = 0;
                  a < this.qualifiers.length;
                  a++
                ) {
                  var r = this.qualifiers[a],
                    s = t.getAttributeOldValue(r.attrName);
                  o.push(s), (n = n || void 0 !== s);
                }
                if (!n) return i;
                for (a = 0; a < this.qualifiers.length; a++)
                  if (
                    ((r = this.qualifiers[a]),
                    void 0 === (s = o[a]) && (s = e.getAttribute(r.attrName)),
                    !r.matches(s))
                  )
                    return !1;
                return !0;
              }),
              (e.prototype.matchabilityChange = function (e, t) {
                var i = this.isMatching(e);
                return i
                  ? this.wasMatching(e, t, i)
                    ? 2
                    : 1
                  : this.wasMatching(e, t, i)
                  ? 5
                  : 0;
              }),
              (e.parseSelectors = function (t) {
                function i() {
                  n && (a && (n.qualifiers.push(a), (a = void 0)), s.push(n)),
                    (n = new e());
                }
                function o() {
                  a && n.qualifiers.push(a), (a = new h());
                }
                for (
                  var n, a, r, s = [], d = /\s/, p = 1, u = 0;
                  u < t.length;

                ) {
                  var _ = t[u++];
                  switch (p) {
                    case 1:
                      if (_.match(c)) {
                        i(), (n.tagName = _), (p = 2);
                        break;
                      }
                      if ("*" == _) {
                        i(), (n.tagName = "*"), (p = 3);
                        break;
                      }
                      if ("." == _) {
                        i(),
                          o(),
                          (n.tagName = "*"),
                          (a.attrName = "class"),
                          (a.contains = !0),
                          (p = 4);
                        break;
                      }
                      if ("#" == _) {
                        i(),
                          o(),
                          (n.tagName = "*"),
                          (a.attrName = "id"),
                          (p = 4);
                        break;
                      }
                      if ("[" == _) {
                        i(), o(), (n.tagName = "*"), (a.attrName = ""), (p = 6);
                        break;
                      }
                      if (_.match(d)) break;
                      throw Error("Invalid or unsupported selector syntax.");
                    case 2:
                      if (_.match(l)) {
                        n.tagName += _;
                        break;
                      }
                      if ("." == _) {
                        o(), (a.attrName = "class"), (a.contains = !0), (p = 4);
                        break;
                      }
                      if ("#" == _) {
                        o(), (a.attrName = "id"), (p = 4);
                        break;
                      }
                      if ("[" == _) {
                        o(), (a.attrName = ""), (p = 6);
                        break;
                      }
                      if (_.match(d)) {
                        p = 14;
                        break;
                      }
                      if ("," == _) {
                        p = 1;
                        break;
                      }
                      throw Error("Invalid or unsupported selector syntax.");
                    case 3:
                      if ("." == _) {
                        o(), (a.attrName = "class"), (a.contains = !0), (p = 4);
                        break;
                      }
                      if ("#" == _) {
                        o(), (a.attrName = "id"), (p = 4);
                        break;
                      }
                      if ("[" == _) {
                        o(), (a.attrName = ""), (p = 6);
                        break;
                      }
                      if (_.match(d)) {
                        p = 14;
                        break;
                      }
                      if ("," == _) {
                        p = 1;
                        break;
                      }
                      throw Error("Invalid or unsupported selector syntax.");
                    case 4:
                      if (_.match(c)) {
                        (a.attrValue = _), (p = 5);
                        break;
                      }
                      throw Error("Invalid or unsupported selector syntax.");
                    case 5:
                      if (_.match(l)) {
                        a.attrValue += _;
                        break;
                      }
                      if ("." == _) {
                        o(), (a.attrName = "class"), (a.contains = !0), (p = 4);
                        break;
                      }
                      if ("#" == _) {
                        o(), (a.attrName = "id"), (p = 4);
                        break;
                      }
                      if ("[" == _) {
                        o(), (p = 6);
                        break;
                      }
                      if (_.match(d)) {
                        p = 14;
                        break;
                      }
                      if ("," == _) {
                        p = 1;
                        break;
                      }
                      throw Error("Invalid or unsupported selector syntax.");
                    case 6:
                      if (_.match(c)) {
                        (a.attrName = _), (p = 7);
                        break;
                      }
                      if (_.match(d)) break;
                      throw Error("Invalid or unsupported selector syntax.");
                    case 7:
                      if (_.match(l)) {
                        a.attrName += _;
                        break;
                      }
                      if (_.match(d)) {
                        p = 8;
                        break;
                      }
                      if ("~" == _) {
                        (a.contains = !0), (p = 9);
                        break;
                      }
                      if ("=" == _) {
                        (a.attrValue = ""), (p = 11);
                        break;
                      }
                      if ("]" == _) {
                        p = 3;
                        break;
                      }
                      throw Error("Invalid or unsupported selector syntax.");
                    case 8:
                      if ("~" == _) {
                        (a.contains = !0), (p = 9);
                        break;
                      }
                      if ("=" == _) {
                        (a.attrValue = ""), (p = 11);
                        break;
                      }
                      if ("]" == _) {
                        p = 3;
                        break;
                      }
                      if (_.match(d)) break;
                      throw Error("Invalid or unsupported selector syntax.");
                    case 9:
                      if ("=" == _) {
                        (a.attrValue = ""), (p = 11);
                        break;
                      }
                      throw Error("Invalid or unsupported selector syntax.");
                    case 10:
                      if ("]" == _) {
                        p = 3;
                        break;
                      }
                      if (_.match(d)) break;
                      throw Error("Invalid or unsupported selector syntax.");
                    case 11:
                      if (_.match(d)) break;
                      if ('"' == _ || "'" == _) {
                        (r = _), (p = 13);
                        break;
                      }
                      (a.attrValue += _), (p = 12);
                      break;
                    case 12:
                      if (_.match(d)) {
                        p = 10;
                        break;
                      }
                      if ("]" == _) {
                        p = 3;
                        break;
                      }
                      if ("'" == _ || '"' == _)
                        throw Error("Invalid or unsupported selector syntax.");
                      a.attrValue += _;
                      break;
                    case 13:
                      if (_ == r) {
                        p = 10;
                        break;
                      }
                      a.attrValue += _;
                      break;
                    case 14:
                      if (_.match(d)) break;
                      if ("," == _) {
                        p = 1;
                        break;
                      }
                      throw Error("Invalid or unsupported selector syntax.");
                  }
                }
                switch (p) {
                  case 1:
                  case 2:
                  case 3:
                  case 5:
                  case 14:
                    i();
                    break;
                  default:
                    throw Error("Invalid or unsupported selector syntax.");
                }
                if (!s.length)
                  throw Error("Invalid or unsupported selector syntax.");
                return s;
              }),
              (e.nextUid = 1),
              (e.matchesSelector =
                "function" ==
                typeof (t = document.createElement("div")).webkitMatchesSelector
                  ? "webkitMatchesSelector"
                  : "function" == typeof t.mozMatchesSelector
                  ? "mozMatchesSelector"
                  : "function" == typeof t.msMatchesSelector
                  ? "msMatchesSelector"
                  : "matchesSelector"),
              e
            );
          })(),
          _ = /^([a-zA-Z:_]+[a-zA-Z0-9_\-:\.]*)$/;
        function g(e) {
          if ("string" != typeof e)
            throw Error(
              "Invalid request option. attribute must be a non-zero length string."
            );
          if (!(e = e.trim()))
            throw Error(
              "Invalid request option. attribute must be a non-zero length string."
            );
          if (!e.match(_))
            throw Error("Invalid request option. invalid attribute name: " + e);
          return e;
        }
        function m(e) {
          if (!e.trim().length)
            throw Error(
              "Invalid request option: elementAttributes must contain at least one attribute."
            );
          var t = {},
            i = {};
          e = e.split(/\s+/);
          for (var o = 0; o < e.length; o++) {
            if ((n = e[o])) {
              var n,
                a = (n = g(n)).toLowerCase();
              if (t[a])
                throw Error(
                  "Invalid request option: observing multiple case variations of the same attribute is not supported."
                );
              (i[n] = !0), (t[a] = !0);
            }
          }
          return Object.keys(i);
        }
        hj.MutationSummary = (function () {
          function t(i) {
            var o = this;
            (this.connected = !1),
              (this.options = t.validateOptions(i)),
              (this.observerOptions = t.createObserverOptions(
                this.options.queries
              )),
              (this.root = this.options.rootNode),
              (this.callback = this.options.callback),
              (this.elementFilter = Array.prototype.concat.apply(
                [],
                this.options.queries.map(function (e) {
                  return e.elementFilter ? e.elementFilter : [];
                })
              )),
              this.elementFilter.length || (this.elementFilter = void 0),
              (this.calcReordered = this.options.queries.some(function (e) {
                return e.all;
              })),
              (this.queryValidators = []),
              t.createQueryValidator &&
                (this.queryValidators = this.options.queries.map(function (e) {
                  return t.createQueryValidator(o.root, e);
                })),
              (this.observer = new e(function (e) {
                o.observerCallback(e);
              })),
              this.reconnect();
          }
          return (
            (t.createObserverOptions = function (e) {
              function t(e) {
                (o.attributes && !i) ||
                  ((o.attributes = !0),
                  (o.attributeOldValue = !0),
                  e
                    ? ((i = i || {}),
                      e.forEach(function (e) {
                        (i[e] = !0), (i[e.toLowerCase()] = !0);
                      }))
                    : (i = void 0));
              }
              var i,
                o = { childList: !0, subtree: !0 };
              return (
                e.forEach(function (e) {
                  e.characterData
                    ? ((o.characterData = !0), (o.characterDataOldValue = !0))
                    : e.all
                    ? (t(),
                      (o.characterData = !0),
                      (o.characterDataOldValue = !0))
                    : e.attribute
                    ? t([e.attribute.trim()])
                    : (e = (function (e) {
                        var t = {};
                        return (
                          e.forEach(function (e) {
                            e.qualifiers.forEach(function (e) {
                              t[e.attrName] = !0;
                            });
                          }),
                          Object.keys(t)
                        );
                      })(e.elementFilter).concat(e.attributeList || []))
                        .length && t(e);
                }),
                i && (o.attributeFilter = Object.keys(i)),
                o
              );
            }),
            (t.validateOptions = function (e) {
              for (var i in e)
                if (!(i in t.optionKeys)) throw Error("Invalid option: " + i);
              if ("function" != typeof e.callback)
                throw Error(
                  "Invalid options: callback is required and must be a function"
                );
              if (!e.queries || !e.queries.length)
                throw Error(
                  "Invalid options: queries must contain at least one query request object."
                );
              i = {
                callback: e.callback,
                rootNode: e.rootNode || document,
                observeOwnChanges: !!e.observeOwnChanges,
                oldPreviousSibling: !!e.oldPreviousSibling,
                queries: [],
              };
              for (var o = 0; o < e.queries.length; o++) {
                var n = e.queries[o];
                if (n.all) {
                  if (1 < Object.keys(n).length)
                    throw Error("Invalid request option. all has no options.");
                  i.queries.push({ all: !0 });
                } else if ("attribute" in n) {
                  if (
                    (((r = { attribute: g(n.attribute) }).elementFilter =
                      u.parseSelectors("*[" + r.attribute + "]")),
                    1 < Object.keys(n).length)
                  )
                    throw Error(
                      "Invalid request option. attribute has no options."
                    );
                  i.queries.push(r);
                } else if ("element" in n) {
                  var a = Object.keys(n).length,
                    r = {
                      element: n.element,
                      elementFilter: u.parseSelectors(n.element),
                    };
                  if (
                    (n.hasOwnProperty("elementAttributes") &&
                      ((r.attributeList = m(n.elementAttributes)), a--),
                    1 < a)
                  )
                    throw Error(
                      "Invalid request option. element only allows elementAttributes option."
                    );
                  i.queries.push(r);
                } else {
                  if (!n.characterData)
                    throw Error(
                      "Invalid request option. Unknown query request."
                    );
                  if (1 < Object.keys(n).length)
                    throw Error(
                      "Invalid request option. characterData has no options."
                    );
                  i.queries.push({ characterData: !0 });
                }
              }
              return i;
            }),
            (t.prototype.createSummaries = function (e) {
              if (!e || !e.length) return [];
              e = new s(
                this.root,
                e,
                this.elementFilter,
                this.calcReordered,
                this.options.oldPreviousSibling
              );
              for (var t = [], i = 0; i < this.options.queries.length; i++)
                t.push(new d(e, this.options.queries[i]));
              return t;
            }),
            (t.prototype.checkpointQueryValidators = function () {
              this.queryValidators.forEach(function (e) {
                e && e.recordPreviousState();
              });
            }),
            (t.prototype.runQueryValidators = function (e) {
              this.queryValidators.forEach(function (t, i) {
                t && t.validate(e[i]);
              });
            }),
            (t.prototype.changesToReport = function (e) {
              return e.some(function (e) {
                return !!(
                  "added removed reordered reparented valueChanged characterDataChanged"
                    .split(" ")
                    .some(function (t) {
                      return e[t] && e[t].length;
                    }) ||
                  (e.attributeChanged &&
                    Object.keys(e.attributeChanged).some(function (t) {
                      return !!e.attributeChanged[t].length;
                    }))
                );
              });
            }),
            (t.prototype.observerCallback = function (e) {
              this.options.observeOwnChanges || this.observer.disconnect(),
                (e = this.createSummaries(e)),
                this.runQueryValidators(e),
                this.options.observeOwnChanges &&
                  this.checkpointQueryValidators(),
                this.changesToReport(e) && this.callback(e),
                !this.options.observeOwnChanges &&
                  this.connected &&
                  (this.checkpointQueryValidators(),
                  this.observer.observe(this.root, this.observerOptions));
            }),
            (t.prototype.reconnect = function () {
              if (this.connected) throw Error("Already connected");
              this.observer.observe(this.root, this.observerOptions),
                (this.connected = !0),
                this.checkpointQueryValidators();
            }),
            (t.prototype.takeSummaries = function () {
              if (!this.connected) throw Error("Not connected");
              var e = this.createSummaries(this.observer.takeRecords());
              return this.changesToReport(e) ? e : void 0;
            }),
            (t.prototype.disconnect = function () {
              var e = this.takeSummaries();
              return this.observer.disconnect(), (this.connected = !1), e;
            }),
            (t.NodeMap = o),
            (t.parseElementFilter = u.parseSelectors),
            (t.optionKeys = {
              callback: !0,
              queries: !0,
              rootNode: !0,
              oldPreviousSibling: !0,
              observeOwnChanges: !0,
            }),
            t
          );
        })();
      }
      var f;
    }, "mutation-summary")();
  },
  function (e, t) {
    hj.tryCatch(function () {
      var e = hj.tryCatch(function () {
          function e(e, t) {
            (this.root = e), (this.delegate = t), (this.idMap = {});
          }
          return (
            (e.prototype.initialize = function (e, t) {
              this.idMap[e] = this.root;
              for (var i = 0; i < t.length; i++)
                this.deserializeNode(t[i], this.root);
            }),
            (e.prototype.deserializeDocument = function (e, t, i) {
              (this.root = document.cloneNode()),
                i && (this.idMap = {}),
                (this.idMap[e] = this.root);
              for (var o = 0; o < t.length; o++)
                this.deserializeNode(t[o], this.root, i);
              return this.root;
            }),
            (e.prototype.deserializeNode = function (e, t, i) {
              var o = this,
                n = !1;
              if (null === e) return null;
              var a = this.idMap[e.id];
              if (a && !i) return a;
              var r = this.root.ownerDocument;
              switch ((null === r && (r = this.root), e.nodeType)) {
                case Node.COMMENT_NODE:
                  a = r.createComment(e.textContent);
                  break;
                case Node.TEXT_NODE:
                  a = r.createTextNode(e.textContent);
                  break;
                case Node.DOCUMENT_TYPE_NODE:
                  a = r.implementation.createDocumentType(
                    e.name,
                    e.publicId,
                    e.systemId
                  );
                  break;
                case Node.ELEMENT_NODE:
                  try {
                    this.delegate &&
                      this.delegate.createElement &&
                      (a = this.delegate.createElement(e.tagName)),
                      a || (a = r.createElement(e.tagName));
                  } catch (e) {
                    (a = r.createComment(
                      'hj.treeMirror.deserializeNode.error: "' + e.message + '"'
                    )),
                      (n = !0);
                    break;
                  }
                  Object.keys(e.attributes).forEach(function (t) {
                    try {
                      (o.delegate &&
                        o.delegate.setAttribute &&
                        o.delegate.setAttribute(a, t, e.attributes[t])) ||
                        a.setAttribute(t, e.attributes[t]);
                    } catch (e) {}
                  });
              }
              if (!a) throw "Could not create node of type: " + e.nodeType;
              if (
                ((this.idMap[e.id] = a),
                t && t.appendChild(a),
                e.childNodes && !n)
              )
                for (var s = 0; s < e.childNodes.length; s++)
                  this.deserializeNode(e.childNodes[s], a, i);
              return a;
            }),
            e
          );
        }, "TreeMirrorMirror")(),
        t = hj.tryCatch(function () {
          function e(e, t, i) {
            var o = this;
            (this.target = e),
              (this.mirror = t),
              (this.nextId = 1),
              hj.treeMirror.mutationObserverAvailable
                ? (this.knownNodes = new hj.MutationSummary.NodeMap())
                : (this.knownNodes = {
                    get: function () {},
                    set: function () {},
                    deleteNode: function () {},
                  });
            var n = this.serializeTarget(e),
              a = n.rootId,
              r = n.children;
            this.mirror.initialize(a, r);
            var s,
              d = [{ all: !0 }];
            i && (d = d.concat(i));
            try {
              void 0 !== window.MutationObserver
                ? (s = window.MutationObserver)
                : void 0 !== window.WebKitMutationObserver
                ? (s = window.WebKitMutationObserver)
                : void 0 !== window.MozMutationObserver &&
                  (s = window.MozMutationObserver);
            } catch (e) {
              s = void 0;
            }
            void 0 !== s &&
              (this.mutationSummary = new hj.MutationSummary({
                rootNode: e,
                callback: hj.tryCatch(function (e) {
                  o.applyChanged(e);
                }, "hj.treeMirrorClient"),
                queries: d,
              }));
          }
          return (
            (e.prototype.serializeTarget = function (e, t) {
              for (
                var i = this.serializeNode(e).id, o = [], n = e.firstChild;
                n;
                n = n.nextSibling
              )
                o.push(this.serializeNode(n, !0, t));
              return { rootId: i, children: o };
            }),
            (e.prototype.disconnect = function () {
              this.mutationSummary &&
                (this.mutationSummary.disconnect(),
                (this.mutationSummary = void 0));
            }),
            (e.prototype.rememberNode = function (e) {
              var t = this.nextId++;
              return this.knownNodes.set(e, t), t;
            }),
            (e.prototype.forgetNode = function (e) {
              this.knownNodes.deleteNode(e);
            }),
            (e.prototype.serializeNode = function (e, t, i, o) {
              if (null === e) return null;
              var n = this.knownNodes.get(e);
              if (void 0 !== n && !i) return { id: n };
              void 0 === n && (n = this.rememberNode(e));
              var a = { nodeType: e.nodeType, id: n };
              switch (a.nodeType) {
                case Node.DOCUMENT_TYPE_NODE:
                  var r = e;
                  (a.name = "" === r.name ? "html" : r.name),
                    (a.publicId = r.publicId),
                    (a.systemId = r.systemId);
                  break;
                case Node.COMMENT_NODE:
                case Node.TEXT_NODE:
                  var s = hj.privacy.getSuppressedTextNode(e, o);
                  (o = s.shouldSuppressNode), (a.textContent = s.content);
                  break;
                case Node.ELEMENT_NODE:
                  var d = hj.privacy.getSuppressedNode(e, o);
                  if (
                    ((o = d.shouldSuppressNode),
                    (a.tagName = d.node.tagName),
                    (a.attributes = d.node.attributes),
                    hj.cssBlobs.handleBlobStyles(a),
                    !a.attributes["data-hj-suppressed"] &&
                      "IMG" === a.tagName &&
                      e.currentSrc &&
                      (a.attributes.src = e.currentSrc),
                    t && e.childNodes.length)
                  ) {
                    a.childNodes = [];
                    for (var c = e.firstChild; c; c = c.nextSibling)
                      a.childNodes.push(this.serializeNode(c, !0, i, o));
                  }
              }
              return a;
            }),
            (e.prototype.serializeAddedAndMoved = function (e, t, i) {
              var o = this,
                n = e.concat(t).concat(i),
                a = new hj.MutationSummary.NodeMap();
              n.forEach(function (e) {
                var t = e.parentNode,
                  i = a.get(t);
                i || ((i = new hj.MutationSummary.NodeMap()), a.set(t, i)),
                  i.set(e, !0);
              });
              var r = [];
              return (
                a.keys().forEach(function (e) {
                  for (var t = a.get(e), i = t.keys(); i.length; ) {
                    for (
                      var n = i[0];
                      n.previousSibling && t.has(n.previousSibling);

                    )
                      n = n.previousSibling;
                    for (; n && t.has(n); ) {
                      var s = o.serializeNode(n);
                      (s.previousSibling = o.serializeNode(n.previousSibling)),
                        (s.parentNode = o.serializeNode(n.parentNode)),
                        r.push(s),
                        t.deleteNode(n),
                        (n = n.nextSibling);
                    }
                    i = t.keys();
                  }
                }),
                r
              );
            }),
            (e.prototype.serializeAttributeChanges = function (e) {
              var t = this,
                i = new hj.MutationSummary.NodeMap();
              return (
                Object.keys(e).forEach(function (o) {
                  e[o].forEach(function (e) {
                    var n = i.get(e);
                    n ||
                      (((n = t.serializeNode(e)).attributes = {}), i.set(e, n));
                    var a = e.getAttribute(o);
                    hj.cssBlobs.handleBlobStyles(e),
                      "string" == typeof a &&
                        a.length &&
                        (a = a
                          .replace(/-?\d+\.\d+%/g, function (e) {
                            return Math.round(parseFloat(e)) + "%";
                          })
                          .replace(/-?\d+\.\d+/g, function (e) {
                            return parseFloat(e).toFixed(1);
                          }));
                    var r = { value: a, name: o },
                      s = hj.privacy.getSuppressedNodeAttribute(e, r, !1);
                    s && (n.attributes[s.name] = s.value);
                  });
                }),
                i.keys().map(function (e) {
                  return i.get(e);
                })
              );
            }),
            (e.prototype.applyChanged = function (e) {
              var t = this,
                i = e[0],
                o = i.removed.map(function (e) {
                  return t.serializeNode(e);
                }),
                n = this.serializeAddedAndMoved(
                  i.added,
                  i.reparented,
                  i.reordered
                ),
                a = this.serializeAttributeChanges(i.attributeChanged),
                r = i.characterDataChanged.map(function (e) {
                  var i = t.serializeNode(e);
                  return (
                    (i.textContent = hj.privacy.getSuppressedTextNode(
                      e,
                      !1
                    ).content),
                    i
                  );
                });
              this.mirror.applyChanged(o, n, a, r),
                i.removed.forEach(function (e) {
                  t.forgetNode(e);
                });
            }),
            e
          );
        }, "TreeMirrorClient")();
      hj.treeMirror = hj.tryCatch(function () {
        var i,
          o,
          n = {},
          a = [];
        function r(e, t, i, o) {
          a.forEach(function (n) {
            n(e, t, i, o);
          });
        }
        return (
          (n.mutationObserverAvailable =
            void 0 !== window.MutationObserver ||
            void 0 !== window.WebKitMutationObserver ||
            void 0 !== window.MozMutationObserver),
          (n.getTree = hj.tryCatch(function (e, o) {
            var s;
            i && n.mutationObserverAvailable
              ? ((s = i.serializeTarget(document, !0, !0)),
                e(s.rootId, s.children))
              : (i = new t(document, {
                  initialize: function (t, i) {
                    e(t, i);
                  },
                  applyChanged: r,
                }));
            o && n.mutationObserverAvailable && a.push(o);
          }, "hj.treeMirror.manager.getTree")),
          (n.getMirroredDocument = hj.tryCatch(function (t) {
            o ||
              (o = new e(document.cloneNode(), {
                setAttribute:
                  hj.dataHjSuppressedAttributeHandler.wrapSetAttribute(
                    function (e, t, i) {
                      e.setAttribute(t, i);
                    }
                  ),
              })),
              n.getTree(function (e, i) {
                t(o.deserializeDocument(e, i, !0));
              });
          }, "hj.treeMirror.manager.getMirroredDocument")),
          n
        );
      }, "hj.treeMirror.manager")();
    }, "hj.treeMirror")();
  },
  function (e, t) {
    hj.tryCatch(function () {
      "use strict";
      var e = null;
      return (
        (hj.fingerprinter = function (e) {
          (this.options = this.extend(e, { sortPluginsFor: [/palemoon/i] })),
            (this.nativeForEach = Array.prototype.forEach),
            (this.nativeMap = Array.prototype.map);
        }),
        (hj.fingerprinter.prototype = {
          extend: function (e, t) {
            if (null == e) return t;
            for (var i in e) null != e[i] && t[i] !== e[i] && (t[i] = e[i]);
            return t;
          },
          log: function (e) {
            window.console && console.log(e);
          },
          get: function () {
            var t = [];
            return (
              null === e &&
                ((t = this.userAgentKey(t)),
                (t = this.languageKey(t)),
                (t = this.colorDepthKey(t)),
                (t = this.timezoneOffsetKey(t)),
                (t = this.sessionStorageKey(t)),
                (t = this.localStorageKey(t)),
                (t = this.indexedDbKey(t)),
                (t = this.addBehaviorKey(t)),
                (t = this.openDatabaseKey(t)),
                (t = this.cpuClassKey(t)),
                (t = this.platformKey(t)),
                (t = this.doNotTrackKey(t)),
                (t = this.pluginsKey(t)),
                (t = this.adBlockKey(t)),
                (t = this.hasLiedLanguagesKey(t)),
                (t = this.hasLiedResolutionKey(t)),
                (t = this.hasLiedOsKey(t)),
                (t = this.hasLiedBrowserKey(t)),
                (e = this.x64hash128(t.join("~~~"), 31))),
              e
            );
          },
          getAsNumber: function () {
            return parseInt(this.get().slice(-10), 16) / Math.pow(2, 40);
          },
          compareRatio: function (e, t) {
            return this.getAsNumber() * (t ? 100 : 1) <= e;
          },
          userAgentKey: function (e) {
            return e.push(navigator.userAgent), e;
          },
          languageKey: function (e) {
            return e.push(navigator.language), e;
          },
          colorDepthKey: function (e) {
            return e.push(screen.colorDepth), e;
          },
          screenResolutionKey: function (e) {
            return this.getScreenResolution(e);
          },
          getScreenResolution: function (e) {
            var t, i;
            return (
              void 0 !==
                (t = this.options.detectScreenOrientation
                  ? screen.height > screen.width
                    ? [screen.height, screen.width]
                    : [screen.width, screen.height]
                  : [screen.height, screen.width]) && e.push(t),
              screen.availWidth &&
                screen.availHeight &&
                (i = this.options.detectScreenOrientation
                  ? screen.availHeight > screen.availWidth
                    ? [screen.availHeight, screen.availWidth]
                    : [screen.availWidth, screen.availHeight]
                  : [screen.availHeight, screen.availWidth]),
              void 0 !== i && e.push(i),
              e
            );
          },
          timezoneOffsetKey: function (e) {
            return e.push(new Date(1979, 3, 13).getTimezoneOffset()), e;
          },
          sessionStorageKey: function (e) {
            return this.hasSessionStorage() && e.push("sessionStorageKey"), e;
          },
          localStorageKey: function (e) {
            return this.hasLocalStorage() && e.push("localStorageKey"), e;
          },
          indexedDbKey: function (e) {
            return this.hasIndexedDB() && e.push("indexedDbKey"), e;
          },
          addBehaviorKey: function (e) {
            return (
              document.body &&
                document.body.addBehavior &&
                e.push("addBehaviorKey"),
              e
            );
          },
          openDatabaseKey: function (e) {
            return window.openDatabase && e.push("openDatabase"), e;
          },
          cpuClassKey: function (e) {
            return e.push(this.getNavigatorCpuClass()), e;
          },
          platformKey: function (e) {
            return e.push(this.getNavigatorPlatform()), e;
          },
          doNotTrackKey: function (e) {
            return e.push(this.getDoNotTrack()), e;
          },
          adBlockKey: function (e) {
            return e.push(this.getAdBlock()), e;
          },
          hasLiedLanguagesKey: function (e) {
            return e.push(this.getHasLiedLanguages()), e;
          },
          hasLiedResolutionKey: function (e) {
            return e.push(this.getHasLiedResolution()), e;
          },
          hasLiedOsKey: function (e) {
            return e.push(this.getHasLiedOs()), e;
          },
          hasLiedBrowserKey: function (e) {
            return e.push(this.getHasLiedBrowser()), e;
          },
          pluginsKey: function (e) {
            return this.isIE() || e.push(this.getRegularPluginsString()), e;
          },
          getRegularPluginsString: function () {
            var e = [],
              t = ["Shockwave Flash"];
            if (void 0 === navigator.plugins) return "no-plugins";
            for (var i = 0, o = navigator.plugins.length; i < o; i++)
              t.indexOf(navigator.plugins[i].name) < 0 &&
                e.push(navigator.plugins[i]);
            return (
              this.pluginsShouldBeSorted() &&
                (e = e.sort(function (e, t) {
                  return e.name > t.name ? 1 : e.name < t.name ? -1 : 0;
                })),
              this.map(
                e,
                function (e) {
                  var t = this.map(e, function (e) {
                    return [e.type, e.suffixes].join("~");
                  }).join(",");
                  return [e.name, e.description, t].join("::");
                },
                this
              ).join(";")
            );
          },
          pluginsShouldBeSorted: function () {
            for (
              var e = !1, t = 0, i = this.options.sortPluginsFor.length;
              t < i;
              t++
            ) {
              var o = this.options.sortPluginsFor[t];
              if (navigator.userAgent.match(o)) {
                e = !0;
                break;
              }
            }
            return e;
          },
          hasSessionStorage: function () {
            try {
              return !!window.sessionStorage;
            } catch (e) {
              return !0;
            }
          },
          hasLocalStorage: function () {
            try {
              return !!window.localStorage;
            } catch (e) {
              return !0;
            }
          },
          hasIndexedDB: function () {
            return !!window.indexedDB;
          },
          getNavigatorCpuClass: function () {
            return navigator.cpuClass
              ? "navigatorCpuClass: " + navigator.cpuClass
              : "navigatorCpuClass: unknown";
          },
          getNavigatorPlatform: function () {
            return navigator.platform
              ? "navigatorPlatform: " + navigator.platform
              : "navigatorPlatform: unknown";
          },
          getDoNotTrack: function () {
            return navigator.doNotTrack
              ? "doNotTrack: " + navigator.doNotTrack
              : "doNotTrack: unknown";
          },
          getAdBlock: function () {
            var e = document.createElement("div");
            e.setAttribute("id", "ads");
            try {
              return (
                document.body.appendChild(e), !document.getElementById("ads")
              );
            } catch (e) {
              return !1;
            }
          },
          getHasLiedLanguages: function () {
            if (void 0 !== navigator.languages)
              try {
                if (
                  navigator.languages[0].substr(0, 2) !==
                  navigator.language.substr(0, 2)
                )
                  return !0;
              } catch (e) {
                return !0;
              }
            return !1;
          },
          getHasLiedResolution: function () {
            return (
              screen.width < screen.availWidth ||
              screen.height < screen.availHeight
            );
          },
          getHasLiedOs: function () {
            var e,
              t = navigator.userAgent,
              i = navigator.oscpu,
              o = navigator.platform;
            if (
              ((e =
                t.toLowerCase().indexOf("windows phone") >= 0
                  ? "Windows Phone"
                  : t.toLowerCase().indexOf("win") >= 0
                  ? "Windows"
                  : t.toLowerCase().indexOf("android") >= 0
                  ? "Android"
                  : t.toLowerCase().indexOf("linux") >= 0
                  ? "Linux"
                  : t.toLowerCase().indexOf("iPhone") >= 0 ||
                    t.toLowerCase().indexOf("iPad") >= 0
                  ? "iOS"
                  : t.toLowerCase().indexOf("mac") >= 0
                  ? "Mac"
                  : "Other"),
              ("ontouchstart" in window ||
                navigator.maxTouchPoints > 0 ||
                navigator.msMaxTouchPoints > 0) &&
                "Windows Phone" !== e &&
                "Android" !== e &&
                "iOS" !== e &&
                "Other" !== e)
            )
              return !0;
            if (void 0 !== i) {
              if (
                i.toLowerCase().indexOf("win") >= 0 &&
                "Windows" !== e &&
                "Windows Phone" !== e
              )
                return !0;
              if (
                i.toLowerCase().indexOf("linux") >= 0 &&
                "Linux" !== e &&
                "Android" !== e
              )
                return !0;
              if (
                i.toLowerCase().indexOf("mac") >= 0 &&
                "Mac" !== e &&
                "iOS" !== e
              )
                return !0;
              if (
                0 === i.toLowerCase().indexOf("win") &&
                0 === i.toLowerCase().indexOf("linux") &&
                i.toLowerCase().indexOf("mac") >= 0 &&
                "other" !== e
              )
                return !0;
            }
            return (
              (o.toLowerCase().indexOf("win") >= 0 &&
                "Windows" !== e &&
                "Windows Phone" !== e) ||
              ((o.toLowerCase().indexOf("linux") >= 0 ||
                o.toLowerCase().indexOf("android") >= 0 ||
                o.toLowerCase().indexOf("pike") >= 0) &&
                "Linux" !== e &&
                "Android" !== e) ||
              ((o.toLowerCase().indexOf("mac") >= 0 ||
                o.toLowerCase().indexOf("ipad") >= 0 ||
                o.toLowerCase().indexOf("ipod") >= 0 ||
                o.toLowerCase().indexOf("iphone") >= 0) &&
                "Mac" !== e &&
                "iOS" !== e) ||
              (0 === o.toLowerCase().indexOf("win") &&
                0 === o.toLowerCase().indexOf("linux") &&
                o.toLowerCase().indexOf("mac") >= 0 &&
                "other" !== e) ||
              (void 0 === navigator.plugins &&
                "Windows" !== e &&
                "Windows Phone" !== e)
            );
          },
          getHasLiedBrowser: function () {
            var e,
              t = navigator.userAgent,
              i = navigator.productSub;
            if (
              ("Chrome" ===
                (e =
                  t.toLowerCase().indexOf("firefox") >= 0
                    ? "Firefox"
                    : t.toLowerCase().indexOf("opera") >= 0 ||
                      t.toLowerCase().indexOf("opr") >= 0
                    ? "Opera"
                    : t.toLowerCase().indexOf("chrome") >= 0
                    ? "Chrome"
                    : t.toLowerCase().indexOf("safari") >= 0
                    ? "Safari"
                    : t.toLowerCase().indexOf("trident") >= 0
                    ? "Internet Explorer"
                    : "Other") ||
                "Safari" === e ||
                "Opera" === e) &&
              "20030107" !== i
            )
              return !0;
            var o,
              n = eval.toString().length;
            if (37 === n && "Safari" !== e && "Firefox" !== e && "Other" !== e)
              return !0;
            if (39 === n && "Internet Explorer" !== e && "Other" !== e)
              return !0;
            if (33 === n && "Chrome" !== e && "Opera" !== e && "Other" !== e)
              return !0;
            try {
              throw "a";
            } catch (e) {
              try {
                e.toSource(), (o = !0);
              } catch (e) {
                o = !1;
              }
            }
            return !(!o || "Firefox" === e || "Other" === e);
          },
          isIE: function () {
            return (
              "Microsoft Internet Explorer" === navigator.appName ||
              !(
                "Netscape" !== navigator.appName ||
                !/Trident/.test(navigator.userAgent)
              )
            );
          },
          each: function (e, t, i) {
            if (null !== e)
              if (this.nativeForEach && e.forEach === this.nativeForEach)
                e.forEach(t, i);
              else if (e.length === +e.length) {
                for (var o = 0, n = e.length; o < n; o++)
                  if (t.call(i, e[o], o, e) === {}) return;
              } else
                for (var a in e)
                  if (e.hasOwnProperty(a) && t.call(i, e[a], a, e) === {})
                    return;
          },
          map: function (e, t, i) {
            var o = [];
            return null == e
              ? o
              : this.nativeMap && e.map === this.nativeMap
              ? e.map(t, i)
              : (this.each(e, function (e, n, a) {
                  o[o.length] = t.call(i, e, n, a);
                }),
                o);
          },
          x64Add: function (e, t) {
            (e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]]),
              (t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]]);
            var i = [0, 0, 0, 0];
            return (
              (i[3] += e[3] + t[3]),
              (i[2] += i[3] >>> 16),
              (i[3] &= 65535),
              (i[2] += e[2] + t[2]),
              (i[1] += i[2] >>> 16),
              (i[2] &= 65535),
              (i[1] += e[1] + t[1]),
              (i[0] += i[1] >>> 16),
              (i[1] &= 65535),
              (i[0] += e[0] + t[0]),
              (i[0] &= 65535),
              [(i[0] << 16) | i[1], (i[2] << 16) | i[3]]
            );
          },
          x64Multiply: function (e, t) {
            (e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]]),
              (t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]]);
            var i = [0, 0, 0, 0];
            return (
              (i[3] += e[3] * t[3]),
              (i[2] += i[3] >>> 16),
              (i[3] &= 65535),
              (i[2] += e[2] * t[3]),
              (i[1] += i[2] >>> 16),
              (i[2] &= 65535),
              (i[2] += e[3] * t[2]),
              (i[1] += i[2] >>> 16),
              (i[2] &= 65535),
              (i[1] += e[1] * t[3]),
              (i[0] += i[1] >>> 16),
              (i[1] &= 65535),
              (i[1] += e[2] * t[2]),
              (i[0] += i[1] >>> 16),
              (i[1] &= 65535),
              (i[1] += e[3] * t[1]),
              (i[0] += i[1] >>> 16),
              (i[1] &= 65535),
              (i[0] += e[0] * t[3] + e[1] * t[2] + e[2] * t[1] + e[3] * t[0]),
              (i[0] &= 65535),
              [(i[0] << 16) | i[1], (i[2] << 16) | i[3]]
            );
          },
          x64Rotl: function (e, t) {
            return 32 === (t %= 64)
              ? [e[1], e[0]]
              : t < 32
              ? [
                  (e[0] << t) | (e[1] >>> (32 - t)),
                  (e[1] << t) | (e[0] >>> (32 - t)),
                ]
              : ((t -= 32),
                [
                  (e[1] << t) | (e[0] >>> (32 - t)),
                  (e[0] << t) | (e[1] >>> (32 - t)),
                ]);
          },
          x64LeftShift: function (e, t) {
            return 0 === (t %= 64)
              ? e
              : t < 32
              ? [(e[0] << t) | (e[1] >>> (32 - t)), e[1] << t]
              : [e[1] << (t - 32), 0];
          },
          x64Xor: function (e, t) {
            return [e[0] ^ t[0], e[1] ^ t[1]];
          },
          x64Fmix: function (e) {
            return (
              (e = this.x64Xor(e, [0, e[0] >>> 1])),
              (e = this.x64Multiply(e, [4283543511, 3981806797])),
              (e = this.x64Xor(e, [0, e[0] >>> 1])),
              (e = this.x64Multiply(e, [3301882366, 444984403])),
              (e = this.x64Xor(e, [0, e[0] >>> 1]))
            );
          },
          x64hash128: function (e, t) {
            t = t || 0;
            for (
              var i = (e = e || "").length % 16,
                o = e.length - i,
                n = [0, t],
                a = [0, t],
                r = [0, 0],
                s = [0, 0],
                d = [2277735313, 289559509],
                c = [1291169091, 658871167],
                l = 0;
              l < o;
              l += 16
            )
              (r = [
                (255 & e.charCodeAt(l + 4)) |
                  ((255 & e.charCodeAt(l + 5)) << 8) |
                  ((255 & e.charCodeAt(l + 6)) << 16) |
                  ((255 & e.charCodeAt(l + 7)) << 24),
                (255 & e.charCodeAt(l)) |
                  ((255 & e.charCodeAt(l + 1)) << 8) |
                  ((255 & e.charCodeAt(l + 2)) << 16) |
                  ((255 & e.charCodeAt(l + 3)) << 24),
              ]),
                (s = [
                  (255 & e.charCodeAt(l + 12)) |
                    ((255 & e.charCodeAt(l + 13)) << 8) |
                    ((255 & e.charCodeAt(l + 14)) << 16) |
                    ((255 & e.charCodeAt(l + 15)) << 24),
                  (255 & e.charCodeAt(l + 8)) |
                    ((255 & e.charCodeAt(l + 9)) << 8) |
                    ((255 & e.charCodeAt(l + 10)) << 16) |
                    ((255 & e.charCodeAt(l + 11)) << 24),
                ]),
                (r = this.x64Multiply(r, d)),
                (r = this.x64Rotl(r, 31)),
                (r = this.x64Multiply(r, c)),
                (n = this.x64Xor(n, r)),
                (n = this.x64Rotl(n, 27)),
                (n = this.x64Add(n, a)),
                (n = this.x64Add(this.x64Multiply(n, [0, 5]), [0, 1390208809])),
                (s = this.x64Multiply(s, c)),
                (s = this.x64Rotl(s, 33)),
                (s = this.x64Multiply(s, d)),
                (a = this.x64Xor(a, s)),
                (a = this.x64Rotl(a, 31)),
                (a = this.x64Add(a, n)),
                (a = this.x64Add(this.x64Multiply(a, [0, 5]), [0, 944331445]));
            switch (((r = [0, 0]), (s = [0, 0]), i)) {
              case 15:
                s = this.x64Xor(
                  s,
                  this.x64LeftShift([0, e.charCodeAt(l + 14)], 48)
                );
              case 14:
                s = this.x64Xor(
                  s,
                  this.x64LeftShift([0, e.charCodeAt(l + 13)], 40)
                );
              case 13:
                s = this.x64Xor(
                  s,
                  this.x64LeftShift([0, e.charCodeAt(l + 12)], 32)
                );
              case 12:
                s = this.x64Xor(
                  s,
                  this.x64LeftShift([0, e.charCodeAt(l + 11)], 24)
                );
              case 11:
                s = this.x64Xor(
                  s,
                  this.x64LeftShift([0, e.charCodeAt(l + 10)], 16)
                );
              case 10:
                s = this.x64Xor(
                  s,
                  this.x64LeftShift([0, e.charCodeAt(l + 9)], 8)
                );
              case 9:
                (s = this.x64Xor(s, [0, e.charCodeAt(l + 8)])),
                  (s = this.x64Multiply(s, c)),
                  (s = this.x64Rotl(s, 33)),
                  (s = this.x64Multiply(s, d)),
                  (a = this.x64Xor(a, s));
              case 8:
                r = this.x64Xor(
                  r,
                  this.x64LeftShift([0, e.charCodeAt(l + 7)], 56)
                );
              case 7:
                r = this.x64Xor(
                  r,
                  this.x64LeftShift([0, e.charCodeAt(l + 6)], 48)
                );
              case 6:
                r = this.x64Xor(
                  r,
                  this.x64LeftShift([0, e.charCodeAt(l + 5)], 40)
                );
              case 5:
                r = this.x64Xor(
                  r,
                  this.x64LeftShift([0, e.charCodeAt(l + 4)], 32)
                );
              case 4:
                r = this.x64Xor(
                  r,
                  this.x64LeftShift([0, e.charCodeAt(l + 3)], 24)
                );
              case 3:
                r = this.x64Xor(
                  r,
                  this.x64LeftShift([0, e.charCodeAt(l + 2)], 16)
                );
              case 2:
                r = this.x64Xor(
                  r,
                  this.x64LeftShift([0, e.charCodeAt(l + 1)], 8)
                );
              case 1:
                (r = this.x64Xor(r, [0, e.charCodeAt(l)])),
                  (r = this.x64Multiply(r, d)),
                  (r = this.x64Rotl(r, 31)),
                  (r = this.x64Multiply(r, c)),
                  (n = this.x64Xor(n, r));
            }
            return (
              (n = this.x64Xor(n, [0, e.length])),
              (a = this.x64Xor(a, [0, e.length])),
              (n = this.x64Add(n, a)),
              (a = this.x64Add(a, n)),
              (n = this.x64Fmix(n)),
              (a = this.x64Fmix(a)),
              (n = this.x64Add(n, a)),
              (a = this.x64Add(a, n)),
              ("00000000" + (n[0] >>> 0).toString(16)).slice(-8) +
                ("00000000" + (n[1] >>> 0).toString(16)).slice(-8) +
                ("00000000" + (a[0] >>> 0).toString(16)).slice(-8) +
                ("00000000" + (a[1] >>> 0).toString(16)).slice(-8)
            );
          },
        }),
        (hj.fingerprinter.VERSION = "0.7.1"),
        hj.fingerprinter
      );
    }, "fingerprinter")();
  },
  function (e, t) {
    var i;
    hj.tryCatch(
      ((i = window),
      void (hj.deviceDetection = {
        getDevice: (function (e, t) {
          null == t || t != t.window || document.documentElement;
          var i = "Tv Desktop Tablet Mobile".split(" "),
            o = function (e) {
              return e.match(
                /GoogleTV|SmartTV|Internet.TV|NetCast|NETTV|AppleTV|boxee|Kylo|Roku|DLNADOC|CE\-HTML/i
              )
                ? "tv"
                : e.match(/Xbox|PLAYSTATION.3|Wii/i)
                ? "tv"
                : e.match(/iPad/i) ||
                  (e.match(/tablet/i) && !e.match(/RX-34/i)) ||
                  e.match(/FOLIO/i)
                ? "tablet"
                : e.match(/Linux/i) &&
                  e.match(/Android/i) &&
                  !e.match(
                    /Fennec|mobi|HTC.Magic|HTCX06HT|Nexus.One|SC-02B|fone.945/i
                  )
                ? "tablet"
                : e.match(/Kindle/i) || (e.match(/Mac.OS/i) && e.match(/Silk/i))
                ? "tablet"
                : e.match(
                    /GT-P10|SC-01C|SHW-M180S|SGH-T849|SCH-I800|SHW-M180L|SPH-P100|SGH-I987|zt180|HTC(.Flyer|\_Flyer)|Sprint.ATP51|ViewPad7|pandigital(sprnova|nova)|Ideos.S7|Dell.Streak.7|Advent.Vega|A101IT|A70BHT|MID7015|Next2|nook/i
                  ) ||
                  (e.match(/MB511/i) && e.match(/RUTEM/i))
                ? "tablet"
                : e.match(
                    /BOLT|Fennec|Iris|Maemo|Minimo|Mobi|mowser|NetFront|Novarra|Prism|RX-34|Skyfire|Tear|XV6875|XV6975|Google.Wireless.Transcoder/i
                  )
                ? "mobile"
                : e.match(/Opera/i) &&
                  e.match(/Windows.NT.5/i) &&
                  e.match(
                    /HTC|Xda|Mini|Vario|SAMSUNG\-GT\-i8000|SAMSUNG\-SGH\-i9/i
                  )
                ? "mobile"
                : (e.match(/Windows.(NT|XP|ME|9)/) && !e.match(/Phone/i)) ||
                  e.match(/Win(9|.9|NT)/i)
                ? "desktop"
                : e.match(/Macintosh|PowerPC/i) && !e.match(/Silk/i)
                ? "desktop"
                : e.match(/Linux/i) && e.match(/X11/i)
                ? "desktop"
                : e.match(/Solaris|SunOS|BSD/i)
                ? "desktop"
                : e.match(
                    /Bot|Crawler|Spider|Yahoo|ia_archiver|Covario-IDS|findlinks|DataparkSearch|larbin|Mediapartners-Google|NG-Search|Snappy|Teoma|Jeeves|TinEye/i
                  ) && !e.match(/Mobile/i)
                ? "desktop"
                : "mobile";
            },
            n = o(
              t.navigator
                ? t.navigator.userAgent
                : t.request
                ? t.request.headers["user-agent"]
                : "No User-Agent Provided"
            ),
            a = function (e) {
              return n === e;
            },
            r = function () {
              var e = [].slice.call(arguments, 0);
              return (
                2 === e.length && n === e[0]
                  ? ((n = e[1]), s())
                  : 1 === e.length &&
                    "string" == typeof e[0] &&
                    ((n = e[0]), s()),
                n
              );
            };
          function s() {
            !(function () {
              for (var e = i.length; e--; )
                r["is" + i[e]] = a(i[e].toLowerCase());
            })();
          }
          return (r.is = a), (r.test = o), s(), r;
        })(0, i),
      })),
      "device-detection"
    );
  },
  function (e, t) {
    hj.tryCatch(function () {
      if (void 0 !== hj.scriptLoaded)
        return (
          (window.console = window.console || { warn: function () {} }),
          console.warn(
            "Hotjar Tracking Warning: Multiple Hotjar tracking codes were detected on this page. Tracking will not work as expected."
          ),
          hj.verifyInstall
            ? void hj.notification.show(
                "Hotjar installation invalid.",
                "It appears you have more than one Hotjar tracking code set up on this page. Hotjar cannot work properly if multiple Hotjar scripts are loaded concurrently. Please make sure you only install the one tracking code provided for this site.",
                "bad"
              )
            : void 0
        );
      var e, t, i;
      function o(e, t) {
        var i = a(
            (i = e[0]),
            (c = e[1]),
            (n = e[2]),
            (o = e[3]),
            t[0],
            7,
            -680876936
          ),
          o = a(o, i, c, n, t[1], 12, -389564586),
          n = a(n, o, i, c, t[2], 17, 606105819),
          c = a(c, n, o, i, t[3], 22, -1044525330);
        (i = a(i, c, n, o, t[4], 7, -176418897)),
          (o = a(o, i, c, n, t[5], 12, 1200080426)),
          (n = a(n, o, i, c, t[6], 17, -1473231341)),
          (c = a(c, n, o, i, t[7], 22, -45705983)),
          (i = a(i, c, n, o, t[8], 7, 1770035416)),
          (o = a(o, i, c, n, t[9], 12, -1958414417)),
          (n = a(n, o, i, c, t[10], 17, -42063)),
          (c = a(c, n, o, i, t[11], 22, -1990404162)),
          (i = a(i, c, n, o, t[12], 7, 1804603682)),
          (o = a(o, i, c, n, t[13], 12, -40341101)),
          (n = a(n, o, i, c, t[14], 17, -1502002290)),
          (i = r(
            i,
            (c = a(c, n, o, i, t[15], 22, 1236535329)),
            n,
            o,
            t[1],
            5,
            -165796510
          )),
          (o = r(o, i, c, n, t[6], 9, -1069501632)),
          (n = r(n, o, i, c, t[11], 14, 643717713)),
          (c = r(c, n, o, i, t[0], 20, -373897302)),
          (i = r(i, c, n, o, t[5], 5, -701558691)),
          (o = r(o, i, c, n, t[10], 9, 38016083)),
          (n = r(n, o, i, c, t[15], 14, -660478335)),
          (c = r(c, n, o, i, t[4], 20, -405537848)),
          (i = r(i, c, n, o, t[9], 5, 568446438)),
          (o = r(o, i, c, n, t[14], 9, -1019803690)),
          (n = r(n, o, i, c, t[3], 14, -187363961)),
          (c = r(c, n, o, i, t[8], 20, 1163531501)),
          (i = r(i, c, n, o, t[13], 5, -1444681467)),
          (o = r(o, i, c, n, t[2], 9, -51403784)),
          (n = r(n, o, i, c, t[7], 14, 1735328473)),
          (i = s(
            i,
            (c = r(c, n, o, i, t[12], 20, -1926607734)),
            n,
            o,
            t[5],
            4,
            -378558
          )),
          (o = s(o, i, c, n, t[8], 11, -2022574463)),
          (n = s(n, o, i, c, t[11], 16, 1839030562)),
          (c = s(c, n, o, i, t[14], 23, -35309556)),
          (i = s(i, c, n, o, t[1], 4, -1530992060)),
          (o = s(o, i, c, n, t[4], 11, 1272893353)),
          (n = s(n, o, i, c, t[7], 16, -155497632)),
          (c = s(c, n, o, i, t[10], 23, -1094730640)),
          (i = s(i, c, n, o, t[13], 4, 681279174)),
          (o = s(o, i, c, n, t[0], 11, -358537222)),
          (n = s(n, o, i, c, t[3], 16, -722521979)),
          (c = s(c, n, o, i, t[6], 23, 76029189)),
          (i = s(i, c, n, o, t[9], 4, -640364487)),
          (o = s(o, i, c, n, t[12], 11, -421815835)),
          (n = s(n, o, i, c, t[15], 16, 530742520)),
          (i = d(
            i,
            (c = s(c, n, o, i, t[2], 23, -995338651)),
            n,
            o,
            t[0],
            6,
            -198630844
          )),
          (o = d(o, i, c, n, t[7], 10, 1126891415)),
          (n = d(n, o, i, c, t[14], 15, -1416354905)),
          (c = d(c, n, o, i, t[5], 21, -57434055)),
          (i = d(i, c, n, o, t[12], 6, 1700485571)),
          (o = d(o, i, c, n, t[3], 10, -1894986606)),
          (n = d(n, o, i, c, t[10], 15, -1051523)),
          (c = d(c, n, o, i, t[1], 21, -2054922799)),
          (i = d(i, c, n, o, t[8], 6, 1873313359)),
          (o = d(o, i, c, n, t[15], 10, -30611744)),
          (n = d(n, o, i, c, t[6], 15, -1560198380)),
          (c = d(c, n, o, i, t[13], 21, 1309151649)),
          (i = d(i, c, n, o, t[4], 6, -145523070)),
          (o = d(o, i, c, n, t[11], 10, -1120210379)),
          (n = d(n, o, i, c, t[2], 15, 718787259)),
          (c = d(c, n, o, i, t[9], 21, -343485551));
        (e[0] = h(i, e[0])),
          (e[1] = h(c, e[1])),
          (e[2] = h(n, e[2])),
          (e[3] = h(o, e[3]));
      }
      function n(e, t, i, o, n, a) {
        return (t = h(h(t, e), h(o, a))), h((t << n) | (t >>> (32 - n)), i);
      }
      function a(e, t, i, o, a, r, s) {
        return n((t & i) | (~t & o), e, t, a, r, s);
      }
      function r(e, t, i, o, a, r, s) {
        return n((t & o) | (i & ~o), e, t, a, r, s);
      }
      function s(e, t, i, o, a, r, s) {
        return n(t ^ i ^ o, e, t, a, r, s);
      }
      function d(e, t, i, o, a, r, s) {
        return n(i ^ (t | ~o), e, t, a, r, s);
      }
      function c(e) {
        var t,
          i = [];
        for (t = 0; 64 > t; t += 4)
          i[t >> 2] =
            e.charCodeAt(t) +
            (e.charCodeAt(t + 1) << 8) +
            (e.charCodeAt(t + 2) << 16) +
            (e.charCodeAt(t + 3) << 24);
        return i;
      }
      (window.hj =
        window.hj ||
        function () {
          (window.hj.q = window.hj.q || []).push(arguments);
        }),
        (window.hj.q = window.hj.q || []),
        (hj.hostname = hj.host.split(":")[0]),
        (hj.port = 443),
        (hj.apiUrlBase = "https://" + hj.host + "/api/v1"),
        (hj.includedInSample = !1),
        (hj.isPreview = Boolean(_hjSettings.preview)),
        (hj.settings = {}),
        (hj.userDeviceType = null),
        (hj.optOut = !1),
        (hj.windowSize = null),
        (hj.maxRecordingTagLength = 50),
        (hj.locationListener =
          ((i = "manual"),
          ((t = {}).setMode = hj.tryCatch(function (t) {
            (i = t),
              e && clearInterval(e),
              "automatic_with_fragments" === i
                ? (e = setInterval(function () {
                    var e =
                      location.origin +
                      location.pathname +
                      location.search +
                      location.hash;
                    hj.currentUrl && hj.currentUrl != e && hj._init.reinit(e);
                  }, 200))
                : "automatic" === i &&
                  (e = setInterval(function () {
                    var e =
                      location.origin + location.pathname + location.search;
                    hj.currentUrl &&
                      hj.currentUrl.split("#")[0] != e &&
                      hj._init.reinit(e);
                  }, 200));
          })),
          t));
      var l = "0123456789abcdef".split("");
      function p(e) {
        for (var t = "", i = 0; 4 > i; i++)
          t += l[(e >> (8 * i + 4)) & 15] + l[(e >> (8 * i)) & 15];
        return t;
      }
      function h(e, t) {
        return (e + t) & 4294967295;
      }
      (hj.encodeAsUtf8 = function (e) {
        return unescape(encodeURIComponent(e));
      }),
        (hj.md5 = function (e, t) {
          var i = "";
          try {
            i = (function (e) {
              for (var t = 0; t < e.length; t++) e[t] = p(e[t]);
              return e.join("");
            })(
              (function (e) {
                var t,
                  i = e.length,
                  n = [1732584193, -271733879, -1732584194, 271733878];
                for (t = 64; t <= e.length; t += 64)
                  o(n, c(e.substring(t - 64, t)));
                e = e.substring(t - 64);
                var a = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                for (t = 0; t < e.length; t++)
                  a[t >> 2] |= e.charCodeAt(t) << (t % 4 << 3);
                if (((a[t >> 2] |= 128 << (t % 4 << 3)), 55 < t))
                  for (o(n, a), t = 0; 16 > t; t++) a[t] = 0;
                return (a[14] = 8 * i), o(n, a), n;
              })(hj.encodeAsUtf8(e))
            );
          } catch (e) {
            t ? (i = "") : hj.exceptions.log(e, "md5");
          }
          return i;
        }),
        (hj.b64EncodeUnicode = function (e) {
          return btoa(hj.encodeAsUtf8(e));
        }),
        "5d41402abc4b2a76b9719d911017c592" != hj.md5("hello") &&
          (h = function (e, t) {
            var i = (65535 & e) + (65535 & t);
            return (((e >> 16) + (t >> 16) + (i >> 16)) << 16) | (65535 & i);
          }),
        (hj.time = (function () {
          var e = {},
            t = new Date().getTime();
          return (
            (e.reset = function () {
              t = new Date().getTime();
            }),
            (e.getNow = function () {
              return new Date().getTime() - t;
            }),
            e
          );
        })()),
        (hj.debug = (function () {
          var e = {
            on: function (e) {
              (_hjSettings.hjdebug = !0), e && hj.cookie.set("hjDebug", !0);
            },
            off: function () {
              (_hjSettings.hjdebug = !1), hj.cookie.set("hjDebug", !1);
            },
            emit: function (e, t) {
              "undefined" != typeof _hjEmitters &&
                _hjEmitters.includes &&
                _hjEmitters.includes(e) &&
                window.postMessage(
                  { data: t, message: "hjDebug", type: e },
                  "*"
                );
            },
          };
          return e;
        })()),
        (hj.url = (function () {
          var e = {};
          return (
            (e.getParameter = hj.tryCatch(function (e) {
              var t,
                i,
                o = [];
              for (
                t = new RegExp(
                  "[^?&]?" +
                    e.replace(/\[/, "\\[").replace(/]/, "\\]") +
                    "=([^&]+)",
                  "g"
                );
                (i = t.exec(location.search));

              )
                o.push(hj.url.tryDecodeURIComponent(i[1]));
              switch (o.length) {
                case 0:
                  return "";
                case 1:
                  return o[0];
                default:
                  return o;
              }
            }, "common")),
            (e.tryDecodeURIComponent = hj.tryCatch(function (e) {
              try {
                return decodeURIComponent(e);
              } catch (t) {
                return e;
              }
            }, "common")),
            (e.getUrlFromString = hj.tryCatch(function (e) {
              return (
                (e = e || window.location.href).startsWith("http") ||
                  (e.startsWith("/") || (e = "/" + e),
                  (e =
                    location.protocol +
                    "//" +
                    location.hostname +
                    ("" != location.port ? ":" + location.port : "") +
                    e)),
                e
              );
            }, "common")),
            e
          );
        })()),
        (hj.cookie = (function () {
          var e = {};
          return (
            (e.get = hj.tryCatch(function (e) {
              var t = new RegExp("(?:^|; )" + e + "=([^;]*)").exec(
                document.cookie
              );
              return t ? t[1] : null;
            }, "common")),
            (e.set = hj.tryCatch(function (e, t, i) {
              var o = new Date(),
                n = i || 365,
                a = e + "=" + t + "; path=/; ";
              0 === i ||
                (o.setTime(o.getTime() + 24 * n * 60 * 60 * 1e3),
                (a += "expires=" + o.toUTCString())),
                (document.cookie = a);
            }, "common")),
            (e.add = hj.tryCatch(function (e, t) {
              var i = hj.cookie.get(e);
              (i = i ? i.split(",") : []),
                hj.hq.inArray(t.toString(), i) ||
                  (i.push(t), hj.cookie.set(e, i.join(",")));
            }, "common")),
            (e.find = hj.tryCatch(function (e, t) {
              var i,
                o = hj.cookie.get(e);
              for (o = o ? o.split(",") : [], i = 0; i < o.length; i++)
                if (t.toString() === o[i]) return !0;
              return !1;
            }, "common")),
            e
          );
        })()),
        (hj.log = (function () {
          var e = {},
            t = !1,
            i = "",
            o = {
              init: "#6600cc",
              recording: "#c00000",
              heatmap: "#c00000",
              forms: "#c00000",
              tester: "#009900",
              survey: "#009900",
              poll: "#009900",
              integration: "#2a9072",
              events: "#ffc000",
              event: "#ffc000",
              property: "#ff33cc",
              deferredpagecontent: "#7c7c7c",
              websocket: "#0dc0ff",
              data: "#009bd2",
              command: "#0079a4",
              visitdata: "#00668a",
              dataqueue: "#00445c",
              targeting: "#00ee00",
              rendering: "#bd00ea",
            };
          return (
            (e.init = function () {
              void 0 === window.console &&
                (window.console = {
                  debug: function () {},
                  trace: function () {},
                  log: function () {},
                  info: function () {},
                  warn: function () {},
                  error: function () {},
                });
            }),
            (e.debug = function (n, a, r) {
              var s = (a && o[a.toLowerCase()]) || "#333";
              i != n && t && (console.groupEnd(), (t = !1)),
                (i = n),
                _hjSettings.hjdebug &&
                  ("object" == typeof n
                    ? hj.hq.each(n, function (t, i) {
                        e.debug(t + ": " + i, a, null);
                      })
                    : ((n =
                        a && "string" == typeof n
                          ? a.toUpperCase() + ": " + n
                          : n),
                      (n =
                        "%c" +
                        new Date()
                          .toTimeString()
                          .replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1") +
                        ":%c " +
                        n),
                      r
                        ? (t ||
                            (console.groupCollapsed(
                              n + ":",
                              "color: #999;",
                              "color: " + s + ";"
                            ),
                            (t = !0)),
                          console.log(r))
                        : console.log(n, "color: #999;", "color: " + s + ";")));
            }),
            (e.info = function (e) {
              console.log("%c" + e, "color: #006EFF");
            }),
            (e.warn = function (e) {
              console.log("%c" + e, "color: #E8910C");
            }),
            (e.error = function (e) {
              console.error("Hotjar error: " + e);
            }),
            e
          );
        })()),
        (hj.loader = (function () {
          var e = {},
            t = [];
          return (
            (e.getModules = hj.tryCatch(function () {
              return t;
            }, "common")),
            (e.registerModule = hj.tryCatch(function (e, i, o) {
              t.push({ name: e, module: i, nonTracking: void 0 !== o && o });
            }, "common")),
            (e.loadScripts = hj.tryCatch(function (e, t) {
              var i,
                o = 0,
                n = {};
              function a(i) {
                (o += 1),
                  hj.log.debug("Script loaded: " + o + " (" + i + ")"),
                  o === e.length && hj.tryCatch(t, "URL")();
              }
              for (
                0 === e.length && hj.tryCatch(t, "URL")(), i = 0;
                i < e.length;
                i++
              )
                (n[i] = document.createElement("script")),
                  (n[i].src = e[i]),
                  (n[i].onload = (function (e) {
                    return function () {
                      hj.tryCatch(a, "URL")(n[e].src);
                    };
                  })(i)),
                  (n[i].onreadystatechange = (function (e) {
                    return function () {
                      ("complete" !== this.readyState &&
                        "loaded" !== this.readyState) ||
                        (hj.log.debug(
                          this.readyState +
                            ": " +
                            n[e].src +
                            " (IE onreadystatechange)"
                        ),
                        (n[e].onreadystatechange = null),
                        a(n[e].src));
                    };
                  })(i)),
                  document.getElementsByTagName("head")[0].appendChild(n[i]);
            }, "common")),
            (e.loadSettings = hj.tryCatch(function (e) {
              hj.isPreview
                ? hj.tryCatch(e, "Loader")()
                : void 0 !== window.hjSiteSettings
                ? hj.tryCatch(e, "Loader")(window.hjSiteSettings)
                : hj.ajax.get(
                    hj.apiUrlBase + "/client/sites/" + hj.settings.site_id,
                    hj.tryCatch(e, "common")
                  );
            }, "common")),
            e
          );
        })()),
        (hj.targeting = (function () {
          var e = {};
          function t(t, i) {
            var o;
            return e.matchOperations[t.match_operation]
              ? ((t.rule_type = t.rule_type || t.component),
                (o = e.matchOperations[t.match_operation](t, i)).error
                  ? (hj.exceptions.log(
                      {
                        message:
                          'Targeting error - "' +
                          t.match_operation +
                          " - " +
                          o.error,
                        stacktrace: "",
                      },
                      "common.targeting.matchPatternWithRule"
                    ),
                    !1)
                  : ("url" !== t.component && t.negate && (o = !o),
                    (function (e, t, i) {
                      var o = i ? "Match " : "No Match ";
                      !i ||
                        ("url" !== e.component && "device" !== e.component) ||
                        ((o +=
                          e.component +
                          "|" +
                          e.match_operation +
                          "|" +
                          e.pattern +
                          (e.negate ? " [NEGATE]" : "")),
                        hj.log.debug(o, "targeting"));
                      ("attribute" !== e.component &&
                        "event" !== e.component) ||
                        ((o +=
                          e.component +
                          "|" +
                          e.name +
                          " (" +
                          e.rule_type +
                          ")|" +
                          e.match_operation +
                          "|" +
                          e.pattern +
                          "|compared with: " +
                          t +
                          (e.negate ? " [NEGATE]" : "")),
                        hj.log.debug(o, "targeting"));
                    })(t, i, o),
                    o))
              : (hj.exceptions.log(
                  {
                    message:
                      'Targeting error - "' +
                      t.match_operation +
                      '" match operation does not exist.',
                    stacktrace: "",
                  },
                  "common.targeting.matchPatternWithRule"
                ),
                !1);
          }
          function i(e) {
            var i = !1,
              o = hj.utils.deviceType();
            return (
              (i =
                0 === e.length ||
                3 === e.length ||
                e.some(function (e) {
                  return t(e, o);
                }))
                ? hj.log.debug("Device match found", "targeting")
                : hj.log.debug("No device match found", "targeting"),
              i
            );
          }
          function o(e, i) {
            var o,
              n = !1,
              a = !1,
              r = !1;
            if (0 === e.length)
              return (
                hj.log.debug("No URL targeting rules set", "targeting"), !1
              );
            for (var s = 0; s < e.length; s += 1)
              if (
                ((n = t((o = e[s]), i)) && !o.negate && (r = !0), n && o.negate)
              ) {
                a = !0;
                break;
              }
            return (
              (n = r && !a)
                ? hj.log.debug(
                    "URL match found without any negate rules",
                    "targeting"
                  )
                : a
                ? hj.log.debug("Negate URL rule match found", "targeting")
                : hj.log.debug("No URL match found", "targeting"),
              n
            );
          }
          function n(e, i, o, n) {
            var a = n;
            e.length &&
              (a = function () {
                var i, o, a;
                (o = (a = (i = e).every(function (e) {
                  return t(e, hj.user.get(e.name));
                }))
                  ? 0 === i.length
                    ? "No specific user attribute targeting rules set."
                    : "All user attributes matched."
                  : "User attributes set do not match current visitor."),
                  hj.log.debug(o, "targeting"),
                  a && n();
              });
            for (var r = 0; r < i.length; r += 1)
              hj.event.listen(["trigger:" + i[r].pattern], a);
            e.length && o && hj.event.listen(["updated-user-properties"], a);
          }
          function a(e) {
            return e
              .toLowerCase()
              .split("#")[0]
              .split("?")[0]
              .replace("http://www.", "")
              .replace("https://www.", "")
              .replace("http://", "")
              .replace("https://", "")
              .replace(/\/$/, "");
          }
          function r(e, t) {
            return (
              isNaN(e) ||
              isNaN(t) ||
              "" === t ||
              null === t ||
              "boolean" == typeof t ||
              void 0 === t
            );
          }
          return (
            (e.matchRules = hj.tryCatch(function (e, t, a) {
              for (
                var r,
                  s = {
                    device: { rules: [], isMatch: null, doMatch: i },
                    url: { rules: [], isMatch: null, doMatch: o },
                    attribute: { rules: [] },
                    trigger: { rules: [] },
                  },
                  d = 0;
                d < e.length;
                d += 1
              )
                s[e[d].component]
                  ? s[e[d].component].rules.push(e[d])
                  : hj.exceptions.log(
                      {
                        message:
                          'Targeting error - "' +
                          s[e[d].component] +
                          '" targeting component is not supported.',
                        stacktrace: "",
                      },
                      "common.targeting.matchRules"
                    );
              return (
                hj.log.debug("-- Matching rules for new item --"),
                (s.device.isMatch = s.device.doMatch(s.device.rules)),
                (s.url.isMatch = s.url.doMatch(s.url.rules, t)),
                (r =
                  s.device.isMatch &&
                  s.url.isMatch &&
                  0 === s.attribute.rules.length),
                s.device.isMatch &&
                  (s.attribute.rules.length || s.trigger.rules.length) &&
                  (hj.log.debug(
                    "Setting up targeting listeners for trigger and attribute rules",
                    "targeting"
                  ),
                  n(s.attribute.rules, s.trigger.rules, s.url.isMatch, a)),
                r && a && a(),
                r
              );
            }, "common.targeting.matchRules")),
            (e.matchOperations = {
              exact: function (e, t) {
                return "string" === e.rule_type
                  ? t.toLowerCase() === e.pattern.toLowerCase()
                  : "boolean" === e.rule_type
                  ? ((e.pattern = "true" === e.pattern), t === e.pattern)
                  : t === e.pattern;
              },
              starts_with: function (e, t) {
                return 0 === (t = t || "").indexOf(e.pattern);
              },
              ends_with: function (e, t) {
                var i =
                  t.length - e.pattern.length == -1
                    ? 0
                    : t.length - e.pattern.length;
                return t.substring(i, t.length) === e.pattern;
              },
              contains: function (e, t) {
                return -1 !== (t = t || "").indexOf(e.pattern);
              },
              regex: function (e, t) {
                return new RegExp(e.pattern).test(t);
              },
              simple: function (e, t) {
                return a(t) === a(e.pattern);
              },
              greater_than: function (e, t) {
                return r(e.pattern, t)
                  ? { error: "Cannot compare non-numeric values." }
                  : Number(t) > Number(e.pattern);
              },
              less_than: function (e, t) {
                return r(e.pattern, t)
                  ? { error: "Cannot compare non-numeric values." }
                  : Number(t) < Number(e.pattern);
              },
              unknown: function (e, t) {
                return (
                  0 !== (t = "string" == typeof t ? t.trim() : t) &&
                  !1 !== t &&
                  !t
                );
              },
              exact_date: function (e, t) {
                var i;
                return r(e.pattern, t)
                  ? { error: "Cannot compare dates. Values are not numeric." }
                  : ((i = new Date(1e3 * e.pattern)),
                    (t = new Date(1e3 * t)).toDateString() ===
                      i.toDateString());
              },
              exact_days_ago: function (e, t) {
                var i,
                  o = new Date();
                return r(e.pattern, t)
                  ? { error: "Cannot compare dates. Values are not numeric." }
                  : ((i = o.setDate(o.getDate() - Number(e.pattern))),
                    (i = new Date(i)),
                    (t = new Date(1e3 * t)).toDateString() ===
                      i.toDateString());
              },
              more_than_days_ago: function (e, t) {
                var i,
                  o = new Date();
                return r(e.pattern, t)
                  ? { error: "Cannot compare dates. Values are not numeric." }
                  : ((i = o.getTime() / 1e3),
                    t <= (i -= 86400 * (Number(e.pattern) + 1)));
              },
              less_than_days_ago: function (t, i) {
                var o,
                  n = new Date();
                return r(t.pattern, i)
                  ? { error: "Cannot compare dates. Values are not numeric." }
                  : 0 === Number(t.pattern)
                  ? e.matchOperations.exact_days_ago(t, i)
                  : ((o = n.getTime() / 1e3),
                    i >= (o -= 86400 * Number(t.pattern)));
              },
            }),
            e
          );
        })()),
        (hj.utils = (function () {
          var e = {};
          return (
            (e.ieVersion = hj.tryCatch(function (e) {
              var t = e || navigator.userAgent;
              return t.indexOf("MSIE ") > 0
                ? document.all && !document.compatMode
                  ? 5
                  : document.all && !window.XMLHttpRequest
                  ? 6
                  : document.all && !document.querySelector
                  ? 7
                  : document.all && !document.addEventListener
                  ? 8
                  : document.all && !window.atob
                  ? 9
                  : 10
                : -1 !== t.indexOf("Trident/")
                ? 11
                : -1 !== t.indexOf("Edge/")
                ? 12
                : "notIE";
            }, "common")),
            (e.isFirefox = hj.tryCatch(function (e) {
              return (e = e || navigator.userAgent).indexOf("Firefox") > -1;
            }, "common")),
            (e.isSafari = hj.tryCatch(function (e) {
              return (
                (e = e || navigator.userAgent).indexOf("Safari") > -1 &&
                -1 === e.indexOf("Chrome")
              );
            }, "common")),
            (e.shuffle = hj.tryCatch(function (e) {
              var t, i, o;
              for (t = e.length - 1; t > 0; t -= 1)
                (i = Math.floor(Math.random() * (t + 1))),
                  (o = e[t]),
                  (e[t] = e[i]),
                  (e[i] = o);
              return e;
            }, "common")),
            (e.uuid4 = hj.tryCatch(function () {
              return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
                /[xy]/g,
                function (e) {
                  var t = (16 * Math.random()) | 0;
                  return ("x" == e ? t : (3 & t) | 8).toString(16);
                }
              );
            }, "common")),
            (e.validateEmail = hj.tryCatch(function (e) {
              return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                e
              );
            }, "common")),
            (e.deviceType = hj.tryCatch(function () {
              return (
                hj.userDeviceType ||
                  ((hj.userDeviceType = hj.deviceDetection.getDevice()),
                  "mobile" === hj.userDeviceType &&
                    (hj.userDeviceType = "phone")),
                hj.userDeviceType
              );
            }, "common")),
            e
          );
        })()),
        (hj.rendering = (function () {
          var e = [],
            t = {},
            i = {};
          function o(e, t) {
            hj.tryCatch(t, "Rendering")(e);
          }
          function n(e, t) {
            hj.widgetDelay.set(function () {
              hj.tryCatch(t, "Rendering")(e);
            }, 1e3 * e.display_delay);
          }
          function a(t, i, o) {
            var n = hj.hq(document),
              a = hj.hq(window),
              r = [];
            function s() {
              hj.tryCatch(i, "Rendering")(t),
                n.off("mousemove." + o),
                n.off("mouseout." + o);
            }
            e.push(o),
              n.off("mousemove." + o),
              n.off("mouseout." + o),
              n.on(
                "mousemove." + o,
                hj.tryCatch(function (e) {
                  r.push({ x: e.clientX, y: e.clientY }),
                    r.length > 2 &&
                      (r[1].x === r[2].x && r[1].y === r[2].y
                        ? r.pop()
                        : r.shift());
                }, "Rendering")
              ),
              n.on(
                "mouseout." + o,
                hj.tryCatch(function (e) {
                  var t, i, o, n, d;
                  (e.relatedTarget &&
                    (e.relatedTarget === this ||
                      this.compareDocumentPosition(e.relatedTarget) &
                        Node.DOCUMENT_POSITION_CONTAINED_BY)) ||
                    ((t = e.clientY),
                    (n = r[1]),
                    (d = r[0]),
                    (t |= 0),
                    void 0 !== n &&
                      (n.y >= d.y ||
                        t > 0 ||
                        (d.x === n.x && s(),
                        (i = (d.y - n.y) / (d.x - n.x)),
                        (o = -(d.y - i * d.x) / i) > 0 &&
                          o < a.width() &&
                          s())));
                }, "Rendering")
              );
          }
          function r(e, t, i) {
            var o = hj.hq(document),
              n = hj.hq(window);
            n.on(
              "scroll." + i,
              hj.tryCatch(function () {
                var a = o.height();
                (o.scrollTop() + hj.ui.getWindowSize().height) / a >= 0.5 &&
                  (n.off("scroll." + i), t(e));
              }, "Rendering")
            );
          }
          function s(e) {
            return (e = (e = e.replace(
              /(\b(https?):\/\/[-A-Z0-9+&amp;@#\/%?=~_|!:,.;]*[-A-Z0-9+&amp;@#\/%=~_|])/gi,
              '<a href="$1" target="_blank">$1</a>'
            )).replace(
              /(^|[^\/])(www\.[\S]+(\b|$))/gim,
              '$1<a href="http://$2" target="_blank">$2</a>'
            ));
          }
          (t.clearAllAbandonEvents = hj.tryCatch(function () {
            e.forEach(function (e) {
              hj.log.debug("Removing abandon events for " + e, "rendering"),
                hj.hq(document).off("mousemove." + e),
                hj.hq(document).off("mouseout." + e);
            }),
              (e = []);
          }, "common")),
            (t.renderTemplate = hj.tryCatch(function (e, o) {
              var n = i[e];
              if (!n) {
                var a =
                  "var pieces=[],print=function(){pieces.push.apply(pieces,arguments);};with(obj){pieces.push('" +
                  e
                    .replace(/[\r\t\n]/g, " ")
                    .replace(/'(?=[^%]*%>)/g, "\t")
                    .split("'")
                    .join("\\'")
                    .split("\t")
                    .join("'")
                    .replace(/<%=(.+?)%>/g, "',$1,'")
                    .split("<%")
                    .join("');")
                    .split("%>")
                    .join("pieces.push('") +
                  "');}return pieces.join('');";
                (n = new Function("obj", a)), (i[e] = n);
              }
              return n(
                (function e(i) {
                  var o = Array.isArray(i) ? [] : {};
                  for (var n in i) {
                    var a;
                    i.hasOwnProperty(n) &&
                      ("object" == typeof (a = i[n])
                        ? a instanceof hj.rendering.TrustedString
                          ? (o[n] = a.value)
                          : (o[n] = e(a))
                        : (o[n] =
                            "string" == typeof a ? s(t.escapeHtml(a)) : i[n]));
                  }
                  return o;
                })(o)
              );
            }, "common")),
            (t.addToDom = hj.tryCatch(function (e, t) {
              if (!e) throw Error("container id not defined");
              if (!t)
                throw Error(
                  "cannot append html to container #" +
                    e +
                    ", html not defined."
                );
              return (
                hj.hq("#" + e).remove(),
                hj.hq("body").append(t),
                hj.hq("#" + e + ">div")
              );
            }, "common.addToDom")),
            (t.TrustedString = function (e) {
              this.value = e;
            }),
            (t.callAccordingToCondition = hj.tryCatch(function (e, t, i) {
              var s = { immediate: o, delay: n, abandon: a, scroll: r }[
                e.display_condition
              ];
              if (
                (hj.log.debug(
                  "Calling active item (" + t + "): " + e.display_condition,
                  "rendering"
                ),
                !s)
              )
                throw new Error(
                  'Unhandled display condition: "' + e.display_condition + '"'
                );
              var d = !0;
              void 0 === e.targeting_percentage ||
                hj.isPreview ||
                (d = new hj.fingerprinter().compareRatio(
                  e.targeting_percentage,
                  !0
                )),
                d
                  ? hj.tryCatch(s, "Rendering")(e, i, t)
                  : hj.log.debug(
                      "Fingerprinter not in targeting percentage. Widget will not render.",
                      "rendering"
                    );
            }, "common"));
          var d = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
          };
          return (
            (t.escapeHtml = function (e) {
              return e
                .replace(/&(?!(amp|lt|gt|quot|#39);)/g, function (e) {
                  return d[e];
                })
                .replace(/[<>"']/g, function (e) {
                  return d[e];
                });
            }),
            t
          );
        })()),
        (hj.survey = hj.tryCatch(function () {
          var e = {
            ctrl: void 0,
            data: void 0,
            model: {},
            activeLanguageDirection: "ltr",
          };
          return e;
        }, "common")()),
        (hj.ui = (function () {
          var e = {};
          return (
            (e.getWindowSize = hj.tryCatch(function () {
              var e = (function () {
                  try {
                    return window.self !== window.top;
                  } catch (e) {
                    return !0;
                  }
                })(),
                t = {
                  width:
                    !e && window.screen
                      ? window.screen.width
                      : document.body.clientWidth,
                  height:
                    !e && window.screen
                      ? window.screen.height
                      : document.body.clientHeight,
                };
              return {
                width:
                  window.innerWidth ||
                  document.documentElement.clientWidth ||
                  t.width,
                height:
                  window.innerHeight ||
                  document.documentElement.clientHeight ||
                  t.height,
              };
            }, "common")),
            (e.getDocumentSize = hj.tryCatch(function () {
              var t, i;
              if (
                document &&
                document.documentElement &&
                document.documentElement.clientWidth
              )
                (t = document.documentElement.clientWidth),
                  (i = document.documentElement.clientHeight);
              else {
                var o = e.getWindowSize();
                (t = o.width), (i = o.height);
              }
              return { width: t, height: i };
            }, "common")),
            (e.getScrollPosition = hj.tryCatch(function (e) {
              return (
                (e = e || window),
                { left: hj.hq(e).scrollLeft(), top: hj.hq(e).scrollTop() }
              );
            }, "common")),
            (e.getBottomAsPercentage = hj.tryCatch(function () {
              var e = parseInt(
                (1e3 *
                  (hj.hq(window).scrollTop() + hj.ui.getWindowSize().height)) /
                  hj.hq(document).height(),
                10
              );
              return Math.min(1e3, e);
            }, "common")),
            (e.disableScrolling = hj.tryCatch(function (e) {
              var t = hj.ui.getScrollPosition();
              hj.hq(document).on(
                "scroll.hotjarDisable resize.hotjarDisable mousewheel.hotjarDisable DOMMouseScroll.hotjarDisable touchmove.hotjarDisable",
                hj.tryCatch(function (i) {
                  i.preventDefault(), window.scrollTo(t.left, t.top), e && e();
                }, "common")
              );
            }, "common")),
            (e.enableScrolling = hj.tryCatch(function () {
              hj.hq(document).off("scroll.hotjarDisable"),
                hj.hq(document).off("resize.hotjarDisable"),
                hj.hq(document).off("mousewheel.hotjarDisable"),
                hj.hq(document).off("DOMMouseScroll.hotjarDisable"),
                hj.hq(document).off("touchmove.hotjarDisable");
            }, "common")),
            e
          );
        })()),
        (hj.dom = (function () {
          var e = {
            getCSSURLs: function () {
              var e = [],
                t = document.styleSheets;
              return (
                hj.log.debug("Getting CSS", "dpc", "Starting"),
                t &&
                  t.length > 0 &&
                  hj.hq.each(t, function (t, i) {
                    i.href &&
                      0 === i.href.indexOf("http") &&
                      (hj.log.debug("Getting CSS", "dpc", i.href),
                      e.push(i.href));
                  }),
                e
              );
            },
          };
          return e;
        })()),
        (hj.html = (function () {
          var e = {};
          return (
            (e.getPageContent = hj.tryCatch(function (e, t) {
              (t = t || []),
                hj.treeMirror.getMirroredDocument(function (i) {
                  hj.insertedRules
                    .getCurrentInsertedRules()
                    .forEach(function (e) {
                      var o = (function (e, t) {
                        t = t || document;
                        var i = parseInt(e.split(":")[0]),
                          o = e.substring(e.indexOf(":") + 1);
                        return t.querySelectorAll(o)[i];
                      })(e.parentSelector, i);
                      if ("LINK" === o.tagName) {
                        var n = o.attributes,
                          a = n.href.value
                            .split(location.hostname)
                            .pop()
                            .replace("/", ""),
                          r = i.querySelector(".blob-hash-" + a);
                        if (!r) {
                          (r = document.createElement("style")).textContent =
                            r.textContent || "/* Originally: <link ";
                          for (var s = 0, d = n.length; s < d; s++)
                            ("id" !== n[s].name && "class" !== n[s].name) ||
                              r.setAttribute(n[s].name, n[s].value),
                              (r.textContent +=
                                n[s].name + '="' + n[s].value + '" ');
                          (r.textContent += "> */"),
                            r.classList.add("blob-hash-" + a),
                            o.parentNode.insertBefore(r, o.nextSibling);
                        }
                        o = r;
                      }
                      (o.textContent = (o.textContent || "") + "\n" + e.rule),
                        -1 === t.indexOf('link[href*="blob:"]') &&
                          t.push('link[href*="blob:"]');
                    }),
                    (function (e, t, i) {
                      var o,
                        n = e.querySelectorAll("head iframe"),
                        a =
                          0 == document.getElementsByTagName("base").length
                            ? location.origin
                            : document.getElementsByTagName("base")[0].href;
                      [].forEach.call(n, function (e) {
                        e.parentNode.removeChild(e);
                      }),
                        i &&
                          i.forEach(function (t) {
                            (o = e.querySelectorAll(t)),
                              hj.hq.each(o, function (e, t) {
                                t.parentNode.removeChild(t);
                              });
                          }),
                        Array.prototype.slice
                          .call(e.getElementsByTagName("img"))
                          .forEach(function (e) {
                            if (e.srcset) {
                              if ("" === e.src) {
                                var t = e.srcset.match(
                                  /(?:([^"'\s,]+)(\s*(?:\s+\d+[wx]))?(?:,\s*)?)/g
                                )[0];
                                if (t) {
                                  var i = t.indexOf(" ");
                                  i > 0 && (t = t.substring(0, i)),
                                    0 !==
                                      (t = t.replace(",", "")).indexOf(
                                        "http"
                                      ) && (t = a + t),
                                    (e.src = t);
                                }
                              }
                              e.removeAttribute("srcset");
                            }
                          }),
                        Array.prototype.slice
                          .call(e.getElementsByTagName("source"))
                          .forEach(function (e) {
                            e.attributes.srcset && e.removeAttribute("srcset");
                          }),
                        [].forEach.call(
                          e.querySelectorAll("script"),
                          function (e) {
                            e.parentNode.removeChild(e);
                          }
                        ),
                        t(
                          hj.html.getPageDoctype() + e.documentElement.outerHTML
                        );
                    })(i, e, t);
                });
            }, "common")),
            (e.getPageDoctype = hj.tryCatch(function () {
              return null === document.doctype
                ? ""
                : "<!DOCTYPE " +
                    (document.doctype.name || "html") +
                    (document.doctype.publicId
                      ? ' PUBLIC "' + document.doctype.publicId + '"'
                      : "") +
                    (!document.doctype.publicId && document.doctype.systemId
                      ? " SYSTEM"
                      : "") +
                    (document.doctype.systemId
                      ? ' "' + document.doctype.systemId + '"'
                      : "") +
                    ">\n";
            }, "common")),
            e
          );
        })()),
        (hj.features = (function () {
          var e = {};
          return (
            (e.getFeatures = hj.tryCatch(function () {
              return hj.settings.features || [];
            }, "hj.features.getFeatures")),
            (e.hasFeature = hj.tryCatch(function (t) {
              return e.getFeatures().indexOf(t) > -1;
            }, "hj.features.hasFeature")),
            e
          );
        })()),
        (hj.cssBlobs = (function () {
          var e = {},
            t = [];
          return (
            (e.register = function (e) {
              t.push(e);
            }),
            (e.handleBlobStyles = hj.tryCatch(function (e) {
              var i,
                o = [];
              if (
                "link" === e.tagName.toLowerCase() &&
                "rel" in e.attributes &&
                "stylesheet" === e.attributes.rel.value &&
                "href" in e.attributes &&
                0 === e.attributes.href.value.indexOf("blob:")
              ) {
                i = hj.selector().get(hj.hq(e));
                for (var n = 0, a = e.sheet.cssRules.length; n < a; n++)
                  o.push({
                    parentSelector: i,
                    rule: e.sheet.cssRules[n].cssText,
                    index: n,
                  });
                t.forEach(function (e) {
                  e(o);
                });
              }
            }, "hj.cssBlobs.apply")),
            e
          );
        })()),
        (hj.viewport = hj.tryCatch(function () {
          var e = {},
            t = null,
            i = "hjViewportId";
          return (
            (e.getId = hj.tryCatch(function () {
              return (
                null === t &&
                  null === (t = sessionStorage.getItem(i)) &&
                  ((t = hj.utils.uuid4()), sessionStorage.setItem(i, t)),
                t
              );
            }, "hj.viewport.getId")),
            e
          );
        }, "common")());
    }, "common")();
  },
  function (e, t) {
    hj.tryCatch(function () {
      hj.xcom = hj.tryCatch(function () {
        var e,
          t = {},
          i = [],
          o = 1,
          n = 2,
          a = 10,
          r = o,
          s = "https://" + hj.insightsHost + "/x",
          d = hj.tryCatch(function () {
            if (r == o) {
              window.addEventListener
                ? window.addEventListener("message", c, !1)
                : window.attachEvent("onmessage", c),
                (r = n);
              var t = document.createElement("iframe");
              (t.style.position = "fixed"),
                (t.style.top = -100),
                (t.style.left = -100),
                (t.width = 1),
                (t.height = 1),
                (t.id = "_hjXcomProxyFrame"),
                (t.src = s),
                document.body.appendChild(t),
                (e = document.getElementById("_hjXcomProxyFrame"));
            }
          }, "data");
        t.send = hj.tryCatch(function (t, o) {
          r == a
            ? e.contentWindow.postMessage({ eventId: t, data: o }, "*")
            : (i.push({ eventId: t, data: o }), d());
        });
        var c = function (e) {
          "knockknock" == e.data.eventId &&
            ((r = a),
            i.forEach(function (e) {
              t.send(e.eventId, e.data);
            }),
            (i = []));
        };
        return t;
      }, "xcom")();
    }, "xcom")();
  },
  function (e, t) {
    hj.tryCatch(function () {
      var e,
        t = new hj.fingerprinter().get();
      (hj.visitData = hj.tryCatch(function () {
        var e,
          i = {};
        return (
          (i.getPageVisitInfo = hj.tryCatch(function (e, t, i) {
            var o = e.get("pageInfo"),
              n = hj.globals.get("acceptLanguage"),
              a = hj.globals.get("userAgent");
            hj.hq.isUndefined(n) &&
              hj.exceptions.log(
                "While sending recording/heatmap_helo event - acceptLanguage is not available in globals, this should never happen",
                "behavior-data"
              ),
              hj.hq.isUndefined(a) &&
                hj.exceptions.log(
                  "While sending recording/heatmap_helo event - userAgent is not available in globals, this should never happen",
                  "behavior-data"
                );
            var r = {
                script_revision: window.hjBootstrap.revision,
                accept_language: n || "",
                user_agent: a || "",
                page_url: o.url,
                url_hash: o.urlMD5,
                window_width: t.width,
                window_height: t.height,
                site_id: i,
              },
              s = document.referrer;
            return "" !== s && (r.referrer = s), r;
          }, "data")),
          (i.trackView = hj.tryCatch(function () {
            hj.viewCounterEndpoint &&
              hj.settings.site_id &&
              Math.random() <= hj.viewCounterHitPercentage &&
              (hj.log.debug("View counter tracking", "visitData"),
              hj.ajax.postAsPlainText(
                hj.viewCounterEndpoint +
                  "/" +
                  hj.settings.site_id +
                  "?s=" +
                  hj.viewCounterHitPercentage
              ));
          }, "data")),
          (i.track = hj.tryCatch(function (t) {
            (i.property = hj.property.create()),
              hj.eventStream.setCurrentPageVisitKey(i.property.key),
              (t = t || document.location.href),
              hj.log.debug("Tracking " + t, "visitData"),
              i.property.set("pageInfo", {
                url: t,
                urlMD5: hj.md5(hj.b64EncodeUnicode(t)),
              }),
              e({ url: t });
          }, "data")),
          (i.trackVpv = hj.tryCatch(function (t) {
            (t = t || document.location.href),
              hj.log.debug("Tracking vpv" + t, "visitData"),
              e({ url: t });
          }, "data")),
          (e = hj.tryCatch(function (e) {
            if (!hj.isPreview) {
              var i = e.url || document.location.href,
                o = hj.ui.getWindowSize(),
                n = {
                  window_width: o.width,
                  window_height: o.height,
                  included_in_sample: hj.includedInSample,
                  fingerprint: t,
                  insert_traffic_log_entry: !0,
                  suppress_location: hj.settings.suppress_location || !1,
                  url: i,
                  r_value: hj.settings.r,
                };
              hj.log.debug(
                "Sending visit-data request. (Insert Traffic Log Entry: " +
                  n.insert_traffic_log_entry +
                  ")",
                "visitData",
                n
              ),
                hj.ajax.postAsJSON(
                  hj.apiUrlBase +
                    "/client/sites/" +
                    hj.settings.site_id +
                    "/visit-data?sv=" +
                    (_hjSettings.hjsv || 0),
                  n,
                  hj.tryCatch(function (e) {
                    if (e.success) {
                      var t = e.user_agent,
                        i = e.accept_language,
                        o = e.user_id;
                      hj.hq.isUndefined(hj.globals.get("isNotBot")) &&
                        hj.globals.set("isNotBot", !0),
                        hj.hq.isUndefined(hj.globals.get("userAgent")) &&
                          hj.globals.set("userAgent", t),
                        hj.hq.isUndefined(hj.globals.get("acceptLanguage")) &&
                          hj.globals.set("acceptLanguage", i),
                        hj.hq.isUndefined(hj.globals.get("userId")) &&
                          hj.globals.set("userId", o);
                    }
                  }, "data")
                );
            }
          }, "data")),
          i
        );
      }, "data")()),
        (hj.pageVisit = hj.visitData),
        (hj.request = hj.tryCatch(function () {
          var e = {},
            i = { granted: null, callbacks: [], inProgress: !1 };
          function o(e, i, o, n) {
            var a = hj.ui.getWindowSize();
            (o.window_width = o.window_width || a.width),
              (o.window_height = o.window_height || a.height),
              (o.fingerprint = t),
              (o.url = document.location.href),
              hj.ajax.postAsJSON(
                hj.apiUrlBase +
                  "/client/sites/" +
                  hj.settings.site_id +
                  "/" +
                  e +
                  "/" +
                  i,
                o,
                function (e) {
                  n && n(e);
                }
              );
          }
          return (
            (e.getConsentGranted = hj.tryCatch(function (e) {
              var o,
                n,
                a = "?";
              null !== i.granted && e
                ? e(i.granted)
                : (e && i.callbacks.push(e),
                  i.inProgress ||
                    ((a += (o = hj.globals.get("userId"))
                      ? "user_id=" + o
                      : "fingerprint=" + t),
                    (i.inProgress = !0),
                    hj.ajax.get(
                      hj.apiUrlBase +
                        "/sites/" +
                        hj.settings.site_id +
                        "/consent" +
                        a,
                      function (e) {
                        for (
                          i.granted =
                            e.success && -1 !== e.scopes.indexOf("associate"),
                            i.inProgress = !1;
                          (n = i.callbacks.pop());

                        )
                          hj.tryCatch(n, "ConsentData")(i.granted);
                      },
                      function () {
                        for (
                          i.granted = !1, i.inProgress = !1;
                          (n = i.callbacks.pop());

                        )
                          hj.tryCatch(n, "ConsentData")(i.granted);
                      }
                    )));
            })),
            (e.grantConsent = hj.tryCatch(function (e, o) {
              var n = hj.globals.get("userId");
              n ? (e.user_id = n) : (e.fingerprint = t),
                (e.action = "grant_for_response"),
                hj.ajax.postAsJSON(
                  hj.apiUrlBase +
                    "/sites/" +
                    hj.settings.site_id +
                    "/consent/associate",
                  e,
                  function (e) {
                    e.success ? (i.granted = !0) : (i.granted = !1),
                      o && hj.tryCatch(o, "GrantConsent")(i.granted);
                  },
                  function () {
                    i.granted = !1;
                  }
                );
            })),
            (e.saveFeedbackResponse = hj.tryCatch(function (e, t) {
              var i = hj.widget.feedbackData.id;
              (e.action = "feedback_widget_response"),
                o("feedback", i, e, function (e) {
                  hj.tryCatch(t, "Data")(e);
                });
            }, "data")),
            (e.savePollResponse = hj.tryCatch(function (e, t) {
              o("polls", hj.widget.pollData.id, e, function (e) {
                hj.tryCatch(t, "Data")(e);
              });
            }, "data")),
            (e.saveTesterResponse = hj.tryCatch(function (e, t) {
              o("testers", hj.widget.testersData.id, e, function (e) {
                hj.tryCatch(t, "Data")(e);
              });
            }, "data")),
            e
          );
        }, "data")()),
        (hj.webSocket = hj.tryCatch(function () {
          var e,
            t,
            i,
            o,
            n,
            a = {},
            r = !1,
            s = !1,
            d = !1,
            c = void 0,
            l = void 0,
            p = !1,
            h = null,
            u = "";
          return (
            (a.connect = hj.tryCatch(function () {
              r ||
                s ||
                ((s = !0),
                hj.globals.ready(
                  "userId",
                  hj.tryCatch(function () {
                    (u = "wss://" + i() + "/api/v1/client/ws"), o();
                  }, "data")
                ));
            }, "data")),
            (a.disconnect = hj.tryCatch(function () {
              r &&
                (hj.log.debug("Disconnecting Web Socket.", "websocket"),
                hj.eventStream.flush(),
                (r = !1),
                (s = !1),
                (d = !0),
                h.close());
            }, "data")),
            (a.isConnected = hj.tryCatch(function () {
              return (
                !!r &&
                (!l ||
                  new Date().getTime() - l <= 6e5 ||
                  (sessionStorage.removeItem("_hjRecordingEnabled"),
                  a.close(),
                  !1))
              );
            }, "data")),
            (a.send = hj.tryCatch(function (e) {
              (l = new Date().getTime()),
                hj.log.debug("Sending data to Web Socket", "websocket", e),
                h.send(e);
            }, "data")),
            (a.close = hj.tryCatch(function () {
              hj.log.debug("Closing Web Socket.", "websocket"), h.close();
            }, "data")),
            (a.getBufferedAmount = hj.tryCatch(function () {
              return h.bufferedAmount;
            }, "data")),
            (o = hj.tryCatch(function () {
              d
                ? (hj.log.debug("Unload event triggered, don't reconnect"),
                  !1 === p &&
                    ((p = !0),
                    setTimeout(function () {
                      (d = !1), (p = !1);
                    }, 1e3)))
                : (hj.log.debug(
                    "Connecting to Web Socket [" + u + "]",
                    "websocket"
                  ),
                  ((h = new WebSocket(u)).onopen = e),
                  (h.onclose = t),
                  window.addEventListener(
                    "beforeunload",
                    hj.tryCatch(a.disconnect, "Data"),
                    !1
                  ));
            }, "data")),
            (n = hj.tryCatch(function () {
              r &&
                (hj.log.debug("Pinging Web Socket.", "websocket"),
                h.send("ping"));
            }, "data")),
            (e = hj.tryCatch(function () {
              hj.log.debug("Web Socket opened.", "websocket"),
                (c = setInterval(n, 3e4)),
                (r = !0),
                (s = !1),
                hj.eventStream.flush();
            }, "data")),
            (t = hj.tryCatch(function (e) {
              hj.log.debug("Web Socket closed.", "websocket"),
                e.wasClean ||
                  hj.log.warn("Websocket close was unclean: " + e.code),
                r && (clearInterval(c), (r = !1));
            }, "data")),
            (i = hj.tryCatch(function () {
              var e = hj.globals.get("userId");
              return (
                _hjSettings.wsHost ||
                "ws" + ((parseInt(e.slice(-10), 16) % 10) + 1) + ".hotjar.com"
              );
            }, "data")),
            a
          );
        }, "data")()),
        (hj.resource = (function () {
          var e = {},
            t = new RegExp("<.+:(.+)>");
          function i(e, t) {
            var i,
              o,
              n,
              a = [];
            for (n = 0; n < e.length; n += 1)
              if ((i = e[n]).isDynamic) {
                if (void 0 === (o = t[i.label]))
                  throw new Error('Argument "' + i.label + '" is missing.');
                a.push(o);
              } else a.push(i.label);
            return a.join("/");
          }
          function o(e, t, o) {
            return function (n, a) {
              var r = "https://" + hj.host + i(e, n);
              switch (t) {
                case "GET":
                  hj.ajax.get(r, a);
                  break;
                case "POST":
                  hj.ajax.postAsJSON(
                    r,
                    (function (e) {
                      var t,
                        i = {};
                      for (t = 0; t < o.length; t += 1)
                        if (((i[o[t]] = e[o[t]]), void 0 === i[o[t]]))
                          throw new Error(
                            'Argument "' + o[t] + '" is missing.'
                          );
                      return i;
                    })(n),
                    a
                  );
                  break;
                default:
                  throw new Error('HTTP method "' + t + '" is not supported.');
              }
            };
          }
          return (
            (e.StorePageContentResource = (function (e, n) {
              var a = {},
                r = (function () {
                  var i,
                    o,
                    n = e.split("/"),
                    a = [];
                  for (o = 0; o < n.length; o += 1)
                    (i = t.exec(n[o]))
                      ? a.push({ label: i[1], isDynamic: !0 })
                      : a.push({ label: n[o], isDynamic: !1 });
                  return a;
                })();
              return (
                (a.getUrlPath = function (e) {
                  return i(r, e);
                }),
                (function () {
                  for (var e in n) {
                    var t, i;
                    n.hasOwnProperty(e) &&
                      ((t = n[e][0]), (i = n[e][1]), (a[e] = o(r, t, i)));
                  }
                })(),
                a
              );
            })("/api/v1/sites/<int:site_id>/content", {
              post: ["POST", ["content"]],
            })),
            e
          );
        })()),
        (hj.ajax =
          (((e = {}).get = hj.tryCatch(function (e, t, i) {
            (t = t || hj.hq.noop),
              (i = i || hj.hq.noop),
              hj.hq.ajax({
                url: e,
                success: hj.tryCatch(t, "Data"),
                error: hj.tryCatch(i, "Data"),
              });
          }, "data")),
          (e.postAsJSON = hj.tryCatch(function (e, t, i, o) {
            (i = i || hj.hq.noop),
              (o = o || hj.hq.noop),
              hj.hq.ajax({
                url: e,
                type: "POST",
                data: JSON.stringify(t),
                contentType: "application/json; charset=UTF-8",
                success: hj.tryCatch(i, "Data"),
                error: hj.tryCatch(o, "Data"),
              });
          }, "data")),
          (e.postAsPlainText = hj.tryCatch(function (e) {
            hj.hq.ajax({ url: e, type: "POST", contentType: "text/plain" });
          }, "data")),
          e)),
        (hj.eventStream = hj.tryCatch(function () {
          var e,
            t,
            i,
            o,
            n,
            a = {},
            r = [],
            s = "",
            d = void 0;
          return (
            (a.setCurrentPageVisitKey = hj.tryCatch(function (t) {
              s !== t && ((s = t), e()), a.flush();
            }, "data")),
            (a.writeNewFrame = hj.tryCatch(function (t, i) {
              return e(i), a.write(t), e(), a;
            })),
            (a.write = hj.tryCatch(function (e, t, i) {
              var o, n;
              return hj.isPreview
                ? a
                : (hj.webSocket.connect(),
                  "object" == typeof e
                    ? (hj.hq.each(e, function (e, t) {
                        a.write(e, t, !0);
                      }),
                      a)
                    : ((o = r.pop()),
                      (n = e),
                      i ? (o[n] = t) : ((o[n] = o[n] || []), o[n].push(t)),
                      r.push(o),
                      a));
            }, "data")),
            (a.flush = hj.tryCatch(function () {
              var i,
                o,
                n = hj.globals.get("userId");
              if (
                (d && clearInterval(d),
                n || (hj.globals.ready("userId", a.flush), e()),
                hj.webSocket.isConnected() && n)
              ) {
                if ((o = (i = t()).length) > 0)
                  for (
                    var r =
                        JSON.stringify({
                          uuid: n,
                          viewportid: hj.viewport.getId(),
                          site_id: hj.settings.site_id,
                        }) + "\n",
                      s = 0;
                    s < o;
                    s++
                  ) {
                    var c = JSON.stringify(i[s]);
                    hj.webSocket.send(r + c);
                  }
                d = setInterval(a.flush, 1e3);
              }
            }, "data")),
            (e = hj.tryCatch(function (e) {
              var t = { pageVisitKey: e || s };
              r.push(t);
            }, "data")),
            (t = hj.tryCatch(function () {
              for (
                var t, o = r.length, a = [], s = [], d = [], c = 0;
                c < o;
                c++
              )
                if (((t = r[c]), Object.keys(t).length > 1)) {
                  var l = [];
                  t.autotag_recording &&
                    (l = t.autotag_recording.filter(function (e) {
                      return "rageclick" === e.name;
                    })),
                    l.length > 0
                      ? s.push(t)
                      : (t.clipboard && a.push(t.clipboard), d.push(i(t)));
                }
              var p = n(s, a);
              return (r = p.leftover), e(), [].concat(d, p.sendable);
            }, "data")),
            (n = hj.tryCatch(function (e, t) {
              var o = [],
                n = [];
              return (
                hj.hq.each(t, function (t, i) {
                  e = e.filter(function (e) {
                    if ("copy" === i.action || "cut" === i.action)
                      return i.time - e.autotag_recording[0].time > 5e3;
                  });
                }),
                hj.hq.each(e, function (e, t) {
                  hj.time.getNow() - t.autotag_recording[0].time < 5e3
                    ? o.push(t)
                    : n.push(i(t));
                }),
                { leftover: o, sendable: n }
              );
            }, "data.filterRageClicks")),
            (i = hj.tryCatch(function (e) {
              return (
                hj.hq.each(e, function (t, i) {
                  hj.hq.isFunction(i) && (e[t] = i());
                }),
                (e.page_visit_key = e.pageVisitKey),
                delete e.pageVisitKey,
                "object" == typeof e.mutation && (e.mutation = o(e.mutation)),
                e
              );
            }, "data")),
            (o = hj.tryCatch(function (e) {
              var t,
                i = "";
              if ("object" == typeof e)
                return (
                  hj.hq.each(e, function (o, n) {
                    "object" == typeof n.c &&
                      (hj.hq.each(n.c, function (n, a) {
                        "object" == typeof a.attributes &&
                          "string" == typeof a.attributes.style &&
                          (a.attributes.style === t &&
                            a.id === i &&
                            (e[o].c[n] = null),
                          (t = a.attributes.style),
                          (i = a.id));
                      }),
                      (e[o].c = e[o].c.filter(function (e) {
                        return e;
                      })),
                      e[o].c.length || delete e[o].c),
                      void 0 === e[o].a &&
                        void 0 === e[o].b &&
                        void 0 === e[o].c &&
                        void 0 === e[o].d &&
                        (e[o] = null);
                  }),
                  e.filter(function (e) {
                    return e;
                  })
                );
            }, "data")),
            a
          );
        })()),
        (hj.property = hj.tryCatch(function () {
          var e = {};
          return (
            (e.create = hj.tryCatch(function () {
              var e = { key: hj.utils.uuid4() },
                t = {},
                i = {};
              return (
                (e.ready = hj.tryCatch(function (o, n) {
                  (n = hj.tryCatch(n, "Data")),
                    i[o]
                      ? (hj.log.debug(
                          "Property " +
                            o +
                            " is ready. Calling callback() now.",
                          "property",
                          n
                        ),
                        n(e))
                      : (hj.log.debug(
                          "Property " + o + " is not ready. Saving callback().",
                          "property",
                          n
                        ),
                        t[o]
                          ? t[o].push({ callback: n, executed: !1 })
                          : (t[o] = [{ callback: n, executed: !1 }]));
                }, "data")),
                (e.set = hj.tryCatch(function (o, n) {
                  hj.log.debug(
                    "Setting properties." + o + " to " + n,
                    "property"
                  ),
                    (i[o] = n),
                    "object" == typeof t[o] &&
                      hj.hq.each(t[o], function (t, i) {
                        i.executed ||
                          (hj.log.debug(
                            "Calling " + o + " callback.",
                            "property"
                          ),
                          i.callback(e),
                          (i.executed = !0));
                      });
                }, "data")),
                (e.get = hj.tryCatch(function (e) {
                  return i[e];
                }, "data")),
                e
              );
            }, "data")),
            (hj.globals = e.create()),
            e
          );
        }, "data")()),
        (hj.event = hj.tryCatch(function () {
          var e,
            t = {},
            i = [],
            o = {};
          return (
            (t.listen = hj.tryCatch(function (t, o) {
              i.unshift({ eventIds: t, callback: hj.tryCatch(o, "Data") }), e();
            }, "data")),
            (t.signal = hj.tryCatch(function (t, i) {
              void 0 === i
                ? hj.log.debug('Event signalled: "' + t + '".', "event")
                : hj.log.debug(
                    'Event signalled: "' +
                      t +
                      '". Data: "' +
                      JSON.stringify(i) +
                      '".',
                    "event"
                  ),
                (o[t] = void 0 === i || i),
                e();
            }, "data")),
            (t.clearAllListeners = hj.tryCatch(function () {
              i = [];
            }, "data")),
            (e = hj.tryCatch(function () {
              var e, t, n;
              for (t in o)
                if (o.hasOwnProperty(t))
                  for (e = i.length - 1; e >= 0; e -= 1)
                    (n = i[e]),
                      -1 !== hj.hq.indexOf(t, n.eventIds) &&
                        (hj.log.debug('Event triggered: "' + t + '".', "event"),
                        n.callback(o[t]),
                        delete o[t]);
            }, "data")),
            t
          );
        }, "data")());
    }, "data")();
  },
  function (e, t) {
    hj.tryCatch(function () {
      (hj.remoteStorage = hj.tryCatch(function () {
        var e = {},
          t = {},
          i = 0,
          o = !1,
          n = "https://" + hj.varsHost.replace(/:$/, ""),
          a = window.hjBootstrap.varsJar;
        function r(e) {
          if ((e.origin || e.originalEvent.origin) == n)
            try {
              var i = JSON.parse(e.data);
              (0, t[i.messageId])(i), delete t[i.messageId];
            } catch (e) {
              return null;
            }
        }
        function s(e, s) {
          var d;
          o ||
            (window.addEventListener
              ? window.addEventListener("message", r, !1)
              : window.attachEvent("onmessage", r)),
            s && ((d = i++), (t[d] = s), (e.messageId = d)),
            (e = JSON.stringify(e)),
            window.hjBootstrap.varsLoaded
              ? a.contentWindow.postMessage(e, n)
              : hj.event.listen(["varsLoaded"], function () {
                  a.contentWindow.postMessage(e, n);
                });
        }
        return (
          (e.get = hj.tryCatch(function (e, t, i) {
            s(
              { action: "_hjGet", key: e, siteId: i || hj.settings.site_id },
              function (e) {
                t(e.value);
              }
            );
          })),
          (e.set = hj.tryCatch(function (e, t, i, o) {
            s({
              action: "_hjSet",
              key: e,
              value: t,
              expiresMinutes: i || 525600,
              siteId: o || hj.settings.site_id,
            });
          })),
          (e.remove = hj.tryCatch(function (e, t) {
            s({
              action: "_hjRemove",
              key: e,
              siteId: t || hj.settings.site_id,
            });
          })),
          e
        );
      }, "remoteStorage")()),
        (hj.remoteCookieJar = hj.remoteStorage);
    }, "remoteStorage")();
  },
  function (e, t) {
    hj.tryCatch(function () {
      var e;
      hj.loader.registerModule(
        "IntegrationsModule",
        ((e = {}),
        (hj.integrations = hj.tryCatch(function () {
          var e = {};
          return (
            (e.google_analytics = hj.tryCatch(function () {
              var e,
                t,
                i,
                o,
                n,
                a,
                r,
                s,
                d,
                c = {},
                l = 60,
                p = !0;
              return (
                (c.setup = hj.tryCatch(function (t) {
                  var o = t.hjuid_dimension_index;
                  o &&
                    "string" == typeof o &&
                    o.match("^[1-9][0-9]*$") &&
                    ((r = "dimension" + o),
                    hj.log.debug(
                      "GA - setup complete. Looking for GA module.",
                      "integration"
                    ),
                    e(),
                    i());
                })),
                (e = hj.tryCatch(function () {
                  hj.log.debug("GA - waiting for userId.", "integration"),
                    hj.globals.ready("userId", t);
                }, "integrations")),
                (t = hj.tryCatch(function (e) {
                  var t = e.get("userId");
                  t &&
                    "string" == typeof t &&
                    (t.length < 8 ||
                      (hj.log.debug("GA - got userId.", "integration"),
                      (d = t.substring(0, 8)),
                      a()));
                }, "integrations")),
                (i = hj.tryCatch(function () {
                  var e, t;
                  if (!s) {
                    if (
                      ((e = window.GoogleAnalyticsObject),
                      "function" == typeof (t = window[e || "ga"]))
                    )
                      return (
                        hj.log.debug(
                          "GA - found GA module; waiting for tracker.",
                          "integration"
                        ),
                        void t(o)
                      );
                    l <= 0
                      ? hj.log.debug(
                          "GA - has given up looking for GA module.",
                          "integration"
                        )
                      : ((l -= 1), setTimeout(i, 500));
                  }
                }, "integrations")),
                (o = hj.tryCatch(function (e) {
                  n(e, !0);
                }, "integrations")),
                (c.setTracker = hj.tryCatch(function (e) {
                  n(e, !1);
                }, "integrations")),
                (n = hj.tryCatch(function (e, t) {
                  r &&
                    e &&
                    ((s && t) ||
                      (s !== e &&
                        (hj.log.debug("GA - got fresh tracker.", "integration"),
                        (p = !0)),
                      (s = e),
                      a()));
                }, "integrations")),
                (a = hj.tryCatch(function () {
                  p &&
                    d &&
                    s &&
                    r &&
                    (hj.log.debug("GA - ready to fire.", "integration"),
                    (p = !1),
                    s.set(r, d),
                    s.send("event", "Hotjar", "detect_user", d, {
                      nonInteraction: 1,
                    }),
                    hj.log.debug(
                      "GA - successfully sent detect_user event.",
                      "integration"
                    ));
                }, "integrations")),
                c
              );
            }, "integrations")()),
            (e.optimizely = (function () {
              var e = {},
                t = {},
                i = window.optimizely;
              function o(e) {
                "applied" === e.name &&
                  (hj.log.debug(
                    "Optimizely - campaign decided; ready to tag experiments.",
                    "integration"
                  ),
                  n());
              }
              function n() {
                var e, o, n, a, r;
                hj.log.debug(
                  "Optimizely - attempting to tag active experiments.",
                  "integration"
                ),
                  hj.log.debug(
                    "Optimizely - refreshing active experiment variation map.",
                    "integration"
                  ),
                  (t = {}),
                  i &&
                    "get" in i &&
                    ((a = i.get("state")),
                    (r = i.get("data")),
                    a.getActiveExperimentIds().forEach(function (i) {
                      (o = r.experiments[i].name || i),
                        (e = a.getVariationMap()[i]),
                        (n = e.name || e.id),
                        (t[o] = n);
                    })),
                  hj(
                    "tagRecording",
                    (function () {
                      hj.log.debug(
                        "Optimizely - looking for tags.",
                        "integration"
                      );
                      var e = [];
                      for (var i in t) e.push(i + "/" + t[i]);
                      return (
                        e.length > 0
                          ? hj.log.debug(
                              "Optimizely - found " + e.length + " tags.",
                              "integration",
                              e
                            )
                          : hj.log.debug(
                              "Optimizely - no tags found.",
                              "integration"
                            ),
                        e
                      );
                    })()
                  );
              }
              return (
                (e.setup = function () {
                  hj.log.debug(
                    "Optimizely - listening for campaignDecided event.",
                    "integration"
                  ),
                    (i = window.optimizely || []).push({
                      type: "addListener",
                      filter: { name: "campaignDecided" },
                      handler: o,
                    }),
                    n();
                }),
                e
              );
            })()),
            e
          );
        }, "integrations")()),
        (e.run = hj.tryCatch(function () {
          var e = hj.settings.integrations;
          e &&
            (e.optimizely &&
              e.optimizely.tag_recordings &&
              hj.integrations.optimizely.setup(),
            e.google_analytics &&
              hj.integrations.google_analytics.setup(e.google_analytics));
        })),
        e),
        !1
      );
    }, "integrations")();
  },
  function (e, t, i) {
    hj.tryCatch(function () {
      hj.notification = (function () {
        var e = {},
          t = "_hj-f5b2a1eb-9b07_hotjar_notification",
          o =
            '                    <style type="text/css">                        #' +
            t +
            ", #" +
            t +
            ' * {                            font-family: "Open Sans", Helvetica, Arial, sans-serif, Tahoma !important;                        }                                                #' +
            t +
            " {                            transition-duration: .3s;                            opacity: 0;                            transform: scale(.9);                        }                                                #" +
            t +
            "." +
            t +
            "_active {                            opacity: 1;                            transform: scale(1);                        }                                                #" +
            t +
            " {                                background: #263345;                                border-radius: 2px;                                position: fixed;                                z-index: 2147483646;                                top: 20px;                                left: 20px;                                width: 400px;                                padding: 25px;                                -webkit-box-shadow: 0 2px 4px 0 rgba(0,0,0,.3);                                -moz-box-shadow:    0 2px 4px 0 rgba(0,0,0,.3);                                box-shadow:         0 2px 4px 0 rgba(0,0,0,.3);                        }                                                #" +
            t +
            " ." +
            t +
            "_status {                            float: left;                            margin: 0 20px 0 0;                            border-radius: 50%;                            width: 50px;                            height: 50px;                            -webkit-box-shadow: 0 2px 4px 0 rgba(0,0,0,.3);                            -moz-box-shadow:    0 2px 4px 0 rgba(0,0,0,.3);                            box-shadow:         0 2px 4px 0 rgba(0,0,0,.3);                        }                                                #" +
            t +
            " ." +
            t +
            "_status_good {                            background: url(" +
            i(17) +
            ")                                             no-repeat 52% 53% #3ACC40;                            background-size: 25px 18px;                        }                                                #" +
            t +
            " ." +
            t +
            "_status_bad {                            background: url(" +
            i(1) +
            ")                                             no-repeat center center #EA4031;                            background-size: 6px 30px;                        }                                                #" +
            t +
            " ." +
            t +
            "_status_warning {                            background: url(" +
            i(1) +
            ")                                             no-repeat center center #F39C11;                            background-size: 6px 30px;                        }                                                #" +
            t +
            " ." +
            t +
            "_status {                            float: left;                        }                                                                        #" +
            t +
            " ." +
            t +
            "_content {                            float: left;                            color: #dedede;                            font-size: 13px;                            width: 78%;                            min-height: 50px;                            vertical-align: middle;                        }                                                #" +
            t +
            " ." +
            t +
            "_title {                            color: white;                            font-size: 16px;                            font-weight: bold;                            margin: 0 0 4px 0;                            display: inline-block                        }                                                ." +
            t +
            "_close {                            position: absolute;                            top: 15px;                            right: 15px;                            font-size: 22px;                            color: white;                            cursor: pointer;                            line-height: 11px;                        }                                                _hj-f5b2a1eb-9b07_clear {                            clear: both;                        }                                            </style>",
          n =
            '                    <div id="' +
            t +
            '">                        <div class="' +
            t +
            '_close">&times;</div>                        <% if (status) { %>                            <div class="' +
            t +
            "_status                             " +
            t +
            '_status_<%= status %>"></div>                        <% } %>                        <div class="' +
            t +
            '_content">                            <% if (title) { %>                                <span class="' +
            t +
            '_title"><%= title %></span>                            <% } %>                            <% if (message) { %>                                <br /><%= message %>                            <% } %>                        </div>                        <div class="_hj-f5b2a1eb-9b07_clear" />                    </div>                ';
        function a() {
          hj.hq("#" + t).removeClass(t + "_active"),
            setTimeout(function () {
              hj.hq("#" + t).remove();
            }, 350);
        }
        return (
          (e.show = function (e, i, r) {
            r = r || "good";
            var s = hj.rendering.renderTemplate(o + n, {
              title: e,
              message: i,
              status: r,
            });
            s
              ? (hj.rendering.addToDom(t, s),
                hj.hq("." + t + "_close").on("click", a),
                setTimeout(function () {
                  hj.hq("#" + t).addClass(t + "_active");
                }, 1))
              : hj.log.debug(
                  "Notification could not be rendered.",
                  "notifications"
                );
          }),
          e
        );
      })();
    }, "notifications")();
  },
  function (e, t, i) {
    e.exports = i.p + "checkmark@2x.6c5c82.png";
  },
  function (e, t) {
    hj.tryCatch(function () {
      var e;
      hj.user =
        (((e = { properties: {} }).set = hj.tryCatch(function (t) {
          hj.hq.each(t, function (t, i) {
            e.properties[t] = i;
          }),
            hj.event.signal("updated-user-properties");
        }, "user.set")),
        (e.get = hj.tryCatch(function (t) {
          return e.properties[t];
        }, "user.get")),
        e);
    }, "user")();
  },
  function (e, t) {
    hj.tryCatch(function () {
      var e = [];
      hj.selector = function (t) {
        var i = {
          2: {
            ignoreClassList: [
              "over",
              "hover",
              "active",
              "selected",
              "scrolled",
            ],
            ignoreBodyClasses: !0,
            ignoreUUIDClasses: !0,
            maxClassesAllowed: 5,
            disallowedTagNameCharactersRE: /[^a-zA-Z0-9-_]/g,
          },
        };
        return (
          e[(t = !t || t < 2 ? 2 : t)] ||
            (e[t] = {
              get: function (e) {
                return (function (e, t) {
                  var i =
                      /(#|@|&|~|=|>|`|'|:|"|!|;|,|\?|%|\}|\{|\.|\*|\+|\||\[|\]|\(|\)|\/|\^|\$)/g,
                    o = t.ignoreUUIDClasses
                      ? /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/
                      : {
                          test: function () {
                            return !1;
                          },
                        },
                    n = hj.tryCatch(function (e) {
                      var t, i, o, n, s, d;
                      if (
                        ((n = function (e, i) {
                          for (o = hj.hq(i), t = 0; t < o.length; t++)
                            if (o[t] === e[0]) return t;
                          return 0;
                        }),
                        void 0 === e.attr("data-hj-ignore-attributes"))
                      ) {
                        if (((s = r(e.attr("id"))), (d = r(e.attr("name"))), s))
                          return "0:#" + s;
                        if (d)
                          return n(e, (i = '*[name="' + d + '"]')) + ":" + i;
                      }
                      return n(e, (i = a(e))) + ":" + i;
                    }, "common"),
                    a = hj.tryCatch(function (e, i) {
                      var o,
                        n,
                        d,
                        c = void 0 === e.attr("data-hj-ignore-attributes");
                      if ((void 0 === i && (i = ""), e.is("html")))
                        return "html" + i;
                      if (((o = s(e.get(0).nodeName.toLowerCase())), c)) {
                        if ((n = r(e.attr("id")))) return o + "#" + n + i;
                        ("body" === o && t.ignoreBodyClasses) ||
                          ((d = r(e.attr("class"))) &&
                            (o += "." + d.split(/[\s\n]+/).join(".")));
                      }
                      return a(e.parent(), ">" + o + i);
                    }, "common"),
                    r = function (e) {
                      var n = [];
                      return (
                        !(
                          void 0 ===
                            (e = hj.hq.trim(
                              (e || "").replace(/\s\s+/g, " ")
                            )) ||
                          "" === e ||
                          e.indexOf("yui_") > -1 ||
                          !isNaN(e.charAt(0))
                        ) &&
                        ((e = e.replace(i, "\\$1"))
                          .split(/\s/g)
                          .forEach(function (e) {
                            !(
                              n.length < t.maxClassesAllowed ||
                              0 === t.maxClassesAllowed
                            ) ||
                              hj.hq.inArray(e, t.ignoreClassList) ||
                              o.test(e) ||
                              "" === e ||
                              n.push(e);
                          }),
                        n.join(" "))
                      );
                    },
                    s = function (e) {
                      return e.replace(t.disallowedTagNameCharactersRE, "");
                    };
                  return n(e);
                })(e, i[t]);
              },
            }),
          e[t]
        );
      };
    })();
  },
  function (e, t) {
    hj.tryCatch(function () {
      hj.loader.registerModule(
        "Command",
        (function () {
          var e = {},
            t = {},
            i = window.hj.q,
            o = !1,
            n = ["identify", "ready", "stateChange", "trigger"];
          function a() {
            var e = Array.prototype.slice.call(i.shift()),
              o = t[e[0]],
              r = e.slice(1);
            hj.log.debug("Processing command: " + e.join(", "), "command"),
              hj.hq.isFunction(o)
                ? (function (e) {
                    return !hj.optOut || n.indexOf(e) >= 0;
                  })(e[0])
                  ? hj.tryCatch(o, "command")(r)
                  : hj.log.debug(
                      'Command "' + e[0] + '" blocked due to opt-out',
                      "command"
                    )
                : hj.log.debug('Unknown command: "' + e[0] + '"', "command"),
              i.length > 0 && hj.tryCatch(a)();
          }
          return (
            (t.vpv = function (e) {
              var t = e[0];
              hj.optOut ||
                (hj.includedInSample &&
                  t &&
                  (hj.log.debug(
                    'Sending virtual page view for URL "' +
                      location.protocol +
                      "//" +
                      location.hostname +
                      t +
                      '"',
                    "command"
                  ),
                  hj.visitData.trackVpv(
                    location.protocol + "//" + location.hostname + t
                  )),
                hj.visitData.trackView());
            }),
            (t.stateChange = function (e) {
              var t = e ? hj.url.getUrlFromString(e[0]) : window.location.href;
              hj.log.debug('Changing state to URL "' + t + '"', "command"),
                hj.currentUrl && hj.currentUrl != t && hj._init.reinit(t);
            }),
            (t.formSubmitSuccessful = function () {
              hj.forms.cmdFormSubmitSuccessful();
            }),
            (t.formSubmitFailed = function () {
              hj.forms.cmdFormSubmitFailed();
            }),
            (t.tagRecording = function (e) {
              e[0] && hj.behaviorData.tagRecording(e[0]);
            }),
            (t.trigger = function (e) {
              e[0] && hj.event.signal("trigger:" + e[0]);
            }),
            (t.identify = function (e) {
              e[0] && hj.user.set(e[0]);
            }),
            (t.gaSetTracker = function (e) {
              e[0] && hj.integrations.google_analytics.setTracker(e[0]);
            }),
            (t._xhr = function () {}),
            (t.ready = function (e) {
              e.forEach(function (e) {
                e();
              });
            }),
            (e.run = function () {
              hj.command = this;
            }),
            (e.activate = function () {
              o ||
                ((o = !0),
                (i.push = function () {
                  var e;
                  for (e = 0; e < arguments.length; e += 1)
                    this[this.length] = arguments[e];
                  return a(), this.length;
                }),
                i.length > 0 && a());
            }),
            hj.initialVisitDataSent && e.activate(),
            e
          );
        })(),
        !0
      );
    }, "command")();
  },
  function (e, t) {
    hj.tryCatch(function () {
      var e;
      hj.loader.registerModule(
        "DeferredPageContentModule",
        ((e = {}),
        (hj.sendPageContent = function (e, t, i, o) {
          var n =
              hj.apiUrlBase +
              "/sites/" +
              hj.settings.site_id +
              "/deferred-page-content/" +
              e,
            a = hj.url.getParameter("hjDelay"),
            r = a || 1e3;
          function s(t) {
            setTimeout(
              hj.tryCatch(function () {
                (t || e) &&
                  hj.html.getPageContent(function (e) {
                    hj.ajax.postAsJSON(
                      n,
                      { url: location.href, content: e, token: t, scrolled: i },
                      hj.tryCatch(function (e) {
                        e.success && o ? o() : !1 === e.success && o(e.error);
                      })
                    );
                  });
              }, "dpc.sendNewContent"),
              r
            );
          }
          t
            ? s(t)
            : hj.globals.ready(
                "isNotBot",
                hj.tryCatch(function () {
                  hj.ajax.get(n + "/is-empty", function (e) {
                    e.is_empty &&
                      (hj.log.debug(
                        "Deferred page content is empty: " + e.is_empty,
                        "DeferredPageContent"
                      ),
                      s());
                  });
                }, "dpc.isNotBot-callback")
              );
        }),
        (e.run = function (e) {
          hj.hq.each(hj.settings.deferred_page_contents || [], function (t, i) {
            hj.targeting.matchRules(i.targeting, e, function () {
              return hj.sendPageContent(i.id), !1;
            });
          });
        }),
        e),
        !1
      );
    }, "deferredpagecontent")();
  },
  function (e, t) {
    hj.tryCatch(function () {
      hj.dataHjSuppressedAttributeHandler = hj.tryCatch(function () {
        var e = {},
          t = function (e, t) {
            var i, o, n, a, r;
            [
              [
                "src",
                "https://" +
                  hj.insightsHost +
                  "/static/app/img/transparent.png",
              ],
              [
                "style",
                ((i = t),
                (o =
                  "https://" +
                  hj.insightsHost +
                  "/static/app/img/suppressed.png"),
                (n = (i.meta || {}).style || {}),
                (a = n.width),
                (r = n.height),
                [
                  i.style,
                  'background: url("' + o + '") repeat !important',
                  a ? "width: " + a : "",
                  r ? "height: " + r : "",
                ].filter(function (e) {
                  return e;
                })).join(";"),
              ],
            ].forEach(function (t) {
              e.setAttribute(t[0], t[1]);
            });
          };
        return (
          (e.wrapSetAttribute = hj.tryCatch(function (e) {
            return function (i, o, n) {
              return "data-hj-suppressed" === o && "object" == typeof n
                ? (t(i, n), !0)
                : e(i, o, n);
            };
          })),
          e
        );
      }, "hj.dataHjSuppressedAttributeHandler")();
    }, "hj.dataHjSuppressedAttributeHandler")();
  },
  function (e, t) {
    hj.tryCatch(function () {
      var e = (function () {
          var t = "*",
            i = 16,
            o = /\S+/g,
            n = /\s?background[^;]+;?\s?/g;
          function a() {
            return Math.random() < 0.5 ? -1 : 1;
          }
          function r(e, o) {
            return (e = e || i), (o = o || t), new Array(e + 1).join(o);
          }
          var s = hj.tryCatch(function (e) {
              var t = {};
              return (
                (e.style && e.style.width) || (t.width = e.offsetWidth + "px"),
                (e.style && e.style.height) ||
                  (t.height = e.offsetHeight + "px"),
                t
              );
            }, "Suppresser.getSuppressedImageSize"),
            d = hj.tryCatch(function (e) {
              return e && e.length
                ? e.replace(o, function (e) {
                    return r(Math.max(1, e.length + a()));
                  })
                : r(i + a());
            }, "Suppresser.textHandler"),
            c = hj.tryCatch(function (e) {
              return (
                hj.settings.anonymize_emails && (e = e.replace(f, d)),
                hj.settings.anonymize_digits && (e = e.replace(p, d)),
                (e = e.replace(_, function (e) {
                  return e.replace(p, d);
                }))
              );
            }, "Suppresser.textContentHandler"),
            l = hj.tryCatch(function () {
              return r();
            }, "Suppresser.passwordHandler"),
            h = hj.tryCatch(function () {
              return r(i, 1);
            }, "Suppresser.numberHandler"),
            u = hj.tryCatch(function (e) {
              var t = e ? 16 : 10;
              return new Date(1979, 0, 1).toISOString().substring(0, t);
            }, "Suppresser.getLocalDateStr"),
            g = hj.tryCatch(function () {
              return u(!1);
            }, "Suppresser.dateHandler"),
            m = hj.tryCatch(function () {
              return u(!0);
            }, "Suppresser.datetimeHandler"),
            b = hj.tryCatch(function () {
              return "00:00";
            }, "Suppresser.timeHandler"),
            w = hj.tryCatch(function () {
              return "1979-01";
            }, "Suppresser.monthHandler"),
            v = hj.tryCatch(function () {
              return "1979-W1";
            }, "Suppresser.weekHandler"),
            y = hj.tryCatch(function (e) {
              if (e) return e.replace(n, "");
            }, "Suppresser.imageStyleHandler"),
            j = {
              full: d,
              partial: c,
              textContent: c,
              password: l,
              number: h,
              date: g,
              datetime: m,
              "datetime-local": m,
              time: b,
              month: w,
              imgStyle: y,
              week: v,
            };
          return {
            getSuppressedText: function (e, t) {
              return j[e] ? j[e](t) : d(t);
            },
            getSuppressedImageNode: function (t) {
              var i = { src: "", meta: { style: s(t) } },
                o = e.getSuppressedText("imgStyle", t.getAttribute("style"));
              return o && (i.style = o), i;
            },
          };
        })(),
        t = ["button", "reset", "submit"],
        i = hj.tryCatch(function (e) {
          var i = e.tagName.toLowerCase(),
            o = e.type.toLowerCase();
          return "input" === i && t.indexOf(o) > -1;
        }, "hj.privacy._isWhitelistedInputType"),
        o = ["default-style", "content-type", "refresh"],
        n = function (e) {
          var t = e["http-equiv"] && e["http-equiv"].value;
          return (
            !t ||
            o.some(function (e) {
              return !!t.match(e);
            })
          );
        },
        a = hj.tryCatch(function (e) {
          return (
            hj.settings.recording_capture_keystrokes &&
            ((e.attributes && void 0 !== e.attributes["data-hj-whitelist"]) ||
              (e.className && e.className.indexOf("data-hj-whitelist") > -1))
          );
        }, "hj.privacy._isUserWhitelisted"),
        r = ["password", "email", "hidden"],
        s = hj.tryCatch(function (e) {
          var t = e.tagName.toLowerCase(),
            i = e.type.toLowerCase();
          return "input" === t && r.indexOf(i) > -1;
        }, "hj.privacy._isBlacklistedInputType"),
        d = [
          "address",
          "address1",
          "address2",
          "addressline1",
          "addressline2",
          "cell",
          "cellphone",
          "dateofbirth",
          "dob",
          "email",
          "familyname",
          "firstname",
          "fullname",
          "lastname",
          "mobile",
          "name",
          "phone",
          "postalcode",
          "postcode",
          "surname",
          "tel",
          "telephone",
          "username",
          "zip",
          "zipcode",
          "nationalinsurancenumber",
          "nin",
          "ppsn",
          "security",
          "securitynum",
          "socialsec",
          "socialsecuritynumber",
          "socsec",
          "ssn",
          "adgangskode",
          "authpw",
          "contrasena",
          "contrasenya",
          "contraseña",
          "contrasinal",
          "cyfrinair",
          "fjalëkalim",
          "focalfaire",
          "geslo",
          "hasło",
          "heslo",
          "jelszó",
          "kennwort",
          "kωδικός",
          "kωδικόςπρόσβασης",
          "lozinka",
          "lykilorð",
          "lösenord",
          "motdepasse",
          "parakalw",
          "parola",
          "paroladordine",
          "parole",
          "parool",
          "pasahitza",
          "pass",
          "passord",
          "password",
          "passwort",
          "pw",
          "pwd",
          "pword",
          "pwrd",
          "salasana",
          "sapwd",
          "senha",
          "sifre",
          "slaptažodis",
          "userpw",
          "userpwd",
          "wachtwoord",
          "лозинка",
          "парола",
          "пароль",
          "פּאַראָל",
          "كلمهالسر",
          "पासवर्ड",
          "パスワード",
          "密码",
          "密碼",
          "암호",
          "cc",
          "cccsc",
          "cccvc",
          "cccvv",
          "ccexp",
          "ccexpiry",
          "ccexpmonth",
          "ccexpyear",
          "ccname",
          "ccnum",
          "ccnumber",
          "cctype",
          "creditcard",
          "csc",
          "cvc",
          "cvv",
          "exp",
          "accountnum",
          "accountnumber",
          "bic",
          "iban",
          "ibanaccountnum",
          "ibanaccountnumber",
          "pin",
          "pinno",
          "pinnum",
          "secq",
          "secret",
          "secretq",
          "secretquestion",
          "securityq",
          "securityquestion",
          "sortcode",
          "swift",
        ],
        c = hj.tryCatch(function (e) {
          return [e.name, e.id]
            .map(function (e) {
              return e.replace(/[\s_-]+/g, "").toLocaleLowerCase();
            })
            .some(function (e) {
              return d.indexOf(e) > -1;
            });
        }, "hj.privacy._hasSuppressedNameOrId"),
        l = /\d+/,
        p = new RegExp(l.source, "g"),
        h = hj.tryCatch(function (e) {
          return l.test(e);
        }, "hj.privacy._hasDigitSequence"),
        u = /([+(]{0,2}\d[-_ ()\/]{0,4}){9,}/,
        _ = new RegExp(u.source, "g"),
        g = hj.tryCatch(function (e) {
          return u.test(e);
        }, "hj.privacy._hasCCNumOrSSN"),
        m = /[^@\s]+@[^@\s]+\.[^@\s]+/,
        f = new RegExp(m.source, "g"),
        b = hj.tryCatch(function (e) {
          return e.indexOf("@") > -1 && m.test(e);
        }, "hj.privacy._hasEmail"),
        w = [
          function (e) {
            return !!hj.settings.anonymize_digits && h(e);
          },
          function (e) {
            return !hj.settings.anonymize_digits && g(e);
          },
          function (e) {
            return !!hj.settings.anonymize_emails && b(e);
          },
        ],
        v = ["style", "script"],
        y = hj.tryCatch(function (e) {
          if (e && e.tagName) {
            var t = e.tagName.toLowerCase();
            return v.indexOf(t) > -1;
          }
        }, "hj.privacy._isWhitelistedElement"),
        j = hj.tryCatch(function (e, t) {
          return (
            (!t || !y(t)) &&
            w.some(function (t) {
              return t(e);
            })
          );
        }, "hj.privacy._shouldSuppressTextContent"),
        k = hj.tryCatch(function (e) {
          return e.value || e.textContent;
        }),
        x = [
          s,
          c,
          function (e) {
            return g(k(e));
          },
          function (e) {
            return b(k(e));
          },
        ],
        C = hj.tryCatch(function (e) {
          return x.some(function (t) {
            return t(e);
          });
        }, "hj.privacy._shouldSuppressInputOrTextarea"),
        S = hj.tryCatch(function (e) {
          return (
            ("object" == typeof e.attributes &&
              (void 0 !== e.attributes["data-hj-suppress"] ||
                void 0 !== e.attributes["data-hj-masked"])) ||
            ("string" == typeof e.className &&
              e.className &&
              e.className.indexOf("data-hj-suppress") > -1)
          );
        }, "hj.privacy._isExplicitlySuppressed"),
        z = hj.tryCatch(function (e) {
          var t = Object.prototype.toString.call(e);
          return (
            -1 !== ["[object HTMLDocument]", "[object Document]"].indexOf(t)
          );
        }, "hj.privacy._isDocument"),
        D = hj.tryCatch(function (e) {
          for (; e && !z(e); ) {
            if (S(e)) return !0;
            e = e.parentNode ? e.parentNode : null;
          }
          return !1;
        }, "hj.privacy._isSelfOrAncestorSuppressed");
      hj.privacy = hj.tryCatch(function () {
        var t = {};
        return (
          (t.isRiskyNotWhitelistedOrSuppressedElement = hj.tryCatch(function (
            e,
            t
          ) {
            if (void 0 === e || !e || void 0 === e.tagName) return !1;
            if (hj.settings.suppress_all) return !0;
            if (hj.settings.suppress_text)
              return (
                "IMG" !== e.tagName ||
                !t ||
                ("src" !== t.name && "style" !== t.name) ||
                D(e)
              );
            var o =
              "TEXTAREA" === e.tagName || ("INPUT" === e.tagName && !i(e));
            return o && a(e) ? C(e) : o || D(e);
          },
          "hj.privacy.isRiskyNotWhitelistedOrSuppressedElement")),
          (t.isAttributeSuppressable = hj.tryCatch(function (e, t, i, o) {
            var a = {
              INPUT: { attrs: ["value"] },
              TEXTAREA: { attrs: ["value"] },
              A: {
                attrs: ["href"],
                shouldSuppressAttrValueCheck: function (e) {
                  return !!!e.match(/^data:/);
                },
              },
              OPTION: { attrs: ["label", "value"] },
              PROGRESS: { attrs: ["value"] },
              OPTGROUP: { attrs: ["label"] },
              IMG: { attrs: ["alt"] },
              DIV: { attrs: ["title"] },
              META: function (e, t, i) {
                switch (e) {
                  case "content":
                    return (
                      (!i.name || "viewport" !== i.name.value) &&
                      (!i["http-equiv"] || !n(i))
                    );
                  case "name":
                    return "viewport" !== t;
                  case "http-equiv":
                    return !n(i);
                  case "charset":
                    return !1;
                  default:
                    return !0;
                }
              },
            }[e];
            return (
              void 0 !== a &&
              ("function" == typeof a
                ? a(t, i, o)
                : !(a.attrs.indexOf(t) < 0) &&
                  (void 0 === a.shouldSuppressAttrValueCheck ||
                    a.shouldSuppressAttrValueCheck(i)))
            );
          }, "hj.privacy.isAttributeSuppressable")),
          (t.hasPotentialPIIData = hj.tryCatch(function (e, t) {
            return (t = z(t) ? null : t), j(e, t);
          }, "hj.privacy.hasPotentialPIIData")),
          (t.getSuppressedText = hj.tryCatch(function (t, i) {
            return e.getSuppressedText(t, i);
          }, "hj.privacy.getSuppressedText")),
          (t.getSuppressedTextNode = hj.tryCatch(function (i, o) {
            var n = i.parentNode || null,
              a =
                (o = o || t.isRiskyNotWhitelistedOrSuppressedElement(n)) ||
                (n && "textarea" === n.type)
                  ? "full"
                  : "partial";
            return {
              content: (o =
                !y(n) && (o || t.hasPotentialPIIData(i.textContent, n)))
                ? e.getSuppressedText(a, i.textContent)
                : i.textContent,
              shouldSuppressNode: o,
            };
          })),
          (t.getSuppressedNodeAttribute = hj.tryCatch(function (i, o, n) {
            var a = o.value,
              r = o.name;
            if ("data-hj-suppressed" !== r)
              return (
                "IMG" !== i.tagName ||
                  ("src" !== r && "srcset" !== r && "style" !== r) ||
                  ((n = t.isRiskyNotWhitelistedOrSuppressedElement(i, o)),
                  t.isRiskyNotWhitelistedOrSuppressedElement(i, o) &&
                    ((r = "data-hj-suppressed"),
                    (a = e.getSuppressedImageNode(i)))),
                t.isAttributeSuppressable(i.tagName, r, a, i.attributes) &&
                  ((n = n || t.isRiskyNotWhitelistedOrSuppressedElement(i)) ||
                  "META" === i.tagName
                    ? (a = e.getSuppressedText("full", a))
                    : t.hasPotentialPIIData(a) &&
                      (a = e.getSuppressedText("partial", a))),
                { name: r, value: a, shouldSuppressNode: n }
              );
          })),
          (t.getSuppressedNode = hj.tryCatch(function (e, i) {
            for (var o = {}, n = i, a = 0; a < e.attributes.length; a++) {
              var r = e.attributes[a],
                s = t.getSuppressedNodeAttribute(e, r, i);
              s && ((o[s.name] = s.value), (n = n || s.shouldSuppressNode));
            }
            return {
              node: { tagName: e.tagName, attributes: o || {} },
              shouldSuppressNode: n,
            };
          })),
          t
        );
      }, "hj.privacy")();
    }, "hj.privacy")();
  },
  function (e, t) {
    hj.tryCatch(function () {
      var e, t, i, o, n, a;
      hj.loader.registerModule(
        "BehaviorData",
        ((o = {}),
        (n = !1),
        (a = !1),
        (e = (function () {
          var e,
            t,
            i,
            o,
            r,
            s,
            d,
            c,
            l,
            p,
            h,
            u,
            _,
            g,
            m,
            f,
            b = {},
            w = 2;
          return (
            (b.enableRecording = hj.tryCatch(function () {
              (n = !0),
                l.listen(),
                r.listen(),
                d.listen(),
                s.listen(),
                h.listen(),
                u.listen(),
                t.listen(),
                o.listen(),
                g.listen(),
                m.listen(),
                c.listen(),
                f.listen(),
                i.listen();
            }, "behavior-data")),
            (b.enableHeatmap = hj.tryCatch(function (e) {
              (a = !0), d.listen(), s.listen(), p.listen(), t.listen(), (w = e);
            }, "behavior-data")),
            (b.disableHeatmap = hj.tryCatch(function () {
              a = !1;
            }, "behavior-data")),
            (e = hj.tryCatch(function () {
              return a || n;
            }, "behavior-data")),
            (s = hj.tryCatch(function () {
              var t = {},
                i = !1;
              return (
                (t.listen = hj.tryCatch(function () {
                  i ||
                    (hj.log.debug(
                      "Setting up mouse click listeners.",
                      "events"
                    ),
                    hj.hq(document).on("mousedown", t.send),
                    (i = !0));
                }, "behavior-data")),
                (t.send = hj.tryCatch(function (t) {
                  if (e()) {
                    var i,
                      o,
                      a = hj.selector(w).get(hj.hq(t.target)),
                      r = [];
                    "target" in t &&
                      "pageX" in t &&
                      "pageY" in t &&
                      void 0 !== a &&
                      ((i = hj.hq(t.target).offset()),
                      (r.left = t.pageX - i.left),
                      (r.top = t.pageY - i.top),
                      (o = { offset_x: r.left, offset_y: r.top, selector: a }),
                      n &&
                        ((o.time = hj.time.getNow()),
                        (o.timestamp = Date.now())),
                      hj.eventStream.write("mouse_click", o, !1).flush());
                  }
                }, "behavior-data")),
                t
              );
            }, "behavior-data")()),
            (d = hj.tryCatch(function () {
              var t = {},
                i = !1,
                o = 0,
                r = 0,
                s = !1,
                d = 0,
                c = 0,
                l = null;
              return (
                (t.listen = hj.tryCatch(function () {
                  i ||
                    (hj.log.debug("Setting up mouse move listeners.", "events"),
                    hj.hq(document).on("mousemove", t.update),
                    setInterval(t.send, 100),
                    (i = !0));
                }, "behavior-data")),
                (t.update = hj.tryCatch(function (e) {
                  var t, i;
                  (o = e.clientX),
                    (r = e.clientY),
                    (t = hj.hq(document.elementFromPoint(o, r)))[0] &&
                      (i = t.offset()) &&
                      ((d = e.pageX - parseInt(i.left, 10)),
                      (c = e.pageY - parseInt(i.top, 10)),
                      (l = hj.selector(w).get(t)),
                      (s = !0));
                }, "behavior-data")),
                (t.send = hj.tryCatch(function () {
                  e() &&
                    s &&
                    (n &&
                      hj.eventStream.write("mouse_move", {
                        time: hj.time.getNow(),
                        timestamp: Date.now(),
                        x: o,
                        y: r,
                      }),
                    a &&
                      hj.eventStream.write("relative_mouse_move", {
                        offset_x: d,
                        offset_y: c,
                        selector: l,
                      }),
                    (s = !1));
                }, "behavior-data")),
                t
              );
            }, "behavior-data")()),
            (t = hj.tryCatch(function () {
              var t = {},
                i = !1;
              return (
                (t.listen = hj.tryCatch(function () {
                  i ||
                    (hj.log.debug(
                      "Setting up frame mouse click listeners.",
                      "events"
                    ),
                    t.send(),
                    (i = !0));
                }, "behavior-data.frameMouseClicks.listen")),
                (t.send = hj.tryCatch(function () {
                  if (e()) {
                    var t = hj.hq("iframe"),
                      i = !1,
                      o =
                        location.protocol +
                        "//" +
                        location.hostname +
                        (location.port ? ":" + location.port : ""),
                      a = hj.utils.isFirefox() ? document : window;
                    if (t.length) {
                      var r = function () {
                        i = !1;
                      };
                      [].forEach.call(t, function (e) {
                        -1 !== e.src.indexOf(o)
                          ? hj
                              .hq(e.contentWindow)
                              .on("mousedown", function (t) {
                                d(e, t);
                              })
                          : hj.hq(e).on("mouseover", function () {
                              s(e);
                            }),
                          hj.hq(e).on("mouseout", r);
                      }),
                        hj.hq(a).on("blur", function () {
                          i && d(i);
                        });
                      var s = function (e) {
                          i = e;
                        },
                        d = function (e, t) {
                          var i,
                            o = hj.hq(e),
                            a = hj.selector(w).get(o),
                            r = [];
                          a &&
                            (t
                              ? ((r.left = t.pageX), (r.top = t.pageY))
                              : ((r.left = o.width() / 2),
                                (r.top = o.height() / 2)),
                            (i = {
                              offset_x: r.left,
                              offset_y: r.top,
                              selector: a,
                            }),
                            n &&
                              ((i.time = hj.time.getNow()),
                              (i.timestamp = Date.now())),
                            hj.eventStream.write("mouse_click", i, !1).flush());
                        };
                    }
                  }
                }, "behavior-data.frameMouseClicks.send")),
                t
              );
            }, "behavior-data.frameMouseClicks")()),
            (i = hj.tryCatch(function () {
              var e = {};
              return (
                (e.listen = hj.tryCatch(function () {
                  hj.insertedRules.init(),
                    hj.insertedRules.register(e.send, !0),
                    hj.cssBlobs.register(e.send);
                })),
                (e.send = hj.tryCatch(function (e) {
                  e.length &&
                    setTimeout(
                      hj.tryCatch(function () {
                        var t = {
                          time: hj.time.getNow(),
                          timestamp: Date.now(),
                          rules: e,
                        };
                        hj.debug.emit("inserted_rule", t),
                          hj.eventStream.write("inserted_rule", t, !1);
                      })
                    );
                })),
                e
              );
            }, "behavior-data.insertedRules")()),
            (c = hj.tryCatch(function () {
              var e = {};
              return (
                (e.listen = hj.tryCatch(function () {
                  document.addEventListener(
                    "visibilitychange",
                    function () {
                      e.send(!document.hidden);
                    },
                    !1
                  );
                })),
                (e.send = hj.tryCatch(function (e) {
                  var t = {
                    time: hj.time.getNow(),
                    timestamp: Date.now(),
                    page_visible: e,
                  };
                  hj.debug.emit("page_visibility", t),
                    hj.eventStream.write("page_visibility", t, !1).flush();
                })),
                e
              );
            }, "behavior-data.pageVisibility")()),
            (p = hj.tryCatch(function () {
              var e = {},
                t = !1,
                i = 0;
              return (
                (e.listen = hj.tryCatch(function () {
                  t ||
                    (hj.log.debug(
                      "Setting up scroll reach listeners.",
                      "events"
                    ),
                    hj.hq(window).on("scroll resize", e.send, !0),
                    (t = !0));
                }, "behavior-data.scrollReach.listen")),
                (e.send = hj.tryCatch(function () {
                  if (a) {
                    var e = hj.ui.getBottomAsPercentage();
                    e > i &&
                      ((i = e),
                      hj.eventStream.write(
                        "scroll_reach",
                        { max_bottom: i },
                        !0
                      ));
                  }
                }, "behavior-data.scrollReach.send")),
                e
              );
            }, "behavior-data.scrollReach")()),
            (l = hj.tryCatch(function () {
              var e,
                t = {},
                i = !1,
                o = !1;
              return (
                (t.listen = hj.tryCatch(function () {
                  i ||
                    (hj.log.debug("Setting up scroll listeners.", "events"),
                    window.addEventListener("scroll", t.update, !0),
                    setInterval(t.send, 100),
                    0 !== hj.ui.getScrollPosition().top && t.update(),
                    (i = !0));
                }, "behavior-data.scroll.listen")),
                (t.update = hj.tryCatch(function (t) {
                  (e = t
                    ? t.target === window.document
                      ? window
                      : t.target
                    : window),
                    (o = !0);
                }, "behavior-data.scroll.update")),
                (t.send = hj.tryCatch(function () {
                  var t, i;
                  n &&
                    o &&
                    ((t =
                      (e = e || window) === window
                        ? "window"
                        : hj.selector(w).get(hj.hq(e)) || "window"),
                    (i = hj.ui.getScrollPosition(e)),
                    hj.eventStream.write("scroll", {
                      elem: t,
                      time: hj.time.getNow(),
                      timestamp: Date.now(),
                      x: i.left,
                      y: i.top,
                    }),
                    (o = !1));
                }, "behavior-data.scroll.send")),
                t
              );
            }, "behavior-data.scroll")()),
            (u = hj.tryCatch(function () {
              var e,
                t = {},
                i = !1;
              return (
                (t.listen = hj.tryCatch(function () {
                  i ||
                    (hj.log.debug(
                      "Setting up screen size change listeners.",
                      "events"
                    ),
                    (e = hj.ui.getWindowSize()),
                    setInterval(t.checkResize, 1e3),
                    t.checkResize(),
                    (i = !0));
                }, "behavior-data.viewportResize.listen")),
                (t.checkResize = hj.tryCatch(function () {
                  var i = hj.ui.getWindowSize();
                  (i.width === e.width && i.height === e.height) ||
                    ((e = i), t.send());
                }, "behavior-data.viewportResize.checkResize")),
                (t.send = hj.tryCatch(function () {
                  n &&
                    hj.eventStream
                      .write("viewport_resize", {
                        time: hj.time.getNow(),
                        timestamp: Date.now(),
                        w: e.width,
                        h: e.height,
                      })
                      .flush();
                }, "behavior-data.viewportResize.send")),
                t
              );
            }, "behavior-data.viewportResize")()),
            (r = hj.tryCatch(function () {
              var e = {},
                t = !1,
                i = !1,
                o = !1,
                a = [];
              return (
                (e.listen = hj.tryCatch(function () {
                  t ||
                    (hj.log.debug("Setting up key press listeners.", "events"),
                    hj.hq(document).on("input", "input", e.update),
                    hj.hq(document).on("blur", "input", e.send),
                    hj.hq(document).on("input", "textarea", e.update),
                    hj.hq(document).on("blur", "textarea", e.send),
                    (t = !0));
                }, "behavior-data.keyPress.listen")),
                (e.update = hj.tryCatch(function (e) {
                  var t = hj.hq(e.target),
                    n = t.val();
                  (o =
                    o ||
                    hj.privacy.isRiskyNotWhitelistedOrSuppressedElement(
                      e.target
                    )),
                    a.push({
                      time: hj.time.getNow(),
                      timestamp: Date.now(),
                      selector: hj.selector().get(t),
                      text: n,
                      type: e.target.type,
                      suppression: o ? "full" : "none",
                    }),
                    (i = !0);
                }, "behavior-data.keyPress.update")),
                (e.send = hj.tryCatch(function () {
                  if (n && i) {
                    if (o) {
                      var e = a[0],
                        t = a[a.length - 1],
                        r = hj.privacy.getSuppressedText(e.type, t.text),
                        s = Math.floor(
                          (t.time - e.time) / Math.max(r.length, 1)
                        );
                      a = [];
                      for (var d = 0; d < Math.min(r.length - 1, 500); d++)
                        a.push({
                          time: e.time + s * d,
                          timestamp: e.timestamp + s * d,
                          selector: e.selector,
                          text: r.substring(0, d + 1),
                          type: e.type,
                          suppression: "full",
                        });
                      (t.text = r), a.push(t);
                    }
                    hj.hq.each(a, function (e, t) {
                      delete t.type;
                    }),
                      hj.eventStream.write("key_press", a, !0).flush(),
                      (i = !1),
                      (o = !1),
                      (a = []);
                  }
                }, "behavior-data.keyPress.send")),
                e
              );
            }, "behavior-data.keyPress")()),
            (h = hj.tryCatch(function () {
              var e = {},
                t = !1;
              return (
                (e.listen = hj.tryCatch(function () {
                  t ||
                    (hj.log.debug(
                      "Setting up select change listeners.",
                      "events"
                    ),
                    hj.hq(document).on("change", "select", e.send),
                    (t = !0));
                }, "behavior-data.selectChange.listen")),
                (e.send = hj.tryCatch(function (e) {
                  if (n) {
                    var t = hj.hq(e.target),
                      i = hj.selector().get(t),
                      o = t.val();
                    hj.eventStream
                      .write(
                        "select_change",
                        {
                          value: o,
                          selector: i,
                          time: hj.time.getNow(),
                          timestamp: Date.now(),
                        },
                        !0
                      )
                      .flush();
                  }
                }, "behavior-data.selectChange.send")),
                e
              );
            }, "behavior-data")()),
            (o = hj.tryCatch(function () {
              var e = {},
                t = !1;
              return (
                (e.listen = hj.tryCatch(function () {
                  t ||
                    (hj.log.debug(
                      "Setting up input choice change listeners.",
                      "events"
                    ),
                    hj
                      .hq(document)
                      .on(
                        "change",
                        "input[type=checkbox], input[type=radio]",
                        e.send
                      ),
                    (t = !0));
                }, "behavior-data.inputChoiceChange.listen")),
                (e.send = hj.tryCatch(function (e) {
                  if (n) {
                    var t = hj.hq(e.target),
                      i = hj.selector().get(t),
                      o = t.is(":checked");
                    hj.eventStream
                      .write(
                        "input_choice_change",
                        {
                          value: o,
                          selector: i,
                          time: hj.time.getNow(),
                          timestamp: Date.now(),
                        },
                        !0
                      )
                      .flush();
                  }
                }, "behavior-data.inputChoiceChange.send")),
                e
              );
            }, "behavior-data.inputChoiceChange")()),
            (_ = hj.tryCatch(function (e) {
              var t = {},
                i = !1;
              return (
                (t.listen = hj.tryCatch(function () {
                  i ||
                    (hj.log.debug(
                      "Setting up " + e + " event listener.",
                      "events"
                    ),
                    hj.hq(document).on(e, t.send),
                    (i = !0));
                }, "behavior-data." + e + ".listen")),
                (t.send = hj.tryCatch(function () {
                  n &&
                    hj.eventStream
                      .write(
                        "clipboard",
                        {
                          time: hj.time.getNow(),
                          timestamp: Date.now(),
                          action: e,
                        },
                        !0
                      )
                      .flush();
                }, "behavior-data." + e + ".send")),
                t
              );
            }, "behavior-data.newClipboardEventListener")),
            (g = _("copy")),
            (m = _("cut")),
            (f = _("paste")),
            b
          );
        })()),
        (t = hj.tryCatch(function () {
          var t = { active: !1 };
          return (
            (t.setup = hj.tryCatch(function (t) {
              var i = hj.visitData.property,
                o = hj.ui.getWindowSize();
              hj.eventStream
                .write({
                  heatmap_helo: function () {
                    var e = hj.visitData.getPageVisitInfo(
                      i,
                      o,
                      hj.settings.site_id
                    );
                    return {
                      heatmap_id: t.id,
                      max_bottom: hj.ui.getBottomAsPercentage(),
                      page_visit_info: e,
                    };
                  },
                })
                .flush(),
                e.enableHeatmap(t.selector_version);
            }, "behavior-data.heatmap.setup")),
            t
          );
        }, "behavior-data.heatmap")()),
        (i = hj.tryCatch(function () {
          var t,
            i = {
              autoTagsToProcess: [],
              tagsToProcess: [],
              active: !1,
              treeMirrorInitialized: !1,
            };
          return (
            (i.start = hj.tryCatch(function () {
              var o = hj.time.getNow(),
                a = Date.now();
              (n = !0), sessionStorage.setItem("_hjRecordingEnabled", !0);
              var r = hj.visitData.property,
                s = hj.ui.getWindowSize();
              hj.eventStream
                .write({
                  recording_helo: function () {
                    var e = hj.visitData.getPageVisitInfo(
                      r,
                      s,
                      hj.settings.site_id
                    );
                    return {
                      playback_version: 3,
                      script_context_id: hj.scriptContextId,
                      start_time: o,
                      start_timestamp: a,
                      page_visit_info: e,
                    };
                  },
                })
                .flush(),
                e.enableRecording(),
                (i.active = !0),
                i.tagsToProcess.length &&
                  (hj.eventStream
                    .write("tag_recording", i.tagsToProcess, !0)
                    .flush(),
                  (i.tagsToProcess = [])),
                i.autoTagsToProcess.length &&
                  (hj.eventStream
                    .write("autotag_recording", i.autoTagsToProcess, !0)
                    .flush(),
                  (i.autoTagsToProcess = [])),
                hj.globals.ready("pageContentUrlMD5", function () {
                  t(r);
                }),
                i.treeMirrorInitialized ||
                  r.ready("pageInfo", function (e) {
                    i.initializeTreeMirror(e);
                  });
            }, "behavior-data.recording.start")),
            (t = hj.tryCatch(function (e) {
              var t = hj.globals.get("pageContentUrlMD5"),
                i = hj.globals.get("pageContentMD5"),
                o = hj.dom.getCSSURLs().map(function (e) {
                  return {
                    content_type: 2,
                    url: e,
                    url_hash: hj.md5(hj.b64EncodeUnicode(e)),
                  };
                });
              hj.eventStream
                .writeNewFrame(
                  {
                    report_content: {
                      page_content_url_md5: t,
                      page_content_md5: i,
                      web_resource_infos: o,
                    },
                  },
                  e.key
                )
                .flush();
            }, "behavior-data.recording.sendReportContent")),
            (i.setAndSendPageContent = function (e, t) {
              var i = e.get("pageInfo").urlMD5;
              hj.globals.ready(
                "userId",
                hj.tryCatch(function () {
                  hj.resource.StorePageContentResource.post(
                    { site_id: hj.settings.site_id, content: t },
                    hj.tryCatch(function (e) {
                      hj.globals.set("pageContentMD5", e.content_md5),
                        hj.globals.set("pageContentUrlMD5", i);
                    }, "behavior-data.setAndSendPageContent.StorePageContentResource.post")
                  );
                }, "setAndSendPageContent.tryStorePageContent")
              );
            }),
            (i.initializeTreeMirror = hj.tryCatch(function (e) {
              var t = {};
              hj.treeMirror.mutationObserverAvailable &&
                hj.treeMirror.getTree(
                  function (t, o) {
                    i.setAndSendPageContent(
                      e,
                      JSON.stringify({
                        docType: hj.html.getPageDoctype(),
                        rootId: t,
                        children: o,
                      })
                    ),
                      (i.treeMirrorInitialized = !0);
                  },
                  function (e, i, o, n) {
                    (t = {}),
                      (e.length || i.length || o.length || n.length) &&
                        ((t.time = hj.time.getNow()),
                        (t.timestamp = Date.now()),
                        e.length && (t.a = e),
                        i.length && (t.b = i),
                        o.length && (t.c = o),
                        n.length && (t.d = n),
                        hj.debug.emit("mutation", t),
                        hj.eventStream.write("mutation", t, !1));
                  }
                );
            }, "behavior-data.initializeTreeMirror")),
            i
          );
        }, "behavior-data.recording")()),
        (hj.behaviorData = hj.tryCatch(function () {
          var e = {
            tagRecording: function (e, t) {
              e = e || [];
              var o,
                n,
                a = [];
              for (o = 0; o < e.length; o += 1)
                (n = hj.hq.trim(e[o])).length &&
                n.length <= hj.maxRecordingTagLength
                  ? a.push({
                      name: n,
                      time: hj.time.getNow(),
                      timestamp: Date.now(),
                    })
                  : hj.log.warn(
                      'Invalid recording tag: "' +
                        n +
                        '", should have length 1..' +
                        hj.maxRecordingTagLength +
                        " characters, was " +
                        n.length +
                        "."
                    );
              if (a.length)
                if (i.active) {
                  var r = t ? "autotag_recording" : "tag_recording";
                  hj.eventStream.write(r, a, !0).flush();
                } else
                  t
                    ? (i.autoTagsToProcess = i.autoTagsToProcess.concat(a))
                    : (i.tagsToProcess = i.tagsToProcess.concat(a));
            },
            startRecording: function () {
              hj.notification.show(
                "Recording session",
                "Hotjar is recording this session.",
                "good"
              ),
                i.start();
            },
            setupHeatmap: function (e) {
              hj.notification.show(
                "Collecting Heatmap data",
                "Hotjar is tracking this session.",
                "good"
              ),
                t.setup(e);
            },
          };
          return e;
        }, "behavior-data.behaviorData")()),
        (o.run = hj.tryCatch(function (e) {
          var o, a;
          !hj.isPreview &&
            hj.includedInSample &&
            (hj.hq.each(hj.hq("[data-hj-ignore-attributes]"), function (e, t) {
              hj.hq(t).find("*").attr("data-hj-ignore-attributes", "");
            }),
            hj.hq.each(hj.settings.heatmaps || [], function (i, o) {
              hj.targeting.matchRules(
                o.targeting,
                e,
                hj.tryCatch(function () {
                  t.setup(o);
                }, "behavior-data.run.matchRules-callback")
              );
            }),
            (i.active = !1),
            hj.settings.record &&
              ((a =
                void 0 === hj.settings.record_targeting_rules ||
                !hj.settings.record_targeting_rules.length),
              (o = (function () {
                var e,
                  t = new hj.fingerprinter();
                if (
                  null === hj.settings.rec_value ||
                  "1" === hj.settings.rec_value.toString()
                )
                  return !0;
                var i = hj.settings.rec_value * hj.settings.r_value;
                return (
                  (e = t.compareRatio(i || 1)),
                  hj.log.debug(
                    "Rec Value sampling at " +
                      hj.settings.rec_value +
                      "; Recording Sampled? " +
                      e,
                    " recordings"
                  ),
                  e
                );
              })()),
              (n = !!sessionStorage.getItem("_hjRecordingEnabled")),
              hj.log.debug("_hjRecordingEnabled is set to " + n, " recordings"),
              n || (a && o)
                ? i.start()
                : o &&
                  hj.targeting.matchRules(
                    hj.settings.record_targeting_rules,
                    e,
                    hj.tryCatch(function () {
                      i.start();
                    }, "behavior-data.run.matchRules-callback")
                  )));
        }, "behavior-data.run")),
        (hj.disableHeatmap = e.disableHeatmap),
        o),
        !1
      );
    }, "behavior-data")();
  },
  function (e, t) {
    hj.tryCatch(function () {
      hj.insertedRules = (function () {
        var e,
          t = {},
          i = !1,
          o = [];
        return (
          (t.init = function () {
            i ||
              ((e = CSSStyleSheet.prototype.insertRule),
              (CSSStyleSheet.prototype.insertRule = function () {
                var t = Array.prototype.slice.call(arguments),
                  i = e.apply(this, arguments),
                  n = {
                    parentSelector: hj.selector().get(hj.hq(this.ownerNode)),
                    rule: t[0],
                    index: t[1],
                  };
                return (
                  o.forEach(function (e) {
                    e([n]);
                  }),
                  i
                );
              }),
              (i = !0));
          }),
          (t.register = function (e, i) {
            o.push(e), i && e(t.getCurrentInsertedRules());
          }),
          (t.getCurrentInsertedRules = hj.tryCatch(function (e) {
            for (
              var t = Array.prototype.slice,
                i = t.call(document.styleSheets).filter(function (i) {
                  if (
                    void 0 !== e &&
                    !0 === e &&
                    i.href &&
                    0 === i.href.indexOf("blob:")
                  )
                    return !0;
                  var o = "";
                  if (i.href && 0 !== i.href.indexOf("blob:")) return !1;
                  try {
                    i.cssRules && i.cssRules.length;
                  } catch (e) {
                    return !1;
                  }
                  if (0 === i.cssRules.length) return !1;
                  void 0 !== i.ownerNode.innerText
                    ? (o = i.ownerNode.innerText)
                    : void 0 !== i.ownerNode.innerHTML &&
                      (o = i.ownerNode.innerHTML);
                  var n = o.match(/{/g);
                  return (
                    (n ? n.length : 0) <
                    (function e(i) {
                      var o = 0;
                      return (
                        t.call(i).forEach(function (t) {
                          t.cssRules ? (o++, (o += e(t.cssRules))) : o++;
                        }),
                        o
                      );
                    })(i.cssRules)
                  );
                }),
                o = [],
                n = 0,
                a = i.length;
              n < a;
              n++
            ) {
              var r = i[n],
                s = hj.selector().get(hj.hq(r.ownerNode)),
                d = t.call(r.cssRules),
                c = d.length;
              d.forEach(function (e, t) {
                o.push({ parentSelector: s, rule: e.cssText, index: t + c });
              });
            }
            return o;
          }, "hj.insertedRules.getCurrentInsertedRules")),
          (t.destroy = function () {
            e &&
              ((CSSStyleSheet.prototype.insertRule = e), (e = null), (i = !1)),
              (o = []);
          }),
          t
        );
      })();
    }, "hj.insertedRules")();
  },
  function (e, t) {
    hj.tryCatch(function () {
      var e, t;
      hj.cssBlobs =
        ((t = []),
        ((e = {}).register = function (e) {
          t.push(e);
        }),
        (e.handleBlobStyles = hj.tryCatch(function (e) {
          var i,
            o = [];
          "link" === e.tagName.toLowerCase() &&
            "rel" in e.attributes &&
            "stylesheet" === e.attributes.rel.value &&
            "href" in e.attributes &&
            0 === e.attributes.href.value.indexOf("blob:") &&
            setTimeout(function () {
              i = hj.selector().get(hj.hq(e));
              for (var n = 0, a = e.sheet.cssRules.length; n < a; n++)
                o.push({
                  parentSelector: i,
                  rule: e.sheet.cssRules[n].cssText,
                  index: a + n,
                });
              t.forEach(function (e) {
                e(o);
              });
            }, 100);
        }, "hj.cssBlobs.apply")),
        e);
    }, "hj.cssBlobs")();
  },
  function (e, t) {
    hj.tryCatch(function () {
      var e, t, i, o;
      hj.loader.registerModule(
        "UserBehavior",
        ((o = {}),
        (hj.userBehavior = hj.tryCatch(function () {
          var o = {
            send: function (e) {
              hj.behaviorData.tagRecording([e], !0);
            },
            setupEvents: function () {
              hj.features.hasFeature("user_behavior") &&
                (e.listen(), t.listen(), i.listen());
            },
          };
          return o;
        }, "user-behavior.userBehavior")()),
        (e = (function () {
          var e,
            t,
            i = {},
            o = {
              desktop: { time: 600, distance: 200, clicks: 6 },
              mobile: { time: 600, distance: 200, clicks: 6 },
              tablet: { time: 600, distance: 200, clicks: 6 },
            },
            n = 0,
            a = { x: null, y: null };
          function r() {
            (n = 0), (a.x = null), (a.y = null);
          }
          function s(i) {
            var o, s;
            (o = i.clientX),
              (s = i.clientY),
              (document.body.clientWidth && o > document.body.clientWidth) ||
                (document.body.clientHeight &&
                  s > document.body.clientHeight) ||
                (n++,
                t && clearInterval(t),
                (t = setTimeout(r, e.time)),
                (function (t, i) {
                  var o = Math.abs(t - a.x),
                    n = Math.abs(i - a.y);
                  Math.sqrt(Math.pow(o, 2) + Math.pow(n, 2)) > e.distance &&
                    r();
                })(i.clientX, i.clientY),
                (a.x = i.clientX),
                (a.y = i.clientY),
                n === e.clicks && hj.userBehavior.send("rageclick"));
          }
          return (
            (i.listen = function () {
              (e = o[hj.deviceDetection.getDevice()]),
                hj.hq(document).on("mousedown.user_behavior_rageclick", s);
            }),
            (i.disable = function () {
              hj.hq(document).on("mousedown.user_behavior_rageclick");
            }),
            i
          );
        })()),
        (t = (function () {
          var e,
            t,
            i = {},
            o = {
              desktop: { time: 1e3, directionChanges: 4 },
              mobile: { time: 1e3, directionChanges: 4 },
              tablet: { time: 1e3, directionChanges: 4 },
            },
            n = 0,
            a = !1,
            r = 0;
          function s() {
            (n = 0), (a = !1);
          }
          function d() {
            t && clearInterval(t), (t = setTimeout(s, e.time));
            var i = hj.hq(window).scrollTop(),
              o = r - i < 0 ? "down" : "up";
            a &&
              o !== a &&
              ++n === e.directionChanges &&
              hj.userBehavior.send("wildscroll"),
              (a = o),
              (r = i);
          }
          return (
            (i.listen = function () {
              (e = o[hj.deviceDetection.getDevice()]),
                hj.hq(document).on("scroll.user_behavior_wildscroll", d);
            }),
            (i.disable = function () {
              hj.hq(document).on("scroll.user_behavior_wildscroll");
            }),
            i
          );
        })()),
        (i = (function () {
          var e,
            t,
            i = {},
            o = {
              desktop: { time: 100, distance: 200, directionChanges: 5 },
              mobile: { time: 100, distance: 200, directionChanges: 5 },
              tablet: { time: 100, distance: 200, directionChanges: 5 },
            },
            n = 0,
            a = { x: !1, y: !1 },
            r = { x: 0, y: 0 },
            s = { x: 0, y: 0 };
          function d() {
            (n = 0), (a.x = !1), (a.y = !1);
          }
          function c(i) {
            var o = { x: i.clientX, y: i.clientY },
              c = {
                x: o.x < r.x ? "left" : o.x === r.x ? a.x : "right",
                y: o.y < r.y ? "up" : o.y === r.y ? a.y : "down",
              };
            ((a.x && c.x !== a.x) || (a.y && c.y !== a.y)) &&
              ((function (t, i) {
                if (s.x && s.y) {
                  var o = Math.abs(t - s.x),
                    n = Math.abs(i - s.y);
                  return (
                    Math.sqrt(Math.pow(o, 2) + Math.pow(n, 2)) <= e.distance
                  );
                }
                return !0;
              })(o.x, o.y)
                ? ++n === e.directionChanges
                  ? hj.userBehavior.send("madmouse")
                  : (t && clearInterval(t), (t = setTimeout(d, e.time)))
                : d(),
              (s = o)),
              (a = c),
              (r = o);
          }
          return (
            (i.listen = function () {
              (e = o[hj.deviceDetection.getDevice()]),
                hj.hq(document).on("mousemove.user_behavior_madmouse", c);
            }),
            (i.disable = function () {
              hj.hq(document).on("scroll.user_behavior_madmouse");
            }),
            i
          );
        })()),
        (o.run = hj.tryCatch(function (e) {
          hjSiteSettings.record && hj.userBehavior.setupEvents(e);
        }, "user-behavior.run")),
        o),
        !1
      );
    }, "user-behavior")();
  },
  function (e, t, i) {
    hj.tryCatch(function () {
      var e, t, o, n, a, r;
      (hj.widget =
        ((o = "collapsed"),
        (n = ["ar", "fa", "he"]),
        (a = []),
        (r = !1),
        ((t = {}).ctrl = void 0),
        (t.data = void 0),
        (t.model = {}),
        (t.activeLanguageDirection = "ltr"),
        (t.widgetAttributePrefix = "_hj-f5b2a1eb-9b07"),
        (t.ctaLinks = {
          feedback:
            "https://www.hotjar.com/incoming-feedback?utm_source=client&utm_medium=incoming_feedback&utm_campaign=insights",
          polls:
            "https://www.hotjar.com/feedback-polls?utm_source=client&utm_medium=poll&utm_campaign=insights",
          surveys:
            "https://www.hotjar.com/?utm_source=client&utm_medium=survey&utm_campaign=insights",
          testers:
            "https://www.hotjar.com/?utm_source=client&utm_medium=recruiter&utm_campaign=insights",
        }),
        (t._ = function (t) {
          if (!e) throw new Error("No active language has been set yet.");
          return e[t];
        }),
        (t.addMatchingWidget = function (e, i, o, n, s) {
          t.clearWidget(),
            r
              ? n()
              : a.push({
                  type: e,
                  id: i,
                  created: o,
                  runCallback: n,
                  removeCallback: s,
                });
        }),
        (t.applyPhoneClasses = hj.tryCatch(function () {
          hj.isPreview || hj.widget.isNarrowScreen()
            ? hj.widget.ctrl.addClass("_hj-f5b2a1eb-9b07_widget_centered")
            : hj.widget.ctrl.removeClass("_hj-f5b2a1eb-9b07_widget_centered"),
            hj.widget.isShortScreen()
              ? hj.widget.ctrl.addClass("_hj-f5b2a1eb-9b07_widget_short")
              : hj.widget.ctrl.removeClass("_hj-f5b2a1eb-9b07_widget_short");
        }, "common")),
        (t.changeColorLuminance = hj.tryCatch(function (e, t) {
          (e = String(e).replace(/[^0-9a-f]/gi, "")).length < 6 &&
            (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]),
            (t = t || 0);
          var i,
            o,
            n = "#";
          for (o = 0; o < 3; o++)
            (i = parseInt(e.substr(2 * o, 2), 16)),
              (n += (
                "00" +
                (i = Math.round(
                  Math.min(Math.max(0, i + 255 * t), 255)
                ).toString(16))
              ).substr(i.length));
          return n;
        }, "common")),
        (t.changeState = hj.tryCatch(function (e, t) {
          ("open" !== (t = t || e.data.state) && "collapsed" !== t) || (o = t),
            hj.widget.ctrl
              .removeClass("_hj-f5b2a1eb-9b07_widget_open")
              .removeClass("_hj-f5b2a1eb-9b07_widget_collapsed")
              .removeClass("_hj-f5b2a1eb-9b07_widget_thankyou")
              .removeClass("_hj-f5b2a1eb-9b07_widget_thankyou_consent")
              .removeClass("_hj-f5b2a1eb-9b07_widget_hidden")
              .addClass("_hj-f5b2a1eb-9b07_widget_" + t);
        }, "common")),
        (t.collapseWidget = hj.tryCatch(function () {
          var e = hj.isPreview ? 0 : 450;
          hj.widget.ctrl
            .removeClass("_hj-f5b2a1eb-9b07_widget_open")
            .addClass("_hj-f5b2a1eb-9b07_widget_collapsed")
            .animate({ bottom: "0" }, e),
            (o = "collapsed");
        }, "common")),
        (t.clearWidget = hj.tryCatch(function () {
          var e = hj.hq("._hj-f5b2a1eb-9b07_widget");
          0 !== e.length &&
            (hj.log.debug(
              "Removing previously shown widget from DOM",
              "widgets"
            ),
            e.parent().remove());
        }, "widgets")),
        (t.disableSubmit = hj.tryCatch(function () {
          hj.widget.ctrl
            .find("#_hj-f5b2a1eb-9b07_action_submit")
            .addClass("_hj-f5b2a1eb-9b07_btn_disabled");
        }, "common")),
        (t.dismissWidget = hj.tryCatch(function () {
          hj.widget.setDone(), hj.widget.ctrl.hide();
        }, "common")),
        (t.emptyMatchingWidgets = function () {
          (a = []), hj.rendering.clearAllAbandonEvents(), (r = !1);
        }),
        (t.enableSubmit = hj.tryCatch(function () {
          hj.widget.ctrl
            .find("#_hj-f5b2a1eb-9b07_action_submit")
            .removeClass("_hj-f5b2a1eb-9b07_btn_disabled");
        }, "common")),
        (t.renderLegal = hj.tryCatch(function (e) {
          var i = hj.settings.legal_name || "",
            o = hj.settings.privacy_policy_url || "",
            n = "";
          return (
            e &&
              "" !== i &&
              "" !== o &&
              (n = hj.rendering.renderTemplate(
                '<div class="<%=p%>_widget_legal">                        <div class="<%=p%>_pull_left">                            <%=legalName%>                        </div>                        <div class="<%=p%>_pull_right">                            <a href="<%=privacyPolicyUrl%>" target="_blank"><%=hj.widget._("privacy_policy")%></a>                        </div>                        <div class="<%=p%>_clear_both"></div>                    </div>',
                {
                  p: t.widgetAttributePrefix,
                  legalName: i,
                  privacyPolicyUrl: new hj.rendering.TrustedString(o),
                }
              )),
            n
          );
        })),
        (t.enterFullScreen = hj.tryCatch(function () {
          var e, i;
          t.isPhoneOrTablet() &&
            ((e = hj.hq("body")).addClass("_hj-f5b2a1eb-9b07_position_fixed"),
            0 === hj.hq("#hotjar-viewport-meta").length &&
              (((i = document.createElement("meta")).id =
                "hotjar-viewport-meta"),
              (i.name = "viewport"),
              (i.content =
                "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"),
              document.getElementsByTagName("head")[0].appendChild(i)),
            e.addClass("_hj-f5b2a1eb-9b07_fullscreen_page"));
        }, "common")),
        (t.exitFullScreen = hj.tryCatch(function () {
          hj.hq("#hotjar-viewport-meta").remove(),
            hj
              .hq("body")
              .removeClass("_hj-f5b2a1eb-9b07_fullscreen_page")
              .removeClass("_hj-f5b2a1eb-9b07_position_fixed");
        }, "common")),
        (t.init = hj.tryCatch(function () {
          hj.widget.ctrl
            .find("._hj-f5b2a1eb-9b07_action_toggle_widget")
            .on("click", hj.widget.toggleWidget),
            hj.widget.ctrl
              .find("._hj-f5b2a1eb-9b07_action_open_widget")
              .on("click", { state: "open" }, hj.widget.changeState),
            hj.widget.ctrl
              .find("._hj-f5b2a1eb-9b07_action_dismiss_widget")
              .on("click", hj.widget.dismissWidget);
        }, "common")),
        (t.isNarrowScreen = hj.tryCatch(function () {
          return hj.hq(window).width() < 768;
        }, "common")),
        (t.isPhoneOrTablet = hj.tryCatch(function () {
          return (
            hj.widget.isVeryNarrowScreen() ||
            "phone" === hj.utils.deviceType() ||
            "tablet" === hj.utils.deviceType()
          );
        }, "common")),
        (t.isShortScreen = hj.tryCatch(function () {
          return hj.hq(window).height() < 400;
        }, "common")),
        (t.isVeryNarrowScreen = hj.tryCatch(function () {
          return hj.hq(window).width() <= 450;
        }, "common")),
        (t.openWidget = hj.tryCatch(function () {
          var e = hj.isPreview ? 0 : 300;
          hj.widget.ctrl
            .removeClass("_hj-f5b2a1eb-9b07_widget_collapsed")
            .addClass("_hj-f5b2a1eb-9b07_widget_open")
            .animate({ bottom: "0" }, e),
            (o = "open");
        }, "common")),
        (t.removeActiveWidget = function (e) {
          (e = e || function () {}),
            t.activeWidget
              ? (t.activeWidget.removeCallback(e), delete t.activeWidget)
              : e();
        }),
        (t.runLatestMatchingWidget = function () {
          var e;
          a.forEach(function (t) {
            (!e || e.created < t.created) && (e = t);
          }),
            e ? t.setActiveWidget(e) : t.removeActiveWidget(),
            (r = !0);
        }),
        (t.setActiveWidget = function (e) {
          t.activeWidget &&
          e.type == t.activeWidget.type &&
          e.id == t.activeWidget.id
            ? e && (e.runCallback(), (t.activeWidget = e))
            : t.removeActiveWidget(function () {
                e.runCallback(), (t.activeWidget = e);
              });
        }),
        (t.setLanguage = hj.tryCatch(function (t) {
          var i = {
            af: {
              age: "Ouderdom",
              change: "Verander",
              city: "Stad",
              close: "Sluit",
              dislike: "Sleg",
              email: "ePos",
              feedback: "Terugvoer",
              female: "Vroulik",
              full_name: "Volle naam",
              hate: "Haat dit",
              like: "Goed",
              love: "Uitstekend",
              male: "Manlik",
              neutral: "Neutraal",
              phone_number: "Telefoon nommer",
              please_type_here: "Tik asb. hier ...",
              powered_by_hotjar: "aangedryf deur Hotjar",
              reply: "Antwoort",
              send: "Stuur",
              sent: "Gestuur",
              skip: "Slaan oor.",
              sign_me_up: "Skryf my in!",
              select_the_area: "Kies 'n element op die bladsy.",
              tell_us_about_your_experience: "Vertel ons van jou ervaring...",
              consent_more_information_url: "http://www.hotjarconsent.com/",
              consent_more_information: "More information",
              consent:
                "Connecting your feedback with data related to your visits (device-specific, usage data, cookies, behavior and interactions) will help us improve faster. Do you give us your consent to do so for your previous and future visits?",
              privacy_policy: "Privacy policy",
            },
            ar: {
              age: "العمر",
              change: "تغيير",
              city: "المدينة",
              close: "أغلق",
              dislike: "غير راضي",
              email: "البريد الألكتروني",
              feedback: "رأي",
              female: "انثى",
              full_name: "الأسم الكامل",
              hate: "سيء",
              like: "أعجبني",
              love: "أحببت",
              male: "ذكر",
              neutral: "عادي",
              phone_number: "رقم الهاتف",
              please_type_here: "الرجاء الكتابة هنا...",
              powered_by_hotjar: "بإدارة Hotjar",
              reply: "رد",
              send: "أرسِل",
              sent: "أُرسِلت",
              skip: "تجاوز",
              sign_me_up: "سجّلني!",
              select_the_area: "اختر عنصر من الصفحة",
              tell_us_about_your_experience: "أخبرنا عن تجربتك...",
              consent_more_information_url: "http://www.hotjarconsent.com/",
              consent_more_information: "More information",
              consent:
                "Connecting your feedback with data related to your visits (device-specific, usage data, cookies, behavior and interactions) will help us improve faster. Do you give us your consent to do so for your previous and future visits?",
              privacy_policy: "Privacy policy",
            },
            bg: {
              age: "Възраст",
              change: "Смени",
              city: "Град",
              close: "Затвори",
              dislike: "Не харесвам",
              email: "E-mail",
              feedback: "Обратна връзка",
              female: "Жена",
              full_name: "Име и фамилия",
              hate: "Ненавиждам",
              like: "Харесвам",
              love: "Обожавам",
              male: "Мъж",
              neutral: "Неутрален",
              phone_number: "Телефон",
              please_type_here: "Моля напишете Вашия отговор тук...",
              powered_by_hotjar: "Инструмент на Hotjar",
              reply: "Отговор",
              send: "Изпрати",
              sent: "Изпратено",
              skip: "Пропусни",
              sign_me_up: "Запиши ме!",
              select_the_area: "Изберете елемент на страницата.",
              tell_us_about_your_experience: "Разкажете своето преживяване...",
              consent_more_information_url: "http://www.hotjarconsent.com/",
              consent_more_information: "More information",
              consent:
                "Connecting your feedback with data related to your visits (device-specific, usage data, cookies, behavior and interactions) will help us improve faster. Do you give us your consent to do so for your previous and future visits?",
              privacy_policy: "Privacy policy",
            },
            ca: {
              age: "Edat",
              change: "Canvia",
              city: "Ciutat",
              close: "Tanca",
              dislike: "No m'agrada",
              email: "E-mail",
              feedback: "Comentaris",
              female: "Dona",
              full_name: "Nom complet",
              hate: "Odi",
              like: "M'agrada",
              love: "Amor",
              male: "Home",
              neutral: "Neutral",
              phone_number: "Telèfon",
              please_type_here: "Introdueix aquí...",
              powered_by_hotjar: "Gràcies a Hotjar",
              reply: "Respondre",
              send: "Envia",
              sent: "Enviat",
              skip: "Omet",
              sign_me_up: "Apunta'm-hi!",
              select_the_area: "Seleccioneu un element a la pàgina.",
              tell_us_about_your_experience:
                "Explica'ns la teva experiència ...",
              consent_more_information_url: "http://www.hotjarconsent.com/",
              consent_more_information: "More information",
              consent:
                "Connecting your feedback with data related to your visits (device-specific, usage data, cookies, behavior and interactions) will help us improve faster. Do you give us your consent to do so for your previous and future visits?",
              privacy_policy: "Privacy policy",
            },
            cs: {
              age: "Věk",
              change: "Změnit",
              city: "Město",
              close: "Zavřít",
              dislike: "Nelíbí se mi",
              email: "E-mail",
              feedback: "Zpětná vazba",
              female: "Žena",
              full_name: "Celé jméno",
              hate: "Nesnáším",
              like: "Mám rád",
              love: "Miluji",
              male: "Muž",
              neutral: "Neutrální",
              phone_number: "Telefon",
              please_type_here: " Zde prosím odpovězte...",
              powered_by_hotjar: "powered by Hotjar",
              reply: "Odpovědět",
              send: "Odeslat",
              sent: "Odesláno",
              skip: "Přeskočit",
              sign_me_up: "Zaregistruj mě!",
              select_the_area: "Vybrat prvky na stránce.",
              tell_us_about_your_experience: "Řekněte nám o vaší zkušenosti...",
              consent_more_information_url: "http://www.hotjarconsent.com/",
              consent_more_information: "More information",
              consent:
                "Connecting your feedback with data related to your visits (device-specific, usage data, cookies, behavior and interactions) will help us improve faster. Do you give us your consent to do so for your previous and future visits?",
              privacy_policy: "Privacy policy",
            },
            cy: {
              age: "Oedran",
              change: "Newid",
              city: "Dinas",
              close: "Cau",
              dislike: "Ddim yn hoffi",
              email: "E-bost",
              feedback: "Adborth",
              female: "Benywaidd",
              full_name: "Enw llawn",
              hate: "Casáu",
              like: "Hoffi",
              love: "Caru",
              male: "Gwrywaidd",
              neutral: "Niwtral",
              phone_number: "Rhif ffôn",
              please_type_here: "Teipiwch yma os gwelwch yn dda...",
              powered_by_hotjar: "powered by Hotjar",
              reply: "Ateb",
              send: "Anfon",
              sent: "Anfonwyd",
              skip: "Symyd ymlaen",
              sign_me_up: "Ychwanegwch fi at y rhestr!",
              select_the_area: "Dewiswch elfen ar y dudalen.",
              tell_us_about_your_experience:
                "Dywedwch wrthym am eich profiad...",
              consent_more_information_url: "http://www.hotjarconsent.com/",
              consent_more_information: "More information",
              consent:
                "Connecting your feedback with data related to your visits (device-specific, usage data, cookies, behavior and interactions) will help us improve faster. Do you give us your consent to do so for your previous and future visits?",
              privacy_policy: "Privacy policy",
            },
            da: {
              age: "Alder",
              change: "Ændre",
              city: "By",
              close: "Luk",
              dislike: "Kan ikke lide",
              email: "Email",
              feedback: "Feedback",
              female: "Kvinde",
              full_name: "Navn",
              hate: "Hader",
              like: "Synes om",
              love: "Elsker",
              male: "Mand",
              neutral: "Neutralt",
              phone_number: "Telefonnummer",
              please_type_here: "Skriv venligst her...",
              powered_by_hotjar: "powered by Hotjar",
              reply: "Svar",
              send: "Send",
              sent: "Sendt",
              skip: "Spring over",
              sign_me_up: "Deltag!",
              select_the_area: "Vælg et element på siden.",
              tell_us_about_your_experience: "Fortæl os om din oplevelse...",
              consent_more_information_url: "http://www.hotjarconsent.com/",
              consent_more_information: "More information",
              consent:
                "Connecting your feedback with data related to your visits (device-specific, usage data, cookies, behavior and interactions) will help us improve faster. Do you give us your consent to do so for your previous and future visits?",
              privacy_policy: "Privacy policy",
            },
            de: {
              age: "Alter",
              change: "Ändern",
              city: "Stadt",
              close: "Schließen",
              dislike: "Gefällt mir nicht",
              email: "E-Mail",
              feedback: "Feedback",
              female: "Weiblich",
              full_name: "Name",
              hate: "Gefällt mir gar nicht",
              like: "Gefällt mir",
              love: "Gefällt mir sehr",
              male: "Männlich",
              neutral: "Neutral",
              phone_number: "Telefonnummer",
              please_type_here: "Bitte hier schreiben...",
              powered_by_hotjar: "powered by Hotjar",
              reply: "Antworten",
              send: "Senden",
              sent: "Gesendet",
              skip: "Überspringen",
              sign_me_up: "Jetzt anmelden!",
              select_the_area: "Wähle ein Element auf der Seite aus.",
              tell_us_about_your_experience:
                "Teilen Sie uns Ihre Erfahrungen mit...",
              consent_more_information_url:
                "http://www.hotjarconsent.com/de.html",
              consent_more_information: "Weitere Informationen",
              consent:
                "Durch die Verbindung Ihres Feedbacks mit Daten aus Ihren Besuchen (gerätespezifisch, Nutzungsdaten, Cookies, Verhalten und Interaktionen) können wir schneller Verbesserungen durchführen. Geben Sie uns dafür Ihr Einverständnis für den vorhergehenden und weitere Besuche?",
              privacy_policy: "Privacy policy",
            },
            el: {
              age: "Ηλικία",
              change: "Αλλαγή",
              city: "Πόλη",
              close: "Κλείσιμο",
              dislike: "Κακή",
              email: "Email",
              feedback: "Feedback",
              female: "Γυναίκα",
              full_name: "Ονοματεπώνυμο",
              hate: "Πολυ κακή",
              like: "Καλή",
              love: "Πολύ καλή",
              male: "Άνδρας",
              neutral: "Μέτρια",
              phone_number: "Τηλέφωνο",
              please_type_here: "Παρακαλώ πληκτρολογήστε εδώ...",
              powered_by_hotjar: "υλοποιήθηκε από το Hotjar",
              reply: "Απάντηση",
              send: "Αποστολή",
              sent: "Στάλθηκε",
              skip: "Παράλειψη",
              sign_me_up: "Εγγραφή!",
              select_the_area: "Επέλεξε ένα στοιχείο στη σελίδα.",
              tell_us_about_your_experience:
                "Πες μας σχετικά με την εμπειρία σου...",
              consent_more_information_url:
                "http://www.hotjarconsent.com/el.html",
              consent_more_information: "Περισσότερες πληροφορίες",
              consent:
                "Η σύνδεση των σχολίων σας με δεδομένα που σχετίζονται με τις επισκέψεις σας (δεδομένα σχετικά με τη συσκευή σας, δεδομένα χρήσης, cookies, συμπεριφορά και αλληλεπιδράσεις) θα μας βοηθήσει να βελτιωθούμε ταχύτερα. Μας δίνετε τη συναίνεσή σας να πραγματοποιήσουμε αυτή τη σύνδεση για προηγούμενες και επόμενες επισκέψεις σας;",
              privacy_policy: "Privacy policy",
            },
            en: {
              age: "Age",
              change: "Change",
              city: "City",
              close: "Close",
              dislike: "Dislike",
              email: "Email",
              feedback: "Feedback",
              female: "Female",
              full_name: "Full name",
              hate: "Hate",
              like: "Like",
              love: "Love",
              male: "Male",
              neutral: "Neutral",
              phone_number: "Phone number",
              please_type_here: "Please type here...",
              powered_by_hotjar: "powered by Hotjar",
              reply: "Reply",
              send: "Send",
              sent: "Sent",
              skip: "Skip",
              sign_me_up: "Sign me up!",
              select_the_area: "Select an element on the page.",
              tell_us_about_your_experience: "Tell us about your experience...",
              consent_more_information_url: "http://www.hotjarconsent.com/",
              consent_more_information: "More information",
              consent:
                "Connecting your feedback with data related to your visits (device-specific, usage data, cookies, behavior and interactions) will help us improve faster. Do you give us your consent to do so for your previous and future visits?",
              privacy_policy: "Privacy policy",
            },
            es: {
              age: "Edad",
              change: "Cambiar",
              city: "Ciudad",
              close: "Cerrar",
              dislike: "No me gusta",
              email: "Email",
              feedback: "Sugerencias",
              female: "Mujer",
              full_name: "Nombre completo",
              hate: "Me enoja",
              like: "Me gusta",
              love: "Me encanta",
              male: "Hombre",
              neutral: "Neutral",
              phone_number: "Teléfono",
              please_type_here: "Por favor, escriba aquí...",
              powered_by_hotjar: "powered by Hotjar",
              reply: "Responder",
              send: "Enviar",
              sent: "Enviado",
              skip: "Omitir",
              sign_me_up: "¡Inscríbeme!",
              select_the_area: "Selecciona un elemento de la página.",
              tell_us_about_your_experience: "Cuéntanos tu experiencia...",
              consent_more_information_url:
                "http://www.hotjarconsent.com/es.html",
              consent_more_information: "Más información",
              consent:
                "Conectar los comentarios con datos relacionados con tus visitas (datos específicos del dispositivo o de uso, cookies, comportamiento e interacciones) te ayudará a mejorar más rápidamente. ¿Nos das tu consentimiento para hacerlo con tus visitas pasadas y futuras?",
              privacy_policy: "Privacy policy",
            },
            et: {
              age: "Vanus",
              change: "Muuda",
              city: "Linn",
              close: "Sulge",
              dislike: "Ei meeldi",
              email: "Email",
              feedback: "Tagasiside",
              female: "Naine",
              full_name: "Nimi",
              hate: "Üldse ei meeldi",
              like: "Meeldib",
              love: "Väga meeldib",
              male: "Mees",
              neutral: "Neutraalne",
              phone_number: "Tel. nr.",
              please_type_here: "Palun sisestage siia...",
              powered_by_hotjar: "powered by Hotjar",
              reply: "Vasta",
              send: "Saada",
              sent: "Saadetud",
              skip: "Jätke vahele",
              sign_me_up: "Registreeru!",
              select_the_area: "Valige element leheküljel.",
              tell_us_about_your_experience:
                "Kirjutage meile oma kogemusest...",
              consent_more_information_url: "http://www.hotjarconsent.com/",
              consent_more_information: "More information",
              consent:
                "Connecting your feedback with data related to your visits (device-specific, usage data, cookies, behavior and interactions) will help us improve faster. Do you give us your consent to do so for your previous and future visits?",
              privacy_policy: "Privacy policy",
            },
            fa: {
              age: "سن",
              change: "تغییر",
              city: "شهر",
              close: "بستن",
              dislike: "ناراضی",
              email: "پست الکترونیک",
              feedback: "نظرسنجی",
              female: "زن",
              full_name: "نام کامل",
              hate: "خیلی ناراضی",
              like: "راضی",
              love: "خیلی راضی",
              male: "مرد",
              neutral: "معمولی",
              phone_number: "شماره تلفن",
              please_type_here: "لطفا اینجا بنویسید",
              powered_by_hotjar: "نیرو گرفته از Hotjar",
              reply: "پاسخ",
              send: "بفرست",
              sent: "فرستاده شد",
              skip: "رد کردن",
              sign_me_up: "ثبت‌نام",
              select_the_area: "یک بخش صفحه انتخاب کنید",
              tell_us_about_your_experience:
                "تجربه خود را با ما درمیان بگذارید",
              consent_more_information_url: "http://www.hotjarconsent.com/",
              consent_more_information: "More information",
              consent:
                "Connecting your feedback with data related to your visits (device-specific, usage data, cookies, behavior and interactions) will help us improve faster. Do you give us your consent to do so for your previous and future visits?",
              privacy_policy: "Privacy policy",
            },
            fi: {
              age: "Ikä",
              change: "Muuta",
              city: "Kaupunki",
              close: "Sulje",
              dislike: "En pitänyt",
              email: "Sähköposti",
              feedback: "Palaute",
              female: "Nainen",
              full_name: "Koko nimi",
              hate: "Inhosin",
              like: "Pidin",
              love: "Rakastin",
              male: "Mies",
              neutral: "Neutraali",
              phone_number: "Puhelinnumero",
              please_type_here: "Kirjoita tähän",
              powered_by_hotjar: "Alustana toimii Hotjar",
              reply: "Vastaa",
              send: "Lähetä",
              sent: "Lähetetty",
              skip: "Ohita",
              sign_me_up: "Rekisteröi minut!",
              select_the_area: "Valitse jokin elementti sivulta.",
              tell_us_about_your_experience: "Kerro meille kokemuksestasi...",
              consent_more_information_url:
                "http://www.hotjarconsent.com/fi.html",
              consent_more_information: "Lisää tietoja",
              consent:
                "Palautteesi yhdistäminen vierailuihisi liittyviin tietoihin (laitekohtaiset, käyttötiedot, evästeet, käyttäytyminen ja vuorovaikutus) auttaa meitä tekemään parannuksia nopeammin. Annatko meille suostumuksesi tehdä näin aiemmille sekä tuleville vierailuillesi?",
              privacy_policy: "Privacy policy",
            },
            fr: {
              age: "Âge",
              change: "Changer",
              city: "Ville",
              close: "Fermer",
              dislike: "N'aime pas",
              email: "E-mail",
              feedback: "Votre avis",
              female: "Femme",
              full_name: "Nom et prénom",
              hate: "Déteste",
              like: "Aime",
              love: "Adore",
              male: "Homme",
              neutral: "Neutre",
              phone_number: "Numéro de téléphone",
              please_type_here: "Ecrivez ici",
              powered_by_hotjar: "Propulsé par Hotjar",
              reply: "Répondre",
              send: "Envoyer",
              sent: "Envoyé",
              skip: "Passer",
              sign_me_up: "M'inscrire !",
              select_the_area: "Sélectionnez un élément sur la page.",
              tell_us_about_your_experience: "Racontez votre expérience...",
              consent_more_information_url:
                "http://www.hotjarconsent.com/fr.html",
              consent_more_information: "En savoir plus",
              consent:
                "Lier vos commentaires avec les données relatives à vos visites (appareil, données d'utilisation, cookies, comportement et interactions) nous permettrait d'améliorer votre expérience plus rapidement. Donnez-vous votre accord pour que nous le fassions avec vos visites passées et futures ?",
              privacy_policy: "Privacy policy",
            },
            he: {
              age: "גיל",
              change: "שנה",
              city: "עיר",
              close: "סגור",
              dislike: "לא אוהב",
              email: "דואר אלקטרוני",
              feedback: "חוות דעת",
              female: "נקבה",
              full_name: "שם מלא",
              hate: "שונא",
              like: "מחבב",
              love: "אוהב",
              male: "זכר",
              neutral: "בסדר",
              phone_number: "טלפון",
              please_type_here: "הקלד כאן...",
              powered_by_hotjar: "פועל באמצעות Hotjar",
              reply: "תגובה",
              send: "שלח",
              sent: "נשלח",
              skip: "דלג",
              sign_me_up: "הרשם עכשיו!",
              select_the_area: "בחר חלק בדף",
              tell_us_about_your_experience: "ספר לנו על החוויה שלך...",
              consent_more_information_url: "http://www.hotjarconsent.com/",
              consent_more_information: "More information",
              consent:
                "Connecting your feedback with data related to your visits (device-specific, usage data, cookies, behavior and interactions) will help us improve faster. Do you give us your consent to do so for your previous and future visits?",
              privacy_policy: "Privacy policy",
            },
            hr: {
              age: "Dob",
              change: "Promijeni",
              city: "Mjesto",
              close: "Zatvori",
              dislike: "Ne sviđa mi se",
              email: "Email",
              feedback: "Povratna informacija",
              female: "Žensko",
              full_name: "Ime i prezime",
              hate: "Izrazito mi se ne sviđa",
              like: "Sviđa mi se",
              love: "Obožavam",
              male: "Muško",
              neutral: "Neutralan/na sam",
              phone_number: "Telefon",
              please_type_here: "Pišite ovdje",
              powered_by_hotjar: "powered by Hotjar",
              reply: "Odgovor",
              send: "Pošalji",
              sent: "Poslano",
              skip: "Preskoči",
              sign_me_up: "Prijavi me!",
              select_the_area: "Označite element na stranici.",
              tell_us_about_your_experience:
                "Recite nam više o svom iskustvu...",
              consent_more_information_url: "http://www.hotjarconsent.com/",
              consent_more_information: "More information",
              consent:
                "Connecting your feedback with data related to your visits (device-specific, usage data, cookies, behavior and interactions) will help us improve faster. Do you give us your consent to do so for your previous and future visits?",
              privacy_policy: "Privacy policy",
            },
            hu: {
              age: "Kor",
              change: "Változtatás",
              city: "Település",
              close: "Bezárás",
              dislike: "Nem kedvelem",
              email: "E-mail",
              feedback: "Visszajelzés",
              female: "Nő",
              full_name: "Teljes név",
              hate: "Utálom",
              like: "Kedvelem",
              love: "Imádom",
              male: "Férfi",
              neutral: "Közömbös",
              phone_number: "Telefon",
              please_type_here: "Ide írhat...",
              powered_by_hotjar: "készítette a Hotjar",
              reply: "Válasz",
              send: "Küldés",
              sent: "Elküldve",
              skip: "Átugás",
              sign_me_up: "Regisztrálok!",
              select_the_area: "Jelöljön ki egy elemet az oldalon.",
              tell_us_about_your_experience: "Oszd meg velünk véleményedet...",
              consent_more_information_url: "http://www.hotjarconsent.com/",
              consent_more_information: "More information",
              consent:
                "Connecting your feedback with data related to your visits (device-specific, usage data, cookies, behavior and interactions) will help us improve faster. Do you give us your consent to do so for your previous and future visits?",
              privacy_policy: "Privacy policy",
            },
            id: {
              age: "Umur",
              change: "Ubah",
              city: "Kota",
              close: "Tutup",
              dislike: "Tidak suka",
              email: "Email",
              feedback: "Umpan balik",
              female: "Wanita",
              full_name: "Nama lengkap",
              hate: "Benci",
              like: "Suka",
              love: "Sangat suka",
              male: "Pria",
              neutral: "Netral",
              phone_number: "Nomor telpon",
              please_type_here: "Silahkan ketik disini...",
              powered_by_hotjar: "dipersembahkan oleh Hotjar",
              reply: "Balasan",
              send: "Kirim",
              sent: "Terkirim",
              skip: "Lewai",
              select_the_area: "Pilih sebuah elemen dalam laman.",
              sign_me_up: "Daftarkan saya!",
              tell_us_about_your_experience: "Sampaikan penilaian Anda...",
              consent_more_information_url: "http://www.hotjarconsent.com/",
              consent_more_information: "More information",
              consent:
                "Connecting your feedback with data related to your visits (device-specific, usage data, cookies, behavior and interactions) will help us improve faster. Do you give us your consent to do so for your previous and future visits?",
              privacy_policy: "Privacy policy",
            },
            it: {
              age: "Età",
              change: "Cambia",
              city: "Città",
              close: "Chiudi",
              dislike: "Non mi piace",
              email: "Email",
              feedback: "Feedback",
              female: "Femmina",
              full_name: "Nome e cognome",
              hate: "Odio",
              like: "Mi piace",
              love: "Amo",
              male: "Maschio",
              neutral: "Indifferente",
              phone_number: "Telefono",
              please_type_here: "Scrivi qui...",
              powered_by_hotjar: "offerto da Hotjar",
              reply: "Rispondi",
              send: "Invia",
              sent: "Inviato",
              skip: "Salta",
              select_the_area: "Seleziona un elemento della pagina",
              sign_me_up: "Iscrivimi!",
              tell_us_about_your_experience: "Raccontaci la tua esperienza...",
              consent_more_information_url:
                "http://www.hotjarconsent.com/it.html",
              consent_more_information: "Maggiori informazioni",
              consent:
                "Collegare questo feedback ai dati relativi alle tue visite (dispositivo, utilizzo, cookie, comportamento e interazioni) ci aiuterà a migliorare più rapidamente. Ci dai il consenso a farlo per visite passate e future?",
              privacy_policy: "Privacy policy",
            },
            ja: {
              age: "年齢",
              change: "変更",
              city: "市区町村",
              close: "閉じる",
              dislike: "悪い",
              email: "電子メール",
              feedback: "フィードバック",
              female: "女性",
              full_name: "姓名",
              hate: "非常に悪い",
              like: "良い",
              love: "非常に良い",
              male: "男性",
              neutral: "どちらでもない",
              phone_number: "電話番号",
              please_type_here: "こちらにご記入ください...",
              powered_by_hotjar: "powered by Hotjar",
              reply: "返信",
              send: "送信",
              sent: "送信完了しました",
              skip: "スキップ",
              sign_me_up: "登録します",
              select_the_area: "ページの該当箇所を指定してください",
              tell_us_about_your_experience: "感想を聞かせてください",
              consent_more_information_url: "http://www.hotjarconsent.com/",
              consent_more_information: "More information",
              consent:
                "Connecting your feedback with data related to your visits (device-specific, usage data, cookies, behavior and interactions) will help us improve faster. Do you give us your consent to do so for your previous and future visits?",
              privacy_policy: "Privacy policy",
            },
            ko: {
              age: "나이",
              change: "변화",
              city: "도시",
              close: "닫기",
              dislike: "싫어함",
              email: "이메일",
              feedback: "피드백",
              female: "여자",
              full_name: "이름",
              hate: "미움",
              like: "처럼",
              love: "애정",
              male: "남자",
              neutral: "중립국",
              phone_number: "전화번호",
              please_type_here: "여기에 입력해주세요",
              powered_by_hotjar: "powered by Hotjar",
              reply: "답변하기",
              send: "보내기",
              sent: "보냈습니다",
              skip: "버킷",
              sign_me_up: "참여하기!",
              select_the_area: "페이지에서 요소를 선택하십시오.",
              tell_us_about_your_experience:
                "귀하의 경험에 대해 알려주십시오...",
              consent_more_information_url: "http://www.hotjarconsent.com/",
              consent_more_information: "More information",
              consent:
                "Connecting your feedback with data related to your visits (device-specific, usage data, cookies, behavior and interactions) will help us improve faster. Do you give us your consent to do so for your previous and future visits?",
              privacy_policy: "Privacy policy",
            },
            lt: {
              age: "Amžius",
              change: "Keisti",
              city: "Miestas",
              close: "Uždaryti",
              dislike: "Nepatinka",
              email: "El. paštas",
              feedback: "Atsiliepimai",
              female: "Moteris",
              full_name: "Pilnas vardas",
              hate: "Nekenčiu",
              like: "Patinka",
              love: "Puiku",
              male: "Vyras",
              neutral: "Be nuomonės",
              phone_number: "Telefonas",
              please_type_here: "Rašyti čia...",
              powered_by_hotjar: "powered by Hotjar",
              reply: "Atsakyti",
              send: "Siųsti",
              sent: "Išsiusta",
              skip: "Praleisti",
              sign_me_up: "Registruotis",
              select_the_area: "Pažymėkite laukelį puslapyje.",
              tell_us_about_your_experience: "Parašykite atsiliepimą...",
              consent_more_information_url: "http://www.hotjarconsent.com/",
              consent_more_information: "More information",
              consent:
                "Connecting your feedback with data related to your visits (device-specific, usage data, cookies, behavior and interactions) will help us improve faster. Do you give us your consent to do so for your previous and future visits?",
              privacy_policy: "Privacy policy",
            },
            lv: {
              age: "Vecums",
              change: "Mainīt",
              city: "Pilsēta",
              close: "Aizvērt",
              dislike: "Nepatika",
              email: "E-pasts",
              feedback: "Atsauksme",
              female: "Sieviete",
              full_name: "Pilns vārds",
              hate: "Ienīstu",
              like: "Patika",
              love: "Mīlu",
              male: "Vīrietis",
              neutral: "Neitrāla",
              phone_number: "Tālruņa numurs",
              please_type_here: "Lūdzu, ievadiet šeit...",
              powered_by_hotjar: "powered by Hotjar",
              reply: "Atbilde",
              select_the_area: "Izvēlies elementu lapā.",
              send: "Nosūtīt",
              sent: "Nosūtīts",
              skip: "Izlaist",
              sign_me_up: "Pierakstiet mani!",
              tell_us_about_your_experience:
                "Pastāsti mums par savu pieredzi...",
              consent_more_information_url: "http://www.hotjarconsent.com/",
              consent_more_information: "More information",
              consent:
                "Connecting your feedback with data related to your visits (device-specific, usage data, cookies, behavior and interactions) will help us improve faster. Do you give us your consent to do so for your previous and future visits?",
              privacy_policy: "Privacy policy",
            },
            mis: {
              age: "Starost",
              city: "Grad",
              close: "Zatvori",
              email: "Email",
              female: "Žensko",
              full_name: "Ime i prezime",
              male: "Muško",
              phone_number: "Telefon",
              please_type_here: "Pišite ovdje...",
              powered_by_hotjar: "powered by Hotjar",
              reply: "Odgovori",
              send: "Pošalji",
              sent: "Poslato",
              sign_me_up: "Prijavi me!",
              consent_more_information_url: "http://www.hotjarconsent.com/",
              consent_more_information: "More information",
              consent:
                "Connecting your feedback with data related to your visits (device-specific, usage data, cookies, behavior and interactions) will help us improve faster. Do you give us your consent to do so for your previous and future visits?",
              privacy_policy: "Privacy policy",
            },
            nb: {
              age: "Alder",
              change: "Endre",
              city: "Sted",
              close: "Lukk",
              dislike: "Liker ikke",
              email: "E-post",
              feedback: "Tilbakemelding",
              female: "Kvinne",
              full_name: "Navn",
              hate: "Hater",
              like: "Liker",
              love: "Elsker",
              male: "Mann",
              neutral: "Nøytral",
              phone_number: "Telefon",
              please_type_here: "Skriv her...",
              powered_by_hotjar: "powered by Hotjar",
              reply: "Svar",
              send: "Send",
              sent: "Sendt",
              skip: "Hopp over",
              sign_me_up: "Delta!",
              select_the_area: "Velg et element på siden.",
              tell_us_about_your_experience: "Fortell oss om din opplevelse",
              consent_more_information_url: "http://www.hotjarconsent.com/",
              consent_more_information: "More information",
              consent:
                "Connecting your feedback with data related to your visits (device-specific, usage data, cookies, behavior and interactions) will help us improve faster. Do you give us your consent to do so for your previous and future visits?",
              privacy_policy: "Privacy policy",
            },
            nl: {
              age: "Leeftijd",
              change: "Wijzigen",
              city: "Plaats",
              close: "Sluiten",
              dislike: "Matig",
              email: "E-mailadres",
              feedback: "Feedback",
              female: "Vrouw",
              full_name: "Volledige naam",
              hate: "Slecht",
              like: "Goed",
              love: "Geweldig",
              male: "Man",
              neutral: "Neutraal",
              phone_number: "Telefoonnummer",
              please_type_here: "Jouw bericht...",
              powered_by_hotjar: "ondersteund door Hotjar",
              reply: "Reageer",
              send: "Verstuur",
              sent: "Verstuurd",
              skip: "Overslaan",
              sign_me_up: "Schrijf me in!",
              select_the_area: "Selecteer een element op de pagina.",
              tell_us_about_your_experience: "Vertel ons over je ervaring...",
              consent_more_information_url:
                "http://www.hotjarconsent.com/nl.html",
              consent_more_information: "Meer informatie",
              consent:
                "Door het verbinden van uw feedback met data die verband houdt met uw bezoek aan de site (specifiek voor een apparaat, gebruiksdata, cookies, gedrag en interacties) kunnen we sneller verbeteringen aanbrengen. Geeft u ons toestemming om dit te doen voor uw bezoeken in het verleden en in de toekomst?",
              privacy_policy: "Privacy policy",
            },
            pl: {
              age: "Wiek",
              change: "Zmień",
              city: "Miasto",
              close: "Zamknij",
              dislike: "Źle",
              email: "Email",
              feedback: "Opinia",
              female: "Kobieta",
              full_name: "Imię i nazwisko",
              hate: "Okropnie",
              like: "Dobrze",
              love: "Świetnie",
              male: "Mężczyzna",
              neutral: "Neutralnie",
              phone_number: "Numer telefonu",
              please_type_here: "Wpisz wiadomość...",
              powered_by_hotjar: "powered by Hotjar",
              reply: "Odpowiedz",
              send: "Wyślij",
              sent: "Wysłano",
              skip: "Pomiń",
              sign_me_up: "Zarejestruj mnie!",
              select_the_area: "Zaznacz element na stronie.",
              tell_us_about_your_experience:
                "Podziel się z nami swoją opinią...",
              consent_more_information_url:
                "http://www.hotjarconsent.com/pl.html",
              consent_more_information: "Więcej informacji",
              consent:
                "Łączenie Twoich odpowiedzi z informacjami o Twoich wizytach na stronie (dot. używanego urządzenia, sposobu użytkowania strony, plików cookie, zachowania i interakcji) pozwoli nam na szybsze udoskonalenie się. Czy wyrażasz zgodę na łączenie tych danych z Twoich poprzednich i przyszłych wizyt?",
              privacy_policy: "Privacy policy",
            },
            pt: {
              age: "Idade",
              change: "Alterar",
              city: "Cidade",
              close: "Fechar",
              dislike: "Não gosto",
              email: "Email",
              feedback: "Feedback",
              female: "Feminino",
              full_name: "Nome completo",
              hate: "Odeio",
              like: "Gosto",
              love: "Adoro",
              male: "Masculino",
              neutral: "Neutro",
              phone_number: "Telemóvel",
              please_type_here: "Por favor, escreva aqui ...",
              powered_by_hotjar: "powered by Hotjar",
              reply: "Responder",
              send: "Enviar",
              sent: "Enviado",
              skip: "Ignorar",
              sign_me_up: "Quero Registar-me!",
              select_the_area: "Selecione um elemento da página.",
              tell_us_about_your_experience: "Fale-nos da sua experiência",
              consent_more_information_url:
                "http://www.hotjarconsent.com/pt.html",
              consent_more_information: "Saber mais",
              consent:
                "Ao associar o seu feedback aos dados das suas visitas (dispositivo, dados de utilização, cookies, comportamento e interações) ajuda-nos a melhorar a sua experiência com mais rapidez. Para o continuarmos a fazer, precisamos do seu consentimento relativo a visitas anteriores e futuras.",
              privacy_policy: "Privacy policy",
            },
            pt_BR: {
              age: "Idade",
              change: "Trocar",
              city: "Cidade",
              close: "Fechar",
              dislike: "Não gostei",
              email: "Email",
              feedback: "Feedback",
              female: "Feminino",
              full_name: "Nome completo",
              hate: "Odiei",
              like: "Gostei",
              love: "Amei",
              male: "Masculino",
              neutral: "Neutra",
              phone_number: "Telefone",
              please_type_here: "Por favor, escreva aqui...",
              powered_by_hotjar: "powered by Hotjar",
              reply: "Responder",
              send: "Enviar",
              sent: "Enviado",
              skip: "Pular",
              sign_me_up: "Inscreva-se!",
              select_the_area: "Selecione um elemento na página.",
              tell_us_about_your_experience:
                "Conte-nos sobre a sua experiência...",
              consent_more_information_url:
                "http://www.hotjarconsent.com/pt_br.html",
              consent_more_information: "Saiba mais",
              consent:
                "Associar o seu feedback aos dados das suas visitas (dispositivo, dados de uso, cookies, comportamento e interações) nos ajuda a melhorar a sua experiência com muito mais rapidez. Você nos dá o seu consentimento para associarmos os dados de suas visitas prévias e futuras?",
              privacy_policy: "Privacy policy",
            },
            ro: {
              age: "Vârsta",
              change: "Schimbă",
              city: "Oraș",
              close: "Închide",
              dislike: "Nu-mi place",
              email: "Email",
              feedback: "Feedback",
              female: "Femeie",
              full_name: "Nume complet",
              hate: "Îl urăsc",
              like: "Îmi place",
              love: "Îl iubesc",
              male: "Bărbat",
              neutral: "Neutru",
              phone_number: "Telefon",
              please_type_here: "Scrie aici...",
              powered_by_hotjar: "powered by Hotjar",
              reply: "Răspunde",
              send: "Trimite",
              sent: "Trimis",
              skip: "Treci peste",
              sign_me_up: "Mă înscriu",
              select_the_area: "Selectează un element de pe pagină.",
              tell_us_about_your_experience: "Spune-ne despre experiența ta...",
              consent_more_information_url: "http://www.hotjarconsent.com/",
              consent_more_information: "More information",
              consent:
                "Connecting your feedback with data related to your visits (device-specific, usage data, cookies, behavior and interactions) will help us improve faster. Do you give us your consent to do so for your previous and future visits?",
              privacy_policy: "Privacy policy",
            },
            ru: {
              age: "Возраст",
              change: "Изменить",
              city: "Город",
              close: "Закрыть",
              dislike: "Не нравится",
              email: "Email",
              feedback: "Обратная связь",
              female: "Женщина",
              full_name: "Полное имя",
              hate: "Ненавижу",
              like: "Нравится",
              love: "Обожаю",
              male: "Мужчина",
              neutral: "Нейтрально",
              phone_number: "Номер телефона",
              please_type_here: "Место для ввода...",
              powered_by_hotjar: "powered by Hotjar",
              reply: "Ответить",
              send: "Отправить",
              sent: "Отправлено",
              skip: "Пропустить",
              sign_me_up: "Подписаться!",
              select_the_area: "Выделите элемент на странице.",
              tell_us_about_your_experience: "Расскажите о вашем опыте...",
              consent_more_information_url:
                "http://www.hotjarconsent.com/ru.html",
              consent_more_information: "Дополнительная информация",
              consent:
                "Связь ваших отзывов с данными о посещении вами сайта (данные об устройстве, сведения об использовании, файлы cookie, поведение и активность на сайте) поможет нам быстрее улучшить наши услуги. Даете ли вы нам свое согласие на использование данных о ваших предыдущих и будущих посещениях сайта?",
              privacy_policy: "Privacy policy",
            },
            sk: {
              age: "Vek",
              change: "Zmeniť",
              city: "Mesto",
              close: "Zavrieť",
              dislike: "Nepáči",
              email: "Email",
              feedback: "Váš názor",
              female: "Žena",
              full_name: "Celé meno",
              hate: "Neznášam",
              like: "Páči sa",
              love: "Milujem",
              male: "Muž",
              neutral: "Neutral",
              phone_number: "Telefónne číslo",
              please_type_here: "Začnite písať tu",
              powered_by_hotjar: "powered bz Hotjar",
              reply: "Odpovedať",
              send: "Poslať",
              sent: "Poslané",
              skip: "Preskočiť",
              sign_me_up: "Vytvoriť konto",
              select_the_area: "Vyberte element na stránke.",
              tell_us_about_your_experience: "Napíšte nám vašu skúsenosť...",
              consent_more_information_url: "http://www.hotjarconsent.com/",
              consent_more_information: "More information",
              consent:
                "Connecting your feedback with data related to your visits (device-specific, usage data, cookies, behavior and interactions) will help us improve faster. Do you give us your consent to do so for your previous and future visits?",
              privacy_policy: "Privacy policy",
            },
            sl: {
              age: "Starost",
              change: "Spremeni",
              city: "Kraj",
              close: "Zapri",
              dislike: "Ni mi všeč",
              email: "Email",
              feedback: "Povratna informacija",
              female: "Ženska",
              full_name: "Ime in priimek",
              hate: "Sovražim",
              like: "Všeč mi je",
              love: "Obožujem",
              male: "Moški",
              neutral: "Vseeno mi je",
              phone_number: "Telefon",
              please_type_here: "Prosimo vnesite tukaj...",
              powered_by_hotjar: "powered by Hotjar",
              reply: "Odgovori",
              send: "Pošlji",
              sent: "Poslano",
              skip: "Preskoči",
              sign_me_up: "Prijavi me!",
              select_the_area: "Izberi element na strani.",
              tell_us_about_your_experience: "Deli svoje mnenje z nami...",
              consent_more_information_url: "http://www.hotjarconsent.com/",
              consent_more_information: "More information",
              consent:
                "Connecting your feedback with data related to your visits (device-specific, usage data, cookies, behavior and interactions) will help us improve faster. Do you give us your consent to do so for your previous and future visits?",
              privacy_policy: "Privacy policy",
            },
            sq: {
              age: "Mosha",
              change: "Ndrysho",
              city: "Qyteti",
              close: "Mbyll",
              dislike: "Keq",
              email: "Email",
              feedback: "Mendimi juaj",
              female: "Femër",
              full_name: "Emri i plotë",
              hate: "Shumë keq",
              like: "Mirë",
              love: "Shume mirë",
              male: "Mashkull",
              neutral: "Neutrale",
              phone_number: "Numër telefoni",
              please_type_here: "Ju lutem shkruani këtu...",
              powered_by_hotjar: "powered by Hotjar",
              reply: "Përgjigju",
              send: "Dërgo",
              sent: "Te dërguara",
              skip: "Kalo",
              sign_me_up: "Më regjistro!",
              select_the_area: "Zgjidhni një element nga faqja.",
              tell_us_about_your_experience:
                "Na tregoni rreth përvojës tuaj...",
              consent_more_information_url:
                "http://www.hotjarconsent.com/sq.html",
              consent_more_information: "Më shumë informacion",
              consent:
                "Lidhja midis vlerwsimit tuaj dhe infromacioneve qw kanw lidhje (nw lidhje) me vizitat tuaja(device-specific,…) do tw na ndihmonin tw permisohemi akoma mw shpejt. A do tw na jepni aprovimin tuaj pwr tw bwrw kwtw me vizitat tuaja tw mwparshme dhe me ato nw tw ardhmen?",
              privacy_policy: "Privacy policy",
            },
            sr: {
              age: "Starost",
              change: "Promeni",
              city: "Grad",
              close: "Zatvori",
              dislike: "Ne sviđa mi se",
              email: "Email",
              feedback: "Povratna informacija",
              female: "Žensko",
              full_name: "Ime i prezime",
              hate: "Baš mi se ne sviđa",
              like: "Sviđa mi se",
              love: "Obožavam",
              male: "Muško",
              neutral: "Svejedno mi je",
              phone_number: "Telefon",
              please_type_here: "Pišite ovde...",
              powered_by_hotjar: "powered by Hotjar",
              reply: "Odgovori",
              send: "Pošalji",
              sent: "Poslato",
              skip: "Preskoči",
              sign_me_up: "Prijavi me!",
              select_the_area: "Označite element na stranici.",
              tell_us_about_your_experience:
                "Podelite vaše mišljenje sa nama...",
              consent_more_information_url: "http://www.hotjarconsent.com/",
              consent_more_information: "More information",
              consent:
                "Connecting your feedback with data related to your visits (device-specific, usage data, cookies, behavior and interactions) will help us improve faster. Do you give us your consent to do so for your previous and future visits?",
              privacy_policy: "Privacy policy",
            },
            sv: {
              age: "Ålder",
              change: "Ändra",
              city: "Stad",
              close: "Stäng",
              dislike: "Ogillar",
              email: "Email",
              feedback: "Feedback",
              female: "Kvinna",
              full_name: "Namn",
              hate: "Hatar",
              like: "Gillar",
              love: "Älskar",
              male: "Man",
              neutral: "Neutral",
              phone_number: "Telefon",
              please_type_here: "Skriv här...",
              powered_by_hotjar: "powered by Hotjar",
              reply: "Besvara",
              send: "Skicka",
              sent: "Skickat",
              skip: "Hoppa över",
              sign_me_up: "Registrera mig!",
              select_the_area: "Markera ett element på sidan.",
              tell_us_about_your_experience: "Berätta om din upplevelse",
              consent_more_information_url:
                "http://www.hotjarconsent.com/sv.html",
              consent_more_information: "Mer information",
              consent:
                "Att koppla din feedback med data förknippade med dina besök (enhetsspecifik, användningsdata, cookies, beteende och interaktioner) hjälper oss att bli bättre snabbare. Ger du oss ditt tillstånd att göra detta för dina tidigare och framtida besök?",
              privacy_policy: "Privacy policy",
            },
            sw: {
              age: "Umri",
              change: "Badili",
              city: "Mji",
              close: "Funga",
              dislike: "Sipendi",
              email: "Barua pepe",
              feedback: "Mrejesho",
              female: "Mwanamke",
              full_name: "Jina kamili",
              hate: "Naichukia",
              like: "Naikubali",
              love: "Naipenda",
              male: "Mwanaume",
              neutral: "Sijui",
              phone_number: "Namba ya simu",
              please_type_here: "Tafadhali andika hapa...",
              powered_by_hotjar: "powerered bt Hotjar",
              reply: "Jibu",
              send: "Tuma",
              sent: "Imetumwa",
              skip: "Ruka",
              sign_me_up: "Niunganishe!",
              select_the_area: "Chagua kipengele kwenye ukurasa.",
              tell_us_about_your_experience: "Tuambie kuhusu uzoefu wako...",
              consent_more_information_url: "http://www.hotjarconsent.com/",
              consent_more_information: "More information",
              consent:
                "Connecting your feedback with data related to your visits (device-specific, usage data, cookies, behavior and interactions) will help us improve faster. Do you give us your consent to do so for your previous and future visits?",
              privacy_policy: "Privacy policy",
            },
            th: {
              age: "อายุ",
              change: "เปลี่ยน",
              city: "เมือง",
              close: "ปิด",
              dislike: "ไม่ชอบ",
              email: "อีเมล",
              feedback: "ฟีดแบ็ค",
              female: "หญิง",
              full_name: "ชื่อ-นามสกุล",
              hate: "เกลียด",
              like: "ชอบ",
              love: "รัก",
              male: "ชาย",
              neutral: "เฉยๆ",
              phone_number: "เบอร์โทรศัพท์",
              please_type_here: "โปรดพิมพ์ที่นี่...",
              powered_by_hotjar: "สนับสนุนโดย Hotjar",
              reply: "ตอบ",
              send: "ส่ง",
              sent: "ส่ง",
              skip: "ข้าม",
              sign_me_up: "ลงทะเบียน",
              select_the_area: "เลือกองค์ประกอบบนหน้าเว็บ",
              tell_us_about_your_experience:
                "บอกให้เราทราบเกี่ยวกับประสบการณ์ของคุณ...",
              consent_more_information_url: "http://www.hotjarconsent.com/",
              consent_more_information: "More information",
              consent:
                "Connecting your feedback with data related to your visits (device-specific, usage data, cookies, behavior and interactions) will help us improve faster. Do you give us your consent to do so for your previous and future visits?",
              privacy_policy: "Privacy policy",
            },
            tl: {
              age: "Edad",
              change: "Baguhin",
              city: "Lunsod",
              close: "Isara",
              dislike: "Hindi gusto",
              email: "E-mail",
              feedback: "Feedback",
              female: "Babae",
              full_name: "Buong Pangalan",
              hate: "Poot",
              like: "Gaya ng",
              love: "Pag-ibig",
              male: "Lalaki",
              neutral: "Neutral",
              phone_number: "Telepono",
              please_type_here: "Dito po magsimulang magsulat...",
              powered_by_hotjar: "iniabot sa inyo ng Hotjar",
              reply: "Tumugon",
              send: "Ipadala",
              sent: "Naipadala",
              skip: "Laktawan",
              sign_me_up: "I-rehistro nyo ako!",
              select_the_area: "Pumili ng isang elemento sa pahina.",
              tell_us_about_your_experience:
                "Sabihin sa amin ang tungkol sa iyong karanasan...",
              consent_more_information_url: "http://www.hotjarconsent.com/",
              consent_more_information: "More information",
              consent:
                "Connecting your feedback with data related to your visits (device-specific, usage data, cookies, behavior and interactions) will help us improve faster. Do you give us your consent to do so for your previous and future visits?",
              privacy_policy: "Privacy policy",
            },
            tr: {
              age: "Yaş",
              change: "Değiştir",
              city: "Şehir",
              close: "Kapat",
              dislike: "Beğenmedim",
              email: "E-posta",
              feedback: "Geribildirim",
              female: "Kadın",
              full_name: "İsim",
              hate: "Hiç beğenmedim",
              like: "Beğendim",
              love: "Çok beğendim",
              male: "Erkek",
              neutral: "Bir fikrim yok",
              phone_number: "Telefon Numaranız",
              please_type_here: "Cevabınızı buraya giriniz...",
              powered_by_hotjar: "powered by Hotjar",
              reply: "Cevapla",
              send: "Gönder",
              sent: "Gönderildi",
              skip: "Atla",
              sign_me_up: "Kayıt ol!",
              select_the_area: "Sayfadaki bir alanı seç.",
              tell_us_about_your_experience:
                "Yaşadığın deneyimi bizimle paylaşır mısın?",
              consent_more_information_url: "http://www.hotjarconsent.com/",
              consent_more_information: "More information",
              consent:
                "Connecting your feedback with data related to your visits (device-specific, usage data, cookies, behavior and interactions) will help us improve faster. Do you give us your consent to do so for your previous and future visits?",
              privacy_policy: "Privacy policy",
            },
            uk: {
              age: "Вік",
              change: "Змінити",
              city: "Місто",
              close: "Закрити",
              dislike: "Не подобається",
              email: "Email",
              feedback: "Зворотній зв'язок",
              female: "Жінка",
              full_name: "Повне ім'я",
              hate: "Ненавиджу",
              like: "Подобається",
              love: "Обожнюю",
              male: "Чоловік",
              neutral: "Нейтрально",
              phone_number: "Номер телефону",
              please_type_here: "Місце для вводу...",
              powered_by_hotjar: "powered by Hotjar",
              reply: "Відповісти",
              send: "Надіслати",
              sent: "Надіслано",
              skip: "Пропустити",
              sign_me_up: "Підписатися!",
              select_the_area: "Вкажіть елемент на сторінці.",
              tell_us_about_your_experience: "Розкажіть нам про свій досвід...",
              consent_more_information_url: "http://www.hotjarconsent.com/",
              consent_more_information: "More information",
              consent:
                "Connecting your feedback with data related to your visits (device-specific, usage data, cookies, behavior and interactions) will help us improve faster. Do you give us your consent to do so for your previous and future visits?",
              privacy_policy: "Privacy policy",
            },
            vi: {
              age: "Tuổi",
              change: "Thay đổi",
              city: "Thành phố",
              close: "Đóng",
              dislike: "Không thích",
              email: "Email",
              feedback: "Phản hồi",
              female: "Nữ",
              full_name: "Tên đầy đủ",
              hate: "Ghét",
              like: "Thích",
              love: "Rất thích",
              male: "Nam",
              neutral: "Không có ý kiến",
              phone_number: "Điện thoại",
              please_type_here: "Vui lòng nhập nội dung tại đây...",
              powered_by_hotjar: "powered by Hotjar",
              reply: "Trả lời",
              send: "Gởi",
              sent: "Đã gởi",
              skip: "Bỏ qua",
              sign_me_up: "Đăng ký!",
              select_the_area: "Chọn một phần trên website",
              tell_us_about_your_experience: "Chia sẻ cảm nhận của bạn...",
              consent_more_information_url: "http://www.hotjarconsent.com/",
              consent_more_information: "More information",
              consent:
                "Connecting your feedback with data related to your visits (device-specific, usage data, cookies, behavior and interactions) will help us improve faster. Do you give us your consent to do so for your previous and future visits?",
              privacy_policy: "Privacy policy",
            },
            zh_CN: {
              age: "年龄",
              change: "改变",
              city: "城市",
              close: "关闭",
              dislike: "不喜欢",
              email: "电子邮箱",
              feedback: "反馈",
              female: "女",
              full_name: "姓名",
              hate: "讨厌",
              like: "喜欢",
              love: "大爱",
              male: "男",
              neutral: "中立",
              phone_number: "电话",
              please_type_here: "请输入...",
              powered_by_hotjar: "由Hotjar呈现",
              reply: "回复",
              send: "发送",
              sent: "已发达",
              skip: "跳过",
              sign_me_up: "我要参加!",
              select_the_area: "选择一个页面元素",
              tell_us_about_your_experience: "请告知您的体验...",
              consent_more_information_url:
                "http://www.hotjarconsent.com/zh.html",
              consent_more_information: "更多信息",
              consent:
                "为了运营和改善Hotjar的技术和服务，Hotjar 希望将您的反馈与您的访问相关数据相结合。您是否同意我们收集您在过去以及未来访问过程中产生的访问数据(包括设备信息、使用数据、Cookies、行为和互动数据）？",
              privacy_policy: "Privacy policy",
            },
            zh_TW: {
              age: "年齡",
              change: "改變",
              city: "城市",
              close: "關閉",
              dislike: "不喜歡",
              email: "Email",
              feedback: "回饋",
              female: "女",
              full_name: "名稱",
              hate: "非常不喜歡",
              like: "喜歡",
              love: "非常喜歡",
              male: "男",
              neutral: "中立",
              phone_number: "電話",
              please_type_here: "請輸入...",
              powered_by_hotjar: "powered by Hotjar",
              reply: "回覆",
              send: "送出",
              sent: "已送出",
              skip: "跳過",
              sign_me_up: "我要參加!",
              select_the_area: "選擇一個頁面區域",
              tell_us_about_your_experience: "請告知您的體驗...",
              consent_more_information_url: "http://www.hotjarconsent.com/",
              consent_more_information: "More information",
              consent:
                "Connecting your feedback with data related to your visits (device-specific, usage data, cookies, behavior and interactions) will help us improve faster. Do you give us your consent to do so for your previous and future visits?",
              privacy_policy: "Privacy policy",
            },
          };
          if (!((t = "zh" === t ? "zh_CN" : t) in i))
            throw new Error('Invalid language "' + t + '"');
          (e = i[t]),
            (hj.widget.activeLanguageDirection =
              n.indexOf(t) > -1 ? "rtl" : "ltr");
        }, "common")),
        (t.toggleWidget = hj.tryCatch(function () {
          hj.widget.ctrl.hasClass("_hj-f5b2a1eb-9b07_widget_hidden")
            ? hj.widget.changeState(null, o)
            : (hj.widget.changeState(null, "hidden"), hj.widget.setMinimized());
        }, "common")),
        (t.zIndexPositionReset = hj.tryCatch(function () {
          hj.hq("._hj-f5b2a1eb-9b07_lower_zindex").removeClass(
            "_hj-f5b2a1eb-9b07_lower_zindex"
          );
        }, "common")),
        (t.zIndexPositionTop = hj.tryCatch(function () {
          var e = hj.hq("*");
          0 === hj.hq("._hj-f5b2a1eb-9b07_lower_zindex").length &&
            hj.hq.each(e, function (e, t) {
              t.style.zIndex >= "2147483640" &&
                hj.hq(t).addClass("_hj-f5b2a1eb-9b07_lower_zindex");
            });
        }, "common")),
        (t.commonCSS =
          '                <style type="text/css">                    /*reset css*/                    .<%=p%>_widget, .<%=p%>_widget * {                        line-height: normal;                        font-family: Arial, sans-serif, Tahoma !important;                        text-transform: initial !important;                        letter-spacing: normal !important;                    }                    .<%=p%>_widget, .<%=p%>_widget div {                        height: auto;                    }                    .<%=p%>_widget div,                    .<%=p%>_widget span,                    .<%=p%>_widget p,                    .<%=p%>_widget a,                    .<%=p%>_widget img,                    .<%=p%>_widget strong,                    .<%=p%>_widget form,                    .<%=p%>_widget label {                        border: 0;                        outline: 0;                        font-size: 100%;                        vertical-align: baseline;                        background: transparent;                        margin: 0;                        padding: 0;                        float: none !important;                    }                    .<%=p%>_widget span {color:inherit}                    .<%=p%>_widget ol,                    .<%=p%>_widget ul,                    .<%=p%>_widget li {                        list-style-type:none !important;                        margin: 0 !important;                        padding: 0 !important;                     }                    .<%=p%>_widget li:before,                    .<%=p%>_widget li:after {                        content: none !important;                    }                    .<%=p%>_widget hr {                        display:block;                        height:1px;                        border:0;                        border-top:1px                        solid #ccc;                        margin:1em 0;                        padding:0;                    }                    .<%=p%>_widget input[type=submit],                    .<%=p%>_widget input[type=button],                    .<%=p%>_widget button {                        margin: 0;                        padding:0;                        float: none !important;                    }                    .<%=p%>_widget input,                    .<%=p%>_widget select,                    .<%=p%>_widget a img {                        vertical-align:middle;                    }                    .<%=p%>_widget *:after, .<%=p%>_widget *::before {                        -webkit-box-sizing: initial;                        -moz-box-sizing: initial;                        box-sizing: initial;                    }                    /*******************                     * GENERIC                    ********************/                    @font-face {                        font-family: "hotjar";                        src: url("' +
          i(2) +
          '");                        src: url("' +
          i(2) +
          '#iefix") format("embedded-opentype"),                             url("' +
          i(29) +
          '") format("woff2"),                             url("' +
          i(30) +
          '") format("truetype"),                             url("' +
          i(31) +
          '") format("woff"),                             url("' +
          i(32) +
          '#hotjar") format("svg");                        font-weight: normal;                        font-style: normal;                    }                                        .<%=p%>_widget .<%=p%>_icon {                        speak: none !important;                        font-style: normal !important;                        font-weight: normal !important;                        font-variant: normal !important;                        text-transform: none !important;                        overflow-wrap: normal !important;                        word-break: normal !important;                        word-wrap: normal !important;                        white-space: nowrap !important;                        line-height: normal !important;                        -webkit-font-smoothing: antialiased !important;                        -moz-osx-font-smoothing: grayscale !important;                    }                                        div.<%=p%>_widget .<%=p%>_icon,                    div.<%=p%>_widget .<%=p%>_icon:before,                    div.<%=p%>_widget .<%=p%>_icon:after,                    div.<%=p%>_widget .<%=p%>_icon *,                    div.<%=p%>_widget .<%=p%>_icon *:before,                    div.<%=p%>_widget .<%=p%>_icon *:after {                        font-family: "hotjar" !important;                        display: inline-block !important;                        direction: ltr !important;                    }                                        .<%=p%>_widget .<%=p%>_icon:before {                        color: inherit !important;                    }                                        .<%=p%>_icon-left:before     {content: "\\\\e805";}                    .<%=p%>_icon-down:before     {content: "\\\\e800";}                    .<%=p%>_icon-up:before       {content: "\\\\e801";}                    .<%=p%>_icon-right:before    {content: "\\\\e802";}                    .<%=p%>_icon-x:before        {content: "\\\\e803";}                    .<%=p%>_icon-ok:before       {content: "\\\\e804";}                    .<%=p%>_icon-hotjar:before   {content: "\\\\e806";}                    .<%=p%>_icon-select-element:before   {content: "\\\\e91a";}                                        /*generic css*/                    body.<%=p%>_fullscreen_page {                        height: 100% !important;                        width: 100% !important;                    }                                        body.<%=p%>_position_fixed {                        position: fixed;                        -webkit-overflow-scrolling: touch;                    }                                        .<%=p%>_lower_zindex:not(.<%=p%>_widget) {                        z-index: 2147483600 !important;                    }                    .<%=p%>_widget {                        font-size:13px !important;                        position: fixed;                        z-index: 2147483640;                        bottom: -400px;                        right: 100px;                        width: 300px;                        -webkit-border-radius: 5px 5px 0 0;                        -moz-border-radius: 5px 5px 0 0;                        border-radius: 5px 5px 0 0;                        -webkit-transform: translateZ(0) !important;                    }                    .<%=p%>_widget.<%=p%>_position_left {                        right: auto;                        left: 100px;                    }                    .<%=p%>_widget .<%=p%>_rounded_corners {                        -webkit-border-radius: 3px;                        -moz-border-radius: 3px;                        border-radius: 3px;                    }                    .<%=p%>_widget .<%=p%>_shadow {                        -webkit-box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.15);                        -moz-box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.15);                        box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.15);                    }                    .<%=p%>_widget .<%=p%>_transition {                        -webkit-transition: all .2s ease-in-out;                        -moz-transition: all .2s ease-in-out;                        -o-transition: all .2s ease-in-out;                        -ms-transition: all .2s ease-in-out;                        transition: all .2s ease-in-out;                    }                    .<%=p%>_widget .<%=p%>_transition_duration_0 {                        -webkit-transition-duration: 0s;                        -moz-transition-duration: 0s;                        -o-transition-duration: 0s;                        -ms-transition-duration: 0s;                        transition-duration: 0s;                    }                    .<%=p%>_widget .<%=p%>_pull_left {                        float: left !important;                    }                    .<%=p%>_widget .<%=p%>_pull_right {                        float: right !important;                    }                    .<%=p%>_widget .<%=p%>_clear_both {display: block !important; clear: both !important;}                    .<%=p%>_widget .<%=p%>_hidden {display: none !important;}                    .<%=p%>_widget .<%=p%>_link_no_underline,                    .<%=p%>_widget .<%=p%>_link_no_underline:hover {                        text-decoration: none !important;                    }                    .<%=p%>_widget .<%=p%>_wordwrap {                        word-break: break-word;                        word-wrap: break-word;                    }                    /*common css*/                    .<%=p%>_widget.<%=p%>_widget_centered {                        right:50%;                        margin-right: -150px;                        left: auto;                    }                    .<%=p%>_widget .<%=p%>_widget_state {display: none;}                                        .<%=p%>_widget .<%=p%>_widget_icon {                        background-repeat: no-repeat;                        width: 16px;                        height: 16px;                        display: -moz-inline-stack;                        display: inline-block !important;                        zoom: 1;                        *display: inline !important;                        vertical-align: top;                    }                    .<%=p%>_widget .<%=p%>_widget_open_close {                        text-align: center;                        position: absolute;                        top: -18px;                        right: 20px;                        width: 40px;                        height: 18px;                        padding-top: 2px;                        cursor: pointer;                        -webkit-border-radius: 5px 5px 0 0;                        -moz-border-radius: 5px 5px 0 0;                        border-radius: 5px 5px 0 0;                    }                    .<%=p%>_widget .<%=p%>_widget_open_close .<%=p%>_widget_icon {                        background-position: -32px 0;                    }                    .<%=p%>_widget .<%=p%>_widget_open_close::before {                        content: "";                        position: absolute;                        left: -4px;                        right: -4px;                        bottom: -8px;                        height: 8px;                    }                    .<%=p%>_widget .<%=p%>_widget_hidden_handle {                        display:none;                        height: 4px;                        cursor:pointer;                        -webkit-border-radius: 5px 5px 0 0;                        -moz-border-radius: 5px 5px 0 0;                        border-radius: 5px 5px 0 0;                    }                                        .<%=p%>_widget .<%=p%>_widget_title {                        font-weight: bold;                        text-align: center;                        padding: 12px !important;                        margin: 0;                        line-height: 17px !important;                        min-height: 17px;                        word-break: break-word;                        word-wrap: break-word;                        cursor: pointer;                    }                    .<%=p%>_widget .<%=p%>_widget_initiator {                        display: none;                        padding: 0 12px 12px 12px;                        text-align: center;                    }                    .<%=p%>_widget .<%=p%>_widget_initiator button {                        padding-left: 20px;                        padding-right: 20px;                    }                                        .<%=p%>_widget .<%=p%>_btn,                    .<%=p%>_widget .<%=p%>_btn_clear,                     .<%=p%>_widget .<%=p%>_btn_primary {                        cursor: pointer;                        text-decoration: none !important;                        font-size: 13px !important;                        font-weight: bold !important;                        padding: 7px 10px !important;                        border: 0 !important;                        outline: 0 !important;                        height: initial !important;                        min-height: initial !important;                        display: -moz-inline-stack;                        display: inline-block;                        *display: inline;                        vertical-align: top;                        width: auto !important;                        min-width: initial !important;                        zoom: 1;                    }                                        .<%=p%>_widget .<%=p%>_btn:after,                    .<%=p%>_widget .<%=p%>_btn_clear:after,                     .<%=p%>_widget .<%=p%>_btn_primary:after {                        content:none !important;                    }                                        .<%=p%>_widget .<%=p%>_btn_primary {                        background: #00C764 !important;                        color: white;                    }                    .<%=p%>_widget .<%=p%>_btn_primary:hover,                    .<%=p%>_widget .<%=p%>_btn_primary:focus,                    .<%=p%>_widget .<%=p%>_btn_primary:active {                        background: #00a251 !important;                    }                    .<%=p%>_widget .<%=p%>_btn_clear {                        background: transparent !important;                        font-weight: normal !important;                        text-decoration: underline !important;                        color: <%= widgetStyle.footerTextColor %> !important;                    }                    .<%=p%>_widget .<%=p%>_btn_clear:hover,                    .<%=p%>_widget .<%=p%>_btn_clear:focus,                    .<%=p%>_widget .<%=p%>_btn_clear:active {                        background: transparent !important;                        color: <%= widgetStyle.footerTextColor %> !important;                    }                    .<%=p%>_widget .<%=p%>_btn_disabled,                    .<%=p%>_widget .<%=p%>_btn_disabled:hover,                    .<%=p%>_widget .<%=p%>_btn_disabled:focus,                    .<%=p%>_widget .<%=p%>_btn_disabled:active {                        cursor: default;                        -webkit-box-shadow: none;                        -moz-box-shadow: none;                        box-shadow: none;                    }                                        /*content*/                    .<%=p%>_widget .<%=p%>_widget_content {padding:0 12px;}                    .<%=p%>_widget .<%=p%>_widget_content_overflow {                        max-height: 280px;                        overflow-y: auto;                        overflow-x: hidden;                    }                    .<%=p%>_widget.<%=p%>_widget_short .<%=p%>_widget_content {                        padding:0 11px 0 12px;                        max-height: 120px;                        overflow-y: auto;                        overflow-x: hidden;                    }                                        /*open ended*/                    .<%=p%>_widget .<%=p%>_widget_content .<%=p%>_input_field {                        font-family: Arial, sans-serif, Tahoma;                        font-size: 14px;                        color: #333 !important;                        padding: 6px !important;                        text-indent: 0 !important;                        height: 30px;                        width: 100%;                        min-width: 100%;                        margin: 0 0 12px 0;                        background: white;                        border: 1px solid <%= widgetStyle.footerBorderColor %> !important;                        -webkit-box-sizing: border-box;                        -moz-box-sizing: border-box;                        box-sizing: border-box;                        outline: none !important;                        max-width: none !important;                        float: none;                    }                    .<%=p%>_widget .<%=p%>_widget_content .<%=p%>_input_field:focus {                        border: 1px solid #00a251;                    }                    .<%=p%>_widget .<%=p%>_widget_content textarea.<%=p%>_input_field {                        resize: none; height: 100px;                    }                                        /*close ended*/                    .<%=p%>_widget .<%=p%>_widget_content .<%=p%>_button_radio_checkbox {                        position: relative;                        min-height: 45px;                        text-align:left !important;                        height:auto !important;                        height: 45px;                        -webkit-box-sizing: border-box;                        -moz-box-sizing: border-box;                        box-sizing: border-box;                    }                    .<%=p%>_widget .<%=p%>_widget_content .<%=p%>_button_radio_checkbox span.<%=p%>_widget_icon {                        -webkit-border-radius: 30px;                        -moz-border-radius: 30px;                        border-radius: 30px;                        border: 2px solid #AAA;                        width: 22px;                        height: 22px;                        display: block;                        position: absolute;                        left: 12px;                        top: 50%;                        margin-top: -14px;                        background-position: -64px -100px;                        -webkit-box-sizing: content-box;                        -moz-box-sizing: content-box;                        box-sizing: content-box;                    }                    .<%=p%>_widget .<%=p%>_widget_content                        .<%=p%>_button_radio_checkbox span.<%=p%>_radio_checkbox_text {                        text-align: left !important;                        padding: 14px 20px 14px 50px;                        position: relative;                        display: block;                        word-break: break-word;                        word-wrap: break-word;                    }                    .<%=p%>_widget .<%=p%>_widget_content .<%=p%>_button_radio_checkbox_full {                        margin-left:-12px;                        margin-right: -12px;                    }                    .<%=p%>_widget .<%=p%>_widget_content                        .<%=p%>_button_radio_checkbox.<%=p%>_button_radio_checkbox_active span {                        border-color: white;                        background-position: -97px 4px;                    }                    .<%=p%>_widget .<%=p%>_widget_content .<%=p%>_button_checkbox span.<%=p%>_widget_icon {                        -webkit-border-radius: 4px;                        -moz-border-radius: 4px;                        border-radius: 4px;                    }                    .<%=p%>_widget .<%=p%>_double_control {                        margin: 0 0 12px 0;                        width: 100%;                    }                    .<%=p%>_widget .<%=p%>_double_control .<%=p%>_double_first {                        min-width:49% !important;                        width:49% !important;                        float:left !important;                        margin-bottom: 0;                    }                    .<%=p%>_widget .<%=p%>_double_control .<%=p%>_double_second {                        min-width:49% !important;                        width:49% !important;                        float:left !important;                        margin-bottom: 0;                        margin-left:2%;                    }                                        /* footer*/                    .<%=p%>_widget .<%=p%>_widget_footer {width: 100%;}                    .<%=p%>_widget .<%=p%>_widget_footer .<%=p%>_pull_left {                        padding: 21px 0 0 12px; font-size: 11px;                    }                    .<%=p%>_widget .<%=p%>_widget_footer .<%=p%>_pull_left a,                    .<%=p%>_widget .<%=p%>_widget_footer .<%=p%>_pull_left a:hover,                    .<%=p%>_widget .<%=p%>_widget_footer .<%=p%>_pull_left a:focus,                    .<%=p%>_widget .<%=p%>_widget_footer .<%=p%>_pull_left a:active {                        text-decoration: underline;                    }                    .<%=p%>_widget .<%=p%>_widget_footer .<%=p%>_pull_left span {                        background-position: -16px 0; margin-right: 4px;                    }                    .<%=p%>_widget .<%=p%>_widget_footer .<%=p%>_pull_right {padding: 12px 12px 12px 0;}                    .<%=p%>_widget .<%=p%>_widget_footer .<%=p%>_pull_right button {padding-right: 5px;}                    .<%=p%>_widget .<%=p%>_widget_footer .<%=p%>_pull_right button span {                        background-position: -64px 0;                        margin-left: 8px;                    }                    .<%=p%>_widget .<%=p%>_widget_footer .<%=p%>_pull_right button.<%=p%>_btn_disabled span {                        background-position: -48px 0;                    }                                        /*state: hidden*/                    .<%=p%>_widget.<%=p%>_widget_hidden .<%=p%>_widget_open_close                        .<%=p%>_widget_icon {background-position: 0 0;}                    .<%=p%>_widget.<%=p%>_widget_hidden .<%=p%>_widget_title {display: none;}                    .<%=p%>_widget.<%=p%>_widget_hidden .<%=p%>_widget_hidden_handle {display: block;}                                        /*state: collapsed */                    .<%=p%>_widget.<%=p%>_widget_collapsed .<%=p%>_widget_initiator {display: block;}                                        /*state: open*/                    .<%=p%>_widget.<%=p%>_widget_open .<%=p%>_widget_state_open {display: block;}                                        /*state: thankyou*/                    .<%=p%>_widget.<%=p%>_widget_thankyou .<%=p%>_widget_state_thankyou,                    .<%=p%>_widget.<%=p%>_widget_thankyou_consent .<%=p%>_widget_state_thankyou_consent {display: block;}                    .<%=p%>_widget.<%=p%>_widget_thankyou .<%=p%>_widget_open_close,                    .<%=p%>_widget.<%=p%>_widget_thankyou_consent .<%=p%>_widget_open_close {display: none;}                    .<%=p%>_widget.<%=p%>_widget_thankyou .<%=p%>_widget_title,                    .<%=p%>_widget.<%=p%>_widget_thankyou_consent .<%=p%>_widget_title {display: none;}                    .<%=p%>_widget.<%=p%>_widget_thankyou .<%=p%>_widget_footer .<%=p%>_pull_right .<%=p%>_btn span,                    .<%=p%>_widget.<%=p%>_widget_thankyou_consent .<%=p%>_widget_footer .<%=p%>_pull_right .<%=p%>_btn span {                        background-position: -80px 0;                    }                    .<%=p%>_widget .<%=p%>_thankyou_message {text-align: center; padding: 20px; margin: 0;}                    .<%=p%>_widget .<%=p%>_thankyou_message button {margin-top: 12px; padding: 7px 20px !important;}                    .<%=p%>_widget .<%=p%>_thankyou_message .<%=p%>_consent_message_title {                        display: block;                        font-weight: bold;                        font-size: 14px;                        margin-bottom: 16px;                    }                    .<%=p%>_widget .<%=p%>_thankyou_message .<%=p%>_consent_message_text,                    .<%=p%>_widget .<%=p%>_thankyou_message .<%=p%>_consent_message_text a {                    color: <%= widgetStyle.footerTextColor %> !important;                    }                                        .<%=p%>_widget .<%=p%>_thankyou_message .<%=p%>_consent_actions button {                        font-size: 18px !important;                        margin: 20px 5px 0 5px;                        padding: 7px 10px !important;                        width: 50px !important;                    }                    /* theme css */                    .<%=p%>_widget {                        background: <%= widgetStyle.primaryColor %> !important;                        color: <%= widgetStyle.fontColor %> !important;                    }                    .<%=p%>_widget a, .<%=p%>_widget a:link, .<%=p%>_widget a:hover, .<%=p%>_widget a:active {                        color: <%= widgetStyle.fontColor %> !important;                    }                    .<%=p%>_widget p {color: <%= widgetStyle.fontColor %> !important;}                    .<%=p%>_widget .<%=p%>_widget_open_close::before {                        background: <%= widgetStyle.primaryColor %> !important;                    }                    .<%=p%>_widget .<%=p%>_widget_icon {                        background-image:                             url(' +
          i(0) +
          ') !important;                    }                    .<%=p%>_widget .<%=p%>_widget_open_close {background: <%= widgetStyle.primaryColor %> !important;}                    .<%=p%>_widget .<%=p%>_widget_hidden_handle {                        background: <%= widgetStyle.primaryColor %> !important;                    }                    .<%=p%>_widget .<%=p%>_btn {                        background: <%= widgetStyle.secondaryColor %> !important;                        color: <%= widgetStyle.fontColor %> !important;                    }                    .<%=p%>_widget .<%=p%>_btn:hover, .<%=p%>_widget .<%=p%>_btn:focus,  .<%=p%>_btn:active {                        background: #666 !important;                    }                                        .<%=p%>_widget .<%=p%>_widget_content .<%=p%>_input_field {                        border: 1px solid <%= widgetStyle.footerBorderColor %> !important;                    }                                        .<%=p%>_widget .<%=p%>_button_radio_checkbox {                        border-bottom: 1px solid <%= widgetStyle.primaryColor %> !important;                        border-top: 1px solid <%= widgetStyle.alternateColor %> !important;                        background: <%= widgetStyle.secondaryColor %> !important;                        cursor: pointer !important;                    }                    .<%=p%>_widget .<%=p%>_button_radio_checkbox_last {border-bottom:0 !important;}                    .<%=p%>_widget .<%=p%>_button_radio_checkbox:hover {                        background: <%= widgetStyle.alternateColor %> !important;                        color: <%= widgetStyle.fontColorNegative %>;                    }                    .<%=p%>_widget .<%=p%>_button_radio_checkbox.<%=p%>_button_radio_checkbox_active,                    .<%=p%>_widget .<%=p%>_button_radio_checkbox.<%=p%>_button_radio_checkbox_active:hover {                        background: <%= widgetStyle.alternateColor %> !important;                        color: white !important;                        cursor: default;                    }                                        .<%=p%>_widget .<%=p%>_switch {                        position: relative;                        display: inline-block;                        width: 46px;                        height: 28px;                        vertical-align: middle;                        margin: -3px 8px 0 0;                    }                                        .<%=p%>_widget.<%=p%>_rtl .<%=p%>_switch {                        margin: -3px 0 0 8px;                    }                                        .<%=p%>_widget .<%=p%>_switch > input {                        cursor: pointer;                        display: block !important;                        width: 46px;                        height: 28px;                        position: absolute;                        left: 0;                        right: 0;                        z-index: 2;                        opacity: 0;                        margin: 0;                    }                                        .<%=p%>_widget .<%=p%>_switch > input + label {                        cursor: pointer;                        position: absolute;                        top: 0;                        left: 0;                        right: 0;                        bottom: 0;                        background: rgba(0,0,0,1);                        border: 2px solid rgba(255,255,255,.3);                        border-radius: 100px;                        -webkit-transition: 400ms all;                           -moz-transition: 400ms all;                                transition: 400ms all;                    }                                        .<%=p%>_widget .<%=p%>_switch > input:checked + label {                        background: rgba(0,0,0,.3);                        border-color: transparent;                        -webkit-transition: 250ms all;                           -moz-transition: 250ms all;                                transition: 250ms all;                    }                                        .<%=p%>_widget .<%=p%>_switch > input + label:before {                        content: "";                        transition: 300ms all;                        position: absolute;                        left: 0;                        top: 0;                        display: block;                        width: 24px;                        height: 24px;                        border-radius: 40px;                        background-color: #ffffff;                        background-position: center center;                        background-repeat: no-repeat;                        background-size: 5px;                        -webkit-box-shadow: 0 0 12px 0 rgba(0,0,0,.06), 0 0 0 0 rgba(0,0,0,.06), 0 6px 10px 0 rgba(0,0,0,.15), 0 0 2px 0 rgba(0,0,0,.07), 0 4px 6px 0 rgba(0,0,0,.06), 0 1px 1px 0 rgba(0,0,0,.11);                        -moz-box-shadow: 0 0 12px 0 rgba(0,0,0,.06), 0 0 0 0 rgba(0,0,0,.06), 0 6px 10px 0 rgba(0,0,0,.15), 0 0 2px 0 rgba(0,0,0,.07), 0 4px 6px 0 rgba(0,0,0,.06), 0 1px 1px 0 rgba(0,0,0,.11);                        box-shadow: 0 0 12px 0 rgba(0,0,0,.06), 0 0 0 0 rgba(0,0,0,.06), 0 6px 10px 0 rgba(0,0,0,.15), 0 0 2px 0 rgba(0,0,0,.07), 0 4px 6px 0 rgba(0,0,0,.06), 0 1px 1px 0 rgba(0,0,0,.11);                    }                                        .<%=p%>_widget .<%=p%>_switch > input + label > span {                        position: absolute;                        z-index: 3;                        color: <%= widgetStyle.accentColor %>;                        background-color: transparent !important;                        border: 0 !important;                        width: 13px !important;                        height: 14px !important;                        left: 6px;                        top: 5px;                        margin: 0 !important;                        opacity: 0;                        font-size: 14px;                        pointer-events: none !important;                        -webkit-transition: 250ms all;                           -moz-transition: 250ms all;                                transition: 250ms all;                    }                                        .<%=p%>_widget .<%=p%>_switch > input:checked + label:before {                        left: 18px;                    }                                        .<%=p%>_widget .<%=p%>_switch > input:checked + label > span {                        left: 24px;                        opacity: 1;                    }                                        .<%=p%>_widget .<%=p%>_switch > input:checked + label > span:after {                        content: initial !important;                    }                                        .<%=p%>_widget .<%=p%>_widget_footer {                        border-top: 1px solid <%= widgetStyle.footerBorderColor %> !important;                    }                    .<%=p%>_widget .<%=p%>_widget_footer .<%=p%>_pull_left,                    .<%=p%>_widget .<%=p%>_widget_footer .<%=p%>_pull_left a,                    .<%=p%>_widget .<%=p%>_widget_footer .<%=p%>_pull_left a:hover {                        color: <%= widgetStyle.footerTextColor %> !important;                    }                    .<%=p%>_widget .<%=p%>_btn_disabled,                    .<%=p%>_widget .<%=p%>_btn_disabled:hover,                    .<%=p%>_widget .<%=p%>_btn_disabled:focus,                    .<%=p%>_widget .<%=p%>_btn_disabled:active {                        color: <%= widgetStyle.primaryColor %> !important;                        background: <%= widgetStyle.secondaryColor %> !important;                    }                                        /*light theme css*/                    .<%=p%>_widget.<%=p%>_skin_light, .<%=p%>_widget.<%=p%>_skin_light .<%=p%>_widget_open_close {                        -webkit-box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.3) !important;                        -moz-box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.3) !important;                        box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.3) !important;                    }                    .<%=p%>_widget.<%=p%>_skin_light .<%=p%>_widget_icon {                        background-image:                             url(' +
          i(0) +
          ") !important;                    }                                        /*dark theme css*/                    .<%=p%>_widget.<%=p%>_skin_dark, .<%=p%>_widget.<%=p%>_skin_dark .<%=p%>_widget_open_close {                        -webkit-box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.6) !important;                        -moz-box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.6) !important;                        box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.6) !important;                    }                    .<%=p%>_widget.<%=p%>_skin_dark .<%=p%>_widget_icon {                        background-image:                             url(" +
          i(33) +
          ') !important;                    }                                        /*right-to-left css*/                    .<%=p%>_widget.<%=p%>_rtl, .<%=p%>_widget.<%=p%>_rtl * {direction: rtl !important;}                    .<%=p%>_widget.<%=p%>_rtl .<%=p%>_widget_footer .<%=p%>_pull_left {direction: ltr !important;}                    .<%=p%>_widget.<%=p%>_rtl .<%=p%>_widget_footer .<%=p%>_pull_right button {padding-right: 10px;}                    .<%=p%>_widget.<%=p%>_rtl .<%=p%>_widget_footer .<%=p%>_pull_right button span {margin-left: 0;}                    .<%=p%>_widget.<%=p%>_rtl.<%=p%>_widget_open .<%=p%>_widget_footer .<%=p%>_pull_right button span {                        display: none;                    }                    .<%=p%>_widget.<%=p%>_rtl .<%=p%>_widget_content .<%=p%>_button_radio_checkbox {                        text-align:right !important;                    }                    .<%=p%>_widget.<%=p%>_rtl .<%=p%>_widget_content .<%=p%>_button_radio_checkbox                        span.<%=p%>_widget_icon {                        left: auto;                        right: 12px;                    }                    .<%=p%>_widget.<%=p%>_rtl .<%=p%>_widget_content .<%=p%>_button_radio_checkbox                        span.<%=p%>_radio_checkbox_text {                        text-align:right !important;                        padding: 14px 50px 14px 20px;                    }                    .<%=p%>_widget.<%=p%>_rtl .<%=p%>_double_control .<%=p%>_double_first {                        float:right;                        margin-left:2%;}                    .<%=p%>_widget.<%=p%>_rtl .<%=p%>_double_control .<%=p%>_double_second {                        float:left;                        margin-left:0;}                    .<%=p%>_widget .<%=p%>_thankyou_message .<%=p%>_more_info_link { text-decoration: underline !important; }                                        /* legal footer */                    .<%=p%>_widget .<%=p%>_widget_legal {                        border-top: 0 !important;                    }                    .<%=p%>_widget .<%=p%>_widget_legal .<%=p%>_pull_left {                        padding: 0px 0px 12px 12px;                        font-size: 11px;                    }                    .<%=p%>_widget .<%=p%>_widget_legal .<%=p%>_pull_right {                        padding: 0px 12px 12px 0px;                        font-size: 11px;                    }                    .<%=p%>_widget .<%=p%>_widget_legal .<%=p%>_pull_right a {                        color: <%= widgetStyle.footerTextColor %> !important;                    }                    #<%=p%>_feedback[data-state="consent"] #<%=p%>_feedback_open .<%=p%>_widget_legal .<%=p%>_pull_left,                     #<%=p%>_feedback[data-state="consent"] #<%=p%>_feedback_open .<%=p%>_widget_legal .<%=p%>_pull_right a {                        color: #333 !important;                    }                    .<%=p%>_widget .<%=p%>_widget_legal .<%=p%>_pull_left a,                    .<%=p%>_widget .<%=p%>_widget_legal .<%=p%>_pull_left a:hover,                    .<%=p%>_widget .<%=p%>_widget_legal .<%=p%>_pull_left a:focus,                    .<%=p%>_widget .<%=p%>_widget_legal .<%=p%>_pull_left a:active {                        text-decoration: underline !important;                    }                    </style>'),
        t)),
        (hj.widgetDelay = (function () {
          var e = {},
            t = null;
          return (
            (e.clear = hj.tryCatch(function () {
              clearTimeout(t), (t = null);
            }, "hj.widgetDelay.clear")),
            (e.set = hj.tryCatch(function (i, o) {
              e.clear(), (t = setTimeout(i, o));
            }, "hj.widgetDelay.set")),
            e
          );
        })());
    }, "widgets")();
  },
  function (e, t, i) {
    e.exports = i.p + "font-hotjar_5.07f979.woff2";
  },
  function (e, t, i) {
    e.exports = i.p + "font-hotjar_5.044b4c.ttf";
  },
  function (e, t, i) {
    e.exports = i.p + "font-hotjar_5.4fc4bb.woff";
  },
  function (e, t, i) {
    e.exports = i.p + "font-hotjar_5.8ac81f.svg";
  },
  function (e, t, i) {
    e.exports = i.p + "widget_icons_dark.3a8118.png";
  },
  function (e, t, i) {
    hj.tryCatch(function () {
      hj.loader.registerModule(
        "Feedback",
        (function () {
          var e = {},
            t = { granted: null, request: !1 },
            o = [
              '<div id="_hj_feedback_container">',
              hj.widget.commonCSS,
              '<style type="text/css">                    /* Faces (emotion) */                    .<%=p%>_widget .<%=p%>_icon_emotion_default *:before {                        color: <%= widgetStyle.selectionTextColor %>;                        margin-left: -1.3984375em;                    }                    .<%=p%>_widget .<%=p%>_icon_emotion_default .path1:before {                        content: "\\\\e900";                        color: <%= widgetStyle.selectionColor %>;                        margin: 0;                    }                                        .<%=p%>_widget .<%=p%>_icon_emotion_default.<%=p%>_bottom_position_launcher *:before{color: <%= widgetStyle.accentTextColor %>}                    .<%=p%>_widget .<%=p%>_icon_emotion_default.<%=p%>_bottom_position_launcher .path1:before {color: <%= widgetStyle.accentColor %>}                                        .<%=p%>_widget .<%=p%>_icon_emotion_default[data-emotion-score="0"] .path2:before    {content: "\\\\e901";}                    .<%=p%>_widget .<%=p%>_icon_emotion_default[data-emotion-score="1"] .path2:before    {content: "\\\\e903";}                    .<%=p%>_widget .<%=p%>_icon_emotion_default[data-emotion-score="2"] .path2:before    {content: "\\\\e905";}                    .<%=p%>_widget .<%=p%>_icon_emotion_default[data-emotion-score="3"] .path2:before    {content: "\\\\e907";}                    .<%=p%>_widget .<%=p%>_icon_emotion_default[data-emotion-score="4"] .path2:before    {content: "\\\\e909";}                    .<%=p%>_widget .<%=p%>_icon_emotion_default[data-emotion-score="wink"] .path2:before {content: "\\\\e90b";}                                        .<%=p%>_widget .<%=p%>_icon_emotion_smiley {                        color: <%= widgetStyle.accentColor %>;                        font-size: 34px;                    }                                        .<%=p%>_widget .<%=p%>_icon_emotion_smiley[data-emotion-score="0"]:before {content: "\\\\e91b";}                    .<%=p%>_widget .<%=p%>_icon_emotion_smiley[data-emotion-score="1"]:before {content: "\\\\e91f";}                    .<%=p%>_widget .<%=p%>_icon_emotion_smiley[data-emotion-score="2"]:before {content: "\\\\e91e";}                    .<%=p%>_widget .<%=p%>_icon_emotion_smiley[data-emotion-score="3"]:before {content: "\\\\e91c";}                    .<%=p%>_widget .<%=p%>_icon_emotion_smiley[data-emotion-score="4"]:before {content: "\\\\e91d";}                                        /* Only load the images when needed.*/                    <% if (widgetStyle.emotion === "emoji") { %>                        .<%=p%>_widget .<%=p%>_icon_emotion_emoji {                            width: 34px;                            height: 34px;                            background-size: 34px;                            background-repeat: no-repeat;                        }                                                .<%=p%>_widget .<%=p%>_icon_emotion_emoji[data-emotion-score="0"] {background-image: url(' +
                i(35) +
                ');}                        .<%=p%>_widget .<%=p%>_icon_emotion_emoji[data-emotion-score="1"] {background-image: url(' +
                i(36) +
                ');}                        .<%=p%>_widget .<%=p%>_icon_emotion_emoji[data-emotion-score="2"] {background-image: url(' +
                i(37) +
                ');}                        .<%=p%>_widget .<%=p%>_icon_emotion_emoji[data-emotion-score="3"] {background-image: url(' +
                i(38) +
                ');}                        .<%=p%>_widget .<%=p%>_icon_emotion_emoji[data-emotion-score="4"] {background-image: url(' +
                i(39) +
                ');}                    <% } %>                                        <% if (widgetStyle.emotion === "star") { %>                        .<%=p%>_widget .<%=p%>_icon_emotion_star {                            width: 34px;                            height: 34px;                            background-size: 34px;                            background-repeat: no-repeat;                        }                                                .<%=p%>_widget .<%=p%>_icon_emotion_star[data-score-state="on"] {background-image: url(' +
                i(40) +
                ');}                        .<%=p%>_widget .<%=p%>_icon_emotion_star[data-score-state="off"] {background-image: url(' +
                i(41) +
                ');}                    <% } %>                                        /*******************                     * MAIN CONTAINER                    ********************/                    #<%=p%>_feedback {                        bottom: 0;                        right: 0;                    }                                        #<%=p%>_feedback.<%=p%>_widget.<%=p%>_rtl {                        direction: ltr !important;                    }                                        #<%=p%>_feedback[data-minimized-position="bottom_left"],                    #<%=p%>_feedback[data-minimized-position="middle_left"] {                        bottom: 0;                        left: 0;                        right: auto;                    }                                        /*******************                     * MINIMIZED STATE                    ********************/                    #<%=p%>_feedback #<%=p%>_feedback_minimized {                        display: none;                        opacity: .96;                        height: 60px;                        position: fixed;                        direction: ltr !important;                    }                                        #<%=p%>_feedback #<%=p%>_feedback_minimized:hover {                        opacity: 1;                    }                                        /* BOTTOM LEFT AND BOTTOM RIGHT */                    #<%=p%>_feedback .<%=p%>_hotjar_buddy {                        position: absolute;                        right: 0;                        bottom: 0;                        height: 50px;                        width: 52px;                        font-size: 37px;                        cursor: pointer;                    }                                        #<%=p%>_feedback .<%=p%>_hotjar_buddy > span {                        position: relative;                        z-index: 2;                    }                                        #<%=p%>_feedback #<%=p%>_feedback_minimized .<%=p%>_hotjar_buddy:after {                        content: "";                        position: absolute;                        z-index: 1;                        top: 17px;                        left: 25px;                        background: rgba(0, 0, 0, .48);                        width: 6px;                        height: 1px;                        -webkit-box-shadow: 0 2px 18px 18px rgba(0, 0, 0, .48);                        -moz-box-shadow: 0 2px 18px 18px rgba(0, 0, 0, .48);                        box-shadow: 0 2px 18px 18px rgba(0, 0, 0, .48);                        -webkit-transition: all .2s ease-in-out;                        -moz-transition: all .2s ease-in-out;                        -o-transition: all .2s ease-in-out;                        -ms-transition: all .2s ease-in-out;                        transition: all .2s ease-in-out;                    }                                        #<%=p%>_feedback #<%=p%>_feedback_minimized:hover .<%=p%>_hotjar_buddy:after {                        -webkit-box-shadow: 0 2px 18px 18px rgba(0, 0, 0, .65);                        -moz-box-shadow: 0 2px 18px 18px rgba(0, 0, 0, .65);                        box-shadow: 0 2px 18px 18px rgba(0, 0, 0, .65);                    }                                        #<%=p%>_feedback .<%=p%>_feedback_minimized_message {                        opacity: 0;                        pointer-events: none;                        position: absolute;                        bottom: 11px;                        padding: 12px 15px;                        width: 180px;                        text-align: center;                        font-size: 12px !important;                        cursor: pointer;                        background: <%= widgetStyle.backgroundColor %>;                        -webkit-box-shadow: 0 2px 18px 0 rgba(0,0,0,.3);                        -moz-box-shadow: 0 2px 18px 0 rgba(0,0,0,.3);                        box-shadow: 0 2px 18px 0 rgba(0,0,0,.3);                        -webkit-box-sizing: border-box;                        -moz-box-sizing: border-box;                        box-sizing: border-box;                    }                                        #<%=p%>_feedback .<%=p%>_feedback_minimized_message:before {                        content: "";                        width: 1px;                        height: 1px;                        position: absolute;                        bottom: 13px;                        border-top: 6px solid transparent;                        border-bottom: 6px solid transparent;                    }                                        #<%=p%>_feedback .<%=p%>_feedback_minimized_message .<%=p%>_feedback_minimized_message_close {                        opacity: 0;                        position: absolute;                        top: -9px;                        right: -9px;                        width: 21px;                        height: 21px;                        -webkit-border-radius: 50%;                        -moz-border-radius: 50%;                        border-radius: 50%;                        font-size: 11px;                        line-height: 21px !important;                        text-align: center;                        cursor: pointer;                        background-color: <%= widgetStyle.accentColor %>;                        color: <%= widgetStyle.accentTextColor %>;                    }                    #<%=p%>_feedback #<%=p%>_feedback_minimized_message:hover .<%=p%>_feedback_minimized_message_close {                        opacity: 1;                    }                                        #<%=p%>_feedback .<%=p%>_feedback_minimized_message span {                        display: none !important;                        color: <%= widgetStyle.darkGrey %> !important;                    }                                        #<%=p%>_feedback .<%=p%>_feedback_minimized_message[data-message="initial"] > #<%=p%>_feedback_minimized_text_initial,                    #<%=p%>_feedback .<%=p%>_feedback_minimized_message[data-message="thankyou"] > #<%=p%>_feedback_minimized_text_thankyou {                        display: block !important;                    }                                        #<%=p%>_feedback #<%=p%>_feedback_minimized:hover .<%=p%>_feedback_minimized_message {                        -webkit-box-shadow: 0 2px 24px 0 rgba(0,0,0,.33);                        -moz-box-shadow: 0 2px 24px 0 rgba(0,0,0,.33);                        box-shadow: 0 2px 24px 0 rgba(0,0,0,.33);                    }                                        /* MIDDLE LEFT + MIDDLE RIGHT */                    #<%=p%>_feedback .<%=p%>_feedback_minimized_label {                        position: relative;                        width: 40px;                        padding: 12px 14px 12px 12px;                        background: <%= widgetStyle.accentColor %>;                        cursor: pointer;                        -webkit-transition: -webkit-box-shadow 0.1s ease-in-out;                        -moz-transition: -moz-box-shadow 0.1s ease-in-out;                        -o-transition: -o-box-shadow 0.1s ease-in-out;                        -ms-transition: -ms-box-shadow 0.1s ease-in-out;                        transition: box-shadow 0.1s ease-in-out;                        -webkit-box-sizing: border-box !important;                        -moz-box-sizing: border-box !important;                        box-sizing: border-box !important;                    }                                        #<%=p%>_feedback .<%=p%>_feedback_minimized_label:hover {                        -webkit-box-shadow: 0 0 35px 2px rgba(0,0,0,.24);                        -moz-box-shadow: 0 0 35px 2px rgba(0,0,0,.24);                        box-shadow: 0 0 35px 2px rgba(0,0,0,.24);                    }                                        #<%=p%>_feedback[data-minimized-position="middle_left"] .<%=p%>_feedback_minimized_label {                        left: -2px;                        border-radius: 0 3px 3px 0;                    }                                        #<%=p%>_feedback[data-minimized-position="middle_left"] .<%=p%>_feedback_minimized_label:hover {                        left: 0;                    }                                        #<%=p%>_feedback[data-minimized-position="middle_right"] .<%=p%>_feedback_minimized_label {                        right: -2px;                        border-radius: 3px 0 0 3px;                    }                                        #<%=p%>_feedback[data-minimized-position="middle_right"] .<%=p%>_feedback_minimized_label:hover {                        right: 0;                    }                                        #<%=p%>_feedback .<%=p%>_feedback_minimized_label .<%=p%>_feedback_minimized_label_text {                        color: <%= widgetStyle.accentTextColor %>;                        display: inline-block !important;                        overflow-wrap: normal !important;                        word-break: normal !important;                        word-wrap: normal !important;                        white-space: nowrap !important;                        filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2);                        cursor: pointer;                        -webkit-writing-mode: vertical-lr;                        -moz-writing-mode: vertical-lr;                        -ms-writing-mode: tb-rl;                        -o-writing-mode: vertical-lr;                        writing-mode: vertical-lr;                        -webkit-transform: rotate(180deg);                        -moz-transform: rotate(180deg);                        -ms-transform: rotate(180deg);                        -o-transform: rotate(180deg);                        transform: rotate(180deg);                    }                                        /* Orientational text in certain languages needs further customization as it would otherwise read "upside down". */                    #<%=p%>_feedback.<%=p%>_ja .<%=p%>_feedback_minimized_label {                        padding-top: 86px;                    }                                        #<%=p%>_feedback.<%=p%>_zh .<%=p%>_feedback_minimized_label {                        padding-top: 26px;                    }                                        #<%=p%>_feedback.<%=p%>_ja .<%=p%>_feedback_minimized_label .<%=p%>_feedback_minimized_label_text,                    #<%=p%>_feedback.<%=p%>_zh .<%=p%>_feedback_minimized_label .<%=p%>_feedback_minimized_label_text {                        display: block !important;                        -webkit-writing-mode: initial;                        -moz-writing-mode: initial;                        -ms-writing-mode: initial;                        -o-writing-mode: initial;                        writing-mode: initial;                        -webkit-transform: rotate(270deg);                        -moz-transform: rotate(270deg);                        -ms-transform: rotate(270deg);                        -o-transform: rotate(270deg);                        transform: rotate(270deg);                    }                                        #<%=p%>_feedback.<%=p%>_zh_TW .<%=p%>_feedback_minimized_label .<%=p%>_feedback_minimized_label_text {                        -webkit-transform: none;                        -moz-transform: none;                        -ms-transform: none;                        -o-transform: none;                        transform: none;                    }                                        #<%=p%>_feedback .<%=p%>_feedback_minimized_label .<%=p%>_icon_emotion_default {                        display: inline-block !important;                        margin: 10px 0 0 -3px;                        font-size: 14px;                    }                                        #<%=p%>_feedback .<%=p%>_feedback_minimized_label .<%=p%>_icon_emotion_default .path1:before { color: <%= widgetStyle.accentTextColor %> !important; }                    #<%=p%>_feedback .<%=p%>_feedback_minimized_label .<%=p%>_icon_emotion_default .path2:before { color: <%= widgetStyle.accentColor %> !important; }                                        #<%=p%>_feedback[data-minimized-position="bottom_right"] #<%=p%>_feedback_minimized { bottom: 20px; right: 30px; }                    #<%=p%>_feedback[data-minimized-position="bottom_right"] .<%=p%>_feedback_minimized_label {display: none !important;}                    #<%=p%>_feedback[data-minimized-position="bottom_right"] .<%=p%>_hotjar_buddy {right: 0;}                    #<%=p%>_feedback[data-minimized-position="bottom_right"] #<%=p%>_feedback_open_close,                    #<%=p%>_feedback[data-minimized-position="bottom_right"] #<%=p%>_feedback_open { right: 30px; }                                        #<%=p%>_feedback[data-minimized-position="bottom_left"] #<%=p%>_feedback_minimized { bottom: 20px; left: 30px; }                    #<%=p%>_feedback[data-minimized-position="bottom_left"] .<%=p%>_feedback_minimized_label {display: none !important;}                    #<%=p%>_feedback[data-minimized-position="bottom_left"] .<%=p%>_hotjar_buddy {left: 0;}                    #<%=p%>_feedback[data-minimized-position="bottom_left"] #<%=p%>_feedback_open_close,                    #<%=p%>_feedback[data-minimized-position="bottom_left"] #<%=p%>_feedback_open { left: 37px; }                                        #<%=p%>_feedback[data-minimized-position="bottom_right"] .<%=p%>_feedback_minimized_message {right: 62px;}                    #<%=p%>_feedback[data-minimized-position="bottom_right"] .<%=p%>_feedback_minimized_message:before,                    #<%=p%>_feedback[data-minimized-position="middle_right"] .<%=p%>_feedback_minimized_message:before {right: -7px; border-left: 7px solid white;}                                        #<%=p%>_feedback[data-minimized-position="bottom_left"] .<%=p%>_feedback_minimized_message {left: 62px;}                    #<%=p%>_feedback[data-minimized-position="bottom_left"] .<%=p%>_feedback_minimized_message:before,                    #<%=p%>_feedback[data-minimized-position="middle_left"] .<%=p%>_feedback_minimized_message:before {left: -7px; border-right: 7px solid white;}                                        #<%=p%>_feedback[data-minimized-position="middle_left"] #<%=p%>_feedback_open_close,                    #<%=p%>_feedback[data-minimized-position="middle_right"] #<%=p%>_feedback_open_close { display: none; }                                        #<%=p%>_feedback[data-minimized-position="middle_left"] #<%=p%>_feedback_open_close_phone,                    #<%=p%>_feedback[data-minimized-position="middle_right"] #<%=p%>_feedback_open_close_phone { display: block; }                                        #<%=p%>_feedback[data-minimized-position="middle_left"] #<%=p%>_feedback_open,                    #<%=p%>_feedback[data-minimized-position="middle_left"] #<%=p%>_feedback_open.fade,                    #<%=p%>_feedback[data-minimized-position="middle_right"] #<%=p%>_feedback_open,                    #<%=p%>_feedback[data-minimized-position="middle_right"] #<%=p%>_feedback_open.fade { bottom: <%= widgetStyle.middlePositionPixels - 100 %>px; }                                        #<%=p%>_feedback[data-minimized-position="middle_left"] .<%=p%>_hotjar_buddy,                    #<%=p%>_feedback[data-minimized-position="middle_right"] .<%=p%>_hotjar_buddy { display: none !important; }                                        #<%=p%>_feedback[data-minimized-position="middle_left"] .<%=p%>_feedback_minimized_message,                    #<%=p%>_feedback[data-minimized-position="middle_right"] .<%=p%>_feedback_minimized_message {top: 50%; bottom: auto;}                                        #<%=p%>_feedback[data-minimized-position="middle_left"] #<%=p%>_feedback_minimized { bottom: <%= widgetStyle.middlePositionPixels %>px; left: 0; }                    #<%=p%>_feedback[data-minimized-position="middle_left"] .<%=p%>_feedback_minimized_message {left: 52px;}                                        #<%=p%>_feedback[data-minimized-position="middle_right"] #<%=p%>_feedback_minimized { bottom: <%= widgetStyle.middlePositionPixels %>px; right: 0; }                    #<%=p%>_feedback[data-minimized-position="middle_right"] .<%=p%>_feedback_minimized_message {right: 52px;}                                        /************************                     * OPEN STATE                    *************************/                    #<%=p%>_feedback_open_close {                        opacity: 0;                        pointer-events: none;                        position: fixed;                        z-index: 10;                        bottom: 33px;                        width: 44px;                        height: 37px;                        font-size: 20px;                        text-align: center !important;                        cursor: pointer;                        background-color: <%= widgetStyle.accentColor %> !important;                        color: <%= widgetStyle.accentTextColor %> !important;                        padding-left: 1px;                        -webkit-border-radius: 5px;                        -moz-border-radius: 5px;                        border-radius: 5px;                        -webkit-box-shadow: 0 2px 10px 1px rgba(0,0,0,.18);                        -moz-box-shadow: 0 2px 10px 1px rgba(0,0,0,.18);                        box-shadow: 0 2px 10px 1px rgba(0,0,0,.18);                    }                                        #<%=p%>_feedback_open_close_phone {                        display: none;                        font-size: 18px;                        text-align: center;                        cursor: pointer;                        background-color: <%= widgetStyle.accentColor %>;                        color: <%= widgetStyle.accentTextColor %>;                        width: 36px;                        height: 36px;                        z-index: 11;                        right: 20px;                        top: -17px;                        position: absolute;                        border-radius: 50%;                    }                                        #<%=p%>_feedback_open_close span,                    #<%=p%>_feedback_open_close_phone span {                        line-height: 36px !important;                    }                                        #<%=p%>_feedback #<%=p%>_feedback_open {                        opacity: 0;                        pointer-events: none;                        position: absolute;                        z-index: 10;                        width: 320px;                        bottom: 84px;                        right: 30px;                        background: <%= widgetStyle.backgroundColor %>;                        -webkit-box-shadow: 0 6px 100px 0 rgba(0,0,0,.35)!important;                        -moz-box-shadow: 0 6px 100px 0 rgba(0,0,0,.35)!important;                        box-shadow: 0 6px 100px 0 rgba(0,0,0,.35)!important;                    }                                        #<%=p%>_feedback #<%=p%>_feedback_open.fade {                        opacity: 1;                        bottom: 92px;                        pointer-events: all;                    }                                        #<%=p%>_feedback #<%=p%>_feedback_open [data-state] {                        display: none;                    }                                        /* Widget content (emotion + comment + email) */                    #<%=p%>_feedback_open .<%=p%>_emotion_content {margin-top: 30px; margin-bottom: 50px;}                    #<%=p%>_feedback_open .<%=p%>_emotion_content.<%=p%>_emotion_type_star { margin-bottom: 40px;}                    #<%=p%>_feedback_open .<%=p%>_emotion_content .<%=p%>_emotion_option {position: relative; float: left !important; bottom: -50px; opacity: 0; width: 20%; text-align: center; font-size: 26px; cursor: pointer;}                    #<%=p%>_feedback_open .<%=p%>_emotion_content .<%=p%>_emotion_option.fade {bottom: 0; opacity: 1; font-size: 30px;}                    #<%=p%>_feedback_open .<%=p%>_emotion_content .<%=p%>_emotion_option.fadeTransition {                        -webkit-transition: all .3s cubic-bezier(0.175, 0.885, 0.320, 1);                        -webkit-transition: all .3s cubic-bezier(0.175, 0.885, 0.320, 1.350);                           -moz-transition: all .3s cubic-bezier(0.175, 0.885, 0.320, 1.350);                             -o-transition: all .3s cubic-bezier(0.175, 0.885, 0.320, 1.350);                                transition: all .3s cubic-bezier(0.175, 0.885, 0.320, 1.350);                    }                    #<%=p%>_feedback_open .<%=p%>_emotion_content [data-emotion-option="1"].fadeTransition {                        -webkit-transition-delay: .1s;                        -moz-transition-delay: .1s;                        -o-transition-delay: .1s;                        -ms-transition-delay: .1s;                        transition-delay: .1s;                    }                    #<%=p%>_feedback_open .<%=p%>_emotion_content [data-emotion-option="2"].fadeTransition {                        -webkit-transition-delay: .175s;                        -moz-transition-delay: .175s;                        -o-transition-delay: .175s;                        -ms-transition-delay: .175s;                        transition-delay: .175s;                    }                    #<%=p%>_feedback_open .<%=p%>_emotion_content [data-emotion-option="3"].fadeTransition {                        -webkit-transition-delay: .250s;                        -moz-transition-delay: .250s;                        -o-transition-delay: .250s;                        -ms-transition-delay: .250s;                        transition-delay: .250s;                    }                    #<%=p%>_feedback_open .<%=p%>_emotion_content [data-emotion-option="4"].fadeTransition {                        -webkit-transition-delay: .325s;                        -moz-transition-delay: .325s;                        -o-transition-delay: .325s;                        -ms-transition-delay: .325s;                        transition-delay: .325s;                    }                                        #<%=p%>_feedback_open .<%=p%>_emotion_content .<%=p%>_emotion_text {                        position: absolute;                        font-size: 12px;                        color: #999;                        text-align: center;                        top: 47px;                        left: 0;                        right: 0;                        opacity: 0;                    }                                        #<%=p%>_feedback_open .<%=p%>_emotion_content.<%=p%>_emotion_type_default .<%=p%>_emotion_text {                        padding-left: 6px;                    }                                        #<%=p%>_feedback_open .<%=p%>_emotion_content.<%=p%>_emotion_type_star .<%=p%>_emotion_text {                        display: none;                    }                                        #<%=p%>_feedback_open #<%=p%>_state-1 .<%=p%>_emotion_content:hover .<%=p%>_emotion_option {opacity: .5}                    #<%=p%>_feedback_open #<%=p%>_state-1 .<%=p%>_emotion_content .<%=p%>_emotion_option:hover {opacity: 1;}                    #<%=p%>_feedback_open #<%=p%>_state-1 .<%=p%>_emotion_content .<%=p%>_emotion_option:hover .<%=p%>_emotion_text {opacity: 1; top: 42px;}                                        #<%=p%>_feedback_open #<%=p%>_state-1 .<%=p%>_emotion_comment_holder {position: relative; display: none;}                    #<%=p%>_feedback_open #<%=p%>_state-1 .<%=p%>_emotion_comment_holder:before {content: ""; width: 1px; height: 1px; position: absolute; left: auto; top: -6px; border-left: 4px solid transparent; border-right: 4px solid transparent; border-bottom: 5px solid rgba(0,0,0,.1);}                    #<%=p%>_feedback_open #<%=p%>_state-1[data-emotion-chosen] .<%=p%>_emotion_comment_holder {display: block;}                    #<%=p%>_feedback_open #<%=p%>_state-1[data-emotion-chosen] .<%=p%>_emotion_text {display: none;}                    #<%=p%>_feedback_open #<%=p%>_state-1[data-emotion-chosen] .<%=p%>_icon_emotion_default {font-size: 26px;}                    #<%=p%>_feedback_open #<%=p%>_state-1[data-emotion-chosen="0"] .<%=p%>_emotion_comment_holder:before {left: 8.5%;}                    #<%=p%>_feedback_open #<%=p%>_state-1[data-emotion-chosen="1"] .<%=p%>_emotion_comment_holder:before {left: 28.5%;}                    #<%=p%>_feedback_open #<%=p%>_state-1[data-emotion-chosen="2"] .<%=p%>_emotion_comment_holder:before {left: 48.5%;}                    #<%=p%>_feedback_open #<%=p%>_state-1[data-emotion-chosen="3"] .<%=p%>_emotion_comment_holder:before {left: 68.5%;}                    #<%=p%>_feedback_open #<%=p%>_state-1[data-emotion-chosen="4"] .<%=p%>_emotion_comment_holder:before {left: 88.5%;}                                        #<%=p%>_feedback_open #<%=p%>_state-1[data-emotion-chosen] .<%=p%>_emotion_option {opacity: .5}                    #<%=p%>_feedback_open #<%=p%>_state-1[data-emotion-chosen] .<%=p%>_emotion_option .<%=p%>_icon_emotion_smiley,                     #<%=p%>_feedback_open #<%=p%>_state-1[data-emotion-chosen] .<%=p%>_emotion_option .<%=p%>_icon_emotion_default .path1:before {color: <%= widgetStyle.disabledColor %>;}                                        #<%=p%>_feedback_open #<%=p%>_state-1[data-emotion-chosen] .<%=p%>_emotion_type_star .<%=p%>_emotion_option,                    #<%=p%>_feedback_open #<%=p%>_state-1[data-emotion-chosen] .<%=p%>_emotion_option[data-emotion-active] {opacity: 1}                    #<%=p%>_feedback_open #<%=p%>_state-1[data-emotion-chosen] .<%=p%>_emotion_option[data-emotion-active] .<%=p%>_icon_emotion_smiley {color: <%= widgetStyle.accentColor %>;}                    #<%=p%>_feedback_open #<%=p%>_state-1[data-emotion-chosen] .<%=p%>_emotion_option[data-emotion-active] .<%=p%>_icon_emotion_default {font-size: 26px;}                    #<%=p%>_feedback_open #<%=p%>_state-1[data-emotion-chosen] .<%=p%>_emotion_option[data-emotion-active] .<%=p%>_icon_emotion_default .path1:before {color: <%= widgetStyle.selectionColor %>;}                                        #<%=p%>_feedback_open .<%=p%>_toolset_actions {                        margin: -3px -12px 12px -12px; background: #eaeaeb !important; padding: 10px 20px;                    }                                        #<%=p%>_feedback_open .<%=p%>_toolset_actions > div {                        font-size: 22px; opacity: .75; cursor: pointer; display: inline-block; position: relative;                    }                                        #<%=p%>_feedback_open .<%=p%>_toolset_actions > div.<%=p%>_toolset_action_active {                        color: <%= widgetStyle.accentColor %>; opacity: 1;                    }                                        #<%=p%>_feedback_open .<%=p%>_toolset_actions > div:hover {                        opacity: 1;                    }                                        #<%=p%>_feedback_open .<%=p%>_toolset_actions > div > .<%=p%>_toolset_tooltip {                        background: black; color: white; font-size: 12px; padding: 8px 12px; border-radius: 3px; position: absolute; left: 40px; top: -4px; width: 195px; opacity: 0; pointer-events: none;                    }                                        #<%=p%>_feedback_open .<%=p%>_toolset_actions > div > .<%=p%>_toolset_tooltip:before {                        content: "";                        width: 1px;                        height: 1px;                        position: absolute;                        left: -6px;                        top: 10px;                        border-top: 4px solid transparent;                        border-bottom: 4px solid transparent;                        border-right: 5px solid black;                    }                                        #<%=p%>_feedback.<%=p%>_widget.<%=p%>_rtl #<%=p%>_feedback_open .<%=p%>_toolset_actions > div > .<%=p%>_toolset_tooltip {                        left: auto; right: 40px; top: -4px;                    }                                        #<%=p%>_feedback.<%=p%>_widget.<%=p%>_rtl #<%=p%>_feedback_open .<%=p%>_toolset_actions > div > .<%=p%>_toolset_tooltip:before {                        left: auto;                        right: -6px;                        border-right: 0;                        border-left: 5px solid black;                    }                                        #<%=p%>_feedback_open .<%=p%>_toolset_actions > div:hover > .<%=p%>_toolset_tooltip {                        opacity: 1;                    }                                        /* Overlay + dimmers + highlighters */                    #<%=p%>_feedback .<%=p%>_feedback_content_dimmer {                        opacity: 0;                        background: black;                        position: fixed;                        z-index: -1;                        -webkit-transition: opacity .2s ease-in-out;                        -moz-transition: opacity .2s ease-in-out;                        -o-transition: opacity .2s ease-in-out;                        -ms-transition: opacity .2s ease-in-out;                        transition: opacity .2s ease-in-out;                    }                                        #<%=p%>_feedback_content_highlighter {                        display: none;                        border: 4px dashed <%= widgetStyle.selectionColor %>;                        -webkit-border-radius: 3px;                        -moz-border-radius: 3px;                        border-radius: 3px;                        position: fixed;                        z-index: -1;                        -webkit-box-sizing: initial !important;                        -moz-box-sizing: initial !important;                        box-sizing: initial !important;                        -webkit-transition: border .2s linear;                        -moz-transition: border .2s ease-in-out;                        -o-transition: border .2s ease-in-out;                        -ms-transition: border .2s ease-in-out;                        transition: border .2s ease-in-out;                    }                                        #<%=p%>_feedback_content_highlighter #<%=p%>_feedback_content_highlighter_close {                        display: none;                        font-size: 12px;                        text-align: center;                        cursor: pointer;                        background-color: <%= widgetStyle.accentColor %>;                        color: <%= widgetStyle.accentTextColor %>;                        z-index: 11;                        right: -12px;                        top: -13px;                        position: absolute;                        border-radius: 50%;                        padding: 5px 7px 3px 7px;                    }                                        /* SCREENSHOT + ELEMENT SELECTION */                    /* Page highlight - ENABLED */                    #<%=p%>_feedback_page_highlight {                        position: fixed;                        pointer-events: none;                        top: 0;                        right: 0;                        bottom: 0;                        left: 0;                        z-index: 5;                    }                                        #<%=p%>_feedback_page_highlight > .<%=p%>_feedback_page_highlight_line {                        opacity: 0;                        position: absolute;                        background: <%= widgetStyle.accentColor %>                    }                    #<%=p%>_feedback_page_highlight > #<%=p%>_feedback_page_highlight_line_top {top: 0; left: 0; right: 0; height: 4px;}                    #<%=p%>_feedback_page_highlight > #<%=p%>_feedback_page_highlight_line_right {top: 0; bottom: 0; right: 0; width: 4px;}                    #<%=p%>_feedback_page_highlight > #<%=p%>_feedback_page_highlight_line_bottom {bottom: 0; left: 0; right: 0; height: 4px;}                    #<%=p%>_feedback_page_highlight > #<%=p%>_feedback_page_highlight_line_left {top: 0; left: 0; bottom: 0; width: 4px;}                                        /* Page highlight - TOP MESSAGE */                    #<%=p%>_feedback_page_highlight > #<%=p%>_feedback_top_message_select {                        opacity: 0;                        position: fixed;                        top: -4px;                        left: 50%;                        width: 260px;                        margin-left: -130px;                        padding: 23px 0 19px 0;                        text-align: center;                        font-size: 13px;                        -webkit-border-radius: 0 0 10px 10px;                        -moz-border-radius: 0 0 10px 10px;                        border-radius: 0 0 10px 10px;                        background-color: <%= widgetStyle.selectionColor %>;                        color: <%= widgetStyle.selectionTextColor %>;                        -webkit-box-shadow: 0 2px 25px 3px rgba(0,0,0,.3);                        -moz-box-shadow: 0 2px 25px 3px rgba(0,0,0,.3);                        box-shadow: 0 2px 25px 3px rgba(0,0,0,.3);                    }                                        #<%=p%>_feedback_page_highlight > #<%=p%>_feedback_top_message_select {                    }                                        #<%=p%>_feedback_page_highlight > #<%=p%>_feedback_top_message_select:before,                    #<%=p%>_feedback_page_highlight > #<%=p%>_feedback_top_message_select:after {                        content:"";                        display: block;                        width: 55px;                        height: 50px;                        background-color:                        <%= widgetStyle.accentColor %>;                        position: absolute;                        top: 0;                        z-index: -1;                    }                                        #<%=p%>_feedback_page_highlight > #<%=p%>_feedback_top_message_select:before {                        left: -9px;                        -webkit-transform: skewX(20deg);                        -moz-transform: skewX(20deg);                        -ms-transform: skewX(20deg);                        transform: skewX(20deg);                    }                                        #<%=p%>_feedback_page_highlight > #<%=p%>_feedback_top_message_select:after {                        right: -9px;                        -webkit-transform: skewX(-20deg);                        -moz-transform: skewX(-20deg);                        -ms-transform: skewX(-20deg);                        transform: skewX(-20deg);                    }                                        #<%=p%>_feedback_page_highlight > #<%=p%>_feedback_top_message_select #<%=p%>_feedback_top_message_select_close {                        position: absolute;                        right: 13px;                        top: 21px;                        color: <%= widgetStyle.selectionTextColor %>;                        text-decoration: none;                        cursor: pointer;                        height: 19px;                        width: 19px;                        padding: 3px 0 0 1px;                        border-radius: 50%;                        background: transparent;                        -webkit-box-sizing: border-box !important;                        -moz-box-sizing: border-box !important;                        box-sizing: border-box !important;                    }                                        #<%=p%>_feedback_page_highlight > #<%=p%>_feedback_top_message_select #<%=p%>_feedback_top_message_select_close:hover {                        background: rgba(0,0,0,.2);                    }                                        /************************                     * OLD WIDGETS CSS OVERRIDES                    *************************/                                        [data-hotjar-cursor-pointer],                    [data-hotjar-cursor-pointer] * {cursor: pointer !important;}                                        #<%=p%>_feedback.<%=p%>_widget,                    #<%=p%>_feedback.<%=p%>_widget *,                    #<%=p%>_feedback.<%=p%>_widget .<%=p%>_widget_content .<%=p%>_widget_input_field {                        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif !important;                    }                                        #<%=p%>_feedback.<%=p%>_widget p {                        color: <%= widgetStyle.darkGrey %> !important;                    }                                        #<%=p%>_feedback.<%=p%>_widget .<%=p%>_btn_primary,                    #<%=p%>_feedback.<%=p%>_widget .<%=p%>_btn_primary:hover,                    #<%=p%>_feedback.<%=p%>_widget .<%=p%>_btn_primary:focus,                    #<%=p%>_feedback.<%=p%>_widget .<%=p%>_btn_primary:active {background: <%= widgetStyle.accentColor %> !important; color: <%= widgetStyle.accentTextColor %> !important; font-weight: normal !important;}                                        #<%=p%>_feedback.<%=p%>_widget .<%=p%>_btn_clear {color: #aaaaaa !important;}                    #<%=p%>_feedback.<%=p%>_widget .<%=p%>_btn_clear:hover,                    #<%=p%>_feedback.<%=p%>_widget .<%=p%>_btn_clear:focus,                    #<%=p%>_feedback.<%=p%>_widget .<%=p%>_btn_clear:active {color: #666666 !important;}                                        #<%=p%>_feedback.<%=p%>_widget .<%=p%>_btn_disabled,                    #<%=p%>_feedback.<%=p%>_widget .<%=p%>_btn_disabled:hover,                    #<%=p%>_feedback.<%=p%>_widget .<%=p%>_btn_disabled:focus,                    #<%=p%>_feedback.<%=p%>_widget .<%=p%>_btn_disabled:active {background: <%= widgetStyle.disabledColor %> !important; color: <%= widgetStyle.darkGrey %> !important; }                                        #<%=p%>_feedback.<%=p%>_widget .<%=p%>_widget_title {padding: 30px !important; cursor: default; font-size: 17px; font-weight: normal; line-height: normal !important;}                    #<%=p%>_feedback.<%=p%>_widget .<%=p%>_widget_title a {color: inherit !important; text-decoration: underline !important;}                                        #<%=p%>_feedback.<%=p%>_widget .<%=p%>_widget_content .<%=p%>_input_field {border: 0 !important; background: #eaeaeb !important; color: #454A55 !important; padding: 12px 20px !important; margin-left: -12px; margin-right: -12px; margin-bottom: 10px; width: 320px; -webkit-box-shadow: none !important; -moz-box-shadow: none !important; box-shadow: none !important;}                    #<%=p%>_feedback.<%=p%>_widget .<%=p%>_widget_content textarea.<%=p%>_input_field {height: 105px !important; line-height: 18px !important; margin-bottom: 0;}                    #<%=p%>_feedback.<%=p%>_widget .<%=p%>_widget_content input.<%=p%>_input_field {height: 46px; !important; text-align: center;}                    #<%=p%>_feedback.<%=p%>_widget .<%=p%>_icon-select-element:before {color: #454A55 !important;}                                        #<%=p%>_feedback.<%=p%>_widget .<%=p%>_widget_footer {border-top: 0!important;}                    #<%=p%>_feedback.<%=p%>_widget .<%=p%>_widget_footer .<%=p%>_pull_left {padding: 9px 0 20px 20px; color: <%= widgetStyle.darkGrey %>;}                    #<%=p%>_feedback.<%=p%>_widget .<%=p%>_widget_footer .<%=p%>_pull_left a {color: <%= widgetStyle.darkGrey %>;}                    #<%=p%>_feedback.<%=p%>_widget .<%=p%>_widget_footer .<%=p%>_pull_left span {color: #f4364c;}                    #<%=p%>_feedback.<%=p%>_widget .<%=p%>_widget_footer .<%=p%>_pull_right {display: none; padding-top: 0; border-top: 0!important;}                    #<%=p%>_feedback.<%=p%>_widget .<%=p%>_widget_footer.<%=p%>_widget_legal .<%=p%>_pull_right {display: block; padding-top: 0; border-top: 0!important;}                                        /************************                     * STATE MODIFICATIONS                    *************************/                    #<%=p%>_feedback[data-state="minimized"] {width: 80px;}                    #<%=p%>_feedback[data-state="minimized"] #<%=p%>_feedback_minimized {display: block;}                    #<%=p%>_feedback[data-state="minimized"][data-show-message] {width: 280px;}                    #<%=p%>_feedback[data-state="minimized"][data-show-message] .<%=p%>_feedback_minimized_message {pointer-events: all; opacity: 1;}                    #<%=p%>_feedback[data-state="minimized"][data-minimized-position="bottom_right"][data-show-message] .<%=p%>_feedback_minimized_message    {right: 70px;}                    #<%=p%>_feedback[data-state="minimized"][data-minimized-position="bottom_left"][data-show-message] .<%=p%>_feedback_minimized_message     {left: 70px;}                    #<%=p%>_feedback[data-state="minimized"][data-minimized-position="middle_right"][data-show-message] .<%=p%>_feedback_minimized_message    {right: 60px;}                    #<%=p%>_feedback[data-state="minimized"][data-minimized-position="middle_left"][data-show-message] .<%=p%>_feedback_minimized_message     {left: 60px;}                    #<%=p%>_feedback[data-state="minimized"] .<%=p%>_feedback_content_dimmer,                    #<%=p%>_feedback[data-state="minimized"] #<%=p%>_feedback_content_highlighter {display: none;}                                        #<%=p%>_feedback[data-state="emotion"] {width: 320px;}                    #<%=p%>_feedback[data-state="emotion"] #<%=p%>_feedback_open_close {opacity: 1; pointer-events: all;}                    #<%=p%>_feedback[data-state="emotion"] #<%=p%>_feedback_open [data-state="emotion"] {display: block;}                    #<%=p%>_feedback[data-state="emotion"] #<%=p%>_feedback_open .<%=p%>_widget_footer .<%=p%>_pull_left {padding-top: 0;}                    #<%=p%>_feedback[data-state="emotion"] #<%=p%>_feedback_open .<%=p%>_widget_footer .<%=p%>_btn_clear {display: none;}                    #<%=p%>_feedback[data-state="emotion"] #<%=p%>_state-1 p.<%=p%>_widget_title {padding-top: 40px !important; padding-bottom: 0 !important;}                                        #<%=p%>_feedback[data-state="comment"] #<%=p%>_feedback_open_close {opacity: 1; pointer-events: all;}                    #<%=p%>_feedback[data-state="comment"] #<%=p%>_feedback_open [data-state="emotion"] {display: block;}                    #<%=p%>_feedback[data-state="comment"] #<%=p%>_feedback_open .<%=p%>_emotion_content {margin-bottom: 15px;}                    #<%=p%>_feedback[data-state="comment"] #<%=p%>_feedback_open .<%=p%>_widget_footer .<%=p%>_pull_right {display: block;}                    #<%=p%>_feedback[data-state="comment"] #<%=p%>_feedback_open .<%=p%>_widget_footer .<%=p%>_btn_clear {display: none;}                    #<%=p%>_feedback[data-state="comment"] #<%=p%>_state-1 p.<%=p%>_widget_title {display: none;}                                        #<%=p%>_feedback[data-state="email"] #<%=p%>_feedback_open [data-state="email"] {display: block;}                    #<%=p%>_feedback[data-state="email"] #<%=p%>_feedback_open_close {opacity: 1; pointer-events: all;}                    #<%=p%>_feedback[data-state="email"] #<%=p%>_feedback_open .<%=p%>_widget_footer .<%=p%>_pull_left {display: none;}                    #<%=p%>_feedback[data-state="email"] #<%=p%>_feedback_open .<%=p%>_widget_footer .<%=p%>_pull_right {display: block;}                                        #<%=p%>_feedback[data-state="consent"] #<%=p%>_feedback_open [data-state="consent"] {display: block;}                    #<%=p%>_feedback[data-state="consent"] #<%=p%>_feedback_open [data-state="consent"] .<%=p%>_consent_message_text {text-align: center; padding: 0 14px; color: #666666 !important;}                    #<%=p%>_feedback[data-state="consent"] #<%=p%>_feedback_open [data-state="consent"] .<%=p%>_consent_message_text a {color: #666666 !important;}                    #<%=p%>_feedback[data-state="consent"] #<%=p%>_feedback_open [data-state="consent"] .<%=p%>_consent_actions {margin-bottom: 30px; text-align: center;}                    #<%=p%>_feedback[data-state="consent"] #<%=p%>_feedback_open [data-state="consent"] .<%=p%>_consent_actions button {font-size: 18px !important; margin: 20px 5px 0 5px !important; padding: 7px 10px !important; width: 50px !important;}                    #<%=p%>_feedback[data-state="consent"] #<%=p%>_feedback_open .<%=p%>_widget_footer .<%=p%>_pull_left {display: none;}                    #<%=p%>_feedback[data-state="consent"] #<%=p%>_feedback_open .<%=p%>_more_info_link,                    #<%=p%>_feedback[data-state="consent"] #<%=p%>_feedback_open .<%=p%>_more_info_link:hover,                    #<%=p%>_feedback[data-state="consent"] #<%=p%>_feedback_open .<%=p%>_more_info_link:focus,                    #<%=p%>_feedback[data-state="consent"] #<%=p%>_feedback_open .<%=p%>_more_info_link:visited,                    #<%=p%>_feedback[data-state="consent"] #<%=p%>_feedback_open .<%=p%>_more_info_link:active {                        color: #333 !important;                        text-decoration: underline;                    }                                        #<%=p%>_feedback[data-screenshot] {top: 0; bottom: 0; left: 0; right: 0; width: 100% !important;}                                        #<%=p%>_feedback[data-screenshot="element"] {pointer-events: none;}                    #<%=p%>_feedback[data-screenshot="element"] #<%=p%>_feedback_top_message_select #<%=p%>_feedback_top_message_select_close {pointer-events: all;}                    #<%=p%>_feedback[data-screenshot="element"] #<%=p%>_feedback_open_close {display: none !important;}                    #<%=p%>_feedback[data-screenshot="element"] #<%=p%>_feedback_open {display: none !important;}                    #<%=p%>_feedback[data-screenshot="element"] .<%=p%>_feedback_content_dimmer {opacity: .45;}                    #<%=p%>_feedback[data-screenshot="element"] #<%=p%>_feedback_content_highlighter {display: block;}                    #<%=p%>_feedback[data-screenshot="element"] #<%=p%>_feedback_page_highlight > #<%=p%>_feedback_top_message_select {opacity: 1;}                    #<%=p%>_feedback[data-screenshot="element"] #<%=p%>_feedback_page_highlight > .<%=p%>_feedback_page_highlight_line {opacity: 1;}                    #<%=p%>_feedback[data-screenshot="element"] #<%=p%>_feedback_page_highlight > #<%=p%>_feedback_top_message_select:before,                    #<%=p%>_feedback[data-screenshot="element"] #<%=p%>_feedback_page_highlight > #<%=p%>_feedback_top_message_select:after {background: <%= widgetStyle.selectionColor %> !important;}                    #<%=p%>_feedback[data-screenshot="element"] #<%=p%>_feedback_page_highlight > .<%=p%>_feedback_page_highlight_line {background: <%= widgetStyle.selectionColor %> !important;}                                        #<%=p%>_feedback[data-screenshot="elementSelected"] .<%=p%>_feedback_content_dimmer {opacity: .45;}                    #<%=p%>_feedback[data-screenshot="elementSelected"] #<%=p%>_feedback_content_highlighter {display: block; pointer-events: all; cursor: pointer; border-style: solid; border-color: <%= widgetStyle.accentColor %> !important;}                    #<%=p%>_feedback[data-screenshot="elementSelected"] #<%=p%>_feedback_content_highlighter:before {content: "<%=hj.widget._("change")%>"; position: absolute; background: <%= widgetStyle.accentColor %>; color: <%= widgetStyle.accentTextColor %>; bottom: -32px; right: -4px; padding: 8px 12px; border-radius: 0 0 3px 3px; font-size: 12px;}                    #<%=p%>_feedback[data-screenshot="elementSelected"] #<%=p%>_feedback_content_highlighter_close {display: block;}                                        /************************                     * DEVICE ADAPTATIONS                    *************************/                                        #<%=p%>_feedback[data-device="desktop"] [data-show-for="phone"],                    #<%=p%>_feedback[data-device="desktop"] [data-show-for="tablet"],                    #<%=p%>_feedback[data-device="tablet"] [data-show-for="desktop"],                    #<%=p%>_feedback[data-device="tablet"] [data-show-for="phone"],                    #<%=p%>_feedback[data-device="phone"] [data-show-for="desktop"],                    #<%=p%>_feedback[data-device="phone"] [data-show-for="tablet"],                    #<%=p%>_feedback[data-viewmode="touch"] [data-show-for="desktop"],                    #<%=p%>_feedback[data-viewmode="desktop"] [data-show-for="touch"] {                        display: none !important;                    }                                        /************************                     * DESKTOP VIEWMODE ADAPTATIONS                     *************************/                                        #<%=p%>_feedback[data-viewmode="desktop"][data-minimized-position="middle_left"] #<%=p%>_feedback_minimized { bottom: <%= widgetStyle.middlePositionPixels %>px; left: 0; }                    #<%=p%>_feedback[data-viewmode="desktop"][data-minimized-position="middle_left"] .<%=p%>_feedback_minimized_message {left: 52px;}                    #<%=p%>_feedback[data-viewmode="desktop"][data-minimized-position="middle_left"] #<%=p%>_feedback_open      { left: 22px; }                    #<%=p%>_feedback[data-viewmode="desktop"][data-minimized-position="middle_left"] #<%=p%>_feedback_open.fade { left: 37px; }                                        #<%=p%>_feedback[data-viewmode="desktop"][data-minimized-position="middle_right"] #<%=p%>_feedback_minimized { bottom: <%= widgetStyle.middlePositionPixels %>px; right: 0; }                    #<%=p%>_feedback[data-viewmode="desktop"][data-minimized-position="middle_right"] .<%=p%>_feedback_minimized_message {right: 52px;}                    #<%=p%>_feedback[data-viewmode="desktop"][data-minimized-position="middle_right"] #<%=p%>_feedback_open      { right: 15px; }                    #<%=p%>_feedback[data-viewmode="desktop"][data-minimized-position="middle_right"] #<%=p%>_feedback_open.fade { right: 30px; }                                        #<%=p%>_feedback[data-viewmode="desktop"] #<%=p%>_feedback_open_close_phone {                        font-size: 15px;                        width: 27px;                        height: 27px;                        top: -13px;                    }                                        #<%=p%>_feedback[data-viewmode="desktop"] #<%=p%>_feedback_open_close_phone span {                        line-height: 27px !important;                    }                                        /************************                     * TOUCH VIEWMODE ADAPTATIONS (Tablets / Phones)                    *************************/                                        #<%=p%>_feedback[data-viewmode="touch"][data-state="emotion"],                     #<%=p%>_feedback[data-viewmode="touch"][data-state="comment"],                     #<%=p%>_feedback[data-viewmode="touch"][data-state="email"],                    #<%=p%>_feedback[data-viewmode="touch"][data-state="consent"] {                        top: 0;                        bottom: 0;                        left: 0;                        right: 0;                        width: 100%;                        height: 100%;                    }                                        #<%=p%>_feedback[data-viewmode="touch"] .<%=p%>_feedback_minimized_message .<%=p%>_feedback_minimized_message_close {                        opacity: 1 !important;                    }                                        #<%=p%>_feedback[data-viewmode="touch"] #<%=p%>_feedback_open_close {                        display: none;                    }                                        #<%=p%>_feedback[data-viewmode="touch"] #<%=p%>_feedback_open_close_phone {                        display: block;                    }                                        #<%=p%>_feedback[data-viewmode="touch"] .<%=p%>_widget_content textarea.<%=p%>_input_field,                     #<%=p%>_feedback[data-viewmode="touch"] .<%=p%>_widget_content input.<%=p%>_input_field {                        font-size: 17px !important;                        margin: 0;                        width: 100%;                        border-radius: 4px 4px 0 0;                    }                                        #<%=p%>_feedback[data-viewmode="touch"] .<%=p%>_widget_content textarea.<%=p%>_input_field {                        line-height: 1.4em !important;                    }                                        #<%=p%>_feedback[data-viewmode="touch"] .<%=p%>_widget_content input.<%=p%>_input_field {                        line-height: normal !important;                    }                                        #<%=p%>_feedback[data-viewmode="touch"][data-state="comment"] #<%=p%>_feedback_open,                     #<%=p%>_feedback[data-viewmode="touch"][data-state="email"] #<%=p%>_feedback_open,                     #<%=p%>_feedback[data-viewmode="touch"][data-state="consent"] #<%=p%>_feedback_open {                        top: 0;                        right: 0;                        bottom: 0;                        left: 0;                        margin-left: 0 !important;                        border-radius: 0;                        width: 100%;                        height: 100%;                        overflow: auto;                        -webkit-transition-duration: 0s;                        -moz-transition-duration: 0s;                        transition-duration: 0s;                    }                                        #<%=p%>_feedback[data-viewmode="touch"] #<%=p%>_feedback_open .<%=p%>_toolset_actions {                        margin: -4px 0 0 0; border-radius: 0 0 4px 4px;                    }                                        #<%=p%>_feedback[data-viewmode="touch"][data-state="comment"] .<%=p%>_widget_title,                    #<%=p%>_feedback[data-viewmode="touch"][data-state="email"] .<%=p%>_widget_title,                    #<%=p%>_feedback[data-viewmode="touch"][data-state="consent"] .<%=p%>_widget_title {                        display: block !important;                        padding: 35px 50px !important;                        font-size: 18px;                        border-bottom: 1px solid #eaeaeb;                    }                                        #<%=p%>_feedback[data-viewmode="touch"][data-state="comment"] .<%=p%>_widget_content,                    #<%=p%>_feedback[data-viewmode="touch"][data-state="email"] .<%=p%>_widget_content,                    #<%=p%>_feedback[data-viewmode="touch"][data-state="consent"] .<%=p%>_widget_content {                        padding: 30px;                    }                                        #<%=p%>_feedback[data-viewmode="touch"][data-state="comment"] #<%=p%>_feedback_open_close_phone,                     #<%=p%>_feedback[data-viewmode="touch"][data-state="email"] #<%=p%>_feedback_open_close_phone,                    #<%=p%>_feedback[data-viewmode="touch"][data-state="consent"] #<%=p%>_feedback_open_close_phone {                        top: 10px;                        background: transparent;                        color: <%= widgetStyle.darkGrey %>;                        right: 10px;                        font-size: 22px;                    }                                        #<%=p%>_feedback[data-viewmode="touch"][data-state="consent"] .<%=p%>_consent_message_text {                        font-size: 16px;                    }                                        #<%=p%>_feedback[data-viewmode="touch"] #<%=p%>_feedback_page_highlight > #<%=p%>_feedback_top_message_select #<%=p%>_feedback_top_message_select_close {                        top: 16px;                        right: 5px;                        height: 27px;                        width: 27px;                        padding: 4px 0 0 2px;                        font-size: 18px;                    }                                        /************************                     * TABLET SPECIFIC                    *************************/                                        #<%=p%>_feedback[data-device="tablet"] #<%=p%>_feedback_open {                        bottom: 0;                        left: 50%;                        width: 380px;                        margin-left: -190px;                    }                                        #<%=p%>_feedback[data-device="tablet"][data-state="emotion"] #<%=p%>_feedback_open {                        bottom: 20px;                    }                    #<%=p%>_feedback[data-device="tablet"][data-state="comment"] .<%=p%>_widget_title,                    #<%=p%>_feedback[data-device="tablet"][data-state="email"] .<%=p%>_widget_title,                    #<%=p%>_feedback[data-device="tablet"][data-state="consent"] .<%=p%>_widget_title {                        font-size: 26px;                        padding: 40px 50px !important;                    }                                        #<%=p%>_feedback[data-device="tablet"][data-state="comment"] .<%=p%>_widget_content,                    #<%=p%>_feedback[data-device="tablet"][data-state="email"] .<%=p%>_widget_content,                    #<%=p%>_feedback[data-device="tablet"][data-state="consent"] .<%=p%>_widget_content {                        padding: 40px 60px;                    }                                        #<%=p%>_feedback[data-device="tablet"][data-state="comment"] #<%=p%>_feedback_open .<%=p%>_emotion_content {                        height: 58px;                        margin-top: 10px;                        margin-bottom: 40px;                    }                                        #<%=p%>_feedback[data-device="tablet"] #<%=p%>_feedback_open #<%=p%>_state-1[data-emotion-chosen] [data-emotion-option] .<%=p%>_icon {                        height: 40px;                        min-width: 40px;                        font-size: 40px;                        background-size: 40px;                    }                                        #<%=p%>_feedback[data-device="tablet"] #<%=p%>_feedback_open .<%=p%>_emotion_comment_holder:before {                        display: none !important;                    }                                        #<%=p%>_feedback[data-device="tablet"] .<%=p%>_widget_content textarea.<%=p%>_input_field {                        height: 180px !important;                        font-size: 22px !important;                        padding: 20px !important;                    }                                        #<%=p%>_feedback[data-device="tablet"] .<%=p%>_widget_content input.<%=p%>_input_field {                        height: 80px !important;                        font-size: 22px !important;                        padding: 20px !important;                    }                                        #<%=p%>_feedback[data-device="tablet"] .<%=p%>_widget_footer .<%=p%>_pull_left {                        font-size: 14px;                        padding: 22px 0 20px 8%;                    }                                        #<%=p%>_feedback[data-device="tablet"] .<%=p%>_widget_footer .<%=p%>_pull_right {                        padding: 0 8% 30px 0;                    }                                        #<%=p%>_feedback[data-device="tablet"] .<%=p%>_widget_footer .<%=p%>_pull_right button {                        font-size: 22px !important;                        padding: 14px 28px !important;                    }                                        /************************                     * PHONE SPECIFIC                    *************************/                                        #<%=p%>_feedback[data-device="phone"] #<%=p%>_feedback_open {                        bottom: 0;                        left: 20px;                        right: 20px;                        width: auto;                        margin-left: 0;                    }                                        #<%=p%>_feedback[data-device="phone"][data-state="emotion"] #<%=p%>_feedback_open {                        bottom: 20px;                    }                                        @media (min-width:421px) {                        #<%=p%>_feedback[data-viewmode="phone"][data-state="emotion"] #<%=p%>_feedback_open {                            left: 50%;                            width: 300px;                            margin-left: -150px;                        }                    }                                        #<%=p%>_feedback[data-device="phone"][data-state="comment"] #<%=p%>_feedback_open .<%=p%>_emotion_content {                        margin-top: 10px;                        margin-bottom: 50px;                    }                                        #<%=p%>_feedback[data-device="phone"] .<%=p%>_widget_content textarea.<%=p%>_input_field {                        height: 110px !important;                        padding: 15px !important;                    }                                        #<%=p%>_feedback[data-device="phone"] #<%=p%>_feedback_open #<%=p%>_state-1[data-emotion-chosen] [data-emotion-active] .<%=p%>_emotion_text {                        display: block !important;                        opacity: 1;                        top: 34px;                        line-height: 12px;                    }                                        #<%=p%>_feedback[data-device="phone"] .<%=p%>_widget_footer .<%=p%>_pull_left {                        padding: 18px 0 20px 30px;                    }                                        #<%=p%>_feedback[data-device="phone"] .<%=p%>_widget_footer .<%=p%>_pull_right {                        padding: 0 30px 30px 0;                    }                                        #<%=p%>_feedback[data-device="phone"] .<%=p%>_widget_footer .<%=p%>_pull_right button {                        font-size: 18px !important;                        padding: 12px 20px !important;                    }                                    </style>',
              '<div id="<%=p%>_feedback" class="<%=p%>_widget <%=p%>_<%= hj.widget.activeLanguageDirection %> <%=p%>_<%= feedback.language %>"                      data-state="none"                      data-minimized-position="<%= feedback.position %>">                                        \x3c!-- Minimized State --\x3e                    <div id="<%=p%>_feedback_minimized">                        <div class="<%=p%>_feedback_minimized_label">                            <div class="<%=p%>_feedback_minimized_label_text">                                <%=hj.widget._("feedback")%>                            </div>                            <% if (widgetStyle.emotion === "default") { %>                                <div class="<%=p%>_icon <%=p%>_icon_emotion_default" data-emotion-score="3">                                    <span class="path1"></span><span class="path2"></span>                                </div>                            <% } %>                        </div>                        <div class="<%=p%>_hotjar_buddy <%=p%>_icon <%=p%>_icon_emotion_default <%=p%>_bottom_position_launcher" data-emotion-score="3">                            <span class="path1"></span><span class="path2"></span>                        </div>                        <div id="<%=p%>_feedback_minimized_message" class="<%=p%>_feedback_minimized_message <%=p%>_transition <%=p%>_rounded_corners">                            <a class="<%=p%>_feedback_minimized_message_close <%=p%>_link_no_underline <%=p%>_icon <%=p%>_icon-x <%=p%>_transition"></a>                            <span id="<%=p%>_feedback_minimized_text_initial" class="<%=p%>_wordwrap"><%= feedback.content.initial %></span>                            <span id="<%=p%>_feedback_minimized_text_thankyou" class="<%=p%>_wordwrap"><%= feedback.content.thankyou %></span>                        </div>                    </div>                                        \x3c!-- Opened State --\x3e                    <a id="<%=p%>_feedback_open_close">                        <span class="<%=p%>_link_no_underline <%=p%>_icon <%=p%>_icon-x"></span>                    </a>                    <div id="<%=p%>_feedback_open" class="<%=p%>_rounded_corners <%=p%>_transition">                        <a id="<%=p%>_feedback_open_close_phone">                            <span class="<%=p%>_link_no_underline <%=p%>_icon <%=p%>_icon-x"></span>                        </a>                        \x3c!-- STEP 1: EMOTION --\x3e                        <div id="<%=p%>_state-1" data-state="emotion">                            <p class="<%=p%>_widget_title"><%= feedback.content.emotion %></p>                            <div class="<%=p%>_widget_content">                                <div class="<%=p%>_emotion_content <%=p%>_emotion_type_<%=widgetStyle.emotion%>">                                    <div class="<%=p%>_emotion_option" data-bind="emotion" data-emotion-option="0">                                        <% if (widgetStyle.emotion === "default" || widgetStyle.emotion === "smiley" || widgetStyle.emotion === "emoji") { %>                                            <span class="<%=p%>_icon <%=p%>_icon_emotion_<%=widgetStyle.emotion%>" data-emotion-score="0">                                                <% if (widgetStyle.emotion === "default") { %>                                                    <span class="path1"></span><span class="path2"></span>                                                <% } %>                                            </span>                                        <% } %>                                        <% if (widgetStyle.emotion === "star") { %>                                            <span class="<%=p%>_icon <%=p%>_icon_emotion_<%=widgetStyle.emotion%>" data-emotion-score="0" data-score-state="off"></span>                                        <% } %>                                        <span class="<%=p%>_emotion_text <%=p%>_transition"><%=hj.widget._("hate")%></span>                                    </div>                                    <div class="<%=p%>_emotion_option" data-bind="emotion" data-emotion-option="1">                                        <% if (widgetStyle.emotion === "default" || widgetStyle.emotion === "smiley" || widgetStyle.emotion === "emoji") { %>                                            <span class="<%=p%>_icon <%=p%>_icon_emotion_<%=widgetStyle.emotion%>" data-emotion-score="1">                                                <% if (widgetStyle.emotion === "default") { %>                                                    <span class="path1"></span><span class="path2"></span>                                                <% } %>                                            </span>                                        <% } %>                                        <% if (widgetStyle.emotion === "star") { %>                                            <span class="<%=p%>_icon <%=p%>_icon_emotion_<%=widgetStyle.emotion%>" data-emotion-score="1" data-score-state="off"></span>                                        <% } %>                                        <span class="<%=p%>_emotion_text <%=p%>_transition"><%=hj.widget._("dislike")%></span>                                    </div>                                    <div class="<%=p%>_emotion_option" data-bind="emotion" data-emotion-option="2">                                        <% if (widgetStyle.emotion === "default" || widgetStyle.emotion === "smiley" || widgetStyle.emotion === "emoji") { %>                                            <span class="<%=p%>_icon <%=p%>_icon_emotion_<%=widgetStyle.emotion%>" data-emotion-score="2">                                                <% if (widgetStyle.emotion === "default") { %>                                                    <span class="path1"></span><span class="path2"></span>                                                <% } %>                                            </span>                                        <% } %>                                        <% if (widgetStyle.emotion === "star") { %>                                            <span class="<%=p%>_icon <%=p%>_icon_emotion_<%=widgetStyle.emotion%>" data-emotion-score="2" data-score-state="off"></span>                                        <% } %>                                            <span class="<%=p%>_emotion_text <%=p%>_transition"><%=hj.widget._("neutral")%></span>                                    </div>                                    <div class="<%=p%>_emotion_option" data-bind="emotion" data-emotion-option="3">                                        <% if (widgetStyle.emotion === "default" || widgetStyle.emotion === "smiley" || widgetStyle.emotion === "emoji") { %>                                            <span class="<%=p%>_icon <%=p%>_icon_emotion_<%=widgetStyle.emotion%>" data-emotion-score="3">                                                <% if (widgetStyle.emotion === "default") { %>                                                    <span class="path1"></span><span class="path2"></span>                                                <% } %>                                            </span>                                        <% } %>                                        <% if (widgetStyle.emotion === "star") { %>                                            <span class="<%=p%>_icon <%=p%>_icon_emotion_<%=widgetStyle.emotion%>" data-emotion-score="3" data-score-state="off"></span>                                        <% } %>                                        <span class="<%=p%>_emotion_text <%=p%>_transition"><%=hj.widget._("like")%></span>                                    </div>                                    <div class="<%=p%>_emotion_option" data-bind="emotion" data-emotion-option="4">                                        <% if (widgetStyle.emotion === "default" || widgetStyle.emotion === "smiley" || widgetStyle.emotion === "emoji") { %>                                            <span class="<%=p%>_icon <%=p%>_icon_emotion_<%=widgetStyle.emotion%>" data-emotion-score="4">                                                <% if (widgetStyle.emotion === "default") { %>                                                    <span class="path1"></span><span class="path2"></span>                                                <% } %>                                            </span>                                        <% } %>                                        <% if (widgetStyle.emotion === "star") { %>                                            <span class="<%=p%>_icon <%=p%>_icon_emotion_<%=widgetStyle.emotion%>" data-emotion-score="4" data-score-state="off"></span>                                        <% } %>                                        <span class="<%=p%>_emotion_text <%=p%>_transition"><%=hj.widget._("love")%></span>                                    </div>                                    <div class="<%=p%>_clear_both"></div>                                </div>                                                                <div class="<%=p%>_emotion_comment_holder">                                    <textarea maxlength="1000" class="<%=p%>_input_field" id="<%=p%>_emotion_comment" name="<%=p%>_emotion_comment" placeholder="<%=hj.widget._("tell_us_about_your_experience")%>" rows="3" data-bind="comment"></textarea>                                    <div class="<%=p%>_toolset_actions">                                        <% if (features.selectElement) { %>                                        <div id="<%=p%>_toolset_action_select" class="<%=p%>_transition">                                            <span class="<%=p%>_icon <%=p%>_icon-select-element"></span>                                            <div class="<%=p%>_toolset_tooltip <%=p%>_transition"><%=hj.widget._("select_the_area")%></div>                                        </div>                                        <% } %>                                    </div>                                </div>                                                            </div>                        </div>                                                \x3c!-- STEP 2: EMAIL --\x3e                        <div id="<%=p%>_state-2" data-state="email">                            <p class="<%=p%>_widget_title"><%= feedback.content.email %></p>                            <div class="<%=p%>_widget_content">                                <input maxlength="255" class="<%=p%>_input_field" type="email" id="<%=p%>_email" name="<%=p%>_email" placeholder="email@domain.com" data-bind="email" />                             </div>                        </div>                        \x3c!-- STEP 3: THANK YOU AND CONSENT --\x3e                        <div id="<%=p%>_state-3" data-state="consent">                            <p class="<%=p%>_widget_title"><%= feedback.content.thankyou %></p>                            <div class="<%=p%>_widget_content">                                <p class="<%=p%>_consent_message_text"><%=hj.widget._("consent")%>&nbsp;<a class="<%=p%>_more_info_link" href="<%=hj.widget._("consent_more_information_url")%>" target="_blank"><%=hj.widget._("consent_more_information")%></a></p>                                <div class="<%=p%>_consent_actions">                                    <button class="<%=p%>_btn_primary <%=p%>_rounded_corners" data-consent="false" type="button">                                        <i class="<%=p%>_icon <%=p%>_icon-x"></i>                                    </button>                                    <button class="<%=p%>_btn_primary <%=p%>_rounded_corners" data-consent="true" type="button">                                        <i class="<%=p%>_icon <%=p%>_icon-ok"></i>                                    </button>                                 </div>                                <%=hj.widget.renderLegal(feedback.showLegal)%>                             </div>                        </div>                                                \x3c!-- FOOTER --\x3e                        <div class="<%=p%>_widget_footer">                            <% if (feedback.effectiveShowBranding) { %>                                <div id="<%=p%>_hotjar_branding" class="<%=p%>_pull_left">                                    <span class="<%=p%>_link_no_underline <%=p%>_icon <%=p%>_icon-hotjar"></span>                                    Not using <a href="<%=cta%>" target="_blank">Hotjar</a> yet?                                </div>                            <% } %>                            <div class="<%=p%>_pull_right">                                <button type="button" id="<%=p%>_action_skip" class="<%=p%>_btn_clear <%=p%>_rounded_corners <%=p%>_transition"><%=hj.widget._("skip")%></button>                                <button type="button" id="<%=p%>_action_submit" class="<%=p%>_btn_primary <%=p%>_rounded_corners <%=p%>_transition <%=p%>_shadow"><%=hj.widget._("send")%></button>                            </div>                            <div class="<%=p%>_clear_both"></div>                        </div>                    </div>                                        \x3c!-- PAGE HIGHLIGHTER --\x3e                    <div id="<%=p%>_feedback_page_highlight" class="<%=p%>_feedback_selection_ignore">                        <div class="<%=p%>_feedback_page_highlight_line <%=p%>_transition" id="<%=p%>_feedback_page_highlight_line_top"></div>                        <div class="<%=p%>_feedback_page_highlight_line <%=p%>_transition" id="<%=p%>_feedback_page_highlight_line_right"></div>                        <div class="<%=p%>_feedback_page_highlight_line <%=p%>_transition" id="<%=p%>_feedback_page_highlight_line_bottom"></div>                        <div class="<%=p%>_feedback_page_highlight_line <%=p%>_transition" id="<%=p%>_feedback_page_highlight_line_left"></div>                                                <div id="<%=p%>_feedback_top_message_select">                            <%=hj.widget._("select_the_area")%>                            <a id="<%=p%>_feedback_top_message_select_close" class="<%=p%>_feedback_selection_ignore <%=p%>_transition">                                <span class="<%=p%>_icon <%=p%>_icon-x <%=p%>_feedback_selection_ignore"></span>                            </a>                        </div>                                            </div>                                        \x3c!-- DIMMERS (OVERLAY) + ELEMENT HIGHLIGHTER --\x3e                    <div class="<%=p%>_feedback_content_dimmer" id="<%=p%>_feedback_content_dimmer_top" data-show-for="desktop"></div>                    <div class="<%=p%>_feedback_content_dimmer" id="<%=p%>_feedback_content_dimmer_right" data-show-for="desktop"></div>                    <div class="<%=p%>_feedback_content_dimmer" id="<%=p%>_feedback_content_dimmer_bottom" data-show-for="desktop"></div>                    <div class="<%=p%>_feedback_content_dimmer" id="<%=p%>_feedback_content_dimmer_left" data-show-for="desktop"></div>                    <div id="<%=p%>_feedback_content_highlighter" data-show-for="desktop">                        <a id="<%=p%>_feedback_content_highlighter_close">                            <span class="<%=p%>_icon <%=p%>_icon-x <%=p%>_feedback_selection_ignore"></span>                        </a>                    </div>                                    </div>',
            ].join("");
          function n() {
            var e,
              i = { showMinimizedMessageTimer: function () {} },
              o = hj.isPreview ? 0 : 200,
              n = hj.hq(
                "#" +
                  hj.widget.widgetAttributePrefix +
                  "_feedback_minimized_message"
              ),
              a = hj.hq(
                "#" + hj.widget.widgetAttributePrefix + "_action_submit"
              ),
              s = hj.hq("#" + hj.widget.widgetAttributePrefix + "_action_skip"),
              d = hj.hq("#" + hj.widget.widgetAttributePrefix + "_feedback");
            (i.resetDataValues = hj.tryCatch(function () {
              return {
                comment: null,
                email: null,
                emotion: null,
                page_content: null,
                selectors: hj.widget.feedbackData.auto_screenshot
                  ? ["html"]
                  : null,
                viewport: [],
              };
            }, "feedback")),
              (i.goToFinalState = hj.tryCatch(function () {
                t.granted ? i.endIncomingFeedback(!0) : i.goToState("consent");
              }, "feedback")),
              (i.goToState = hj.tryCatch(function (e, n) {
                n = n || 0;
                var r = o;
                switch (
                  ("initialized" === e && ((r = 0), (e = "minimized")),
                  (i.currentState = e),
                  0 === n
                    ? d.attr("data-state", e)
                    : setTimeout(function () {
                        d.attr("data-state", e);
                      }, n),
                  e)
                ) {
                  case "minimized":
                    hj
                      .hq(
                        "#" + hj.widget.widgetAttributePrefix + "_feedback_open"
                      )
                      .removeClass("fade"),
                      hj.widget.zIndexPositionReset(),
                      hj.widget.exitFullScreen(),
                      i.resetScreenshotState(r),
                      setTimeout(function () {
                        i.resetWidget();
                      }, n);
                    break;
                  case "emotion":
                    hj
                      .hq(
                        "#" + hj.widget.widgetAttributePrefix + "_feedback_open"
                      )
                      .addClass("fade"),
                      hj.widget.zIndexPositionTop(),
                      i.animateFaces(),
                      (t.request = hj.widget.feedbackData.ask_for_consent),
                      hj.isPreview
                        ? (t.granted = !1)
                        : hj.request.getConsentGranted(function (e) {
                            t.granted = e;
                          }),
                      i.setViewportContent();
                    break;
                  case "comment":
                    (hj.widget.isPhoneOrTablet() ||
                      "phone" === hj.widget.feedbackData.previewDevice) &&
                      hj.widget.enterFullScreen(),
                      hj
                        .hq(
                          "#" +
                            hj.widget.widgetAttributePrefix +
                            "_feedback_open"
                        )
                        .addClass("fade"),
                      hj.isPreview ||
                        "desktop" !== hj.utils.deviceType() ||
                        hj
                          .hq(
                            "#" +
                              hj.widget.widgetAttributePrefix +
                              "_emotion_comment"
                          )
                          .focus();
                    break;
                  case "email":
                    hj
                      .hq(
                        "#" + hj.widget.widgetAttributePrefix + "_feedback_open"
                      )
                      .addClass("fade"),
                      i.resetScreenshotState(r),
                      a.addClass(
                        hj.widget.widgetAttributePrefix + "_btn_disabled"
                      ),
                      hj.isPreview ||
                        hj
                          .hq("#" + hj.widget.widgetAttributePrefix + "_email")
                          .focus();
                    break;
                  case "consent":
                    hj.hq(
                      "#" + hj.widget.widgetAttributePrefix + "_feedback_open"
                    ).addClass("fade");
                }
              }, "feedback")),
              (i.submitState = hj.tryCatch(function (e, n) {
                switch ((e = e || i.currentState)) {
                  case "emotion":
                    (i.data.emotion = n),
                      (i.canSendResponse = !0),
                      i.setViewportContent(function () {
                        i.goToState("comment");
                      });
                    break;
                  case "comment":
                    (i.data.comment = hj
                      .hq(
                        "#" +
                          hj.widget.widgetAttributePrefix +
                          "_emotion_comment"
                      )
                      .val()),
                      "" === i.data.comment && (i.data.comment = null),
                      i.setViewportContent(function () {
                        !1 === hj.widget.feedbackData.content.email
                          ? t.request
                            ? (i.canSendResponse &&
                                (i.sendFeedbackResponse(),
                                (i.canSendResponse = !1)),
                              i.goToFinalState())
                            : i.endIncomingFeedback(!0)
                          : i.goToState("email");
                      });
                    break;
                  case "email":
                    i.validateCurrentState() &&
                      ((i.data.email = hj.hq('[data-bind="email"]').val()),
                      t.request
                        ? (i.canSendResponse &&
                            (i.sendFeedbackResponse(),
                            (i.canSendResponse = !1)),
                          i.goToFinalState())
                        : i.endIncomingFeedback(!0));
                    break;
                  case "consent":
                    i.goToState("minimized", o);
                }
              }, "feedback")),
              (i.skipCurrentState = hj.tryCatch(function () {
                "email" === i.currentState &&
                  (t.request
                    ? (i.canSendResponse &&
                        (i.sendFeedbackResponse(), (i.canSendResponse = !1)),
                      i.goToFinalState())
                    : ((i.data.email = null), i.endIncomingFeedback(!0)));
              }, "feedback")),
              (i.validateCurrentState = hj.tryCatch(function () {
                var e = !1,
                  t = hj.hq('[data-bind="comment"]').val(),
                  o = hj.hq('[data-bind="email"]').val();
                switch (i.currentState) {
                  case "comment":
                    t && (e = !0);
                    break;
                  case "email":
                    o && hj.utils.validateEmail(o) && (e = !0);
                }
                return e;
              }, "feedback")),
              (i.startIncomingFeedback = hj.tryCatch(function () {
                var e = hj.widget.feedbackData.position,
                  t = hj.cookie.get("_hjShownFeedbackMessage"),
                  o = hj.isPreview ? 0 : 2e3;
                i.goToState("initialized"),
                  ("bottom_left" !== e && "bottom_right" !== e) ||
                    (t && !hj.isPreview) ||
                    (n.attr("data-message", "initial"),
                    (i.showMinimizedMessageTimer = setTimeout(function () {
                      i.setMinimizedMessageVisibility(!0),
                        hj.isPreview ||
                          hj.cookie.set("_hjShownFeedbackMessage", !0, 1);
                    }, o)));
              }, "feedback")),
              (i.endIncomingFeedback = hj.tryCatch(function (e) {
                i.canSendResponse && i.sendFeedbackResponse(),
                  i.goToState("minimized", o),
                  e && i.showThankYouMessage();
              }, "feedback")),
              (i.sendFeedbackResponse = hj.tryCatch(function () {
                var e;
                (e = {
                  response: {
                    emotion: parseInt(i.data.emotion, 10),
                    message: i.data.comment,
                    email: i.data.email,
                  },
                  window_width: i.data.window_width,
                  window_height: i.data.window_height,
                }),
                  null !== i.data.selectors &&
                    ((e.page_content = i.data.page_content),
                    (e.viewport = i.data.viewport),
                    (e.selectors = i.data.selectors)),
                  hj.isPreview ||
                    hj.request.saveFeedbackResponse(e, function (e) {
                      (i.feedbackResponseId = e.feedback_response_id),
                        i.awaitResponseId && i.awaitResponseId();
                    });
              }, "feedback")),
              (i.setViewportContent = hj.tryCatch(function (e) {
                var t = hj
                    .hq("body")
                    .hasClass(
                      hj.widget.widgetAttributePrefix + "_position_fixed"
                    ),
                  o = hj.ui.getScrollPosition(),
                  n = hj.ui.getDocumentSize(),
                  a = o.top,
                  r = o.left,
                  s = a + n.height,
                  d = r + n.width;
                (i.data.window_width && i.data.window_height) ||
                  ((i.data.window_width = n.width),
                  (i.data.window_height = n.height)),
                  t ||
                  (i.data.viewport[0] === a &&
                    i.data.viewport[1] === r &&
                    i.data.viewport[2] === s &&
                    i.data.viewport[3] === d)
                    ? e && e()
                    : hj.html.getPageContent(
                        function (t) {
                          (i.data.viewport = [a, r, s, d]),
                            (i.data.window_width = n.width),
                            (i.data.window_height = n.height),
                            (i.data.page_content = t),
                            e && e(t);
                        },
                        ["#_hj_feedback_container"]
                      );
              }, "feedback")),
              (i.setScreenshotState = hj.tryCatch(function (e) {
                var t = hj.hq("body"),
                  o = hj.hq(
                    "#" +
                      hj.widget.widgetAttributePrefix +
                      "_toolset_action_select"
                  );
                if (!hj.isPreview)
                  switch ((d.attr("data-screenshot", e), e)) {
                    case "default":
                      (i.data.selectors = i.resetDataValues().selectors),
                        d.removeAttr("data-screenshot"),
                        o.removeClass(
                          hj.widget.widgetAttributePrefix +
                            "_toolset_action_active"
                        ),
                        hj.widget.isPhoneOrTablet() &&
                          t.addClass(
                            hj.widget.widgetAttributePrefix + "_position_fixed"
                          ),
                        i.cancelElementHighlighting(),
                        hj.ui.enableScrolling();
                      break;
                    case "element":
                      i.resetHighlight(),
                        i.enableElementHighlighting(),
                        hj.ui.enableScrolling(),
                        t.removeClass(
                          hj.widget.widgetAttributePrefix + "_position_fixed"
                        );
                      break;
                    case "elementSelected":
                      hj.widget.isPhoneOrTablet() &&
                        i.setViewportContent(function () {
                          t.addClass(
                            hj.widget.widgetAttributePrefix + "_position_fixed"
                          );
                        }),
                        hj.isPreview ||
                          "desktop" !== hj.utils.deviceType() ||
                          hj
                            .hq(
                              "#" +
                                hj.widget.widgetAttributePrefix +
                                "_emotion_comment"
                            )
                            .focus(),
                        i.cancelElementHighlighting(),
                        o.addClass(
                          hj.widget.widgetAttributePrefix +
                            "_toolset_action_active"
                        );
                  }
              }, "feedback")),
              (i.enableElementHighlighting = hj.tryCatch(function () {
                var e = { x: 0, y: 0 };
                function t(e) {
                  var t = hj.hq(e)[0];
                  o(e) && i.highlightElement(t);
                }
                function o(e) {
                  return !hj
                    .hq(e)
                    .hasClass(
                      hj.widget.widgetAttributePrefix +
                        "_feedback_selection_ignore"
                    );
                }
                hj.hq("html").attr("data-hotjar-cursor-pointer", "true"),
                  hj.hq("body").on(
                    "mouseover.feedback",
                    hj.tryCatch(function (i) {
                      i.stopPropagation(),
                        t(i.target),
                        "desktop" === hj.utils.deviceType() &&
                          (e = { x: i.clientX, y: i.clientY });
                    }, "feedback")
                  ),
                  hj.hq(document).on(
                    "scroll.feedback resize.feedback",
                    hj.tryCatch(function () {
                      t(document.elementFromPoint(e.x, e.y));
                    }, "feedback")
                  ),
                  hj.hq("body").on(
                    "mousedown.feedback",
                    hj.tryCatch(function (e) {
                      var n, a;
                      e.stopPropagation(),
                        e.preventDefault(),
                        o(e.target) &&
                          (t(e.target),
                          (n = e.target),
                          (a = hj.hq(n)),
                          (i.data.selectors = [hj.selector().get(a)]),
                          i.setScreenshotState("elementSelected"),
                          hj.ui.disableScrolling(function () {
                            i.highlightElement(a[0]);
                          }));
                    }, "feedback"),
                    void 0,
                    !0
                  );
              }, "feedback")),
              (i.cancelElementHighlighting = hj.tryCatch(function () {
                hj.hq("body").off("mouseover.feedback"),
                  hj.hq("body").off("mousedown.feedback", void 0, void 0, !0),
                  hj.hq(document).off("scroll.feedback resize.feedback"),
                  hj.hq("html").removeAttr("data-hotjar-cursor-pointer");
              }, "feedback")),
              (i.resetHighlight = hj.tryCatch(function () {
                var e = {
                    top: document.getElementById(
                      hj.widget.widgetAttributePrefix +
                        "_feedback_content_dimmer_top"
                    ),
                    right: document.getElementById(
                      hj.widget.widgetAttributePrefix +
                        "_feedback_content_dimmer_right"
                    ),
                    bottom: document.getElementById(
                      hj.widget.widgetAttributePrefix +
                        "_feedback_content_dimmer_bottom"
                    ),
                    left: document.getElementById(
                      hj.widget.widgetAttributePrefix +
                        "_feedback_content_dimmer_left"
                    ),
                  },
                  t = document.getElementById(
                    hj.widget.widgetAttributePrefix +
                      "_feedback_content_highlighter"
                  );
                hj.hq(e.top).removeAttr("style"),
                  hj.hq(e.right).removeAttr("style"),
                  hj.hq(e.bottom).removeAttr("style"),
                  hj.hq(e.left).removeAttr("style"),
                  hj.hq(t).removeAttr("style");
              })),
              (i.highlightElement = hj.tryCatch(function (e) {
                var t = e.getBoundingClientRect(),
                  i = {
                    top: t.top,
                    left: t.left,
                    width: t.width,
                    height: t.height,
                  },
                  o = {
                    top: document.getElementById(
                      hj.widget.widgetAttributePrefix +
                        "_feedback_content_dimmer_top"
                    ),
                    right: document.getElementById(
                      hj.widget.widgetAttributePrefix +
                        "_feedback_content_dimmer_right"
                    ),
                    bottom: document.getElementById(
                      hj.widget.widgetAttributePrefix +
                        "_feedback_content_dimmer_bottom"
                    ),
                    left: document.getElementById(
                      hj.widget.widgetAttributePrefix +
                        "_feedback_content_dimmer_left"
                    ),
                  },
                  n = document.getElementById(
                    hj.widget.widgetAttributePrefix +
                      "_feedback_content_highlighter"
                  ),
                  a = { x: 8, y: 8 },
                  r = {
                    top: i.top - a.y,
                    left: i.left - a.x,
                    height: i.height + 2 * a.y,
                    width: i.width + 2 * a.x,
                  };
                i.top < 0 &&
                  ((r.height = i.height + i.top + a.y),
                  (a.y = 0),
                  (i.height = i.height + i.top),
                  (i.top = 1),
                  (r.top = 1)),
                  (o.top.style.top = "0"),
                  (o.top.style.right = "0"),
                  (o.top.style.left = "0"),
                  (o.top.style.height = Math.max(0, r.top) + "px"),
                  (o.right.style.top = r.top + "px"),
                  (o.right.style.right = "0"),
                  (o.right.style.left = r.left + r.width + "px"),
                  (o.right.style.bottom = "0"),
                  (o.bottom.style.top = r.top + r.height + "px"),
                  (o.bottom.style.width = Math.max(0, r.width) + "px"),
                  (o.bottom.style.left = r.left + "px"),
                  (o.bottom.style.bottom = "0"),
                  (o.left.style.top = r.top + "px"),
                  (o.left.style.width = Math.max(0, r.left) + "px"),
                  (o.left.style.left = "0"),
                  (o.left.style.bottom = "0"),
                  i.height < 0
                    ? (n.style.top = "-400px")
                    : ((n.style.top = i.top - 2 - a.y + "px"),
                      (n.style.left = i.left - 2 - a.y + "px"),
                      (n.style.width = i.width - 4 + 2 * a.x + "px"),
                      (n.style.height = i.height - 4 + 2 * a.y + "px"));
              }, "feedback")),
              (i.showThankYouMessage = hj.tryCatch(function () {
                var e = hj.isPreview ? 0 : 500;
                hj.widget.feedbackData.content.thankyou &&
                  (n.attr("data-message", "thankyou"),
                  i.setMinimizedMessageVisibility(!0),
                  setTimeout(function () {
                    i.wink();
                  }, e),
                  hj.isPreview ||
                    setTimeout(function () {
                      i.setMinimizedMessageVisibility(!1);
                    }, 5e3));
              }, "feedback")),
              (i.setMinimizedMessageVisibility = hj.tryCatch(function (e) {
                e
                  ? d.attr("data-show-message", "true")
                  : (clearTimeout(i.showMinimizedMessageTimer),
                    d.removeAttr("data-show-message"));
              }, "feedback")),
              (i.resetWidget = hj.tryCatch(function () {
                (i.canSendResponse = !1),
                  (i.currentState = null),
                  (i.data = i.resetDataValues()),
                  hj.widget.enableSubmit(),
                  hj.widget.ctrl
                    .find("#" + hj.widget.widgetAttributePrefix + "_state-1")
                    .removeAttr("data-emotion-chosen"),
                  hj.widget.ctrl
                    .find(
                      "#" +
                        hj.widget.widgetAttributePrefix +
                        "_toolset_action_select"
                    )
                    .removeClass(
                      hj.widget.widgetAttributePrefix + "_toolset_action_active"
                    ),
                  hj.widget.ctrl
                    .find("[data-emotion-option]")
                    .removeClass("fade")
                    .removeClass("fadeTransition")
                    .removeAttr("data-emotion-active"),
                  hj.widget.ctrl
                    .find(
                      "." +
                        hj.widget.widgetAttributePrefix +
                        "_icon_emotion_star"
                    )
                    .attr("data-score-state", "off"),
                  a.addClass(hj.widget.widgetAttributePrefix + "_btn_disabled"),
                  hj.widget.ctrl.find('[data-bind="comment"]').val(""),
                  hj.widget.ctrl.find('[data-bind="email"]').val(""),
                  hj.hq("body *").off("mouseover.feedback mousedown.feedback"),
                  hj.hq(document).off("scroll.feedback resize.feedback");
              }, "feedback")),
              (i.resetScreenshotState = hj.tryCatch(function (e) {
                d.attr("data-screenshot", ""),
                  e
                    ? setTimeout(function () {
                        d.removeAttr("data-screenshot");
                      }, e)
                    : d.removeAttr("data-screenshot"),
                  hj.hq("html").removeAttr("data-hotjar-cursor-pointer"),
                  hj.ui.enableScrolling();
              }, "feedback")),
              (i.selectStarRating = hj.tryCatch(function (e) {
                var t;
                if (!isNaN(e))
                  for (var i = -1; i < 4; i++)
                    (t = i + 1 <= parseInt(e) ? "on" : "off"),
                      hj
                        .hq(
                          "." +
                            hj.widget.widgetAttributePrefix +
                            '_icon_emotion_star[data-emotion-score="' +
                            (i + 1) +
                            '"]'
                        )
                        .attr("data-score-state", t);
              }, "feedback")),
              (i.animateFaces = hj.tryCatch(function () {
                var e = hj.hq("[data-emotion-option]");
                e.addClass("fadeTransition"),
                  setTimeout(function () {
                    e.addClass("fade");
                  }, o),
                  setTimeout(function () {
                    e.removeClass("fadeTransition");
                  }, 4 * o);
              }, "feedback")),
              (i.wink = hj.tryCatch(function () {
                var e = hj.hq(
                  "." + hj.widget.widgetAttributePrefix + "_hotjar_buddy"
                );
                e.attr("data-emotion-score", "wink"),
                  setTimeout(function () {
                    e.attr("data-emotion-score", "3");
                  }, 800);
              }, "feedback")),
              hj.widget.ctrl
                .find(
                  "." +
                    hj.widget.widgetAttributePrefix +
                    "_feedback_minimized_message_close"
                )
                .on(
                  "click",
                  hj.tryCatch(function (e) {
                    e.stopPropagation(), i.setMinimizedMessageVisibility(!1);
                  }, "feedback")
                ),
              hj.widget.ctrl
                .find(
                  "." +
                    hj.widget.widgetAttributePrefix +
                    "_hotjar_buddy, ." +
                    hj.widget.widgetAttributePrefix +
                    "_feedback_minimized_message, ." +
                    hj.widget.widgetAttributePrefix +
                    "_feedback_minimized_label"
                )
                .on(
                  "click",
                  hj.tryCatch(function () {
                    i.goToState("emotion"), i.setMinimizedMessageVisibility(!1);
                  }, "feedback")
                ),
              hj.widget.ctrl
                .find(
                  "#" +
                    hj.widget.widgetAttributePrefix +
                    "_feedback_open_close, #" +
                    hj.widget.widgetAttributePrefix +
                    "_feedback_open_close_phone"
                )
                .on(
                  "click",
                  hj.tryCatch(function () {
                    i.endIncomingFeedback();
                  }, "feedback")
                ),
              hj.widget.ctrl
                .find(
                  "." +
                    hj.widget.widgetAttributePrefix +
                    "_emotion_type_star ." +
                    hj.widget.widgetAttributePrefix +
                    "_emotion_option"
                )
                .on(
                  "mouseover",
                  hj.tryCatch(function (e) {
                    var t = hj
                      .hq(e.target)
                      .find("[data-emotion-score]")
                      .attr("data-emotion-score");
                    i.selectStarRating(t);
                  }, "feedback")
                ),
              hj.widget.ctrl
                .find(
                  "._hj-f5b2a1eb-9b07_emotion_content._hj-f5b2a1eb-9b07_emotion_type_star"
                )
                .on(
                  "mouseleave",
                  hj.tryCatch(function () {
                    var e = hj
                      .hq("#" + hj.widget.widgetAttributePrefix + "_state-1")
                      .attr("data-emotion-chosen");
                    i.selectStarRating(e);
                  }, "feedback")
                ),
              hj.widget.ctrl.find('[data-bind="emotion"]').on(
                "click",
                hj.tryCatch(function () {
                  var e = hj.hq(this).attr("data-emotion-option");
                  hj
                    .hq("#" + hj.widget.widgetAttributePrefix + "_state-1")
                    .attr("data-emotion-chosen", e),
                    hj
                      .hq("[data-emotion-active]")
                      .removeAttr("data-emotion-active"),
                    hj
                      .hq(
                        "#" +
                          hj.widget.widgetAttributePrefix +
                          '_state-1 [data-emotion-option="' +
                          e +
                          '"]'
                      )
                      .attr("data-emotion-active", "true"),
                    i.selectStarRating(e),
                    i.submitState("emotion", e);
                }, "feedback")
              ),
              hj.widget.ctrl.find("[data-consent]").on(
                "click",
                hj.tryCatch(function () {
                  var e = "true" === hj.hq(this).attr("data-consent");
                  !hj.isPreview &&
                    e &&
                    (i.feedbackResponseId
                      ? hj.request.grantConsent({
                          response_type: "feedback_response",
                          response_id: i.feedbackResponseId,
                          message: hj.widget._("consent"),
                        })
                      : (i.awaitResponseId = function () {
                          hj.request.grantConsent({
                            response_type: "feedback_response",
                            response_id: i.feedbackResponseId,
                            message: hj.widget._("consent"),
                          });
                        })),
                    i.submitState("consent", e);
                }, "feedback")
              ),
              a.on(
                "click",
                hj.tryCatch(function () {
                  hj
                    .hq(this)
                    .hasClass(
                      hj.widget.widgetAttributePrefix + "_btn_disabled"
                    ) || i.submitState();
                }, "feedback")
              ),
              s.on(
                "click",
                hj.tryCatch(function () {
                  i.skipCurrentState();
                }, "feedback")
              ),
              hj.widget.ctrl.find('[data-bind="email"]').on(
                "keyup change",
                hj.tryCatch(function (e) {
                  i.validateCurrentState()
                    ? hj.widget.enableSubmit()
                    : hj.widget.disableSubmit(),
                    13 === e.keyCode && i.submitState();
                }, "feedback")
              ),
              hj.widget.ctrl.find('[data-bind="comment"]').on(
                "keyup change",
                hj.tryCatch(function () {
                  i.validateCurrentState()
                    ? hj.widget.enableSubmit()
                    : hj.widget.disableSubmit();
                }, "feedback")
              ),
              hj.widget.ctrl
                .find(
                  "#" +
                    hj.widget.widgetAttributePrefix +
                    "_feedback_content_highlighter, #" +
                    hj.widget.widgetAttributePrefix +
                    "_toolset_action_select"
                )
                .on(
                  "click",
                  hj.tryCatch(function () {
                    i.setScreenshotState("element");
                  }, "feedback")
                ),
              hj.widget.ctrl
                .find(
                  "#" +
                    hj.widget.widgetAttributePrefix +
                    "_feedback_top_message_select_close span, #" +
                    hj.widget.widgetAttributePrefix +
                    "_feedback_content_highlighter_close"
                )
                .on(
                  "click",
                  hj.tryCatch(function (e) {
                    i.setScreenshotState("default"), e.stopPropagation();
                  }, "feedback")
                ),
              (e = hj.widget.feedbackData.activeStepInPreview),
              hj.isPreview &&
                (i.resetWidget(),
                hj.widget.ctrl
                  .find("." + hj.widget.widgetAttributePrefix + "_transition")
                  .addClass(
                    hj.widget.widgetAttributePrefix + "_transition_duration_0"
                  ),
                "initial" !== e && e
                  ? "thankYou" === e
                    ? i.endIncomingFeedback(!0)
                    : "email" === e &&
                      !1 === hj.widget.feedbackData.content.email
                    ? i.goToState("emotion")
                    : "consent" === e
                    ? i.goToState("consent")
                    : i.goToState(e)
                  : i.startIncomingFeedback()),
              hj.hq(window).on(
                "resize",
                hj.tryCatch(function () {
                  r();
                }, "feedback")
              ),
              hj.tryCatch(r, "feedback")(),
              hj.isPreview || i.startIncomingFeedback();
          }
          function a() {
            var e =
              hj.ui.getWindowSize().height > 100
                ? Math.round(hj.ui.getWindowSize().height / 2)
                : 300;
            hj.log.debug("Rendering feedback widget.", "feedback"),
              hj.widget.setLanguage(hj.widget.feedbackData.language),
              null == hj.widget.feedbackData.auto_screenshot &&
                (hj.widget.feedbackData.auto_screenshot = !0);
            var t = hj.rendering.renderTemplate(o, {
              apiUrlBase: new hj.rendering.TrustedString(hj.apiUrlBase),
              hjid: _hjSettings.hjid,
              cta: new hj.rendering.TrustedString(hj.widget.ctaLinks.feedback),
              p: hj.widget.widgetAttributePrefix,
              preview: hj.isPreview || !1,
              features: {
                selectElement: !(
                  hj.utils.isSafari() && hj.widget.isPhoneOrTablet()
                ),
              },
              feedback: {
                id: hj.widget.feedbackData.id,
                content: hj.widget.feedbackData.content,
                effectiveShowBranding:
                  hj.widget.feedbackData.effective_show_branding,
                language: hj.widget.feedbackData.language,
                position: hj.widget.feedbackData.position,
                showLegal: hj.widget.feedbackData.show_legal,
              },
              widgetStyle: {
                accentColor: hj.widget.feedbackData.background,
                accentTextColor:
                  "light" === hj.widget.feedbackData.skin
                    ? "#ffffff"
                    : "#333333",
                backgroundColor: "#ffffff",
                darkGrey: "#333333",
                disabledColor: "#cccccc",
                selectionColor: "#ffd902",
                selectionTextColor: "#3c3c3c",
                emotion: hj.widget.feedbackData.emotion_style || "default",
                middlePositionPixels: e,
              },
            });
            t
              ? ((hj.widget.ctrl = hj.rendering.addToDom(
                  "_hj_feedback_container",
                  t
                )),
                n())
              : hj.log.debug(
                  "Feedback widget #" +
                    hj.widget.feedbackData.id +
                    " could not be rendered.",
                  "feedback"
                );
          }
          function r() {
            var e = hj.widget.feedbackData.previewDevice,
              t = e || hj.utils.deviceType(),
              i = "desktop" === t ? "desktop" : "touch";
            hj.widget.ctrl.attr("data-device", t),
              hj.widget.ctrl.attr("data-viewmode", i);
          }
          return (
            (e.run = hj.tryCatch(function (t) {
              hj.hq.each(hj.settings.feedback_widgets || [], function (i, o) {
                hj.targeting.matchRules(
                  o.targeting,
                  t,
                  hj.tryCatch(function () {
                    hj.log.debug(
                      "Feedback widget #" + o.id + " has matched.",
                      "feedback"
                    ),
                      !hj.widget.data ||
                      (hj.widget.data.id === o.id &&
                        "incoming" === hj.widget.data.type)
                        ? ((o.created_epoch_time -= 31536e4),
                          hj.widget.addMatchingWidget(
                            "incoming",
                            o.id,
                            o.created_epoch_time,
                            function () {
                              (hj.widget.feedbackData = o),
                                hj.rendering.callAccordingToCondition(
                                  hj.widget.feedbackData,
                                  "feedback",
                                  hj.tryCatch(a, "feedback")
                                );
                            },
                            e.remove
                          ))
                        : hj.log.debug(
                            "Another feedback widget is already present.",
                            "feedback"
                          );
                  }, "feedback.run.matchRules-callback")
                );
              });
            }, "feedback")),
            (e.remove = hj.tryCatch(function (e) {
              hj.widget.feedbackData
                ? (hj.hq("#" + hj.widget.widgetAttributePrefix + "_feedback")
                    .length > 0 &&
                    hj
                      .hq("#" + hj.widget.widgetAttributePrefix + "_feedback")
                      .parent()
                      .remove(),
                  delete hj.widget.feedbackData,
                  hj.hq(window).off("resize"),
                  setTimeout(function () {
                    e();
                  }, 1))
                : e();
            })),
            hj.isPreview &&
              (window._hjFeedbackReload = hj.tryCatch(function (e) {
                (hj.widget.feedbackData = e),
                  (hj.settings.legal_name = e.legal_name),
                  (hj.settings.privacy_policy_url = e.privacy_policy_url),
                  hj.tryCatch(a, "feedback")();
              }, "feedback")),
            e
          );
        })(),
        !0
      );
    }, "feedback")();
  },
  function (e, t, i) {
    e.exports = i.p + "emoji_0.152a14.png";
  },
  function (e, t, i) {
    e.exports = i.p + "emoji_1.f67f38.png";
  },
  function (e, t, i) {
    e.exports = i.p + "emoji_2.8d1753.png";
  },
  function (e, t, i) {
    e.exports = i.p + "emoji_3.5b2976.png";
  },
  function (e, t, i) {
    e.exports = i.p + "emoji_4.8f3c95.png";
  },
  function (e, t, i) {
    e.exports = i.p + "star_on.025592.png";
  },
  function (e, t, i) {
    e.exports = i.p + "star_off.bcf9ca.png";
  },
  function (e, t) {
    hj.tryCatch(function () {
      hj.loader.registerModule(
        "Polls",
        (function () {
          var e = {},
            t = [],
            i = [],
            o = 0,
            n = { granted: null, request: !1 },
            a = [
              '<div id="_hj_poll_container">',
              hj.widget.commonCSS,
              '<style type="text/css">                    /* Multiple question css adaptations */                                        /*comment fields*/                    .<%=p%>_widget .<%=p%>_button_radio_checkbox .<%=p%>_comment_box {                        display: none; margin: 0 20px 0 50px;                    }                    .<%=p%>_widget .<%=p%>_button_radio_checkbox .<%=p%>_comment_box > textarea {                        font-size: 13px !important;                        height: 50px !important;                        max-height: 50px !important;                        min-height: auto !important;                        margin-bottom: 8px !important;                        border: 0 !important;                    }                                        .<%=p%>_widget                         .<%=p%>_button_radio_checkbox.<%=p%>_button_radio_checkbox_active.<%=p%>_with_comment                             span.<%=p%>_widget_icon {                        top: 14px !important; margin-top: 0 !important;                    }                    .<%=p%>_widget .<%=p%>_widget_content                        .<%=p%>_button_radio_checkbox span.<%=p%>_radio_checkbox_text {                        color: <%= widgetStyle.fontColor %> !important;                    }                    .<%=p%>_widget .<%=p%>_widget_content                        .<%=p%>_button_radio_checkbox span.<%=p%>_radio_checkbox_text:hover {                        color: <%= widgetStyle.fontColorNegative %> !important;                    }                    .<%=p%>_widget                         .<%=p%>_button_radio_checkbox.<%=p%>_button_radio_checkbox_active.<%=p%>_with_comment                             span.<%=p%>_radio_checkbox_text {                        padding-bottom: 10px !important;                    }                    .<%=p%>_widget                         .<%=p%>_button_radio_checkbox.<%=p%>_button_radio_checkbox_active.<%=p%>_with_comment                             .<%=p%>_comment_box {                        display: block;                    }                                        /* Scale questions */                    .<%=p%>_widget .<%=p%>_scale_scores > ul {                        margin: 4px 0 0 0 !important; height: 28px;                    }                    .<%=p%>_widget .<%=p%>_scale_scores > ul > li.<%=p%>_button_score {                        list-style-type: none !important;                        list-style-image: none !important;                        float: left !important; width: 22px !important;                         padding: 4px 0 5px 0 !important;                        margin: 0 3px 0 0 !important;                        border-radius: 2px;                        text-align: center !important;                        opacity: 0.75 !important;                        clear: none !important;                        cursor:pointer;                        text-indent: 0;                    }                                        .<%=p%>_widget .<%=p%>_scale_scores.<%=p%>_rating-scale-5 > ul {                        height: 38px;                    }                    .<%=p%>_widget .<%=p%>_scale_scores.<%=p%>_rating-scale-5 > ul > li.<%=p%>_button_score {                        width: 48px !important;                        font-size: 15px !important;                        padding: 8px 0 9px 0 !important;                        margin: 0 9px 0 0 !important;                    }                                        .<%=p%>_widget .<%=p%>_scale_scores.<%=p%>_rating-scale-7 > ul {                        height: 36px;                    }                    .<%=p%>_widget .<%=p%>_scale_scores.<%=p%>_rating-scale-7 > ul > li.<%=p%>_button_score {                        width: 35px !important;                        font-size: 15px !important;                        padding: 6px 0 7px 0 !important;                        margin: 0 5px 0 0 !important;                    }                                        .<%=p%>_widget .<%=p%>_scale_scores > ul > li.<%=p%>_button_score:last-child {                        margin-right: 0 !important;                    }                    .<%=p%>_widget .<%=p%>_scale_scores.<%=p%>_net-promoter-score > ul > li.<%=p%>:last-child {                        width: 24px !important; padding-right: 1px !important;                    }                    .<%=p%>_widget .<%=p%>_scale_scores .<%=p%>_scale_labels {                        padding: 5px 0 12px 0; font-size: 12px;                    }                    .<%=p%>_widget .<%=p%>_scale_scores .<%=p%>_scale_labels .<%=p%>_pull_left,                    .<%=p%>_widget .<%=p%>_scale_scores .<%=p%>_scale_labels .<%=p%>_pull_right {                        max-width: 45%; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;                        color: <%= widgetStyle.footerTextColor %> !important;                    }                                        .<%=p%>_widget .<%=p%>_scale_scores > ul > li.<%=p%>_button_score {                        border-bottom: 1px solid <%= widgetStyle.primaryColor %> !important;                        border-top: 1px solid <%= widgetStyle.alternateColor %> !important;                        background: <%= widgetStyle.secondaryColor %> !important;                        color: <%= widgetStyle.fontColor %> !important;                    }                    .<%=p%>_widget .<%=p%>_scale_scores > ul > li.<%=p%>_button_score:hover {                        background: <%= widgetStyle.alternateColor %> !important;                        color: <%= widgetStyle.fontColorNegative %>;                        opacity: 1 !important;                        color: <%= widgetStyle.fontColorNegative %> !important;                    }                    .<%=p%>_widget .<%=p%>_scale_scores > ul                             > li.<%=p%>_button_score.<%=p%>_button_score_active,                     .<%=p%>_widget .<%=p%>_scale_scores                         > ul                             > li.<%=p%>_button_score.<%=p%>_button_score_active:hover {                        background: <%= widgetStyle.alternateColor %> !important;                         color: white !important;                         cursor: default;                        opacity: 1 !important;                    }                                        /*right-to-left css*/                    .<%=p%>_widget.<%=p%>_rtl .<%=p%>_button_radio_checkbox .<%=p%>_comment_box {                        margin: 0 50px 0 20px !important;                    }                    .<%=p%>_widget.<%=p%>_rtl                     .<%=p%>_button_radio_checkbox.<%=p%>_button_radio_checkbox_active.<%=p%>_with_comment span                    .<%=p%>_radio_checkbox_text {                        padding: 14px 50px 10px 20px !important;                    }                                        .<%=p%>_widget.<%=p%>_rtl .<%=p%>_scale_scores > ul > li.<%=p%>_button_score {                        float: right !important;                        margin: 0 0 0 3px !important;                        border-radius: 2px;                        text-align: center !important;                        opacity: 0.75 !important;                        cursor:pointer;                    }                    .<%=p%>_widget.<%=p%>_rtl .<%=p%>_scale_scores > ul > li.<%=p%>_button_score_last {                        margin-left: 0 !important;                    }                    .<%=p%>_widget.<%=p%>_rtl .<%=p%>_scale_scores .<%=p%>_scale_labels                         .<%=p%>_pull_left {                        float: right !important;                    }                    .<%=p%>_widget.<%=p%>_rtl .<%=p%>_scale_scores .<%=p%>_scale_labels                         .<%=p%>_pull_right {                        float: left !important;                    }                </style>',
              '<div id="<%=p%>_poll" class="<%=p%>_widget <%=p%>_<%= hj.widget.activeLanguageDirection %>                         <%=p%>_skin_<%= widgetStyle.skin %> <%=p%>_position_<%= widgetStyle.position %>">                    <a                         class="<%=p%>_widget_open_close <%=p%>_action_toggle_widget"                    ><span class="<%=p%>_widget_icon"></span></a>                    <div class="<%=p%>_widget_hidden_handle <%=p%>_action_toggle_widget"></div>                    <p class="<%=p%>_widget_title <%=p%>_action_open_widget">                        <% for (var q = 0; q < poll.questions.length; q++) { %>                            <span id="<%=p%>_question_text_<%=q%>" class="<%=p%>_question_text <% if (q !== 0) { %>                                <%=p%>_hidden<%                             } %>"><%= poll.questions[q].text %></span>                        <% } %>                    </p>                    <div class="<%=p%>_widget_initiator">                        <button type="button" class="<%=p%>_btn_primary <%=p%>_rounded_corners <%=p%>_transition                             <%=p%>_shadow <%=p%>_action_open_widget"><%=hj.widget._("reply")%></button>                    </div>                    <div class="<%=p%>_widget_state <%=p%>_widget_state_open">                        <% for (var q = 0; q < poll.questions.length; q++) { %>                            <div id="<%=p%>_question_content_<%=q%>" _hj_question_type="<%=poll.questions[q].type%>"                                 class="<%=p%>_question_content <% if (q !== 0) { %><%=p%>_hidden<% } %>">                                <% if (poll.questions[q].type === "single-close-ended") { %>                                    <div class="<%=p%>_widget_content<% if (poll.questions[q].answers.length >= 5) { %>                                        <%=p%>_widget_content_overflow                                    <% } %>">                                        <% for (var i = 0; i < poll.questions[q].answers.length; i++) { %>                                        <div class="<%=p%>_button_radio_checkbox <%=p%>_button_radio_checkbox_full                                             <%=p%>_button_radio<%if (poll.questions[q].answers[i].comments) { %>                                                <%=p%>_with_comment                                            <% } %><%if (i+1 === poll.questions[q].answers.length) { %>                                                <%=p%>_button_radio_checkbox_last                                            <% } %>" data-key="response"                                             data-index="<%= poll.questions[q].answers[i].index %>"                                             data-value="<%=hj.rendering.escapeHtml(poll.questions[q].answers[i].text)%>"                                        >                                            <% if (poll.questions[q].answers.length > 1) { %>                                                <span class="<%=p%>_widget_icon"></span>                                                <span class="<%=p%>_radio_checkbox_text">                                                    <%= poll.questions[q].answers[i].text %>                                                </span>                                                <div class="<%=p%>_comment_box">                                                    <textarea maxlength="255"                                                         class="<%=p%>_input_field <%=p%>_rounded_corners"                                                         name="<%=p%>_question_<%=q%>_answer_<%=i%>_comment"                                                         rows="3"                                                         placeholder="<%=hj.widget._("please_type_here")%>"></textarea>                                                </div>                                            <% } %>                                        </div>                                        <% } %>                                    </div>                                <% } else if (poll.questions[q].type === "multiple-close-ended") { %>                                    <div class="<%=p%>_widget_content<% if (poll.questions[q].answers.length >= 5) { %>                                        <%=p%>_widget_content_overflow<% } %>"                                    >                                        <% for (var i = 0; i < poll.questions[q].answers.length; i++) { %>                                        <div class="<%=p%>_button_radio_checkbox <%=p%>_button_radio_checkbox_full                                             <%=p%>_button_checkbox<%if (poll.questions[q].answers[i].comments) { %>                                                 <%=p%>_with_comment                                            <% } %><%if (i+1 === poll.questions[q].answers.length) { %>                                                 <%=p%>_button_radio_checkbox_last<% } %>"                                             data-key="response" data-index="<%= poll.questions[q].answers[i].index %>"                                            data-value="<%=hj.rendering.escapeHtml(poll.questions[q].answers[i].text)%>"                                        >                                            <% if (poll.questions[q].answers.length > 1) { %>                                                <span class="<%=p%>_widget_icon"></span>                                                <span class="<%=p%>_radio_checkbox_text">                                                    <%= poll.questions[q].answers[i].text %>                                                </span>                                                <div class="<%=p%>_comment_box">                                                    <textarea maxlength="255"                                                         class="<%=p%>_input_field <%=p%>_rounded_corners"                                                         name="<%=p%>_question_<%=q%>_answer_<%=i%>_comment"                                                         rows="3"                                                         placeholder="<%=hj.widget._("please_type_here")%>"></textarea>                                                </div>                                            <% } %>                                        </div>                                        <% } %>                                    </div>                                <% } else if (poll.questions[q].type === "single-open-ended-single-line" || poll.questions[q].type === "email") { %>                                    <div class="<%=p%>_widget_content">                                        <input maxlength="255" class="<%=p%>_input_field <%=p%>_rounded_corners"                                             type="text"                                             name="<%=p%>_question_<%=q%>_answer"                                             placeholder="<%=hj.widget._("please_type_here")%>" />                                    </div>                                <% } else if (poll.questions[q].type === "single-open-ended-multiple-line") { %>                                    <div class="<%=p%>_widget_content">                                        <textarea maxlength="255" class="<%=p%>_input_field <%=p%>_rounded_corners"                                             name="<%=p%>_question_<%=q%>_answer"                                             rows="3"                                             placeholder="<%=hj.widget._("please_type_here")%>"></textarea>                                    </div>                                <% } else if (poll.questions[q].type === "net-promoter-score") { %>                                    <div class="<%=p%>_widget_content <%=p%>_scale_scores <%=p%>_<%=poll.questions[q].type%>">                                        <ul>                                            <% for (var i = 0; i < 11; i++) { %>                                            <li class="<%=p%>_button_score <%if (i === 10) { %>                                                <%=p%>_button_score_last<% } %>"                                             data-key="response" data-value="<%=i%>"><%=i%></li>                                            <% } %>                                        </ul>                                        <div class="<%=p%>_scale_labels">                                            <div class="<%=p%>_pull_left"                                            ><%= poll.questions[q].labels[0].text %></div>                                            <div class="<%=p%>_pull_right"                                            ><%= poll.questions[q].labels[1].text %></div>                                            <div class="<%=p%>_clear_both"></div>                                        </div>                                    </div>                                <% } else if (poll.questions[q].type === "rating-scale-5" || poll.questions[q].type === "rating-scale-7") { %>                                    <div class="<%=p%>_widget_content <%=p%>_scale_scores <%=p%>_<%=poll.questions[q].type%>">                                        <ul>                                            <% for (var i = 1; i < (poll.questions[q].scaleCount +1); i++) { %>                                            <li class="<%=p%>_button_score <%if (i === 10) { %>                                                <%=p%>_button_score_last<% } %>"                                             data-key="response" data-value="<%=i%>"><%=i%></li>                                            <% } %>                                        </ul>                                        <div class="<%=p%>_scale_labels">                                            <div class="<%=p%>_pull_left"                                            ><%= poll.questions[q].labels[0].text %></div>                                            <div class="<%=p%>_pull_right"                                            ><%= poll.questions[q].labels[1].text %></div>                                            <div class="<%=p%>_clear_both"></div>                                        </div>                                    </div>                                <% } %>                            </div>                        <% } %>                        <div class="<%=p%>_widget_footer">                            <% if (poll.effectiveShowBranding) { %>                                <div class="<%=p%>_pull_left">                                    <span class="<%=p%>_widget_icon"></span>                                    Not using <a href="<%=cta%>" target="_blank">Hotjar</a> yet?                                </div>                            <% } %>                            <div class="<%=p%>_pull_right">                                <button type="button" id="<%=p%>_action_submit"                                     class="<%=p%>_btn_primary <%=p%>_btn_disabled <%=p%>_rounded_corners                                         <%=p%>_transition <%=p%>_shadow"><%=hj.widget._("send")%>                                     <span class="<%=p%>_widget_icon"></span>                                </button>                            </div>                            <div class="<%=p%>_clear_both"></div>                        </div>                    </div>                    <div class="<%=p%>_widget_state <%=p%>_widget_state_thankyou">                        <p class="<%=p%>_thankyou_message">                            <%= poll.thankyou %><br />                            <button type="button" class="<%=p%>_btn_primary <%=p%>_rounded_corners <%=p%>_transition                                 <%=p%>_shadow <%=p%>_action_dismiss_widget"><%=hj.widget._("close")%></button>                        </p>                        <%=hj.widget.renderLegal(poll.showLegal)%>                        <div class="<%=p%>_widget_footer">                            <% if (poll.effectiveShowBranding) { %>                                <div class="<%=p%>_pull_left">                                    <span class="<%=p%>_widget_icon"></span>                                    Not using <a href="<%=cta%>" target="_blank">Hotjar</a> yet?                                </div>                            <% } %>                            <div class="<%=p%>_pull_right">                                <button type="button" class="<%=p%>_btn <%=p%>_btn_disabled <%=p%>_rounded_corners                                     <%=p%>_transition <%=p%>_shadow"><%=hj.widget._("sent")%>                                     <span class="<%=p%>_widget_icon"></span>                                </button>                            </div>                            <div class="<%=p%>_clear_both"></div>                        </div>                    </div>                    <div class="<%=p%>_widget_state <%=p%>_widget_state_thankyou_consent">                        <div class="<%=p%>_thankyou_message">                            <p class="<%=p%>_consent_message_title"><%= poll.thankyou %></p>                            <span class="<%=p%>_consent_message_text"><%=hj.widget._("consent")%>&nbsp;                                <a href="<%=hj.widget._("consent_more_information_url")%>"                                   class="<%=p%>_more_info_link"                                   target="_blank">                               <%=hj.widget._("consent_more_information")%>                            </a></span>                            <div class="<%=p%>_consent_actions">                                <button class="<%=p%>_btn_primary <%=p%>_rounded_corners" data-consent="false" type="button">                                    <i class="<%=p%>_icon <%=p%>_icon-x"></i>                                </button>                                <button class="<%=p%>_btn_primary <%=p%>_rounded_corners" data-consent="true" type="button">                                    <i class="<%=p%>_icon <%=p%>_icon-ok"></i>                                </button>                             </div>                        </div>                        <%=hj.widget.renderLegal(poll.showLegal)%>                        <div class="<%=p%>_widget_footer">                            <% if (poll.effectiveShowBranding) { %>                                <div class="<%=p%>_pull_left">                                    <span class="<%=p%>_widget_icon"></span>                                    Not using <a href="<%=cta%>" target="_blank">Hotjar</a> yet?                                </div>                            <% } %>                            <div class="<%=p%>_pull_right">                                <button type="button" class="<%=p%>_btn <%=p%>_btn_disabled <%=p%>_rounded_corners                                     <%=p%>_transition <%=p%>_shadow"><%=hj.widget._("sent")%>                                     <span class="<%=p%>_widget_icon"></span>                                </button>                            </div>                            <div class="<%=p%>_clear_both"></div>                        </div>                    </div>                </div>',
              "</div>",
            ].join("");
          function r() {
            (t = []),
              o++,
              hj.log.debug("Rendering poll widget.", "poll"),
              hj.widget.setLanguage(hj.widget.pollData.language),
              (n.request = hj.widget.pollData.ask_for_consent);
            var e = hj.widget.changeColorLuminance(
                hj.widget.pollData.background,
                -0.1
              ),
              r = hj.widget.changeColorLuminance(
                hj.widget.pollData.background,
                0.1
              ),
              d = hj.widget.changeColorLuminance(
                hj.widget.pollData.background,
                -0.2
              ),
              c = hj.widget.changeColorLuminance(
                hj.widget.pollData.background,
                0.2
              ),
              l = hj.widget.changeColorLuminance(
                hj.widget.pollData.background,
                -0.6
              ),
              p = hj.widget.changeColorLuminance(
                hj.widget.pollData.background,
                0.6
              ),
              h = hj.rendering.renderTemplate(a, {
                apiUrlBase: new hj.rendering.TrustedString(hj.apiUrlBase),
                hjid: hj.settings.site_id,
                preview: hj.isPreview || !1,
                poll: {
                  id: hj.widget.pollData.id,
                  effectiveShowBranding:
                    hj.widget.pollData.effective_show_branding,
                  questions: hj.widget.pollData.content.questions,
                  thankyou: hj.widget.pollData.content.thankyou,
                  showLegal: hj.widget.pollData.show_legal,
                },
                widgetStyle: {
                  position: hj.widget.pollData.position,
                  skin: hj.widget.pollData.skin,
                  primaryColor: hj.widget.pollData.background,
                  secondaryColor: "light" === hj.widget.pollData.skin ? e : r,
                  alternateColor: "light" === hj.widget.pollData.skin ? d : c,
                  footerTextColor: "light" === hj.widget.pollData.skin ? l : p,
                  footerBorderColor:
                    "light" === hj.widget.pollData.skin ? d : e,
                  fontColor:
                    "light" === hj.widget.pollData.skin ? "#111" : "#FFF",
                  fontColorNegative:
                    "light" === hj.widget.pollData.skin ? "#FFF" : "#111",
                },
                p: hj.widget.widgetAttributePrefix,
                cta: new hj.rendering.TrustedString(hj.widget.ctaLinks.polls),
              });
            h
              ? ((hj.widget.ctrl = hj.rendering.addToDom(
                  "_hj_poll_container",
                  h
                )),
                (function () {
                  var e, a;
                  function r() {
                    var e,
                      t,
                      i,
                      o = hj.hq(
                        "." +
                          hj.widget.widgetAttributePrefix +
                          "_button_radio_checkbox_active"
                      ).length,
                      n = !0;
                    if (0 === o) n = !1;
                    else
                      for (e = 0; e < o; e += 1)
                        if (
                          ((i = (t = hj.hq(
                            hj.hq(
                              "." +
                                hj.widget.widgetAttributePrefix +
                                "_button_radio_checkbox_active"
                            )[e]
                          ))
                            .find(
                              "." +
                                hj.widget.widgetAttributePrefix +
                                "_input_field"
                            )
                            .val()),
                          t.hasClass(
                            hj.widget.widgetAttributePrefix + "_with_comment"
                          ) && 0 === i.length)
                        ) {
                          n = !1;
                          break;
                        }
                    return n;
                  }
                  (hj.widget.currentQuestionIndex = 0),
                    (hj.widget.submitResponse = hj.tryCatch(function () {
                      var e,
                        i,
                        o,
                        n,
                        a,
                        r,
                        d,
                        c,
                        l,
                        p = hj.hq(
                          "#" +
                            hj.widget.widgetAttributePrefix +
                            "_action_submit"
                        ),
                        h = { negative: null, neutral: null, positive: null };
                      if (
                        !p.hasClass(
                          hj.widget.widgetAttributePrefix + "_btn_disabled"
                        )
                      ) {
                        switch (
                          (p.addClass(
                            hj.widget.widgetAttributePrefix + "_btn_disabled"
                          ),
                          (i =
                            hj.widget.pollData.content.questions[
                              hj.widget.currentQuestionIndex
                            ]),
                          (o = hj.hq(
                            hj.hq(
                              "#" +
                                hj.widget.widgetAttributePrefix +
                                "_question_content_" +
                                hj.widget.currentQuestionIndex
                            )[0]
                          )),
                          i.type)
                        ) {
                          case "single-close-ended":
                          case "multiple-close-ended":
                            for (
                              r = o.find(
                                "." +
                                  hj.widget.widgetAttributePrefix +
                                  "_button_radio_checkbox_active"
                              ).length,
                                l = 0;
                              l < r;
                              l += 1
                            )
                              (e = (c = hj.hq(
                                o.find(
                                  "." +
                                    hj.widget.widgetAttributePrefix +
                                    "_button_radio_checkbox_active"
                                )[l]
                              )).attr("data-value")),
                                (n = parseInt(c.attr("data-index"), 10)),
                                (d = c.find("textarea").val()),
                                t.push({
                                  question: s(i.text),
                                  answer: s(e),
                                  comment: d || null,
                                });
                            break;
                          case "rating-scale-5":
                          case "rating-scale-7":
                          case "net-promoter-score":
                            if (
                              ((e = (c = o.find(
                                "." +
                                  hj.widget.widgetAttributePrefix +
                                  "_button_score_active"
                              )).attr("data-value")),
                              (a = parseInt(e, 10)),
                              "rating-scale-5" === i.type
                                ? (h = { negative: 2, neutral: 3, positive: 5 })
                                : "rating-scale-7" === i.type
                                ? (h = { negative: 3, neutral: 4, positive: 7 })
                                : "net-promoter-score" === i.type &&
                                  (h = {
                                    negative: 6,
                                    neutral: 8,
                                    positive: 10,
                                  }),
                              a <= h.negative)
                            )
                              n = 0;
                            else if (a <= h.neutral) n = 1;
                            else {
                              if (!(a <= h.positive))
                                throw new Error(
                                  "Got unexpected scale answer: " + e
                                );
                              n = 2;
                            }
                            t.push({
                              question: s(i.text),
                              answer: e,
                              comment: null,
                            });
                            break;
                          case "single-open-ended-multiple-line":
                          case "single-open-ended-single-line":
                          case "email":
                            (n = null),
                              void 0 ===
                                (e = o
                                  .find(
                                    "input[name=_hj-f5b2a1eb-9b07_question_" +
                                      hj.widget.currentQuestionIndex +
                                      "_answer]"
                                  )
                                  .val()) &&
                                (e =
                                  o
                                    .find(
                                      "textarea[name=_hj-f5b2a1eb-9b07_question_" +
                                        hj.widget.currentQuestionIndex +
                                        "_answer]"
                                    )
                                    .val() || ""),
                              t.push({
                                question: s(i.text),
                                answer: e,
                                comment: null,
                              });
                            break;
                          default:
                            throw new Error(
                              "Unhandled question type: " + i.type
                            );
                        }
                        hj.widget.submitResponseData(n);
                      }
                    }, "polls")),
                    (hj.widget.submitResponseData = hj.tryCatch(function (
                      e,
                      n
                    ) {
                      var a;
                      (a =
                        void 0 === i[o]
                          ? {
                              action: "create_poll_response",
                              utk: hj.cookie.get("hubspotutk"),
                              response_content: JSON.stringify({
                                version: 4,
                                answers: t,
                              }),
                              poll_index: o,
                            }
                          : {
                              action: "update_poll_response",
                              utk: hj.cookie.get("hubspotutk"),
                              response_content: JSON.stringify({
                                version: 4,
                                answers: t,
                              }),
                              poll_response_id: i[o],
                            }),
                        t &&
                          (hj.isPreview
                            ? hj.widget.goToNextQuestion(e)
                            : (hj.request.savePollResponse(a, function (e) {
                                e.success &&
                                  e.poll_response_id &&
                                  ((i[e.poll_index] = e.poll_response_id),
                                  (hj.widget.pollResponseId =
                                    e.poll_response_id)),
                                  hj.widget.awaitResponseId &&
                                    hj.widget.awaitResponseId(),
                                  n && n(e);
                              }),
                              hj.widget.setDone(),
                              hj.widget.goToNextQuestion(e)));
                    },
                    "polls")),
                    (hj.widget.goToNextQuestion = hj.tryCatch(function (e) {
                      var t =
                        hj.widget.pollData.content.questions[
                          hj.widget.currentQuestionIndex
                        ];
                      if (
                        ((function (e) {
                          var t = hj.hq(
                            hj.hq(
                              "#" +
                                hj.widget.widgetAttributePrefix +
                                "_question_content_" +
                                hj.widget.currentQuestionIndex
                            )[0]
                          );
                          switch (e.type) {
                            case "single-close-ended":
                            case "multiple-close-ended":
                              t
                                .find(
                                  "." +
                                    hj.widget.widgetAttributePrefix +
                                    "_button_radio_checkbox_active"
                                )
                                .removeClass(
                                  hj.widget.widgetAttributePrefix +
                                    "_button_radio_checkbox_active"
                                ),
                                t
                                  .find(
                                    "." +
                                      hj.widget.widgetAttributePrefix +
                                      "_with_comment"
                                  )
                                  .find("textarea")
                                  .val("");
                              break;
                            case "rating-scale-5":
                            case "rating-scale-7":
                            case "net-promoter-score":
                              t.find(
                                "." +
                                  hj.widget.widgetAttributePrefix +
                                  "_button_score_active"
                              ).removeClass(
                                hj.widget.widgetAttributePrefix +
                                  "_button_score_active"
                              );
                              break;
                            case "single-open-ended-multiple-line":
                            case "single-open-ended-single-line":
                            case "email":
                              t.find(
                                "[name=_hj-f5b2a1eb-9b07_question_" +
                                  hj.widget.currentQuestionIndex +
                                  "_answer]"
                              ).val("");
                              break;
                            default:
                              throw new Error(
                                "Unhandled question type: " + e.type
                              );
                          }
                        })(t),
                        "thankYou" === t.next)
                      )
                        hj.widget.goToQuestion("thankYou");
                      else if ("byAnswer" === t.next)
                        hj.widget.goToQuestion(t.nextByAnswer[e]);
                      else if (0 == t.next.indexOf("question:"))
                        hj.widget.goToQuestion(t.next);
                      else {
                        if ("byOrder" !== t.next && void 0 !== t.next)
                          throw new Error(
                            "Unknown question.next value: " + t.next
                          );
                        hj.widget.goToQuestion("byOrder");
                      }
                    }, "polls")),
                    (hj.widget.goToFinalState = function () {
                      n.request && !n.granted
                        ? hj.widget.changeState(!1, "thankyou_consent")
                        : hj.widget.changeState(!1, "thankyou");
                    }),
                    (hj.widget.goToQuestion = hj.tryCatch(function (e) {
                      var t;
                      switch (e) {
                        case "thankYou":
                          return void hj.widget.goToFinalState();
                        case "byOrder":
                          if (
                            hj.widget.pollData.content.questions.length ===
                            hj.widget.currentQuestionIndex + 1
                          )
                            return void hj.widget.goToFinalState();
                          t = hj.widget.currentQuestionIndex + 1;
                          break;
                        default:
                          t =
                            "string" == typeof e && -1 !== e.indexOf(":")
                              ? parseInt(e.split(":")[1], 10)
                              : e;
                      }
                      hj.widget.ctrl
                        .find(
                          "#" +
                            hj.widget.widgetAttributePrefix +
                            "_question_text_" +
                            hj.widget.currentQuestionIndex
                        )
                        .addClass(hj.widget.widgetAttributePrefix + "_hidden"),
                        hj.widget.ctrl
                          .find(
                            "#" +
                              hj.widget.widgetAttributePrefix +
                              "_question_content_" +
                              hj.widget.currentQuestionIndex
                          )
                          .addClass(
                            hj.widget.widgetAttributePrefix + "_hidden"
                          ),
                        (hj.widget.currentQuestionIndex = t),
                        hj.widget.ctrl
                          .find(
                            "#" +
                              hj.widget.widgetAttributePrefix +
                              "_question_text_" +
                              hj.widget.currentQuestionIndex
                          )
                          .removeClass(
                            hj.widget.widgetAttributePrefix + "_hidden"
                          ),
                        hj.widget.ctrl
                          .find(
                            "#" +
                              hj.widget.widgetAttributePrefix +
                              "_question_content_" +
                              hj.widget.currentQuestionIndex
                          )
                          .removeClass(
                            hj.widget.widgetAttributePrefix + "_hidden"
                          ),
                        hj.widget.disableSubmit();
                    }, "polls")),
                    (hj.widget.setDone = hj.tryCatch(function () {
                      hj.isPreview ||
                        ("always" !== hj.widget.pollData.persist_condition &&
                          hj.cookie.add("_hjDonePolls", hj.widget.pollData.id));
                    }, "polls")),
                    (hj.widget.setMinimized = hj.tryCatch(function () {
                      hj.isPreview ||
                        hj.cookie.add(
                          "_hjMinimizedPolls",
                          hj.widget.pollData.id
                        );
                    }, "polls")),
                    hj.widget.ctrl.on(
                      "click.consent",
                      hj.tryCatch(function () {
                        hj.isPreview
                          ? (n.granted = !1)
                          : hj.request.getConsentGranted(function (e) {
                              n.granted = e;
                            }),
                          hj.hq("#_hj_poll_container>div").off("click.consent");
                      })
                    ),
                    hj.widget.ctrl
                      .find(
                        "." +
                          hj.widget.widgetAttributePrefix +
                          "_button_radio_checkbox textarea"
                      )
                      .on(
                        "click",
                        hj.tryCatch(function (e) {
                          e.stopPropagation();
                        }, "polls")
                      ),
                    hj.widget.ctrl
                      .find(
                        "." + hj.widget.widgetAttributePrefix + "_button_radio"
                      )
                      .on(
                        "click",
                        hj.tryCatch(function () {
                          var e = hj.hq(this),
                            t = e.find(
                              "." +
                                hj.widget.widgetAttributePrefix +
                                "_input_field"
                            );
                          hj
                            .hq(
                              hj.hq(
                                "#" +
                                  hj.widget.widgetAttributePrefix +
                                  "_question_content_" +
                                  hj.widget.currentQuestionIndex
                              )[0]
                            )
                            .find(
                              "." +
                                hj.widget.widgetAttributePrefix +
                                "_button_radio_checkbox"
                            )
                            .removeClass(
                              hj.widget.widgetAttributePrefix +
                                "_button_radio_checkbox_active"
                            ),
                            e.addClass(
                              hj.widget.widgetAttributePrefix +
                                "_button_radio_checkbox_active"
                            ),
                            t.focus(),
                            r()
                              ? hj.widget.enableSubmit()
                              : hj.widget.disableSubmit();
                        }, "polls")
                      ),
                    hj.widget.ctrl
                      .find(
                        "." +
                          hj.widget.widgetAttributePrefix +
                          "_button_checkbox"
                      )
                      .on(
                        "click",
                        hj.tryCatch(function () {
                          var e = hj.hq(this),
                            t = e.find(
                              "." +
                                hj.widget.widgetAttributePrefix +
                                "_input_field"
                            );
                          e.toggleClass(
                            hj.widget.widgetAttributePrefix +
                              "_button_radio_checkbox_active"
                          ),
                            t.focus(),
                            r()
                              ? hj.widget.enableSubmit()
                              : hj.widget.disableSubmit();
                        }, "polls")
                      ),
                    hj.widget.ctrl
                      .find(
                        "." + hj.widget.widgetAttributePrefix + "_button_score"
                      )
                      .on(
                        "click",
                        hj.tryCatch(function () {
                          var e = hj.hq(this);
                          hj.widget.ctrl
                            .find(
                              "." +
                                hj.widget.widgetAttributePrefix +
                                "_button_score"
                            )
                            .removeClass(
                              hj.widget.widgetAttributePrefix +
                                "_button_score_active"
                            ),
                            e.addClass(
                              hj.widget.widgetAttributePrefix +
                                "_button_score_active"
                            ),
                            hj.widget.enableSubmit();
                        }, "polls")
                      ),
                    hj.widget.ctrl
                      .find(
                        "." + hj.widget.widgetAttributePrefix + "_input_field"
                      )
                      .on(
                        "keyup",
                        hj.tryCatch(function () {
                          var e = hj.widget.ctrl.find(
                            "#" +
                              hj.widget.widgetAttributePrefix +
                              "_question_content_" +
                              hj.widget.currentQuestionIndex
                          );
                          (
                            "email" === e.attr("_hj_question_type")
                              ? hj.utils.validateEmail(hj.hq(this).val())
                              : "single-open-ended-multiple-line" ===
                                  e.attr("_hj_question_type") ||
                                "single-open-ended-single-line" ===
                                  e.attr("_hj_question_type")
                              ? hj.hq(this).val().length > 0
                              : r()
                          )
                            ? hj.widget.enableSubmit()
                            : hj.widget.disableSubmit();
                        }, "polls")
                      ),
                    hj.widget.ctrl
                      .find(
                        "#" + hj.widget.widgetAttributePrefix + "_action_submit"
                      )
                      .on(
                        "click",
                        hj.tryCatch(function () {
                          hj.widget.submitResponse();
                        }, "polls")
                      ),
                    hj.widget.ctrl.find("[data-consent]").on(
                      "click",
                      hj.tryCatch(function () {
                        "true" === hj.hq(this).attr("data-consent") &&
                          (hj.widget.pollResponseId
                            ? hj.request.grantConsent({
                                response_type: "poll_response",
                                response_id: hj.widget.pollResponseId,
                                message: hj.widget._("consent"),
                              })
                            : (hj.widget.awaitResponseId = function () {
                                hj.request.grantConsent({
                                  response_type: "poll_response",
                                  response_id: hj.widget.pollResponseId,
                                  message: hj.widget._("consent"),
                                });
                              })),
                          hj.widget.dismissWidget();
                      }, "polls")
                    ),
                    hj.hq(window).on(
                      "resize",
                      hj.tryCatch(function () {
                        hj.widget.applyPhoneClasses();
                      }, "polls")
                    ),
                    hj.widget.applyPhoneClasses(),
                    (a =
                      hj.isPreview &&
                      "desktop" === hj.widget.pollData.previewDevice),
                    hj.widget.isNarrowScreen() && !a
                      ? hj.widget.collapseWidget()
                      : hj.widget.openWidget(),
                    !hj.isPreview &&
                      hj.cookie.find(
                        "_hjMinimizedPolls",
                        hj.widget.pollData.id
                      ) &&
                      hj.widget.changeState(null, "hidden"),
                    (e = hj.widget.pollData.activeStepInPreview),
                    hj.isPreview &&
                      e &&
                      (hj.widget.goToQuestion(e),
                      parseInt(e) && hj.widget.openWidget()),
                    hj.widget.init();
                })(),
                "once" == hj.widget.pollData.persist_condition &&
                  hj.cookie.add("_hjDonePolls", hj.widget.pollData.id))
              : hj.log.debug(
                  "Poll widget #" +
                    hj.widget.pollData.id +
                    " could not be rendered.",
                  "polls"
                );
          }
          function s(e) {
            return hj.hq("<span>" + e + "</span>").text();
          }
          function d(e) {
            hj.hq.each(e.content.questions, function (e, t) {
              t.answers &&
                hj.hq.each(t.answers, function (e, t) {
                  t.index = e;
                });
            });
          }
          function c(e) {
            hj.hq.each(e.content.questions, function (e, t) {
              t.randomize_answer_order && hj.utils.shuffle(t.answers);
            });
          }
          return (
            (e.run = hj.tryCatch(function (t) {
              hj.hq.each(hj.settings.polls || [], function (i, o) {
                hj.targeting.matchRules(
                  o.targeting,
                  t,
                  hj.tryCatch(function () {
                    hj.log.debug("Poll #" + o.id + " has matched.", "poll"),
                      hj.cookie.find("_hjDonePolls", o.id)
                        ? hj.log.debug("Poll was already submitted.", "poll")
                        : hj.widget.addMatchingWidget(
                            "poll",
                            o.id,
                            o.created_epoch_time,
                            function () {
                              hj.tryCatch(d, "polls")(o),
                                hj.tryCatch(c, "polls")(o),
                                (hj.widget.pollData = o),
                                hj.tryCatch(
                                  hj.rendering.callAccordingToCondition,
                                  "polls"
                                )(hj.widget.pollData, "poll", r);
                            },
                            e.remove
                          );
                  }, "polls.run.matchRules-callback")
                );
              });
            }, "polls")),
            (e.remove = hj.tryCatch(function (e) {
              hj.widget.pollData
                ? (hj.hq("#_hj_poll_container").length > 0 &&
                    hj.hq("#_hj_poll_container").parent().remove(),
                  delete hj.widget.pollData,
                  setTimeout(function () {
                    e();
                  }, 1))
                : e();
            })),
            hj.isPreview &&
              (window._hjPollReload = hj.tryCatch(function (e) {
                hj.tryCatch(d, "polls")(e),
                  hj.tryCatch(c, "polls")(e),
                  (hj.widget.pollData = e),
                  (n.request = e.ask_for_consent),
                  (hj.settings.legal_name = e.legal_name),
                  (hj.settings.privacy_policy_url = e.privacy_policy_url),
                  (hj.settings.privacy_policy_url = e.privacy_policy_url),
                  hj.tryCatch(r, "polls")();
              }, "polls")),
            e
          );
        })(),
        !0
      );
    }, "polls")();
  },
  function (e, t, i) {
    hj.tryCatch(function () {
      hj.loader.registerModule(
        "Surveys",
        (function () {
          var e = {},
            t =
              '<style type="text/css">                    /*reset and generic css*/                    div#_hj_survey_invite_container,                    div#_hj_survey_invite_container * {                        line-height: normal;                        font-family: Arial, sans-serif, Tahoma !important;                        text-transform: initial !important;                        height: auto;                    }                    div#<%=p%>_survey .<%=p%>_transition {                        -webkit-transition: all 0.3s ease-in-out;                        -moz-transition: all 0.3s ease-in-out;                        -o-transition: all 0.3s ease-in-out;                        -ms-transition: all 0.3s ease-in-out;                        transition: all 0.3s ease-in-out;                    }                                        /*containers css*/                    div#_hj_survey_invite_container,                     div#_hj_survey_invite_container div,                     #_hj_survey_invite_container span,                     #_hj_survey_invite_container p,                     #_hj_survey_invite_container a,                     #_hj_survey_invite_container img,                     #_hj_survey_invite_container strong,                     #_hj_survey_invite_container form,                     #_hj_survey_invite_container label {                        border: 0;                        outline: 0;                        font-size: 100%;                        vertical-align: baseline;                        background: transparent;                        margin: 0;                        padding: 0;                    }                    div#<%=p%>_survey #<%=p%>_survey_invite_overlay {                        background: black;                        position: fixed;                        top: 0;                        bottom: 0;                        left: 0;                        right: 0;                        opacity: 0;                        z-index: 2147483645;                        filter: alpha(opacity=0);                        -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";                    }                    div#<%=p%>_survey #<%=p%>_survey_invite_container {                        background: white;                        width: 550px;                        position: fixed;                        z-index: 2147483646;                        top: 50%;                        left: 50%;                        margin-top: -210px;                        margin-left: -275px;                        border-radius: 6px;                        -moz-border-radius: 6px;                        -webkit-border-radius: 6px;                        -webkit-box-shadow: 0 5px 13px 0 rgba(0, 0, 0, 0.65) !important;                        -moz-box-shadow: 0 5px 13px 0 rgba(0, 0, 0, 0.65) !important;                        box-shadow: 0 5px 13px 0 rgba(0, 0, 0, 0.65) !important;                        opacity: 0;                        filter: alpha(opacity=0);                        -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";                    }                    /*SHOW classes*/                    div#<%=p%>_survey.<%=p%>_survey_show #<%=p%>_survey_invite_overlay {                        opacity: .8;                        filter: alpha(opacity=80);                        -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=80)";                    }                    div#<%=p%>_survey.<%=p%>_survey_show #<%=p%>_survey_invite_container {                        opacity: 1;                        filter: alpha(opacity=100);                        -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";                        margin-top: -200px;                    }                                        /*content and elements*/                    div#<%=p%>_survey #<%=p%>_survey_invite_container .<%=p%>_survey_close {                        background-image:                             url(' +
              i(0) +
              ')                                 !important;                        background-repeat: no-repeat;                        background-position: -120px 0;                        cursor: pointer;                        opacity: .60;                        filter: alpha(opacity=60);                        -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=60)";                        position: absolute !important;                        right: 10px;                        top: 10px;                        width: 16px;                        height: 16px;                    }                    div#<%=p%>_survey #<%=p%>_survey_invite_container .<%=p%>_survey_close:hover {                        opacity: 1;                        filter: alpha(opacity=100);                        -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";                    }                    div#<%=p%>_survey #<%=p%>_survey_invite_container .<%=p%>_survey_content {                        padding: 50px 20px;                        text-align: center;                    }                    div#<%=p%>_survey #<%=p%>_survey_invite_container .<%=p%>_survey_title {                        padding: 0 20px 20px 20px;                        font-size: 24px;                        color: #333333;                        white-space: pre-wrap;                        word-wrap: break-word;                        overflow-wrap: break-word;                    }                    div#<%=p%>_survey #<%=p%>_survey_invite_container .<%=p%>_survey_description {                        padding: 0 30px 40px 30px;                        font-weight: normal;                        font-size: 16px;                        line-height: 25px;                        color: #666666;                        white-space: pre-wrap;                        word-wrap: break-word;                        overflow-wrap: break-word;                    }                    div#<%=p%>_survey #<%=p%>_survey_invite_container .<%=p%>_survey_button {                        border-radius: 5px;                         -moz-border-radius: 5px;                        -webkit-border-radius: 5px;                        -webkit-box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.25);                        -moz-box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.25);                        box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.25);                        cursor: pointer;                        text-decoration: none !important;                        font-size: 18px !important;                        font-weight: bold !important;                        padding: 16px 26px !important;                        border: 0 !important;                        outline: 0 !important;                        height: initial !important;                        min-height: initial !important;                        display: -moz-inline-stack;                        display: inline-block;                        zoom: 1;                        *display: inline;                        vertical-align: top;                        width: auto;                        background: #00C764 !important;                        color: white !important;                        font-family: Tahoma, Arial !important;                        white-space: pre-wrap;                        word-wrap: break-word;                        overflow-wrap: break-word;                    }                     div#<%=p%>_survey #<%=p%>_survey_invite_container .<%=p%>_survey_button:hover,                     div#<%=p%>_survey #<%=p%>_survey_invite_container .<%=p%>_survey_button:focus,                     div#<%=p%>_survey #<%=p%>_survey_invite_container .<%=p%>_survey_button:active {                        background: #00a251 !important;                    }                     div#<%=p%>_survey #<%=p%>_survey_invite_container .<%=p%>_survey_close_link {                        text-align: center;                        padding: 20px 0 0 0;                    }                     div#<%=p%>_survey #<%=p%>_survey_invite_container .<%=p%>_survey_close_link > a {                        cursor: pointer;                        text-decoration: underline;                        color: #666666;                        font-size: 13px;                    }                                        div#<%=p%>_survey #<%=p%>_survey_invite_container .<%=p%>_survey_close_link > a:hover {                        color: #333333;                    }                    div#<%=p%>_survey #<%=p%>_survey_invite_container .<%=p%>_survey_powered_by {                        color: #666666;                        position: absolute;                        left: 0;                        bottom: 0;                        margin-bottom: 10px;                        margin-left: 10px;                        font-size: 11px;                    }                    div#<%=p%>_survey #<%=p%>_survey_invite_container .<%=p%>_survey_powered_by > span {                        background-image:                             url(' +
              i(0) +
              ')                                 !important;                         background-repeat: no-repeat;                        background-position: -16px 0;                        margin-right: 4px;                        width: 16px;                        height: 16px;                        display: -moz-inline-stack;                        display: inline-block;                        zoom: 1;                        *display: inline;                        vertical-align: middle;                    }                    div#<%=p%>_survey #<%=p%>_survey_invite_container .<%=p%>_survey_powered_by > a {                        color: #666666;                        text-decoration: underline;                    }                                        /*mobile classes*/                    div#<%=p%>_survey.<%=p%>_survey_full * {                        -webkit-transition: none !important;                        -moz-transition: none !important;                        -o-transition: none !important;                        -ms-transition: none !important;                        transition: none !important;                    }                    div#<%=p%>_survey.<%=p%>_survey_full #<%=p%>_survey_invite_container {                        width: auto;                        margin: 0;                        top: 15px;                        left: 15px;                        right: 15px;                    }                    div#<%=p%>_survey.<%=p%>_survey_full #<%=p%>_survey_invite_container .<%=p%>_survey_content {                       padding: 40px 20px 70px 20px;                    }                    div#<%=p%>_survey.<%=p%>_survey_full #<%=p%>_survey_invite_container .<%=p%>_survey_title {                        padding: 0 10px 20px 10px;                        font-size: 20px;                    }                    div#<%=p%>_survey.<%=p%>_survey_full #<%=p%>_survey_invite_container .<%=p%>_survey_description {                        padding: 0 10px 30px 10px;                        font-size: 14px;                    }                    div#<%=p%>_survey.<%=p%>_survey_full #<%=p%>_survey_invite_container .<%=p%>_survey_button {                        font-size: 17px !important;                        font-weight: normal !important;                        padding: 12px 15px !important;                    }                    div#<%=p%>_survey.<%=p%>_survey_full #<%=p%>_survey_invite_container .<%=p%>_survey_powered_by{                        left: 50%;                        margin: 0 0 10px -55px;                    }                </style>                <div id="_hj_survey_invite_container">                    <div id="<%=p%>_survey">                        <div id="<%=p%>_survey_invite_overlay" class="<%=p%>_transition"></div>                        <div id="<%=p%>_survey_invite_container" class="<%=p%>_transition">                            <a class="<%=p%>_survey_close <%=p%>_transition"></a>                            <div class="<%=p%>_survey_content">                                <div class="<%=p%>_survey_title"><%= survey.title %></div>                                <div class="<%=p%>_survey_description"><%= survey.description %></div>                                <a class="<%=p%>_survey_button <%=p%>_transition" href="<%= survey.url %>"                                     target="_blank"><%= survey.button %></a>                                <div class="<%=p%>_survey_close_link">                                    <a class="<%=p%>_transition"><%= survey.close %></a>                                </div>                            </div>                            <% if (survey.effectiveShowBranding) { %>                                <div class="<%=p%>_survey_powered_by">                                    <span class="<%=p%>_widget_icon"></span>                                    Not using <a href="<%=cta%>" target="_blank">Hotjar</a> yet?                                </div>                            <% } %>                        </div>                    </div>                </div>';
          function o() {
            hj.log.debug("-- RENDERING SURVEY INVITE --", "survey");
            var e = hj.rendering.renderTemplate(t, {
              survey: {
                id: hj.survey.data.id,
                effectiveShowBranding: hj.survey.data.effective_show_branding,
                title: hj.survey.data.invite.title,
                description: hj.survey.data.invite.description,
                button: hj.survey.data.invite.button,
                close: hj.survey.data.invite.close,
                url: new hj.rendering.TrustedString(hj.survey.data.public_url),
              },
              p: hj.widget.widgetAttributePrefix,
              cta: new hj.rendering.TrustedString(hj.widget.ctaLinks.surveys),
            });
            e
              ? ((hj.survey.ctrl = hj.rendering.addToDom(
                  "_hj_survey_invite_container",
                  e
                )),
                setTimeout(
                  hj.tryCatch(function () {
                    hj.survey.ctrl.addClass("_hj-f5b2a1eb-9b07_survey_show");
                  }, "surveys"),
                  0
                ),
                hj.survey.ctrl
                  .find(
                    "._hj-f5b2a1eb-9b07_survey_close, ._hj-f5b2a1eb-9b07_survey_button, ._hj-f5b2a1eb-9b07_survey_close_link a, #_hj-f5b2a1eb-9b07_survey_invite_overlay"
                  )
                  .on("click", n),
                hj.hq(window).on(
                  "resize",
                  hj.tryCatch(function () {
                    a();
                  }, "surveys")
                ),
                hj.tryCatch(a, "surveys")())
              : hj.log.debug(
                  "Survey #" + hj.survey.data.id + " could not be rendered.",
                  "surveys"
                );
          }
          function n() {
            hj.log.debug("-- CLOSING SURVEY INVITE --", "survey"),
              hj.survey.ctrl.hide(),
              hj.cookie.add("_hjClosedSurveyInvites", hj.survey.data.id);
          }
          function a() {
            hj.hq(window).width() < 580
              ? hj.survey.ctrl.addClass("_hj-f5b2a1eb-9b07_survey_full")
              : hj.survey.ctrl.removeClass("_hj-f5b2a1eb-9b07_survey_full");
          }
          return (
            (e.run = hj.tryCatch(function (t) {
              hj.hq.each(hj.settings.surveys || [], function (i, n) {
                hj.targeting.matchRules(
                  n.targeting,
                  t,
                  hj.tryCatch(function () {
                    hj.log.debug("Survey #" + n.id + " has matched.", "survey"),
                      hj.cookie.find("_hjClosedSurveyInvites", n.id)
                        ? hj.log.debug("Survey was already viewed.", "survey")
                        : hj.widget.addMatchingWidget(
                            "survey",
                            n.id,
                            n.created_epoch_time,
                            function () {
                              (hj.survey.data = n),
                                hj.rendering.callAccordingToCondition(
                                  hj.survey.data,
                                  "survey",
                                  o
                                );
                            },
                            e.remove
                          );
                  }, "surveys.run.matchRules-callback")
                );
              });
            }, "surveys")),
            (e.remove = hj.tryCatch(function (e) {
              hj.survey.data
                ? (hj.hq("#_hj_survey_invite_container").length > 0 &&
                    (hj.survey.ctrl.hide(),
                    hj.hq("#_hj_survey_invite_container").parent().remove()),
                  delete hj.survey.data,
                  setTimeout(function () {
                    e();
                  }, 1))
                : e();
            })),
            e
          );
        })(),
        !0
      );
    }, "surveys")();
  },
  function (e, t) {
    hj.tryCatch(function () {
      hj.loader.registerModule(
        "Testers",
        (function () {
          var e = {},
            t = { granted: null, request: !1 },
            i = [
              '<div id="_hj_testers_container">',
              hj.widget.commonCSS,
              '<style type="text/css">                    .<%=p%>_widget .<%=p%>_widget_content .<%=p%>_widget_description {                        padding: 0;                        margin: 0 0 12px 0;                        text-align: center;                    }                    .<%=p%>_widget .<%=p%>_widget_content .<%=p%>_input_field {margin-bottom: 6px;}                     .<%=p%>_widget .<%=p%>_widget_content .<%=p%>_double_control {margin-bottom: 6px;}                     .<%=p%>_widget .<%=p%>_widget_content .<%=p%>_double_control .<%=p%>_input_field  {                        margin-bottom: 0;                    }                </style>',
              '<div id="<%=p%>_testers" class="<%=p%>_widget <%=p%>_<%= hj.widget.activeLanguageDirection %>                     <%=p%>_skin_<%= widgetStyle.skin %> <%=p%>_position_<%= widgetStyle.position %>">                    <a class="<%=p%>_widget_open_close <%=p%>_action_toggle_widget"                    ><span class="<%=p%>_widget_icon"></span></a>                    <div class="<%=p%>_widget_hidden_handle <%=p%>_action_toggle_widget"></div>                    <p class="<%=p%>_widget_title <%=p%>_action_open_widget"><%= testersWidget.invitation %></p>                    <div class="<%=p%>_widget_initiator">                        <button type="button" class="<%=p%>_btn_primary <%=p%>_rounded_corners <%=p%>_transition                             <%=p%>_shadow <%=p%>_action_open_widget">                            <%= hj.widget._("sign_me_up")%>                        </button>                    </div>                    <div class="<%=p%>_widget_state <%=p%>_widget_state_open">                        <div class="<%=p%>_widget_content <%=p%>_widget_content_overflow">                            <p class="<%=p%>_widget_description"><%= testersWidget.description %></p>                                                        <% if (testersWidget.fields.name) { %>                                <input type="text" name="<%=p%>_name" class="<%=p%>_input_field <%=p%>_rounded_corners"                                    placeholder="<%= hj.widget._("full_name")%>" data-bind />                            <% } %>                            <div <% if (testersWidget.fields.age && testersWidget.fields.city) { %>                                class="<%=p%>_double_control"                            <% } %>>                                 <% if (testersWidget.fields.age) { %>                                    <input type="text" name="<%=p%>_age"                                         class="<%=p%>_input_field <%=p%>_rounded_corners                                         <%=p%>_double_first" placeholder="<%= hj.widget._("age")%>" data-bind />                                <% } %>                                <% if (testersWidget.fields.city) { %>                                    <input type="text" name="<%=p%>_city"                                         class="<%=p%>_input_field <%=p%>_rounded_corners                                         <%=p%>_double_second" placeholder="<%= hj.widget._("city")%>" data-bind />                                <% } %>                                <div class="<%=p%>_clear_both"></div>                            </div>                            <% if (testersWidget.fields.email) { %>                                <input type="text" name="<%=p%>_email"                                     class="<%=p%>_input_field <%=p%>_rounded_corners"                                     placeholder="<%= hj.widget._("email")%>" data-bind />                            <% } %>                            <% if (testersWidget.fields.phone) { %>                                <input type="text" name="<%=p%>_phone"                                     class="<%=p%>_input_field <%=p%>_rounded_corners"                                     placeholder="<%= hj.widget._("phone_number")%>" data-bind />                            <% } %>                            <% if (testersWidget.fields.sex) { %>                                <div class="<%=p%>_double_control">                                     <div class="<%=p%>_button_radio <%=p%>_button_radio_checkbox <%=p%>_rounded_corners                                        <%=p%>_double_first" data-key="sex" data-value="male">                                            <span class="<%=p%>_widget_icon"></span>                                            <span class="<%=p%>_radio_checkbox_text"><%= hj.widget._("male")%></span>                                    </div>                                    <div class="<%=p%>_button_radio <%=p%>_button_radio_checkbox <%=p%>_rounded_corners                                        <%=p%>_double_second" data-key="sex" data-value="female">                                            <span class="<%=p%>_widget_icon"></span>                                            <span class="<%=p%>_radio_checkbox_text"><%= hj.widget._("female")%></span>                                    </div>                                    <div class="<%=p%>_clear_both"></div>                                </div>                            <% } %>                        </div>                        <div class="<%=p%>_widget_footer">                            <% if (testersWidget.effectiveShowBranding) { %>                                <div class="<%=p%>_pull_left">                                    <span class="<%=p%>_widget_icon"></span>                                    Not using <a href="<%=cta%>" target="_blank">Hotjar</a> yet?                                </div>                            <% } %>                            <div class="<%=p%>_pull_right">                                <button type="button" id="<%=p%>_action_submit"                                     class="<%=p%>_btn_primary <%=p%>_btn_disabled                                     <%=p%>_rounded_corners <%=p%>_transition <%=p%>_shadow"><%= hj.widget._("send")%>                                     <span class="<%=p%>_widget_icon"></span>                                </button>                            </div>                            <div class="<%=p%>_clear_both"></div>                        </div>                    </div>                    <div class="<%=p%>_widget_state <%=p%>_widget_state_thankyou">                        <p class="<%=p%>_thankyou_message">                            <%= testersWidget.thankyou %><br />                            <button type="button" class="<%=p%>_btn_primary <%=p%>_rounded_corners                                     <%=p%>_transition                                     <%=p%>_shadow <%=p%>_action_dismiss_widget"><%=hj.widget._("close")%></button>                        </p>                        <%=hj.widget.renderLegal(testersWidget.showLegal)%>\n                        <div class="<%=p%>_widget_footer">                            <% if (testersWidget.effectiveShowBranding) { %>                                <div class="<%=p%>_pull_left">                                    <span class="<%=p%>_widget_icon"></span>                                    Not using <a href="<%=cta%>" target="_blank">Hotjar</a> yet?                                </div>                            <% } %>                            <div class="<%=p%>_pull_right">                                <button type="button" class="<%=p%>_btn <%=p%>_btn_disabled <%=p%>_rounded_corners                                     <%=p%>_transition <%=p%>_shadow"><%= hj.widget._("sent")%>                                     <span class="<%=p%>_widget_icon"></span>                                </button>                            </div>                            <div class="<%=p%>_clear_both"></div>                        </div>                    </div>                    <div class="<%=p%>_widget_state <%=p%>_widget_state_thankyou_consent">                        <div class="<%=p%>_thankyou_message">                            <p class="<%=p%>_consent_message_title"><%= testersWidget.thankyou %></p>                            <span class="<%=p%>_consent_message_text"><%=hj.widget._("consent")%>&nbsp;                                <a href="<%=hj.widget._("consent_more_information_url")%>"                                    class="<%=p%>_more_info_link"                                    target="_blank">                                <%=hj.widget._("consent_more_information")%>                            </a></p>                            <div class="<%=p%>_consent_actions">                                <button class="<%=p%>_btn_primary <%=p%>_rounded_corners" data-consent="false"                                         type="button">                                    <i class="<%=p%>_icon <%=p%>_icon-x"></i>                                </button>                                <button class="<%=p%>_btn_primary <%=p%>_rounded_corners" data-consent="true"                                         type="button">                                    <i class="<%=p%>_icon <%=p%>_icon-ok"></i>                                </button>                             </div>                        </div>                        <%=hj.widget.renderLegal(testersWidget.showLegal)%>\n                        <div class="<%=p%>_widget_footer">                            <% if (testersWidget.effectiveShowBranding) { %>                                <div class="<%=p%>_pull_left">                                    <span class="<%=p%>_widget_icon"></span>                                    Not using <a href="<%=cta%>" target="_blank">Hotjar</a> yet?                                </div>                            <% } %>                            <div class="<%=p%>_pull_right">                                <button type="button" class="<%=p%>_btn <%=p%>_btn_disabled <%=p%>_rounded_corners                                     <%=p%>_transition <%=p%>_shadow"><%= hj.widget._("sent")%>                                     <span class="<%=p%>_widget_icon"></span>                                </button>                            </div>                            <div class="<%=p%>_clear_both"></div>                        </div>                    </div>                </div>',
              "</div>",
            ].join("");
          function o() {
            hj.log.debug("-- RENDERING TESTERS WIDGET --"),
              hj.widget.setLanguage(hj.widget.testersData.language);
            var e = hj.widget.changeColorLuminance(
                hj.widget.testersData.background,
                -0.1
              ),
              o = hj.widget.changeColorLuminance(
                hj.widget.testersData.background,
                0.1
              ),
              n = hj.widget.changeColorLuminance(
                hj.widget.testersData.background,
                -0.2
              ),
              a = hj.widget.changeColorLuminance(
                hj.widget.testersData.background,
                0.2
              ),
              r = hj.widget.changeColorLuminance(
                hj.widget.testersData.background,
                -0.6
              ),
              s = hj.widget.changeColorLuminance(
                hj.widget.testersData.background,
                0.6
              ),
              d = hj.rendering.renderTemplate(i, {
                apiUrlBase: new hj.rendering.TrustedString(hj.apiUrlBase),
                hjid: hj.settings.site_id,
                preview: hj.isPreview || !1,
                testersWidget: {
                  id: hj.widget.testersData.id,
                  effectiveShowBranding:
                    hj.widget.testersData.effective_show_branding,
                  fields: {
                    name:
                      hj.widget.testersData.content.fields.indexOf("name") > -1,
                    age:
                      hj.widget.testersData.content.fields.indexOf("age") > -1,
                    city:
                      hj.widget.testersData.content.fields.indexOf("city") > -1,
                    email:
                      hj.widget.testersData.content.fields.indexOf("email") >
                      -1,
                    phone:
                      hj.widget.testersData.content.fields.indexOf("phone") >
                      -1,
                    sex:
                      hj.widget.testersData.content.fields.indexOf("sex") > -1,
                  },
                  invitation: hj.widget.testersData.content.invitation,
                  description: hj.widget.testersData.content.description,
                  thankyou: hj.widget.testersData.content.thankyou,
                  showLegal: hj.widget.testersData.show_legal,
                },
                widgetStyle: {
                  position: hj.widget.testersData.position,
                  skin: hj.widget.testersData.skin,
                  primaryColor: hj.widget.testersData.background,
                  secondaryColor:
                    "light" === hj.widget.testersData.skin ? e : o,
                  alternateColor:
                    "light" === hj.widget.testersData.skin ? n : a,
                  footerTextColor:
                    "light" === hj.widget.testersData.skin ? r : s,
                  footerBorderColor:
                    "light" === hj.widget.testersData.skin ? n : e,
                  fontColor:
                    "light" === hj.widget.testersData.skin ? "#111" : "#FFF",
                  fontColorNegative:
                    "light" === hj.widget.testersData.skin ? "#FFF" : "#111",
                },
                p: hj.widget.widgetAttributePrefix,
                cta: new hj.rendering.TrustedString(hj.widget.ctaLinks.testers),
              });
            d
              ? ((hj.widget.ctrl = hj.rendering.addToDom(
                  "_hj_testers_container",
                  d
                )),
                (function () {
                  function e() {
                    var e = !0;
                    return (
                      hj.hq.each(
                        hj.widget.testersData.content.fields,
                        function (t, i) {
                          hj.widget.model[i] || (e = !1);
                        }
                      ),
                      e
                    );
                  }
                  (hj.widget.submitResponse = hj.tryCatch(function () {
                    e() &&
                      (hj.isPreview ||
                        (hj.request.saveTesterResponse(
                          {
                            action: "testers_widget_response",
                            response: hj.widget.model,
                          },
                          function (e) {
                            (hj.widget.testersResponseId =
                              e.tester_response_id),
                              hj.widget.awaitResponseId &&
                                hj.widget.awaitResponseId();
                          }
                        ),
                        hj.widget.setDone()),
                      !t.granted && t.request
                        ? hj.widget.changeState(!1, "thankyou_consent")
                        : hj.widget.changeState(!1, "thankyou"));
                  }, "testers")),
                    (hj.widget.setDone = hj.tryCatch(function () {
                      hj.isPreview ||
                        hj.cookie.add(
                          "_hjDoneTestersWidgets",
                          hj.widget.testersData.id
                        );
                    }, "testers")),
                    (hj.widget.setMinimized = hj.tryCatch(function () {
                      hj.isPreview ||
                        hj.cookie.add(
                          "_hjMinimizedTestersWidgets",
                          hj.widget.testersData.id
                        );
                    }, "testers")),
                    hj.widget.ctrl
                      .find(
                        "." +
                          hj.widget.widgetAttributePrefix +
                          "_action_open_widget"
                      )
                      .on(
                        "click",
                        hj.tryCatch(function () {
                          (t.request = hj.widget.testersData.ask_for_consent),
                            hj.isPreview
                              ? (t.granted = !1)
                              : hj.request.getConsentGranted(function (e) {
                                  t.granted = e;
                                });
                        })
                      ),
                    hj.widget.ctrl
                      .find(
                        "." + hj.widget.widgetAttributePrefix + "_button_radio"
                      )
                      .on(
                        "click",
                        hj.tryCatch(function () {
                          var t = hj.hq(this),
                            i = t.attr("data-key"),
                            o = t.attr("data-value");
                          (hj.widget.model[i] = o),
                            e()
                              ? hj.widget.enableSubmit()
                              : hj.widget.disableSubmit(),
                            hj.widget.ctrl
                              .find(
                                "." +
                                  hj.widget.widgetAttributePrefix +
                                  "_button_radio_checkbox"
                              )
                              .removeClass(
                                hj.widget.widgetAttributePrefix +
                                  "_button_radio_checkbox_active"
                              ),
                            t.addClass(
                              hj.widget.widgetAttributePrefix +
                                "_button_radio_checkbox_active"
                            );
                        }, "testers")
                      ),
                    hj.widget.ctrl.find("[data-bind]").on(
                      "keyup change",
                      hj.tryCatch(function () {
                        var t = hj.hq(this),
                          i = t
                            .attr("name")
                            .split(hj.widget.widgetAttributePrefix + "_")[1];
                        (hj.widget.model[i] = t.val()),
                          e()
                            ? hj.widget.enableSubmit()
                            : hj.widget.disableSubmit();
                      }, "testers")
                    ),
                    hj.widget.ctrl
                      .find(
                        "#" + hj.widget.widgetAttributePrefix + "_action_submit"
                      )
                      .on(
                        "click",
                        hj.tryCatch(function () {
                          hj.widget.submitResponse();
                        }, "testers")
                      ),
                    hj.widget.ctrl.find("[data-consent]").on(
                      "click",
                      hj.tryCatch(function () {
                        "true" === hj.hq(this).attr("data-consent") &&
                          (hj.widget.testersResponseId
                            ? hj.request.grantConsent({
                                response_type: "tester_response",
                                response_id: hj.widget.testersResponseId,
                                message: hj.widget._("consent"),
                              })
                            : (hj.widget.awaitResponseId = function () {
                                hj.request.grantConsent({
                                  response_type: "tester_response",
                                  response_id: hj.widget.testersResponseId,
                                  message: hj.widget._("consent"),
                                });
                              })),
                          hj.widget.dismissWidget();
                      }, "testers")
                    ),
                    hj.hq(window).on(
                      "resize",
                      hj.tryCatch(function () {
                        hj.widget.applyPhoneClasses();
                      }, "testers")
                    ),
                    hj.tryCatch(hj.widget.applyPhoneClasses, "testers")(),
                    hj.tryCatch(hj.widget.collapseWidget, "testers")(),
                    !hj.isPreview &&
                      hj.cookie.find(
                        "_hjMinimizedTestersWidgets",
                        hj.widget.testersData.id
                      ) &&
                      hj.tryCatch(hj.widget.changeState, "testers")(
                        null,
                        "hidden"
                      ),
                    hj.tryCatch(hj.widget.init, "testers")();
                })(),
                "once" === hj.widget.testersData.persist_condition &&
                  hj.cookie.add(
                    "_hjDoneTestersWidgets",
                    hj.widget.testersData.id
                  ))
              : hj.log.debug(
                  "Tester widget #" +
                    hj.widget.testersData.id +
                    " could not be rendered.",
                  "testers"
                );
          }
          return (
            (e.run = hj.tryCatch(function (t) {
              hj.hq.each(hj.settings.testers_widgets || [], function (i, n) {
                hj.targeting.matchRules(
                  n.targeting,
                  t,
                  hj.tryCatch(function () {
                    hj.log.debug("Tester #" + n.id + " has matched.", "tester"),
                      hj.cookie.find("_hjDoneTestersWidgets", n.id)
                        ? hj.log.debug(
                            "Tester was already submitted.",
                            "tester"
                          )
                        : hj.widget.addMatchingWidget(
                            "tester",
                            n.id,
                            n.created_epoch_time,
                            function () {
                              (hj.widget.testersData = n),
                                hj.tryCatch(
                                  hj.rendering.callAccordingToCondition,
                                  "testers"
                                )(hj.widget.testersData, "testersWidget", o);
                            },
                            e.remove
                          );
                  }, "testers.run.matchRules-callback")
                );
              });
            }, "testers")),
            (e.remove = hj.tryCatch(function (e) {
              hj.widget.testersData
                ? (hj.hq("#_hj_testers_container").length > 0 &&
                    (hj.widget.ctrl.hide(),
                    hj.hq("#_hj_testers_container").parent().remove()),
                  delete hj.widget.testersData,
                  setTimeout(function () {
                    e();
                  }, 1))
                : e();
            })),
            hj.isPreview &&
              (window._hjTestersWidgetReload = function (e) {
                (hj.widget.testersData = e),
                  (hj.settings.legal_name = e.legal_name),
                  (hj.settings.privacy_policy_url = e.privacy_policy_url),
                  o();
              }),
            e
          );
        })(),
        !0
      );
    }, "testers")();
  },
  function (e, t) {
    hj.tryCatch(function () {
      var e, t, i, o, n, a, r, s, d, c, l, p, h, u, _, g, m, f, b, w, v;
      hj.loader.registerModule(
        "Forms",
        ((e = null),
        (t = {}),
        (i = null),
        (o = []),
        (n = hj.tryCatch(function (t, i, o, n) {
          var r, s;
          hj.hq.each(e.field_info, function (e, d) {
            (r = -1 !== i.indexOf("*") || -1 !== i.indexOf(d.field_type)),
              (s = -1 !== o.indexOf(d.field_type)),
              r &&
                !s &&
                a(d).on(t, function () {
                  n(this, d);
                });
          });
        }, "forms")),
        (a = hj.tryCatch(function (t) {
          var i, o, n;
          if ("id" === e.selector_type)
            i = hj.hq("form[id='" + e.selector + "']");
          else {
            if ("css" !== e.selector_type)
              throw new Error("Invalid selector_type: " + e.selector_type);
            (n = parseInt(e.selector.split(":", 1))),
              (o = e.selector.slice(n.toString().length + 1)),
              (i = hj.hq(hj.hq(o)[n]));
          }
          return i.find(
            "*[" +
              t.match_attribute +
              "='" +
              t.match_value.replace(/'/g, "\\'") +
              "']"
          );
        }, "forms")),
        (r = hj.tryCatch(function (t) {
          var i = sessionStorage.getItem("_hjForm"),
            o = i ? JSON.parse(i).id : 0;
          hj.hq.each(hj.settings.forms || [], function (i, o) {
            if (hj.targeting.matchRules(o.targeting, t))
              return (
                (e = o),
                hj.log.debug(
                  "Setting active form to form[id=" + e.id + "]",
                  "forms"
                ),
                !1
              );
          }),
            !e &&
              o &&
              hj.hq.each(hj.settings.forms || [], function (t, i) {
                if (i.id == o)
                  return (
                    (e = i),
                    hj.log.debug(
                      "Setting active form to form[id=" + e.id + "]",
                      "forms"
                    ),
                    !1
                  );
              });
        }, "forms")),
        (s = hj.tryCatch(function (t, i) {
          var o, n;
          if ("id" === i) return hj.hq("form[id='" + t + "']").length > 0;
          if ("css" === i)
            return (
              (n = t.split(":", 1)),
              (o = t.slice(n.length + 1)),
              hj.hq(o).length > parseInt(n)
            );
          throw new Error("Invalid selector_type: " + e.selector_type);
        }, "forms")),
        (d = hj.tryCatch(function (e) {
          hj.log.debug(
            "Saving forms using manual tracking: " + JSON.stringify(e),
            "forms"
          ),
            sessionStorage.setItem("_hjFormsManualTracking", JSON.stringify(e));
        }, "forms")),
        (c = hj.tryCatch(function () {
          var e =
            JSON.parse(sessionStorage.getItem("_hjFormsManualTracking")) || [];
          return (
            e.length &&
              hj.log.debug(
                "Getting forms using manual tracking: " + JSON.stringify(e),
                "forms"
              ),
            e
          );
        }, "forms")),
        (l = hj.tryCatch(function (e) {
          hj.hq.inArray(e.id, o) ||
            (o.push(e.id),
            hj.log.debug(
              "Form using manual tracking added: form[id=" + e.id + "]",
              "forms"
            ),
            d(o));
        }, "forms")),
        (p = hj.tryCatch(function () {
          hj.log.debug("Saving active form: form[id=" + e.id + "]", "forms"),
            sessionStorage.setItem("_hjForm", JSON.stringify(e));
        }, "forms")),
        (h = hj.tryCatch(function () {
          return Boolean(sessionStorage.getItem("_hjForm"));
        }, "forms")),
        (u = hj.tryCatch(function () {
          var e,
            t = sessionStorage.getItem("_hjForm");
          sessionStorage.removeItem("_hjForm"),
            (t = JSON.parse(t)),
            (e =
              !s(t.selector, t.selector_type) &&
              hj.targeting.matchRules(t.targeting, document.referrer)),
            _(t, e, !0);
        }, "forms")),
        (_ = hj.tryCatch(function (t, i, n) {
          n || l(e),
            (n && hj.hq.inArray(t.id, o)) ||
              hj.eventStream
                .write({
                  form_id: t.id,
                  form_event: i
                    ? "form_submit_successful"
                    : "form_submit_failed",
                })
                .flush();
        }, "forms")),
        (g = hj.tryCatch(function () {
          i = new Date();
        }, "forms")),
        (m = hj.tryCatch(function (t, o) {
          i &&
            (hj.eventStream
              .write({
                form_id: e.id,
                form_field_event: {
                  form_field_id: o.id,
                  interaction_time: new Date() - i,
                  content_hash: hj.md5(hj.hq(t).val()),
                },
              })
              .flush(),
            (i = null));
        }, "forms")),
        (f = hj.tryCatch(function (t, i) {
          hj.eventStream
            .write({
              form_id: e.id,
              form_field_event: {
                form_field_id: i.id,
                interaction_time: null,
                content_hash: hj.md5(hj.hq(t).val()),
              },
            })
            .flush();
        }, "forms")),
        (b = hj.tryCatch(function (t, i) {
          var o,
            n = a(i),
            r = [];
          for (o = 0; o < n.length; o += 1)
            r.push(hj.md5(n[o].checked ? n[o].value : ""));
          hj.eventStream
            .write({
              form_id: e.id,
              form_field_event: {
                form_field_id: i.id,
                interaction_time: null,
                content_hash: r.join(","),
              },
            })
            .flush();
        }, "forms")),
        (w = hj.tryCatch(function (e, t) {
          var i,
            o,
            n,
            a = e.toString().split("."),
            r = t.toString().split("."),
            s = Math.max(a.length, r.length);
          for (n = 0; n < s; n += 1) {
            if ((i = parseInt(a[n] || 0)) > (o = parseInt(r[n] || 0)))
              return !0;
            if (i < o) return !1;
          }
          return !0;
        }, "forms")),
        (v = hj.tryCatch(function () {
          var t,
            i,
            o,
            n = void 0 !== window.jQuery,
            a = !1;
          if ("id" === e.selector_type)
            n
              ? (a =
                  (o = window.jQuery("form[id='" + e.selector + "']:eq(0)"))
                    .length > 0)
              : ((o = document.getElementById(e.selector)), (a = Boolean(o)));
          else {
            if ("css" !== e.selector_type)
              throw new Error("Invalid selector_type: " + e.selector_type);
            (t = parseInt(e.selector.split(":", 1))),
              (i = e.selector.slice(t.toString().length + 1)),
              n
                ? (a = (o = window.jQuery(i + ":eq(" + t + ")")).length > 0)
                : ((o = hj.hq(i)[t]), (a = Boolean(o)));
          }
          a
            ? n
              ? ((function (e) {
                  function t(t) {
                    return d ? t.data("events") : e._data(t[0]).events;
                  }
                  function i(e, i, o) {
                    var n = t(e),
                      a = n[i];
                    if (d)
                      o ? n.live.unshift(n.live.pop()) : a.unshift(a.pop());
                    else {
                      var r = o ? a.splice(a.delegateCount - 1, 1)[0] : a.pop();
                      a.splice(o ? 0 : a.delegateCount || 0, 0, r);
                    }
                  }
                  function o(t, o, n) {
                    var a = o.split(/\s+/);
                    t.each(function () {
                      for (var t = 0; a.length > t; ++t) {
                        var o = e.trim(a[t]).match(/[^\.]+/i)[0];
                        i(e(this), o, n);
                      }
                    });
                  }
                  function n(t) {
                    e.fn[t + "First"] = function () {
                      var i = e.makeArray(arguments).shift();
                      return (
                        i && (e.fn[t].apply(this, arguments), o(this, i)), this
                      );
                    };
                  }
                  var a = e.fn.jquery.split("."),
                    r = parseInt(a[0]),
                    s = parseInt(a[1]),
                    d = 1 > r || (1 == r && 7 > s);
                  n("bind"),
                    n("one"),
                    (e.fn.delegateFirst = function () {
                      var t = e.makeArray(arguments),
                        i = t[1];
                      return (
                        i &&
                          (t.splice(0, 2),
                          e.fn.delegate.apply(this, arguments),
                          o(this, i, !0)),
                        this
                      );
                    }),
                    (e.fn.liveFirst = function () {
                      var t = e.makeArray(arguments);
                      return (
                        t.unshift(this.selector),
                        e.fn.delegateFirst.apply(e(document), t),
                        this
                      );
                    }),
                    d ||
                      (e.fn.onFirst = function (t, i) {
                        var n = e(this),
                          a = "string" == typeof i;
                        if ((e.fn.on.apply(n, arguments), "object" == typeof t))
                          for (type in t)
                            t.hasOwnProperty(type) && o(n, type, a);
                        else "string" == typeof t && o(n, t, a);
                        return n;
                      });
                })(jQuery),
                w(window.jQuery.fn.jquery, "1.7")
                  ? o.onFirst("submit", p)
                  : w(window.jQuery.fn.jquery, "1.3") &&
                    o.liveFirst("submit", p))
              : hj.hq(o).on("submit", p)
            : hj.log.debug(
                'Could not find form with selector "' + e.selector + '".',
                "forms"
              );
        }, "forms")),
        (hj.forms = hj.tryCatch(function () {
          var t = {
            cmdFormSubmitSuccessful: function () {
              null !== e && _(e, !0, !1);
            },
            cmdFormSubmitFailed: function () {
              null !== e && _(e, !1, !1);
            },
          };
          return t;
        }, "forms")()),
        (t.run = hj.tryCatch(function (t) {
          var i = h();
          hj.includedInSample &&
            (r(t),
            (e || i) &&
              ((o = c()),
              hj.eventStream
                .write({ form_id: e.id, form_event: "form_helo" })
                .flush(),
              i
                ? u()
                : e &&
                  (n("focus", ["*"], ["checkbox", "radio"], g),
                  n("blur", ["*"], ["checkbox", "radio"], m),
                  n("change", ["checkbox"], [], b),
                  n("focus", ["radio"], [], f),
                  v())));
        }, "forms")),
        t)
      );
    }, "forms")();
  },
  function (e, t, i) {
    hj.tryCatch(function () {
      hj.loader.registerModule(
        "HeatmapScreenshotter",
        (function () {
          var e,
            t = {},
            o =
              "https://help.hotjar.com/hc/en-us/requests/new?ticket_form_id=360000396054",
            n = [
              '<div id="_hj_heatmap_screenshotter_container">',
              hj.widget.commonCSS,
              '<style type="text/css">                    /* Camera icon */                    .<%=p%>_widget .<%=p%>_icon_camera {                        position: relative;                        width: 75px;                        height: 75px;                        background-image: url(data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMzIgMjgiPjxkZWZzPjxmaWx0ZXIgaWQ9ImZpbHRlci0xIiB4PSItMTIuMSIgeT0iLTExLjYiIHdpZHRoPSIxMjQuMyIgaGVpZ2h0PSIxMjMuMSIgbmFtZT0iZmlsdGVyLTEiPjxmZU9mZnNldCByZXN1bHQ9InNoYWRvd09mZnNldE91dGVyMSIgZHk9IjE2IiBpbj0iU291cmNlQWxwaGEiLz48ZmVHYXVzc2lhbkJsdXIgcmVzdWx0PSJzaGFkb3dCbHVyT3V0ZXIxIiBzdGREZXZpYXRpb249IjE2IiBpbj0ic2hhZG93T2Zmc2V0T3V0ZXIxIi8+PGZlQ29sb3JNYXRyaXggcmVzdWx0PSJzaGFkb3dNYXRyaXhPdXRlcjEiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC40IDAiIGluPSJzaGFkb3dCbHVyT3V0ZXIxIi8+PGZlTWVyZ2U+PGZlTWVyZ2VOb2RlIGluPSJzaGFkb3dNYXRyaXhPdXRlcjEiLz48ZmVNZXJnZU5vZGUgaW49IlNvdXJjZUdyYXBoaWMiLz48L2ZlTWVyZ2U+PC9maWx0ZXI+PC9kZWZzPjx0aXRsZT5jYW1lcmEyPC90aXRsZT48ZyBpZD0icmV0YWtlX2hlYXRtYXAiIGRhdGEtbmFtZT0icmV0YWtlIGhlYXRtYXAiPjxnIGlkPSJyZXRha2VfaGVhdG1hcC5BLmNsaWVudC4xIiBkYXRhLW5hbWU9InJldGFrZSBoZWF0bWFwLkEuY2xpZW50LjEiPjxnIHN0eWxlPSJmaWx0ZXI6dXJsKCNmaWx0ZXItMSkiPjxnIGlkPSJDb250ZW50Ij48ZyBpZD0iR3JvdXAiPjxnIGlkPSJDYW1lcmEtSWNvbiI+PGcgaWQ9Il8tSWNvbiIgZGF0YS1uYW1lPSLimpnvuI8tSWNvbiI+PGcgaWQ9Il8yLV8tQnVkaWNvbi1fLXRvb2wtXy1jYW1lcmEiIGRhdGEtbmFtZT0iMi0tQnVkaWNvbi0vLXRvb2wtLy1jYW1lcmEiPjxwYXRoIGlkPSJwYXRoLTIiIGQ9Ik0zMCw0SDI1TDI0LDJzLS44OS0yLTItMkgxMEM4LjksMCw4LDIsOCwyTDcsNEgyQTIsMiwwLDAsMCwwLDZWMjZhMiwyLDAsMCwwLDIsMkgzMGEyLDIsMCwwLDAsMi0yVjZBMiwyLDAsMCwwLDMwLDRabTAsMjFhMSwxLDAsMCwxLTEsMUgzYTEsMSwwLDAsMS0xLTFWN0ExLDEsMCwwLDEsMyw2SDguMDZDOCw1LjkyLDkuNiwzLjI1LDkuNiwzLjI1UzEwLjMyLDIsMTEuMiwyaDkuNmMuODgsMCwxLjYsMS4yNSwxLjYsMS4yNVMyNCw1LjkyLDIzLjkzLDZIMjlhMSwxLDAsMCwxLDEsMVpNMTYsOGE4LDgsMCwxLDAsOCw4QTgsOCwwLDAsMCwxNiw4Wm0wLDE0YTYsNiwwLDEsMSw2LTZBNiw2LDAsMCwxLDE2LDIyWiIgc3R5bGU9ImZpbGw6I2ZmZiIvPjwvZz48L2c+PC9nPjwvZz48L2c+PC9nPjwvZz48L2c+PC9zdmc+);                        background-repeat: no-repeat;                        background-position: center 18px;                        color: <%= widgetStyle.selectionColor %>;                        margin: 0;                        background-size: 40px;                        background-color: #f4364c;                        border-radius: 50%;                        box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.5);                        cursor: pointer;                        -webkit-transition: all .2s ease-in-out;                        -moz-transition: all .2s ease-in-out;                        -o-transition: all .2s ease-in-out;                        -ms-transition: all .2s ease-in-out;                        transition: all .2s ease-in-out;                    }                    .<%=p%>_widget .<%=p%>_icon_camera.<%=p%>_sending .<%=p%>_camera_spinner {                        display: inline-block !important;                    }                    .<%=p%>_widget .<%=p%>_icon_camera .<%=p%>_camera_spinner {                        width: 32px;                        height: 32px;                        margin: 6px auto;                        border: 1px solid rgba(0,0,0,.6);                        border-top-color: transparent !important;                        border-radius: 50%;                        transform: rotate(0deg);                        animation: <%=p%>spin .4s linear infinite, <%=p%>colors 5.6s ease-in-out infinite;                        left: 21px;                        top: 15px;                        position: absolute;                        display: none !important;                    }                    @keyframes <%=p%>spin {                        0% {                            transform: rotate(0deg);                        }                        100% {                            transform: rotate(360deg);                        }                    }                    @-webkit-keyframes <%=p%>colors {                        0% {                            border-color: #f4364c;                            border-top-color: transparent;                        }                        25% {                            border-color: #00a2f2;                            border-top-color: transparent;                        }                        50% {                            border-color: #efb60c;                            border-top-color: transparent;                        }                        75% {                            border-color: #42ca49;                            border-top-color: transparent;                        }                        100% {                            border-color: #f4364c;                            border-top-color: transparent;                        }                    }                    .<%=p%>_widget .<%=p%>_icon_camera:hover {                        background-color: #d5354b;                    }                    .<%=p%>_widget .<%=p%>_icon_camera.<%=p%>_sending,                    .<%=p%>_widget .<%=p%>_icon_camera.<%=p%>_failure,                    .<%=p%>_widget .<%=p%>_icon_camera.<%=p%>_success {                        cursor: default;                    }                    .<%=p%>_widget .<%=p%>_icon_camera.<%=p%>_sending {                        background-color: #d9d9d9;                        background-image: none;                    }                    .<%=p%>_widget .<%=p%>_icon_camera.<%=p%>_failure {                        background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIxNnB4IiBoZWlnaHQ9IjE2cHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4gICAgICAgIDx0aXRsZT4xLfCflKUgSW5zaWdodHMgLyAxLVVJIC8gYWxlcnQ8L3RpdGxlPiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4gICAgPGcgaWQ9IjEt8J+UpS1JbnNpZ2h0cy0vLTEtVUktLy1hbGVydCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+ICAgICAgICA8cGF0aCBkPSJNOS45MzgsMy4zODUgTDguNTM5NSwxMC41NTc1IEw3LjMwOSwxMC41NTc1IEw1LjkxMDUsMy40Nzk1IEM1Ljg5NjUsMy40MTY1IDUuODgyNSwzLjMzOTUgNS44Njg1LDMuMjQ4IEM1Ljc5MTUsMi44Mjc1IDUuNzUzLDIuNTU3NSA1Ljc1MywyLjQzOCBDNS43NTMsMS44ODQgNS45NTEsMS40MzcgNi4zNDcsMS4wOTcgQzYuNzQzLDAuNzU3IDcuMjYzNSwwLjU4NyA3LjkwODUsMC41ODcgQzguNTUzNSwwLjU4NyA5LjA3NCwwLjc1OSA5LjQ3LDEuMTAyNSBDOS44NjYsMS40NDYgMTAuMDY0LDEuODkxNSAxMC4wNjQsMi40MzggQzEwLjA2NCwyLjUzNiAxMC4wNTM1LDIuNjY2IDEwLjAzMjUsMi44MjcgQzEwLjAxMTUsMi45ODggOS45OCwzLjE3NCA5LjkzOCwzLjM4NDUgTDkuOTM4LDMuMzg0NSBMOS45MzgsMy4zODUgWiBNNy44ODcsMTEuNDIgQzguNDU1LDExLjQyIDguOTQyLDExLjYyMTUgOS4zNDksMTIuMDI0NSBDOS43NTYsMTIuNDI3NSA5Ljk1OSwxMi45MTY1IDkuOTU5LDEzLjQ5MTUgQzkuOTU5LDE0LjA0NTUgOS43NTU1LDE0LjUyMDUgOS4zNDksMTQuOTE2NSBDOC45NDI1LDE1LjMxMjUgOC40NTUsMTUuNTEwNSA3Ljg4NywxNS41MTA1IEM3LjMzMywxNS41MTA1IDYuODU4LDE1LjMxNCA2LjQ2MiwxNC45MjE1IEM2LjA2NiwxNC41MjkgNS44NjgsMTQuMDUyIDUuODY4LDEzLjQ5MSBDNS44NjgsMTIuOTA5IDYuMDY0NSwxMi40MTg1IDYuNDU3LDEyLjAxODUgQzYuODQ5NSwxMS42MTg1IDcuMzI2NSwxMS40MTkgNy44ODc1LDExLjQxOSBMNy44ODc1LDExLjQxOSBMNy44ODcsMTEuNDIgWiIgZmlsbD0iI0ZGRkZGRiIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+ICAgIDwvZz48L3N2Zz4=);                        background-position-y: 22px;                        background-size: 32px;                        background-color: #d52415;                    }                    .<%=p%>_widget .<%=p%>_icon_camera.<%=p%>_success {                        background-image: url(data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyOC42MyAyMS4yMSI+PHRpdGxlPmNoZWNrLTI8L3RpdGxlPjxwYXRoIGQ9Ik0yMy4wOS41QTEuNzYsMS43NiwwLDAsMSwyNC4zNSwwLDEuNzQsMS43NCwwLDAsMSwyNS42LjVsMi41MiwyLjQzYTEuNjMsMS42MywwLDAsMSwuNTEsMS4yMSwxLjY1LDEuNjUsMCwwLDEtLjUxLDEuMjJMMTIuMjMsMjAuNzFhMS43MiwxLjcyLDAsMCwxLTEuMjYuNSwxLjcsMS43LDAsMCwxLTEuMjUtLjVMLjUyLDExLjgyQTEuNiwxLjYsMCwwLDEsMCwxMC42MSwxLjYzLDEuNjMsMCwwLDEsLjUyLDkuMzlMMyw3YTEuNzQsMS43NCwwLDAsMSwxLjI2LS41QTEuNzQsMS43NCwwLDAsMSw1LjU0LDdMMTEsMTIuMjNaIiBzdHlsZT0iZmlsbDojZmZmIi8+PC9zdmc+);                        background-position-y: 22px;                        background-color: #42ca49;                    }                    .<%=p%>_heatmap_screenshotter_overlay {                        position: fixed;                        width: 100%;                        height: 100%;                        top: 0;                        left: 0;                        right: 0;                        bottom: 0;                        background-color: rgba(0,0,0,0.3);                        z-index: 2147483630;                    }                                        .<%=p%>_widget p {                        display: block !important;                    }                    /*******************                     * FLASH CONTAINER                    ********************/                    @keyframes <%=p%>flash {                        0%, 100% {                            opacity: 0;                        }                        5% {                            opacity: 1;                        }                    }                    #<%=p%>_heatmap_screenshotter_flash {                        position: fixed;                        top: 0;                        left: 0;                        bottom: 0;                        right: 0;                        opacity: 0;                        background-color: #fff;                        visibility: hidden;                        pointer-events: none;                    }                    #<%=p%>_heatmap_screenshotter_flash.<%=p%>_flash {                        animation: <%=p%>flash 1.5s ease-out;                        visibility: visible;                    }                                        /*******************                     * MAIN CONTAINER                    ********************/                    #<%=p%>_heatmap_screenshotter_container {                        bottom: 0;                        left: 50%;                    }                    #<%=p%>_heatmap_screenshotter {                        left: -37px;                        top: -10px;                        position: relative;                    }                                        #<%=p%>_heatmap_screenshotter.<%=p%>_widget.<%=p%>_rtl {                        direction: ltr !important;                    }                                        #<%=p%>_heatmap_screenshotter[data-minimized-position="bottom_left"],                    #<%=p%>_heatmap_screenshotter[data-minimized-position="middle_left"] {                        bottom: 0;                        left: 0;                        right: auto;                    }                                        /*******************                     * BODY                    ********************/                    body.<%=p%>_heatmap_screenshotter_target {                        width: 100%;                        height: 100%;                        margin: 0;                        padding: 0;                        border: 5px solid #F4364C !important;                        display: block;                        box-sizing: border-box;                    }                    body.<%=p%>_heatmap_screenshotter_target_captured {                        width: 100%;                        height: 100%;                        margin: 0;                        padding: 0;                        border: 5px solid #42CA49 !important;                        display: block;                        box-sizing: border-box;                    }                    /*******************                     * MESSAGE CONTAINER                    ********************/                    #<%=p%>_heatmap_screenshotter_message {                        display: flex;                        flex-direction: column;                        left: -178px;                        position: relative;                        top: -50px;                        background: #FFFFFF;                        border-radius: 4px 4px 4px 4px;                        border: 1px solid #EAEAEB;                        box-shadow: 0 4px 30px 0 rgba(0, 0, 0, 0.2);                        width: 360px;                        color: #3C3C3C;                        font-family: Arial, sans-serif, Tahoma !important;                        -webkit-transition: all .2s ease-in-out;                        -moz-transition: all .2s ease-in-out;                        -o-transition: all .2s ease-in-out;                        -ms-transition: all .2s ease-in-out;                        transition: all .2s ease-in-out;                    }                    #<%=p%>_heatmap_screenshotter_message.hide {                        opacity: 0;                        transform: scale(.7);                    }                    #<%=p%>_heatmap_screenshotter_message:after {                        border-top: 15px solid white;                        position: absolute;                        bottom:-15px;                        left: 50%;                        margin-left: -15px;                        display: inline-block;                        border-right: 15px solid transparent;                        border-left: 15px solid transparent;                        content: "";                        box-sizing: border-box;                    }                                        #<%=p%>_heatmap_screenshotter_message .<%=p%>_message_title {                        height: 68px;                        border-bottom: 1px solid #eaeaeb;                        background: url(' +
                i(47) +
                ") no-repeat transparent;                        background-size: 50px;                        background-position: 8% 50%;                    }                                        #<%=p%>_heatmap_screenshotter_message .<%=p%>_retaker_message_body {                        display: flex;                        flex-direction: row;                        height: 75%;                        padding: 20px 25px 25px 25px;                    }                    #<%=p%>_heatmap_screenshotter_message .<%=p%>_retaker_message_body .<%=p%>_message_scroll_icon {                        background-image: url(" +
                i(48) +
                ");                        background-repeat: no-repeat;                        background-position: 10% 30%;                        width: 15%;                    }                                        #<%=p%>_heatmap_screenshotter_message .<%=p%>_retaker_message_body .<%=p%>_retaker_message_content_section {                        font-family: Arial, sans-serif, Tahoma !important;                    }                                        #<%=p%>_heatmap_screenshotter_message .<%=p%>_retaker_message_body .<%=p%>_retaker_message_content_section > p {                        color: #3C3C3C !important;                    }                                        #<%=p%>_heatmap_screenshotter_message .<%=p%>_retaker_message_body .<%=p%>_retaker_message_content_section .<%=p%>_message_body_header {                        font-size: 18px;                        font-weight: 600;                    }                                        #<%=p%>_heatmap_screenshotter_message .<%=p%>_retaker_message_body .<%=p%>_retaker_message_content_section .<%=p%>_message_body_paragraph {                        font-size: 14px;                        font-weight: normal;                        margin-top: 5px;                        line-height: 1.4;                    }                                        #<%=p%>_heatmap_screenshotter_message .<%=p%>_retaker_message_body .<%=p%>_close_button {                        position: relative;                        left: 50%;                        margin-top: 20px;                        margin-left: -58px;                        height: 40px;                        width: 116px;                        color: white;                        background-color: #42CA49;                        border-radius: 5px;                        text-align: center;                        font-size: 13px;                        font-weight: 600;                        border: none;                        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.15);                        cursor: pointer;                    }                    #<%=p%>_heatmap_screenshotter_message #<%=p%>_retaker_message_failure .<%=p%>_close_button {                        background-color: #666666;                    }                    .<%=p%>_widget a,                    .<%=p%>_widget a:hover,                    .<%=p%>_widget a:focus,                    .<%=p%>_widget a:active {                        text-decoration: underline !important;                        color: #d52415;                    }                    </style>",
              '<div id="<%=p%>_heatmap_screenshotter_container" class="<%=p%>_widget <%=p%>_<%= hj.widget.activeLanguageDirection %> <%=p%>_<%= heatmapScreenshotter.language %>"                      data-minimized-position="<%= heatmapScreenshotter.position %>">                    <div id="_hj-f5b2a1eb-9b07_retaker_content_dimmer" style=""></div>                                         <div id="<%=p%>_heatmap_screenshotter_message">                        <div class="<%=p%>_message_title">                        </div>                        <div id="<%=p%>_retaker_message_tip" class="<%=p%>_retaker_message_body">                            <div class="<%=p%>_message_scroll_icon">                            </div>                            <div class="<%=p%>_retaker_message_content_section">                                <p class="<%=p%>_message_body_header">                                    Before taking the screenshot!                                </p>                                <p class="<%=p%>_message_body_paragraph">                                    Scroll down to check the page is fully loaded.                                </p>                            </div>                        </div>                        <div id="<%=p%>_retaker_message_success" class="<%=p%>_retaker_message_body" style="display: none;">                            <div class="<%=p%>_retaker_message_content_section">                                <p class="<%=p%>_message_body_header">                                    All done here!                                </p>                                <p class="<%=p%>_message_body_paragraph">                                    We\'re processing the screenshot. You may close this window and return to Hotjar.                                </p>                                <button class="<%=p%>_close_button" onclick="window.close();">Close window</button>                            </div>                        </div>                        <div id="<%=p%>_retaker_message_failure" class="<%=p%>_retaker_message_body" style="display: none;">                            <div class="<%=p%>_retaker_message_content_section">                                <p class="<%=p%>_message_body_header">                                    Oops, something\'s not right...                                </p>                                <p class="<%=p%>_message_body_paragraph">                                    We couldn\'t take a screenshot of this page, sorry! Please close this window and try again. If it\'s still happening, <a href="<%=supportLink%>" target="_blank">contact support</a> and we can help out.                                </p>                                <button class="<%=p%>_close_button" onclick="window.close();">Close window</button>                            </div>                        </div>                    </div>                                        \x3c!-- Minimized State --\x3e                    <div id="<%=p%>_heatmap_screenshotter">                        <div class="<%=p%>_camera <%=p%>_icon <%=p%>_icon_camera <%=p%>_bottom_position_launcher">                            <div class="<%=p%>_camera_spinner"></div>                        </div>                    </div>                </div>                <div id="<%=p%>_heatmap_screenshotter_flash" class="<%=p%>_heatmap_screenshotter_flash"></div>                <div id="<%=p%>_heatmap_screenshotter_overlay" class="<%=p%>_heatmap_screenshotter_overlay"></div>',
            ].join(""),
            a = { SUCCESS: "success", FAILURE: "failure" };
          function r() {
            var t =
              hj.ui.getWindowSize().height > 100
                ? Math.round(hj.ui.getWindowSize().height / 2)
                : 300;
            hj.log.debug(
              "Rendering heatmap screenshotter widget.",
              "heatmap-screenshotter"
            ),
              hj.widget.setLanguage("en");
            var i,
              r,
              s,
              d,
              c,
              l,
              p,
              h,
              u,
              _,
              g,
              m,
              f,
              b,
              w,
              v = hj.rendering.renderTemplate(n, {
                apiUrlBase: new hj.rendering.TrustedString(hj.apiUrlBase),
                hjid: _hjSettings.hjid,
                cta: new hj.rendering.TrustedString(
                  hj.widget.ctaLinks.feedback
                ),
                p: hj.widget.widgetAttributePrefix,
                preview: hj.isPreview || !1,
                features: {
                  selectElement: !(
                    hj.utils.isSafari() && hj.widget.isPhoneOrTablet()
                  ),
                },
                heatmapScreenshotter: {
                  id: 1,
                  content: { thankyou: "Cheers!" },
                  position: "bottom_right",
                  language: "en",
                },
                supportLink: new hj.rendering.TrustedString(o),
                widgetStyle: {
                  accentColor: "#f4364c",
                  accentTextColor: "#ffffff",
                  backgroundColor: "#ffffff",
                  darkGrey: "#333333",
                  disabledColor: "#cccccc",
                  selectionColor: "#ffd902",
                  selectionTextColor: "#3c3c3c",
                  middlePositionPixels: t,
                },
              });
            v
              ? ((hj.widget.ctrl = hj.rendering.addToDom(
                  "_hj_heatmap_screenshotter_container",
                  v
                )),
                (i = hj.widget.ctrl.find(
                  "." + hj.widget.widgetAttributePrefix + "_camera"
                )),
                (r = hj.widget.ctrl.find(
                  "#" +
                    hj.widget.widgetAttributePrefix +
                    "_heatmap_screenshotter_message"
                )),
                (s = hj.hq(window).scrollTop()),
                (d = hj.hq("body")),
                (c = hj.hq(
                  "#" +
                    hj.widget.widgetAttributePrefix +
                    "_heatmap_screenshotter_overlay"
                )),
                (l = !1),
                (p = hj.tryCatch(function () {
                  hj.log.debug(
                    "Updating remoteStorage data.",
                    "heatmap-screenshotter"
                  ),
                    hj.remoteStorage.remove(
                      "screenshot_active_retake",
                      hj.settings.siteId
                    );
                }, "heatmap-screenshotter")),
                (h = hj.tryCatch(function () {
                  var t = e.retakes.length,
                    i = [],
                    o = function (e) {
                      e && i.push(e), n();
                    },
                    n = function () {
                      (t -= 1) ||
                        (hj.xcom.send("retakeSubmitted", []),
                        p(),
                        i.length ? w(a.FAILURE, i) : w(a.SUCCESS));
                    };
                  e.retakes.forEach(function (e) {
                    hj.log.debug(
                      "Sending heatmap screenshot retake for DPC ID " +
                        e.id +
                        " (" +
                        e.device +
                        ").",
                      "heatmap-screenshotter"
                    ),
                      hj.sendPageContent(e.id, e.token, l, o);
                  });
                }, "heatmap-screenshotter")),
                (u = hj.tryCatch(function () {
                  var e = hj.hq(
                    "#" +
                      hj.widget.widgetAttributePrefix +
                      "_heatmap_screenshotter_flash"
                  );
                  e.on(
                    "animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
                    function () {
                      e.removeClass(hj.widget.widgetAttributePrefix + "_flash"),
                        h();
                    }
                  ),
                    hj
                      .hq(
                        "#" +
                          hj.widget.widgetAttributePrefix +
                          "_heatmap_screenshotter_flash"
                      )
                      .addClass(hj.widget.widgetAttributePrefix + "_flash");
                }, "heatmap-screenshotter")),
                (_ = hj.tryCatch(function () {
                  f(), b(), u();
                }, "heatmap-screenshotter")),
                (g = hj.tryCatch(function () {
                  hj.hq(window).scrollTop() - s > 500 && (m(), (l = !0));
                }, "heatmap-screenshotter")),
                (m = hj.tryCatch(function e() {
                  r.addClass("hide"),
                    setTimeout(function () {
                      r.hide(), r.removeClass("hide");
                    }, 210),
                    hj.hq(window).off("scroll", g),
                    r.off("click", e);
                }, "heatmap-screenshotter")),
                (f = hj.tryCatch(function () {
                  d.removeClass(
                    hj.widget.widgetAttributePrefix +
                      "_heatmap_screenshotter_target"
                  ),
                    m(),
                    hj
                      .hq(
                        "#" +
                          hj.widget.widgetAttributePrefix +
                          "_retaker_message_tip"
                      )
                      .hide();
                }, "heatmap-screenshotter")),
                (b = hj.tryCatch(function () {
                  i.addClass(hj.widget.widgetAttributePrefix + "_sending"),
                    i.off("click", _);
                }, "heatmap-screenshotter")),
                (w = hj.tryCatch(function (e) {
                  i.removeClass(hj.widget.widgetAttributePrefix + "_sending"),
                    i.addClass(hj.widget.widgetAttributePrefix + "_" + e),
                    hj
                      .hq(
                        "#" +
                          hj.widget.widgetAttributePrefix +
                          "_retaker_message_" +
                          e
                      )
                      .show(),
                    r.show(),
                    r.off("click", m),
                    c.show(),
                    e === a.SUCCESS &&
                      d.addClass(
                        hj.widget.widgetAttributePrefix +
                          "_heatmap_screenshotter_target_captured"
                      );
                }, "heatmap-screenshotter")),
                d.addClass(
                  hj.widget.widgetAttributePrefix +
                    "_heatmap_screenshotter_target"
                ),
                c.hide(),
                i.on("click", _),
                r.on("click", m),
                hj.hq(window).on("scroll", g))
              : hj.log.debug(
                  "Heatmap screenshotter widget #" +
                    hj.widget.heatmapData.id +
                    " could not be rendered.",
                  "heatmap-screenshotter"
                );
          }
          return (
            (t.run = hj.tryCatch(function (i) {
              function o(o) {
                o &&
                  ((e = o),
                  hj.targeting.matchRules(
                    e.targeting,
                    i,
                    hj.tryCatch(function () {
                      var i;
                      (i = e),
                        hj.widget.addMatchingWidget(
                          "heatmapScreenshotter",
                          i.id,
                          Math.round(new Date().getTime() / 1e3),
                          function () {
                            hj.rendering.callAccordingToCondition(
                              { display_condition: "immediate" },
                              "heatmapScreenshotter",
                              hj.tryCatch(r, "heatmap-screenshotter")
                            );
                          },
                          t.remove
                        ),
                        hj.log.debug(
                          "Heatmap screenshotter widget enabled for heatmap #" +
                            i.id +
                            ".",
                          "heatmap-screenshotter"
                        );
                    }, "heatmap-screenshotter.run.matchRules-callback")
                  ));
              }
              hj.remoteStorage.get("screenshot_retake", function (e) {
                e
                  ? (hj.remoteStorage.remove("screenshot_retake"),
                    hj.remoteStorage.set("screenshot_active_retake", e, 60),
                    o(e))
                  : hj.remoteStorage.get("screenshot_active_retake", o);
              });
            }, "heatmap-screenshotter")),
            (t.remove = hj.tryCatch(function (e) {
              hj.widget.heatmapData
                ? (hj.hq(
                    "#" +
                      hj.widget.widgetAttributePrefix +
                      "_heatmap_screenshotter"
                  ).length > 0 &&
                    hj
                      .hq(
                        "#" +
                          hj.widget.widgetAttributePrefix +
                          "_heatmap_screenshotter"
                      )
                      .parent()
                      .remove(),
                  delete hj.widget.heatmapData,
                  setTimeout(function () {
                    e();
                  }, 1))
                : e();
            })),
            t
          );
        })(),
        !0
      );
    }, "heatmap-screenshotter")();
  },
  function (e, t, i) {
    e.exports = i.p + "logo.4c368f.png";
  },
  function (e, t, i) {
    e.exports = i.p + "mouse-scroll-down.f1d300.gif";
  },
  function (e, t) {
    hj.tryCatch(function () {
      "use strict";
      void 0 === hj.scriptLoaded &&
        ((hj._init = hj.tryCatch(function () {
          var e = {
            _determineIncludedInSample: function () {
              var e = new hj.fingerprinter(),
                t = hj.url.getParameter("hjIncludeInSample"),
                i = hj.cookie.get("_hjIncludedInSample");
              if (i)
                (hj.includedInSample = "1" === i),
                  hj.log.debug("User is included in sample", "init");
              else
                switch (t) {
                  case "0":
                    (hj.includedInSample = !1),
                      hj.log.debug(
                        "You have set includedInSample to false.",
                        "init"
                      );
                    break;
                  case "1":
                    (hj.includedInSample = !0),
                      hj.cookie.set(
                        "_hjIncludedInSample",
                        hj.includedInSample ? "1" : "0",
                        0
                      ),
                      hj.log.debug(
                        "You have set includedInSample to true.",
                        "init"
                      );
                    break;
                  default:
                    (hj.includedInSample = e.compareRatio(hj.settings.r || 1)),
                      hj.includedInSample &&
                        hj.cookie.set("_hjIncludedInSample", "1", 0),
                      hj.log.debug(
                        "Included in sample: " + hj.includedInSample,
                        "init",
                        { r: hj.settings.r, fingerprintValue: e.getAsNumber() }
                      );
                }
            },
            _verifyInstallation: function () {
              var e,
                t,
                i = hj.url.getParameter("hjVerifyInstall");
              try {
                e = sessionStorage.getItem("hjVerifyInstall");
              } catch (e) {}
              if (i || e) {
                hj.verifyInstall = parseInt(i || e);
                try {
                  sessionStorage.setItem("hjVerifyInstall", i || e);
                } catch (e) {}
                if (
                  (hj.includedInSample || hj.visitData.track(),
                  window.hjBootstrapCalled &&
                    window.hjBootstrapCalled.length > 1)
                ) {
                  var o,
                    n = window.hjBootstrapCalled.filter(function (e, t, i) {
                      return i.indexOf(e) === t;
                    }),
                    a =
                      "You have " +
                      window.hjBootstrapCalled.length +
                      " tracking scripts installed on your site. ",
                    r =
                      2 === window.hjBootstrapCalled.length
                        ? "script as this"
                        : "scripts as these",
                    s = !!window.dataLayer;
                  n.length > 1
                    ? ((o =
                        a +
                        "Please remove the duplicate " +
                        r +
                        " will cause issues."),
                      hj.notification.show(
                        "Multiple different Hotjar scripts detected",
                        o,
                        "bad"
                      ))
                    : s
                    ? ((o =
                        a +
                        "If you've installed Hotjar through GTM - please remove the duplicate " +
                        r +
                        " will cause issues."),
                      hj.notification.show(
                        "Multiple Hotjar scripts detected",
                        o,
                        "bad"
                      ))
                    : ((o =
                        a +
                        "This will not affect data collection, but we do suggest removing redundant scripts."),
                      hj.notification.show(
                        "Multiple Hotjar scripts detected",
                        o,
                        "warning"
                      )),
                    (t =
                      "Passed Site ID: " +
                      hj.verifyInstall +
                      " contains multiple scripts " +
                      window.hjBootstrapCalled.join(", ")),
                    hj.exceptions.log({ message: t, stacktrace: "" });
                } else
                  hj.verifyInstall === hjSiteSettings.site_id
                    ? (hj.notification.show(
                        "Hotjar installation verified",
                        "The Hotjar tracking code has been properly installed on this page. Browse your site in this window if you wish to verify installation on any other pages.",
                        "good"
                      ),
                      hj.xcom.send("scriptActive", []))
                    : (hj.notification.show(
                        "Hotjar installation invalid",
                        "The tracking code you are trying to verify does not match the one installed on this page. Please make sure you install the correct tracking code provided for this site.",
                        "bad"
                      ),
                      (t =
                        "Passed Site ID: " +
                        hj.verifyInstall +
                        " != Configured Site " +
                        hjSiteSettings.site_id),
                      hj.exceptions.log({ message: t, stacktrace: "" }));
              }
            },
          };
          return (
            (e._browserIsSupported = hj.tryCatch(function () {
              return (
                !(hj.utils.ieVersion() < 11) ||
                (hj.log.debug("IE < 11 is not supported.", "init"),
                "1" === hj.url.getParameter("hjVerifyInstallation") &&
                  hj.notification.show(
                    "Hotjar installation cannot be verified.",
                    "Sorry – your browser is not supported.",
                    "bad"
                  ),
                !1)
              );
            }, "init")),
            (e._checkDebug = hj.tryCatch(function () {
              var e = hj.url.getParameter("hjDebug");
              e &&
                ("1" === e || "true" === e ? hj.debug.on(!0) : hj.debug.off()),
                "true" === hj.cookie.get("hjDebug") && hj.debug.on(!1);
            }, "init")),
            (e._canUseCookies = hj.tryCatch(function () {
              return (
                !!navigator.cookieEnabled &&
                "cookie" in document &&
                (document.cookie.length > 0 ||
                  ((document.cookie = "_hjCookieTest"),
                  document.cookie.indexOf("_hjCookieTest") > -1 &&
                    ((document.cookie =
                      "_hjCookieTest; expires=Thu, 01 Jan 1970 00:00:01 GMT;"),
                    !0)))
              );
            }, "init")),
            (e._canUseLocalStorage = hj.tryCatch(function () {
              try {
                localStorage.setItem("_hjLocalStorageTest", 1),
                  localStorage.removeItem("_hjLocalStorageTest");
              } catch (e) {
                return !1;
              }
              return !0;
            }, "init")),
            (e._canUseSessionStorage = hj.tryCatch(function () {
              try {
                sessionStorage.setItem("_hjSessionStorageTest", 1),
                  sessionStorage.removeItem("_hjSessionStorageTest");
              } catch (e) {
                return !1;
              }
              return !0;
            }, "init")),
            (e._canRun = hj.tryCatch(function () {
              return (
                -1 === navigator.userAgent.indexOf("Hotjar") &&
                (e._canUseCookies()
                  ? e._canUseLocalStorage()
                    ? !!e._canUseSessionStorage() ||
                      (hj.log.debug("sessionStorage is not available", "init"),
                      !1)
                    : (hj.log.debug("localStorage is not available", "init"),
                      !1)
                  : (hj.log.debug("Cookies are not enabled"), !1))
              );
            }, "init")),
            (e._configureStateChangeListenMode = function () {
              var e = "manual";
              hj.settings &&
                hj.settings.state_change_listen_mode &&
                (e = hj.settings.state_change_listen_mode),
                hj.locationListener.setMode(e);
            }),
            (e.run = hj.tryCatch(function (t) {
              (hj.currentUrl = t),
                (hj.scriptLoaded = !0),
                e._browserIsSupported() &&
                  (e._checkDebug(),
                  e._canRun()
                    ? hj.remoteStorage.get("_hjOptOut", function (i) {
                        e._run(t, i);
                      })
                    : hj._init._verifyInstallation());
            }, "init")),
            (e._run = hj.tryCatch(function (t, i) {
              ("true" !== i &&
                "1" !== navigator.doNotTrack &&
                "1" !== window.doNotTrack &&
                "1" !== navigator.msDoNotTrack) ||
                (hj.log.debug("Visitor has opted out of tracking.", "init"),
                (hj.optOut = !0)),
                hj.loader.loadSettings(function (i) {
                  (hj.settings = i || {}),
                    hj.log.debug("Site settings", "init", hj.settings),
                    e._determineIncludedInSample(),
                    e._configureStateChangeListenMode(),
                    hj.loader.loadScripts(
                      [],
                      hj.tryCatch(function () {
                        e._runPage(t),
                          e._verifyInstallation(),
                          hj.command.activate(),
                          "1" === hj.url.getParameter("hjIncludeInSample") &&
                            hj.notification.show(
                              "Hotjar tracking active.",
                              "Hotjar tracking is active for your session.",
                              "good"
                            );
                      }, "init.run")
                    );
                });
            }, "init")),
            (e.reinit = hj.tryCatch(function (t) {
              (hj.currentUrl = t),
                hj.widgetDelay.clear(),
                hj.disableHeatmap(),
                hj.widget.emptyMatchingWidgets(),
                e._runPage(t);
            }, "init")),
            (e._runPage = hj.tryCatch(function (e) {
              hj.optOut ||
                (hj.includedInSample && hj.visitData.track(e),
                hj.visitData.trackView()),
                hj.hq.each(hj.loader.getModules(), function (t, i) {
                  (hj.optOut && !i.nonTracking) ||
                    (hj.log.debug("Running module", "init", i.name),
                    i.module.run(e));
                }),
                hj.widget.runLatestMatchingWidget();
            }, "init")),
            e
          );
        }, "init")()),
        hj.hq(document).ready(function () {
          hj.log.debug("Document is ready. Initializing...", "init"),
            (hj.scriptContextId = hj.utils.uuid4()),
            hj._init.run(location.href);
        }));
    }, "init")();
  },
]);
//# sourceMappingURL=modules.f4171032890e6f47e76e.js.map
