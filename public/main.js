(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header></header>\n<navigation-bar></navigation-bar>\n<router-outlet></router-outlet>\n<footer></footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'GoldenCinema';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _services_coming_soon_movies_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/coming-soon-movies.service */ "./src/app/services/coming-soon-movies.service.ts");
/* harmony import */ var _services_now_showing_movies_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/now-showing-movies.service */ "./src/app/services/now-showing-movies.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/search-bar/search-bar.component */ "./src/app/components/search-bar/search-bar.component.ts");
/* harmony import */ var _components_navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/navigation-bar/navigation-bar.component */ "./src/app/components/navigation-bar/navigation-bar.component.ts");
/* harmony import */ var _components_now_showing_movie_list_now_showing_movie_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/now-showing-movie-list/now-showing-movie-list.component */ "./src/app/components/now-showing-movie-list/now-showing-movie-list.component.ts");
/* harmony import */ var _components_coming_soon_movie_list_coming_soon_movie_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/coming-soon-movie-list/coming-soon-movie-list.component */ "./src/app/components/coming-soon-movie-list/coming-soon-movie-list.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_genre_genre_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/genre/genre.component */ "./src/app/components/genre/genre.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_award_award_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/award/award.component */ "./src/app/components/award/award.component.ts");
/* harmony import */ var _components_company_information_company_information_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/company-information/company-information.component */ "./src/app/components/company-information/company-information.component.ts");
/* harmony import */ var _components_not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/not-found-page/not-found-page.component */ "./src/app/components/not-found-page/not-found-page.component.ts");
/* harmony import */ var _components_add_movie_form_add_movie_form_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/add-movie-form/add-movie-form.component */ "./src/app/components/add-movie-form/add-movie-form.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_edit_movie_form_edit_movie_form_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/edit-movie-form/edit-movie-form.component */ "./src/app/components/edit-movie-form/edit-movie-form.component.ts");
/* harmony import */ var _components_posts_posts_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/posts/posts.component */ "./src/app/components/posts/posts.component.ts");
/* harmony import */ var _components_movie_movie_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/movie/movie.component */ "./src/app/components/movie/movie.component.ts");
/* harmony import */ var _components_auth_authentication_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/auth/authentication.component */ "./src/app/components/auth/authentication.component.ts");
/* harmony import */ var _components_auth_logout_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/auth/logout.component */ "./src/app/components/auth/logout.component.ts");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _components_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/user-profile/user-profile.component */ "./src/app/components/user-profile/user-profile.component.ts");
/* harmony import */ var _components_auth_auth_guard__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/auth/auth.guard */ "./src/app/components/auth/auth.guard.ts");
/* harmony import */ var _components_auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/auth/auth.interceptor */ "./src/app/components/auth/auth.interceptor.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Built-in imports







// Component imports




















// Service imports


// Route imports


// Other imports


var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_8__["SearchBarComponent"],
                _components_navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_9__["NavigationBarComponent"],
                _components_now_showing_movie_list_now_showing_movie_list_component__WEBPACK_IMPORTED_MODULE_10__["NowShowingMovieListComponent"],
                _components_coming_soon_movie_list_coming_soon_movie_list_component__WEBPACK_IMPORTED_MODULE_11__["ComingSoonMovieListComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"],
                _components_genre_genre_component__WEBPACK_IMPORTED_MODULE_14__["GenreComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"],
                _components_award_award_component__WEBPACK_IMPORTED_MODULE_16__["AwardComponent"],
                _components_company_information_company_information_component__WEBPACK_IMPORTED_MODULE_17__["CompanyInformationComponent"],
                _components_add_movie_form_add_movie_form_component__WEBPACK_IMPORTED_MODULE_19__["AddMovieFormComponent"],
                _components_not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_18__["NotFoundPageComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_20__["LoginComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_21__["RegisterComponent"],
                _components_edit_movie_form_edit_movie_form_component__WEBPACK_IMPORTED_MODULE_22__["EditMovieFormComponent"],
                _components_posts_posts_component__WEBPACK_IMPORTED_MODULE_23__["PostsComponent"],
                _components_movie_movie_component__WEBPACK_IMPORTED_MODULE_24__["MovieComponent"],
                _components_auth_authentication_component__WEBPACK_IMPORTED_MODULE_25__["AuthenticationComponent"],
                _components_auth_logout_component__WEBPACK_IMPORTED_MODULE_26__["LogoutComponent"],
                _components_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_30__["UserProfileComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_5__["HttpModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_29__["RoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
            ],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                    useClass: _components_auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_32__["AuthInterceptor"],
                    multi: true
                },
                _services_post_service__WEBPACK_IMPORTED_MODULE_27__["PostService"],
                _services_now_showing_movies_service__WEBPACK_IMPORTED_MODULE_1__["NowShowingMoviesService"],
                _services_coming_soon_movies_service__WEBPACK_IMPORTED_MODULE_0__["ComingSoonMoviesService"],
                _services_authentication_service__WEBPACK_IMPORTED_MODULE_28__["AuthenticationService"],
                _components_auth_auth_guard__WEBPACK_IMPORTED_MODULE_31__["AuthGuard"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingModule", function() { return RoutingModule; });
/* harmony import */ var _components_movie_movie_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/movie/movie.component */ "./src/app/components/movie/movie.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_genre_genre_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/genre/genre.component */ "./src/app/components/genre/genre.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_award_award_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/award/award.component */ "./src/app/components/award/award.component.ts");
/* harmony import */ var _components_company_information_company_information_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/company-information/company-information.component */ "./src/app/components/company-information/company-information.component.ts");
/* harmony import */ var _components_not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/not-found-page/not-found-page.component */ "./src/app/components/not-found-page/not-found-page.component.ts");
/* harmony import */ var _components_add_movie_form_add_movie_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/add-movie-form/add-movie-form.component */ "./src/app/components/add-movie-form/add-movie-form.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_edit_movie_form_edit_movie_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/edit-movie-form/edit-movie-form.component */ "./src/app/components/edit-movie-form/edit-movie-form.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/user-profile/user-profile.component */ "./src/app/components/user-profile/user-profile.component.ts");
/* harmony import */ var _components_auth_auth_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/auth/auth.guard */ "./src/app/components/auth/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var routes = [
    {
        path: "home",
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    },
    // {
    //   path: "",
    //   redirectTo: "/home",
    //   pathMatch: "full"
    // },
    {
        path: "genre",
        component: _components_genre_genre_component__WEBPACK_IMPORTED_MODULE_3__["GenreComponent"]
    },
    {
        path: "award",
        component: _components_award_award_component__WEBPACK_IMPORTED_MODULE_5__["AwardComponent"]
    },
    {
        path: "companyInformation",
        component: _components_company_information_company_information_component__WEBPACK_IMPORTED_MODULE_6__["CompanyInformationComponent"]
    },
    {
        path: "addMovieForm",
        component: _components_add_movie_form_add_movie_form_component__WEBPACK_IMPORTED_MODULE_8__["AddMovieFormComponent"]
    },
    {
        path: "login",
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"]
    },
    {
        path: "register",
        component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"]
    },
    {
        path: "userprofile",
        component: _components_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_12__["UserProfileComponent"],
        canActivate: [_components_auth_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]]
    },
    {
        path: "editMovieForm",
        component: _components_edit_movie_form_edit_movie_form_component__WEBPACK_IMPORTED_MODULE_10__["EditMovieFormComponent"]
    },
    {
        path: "movie/:_id",
        component: _components_movie_movie_component__WEBPACK_IMPORTED_MODULE_0__["MovieComponent"]
    },
    {
        path: "**",
        component: _components_not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_7__["NotFoundPageComponent"]
    }
];
var RoutingModule = /** @class */ (function () {
    function RoutingModule() {
    }
    RoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], RoutingModule);
    return RoutingModule;
}());



