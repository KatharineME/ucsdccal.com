var _paq = _paq || [],
  CWApiHandler = CWApiHandler || {
    loadConfig: function (c) {
      CWApiHandler.get(c);
    },
    loadComments: function (c) {
      CWApiHandler.get(c);
    },
    get: function (c) {
      CWUtils.ajax.get(
        c.url,
        c.data,
        function (a) {
          c.success(a);
        },
        function () {
          c.error();
        }
      );
    },
    post: function (c) {
      CWUtils.ajax.post(
        c.url,
        c.data,
        function (a) {
          c.success(a);
        },
        function (a) {
          c.error(a);
        }
      );
    },
    checkLogin: function (c) {
      CWUtils.log(c);
      CwZ.ajax({
        type: "GET",
        url: c.url,
        success: function (a, d, b) {
          c.success(a, d, b);
        },
        error: function (a) {
          c.error(a);
        },
      });
    },
    loadContacts: function (c) {
      CwZ.ajax({
        type: "GET",
        url: c.url,
        success: function (a, d, b) {
          c.success(a, d, b);
        },
        error: function (a) {
          c.error(a);
        },
      });
    },
    loadGroups: function (c) {
      CwZ.ajax({
        type: "GET",
        url: c.url,
        success: function (a, d, b) {
          c.success(a, d, b);
        },
        error: function (a) {
          c.error(a);
        },
      });
    },
    saveComments: function (c) {
      CWApiHandler.post(c);
    },
    findPublication: function (c) {
      CWApiHandler.post(c);
    },
    createPublication: function (c) {
      CWApiHandler.post(c);
    },
    findFile: function (c) {
      CWApiHandler.post(c);
    },
    getUploadParams: function (c) {
      CwZ.ajax({
        url: c.url,
        data: c.data,
        type: "POST",
        success: function (a) {
          c.success(a);
        },
        error: function () {
          c.error();
        },
      });
    },
    findPubs: function (c) {
      CWUtils.ajax.post(c.url, c.data, function (a, d, b) {
        c.success(a, d, b);
      });
    },
    findPubsDOI: function (c) {
      CWApiHandler.get(c);
    },
    getFileURL: function (c) {
      CWUtils.ajax.get(c.url, c.data, c.success, c.error);
    },
    uploadFile: function (c) {
      try {
        CWPDFReader.uploadFile(
          void 0 !== c.data.blobLink ? c.data.blobLink : c.data.pdfLink,
          c.data.index,
          { euId: c.data.euId, fileId: c.data.fileId }
        );
      } catch (a) {
        CWDataCenter.exceptionHandler(a);
      }
    },
    postToTracker: function (c) {},
    injectPiwik: function (c) {},
    trackPiwik: function (c) {},
    signoutCallToColwiz: function (c) {
      CwZ.ajax({
        url: c.url,
        success: function (a) {
          c.success(a);
        },
      });
    },
    uploadSync: function (c) {
      c.data;
      CwZ.ajax({
        url: c.url,
        data: c.data,
        type: "POST",
        success: function () {
          c.success();
        },
      });
    },
    getState: function () {},
    setState: function () {},
  },
  CWData_Center = (function () {
    function c() {
      this.pubSelected =
        this.blob =
        this.pubs =
        this.euId =
        this.eId =
        this.fileId =
          null;
      this.isReadOnly = this.isWorking = this.isLoginShown = this.isLogin = !1;
      this.tsCmt = 0;
      this.bFindPubsChecked = !1;
      this.publisherOptions = null;
      this.trackerStamp = new Date().getTime();
      this.trackerID = (
        1e3 * new Date().getTime() +
        (Math.floor(200 * Math.random()) + 100)
      ).toString(16);
      this.bRavenConf = !1;
      this.myProfileLink = "";
      this.loginChecked = !1;
      this.etArray = {};
      this.lastSyncTS = null;
      this.comments = {};
      this.piwikConfigured = !1;
      this.readerModePiwik = "";
      this.isWebImporter = !1;
      this.PubsDoiUrlHash = {};
    }
    return (
      (c.prototype.resetVariables = function () {
        this.pubSelected = this.euId = this.eId = this.fileId = null;
        this.isReadOnly = !1;
        this.tsCmt = 0;
        this.trackerStamp = new Date().getTime();
        this.trackerID = (
          1e3 * this.trackerStamp +
          (Math.floor(200 * Math.random()) + 100)
        ).toString(16);
      }),
      (c.prototype.setPageMeta = function (a) {
        this.pubs = a;
      }),
      (c.prototype.signoutCallToColwiz = function () {
        var a = this;
        CWApiHandler.signoutCallToColwiz({
          url: CWPDFReaderConfig.cwURL + "/?signout",
          success: function (d) {
            CWPDFReaderConfig.readerMode === CWPDFReaderMode.Publisher &&
              CWPDFReader.logoutFromReaderCallback();
            CWUtils.log("signout successful.");
            a.isLogin = !1;
          },
        });
      }),
      (c.prototype.redirectToMyProfile = function () {
        window.open(this.myProfileLink, "_blank");
      }),
      (c.prototype.setMetaData = function (a, d) {
        try {
          this.pubs[d].data = a.data;
          var b = a.blobLink || a.data.blobLink,
            e = a.blobType || a.data.blobType;
          b && ((this.pubs[d].blobLink = b), (this.pubs[d].blobType = e));
          this.pubSelected &&
            this.pubSelected.index === d &&
            (this.pubSelected.data = a.data);
        } catch (f) {
          CWUtils.log(f);
        }
        CWTaskManager.process();
      }),
      (c.prototype.ajaxError = function (a) {
        switch ((CWUtils.log("Error"), CWUtils.log(a), a.status)) {
          case 401:
          case 403:
            this.isLogin = !1;
            CWPDFReaderConfig.isDesktopMode() || CWPDFReader.showLoginFrame();
            CWPDFReader.hideSyncingDisplay();
            break;
          case 0:
            CWPDFReader.logConsole(
              "It looks like that your internet connection is lost. Kindly check your connection and reload your page.",
              "Connection Lost",
              !0
            );
            break;
          case 503:
            CWPDFReader.logConsole("Server not found!"),
              CWPDFReaderConfig.isCoreMode() ||
                CWPDFReaderConfig.isDesktopMode() ||
                CWPDFReader.showServerDown();
        }
      }),
      (c.prototype.checkLogin = function (a, d) {
        var b = this;
        if (
          (b instanceof window.constructor && (b = CWDataCenter),
          this.loginChecked)
        )
          this.isLogin ? a && a() : d && d();
        else {
          var e = Math.floor(new Date().valueOf() / 1e3),
            e = CWPDFReaderConfig.isDesktopMode()
              ? "app/data/user.json"
              : CWPDFReaderConfig.cwURL + "/user?blocking=false&" + e;
          this.isWorking = !0;
          var f = function (f, e, c) {
              if (
                ((b.loginChecked = !0),
                setTimeout(function () {
                  b.loginChecked = !1;
                }, 3e3),
                (b.isWorking = !1),
                (f = parseInt(f, 10)),
                CWUtils.log("data"),
                CWUtils.log(f),
                "success" === e && 0 !== f)
              ) {
                try {
                  CWPDFReaderConfig.uId || b.loadConfig();
                } catch (h) {
                  CWUtils.log(h);
                }
                b.isLogin = !0;
                CWPDFReaderConfig.isCoreMode() ||
                  CWPDFReaderConfig.isDesktopMode() ||
                  (CWPDFReader.updateUser(CWDataCenter.isLogin),
                  CWPDFReader.set_bLogin && CWPDFReader.set_bLogin(!0));
                a && a();
              } else
                CWUtils.log(f),
                  CWUtils.log("not logged in"),
                  (b.isLogin = !1),
                  (CWPDFReaderConfig.pbxURL = null),
                  CWPDFReader.set_bLogin && CWPDFReader.set_bLogin(!1),
                  CWPDFReader.updateUser(CWDataCenter.isLogin),
                  d && d();
            },
            c = function (a) {
              b.loginChecked = !0;
              setTimeout(function () {
                b.loginChecked = !1;
              }, 3e3);
              b.isWorking = !1;
              CWUtils.log("error");
              CWUtils.log("not logged in");
              b.isLogin = !1;
              CWPDFReaderConfig.pbxURL = null;
              CWPDFReader.updateUser(b.isLogin);
              d && d();
              b.postMsgToSentry({
                message: "checklogin failed",
                stack: a.responseText,
              });
            };
          CWApiHandler.checkLogin({
            url: e,
            success: function (a, b, d) {
              return f(a, b, d);
            },
            error: function (a) {
              return c(a);
            },
          });
        }
      }),
      (c.prototype.correctMods = function (a) {
        if (
          (a.titleInfo &&
            "object" == typeof a.titleInfo.title &&
            a.titleInfo.title.__text &&
            ((a.titleInfo.title = a.titleInfo.title.__text),
            delete a.titleInfo.title.__text),
          a.name)
        )
          for (var d = 0; d < a.name.length; d++) {
            var b = a.name[d];
            if (b._type) {
              b.type = b._type;
              delete b._type;
              for (var e = 0; e < b.namePart.length; e++)
                b.namePart[e]._type &&
                  ((b.namePart[e].type = b.namePart[e]._type),
                  delete b.namePart[e]._type);
            }
          }
        if (
          a.relatedItem &&
          a.relatedItem._type &&
          ((a.relatedItem.type = a.relatedItem._type),
          delete a.relatedItem._type,
          a.relatedItem.part && a.relatedItem.part.detail)
        )
          for (d = 0; d < a.relatedItem.part.detail.length; d++)
            (b = a.relatedItem.part.detail[d]),
              b._type && ((b.type = b._type), delete b._type);
        a.titleInfo &&
          a.titleInfo.title &&
          (a.titleInfo.title = a.titleInfo.title.replace(/<\/?italic>/g, ""));
      }),
      (c.prototype.getCSLFile = function (a, d) {
        var b = this;
        CWUtils.ajax.get(a, {}, function (a) {
          d
            ? CwZ.ajax({
                url: CWPDFReaderConfig.cwURL + "/cites?ret=a&doi=" + d,
                data: {},
                success: function (d, c, g) {
                  try {
                    var m = new X2JS({
                      attributePrefix: new String(""),
                    }).xml2json(d);
                    b.correctMods(m.Entity.mods);
                    var p = new MODSParser(null, m.Entity.mods),
                      p = JSON.stringify(p);
                    CWPDFReader.cslResponse(a, p);
                  } catch (n) {
                    CWPDFReader.cslResponse(a);
                  }
                },
                error: function () {
                  CWUtils.log("error");
                },
              })
            : CWPDFReader.cslResponse(a);
        });
      }),
      (c.prototype.getCSLJson = function (a) {
        CWUtils.ajax.get(a, {}, function (a) {
          CWPDFReader.cslJSONResponse(a);
        });
      }),
      (c.prototype.loadConfig = function (a, d) {
        try {
          var b = this;
          if (
            (b instanceof window.constructor && (b = CWDataCenter),
            !b.isWorking)
          ) {
            b.isWorking = !0;
            var e = new Date().getTime(),
              f = {
                url: CWPDFReaderConfig.isDesktopMode()
                  ? "app/data/extension.json"
                  : CWPDFReaderConfig.cwURL +
                    "/app?x=/pub/extension.json&ts=" +
                    e,
                data: {},
                success: function (f) {
                  var e;
                  a: {
                    b.isWorking = !1;
                    var c = {};
                    try {
                      c = CwZ.parseJSON(f);
                      CWPDFReaderConfig.readerMode ===
                        CWPDFReaderMode.Publisher &&
                        CWPDFReader.sendJSONToReader(c);
                      b.proId = c.proId;
                      b.token = c.token;
                      b.userEmail = c.email;
                      var h =
                        CWPDFReaderConfig.cwURL +
                        CWUtils.generateEntLinks(b.proId, c.uName, "101", !1);
                      b.myProfileLink = h;
                      f = CWPDFReaderConfig;
                      if (0 >= c.uId.length) {
                        e = void 0;
                        break a;
                      }
                      CWPDFReaderConfig = c;
                      CWPDFReaderConfig.uId = c.uId;
                      CWPDFReaderConfig.debug = f.debug;
                      CWPDFReaderConfig.pubModeBtnsTxt = f.pubModeBtnsTxt;
                      CWPDFReaderConfig.extModeBtnsTxt = f.extModeBtnsTxt;
                      CWPDFReaderConfig.readerMode = f.readerMode;
                      CWPDFReaderConfig.cwURL = f.cwURL;
                      CWPDFReaderConfig.idURL = f.idURL;
                      CWPDFReaderConfig.parser = f.parser;
                      CWPDFReaderConfig.domain = f.domain;
                      CWPDFReaderConfig.staticDomainURL = f.staticDomainURL;
                      CWPDFReaderConfig.sentryDomain = f.sentryDomain;
                      CWPDFReaderConfig.piwikSiteId = f.piwikSiteId;
                      CWPDFReaderConfig.isCoreMode = f.isCoreMode;
                      CWPDFReaderConfig.isDesktopMode = f.isDesktopMode;
                      CWPDFReaderConfig.checkReaderMode = f.checkReaderMode;
                      CWPDFReaderConfig.setPublisher = f.setPublisher;
                      CWPDFReaderConfig.isCoreMode() ||
                      CWPDFReaderConfig.isDesktopMode()
                        ? CWPDFReaderConfig.checkReaderMode("drive") &&
                          b.loadContacts()
                        : (CWPDFReader.updateUser(b.isLogin),
                          (void 0 === d || d) &&
                            CWPDFReaderConfig.readerMode !==
                              CWPDFReaderMode.Publisher &&
                            b.findPubs());
                      a && a();
                    } catch (k) {
                      (b.isLogin = !1), b.exceptionHandler(k);
                    }
                    if (
                      CWPDFReaderConfig.checkReaderMode("chrome") ||
                      CWPDFReaderConfig.checkReaderMode("firefox")
                    )
                      (e =
                        '<div id="cw-pdfReaderConfig" style="display:none;">' +
                        JSON.stringify(CWPDFReaderConfig) +
                        "</div>"),
                        CwZ("#cw-pdfReaderConfig").length
                          ? CwZ("#cw-pdfReadeConfig").replaceWith(e)
                          : CwZ("body").append(e);
                    else if (
                      CWPDFReaderConfig.isCoreMode() ||
                      CWPDFReaderConfig.isDesktopMode()
                    )
                      try {
                        CWPDFReader.loadFile();
                      } catch (u) {
                        CWUtils.log(u);
                      }
                    CWUtils.log("CWDataCenter.loadConfig DATA LOADED");
                    e = void 0;
                  }
                  return e;
                },
                error: function (a) {
                  b.ajaxError();
                  b.postMsgToSentry({
                    message: "loadConfig failed",
                    stack: a.responseText,
                  });
                },
              };
            CWApiHandler.loadConfig(f);
          }
        } catch (c) {
          this.exceptionHandler(c);
        }
      }),
      (c.prototype.loadContacts = function () {
        var a = this,
          d = {
            url:
              CWPDFReaderConfig.cwURL +
              "/app?x=/search/autocomplete.json&et=101",
            success: function (b, d, f) {
              CWUtils.log(b);
              b.List.Item;
              a.etArray[101] = b;
              CWUtils.log(d);
              a.loadGroups();
            },
            error: function (b) {
              a.postMsgToSentry({
                message: "load contacts failed",
                stack: b.responseText,
              });
            },
          };
        CwZ.isEmptyObject(a.etArray) && CWApiHandler.loadContacts(d);
      }),
      (c.prototype.loadGroups = function () {
        var a = this;
        CWApiHandler.loadGroups({
          url:
            CWPDFReaderConfig.cwURL + "/app?x=/search/autocomplete.json&et=161",
          success: function (d, b, e) {
            CWUtils.log(d);
            a.etArray[161] = d;
            a.etArray.proId = a.proId;
            CWUtils.log(a.etArray);
            try {
              CWPDFReader.driveSetUaC(a.etArray);
            } catch (f) {
              CWUtils.log(f);
            }
          },
          error: function (d) {
            a.postMsgToSentry({
              message: "load groups failed",
              stack: d.responseText,
            });
          },
        });
      }),
      (c.prototype.syncData = function () {
        var a = this;
        try {
          (CWPDFReaderConfig.isDesktopMode() || null != a.fileId) &&
            a.checkLogin(
              function () {
                a.loadComments(function (b, d) {
                  if (
                    CWPDFReaderConfig.checkReaderMode("library") ||
                    CWPDFReaderConfig.checkReaderMode("librarydesktop")
                  )
                    if (b) CWCommentManager.loadComments(b);
                    else {
                      var f = CWCommentManager.getCommentsString();
                      a.saveComments(f);
                    }
                  else
                    CWPDFReaderConfig.checkReaderMode("drive")
                      ? CWCommentManager.loadComments(b, d)
                      : CWPDFReader.loadComments(b);
                  setTimeout(function (b) {
                    return a.saveComments();
                  }, 1e3);
                }, CWPDFReaderConfig.checkReaderMode("drive"));
              },
              function () {
                CWPDFReaderConfig.isCoreMode() ||
                CWPDFReaderConfig.isDesktopMode()
                  ? CWPDFReaderDialog.show({
                      msg: "You are logged out. Kindly sign in to wizdom.ai and retry to continue. ",
                      okBtnTxt: "Retry",
                      cnclBtnTxt: "Close reader",
                      onOk: function () {
                        a.syncData();
                      },
                      onCancel: function () {
                        CWPDFReader.hasPendingChanges(!1);
                        open(location.toString(), "_self").close();
                      },
                    })
                  : (CWPDFReader.showLoginFrame(),
                    CWPDFReader.hideSyncingDisplay());
              }
            );
        } catch (d) {
          a.exceptionHandler(d);
        }
      }),
      (c.prototype.loadComments = function (a, d) {
        var b = this;
        if (
          (CWPDFReaderConfig.isDesktopMode() &&
            ((CWPDFReaderConfig.cmtURL = "app/data/comments.json"),
            (CWPDFReaderConfig.cmtAllURL = "app/data/commentsAll.json")),
          b instanceof window.constructor && (b = CWDataCenter),
          void 0 !== CWPDFReaderConfig.cmtURL ||
            void 0 !== CWPDFReaderConfig.cmtAllURL)
        ) {
          var e = function (d) {
            try {
              if (-1 !== d.indexOf("failure"))
                (b.isLogin = !1),
                  (CWPDFReaderConfig.dataImgURL = ""),
                  CWPDFReader.updateUser(),
                  confirm("Your session seems to be expired, please reload.")
                    ? CWPDFReaderConfig.readerMode ===
                        CWPDFReaderMode.Publisher && CWPDFReader.reloadPage()
                    : CWPDFReader.logoutFromReaderCallback();
              else {
                var e = CwZ.parseJSON(d);
                d = null;
                var c = !1,
                  m = 0,
                  p = 0,
                  n = null,
                  k = !1,
                  u = null,
                  q = function () {
                    if (!b.comments[CWPDFReaderConfig.uId]) {
                      var a = CWCommentManager.getDummyData().Colwiz.Comment[0];
                      a.ownerId = u;
                      a.isDummy = !0;
                      b.comments[CWPDFReaderConfig.uId] = a;
                    }
                  },
                  t = function (a) {
                    return (
                      (r = CwZ.parseJSON(a)),
                      (v = r.List.MemberData[0].data.Graphics.length),
                      (z = r.List.MemberData[0].data.Comments.length),
                      v + z
                    );
                  };
                if (e.Colwiz && e.Colwiz.Comment) {
                  if (
                    CWPDFReaderConfig.checkReaderMode("library") ||
                    CWPDFReaderConfig.checkReaderMode("librarydesktop")
                  )
                    (d = e.Colwiz.Comment[0]),
                      (d.isCurrentUser = !0),
                      (d.commentsString = CWUtils.decompress(d.settings));
                  else if (CWPDFReaderConfig.checkReaderMode("drive")) {
                    for (var r, v, z, w = 0; w < e.Colwiz.Comment.length; w++) {
                      var l = e.Colwiz.Comment[w];
                      ((l.commentsString = CWUtils.decompress(l.settings)),
                      b.comments || (b.comments = {}),
                      (b.comments[l.uId] = l),
                      (l.isDummy = !1),
                      n ||
                        l.uId === l.ownerId ||
                        l.uId === CWPDFReaderConfig.uId) ||
                        (0 < t(l.commentsString) && (n = l.uId));
                      l.uId === l.ownerId &&
                        ((l.isOwner = !0),
                        (k = !0),
                        (u = l.uId),
                        (p = t(l.commentsString)),
                        d || (d = l));
                      l.uId === CWPDFReaderConfig.uId &&
                        ((c = !0),
                        (m = t(l.commentsString)),
                        (l.isCurrentUser = !0),
                        (l.uName = "My Annotations"),
                        (d = l));
                    }
                    c
                      ? (d =
                          c && 0 !== m
                            ? b.comments[CWPDFReaderConfig.uId]
                            : k && 0 !== p
                            ? b.comments[u]
                            : n
                            ? b.comments[n]
                            : b.comments[Object.keys(b.comments)[0]])
                      : q();
                    d ||
                      ((x = b.comments[CWPDFReaderConfig.uId]), x && (d = x));
                  } else
                    (d = e.Colwiz.Comment[0]),
                      (d.commentsString = CWUtils.decompress(d.settings)),
                      (d = d.commentsString);
                  d &&
                    d.isCurrentUser &&
                    d.mts &&
                    (b.tsCmt = parseInt(d.mts, 10));
                } else if (CWPDFReaderConfig.checkReaderMode("drive")) {
                  var x;
                  for (w in (q(), b.comments))
                    if (b.comments.hasOwnProperty(w)) {
                      l = b.comments[w];
                      l.isDummy && (x = l);
                      !d && 0 < t(l.commentsString) && (d = l);
                      break;
                    }
                  d || (d = x);
                } else
                  e.Colwiz.Comment &&
                    ((d = e.Colwiz.Comment[0]),
                    (d.commentsString = CWUtils.decompress(d.settings)),
                    (d = d.commentsString));
                a && a(d, b.comments);
              }
            } catch (y) {
              -1 !== y.message.indexOf("Unexpected token <") &&
                ((b.isLogin = !1),
                (CWPDFReaderConfig.dataImgURL = ""),
                CWPDFReader.updateUser(),
                CWPDFReader.showLoginFrame()),
                CWPDFReaderConfig.checkReaderMode("publisher")
                  ? PDFRaven.captureException(y)
                  : CWPDFReaderConfig.isCoreMode() ||
                    CWPDFReaderConfig.isDesktopMode()
                  ? PDFRaven.captureException(y.stack)
                  : PDFRaven.checkDomain() && CWComManager.postExcToSentry(y),
                CWUtils.log("loadComments: Comments not Found"),
                a && a("");
            }
          };
          CWApiHandler.loadComments({
            url: d ? CWPDFReaderConfig.cmtAllURL : CWPDFReaderConfig.cmtURL,
            data: { eId: b.fileId, uId: CWPDFReaderConfig.uId, svc: "cl" },
            success: function (a) {
              return e(a);
            },
            error: function () {
              b.postMsgToSentry({ message: "load comments failed", stack: "" });
              b.ajaxError();
            },
          });
        }
      }),
      (c.prototype.saveComments = function (a) {
        var d = this;
        if (
          CWPDFReaderConfig.readerMode !== CWPDFReaderMode.OpenDrive ||
          cPDF.allowMe()
        )
          try {
            if (
              (CWPDFReaderConfig.readerMode ===
                CWPDFReaderMode.LibraryDesktop && (d.fileId = {}),
              d.fileId)
            ) {
              if (void 0 === a || "" === a || !a) {
                if (
                  !CWPDFReaderConfig.isCoreMode() &&
                  !CWPDFReaderConfig.isDesktopMode()
                )
                  return void CWPDFReader.getComments();
                a = CWCommentManager.getCommentsString();
              }
              if (!a) return void CWPDFReader.hideProgress(1);
              var b = void 0;
              try {
                0 < (a.match(/\n/g) || []).length &&
                  (a = a.split("\n").join("!^!")),
                  (b = CwZ.parseJSON(a));
              } catch (e) {
                var c = e.message,
                  h = void 0;
                0 < c.indexOf("Unexpected token") && (h = c.split("token ")[1]);
                a = a.replace(h, "");
                b = CwZ.parseJSON(a);
              }
              var g = !1;
              b &&
                (0 < b.List.MemberData[0].data.Comments.length ||
                  0 < b.List.MemberData[0].data.Graphics.length) &&
                (g = !0);
              b = {};
              if (
                ((b.id = d.fileId),
                (b.os = "16"),
                0 < d.tsCmt && (b.mts = d.tsCmt),
                (b.eus = CWUtils.compress(a)),
                CWPDFReaderConfig.isDesktopMode() &&
                  (b = {
                    Colwiz: {
                      Comment: [
                        { settings: CWUtils.compress(a), mts: d.tsCmt },
                      ],
                    },
                  }),
                g &&
                  (CWPDFReaderConfig.isCoreMode() ||
                    CWPDFReaderConfig.isDesktopMode() ||
                    d.sendOnce ||
                    (d.sendOnce = !0)),
                d.lastSyncTS !== b.mts || void 0 === b.mts)
              ) {
                var m = CWPDFReaderConfig.isDesktopMode()
                    ? "app/data/comments.json"
                    : CWPDFReaderConfig.pbxURL,
                  p = function (a) {
                    ((a = CwZ.parseJSON(a)), a.success)
                      ? (CWUtils.log("saveComments response:" + a),
                        g &&
                          CWPDFReader.showProgress(
                            "sync-progress",
                            "Comments have synced successfully.",
                            0
                          ))
                      : CWPDFReaderConfig.isCoreMode() ||
                        CWPDFReaderConfig.isDesktopMode()
                      ? ((a = {
                          msg: "Comments not synced. Please try again or reload the page.",
                          okBtnTxt: "Retry",
                          cnclBtnTxt: "Close reader",
                          onOk: function () {
                            d.syncData();
                          },
                        }),
                        CWPDFReaderConfig.isCoreMode() &&
                          CWPDFReaderDialog.show(a))
                      : CWPDFReader.logConsole(
                          "Comments not synced. Please try again or reload the page.",
                          "Sync failed",
                          !0
                        );
                    CWPDFReader.hideProgress(1500);
                  };
                CWApiHandler.saveComments({
                  url: m,
                  data: b,
                  success: function (a) {
                    return p(a);
                  },
                  error: function (a) {
                    d.postMsgToSentry({
                      message: "save comments failed",
                      stack: "",
                    });
                    d.ajaxError(a);
                  },
                });
              } else
                CWUtils.log("same mts, save comments successfull"),
                  g &&
                    CWPDFReader.showProgress(
                      "sync-progress",
                      "Comments have synced successfully.",
                      0
                    );
              d.lastSyncTS = b.mts;
            }
          } catch (n) {
            d.exceptionHandler(n);
          }
        else CWPDFReader.hideProgress(100);
      }),
      (c.prototype.addToLibrary = function (a, d) {
        function b() {
          try {
            if (
              "109" ===
              parseInt(CWPDFReader.currentPubEId, 16).toString().slice(0, 3)
            )
              return void (void 0 !== CWPDFReaderConfig.uId
                ? e.addToLibraryThroughPBX()
                : ((e.isWorking = !1), e.loadConfig(e.addToLibraryThroughPBX)));
            if (
              null == CWTaskManager.curTask ||
              (null != CWTaskManager.curTask &&
                a !== CWTaskManager.curTask.data.index)
            ) {
              var b = a;
              if (
                (void 0 === a && e.pubSelected
                  ? (b = e.pubSelected)
                  : CWPDFReader.pageData &&
                    0 < CWPDFReader.pageData.length &&
                    -1 === a
                  ? (b = CWPDFReader.pageData[0])
                  : e.pubs && e.pubs[a] && (b = e.pubs[a]),
                CWPDFReaderConfig.checkReaderMode("chrome") ||
                  CWPDFReaderConfig.checkReaderMode("firefox"))
              )
                try {
                  CWPDFReader.pubsOnOtherSitesArr[a].addOtherPubs
                    ? ((b = CWPDFReader.pubsOnOtherSitesArr[a]),
                      (CWPDFReader.addOtherPub = !1))
                    : CWPDFReader.pubsOnOtherSitesArr[a].addOtherPdfs &&
                      ((b = CWPDFReader.pdfsOnOtherSitesArr[a]),
                      (CWPDFReader.addOtherPdf = !1));
                } catch (d) {
                  CWUtils.log(d);
                }
              var c =
                /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})([=]{1,2})?$/;
              c.test(b.title)
                ? CWUtils.log(b.title)
                : (b.title = Base64.encode(b.title));
              try {
                if (
                  void 0 !== a &&
                  "" !== a &&
                  !e.pubs[a] &&
                  (CWPDFReaderConfig.checkReaderMode("chrome") ||
                    CWPDFReaderConfig.checkReaderMode("firefox"))
                )
                  for (var m = 0; m < CWPDFReader.records.length; m++)
                    CWPDFReader.records[m].index === a &&
                      ((b = CWPDFReader.records[m]),
                      c.test(b.title)
                        ? CWUtils.log(b.title)
                        : (b.title = Base64.encode(b.title)));
              } catch (p) {
                CWUtils.log(p);
              }
              if (null != b && void 0 !== b) {
                var n = new CWTask();
                b.index = a || b.index;
                n.data = b;
                n.state = CWTaskState.FindPub;
                n.bAddToLib = !0;
                CWTaskManager.addTask(n);
              }
            }
          } catch (k) {
            e.exceptionHandler(k);
          }
        }
        var e = this;
        d
          ? b()
          : e.checkLogin(
              function () {
                b();
              },
              function () {
                if (
                  (CWPDFReader.showLoginFrame(b),
                  CWPDFReaderConfig.checkReaderMode("chrome") &&
                    CWPDFReader.pendingAddToLib(),
                  "109" ===
                    parseInt(CWPDFReader.currentPubEId, 16)
                      .toString()
                      .slice(0, 3))
                ) {
                  var a = CwZ(
                    CwZ("#cw-loginFrame")[0].contentWindow.document.body
                  ).find(".cw-login-form #returnURL");
                  a.attr(
                    "value",
                    a.attr("value").replace("&success=2", "&success=3")
                  );
                }
              }
            );
      }),
      (c.prototype.addToLibraryThroughPBX = function () {
        var a = this;
        a.findPubForPublicPage(function () {
          CWUtils.ajax.post(
            CWPDFReaderConfig.pbxURL,
            {
              xTask: "update",
              uId: CWPDFReaderConfig.uId,
              id: CWPDFReader.currentPubEId,
              os: 5,
            },
            function (d) {
              a.findFileForPublicPagePDF(JSON.parse(d).success);
            }
          );
        });
      }),
      (c.prototype.findPubForPublicPage = function (a) {
        var d = this;
        d instanceof window.constructor && (d = CWDataCenter);
        try {
          CWUtils.ajax.get(
            CWPDFReaderConfig.cwURL +
              "/app?x=451&et=109&rsvp=1&eId=" +
              CWPDFReader.currentPubEId,
            {},
            function (b, c, h) {
              b = CwZ.parseXML(b);
              CwZ(b).find("Colwiz Euser settings").length
                ? ((d.pubSelected = {
                    id: CWPDFReader.currentPubEId,
                    pdfLink: CWPDFReader.currentPubPdfLink,
                  }),
                  CWUtils.ajax.post(
                    CWPDFReaderConfig.pbxURL,
                    {
                      xTask: "update",
                      uId: CWPDFReaderConfig.uId,
                      id: CWPDFReader.currentPubEId,
                      os: 5,
                    },
                    function (a) {
                      d.findFileForPublicPagePDF(JSON.parse(a).success);
                    }
                  ),
                  CWComManager.tell("hasPubInLib", {
                    fileInLib: !0,
                    view: "pdfFrame",
                  }))
                : void 0 !== a && a();
            }
          );
        } catch (b) {
          CWUtils.log(b);
        }
      }),
      (c.prototype.findFileForPublicPagePDF = function (a) {
        var d = this,
          b = {},
          e = {},
          c = {};
        b.euId = a.euId;
        b.create = 1;
        b.fileTitle = CWPDFReader.currentPubPdfLink;
        CWUtils.ajax.post(
          CWPDFReaderConfig.cwURL + "/pub/findfile",
          b,
          function (b) {
            var g = null;
            try {
              g = CwZ.parseJSON(b);
            } catch (m) {
              return;
            }
            "200" === g.sc
              ? ((e.fileId = g.fileId),
                (d.fileId = g.fileId),
                CWPDFReader.hasPubInLib(!0, e.index),
                (c.state = CWTaskState.Finished),
                (c.bInProcess = !1),
                (CWTaskManager.curTask = c),
                (d.pubSelected = e),
                CWTaskManager.process(),
                c.bAddToLib || d.syncData())
              : "201" === g.sc
              ? ((c.data = {}),
                (c.data.euId = a.euId),
                (c.data.fileId = g.fileId),
                (c.data.pdfLink = CWPDFReader.currentPubPdfLink),
                (c.data.blobLink = CWPDFReader.currentPubPdfLink),
                (e.fileId = g.fileId),
                (d.fileId = g.fileId),
                (c.state = CWTaskState.UploadFile),
                (c.bInProcess = !1),
                (CWTaskManager.curTask = c),
                (d.pubSelected = e),
                CWTaskManager.process())
              : d.failuresHandler({
                  type: "findfile",
                  e: Error("find file error"),
                  objTask: c,
                });
          },
          d.ajaxError
        );
      }),
      (c.prototype.downloadCitations = function (a) {
        var d = this,
          b = a.data,
          c = (a.emailAddress, a.type);
        CWPDFReader.exportCitIdx = 0;
        var f = function () {
          var a = b[CWPDFReader.exportCitIdx],
            a = parseInt(a, 10),
            g = -1 === a ? CWPDFReader.pageData[0] : CWPDFReader.records[a];
          CWParser.name && CWParser.isPubPage() && (g = CWPDFReader.records[0]);
          var m = g.type === c;
          if ("webpage" === g.redif_type && 0 === CWPDFReader.records.length) {
            if ("bib" === g.type || "ris" === g.type)
              /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})([=]{1,2})?$/.test(
                g.data
              ) && (g.data = Base64.decode(g.data)),
                (a = g.data),
                m || (a = citConverterMain(a, c, g)),
                CWPDFReader.exportCit[c].push(a);
            ++CWPDFReader.exportCitIdx === b.length
              ? (d.saveAndReset(),
                setTimeout(function () {
                  CWPDFReader.processingDownloadCit = !1;
                  CWPDFReader.exportInProgress = !0;
                }, 2e3))
              : f();
          } else
            Utility.getData({
              metadata: g,
              success: function (a, h) {
                if (
                  ((g.data = a),
                  (g.type = h),
                  "bib" !== g.type && "ris" !== g.type && "med" !== g.type)
                )
                  return (
                    d.saveAndReset(),
                    void setTimeout(function () {
                      CWPDFReader.processingDownloadCit = !1;
                      CWPDFReader.exportInProgress = !0;
                      CWlogger.logConsole(
                        "Extension doesn't support '" +
                          g.type +
                          "' publication type for export citation.",
                        "Publication type not supported!",
                        !0
                      );
                    }, 1e3)
                  );
                /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})([=]{1,2})?$/.test(
                  g.data
                ) && (g.data = Base64.decode(g.data));
                var k = g.data;
                "med" === g.type &&
                  ((k = Utility.parsePubMedXmlToJson(k)),
                  (k = RisGenerator([k])[0]),
                  (m = "ris" === c));
                (("med" !== h && c !== h) || ("med" === h && "ris" !== c)) &&
                  (k = citConverterMain(k, c, g));
                CWPDFReader.exportCit[c].push(k);
                ++CWPDFReader.exportCitIdx === b.length
                  ? (d.saveAndReset(),
                    setTimeout(function () {
                      CWPDFReader.processingDownloadCit = !1;
                      CWPDFReader.exportInProgress = !0;
                    }, 2e3))
                  : f();
              },
              error: function () {
                CWPDFReaderConfig.readerMode === CWPDFReaderMode.Chrome &&
                  (CWComManager.exportedCitation = []);
              },
            });
        };
        f();
      }),
      (c.prototype.saveAndReset = function () {
        var a = ["bib", "ris"];
        CwZ(a).each(function (d) {
          d = a[d];
          var b = CWPDFReader.exportCit[d];
          if (b.length) {
            var b = b.join("\n\n"),
              c = new Blob([b], { type: "text/plain;charset=utf-8" });
            CWPDFReaderConfig.readerMode === CWPDFReaderMode.Chrome &&
              (CWComManager.exportedCitation = b);
            saveAs(c, "ExportCitation." + d);
          }
        });
        CWPDFReader.exportCit = { bib: [], ris: [] };
      }),
      (c.prototype.downloadPDF = function (a) {
        saveAs(a.blob, a.name);
      }),
      (c.prototype.getFileId = function (a) {
        var d = this.pubSelected;
        if (null != d) {
          var b = new CWTask();
          b.data = d;
          b.state = CWTaskState.FindPub;
          b.bAddToLib = !1;
          a && (b.bAddToLib = !0);
          CWTaskManager.checkedLogin = !0;
          CWTaskManager.addTask(b);
        }
      }),
      (c.prototype.getPostData = function (a, d) {
        void 0 === d && (d = !1);
        try {
          var b = {
            authors: a.authors ? a.authors : "",
            dataUrl: a.dataUrl ? a.dataUrl : "",
            identifier: a.identifier ? a.identifier : "",
            identifierType: a.identifierType ? a.identifierType : "",
            index: 0,
            psp: 0,
            pdfLink: a.pdfLink ? a.pdfLink : "",
            pubLink: a.pubLink ? a.pubLink : "",
            title: a.title ? a.title : "",
            type: a.type ? a.type : "",
            domain: "webpdf",
            ts: new Date().getTime(),
          };
          return (
            void 0 !== a.journal && (b.journal = a.journal),
            void 0 !== a.year && (b.year = a.year),
            void 0 !== a.openaccess && (b.openaccess = a.openaccess),
            void 0 !== a.listingPage && (b.listingPage = a.listingPage),
            void 0 !== a.title && (b.title = a.title),
            void 0 !== a.authors && (b.authors = a.authors),
            void 0 !== a.issn && (b.issn = a.issn),
            d && (b.data = a.data),
            this.publisherOptions &&
              ((b.appId = this.publisherOptions.appId),
              "0000-0000" !== this.publisherOptions.issn &&
                (b.issn = this.publisherOptions.issn)),
            b
          );
        } catch (c) {
          this.exceptionHandler(c);
        }
      }),
      (c.prototype.failuresHandler = function (a) {
        var d,
          b = this,
          c = {
            logout: {
              heading: "Logged out",
              msg: "You are logged out. Kindly sign in to wizdom.ai and retry to continue. ",
              buttons: { ok: "Retry", cancel: "Abort" },
              func: function (a) {
                c.finishTask(a);
              },
            },
            createPubLimit: {
              heading: "Adding Publication Failed",
              msg: "Publication limit reached. Please contact support@wizdom.ai. ",
              func: function (a) {
                c.finishTask(a);
              },
            },
            createPub: {
              heading: "Adding Publication Failed",
              msg: "An error occurred while creating publication. Please retry after a few seconds. ",
              func: function (a) {
                c.finishTask(a);
              },
            },
            addingPDF: {
              heading: "Adding PDF Failed",
              msg: "An error occurred while adding PDF . The publication has been added in your library though. Please retry after a few seconds. ",
              func: function (a) {
                c.finishTask(a);
              },
            },
            finishTask: function (a) {
              var d = null;
              if (a.objTask) d = a.objTask;
              else if (a.index) {
                a = a.index;
                var c = CWTaskManager.curTask,
                  e = CWTaskManager.arrTasks;
                if (c && c.data.index === a) d = c;
                else if (0 < e.length)
                  for (c = 0; c < e.length; c++) {
                    var p = e[c];
                    p.data.index === a && (d = p);
                  }
              }
              d &&
                ((a = d.data),
                (b.isLogin = !1),
                CWPDFReader.showProgress(
                  "userLoggedOut",
                  "User Logged Out",
                  0,
                  a.index
                ),
                (CWPDFReaderConfig.dataImgURL = ""),
                CWPDFReader.updateUser(),
                (d.bInProcess = !1),
                (d.state = CWTaskState.Finished),
                CWTaskManager.process());
            },
          };
        switch (a.type) {
          case "logout":
            d = c.logout;
            break;
          case "createpub":
            d = c.createPub;
            break;
          case "createpublimit":
            d = c.createPubLimit;
            break;
          case "addingPDF":
          case "uploadfile":
            d = c.addingPDF;
        }
        !(function (a, b) {
          try {
            CWPDFReaderConfig.isCoreMode() || CWPDFReaderConfig.isDesktopMode()
              ? CWPDFReaderDialog.show({
                  msg: a.msg ? a.msg : b.msg,
                  okBtnTxt: a.okBtnTxt ? a.okBtnTxt : b.buttons.ok,
                  cnclBtnTxt: a.cnclBtnTxt ? a.cnclBtnTxt : b.buttons.cancel,
                  onOk: a.succFunc ? a.succFunc : void 0,
                  onCancel: a.errFunc ? a.errFunc : void 0,
                })
              : CWPDFReader.logConsole(b.msg, b.heading, !0),
              b.func && b.func(a);
          } catch (d) {
            CWUtils.log(d);
          }
        })(a, d);
      }),
      (c.prototype.exceptionHandler = function (a) {
        CWPDFReaderConfig.isCoreMode() || CWPDFReaderConfig.isDesktopMode()
          ? PDFRaven.captureException(a.stack)
          : CWPDFReaderConfig.checkReaderMode("publisher")
          ? PDFRaven.captureException(a)
          : PDFRaven.checkDomain() && CWComManager.postExcToSentry(a);
      }),
      (c.prototype.findPublication = function (a) {
        var d = this;
        d.checkLogin(
          function () {
            a.bAddToLib &&
              CWPDFReader.showProgress("addPub", "Adding...", 0, a.data.index);
            var b = a.data;
            if (b)
              try {
                !(function (b) {
                  var c = d.getPostData(b);
                  c.idType = b.identifierType;
                  c.id = b.identifier;
                  c.url = b.pubLink;
                  CWApiHandler.findPublication({
                    url: CWPDFReaderConfig.cwURL + "/pub/findpub",
                    data: c,
                    success: function (c) {
                      a: {
                        var e = null;
                        try {
                          e = CwZ.parseJSON(c);
                        } catch (h) {
                          c = void d.failuresHandler({
                            type: "logout",
                            e: h,
                            objTask: a,
                          });
                          break a;
                        }
                        "200" === e.sc
                          ? ((b.eId = e.eId),
                            CWPDFReaderConfig.isCoreMode() ||
                              CWPDFReaderConfig.isDesktopMode() ||
                              CWPDFReader.setPublicationId(b.eId),
                            e.euId
                              ? ((b.euId = e.euId),
                                (a.state = CWTaskState.FindFile))
                              : a.bAddToLib
                              ? (a.state = CWTaskState.CreatePub)
                              : (a.state = CWTaskState.Finished))
                          : "404" === e.sc &&
                            (a.bAddToLib
                              ? (a.state = CWTaskState.CreatePub)
                              : (CWPDFReader.hideProgress(1),
                                (a.state = CWTaskState.Finished)));
                        a.bInProcess = !1;
                        CWTaskManager.process();
                        c = void 0;
                      }
                      return c;
                    },
                    error: function (a) {
                      d.ajaxError(a);
                      d.postMsgToSentry({
                        message: "findPub failed",
                        stack: a.responseText,
                      });
                    },
                  });
                })(b);
              } catch (c) {
                d.exceptionHandler(c);
              }
          },
          function () {
            CWUtils.log("");
          }
        );
      }),
      (c.prototype.createPublication = function (a) {
        var d = this;
        try {
          var b = a.data,
            c =
              /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})([=]{1,2})?$/;
          if (!b || 0 === b.data.length)
            return (
              (a.bInProcess = !1),
              void (
                (CWPDFReaderConfig.checkReaderMode("chrome") ||
                  CWPDFReaderConfig.checkReaderMode("publisher") ||
                  CWPDFReaderConfig.readerMode ===
                    CWPDFReaderMode.Webimporter) &&
                CWPDFReader.getMetaData(b)
              )
            );
          c.test(b.data) || (b.data = Base64.encode(b.data));
          c.test(b.title) || (b.title = Base64.encode(b.title));
          var f = d.getPostData(b, !0);
          null != b.eId && (f.eId = b.eId);
          var h = "[" + JSON.stringify(f) + "]";
          f.data = h;
          CWApiHandler.createPublication({
            url: CWPDFReaderConfig.cwURL + "/pub/createpub",
            data: f,
            success: function (c) {
              a: {
                try {
                  d.postToTracker("createPublication", b);
                } catch (e) {
                  CWUtils.log(e);
                }
                if ("" !== c) {
                  var f = null;
                  try {
                    f = CwZ.parseJSON(c);
                  } catch (h) {
                    c = void d.failuresHandler({
                      type: "logout",
                      e: h,
                      objTask: a,
                    });
                    break a;
                  }
                  if (((b.title = Base64.decode(b.title)), "200" === f.sc))
                    (b.euId = f.euId),
                      b.eId || (b.eId = f.eId),
                      CWPDFReaderConfig.isCoreMode() ||
                        CWPDFReaderConfig.isDesktopMode() ||
                        CWPDFReader.setPublicationId(b.eId),
                      (a.state = CWTaskState.FindFile),
                      CWPDFReader.showProgress(
                        "addPub",
                        "Adding...",
                        50,
                        a.data.index
                      ),
                      (a.bInProcess = !1),
                      CWTaskManager.process();
                  else {
                    if ("501" === f.sc) {
                      c = Error("Publication Limit Reached");
                      c = void d.failuresHandler({
                        type: "createpublimit",
                        e: c,
                        objTask: a,
                      });
                      break a;
                    }
                    c = Error("create pub error");
                    d.failuresHandler({ type: "createpub", e: c, objTask: a });
                  }
                } else
                  (c = Error("Not Logged In")),
                    d.failuresHandler({ type: "logout", e: c, objTask: a });
                c = void 0;
              }
              return c;
            },
            error: function (a) {
              CWPDFReaderConfig.readerMode === CWPDFReaderMode.Chrome &&
                CWComManager.addedEids.push("failed");
              d.ajaxError(a);
              d.postMsgToSentry({
                message: "createPub failed",
                stack: a.responseText,
              });
            },
          });
        } catch (g) {
          d.exceptionHandler(g);
        }
      }),
      (c.prototype.findFile = function (a, d) {
        var b = this;
        try {
          var c = a.data,
            f = CWUtils.getFileTitle(c),
            h = b.getPostData(c);
          if (a.bAddToLib) {
            if (((h.create = 1), void 0 === d && c.pdfLink && "" !== c.pdfLink))
              return void (CWPDFReaderConfig.checkReaderMode("chrome") ||
              CWPDFReaderConfig.checkReaderMode("firefox")
                ? CWPDFReader.checkForPDFAccess(
                    c.blobType || CWDataCenter.pubSelected.blobType
                  )
                : CWPDFReader.checkForPDFAccess(c.pdfLink));
            if (!d)
              return (
                CWPDFReader.hasPubInLib(!0, c.index),
                (a.state = CWTaskState.Finished),
                (a.bInProcess = !1),
                void CWTaskManager.process()
              );
            h.create = 1;
          }
          h.euId = c.euId;
          h.fileTitle = f;
          h.ts = new Date().getTime();
          b.publisherOptions &&
            ((h.appId = b.publisherOptions.appId),
            "0000-0000" !== b.publisherOptions.issn
              ? (h.issn = b.publisherOptions.issn)
              : (h.issn = void 0 !== c.issn ? c.issn : ""));
          void 0 !== c.journal && (h.journal = c.journal);
          void 0 !== c.year && (h.year = c.year);
          void 0 !== c.openaccess && (h.openaccess = c.openaccess);
          void 0 !== c.listingPage && (h.listingPage = c.listingPage);
          CWApiHandler.findFile({
            url: CWPDFReaderConfig.cwURL + "/pub/findfile",
            data: h,
            success: function (d) {
              a: {
                var f = null;
                try {
                  f = CwZ.parseJSON(d);
                } catch (h) {
                  d = void b.failuresHandler({
                    type: "logout",
                    e: h,
                    objTask: a,
                  });
                  break a;
                }
                "200" === f.sc
                  ? ((c.fileId = f.fileId),
                    (b.fileId = f.fileId),
                    CWPDFReader.hasPubInLib(!0, c.index),
                    (a.state = CWTaskState.Finished),
                    (a.bInProcess = !1),
                    CWTaskManager.process(),
                    b.syncData())
                  : "201" === f.sc
                  ? ((c.fileId = f.fileId),
                    (b.fileId = f.fileId),
                    (a.state = CWTaskState.UploadFile),
                    (a.bInProcess = !1),
                    CWTaskManager.process())
                  : f.failure
                  ? f.failure.sc &&
                    "409" === f.failure.sc &&
                    b.failuresHandler({ type: "createpublimit", objTask: a })
                  : ((b.fileId = f.fileId),
                    CWPDFReader.hasPubInLib(!0, c.index),
                    (a.state = CWTaskState.Finished),
                    (a.bInProcess = !1),
                    CWTaskManager.process(),
                    b.failuresHandler({
                      type: "findfile",
                      e: Error("find file error"),
                      objTask: a,
                    }));
                d = void 0;
              }
              return d;
            },
            error: function (a) {
              b.ajaxError(a);
              b.postMsgToSentry({
                message: "findFile failed",
                stack: a.responseText,
              });
            },
          });
        } catch (g) {
          b.exceptionHandler(g);
        }
      }),
      (c.prototype.uploadFile = function (a) {
        try {
          var c = { euId: a.data.euId, fileId: a.data.fileId };
          void 0 !== a.data.blobLink ? a.data.blobLink : a.data.pdfLink;
          CWPDFReaderConfig.readerMode === CWPDFReaderMode.Publisher ||
          CWPDFReaderConfig.readerMode === CWPDFReaderMode.Webimporter
            ? CWPDFReader.uploadFile(a.data.pdfLink, a.data.index, c)
            : CWPDFReader.uploadFile(a.data.blobLink, a.data.index, c);
        } catch (b) {
          this.exceptionHandler(b);
        }
      }),
      (c.prototype.getUploadParams = function (a) {
        var c = this;
        CWUtils.log(CWPDFReaderConfig.cwcURL);
        try {
          var b = {
            onSuccess: function (b) {
              var e,
                g = {};
              if (b.success) e = b.success;
              else if (b.failure && "logged out." === b.failure.msg)
                return void this.failuresHandler({
                  type: "logout",
                  e: Error("Logged out"),
                });
              e &&
                ((CWTaskManager.curTask.data.fileId = e.eId),
                (g.key = e.key),
                (g.acl = e.acl),
                (g.AWSAccessKeyId = e.AWSAccessKeyId),
                (g.policy = e.policy),
                (g.signature = e.signature),
                (g.Filename = a.title),
                c.setKeyValue("x-amz-server-side-encryption", e, g),
                c.setKeyValue("x-amz-meta-uuid", e, g),
                c.setKeyValue("x-amz-storage-class", e, g),
                c.setKeyValue("Content-Disposition", e, g),
                c.setKeyValue("Content-Type", e, g),
                CWPDFReader.postFile(g, e.postURL));
            },
            onFailure: function (a) {
              CWUtils.log(
                "Either you don't have rights to post or your uploaded quota is finished. "
              );
              c.postMsgToSentry({
                message: "getUploadParams failed",
                stack: a.responseText,
              });
            },
          };
          CWApiHandler.getUploadParams({
            url: CWPDFReaderConfig.cwcURL,
            data: a,
            success: function (a) {
              return b.onSuccess(a);
            },
            error: function (a) {
              return b.onFailure(a);
            },
          });
        } catch (e) {
          c.exceptionHandler(e);
        }
      }),
      (c.prototype.setKeyValue = function (a, c, b) {
        (c = c[a]) && (b[a] = c);
      }),
      (c.prototype.uploadSync = function (a) {
        var c = this;
        void 0 === a.doSync && (a.doSync = !1);
        try {
          CWApiHandler.uploadSync({
            url: CWPDFReaderConfig.cwcURL,
            data: a,
            success: function () {
              CWUtils.log("UPLOAD SYNC:" + a.sync);
              2 === a.sync &&
                (CWPDFReader.hasPubInLib(!0, a.index),
                (CWTaskManager.curTask.state = CWTaskState.Finished),
                (CWTaskManager.curTask.bInProcess = !1),
                CWTaskManager.process(),
                a.doSync && c.syncData());
            },
            error: function (a) {
              c.postMsgToSentry({
                message: "uploadSync failed",
                stack: a.responseText,
              });
            },
          });
        } catch (b) {
          c.exceptionHandler(b);
        }
      }),
      (c.prototype.getFileURL = function (a, c, b, e) {
        try {
          var f = CWPDFReaderConfig.cwcURL.replace("&et=28", "&et=" + c);
          a = { eId: a, geturl: 1 };
          b && (a.preview = !0);
          CWApiHandler.getFileURL({
            url: f,
            data: a,
            success: e,
            error: this.ajaxError,
          });
        } catch (h) {
          this.exceptionHandler(h);
        }
      }),
      (c.prototype.polling = function () {
        this.loadConfig(function () {
          CWUtils.log("calling loadConfig");
        });
      }),
      (c.prototype.updateUserDOM = function () {
        CWPDFReader.updateUser();
      }),
      (c.prototype.postMsgToSentry = function (a) {
        if (!CWUtils.sentry[a.message]) {
          CWUtils.sentry[a.message] = !0;
          CWUtils.log("in final sentry tracking func: " + a.message);
          var c = Error(a.message);
          c.stack = a.stack;
          CWUtils.log(c);
          try {
            PDFRaven.captureException(c);
          } catch (b) {
            CWUtils.log(b);
          }
        }
      }),
      (c.prototype.setImporter = function () {
        this.isWebImporter = !0;
      }),
      (c.prototype.postToTracker = function (a, c) {
        try {
          var b = void 0,
            e = c || this.pubSelected;
          if (
            ((this.isWebImporter ||
              (CWPDFReaderConfig.checkReaderMode("chrome") && null == e)) &&
              (e =
                void 0 !== CWPDFReader.pageData &&
                0 < CWPDFReader.pageData.length
                  ? CWPDFReader.pageData[0]
                  : this.pubs[0]),
            CWPDFReaderConfig.checkReaderMode("publisher") &&
              null == e &&
              this.pubs &&
              (e = this.pubs[0]),
            null != e)
          ) {
            var f = [];
            if ("events" === a) {
              try {
                f = e.match(/"(.*?)"/g);
              } catch (h) {
                CWUtils.log(h);
              }
              b = {};
              b.events = e;
              this.pubSelected &&
                void 0 !== this.pubSelected.issn &&
                (b.issn = this.pubSelected.issn);
              this.publisherOptions && (b.appId = this.publisherOptions.appId);
              void 0 === b.appId &&
                ("undefined" != typeof CWParser && void 0 !== CWParser.name
                  ? (b.appId = CWParser.name + "_extension")
                  : (b.appId = "webpageReference_extension"));
            } else
              (b = this.getPostData(e)),
                void 0 === b.appId &&
                  ("undefined" != typeof CWParser && void 0 !== CWParser.name
                    ? (b.appId = CWParser.name + "_extension")
                    : (b.appId = "webpageReference_extension")),
                (b.idType = e.identifierType),
                (b.id = e.identifier),
                (b.url = e.pubLink),
                delete b.title,
                delete b.data,
                delete b.authors,
                delete b.dataUrl,
                delete b.identifierType,
                delete b.index,
                delete b.psp,
                delete b.pdfLink,
                delete b.pubLink,
                delete b.type,
                delete b.domain,
                delete b.idType,
                delete b.domain;
            if (
              ((b.lts = this.trackerStamp),
              (b.tId = this.trackerID),
              (this.trackerStamp = new Date().getTime()),
              (b.uId = CWPDFReaderConfig.uId || CWUtils.readCookie("_ut")),
              !b.uId)
            ) {
              var g = 1e4 * b.ts + (Math.floor(2e3 * Math.random()) + 1e3);
              b.uId = "u" + g.toString(16);
              CWPDFReaderConfig.checkReaderMode("chrome") &&
                (-1 === CWPDFReader.postDataUId &&
                  (CWPDFReader.postDataUId = b.uId),
                (b.uId = CWPDFReader.postDataUId));
              CWUtils.writeCookie("_ut", b.uId, 365);
            }
            "searchKeyword" === a.action
              ? ((b.action = a.action), (b.searchQuery = a.key), a.action)
              : (b.action = a);
            switch (
              (this.piwikConfigured ||
                (CWPDFReaderConfig.readerMode === CWPDFReaderMode.Chrome
                  ? (this.readerModePiwik = "Chrome")
                  : CWPDFReaderConfig.readerMode ===
                      CWPDFReaderMode.Webimporter || this.isWebImporter
                  ? (this.readerModePiwik = "WebImporter")
                  : CWPDFReaderConfig.readerMode === CWPDFReaderMode.Publisher
                  ? (this.readerModePiwik = "Reader")
                  : CWPDFReaderConfig.readerMode === CWPDFReaderMode.Library
                  ? (this.readerModePiwik = "Library")
                  : CWPDFReaderConfig.readerMode === CWPDFReaderMode.Drive &&
                    (this.readerModePiwik = "Drive"),
                (this.piwikConfigured = !0),
                this.injectPiwik(b)),
              a)
            ) {
              case "events":
                try {
                  for (e = 0; e < f.length; e++)
                    (f[e] = f[e].replace(RegExp('"', "g"), "")),
                      this.trackPiwik(f[e], b);
                } catch (m) {
                  CWUtils.log(m);
                }
                break;
              default:
                void 0 !== a.action
                  ? this.trackPiwik(a.action, b)
                  : this.trackPiwik(a, b);
            }
          }
        } catch (p) {
          CWUtils.log(p);
        }
      }),
      (c.prototype.injectPiwik = function (a) {
        var c = this;
        if (CWPDFReaderConfig.piwikSiteId)
          if (
            ((CWPDFReaderConfig.piwikSiteId =
              "https://app.wizdom.ai" === CWPDFReaderConfig.cwURL ? 2 : 5),
            CWPDFReaderConfig.readerMode === CWPDFReaderMode.Chrome)
          )
            try {
              if (void 0 !== CwZ("#piwikFrame")[0])
                if (c.piwikFrameLoaded) {
                  CwZ("#piwikFrame")[0].contentWindow.postMessage(
                    { message: "appendPiwikjs" },
                    "*"
                  );
                  var b = {
                    message: "initPiwik",
                    piwikSiteId: CWPDFReaderConfig.piwikSiteId,
                  };
                  void 0 !== a &&
                    ((b.appId = a.appId),
                    (b.issn = null === a.issn ? "notfound" : a.issn),
                    (b.journal = null === a.journal ? "notfound" : a.journal));
                  CwZ("#piwikFrame")[0].contentWindow.postMessage(b, "*");
                } else
                  setTimeout(function () {
                    c.injectPiwik();
                  }, 1e3);
              else
                setTimeout(function () {
                  c.injectPiwik();
                }, 1e3);
            } catch (e) {
              CWUtils.log(e);
            }
          else
            !(function () {
              _paq.push([
                "setTrackerUrl",
                "https://reports.wizdom.ai/piwik/piwik.php",
              ]);
              _paq.push(["setSiteId", CWPDFReaderConfig.piwikSiteId]);
              var a = document,
                b = a.createElement("script"),
                a = a.getElementsByTagName("script")[0];
              b.type = "text/javascript";
              b.defer = !0;
              b.async = !0;
              b.src = "https://reports.wizdom.ai/piwik/piwik.js";
              a.parentNode.insertBefore(b, a);
            })(),
              _paq.push(["enableLinkTracking"]),
              _paq.push([
                "setCustomVariable",
                5,
                "ReaderMode",
                c.propName(CWPDFReaderMode, CWPDFReaderConfig.readerMode),
                "visit",
              ]),
              void 0 !== a &&
                (_paq.push(["setCustomVariable", 4, "AppID", a.appId, "visit"]),
                _paq.push([
                  "setCustomVariable",
                  3,
                  "ISSN",
                  null === a.issn ? "notfound" : a.issn,
                  "visit",
                ]),
                _paq.push([
                  "setCustomVariable",
                  2,
                  "Journal",
                  null === a.journal ? "notfound" : a.journal,
                  "visit",
                ])),
              void 0 !== CWPDFReaderConfig.uId &&
                _paq.push(["setUserId", CWPDFReaderConfig.uId]),
              _paq.push(["trackPageView"]);
      }),
      (c.prototype.trackPiwik = function (a, c) {
        var b = this;
        if (CWPDFReaderConfig.piwikSiteId)
          if (CWPDFReaderConfig.readerMode === CWPDFReaderMode.Chrome)
            try {
              "clickpdf" === a
                ? setTimeout(function () {
                    CwZ("#piwikFrame")[0].contentWindow.postMessage(
                      {
                        message: "trackPiwik",
                        action: a,
                        readerModePiwik: b.readerModePiwik,
                        piwikSiteId: CWPDFReaderConfig.piwikSiteId,
                      },
                      "*"
                    );
                  }, 1e3)
                : CwZ("#piwikFrame")[0].contentWindow.postMessage(
                    {
                      message: "trackPiwik",
                      action: a,
                      readerModePiwik: b.readerModePiwik,
                      piwikSiteId: CWPDFReaderConfig.piwikSiteId,
                    },
                    "*"
                  );
            } catch (e) {
              CWUtils.log(e);
            }
          else
            _paq.push([
              "setCustomVariable",
              5,
              "ReaderMode",
              b.propName(CWPDFReaderMode, CWPDFReaderConfig.readerMode),
              "visit",
            ]),
              void 0 !== c &&
                (_paq.push(["setCustomVariable", 4, "AppID", c.appId, "visit"]),
                _paq.push([
                  "setCustomVariable",
                  3,
                  "ISSN",
                  null === c.issn ? "notfound" : c.issn,
                  "visit",
                ]),
                _paq.push([
                  "setCustomVariable",
                  2,
                  "Journal",
                  null === c.journal ? "notfound" : c.journal,
                  "visit",
                ])),
              void 0 !== CWPDFReaderConfig.uId &&
                _paq.push(["setUserId", CWPDFReaderConfig.uId]),
              _paq.push(["trackEvent", b.readerModePiwik, a]);
      }),
      (c.prototype.propName = function (a, c) {
        for (var b in a) if (a[b] === c) return b;
        return c;
      }),
      (c.prototype.findPubs = function () {
        var a = this;
        if (CWPDFReaderConfig.readerMode !== CWPDFReaderMode.Webimporter) {
          var c = [];
          if (a.pubs)
            for (var b in a.pubs) {
              var e = a.pubs[b],
                e = {
                  type: e.identifierType,
                  value: e.identifier,
                  url: e.pubLink,
                  pdfLink: e.pdfLink,
                };
              c.push(e);
            }
          else
            for (b in CWPDFReader.pageData)
              (e = CWPDFReader.pageData[b]),
                (e = {
                  type: e.identifierType,
                  value: e.identifier,
                  url: e.pubLink,
                  pdfLink: e.pdfLink,
                }),
                c.push(e);
          c = JSON.stringify(c);
          b = {};
          b.ids = '{"ids":' + c + "}";
          try {
            CWApiHandler.findPubs({
              url: CWPDFReaderConfig.cwURL + "/pub/findpubs",
              data: b,
              success: function (b, c, d) {
                c = null;
                try {
                  if (
                    -1 ===
                      (d.getResponseHeader("content-type") || "").indexOf(
                        "html"
                      ) &&
                    -1 === b.indexOf('{"failure":') &&
                    ((c = CwZ.parseJSON(b)),
                    CWUtils.log("findPubs response:  " + b),
                    c.ids)
                  )
                    for (b = 0; b < c.ids.length; b++)
                      if (c.ids[b].euId) CWPDFReader.hasPubInLib(!0, b);
                      else if (
                        !CWPDFReaderConfig.isCoreMode() &&
                        !CWPDFReaderConfig.isDesktopMode()
                      ) {
                        var e = CwZ(
                          ".cw-btnContainer:eq(" + b + ") .cw-addToLib"
                        );
                        e.hasClass("cw-vil") &&
                          (e.removeClass("cw-vil"),
                          e.removeClass("cw-ail"),
                          e.removeClass("cw-qta"),
                          e.addClass("cw-atl"),
                          e.find("span").html("Add to wizdom.ai"),
                          e.attr(
                            "data-tooltip",
                            "Save this article to your \r\n wizdom.ai library to read \r\n and reference anywhere"
                          ));
                      }
                } catch (f) {
                  CWUtils.log("FIND PUB ERROR"), a.exceptionHandler(f);
                }
              },
              error: function (b) {
                a.postMsgToSentry({
                  message: "findPubs failed",
                  stack: b.responseText,
                });
              },
            });
          } catch (f) {
            a.exceptionHandler(f);
          }
        }
      }),
      (c.prototype.findPubsDOI = function () {
        var a = this;
        if (
          a.isLogin &&
          !a.bFindPubsChecked &&
          (!a.publisherOptions || a.publisherOptions.showAddToColwiz)
        ) {
          for (var c = "", b = 0; b < CWPDFReader.records.length; b++) {
            var e = a.pubs[b];
            "doi" === e.identifierType &&
              ((a.PubsDoiUrlHash[e.identifier] = b),
              (c += "" === c ? "doi=" + e.identifier : "&doi=" + e.identifier));
          }
          try {
            CWUtils.ajax.get(
              CWPDFReaderConfig.cwURL + "/pub/findpubsbydoi?" + c,
              {},
              function (b) {
                var c = null;
                try {
                  for (
                    c = CwZ.parseJSON(b).response,
                      CWUtils.log("findpubsbydoi response:  " + b),
                      b = 0;
                    b < c.docs.length;
                    b++
                  ) {
                    var d = c.docs[b];
                    d.doi &&
                      CWPDFReader.hasPubInLib(!0, a.PubsDoiUrlHash[d.doi]);
                  }
                } catch (e) {
                  a.exceptionHandler(e);
                }
              }
            );
          } catch (f) {
            a.exceptionHandler(f);
          }
          a.bFindPubsChecked = !0;
        }
      }),
      (c.prototype.checkPendingTasks = function () {
        (null != CWTaskManager.curTask || 0 < CWTaskManager.arrTasks.length) &&
        this.isLogin
          ? CWPDFReader.setPendingTasks(!0)
          : CWPDFReader.setPendingTasks(!1);
      }),
      (c.prototype.removeAllTasks = function () {
        CWTaskManager.removeAllTasks();
      }),
      (c.prototype.getRelatedPubs = function (a) {
        try {
          CwZ.get(a).done(function (a) {
            CWPDFReader.setRelatedPubs(a);
          });
        } catch (c) {
          CWUtils.log(c);
        }
      }),
      (c.prototype.getRefsFromServer = function (a, c) {
        try {
          CwZ.get(a)
            .done(function (a) {
              CWPDFReader.serverRefsResponse(a, c);
            })
            .error(function () {
              CWPDFReader.serverRefsResponse(0, c);
            });
        } catch (b) {
          CWUtils.log(b);
        }
      }),
      (c.prototype.addRelatedPub = function (a) {
        var c = this;
        try {
          CWPDFReaderConfig.pbxURL
            ? CWUtils.ajax.post(
                CWPDFReaderConfig.pbxURL,
                { xTask: "update", uId: CWPDFReaderConfig.uId, id: a, os: 5 },
                function (b) {
                  CWPDFReader.addRelatedPubResp({ eId: a, resp: b });
                }
              )
            : c.isWorking
            ? setTimeout(function () {
                c.addRelatedPub(a);
              }, 2e3)
            : c.loadConfig(function () {
                CWUtils.ajax.post(
                  CWPDFReaderConfig.pbxURL,
                  { xTask: "update", uId: CWPDFReaderConfig.uId, id: a, os: 5 },
                  function (b) {
                    CWPDFReader.addRelatedPubResp({ eId: a, resp: b });
                  }
                );
              });
        } catch (b) {
          CWUtils.log(b);
        }
      }),
      (c.prototype.ajaxCall = function (a) {
        try {
          CwZ.ajax({
            url: a.url,
            type: a.type,
            data: a.params,
            success: function (b) {
              a.response = b;
              CWPDFReader.ajaxCallResp(a);
            },
            error: function () {
              CWPDFReader.ajaxCallResp(a);
            },
          });
        } catch (c) {
          CWPDFReader.ajaxCallResp(a);
        }
      }),
      (c.prototype.getAuthors = function (a, c, b) {
        b
          ? ((c = c.data.replace('["', "").replace('"]', "")),
            CwZ.ajax({
              type: "GET",
              url: a,
              success: function (a, b, c) {
                (a = a.Colwiz.Report[0].id) &&
                  CwZ.ajax({
                    type: "GET",
                    url: "https://www.wizdom.ai/api/1?x=16&eId=" + a,
                    success: function (a, b, c) {
                      console.log(a);
                      CWPDFReader.sendAuthors(a);
                    },
                  });
              },
              error: function (a) {
                CWPDFReader.sendAuthors([]);
              },
            }))
          : CwZ.ajax({
              type: "POST",
              url: a,
              data: c,
              success: function (a, b, c) {
                CWPDFReader.sendAuthors(a);
              },
              error: function (a) {
                CWPDFReader.sendAuthors([]);
              },
            });
      }),
      (c.prototype.getRelated = function (a, c, b, e, f) {
        CwZ.get(a).done(function (a) {
          CwZ.get(c).done(function (c) {
            function d(a, b, c) {
              a = CwZ(a);
              var e = a
                .find(".viewArticle")
                .attr("href")
                .replace("cw_pub=colwiz", "colwiz-ref=ipdf-rec-pnl");
              CwZ(a.find("a")[0]).attr("href", e);
              CwZ(a.find("a")[0]).attr("target", "_blank");
              CwZ(a.find(".listLinkContainer")).remove();
              e = a.find(".year").text();
              c = c ? "recommendationRelPubsClick" : a.attr("source");
              CwZ(a.find("a")[0]).attr("source", c);
              e.match(/(18|19|20)\d{2}/g) &&
                a.find(".year").text(e.match(/(18|19|20)\d{2}/g)[0]);
              a.find(".title").text().length;
              c = a.find(".title").text();
              var f = a.find(".authors").text(),
                e =
                  -1 !== e.indexOf("1900-01-01")
                    ? a.find(".info .journal").length
                      ? '<span class="journal">' +
                        a.find(".info .journal").html() +
                        "</span>"
                      : ""
                    : a.find(".info").html();
              CwZ(
                '<h3 class="title" title="' + c + '">' + c + "</h3>"
              ).insertAfter(a.find("span.title"));
              CwZ(
                '<p class="authors" title="' + f + '">' + f + "</p>"
              ).insertAfter(a.find("span.authors"));
              CwZ('<p class="info">' + e + "</p>").insertAfter(
                a.find("span.info")
              );
              CwZ(a).find("span.title").remove();
              CwZ(a).find("span.authors").remove();
              CwZ(a).find("span.info").remove();
              "cwList1" === b
                ? (k += "<li>" + a.html() + "</li>")
                : (u += "<li>" + a.html() + "</li>");
            }
            var p = CwZ(a),
              n = CwZ(c),
              k = "",
              u = "",
              q = [],
              t = [],
              r = 0;
            if (b) {
              c = function (a) {
                for (
                  var b = !1,
                    c = !1,
                    d = !1,
                    g = a,
                    h = a,
                    k = a,
                    m = function () {
                      if (e[g]) {
                        var a = e[g];
                        -1 === t.indexOf(a)
                          ? (CwZ(p).each(function (c) {
                              if (CwZ(this).attr("id") === a) {
                                var d = CwZ(this),
                                  e = !0;
                                CwZ(q).each(function () {
                                  var a = CwZ(this).find(".title").text();
                                  if (d.find(".title").text() === a) {
                                    var a = CwZ(this).find(".authors").text(),
                                      b = d.find(".authors").text();
                                    a === b && (e = !1);
                                  }
                                });
                                e &&
                                  (CwZ(this).attr(
                                    "source",
                                    "recommendationTopClick"
                                  ),
                                  q.push(CwZ(this)),
                                  t.push(a),
                                  r++,
                                  (b = !0));
                              }
                            }),
                            b || g++)
                          : g++;
                      }
                    };
                  !b && g < e.length && 8 >= r;

                )
                  m();
                for (
                  m = function () {
                    if (f[h]) {
                      var a = f[h];
                      -1 === t.indexOf(a)
                        ? (CwZ(p).each(function (b) {
                            if (CwZ(this).attr("id") === a) {
                              var d = CwZ(this),
                                e = !0;
                              CwZ(q).each(function () {
                                var a = CwZ(this).find(".title").text();
                                if (d.find(".title").text() === a) {
                                  var a = CwZ(this).find(".authors").text(),
                                    b = d.find(".authors").text();
                                  a === b && (e = !1);
                                }
                              });
                              e &&
                                (CwZ(this).attr(
                                  "source",
                                  "recommendationMLClick"
                                ),
                                q.push(CwZ(this)),
                                t.push(a),
                                r++,
                                (c = !0));
                            }
                          }),
                          c || h++)
                        : h++;
                    }
                  };
                  !c && h < f.length && 8 >= r;

                )
                  m();
                for (
                  m = function () {
                    if (n[k]) {
                      var b = CwZ(n[k]).attr("id");
                      if (void 0 !== b && -1 === t.indexOf(b)) {
                        var c = n[k],
                          e = !0;
                        CwZ(q).each(function () {
                          var a = CwZ(this).find(".title").text();
                          if (CwZ(c).find(".title").text() === a) {
                            var a = CwZ(this).find(".authors").text(),
                              b = CwZ(c).find(".authors").text();
                            a === b && (e = !1);
                          }
                        });
                        e &&
                          (CwZ(n[a]).attr(
                            "source",
                            "recommendationRelPubsClick"
                          ),
                          q.push(n[k]),
                          t.push(b),
                          r++,
                          (d = !0));
                      } else k++;
                    }
                  };
                  !d && k < n.length && 8 >= r;

                )
                  m();
              };
              for (var v = 0; 8 > v && 8 >= r; v++) c(v);
              0 !== q.length &&
                ((p = q.slice(0, 4)),
                (n = q.slice(4, 8)),
                CwZ(p).each(function () {
                  d(this, "cwList1");
                }),
                CwZ(n).each(function (a) {
                  d(this, "cwList2");
                }),
                CWPDFReader.setRelPubsOnPage(k, u));
            } else
              -1 === a.indexOf("no-result-cw") &&
                -1 === c.indexOf("no-result-cw") &&
                (p.each(function () {
                  d(this, "cwList1", "recommendationRelPubsClick");
                }),
                n.each(function () {
                  d(this, "cwList2", "recommendationRelPubsClick");
                }),
                CWPDFReader.setRelPubsOnPage(k, u));
          });
        });
      }),
      c
    );
  })(),
  CWDataCenter = new CWData_Center(),
  PDFRaven = {
    domain: CWPDFReaderConfig.cwURL,
    captureException: function (c) {},
    captureMessage: function (c) {},
    set: function () {
      Raven.TraceKit.domain = PDFRaven.domain;
      Raven.TraceKit.checkDomain = PDFRaven.checkDomain;
      PDFRaven = Raven.TraceKit;
    },
    checkDomain: function () {
      return -1 !== PDFRaven.domain.indexOf(CWPDFReaderConfig.sentryDomain);
    },
  };
