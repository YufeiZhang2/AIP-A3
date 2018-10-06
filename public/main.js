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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/search-bar/search-bar.component */ "./src/app/components/search-bar/search-bar.component.ts");
/* harmony import */ var _components_navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/navigation-bar/navigation-bar.component */ "./src/app/components/navigation-bar/navigation-bar.component.ts");
/* harmony import */ var _components_now_showing_movie_list_now_showing_movie_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/now-showing-movie-list/now-showing-movie-list.component */ "./src/app/components/now-showing-movie-list/now-showing-movie-list.component.ts");
/* harmony import */ var _components_coming_soon_movie_list_coming_soon_movie_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/coming-soon-movie-list/coming-soon-movie-list.component */ "./src/app/components/coming-soon-movie-list/coming-soon-movie-list.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_genre_genre_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/genre/genre.component */ "./src/app/components/genre/genre.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_company_information_company_information_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/company-information/company-information.component */ "./src/app/components/company-information/company-information.component.ts");
/* harmony import */ var _components_not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/not-found-page/not-found-page.component */ "./src/app/components/not-found-page/not-found-page.component.ts");
/* harmony import */ var _components_add_movie_form_add_movie_form_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/add-movie-form/add-movie-form.component */ "./src/app/components/add-movie-form/add-movie-form.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_edit_movie_form_edit_movie_form_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/edit-movie-form/edit-movie-form.component */ "./src/app/components/edit-movie-form/edit-movie-form.component.ts");
/* harmony import */ var _components_movie_movie_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/movie/movie.component */ "./src/app/components/movie/movie.component.ts");
/* harmony import */ var _components_auth_authentication_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/auth/authentication.component */ "./src/app/components/auth/authentication.component.ts");
/* harmony import */ var _components_auth_logout_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/auth/logout.component */ "./src/app/components/auth/logout.component.ts");
/* harmony import */ var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/admin/admin.component */ "./src/app/components/admin/admin.component.ts");
/* harmony import */ var _components_message_message_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/message/message.component */ "./src/app/components/message/message.component.ts");
/* harmony import */ var _components_book_movies_book_movies_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/book-movies/book-movies.component */ "./src/app/components/book-movies/book-movies.component.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_movies_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./services/movies.service */ "./src/app/services/movies.service.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _components_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/user-profile/user-profile.component */ "./src/app/components/user-profile/user-profile.component.ts");
/* harmony import */ var _components_auth_auth_guard__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/auth/auth.guard */ "./src/app/components/auth/auth.guard.ts");
/* harmony import */ var _components_auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/auth/auth.interceptor */ "./src/app/components/auth/auth.interceptor.ts");
/* harmony import */ var mydatepicker__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! mydatepicker */ "./node_modules/mydatepicker/index.js");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_6__["SearchBarComponent"],
                _components_navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_7__["NavigationBarComponent"],
                _components_now_showing_movie_list_now_showing_movie_list_component__WEBPACK_IMPORTED_MODULE_8__["NowShowingMovieListComponent"],
                _components_coming_soon_movie_list_coming_soon_movie_list_component__WEBPACK_IMPORTED_MODULE_9__["ComingSoonMovieListComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
                _components_genre_genre_component__WEBPACK_IMPORTED_MODULE_12__["GenreComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
                _components_company_information_company_information_component__WEBPACK_IMPORTED_MODULE_14__["CompanyInformationComponent"],
                _components_add_movie_form_add_movie_form_component__WEBPACK_IMPORTED_MODULE_16__["AddMovieFormComponent"],
                _components_not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_15__["NotFoundPageComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_18__["RegisterComponent"],
                _components_edit_movie_form_edit_movie_form_component__WEBPACK_IMPORTED_MODULE_19__["EditMovieFormComponent"],
                _components_movie_movie_component__WEBPACK_IMPORTED_MODULE_20__["MovieComponent"],
                _components_auth_authentication_component__WEBPACK_IMPORTED_MODULE_21__["AuthenticationComponent"],
                _components_auth_logout_component__WEBPACK_IMPORTED_MODULE_22__["LogoutComponent"],
                _components_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_29__["UserProfileComponent"],
                _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_23__["AdminComponent"],
                _components_message_message_component__WEBPACK_IMPORTED_MODULE_24__["MessageComponent"],
                _components_book_movies_book_movies_component__WEBPACK_IMPORTED_MODULE_25__["BookMoviesComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_28__["RoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                mydatepicker__WEBPACK_IMPORTED_MODULE_32__["MyDatePickerModule"]
            ],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
                    useClass: _components_auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_31__["AuthInterceptor"],
                    multi: true
                },
                _services_authentication_service__WEBPACK_IMPORTED_MODULE_26__["AuthenticationService"],
                _components_auth_auth_guard__WEBPACK_IMPORTED_MODULE_30__["AuthGuard"],
                _services_movies_service__WEBPACK_IMPORTED_MODULE_27__["MoviesService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
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
/* harmony import */ var _components_book_movies_book_movies_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/book-movies/book-movies.component */ "./src/app/components/book-movies/book-movies.component.ts");
/* harmony import */ var _components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/search-bar/search-bar.component */ "./src/app/components/search-bar/search-bar.component.ts");
/* harmony import */ var _components_message_message_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/message/message.component */ "./src/app/components/message/message.component.ts");
/* harmony import */ var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/admin/admin.component */ "./src/app/components/admin/admin.component.ts");
/* harmony import */ var _components_movie_movie_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/movie/movie.component */ "./src/app/components/movie/movie.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_genre_genre_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/genre/genre.component */ "./src/app/components/genre/genre.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_company_information_company_information_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/company-information/company-information.component */ "./src/app/components/company-information/company-information.component.ts");
/* harmony import */ var _components_not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/not-found-page/not-found-page.component */ "./src/app/components/not-found-page/not-found-page.component.ts");
/* harmony import */ var _components_add_movie_form_add_movie_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/add-movie-form/add-movie-form.component */ "./src/app/components/add-movie-form/add-movie-form.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_edit_movie_form_edit_movie_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/edit-movie-form/edit-movie-form.component */ "./src/app/components/edit-movie-form/edit-movie-form.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/user-profile/user-profile.component */ "./src/app/components/user-profile/user-profile.component.ts");
/* harmony import */ var _components_auth_auth_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/auth/auth.guard */ "./src/app/components/auth/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var routes = [
    {
        path: "",
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"]
    },
    {
        path: "home",
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"]
    },
    {
        path: "genre",
        component: _components_genre_genre_component__WEBPACK_IMPORTED_MODULE_7__["GenreComponent"]
    },
    {
        path: "admin",
        component: _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"]
    },
    {
        path: "companyInformation",
        component: _components_company_information_company_information_component__WEBPACK_IMPORTED_MODULE_9__["CompanyInformationComponent"]
    },
    {
        path: "addMovieForm",
        component: _components_add_movie_form_add_movie_form_component__WEBPACK_IMPORTED_MODULE_11__["AddMovieFormComponent"]
    },
    {
        path: "login",
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"]
    },
    {
        path: "register",
        component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"]
    },
    {
        path: "userprofile",
        component: _components_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_15__["UserProfileComponent"],
        canActivate: [_components_auth_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]]
    },
    {
        path: "editMovieForm",
        component: _components_edit_movie_form_edit_movie_form_component__WEBPACK_IMPORTED_MODULE_13__["EditMovieFormComponent"]
    },
    {
        path: "movie/:_id",
        component: _components_movie_movie_component__WEBPACK_IMPORTED_MODULE_4__["MovieComponent"]
    },
    {
        path: "message",
        component: _components_message_message_component__WEBPACK_IMPORTED_MODULE_2__["MessageComponent"]
    },
    {
        path: "search",
        component: _components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_1__["SearchBarComponent"]
    },
    {
        path: "movie/:showtime/:_id",
        component: _components_book_movies_book_movies_component__WEBPACK_IMPORTED_MODULE_0__["BookMoviesComponent"]
    },
    {
        path: "genre/:showtime/:_id",
        component: _components_book_movies_book_movies_component__WEBPACK_IMPORTED_MODULE_0__["BookMoviesComponent"]
    },
    {
        path: "search/:showtime/:_id",
        component: _components_book_movies_book_movies_component__WEBPACK_IMPORTED_MODULE_0__["BookMoviesComponent"]
    },
    {
        path: "**",
        component: _components_not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_10__["NotFoundPageComponent"]
    }
];
var RoutingModule = /** @class */ (function () {
    function RoutingModule() {
    }
    RoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]]
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