/***/ }),

/***/ "./src/app/components/add-movie-form/add-movie-form.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/add-movie-form/add-movie-form.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/add-movie-form/add-movie-form.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/add-movie-form/add-movie-form.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Add new movie</h2>\n\n<form>\n    <div class=\"form-group\">\n        <label>Movie Name</label>\n        <input type=\"text\" class=\"form-control\">\n    </div>\n\n    <div class=\"form-group\">\n        <label>Year</label>\n        <input type=\"text\" class=\"form-control\">\n    </div>\n\n    <div class=\"form-group\">\n        <label>Director(s)</label>\n        <input type=\"text\" class=\"form-control\">\n    </div>\n\n    <div class=\"form-group\">\n        <label>Actors</label>\n        <input type=\"text\" class=\"form-control\">\n    </div>\n\n    <div class=\"form-group\">\n        <label>Summary</label>\n        <textarea class=\"form-control\"></textarea>\n    </div>\n\n    <div class=\"form-group\">\n        <label>Session</label>\n        <input type=\"text\" class=\"form-control\">\n    </div>\n\n    <button class=\"btn btn-primary\">Submit</button>\n</form>"

/***/ }),

/***/ "./src/app/components/add-movie-form/add-movie-form.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/add-movie-form/add-movie-form.component.ts ***!
  \***********************************************************************/
/*! exports provided: AddMovieFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMovieFormComponent", function() { return AddMovieFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddMovieFormComponent = /** @class */ (function () {
    function AddMovieFormComponent() {
    }
    AddMovieFormComponent.prototype.ngOnInit = function () { };
    AddMovieFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "add-movie-form",
            template: __webpack_require__(/*! ./add-movie-form.component.html */ "./src/app/components/add-movie-form/add-movie-form.component.html"),
            styles: [__webpack_require__(/*! ./add-movie-form.component.css */ "./src/app/components/add-movie-form/add-movie-form.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AddMovieFormComponent);
    return AddMovieFormComponent;
}());



/***/ }),

/***/ "./src/app/components/auth/auth.guard.ts":
/*!***********************************************!*\
  !*** ./src/app/components/auth/auth.guard.ts ***!
  \***********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        // If user is not logged in, redirect to login page and delete token in local storage
        if (!this.authService.isLoggedIn()) {
            this.router.navigateByUrl("/login");
            this.authService.deleteToken();
            return false;
        }
        return true;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/components/auth/auth.interceptor.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/auth/auth.interceptor.ts ***!
  \*****************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        if (req.headers.get("noauth"))
            return next.handle(req.clone());
        else {
            var clonedReq = req.clone({
                headers: req.headers.set("Authorization", "Bearer " + this.authService.getToken())
            });
            return next.handle(clonedReq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (event) { }, function (err) {
                if (err.error.auth == false) {
                    _this.router.navigateByUrl("/login");
                }
            }));
        }
    };
    AuthInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/components/auth/authentication.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/auth/authentication.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"row spacing\">\n    <nav class=\"col-md-8-col-md-offset-2\">\n        <ul class=\"nav-nav-tabs\">\n            <li><a>Login</a></li>\n            <li><a>Register</a></li>\n            <li><a>Logout</a></li>\n        </ul>\n    </nav>\n</header>"

/***/ }),

