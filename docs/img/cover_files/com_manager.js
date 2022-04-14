var CWComManagerClass = (function () {
    function b() {
      this.CWIFrameManager = null;
    }
    return (
      (b.prototype.init = function () {
        var a = this;
        this.CWIFrameManager = new IframeManager();
        this.CWIFrameManager.setListener(function (b) {
          return a.onMessage(b);
        });
        this.CWIFrameManager.tell("iframe-loaded", {
          view: "mainExt",
          source: "cwFrame",
        });
        CWUtils.log("loaded cwz frame");
      }),
      (b.prototype.onMessage = function (a) {
        var b = this;
        switch (
          (CWUtils.log("com_manager.js CWComManager.onMessage:" + a.message),
          a.message)
        ) {
          case "sendException":
            CWDataCenter.postMsgToSentry(a.data.error);
            break;
          case "postToTracker":
            CWDataCenter.postToTracker(a.data.action, a.data.metaData);
            break;
          case "signoutCallToColwiz":
            CWDataCenter.signoutCallToColwiz();
            break;
          case "redirectToMyProfile":
            CWDataCenter.redirectToMyProfile();
            break;
          case "polling":
            CWDataCenter.polling();
            break;
          case "loadConfig":
            CWDataCenter.checkLogin(CWDataCenter.loadConfig);
            break;
          case "checkLogin":
            CWDataCenter.checkLogin(
              function () {
                b.CWIFrameManager.tell("defferredAction", {
                  loggedIn: !0,
                  view: "mainExt",
                  source: "cwFrame",
                });
              },
              function () {
                b.CWIFrameManager.tell("defferredAction", {
                  showSignIn: a.data.showSignIn,
                  loggedIn: !1,
                  view: "mainExt",
                  source: "cwFrame",
                });
              }
            );
            break;
          case "updateUserDOM":
            CWDataCenter.updateUserDOM();
            break;
          case "findPubsCall":
            CWDataCenter.findPubs();
            break;
          case "getFileId":
            CWDataCenter.getFileId(!0);
            break;
          case "syncData":
            CWDataCenter.syncData();
            break;
          case "saveComments":
            CWDataCenter.saveComments(a.data.cmtString);
            break;
          case "pubSelected":
            CWDataCenter.pubSelected = a.data.metaData;
            break;
          case "createPublication":
            CWDataCenter.createPublication(a.data.obj);
            break;
          case "addToLibrary":
            CWDataCenter.addToLibrary(a.data.index);
            break;
          case "getUploadParams":
            CWDataCenter.getUploadParams(a.data);
            break;
          case "uploadSync":
            CWDataCenter.uploadSync(a.data);
            break;
          case "failureHandler":
            CWDataCenter.failuresHandler(a.data);
            break;
          case "setPublisherOptions":
            CWDataCenter.publisherOptions = a.data.colwizOptions;
            break;
          case "resetVariables":
            CWDataCenter.resetVariables();
            break;
          case "isLoginShown":
            CWDataCenter.isLoginShown = a.data.isLoginShown;
            break;
          case "setLoginState":
            CWDataCenter.isLogin = a.data.isLogin;
            CWDataCenter.loginChecked = !1;
            break;
          case "setPageMeta":
            CWDataCenter.setPageMeta(a.data.hashMeta);
            break;
          case "setMetaData":
            CWDataCenter.setMetaData(a.data.metaData, a.data.index);
            break;
          case "getFileBlob":
            CWPDFReader.getBlob(a.data.url, a.data.action, a.data.metaData);
            break;
          case "processTasks":
            CWTaskManager.process();
            break;
          case "findFile":
            CWDataCenter.findFile(CWTaskManager.curTask, a.data.bAccess);
            break;
          case "removeAllTasks":
            CWDataCenter.removeAllTasks();
            break;
          case "checkPendingTasks":
            CWDataCenter.checkPendingTasks();
            break;
          case "setImporter":
            CWDataCenter.setImporter();
            break;
          case "getRelatedPubs":
            CWDataCenter.getRelatedPubs(a.data.data);
            break;
          case "addRelatedPub":
            CWDataCenter.addRelatedPub(a.data.eId);
            break;
          case "getCSLFile":
            CWDataCenter.getCSLFile(a.data.path, a.data.identifier);
            break;
          case "getCSLJson":
            CWDataCenter.getCSLJson(a.data.url);
            break;
          case "getRefsFromServer":
            CWDataCenter.getRefsFromServer(a.data.url, a.data.metadata);
            break;
          case "ajaxCall":
            CWDataCenter.ajaxCall(a.data.data);
            break;
          case "getAuthors":
            CWDataCenter.getAuthors(a.data.path, a.data.data, a.data.isPubPage);
            break;
          case "getRelated":
            CWDataCenter.getRelated(
              a.data.relLink1,
              a.data.relLink2,
              a.data.newRec,
              a.data.resSet1,
              a.data.resSet2
            );
            break;
          case "logoutCallback":
            (CWDataCenter.isLogin = !1),
              CWCom_Manager.CWIFrameManager.tell("logoutCallback", {
                view: "mainExt",
                source: "cwFrame",
              });
        }
      }),
      (b.prototype.tell = function (a, b, c) {
        var d;
        b = b || {};
        "cwFrame" === c
          ? (d = CwZ("#cw-colwizFrame")[0])
          : "pdfFrame" === c && (d = CwZ("#cw-pdfFrame")[0]);
        d && d.contentWindow.postMessage({ message: a, data: b }, "*");
      }),
      b
    );
  })(),
  CWCom_Manager = new CWComManagerClass();