module.exports = "@import url('https://fonts.googleapis.com/css?family=Bold|Cormorant SC');\n@import url('https://fonts.googleapis.com/css?family=Semi-Bold|Source Sans Pro');\n@import url('https://fonts.googleapis.com/css?family=Source Sans Pro');\n#form{\n    font-family: 'Source Sans Pro', sans-serif;\n    font-size: 20px;\n    color: grey;\n}\n#genres{\n    font-family: 'Source Sans Pro', sans-serif;\n    font-size: 20px;\n    color:black;\n}\nspan{\n   font-size: 25px;\n   color: black;\n   font-family: 'Source Sans Pro', sans-serif;\n   font-family: 'Semi-Bold', sans-serif;\n}\nbutton{\n    font-family: 'Source Sans Pro', sans-serif;\n    width:5cm;\n    height: 1cm;;\n}"

/***/ }),

/***/ "./src/app/components/add-movie-form/add-movie-form.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/add-movie-form/add-movie-form.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br />\n<br />\n<br />\n<button class=\"btn btn-secondary\" (click)=\"ClickToAdmin()\">Back to admin</button>\n<br />\n<br />\n<br />\n<form [formGroup]=\"form\" id=\"form\">\n\n    <div class=\"form-group\">\n        <label for=\"name\">Movie Name</label>\n        <input formControlName=\"name\" id=\"name\" type=\"text\" class=\"form-control\">\n        <div *ngIf=\"name.touched && name.invalid\" class=\"alert alert-danger\">\n            <div *ngIf=\"name.errors.required\">Name is required</div>\n            <div *ngIf=\"name.errors.minlength\">Name requires at least {{name.errors.minlength.requiredLength}}\n                charaters.</div>\n            <div *ngIf=\"name.errors.maxlength\">Name requires at most {{name.errors.maxlength.requiredLength}}\n                charaters.</div>\n            <div *ngIf=\"name.errors.shouldBeUnique\">Name should be unique.</div>\n        </div>\n    </div>\n\n    <div class=\"form-group\">\n        <label for=\"runningTime\">Running time</label>\n        <input formControlName=\"runningTime\" id=\"runningTime\" type=\"number\" class=\"form-control\">\n        <div *ngIf=\"runningTime.touched && runningTime.invalid\" class=\"alert alert-danger\">\n            <div *ngIf=\"runningTime.errors.required\">Running time is required.</div>\n            <div *ngIf=\"runningTime.errors.min\">Running time requires at least greater than or equal 1.</div>\n            <div *ngIf=\"runningTime.errors.max\">Running time requires less than or equal 500.</div>\n        </div>\n    </div>\n\n    <div class=\"form-group\">\n        <label for=\"showtime\">Session (please enter the datetime one by one)</label>\n        <input formArrayName=\"showtime\" id=\"showtime\" type=\"datetime-local\" (keyup.enter)=\"addShowtime(showtimeItem)\"\n            #showtimeItem class=\"form-control\">\n        <ul class=\"list-group\">\n            <li *ngFor=\"let showtimeItem of showtime.controls , let i = index\" (click)=\"\n                    removeShowtime(showtimeItem)\"\n                class=\"list-group-item\">\n                {{showtime.value[i]}}\n            </li>\n        </ul>\n        <!-- <div *ngIf=\"showtime.touched && showtime.invalid\" class=\"alert alert-danger\">\n                <div *ngIf=\"showtime.errors.required\">showtime is required</div>\n                <div *ngIf=\"showtime.errors.minlength\">showtime requires at least\n                    {{showtime.errors.minlength.requiredLength}}\n                    charaters.</div>\n                <div *ngIf=\"showtime.errors.maxlength\">showtime requires at most\n                    {{showtime.errors.maxlength.requiredLength}}\n                    charaters.</div>\n            </div> -->\n    </div>\n\n    <div class=\"form-group\">\n        <label for=\"stars\">Stars (please enter the name one by one; delete the name by clicking it) </label>\n        <input formArrayName=\"stars\" id=\"stars\" type=\"text\" (keyup.enter)=\"addStar(star)\" #star class=\"form-control\">\n        <ul class=\"list-group\">\n            <li *ngFor=\"let star of stars.controls\" (click)=\"removeStar(star)\" class=\"list-group-item\">\n                {{star.value}}\n            </li>\n        </ul>\n        <div *ngIf=\"stars.touched && stars.invalid\" class=\"alert alert-danger\">\n            <div class=\"alert alert-danger\" *ngIf=\"stars.errors.cannotBeNull\">Stars name is required</div>\n        </div>\n    </div>\n\n    <div class=\"form-group\">\n        <label for=\"genres\">Genres</label>\n        <input formArrayName=\"genres\" id=\"genres\" type=\"text\" (keyup.enter)=\"addGenre(genre)\" #genre placeholder=\"Please enter dramas/ action/ crime/ horror/ comedies/ fantasy/ romance\"\n            class=\"form-control\">\n        <ul class=\"list-group\">\n            <li *ngFor=\"let genre of genres.controls\" (click)=\"removeGenre(genre)\" class=\"list-group-item\">\n                {{genre.value}}\n            </li>\n        </ul>\n        <!-- <div *ngIf=\"genres.touched && genres.invalid\" class=\"alert alert-danger\">\n                <div *ngIf=\"genres.errors.required\">showtime is required</div>\n                <div *ngIf=\"genres.errors.minlength\">showtime requires at least\n                    {{showtime.errors.minlength.requiredLength}}\n                    charaters.</div>\n                <div *ngIf=\"genres.errors.maxlength\">showtime requires at most\n                    {{showtime.errors.maxlength.requiredLength}}\n                    charaters.</div>\n            </div> -->\n    </div>\n\n    <div class=\"form-group\">\n        <label for=\"director\">Director</label>\n        <input formControlName=\"director\" id=\"director\" type=\"text\" class=\"form-control\">\n        <div *ngIf=\"director.touched && director.invalid\" class=\"alert alert-danger\">\n            <div *ngIf=\"director.errors.required\">Director name is required</div>\n            <div *ngIf=\"director.errors.minlength\">Director name requires at least\n                {{director.errors.minlength.requiredLength}} charaters.</div>\n            <div *ngIf=\"director.errors.maxlength\">Director name requires at most\n                {{director.errors.maxlength.requiredLength}} charaters.</div>\n        </div>\n    </div>\n\n\n\n    <div class=\"form-group\">\n        <label for=\"storyline\">Storyline</label>\n        <textarea formControlName=\"storyline\" id=\"storyline\" clos=\"30\" rows=\"10 \" class=\"form-control\"></textarea>\n        <div *ngIf=\"storyline.touched && storyline.invalid\" class=\"alert alert-danger\">\n            <div *ngIf=\"storyline.errors.required\">Storyline is required</div>\n            <div *ngIf=\"storyline.errors.minlength\">Storyline requires at least\n                {{storyline.errors.minlength.requiredLength}}\n                charaters.</div>\n            <div *ngIf=\"storyline.errors.maxlength\">Storyline requires at most\n                {{storyline.errors.maxlength.requiredLength}}\n                charaters.</div>\n        </div>\n    </div>\n\n\n    <div class=\"form-group\">\n        <label for=\"Price\">Price</label>\n        <input formControlName=\"price\" id=\"price\" type=\"number\" class=\"form-control\">\n        <div *ngIf=\"price.touched && price.invalid\" class=\"alert alert-danger\">\n            <div *ngIf=\"price.errors.required\">Price is required.</div>\n            <div *ngIf=\"price.errors.min\">Price requires at least greater than or equal 1.</div>\n            <div *ngIf=\"price.errors.max\">price requires less than or equal 10000.</div>\n        </div>\n    </div>\n\n    <div class=\"form-group\">\n        <label>Status</label>\n        <br>\n        <label for=\"nowShowing\">Now Showing: </label>\n        <input formControlName=\"status\" id=\"nowShowing\" type=\"radio\" class=\"form-control\" value=\"nowShowing\">\n\n        <label for=\"comingSoon\">Coming Soon:</label>\n        <input formControlName=\"status\" id=\"comingSoon\" type=\"radio\" class=\"form-control\" value=\"comingSoon\">\n    </div>\n\n    <button type=\"submit\" [disabled]=\"!form.valid\" (click)=\"onSubmit()\" class=\"btn btn-primary\">Submit</button>\n    <br />\n    <br />\n    <div class=\"alert alert-info\" role=\"alert\" *ngIf=\"!form.valid\">\n        <label>Please complete all the information, thanks!</label>\n    </div>\n    <div class=\"alert alert-success\" role=\"alert\" *ngIf=\"form.valid\">\n        <label>You can submit the movie now.</label>\n    </div>\n\n</form>\n<br />"

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
/* harmony import */ var _common_validators_movie_name_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../common/validators/movie.name.validators */ "./src/app/components/common/validators/movie.name.validators.ts");
/* harmony import */ var _common_validators_formArray_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/validators/formArray.validators */ "./src/app/components/common/validators/formArray.validators.ts");
/* harmony import */ var _services_movies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/movies.service */ "./src/app/services/movies.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
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
    function AddMovieFormComponent(router, service) {
        this.router = router;
        this.service = service;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(60)]), _common_validators_movie_name_validators__WEBPACK_IMPORTED_MODULE_0__["MovieInfoValidators"].shouldBeUnique(this.service)),
            'runningTime': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].max(500)])),
            'director': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(50)])),
            'stars': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormArray"]([], _common_validators_formArray_validators__WEBPACK_IMPORTED_MODULE_1__["FormArrayValidators"].cannotBeNull),
            'storyline': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(1000)])),
            'showtime': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormArray"]([], _common_validators_formArray_validators__WEBPACK_IMPORTED_MODULE_1__["FormArrayValidators"].cannotBeNull),
            'genres': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormArray"]([], _common_validators_formArray_validators__WEBPACK_IMPORTED_MODULE_1__["FormArrayValidators"].cannotBeNull),
            'price': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].max(10000)])),
            'status': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required)
        });
    }
    Object.defineProperty(AddMovieFormComponent.prototype, "name", {
        //accesser for the FormConrol name
        get: function () {
            return this.form.get('name');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddMovieFormComponent.prototype, "runningTime", {
        //accesser for the FormConrol runningTime
        get: function () {
            return this.form.get('runningTime');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddMovieFormComponent.prototype, "director", {
        //accesser for the FormControl director
        get: function () {
            return this.form.get('director');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddMovieFormComponent.prototype, "stars", {
        //accesser for the FormArray stars
        get: function () {
            return this.form.get('stars');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddMovieFormComponent.prototype, "storyline", {
        //accesser for the FormControl storyline
        get: function () {
            return this.form.get('storyline');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddMovieFormComponent.prototype, "showtime", {
        //accesser for the FormArray showtime
        get: function () {
            return this.form.get('showtime');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddMovieFormComponent.prototype, "genres", {
        //accesser for the FormArray genres
        get: function () {
            return this.form.get('genres');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddMovieFormComponent.prototype, "status", {
        //accesser for the FormControl storyline
        get: function () {
            return this.form.get('status');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddMovieFormComponent.prototype, "price", {
        //accesser for the FormConrol runningTime
        get: function () {
            return this.form.get('price');
        },
        enumerable: true,
        configurable: true
    });
    AddMovieFormComponent.prototype.ngOnInit = function () {
    };
    //add star name in the stars array
    AddMovieFormComponent.prototype.addStar = function (star) {
        this.stars.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](star.value));
        //clear the enter field
        star.value = '';
    };
    //delete a star name in the stars array
    AddMovieFormComponent.prototype.removeStar = function (star) {
        var index = this.stars.controls.indexOf(star);
        this.stars.removeAt(index);
    };
    //add showtime in the stars array
    AddMovieFormComponent.prototype.addShowtime = function (showtimeItem) {
        this.showtime.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](showtimeItem.value));
        //clear the enter field
        showtimeItem.value = '';
    };
    //delete a star name in the stars array
    AddMovieFormComponent.prototype.removeShowtime = function (showtimeItem) {
        var index = this.stars.controls.indexOf(showtimeItem);
        this.showtime.removeAt(index);
    };
    //add star name in the stars array
    AddMovieFormComponent.prototype.addGenre = function (genre) {
        this.genres.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](genre.value));
        //clear the enter field
        genre.value = '';
    };
    //delete a star name in the stars array
    AddMovieFormComponent.prototype.removeGenre = function (genre) {
        var index = this.genres.controls.indexOf(genre);
        this.genres.removeAt(index);
    };
    //submit the form
    AddMovieFormComponent.prototype.onSubmit = function () {
        //console.log(this.form.value);
        this.service.createMovies(this.form.value).subscribe(function (response) {
            console.log(response.json());
        });
    };
    //button back to admin page 
    AddMovieFormComponent.prototype.ClickToAdmin = function () {
        this.router.navigate(["/admin"]);
    };
    AddMovieFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: "add-movie-form",
            template: __webpack_require__(/*! ./add-movie-form.component.html */ "./src/app/components/add-movie-form/add-movie-form.component.html"),
            styles: [__webpack_require__(/*! ./add-movie-form.component.css */ "./src/app/components/add-movie-form/add-movie-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_movies_service__WEBPACK_IMPORTED_MODULE_2__["MoviesService"]])
    ], AddMovieFormComponent);
    return AddMovieFormComponent;
}());



/***/ }),

/***/ "./src/app/components/admin/admin.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/admin/admin.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Bold|Cormorant SC');\n@import url('https://fonts.googleapis.com/css?family=Semi-Bold|Source Sans Pro');\n@import url('https://fonts.googleapis.com/css?family=Source Sans Pro');\nbutton{\n    width: 5cm;\n    height: 1cm;\n}\n#admin{\n\n    font-size: 20px;\n    color: grey;\n    font-family: 'Source Sans Pro', sans-serif;\n   font-family: 'Semi-Bold', sans-serif;\n}\nspan{\n   font-size: 25px;\n   color: black;\n   font-family: 'Source Sans Pro', sans-serif;\n   font-family: 'Semi-Bold', sans-serif;\n}\nh3{\n    text-align: center;\n    color: black;\n    font-family: 'Cormorant SC', sans-serif;\n    font-family: 'Bold', sans-serif;\n}"

/***/ }),

/***/ "./src/app/components/admin/admin.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/admin/admin.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br />\n<br />\n<br />\n<div id=\"admin\">\n  <button class=\"btn btn-primary\" (click)=\"clickToAddMovie()\">Add Movies</button>\n  <br />\n  <br />\n  <div *ngFor=\"let movie of movies; let i = index\" [attr.movieIndex]=\"i\">\n    <br />\n    <h3>{{movie.name}}</h3>\n    <br />\n    <br />\n    <button class=\"btn btn-secondary\" (click)=\"onDelete(i)\">Delete movie </button>\n    <br />\n    <br />\n    <button class=\"btn btn-secondary\" (click)=\"onUpdate(i)\">Update Status</button>\n    <br />\n    <br />\n    <label><span>Session time: </span>\n      <br />\n      <br />\n      <div *ngFor=\"let showtime of movie.showtime\">{{showtime | date:'short'}}<br /></div>\n    </label>\n    <br />\n    <br />\n    <label><span>Running time:</span>\n      <br />\n      <br />\n      {{movie.runningTime}} </label>\n    <br />\n    <br />\n    <label><span>Director: </span>\n      <br />\n      <br />\n      {{movie.director|uppercase}}</label>\n    <br />\n    <br />\n    <span>Cast: </span>\n    <br />\n    <br />\n    <div *ngFor=\"let star of movie.stars\">\n      <label>{{star|uppercase}}</label>\n      <br />\n    </div>\n    <br />\n    <label><span>Storyline:</span>\n      <br />\n      <br />\n      {{movie.storyline}}</label>\n    <br />\n    <br />\n    <span>Genre: </span>\n    <br />\n    <br />\n    <div *ngFor=\"let genre of movie.genres\">\n      <label>{{genre|uppercase}}</label>\n      <br />\n    </div>\n    <br />\n    <br />\n    <label><span>Price: </span>\n      <br />\n      <br />\n      {{movie.price | currency:'AUD':true:'1.2-2'}} </label>\n    <br />\n    <br />\n    <label><span>Status:\n        <br />\n        <br />\n      </span>{{movie.status|uppercase}}</label>\n    <br />\n    <br />\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/admin/admin.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/admin/admin.component.ts ***!
  \*****************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _services_movies_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/movies.service */ "./src/app/services/movies.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminComponent = /** @class */ (function () {
    //initialize movie service and router
    function AdminComponent(service, router) {
        this.service = service;
        this.router = router;
    }
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        //get all movies
        this.service.getMovies().subscribe(function (response) {
            _this.movies = response.json();
        });
    };
    //delete a movie
    AdminComponent.prototype.onDelete = function (movieIndex) {
        var objectId;
        console.log(movieIndex);
        //get the movie id based on the index of the movie
        objectId = this.movies[movieIndex]._id;
        console.log(objectId);
        //delete the specific movie
        this.service.deleteMovies(objectId).subscribe(function (response) {
            console.log(response.json());
        });
        //give a prompt of sucessful operation to admin
        this.router.navigate(["/message"]);
    };
    //update the status of a movie
    AdminComponent.prototype.onUpdate = function (movieIndex) {
        // update the status of a movie
        this.movies[movieIndex].status === "nowShowing" ?
            this.movies[movieIndex].status = "comingSoon" : this.movies[movieIndex].status = "nowShowing";
        //get the current movie
        var movie = this.movies[movieIndex];
        console.log("before update", movie);
        //update the status of the specific movie
        this.service.updateMovies(movie).subscribe(function (response) {
            console.log("response from update:", response.json());
        });
    };
    AdminComponent.prototype.clickToAddMovie = function () {
        this.router.navigate(["/addMovieForm"]);
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/components/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/components/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [_services_movies_service__WEBPACK_IMPORTED_MODULE_0__["MoviesService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AdminComponent);
    return AdminComponent;
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

/***/ "./src/app/components/book-movies/book-movies.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/book-movies/book-movies.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Bold|Cormorant SC');\n@import url('https://fonts.googleapis.com/css?family=Semi-Bold|Source Sans Pro');\n@import url('https://fonts.googleapis.com/css?family=Source Sans Pro');\n@import url('https://fonts.googleapis.com/css?family=Fredericka the Great');\n#movie{\n    font-family: 'Source Sans Pro', sans-serif;\n    font-size: 20px;\n    color: grey;\n}\nspan{\n   font-size: 20px;\n   color: black;\n   font-family: 'Source Sans Pro', sans-serif;\n   font-family: 'Semi-Bold', sans-serif;\n}\nh2{\n    text-align: left;\n    color: grey;\n    font-family: 'Cormorant SC', sans-serif;\n    font-family: 'Bold', sans-serif;\n}\nh3{\n    text-align: left;\n    color: black;\n    font-family: 'Fredericka the Great', sans-serif;\n}\nlabel{\n    font-size: 20px;\n    color: black;\n    font-family: 'Source Sans Pro', sans-serif;\n}\nbutton{\n    font-family: 'Source Sans Pro', sans-serif;\n    width:5cm;\n    height: 1cm;;\n}"

/***/ }),

/***/ "./src/app/components/book-movies/book-movies.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/book-movies/book-movies.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br />\n<br />\n<button class=\"btn btn-secondary\" (click)=\"backToHome()\">Home Page</button>\n<br />\n<br />\n<br />\n<h2>Booking:</h2>\n<div *ngFor=\"let property of movie\" id=\"movie\">\n  <br />\n  <h3>{{property.name}}</h3>\n  <br />\n\n  <label> <span>Sessions: </span></label>\n  <div>{{bookingTime\n    |\n    date:'short'}}<br /></div>\n  <br />\n  <label><span>Price: </span>{{property.price | currency:'AUD':true:'1.2-2'}}</label>\n  <br />\n  <br />\n</div>\n\n<div *ngIf=\"!flag\" id=\"movie\">\n  <br />\n  <br />\n  <label>This movie is coming soon. Please stay tune.</label>\n</div>\n<div *ngIf=\"flag\" id=\"movie\">\n  <form id=\"form\">\n    <label>Please enter your email: </label><input id=\"email\" type=\"text\" class=\"form-control\">\n    <br />\n    <button class=\"btn btn-primary\" type=\"submit\">Confirm booking</button>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/components/book-movies/book-movies.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/book-movies/book-movies.component.ts ***!
  \*****************************************************************/
/*! exports provided: BookMoviesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookMoviesComponent", function() { return BookMoviesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_movies_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/movies.service */ "./src/app/services/movies.service.ts");
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



var BookMoviesComponent = /** @class */ (function () {
    function BookMoviesComponent(route, router, service) {
        this.route = route;
        this.router = router;
        this.service = service;
        this.flag = false;
    }
    BookMoviesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .subscribe(function (params) {
            _this.bookingTime = params.get('showtime');
            console.log(_this.bookingTime);
            var _id = params.get('_id');
            console.log(_id);
            _this.service.getMoviesById(_id).subscribe(function (response) {
                _this.movie = response.json()
                    .filter(function (movie) {
                    if (movie.status === "nowShowing") {
                        console.log('flag before:', _this.flag);
                        _this.flag = true;
                        console.log('flag after:', _this.flag);
                        return movie;
                    }
                });
            });
        });
    };
    BookMoviesComponent.prototype.backToHome = function () {
        this.router.navigate(["/home"]);
    };
    BookMoviesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'book-movies',
            template: __webpack_require__(/*! ./book-movies.component.html */ "./src/app/components/book-movies/book-movies.component.html"),
            styles: [__webpack_require__(/*! ./book-movies.component.css */ "./src/app/components/book-movies/book-movies.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_movies_service__WEBPACK_IMPORTED_MODULE_1__["MoviesService"]])
    ], BookMoviesComponent);
    return BookMoviesComponent;
}());



/***/ }),