/***/ "./src/app/components/auth/authentication.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/auth/authentication.component.ts ***!
  \*************************************************************/
/*! exports provided: AuthenticationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationComponent", function() { return AuthenticationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthenticationComponent = /** @class */ (function () {
    function AuthenticationComponent() {
    }
    AuthenticationComponent.prototype.ngOnInit = function () { };
    AuthenticationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "authentication",
            template: __webpack_require__(/*! ./authentication.component.html */ "./src/app/components/auth/authentication.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], AuthenticationComponent);
    return AuthenticationComponent;
}());



/***/ }),

/***/ "./src/app/components/auth/logout.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/auth/logout.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-8 col-md-offset-2\">\n    <button class=\"btn btn-danger\" (click)=\"onLogout()\">Logout</button>\n</div>"

/***/ }),

/***/ "./src/app/components/auth/logout.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/auth/logout.component.ts ***!
  \*****************************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LogoutComponent = /** @class */ (function () {
    function LogoutComponent() {
    }
    LogoutComponent.prototype.ngOnInit = function () { };
    LogoutComponent.prototype.onLogout = function () { };
    LogoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "logout",
            template: __webpack_require__(/*! ./logout.component.html */ "./src/app/components/auth/logout.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/components/award/award.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/award/award.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/award/award.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/award/award.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Awards</h2>\n<p>Award page is in progress.</p>"

/***/ }),

/***/ "./src/app/components/award/award.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/award/award.component.ts ***!
  \*****************************************************/
/*! exports provided: AwardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AwardComponent", function() { return AwardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AwardComponent = /** @class */ (function () {
    function AwardComponent() {
    }
    AwardComponent.prototype.ngOnInit = function () { };
    AwardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "award",
            template: __webpack_require__(/*! ./award.component.html */ "./src/app/components/award/award.component.html"),
            styles: [__webpack_require__(/*! ./award.component.css */ "./src/app/components/award/award.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AwardComponent);
    return AwardComponent;
}());



/***/ }),

/***/ "./src/app/components/coming-soon-movie-list/coming-soon-movie-list.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/components/coming-soon-movie-list/coming-soon-movie-list.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".comingSoonBlock {\n    border-style: solid;\n    background-color: whitesmoke;\n  }\n  \n  h2 {\n    text-align: center;\n  }\n  "

/***/ }),

/***/ "./src/app/components/coming-soon-movie-list/coming-soon-movie-list.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/coming-soon-movie-list/coming-soon-movie-list.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"comingSoonBlock\">\n  <h2>Coming Soon Movies</h2>\n  <ul>\n    <li routerLink=\"../editMovieForm\" *ngFor=\"let movie of movies\">\n      <a [routerLink]=\"['../movie', movie._id]\">{{movie.name}}</a>\n    </li>\n  </ul>\n</div>"

/***/ }),

/***/ "./src/app/components/coming-soon-movie-list/coming-soon-movie-list.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/coming-soon-movie-list/coming-soon-movie-list.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ComingSoonMovieListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComingSoonMovieListComponent", function() { return ComingSoonMovieListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/post.service */ "./src/app/services/post.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ComingSoonMovieListComponent = /** @class */ (function () {
    function ComingSoonMovieListComponent(service) {
        this.service = service;
    }
    ComingSoonMovieListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getPosts().subscribe(function (response) {
            _this.movies = response.json()
                .filter(function (movie) { return movie.status === 'comingSoon'; });
        });
    };
    ComingSoonMovieListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "coming-soon-movie-list",
            template: __webpack_require__(/*! ./coming-soon-movie-list.component.html */ "./src/app/components/coming-soon-movie-list/coming-soon-movie-list.component.html"),
            styles: [__webpack_require__(/*! ./coming-soon-movie-list.component.css */ "./src/app/components/coming-soon-movie-list/coming-soon-movie-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"]])
    ], ComingSoonMovieListComponent);
    return ComingSoonMovieListComponent;
}());



/***/ }),

/***/ "./src/app/components/company-information/company-information.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/components/company-information/company-information.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/company-information/company-information.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/company-information/company-information.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>About us</h2>\n<p>About us page is in progress.</p>"

/***/ }),

/***/ "./src/app/components/company-information/company-information.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/company-information/company-information.component.ts ***!
  \*********************************************************************************/
/*! exports provided: CompanyInformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyInformationComponent", function() { return CompanyInformationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CompanyInformationComponent = /** @class */ (function () {
    function CompanyInformationComponent() {
    }
    CompanyInformationComponent.prototype.ngOnInit = function () { };
    CompanyInformationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "company-information",
            template: __webpack_require__(/*! ./company-information.component.html */ "./src/app/components/company-information/company-information.component.html"),
            styles: [__webpack_require__(/*! ./company-information.component.css */ "./src/app/components/company-information/company-information.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CompanyInformationComponent);
    return CompanyInformationComponent;
}());



/***/ }),

