(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "/a0S":
    /*!****************************************************!*\
      !*** ./src/app/modules/auth/auth-guard.service.ts ***!
      \****************************************************/

    /*! exports provided: AuthGuardService */

    /***/
    function a0S(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuardService", function () {
        return AuthGuardService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./auth.service */
      "j/vS");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var AuthGuardService = /*#__PURE__*/function () {
        function AuthGuardService(authService, location) {
          _classCallCheck(this, AuthGuardService);

          this.authService = authService;
          this.location = location;
        }

        _createClass(AuthGuardService, [{
          key: "canActivate",
          value: function canActivate() {
            if (!this.authService.isUserLoggedIn()) {
              this.authService.logoutUser(this.location.path());
              return false;
            }

            return true;
          }
        }]);

        return AuthGuardService;
      }();

      AuthGuardService.ɵfac = function AuthGuardService_Factory(t) {
        return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]));
      };

      AuthGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthGuardService,
        factory: AuthGuardService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuardService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
          }, {
            type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]
          }];
        }, null);
      })();
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
      /*! /home/justyna/Documents/STUDIA/RECIPE/frontend/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "1NIu":
    /*!**********************************************************!*\
      !*** ./src/app/modules/not-found/not-found.component.ts ***!
      \**********************************************************/

    /*! exports provided: NotFoundComponent */

    /***/
    function NIu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function () {
        return NotFoundComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var NotFoundComponent = /*#__PURE__*/function () {
        function NotFoundComponent() {
          _classCallCheck(this, NotFoundComponent);
        }

        _createClass(NotFoundComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NotFoundComponent;
      }();

      NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) {
        return new (t || NotFoundComponent)();
      };

      NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NotFoundComponent,
        selectors: [["app-not-found"]],
        decls: 2,
        vars: 0,
        template: function NotFoundComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "not-found works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3QtZm91bmQuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-not-found',
            templateUrl: './not-found.component.html',
            styleUrls: ['./not-found.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
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
    "Cmu8":
    /*!****************************************************!*\
      !*** ./src/app/modules/recipe/recipe.component.ts ***!
      \****************************************************/

    /*! exports provided: RecipeComponent */

    /***/
    function Cmu8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RecipeComponent", function () {
        return RecipeComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _common_global_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../common/global-constants */
      "jxL5");
      /* harmony import */


      var _recipe_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./recipe.service */
      "Vk4G");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/card */
      "MSSf");
      /* harmony import */


      var _comments_comments_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../comments/comments.component */
      "HQ4+");

      function RecipeComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-card-title", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-card", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Sk\u0142adniki");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Wykonanie");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "comments", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.recipe.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r0.recipe.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("alt", ctx_r0.recipe.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.recipe.ingredients, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.recipe.method, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("recipeId", ctx_r0.recipe.id)("comments", ctx_r0.recipe.comments);
        }
      }

      var RecipeComponent = /*#__PURE__*/function () {
        function RecipeComponent(route, recipeService) {
          var _this = this;

          _classCallCheck(this, RecipeComponent);

          this.route = route;
          this.recipeService = recipeService;
          this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (_ref) {
            var id = _ref.id;
            return _this.recipeService.getRecipe(id);
          })).subscribe(function (_a) {
            var image = _a.image,
                rest = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["image"]);
            _this.recipe = Object.assign(Object.assign({}, rest), {
              image: "".concat(_common_global_constants__WEBPACK_IMPORTED_MODULE_3__["GlobalConstants"].imagesURL, "/").concat(image)
            });
          });
        }

        _createClass(RecipeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return RecipeComponent;
      }();

      RecipeComponent.ɵfac = function RecipeComponent_Factory(t) {
        return new (t || RecipeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_recipe_service__WEBPACK_IMPORTED_MODULE_4__["RecipeService"]));
      };

      RecipeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: RecipeComponent,
        selectors: [["recipe"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_recipe_service__WEBPACK_IMPORTED_MODULE_4__["RecipeService"]])],
        decls: 1,
        vars: 1,
        consts: [[4, "ngIf"], [1, "grid-container"], [1, "grid-item", "grid-item__colspan-4"], [1, "header"], [1, "title"], [1, "image", 3, "src", "alt"], [1, "card"], [1, "subheader"], [1, "text"], [3, "recipeId", "comments"]],
        template: function RecipeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, RecipeComponent_div_0_Template, 22, 7, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.recipe);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardContent"], _comments_comments_component__WEBPACK_IMPORTED_MODULE_8__["CommentsComponent"]],
        styles: [".header[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n  padding: 0;\n}\n\n.image[_ngcontent-%COMP%] {\n  width: 80%;\n}\n\n.title[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n\n.text[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n.subheader[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 24px;\n}\n\n.card[_ngcontent-%COMP%] {\n  padding-bottom: 46px;\n  padding-top: 46px;\n}\n\n@media (max-width: 1200px) {\n  .header[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n  .image[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3JlY2lwZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLHNCQUFBO0VBQ0Y7O0VBRUE7SUFDRSxXQUFBO0VBQ0Y7QUFDRiIsImZpbGUiOiJyZWNpcGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uaW1hZ2Uge1xuICB3aWR0aDogODAlO1xufVxuXG4udGl0bGUge1xuICBwYWRkaW5nOiAxNnB4O1xufVxuXG4udGV4dCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLnN1YmhlYWRlciB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuLmNhcmQge1xuICBwYWRkaW5nLWJvdHRvbTogNDZweDtcbiAgcGFkZGluZy10b3A6IDQ2cHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgLmhlYWRlciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuXG4gIC5pbWFnZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RecipeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: "recipe",
            templateUrl: "./recipe.component.html",
            styleUrls: ["./recipe.component.scss"],
            providers: [_recipe_service__WEBPACK_IMPORTED_MODULE_4__["RecipeService"]]
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
          }, {
            type: _recipe_service__WEBPACK_IMPORTED_MODULE_4__["RecipeService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "HQ4+":
    /*!********************************************************!*\
      !*** ./src/app/modules/comments/comments.component.ts ***!
      \********************************************************/

    /*! exports provided: CommentsComponent */

    /***/
    function HQ4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CommentsComponent", function () {
        return CommentsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/card */
      "MSSf");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/list */
      "kEI4");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      "Xlwt");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/icon */
      "TY1r");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/divider */
      "3uU/");
      /* harmony import */


      var _comment_add_comment_add_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../comment-add/comment-add.component */
      "tynz");

      function CommentsComponent_mat_list_item_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "comment");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var comment_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", comment_r2.content, " ");
        }
      }

      function CommentsComponent_comment_add_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "comment-add", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("addCommentEvent", function CommentsComponent_comment_add_4_Template_comment_add_addCommentEvent_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.addComment($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("recipeId", ctx_r1.recipeId);
        }
      }

      var CommentsComponent = /*#__PURE__*/function () {
        function CommentsComponent() {
          _classCallCheck(this, CommentsComponent);

          this.isCommentAddFormOpened = false;
        }

        _createClass(CommentsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "addComment",
          value: function addComment(comment) {
            this.comments.push(comment);
            this.isCommentAddFormOpened = false;
          }
        }, {
          key: "openCommentAddForm",
          value: function openCommentAddForm() {
            this.isCommentAddFormOpened = true;
          }
        }]);

        return CommentsComponent;
      }();

      CommentsComponent.ɵfac = function CommentsComponent_Factory(t) {
        return new (t || CommentsComponent)();
      };

      CommentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CommentsComponent,
        selectors: [["comments"]],
        inputs: {
          recipeId: "recipeId",
          comments: "comments"
        },
        decls: 8,
        vars: 2,
        consts: [[1, "list"], [4, "ngFor", "ngForOf"], [3, "recipeId", "addCommentEvent", 4, "ngIf"], [1, "actions"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-list-icon", "", "color", "primary", 1, "icon"], [3, "recipeId", "addCommentEvent"]],
        template: function CommentsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-list", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CommentsComponent_mat_list_item_3_Template, 5, 1, "mat-list-item", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CommentsComponent_comment_add_4_Template, 1, 1, "comment-add", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-actions", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommentsComponent_Template_button_click_6_listener() {
              return ctx.openCommentAddForm();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Dodaj komentarz ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.comments);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isCommentAddFormOpened);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"], _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatList"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListItem"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListIconCssMatStyler"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__["MatDivider"], _comment_add_comment_add_component__WEBPACK_IMPORTED_MODULE_7__["CommentAddComponent"]],
        styles: [".actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.icon[_ngcontent-%COMP%] {\n  margin-right: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NvbW1lbnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGIiwiZmlsZSI6ImNvbW1lbnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG4uaWNvbiB7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbn1cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommentsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "comments",
            templateUrl: "./comments.component.html",
            styleUrls: ["./comments.component.scss"]
          }]
        }], function () {
          return [];
        }, {
          recipeId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          comments: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "MA0d":
    /*!******************************************************!*\
      !*** ./src/app/modules/recipes/recipes.component.ts ***!
      \******************************************************/

    /*! exports provided: RecipesComponent */

    /***/
    function MA0d(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RecipesComponent", function () {
        return RecipesComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _common_global_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../common/global-constants */
      "jxL5");
      /* harmony import */


      var _recipes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./recipes.service */
      "aMlZ");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/list */
      "kEI4");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/card */
      "MSSf");

      var _c0 = function _c0(a0) {
        return [a0];
      };

      var _c1 = function _c1(a0, a1) {
        return [a0, a1];
      };

      function RecipesComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var recipe_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx_r0.categoryRouteParam ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c0, recipe_r1.id) : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](7, _c1, recipe_r1.categoryName, recipe_r1.id));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](recipe_r1.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", recipe_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("alt", recipe_r1.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", recipe_r1.method, " ");
        }
      }

      var RecipesComponent = function RecipesComponent(route, recipesService) {
        var _this2 = this;

        _classCallCheck(this, RecipesComponent);

        this.route = route;
        this.recipesService = recipesService;
        this.recipes = [];
        this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (_ref2) {
          var category = _ref2.category;
          _this2.categoryRouteParam = category;
          return _this2.recipesService.getRecipes(category);
        })).subscribe(function (recipes) {
          _this2.recipes = recipes.map(function (_a) {
            var image = _a.image,
                method = _a.method,
                rest = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["image", "method"]);
            return Object.assign(Object.assign({}, rest), {
              image: "".concat(_common_global_constants__WEBPACK_IMPORTED_MODULE_3__["GlobalConstants"].imagesURL, "/").concat(image),
              method: method.substr(0, 250) + "..."
            });
          });
        });
      };

      RecipesComponent.ɵfac = function RecipesComponent_Factory(t) {
        return new (t || RecipesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_recipes_service__WEBPACK_IMPORTED_MODULE_4__["RecipesService"]));
      };

      RecipesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: RecipesComponent,
        selectors: [["recipes"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_recipes_service__WEBPACK_IMPORTED_MODULE_4__["RecipesService"]])],
        decls: 2,
        vars: 1,
        consts: [[1, "grid-container"], ["class", "grid-item", 4, "ngFor", "ngForOf"], [1, "grid-item"], ["mat-list-item", "", 3, "routerLink"], [1, "card"], ["mat-card-image", "", 3, "src", "alt"]],
        template: function RecipesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RecipesComponent_div_1_Template, 10, 10, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.recipes);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardContent"]],
        styles: [".card[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.04);\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3JlY2lwZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxxQ0FBQTtFQUNBLGVBQUE7QUFBSiIsImZpbGUiOiJyZWNpcGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDQpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RecipesComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: "recipes",
            templateUrl: "./recipes.component.html",
            styleUrls: ["./recipes.component.scss"],
            providers: [_recipes_service__WEBPACK_IMPORTED_MODULE_4__["RecipesService"]]
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
          }, {
            type: _recipes_service__WEBPACK_IMPORTED_MODULE_4__["RecipesService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "MStH":
    /*!************************************************************!*\
      !*** ./src/app/modules/comment-add/comment-add.service.ts ***!
      \************************************************************/

    /*! exports provided: CommentAddService */

    /***/
    function MStH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CommentAddService", function () {
        return CommentAddService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _common_global_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../common/global-constants */
      "jxL5");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var CommentAddService = function CommentAddService(http) {
        var _this3 = this;

        _classCallCheck(this, CommentAddService);

        this.http = http;

        this.addComment = function (payload) {
          return _this3.http.post("".concat(_common_global_constants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].apiURL, "/comments/create"), payload);
        };
      };

      CommentAddService.ɵfac = function CommentAddService_Factory(t) {
        return new (t || CommentAddService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      CommentAddService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: CommentAddService,
        factory: CommentAddService.ɵfac,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommentAddService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: "root"
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "RarI":
    /*!************************************************!*\
      !*** ./src/app/modules/menu/menu.component.ts ***!
      \************************************************/

    /*! exports provided: MenuComponent */

    /***/
    function RarI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MenuComponent", function () {
        return MenuComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/layout */
      "sjd8");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "RzEb");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "J0hL");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/list */
      "kEI4");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/icon */
      "TY1r");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/button */
      "Xlwt");

      function MenuComponent_button_21_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_button_21_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

            return _r0.toggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0() {
        return ["/"];
      };

      var _c1 = function _c1() {
        return ["/cakes"];
      };

      var _c2 = function _c2() {
        return ["/salads"];
      };

      var _c3 = function _c3() {
        return ["/soups"];
      };

      var MenuComponent = function MenuComponent(breakpointObserver) {
        _classCallCheck(this, MenuComponent);

        this.breakpointObserver = breakpointObserver;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
          return result.matches;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])());
      };

      MenuComponent.ɵfac = function MenuComponent_Factory(t) {
        return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]));
      };

      MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MenuComponent,
        selectors: [["app-menu"]],
        contentQueries: function MenuComponent_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], false);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.contentChildren = _t);
          }
        },
        decls: 26,
        vars: 20,
        consts: [[1, "sidenav-container"], ["fixedInViewport", "", 1, "sidenav", 3, "mode", "opened"], ["drawer", ""], [1, "toolbar"], ["mat-list-item", "", "routerLink", "/"], [1, "icon"], ["mat-list-item", "", 3, "routerLink"], [1, "content"], ["color", "primary"], ["type", "button", "mat-icon-button", "", 3, "click", 4, "ngIf"], ["type", "button", "mat-icon-button", "", 3, "click"], ["aria-label", "Side nav toggle icon"]],
        template: function MenuComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-container", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-toolbar", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "restaurant_menu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-nav-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Wszystkie przepisy");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Ciasta");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Sa\u0142atki");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Zupy");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-sidenav-content", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-toolbar", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, MenuComponent_button_21_Template, 3, 0, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Przepisy kulinarne");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 10, ctx.isHandset$) ? "over" : "side")("opened", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 12, ctx.isHandset$) === false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("role", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 8, ctx.isHandset$) ? "dialog" : "navigation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c3));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 14, ctx.isHandset$));
          }
        },
        directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenav"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatNavList"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavContent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]],
        styles: [".sidenav-container[_ngcontent-%COMP%] {\n  height: 100%;\n  background-color: #f1f1f1;\n}\n\n.sidenav[_ngcontent-%COMP%] {\n  width: 200px;\n}\n\n.sidenav[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%] {\n  background: inherit;\n}\n\n.mat-toolbar.mat-primary[_ngcontent-%COMP%] {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n\n.toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.icon[_ngcontent-%COMP%] {\n  font-size: 36px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL21lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EseUJBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGIiwiZmlsZSI6Im1lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZW5hdi1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG59XG5cbi5zaWRlbmF2IHtcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG4uc2lkZW5hdiAubWF0LXRvb2xiYXIge1xuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xufVxuXG4ubWF0LXRvb2xiYXIubWF0LXByaW1hcnkge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDE7XG59XG5cbi50b29sYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5pY29uIHtcbiAgZm9udC1zaXplOiAzNnB4O1xufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-menu",
            templateUrl: "./menu.component.html",
            styleUrls: ["./menu.component.scss"]
          }]
        }], function () {
          return [{
            type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]
          }];
        }, {
          contentChildren: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"]]
          }]
        });
      })();
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = "Przepisy kulinarne";
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 2,
        vars: 0,
        consts: [[1, "app"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: [".app[_ngcontent-%COMP%] {\n  background-color: #f1f1f1;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQUNGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-root",
            templateUrl: "./app.component.html",
            styleUrls: ["./app.component.scss"]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "Vk4G":
    /*!**************************************************!*\
      !*** ./src/app/modules/recipe/recipe.service.ts ***!
      \**************************************************/

    /*! exports provided: RecipeService */

    /***/
    function Vk4G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RecipeService", function () {
        return RecipeService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _common_global_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../common/global-constants */
      "jxL5");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var RecipeService = function RecipeService(http) {
        var _this4 = this;

        _classCallCheck(this, RecipeService);

        this.http = http;

        this.getRecipe = function (id) {
          return _this4.http.get("".concat(_common_global_constants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].apiURL, "/recipes/").concat(id)).pipe(function (recipe) {
            return recipe;
          });
        };
      };

      RecipeService.ɵfac = function RecipeService_Factory(t) {
        return new (t || RecipeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      RecipeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: RecipeService,
        factory: RecipeService.ɵfac,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecipeService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: "root"
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _modules_menu_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./modules/menu/menu.component */
      "RarI");
      /* harmony import */


      var _modules_comment_add_comment_add_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./modules/comment-add/comment-add.component */
      "tynz");
      /* harmony import */


      var _modules_comments_comments_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./modules/comments/comments.component */
      "HQ4+");
      /* harmony import */


      var _modules_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./modules/login/login.component */
      "ZpOo");
      /* harmony import */


      var _modules_recipes_recipes_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./modules/recipes/recipes.component */
      "MA0d");
      /* harmony import */


      var _modules_recipe_recipe_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./modules/recipe/recipe.component */
      "Cmu8");
      /* harmony import */


      var _modules_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./modules/not-found/not-found.component */
      "1NIu");
      /* harmony import */


      var _modules_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./modules/auth/auth-guard.service */
      "/a0S");
      /* harmony import */


      var _modules_auth_auth_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./modules/auth/auth.service */
      "j/vS");
      /* harmony import */


      var _modules_auth_http_auth_interceptor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./modules/auth/http-auth.interceptor */
      "xPVh");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/button */
      "Xlwt");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/card */
      "MSSf");
      /* harmony import */


      var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/cdk/layout */
      "sjd8");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "J0hL");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "RzEb");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/icon */
      "TY1r");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/list */
      "kEI4");
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/grid-list */
      "SnT8");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/material/form-field */
      "IRfi");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/material/input */
      "A2Vd"); // app
      // components
      // auth
      // material


      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [_modules_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_14__["AuthGuardService"], _modules_auth_auth_service__WEBPACK_IMPORTED_MODULE_15__["AuthService"], {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
          useClass: _modules_auth_http_auth_interceptor__WEBPACK_IMPORTED_MODULE_16__["HttpAuthInterceptor"],
          multi: true
        }],
        imports: [[_app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["NoopAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], // material modules
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_19__["LayoutModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__["MatFormFieldModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_24__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_26__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_23__["MatListModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__["MatSidenavModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__["MatToolbarModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _modules_comment_add_comment_add_component__WEBPACK_IMPORTED_MODULE_8__["CommentAddComponent"], _modules_comments_comments_component__WEBPACK_IMPORTED_MODULE_9__["CommentsComponent"], _modules_recipes_recipes_component__WEBPACK_IMPORTED_MODULE_11__["RecipesComponent"], _modules_recipe_recipe_component__WEBPACK_IMPORTED_MODULE_12__["RecipeComponent"], _modules_menu_menu_component__WEBPACK_IMPORTED_MODULE_7__["MenuComponent"], _modules_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"], _modules_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_13__["NotFoundComponent"]],
          imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["NoopAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], // material modules
          _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_19__["LayoutModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__["MatFormFieldModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_24__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_26__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_23__["MatListModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__["MatSidenavModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__["MatToolbarModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _modules_comment_add_comment_add_component__WEBPACK_IMPORTED_MODULE_8__["CommentAddComponent"], _modules_comments_comments_component__WEBPACK_IMPORTED_MODULE_9__["CommentsComponent"], _modules_recipes_recipes_component__WEBPACK_IMPORTED_MODULE_11__["RecipesComponent"], _modules_recipe_recipe_component__WEBPACK_IMPORTED_MODULE_12__["RecipeComponent"], _modules_menu_menu_component__WEBPACK_IMPORTED_MODULE_7__["MenuComponent"], _modules_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"], _modules_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_13__["NotFoundComponent"]],
            imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["NoopAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], // material modules
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_19__["LayoutModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__["MatFormFieldModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_24__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_26__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_23__["MatListModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__["MatSidenavModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__["MatToolbarModule"]],
            providers: [_modules_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_14__["AuthGuardService"], _modules_auth_auth_service__WEBPACK_IMPORTED_MODULE_15__["AuthService"], {
              provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
              useClass: _modules_auth_http_auth_interceptor__WEBPACK_IMPORTED_MODULE_16__["HttpAuthInterceptor"],
              multi: true
            }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "ZpOo":
    /*!**************************************************!*\
      !*** ./src/app/modules/login/login.component.ts ***!
      \**************************************************/

    /*! exports provided: LoginComponent */

    /***/
    function ZpOo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../auth/auth.service */
      "j/vS");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/card */
      "MSSf");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/form-field */
      "IRfi");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/input */
      "A2Vd");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button */
      "Xlwt");

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(fb, authService, router, activatedRoute) {
          _classCallCheck(this, LoginComponent);

          this.fb = fb;
          this.authService = authService;
          this.router = router;
          this.activatedRoute = activatedRoute;
          this.retUrl = "/";
          this.form = this.fb.group({
            login: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this5 = this;

            this.activatedRoute.queryParamMap.subscribe(function (params) {
              _this5.retUrl = params.get("retUrl");
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this6 = this;

            this.authService.login(this.form.value).subscribe(function (data) {
              if (_this6.retUrl !== null) {
                _this6.router.navigate([_this6.retUrl]);
              } else {
                _this6.router.navigate(["/"]);
              }
            });
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ɵfac = function LoginComponent_Factory(t) {
        return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]));
      };

      LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LoginComponent,
        selectors: [["app-login"]],
        decls: 10,
        vars: 1,
        consts: [[1, "wrapper"], [1, "card"], [1, "form", 3, "formGroup", "ngSubmit"], ["appearance", "outline", 1, "field"], ["type", "text", "formControlName", "login", "matInput", "", "placeholder", "login"], ["formControlName", "password", "matInput", "", "placeholder", "has\u0142o", "type", "password"], ["type", "submit", "mat-raised-button", "", "color", "primary"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_3_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Zloguj si\u0119 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"]],
        styles: [".wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding-top: 10%;\n}\n\n.card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 450px;\n  padding: 40px;\n}\n\n.form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n}\n\n.field[_ngcontent-%COMP%] {\n  width: 100%;\n  display: \"block\";\n  padding-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQUNGIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDEwJTtcbn1cblxuLmNhcmQge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA0NTBweDtcbiAgcGFkZGluZzogNDBweDtcbn1cblxuLmZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG4uZmllbGQge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogXCJibG9ja1wiO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-login",
            templateUrl: "./login.component.html",
            styleUrls: ["./login.component.scss"]
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "aMlZ":
    /*!****************************************************!*\
      !*** ./src/app/modules/recipes/recipes.service.ts ***!
      \****************************************************/

    /*! exports provided: RecipesService */

    /***/
    function aMlZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RecipesService", function () {
        return RecipesService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _common_global_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../common/global-constants */
      "jxL5");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var RecipesService = function RecipesService(http) {
        var _this7 = this;

        _classCallCheck(this, RecipesService);

        this.http = http;

        this.getRecipes = function (category) {
          return _this7.http.get("".concat(_common_global_constants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].apiURL, "/recipes/").concat(category || ""));
        };
      };

      RecipesService.ɵfac = function RecipesService_Factory(t) {
        return new (t || RecipesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      RecipesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: RecipesService,
        factory: RecipesService.ɵfac,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecipesService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: "root"
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "j/vS":
    /*!**********************************************!*\
      !*** ./src/app/modules/auth/auth.service.ts ***!
      \**********************************************/

    /*! exports provided: AuthService */

    /***/
    function jVS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_common_global_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/common/global-constants */
      "jxL5");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AuthService = /*#__PURE__*/function () {
        function AuthService(http, router) {
          _classCallCheck(this, AuthService);

          this.http = http;
          this.router = router;
          this.isloggedIn = !!this.getToken();
        }

        _createClass(AuthService, [{
          key: "login",
          value: function login(_ref3) {
            var _this8 = this;

            var _login = _ref3.login,
                password = _ref3.password;

            if (!_login || !password) {
              return;
            }

            return this.http.post("".concat(src_app_common_global_constants__WEBPACK_IMPORTED_MODULE_3__["GlobalConstants"].apiURL, "/users/login"), {
              login: _login,
              password: password
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (response) {
              _this8.setToken(response.token);

              _this8.isloggedIn = true;
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_this8.isloggedIn);
            })); // return of(this.isloggedIn);
          }
        }, {
          key: "isUserLoggedIn",
          value: function isUserLoggedIn() {
            return this.isloggedIn;
          }
        }, {
          key: "logoutUser",
          value: function logoutUser(retUrl) {
            this.isloggedIn = false;
            this.router.navigate(["login"], {
              queryParams: {
                retUrl: retUrl
              }
            });
          }
        }, {
          key: "getToken",
          value: function getToken() {
            return localStorage.getItem("token");
          }
        }, {
          key: "setToken",
          value: function setToken(token) {
            localStorage.setItem("token", token);
          }
        }]);

        return AuthService;
      }();

      AuthService.ɵfac = function AuthService_Factory(t) {
        return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
      };

      AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthService,
        factory: AuthService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "jxL5":
    /*!********************************************!*\
      !*** ./src/app/common/global-constants.ts ***!
      \********************************************/

    /*! exports provided: GlobalConstants */

    /***/
    function jxL5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GlobalConstants", function () {
        return GlobalConstants;
      });

      var GlobalConstants = function GlobalConstants() {
        _classCallCheck(this, GlobalConstants);
      };

      GlobalConstants.apiURL = "http://localhost:8080/api";
      GlobalConstants.imagesURL = "http://localhost:8080/img";
      GlobalConstants.baseHref = "/recipes";
      /***/
    },

    /***/
    "tynz":
    /*!**************************************************************!*\
      !*** ./src/app/modules/comment-add/comment-add.component.ts ***!
      \**************************************************************/

    /*! exports provided: CommentAddComponent */

    /***/
    function tynz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CommentAddComponent", function () {
        return CommentAddComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _comment_add_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./comment-add.service */
      "MStH");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/form-field */
      "IRfi");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/input */
      "A2Vd");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/button */
      "Xlwt");

      var CommentAddComponent = /*#__PURE__*/function () {
        function CommentAddComponent(fb, commentAddService) {
          _classCallCheck(this, CommentAddComponent);

          this.fb = fb;
          this.commentAddService = commentAddService;
          this.addCommentEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.form = this.fb.group({
            content: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
        }

        _createClass(CommentAddComponent, [{
          key: "onSubmit",
          value: function onSubmit() {
            var _this9 = this;

            this.commentAddService.addComment(Object.assign({
              id_recipe: this.recipeId.toString()
            }, this.form.value)).subscribe(function (newComment) {
              _this9.addCommentEvent.emit(newComment);
            });
          }
        }]);

        return CommentAddComponent;
      }();

      CommentAddComponent.ɵfac = function CommentAddComponent_Factory(t) {
        return new (t || CommentAddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_comment_add_service__WEBPACK_IMPORTED_MODULE_2__["CommentAddService"]));
      };

      CommentAddComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CommentAddComponent,
        selectors: [["comment-add"]],
        inputs: {
          recipeId: "recipeId"
        },
        outputs: {
          addCommentEvent: "addCommentEvent"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_comment_add_service__WEBPACK_IMPORTED_MODULE_2__["CommentAddService"]])],
        decls: 7,
        vars: 1,
        consts: [[3, "formGroup", "ngSubmit"], ["appearance", "outline", 1, "full-width"], ["formControlName", "content", "matInput", "", "placeholder", "Miejsce na Tw\xF3j komentarz"], ["type", "submit", "mat-raised-button", "", "color", "primary"]],
        template: function CommentAddComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CommentAddComponent_Template_form_ngSubmit_0_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Wpisz tutaj sw\xF3j komentarz");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "textarea", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Zapisz");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"]],
        styles: [".full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NvbW1lbnQtYWRkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQUNGIiwiZmlsZSI6ImNvbW1lbnQtYWRkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn1cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommentAddComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "comment-add",
            templateUrl: "./comment-add.component.html",
            styleUrls: ["./comment-add.component.scss"],
            providers: [_comment_add_service__WEBPACK_IMPORTED_MODULE_2__["CommentAddService"]]
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _comment_add_service__WEBPACK_IMPORTED_MODULE_2__["CommentAddService"]
          }];
        }, {
          recipeId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          addCommentEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _modules_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./modules/login/login.component */
      "ZpOo");
      /* harmony import */


      var _modules_recipes_recipes_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./modules/recipes/recipes.component */
      "MA0d");
      /* harmony import */


      var _modules_recipe_recipe_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./modules/recipe/recipe.component */
      "Cmu8");
      /* harmony import */


      var _common_global_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./common/global-constants */
      "jxL5");
      /* harmony import */


      var _modules_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./modules/auth/auth-guard.service */
      "/a0S");
      /* harmony import */


      var _modules_menu_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./modules/menu/menu.component */
      "RarI");
      /* harmony import */


      var _modules_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./modules/not-found/not-found.component */
      "1NIu");

      var routes = [{
        path: "login",
        component: _modules_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
      }, {
        path: "",
        component: _modules_menu_menu_component__WEBPACK_IMPORTED_MODULE_8__["MenuComponent"],
        canActivate: [_modules_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuardService"]],
        children: [{
          path: ":category",
          component: _modules_recipes_recipes_component__WEBPACK_IMPORTED_MODULE_4__["RecipesComponent"]
        }, {
          path: ":category/:id",
          component: _modules_recipe_recipe_component__WEBPACK_IMPORTED_MODULE_5__["RecipeComponent"],
          data: {
            title: "Przepis"
          }
        }, {
          path: "",
          component: _modules_recipes_recipes_component__WEBPACK_IMPORTED_MODULE_4__["RecipesComponent"],
          data: {
            title: "Przepisy kulinarne"
          }
        }]
      }, {
        path: "**",
        component: _modules_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__["NotFoundComponent"]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        providers: [{
          provide: _angular_common__WEBPACK_IMPORTED_MODULE_2__["APP_BASE_HREF"],
          useValue: _common_global_constants__WEBPACK_IMPORTED_MODULE_6__["GlobalConstants"].baseHref
        }],
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
          relativeLinkResolution: "legacy"
        })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
              relativeLinkResolution: "legacy"
            })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: [{
              provide: _angular_common__WEBPACK_IMPORTED_MODULE_2__["APP_BASE_HREF"],
              useValue: _common_global_constants__WEBPACK_IMPORTED_MODULE_6__["GlobalConstants"].baseHref
            }]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "xPVh":
    /*!*******************************************************!*\
      !*** ./src/app/modules/auth/http-auth.interceptor.ts ***!
      \*******************************************************/

    /*! exports provided: HttpAuthInterceptor */

    /***/
    function xPVh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HttpAuthInterceptor", function () {
        return HttpAuthInterceptor;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./auth.service */
      "j/vS");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var HttpAuthInterceptor = /*#__PURE__*/function () {
        function HttpAuthInterceptor(authService, location) {
          _classCallCheck(this, HttpAuthInterceptor);

          this.authService = authService;
          this.location = location;
        }

        _createClass(HttpAuthInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            var _this10 = this;

            var authRequest = request.clone({
              setHeaders: {
                Authorization: "Bearer ".concat(this.authService.getToken())
              }
            });
            return next.handle(authRequest).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (error) {
              if (error.status === 401) {
                _this10.authService.logoutUser(_this10.location.path());
              }

              throw error;
            }));
          }
        }]);

        return HttpAuthInterceptor;
      }();

      HttpAuthInterceptor.ɵfac = function HttpAuthInterceptor_Factory(t) {
        return new (t || HttpAuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]));
      };

      HttpAuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: HttpAuthInterceptor,
        factory: HttpAuthInterceptor.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpAuthInterceptor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
          }, {
            type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
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
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map