/***/ "./src/app/components/coming-soon-movie-list/coming-soon-movie-list.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/components/coming-soon-movie-list/coming-soon-movie-list.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Bold|Cormorant SC');\n\n.comingSoonBlock {\n  background-color:white;\n  text-align: center;\n  font-family: 'Cormorant SC', sans-serif;\n  font-family: 'Bold', sans-serif;\n  font-size: 35px;\n  color: gray;\n  }\n\n#list{\n    color: grey;\n    font-size: 20px;\n    font-family: 'Cormorant SC', sans-serif;\n  }"

/***/ }),

/***/ "./src/app/components/coming-soon-movie-list/coming-soon-movie-list.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/coming-soon-movie-list/coming-soon-movie-list.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br />\n<div class=\"comingSoonBlock\">\n  <div class=\"list-group\">\n    <div class=\"border border-light\">\n      COMING SOON\n    </div>\n    <ul if=\"list\" class=\"list-group list-group-flush\">\n      <li class=\"list-group-item\" *ngFor=\"let movie of movies\">\n        <a [routerLink]=\"['../movie', movie._id]\" id=\"list\">{{movie.name}}</a>\n      </li>\n    </ul>\n  </div>\n</div>"

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
/* harmony import */ var _services_movies_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/movies.service */ "./src/app/services/movies.service.ts");
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
        this.service.getMovies().subscribe(function (response) {
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
        __metadata("design:paramtypes", [_services_movies_service__WEBPACK_IMPORTED_MODULE_1__["MoviesService"]])
    ], ComingSoonMovieListComponent);
    return ComingSoonMovieListComponent;
}());