/***/ "./src/app/components/edit-movie-form/edit-movie-form.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/edit-movie-form/edit-movie-form.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/edit-movie-form/edit-movie-form.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/edit-movie-form/edit-movie-form.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Edit movie</h2>\n\n<form>\n    <div class=\"form-group\">\n        <label for=\"movieName\">Movie Name</label>\n        <input id=\"movieName\" type=\"text\" class=\"form-control\">\n    </div>\n\n    <div class=\"form-group\">\n        <label>Year</label>\n        <input type=\"text\" class=\"form-control\">\n    </div>\n\n    <div class=\"form-group\">\n        <label>Director(s)</label>\n        <input type=\"text\" class=\"form-control\">\n    </div>\n\n    <div class=\"form-group\">\n        <label>Actors</label>\n        <input type=\"text\" class=\"form-control\">\n    </div>\n\n    <div class=\"form-group\">\n        <label>Summary</label>\n        <textarea class=\"form-control\"></textarea>\n    </div>\n\n    <div class=\"form-group\">\n        <label>Session</label>\n        <input type=\"text\" class=\"form-control\">\n    </div>\n\n    <button class=\"btn btn-primary\">Save changes</button>\n</form>"

/***/ }),

/***/ "./src/app/components/edit-movie-form/edit-movie-form.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/edit-movie-form/edit-movie-form.component.ts ***!
  \*************************************************************************/
/*! exports provided: EditMovieFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditMovieFormComponent", function() { return EditMovieFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EditMovieFormComponent = /** @class */ (function () {
    function EditMovieFormComponent() {
    }
    EditMovieFormComponent.prototype.ngOnInit = function () { };
    EditMovieFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "edit-movie-form",
            template: __webpack_require__(/*! ./edit-movie-form.component.html */ "./src/app/components/edit-movie-form/edit-movie-form.component.html"),
            styles: [__webpack_require__(/*! ./edit-movie-form.component.css */ "./src/app/components/edit-movie-form/edit-movie-form.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EditMovieFormComponent);
    return EditMovieFormComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  background-color: whitesmoke;\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  color: black;\n  text-align: center;\n}\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\n  {{companyName}}\n</div>"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.companyName = "@Golden Time Cooperation";
    }
    FooterComponent.prototype.ngOnInit = function () { };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "footer",
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/genre/genre.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/genre/genre.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/genre/genre.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/genre/genre.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Gerne</h2>\n<p>Gerne page is in progress.</p>"

/***/ }),

/***/ "./src/app/components/genre/genre.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/genre/genre.component.ts ***!
  \*****************************************************/
/*! exports provided: GenreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenreComponent", function() { return GenreComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GenreComponent = /** @class */ (function () {
    function GenreComponent() {
    }
    GenreComponent.prototype.ngOnInit = function () { };
    GenreComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "genre",
            template: __webpack_require__(/*! ./genre.component.html */ "./src/app/components/genre/genre.component.html"),
            styles: [__webpack_require__(/*! ./genre.component.css */ "./src/app/components/genre/genre.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GenreComponent);
    return GenreComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  text-align: center;\n  font: bold;\n}\n"

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h1>{{title}}</h1>\n</div>"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.title = "Golden Time Cinema";
    }
    HeaderComponent.prototype.ngOnInit = function () { };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "header",
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br/>\n<br/>\n<search-bar></search-bar>\n<br/>\n<br/>\n<now-showing-movie-list></now-showing-movie-list>\n<br/>\n<coming-soon-movie-list></coming-soon-movie-list>\n<br/>\n<button class=\"btn btn-primary\" routerLink=\"../addMovieForm\">New Movie</button>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "home",
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Log in</h2>\n<div class=\"col-md-8-col-md-offset-2\">\n\n    <form #loginForm=\"ngForm\" (ngSubmit)=\"loginForm.valid && onLogin(loginForm)\">\n        <div class=\"form-group\">\n            <label for=\"email\">Email</label>\n            <input type=\"text\" #email=\"ngModel\" [(ngModel)]=\"authService.selectedUser.email\" name=\"email\" placeholder=\"Email\" class=\"form-control\"\n                required [pattern]=\"emailRegex\" [ngClass]=\"{ 'ng-invalid': loginForm.submitted && !email.valid }\">\n            <div *ngIf=\"loginForm.submitted && email.errors\">\n                <label *ngIf=\"email.errors.required\" class=\"validation-message\">Email is required.</label>\n                <label *ngIf=\"email.errors.pattern\" class=\"validation-message\">Invalid email address.</label>\n            </div>\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"password\">Email</label>\n            <input type=\"password\" #password=\"ngModel\" [(ngModel)]=\"authService.selectedUser.password\" name=\"password\" placeholder=\"Password\"\n                class=\"form-control\" minlength=\"4\" required [ngClass]=\"{ 'ng-invalid': loginForm.submitted && !password.valid }\">\n            <div *ngIf=\"loginForm.submitted && password.errors\">\n                <label *ngIf=\"password.errors.required\" class=\"validation-message\">Password is required.</label>\n            </div>\n        </div>\n\n        <button class=\"btn btn-primary\" type=\"submit\">Login</button>\n    </form>\n\n</div>\n\n\n<!-- Error message -->\n<div class=\"alert\" *ngIf=\"errorMessages\">\n    {{errorMessages}}\n</div>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        // Email regular expression to validate email format
        this.emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.model = {
            email: "",
            password: ""
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
        // If user is already logged in, redirect to user profile page
        if (this.authService.isLoggedIn()) {
            this.router.navigateByUrl("/userprofile");
        }
    };
    LoginComponent.prototype.onLogin = function (form) {
        var _this = this;
        this.authService.login(form.value).subscribe(
        // successful authentication
        function (res) {
            _this.authService.setToken(res["token"]); // save token to local storage
            _this.router.navigateByUrl("/userprofile"); // redirect to user profile page
        }, 
        // If errors occur
        function (err) {
            _this.errorMessages = err.error.message;
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "login",
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/movie/movie.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/movie/movie.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/movie/movie.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/movie/movie.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let property of movie\">\n  <br />\n  <h2>{{property.name}}</h2>\n  <br />\n  <label>Sessions: {{property.showTime}}</label>\n  <br />\n  <label>Running time: {{property.runningTime}}</label>\n  <br />\n  <label>Director(s): {{property.directors}}</label>\n  <br />\n  <label>Cast: {{property.stars}}</label>\n  <br />\n  <label>Story: {{property.storyline}}</label>\n  <br />\n  <label>Status: {{property.status}}</label>\n</div>"

/***/ }),

/***/ "./src/app/components/movie/movie.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/movie/movie.component.ts ***!
  \*****************************************************/
/*! exports provided: MovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieComponent", function() { return MovieComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/post.service */ "./src/app/services/post.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MovieComponent = /** @class */ (function () {
    function MovieComponent(route, service) {
        this.route = route;
        this.service = service;
    }
    MovieComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .subscribe(function (params) {
            var id = params.get('_id');
            console.log(id);
            _this.service.getPostsById(id).subscribe(function (response) {
                _this.movie = response.json();
                console.log(_this.movie);
            });
        });
    };
    MovieComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movie',
            template: __webpack_require__(/*! ./movie.component.html */ "./src/app/components/movie/movie.component.html"),
            styles: [__webpack_require__(/*! ./movie.component.css */ "./src/app/components/movie/movie.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"], _services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"]])
    ], MovieComponent);
    return MovieComponent;
}());



