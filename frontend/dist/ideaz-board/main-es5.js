function _templateObject16() {
  var data = _taggedTemplateLiteral(["\n  subscription BoardAdded {\n    boardAdded {\n      title\n    }\n  }\n"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n  subscription SectionDeleted($boardId: String!) {\n    sectionDeleted(boardId: $boardId){\n      id: _id\n    }\n  }\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n  subscription CardDeleted($boardId: String!) {\n    cardDeleted(boardId: $boardId){\n      id: _id\n      sectionId\n    }\n  }\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n  subscription CardUpdated($boardId: String!) {\n    cardUpdated(boardId: $boardId){\n      text\n      author\n      id: _id\n      sectionId\n    }\n  }\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  subscription CardAdded($boardId: String!) {\n    cardAdded(boardId: $boardId){\n      text\n      author\n      id: _id\n      sectionId\n    }\n  }\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  subscription SectionAdded($boardId: String!) {\n    sectionAdded(boardId: $boardId) {\n      __typename\n      title\n      id: _id\n      cards {\n        text\n        title\n        author\n      }\n    }\n  }\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  query GetUserToken($username: String!, $password: String!) {\n    getUserToken(username: $username, password: $password)\n  }\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n    query GetBoard($boardId: ID) {\n      getBoard(boardId: $boardId){\n        __typename\n        title\n        sections {\n          __typename\n          id: _id\n          cards {\n            id: _id\n            text\n            author\n          }\n          title\n        }\n      }\n    }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  mutation UnlockBoard($boardId: String!, $pin: String!) {\n    unlockBoard(boardId: $boardId, pin: $pin)\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  mutation DeleteSection($sectionId: String!, $boardId: String!) {\n    deleteSection(sectionId: $sectionId, boardId: $boardId) {\n      id: _id\n    }\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  mutation DeleteCard($cardId: String!, $sectionId: String!, $boardId: String!) {\n    deleteCard(cardId: $cardId, sectionId: $sectionId, boardId: $boardId) {\n      id: _id\n      sectionId\n    }\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  mutation AddCard($newCard: NewCardInput, $boardId: String!) {\n    addCard(newCard: $newCard, boardId: $boardId) {\n      id: _id\n      author\n      text\n    }\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  mutation CreateBoard($newBoard: NewBoardInput, $sectionNames: [String]) {\n    addBoard(newBoard: $newBoard, sectionNames: $sectionNames) {\n      title\n      id: _id\n      sections{\n        title\n      }\n    }\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  mutation UpdateSection($sectionChanges: UpdateSectionInput){\n    updateSection(sectionChanges: $sectionChanges) {\n      title\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  mutation UpdateCard($cardChanges: UpdateCardInput, $boardId: String!){\n    updateCard(cardChanges: $cardChanges, boardId: $boardId) {\n      id: _id\n      sectionId\n      text\n      author\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  mutation CreateSection($newSection: NewSectionInput){\n    addSection(newSection: $newSection){\n      id: _id\n      title\n      cards {\n        id: _id\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/apollo-cache-update.helper.ts":
  /*!***********************************************!*\
    !*** ./src/app/apollo-cache-update.helper.ts ***!
    \***********************************************/

  /*! exports provided: cacheUpdateCardSub, cacheRemoveCardSub, cacheRemoveSectionSub, cacheAddSectionSub, cacheCreateCard, cacheUpdateCard, cacheDeleteCard, cacheCreateSection, cacheDeleteSection */

  /***/
  function srcAppApolloCacheUpdateHelperTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "cacheUpdateCardSub", function () {
      return cacheUpdateCardSub;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "cacheRemoveCardSub", function () {
      return cacheRemoveCardSub;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "cacheRemoveSectionSub", function () {
      return cacheRemoveSectionSub;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "cacheAddSectionSub", function () {
      return cacheAddSectionSub;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "cacheCreateCard", function () {
      return cacheCreateCard;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "cacheUpdateCard", function () {
      return cacheUpdateCard;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "cacheDeleteCard", function () {
      return cacheDeleteCard;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "cacheCreateSection", function () {
      return cacheCreateSection;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "cacheDeleteSection", function () {
      return cacheDeleteSection;
    });
    /* harmony import */


    var _graphql_queries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../graphql/queries */
    "./src/graphql/queries.ts");

    var getBoard = function getBoard(boardId) {
      return {
        query: _graphql_queries__WEBPACK_IMPORTED_MODULE_0__["GetBoard"],
        variables: {
          boardId: boardId
        }
      };
    };

    var findById = function findById(id) {
      return function (item) {
        return item.id === id;
      };
    };

    var cacheUpdateCardSub = function cacheUpdateCardSub(prev, _ref) {
      var subscriptionData = _ref.subscriptionData;
      var sections = prev.getBoard.sections;
      var cardUpdated = subscriptionData.data.cardUpdated;
      var sectionToBeUpdated = sections.find(function (section) {
        return section.id === cardUpdated.sectionId;
      });
      var cardToUpdate = sectionToBeUpdated.cards.find(function (card) {
        return card.id === cardUpdated.id;
      });

      if (!cardToUpdate) {
        sectionToBeUpdated.cards.push(cardUpdated);
      }

      return prev;
    };

    var cacheRemoveCardSub = function cacheRemoveCardSub(prev, _ref2) {
      var subscriptionData = _ref2.subscriptionData;
      var sections = prev.getBoard.sections;
      var _subscriptionData$dat = subscriptionData.data.cardDeleted,
          cardId = _subscriptionData$dat.id,
          sectionId = _subscriptionData$dat.sectionId;
      var sectionToBeUpdated = sections.find(function (section) {
        return section.id === sectionId;
      });
      sectionToBeUpdated.cards = sectionToBeUpdated.cards.filter(function (card) {
        return card.id !== cardId;
      });
      return prev;
    };

    var cacheRemoveSectionSub = function cacheRemoveSectionSub(prev, _ref3) {
      var subscriptionData = _ref3.subscriptionData;
      var sections = prev.getBoard.sections;
      var sectionId = subscriptionData.data.sectionDeleted.id;
      prev.getBoard.sections = sections.filter(function (section) {
        return section.id !== sectionId;
      });
      return prev;
    };

    var cacheAddSectionSub = function cacheAddSectionSub(prev, _ref4) {
      var subscriptionData = _ref4.subscriptionData;
      return Object.assign(Object.assign({}, prev), {
        getBoard: Object.assign(Object.assign({}, prev.getBoard), {
          sections: [].concat(_toConsumableArray(prev.getBoard.sections), [subscriptionData.data.sectionAdded])
        })
      });
    };

    var cacheCreateCard = function cacheCreateCard(_ref5) {
      var boardId = _ref5.boardId,
          sectionId = _ref5.sectionId;
      return function (store, _ref6) {
        var addCard = _ref6.data.addCard;
        // Read the data from the cache for this query.
        var data = store.readQuery(getBoard(boardId)); // Find the section the card belongs to

        var chosenSection = data.getBoard.sections.find(function (section) {
          return section.id === sectionId;
        }); // Add the card to the section

        chosenSection.cards.push(Object.assign(Object.assign({}, addCard), {
          editing: true
        })); // Write the data back to the cache.

        store.writeQuery(Object.assign(Object.assign({}, getBoard(boardId)), {
          data: data
        }));
      };
    };

    var cacheUpdateCard = function cacheUpdateCard(_ref7) {
      var boardId = _ref7.boardId,
          sectionId = _ref7.sectionId;
      return function (store, _ref8) {
        var updateCard = _ref8.data.updateCard;
        // Read the data from the cache for this query.
        var data = store.readQuery(getBoard(boardId)); // Find the section the card belongs to

        var chosenSection = data.getBoard.sections.find(function (section) {
          return section.id === sectionId;
        });
        var alreadyHasCard = chosenSection.cards.find(function (c) {
          return c.id === updateCard.id;
        }); // if the section doesn't have the card, we need to add it to the section

        if (!alreadyHasCard) {
          chosenSection.cards.push(updateCard); // Write the data back to the cache.

          store.writeQuery(Object.assign(Object.assign({}, getBoard(boardId)), {
            data: data
          }));
        }
      };
    };

    var cacheDeleteCard = function cacheDeleteCard(_ref9) {
      var boardId = _ref9.boardId,
          sectionId = _ref9.sectionId,
          cardId = _ref9.cardId;
      return function (store) {
        // Read the data from the cache for this query.
        var data = store.readQuery(getBoard(boardId)); // Find the section from which to remove the card

        var chosenSection = data.getBoard.sections.find(function (s) {
          return s.id === sectionId;
        }); // Remove the card from the section

        chosenSection.cards = chosenSection.cards.filter(function (c) {
          return c.id !== cardId;
        }); // Write the data back to the cache.

        store.writeQuery(Object.assign(Object.assign({}, getBoard(boardId)), {
          data: data
        }));
      };
    };

    var cacheCreateSection = function cacheCreateSection(_ref10) {
      var boardId = _ref10.boardId;
      return function (store, _ref11) {
        var addSection = _ref11.data.addSection;
        // Read the data from the cache for this query.
        var data = store.readQuery(getBoard(boardId));
        var alreadyHasSection = data.getBoard.sections.some(findById(addSection.id));

        if (!alreadyHasSection) {
          // Add our section from the mutation to the end.
          data.getBoard.sections.push(addSection); // Write the data back to the cache.

          store.writeQuery(Object.assign(Object.assign({}, getBoard(boardId)), {
            data: data
          }));
        }
      };
    };

    var cacheDeleteSection = function cacheDeleteSection(_ref12) {
      var boardId = _ref12.boardId,
          sectionId = _ref12.sectionId;
      return function (store) {
        // Read the data from the cache for this query.
        var data = store.readQuery(getBoard(boardId)); // remove section from board

        data.getBoard.sections = data.getBoard.sections.filter(function (s) {
          return s.id !== sectionId;
        });
        store.writeQuery(Object.assign(Object.assign({}, getBoard(boardId)), {
          data: data
        }));
      };
    };
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_browser_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @services/browser-storage.service */
    "./src/app/services/browser-storage.service.ts");
    /* harmony import */


    var _services_board_activity_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @services/board-activity.service */
    "./src/app/services/board-activity.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function AppComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Please add your name and password to help distinguish your posts.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 5, 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 7, 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_0_Template_button_click_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r13.addUser(_r11.value, _r12.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Add");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(browserStorageSvc, boardActivitySvc) {
        _classCallCheck(this, AppComponent);

        this.browserStorageSvc = browserStorageSvc;
        this.boardActivitySvc = boardActivitySvc;
        this.title = 'ideaz-board';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.user = this.browserStorageSvc.user;
          this.token = this.browserStorageSvc.token;
        }
      }, {
        key: "addUser",
        value: function addUser(username, password) {
          var _this = this;

          if (!(username && password)) return;
          this.boardActivitySvc.getUserToken(username, password).subscribe(function (result) {
            _this.token = result.data.getUserToken;
            _this.browserStorageSvc.token = result.data.getUserToken;
          });
          var user = {
            username: username,
            password: password
          };
          this.browserStorageSvc.user = user;
          this.user = user;
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_browser_storage_service__WEBPACK_IMPORTED_MODULE_1__["BrowserStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_board_activity_service__WEBPACK_IMPORTED_MODULE_2__["BoardActivityService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 3,
      vars: 1,
      consts: [["class", "top-level-overlay", 4, "ngIf"], [1, "app-layout"], [1, "top-level-overlay"], [1, "box", "box__outer"], [1, "box__inner"], ["type", "text", "placeholder", "Username", "id", "username"], ["username", ""], ["type", "text", "placeholder", "Password", "id", "password"], ["password", ""], [3, "click"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_div_0_Template, 13, 0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.token);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]],
      styles: [".app-layout[_ngcontent-%COMP%] {\n  height: 100vh;\n  background-color: #f9f9f2;\n  background-color: #33343a;\n  overflow: hidden;\n}\n\n.top-level-overlay[_ngcontent-%COMP%] {\n  z-index: 200;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(0,0,0,.3);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  flex-direction: column;\n}\n\n.box__outer[_ngcontent-%COMP%] {\n  padding: 20px;\n  width: 300px;\n  height: 200px;\n  background: aliceblue;\n}\n\n.box__inner[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 80px;\n}\n\n.box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin-bottom: 2px;\n  box-sizing: border-box;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLE1BQU07RUFDTixTQUFTO0VBQ1QsT0FBTztFQUNQLFFBQVE7RUFDUixnQ0FBZ0M7RUFDaEMsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7RUFDYixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAtbGF5b3V0IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmMjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzQzYTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnRvcC1sZXZlbC1vdmVybGF5IHtcbiAgei1pbmRleDogMjAwO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuMyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5ib3hfX291dGVyIHtcbiAgcGFkZGluZzogMjBweDtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICBiYWNrZ3JvdW5kOiBhbGljZWJsdWU7XG59XG5cbi5ib3hfX2lubmVyIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDgwcHg7XG59XG5cbi5ib3ggaW5wdXQge1xuICBtYXJnaW4tYm90dG9tOiAycHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [{
          type: _services_browser_storage_service__WEBPACK_IMPORTED_MODULE_1__["BrowserStorageService"]
        }, {
          type: _services_board_activity_service__WEBPACK_IMPORTED_MODULE_2__["BoardActivityService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _components_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @components/navbar.component */
    "./src/app/components/navbar.component.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_idea_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @components/idea-card.component */
    "./src/app/components/idea-card.component.ts");
    /* harmony import */


    var _components_idea_section_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @components/idea-section.component */
    "./src/app/components/idea-section.component.ts");
    /* harmony import */


    var _components_board_tape_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @components/board-tape.component */
    "./src/app/components/board-tape.component.ts");
    /* harmony import */


    var _components_pincode_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @components/pincode.component */
    "./src/app/components/pincode.component.ts");
    /* harmony import */


    var _route_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./route.config */
    "./src/app/route.config.ts");
    /* harmony import */


    var _pages_home_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @pages/home-page.component */
    "./src/app/pages/home-page.component.ts");
    /* harmony import */


    var _pages_board_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @pages/board-page.component */
    "./src/app/pages/board-page.component.ts");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _directives_active_focus_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./directives/active-focus.directive */
    "./src/app/directives/active-focus.directive.ts");
    /* harmony import */


    var _graphql_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./graphql.module */
    "./src/app/graphql.module.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _graphql_module__WEBPACK_IMPORTED_MODULE_15__["GraphQLModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__["FontAwesomeModule"], // RouterModule,
      _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(_route_config__WEBPACK_IMPORTED_MODULE_10__["appRoutes"])]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _components_idea_card_component__WEBPACK_IMPORTED_MODULE_6__["IdeaCardComponent"], _components_idea_section_component__WEBPACK_IMPORTED_MODULE_7__["IdeaSectionComponent"], _components_board_tape_component__WEBPACK_IMPORTED_MODULE_8__["BoardTapeComponent"], _components_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _pages_home_page_component__WEBPACK_IMPORTED_MODULE_11__["HomePageComponent"], _components_pincode_component__WEBPACK_IMPORTED_MODULE_9__["PincodeComponent"], _pages_board_page_component__WEBPACK_IMPORTED_MODULE_12__["BoardPageComponent"], _directives_active_focus_directive__WEBPACK_IMPORTED_MODULE_14__["ActiveFocusDirective"] // ...appRoutes.map(route => route.component).filter(c => !!c)
        ],
        imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _graphql_module__WEBPACK_IMPORTED_MODULE_15__["GraphQLModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__["FontAwesomeModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _components_idea_card_component__WEBPACK_IMPORTED_MODULE_6__["IdeaCardComponent"], _components_idea_section_component__WEBPACK_IMPORTED_MODULE_7__["IdeaSectionComponent"], _components_board_tape_component__WEBPACK_IMPORTED_MODULE_8__["BoardTapeComponent"], _components_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _pages_home_page_component__WEBPACK_IMPORTED_MODULE_11__["HomePageComponent"], _components_pincode_component__WEBPACK_IMPORTED_MODULE_9__["PincodeComponent"], _pages_board_page_component__WEBPACK_IMPORTED_MODULE_12__["BoardPageComponent"], _directives_active_focus_directive__WEBPACK_IMPORTED_MODULE_14__["ActiveFocusDirective"] // ...appRoutes.map(route => route.component).filter(c => !!c)
          ],
          imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _graphql_module__WEBPACK_IMPORTED_MODULE_15__["GraphQLModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__["FontAwesomeModule"], // RouterModule,
          _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(_route_config__WEBPACK_IMPORTED_MODULE_10__["appRoutes"])],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/board-tape.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/components/board-tape.component.ts ***!
    \****************************************************/

  /*! exports provided: BoardTapeComponent */

  /***/
  function srcAppComponentsBoardTapeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BoardTapeComponent", function () {
      return BoardTapeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0, a1, a2, a3, a4, a5) {
      return {
        top: a0,
        height: a1,
        margin: a2,
        width: a3,
        transform: a4,
        left: a5
      };
    };

    var BoardTapeComponent = /*#__PURE__*/function () {
      function BoardTapeComponent() {
        _classCallCheck(this, BoardTapeComponent);
      }

      _createClass(BoardTapeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.angle = Math.floor(Math.random() * 3) - 1;
        }
      }]);

      return BoardTapeComponent;
    }();

    BoardTapeComponent.ɵfac = function BoardTapeComponent_Factory(t) {
      return new (t || BoardTapeComponent)();
    };

    BoardTapeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BoardTapeComponent,
      selectors: [["app-board-tape"]],
      inputs: {
        vertical: "vertical"
      },
      decls: 1,
      vars: 8,
      consts: [[1, "board-tape", 3, "ngStyle"]],
      template: function BoardTapeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction6"](1, _c0, ctx.vertical ? "-13%" : 0, ctx.vertical ? "110%" : "30px", ctx.vertical ? "5px 10px" : "10px", ctx.vertical ? "30px" : "calc(100% - 50px)", "rotateZ(" + ctx.angle + "deg)", ctx.vertical ? 0 : "10px"));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]],
      styles: [".board-tape[_ngcontent-%COMP%] {\n      min-width: 30px;\n      display: block;\n      position: relative;\n      background: rgba(255,255,200, 0.6);\n      box-shadow: 0 1px 3px rgba(0,0,0,0.4);\n    }"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BoardTapeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-board-tape',
          template: "\n    <div\n      class=\"board-tape\"\n      [ngStyle]=\"{\n        top: vertical ? '-13%' : 0,\n        height: vertical ? '110%' : '30px',\n        margin: vertical ? '5px 10px': '10px',\n        width: vertical ? '30px': 'calc(100% - 50px)',\n        transform: 'rotateZ(' + angle + 'deg)',\n        left: vertical ? 0 : '10px'\n      }\"\n    ></div>\n  ",
          styles: ["\n    .board-tape {\n      min-width: 30px;\n      display: block;\n      position: relative;\n      background: rgba(255,255,200, 0.6);\n      box-shadow: 0 1px 3px rgba(0,0,0,0.4);\n    }\n  "]
        }]
      }], null, {
        vertical: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/idea-card.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/idea-card.component.ts ***!
    \***************************************************/

  /*! exports provided: IdeaCardComponent */

  /***/
  function srcAppComponentsIdeaCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IdeaCardComponent", function () {
      return IdeaCardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var roughjs_bundled_rough_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! roughjs/bundled/rough.esm.js */
    "./node_modules/roughjs/bundled/rough.esm.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["svg"];

    var _c1 = function _c1(a0) {
      return {
        "edit": a0
      };
    };

    function IdeaCardComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c1, ctx_r15.editing));
      }
    }

    var _c2 = function _c2(a1) {
      return {
        "ib-card": true,
        "editing": a1
      };
    };

    var _c3 = function _c3(a0, a1) {
      return {
        "width.px": a0,
        "height.px": a1
      };
    };

    var _c4 = ["*"];

    var IdeaCardComponent = /*#__PURE__*/function () {
      function IdeaCardComponent() {
        _classCallCheck(this, IdeaCardComponent);
      }

      _createClass(IdeaCardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this$roughSvg;

          // this.angle = Math.floor(Math.random() * 3) - 1;
          this.roughSvg = roughjs_bundled_rough_esm_js__WEBPACK_IMPORTED_MODULE_1__["default"].svg(this.svg);
          this.chosenDimensions = this.dimensions || [5, 5, 230, 160];
          this.node = (_this$roughSvg = this.roughSvg).rectangle.apply(_this$roughSvg, _toConsumableArray(this.chosenDimensions).concat([{
            roughness: this.roughness || 0.9,
            fill: this.backgroundColor || 'pink',
            fillStyle: this.fillStyle || 'solid',
            stroke: this.borderColor || 'black',
            hachureGap: this.hachureGap || 0,
            strokeWidth: this.strokeWidth || .5
          }])); // let outline = this.node.querySelector('path:last-child');
          // outline.setAttribute('style', 'stroke-width: 1; fill: none;')
          // outline.setAttribute('class', 'card-outline')

          this.svg.nativeElement.appendChild(this.node); // this.node = this.roughSvg.path('M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z', {
          //   // fill: 'red',
          //   roughness: this.roughness || 2.5,
          //   fill: this.backgroundColor || 'pink',
          //   // hachureAngle: 60,
          //   // hachureGap:5,
          //   fillStyle: this.fillStyle || 'solid',
          //   stroke: this.borderColor || 'black',
          //   strokeWidth: 10,
          //   // viewBox: '0 0 800 800',
          //   // width: '25'
          // })
          // this.svg.nativeElement.appendChild(this.node)
        }
      }]);

      return IdeaCardComponent;
    }();

    IdeaCardComponent.ɵfac = function IdeaCardComponent_Factory(t) {
      return new (t || IdeaCardComponent)();
    };

    IdeaCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IdeaCardComponent,
      selectors: [["app-idea-card"]],
      viewQuery: function IdeaCardComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.svg = _t.first);
        }
      },
      inputs: {
        text: "text",
        backgroundColor: "backgroundColor",
        borderColor: "borderColor",
        color: "color",
        fillStyle: "fillStyle",
        roughness: "roughness",
        fontSize: "fontSize",
        editing: "editing",
        withPin: "withPin",
        hachureGap: "hachureGap",
        strokeWidth: "strokeWidth",
        dimensions: "dimensions"
      },
      ngContentSelectors: _c4,
      decls: 6,
      vars: 12,
      consts: [["tabindex", "0", 3, "ngClass", "ngStyle"], ["class", "pin-wrapper", 4, "ngIf"], [1, "ib-card-content"], ["svg", ""], [1, "pin-wrapper"], ["id", "push-pin", "pin", "", 3, "ngClass"]],
      template: function IdeaCardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, IdeaCardComponent_div_1_Template, 2, 3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "svg", null, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c2, ctx.editing))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](9, _c3, ctx.chosenDimensions[2] || 230, ctx.chosenDimensions[3] || 160));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.withPin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.color)("font-size", ctx.fontSize || "1.1rem");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
      styles: [".img-responsive[_ngcontent-%COMP%] {\n  width: 50px;\n}\n\n.ib-card[_ngcontent-%COMP%] {\n  display: inline-block;\n\n  position: relative;\n  font-family: \"Caveat\", cursive;\n  padding: 14px;\n  z-index: 5;\n  transition: transform .5s, z-index .2s .1s;\n}\n\nsvg[_ngcontent-%COMP%] {\n  height: 170px;\n  width: 240px;\n}\n\n.ib-card[_ngcontent-%COMP%]   .ib-card-content[_ngcontent-%COMP%] {\n  margin: 20px;\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  right: 15px;\n  left: 15px;\n}\n\n[pin][_ngcontent-%COMP%] {\n  position: relative;\n  left: 150%;\n  width: 20px;\n  height: 20px;\n  margin: auto;\n  background-color: purple;\n  border-radius: 50%;\n  left: 0;\n}\n\n.pin-wrapper[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  z-index: 50;\n}\n\n.editing[_ngcontent-%COMP%] {\n  transform: scale(1.5);\n  z-index: 100;\n  transition: transform .5s;\n}\n\n.editing[_ngcontent-%COMP%]   [pin][_ngcontent-%COMP%] {\n  left: 50px;\n}\n\n#push-pin[_ngcontent-%COMP%] {\n  width: 75px;\n  height: 50px;\n  left: 48%;\n  top: -15px;\n  z-index: 300;\n  position: absolute;\n  background: url('pin-sprites.png') left center;\n\n  background-repeat: no-repeat;\n  background-size: 300px;\n  transform: translateX(-25px);\n  transition: background-position 0.2s steps(3, start), transform 0.2s ease-out;\n  background-position: -225px;\n}\n\n.ib-card[_ngcontent-%COMP%] {\n  outline: none;\n}\n\n\n\n#push-pin.edit[_ngcontent-%COMP%] {\n  transform: translateX(0px);\n  background-position: 0;\n  \n  \n}\n\n.ib-card.editing[_ngcontent-%COMP%]   .card-outline[_ngcontent-%COMP%] {\n  stroke: red;\n  color: red;\n  fill: red;\n  width: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pZGVhLWNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QjtpQkFDaUI7RUFDZixrQkFBa0I7RUFDbEIsOEJBQThCO0VBQzlCLGFBQWE7RUFDYixVQUFVO0VBQ1YsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFdBQVc7RUFDWCxXQUFXO0VBQ1gsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVk7RUFDWix3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLE9BQU87QUFDVDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsUUFBUTtFQUNSLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1oseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixTQUFTO0VBQ1QsVUFBVTtFQUNWLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsOENBQTJEOztFQUUzRCw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1Qiw2RUFBNkU7RUFDN0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUNBOzs7Ozs7O0VBT0U7O0FBRUY7RUFDRSwwQkFBMEI7RUFDMUIsc0JBQXNCO0VBQ3RCO2lDQUMrQjtFQUMvQixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLFNBQVM7RUFDVCxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2lkZWEtY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZy1yZXNwb25zaXZlIHtcbiAgd2lkdGg6IDUwcHg7XG59XG5cbi5pYi1jYXJkIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuLyogIHdpZHRoOiAyMzBweDtcbiAgaGVpZ2h0OiAxNzBweDsqL1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtZmFtaWx5OiBcIkNhdmVhdFwiLCBjdXJzaXZlO1xuICBwYWRkaW5nOiAxNHB4O1xuICB6LWluZGV4OiA1O1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjVzLCB6LWluZGV4IC4ycyAuMXM7XG59XG5cbnN2ZyB7XG4gIGhlaWdodDogMTcwcHg7XG4gIHdpZHRoOiAyNDBweDtcbn1cblxuLmliLWNhcmQgLmliLWNhcmQtY29udGVudCB7XG4gIG1hcmdpbjogMjBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgYm90dG9tOiAwcHg7XG4gIHJpZ2h0OiAxNXB4O1xuICBsZWZ0OiAxNXB4O1xufVxuXG5bcGluXSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMTUwJTtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBwdXJwbGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbGVmdDogMDtcbn1cblxuLnBpbi13cmFwcGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgei1pbmRleDogNTA7XG59XG5cbi5lZGl0aW5nIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xuICB6LWluZGV4OiAxMDA7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuNXM7XG59XG5cbi5lZGl0aW5nIFtwaW5dIHtcbiAgbGVmdDogNTBweDtcbn1cblxuI3B1c2gtcGluIHtcbiAgd2lkdGg6IDc1cHg7XG4gIGhlaWdodDogNTBweDtcbiAgbGVmdDogNDglO1xuICB0b3A6IC0xNXB4O1xuICB6LWluZGV4OiAzMDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvcGluLXNwcml0ZXMucG5nJykgbGVmdCBjZW50ZXI7XG5cbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiAzMDBweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yNXB4KTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1wb3NpdGlvbiAwLjJzIHN0ZXBzKDMsIHN0YXJ0KSwgdHJhbnNmb3JtIDAuMnMgZWFzZS1vdXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0yMjVweDtcbn1cblxuLmliLWNhcmQge1xuICBvdXRsaW5lOiBub25lO1xufVxuLyouaWItY2FyZDpmb2N1cyAjcHVzaC1waW4ge1xuICBmaWx0ZXI6XG4gICAgc2F0dXJhdGUoMjQwJSlcbiAgICBodWUtcm90YXRlKDE0MGRlZylcbiAgICBicmlnaHRuZXNzKDk1JSlcbiAgICBjb250cmFzdCg4MCUpXG4gICAgO1xufSovXG5cbiNwdXNoLXBpbi5lZGl0IHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDA7XG4gIC8qYW5pbWF0aW9uOiBwbGF5IDVzIHN0ZXBzKDMpO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkczsqL1xuICAvKmFuaW1hdGlvbi1kaXJlY3Rpb246IHJldmVyc2U7Ki9cbn1cblxuLmliLWNhcmQuZWRpdGluZyAuY2FyZC1vdXRsaW5lIHtcbiAgc3Ryb2tlOiByZWQ7XG4gIGNvbG9yOiByZWQ7XG4gIGZpbGw6IHJlZDtcbiAgd2lkdGg6IDMwMHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IdeaCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-idea-card',
          template: "\n    <div\n      [ngClass]=\"{'ib-card': true, 'editing': editing }\"\n      [ngStyle]=\"{'width.px': chosenDimensions[2] || 230, 'height.px': chosenDimensions[3] || 160}\"\n      tabindex=\"0\"\n    >\n      <div class=\"pin-wrapper\" *ngIf=\"withPin\">\n        <div id=\"push-pin\" [ngClass]=\"{'edit': editing}\" pin></div>\n      </div>\n      <div\n        class=\"ib-card-content\"\n        [style.color]=\"color\"\n        [style.fontSize]=\"fontSize || '1.1rem'\"\n      >\n        <ng-content></ng-content>\n      </div>\n      <svg #svg></svg>\n    </div>\n  ",
          styleUrls: ['./idea-card.component.css']
        }]
      }], null, {
        text: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        backgroundColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        borderColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        color: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        fillStyle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        roughness: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        fontSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        editing: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        withPin: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        hachureGap: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        strokeWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        dimensions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        svg: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['svg', {
            "static": true
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/idea-section.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/components/idea-section.component.ts ***!
    \******************************************************/

  /*! exports provided: IdeaSectionComponent */

  /***/
  function srcAppComponentsIdeaSectionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IdeaSectionComponent", function () {
      return IdeaSectionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _components_board_tape_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @components/board-tape.component */
    "./src/app/components/board-tape.component.ts");

    var _c0 = [[["", 8, "title"]], "*"];
    var _c1 = [".title", "*"];

    var IdeaSectionComponent = function IdeaSectionComponent() {
      _classCallCheck(this, IdeaSectionComponent);
    };

    IdeaSectionComponent.ɵfac = function IdeaSectionComponent_Factory(t) {
      return new (t || IdeaSectionComponent)();
    };

    IdeaSectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IdeaSectionComponent,
      selectors: [["app-idea-section"]],
      ngContentSelectors: _c1,
      decls: 8,
      vars: 3,
      consts: [[1, "section-title"], [3, "vertical"]],
      template: function IdeaSectionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-board-tape", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](6, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-board-tape");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("vertical", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", "100%");
        }
      },
      directives: [_components_board_tape_component__WEBPACK_IMPORTED_MODULE_1__["BoardTapeComponent"]],
      styles: ["section[_ngcontent-%COMP%] {\n      height: 100%;\n      margin: 30px 0;\n    }\n    section[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      height: 100%;\n      position: relative;\n      margin-bottom: -20px;\n    }\n\n    app-board-tape[_ngcontent-%COMP%] {\n      height: 100%;\n    }"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IdeaSectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-idea-section',
          template: "\n    <section>\n      <div>\n        <div class=\"section-title\">\n          <ng-content select='.title'></ng-content>\n        </div>\n        <app-board-tape [vertical]=\"true\"></app-board-tape>\n        <div [style.width]=\"'100%'\">\n          <ng-content></ng-content>\n        </div>\n      </div>\n      <app-board-tape></app-board-tape>\n    </section>\n  ",
          styles: ["\n    section {\n      height: 100%;\n      margin: 30px 0;\n    }\n    section > div {\n      display: flex;\n      align-items: center;\n      height: 100%;\n      position: relative;\n      margin-bottom: -20px;\n    }\n\n    app-board-tape {\n      height: 100%;\n    }\n  "]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/navbar.component.ts":
  /*!************************************************!*\
    !*** ./src/app/components/navbar.component.ts ***!
    \************************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppComponentsNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_pincode_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @components/pincode.component */
    "./src/app/components/pincode.component.ts");

    function NavbarComponent_div_1_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.boardTitle, " ");
      }
    }

    function NavbarComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavbarComponent_div_1_div_2_Template, 2, 1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_div_1_Template_span_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.changeView.emit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_div_1_Template_span_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.addToClipboard.emit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " COPY URL ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_div_1_Template_span_click_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.exportAsPdf.emit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " EXPORT ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_div_1_Template_span_click_14_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.addSection.emit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " +SECTION ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.boardTitle);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" VIEW: ", ctx_r0.viewStyle, " ");
      }
    }

    function NavbarComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-pincode", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pincodeEntered", function NavbarComponent_div_2_Template_app_pincode_pincodeEntered_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.handlePinEntry($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "This board is pin protected:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pincodeLength", 4);
      }
    }

    var NavbarComponent = /*#__PURE__*/function () {
      function NavbarComponent() {
        _classCallCheck(this, NavbarComponent);

        this.addSection = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.exportAsPdf = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.addToClipboard = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.changeView = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.sendPin = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pincode = '';
      }

      _createClass(NavbarComponent, [{
        key: "handlePinEntry",
        value: function handlePinEntry(pincode) {
          this.sendPin.emit(pincode);
        }
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
      return new (t || NavbarComponent)();
    };

    NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavbarComponent,
      selectors: [["app-navbar"]],
      inputs: {
        boardTitle: "boardTitle",
        viewStyle: "viewStyle",
        showContent: "showContent"
      },
      outputs: {
        addSection: "addSection",
        exportAsPdf: "exportAsPdf",
        addToClipboard: "addToClipboard",
        changeView: "changeView",
        sendPin: "sendPin"
      },
      decls: 3,
      vars: 2,
      consts: [["class", "navbar-content", 4, "ngIf"], ["class", "access-pin", 4, "ngIf"], [1, "navbar-content"], [1, "nav-title"], ["class", "nav-user", 4, "ngIf"], [1, "routes"], [1, "nav-item"], [1, "nav-link", 3, "click"], [1, "nav-user"], [1, "access-pin"], [3, "pincodeLength", "pincodeEntered"], [1, "nav-title", "nav-user"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavbarComponent_div_1_Template, 16, 2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavbarComponent_div_2_Template, 4, 1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showContent);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showContent);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _components_pincode_component__WEBPACK_IMPORTED_MODULE_2__["PincodeComponent"]],
      styles: ["nav[_ngcontent-%COMP%] {\n  height: 100%;\n  letter-spacing: 2px;\n  box-shadow: 0px 10px 20px black;\n  font-size: 1rem;\n  font-family: \"Caveat\", cursive;\n  color: blue;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  background: rgb(59,59,59);\n  background: linear-gradient(\n    0deg, rgba(59,59,59, 1) 7%,\n    rgba(137,142,143, 1) 20%,\n    rgba(245,249,250, 1) 44%,\n    rgba(228,236,237, 1) 72%,\n    rgba(143,147,148, 1) 98%\n  );\n}\n\n.navbar-content[_ngcontent-%COMP%], .access-pin[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.single-digit[_ngcontent-%COMP%] {\n  width: 20px;\n  margin: 0 1px;\n  text-align: center;\n}\n\n.access-pin[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n\n.routes[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n}\n\n.nav-item[_ngcontent-%COMP%], .nav-title[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  z-index: 1;\n}\n\n.nav-link[_ngcontent-%COMP%] {\n  text-decoration: none !important;\n  color: inherit;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n\n.nav-item[_ngcontent-%COMP%]:before, .nav-item[_ngcontent-%COMP%]:after, .nav-title[_ngcontent-%COMP%]:before {\n  content: '';\n  z-index: -1;\n  height: 30px;\n  width: 80%;\n  display: block;\n  position: absolute;\n  background: rgba(255,255,200,.6);\n  box-shadow: 0 1px 3px rgba(0,0,0, .4);\n}\n\n.nav-title[_ngcontent-%COMP%] {\n  color: #464341;\n}\n\n.nav-title[_ngcontent-%COMP%]:before {\n  transform: rotateZ(-1deg);\n}\n\n.nav-item[_ngcontent-%COMP%]:after {\n  transform: rotateZ(-9deg);\n  bottom: 20%;\n}\n\n.nav-item[_ngcontent-%COMP%]:before {\n  transform: rotateZ(-8deg);\n  top: 20%;\n}\n\n.nav-link[_ngcontent-%COMP%] {\n  padding: 0 20px;\n}\n\n.nav-user[_ngcontent-%COMP%] {\n  padding: 0 35px;\n}\n\n.route-active[_ngcontent-%COMP%] {\n  background-color: #bada55;\n}\n\n.nav-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsK0JBQStCO0VBQy9CLGVBQWU7RUFDZiw4QkFBOEI7RUFDOUIsV0FBVztFQUNYLHlCQUFpQjtLQUFqQixzQkFBaUI7TUFBakIscUJBQWlCO1VBQWpCLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekI7Ozs7OztHQU1DO0FBQ0g7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7QUFJQTtFQUNFLGdDQUFnQztFQUNoQyxjQUFjO0VBQ2QsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLFVBQVU7RUFDVixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGdDQUFnQztFQUNoQyxxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuYXYge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGJveC1zaGFkb3c6IDBweCAxMHB4IDIwcHggYmxhY2s7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC1mYW1pbHk6IFwiQ2F2ZWF0XCIsIGN1cnNpdmU7XG4gIGNvbG9yOiBibHVlO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgYmFja2dyb3VuZDogcmdiKDU5LDU5LDU5KTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgIDBkZWcsIHJnYmEoNTksNTksNTksIDEpIDclLFxuICAgIHJnYmEoMTM3LDE0MiwxNDMsIDEpIDIwJSxcbiAgICByZ2JhKDI0NSwyNDksMjUwLCAxKSA0NCUsXG4gICAgcmdiYSgyMjgsMjM2LDIzNywgMSkgNzIlLFxuICAgIHJnYmEoMTQzLDE0NywxNDgsIDEpIDk4JVxuICApO1xufVxuXG4ubmF2YmFyLWNvbnRlbnQsIC5hY2Nlc3MtcGluIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc2luZ2xlLWRpZ2l0IHtcbiAgd2lkdGg6IDIwcHg7XG4gIG1hcmdpbjogMCAxcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmFjY2Vzcy1waW4ge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnJvdXRlcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5uYXYtaXRlbSwgLm5hdi10aXRsZSB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbn1cblxuXG5cbi5uYXYtbGluayB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xuICBjb2xvcjogaW5oZXJpdDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLm5hdi1pdGVtOmJlZm9yZSwgLm5hdi1pdGVtOmFmdGVyLCAubmF2LXRpdGxlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICcnO1xuICB6LWluZGV4OiAtMTtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogODAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjAwLC42KTtcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwwLDAsIC40KTtcbn1cblxuLm5hdi10aXRsZSB7XG4gIGNvbG9yOiAjNDY0MzQxO1xufVxuXG4ubmF2LXRpdGxlOmJlZm9yZSB7XG4gIHRyYW5zZm9ybTogcm90YXRlWigtMWRlZyk7XG59XG5cbi5uYXYtaXRlbTphZnRlciB7XG4gIHRyYW5zZm9ybTogcm90YXRlWigtOWRlZyk7XG4gIGJvdHRvbTogMjAlO1xufVxuXG4ubmF2LWl0ZW06YmVmb3JlIHtcbiAgdHJhbnNmb3JtOiByb3RhdGVaKC04ZGVnKTtcbiAgdG9wOiAyMCU7XG59XG5cbi5uYXYtbGluayB7XG4gIHBhZGRpbmc6IDAgMjBweDtcbn1cblxuLm5hdi11c2VyIHtcbiAgcGFkZGluZzogMCAzNXB4O1xufVxuXG4ucm91dGUtYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JhZGE1NTtcbn1cblxuLm5hdi1saW5rOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-navbar',
          template: "\n    <nav>\n      <div *ngIf=\"showContent\" class=\"navbar-content\">\n        <div class=\"nav-title \">\n          <div class=\"nav-user\" *ngIf=\"boardTitle\">\n            {{boardTitle}}\n          </div>\n        </div>\n        <span class=\"routes\">\n          <div class=\"nav-item\">\n            <span class=\"nav-link\" (click)=\"changeView.emit()\">\n              VIEW: {{viewStyle}}\n            </span>\n          </div>\n          <div class=\"nav-item\">\n            <span class=\"nav-link\" (click)=\"addToClipboard.emit()\">\n              COPY URL\n            </span>\n          </div>\n          <div class=\"nav-item\">\n            <span class=\"nav-link\" (click)=\"exportAsPdf.emit()\">\n              EXPORT\n            </span>\n          </div>\n          <div class=\"nav-item\">\n            <span class=\"nav-link\" (click)=\"addSection.emit()\">\n              +SECTION\n            </span>\n          </div>\n        </span>\n      </div>\n      <div *ngIf=\"!showContent\" class=\"access-pin\">\n        <app-pincode [pincodeLength]=\"4\" (pincodeEntered)=\"handlePinEntry($event)\">\n          <div class=\"nav-title nav-user\">This board is pin protected:</div>\n        </app-pincode>\n      </div>\n    </nav>\n  ",
          styleUrls: ['./navbar.component.css']
        }]
      }], null, {
        boardTitle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        viewStyle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        showContent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        addSection: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        exportAsPdf: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        addToClipboard: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        changeView: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        sendPin: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/pincode.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/components/pincode.component.ts ***!
    \*************************************************/

  /*! exports provided: PincodeComponent */

  /***/
  function srcAppComponentsPincodeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PincodeComponent", function () {
      return PincodeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _directives_active_focus_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../directives/active-focus.directive */
    "./src/app/directives/active-focus.directive.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function PincodeComponent_input_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function PincodeComponent_input_4_Template_input_keyup_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

          var i_r19 = ctx.index;

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r20.handleLastPinKey($event, i_r19);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = ["*"];

    var PincodeComponent = /*#__PURE__*/function () {
      function PincodeComponent() {
        _classCallCheck(this, PincodeComponent);

        this.pincodeEntered = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pincode = '';
      }

      _createClass(PincodeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this._characters = new Array(this.pincodeLength - 1); // minus 1 for the extra input outside the loop
        }
      }, {
        key: "handleKeyup",
        value: function handleKeyup(e) {
          this.pincode = this.pincode + e.target.value;
          var next = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"](e.target.nextElementSibling);
          next.nativeElement.focus();
        }
      }, {
        key: "handleLastPinKey",
        value: function handleLastPinKey(e, index) {
          if (index !== this.lastPinIndex) return;
          e.stopPropagation();
          this.pincodeEntered.emit(this.pincode + e.target.value);
          this.pincode = '';
        }
      }, {
        key: "characters",
        get: function get() {
          return this._characters;
        }
      }, {
        key: "lastPinIndex",
        get: function get() {
          return this._characters.length - 1;
        }
      }]);

      return PincodeComponent;
    }();

    PincodeComponent.ɵfac = function PincodeComponent_Factory(t) {
      return new (t || PincodeComponent)();
    };

    PincodeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PincodeComponent,
      selectors: [["app-pincode"]],
      inputs: {
        pincodeLength: "pincodeLength"
      },
      outputs: {
        pincodeEntered: "pincodeEntered"
      },
      ngContentSelectors: _c0,
      decls: 5,
      vars: 1,
      consts: [[1, "access-pin", 3, "keyup"], ["for", "pincode-first-char"], ["id", "pincode-first-char", "type", "password", "maxlength", "1", "activeFocus", "", 1, "single-digit"], ["type", "password", "class", "single-digit", "maxlength", "1", 3, "keyup", 4, "ngFor", "ngForOf"], ["type", "password", "maxlength", "1", 1, "single-digit", 3, "keyup"]],
      template: function PincodeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function PincodeComponent_Template_div_keyup_0_listener($event) {
            return ctx.handleKeyup($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PincodeComponent_input_4_Template, 1, 0, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.characters);
        }
      },
      directives: [_directives_active_focus_directive__WEBPACK_IMPORTED_MODULE_1__["ActiveFocusDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: [".access-pin[_ngcontent-%COMP%] {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n    }\n\n    .single-digit[_ngcontent-%COMP%] {\n      width: 20px;\n      margin: 0 1px;\n      text-align: center;\n    }\n\n    .access-pin[_ngcontent-%COMP%] {\n      justify-content: center;\n    }"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PincodeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-pincode',
          template: "\n    <div class=\"access-pin\" (keyup)=\"handleKeyup($event)\">\n      <label for=\"pincode-first-char\">\n        <ng-content></ng-content>\n      </label>\n      <input\n        id=\"pincode-first-char\"\n        type=\"password\"\n        class=\"single-digit\"\n        maxlength=\"1\"\n        activeFocus\n      />\n      <input\n        type=\"password\"\n        class=\"single-digit\"\n        maxlength=\"1\"\n        *ngFor=\"let char of characters; index as i;\"\n        (keyup)=\"handleLastPinKey($event, i)\"\n      />\n    </div>\n  ",
          styles: ["\n    .access-pin {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n    }\n\n    .single-digit {\n      width: 20px;\n      margin: 0 1px;\n      text-align: center;\n    }\n\n    .access-pin {\n      justify-content: center;\n    }\n  "]
        }]
      }], null, {
        pincodeLength: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        pincodeEntered: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/directives/active-focus.directive.ts":
  /*!******************************************************!*\
    !*** ./src/app/directives/active-focus.directive.ts ***!
    \******************************************************/

  /*! exports provided: ActiveFocusDirective */

  /***/
  function srcAppDirectivesActiveFocusDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActiveFocusDirective", function () {
      return ActiveFocusDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ActiveFocusDirective = /*#__PURE__*/function () {
      function ActiveFocusDirective(eleRef) {
        _classCallCheck(this, ActiveFocusDirective);

        this.eleRef = eleRef;
      }

      _createClass(ActiveFocusDirective, [{
        key: "putCursorAtEnd",
        value: function putCursorAtEnd(el) {
          if (typeof el.selectionStart == "number") {
            el.selectionStart = el.selectionEnd = el.value.length;
            el.focus();
          } else if (el.createTextRange) {
            el.focus();
            var range = el.createTextRange();
            range.collapse(false);
            range.select();
          }
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.putCursorAtEnd(this.eleRef.nativeElement);
        }
      }]);

      return ActiveFocusDirective;
    }();

    ActiveFocusDirective.ɵfac = function ActiveFocusDirective_Factory(t) {
      return new (t || ActiveFocusDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    ActiveFocusDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: ActiveFocusDirective,
      selectors: [["", "activeFocus", ""]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ActiveFocusDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[activeFocus]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/graphql.module.ts":
  /*!***********************************!*\
    !*** ./src/app/graphql.module.ts ***!
    \***********************************/

  /*! exports provided: GraphQLModule */

  /***/
  function srcAppGraphqlModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GraphQLModule", function () {
      return GraphQLModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var apollo_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! apollo-angular */
    "./node_modules/apollo-angular/__ivy_ngcc__/fesm2015/ngApollo.js");
    /* harmony import */


    var apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! apollo-angular-link-http */
    "./node_modules/apollo-angular-link-http/__ivy_ngcc__/fesm2015/ngApolloLinkHttp.js");
    /* harmony import */


    var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! apollo-cache-inmemory */
    "./node_modules/apollo-cache-inmemory/lib/bundle.esm.js");
    /* harmony import */


    var apollo_link_ws__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! apollo-link-ws */
    "./node_modules/apollo-link-ws/lib/bundle.esm.js");
    /* harmony import */


    var apollo_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! apollo-link */
    "./node_modules/apollo-link/lib/bundle.esm.js");
    /* harmony import */


    var apollo_link_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! apollo-link-context */
    "./node_modules/apollo-link-context/lib/bundle.esm.js");
    /* harmony import */


    var apollo_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! apollo-utilities */
    "./node_modules/apollo-utilities/lib/bundle.esm.js"); // const uri = 'http://localhost:3000/graphql';


    var SERVER_PATH = 'localhost:4000/graphql'; // <-- add the URL of the GraphQL server here
    // export function createApollo(httpLink: HttpLink) {
    //   return {
    //     link: httpLink.create({uri: `http://${SERVER_PATH}`}),
    //     cache: new InMemoryCache(),
    //   };
    // }

    var GraphQLModule = function GraphQLModule() {
      _classCallCheck(this, GraphQLModule);
    };

    GraphQLModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: GraphQLModule
    });
    GraphQLModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function GraphQLModule_Factory(t) {
        return new (t || GraphQLModule)();
      },
      providers: [{
        provide: apollo_angular__WEBPACK_IMPORTED_MODULE_1__["APOLLO_OPTIONS"],
        useFactory: function useFactory(httpLink) {
          var ws = new apollo_link_ws__WEBPACK_IMPORTED_MODULE_4__["WebSocketLink"]({
            uri: "ws://".concat(SERVER_PATH),
            options: {
              reconnect: true
            }
          });
          var http = httpLink.create({
            uri: "http://".concat(SERVER_PATH)
          });
          var authLink = Object(apollo_link_context__WEBPACK_IMPORTED_MODULE_6__["setContext"])(function (_, _ref13) {
            var headers = _ref13.headers;
            // get the authentication token from local storage if it exists
            var token = localStorage.getItem('token'); // return the headers to the context so httpLink can read them

            return {
              headers: Object.assign(Object.assign({}, headers), {
                authorization: token ? "Bearer ".concat(token) : ""
              })
            };
          }); // const errorLink = onError(({ graphQLErrors, networkError }) => {
          //   if (graphQLErrors)
          //     graphQLErrors.map(({ message, locations, path }) =>
          //       console.log(
          //         `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
          //       ),
          //     );
          //   if (networkError) console.log(`[Network error]: ${networkError}`);
          // });

          return {
            cache: new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_3__["InMemoryCache"](),
            link: Object(apollo_link__WEBPACK_IMPORTED_MODULE_5__["split"])(function (_ref14) {
              var query = _ref14.query;

              var _Object = Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_7__["getMainDefinition"])(query),
                  kind = _Object.kind,
                  operation = _Object.operation;

              return kind === 'OperationDefinition' && operation === 'subscription';
            }, ws, authLink.concat(http))
          };
        },
        deps: [apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_2__["HttpLink"]]
      }],
      imports: [apollo_angular__WEBPACK_IMPORTED_MODULE_1__["ApolloModule"], apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_2__["HttpLinkModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GraphQLModule, {
        exports: [apollo_angular__WEBPACK_IMPORTED_MODULE_1__["ApolloModule"], apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_2__["HttpLinkModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GraphQLModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          exports: [apollo_angular__WEBPACK_IMPORTED_MODULE_1__["ApolloModule"], apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_2__["HttpLinkModule"]],
          providers: [{
            provide: apollo_angular__WEBPACK_IMPORTED_MODULE_1__["APOLLO_OPTIONS"],
            useFactory: function useFactory(httpLink) {
              var ws = new apollo_link_ws__WEBPACK_IMPORTED_MODULE_4__["WebSocketLink"]({
                uri: "ws://".concat(SERVER_PATH),
                options: {
                  reconnect: true
                }
              });
              var http = httpLink.create({
                uri: "http://".concat(SERVER_PATH)
              });
              var authLink = Object(apollo_link_context__WEBPACK_IMPORTED_MODULE_6__["setContext"])(function (_, _ref15) {
                var headers = _ref15.headers;
                // get the authentication token from local storage if it exists
                var token = localStorage.getItem('token'); // return the headers to the context so httpLink can read them

                return {
                  headers: Object.assign(Object.assign({}, headers), {
                    authorization: token ? "Bearer ".concat(token) : ""
                  })
                };
              }); // const errorLink = onError(({ graphQLErrors, networkError }) => {
              //   if (graphQLErrors)
              //     graphQLErrors.map(({ message, locations, path }) =>
              //       console.log(
              //         `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
              //       ),
              //     );
              //   if (networkError) console.log(`[Network error]: ${networkError}`);
              // });

              return {
                cache: new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_3__["InMemoryCache"](),
                link: Object(apollo_link__WEBPACK_IMPORTED_MODULE_5__["split"])(function (_ref16) {
                  var query = _ref16.query;

                  var _Object2 = Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_7__["getMainDefinition"])(query),
                      kind = _Object2.kind,
                      operation = _Object2.operation;

                  return kind === 'OperationDefinition' && operation === 'subscription';
                }, ws, authLink.concat(http))
              };
            },
            deps: [apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_2__["HttpLink"]]
          }]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/board-page.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/board-page.component.ts ***!
    \***********************************************/

  /*! exports provided: BoardPageComponent */

  /***/
  function srcAppPagesBoardPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BoardPageComponent", function () {
      return BoardPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var copy_text_to_clipboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! copy-text-to-clipboard */
    "./node_modules/copy-text-to-clipboard/index.js");
    /* harmony import */


    var copy_text_to_clipboard__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(copy_text_to_clipboard__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _services_board_activity_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @services/board-activity.service */
    "./src/app/services/board-activity.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_export_board_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @services/export-board.service */
    "./src/app/services/export-board.service.ts");
    /* harmony import */


    var _services_color_provider_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @services/color-provider.service */
    "./src/app/services/color-provider.service.ts");
    /* harmony import */


    var _services_browser_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @services/browser-storage.service */
    "./src/app/services/browser-storage.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_navbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @components/navbar.component */
    "./src/app/components/navbar.component.ts");
    /* harmony import */


    var _components_idea_card_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @components/idea-card.component */
    "./src/app/components/idea-card.component.ts");
    /* harmony import */


    var _directives_active_focus_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../directives/active-focus.directive */
    "./src/app/directives/active-focus.directive.ts");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _components_idea_section_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @components/idea-section.component */
    "./src/app/components/idea-section.component.ts");

    function BoardPageComponent_span_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "textarea", 8, 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function BoardPageComponent_span_5_Template_textarea_keyup_enter_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40);

          var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r39.createSection(_r38);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "fa-icon", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BoardPageComponent_span_5_Template_fa_icon_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40);

          var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r41.createSection(_r38);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r36.plusIcon);
      }
    }

    function BoardPageComponent_app_idea_section_7_app_idea_card_6_span_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "textarea", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function BoardPageComponent_app_idea_section_7_app_idea_card_6_span_1_Template_textarea_change_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50);

          var card_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r49.changeTextOnCurrentCard($event, card_r45);
        })("keydown.enter", function BoardPageComponent_app_idea_section_7_app_idea_card_6_span_1_Template_textarea_keydown_enter_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50);

          var card_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var section_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r52.changeAndSaveCard($event, card_r45, section_r42);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "fa-icon", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BoardPageComponent_app_idea_section_7_app_idea_card_6_span_1_Template_fa_icon_click_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50);

          var card_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var section_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r55.deleteCard($event, card_r45, section_r42);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var card_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](card_r45.text);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r46.trashIcon);
      }
    }

    function BoardPageComponent_app_idea_section_7_app_idea_card_6_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var card_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](card_r45.text);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("- ", card_r45.author, "");
      }
    }

    function BoardPageComponent_app_idea_section_7_app_idea_card_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-idea-card", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BoardPageComponent_app_idea_section_7_app_idea_card_6_Template_app_idea_card_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61);

          var card_r45 = ctx.$implicit;

          var section_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r60.saveCard($event, card_r45, section_r42);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BoardPageComponent_app_idea_section_7_app_idea_card_6_span_1_Template, 4, 2, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BoardPageComponent_app_idea_section_7_app_idea_card_6_ng_template_2_Template, 4, 2, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var card_r45 = ctx.$implicit;

        var _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

        var i_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

        var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("backgroundColor", ctx_r44.getColorForSection(i_r43))("editing", ctx_r44.isEditing(card_r45.id))("withPin", true);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r44.isEditing(card_r45.id))("ngIfElse", _r47);
      }
    }

    function BoardPageComponent_app_idea_section_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-idea-section");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-idea-card", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "fa-icon", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BoardPageComponent_app_idea_section_7_Template_fa_icon_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r65);

          var section_r42 = ctx.$implicit;

          var ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r64.createCard(section_r42);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "fa-icon", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BoardPageComponent_app_idea_section_7_Template_fa_icon_click_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r65);

          var section_r42 = ctx.$implicit;

          var ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r66.deleteSection(section_r42, $event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BoardPageComponent_app_idea_section_7_app_idea_card_6_Template, 4, 5, "app-idea-card", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var section_r42 = ctx.$implicit;

        var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", section_r42.title, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r37.plusIcon);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r37.trashIcon);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", section_r42.cards)("ngForTrackBy", ctx_r37.trackById);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "visible": a0
      };
    };

    var _c1 = function _c1(a1) {
      return {
        "blank-card": true,
        "blank-card__visible": a1
      };
    };

    var View;

    (function (View) {
      View["Clean"] = "CLEAN";
      View["Artsy"] = "ARTSY";
    })(View || (View = {}));

    var BoardPageComponent = /*#__PURE__*/function () {
      function BoardPageComponent(boardActivitySvc, route, exportSvc, colorProvider, browserStorageSvc) {
        _classCallCheck(this, BoardPageComponent);

        this.boardActivitySvc = boardActivitySvc;
        this.route = route;
        this.exportSvc = exportSvc;
        this.colorProvider = colorProvider;
        this.browserStorageSvc = browserStorageSvc;
        this.isAddingSection = false;
        this.requiresPin = false; // icons for use in template

        this.trashIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faTrashAlt"];
        this.plusIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faPlusSquare"];
      }
      /***********************************************************************************
                                   LIFECYCLE METHODS
      ************************************************************************************/


      _createClass(BoardPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.view = View.Artsy;
          this.cardBeingEdited = null;
          this.subscription = this.getBoard();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscription.unsubscribe();
        }
        /***********************************************************************************
                                     GETTERS / SETTERS
        ************************************************************************************/

      }, {
        key: "trackById",

        /***********************************************************************************
                                     HELPER METHODS
        ************************************************************************************/
        // prevent unnecessary re-rendering of existing cards
        value: function trackById(index, item) {
          return item.id;
        }
      }, {
        key: "getColorForSection",
        value: function getColorForSection(num) {
          return this.colorProvider.colorAtIndex(num);
        }
      }, {
        key: "resetCreateSectionCard",
        value: function resetCreateSectionCard(sectionTitle) {
          sectionTitle.value = '';
          this.isAddingSection = false;
        }
      }, {
        key: "isEditing",
        value: function isEditing(cardId) {
          return this.cardBeingEdited && this.cardBeingEdited.id === cardId;
        }
      }, {
        key: "filterById",
        value: function filterById(searchId) {
          return function (arrayOfObjects) {
            return arrayOfObjects.filter(function (obj) {
              return obj.id === searchId;
            });
          };
        }
      }, {
        key: "changeTextOnCurrentCard",
        value: function changeTextOnCurrentCard(event, card) {
          card.text = event.target.value;
        }
        /***********************************************************************************
                                     CRUD ACTIONS
        ************************************************************************************/

      }, {
        key: "getBoard",
        value: function getBoard() {
          var _this2 = this;

          return this.route.params.subscribe(function (params) {
            _this2.boardId = params && params.id;

            _this2.boardActivitySvc.getBoardTitle(_this2.boardId).subscribe(function (title) {
              return _this2.boardTitle = title;
            });

            _this2.sections$ = _this2.boardActivitySvc.getBoard(_this2.boardId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              if (err.graphQLErrors) {
                var requiresPin = err.graphQLErrors.some(function (graphQLError) {
                  return graphQLError.message === 'Access pin required';
                });

                if (requiresPin) {
                  _this2.requiresPin = true;
                }
              }

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          });
        }
      }, {
        key: "sendPin",
        value: function sendPin(number) {
          var _this3 = this;

          // send boardId, and pin
          this.boardActivitySvc.unlockBoard(this.boardId, number).subscribe(function (response) {
            _this3.requiresPin = false;
            _this3.subscription = _this3.getBoard();
          });
        }
      }, {
        key: "createCard",
        value: function createCard(section) {
          var _this4 = this;

          if (this.isAddingSection) return;
          this.boardActivitySvc.createCard(section.id, this.username, this.boardId).subscribe(function (card) {
            return _this4.cardBeingEdited = {
              id: card.id,
              parentSectionId: section.id
            };
          });
        }
      }, {
        key: "changeAndSaveCard",
        value: function changeAndSaveCard(event, card, section) {
          this.changeTextOnCurrentCard(event, card);
          this.cardBeingEdited = {
            id: card.id,
            parentSectionId: section.id
          };
        }
      }, {
        key: "createSection",
        value: function createSection(sectionTitle) {
          this.boardActivitySvc.createSection(this.boardId, sectionTitle.value).subscribe();
          this.resetCreateSectionCard(sectionTitle);
        }
      }, {
        key: "saveCard",
        value: function saveCard(evt, card, section) {
          if (this.isAddingSection) return;

          if (evt.target.hasAttribute('pin')) {
            this.cardBeingEdited = {
              id: card.id,
              parentSectionId: section.id
            };
          }
        }
      }, {
        key: "deleteCard",
        value: function deleteCard(event, card, section) {
          this.boardActivitySvc.deleteCard(card, section, this.boardId).subscribe();
        }
      }, {
        key: "deleteSection",
        value: function deleteSection(section, event) {
          event.preventDefault();
          event.stopPropagation();
          this.boardActivitySvc.deleteSection(section, this.boardId).subscribe();
        }
      }, {
        key: "saveCurrentlySelectedCard$",
        value: function saveCurrentlySelectedCard$(cardToFind) {
          var _this5 = this;

          return this.sections$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.filterById(cardToFind.parentSectionId)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])('0', 'cards'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.filterById(cardToFind.id)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])('0'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (card) {
            return card ? _this5.boardActivitySvc.saveCard(cardToFind.parentSectionId, card, _this5.boardId) : rxjs__WEBPACK_IMPORTED_MODULE_2__["EMPTY"];
          }));
        }
        /***********************************************************************************
                                     NAVBAR ACTIONS
        ************************************************************************************/

      }, {
        key: "exportAsPdf",
        value: function exportAsPdf(title) {
          var _this6 = this;

          this.sections$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1)).subscribe(function (sections) {
            _this6.exportSvc.exportAsPdf(title, sections);
          });
        }
      }, {
        key: "addToClipboard",
        value: function addToClipboard() {
          copy_text_to_clipboard__WEBPACK_IMPORTED_MODULE_4___default()(window.location.href);
        }
      }, {
        key: "addSection",
        value: function addSection() {
          this.cardBeingEdited = null;
          this.isAddingSection = !this.isAddingSection;
        }
      }, {
        key: "changeView",
        value: function changeView() {
          this.view = this.view === View.Artsy ? View.Clean : View.Artsy;
        }
      }, {
        key: "username",
        get: function get() {
          var user = this.browserStorageSvc.user;
          return user.username;
        } // The idea of this setter method is to save any card as it exits edit mode.
        // i.e, when it is pinned back to the board.

      }, {
        key: "cardBeingEdited",
        set: function set(card) {
          var _this7 = this;

          var noNewCardWasSelected = function noNewCardWasSelected() {
            return card == null;
          };

          var selectedCardWasClickedAgain = function selectedCardWasClickedAgain() {
            return _this7._cardBeingEdited.id === card.id;
          };

          var aCardIsAlreadySelected = function aCardIsAlreadySelected() {
            return !!_this7._cardBeingEdited;
          };

          var aCardWasSelected = function aCardWasSelected() {
            return card != null;
          };

          if (aCardIsAlreadySelected()) {
            // Save the card
            this.saveCurrentlySelectedCard$(this._cardBeingEdited).subscribe();

            if (noNewCardWasSelected() || selectedCardWasClickedAgain()) {
              // Exit editing mode
              this._cardBeingEdited = null;
            } else {
              // Swap the card being edited
              this._cardBeingEdited = {
                id: card.id,
                parentSectionId: card.parentSectionId
              };
            }
          } else if (aCardWasSelected()) {
            // Enter edit mode with selected card
            this._cardBeingEdited = {
              id: card.id,
              parentSectionId: card.parentSectionId
            };
          }
        },
        get: function get() {
          return this._cardBeingEdited;
        }
      }]);

      return BoardPageComponent;
    }();

    BoardPageComponent.ɵfac = function BoardPageComponent_Factory(t) {
      return new (t || BoardPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_board_activity_service__WEBPACK_IMPORTED_MODULE_5__["BoardActivityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_export_board_service__WEBPACK_IMPORTED_MODULE_7__["ExportBoardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_color_provider_service__WEBPACK_IMPORTED_MODULE_8__["ColorProviderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_browser_storage_service__WEBPACK_IMPORTED_MODULE_9__["BrowserStorageService"]));
    };

    BoardPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BoardPageComponent,
      selectors: [["app-home-page"]],
      decls: 9,
      vars: 14,
      consts: [[1, "overlay", 3, "ngClass"], [1, "nav-container"], [3, "showContent", "boardTitle", "viewStyle", "addSection", "exportAsPdf", "addToClipboard", "changeView", "sendPin"], [1, "main-container"], ["backgroundColor", "white", "fontSize", "1.2em", 3, "ngClass"], [4, "ngIf"], [1, "main-cover"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["maxLength", "50", "activeFocus", "", 3, "keyup.enter"], ["section", ""], [1, "icon", "icon-plus", 3, "icon", "click"], ["backgroundColor", "white", "fontSize", "1.2em", 1, "title"], [1, "icon", "icon-trash", 3, "icon", "click"], [3, "backgroundColor", "editing", "withPin", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "backgroundColor", "editing", "withPin", "click"], [4, "ngIf", "ngIfElse"], ["cardText", ""], ["activeFocus", "", 3, "change", "keydown.enter"], [1, "card-text"], [1, "icon", "icon-trash"]],
      template: function BoardPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-navbar", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("addSection", function BoardPageComponent_Template_app_navbar_addSection_2_listener() {
            return ctx.addSection();
          })("exportAsPdf", function BoardPageComponent_Template_app_navbar_exportAsPdf_2_listener() {
            return ctx.exportAsPdf(ctx.boardTitle);
          })("addToClipboard", function BoardPageComponent_Template_app_navbar_addToClipboard_2_listener() {
            return ctx.addToClipboard();
          })("changeView", function BoardPageComponent_Template_app_navbar_changeView_2_listener() {
            return ctx.changeView();
          })("sendPin", function BoardPageComponent_Template_app_navbar_sendPin_2_listener($event) {
            return ctx.sendPin($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-idea-card", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BoardPageComponent_span_5_Template, 4, 1, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, BoardPageComponent_app_idea_section_7_Template, 7, 5, "app-idea-section", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx.isAddingSection));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showContent", !ctx.requiresPin)("boardTitle", ctx.boardTitle)("viewStyle", ctx.view);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c1, ctx.isAddingSection));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAddingSection);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 8, ctx.sections$))("ngForTrackBy", ctx.trackById);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], _components_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"], _components_idea_card_component__WEBPACK_IMPORTED_MODULE_12__["IdeaCardComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _directives_active_focus_directive__WEBPACK_IMPORTED_MODULE_13__["ActiveFocusDirective"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__["FaIconComponent"], _components_idea_section_component__WEBPACK_IMPORTED_MODULE_15__["IdeaSectionComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["AsyncPipe"]],
      styles: [".main-cover[_ngcontent-%COMP%] {\n  \n  background-image: url('cork_adjusted_2.jpg');\n  display: flex;\n  flex-wrap: wrap;\n  max-width: 100vw;\n  min-height: 100%;\n  position: relative;\n  z-index: 2;\n}\n\napp-idea-card[_ngcontent-%COMP%] {\n  display: inline-block;\n  \n  position: relative;\n  \n}\n\napp-idea-card[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\napp-board-tape[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\napp-idea-section[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\napp-idea-section[_ngcontent-%COMP%]:last-child {\n  overflow: hidden;\n  padding-bottom: 50px;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  resize: none;\n  width: 100%;\n  box-sizing: border-box;\n  height: 100%;\n  overflow: hidden;\n  background-color: transparent;\n  padding: 20px 0;\n  font-family: \"Caveat\", cursive;\n  font-size: 1.1rem;\n}\n\n.blank-card[_ngcontent-%COMP%] {\n  position: fixed;\n  right: 0;\n  transform: translate3d(300px, 50px, 0) rotateZ(-30deg);\n  transition: transform .3s;\n  z-index: 10000;\n}\n\n.blank-card.blank-card__visible[_ngcontent-%COMP%] {\n  transform: none;\n}\n\n.blank-card[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .title[_ngcontent-%COMP%] {\n  font-size: 1.8em;\n  font-weight: bold;\n}\n\n.icon[_ngcontent-%COMP%] {\n  opacity: .3;\n  font-size: 1rem;\n  position: absolute;\n  bottom: 0px;\n}\n\n.icon.icon-trash[_ngcontent-%COMP%] {\n  right: -10px;\n}\n\n.title[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  opacity: 0;\n  transition: opacity .2s;\n}\n\n.title[_ngcontent-%COMP%]:hover   .icon[_ngcontent-%COMP%] {\n  opacity: .3;\n}\n\n.nav-container[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 0;\n  right: 0;\n  height: var(--navbar-height);\n  z-index: 60;\n}\n\n.main-container[_ngcontent-%COMP%] {\n  margin-top: var(--navbar-height);\n  height: calc(100vh - var(--navbar-height));\n  overflow: auto;\n  position: relative;\n}\n\n.overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 5;\n  background: black;\n  opacity: 0;\n  \n  visibility: hidden;\n  transition: visibility 0s linear .3s, opacity .3s;\n}\n\n.overlay.visible[_ngcontent-%COMP%] {\n  opacity: .5;\n  transition: visibility 0s linear 0s, opacity .3s;\n  visibility: visible;\n}\n\n.card-text[_ngcontent-%COMP%] {\n  max-height: 75%;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYm9hcmQtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUdBQXVHO0VBQ3ZHLDRDQUF5RDtFQUN6RCxhQUFhO0VBQ2IsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0VBQ1osV0FBVztFQUNYLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLDZCQUE2QjtFQUM3QixlQUFlO0VBQ2YsOEJBQThCO0VBQzlCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixRQUFRO0VBQ1Isc0RBQXNEO0VBQ3RELHlCQUF5QjtFQUN6QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLE9BQU87RUFDUCxRQUFRO0VBQ1IsNEJBQTRCO0VBQzVCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQywwQ0FBMEM7RUFDMUMsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0VBQ1IsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQixpREFBaUQ7QUFDbkQ7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0RBQWdEO0VBQ2hELG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ib2FyZC1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jb3ZlciB7XG4gIC8qYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vaS5waW5pbWcuY29tL29yaWdpbmFscy9kZC9lNC85My9kZGU0OTMzYmFmOGRiYWM2ZTNiNzgzYzI1MzhjMGJmYS5qcGcpOyovXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2NvcmtfYWRqdXN0ZWRfMi5qcGcnKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXgtd2lkdGg6IDEwMHZ3O1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDI7XG59XG5cbmFwcC1pZGVhLWNhcmQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIC8qaGVpZ2h0OiAxNzBweDsqL1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC8qei1pbmRleDogMjsqL1xufVxuXG5hcHAtaWRlYS1jYXJkOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuYXBwLWJvYXJkLXRhcGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuYXBwLWlkZWEtc2VjdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5hcHAtaWRlYS1zZWN0aW9uOmxhc3QtY2hpbGQge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbn1cblxudGV4dGFyZWEge1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHJlc2l6ZTogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHBhZGRpbmc6IDIwcHggMDtcbiAgZm9udC1mYW1pbHk6IFwiQ2F2ZWF0XCIsIGN1cnNpdmU7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xufVxuXG4uYmxhbmstY2FyZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMzAwcHgsIDUwcHgsIDApIHJvdGF0ZVooLTMwZGVnKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zcztcbiAgei1pbmRleDogMTAwMDA7XG59XG5cbi5ibGFuay1jYXJkLmJsYW5rLWNhcmRfX3Zpc2libGUge1xuICB0cmFuc2Zvcm06IG5vbmU7XG59XG5cbi5ibGFuay1jYXJkIHRleHRhcmVhLCAudGl0bGUge1xuICBmb250LXNpemU6IDEuOGVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5pY29uIHtcbiAgb3BhY2l0eTogLjM7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDBweDtcbn1cbi5pY29uLmljb24tdHJhc2gge1xuICByaWdodDogLTEwcHg7XG59XG5cbi50aXRsZSAuaWNvbiB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgLjJzO1xufVxuXG4udGl0bGU6aG92ZXIgLmljb24ge1xuICBvcGFjaXR5OiAuMztcbn1cblxuLm5hdi1jb250YWluZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBoZWlnaHQ6IHZhcigtLW5hdmJhci1oZWlnaHQpO1xuICB6LWluZGV4OiA2MDtcbn1cblxuLm1haW4tY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogdmFyKC0tbmF2YmFyLWhlaWdodCk7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIHZhcigtLW5hdmJhci1oZWlnaHQpKTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLm92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgei1pbmRleDogNTtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIG9wYWNpdHk6IDA7XG4gIC8qdHJhbnNpdGlvbjogb3BhY2l0eSAuMnM7Ki9cbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDBzIGxpbmVhciAuM3MsIG9wYWNpdHkgLjNzO1xufVxuXG4ub3ZlcmxheS52aXNpYmxlIHtcbiAgb3BhY2l0eTogLjU7XG4gIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMHMgbGluZWFyIDBzLCBvcGFjaXR5IC4zcztcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuLmNhcmQtdGV4dCB7XG4gIG1heC1oZWlnaHQ6IDc1JTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BoardPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home-page',
          templateUrl: './board-page.component.html',
          styleUrls: ['./board-page.component.css']
        }]
      }], function () {
        return [{
          type: _services_board_activity_service__WEBPACK_IMPORTED_MODULE_5__["BoardActivityService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }, {
          type: _services_export_board_service__WEBPACK_IMPORTED_MODULE_7__["ExportBoardService"]
        }, {
          type: _services_color_provider_service__WEBPACK_IMPORTED_MODULE_8__["ColorProviderService"]
        }, {
          type: _services_browser_storage_service__WEBPACK_IMPORTED_MODULE_9__["BrowserStorageService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/home-page.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/pages/home-page.component.ts ***!
    \**********************************************/

  /*! exports provided: HomePageComponent */

  /***/
  function srcAppPagesHomePageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageComponent", function () {
      return HomePageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_board_activity_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @services/board-activity.service */
    "./src/app/services/board-activity.service.ts");
    /* harmony import */


    var _services_browser_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @services/browser-storage.service */
    "./src/app/services/browser-storage.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _components_pincode_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @components/pincode.component */
    "./src/app/components/pincode.component.ts");

    var _c0 = function _c0(a0) {
      return {
        "active": a0
      };
    };

    function HomePageComponent_span_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomePageComponent_span_12_Template_span_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

          var sectionName_r27 = ctx.$implicit;

          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r28.handleSelectSectionClick(sectionName_r27);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var sectionName_r27 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, sectionName_r27.selected));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", sectionName_r27.text, " ");
      }
    }

    function HomePageComponent_span_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomePageComponent_span_13_Template_span_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);

          var sectionName_r30 = ctx.$implicit;

          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r31.handleSelectSectionClick(sectionName_r30);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var sectionName_r30 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, sectionName_r30.selected));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", sectionName_r30.text, " ");
      }
    }

    function HomePageComponent_app_pincode_15_Template(rf, ctx) {
      if (rf & 1) {
        var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-pincode", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pincodeEntered", function HomePageComponent_app_pincode_15_Template_app_pincode_pincodeEntered_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34);

          var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r33.handlePincodeEntry($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Secure board with pincode:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pincodeLength", 4);
      }
    }

    function HomePageComponent_fa_icon_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "fa-icon", 20);
      }

      if (rf & 2) {
        var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r26.lockIcon);
      }
    }

    var _c1 = function _c1(a0) {
      return {
        "visible": a0
      };
    };

    var HomePageComponent = /*#__PURE__*/function () {
      function HomePageComponent(router, boardActivitySvc, browserStorageSvc) {
        _classCallCheck(this, HomePageComponent);

        this.router = router;
        this.boardActivitySvc = boardActivitySvc;
        this.browserStorageSvc = browserStorageSvc;
        this.cogIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCog"];
        this.lockIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faLock"];
        this.settingsActive = false;
        this.sectionNameIdeas = [{
          text: 'What went well?',
          selected: false
        }, {
          text: 'What could be improved?',
          selected: false
        }, {
          text: 'Keep doing',
          selected: false
        }, {
          text: 'Start doing',
          selected: false
        }, {
          text: 'Stop doing',
          selected: false
        }, {
          text: 'Less of',
          selected: false
        }, {
          text: 'More of',
          selected: false
        }, {
          text: 'Action items',
          selected: false
        }, {
          text: 'Pros',
          selected: false
        }, {
          text: 'Cons',
          selected: false
        }, {
          text: 'Risks',
          selected: false
        }, {
          text: 'Opportunities',
          selected: false
        }, {
          text: 'Assumptions',
          selected: false
        }, {
          text: 'Thanks',
          selected: false
        }];
      }

      _createClass(HomePageComponent, [{
        key: "handleSelectSectionClick",
        value: function handleSelectSectionClick(sectionName) {
          sectionName.selected = !sectionName.selected;
        }
      }, {
        key: "handlePincodeEntry",
        value: function handlePincodeEntry(pincode) {
          this.accessPin = pincode;
          this.toggleSettingsPanel();
        }
      }, {
        key: "toggleSettingsPanel",
        value: function toggleSettingsPanel() {
          this.settingsActive = !this.settingsActive;
        }
      }, {
        key: "handleCreateBoardClick",
        value: function handleCreateBoardClick(boardTitle) {
          var _this8 = this;

          var selectedSections = this.sectionNameIdeas.filter(function (section) {
            return section.selected;
          }).map(function (section) {
            return section.text;
          });
          this.boardActivitySvc.createBoard(this.browserStorageSvc.user, selectedSections, boardTitle, this.accessPin).subscribe(function (newBoard) {
            if (newBoard) {
              _this8.router.navigate(['/board/', newBoard.data.addBoard.id]);
            }
          });
        }
      }]);

      return HomePageComponent;
    }();

    HomePageComponent.ɵfac = function HomePageComponent_Factory(t) {
      return new (t || HomePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_board_activity_service__WEBPACK_IMPORTED_MODULE_3__["BoardActivityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_browser_storage_service__WEBPACK_IMPORTED_MODULE_4__["BrowserStorageService"]));
    };

    HomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomePageComponent,
      selectors: [["app-home-page"]],
      decls: 23,
      vars: 8,
      consts: [[1, "main-cover"], [1, "panel"], [1, "panel-form"], [1, "title-input-group"], ["for", "board-title"], ["type", "text", "id", "board-title"], ["boardTitle", ""], [1, "panel-image"], [1, "panel-overlay"], ["class", "name-idea name-idea__invisible", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["class", "name-idea", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "settings", 3, "ngClass"], [3, "pincodeLength", "pincodeEntered", 4, "ngIf"], [3, "click"], ["class", "icon icon-lock", 3, "icon", 4, "ngIf"], [3, "icon"], [1, "name-idea", "name-idea__invisible", 3, "ngClass", "click"], [1, "name-idea", 3, "ngClass", "click"], [3, "pincodeLength", "pincodeEntered"], [2, "margin-right", "10px"], [1, "icon", "icon-lock", 3, "icon"]],
      template: function HomePageComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Board Title:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HomePageComponent_span_12_Template, 2, 4, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, HomePageComponent_span_13_Template, 2, 4, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, HomePageComponent_app_pincode_15_Template, 3, 1, "app-pincode", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomePageComponent_Template_button_click_18_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35);

            var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

            return ctx.handleCreateBoardClick(_r22.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, HomePageComponent_fa_icon_19_Template, 1, 1, "fa-icon", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Create New Idea Board ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomePageComponent_Template_button_click_21_listener() {
            return ctx.toggleSettingsPanel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "fa-icon", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sectionNameIdeas);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sectionNameIdeas);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, ctx.settingsActive));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.settingsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.accessPin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.cogIcon);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FaIconComponent"], _components_pincode_component__WEBPACK_IMPORTED_MODULE_7__["PincodeComponent"]],
      styles: [".main-cover[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.panel[_ngcontent-%COMP%] {\n  width: 500px;\n  height: 450px;\n  \n  display: flex;\n  flex-direction: column;\n  border: 2px solid #eae6e6;\n  overflow: hidden;\n}\n\n.panel-image[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 2;\n  background-image: url('cork_adjusted_2.jpg');\n  border-bottom: 2px solid #4f4e4e;\n  border-top: 2px solid #4f4e4e;\n}\n\n.panel-overlay[_ngcontent-%COMP%] {\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  position: absolute;\n  background: black;\n  opacity: .3;\n  z-index:100;\n}\n\n.panel-form[_ngcontent-%COMP%] {\n  flex: 1;\n  background-color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #eae6e6;\n  z-index: 101;\n}\n\n.name-idea[_ngcontent-%COMP%] {\n  background: white;\n  display: inline-block;\n  padding: 10px 4px;\n  margin: 20px;\n  color: grey;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n\n}\n\n.name-idea.active[_ngcontent-%COMP%] {\n  box-shadow: 0 1px 6px black;\n  color: black;\n}\n\n.name-idea__invisible[_ngcontent-%COMP%] {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  background-color: aliceblue;\n  color: transparent;\n  padding: 20px;\n  border-radius: 50%;\n  margin: 10px 4px;\n  background: transparent;\n}\n\n.name-idea__invisible.active[_ngcontent-%COMP%] {\n  background: aliceblue;\n  box-shadow: 0 0 10px aliceblue;\n}\n\n.title-input-group[_ngcontent-%COMP%] {\n  margin: 5px auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  padding: 10px 20px;\n}\n\n#board-title[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-left: 3px;\n}\n\n.settings[_ngcontent-%COMP%] {\n  background-color: white;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 100;\n  transition: transform .3s;\n  transform: translateY(-110%);\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  justify-content: space-around;\n}\n\n.settings.visible[_ngcontent-%COMP%] {\n  transform: none;\n}\n\n.icon-lock[_ngcontent-%COMP%] {\n  color: #6c692f;\n  margin-right: 3px;\n}\n\n@media only screen and (max-width: 500px) {\n  .panel[_ngcontent-%COMP%] {\n    height: 100%;\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztFQUNULGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixnQ0FBZ0M7RUFDaEMsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCw0Q0FBeUQ7RUFDekQsZ0NBQWdDO0VBQ2hDLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLE1BQU07RUFDTixRQUFRO0VBQ1IsT0FBTztFQUNQLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osV0FBVztFQUNYLHlCQUFpQjtLQUFqQixzQkFBaUI7TUFBakIscUJBQWlCO1VBQWpCLGlCQUFpQjs7QUFFbkI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQWlCO0tBQWpCLHNCQUFpQjtNQUFqQixxQkFBaUI7VUFBakIsaUJBQWlCO0VBQ2pCLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsT0FBTztFQUNQLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxTQUFTO0VBQ1QsUUFBUTtFQUNSLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsNEJBQTRCO0VBQzVCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0U7SUFDRSxZQUFZO0lBQ1osV0FBVztFQUNiO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWNvdmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ucGFuZWwge1xuICB3aWR0aDogNTAwcHg7XG4gIGhlaWdodDogNDUwcHg7XG4gIC8qYm94LXNoYWRvdzogMnB4IDJweCA1cHggZ3JleTsqL1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZWFlNmU2O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ucGFuZWwtaW1hZ2Uge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsZXg6IDI7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2NvcmtfYWRqdXN0ZWRfMi5qcGcnKTtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM0ZjRlNGU7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjNGY0ZTRlO1xufVxuXG4ucGFuZWwtb3ZlcmxheSB7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgb3BhY2l0eTogLjM7XG4gIHotaW5kZXg6MTAwO1xufVxuXG4ucGFuZWwtZm9ybSB7XG4gIGZsZXg6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI2VhZTZlNjtcbiAgei1pbmRleDogMTAxO1xufVxuXG4ubmFtZS1pZGVhIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMTBweCA0cHg7XG4gIG1hcmdpbjogMjBweDtcbiAgY29sb3I6IGdyZXk7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuXG59XG5cbi5uYW1lLWlkZWEuYWN0aXZlIHtcbiAgYm94LXNoYWRvdzogMCAxcHggNnB4IGJsYWNrO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5uYW1lLWlkZWFfX2ludmlzaWJsZSB7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW46IDEwcHggNHB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLm5hbWUtaWRlYV9faW52aXNpYmxlLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6IGFsaWNlYmx1ZTtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggYWxpY2VibHVlO1xufVxuXG4udGl0bGUtaW5wdXQtZ3JvdXAge1xuICBtYXJnaW46IDVweCBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbn1cblxuI2JvYXJkLXRpdGxlIHtcbiAgZmxleDogMTtcbiAgbWFyZ2luLWxlZnQ6IDNweDtcbn1cblxuLnNldHRpbmdzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiAxMDA7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuM3M7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTEwJSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuXG4uc2V0dGluZ3MudmlzaWJsZSB7XG4gIHRyYW5zZm9ybTogbm9uZTtcbn1cblxuLmljb24tbG9jayB7XG4gIGNvbG9yOiAjNmM2OTJmO1xuICBtYXJnaW4tcmlnaHQ6IDNweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAucGFuZWwge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home-page',
          templateUrl: './home-page.component.html',
          styleUrls: ['./home-page.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _services_board_activity_service__WEBPACK_IMPORTED_MODULE_3__["BoardActivityService"]
        }, {
          type: _services_browser_storage_service__WEBPACK_IMPORTED_MODULE_4__["BrowserStorageService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/route.config.ts":
  /*!*********************************!*\
    !*** ./src/app/route.config.ts ***!
    \*********************************/

  /*! exports provided: appRoutes */

  /***/
  function srcAppRouteConfigTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "appRoutes", function () {
      return appRoutes;
    });
    /* harmony import */


    var _pages_home_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./pages/home-page.component */
    "./src/app/pages/home-page.component.ts");
    /* harmony import */


    var _pages_board_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./pages/board-page.component */
    "./src/app/pages/board-page.component.ts");

    var appRoutes = [{
      path: '',
      component: _pages_home_page_component__WEBPACK_IMPORTED_MODULE_0__["HomePageComponent"]
    }, {
      path: 'board/:id',
      component: _pages_board_page_component__WEBPACK_IMPORTED_MODULE_1__["BoardPageComponent"]
    }];
    /***/
  },

  /***/
  "./src/app/services/board-activity.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/services/board-activity.service.ts ***!
    \****************************************************/

  /*! exports provided: BoardActivityService */

  /***/
  function srcAppServicesBoardActivityServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BoardActivityService", function () {
      return BoardActivityService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var shortid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! shortid */
    "./node_modules/shortid/index.js");
    /* harmony import */


    var shortid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _graphql_queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../graphql/queries */
    "./src/graphql/queries.ts");
    /* harmony import */


    var _graphql_mutations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../graphql/mutations */
    "./src/graphql/mutations.ts");
    /* harmony import */


    var _graphql_subscriptions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../graphql/subscriptions */
    "./src/graphql/subscriptions.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _apollo_cache_update_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../apollo-cache-update.helper */
    "./src/app/apollo-cache-update.helper.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var apollo_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! apollo-angular */
    "./node_modules/apollo-angular/__ivy_ngcc__/fesm2015/ngApollo.js");

    var BoardActivityService = /*#__PURE__*/function () {
      function BoardActivityService(http, apollo) {
        _classCallCheck(this, BoardActivityService);

        this.http = http;
        this.apollo = apollo;
        this.BASE_URL = 'http://localhost:3000';
      }

      _createClass(BoardActivityService, [{
        key: "generateId",
        value: function generateId() {
          return shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate();
        }
      }, {
        key: "unlockBoard",
        value: function unlockBoard(boardId, pin) {
          return this.apollo.mutate({
            variables: {
              boardId: boardId,
              pin: pin
            },
            mutation: _graphql_mutations__WEBPACK_IMPORTED_MODULE_4__["UnlockBoard"]
          });
        }
      }, {
        key: "getUserToken",
        value: function getUserToken(username, password) {
          return this.apollo.query({
            variables: {
              username: username,
              password: password
            },
            query: _graphql_queries__WEBPACK_IMPORTED_MODULE_3__["GetUserToken"]
          });
        }
      }, {
        key: "getBoardTitle",
        value: function getBoardTitle(boardId) {
          return this.apollo.query({
            variables: {
              boardId: boardId
            },
            query: _graphql_queries__WEBPACK_IMPORTED_MODULE_3__["GetBoard"]
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["pluck"])('data', 'getBoard', 'title'));
        }
      }, {
        key: "getBoard",
        value: function getBoard(boardId) {
          var board = this.apollo.watchQuery({
            variables: {
              boardId: boardId
            },
            query: _graphql_queries__WEBPACK_IMPORTED_MODULE_3__["GetBoard"]
          });
          board.subscribeToMore({
            document: _graphql_subscriptions__WEBPACK_IMPORTED_MODULE_5__["SectionAdded"],
            variables: {
              boardId: boardId
            },
            updateQuery: _apollo_cache_update_helper__WEBPACK_IMPORTED_MODULE_7__["cacheAddSectionSub"]
          });
          board.subscribeToMore({
            document: _graphql_subscriptions__WEBPACK_IMPORTED_MODULE_5__["CardUpdated"],
            variables: {
              boardId: boardId
            },
            updateQuery: _apollo_cache_update_helper__WEBPACK_IMPORTED_MODULE_7__["cacheUpdateCardSub"]
          });
          board.subscribeToMore({
            document: _graphql_subscriptions__WEBPACK_IMPORTED_MODULE_5__["CardDeleted"],
            variables: {
              boardId: boardId
            },
            updateQuery: _apollo_cache_update_helper__WEBPACK_IMPORTED_MODULE_7__["cacheRemoveCardSub"]
          });
          board.subscribeToMore({
            document: _graphql_subscriptions__WEBPACK_IMPORTED_MODULE_5__["SectionDeleted"],
            variables: {
              boardId: boardId
            },
            updateQuery: _apollo_cache_update_helper__WEBPACK_IMPORTED_MODULE_7__["cacheRemoveSectionSub"]
          });
          return board.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["pluck"])('data', 'getBoard', 'sections'));
        }
      }, {
        key: "createBoard",
        value: function createBoard(user, sectionNames, boardTitle, accessPin) {
          var boardId = this.generateId();
          return this.apollo.mutate({
            mutation: _graphql_mutations__WEBPACK_IMPORTED_MODULE_4__["CreateBoard"],
            variables: {
              sectionNames: sectionNames,
              newBoard: Object.assign({
                title: boardTitle,
                accessPin: accessPin
              }, user)
            }
          });
        }
      }, {
        key: "createSection",
        value: function createSection(boardId, sectionTitle) {
          return this.apollo.mutate({
            mutation: _graphql_mutations__WEBPACK_IMPORTED_MODULE_4__["CreateSection"],
            variables: {
              newSection: {
                boardId: boardId,
                title: sectionTitle
              }
            },
            update: Object(_apollo_cache_update_helper__WEBPACK_IMPORTED_MODULE_7__["cacheCreateSection"])({
              boardId: boardId
            }),
            optimisticResponse: {
              __typename: 'Mutation',
              addSection: {
                __typename: 'Section',
                title: sectionTitle,
                cards: [],
                id: Math.round(Math.random() * -1000000)
              }
            }
          });
        }
      }, {
        key: "saveCard",
        value: function saveCard(sectionId, changes, boardId) {
          var editing = changes.editing,
              __typename = changes.__typename,
              fields = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(changes, ["editing", "__typename"]);
          return this.apollo.mutate({
            mutation: _graphql_mutations__WEBPACK_IMPORTED_MODULE_4__["UpdateCard"],
            variables: {
              cardChanges: Object.assign({
                sectionId: sectionId
              }, fields),
              boardId: boardId
            },
            update: Object(_apollo_cache_update_helper__WEBPACK_IMPORTED_MODULE_7__["cacheUpdateCard"])({
              boardId: boardId,
              sectionId: sectionId
            }),
            optimisticResponse: {
              __typename: 'Mutation',
              updateCard: Object.assign({
                __typename: 'Card',
                sectionId: sectionId
              }, fields)
            }
          });
        }
      }, {
        key: "createCard",
        value: function createCard(sectionId, author, boardId) {
          return this.apollo.mutate({
            mutation: _graphql_mutations__WEBPACK_IMPORTED_MODULE_4__["AddCard"],
            variables: {
              newCard: {
                author: author,
                sectionId: sectionId
              },
              boardId: boardId
            },
            update: Object(_apollo_cache_update_helper__WEBPACK_IMPORTED_MODULE_7__["cacheCreateCard"])({
              boardId: boardId,
              sectionId: sectionId
            })
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["pluck"])('data', 'addCard'));
        }
      }, {
        key: "deleteCard",
        value: function deleteCard(card, section, boardId) {
          return this.apollo.mutate({
            mutation: _graphql_mutations__WEBPACK_IMPORTED_MODULE_4__["DeleteCard"],
            variables: {
              cardId: card.id,
              sectionId: section.id,
              boardId: boardId
            },
            update: Object(_apollo_cache_update_helper__WEBPACK_IMPORTED_MODULE_7__["cacheDeleteCard"])({
              boardId: boardId,
              sectionId: section.id,
              cardId: card.id
            }),
            optimisticResponse: {
              __typename: "Mutation",
              deleteCard: Object.assign(Object.assign({
                __typename: "Card"
              }, card), {
                sectionId: section.id
              })
            }
          });
        }
      }, {
        key: "deleteSection",
        value: function deleteSection(section, boardId) {
          return this.apollo.mutate({
            mutation: _graphql_mutations__WEBPACK_IMPORTED_MODULE_4__["DeleteSection"],
            variables: {
              sectionId: section.id,
              boardId: boardId
            },
            update: Object(_apollo_cache_update_helper__WEBPACK_IMPORTED_MODULE_7__["cacheDeleteSection"])({
              boardId: boardId,
              sectionId: section.id
            })
          });
        }
      }]);

      return BoardActivityService;
    }();

    BoardActivityService.ɵfac = function BoardActivityService_Factory(t) {
      return new (t || BoardActivityService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_9__["Apollo"]));
    };

    BoardActivityService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: BoardActivityService,
      factory: BoardActivityService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BoardActivityService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]
        }, {
          type: apollo_angular__WEBPACK_IMPORTED_MODULE_9__["Apollo"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/browser-storage.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/services/browser-storage.service.ts ***!
    \*****************************************************/

  /*! exports provided: BrowserStorageService */

  /***/
  function srcAppServicesBrowserStorageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BrowserStorageService", function () {
      return BrowserStorageService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var BrowserStorageService = /*#__PURE__*/function () {
      function BrowserStorageService() {
        _classCallCheck(this, BrowserStorageService);
      }

      _createClass(BrowserStorageService, [{
        key: "token",
        set: function set(token) {
          this._token = token;
          window.localStorage.setItem('token', token);
        },
        get: function get() {
          if (this._token) return this._token;
          this._token = window.localStorage.getItem('token');
          return this._token;
        }
      }, {
        key: "user",
        get: function get() {
          if (this._user) return this._user;

          try {
            var stringifiedUser = window.localStorage.getItem('user');
            this._user = JSON.parse(stringifiedUser);
            return this._user;
          } catch (e) {
            console.error(e);
          }
        },
        set: function set(user) {
          try {
            this._user = user;
            var stringifiedUser = JSON.stringify(user);
            window.localStorage.setItem('user', stringifiedUser);
          } catch (e) {
            console.error(e);
          }
        }
      }]);

      return BrowserStorageService;
    }();

    BrowserStorageService.ɵfac = function BrowserStorageService_Factory(t) {
      return new (t || BrowserStorageService)();
    };

    BrowserStorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: BrowserStorageService,
      factory: BrowserStorageService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BrowserStorageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/color-provider.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/services/color-provider.service.ts ***!
    \****************************************************/

  /*! exports provided: CardColor, ColorProviderService */

  /***/
  function srcAppServicesColorProviderServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardColor", function () {
      return CardColor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ColorProviderService", function () {
      return ColorProviderService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CardColor;

    (function (CardColor) {
      CardColor["Blue"] = "#e7e7fc";
      CardColor["Green"] = "#d0f4d0";
      CardColor["Orange"] = "#fce0ab";
      CardColor["Purple"] = "#febffe";
      CardColor["Red"] = "#ffcaca";
      CardColor["Yellow"] = "#fafacc";
    })(CardColor || (CardColor = {}));

    var sectionColors = [CardColor.Red, CardColor.Orange, CardColor.Yellow, CardColor.Green, CardColor.Blue, CardColor.Purple];

    var ColorProviderService = /*#__PURE__*/function () {
      function ColorProviderService() {
        _classCallCheck(this, ColorProviderService);
      }

      _createClass(ColorProviderService, [{
        key: "colorAtIndex",
        value: function colorAtIndex(num) {
          return sectionColors[num % this.colorCount];
        }
      }, {
        key: "colorCount",
        get: function get() {
          return sectionColors.length;
        }
      }]);

      return ColorProviderService;
    }();

    ColorProviderService.ɵfac = function ColorProviderService_Factory(t) {
      return new (t || ColorProviderService)();
    };

    ColorProviderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ColorProviderService,
      factory: ColorProviderService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ColorProviderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/export-board.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/services/export-board.service.ts ***!
    \**************************************************/

  /*! exports provided: ExportBoardService */

  /***/
  function srcAppServicesExportBoardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExportBoardService", function () {
      return ExportBoardService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var jspdf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! jspdf */
    "./node_modules/jspdf/dist/jspdf.min.js");
    /* harmony import */


    var jspdf__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var jspdf_autotable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! jspdf-autotable */
    "./node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.js");
    /* harmony import */


    var jspdf_autotable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _color_provider_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./color-provider.service */
    "./src/app/services/color-provider.service.ts");

    var TableThemes;

    (function (TableThemes) {
      TableThemes["Plain"] = "plain";
      TableThemes["Grid"] = "grid";
      TableThemes["Striped"] = "striped";
      TableThemes["Css"] = "css";
    })(TableThemes || (TableThemes = {}));

    var ExportBoardService = /*#__PURE__*/function () {
      function ExportBoardService(colorProviderSvc) {
        _classCallCheck(this, ExportBoardService);

        this.colorProviderSvc = colorProviderSvc;
      }

      _createClass(ExportBoardService, [{
        key: "addColumn",
        value: function addColumn(columnHeading, cellWidth) {
          var column = {
            content: columnHeading
          };
          return cellWidth ? Object.assign(Object.assign({}, column), {
            styles: {
              cellWidth: cellWidth
            }
          }) : column;
        }
      }, {
        key: "addCardToRow",
        value: function addCardToRow(card) {
          return [card.text, card.votes || 3, card.author];
        }
      }, {
        key: "createDocumentHeading",
        value: function createDocumentHeading(pageTitle) {
          return {
            theme: TableThemes.Plain,
            headStyles: {
              halign: 'center',
              fontSize: 20,
              fontStyle: 'bold',
              textColor: 'black'
            },
            head: [[pageTitle]]
          };
        }
      }, {
        key: "createTable",
        value: function createTable(section, headerColor, pdfDocument) {
          return {
            theme: TableThemes.Grid,
            headStyles: {
              fillColor: headerColor,
              textColor: 'black'
            },
            head: [[this.addColumn(section.title), this.addColumn('Votes', 15), this.addColumn('Author', 30)]],
            body: section.cards.map(this.addCardToRow),
            startY: pdfDocument.lastAutoTable.finalY + 5
          };
        }
      }, {
        key: "exportAsPdf",
        value: function exportAsPdf(pageTitle, sections) {
          var _this9 = this;

          var pdfDocument = new jspdf__WEBPACK_IMPORTED_MODULE_1___default.a(); // Create a single row table to act as page heading

          pdfDocument.autoTable(this.createDocumentHeading(pageTitle)); // Create a table for each of the sections of the board

          sections.forEach(function (section, index) {
            return pdfDocument.autoTable(_this9.createTable(section, _this9.colorProviderSvc.colorAtIndex(index), pdfDocument));
          }); // Save the pdf to the users computer

          pdfDocument.save('table.pdf');
        }
      }]);

      return ExportBoardService;
    }();

    ExportBoardService.ɵfac = function ExportBoardService_Factory(t) {
      return new (t || ExportBoardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_color_provider_service__WEBPACK_IMPORTED_MODULE_3__["ColorProviderService"]));
    };

    ExportBoardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ExportBoardService,
      factory: ExportBoardService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExportBoardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _color_provider_service__WEBPACK_IMPORTED_MODULE_3__["ColorProviderService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/graphql/mutations.ts":
  /*!**********************************!*\
    !*** ./src/graphql/mutations.ts ***!
    \**********************************/

  /*! exports provided: CreateSection, UpdateCard, UpdateSection, CreateBoard, AddCard, DeleteCard, DeleteSection, UnlockBoard */

  /***/
  function srcGraphqlMutationsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateSection", function () {
      return CreateSection;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateCard", function () {
      return UpdateCard;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateSection", function () {
      return UpdateSection;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateBoard", function () {
      return CreateBoard;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddCard", function () {
      return AddCard;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeleteCard", function () {
      return DeleteCard;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeleteSection", function () {
      return DeleteSection;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UnlockBoard", function () {
      return UnlockBoard;
    });
    /* harmony import */


    var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! graphql-tag */
    "./node_modules/graphql-tag/src/index.js");
    /* harmony import */


    var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

    var CreateSection = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a(_templateObject());
    var UpdateCard = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a(_templateObject2());
    var UpdateSection = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a(_templateObject3());
    var CreateBoard = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a(_templateObject4());
    var AddCard = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a(_templateObject5());
    var DeleteCard = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a(_templateObject6());
    var DeleteSection = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a(_templateObject7());
    var UnlockBoard = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a(_templateObject8());
    /***/
  },

  /***/
  "./src/graphql/queries.ts":
  /*!********************************!*\
    !*** ./src/graphql/queries.ts ***!
    \********************************/

  /*! exports provided: GetBoard, GetUserToken */

  /***/
  function srcGraphqlQueriesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetBoard", function () {
      return GetBoard;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetUserToken", function () {
      return GetUserToken;
    });
    /* harmony import */


    var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! graphql-tag */
    "./node_modules/graphql-tag/src/index.js");
    /* harmony import */


    var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

    var GetBoard = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a(_templateObject9());
    var GetUserToken = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a(_templateObject10());
    /***/
  },

  /***/
  "./src/graphql/subscriptions.ts":
  /*!**************************************!*\
    !*** ./src/graphql/subscriptions.ts ***!
    \**************************************/

  /*! exports provided: SectionAdded, CardAdded, CardUpdated, CardDeleted, SectionDeleted, BoardAdded */

  /***/
  function srcGraphqlSubscriptionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SectionAdded", function () {
      return SectionAdded;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardAdded", function () {
      return CardAdded;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardUpdated", function () {
      return CardUpdated;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardDeleted", function () {
      return CardDeleted;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SectionDeleted", function () {
      return SectionDeleted;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BoardAdded", function () {
      return BoardAdded;
    });
    /* harmony import */


    var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! graphql-tag */
    "./node_modules/graphql-tag/src/index.js");
    /* harmony import */


    var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

    var SectionAdded = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a(_templateObject11());
    var CardAdded = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a(_templateObject12());
    var CardUpdated = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a(_templateObject13());
    var CardDeleted = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a(_templateObject14());
    var SectionDeleted = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a(_templateObject15());
    var BoardAdded = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a(_templateObject16());
    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/Andy/too-old-to-code/ideaz-board/frontend/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map