/***/ }),

/***/ "./src/app/components/common/validators/formArray.validators.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/common/validators/formArray.validators.ts ***!
  \**********************************************************************/
/*! exports provided: FormArrayValidators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormArrayValidators", function() { return FormArrayValidators; });
var FormArrayValidators = /** @class */ (function () {
    function FormArrayValidators() {
    }
    FormArrayValidators.cannotBeNull = function (control) {
        if (control.value.length === 0)
            return { cannotBeNull: true };
        return null;
    };
    return FormArrayValidators;
}());



/***/ }),

/***/ "./src/app/components/common/validators/movie.name.validators.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/common/validators/movie.name.validators.ts ***!
  \***********************************************************************/
/*! exports provided: MovieInfoValidators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieInfoValidators", function() { return MovieInfoValidators; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MovieInfoValidators = /** @class */ (function () {
    function MovieInfoValidators() {
    }
    MovieInfoValidators.shouldBeUnique = function (service) {
        return function (control) {
            return new Promise(function (resolve, reject) {
                setTimeout(function () {
                    service.getMovies().subscribe(function (response) {
                        console.log(response.json());
                        var movies = response.json();
                        for (var _i = 0, movies_1 = movies; _i < movies_1.length; _i++) {
                            var movie = movies_1[_i];
                            console.log(movie);
                            if (control.value.toString().toLowerCase().trim().replace(/ /g, '') === movie.name.toString().toLowerCase().trim().replace(/ /g, ''))
                                return resolve({ shouldBeUnique: true });
                        }
                        return resolve(null);
                    });
                }, 1000);
            });
        };
    };
    MovieInfoValidators = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], MovieInfoValidators);
    return MovieInfoValidators;
}());