/***/ }),

/***/ "./src/app/components/navigation-bar/navigation-bar.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/navigation-bar/navigation-bar.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navigationBar {\n  display: block;\n  background-color: whitesmoke;\n}\n\na {\n  text-decoration: none;\n  color: black;\n  padding-right: 50px;\n  padding-left: 50px;\n}\n"

/***/ }),

/***/ "./src/app/components/navigation-bar/navigation-bar.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/navigation-bar/navigation-bar.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"col-md-10 col-md-offset-2\">\n  <ul class=\"nav nav-pills\">\n    <li routerLinkActive=\"active\">\n      <a routerLink=\"../home\">{{home}}</a>\n    </li>\n    <li routerLinkActive=\"active\">\n      <a routerLink=\"../genre\">{{genre}}</a>\n    </li>\n    <li routerLinkActive=\"active\">\n      <a routerLink=\"../award\">{{award}}</a>\n    </li>\n    <li routerLinkActive=\"active\">\n      <a routerLink=\"../companyInformation\">{{companyInformation}}</a>\n    </li>\n    <!-- User authService.isLoggedIn directly here to solve problem of manually refreshing the page to see changes -->\n    <li *ngIf=\"!authService.isLoggedIn()\" routerLinkActive=\"active\">\n      <a routerLink=\"../login\">{{logIn}}</a>\n    </li>\n    <li *ngIf=\"!authService.isLoggedIn()\" routerLinkActive=\"active\">\n      <a routerLink=\"../register\">{{register}}</a>\n    </li>\n    <li *ngIf=\"authService.isLoggedIn()\" routerLinkActive=\"active\">\n      <a routerLink=\"../userprofile\">{{profile}}</a>\n    </li>\n  </ul>\n</nav>"

/***/ }),

/***/ "./src/app/components/navigation-bar/navigation-bar.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/navigation-bar/navigation-bar.component.ts ***!
  \***********************************************************************/
/*! exports provided: NavigationBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationBarComponent", function() { return NavigationBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavigationBarComponent = /** @class */ (function () {
    function NavigationBarComponent(authService) {
        this.authService = authService;
        this.logIn = "Log In";
        this.home = "Home";
        this.register = "Register";
        this.genre = "Genre";
        this.award = "Awards";
        this.companyInformation = "About us";
        this.profile = "Profile";
    }
    NavigationBarComponent.prototype.ngOnInit = function () { };
    NavigationBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "navigation-bar",
            template: __webpack_require__(/*! ./navigation-bar.component.html */ "./src/app/components/navigation-bar/navigation-bar.component.html"),
            styles: [__webpack_require__(/*! ./navigation-bar.component.css */ "./src/app/components/navigation-bar/navigation-bar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]])
    ], NavigationBarComponent);
    return NavigationBarComponent;
}());



/***/ }),

/***/ "./src/app/components/not-found-page/not-found-page.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/not-found-page/not-found-page.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/not-found-page/not-found-page.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/not-found-page/not-found-page.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Sorry, the page has not been found!</p>\n<footer></footer>"

/***/ }),

/***/ "./src/app/components/not-found-page/not-found-page.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/not-found-page/not-found-page.component.ts ***!
  \***********************************************************************/
/*! exports provided: NotFoundPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundPageComponent", function() { return NotFoundPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundPageComponent = /** @class */ (function () {
    function NotFoundPageComponent() {
    }
    NotFoundPageComponent.prototype.ngOnInit = function () { };
    NotFoundPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "not-found-page",
            template: __webpack_require__(/*! ./not-found-page.component.html */ "./src/app/components/not-found-page/not-found-page.component.html"),
            styles: [__webpack_require__(/*! ./not-found-page.component.css */ "./src/app/components/not-found-page/not-found-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundPageComponent);
    return NotFoundPageComponent;
}());



/***/ }),

/***/ "./src/app/components/now-showing-movie-list/now-showing-movie-list.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/components/now-showing-movie-list/now-showing-movie-list.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nowShowingBlock {\n    border-style: solid;\n    background-color: whitesmoke;\n  }\n  \n  h2 {\n    text-align: center;\n  }\n  "

