!(function (n) {
  function a(t) {
    if (r[t]) return r[t].exports;
    var e = (r[t] = { exports: {}, id: t, loaded: !1 });
    return n[t].call(e.exports, e, e.exports, a), (e.loaded = !0), e.exports;
  }
  var r = {};
  (a.m = n), (a.c = r), (a.p = ""), a(0);
})([
  function (t, e, n) {
    "use strict";
    function a(t) {
      var e = [
          "#626be0",
          "#e06277",
          "#b467da",
          "#e09862",
          "#1abc9c",
          "#f44336",
          "#3498db",
          "#673ab7",
          "#34495e",
          "#8bc24a",
          "#27ae60",
          "#2980b9",
          "#8e44ad",
          "#6c3244",
          "#f1c40f",
          "#2266e6",
          "#e74c3c",
          "#50e3c2",
          "#4498ae",
          "#f39c12",
          "#2c5e1c",
          "#ea1e63",
          "#62b6e0",
          "#484d9c",
        ],
        n = c(
          (t.getAttribute("data-fulltitle") || "").replace(
            /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi,
            ""
          )
        );
      "" == n && (n = c(t.getAttribute("data-fulltitle") || ""));
      var a = "";
      if (n) {
        var r = n.split(" "),
          i = r[0][0];
        if (
          ((a = d(i) ? i.toUpperCase() : i), 1 < r.length && r[r.length - 1][0])
        ) {
          var o = r[r.length - 1][0];
          a += d(o) ? o.toUpperCase() : o;
        }
        t.setAttribute("data-avatar", a);
      } else
        (a = t.getAttribute("data-avatar")),
          t.setAttribute("data-avatar", a || "");
      if ((a = t.getAttribute("data-avatar"))) {
        var s = Math.abs(a[0].charCodeAt() - 64),
          l = s * (1 < a.length ? Math.abs(a[1].charCodeAt() - 64) : 0) + s;
        t.setAttribute("style", "background-color:" + e[l % e.length]);
      }
    }
    function c(t) {
      return "string" == typeof t && t && t.length
        ? t.replace(/^\s+|\s+$|\s+(?=\s)/g, "")
        : "";
    }
    n(4);
    var r = function (t) {
        "nodeInserted" == t.animationName && a(t.target);
      },
      d = function (t) {
        return 1 === t.length && /[a-z]/i.test(t);
      };
    (window.rerenderAvatar = function () {
      var t = document.querySelectorAll("[data-avatar]");
      [].slice.call(t).forEach(function (t) {
        return a(t);
      });
    }),
      document.addEventListener("animationstart", r, !1),
      document.addEventListener("MSAnimationStart", r, !1),
      document.addEventListener("webkitAnimationStart", r, !1);
  },
  function (t, e, n) {
    (t.exports = n(2)()).push([
      t.id,
      "@-webkit-keyframes nodeInserted{0%{opacity:.99}to{opacity:1}}@keyframes nodeInserted{0%{opacity:.99}to{opacity:1}}[data-avatar],[data-fulltitle]{-webkit-animation-duration:1ms;animation-duration:1ms;-webkit-animation-name:nodeInserted;animation-name:nodeInserted}[data-avatar]{width:164px;height:164px;display:inline-block;position:relative;font-size:100%;line-height:0;overflow:hidden}[data-avatar] img{position:relative;width:100%;height:100%;display:none}[data-avatar] img[src]{display:inline-block}[data-avatar]:before{position:absolute;left:0;right:0;top:0;bottom:0;display:block;text-align:center;content:attr(data-avatar);font-size:72px;font-family:Open Sans,Helvetica Neue,Arial,Tahoma;color:#fff;margin-top:50%;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:auto}",
      "",
    ]);
  },
  function (t, e) {
    t.exports = function () {
      var o = [];
      return (
        (o.toString = function () {
          for (var t = [], e = 0; e < this.length; e++) {
            var n = this[e];
            n[2] ? t.push("@media " + n[2] + "{" + n[1] + "}") : t.push(n[1]);
          }
          return t.join("");
        }),
        (o.i = function (t, e) {
          "string" == typeof t && (t = [[null, t, ""]]);
          for (var n = {}, a = 0; a < this.length; a++) {
            var r = this[a][0];
            "number" == typeof r && (n[r] = !0);
          }
          for (a = 0; a < t.length; a++) {
            var i = t[a];
            ("number" == typeof i[0] && n[i[0]]) ||
              (e && !i[2]
                ? (i[2] = e)
                : e && (i[2] = "(" + i[2] + ") and (" + e + ")"),
              o.push(i));
          }
        }),
        o
      );
    };
  },
  function (t, e, n) {
    function l(t, e) {
      for (var n = 0; n < t.length; n++) {
        var a = t[n],
          r = h[a.id];
        if (r) {
          r.refs++;
          for (var i = 0; i < r.parts.length; i++) r.parts[i](a.parts[i]);
          for (; i < a.parts.length; i++) r.parts.push(s(a.parts[i], e));
        } else {
          var o = [];
          for (i = 0; i < a.parts.length; i++) o.push(s(a.parts[i], e));
          h[a.id] = { id: a.id, refs: 1, parts: o };
        }
      }
    }
    function c(t) {
      for (var e = [], n = {}, a = 0; a < t.length; a++) {
        var r = t[a],
          i = r[0],
          o = { css: r[1], media: r[2], sourceMap: r[3] };
        n[i] ? n[i].parts.push(o) : e.push((n[i] = { id: i, parts: [o] }));
      }
      return e;
    }
    function d(t, e) {
      var n = i(),
        a = o[o.length - 1];
      if ("top" === t.insertAt)
        a
          ? a.nextSibling
            ? n.insertBefore(e, a.nextSibling)
            : n.appendChild(e)
          : n.insertBefore(e, n.firstChild),
          o.push(e);
      else {
        if ("bottom" !== t.insertAt)
          throw new Error(
            "Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'."
          );
        n.appendChild(e);
      }
    }
    function f(t) {
      t.parentNode.removeChild(t);
      var e = o.indexOf(t);
      0 <= e && o.splice(e, 1);
    }
    function u(t) {
      var e = document.createElement("style");
      return (e.type = "text/css"), d(t, e), e;
    }
    function s(e, t) {
      var n, a, r, i, o;
      if (t.singleton) {
        var s = m++;
        (n = v || (v = u(t))),
          (a = p.bind(null, n, s, !1)),
          (r = p.bind(null, n, s, !0));
      } else
        r =
          e.sourceMap &&
          "function" == typeof URL &&
          "function" == typeof URL.createObjectURL &&
          "function" == typeof URL.revokeObjectURL &&
          "function" == typeof Blob &&
          "function" == typeof btoa
            ? ((i = t),
              ((o = document.createElement("link")).rel = "stylesheet"),
              d(i, o),
              (a = function (t, e) {
                var n = e.css,
                  a = e.sourceMap;
                a &&
                  (n +=
                    "\n/*# sourceMappingURL=data:application/json;base64," +
                    btoa(unescape(encodeURIComponent(JSON.stringify(a)))) +
                    " */");
                var r = new Blob([n], { type: "text/css" }),
                  i = t.href;
                (t.href = URL.createObjectURL(r)), i && URL.revokeObjectURL(i);
              }.bind(null, (n = o))),
              function () {
                f(n), n.href && URL.revokeObjectURL(n.href);
              })
            : ((n = u(t)),
              (a = function (t, e) {
                var n = e.css,
                  a = e.media;
                if ((a && t.setAttribute("media", a), t.styleSheet))
                  t.styleSheet.cssText = n;
                else {
                  for (; t.firstChild; ) t.removeChild(t.firstChild);
                  t.appendChild(document.createTextNode(n));
                }
              }.bind(null, n)),
              function () {
                f(n);
              });
      return (
        a(e),
        function (t) {
          if (t) {
            if (
              t.css === e.css &&
              t.media === e.media &&
              t.sourceMap === e.sourceMap
            )
              return;
            a((e = t));
          } else r();
        }
      );
    }
    function p(t, e, n, a) {
      var r = n ? "" : a.css;
      if (t.styleSheet) t.styleSheet.cssText = g(e, r);
      else {
        var i = document.createTextNode(r),
          o = t.childNodes;
        o[e] && t.removeChild(o[e]),
          o.length ? t.insertBefore(i, o[e]) : t.appendChild(i);
      }
    }
    var h = {},
      a = function (t) {
        var e;
        return function () {
          return void 0 === e && (e = t.apply(this, arguments)), e;
        };
      },
      r = a(function () {
        return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
      }),
      i = a(function () {
        return document.head || document.getElementsByTagName("head")[0];
      }),
      v = null,
      m = 0,
      o = [];
    t.exports = function (t, o) {
      void 0 === (o = o || {}).singleton && (o.singleton = r()),
        void 0 === o.insertAt && (o.insertAt = "bottom");
      var s = c(t);
      return (
        l(s, o),
        function (t) {
          for (var e = [], n = 0; n < s.length; n++) {
            var a = s[n];
            (r = h[a.id]).refs--, e.push(r);
          }
          t && l(c(t), o);
          for (n = 0; n < e.length; n++) {
            var r;
            if (0 === (r = e[n]).refs) {
              for (var i = 0; i < r.parts.length; i++) r.parts[i]();
              delete h[r.id];
            }
          }
        }
      );
    };
    var b,
      g =
        ((b = []),
        function (t, e) {
          return (b[t] = e), b.filter(Boolean).join("\n");
        });
  },
  function (t, e, n) {
    var a = n(1);
    "string" == typeof a && (a = [[t.id, a, ""]]),
      n(3)(a, {}),
      a.locals && (t.exports = a.locals);
  },
]);