/***/ }),

/***/ "./src/app/components/company-information/company-information.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/components/company-information/company-information.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Semi|Cormorant SC');\n\n\n\n#information{\n    font-family: 'Cormorant SC', sans-serif;\n    font-size: 25px;\n    color: black;\n    overflow-wrap: break-word;\n    width: 70em;\n}\n\n"

/***/ }),

/***/ "./src/app/components/company-information/company-information.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/company-information/company-information.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br />\n<br />\n<br />\n<br />\n<div id=\"information\">\n    Golden Time Cinema is for movie lovers to enjoy the classis movies anytime. Our cinema contains\n    more than ten movie rooms with cozy enviroment. We hope audience can have the best experince and travel with time\n    machine to the\n    classic movies they love. Feel free to contact us if you have any question. Our team is here to help you\n    responsively.\n</div>"

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

module.exports = "@import url('https://fonts.googleapis.com/css?family=Semi-Bold|Source Sans Pro');\n@import url('https://fonts.googleapis.com/css?family=Source Sans Pro');\n.footer {\n  background-color: white;\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  color: black;\n  text-align: center;\n  font-family: 'Source Sans Pro', sans-serif;\n  font-family: 'Semi-Bold', sans-serif;\n  font-size: 15px;\n}\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer border-top\">\n  {{companyName}}\n</div>"

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

module.exports = "@import url('https://fonts.googleapis.com/css?family=Bold|Cormorant SC');\n@import url('https://fonts.googleapis.com/css?family=Semi-Bold|Source Sans Pro');\n@import url('https://fonts.googleapis.com/css?family=Source Sans Pro');\n#movie{\n    font-family: 'Source Sans Pro', sans-serif;\n    font-size: 20px;\n    color: grey;\n}\nspan{\n   font-size: 25px;\n   color: black;\n   font-family: 'Source Sans Pro', sans-serif;\n   font-family: 'Semi-Bold', sans-serif;\n}\nh3{\n    text-align: center;\n    color: black;\n    font-family: 'Cormorant SC', sans-serif;\n    font-family: 'Bold', sans-serif;\n}\na{\n    text-align: center;\n}"

/***/ }),

/***/ "./src/app/components/genre/genre.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/genre/genre.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br />\n<br />\n<br />\n<div id=\"genres\" class=\"list-group\">\n    <a (click)=\"findMoviesByGenre(dramas)\" class=\"list-group-item list-group-item-action list-group-item-light\">Dramas</a>\n    <a (click)=\"findMoviesByGenre(action)\" class=\"list-group-item list-group-item-action list-group-item-dark\">Action</a>\n    <a (click)=\"findMoviesByGenre(crime)\" class=\"list-group-item list-group-item-action list-group-item-light\">Crime</a>\n    <a (click)=\"findMoviesByGenre(horror)\" class=\"list-group-item list-group-item-action list-group-item-dark\">Horror</a>\n    <a (click)=\"findMoviesByGenre(comedies)\" class=\"list-group-item list-group-item-action list-group-item-light\">Comedies</a>\n    <a (click)=\"findMoviesByGenre(fantasy)\" class=\"list-group-item list-group-item-action list-group-item-dark\">Fantasy</a>\n    <a (click)=\"findMoviesByGenre(romance)\" class=\"list-group-item list-group-item-action list-group-item-light\">Romance</a>\n</div>\n<br />\n<br />\n<div *ngFor=\"let property of movies\" id=\"movie\">\n    <h3>{{property.name}}</h3>\n    <br />\n    <br />\n    <br />\n    <label> <span>Sessions: </span></label>\n    <br />\n    <div *ngFor=\"let showtime of property.showtime\" class=\"list-group-item list-group-item-action list-group-item-light\"\n        [routerLink]=\"['../genre', showtime,property._id]\">{{showtime | date:'short'}}<br />\n    </div>\n    <br />\n    <label><span>Running time: </span>\n        <br />\n        <br />\n        {{property.runningTime}} mins\n    </label>\n    <br />\n    <br />\n    <label><span>Director: </span>\n        <br />\n        <br />\n        {{property.director | uppercase}}\n    </label>\n    <br />\n    <br />\n    <label><span>Cast:</span></label>\n    <br />\n    <div *ngFor=\"let star of property.stars\">\n        {{star|uppercase}}\n        <br />\n    </div>\n    <br />\n    <br />\n    <label><span>Story: </span>\n        <br />\n        <br />\n        {{property.storyline}}\n    </label>\n    <br />\n    <br />\n    <label><span>Genre:</span></label>\n    <div *ngFor=\"let genre of property.genres\">\n        {{genre|uppercase}}\n    </div>\n    <br />\n    <br />\n    <label><span>Status: </span>\n        <br />\n        <br />\n        {{property.status | uppercase}}\n    </label>\n    <br />\n    <br />\n</div>"

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
/* harmony import */ var _services_movies_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/movies.service */ "./src/app/services/movies.service.ts");
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


var GenreComponent = /** @class */ (function () {
    function GenreComponent(service) {
        this.service = service;
        this.dramas = "dramas";
        this.action = "action";
        this.crime = "crime";
        this.horror = "horror";
        this.comedies = "comedies";
        this.fantasy = "fantasy";
        this.romance = "romance";
    }
    GenreComponent.prototype.ngOnInit = function () { };
    GenreComponent.prototype.findMoviesByGenre = function (inputValue) {
        var _this = this;
        console.log(inputValue);
        this.service.getMovies().subscribe(function (response) {
            //get movies by genres
            _this.movies = response.json()
                .filter(function (movies) {
                for (var _i = 0, _a = movies.genres; _i < _a.length; _i++) {
                    var genre = _a[_i];
                    if (genre.toLowerCase() === inputValue.toLowerCase())
                        return movies;
                }
            });
            console.log("movies retrived by genres", _this.movies);
        });
    };
    GenreComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "genre",
            template: __webpack_require__(/*! ./genre.component.html */ "./src/app/components/genre/genre.component.html"),
            styles: [__webpack_require__(/*! ./genre.component.css */ "./src/app/components/genre/genre.component.css")]
        }),
        __metadata("design:paramtypes", [_services_movies_service__WEBPACK_IMPORTED_MODULE_0__["MoviesService"]])
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

module.exports = "@import url('https://fonts.googleapis.com/css?family=Fredericka the Great');\n\n\nh1 {\n  text-align: center;\n  font: bold;\n  font-family: 'Fredericka the Great', sans-serif;\n  color: rgb(209, 156, 21);\n    \n}\n"

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h1 class=\"text-center\" style=\"font-size:50px\">{{title}}</h1>\n</div>\n<br />\n<br />"

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

module.exports = "<br />\n<br />\n<br />\n<now-showing-movie-list></now-showing-movie-list>\n<br />\n<br />\n<br />\n<coming-soon-movie-list></coming-soon-movie-list>\n<br />\n<br />"

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