/***/ }),

/***/ "./src/app/components/now-showing-movie-list/now-showing-movie-list.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/now-showing-movie-list/now-showing-movie-list.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"nowShowingBlock\">\n  <h2>Now Showing Movies</h2>\n  <ul>\n    <li *ngFor=\"let movie of movies\"><a>{{movie.name}}</a></li>\n  </ul>\n\n</div>"

/***/ }),

/***/ "./src/app/components/now-showing-movie-list/now-showing-movie-list.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/now-showing-movie-list/now-showing-movie-list.component.ts ***!
  \***************************************************************************************/
/*! exports provided: NowShowingMovieListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NowShowingMovieListComponent", function() { return NowShowingMovieListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/post.service */ "./src/app/services/post.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NowShowingMovieListComponent = /** @class */ (function () {
    function NowShowingMovieListComponent(service) {
        this.service = service;
    }
    NowShowingMovieListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getPosts().subscribe(function (response) {
            _this.movies = response.json()
                .filter(function (movie) { return movie.status === 'nowShowing'; });
        });
    };
    NowShowingMovieListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "now-showing-movie-list",
            template: __webpack_require__(/*! ./now-showing-movie-list.component.html */ "./src/app/components/now-showing-movie-list/now-showing-movie-list.component.html"),
            styles: [__webpack_require__(/*! ./now-showing-movie-list.component.css */ "./src/app/components/now-showing-movie-list/now-showing-movie-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"]])
    ], NowShowingMovieListComponent);
    return NowShowingMovieListComponent;
}());



/***/ }),

/***/ "./src/app/components/posts/posts.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/posts/posts.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/posts/posts.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/posts/posts.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input (keyup.enter)=\"createPost(title)\" #title type=\"text\" class=\"form-control\">\n<ul class=\"list-group\">\n  <li *ngFor=\"let post of posts\" class=\"list-group-item\">\n    <button (click)=\"updatePost(post)\" btn btn-default btn-sm>Update</button>\n    <button (click)=\"deletePost(post)\" btn btn-default btn-sm>Delete</button>\n    {{post.title}}\n  </li>\n</ul>"

/***/ }),

/***/ "./src/app/components/posts/posts.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/posts/posts.component.ts ***!
  \*****************************************************/
