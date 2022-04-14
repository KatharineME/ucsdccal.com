window.hjSiteSettings = window.hjSiteSettings || {
  features: [],
  site_id: 864760,
  integrations: { optimizely: { tag_recordings: false } },
  privacy_policy_url: null,
  deferred_page_contents: [],
  surveys: [],
  feedback_widgets: [],
  anonymize_digits: true,
  forms: [],
  state_change_listen_mode: "automatic",
  testers_widgets: [],
  legal_name: null,
  recording_capture_keystrokes: true,
  rec_value: 1.0,
  suppress_text: null,
  suppress_location: false,
  record_targeting_rules: [],
  heatmaps: [],
  polls: [],
  record: false,
  r: 0.0506893755,
  suppress_all: false,
  anonymize_emails: true,
};

!(function (e) {
  var t = {};
  function n(o) {
    if (t[o]) return t[o].exports;
    var r = (t[o] = { i: o, l: !1, exports: {} });
    return e[o].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, o) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var o = Object.create(null);
      if (
        (n.r(o),
        Object.defineProperty(o, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var r in e)
          n.d(
            o,
            r,
            function (t) {
              return e[t];
            }.bind(null, r)
          );
      return o;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 50));
})({
  50: function (e, t, n) {
    (window.hjBootstrap =
      window.hjBootstrap ||
      function (e, t, n) {
        var o = window.navigator || { userAgent: "unknown" },
          r = o.userAgent ? o.userAgent : "unknown";
        if (/bot|google|baidu|bing|msn|duckduckbot|teoma|slurp|yandex/i.test(r))
          console.warn("Hotjar not launching due to suspicious userAgent:", r);
        else {
          var i = function (e, t, n) {
            (window.hjBootstrapCalled = (window.hjBootstrapCalled || []).concat(
              n
            )),
              window.hj &&
                window.hj._init &&
                window.hj._init._verifyInstallation &&
                hj._init._verifyInstallation();
          };
          i(0, 0, n);
          var a,
            d,
            s,
            u,
            l = window.document,
            c = l.head || l.getElementsByTagName("head")[0];
          l.addEventListener &&
            ((hj.scriptDomain = e),
            ((a = l.createElement("script")).async = 1),
            (a.src = hj.scriptDomain + t),
            c.appendChild(a),
            (u = [
              "iframe#_hjRemoteVarsFrame {",
              "display: none !important; width: 1px !important; height: 1px !important; opacity: 0 !important; pointer-events: none !important;",
              "}",
            ]),
            ((d = l.createElement("style")).type = "text/css"),
            d.styleSheet
              ? (d.styleSheet.cssText = u.join(""))
              : d.appendChild(l.createTextNode(u.join(""))),
            c.appendChild(d),
            ((s = l.createElement("iframe")).style.cssText = u[1]),
            (s.name = "_hjRemoteVarsFrame"),
            (s.title = "_hjRemoteVarsFrame"),
            (s.id = "_hjRemoteVarsFrame"),
            (s.src =
              "https://" +
              (window._hjSettings.varsHost || "vars.hotjar.com") +
              "/box-90f3a29ef7448451db5af955688970d7.html"),
            (s.onload = function () {
              (i.varsLoaded = !0),
                "undefined" != typeof hj &&
                  hj.event &&
                  hj.event.signal("varsLoaded");
            }),
            (i.varsJar = s),
            "interactive" === l.readyState ||
            "complete" === l.readyState ||
            "loaded" === l.readyState
              ? p()
              : l.addEventListener("DOMContentLoaded", p),
            (i.revision = "b2776649993c"),
            (window.hjBootstrap = i));
        }
        function p() {
          setTimeout(function () {
            l.body.appendChild(s);
          }, 50);
        }
      }),
      window.hjBootstrap(
        "https://script.hotjar.com/",
        "modules.f4171032890e6f47e76e.js",
        "864760"
      );
  },
});
//# sourceMappingURL=hotjar.js.map