module.exports = "@import url('https://fonts.googleapis.com/css?family=Semi-Bold|Source Sans Pro');\n\nlabel{\n    font-family: 'Source Sans Pro', sans-serif;\n    font-family: 'Semi-Bold', sans-serif;\n}"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br />\n<br />\n<div class=\"col-md-8-col-md-offset-2\">\n\n    <form #loginForm=\"ngForm\" (ngSubmit)=\"loginForm.valid && onLogin(loginForm)\">\n        <div class=\"form-group\">\n            <label for=\"email\">Email</label>\n            <input type=\"text\" #email=\"ngModel\" [(ngModel)]=\"authService.selectedUser.email\" name=\"email\" placeholder=\"Email\" class=\"form-control\"\n                required [pattern]=\"emailRegex\" [ngClass]=\"{ 'ng-invalid': loginForm.submitted && !email.valid }\">\n            <div *ngIf=\"loginForm.submitted && email.errors\">\n                <label *ngIf=\"email.errors.required\" class=\"validation-message\">Email is required.</label>\n                <label *ngIf=\"email.errors.pattern\" class=\"validation-message\">Invalid email address.</label>\n            </div>\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"password\">Email</label>\n            <input type=\"password\" #password=\"ngModel\" [(ngModel)]=\"authService.selectedUser.password\" name=\"password\" placeholder=\"Password\"\n                class=\"form-control\" minlength=\"4\" required [ngClass]=\"{ 'ng-invalid': loginForm.submitted && !password.valid }\">\n            <div *ngIf=\"loginForm.submitted && password.errors\">\n                <label *ngIf=\"password.errors.required\" class=\"validation-message\">Password is required.</label>\n            </div>\n        </div>\n\n        <button class=\"btn btn-primary\" type=\"submit\">Login</button>\n    </form>\n\n</div>\n\n\n<!-- Error message -->\n<div class=\"alert\" *ngIf=\"errorMessages\" style=\"font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif\">\n    {{errorMessages}}\n</div>"

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

/***/ "./src/app/components/message/message.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/message/message.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Bold|Cormorant SC');\n@import url('https://fonts.googleapis.com/css?family=Semi-Bold|Source Sans Pro');\n@import url('https://fonts.googleapis.com/css?family=Source Sans Pro');\n#message{\n    text-align: center;\n    font-family: 'Source Sans Pro', sans-serif;\n    font-family: 'Semi-Bold', sans-serif;\n    font-size: 20px;\n  \n}\nbutton{\n    width: 5cm;\n    height: 1cm;\n}\n\n"

/***/ }),

/***/ "./src/app/components/message/message.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/message/message.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br />\n<br />\n<button class=\"btn btn-secondary\" (click)=\"backToAdmin()\">back to admin</button>\n<div id=\"message\">\n  <br />\n  <br />\n  <br />\n  <br />\n  <p class=\"alert alert-success\" role=\"alert\">The operation is successful!</p>\n\n</div>"

/***/ }),

/***/ "./src/app/components/message/message.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/message/message.component.ts ***!
  \*********************************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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


var MessageComponent = /** @class */ (function () {
    function MessageComponent(router) {
        this.router = router;
    }
    MessageComponent.prototype.ngOnInit = function () {
    };
    //button back to admin
    MessageComponent.prototype.backToAdmin = function () {
        this.router.navigate(["/admin"]);
    };
    MessageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'message',
            template: __webpack_require__(/*! ./message.component.html */ "./src/app/components/message/message.component.html"),
            styles: [__webpack_require__(/*! ./message.component.css */ "./src/app/components/message/message.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], MessageComponent);
    return MessageComponent;
}());



/***/ }),

/***/ "./src/app/components/movie/movie.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/movie/movie.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Bold|Cormorant SC');\n@import url('https://fonts.googleapis.com/css?family=Semi-Bold|Source Sans Pro');\n@import url('https://fonts.googleapis.com/css?family=Source Sans Pro');\n#movie{\n    font-family: 'Source Sans Pro', sans-serif;\n    font-size: 20px;\n    color: grey;\n}\nspan{\n   font-size: 25px;\n   color: black;\n   font-family: 'Source Sans Pro', sans-serif;\n   font-family: 'Semi-Bold', sans-serif;\n}\nh3{\n    text-align: center;\n    color: black;\n    font-family: 'Cormorant SC', sans-serif;\n    font-family: 'Bold', sans-serif;\n}"

/***/ }),

/***/ "./src/app/components/movie/movie.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/movie/movie.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br />\n<br />\n<div *ngFor=\"let property of movie\" id=\"movie\">\n  <h3>{{property.name}}</h3>\n  <br />\n  <br />\n  <br />\n  <label>\n    <span>Sessions: </span>\n  </label>\n  <br />\n  <div *ngFor=\"let showtime of property.showtime\" class=\"list-group-item list-group-item-action list-group-item-light\" [routerLink]=\"['../', showtime,property._id]\">{{showtime | date:'short'}}\n    <br />\n  </div>\n  <br />\n  <label>\n    <span>Running time: </span>\n    <br />\n    <br /> {{property.runningTime}} mins\n  </label>\n  <br />\n  <br />\n  <label>\n    <span>Director: </span>\n    <br />\n    <br /> {{property.director | uppercase}}\n  </label>\n  <br />\n  <br />\n  <label>\n    <span>Cast:</span>\n  </label>\n  <br />\n  <div *ngFor=\"let star of property.stars\">\n    {{star|uppercase}}\n    <br />\n  </div>\n  <br />\n  <br />\n  <label>\n    <span>Story: </span>\n    <br />\n    <br /> {{property.storyline}}\n  </label>\n  <br />\n  <br />\n  <label>\n    <span>Genre:</span>\n  </label>\n  <div *ngFor=\"let genre of property.genres\">\n    {{genre|uppercase}}\n  </div>\n  <br />\n  <br />\n  <label>\n    <span>Status: </span>\n    <br />\n    <br /> {{property.status | uppercase}}\n  </label>\n  <br />\n  <br />\n</div>"

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
/* harmony import */ var _services_movies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/movies.service */ "./src/app/services/movies.service.ts");
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
        //get the router parameter that is the object id of a movie.
        this.route.paramMap
            .subscribe(function (params) {
            var _id = params.get('_id');
            console.log(_id);
            //get a specific movie object by its object id
            _this.service.getMoviesById(_id).subscribe(function (response) {
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
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"], _services_movies_service__WEBPACK_IMPORTED_MODULE_2__["MoviesService"]])
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

module.exports = "@import url('https://fonts.googleapis.com/css?family=Semi-Bold|Cormorant SC');\n\n.navigationBar {\n  display: block;\n  background-color: whitesmoke;\n}\n\na {\n  font-family: 'Cormorant SC', sans-serif;\n  font-family: 'Semi-Bold', sans-serif;\n  text-decoration: none;\n  color:gray;\n  padding-right: 50px;\n  padding-left: 50px;\n  font-size: 15px;\n}\n"

/***/ }),

/***/ "./src/app/components/navigation-bar/navigation-bar.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/navigation-bar/navigation-bar.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br />\n<nav>\n  <ul class=\"nav justify-content-center\">\n    <li class=\"nav-item\" routerLinkActive=\"active\">\n      <a routerLink=\"../\">{{home}}</a>\n    </li>\n    <li class=\"nav-item\" routerLinkActive=\"active\">\n      <a routerLink=\"../search\">{{search}}</a>\n    </li>\n    <li class=\"nav-item\" routerLinkActive=\"active\">\n      <a routerLink=\"../genre\">{{genre}}</a>\n    </li>\n    <li class=\"nav-item\" routerLinkActive=\"active\">\n      <a routerLink=\"../admin\">{{admin}}</a>\n    </li>\n    <!-- User authService.isLoggedIn directly here to solve problem of manually refreshing the page to see changes -->\n    <li class=\"nav-item\" *ngIf=\"!authService.isLoggedIn()\" routerLinkActive=\"active\">\n      <a routerLink=\"../login\">{{logIn}}</a>\n    </li>\n    <li class=\"nav-item\" *ngIf=\"!authService.isLoggedIn()\" routerLinkActive=\"active\">\n      <a routerLink=\"../register\">{{register}}</a>\n    </li>\n    <li class=\"nav-item\" *ngIf=\"authService.isLoggedIn()\" routerLinkActive=\"active\">\n      <a routerLink=\"../userprofile\">{{profile}}</a>\n    </li>\n    <li class=\"nav-item\" routerLinkActive=\"active\">\n      <a routerLink=\"../companyInformation\">{{companyInformation}}</a>\n    </li>\n  </ul>\n\n</nav>\n<br />\n<div class=\"border border-bottom border-light\"> </div>"

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
        this.logIn = "LOG IN";
        this.home = "HOME";
        this.register = "REGISTER";
        this.genre = "GENRES";
        this.admin = "ADMIN";
        this.companyInformation = "ABOUT US";
        this.profile = "PROFILE";
        this.search = "SEARCH";
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

module.exports = "@import url('https://fonts.googleapis.com/css?family=Semi-Bold|Source Sans Pro');\n@import url('https://fonts.googleapis.com/css?family=Source Sans Pro');\n#message{\n    text-align: center;\n    font-family: 'Source Sans Pro', sans-serif;\n    font-family: 'Semi-Bold', sans-serif;\n    font-size: 20px;\n  \n}"

/***/ }),