(CWPDFReaderConfig.isCoreMode() || CWPDFReaderConfig.isDesktopMode()) &&
  CWDataCenter.checkLogin(CWDataCenter.loadConfig);
-1 !== CWPDFReaderConfig.cwURL.indexOf(CWPDFReaderConfig.sentryDomain) &&
  (CWUtils.log("PDFRaven is set for this reader"), PDFRaven.set());
var CWTaskManager = {
    arrTasks: [],
    curTask: null,
    checkedLogin: !1,
    addTask: function (c) {
      try {
        0 < CWTaskManager.arrTasks.length &&
          c.bAddToLib &&
          CWPDFReader.showProgress("queue", "Queued to Add", 0, c.data.index),
          CWTaskManager.arrTasks.push(c),
          CWTaskManager.process();
      } catch (a) {
        CWDataCenter.exceptionHandler(a);
      }
    },
    removeTask: function (c) {
      for (var a = 0; a < CWTaskManager.arrTasks.length; a++)
        if (CWTaskManager.arrTasks[a].id === c)
          return CWTaskManager.arrTasks.splice(a, 1);
    },
    removeAllTasks: function () {
      CWTaskManager.arrTasks = [];
      CWTaskManager.curTask = null;
      CWTaskManager.checkedLogin = !1;
    },
    process: function () {
      try {
        if (
          (0 < CWTaskManager.arrTasks.length &&
            null == CWTaskManager.curTask &&
            (CWTaskManager.curTask = CWTaskManager.arrTasks.shift()),
          CWTaskManager.curTask && !CWTaskManager.curTask.bInProcess)
        ) {
          var c = CWTaskManager.curTask;
          switch (((c.bInProcess = !0), c.state)) {
            case CWTaskState.FindPub:
              CWDataCenter.findPublication(c);
              break;
            case CWTaskState.CreatePub:
              CWDataCenter.createPublication(c);
              break;
            case CWTaskState.FindFile:
              CWDataCenter.findFile(c);
              break;
            case CWTaskState.UploadFile:
              CWDataCenter.uploadFile(c);
              break;
            default:
              (c.bInProcess = !1),
                (CWTaskManager.curTask = null),
                setTimeout(CWTaskManager.process, 100),
                CWDataCenter.checkPendingTasks &&
                  CWDataCenter.checkPendingTasks();
          }
        }
      } catch (a) {
        CWDataCenter.exceptionHandler(a);
      }
    },
  },
  CWTask = function () {
    this.id = "T" + new Date().getTime();
    this.state = CWTaskState.FindPub;
    this.data = null;
    this.progress = 0;
    this.bInProcess = this.bAddToLib = !1;
  },
  CWTaskState = {
    FindPub: "findPub",
    CreatePub: "createPub",
    FindFile: "findFile",
    UploadFile: "uploadFile",
    Finished: "finished",
  };