/*! exports provided: PostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsComponent", function() { return PostsComponent; });
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PostsComponent = /** @class */ (function () {
    function PostsComponent(service) {
        this.service = service;
    }
    PostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getPosts().subscribe(function (response) {
            _this.posts = response.json();
        });
    };
    PostsComponent.prototype.createPost = function (input) {
        var _this = this;
        var post = { title: input.value };
        input.value = "";
        this.service.createPosts(post).subscribe(function (response) {
            post["id"] = response.json().id;
            _this.posts.splice(0, 0, post);
        });
    };
    PostsComponent.prototype.updatePost = function (post) {
        //this.http.patch(this.url, JSON.stringify({ isRead: true }))
        this.service.updatePosts(post).subscribe(function (response) {
            console.log(response.json());
        });
    };
    PostsComponent.prototype.deletePost = function (post) {
        var _this = this;
        this.service.deletePosts(post.id).subscribe(function (response) {
            var index = _this.posts.indexOf(post);
            _this.posts.splice(index, 1);
        });
    };
    PostsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "posts",
            template: __webpack_require__(/*! ./posts.component.html */ "./src/app/components/posts/posts.component.html"),
            styles: [__webpack_require__(/*! ./posts.component.css */ "./src/app/components/posts/posts.component.css")]
        }),
        __metadata("design:paramtypes", [_services_post_service__WEBPACK_IMPORTED_MODULE_0__["PostService"]])
    ], PostsComponent);
    return PostsComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Create an account</h2>\n\n<div class=\"col-md-8-col-md-offset-2\">\n    <!-- Registration form -->\n    <form #registerForm=\"ngForm\" (ngSubmit)=\"registerForm.valid && onRegister(registerForm)\">\n        <!-- Firstname input for user registration -->\n        <div class=\"form-group\">\n            <label for=\"firstName\">First Name</label>\n            <input type=\"text\" #firstName=\"ngModel\" [(ngModel)]=\"authService.selectedUser.firstName\" name=\"firstName\" placeholder=\"First Name\"\n                class=\"form-control\" required [ngClass]=\"{ 'ng-invalid': registerForm.submitted && !firstName.valid }\">\n            <!-- Display of Validation for firstname input -->\n            <div *ngIf=\"registerForm.submitted && firstName.errors\">\n                <label *ngIf=\"firstName.errors.required\" class=\"validation-message\">First name is required.</label>\n            </div>\n        </div>\n\n        <!-- Lastname input for user registration -->\n        <div class=\"form-group\">\n            <label for=\"lastName\">Last Name</label>\n            <input type=\"text\" #lastName=\"ngModel\" [(ngModel)]=\"authService.selectedUser.lastName\" name=\"lastName\" placeholder=\"Last Name\"\n                class=\"form-control\" required [ngClass]=\"{ 'ng-invalid': registerForm.submitted && !lastName.valid }\">\n            <!-- Display of Validation for lastname input -->\n            <div *ngIf=\"registerForm.submitted && lastName.errors\">\n                <label *ngIf=\"lastName.errors.required\" class=\"validation-message\">Last name is required.</label>\n            </div>\n        </div>\n\n        <!-- Email input for user registration -->\n        <div class=\"form-group\">\n            <label for=\"email\">Email</label>\n            <input type=\"text\" #email=\"ngModel\" [(ngModel)]=\"authService.selectedUser.email\" name=\"email\" placeholder=\"Email\" class=\"form-control\"\n                required [pattern]=\"emailRegex\" [ngClass]=\"{ 'ng-invalid': registerForm.submitted && !email.valid }\">\n            <!-- Display of Validation for email input -->\n            <div *ngIf=\"registerForm.submitted && email.errors\">\n                <label *ngIf=\"email.errors.required\" class=\"validation-message\">Email is required.</label>\n                <label *ngIf=\"email.errors.pattern\" class=\"validation-message\">Invalid email address.</label>\n            </div>\n        </div>\n\n        <!-- Password input for user registration -->\n        <div class=\"form-group\">\n            <label for=\"password\">Password</label>\n            <input type=\"password\" #password=\"ngModel\" [(ngModel)]=\"authService.selectedUser.password\" name=\"password\" placeholder=\"Password\"\n                class=\"form-control\" minlength=\"4\" required [ngClass]=\"{ 'ng-invalid': registerForm.submitted && !password.valid }\">\n            <!-- Display of Validation for password input -->\n            <div *ngIf=\"registerForm.submitted && password.errors\">\n                <label *ngIf=\"password.errors.required\" class=\"validation-message\">Password is required.</label>\n                <label *ngIf=\"password.errors.minlength\" class=\"validation-message\">Password must have at least 4 characters.</label>\n            </div>\n        </div>\n\n        <!-- Gender input for user registration -->\n        <div class=\"form-group\">\n            <label for=\"gender\">Gender</label>\n            <select #gender=\"ngModel\" [(ngModel)]=\"authService.selectedUser.gender\" name=\"gender\" placeholder=\"Gender\" class=\"form-control\"\n                required [ngClass]=\"{ 'ng-invalid': registerForm.submitted && !gender.valid }\">\n                <option [ngValue]=\"null\" disabled>Select gender</option>\n                <option *ngFor=\"let gender of genders\" [ngValue]=\"gender\">\n                    {{ gender}}\n                </option>\n            </select>\n            <!-- Display of Validation for lastname input -->\n            <div *ngIf=\"registerForm.submitted && gender.errors\">\n                <label *ngIf=\"gender.errors.required\" class=\"validation-message\">Gender is required.</label>\n            </div>\n        </div>\n\n        <!-- Date of birth input for user registration -->\n        <div class=\"form-group\">\n            <label for=\"dob\">Date of birth</label>\n            <input type=\"date\" #dob=\"ngModel\" [(ngModel)]=\"authService.selectedUser.dob\" name=\"dob\" placeholder=\"Date of Birth\" class=\"form-control\"\n                required [ngClass]=\"{ 'ng-invalid': registerForm.submitted && !dob.valid }\">\n            <!-- Display of Validation for lastname input -->\n            <div *ngIf=\"registerForm.submitted && dob.errors\">\n                <label *ngIf=\"dob.errors.required\" class=\"validation-message\">Date of birth is required.</label>\n            </div>\n        </div>\n\n        <button class=\"btn btn-primary\" type=\"submit\">Register</button>\n    </form>\n\n</div>\n\n\n<!-- Success message -->\n<div class=\"success\" *ngIf=\"successMessage\">\n    Registration is completed\n</div>\n\n\n<!-- Error message -->\n<div class=\"alert\" *ngIf=\"errorMessages\">\n    {{errorMessages}}\n</div>"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        // Email regular expression to validate email format
        this.emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.gender = null;
        this.genders = ["Female", "Male", "Other"];
    }
    RegisterComponent.prototype.ngOnInit = function () {
        // If user is already logged in, redirect to user profile page
        if (this.authService.isLoggedIn()) {
            this.router.navigateByUrl("/userprofile");
        }
    };
    RegisterComponent.prototype.onRegister = function (form) {
        var _this = this;
        this.authService.registerUser(form.value).subscribe(
        // if registration is successfull
        function (res) {
            _this.successMessage = true;
            setTimeout(function () { return (_this.successMessage = false); }, 4000); // Success message dissapears after 4 seconds
            _this.resetForm(form);
        }, 
        // if there are errors sent from server-side
        function (err) {
            if (err.status === 422) {
                _this.errorMessages = err.error.join("<br/>");
            }
            else
                _this.errorMessages = "Something went wrong. Please contact admin.";
        });
    };
    RegisterComponent.prototype.resetForm = function (form) {
        this.authService.selectedUser = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            gender: "",
            dob: null
        };
        form.resetForm();
        this.errorMessages = "";
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "register",
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/search-bar/search-bar.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/search-bar/search-bar.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/search-bar/search-bar.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/search-bar/search-bar.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input type=\"text\" value={{defaultText}}>\n<button class=\"btn btn-primary\">{{buttonName}}</button>"

/***/ }),

/***/ "./src/app/components/search-bar/search-bar.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/search-bar/search-bar.component.ts ***!
  \***************************************************************/
/*! exports provided: SearchBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBarComponent", function() { return SearchBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchBarComponent = /** @class */ (function () {
    function SearchBarComponent() {
        this.defaultText = "Plese enter here";
        this.buttonName = "Search";
    }
    SearchBarComponent.prototype.ngOnInit = function () { };
    SearchBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "search-bar",
            template: __webpack_require__(/*! ./search-bar.component.html */ "./src/app/components/search-bar/search-bar.component.html"),
            styles: [__webpack_require__(/*! ./search-bar.component.css */ "./src/app/components/search-bar/search-bar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SearchBarComponent);
    return SearchBarComponent;
}());



/***/ }),