/***/ "./src/app/components/not-found-page/not-found-page.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/not-found-page/not-found-page.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br />\n<br />\n<br />\n<div class=\"alert alert-warning\" id=\"message\">Sorry, the page has not been found!</div>\n<footer></footer>"

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

module.exports = "@import url('https://fonts.googleapis.com/css?family=Bold|Cormorant SC');\n\n.nowShowingBlock {\n  background-color:white;\n  text-align: center;\n  font-family: 'Cormorant SC', sans-serif;\n  font-family: 'Bold', sans-serif;\n  font-size: 35px;\n  color: gray;\n  }\n\n#list{\n    color: grey;\n    font-size: 20px;\n    font-family: 'Cormorant SC', sans-serif;\n  }\n\n#alert{\n    text-align: center;\n    font-family: 'Cormorant SC', sans-serif;\n    font-size: 35px;\n    color: gray;\n  }\n\nul{\n    text-align: center;\n  }\n\n"

/***/ }),

/***/ "./src/app/components/now-showing-movie-list/now-showing-movie-list.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/now-showing-movie-list/now-showing-movie-list.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br />\n<div>\n  <div class=\"nowShowingBlock\">\n    <div class=\"border border-light\">NOW SHOWING</div>\n  </div>\n  <ul if=\"list\" class=\"list-group list-group-flush\">\n    <li class=\"list-group-item\" *ngFor=\"let movie of movies\">\n      <a [routerLink]=\"['../movie', movie._id]\" id=\"list\">{{movie.name}}</a>\n    </li>\n  </ul>\n</div>\n\n<!-- <div id=\"alert\">Please be patient, more movies are yet to come.</div> -->"

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
/* harmony import */ var _services_movies_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/movies.service */ "./src/app/services/movies.service.ts");
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


var NowShowingMovieListComponent = /** @class */ (function () {
    function NowShowingMovieListComponent(service) {
        this.service = service;
    }
    NowShowingMovieListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getMovies().subscribe(function (response) {
            _this.movies = response.json()
                .filter(function (movie) { return movie.status === 'nowShowing'; });
        });
    };
    NowShowingMovieListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "now-showing-movie-list",
            template: __webpack_require__(/*! ./now-showing-movie-list.component.html */ "./src/app/components/now-showing-movie-list/now-showing-movie-list.component.html"),
            styles: [__webpack_require__(/*! ./now-showing-movie-list.component.css */ "./src/app/components/now-showing-movie-list/now-showing-movie-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_movies_service__WEBPACK_IMPORTED_MODULE_0__["MoviesService"]])
    ], NowShowingMovieListComponent);
    return NowShowingMovieListComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Semi-Bold|Source Sans Pro');\n\nlabel{\n    font-family: 'Source Sans Pro', sans-serif;\n    font-family: 'Semi-Bold', sans-serif;\n    font-size : 15px;\n}"

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br />\n<br />\n<div class=\"col-md-8-col-md-offset-2\">\n    <!-- Registration form -->\n    <form #registerForm=\"ngForm\" (ngSubmit)=\"registerForm.valid && onRegister(registerForm)\">\n        <!-- Firstname input for user registration -->\n        <div class=\"form-group\">\n            <label for=\"firstName\">First Name</label>\n            <input type=\"text\" #firstName=\"ngModel\" [(ngModel)]=\"authService.selectedUser.firstName\" name=\"firstName\" placeholder=\"First Name\"\n                class=\"form-control\" required [ngClass]=\"{ 'ng-invalid': registerForm.submitted && !firstName.valid }\">\n            <!-- Display of Validation for firstname input -->\n            <div *ngIf=\"registerForm.submitted && firstName.errors\">\n                <label *ngIf=\"firstName.errors.required\" class=\"validation-message\">First name is required.</label>\n            </div>\n        </div>\n\n        <!-- Lastname input for user registration -->\n        <div class=\"form-group\">\n            <label for=\"lastName\">Last Name</label>\n            <input type=\"text\" #lastName=\"ngModel\" [(ngModel)]=\"authService.selectedUser.lastName\" name=\"lastName\" placeholder=\"Last Name\"\n                class=\"form-control\" required [ngClass]=\"{ 'ng-invalid': registerForm.submitted && !lastName.valid }\">\n            <!-- Display of Validation for lastname input -->\n            <div *ngIf=\"registerForm.submitted && lastName.errors\">\n                <label *ngIf=\"lastName.errors.required\" class=\"validation-message\">Last name is required.</label>\n            </div>\n        </div>\n\n        <!-- Email input for user registration -->\n        <div class=\"form-group\">\n            <label for=\"email\">Email</label>\n            <input type=\"text\" #email=\"ngModel\" [(ngModel)]=\"authService.selectedUser.email\" name=\"email\" placeholder=\"Email\" class=\"form-control\"\n                required [pattern]=\"emailRegex\" [ngClass]=\"{ 'ng-invalid': registerForm.submitted && !email.valid }\">\n            <!-- Display of Validation for email input -->\n            <div *ngIf=\"registerForm.submitted && email.errors\">\n                <label *ngIf=\"email.errors.required\" class=\"validation-message\">Email is required.</label>\n                <label *ngIf=\"email.errors.pattern\" class=\"validation-message\">Invalid email address.</label>\n            </div>\n        </div>\n\n        <!-- Password input for user registration -->\n        <div class=\"form-group\">\n            <label for=\"password\">Password</label>\n            <input type=\"password\" #password=\"ngModel\" [(ngModel)]=\"authService.selectedUser.password\" name=\"password\" placeholder=\"Password\"\n                class=\"form-control\" minlength=\"4\" required [ngClass]=\"{ 'ng-invalid': registerForm.submitted && !password.valid }\">\n            <!-- Display of Validation for password input -->\n            <div *ngIf=\"registerForm.submitted && password.errors\">\n                <label *ngIf=\"password.errors.required\" class=\"validation-message\">Password is required.</label>\n                <label *ngIf=\"password.errors.minlength\" class=\"validation-message\">Password must have at least 4 characters.</label>\n            </div>\n        </div>\n\n        <!-- Gender input for user registration -->\n        <div class=\"form-group\">\n            <label for=\"gender\">Gender</label>\n            <select #gender=\"ngModel\" [(ngModel)]=\"authService.selectedUser.gender\" name=\"gender\" placeholder=\"Gender\" class=\"form-control\"\n                required [ngClass]=\"{ 'ng-invalid': registerForm.submitted && !gender.valid }\">\n                <option [ngValue]=\"null\" disabled>Select gender</option>\n                <option *ngFor=\"let gender of genders\" [ngValue]=\"gender\">\n                    {{ gender}}\n                </option>\n            </select>\n            <!-- Display of Validation for gender input -->\n            <div *ngIf=\"registerForm.submitted && gender.errors\">\n                <label *ngIf=\"gender.errors.required\" class=\"validation-message\">Gender is required.</label>\n            </div>\n        </div>\n\n        <!-- Date of birth input for user registration -->\n        <div class=\"form-group\">\n            <label for=\"dob\">Date of birth</label>\n            <input type=\"date\" #dob=\"ngModel\" [(ngModel)]=\"authService.selectedUser.dob\" name=\"dob\" placeholder=\"Date of Birth\" class=\"form-control\"\n                required [ngClass]=\"{ 'ng-invalid': registerForm.submitted && !dob.valid }\">\n            <!-- Display of Validation for date of birth input -->\n            <div *ngIf=\"registerForm.submitted && dob.errors\">\n                <label *ngIf=\"dob.errors.required\" class=\"validation-message\">Date of birth is required.</label>\n            </div>\n        </div>\n\n        <button class=\"btn btn-primary\" type=\"submit\">Register</button>\n    </form>\n</div>\n<br />\n\n<!-- Success message -->\n<div class=\"success\" *ngIf=\"successMessage\">\n    <label>Registration is completed</label>\n</div>\n\n<!-- Error message -->\n<div class=\"alert\" *ngIf=\"errorMessages\">\n    <label> {{errorMessages}}</label>\n</div>"

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

module.exports = "@import url('https://fonts.googleapis.com/css?family=Bold|Cormorant SC');\n@import url('https://fonts.googleapis.com/css?family=Semi-Bold|Source Sans Pro');\n@import url('https://fonts.googleapis.com/css?family=Source Sans Pro');\n#movie{\n    font-family: 'Source Sans Pro', sans-serif;\n    font-size: 20px;\n    color: grey;\n}\nspan{\n   font-weight: bolder;\n   font-size: 25px;\n   color: black;\n   font-family: 'Source Sans Pro', sans-serif;\n   font-family: 'Semi-Bold', sans-serif;\n}\nh3{\n    text-align: center;\n    color: black;\n    font-family: 'Cormorant SC', sans-serif;\n    font-family: 'Bold', sans-serif;\n}"

/***/ }),

