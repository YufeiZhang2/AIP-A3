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
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _services_coming_soon_movies_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/coming-soon-movies.service */ "./src/app/services/coming-soon-movies.service.ts");
/* harmony import */ var _services_now_showing_movies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/now-showing-movies.service */ "./src/app/services/now-showing-movies.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routing.module */ "./src/app/routing.module.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/search-bar/search-bar.component */ "./src/app/components/search-bar/search-bar.component.ts");
/* harmony import */ var _components_navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/navigation-bar/navigation-bar.component */ "./src/app/components/navigation-bar/navigation-bar.component.ts");
/* harmony import */ var _components_now_showing_block_now_showing_block_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/now-showing-block/now-showing-block.component */ "./src/app/components/now-showing-block/now-showing-block.component.ts");
/* harmony import */ var _components_coming_soon_block_coming_soon_block_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/coming-soon-block/coming-soon-block.component */ "./src/app/components/coming-soon-block/coming-soon-block.component.ts");
/* harmony import */ var _components_now_showing_movie_list_now_showing_movie_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/now-showing-movie-list/now-showing-movie-list.component */ "./src/app/components/now-showing-movie-list/now-showing-movie-list.component.ts");
/* harmony import */ var _components_coming_soon_movie_list_coming_soon_movie_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/coming-soon-movie-list/coming-soon-movie-list.component */ "./src/app/components/coming-soon-movie-list/coming-soon-movie-list.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_genre_genre_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/genre/genre.component */ "./src/app/components/genre/genre.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_award_award_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/award/award.component */ "./src/app/components/award/award.component.ts");
/* harmony import */ var _components_company_information_company_information_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/company-information/company-information.component */ "./src/app/components/company-information/company-information.component.ts");
/* harmony import */ var _components_not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/not-found-page/not-found-page.component */ "./src/app/components/not-found-page/not-found-page.component.ts");
/* harmony import */ var _components_add_movie_form_add_movie_form_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/add-movie-form/add-movie-form.component */ "./src/app/components/add-movie-form/add-movie-form.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_edit_movie_form_edit_movie_form_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/edit-movie-form/edit-movie-form.component */ "./src/app/components/edit-movie-form/edit-movie-form.component.ts");
/* harmony import */ var _components_posts_posts_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/posts/posts.component */ "./src/app/components/posts/posts.component.ts");
/* harmony import */ var _components_movie_movie_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/movie/movie.component */ "./src/app/components/movie/movie.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_8__["SearchBarComponent"],
                _components_navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_9__["NavigationBarComponent"],
                _components_now_showing_block_now_showing_block_component__WEBPACK_IMPORTED_MODULE_10__["NowShowingBlockComponent"],
                _components_coming_soon_block_coming_soon_block_component__WEBPACK_IMPORTED_MODULE_11__["ComingSoonBlockComponent"],
                _components_now_showing_movie_list_now_showing_movie_list_component__WEBPACK_IMPORTED_MODULE_12__["NowShowingMovieListComponent"],
                _components_coming_soon_movie_list_coming_soon_movie_list_component__WEBPACK_IMPORTED_MODULE_13__["ComingSoonMovieListComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_15__["HeaderComponent"],
                _components_genre_genre_component__WEBPACK_IMPORTED_MODULE_16__["GenreComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_17__["HomeComponent"],
                _components_award_award_component__WEBPACK_IMPORTED_MODULE_18__["AwardComponent"],
                _components_company_information_company_information_component__WEBPACK_IMPORTED_MODULE_19__["CompanyInformationComponent"],
                _components_add_movie_form_add_movie_form_component__WEBPACK_IMPORTED_MODULE_21__["AddMovieFormComponent"],
                _components_not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_20__["NotFoundPageComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_22__["LoginComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_23__["RegisterComponent"],
                _components_edit_movie_form_edit_movie_form_component__WEBPACK_IMPORTED_MODULE_24__["EditMovieFormComponent"],
                _components_posts_posts_component__WEBPACK_IMPORTED_MODULE_25__["PostsComponent"],
                _components_movie_movie_component__WEBPACK_IMPORTED_MODULE_26__["MovieComponent"]
            ],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _angular_http__WEBPACK_IMPORTED_MODULE_6__["HttpModule"], _routing_module__WEBPACK_IMPORTED_MODULE_5__["RoutingModule"]],
            providers: [_services_post_service__WEBPACK_IMPORTED_MODULE_0__["PostService"], _services_now_showing_movies_service__WEBPACK_IMPORTED_MODULE_2__["NowShowingMoviesService"], _services_coming_soon_movies_service__WEBPACK_IMPORTED_MODULE_1__["ComingSoonMoviesService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
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

module.exports = "<h2>Add new movie</h2>\n\n<form>\n    <div class=\"form-group\">\n        <label for=\"movieName\">Movie Name</label>\n        <input id=\"movieName\" type=\"text\" class=\"form-control\">\n    </div>\n\n    <div class=\"form-group\">\n        <label>Year</label>\n        <input type=\"text\" class=\"form-control\">\n    </div>\n\n    <div class=\"form-group\">\n        <label>Director(s)</label>\n        <input type=\"text\" class=\"form-control\">\n    </div>\n\n    <div class=\"form-group\">\n        <label>Actors</label>\n        <input type=\"text\" class=\"form-control\">\n    </div>\n\n    <div class=\"form-group\">\n        <label>Summary</label>\n        <textarea class=\"form-control\"></textarea>\n    </div>\n\n    <div class=\"form-group\">\n        <label>Session</label>\n        <input type=\"text\" class=\"form-control\">\n    </div>\n\n    <button class=\"btn btn-primary\">Submit</button>\n</form>"

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

/***/ "./src/app/components/coming-soon-block/coming-soon-block.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/coming-soon-block/coming-soon-block.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".comingSoonBlock {\n  border-style: solid;\n  background-color: whitesmoke;\n}\n\nh2 {\n  text-align: center;\n}\n"

/***/ }),

/***/ "./src/app/components/coming-soon-block/coming-soon-block.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/coming-soon-block/coming-soon-block.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"comingSoonBlock\">\n  <h2>{{title}}</h2>\n  <coming-soon-movie-list></coming-soon-movie-list>\n</div>"

/***/ }),