/***/ "./src/app/components/user-profile/user-profile.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/user-profile/user-profile.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user-profile/user-profile.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/user-profile/user-profile.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table *ngIf=\"userDetails\">\n\n  <h2>User Profile</h2>\n\n  <div>\n    <p>First Name: {{userDetails.firstName}}</p>\n    <p>Last Name: {{userDetails.lastName}}</p>\n    <p>Email: {{userDetails.email}}</p>\n    <p>Gender: {{userDetails.gender}}</p>\n    <p>Date of birth: {{userDetails.dob}}</p>\n  </div>\n\n\n\n\n  <button (click)=\"onLogout()\">Logout</button>"

/***/ }),

/***/ "./src/app/components/user-profile/user-profile.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/user-profile/user-profile.component.ts ***!
  \*******************************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getUserProfile().subscribe(function (res) {
            _this.userDetails = res["user"];
        }, function (err) { });
    };
    // Method to logout: delete token and redirect user to login page
    UserProfileComponent.prototype.onLogout = function () {
        this.authService.deleteToken();
        this.router.navigate(["/login"]);
    };
    UserProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "user-profile",
            template: __webpack_require__(/*! ./user-profile.component.html */ "./src/app/components/user-profile/user-profile.component.html"),
            styles: [__webpack_require__(/*! ./user-profile.component.css */ "./src/app/components/user-profile/user-profile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
        // Initialize a User object with empty email and password
        this.selectedUser = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            gender: "",
            dob: null
        };
        this.noAuthHeader = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ NoAuth: "True" }) };
    }
    // httpMethods
    AuthenticationService.prototype.registerUser = function (user) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBaseUrl + "/register", user, this.noAuthHeader);
    };
    AuthenticationService.prototype.login = function (authCredentials) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBaseUrl + "/authenticate", authCredentials, this.noAuthHeader);
    };
    // need jwt in the header
    AuthenticationService.prototype.getUserProfile = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBaseUrl + "/userprofile");
    };
    //Helper Methods
    // save token of current user inside local storage
    AuthenticationService.prototype.setToken = function (token) {
        localStorage.setItem("token", token);
    };
    // get the token in local storage
    AuthenticationService.prototype.getToken = function () {
        return localStorage.getItem("token");
    };
    // delete token inside local storage
    AuthenticationService.prototype.deleteToken = function () {
        localStorage.removeItem("token");
    };
    // Extract user payload from token
    AuthenticationService.prototype.getUserPayload = function () {
        var token = this.getToken();
        if (token) {
            var userPayload = atob(token.split(".")[1]);
            return JSON.parse(userPayload);
        }
        else
            return null;
    };
    AuthenticationService.prototype.isLoggedIn = function () {
        var userPayload = this.getUserPayload();
        // check if jwt expiration time is over or not
        if (userPayload)
            return userPayload.exp > Date.now() / 1000;
        else
            return false;
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/services/coming-soon-movies.service.ts":
/*!********************************************************!*\
  !*** ./src/app/services/coming-soon-movies.service.ts ***!
  \********************************************************/
/*! exports provided: ComingSoonMoviesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComingSoonMoviesService", function() { return ComingSoonMoviesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ComingSoonMoviesService = /** @class */ (function () {
    function ComingSoonMoviesService() {
    }
    ComingSoonMoviesService.prototype.getUpcomingMovies = function () {
        return [
            "The Lord of Ring",
            "Notting Hill",
            "Harry Potter",
            "American Hustles"
        ];
    };
    ComingSoonMoviesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        })
    ], ComingSoonMoviesService);
    return ComingSoonMoviesService;
}());



/***/ }),

/***/ "./src/app/services/now-showing-movies.service.ts":
/*!********************************************************!*\
  !*** ./src/app/services/now-showing-movies.service.ts ***!
  \********************************************************/
/*! exports provided: NowShowingMoviesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NowShowingMoviesService", function() { return NowShowingMoviesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NowShowingMoviesService = /** @class */ (function () {
    function NowShowingMoviesService() {
    }
    NowShowingMoviesService.prototype.getShowingMovies = function () {
        return [
            "Good Will Hunting",
            "Forest Gump",
            "Catch Me If You Can",
            "Terminal"
        ];
    };
    NowShowingMoviesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        })
    ], NowShowingMoviesService);
    return NowShowingMoviesService;
}());



/***/ }),

/***/ "./src/app/services/post.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/post.service.ts ***!
  \******************************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PostService = /** @class */ (function () {
    function PostService(http) {
        this.http = http;
        this.url = '/api/movies';
    }
    PostService.prototype.getPosts = function () {
        return this.http.get(this.url);
    };
    PostService.prototype.getPostsById = function (_id) {
        return this.http.get(this.url + '/' + _id);
    };
    PostService.prototype.createPosts = function (post) {
        return this.http.post(this.url, JSON.stringify(post));
    };
    PostService.prototype.updatePosts = function (post) {
        return this.http.put(this.url + '/' + post.id, JSON.stringify(post));
    };
    PostService.prototype.deletePosts = function (id) {
        return this.http.delete(this.url + '/' + id);
    };
    PostService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_0__["Http"]])
    ], PostService);
    return PostService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiBaseUrl: "http://localhost:3000/api"
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/zhangyufei/Documents/IT/Github/Golden-Time-Cinema/GoldenTimeCinema-angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map