/***/ "./src/app/components/search-bar/search-bar.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/search-bar/search-bar.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br />\n<br />\n<div id=\"searchBar\">\n    <form [formGroup]=\"form\">\n        <div class=\"input-group\">\n            <input formControlName=\"movieName\" type=\"text\" placeholder=\"please search here\" class=\"form-control\">\n            <div class=\"input-group-append\">\n                <button class=\"btn btn-outline-secondary\" type=\"submit\" [disabled]=\"!form.valid\" (click)=\"onSubmit()\">search</button>\n            </div>\n        </div>\n        <br />\n        <div *ngIf=\"movieName.invalid\">\n            <div *ngIf=\"movieName.errors.minlength\">Name requires at least\n                {{movieName.errors.minlength.requiredLength}}\n                charaters.\n            </div>\n            <div *ngIf=\"movieName.errors.maxlength\">Name requires at most\n                {{movieName.errors.maxlength.requiredLength}}\n                charaters.\n            </div>\n        </div>\n    </form>\n</div>\n<div>\n    <div *ngFor=\"let property of movieResult\" id=\"movie\">\n        <h3>{{property.name}}</h3>\n        <br />\n        <br />\n        <br />\n        <label> <span>Sessions: </span></label>\n        <br />\n        <div *ngFor=\"let showtime of property.showtime\" class=\"list-group-item list-group-item-action list-group-item-light\"\n            [routerLink]=\"['../genre', showtime,property._id]\">{{showtime | date:'short'}}<br />\n        </div>\n        <br />\n        <label><span>Running time: </span>\n            <br />\n            <br />\n            {{property.runningTime}} mins\n        </label>\n        <br />\n        <br />\n        <label><span>Director: </span>\n            <br />\n            <br />\n            {{property.director | uppercase}}\n        </label>\n        <br />\n        <br />\n        <label><span>Cast:</span></label>\n        <br />\n        <div *ngFor=\"let star of property.stars\">\n            {{star|uppercase}}\n            <br />\n        </div>\n        <br />\n        <br />\n        <label><span>Story: </span>\n            <br />\n            <br />\n            {{property.storyline}}\n        </label>\n        <br />\n        <br />\n        <label><span>Genre:</span></label>\n        <div *ngFor=\"let genre of property.genres\">\n            {{genre|uppercase}}\n        </div>\n        <br />\n        <br />\n        <label><span>Status: </span>\n            <br />\n            <br />\n            {{property.status | uppercase}}\n        </label>\n        <br />\n        <br />\n    </div>"

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
/* harmony import */ var _services_movies_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/movies.service */ "./src/app/services/movies.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
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
    function SearchBarComponent(service) {
        this.service = service;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'movieName': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(60)])
        });
    }
    SearchBarComponent.prototype.ngOnInit = function () { };
    Object.defineProperty(SearchBarComponent.prototype, "movieName", {
        get: function () {
            return this.form.get('movieName');
        },
        enumerable: true,
        configurable: true
    });
    SearchBarComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.form.value);
        this.service.getMovies().subscribe(function (response) {
            _this.movies = response.json();
            console.log(_this.movies);
            //find every movie in the database for matching user input
            for (var _i = 0, _a = _this.movies; _i < _a.length; _i++) {
                var movie = _a[_i];
                console.log(movie.name);
                //if words match, get the sepecific movie from database
                if (_this.CompareWithWords(movie.name, _this.form.value.movieName)) {
                    //get the object id of the matched movie
                    _this.searchResultId = movie._id;
                    console.log(_this.searchResultId);
                    _this.service.getMoviesById(_this.searchResultId).subscribe(function (response) {
                        _this.movieResult = response.json();
                        console.log('i got the movie!', _this.movieResult);
                    });
                }
            }
        });
    };
    //method for verifying if two words match without whitespace
    SearchBarComponent.prototype.CompareWithWords = function (firstWord, secondWord) {
        //remove all the whitespace of strings
        var firstResult = firstWord.toString().toLowerCase().trim().replace(/ /g, '');
        var secondResult = secondWord.toString().toLowerCase().trim().replace(/ /g, '');
        return firstResult === secondResult ? true : false;
    };
    SearchBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "search-bar",
            template: __webpack_require__(/*! ./search-bar.component.html */ "./src/app/components/search-bar/search-bar.component.html"),
            styles: [__webpack_require__(/*! ./search-bar.component.css */ "./src/app/components/search-bar/search-bar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_movies_service__WEBPACK_IMPORTED_MODULE_0__["MoviesService"]])
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

module.exports = "@import url('https://fonts.googleapis.com/css?family=Bold|Cormorant SC');\n@import url('https://fonts.googleapis.com/css?family=Semi-Bold|Source Sans Pro');\n@import url('https://fonts.googleapis.com/css?family=Source Sans Pro');\n#userProfile{\n    font-family: 'Source Sans Pro', sans-serif;\n}\nh2{\n    font-family: 'Cormorant SC', sans-serif;\n    font-family: 'Bold', sans-serif;\n}\nspan{\n    font-family: 'Source Sans Pro', sans-serif;\n    font-family: 'Semi-Bold', sans-serif;\n}"

/***/ }),

/***/ "./src/app/components/user-profile/user-profile.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/user-profile/user-profile.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table *ngIf=\"userDetails\">\n\n  <h2>User Profile</h2>\n\n  <div id=\"userProfile\">\n    <p><span>First Name: </span>{{userDetails.firstName}}</p>\n    <p><span>Last Name: </span>{{userDetails.lastName}}</p>\n    <p><span>Email: </span>{{userDetails.email}}</p>\n    <p><span>Gender: </span>{{userDetails.gender}}</p>\n    <p><span>Date of birth: </span> {{userDetails.dob}}</p>\n  </div>\n\n\n\n\n  <button (click)=\"onLogout()\">Logout</button>"

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

/***/ "./src/app/services/movies.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/movies.service.ts ***!
  \********************************************/
/*! exports provided: MoviesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesService", function() { return MoviesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MoviesService = /** @class */ (function () {
    function MoviesService(http) {
        this.http = http;
        this.url = 'ec2-18-236-193-77.us-west-2.compute.amazonaws.com:3000/api/movies';
    }
    MoviesService.prototype.getMovies = function () {
        return this.http.get(this.url);
    };
    MoviesService.prototype.getMoviesById = function (_id) {
        return this.http.get(this.url + '/' + _id);
    };
    MoviesService.prototype.createMovies = function (movie) {
        return this.http.post(this.url, movie);
    };
    MoviesService.prototype.updateMovies = function (movie) {
        console.log("in service put", movie);
        return this.http.put(this.url + '/' + movie._id, movie);
    };
    MoviesService.prototype.deleteMovies = function (_id) {
        return this.http.delete(this.url + '/' + _id);
    };
    MoviesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], MoviesService);
    return MoviesService;
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