/***/ "./src/app/components/coming-soon-block/coming-soon-block.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/coming-soon-block/coming-soon-block.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ComingSoonBlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComingSoonBlockComponent", function() { return ComingSoonBlockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ComingSoonBlockComponent = /** @class */ (function () {
    function ComingSoonBlockComponent() {
        this.title = "Coming Soon Movies";
    }
    ComingSoonBlockComponent.prototype.ngOnInit = function () { };
    ComingSoonBlockComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "coming-soon-block",
            template: __webpack_require__(/*! ./coming-soon-block.component.html */ "./src/app/components/coming-soon-block/coming-soon-block.component.html"),
            styles: [__webpack_require__(/*! ./coming-soon-block.component.css */ "./src/app/components/coming-soon-block/coming-soon-block.component.css")]
        })
    ], ComingSoonBlockComponent);
    return ComingSoonBlockComponent;
}());



/***/ }),

/***/ "./src/app/components/coming-soon-movie-list/coming-soon-movie-list.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/components/coming-soon-movie-list/coming-soon-movie-list.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/coming-soon-movie-list/coming-soon-movie-list.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/coming-soon-movie-list/coming-soon-movie-list.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul>\n  <li routerLink=\"../editMovieForm\" *ngFor=\"let movie of movies\">{{movie.directors}}\n    <a routerLink=\"../editMovieForm\">| Edit</a>\n  </li>\n</ul>"

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
            _this.movies = response.json();
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

module.exports = "<br/>\n<br/>\n<search-bar></search-bar>\n<br/>\n<br/>\n<now-showing-block>\n</now-showing-block>\n<br/>\n<coming-soon-block></coming-soon-block>\n<br/>\n<button class=\"btn btn-primary\" routerLink=\"../addMovieForm\">New Movie</button>"

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