CwZ(document).ready(function () {
  try {
    !(function e() {
      CWPDFReader
        ? CWCom_Manager.init()
        : setTimeout(function () {
            e();
          }, 1e3);
    })();
  } catch (b) {
    CWUtils.log("Com_Manager " + b);
  }
});
var CWPDFReader_ComManager = (function () {
    function b() {}
    return (
      (b.prototype.showSyncMode = function () {
        CWCom_Manager.CWIFrameManager.tell("showSyncMode", {
          view: "mainExt",
          source: "cwFrame",
        });
      }),
      (b.prototype.logoutFromReaderCallback = function () {
        CWCom_Manager.CWIFrameManager.tell("logoutCallback", {
          view: "mainExt",
          source: "cwFrame",
        });
      }),
      (b.prototype.reloadPage = function () {
        CWCom_Manager.CWIFrameManager.tell("reloadPage", {
          view: "mainExt",
          source: "cwFrame",
        });
      }),
      (b.prototype.sendJSONToReader = function (a) {
        CWCom_Manager.CWIFrameManager.tell("sendJSONToReader", {
          jsonData: a,
          view: "mainExt",
          source: "cwFrame",
        });
      }),
      (b.prototype.showAddMode = function () {
        CWCom_Manager.CWIFrameManager.tell("showAddMode", {
          view: "mainExt",
          source: "cwFrame",
        });
      }),
      (b.prototype.showLoginFrame = function () {
        CWCom_Manager.CWIFrameManager.tell("showLoginFrame", {
          view: "mainExt",
          source: "cwFrame",
        });
      }),
      (b.prototype.showProgress = function (a, b, c, d) {
        CWCom_Manager.CWIFrameManager.tell("showProgress", {
          type: a,
          message: b,
          progress: c,
          index: d,
          view: "mainExt",
          source: "cwFrame",
        });
      }),
      (b.prototype.hideProgress = function (a, b) {
        CWCom_Manager.CWIFrameManager.tell("hideProgress", {
          timeout: a,
          index: b,
          view: "mainExt",
          source: "cwFrame",
        });
      }),
      (b.prototype.loadComments = function (a) {
        CWCom_Manager.CWIFrameManager.tell("loadComments", {
          commentStr: a,
          view: "mainExt",
          source: "cwFrame",
        });
      }),
      (b.prototype.getComments = function () {
        CWCom_Manager.CWIFrameManager.tell("getComments", {
          view: "mainExt",
          source: "cwFrame",
        });
      }),
      (b.prototype.getBlob = function (a, b, c) {
        CWCom_Manager.CWIFrameManager.tell("getBlob", {
          view: "mainExt",
          source: "cwFrame",
          url: a,
          action: b,
          metaData: c,
        });
      }),
      (b.prototype.getData = function (a) {
        CWCom_Manager.CWIFrameManager.tell("getData", {
          metadata: a,
          view: "mainExt",
          source: "cwFrame",
        });
      }),
      (b.prototype.updateUser = function (a) {
        if (a) {
          if (CWPDFReaderConfig.dataImgURL) {
            0 > CWPDFReaderConfig.dataImgURL.indexOf("http") &&
              0 > CWPDFReaderConfig.cwURL.indexOf("ro.colwis.org") &&
              (CWPDFReaderConfig.dataImgURL =
                "https:" + CWPDFReaderConfig.dataImgURL);
            a =
              CWPDFReaderConfig.dataImgURL +
              "t/101/" +
              CWPDFReaderConfig.proId +
              ".jpg?" +
              Math.floor(new Date().valueOf() / 1e3);
            -1 !== CWPDFReaderConfig.cwURL.indexOf("ro.colwis.org") &&
              (a = CWPDFReaderConfig.cwURL + a);
            try {
              CWCom_Manager.CWIFrameManager.tell("updateUser", {
                pts: CWPDFReaderConfig.pts,
                userImgURL: a,
                uName: CWPDFReaderConfig.uName,
                view: "mainExt",
                source: "cwFrame",
              });
            } catch (b) {
              CWCom_Manager.CWIFrameManager.tell("updateUser", {
                pts: CWPDFReaderConfig.pts,
                userImgURL: "",
                uName: CWPDFReaderConfig.uName,
                view: "mainExt",
                source: "cwFrame",
              }),
                CWUtils.log("image doesn't exist");
            }
          }
        } else
          CWCom_Manager.CWIFrameManager.tell("updateUser", {
            userImgURL: "",
            uName: "",
            view: "mainExt",
            source: "cwFrame",
          });
      }),
      (b.prototype.uploadFile = function (a, b, c) {
        CWCom_Manager.CWIFrameManager.tell("uploadFile", {
          pdfLink: a,
          index: b,
          params: c,
          view: "mainExt",
          source: "cwFrame",
        });
      }),
      (b.prototype.postFile = function (a, b) {
        CWCom_Manager.CWIFrameManager.tell("postFile", {
          url: b,
          obj: a,
          view: "mainExt",
          source: "cwFrame",
        });
      }),
      (b.prototype.hasPubInLib = function (a, b) {
        CWCom_Manager.CWIFrameManager.tell("hasPubInLib", {
          bValue: a,
          index: b,
          view: "mainExt",
          source: "cwFrame",
        });
      }),
      (b.prototype.getMetaData = function (a) {
        CWCom_Manager.CWIFrameManager.tell("getMetaData", {
          metaData: a,
          view: "mainExt",
          source: "cwFrame",
        });
      }),
      (b.prototype.setPublicationId = function (a) {
        CWCom_Manager.CWIFrameManager.tell("setPublicationId", {
          pubId: a,
          view: "mainExt",
          source: "cwFrame",
        });
      }),
      (b.prototype.set_bLogin = function (a) {
        CWCom_Manager.CWIFrameManager.tell("set_bLogin", {
          bLogin: a,
          view: "mainExt",
          source: "cwFrame",
        });
      }),
      (b.prototype.logConsole = function (a, b, c) {
        CWCom_Manager.CWIFrameManager.tell("logConsole", {
          strText: a,
          strHeading: b,
          bPromptUser: c,
          view: "mainExt",
          source: "cwFrame",
        });
      }),
      (b.prototype.showLogoutBox = function () {
        CWCom_Manager.CWIFrameManager.tell("showLogoutBox", {
          view: "mainExt",
          source: "cwFrame",
        });
      }),
      (b.prototype.hideSyncingDisplay = function () {
        CWCom_Manager.CWIFrameManager.tell("hideSyncingDisplay", {
          view: "mainExt",
          source: "cwFrame",
        });
      }),
      (b.prototype.checkForPDFAccess = function (a) {
        CWCom_Manager.CWIFrameManager.tell("checkForPDFAccess", {
          pdfLink: a,
          view: "mainExt",
          source: "cwFrame",
        });
      }),
      (b.prototype.setPendingTasks = function (a) {
        CWCom_Manager.CWIFrameManager.tell("setPendingTasks", {
          value: a,
          view: "mainExt",
          source: "cwFrame",
        });
      }),
      (b.prototype.setRelatedPubs = function (a) {
        CWCom_Manager.CWIFrameManager.tell("setRelatedPubs", {
          value: a,
          view: "mainExt",
          source: "cwFrame",
        });
      }),
      (b.prototype.addRelatedPubResp = function (a) {
        CWCom_Manager.CWIFrameManager.tell("addRelatedPubResp", {
          value: a,
          view: "mainExt",
          source: "cwFrame",
        });
      }),
      (b.prototype.cslResponse = function (a, b) {
        CWCom_Manager.CWIFrameManager.tell("cslResponse", {
          response: a,
          mods: b,
          view: "mainExt",
          source: "cwFrame",
        });
      }),
      (b.prototype.cslJSONResponse = function (a) {
        CWCom_Manager.CWIFrameManager.tell("cslJSONResponse", {
          response: a,
          view: "mainExt",
          source: "cwFrame",
        });
      }),
      (b.prototype.serverRefsResponse = function (a, b) {
        a
          ? CWCom_Manager.CWIFrameManager.tell("serverRefsResponse", {
              resp: a,
              view: "mainExt",
              source: "cwFrame",
              metadata: b,
            })
          : CWCom_Manager.CWIFrameManager.tell("noRefsFoundOnServer", {
              resp: a,
              view: "mainExt",
              source: "cwFrame",
              metadata: b,
            });
      }),
      (b.prototype.ajaxCallResp = function (a) {
        CWCom_Manager.CWIFrameManager.tell("ajaxCallResp", {
          data: a,
          view: "mainExt",
          source: "cwFrame",
        });
      }),
      (b.prototype.sendAuthors = function (a) {
        CWCom_Manager.CWIFrameManager.tell("sendAuthors", {
          resp: a,
          view: "mainExt",
          source: "cwFrame",
        });
      }),
      (b.prototype.setRelPubsOnPage = function (a, b) {
        CWCom_Manager.CWIFrameManager.tell("setRelPubsOnPage", {
          resp1: a,
          resp2: b,
          view: "mainExt",
          source: "cwFrame",
        });
      }),
      (b.prototype.pendingAddToLib = function () {
        CWCom_Manager.CWIFrameManager.tell("pendingAddToLib", {
          view: "mainExt",
          source: "cwFrame",
        });
      }),
      b
    );
  })(),
  CWPDFReader = new CWPDFReader_ComManager();