module.exports = "<h2>Log in</h2>\n\n<form>\n    <div class=\"form-group\">\n        <label>Username</label>\n        <input type=\"text\" class=\"form-control\">\n    </div>\n\n    <div class=\"form-group\">\n        <label>Password</label>\n        <input type=\"text\" class=\"form-control\">\n    </div>\n\n    <button class=\"btn btn-primary\">Submit</button>\n</form>"

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
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "login",
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
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

module.exports = "<div>\n  <label>{{name}}</label>\n  <br/>\n  <label>{{showtime}}</label>\n  <br/>\n  <label>{{runningTime}}</label>\n  <br/>\n  <label>{{director}}</label>\n  <br/>\n  <label>{{stars}}</label>\n  <br/>\n  <label>{{name}}</label>\n  <br/>\n  <label>{{storyline}}</label>\n  <br/>\n  <label>{{status}}</label>\n</div>"

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

var MovieComponent = /** @class */ (function () {
    function MovieComponent() {
    }
    MovieComponent.prototype.ngOnInit = function () {
    };
    MovieComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-movie',
            template: __webpack_require__(/*! ./movie.component.html */ "./src/app/components/movie/movie.component.html"),
            styles: [__webpack_require__(/*! ./movie.component.css */ "./src/app/components/movie/movie.component.css")]
        }),
        __metadata("design:paramtypes", [])
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

module.exports = "<nav class=\"navigationBar\">\n\n  <a routerLink=\"../home\">{{home}}</a>\n  <a routerLink=\"../genre\">{{genre}}</a>\n  <a routerLink=\"../award\">{{award}}</a>\n  <a routerLink=\"../companyInformation\">{{companyInformation}}</a>\n  <a routerLink=\"../login\">Log in</a>\n  <a routerLink=\"../register\">Register</a>\n</nav>"

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
    function NavigationBarComponent() {
        this.logIn = "Log In";
        this.home = "Home";
        this.signUp = "Sign Up";
        this.genre = "Genre";
        this.award = "Awards";
        this.companyInformation = "About us";
    }
    NavigationBarComponent.prototype.ngOnInit = function () { };
    NavigationBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "navigation-bar",
            template: __webpack_require__(/*! ./navigation-bar.component.html */ "./src/app/components/navigation-bar/navigation-bar.component.html"),
            styles: [__webpack_require__(/*! ./navigation-bar.component.css */ "./src/app/components/navigation-bar/navigation-bar.component.css")]
        }),
        __metadata("design:paramtypes", [])
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

/***/ "./src/app/components/now-showing-block/now-showing-block.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/now-showing-block/now-showing-block.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nowShowingBlock {\n  border-style: solid;\n  background-color: whitesmoke;\n}\n\nh2 {\n  text-align: center;\n}\n"

/***/ }),

/***/ "./src/app/components/now-showing-block/now-showing-block.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/now-showing-block/now-showing-block.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"nowShowingBlock\">\n  <h2>{{title}}</h2>\n  <now-showing-movie-list></now-showing-movie-list>\n</div>"

/***/ }),

/***/ "./src/app/components/now-showing-block/now-showing-block.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/now-showing-block/now-showing-block.component.ts ***!
  \*****************************************************************************/
/*! exports provided: NowShowingBlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NowShowingBlockComponent", function() { return NowShowingBlockComponent; });
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

var NowShowingBlockComponent = /** @class */ (function () {
    function NowShowingBlockComponent() {
        this.title = "Now Showing Movies";
    }
    NowShowingBlockComponent.prototype.ngOnInit = function () { };
    NowShowingBlockComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "now-showing-block",
            template: __webpack_require__(/*! ./now-showing-block.component.html */ "./src/app/components/now-showing-block/now-showing-block.component.html"),
            styles: [__webpack_require__(/*! ./now-showing-block.component.css */ "./src/app/components/now-showing-block/now-showing-block.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NowShowingBlockComponent);
    return NowShowingBlockComponent;
}());



/***/ }),

/***/ "./src/app/components/now-showing-movie-list/now-showing-movie-list.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/components/now-showing-movie-list/now-showing-movie-list.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/now-showing-movie-list/now-showing-movie-list.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/now-showing-movie-list/now-showing-movie-list.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul>\n  <li *ngFor=\"let movie of movies\">{{movie}} <button class=\"btn btn-info btn-sm\" routerLink=\"../editMovieForm\">Edit</button></li>\n</ul>"

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
/* harmony import */ var _services_now_showing_movies_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/now-showing-movies.service */ "./src/app/services/now-showing-movies.service.ts");
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
        this.movies = service.getShowingMovies();
    }
    NowShowingMovieListComponent.prototype.ngOnInit = function () { };
    NowShowingMovieListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "now-showing-movie-list",
            template: __webpack_require__(/*! ./now-showing-movie-list.component.html */ "./src/app/components/now-showing-movie-list/now-showing-movie-list.component.html"),
            styles: [__webpack_require__(/*! ./now-showing-movie-list.component.css */ "./src/app/components/now-showing-movie-list/now-showing-movie-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_now_showing_movies_service__WEBPACK_IMPORTED_MODULE_1__["NowShowingMoviesService"]])
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

module.exports = "<h2>Create an account</h2>\n\n<form>\n    <div class=\"form-group\">\n        <label>Email</label>\n        <input type=\"text\" class=\"form-control\">\n    </div>\n\n    <div class=\"form-group\">\n        <label>Username</label>\n        <input type=\"text\" class=\"form-control\">\n    </div>\n\n    <div class=\"form-group\">\n        <label>Password</label>\n        <input type=\"text\" class=\"form-control\">\n    </div>\n\n    <button class=\"btn btn-primary\">Submit</button>\n</form>"

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
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () { };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "register",
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [])
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

/***/ "./src/app/routing.module.ts":
/*!***********************************!*\
  !*** ./src/app/routing.module.ts ***!
  \***********************************/
/*! exports provided: RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingModule", function() { return RoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_genre_genre_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/genre/genre.component */ "./src/app/components/genre/genre.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_award_award_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/award/award.component */ "./src/app/components/award/award.component.ts");
/* harmony import */ var _components_company_information_company_information_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/company-information/company-information.component */ "./src/app/components/company-information/company-information.component.ts");
/* harmony import */ var _components_not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/not-found-page/not-found-page.component */ "./src/app/components/not-found-page/not-found-page.component.ts");
/* harmony import */ var _components_add_movie_form_add_movie_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/add-movie-form/add-movie-form.component */ "./src/app/components/add-movie-form/add-movie-form.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_edit_movie_form_edit_movie_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/edit-movie-form/edit-movie-form.component */ "./src/app/components/edit-movie-form/edit-movie-form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    {
        path: "",
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    {
        path: "home",
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    {
        path: "genre",
        component: _components_genre_genre_component__WEBPACK_IMPORTED_MODULE_2__["GenreComponent"]
    },
    {
        path: "award",
        component: _components_award_award_component__WEBPACK_IMPORTED_MODULE_4__["AwardComponent"]
    },
    {
        path: "companyInformation",
        component: _components_company_information_company_information_component__WEBPACK_IMPORTED_MODULE_5__["CompanyInformationComponent"]
    },
    {
        path: "addMovieForm",
        component: _components_add_movie_form_add_movie_form_component__WEBPACK_IMPORTED_MODULE_7__["AddMovieFormComponent"]
    },
    {
        path: "login",
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"]
    },
    {
        path: "register",
        component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"]
    },
    {
        path: "editMovieForm",
        component: _components_edit_movie_form_edit_movie_form_component__WEBPACK_IMPORTED_MODULE_10__["EditMovieFormComponent"]
    },
    {
        path: "**",
        component: _components_not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_6__["NotFoundPageComponent"]
    }
];
var RoutingModule = /** @class */ (function () {
    function RoutingModule() {
    }
    RoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], RoutingModule);
    return RoutingModule;
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
    production: false
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
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
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