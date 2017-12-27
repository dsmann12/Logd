webpackJsonp([0],{

/***/ "./src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./src async recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_guard_service__ = __webpack_require__("./src/app/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gamesbyyear_resolve__ = __webpack_require__("./src/app/gamesbyyear.resolve.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gamereviewsbypopularity_resolve__ = __webpack_require__("./src/app/gamereviewsbypopularity.resolve.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gamereviewsbydate_resolve__ = __webpack_require__("./src/app/gamereviewsbydate.resolve.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_backlog_backlog_component__ = __webpack_require__("./src/app/user/backlog/backlog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_user_reviews_user_reviews_component__ = __webpack_require__("./src/app/user/user-reviews/user-reviews.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__listsbypopularity_resolve__ = __webpack_require__("./src/app/listsbypopularity.resolve.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__listsbydate_resolve__ = __webpack_require__("./src/app/listsbydate.resolve.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__lists_page_lists_page_component__ = __webpack_require__("./src/app/lists-page/lists-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__reviewsbydate_resolve__ = __webpack_require__("./src/app/reviewsbydate.resolve.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__reviewsbypopularity_resolve__ = __webpack_require__("./src/app/reviewsbypopularity.resolve.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__reviews_page_reviews_page_component__ = __webpack_require__("./src/app/reviews-page/reviews-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__user_user_game_gallery_user_game_gallery_component__ = __webpack_require__("./src/app/user/user-game-gallery/user-game-gallery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__user_profile_edit_profile_edit_component__ = __webpack_require__("./src/app/user/profile-edit/profile-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__review_detail_review_detail_component__ = __webpack_require__("./src/app/review-detail/review-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__gamesbydecade_resolve__ = __webpack_require__("./src/app/gamesbydecade.resolve.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__user_user_lists_user_lists_component__ = __webpack_require__("./src/app/user/user-lists/user-lists.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__user_profile_profile_component__ = __webpack_require__("./src/app/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__user_user_component__ = __webpack_require__("./src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__users_users_component__ = __webpack_require__("./src/app/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__list_edit_list_edit_component__ = __webpack_require__("./src/app/list-edit/list-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__search_search_component__ = __webpack_require__("./src/app/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__review_edit_review_edit_component__ = __webpack_require__("./src/app/review-edit/review-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__register_register_component__ = __webpack_require__("./src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__list_detail_list_detail_component__ = __webpack_require__("./src/app/list-detail/list-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__game_game_component__ = __webpack_require__("./src/app/game/game.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__game_gallery_game_gallery_component__ = __webpack_require__("./src/app/game-gallery/game-gallery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__log_list_log_list_component__ = __webpack_require__("./src/app/log-list/log-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__lists_lists_component__ = __webpack_require__("./src/app/lists/lists.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__games_games_component__ = __webpack_require__("./src/app/games/games.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__landing_landing_component__ = __webpack_require__("./src/app/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


































var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_31__landing_landing_component__["a" /* LandingComponent */] },
    { path: 'games', component: __WEBPACK_IMPORTED_MODULE_30__games_games_component__["a" /* GamesComponent */] },
    { path: 'games/:id/reviews/new', component: __WEBPACK_IMPORTED_MODULE_22__review_edit_review_edit_component__["a" /* ReviewEditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'games/:id/reviews/:reviewId', component: __WEBPACK_IMPORTED_MODULE_14__review_detail_review_detail_component__["a" /* ReviewDetailComponent */] },
    { path: 'games/:id/reviews/:reviewId/edit', component: __WEBPACK_IMPORTED_MODULE_22__review_edit_review_edit_component__["a" /* ReviewEditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'games/:id/reviews/popular', component: __WEBPACK_IMPORTED_MODULE_11__reviews_page_reviews_page_component__["a" /* ReviewsPageComponent */] },
    { path: 'games/:id', component: __WEBPACK_IMPORTED_MODULE_26__game_game_component__["a" /* GameComponent */] },
    { path: 'games/by/decade/:decade', component: __WEBPACK_IMPORTED_MODULE_27__game_gallery_game_gallery_component__["a" /* GameGalleryComponent */], resolve: { games: __WEBPACK_IMPORTED_MODULE_15__gamesbydecade_resolve__["a" /* GamesByDecadeResolve */] } },
    { path: 'games/by/decade/:decade/:page', component: __WEBPACK_IMPORTED_MODULE_27__game_gallery_game_gallery_component__["a" /* GameGalleryComponent */], resolve: { games: __WEBPACK_IMPORTED_MODULE_15__gamesbydecade_resolve__["a" /* GamesByDecadeResolve */] } },
    { path: 'games/by/decade/:decade/by/year/:year', component: __WEBPACK_IMPORTED_MODULE_27__game_gallery_game_gallery_component__["a" /* GameGalleryComponent */], resolve: { games: __WEBPACK_IMPORTED_MODULE_1__gamesbyyear_resolve__["a" /* GamesByYearResolve */] } },
    { path: 'games/by/decade/:decade/by/year/:year/:page', component: __WEBPACK_IMPORTED_MODULE_27__game_gallery_game_gallery_component__["a" /* GameGalleryComponent */], resolve: { games: __WEBPACK_IMPORTED_MODULE_1__gamesbyyear_resolve__["a" /* GamesByYearResolve */] } },
    { path: 'lists', component: __WEBPACK_IMPORTED_MODULE_29__lists_lists_component__["a" /* ListsComponent */] },
    { path: 'lists/new', component: __WEBPACK_IMPORTED_MODULE_20__list_edit_list_edit_component__["a" /* ListEditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'lists/recent', component: __WEBPACK_IMPORTED_MODULE_8__lists_page_lists_page_component__["a" /* ListsPageComponent */], resolve: { lists: __WEBPACK_IMPORTED_MODULE_7__listsbydate_resolve__["a" /* ListsByDateResolve */] } },
    { path: 'lists/recent/:page', component: __WEBPACK_IMPORTED_MODULE_8__lists_page_lists_page_component__["a" /* ListsPageComponent */], resolve: { lists: __WEBPACK_IMPORTED_MODULE_7__listsbydate_resolve__["a" /* ListsByDateResolve */] } },
    { path: 'lists/popular', component: __WEBPACK_IMPORTED_MODULE_8__lists_page_lists_page_component__["a" /* ListsPageComponent */], resolve: { lists: __WEBPACK_IMPORTED_MODULE_6__listsbypopularity_resolve__["a" /* ListsByPopularityResolve */] } },
    { path: 'lists/popular/:page', component: __WEBPACK_IMPORTED_MODULE_8__lists_page_lists_page_component__["a" /* ListsPageComponent */], resolve: { lists: __WEBPACK_IMPORTED_MODULE_6__listsbypopularity_resolve__["a" /* ListsByPopularityResolve */] } },
    { path: 'lists/:id', component: __WEBPACK_IMPORTED_MODULE_25__list_detail_list_detail_component__["a" /* ListDetailComponent */] },
    { path: 'lists/:id/edit', component: __WEBPACK_IMPORTED_MODULE_20__list_edit_list_edit_component__["a" /* ListEditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'reviews/popular', component: __WEBPACK_IMPORTED_MODULE_11__reviews_page_reviews_page_component__["a" /* ReviewsPageComponent */], resolve: { reviews: __WEBPACK_IMPORTED_MODULE_10__reviewsbypopularity_resolve__["a" /* ReviewsByPopularityResolve */] } },
    { path: 'reviews/popular/:page', component: __WEBPACK_IMPORTED_MODULE_11__reviews_page_reviews_page_component__["a" /* ReviewsPageComponent */], resolve: { reviews: __WEBPACK_IMPORTED_MODULE_10__reviewsbypopularity_resolve__["a" /* ReviewsByPopularityResolve */] } },
    { path: 'reviews/recent', component: __WEBPACK_IMPORTED_MODULE_11__reviews_page_reviews_page_component__["a" /* ReviewsPageComponent */], resolve: { reviews: __WEBPACK_IMPORTED_MODULE_9__reviewsbydate_resolve__["a" /* ReviewsByDateResolve */] } },
    { path: 'reviews/recent/:page', component: __WEBPACK_IMPORTED_MODULE_11__reviews_page_reviews_page_component__["a" /* ReviewsPageComponent */], resolve: { reviews: __WEBPACK_IMPORTED_MODULE_9__reviewsbydate_resolve__["a" /* ReviewsByDateResolve */] } },
    { path: 'reviews/game/:id/recent', component: __WEBPACK_IMPORTED_MODULE_11__reviews_page_reviews_page_component__["a" /* ReviewsPageComponent */], resolve: { reviews: __WEBPACK_IMPORTED_MODULE_3__gamereviewsbydate_resolve__["a" /* GameReviewsByDateResolve */] } },
    { path: 'reviews/game/:id/recent/:page', component: __WEBPACK_IMPORTED_MODULE_11__reviews_page_reviews_page_component__["a" /* ReviewsPageComponent */], resolve: { reviews: __WEBPACK_IMPORTED_MODULE_3__gamereviewsbydate_resolve__["a" /* GameReviewsByDateResolve */] } },
    { path: 'reviews/game/:id/popular', component: __WEBPACK_IMPORTED_MODULE_11__reviews_page_reviews_page_component__["a" /* ReviewsPageComponent */], resolve: { reviews: __WEBPACK_IMPORTED_MODULE_2__gamereviewsbypopularity_resolve__["a" /* GameReviewsByPopularityResolve */] } },
    { path: 'reviews/game/:id/popular/:page', component: __WEBPACK_IMPORTED_MODULE_11__reviews_page_reviews_page_component__["a" /* ReviewsPageComponent */], resolve: { reviews: __WEBPACK_IMPORTED_MODULE_2__gamereviewsbypopularity_resolve__["a" /* GameReviewsByPopularityResolve */] } },
    { path: 'log', component: __WEBPACK_IMPORTED_MODULE_28__log_list_log_list_component__["a" /* LogListComponent */] },
    { path: 'game-gallery', component: __WEBPACK_IMPORTED_MODULE_27__game_gallery_game_gallery_component__["a" /* GameGalleryComponent */] },
    { path: 'game', component: __WEBPACK_IMPORTED_MODULE_26__game_game_component__["a" /* GameComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_24__register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_23__login_login_component__["a" /* LoginComponent */] },
    { path: 'search', component: __WEBPACK_IMPORTED_MODULE_21__search_search_component__["a" /* SearchComponent */] },
    { path: 'gamers', component: __WEBPACK_IMPORTED_MODULE_19__users_users_component__["a" /* UsersComponent */] },
    { path: ':username', component: __WEBPACK_IMPORTED_MODULE_18__user_user_component__["a" /* UserComponent */], children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_17__user_profile_profile_component__["a" /* ProfileComponent */] },
            { path: 'edit', component: __WEBPACK_IMPORTED_MODULE_13__user_profile_edit_profile_edit_component__["a" /* ProfileEditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__auth_guard_service__["a" /* AuthGuard */]] },
            { path: 'games', component: __WEBPACK_IMPORTED_MODULE_12__user_user_game_gallery_user_game_gallery_component__["a" /* UserGameGalleryComponent */] },
            { path: 'log', component: __WEBPACK_IMPORTED_MODULE_28__log_list_log_list_component__["a" /* LogListComponent */] },
            { path: 'lists', component: __WEBPACK_IMPORTED_MODULE_16__user_user_lists_user_lists_component__["a" /* UserListsComponent */] },
            { path: 'lists/:page', component: __WEBPACK_IMPORTED_MODULE_16__user_user_lists_user_lists_component__["a" /* UserListsComponent */] },
            { path: 'reviews', component: __WEBPACK_IMPORTED_MODULE_5__user_user_reviews_user_reviews_component__["a" /* UserReviewsComponent */] },
            { path: 'reviews/:page', component: __WEBPACK_IMPORTED_MODULE_5__user_user_reviews_user_reviews_component__["a" /* UserReviewsComponent */] },
            { path: 'backlog', component: __WEBPACK_IMPORTED_MODULE_4__user_backlog_backlog_component__["a" /* BacklogComponent */] }
        ] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_32__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_33__angular_router__["a" /* RouterModule */].forRoot(appRoutes)],
        exports: [__WEBPACK_IMPORTED_MODULE_33__angular_router__["a" /* RouterModule */]],
        providers: [__WEBPACK_IMPORTED_MODULE_0__auth_guard_service__["a" /* AuthGuard */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container\">\n  <!--<app-landing></app-landing>-->\n  <router-outlet></router-outlet>\n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__gamesbyyear_resolve__ = __webpack_require__("./src/app/gamesbyyear.resolve.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gamereviewsbypopularity_resolve__ = __webpack_require__("./src/app/gamereviewsbypopularity.resolve.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gamereviewsbydate_resolve__ = __webpack_require__("./src/app/gamereviewsbydate.resolve.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__listsbydate_resolve__ = __webpack_require__("./src/app/listsbydate.resolve.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__listsbypopularity_resolve__ = __webpack_require__("./src/app/listsbypopularity.resolve.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reviewsbypopularity_resolve__ = __webpack_require__("./src/app/reviewsbypopularity.resolve.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__reviewsbydate_resolve__ = __webpack_require__("./src/app/reviewsbydate.resolve.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__gamesbyuser_resolve__ = __webpack_require__("./src/app/gamesbyuser.resolve.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__gamesbydecade_resolve__ = __webpack_require__("./src/app/gamesbydecade.resolve.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__validate_service__ = __webpack_require__("./src/app/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ng2_dnd__ = __webpack_require__("./node_modules/ng2-dnd/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_mydatepicker__ = __webpack_require__("./node_modules/mydatepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ngx_mydatepicker__ = __webpack_require__("./node_modules/ngx-mydatepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__header_header_component__ = __webpack_require__("./src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__popular_games_popular_games_component__ = __webpack_require__("./src/app/popular-games/popular-games.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__landing_landing_component__ = __webpack_require__("./src/app/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__just_reviewed_just_reviewed_component__ = __webpack_require__("./src/app/just-reviewed/just-reviewed.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__review_review_component__ = __webpack_require__("./src/app/review/review.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__list_list_component__ = __webpack_require__("./src/app/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__games_games_component__ = __webpack_require__("./src/app/games/games.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__lists_lists_component__ = __webpack_require__("./src/app/lists/lists.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__games_games_nav_games_nav_component__ = __webpack_require__("./src/app/games/games-nav/games-nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__staff_picks_staff_picks_component__ = __webpack_require__("./src/app/staff-picks/staff-picks.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__popular_gamers_popular_gamers_component__ = __webpack_require__("./src/app/popular-gamers/popular-gamers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__large_list_large_list_component__ = __webpack_require__("./src/app/large-list/large-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__long_list_long_list_component__ = __webpack_require__("./src/app/long-list/long-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__user_user_component__ = __webpack_require__("./src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__user_user_nav_user_nav_component__ = __webpack_require__("./src/app/user/user-nav/user-nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__user_user_info_user_info_component__ = __webpack_require__("./src/app/user/user-info/user-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__user_user_list_user_list_item_user_list_item_component__ = __webpack_require__("./src/app/user/user-list/user-list-item/user-list-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__user_user_list_user_list_component__ = __webpack_require__("./src/app/user/user-list/user-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__game_game_component__ = __webpack_require__("./src/app/game/game.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__log_list_log_list_component__ = __webpack_require__("./src/app/log-list/log-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__game_gallery_game_gallery_component__ = __webpack_require__("./src/app/game-gallery/game-gallery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__review_list_review_list_component__ = __webpack_require__("./src/app/review-list/review-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__lists_list_lists_list_component__ = __webpack_require__("./src/app/lists-list/lists-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__long_lists_list_long_lists_list_component__ = __webpack_require__("./src/app/long-lists-list/long-lists-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__lists_feature_lists_feature_component__ = __webpack_require__("./src/app/lists-feature/lists-feature.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__game_review_list_game_review_list_component__ = __webpack_require__("./src/app/game-review-list/game-review-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__game_dashboard_game_dashboard_component__ = __webpack_require__("./src/app/game-dashboard/game-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__game_review_game_review_component__ = __webpack_require__("./src/app/game-review/game-review.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__dropdown_directive__ = __webpack_require__("./src/app/dropdown.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__list_detail_list_detail_component__ = __webpack_require__("./src/app/list-detail/list-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__star_rating_star_rating_component__ = __webpack_require__("./src/app/star-rating/star-rating.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__register_register_component__ = __webpack_require__("./src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__review_edit_review_edit_component__ = __webpack_require__("./src/app/review-edit/review-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__list_edit_list_edit_component__ = __webpack_require__("./src/app/list-edit/list-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__search_search_component__ = __webpack_require__("./src/app/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__users_users_component__ = __webpack_require__("./src/app/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__user_profile_profile_component__ = __webpack_require__("./src/app/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__user_user_lists_user_lists_component__ = __webpack_require__("./src/app/user/user-lists/user-lists.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__datepicker_datepicker_component__ = __webpack_require__("./src/app/datepicker/datepicker.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__review_detail_review_detail_component__ = __webpack_require__("./src/app/review-detail/review-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__user_profile_edit_profile_edit_component__ = __webpack_require__("./src/app/user/profile-edit/profile-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__user_avatar_avatar_component__ = __webpack_require__("./src/app/user/avatar/avatar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__log_list_log_list_item_log_list_item_component__ = __webpack_require__("./src/app/log-list/log-list-item/log-list-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__user_user_feature_user_feature_component__ = __webpack_require__("./src/app/user/user-feature/user-feature.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__user_user_feature_user_feature_item_user_feature_item_component__ = __webpack_require__("./src/app/user/user-feature/user-feature-item/user-feature-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__user_user_list_mini_user_list_mini_component__ = __webpack_require__("./src/app/user/user-list-mini/user-list-mini.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__user_user_list_mini_user_list_mini_item_user_list_mini_item_component__ = __webpack_require__("./src/app/user/user-list-mini/user-list-mini-item/user-list-mini-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__user_user_game_gallery_user_game_gallery_component__ = __webpack_require__("./src/app/user/user-game-gallery/user-game-gallery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__user_backlog_backlog_component__ = __webpack_require__("./src/app/user/backlog/backlog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__reviews_page_reviews_page_component__ = __webpack_require__("./src/app/reviews-page/reviews-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73__lists_page_lists_page_component__ = __webpack_require__("./src/app/lists-page/lists-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_74__ratings_graph_ratings_graph_component__ = __webpack_require__("./src/app/ratings-graph/ratings-graph.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_75__user_user_reviews_user_reviews_component__ = __webpack_require__("./src/app/user/user-reviews/user-reviews.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_76__game_gallery_year_nav_year_nav_component__ = __webpack_require__("./src/app/game-gallery/year-nav/year-nav.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













































































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_15__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_20__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_21__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_22__popular_games_popular_games_component__["a" /* PopularGamesComponent */],
            __WEBPACK_IMPORTED_MODULE_23__landing_landing_component__["a" /* LandingComponent */],
            __WEBPACK_IMPORTED_MODULE_24__just_reviewed_just_reviewed_component__["a" /* JustReviewedComponent */],
            __WEBPACK_IMPORTED_MODULE_25__review_review_component__["a" /* ReviewComponent */],
            __WEBPACK_IMPORTED_MODULE_26__list_list_component__["a" /* ListComponent */],
            __WEBPACK_IMPORTED_MODULE_27__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_28__games_games_component__["a" /* GamesComponent */],
            __WEBPACK_IMPORTED_MODULE_29__lists_lists_component__["a" /* ListsComponent */],
            __WEBPACK_IMPORTED_MODULE_30__games_games_nav_games_nav_component__["a" /* GamesNavComponent */],
            __WEBPACK_IMPORTED_MODULE_31__staff_picks_staff_picks_component__["a" /* StaffPicksComponent */],
            __WEBPACK_IMPORTED_MODULE_32__popular_gamers_popular_gamers_component__["a" /* PopularGamersComponent */],
            __WEBPACK_IMPORTED_MODULE_33__large_list_large_list_component__["a" /* LargeListComponent */],
            __WEBPACK_IMPORTED_MODULE_34__long_list_long_list_component__["a" /* LongListComponent */],
            __WEBPACK_IMPORTED_MODULE_35__user_user_component__["a" /* UserComponent */],
            __WEBPACK_IMPORTED_MODULE_36__user_user_nav_user_nav_component__["a" /* UserNavComponent */],
            __WEBPACK_IMPORTED_MODULE_37__user_user_info_user_info_component__["a" /* UserInfoComponent */],
            __WEBPACK_IMPORTED_MODULE_38__user_user_list_user_list_item_user_list_item_component__["a" /* UserListItemComponent */],
            __WEBPACK_IMPORTED_MODULE_39__user_user_list_user_list_component__["a" /* UserListComponent */],
            __WEBPACK_IMPORTED_MODULE_40__game_game_component__["a" /* GameComponent */],
            __WEBPACK_IMPORTED_MODULE_41__log_list_log_list_component__["a" /* LogListComponent */],
            __WEBPACK_IMPORTED_MODULE_42__game_gallery_game_gallery_component__["a" /* GameGalleryComponent */],
            __WEBPACK_IMPORTED_MODULE_43__review_list_review_list_component__["a" /* ReviewListComponent */],
            __WEBPACK_IMPORTED_MODULE_44__lists_list_lists_list_component__["a" /* ListsListComponent */],
            __WEBPACK_IMPORTED_MODULE_45__long_lists_list_long_lists_list_component__["a" /* LongListsListComponent */],
            __WEBPACK_IMPORTED_MODULE_46__lists_feature_lists_feature_component__["a" /* ListsFeatureComponent */],
            __WEBPACK_IMPORTED_MODULE_47__game_review_list_game_review_list_component__["a" /* GameReviewListComponent */],
            __WEBPACK_IMPORTED_MODULE_48__game_dashboard_game_dashboard_component__["a" /* GameDashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_49__game_review_game_review_component__["a" /* GameReviewComponent */],
            __WEBPACK_IMPORTED_MODULE_50__dropdown_directive__["a" /* DropdownDirective */],
            __WEBPACK_IMPORTED_MODULE_51__list_detail_list_detail_component__["a" /* ListDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_52__star_rating_star_rating_component__["a" /* StarRatingComponent */],
            __WEBPACK_IMPORTED_MODULE_53__register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_54__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_55__review_edit_review_edit_component__["a" /* ReviewEditComponent */],
            __WEBPACK_IMPORTED_MODULE_56__list_edit_list_edit_component__["a" /* ListEditComponent */],
            __WEBPACK_IMPORTED_MODULE_57__search_search_component__["a" /* SearchComponent */],
            __WEBPACK_IMPORTED_MODULE_58__users_users_component__["a" /* UsersComponent */],
            __WEBPACK_IMPORTED_MODULE_59__user_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_60__user_user_lists_user_lists_component__["a" /* UserListsComponent */],
            __WEBPACK_IMPORTED_MODULE_61__datepicker_datepicker_component__["a" /* DatepickerComponent */],
            __WEBPACK_IMPORTED_MODULE_62__review_detail_review_detail_component__["a" /* ReviewDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_63__user_profile_edit_profile_edit_component__["a" /* ProfileEditComponent */],
            __WEBPACK_IMPORTED_MODULE_64__user_avatar_avatar_component__["a" /* AvatarComponent */],
            __WEBPACK_IMPORTED_MODULE_65__log_list_log_list_item_log_list_item_component__["a" /* LogListItemComponent */],
            __WEBPACK_IMPORTED_MODULE_66__user_user_feature_user_feature_component__["a" /* UserFeatureComponent */],
            __WEBPACK_IMPORTED_MODULE_67__user_user_feature_user_feature_item_user_feature_item_component__["a" /* UserFeatureItemComponent */],
            __WEBPACK_IMPORTED_MODULE_68__user_user_list_mini_user_list_mini_component__["a" /* UserListMiniComponent */],
            __WEBPACK_IMPORTED_MODULE_69__user_user_list_mini_user_list_mini_item_user_list_mini_item_component__["a" /* UserListMiniItemComponent */],
            __WEBPACK_IMPORTED_MODULE_70__user_user_game_gallery_user_game_gallery_component__["a" /* UserGameGalleryComponent */],
            __WEBPACK_IMPORTED_MODULE_71__user_backlog_backlog_component__["a" /* BacklogComponent */],
            __WEBPACK_IMPORTED_MODULE_72__reviews_page_reviews_page_component__["a" /* ReviewsPageComponent */],
            __WEBPACK_IMPORTED_MODULE_73__lists_page_lists_page_component__["a" /* ListsPageComponent */],
            __WEBPACK_IMPORTED_MODULE_74__ratings_graph_ratings_graph_component__["a" /* RatingsGraphComponent */],
            __WEBPACK_IMPORTED_MODULE_75__user_user_reviews_user_reviews_component__["a" /* UserReviewsComponent */],
            __WEBPACK_IMPORTED_MODULE_76__game_gallery_year_nav_year_nav_component__["a" /* YearNavComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_13__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_12__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_16__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_18_mydatepicker__["MyDatePickerModule"],
            __WEBPACK_IMPORTED_MODULE_19_ngx_mydatepicker__["NgxMyDatePickerModule"].forRoot(),
            __WEBPACK_IMPORTED_MODULE_17_ng2_dnd__["a" /* DndModule */].forRoot()
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_11__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_10__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_9__validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_8__gamesbydecade_resolve__["a" /* GamesByDecadeResolve */], __WEBPACK_IMPORTED_MODULE_7__gamesbyuser_resolve__["a" /* GamesByUserResolve */],
            __WEBPACK_IMPORTED_MODULE_6__reviewsbydate_resolve__["a" /* ReviewsByDateResolve */], __WEBPACK_IMPORTED_MODULE_5__reviewsbypopularity_resolve__["a" /* ReviewsByPopularityResolve */],
            __WEBPACK_IMPORTED_MODULE_4__listsbypopularity_resolve__["a" /* ListsByPopularityResolve */], __WEBPACK_IMPORTED_MODULE_3__listsbydate_resolve__["a" /* ListsByDateResolve */],
            __WEBPACK_IMPORTED_MODULE_2__gamereviewsbydate_resolve__["a" /* GameReviewsByDateResolve */], __WEBPACK_IMPORTED_MODULE_1__gamereviewsbypopularity_resolve__["a" /* GameReviewsByPopularityResolve */],
            __WEBPACK_IMPORTED_MODULE_0__gamesbyyear_resolve__["a" /* GamesByYearResolve */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_20__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/']);
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ "./src/app/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        // url = 'http://localhost:8080/api'
        this.url = '/api';
        if (this.loggedIn() && !this.user) {
            this.loadUser();
            this.loadToken();
            console.log('AuthService: ', this.user);
        }
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.url + '/users/register', user, { headers: headers })
            .map(function (response) { return response.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.url + '/users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loadUser = function () {
        var user = JSON.parse(localStorage.getItem('user'));
        this.user = user;
    };
    AuthService.prototype.loggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "./src/app/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataService = (function () {
    function DataService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.lists = [];
        // url = 'http://localhost:8080/api'
        this.url = '/api';
    }
    DataService.prototype.getUserByUsername = function (username) {
        return this.http.get(this.url + '/users/username/' + username)
            .map(function (response) { return response.json(); });
    };
    // get games
    DataService.prototype.getGames = function () {
        return this.http.get(this.url + '/games');
    };
    // get game by id
    DataService.prototype.getGameById = function (id) {
        return this.http.get(this.url + '/games/' + id);
    };
    // get game by igdb id
    DataService.prototype.getGameByIGDBId = function (id) {
        return this.http.get(this.url + '/games/igdb/' + id);
    };
    //get games by decade
    DataService.prototype.getGamesByDecade = function (decade, page) {
        return this.http.get(this.url + '/games/decade/' + decade + '/' + page)
            .map(function (response) { return response.json(); });
    };
    // get games by year
    DataService.prototype.getGamesByYear = function (year, page) {
        return this.http.get(this.url + '/games/year/' + year + '/' + page)
            .map(function (response) { return response.json(); });
    };
    DataService.prototype.getJustReviewed = function () {
        return this.http.get(this.url + '/games/just-reviewed')
            .map(function (response) { return response.json(); });
    };
    DataService.prototype.getPopularGames = function () {
        return this.http.get(this.url + '/games/popular')
            .map(function (response) { return response.json(); });
    };
    // get staff picks
    DataService.prototype.getStaffPicks = function () {
        return this.http.get(this.url + '/games/staff');
    };
    // get lists
    DataService.prototype.getLists = function () {
        return this.http.get(this.url + '/lists');
    };
    DataService.prototype.getListById = function (id) {
        return this.http.get(this.url + '/lists/' + id);
    };
    // get lists including specific game
    DataService.prototype.getListsIncludingGame = function (id) {
        return this.http.get(this.url + '/lists/game/' + id);
    };
    DataService.prototype.postList = function (body) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        headers.append('Authorization', this.authService.authToken);
        return this.http.post(this.url + '/lists', body, { headers: headers })
            .map(function (response) { return response.json(); });
    };
    DataService.prototype.updateList = function (listId, body) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        headers.append('Authorization', this.authService.authToken);
        return this.http.put(this.url + '/lists/' + listId, body, { headers: headers })
            .map(function (response) { return response.json(); });
    };
    DataService.prototype.deleteList = function (listId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        headers.append('Authorization', this.authService.authToken);
        return this.http.delete(this.url + '/lists/' + listId, { headers: headers })
            .map(function (response) { return response.json(); });
    };
    // get reviews
    DataService.prototype.getReviews = function () {
        return this.http.get(this.url + '/reviews')
            .map(function (response) { return response.json(); });
    };
    DataService.prototype.postReview = function (body) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        headers.append('Authorization', this.authService.authToken);
        return this.http.post(this.url + '/reviews/', body, { headers: headers })
            .map(function (response) { return response.json(); });
    };
    DataService.prototype.updateReview = function (reviewId, body) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        headers.append('Authorization', this.authService.authToken);
        return this.http.put(this.url + '/reviews/' + reviewId, body, { headers: headers })
            .map(function (response) { return response.json(); });
    };
    DataService.prototype.deleteReview = function (reviewId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        headers.append('Authorization', this.authService.authToken);
        return this.http.delete(this.url + '/reviews/' + reviewId, { headers: headers })
            .map(function (response) { return response.json(); });
    };
    // get recent reviews
    DataService.prototype.getRecentReviews = function (page) {
        return this.http.get(this.url + '/reviews/recent/' + page)
            .map(function (response) { return response.json(); });
    };
    DataService.prototype.getPopularReviews = function (page) {
        return this.http.get(this.url + '/reviews/popular/' + page)
            .map(function (response) { return response.json(); });
    };
    DataService.prototype.addGameLike = function (gameId, userId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        headers.append('Authorization', this.authService.authToken);
        var body = {
            gameId: gameId,
            date: Date.now(),
        };
        return this.http.post(this.url + '/likes/game', body, { headers: headers })
            .map(function (response) { return response.json(); });
    };
    DataService.prototype.getGameLike = function (gameId, userId) {
        return this.http.get(this.url + '/likes/game/' + gameId + '/user/' + userId)
            .map(function (response) { return response.json(); });
    };
    DataService.prototype.deleteLike = function (likeId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        headers.append('Authorization', this.authService.authToken);
        return this.http.delete(this.url + '/likes/' + likeId, { headers: headers })
            .map(function (response) { return response.json(); });
    };
    DataService.prototype.addListLike = function (listId, userId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        headers.append('Authorization', this.authService.authToken);
        var body = {
            listId: listId,
            date: Date.now(),
        };
        return this.http.post(this.url + '/likes/list', body, { headers: headers })
            .map(function (response) { return response.json(); });
    };
    DataService.prototype.getListLike = function (listId, userId) {
        return this.http.get(this.url + '/likes/list/' + listId + '/user/' + userId)
            .map(function (response) { return response.json(); });
    };
    DataService.prototype.addReviewLike = function (reviewId, userId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        headers.append('Authorization', this.authService.authToken);
        var body = {
            reviewId: reviewId,
            date: Date.now()
        };
        return this.http.post(this.url + '/likes/review', body, { headers: headers })
            .map(function (response) { return response.json(); });
    };
    DataService.prototype.getReviewLike = function (reviewId, userId) {
        return this.http.get(this.url + '/likes/review/' + reviewId + '/user/' + userId)
            .map(function (response) { return response.json(); });
    };
    DataService.prototype.getBackloggedGame = function (userId, gameId) {
        return this.http.get(this.url + '/users/' + userId + '/backlog/' + gameId)
            .map(function (response) { return response.json(); });
    };
    // need header
    DataService.prototype.addBackloggedGame = function (userId, game) {
        var body = {
            game: game
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        headers.append('Authorization', this.authService.authToken);
        return this.http.post(this.url + '/users/' + userId + '/backlog', body, { headers: headers })
            .map(function (response) { return response.json(); });
    };
    DataService.prototype.deleteBackloggedGame = function (userId, gameId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        headers.append('Authorization', this.authService.authToken);
        return this.http.delete(this.url + '/users/' + userId + '/backlog/' + gameId, { headers: headers })
            .map(function (response) { return response.json(); });
    };
    DataService.prototype.getRating = function (gameId, userId) {
        return this.http.get(this.url + '/ratings/game/' + gameId + '/user/' + userId)
            .map(function (response) { return response.json(); });
    };
    DataService.prototype.postRating = function (userId, gameId, rating) {
        var body = {
            gameId: gameId,
            rating: rating,
            date: Date.now()
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        headers.append('Authorization', this.authService.authToken);
        return this.http.post(this.url + '/ratings', body, { headers: headers })
            .map(function (response) { return response.json(); });
    };
    DataService.prototype.deleteRating = function (ratingId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        headers.append('Authorization', this.authService.authToken);
        return this.http.delete(this.url + '/ratings/' + ratingId, { headers: headers })
            .map(function (response) { return response.json(); });
    };
    DataService.prototype.postPlay = function (gameId, userId) {
        var body = {
            gameId: gameId
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        headers.append('Authorization', this.authService.authToken);
        return this.http.post(this.url + '/plays', body, { headers: headers })
            .map(function (response) { return response.json(); });
    };
    DataService.prototype.getPlay = function (gameId, userId) {
        return this.http.get(this.url + '/plays/game/' + gameId + '/user/' + userId)
            .map(function (response) { return response.json(); });
    };
    DataService.prototype.deletePlay = function (playId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        headers.append('Authorization', this.authService.authToken);
        return this.http.delete(this.url + '/plays/' + playId, { headers: headers })
            .map(function (response) { return response.json(); });
    };
    DataService.prototype.getReview = function (reviewId) {
        return this.http.get(this.url + '/reviews/' + reviewId)
            .map(function (response) { return response.json(); });
    };
    DataService.prototype.getUsers = function () {
        return this.http.get(this.url + '/users/')
            .map(function (response) { return response.json(); });
    };
    DataService.prototype.getRecentLists = function (page) {
        return this.http.get(this.url + '/lists/recent/' + page)
            .map(function (response) { return response.json(); });
    };
    DataService.prototype.getPopularLists = function (page) {
        return this.http.get(this.url + '/lists/popular/' + page)
            .map(function (response) { return response.json(); });
    };
    DataService.prototype.getRecentGameReviews = function (gameId, page) {
        return this.http.get(this.url + '/reviews/game/' + gameId + '/recent/' + page)
            .map(function (response) { return response.json(); });
    };
    DataService.prototype.getPopularGameReviews = function (gameId, page) {
        return this.http.get(this.url + '/reviews/game/' + gameId + '/popular/' + page)
            .map(function (response) { return response.json(); });
    };
    return DataService;
}());
DataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], DataService);

var _a, _b;
//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ "./src/app/datepicker/datepicker.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/datepicker/datepicker.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- input box styling is bootstrap 3.3.7 -->\n<form>\n    <div class=\"input-group\">\n        <input class=\"form-control\" style=\"float:none\" placeholder=\"Select a date\" ngx-mydatepicker name=\"mydate\"\n               [(ngModel)]=\"date\" [options]=\"myOptions\" #dp=\"ngx-mydatepicker\" (dateChanged)=\"onDateChanged($event)\"/>\n\n        <span class=\"input-group-btn\">\n            <button type=\"button\" class=\"btn btn-default\" (click)=\"dp.clearDate()\">\n                <i class=\"glyphicon glyphicon-remove\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-default\" (click)=\"dp.toggleCalendar()\">\n                <i class=\"glyphicon glyphicon-calendar\"></i>\n            </button>\n        </span>\n    </div>\n</form>"

/***/ }),

/***/ "./src/app/datepicker/datepicker.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatepickerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DatepickerComponent = (function () {
    function DatepickerComponent() {
        this.datePicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.myOptions = {};
    }
    DatepickerComponent.prototype.ngOnInit = function () {
        if (this.date) {
            this.date = {
                date: {
                    year: this.date.getFullYear(),
                    month: this.date.getMonth() + 1,
                    day: this.date.getDate()
                }
            };
        }
    };
    DatepickerComponent.prototype.onDateChanged = function (event) {
        //date selected
        this.datePicked.emit(event.jsdate);
    };
    return DatepickerComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], DatepickerComponent.prototype, "datePicked", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], DatepickerComponent.prototype, "date", void 0);
DatepickerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-datepicker',
        template: __webpack_require__("./src/app/datepicker/datepicker.component.html"),
        styles: [__webpack_require__("./src/app/datepicker/datepicker.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DatepickerComponent);

//# sourceMappingURL=datepicker.component.js.map

/***/ }),

/***/ "./src/app/dropdown.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropdownDirective; });
// import { Directive } from '@angular/core';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// @Directive({
//   selector: '[appDropdown]'
// })
// export class DropdownDirective {
//   constructor() { }
// }

var DropdownDirective = (function () {
    function DropdownDirective() {
        this.isOpen = false;
    }
    DropdownDirective.prototype.toggleOpen = function () {
        this.isOpen = !this.isOpen;
    };
    return DropdownDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.open'),
    __metadata("design:type", Boolean)
], DropdownDirective.prototype, "isOpen", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DropdownDirective.prototype, "toggleOpen", null);
DropdownDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[appDropdown]'
    })
], DropdownDirective);

//# sourceMappingURL=dropdown.directive.js.map

/***/ }),

/***/ "./src/app/game-dashboard/game-dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".list-group-item {\n\toverflow: hidden;\n\tcolor: black;\n\ttext-align: center;\n}\n\n.game-page-selector-button {\n\twidth: 33%;\n\tfloat: left;\n}\n\ni {\n\tmargin: auto 20%;\n\tcolor: grey;\n}\n\n.game-page-selector-button p {\n\ttext-align: center;\n}\n\n.toggled {\n\tcolor: black;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/game-dashboard/game-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <ul class=\"list-group\" *ngIf=\"authService.loggedIn()\">\n    <li class=\"list-group-item button-selector\">\n      <div class=\"game-page-selector-button\">\n        <button type=\"button\" style=\"padding: 0; border: none; background: none\" (click)=\"togglePlay()\">\n          <i class=\"fa fa-gamepad fa-3x\" [ngClass]=\"{ toggled: play }\"></i>\n          <p>{{ play ? 'Played' : 'Play'}}</p>\n        </button>\n      </div>\n      <div class=\"game-page-selector-button\">\n        <button type=\"button\" style=\"padding: 0; border: none; background: none\" (click)=\"toggleLike()\">\n          <i class=\"fa fa-heart fa-3x\" [ngClass]=\"{ toggled: like }\"></i>\n          <p>{{ like ? 'Liked' : 'Like'}}</p>\n        </button>\n      </div>\n      <div class=\"game-page-selector-button\">\n        <button type=\"button\" style=\"padding: 0; border: none; background: none\" (click)=\"toggleBacklog()\">\n          <i class=\"fa fa-clock-o fa-3x\" [ngClass]=\"{ toggled: backlogged }\"></i>\n          <p>{{ backlogged ? 'Remove' : 'Backlog'}}</p>\n        </button>\n      </div>\n    </li>\n    <li class=\"list-group-item\">\n      <p style=\"text-align: center\">Rated</p>\n      <app-star-rating style=\"margin: 0 auto; display: inline-flex; position: relative; right: 3px;\" [disabled]=\"false\" [game]=\"game\" [user]=\"user\" [rating]=\"rating.toString()\" [ratingObj]=\"ratingObj\" (rated)=\"onRated($event)\"></app-star-rating>\n    </li>\n    <li class=\"list-group-item\" *ngIf=\"review?.user._id === authService.user._id\"><a [routerLink]=\"['/games', game._id, 'reviews', review._id, 'edit']\">Edit or Delete Review</a></li>\n    <li class=\"list-group-item\"><a [routerLink]=\"['/games', game._id, 'reviews', 'new']\">Add Review or Log</a></li>\n    <li class=\"list-group-item\">Add To List</li>\n  </ul>\n\n  <ul class=\"list-group\" *ngIf=\"!authService.loggedIn()\">\n    <li class=\"list-group-item\">You Must Be Logged In To Rate A Game</li>\n  </ul>\n</div>"

/***/ }),

/***/ "./src/app/game-dashboard/game-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameDashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GameDashboardComponent = (function () {
    function GameDashboardComponent(authService, http, dataService) {
        this.authService = authService;
        this.http = http;
        this.dataService = dataService;
        // the value of these properties when loaded
        // when toggled, they 
        this.backlogged = false;
        this.rating = 0;
    }
    GameDashboardComponent.prototype.ngOnInit = function () {
        // when initialized
        // if user logged in
        // check if user has played, liked, rated or added to watchlist this game
        var _this = this;
        if (this.authService.loggedIn()) {
            this.user = this.authService.user;
            this.dataService.getPlay(this.game._id, this.user._id)
                .subscribe(function (response) {
                if (response.success) {
                    _this.play = response.play;
                }
                else {
                    console.log(response.msg);
                }
            });
            this.dataService.getGameLike(this.game._id, this.user._id)
                .subscribe(function (response) {
                if (response.success) {
                    _this.like = response.like;
                }
                else {
                    console.log(response.msg);
                }
            });
            //check if user has added game to backlog
            this.dataService.getBackloggedGame(this.user._id, this.game._id)
                .subscribe(function (response) {
                if (response.success) {
                    _this.backlogged = true;
                }
                else {
                    console.log(response.msg);
                }
            });
            // get rating for game if it exists
            this.dataService.getRating(this.game._id, this.user._id)
                .subscribe(function (response) {
                if (response.success) {
                    _this.ratingObj = response.rating;
                    _this.rating = _this.ratingObj.rating;
                }
            });
        }
    };
    GameDashboardComponent.prototype.togglePlay = function () {
        var _this = this;
        if (!this.play) {
            this.dataService.postPlay(this.game._id, this.user._id)
                .subscribe(function (response) {
                if (response.success) {
                    _this.play = response.play;
                }
                else {
                    console.log(response.msg);
                }
            });
        }
        else {
            this.dataService.deletePlay(this.play._id)
                .subscribe(function (response) {
                if (response.success) {
                    _this.play = undefined;
                }
                else {
                    console.log(response.msg);
                }
            });
        }
    };
    GameDashboardComponent.prototype.toggleLike = function () {
        var _this = this;
        if (!this.like) {
            this.dataService.addGameLike(this.game._id, this.user._id)
                .subscribe(function (response) {
                if (response.success) {
                    _this.like = response.like;
                }
                else {
                    console.log(response.msg);
                }
            });
        }
        else {
            this.dataService.deleteLike(this.like._id)
                .subscribe(function (response) {
                if (response.success) {
                    _this.like = undefined;
                }
            });
        }
    };
    GameDashboardComponent.prototype.toggleBacklog = function () {
        var _this = this;
        if (!this.backlogged) {
            this.dataService.addBackloggedGame(this.user._id, this.game)
                .subscribe(function (response) {
                if (response.ok) {
                    _this.backlogged = true;
                }
                else {
                    console.log('An error occurred');
                }
            });
        }
        else {
            this.dataService.deleteBackloggedGame(this.user._id, this.game._id)
                .subscribe(function (response) {
                if (response.ok) {
                    _this.backlogged = false;
                }
                else {
                    console.log('An error occurred');
                }
            });
        }
    };
    GameDashboardComponent.prototype.onRated = function (rating) {
        this.rating = +rating;
    };
    return GameDashboardComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])(),
    __metadata("design:type", Object)
], GameDashboardComponent.prototype, "game", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])(),
    __metadata("design:type", Object)
], GameDashboardComponent.prototype, "review", void 0);
GameDashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'app-game-dashboard',
        template: __webpack_require__("./src/app/game-dashboard/game-dashboard.component.html"),
        styles: [__webpack_require__("./src/app/game-dashboard/game-dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__data_service__["a" /* DataService */]) === "function" && _c || Object])
], GameDashboardComponent);

var _a, _b, _c;
//# sourceMappingURL=game-dashboard.component.js.map

/***/ }),

/***/ "./src/app/game-gallery/game-gallery.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img {\n    width: 105px;\n    height: 145px;\n    border-radius: 4px;\n    margin: 5px 5px 5px 0;\n}\n\n.component-label {\n\tmargin-top: 20px;\n\tmargin-bottom: 0px;\n}\n\n.component-rule {\n\tmargin-top: 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/game-gallery/game-gallery.component.html":
/***/ (function(module, exports) {

module.exports = "<app-year-nav *ngIf=\"decade\"></app-year-nav>\n\n<p class=\"component-label\">GAMES</p>\n<hr class=\"component-rule\">\n<div class=\"row\" style=\"margin-bottom: 50px\">\n  <div class=\"col-xs-12\">\n    <a [routerLink]=\"['/games', game.id]\" *ngFor=\"let game of games\">\n      <img src=\"{{ game.cover }}\" alt=\"\">\n    </a>\n    <button class=\"btn btn-primary\" *ngIf=\"page\" (click)=\"onPrevious()\">Previous</button>\n    <button class=\"btn btn-primary pull-right\" *ngIf=\"games?.length === 50\" style=\"margin-right: 10px\" (click)=\"onNext()\">Next</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/game-gallery/game-gallery.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameGalleryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GameGalleryComponent = (function () {
    function GameGalleryComponent(route, router) {
        this.route = route;
        this.router = router;
        this.page = 0;
    }
    GameGalleryComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('In component: ', this.route.data['games']);
        this.games = this.route.snapshot.data['games'];
        this.route.params.subscribe(function (params) {
            if (params['page']) {
                _this.page = +params['page'];
            }
            if (params['decade']) {
                _this.decade = +params['decade'];
            }
            if (params['year']) {
                _this.year = +params['year'];
            }
            _this.games = _this.route.snapshot.data['games'];
        });
    };
    GameGalleryComponent.prototype.onNext = function () {
        if (this.page === 0) {
            this.router.navigate([(this.page + 2)], { relativeTo: this.route });
        }
        else {
            this.router.navigate(['../', this.page + 1], { relativeTo: this.route });
        }
    };
    GameGalleryComponent.prototype.onPrevious = function () {
        if (this.page === 2) {
            this.router.navigate(['../'], { relativeTo: this.route });
        }
        else {
            this.router.navigate(['../', this.page - 1], { relativeTo: this.route });
        }
    };
    return GameGalleryComponent;
}());
GameGalleryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-game-gallery',
        template: __webpack_require__("./src/app/game-gallery/game-gallery.component.html"),
        styles: [__webpack_require__("./src/app/game-gallery/game-gallery.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _b || Object])
], GameGalleryComponent);

var _a, _b;
//# sourceMappingURL=game-gallery.component.js.map

/***/ }),

/***/ "./src/app/game-gallery/year-nav/year-nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a {\n    color: black;\n    border-radius: 8px;\n}\n\nli a:hover {\n    background: black;\n    color: white;\n}\n\n.selected {\n    background: black;\n    color: white;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/game-gallery/year-nav/year-nav.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: center\" *ngIf=\"decade && years\">\n    <a [routerLink]=\"['/games/by/decade', decade-10]\">\n      <i class=\"fa fa-play fa-rotate-180\" style=\"display: inline-block; vertical-align: super; position: relative; bottom: 3px;\"></i>\n    </a>\n    <nav class=\"navbar\" style=\"display: inline-block; min-height: 30px; margin-left: 15px; margin-right: 15px; margin-bottom: 0\"> \n      <ul class=\"nav navbar-nav navbar-center profile-nav\" style=\"margin: 0 auto; border: 1px solid black; border-radius: 8px; height: 30px;\">  \n        <li>\n          <a style=\"padding: 5px 25px;\" class=\"selected\" [routerLink]=\"['/games/by/decade', decade]\">{{ decade }}s</a>\n        </li>\n        <li *ngFor=\"let year of years\">\n          <a style=\"padding: 5px 25px;\" [routerLink]=\"['/games/by/decade', decade, 'by', 'year', year]\">{{ year }}</a>\n        </li>\n      </ul>\n    </nav>\n    <a [routerLink]=\"['/games/by/decade', decade+10]\">\n      <i class=\"fa fa-play\" style=\"display: inline-block; vertical-align: super; position: relative; bottom: 3px;\"></i>  \n    </a>\n  </div>"

/***/ }),

/***/ "./src/app/game-gallery/year-nav/year-nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YearNavComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var YearNavComponent = (function () {
    function YearNavComponent(route) {
        this.route = route;
        this.years = [];
    }
    YearNavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.decade = +params['decade'];
            for (var i = 0; i < 10; i++) {
                _this.years.splice(i, 1, _this.decade + i);
                ;
            }
        });
    };
    return YearNavComponent;
}());
YearNavComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-year-nav',
        template: __webpack_require__("./src/app/game-gallery/year-nav/year-nav.component.html"),
        styles: [__webpack_require__("./src/app/game-gallery/year-nav/year-nav.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object])
], YearNavComponent);

var _a;
//# sourceMappingURL=year-nav.component.js.map

/***/ }),

/***/ "./src/app/game-review-list/game-review-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/game-review-list/game-review-list.component.html":
/***/ (function(module, exports) {

module.exports = "<app-game-review *ngFor=\"let review of reviews.slice(0, 3)\" [review]=review></app-game-review>"

/***/ }),

/***/ "./src/app/game-review-list/game-review-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameReviewListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GameReviewListComponent = (function () {
    function GameReviewListComponent(dataService) {
        this.dataService = dataService;
    }
    GameReviewListComponent.prototype.ngOnInit = function () {
    };
    return GameReviewListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Array)
], GameReviewListComponent.prototype, "reviews", void 0);
GameReviewListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-game-review-list',
        template: __webpack_require__("./src/app/game-review-list/game-review-list.component.html"),
        styles: [__webpack_require__("./src/app/game-review-list/game-review-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__data_service__["a" /* DataService */]) === "function" && _a || Object])
], GameReviewListComponent);

var _a;
//# sourceMappingURL=game-review-list.component.js.map

/***/ }),

/***/ "./src/app/game-review/game-review.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".thumb {\n\theight: 118px;\n\twidth: 90px;\n\tborder-radius: 4px;\n}\n\nspan {\n    display: inline-block;\n}\n\n.attribution span {\n\tmargin-left: 5px;\n}\n\n.rating i {\n\tfloat: left;\n}\n\n.rating {\n\tvertical-align: middle;\n}\n\n.attribution img {\n\theight: 25px;\n\tmargin-right: 5px;\n}\n\n.attribution.comment-data {\n\tvertical-align: middle;\n}\n\n.user {\n\tvertical-align: middle;\n}\n\ni {\n\tcolor: gray;\n}\n\n.toggled {\n\tcolor: black;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/game-review/game-review.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-2\" style=\"text-align: center\">\n    <app-avatar [avatar]=\"review?.user?.avatar\" [height]=\"'50px'\"></app-avatar>\n  </div>\n  <div class=\"col-xs-10\">\n    <div class=\"attribution\">\n      <p> Review by\n        <strong class=\"user\">{{ review.user.username }}</strong>\n        <app-star-rating [rating]=\"review?.rating.toString()\" [disabled]=\"true\" [name]=\"review?._id\" style=\"display: inline-block; font-size: 8px; vertical-align: middle; margin: 0;\"></app-star-rating>\n        <span class=\"comment-data\"><i class=\"fa fa-comment fa-1\"> {{ review.comments.length }}</i></span>\n      </p>\n    </div>\n    <p style=\"white-space: pre-line\">{{ review.text }}</p>\n    <button *ngIf=\"authService.loggedIn() && (authService.user._id !== review.user._id)\" style=\"background: none; border: none; margin: 0;\" [ngClass]=\"{ toggled: like }\" (click)=\"toggleLike()\"><i class=\"fa fa-heart fa-1\" [ngClass]=\"{ toggled: like }\"></i> Like this review? {{ review.likesCount }} likes</button>\n    <p *ngIf=\"!authService.loggedIn() || (authService.user._id === review.user._id)\"><i class=\"fa fa-heart fa-1 toggled\"></i> {{ review.likesCount }} Likes</p>\n  </div>\n</div>\n<hr>"

/***/ }),

/***/ "./src/app/game-review/game-review.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameReviewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GameReviewComponent = (function () {
    function GameReviewComponent(authService, dataService) {
        this.authService = authService;
        this.dataService = dataService;
    }
    GameReviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.authService.loggedIn()) {
            this.dataService.getReviewLike(this.review._id, this.authService.user._id)
                .subscribe(function (response) {
                if (response.success) {
                    _this.like = response.like;
                }
            });
        }
    };
    GameReviewComponent.prototype.toggleLike = function () {
        var _this = this;
        if (!this.like) {
            this.dataService.addReviewLike(this.review._id, this.authService.user._id)
                .subscribe(function (response) {
                if (response.success) {
                    _this.like = response.like;
                    _this.review.likesCount = _this.review.likesCount + 1;
                }
                else {
                    console.log(response.msg);
                }
            });
        }
        else {
            this.dataService.deleteLike(this.like._id)
                .subscribe(function (response) {
                if (response.success) {
                    _this.like = undefined;
                    _this.review.likesCount = _this.review.likesCount - 1;
                }
            });
        }
    };
    return GameReviewComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
    __metadata("design:type", Object)
], GameReviewComponent.prototype, "review", void 0);
GameReviewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-game-review',
        template: __webpack_require__("./src/app/game-review/game-review.component.html"),
        styles: [__webpack_require__("./src/app/game-review/game-review.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__data_service__["a" /* DataService */]) === "function" && _b || Object])
], GameReviewComponent);

var _a, _b;
//# sourceMappingURL=game-review.component.js.map

/***/ }),

/***/ "./src/app/game/game.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".component-label {\n\tmargin-top: 20px;\n\tmargin-bottom: 0px;\n}\n\n.component-rule {\n\tmargin-top: 0;\n}\n\nspan {\n    display: inline-block;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/game/game.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"game\">\n  <div class=\"col-xs-3\">\n    <div class=\"thumbnail\">\n\t\t\t\t<img src=\"{{ game?.cover }}\" style=\"height: 333px; width: 100%\">\n    </div>\n  </div>\n  <div class=\"col-xs-9\">\n    <div class=\"row\">\n      <div class=\"col-xs-8\">\n        <h1>{{ game?.name }} <small>{{ game?.release.year }}</small></h1>\n        <h3>{{ game?.developers[0].name }} - {{ game?.publishers[0].name }}</h3>\n        <p style=\"white-space: pre-line;\">\n          {{ game?.summary }}\n        </p>\n      </div>\n      <div class=\"col-xs-4\">\n        <app-game-dashboard [game]=\"game\"></app-game-dashboard>\n        <div class=\"row\">\n          <app-ratings-graph [graph]=\"game?.graph\" [rating]=\"game?.avgRating\"></app-ratings-graph>\n        </div>\n\n        <div class=\"row\">\n          <p class=\"component-label\">PLAYED BY</p>\n          <hr class=\"component-rule\">\n          <p><i class=\"fa fa-gamepad fa-1\"></i> {{ game.playedCount }} people including {{ game.likesCount }} fans</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"row\" *ngIf=\"game\">\n  <div class=\"col-xs-9 col-xs-offset-3\">\n    <p class=\"component-label\">POPULAR REVIEWS <a class=\"pull-right\" [routerLink]=\"['/', 'reviews', 'game', game?._id, 'popular']\">MORE</a></p>\n    <hr class=\"component-rule\">\n    <app-game-review-list [reviews]=\"popularReviews\"></app-game-review-list>\n  </div>\n</div>\n\n<div class=\"row\" *ngIf=\"game\">\n  <div class=\"col-xs-9 col-xs-offset-3\">\n    <p class=\"component-label\">RECENT REVIEWS <a class=\"pull-right\" [routerLink]=\"['/', 'reviews', 'game', game?._id, 'recent']\">MORE</a></p>\n    <hr class=\"component-rule\">\n    <app-game-review-list [reviews]=\"game.reviews\"></app-game-review-list>\n  </div>\n</div>\n\n<div class=\"row\" *ngIf=\"game?.lists\">\n  <div class=\"col-xs-9 col-xs-offset-3\">\n    <p class=\"component-label\">POPULAR LISTS</p>\n    <hr class=\"component-rule\">\n    <app-long-lists-list [lists]=\"game?.lists.slice(0, 3)\"></app-long-lists-list>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/game/game.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GameComponent = (function () {
    function GameComponent(route, dataService) {
        var _this = this;
        this.route = route;
        this.dataService = dataService;
        this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
        });
    }
    GameComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getGameByIGDBId(this.id).subscribe(function (gameResponse) {
            _this.game = gameResponse.json();
            console.log(_this.game);
            // sort reviews
            // need to do this in aggregate on backend or in service
            _this.popularReviews = _this.game.reviews.slice();
            _this.popularReviews.sort(function (a, b) {
                if (a.likesCount < b.likesCount) {
                    return 1;
                }
                else if (a.likesCount > b.likesCount) {
                    return -1;
                }
                else {
                    return 0;
                }
            });
        });
    };
    return GameComponent;
}());
GameComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-game',
        template: __webpack_require__("./src/app/game/game.component.html"),
        styles: [__webpack_require__("./src/app/game/game.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__data_service__["a" /* DataService */]) === "function" && _b || Object])
], GameComponent);

var _a, _b;
//# sourceMappingURL=game.component.js.map

/***/ }),

/***/ "./src/app/gamereviewsbydate.resolve.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameReviewsByDateResolve; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GameReviewsByDateResolve = (function () {
    function GameReviewsByDateResolve(dataService) {
        this.dataService = dataService;
    }
    GameReviewsByDateResolve.prototype.resolve = function (route) {
        console.log('Page is ', route.params['page']);
        return this.dataService.getRecentGameReviews(route.params['id'], route.params['page']);
    };
    return GameReviewsByDateResolve;
}());
GameReviewsByDateResolve = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__data_service__["a" /* DataService */]) === "function" && _a || Object])
], GameReviewsByDateResolve);

var _a;
//# sourceMappingURL=gamereviewsbydate.resolve.js.map

/***/ }),

/***/ "./src/app/gamereviewsbypopularity.resolve.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameReviewsByPopularityResolve; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GameReviewsByPopularityResolve = (function () {
    function GameReviewsByPopularityResolve(dataService) {
        this.dataService = dataService;
    }
    GameReviewsByPopularityResolve.prototype.resolve = function (route) {
        console.log('Page is ', route.params['page']);
        return this.dataService.getPopularGameReviews(route.params['id'], route.params['page']);
    };
    return GameReviewsByPopularityResolve;
}());
GameReviewsByPopularityResolve = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__data_service__["a" /* DataService */]) === "function" && _a || Object])
], GameReviewsByPopularityResolve);

var _a;
//# sourceMappingURL=gamereviewsbypopularity.resolve.js.map

/***/ }),

/***/ "./src/app/games/games-nav/games-nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "button {\n    color: black;\n    background: none;\n    border: none;\n    border-radius: none;\n    /* border: 2px solid black;\n    border-radius: 2px;\n    padding: 2px; */\n    margin: 0;\n}\n\nbutton:hover {\n    background: black;\n    color: white;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/games/games-nav/games-nav.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <form class=\"form-inline\" id=\"film-form\">\n      <div class=\"form-group\">\n        <label for=\"selector\">BROWSE BY</label>\n        <div style=\"border: 1px solid black; border-radius: 8px; display: inline-block\">\n          <div class=\"btn-group\" appDropdown>\n            <button class=\"btn dropdown-toggle\" type=\"button\">Year <i class=\"caret\"></i></button>\n            <ul class=\"dropdown-menu\">\n              <li><a routerLink=\"/game-gallery\">All</a></li>\n              <li><a routerLink=\"/games/by/decade/2010\">2010s</a></li>\n              <li><a routerLink=\"/games/by/decade/2000\">2000s</a></li>\n              <li><a routerLink=\"/games/by/decade/1990\">1990s</a></li>\n              <li><a routerLink=\"/games/by/decade/1980\">1980s</a></li>\n              <li><a routerLink=\"/games/by/decade/1970\">1970s</a></li>\n            </ul>\n          </div>\n          <div class=\"btn-group\" appDropdown>\n            <button class=\"btn dropdown-toggle\" type=\"button\">Genre <i class=\"caret\"></i></button>\n            <ul class=\"dropdown-menu\">\n              <li><a href=\"#\">All</a></li>\n              <li><a href=\"#\">FPS</a></li>\n              <li><a href=\"#\">RPG</a></li>\n              <li><a href=\"#\">Platformer</a></li>\n              <li><a href=\"#\">Third Person Shooter</a></li>\n              <li><a href=\"#\">Action</a></li>\n            </ul>\n          </div>\n          <div class=\"btn-group\" appDropdown>\n            <button class=\"btn dropdown-toggle\" type=\"button\">Popular <i class=\"caret\"></i></button>\n            <ul class=\"dropdown-menu\">\n              <li><a routerLink=\"/game-gallery\">All Time</a></li>\n              <li><a href=\"#\">This Week</a></li>\n              <li><a href=\"#\">This Month</a></li>\n              <li><a href=\"#\">This Year</a></li>\n            </ul>\n          </div>\n          <div class=\"btn-group\" appDropdown>\n            <button class=\"btn dropdown-toggle\" type=\"button\">Developer <i class=\"caret\"></i></button>\n            <ul class=\"dropdown-menu\">\n              <li><a routerLink=\"/game-gallery\">All</a></li>\n            </ul>\n          </div>\n          <div class=\"btn-group\" appDropdown>\n            <button class=\"btn dropdown-toggle\" type=\"button\">Publisher <i class=\"caret\"></i></button>\n            <ul class=\"dropdown-menu\">\n              <li><a routerLink=\"/game-gallery\">All</a></li>\n            </ul>\n          </div>\n        </div>\n      </div>\n      <form class=\"pull-right\" (ngSubmit)=\"onSearch(f)\" #f=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"search\">FIND A GAME</label>\n          <input type=\"text\" name=\"search\" ngModel class=\"form-control\" (input)=\"onSearch(f)\">\n          <ul class=\"list-group\" style=\"max-height: 200px;z-index: 1001;position: absolute;overflow: hidden;overflow-y: auto;\">\n            <a *ngFor=\"let result of searchResults | async\" [routerLink]=\"['/games', result.id]\"><li class=\"list-group-item\"  style=\"width: 300px\">{{ result.name }} <span *ngIf=\"result?.first_release_date\">({{ result.first_release_date | date:'y'}})</span></li></a>\n          </ul>\n          <button type=\"submit\" style=\"display:none\">Why don't you try the button also</button>\n        </div>\n      </form>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/games/games-nav/games-nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GamesNavComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GamesNavComponent = (function () {
    function GamesNavComponent(http) {
        this.http = http;
    }
    GamesNavComponent.prototype.ngOnInit = function () {
    };
    GamesNavComponent.prototype.onSubmit = function (form) {
    };
    GamesNavComponent.prototype.onSearch = function (form) {
        var query = form.value.search;
        if (query === '') {
            this.searchResults = null;
            return false;
        }
        var params = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["URLSearchParams"]();
        params.set('query', query);
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["RequestOptions"]();
        requestOptions.params = params;
        this.searchResults = this.http.get('/api/search', requestOptions)
            .map(function (response) {
            return response.json().body;
        });
    };
    return GamesNavComponent;
}());
GamesNavComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-games-nav',
        template: __webpack_require__("./src/app/games/games-nav/games-nav.component.html"),
        styles: [__webpack_require__("./src/app/games/games-nav/games-nav.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["Http"]) === "function" && _a || Object])
], GamesNavComponent);

var _a;
//# sourceMappingURL=games-nav.component.js.map

/***/ }),

/***/ "./src/app/games/games.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".component-label {\n\tmargin-top: 20px;\n\tmargin-bottom: 0px;\n}\n\n.component-rule {\n\tmargin-top: 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/games/games.component.html":
/***/ (function(module, exports) {

module.exports = "<app-games-nav></app-games-nav>\n<p class=\"component-label\">POPULAR GAMES THIS WEEK</p>\n<hr class=\"component-rule\">\n<app-popular-games></app-popular-games>\n<app-just-reviewed></app-just-reviewed>\n<div class=\"row\">\n  <div class=\"col-xs-12 col-sm-7\" *ngIf=\"reviews\">\n    <p class=\"component-label\">RECENT REVIEWS <span class=\"pull-right\"><a routerLink=\"/reviews/recent\">MORE</a></span></p>\n    <hr class=\"component-rule\">\n    <app-review-list [reviews]=\"reviews?.slice(0, 3)\"></app-review-list>\n  </div>\n  <div class=\"col-xs-12 col-sm-4 col-sm-offset-1\">\n    <app-staff-picks></app-staff-picks>\n    <div class=\"row\">\n      <app-user-list-mini [users]=\"users\" *ngIf=\"users\"></app-user-list-mini>      \n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/games/games.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GamesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GamesComponent = (function () {
    function GamesComponent(dataService) {
        this.dataService = dataService;
    }
    GamesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getRecentReviews().subscribe(function (reviews) {
            _this.reviews = reviews;
        });
        this.dataService.getUsers().subscribe(function (response) {
            if (response.success) {
                _this.users = response.users;
            }
        });
    };
    return GamesComponent;
}());
GamesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-games',
        template: __webpack_require__("./src/app/games/games.component.html"),
        styles: [__webpack_require__("./src/app/games/games.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__data_service__["a" /* DataService */]) === "function" && _a || Object])
], GamesComponent);

var _a;
//# sourceMappingURL=games.component.js.map

/***/ }),

/***/ "./src/app/gamesbydecade.resolve.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GamesByDecadeResolve; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GamesByDecadeResolve = (function () {
    function GamesByDecadeResolve(dataService) {
        this.dataService = dataService;
    }
    GamesByDecadeResolve.prototype.resolve = function (route) {
        console.log('Page is ', route.params['page']);
        return this.dataService.getGamesByDecade(route.params['decade'], route.params['page']);
    };
    return GamesByDecadeResolve;
}());
GamesByDecadeResolve = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__data_service__["a" /* DataService */]) === "function" && _a || Object])
], GamesByDecadeResolve);

var _a;
//# sourceMappingURL=gamesbydecade.resolve.js.map

/***/ }),

/***/ "./src/app/gamesbyuser.resolve.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("./src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GamesByUserResolve; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GamesByUserResolve = (function () {
    function GamesByUserResolve(dataService, userService) {
        this.dataService = dataService;
        this.userService = userService;
    }
    GamesByUserResolve.prototype.resolve = function (route) {
        console.log('Page is ', route.params['page']);
        var games = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"](this.userService.user.getValue().played);
    };
    return GamesByUserResolve;
}());
GamesByUserResolve = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === "function" && _b || Object])
], GamesByUserResolve);

var _a, _b;
//# sourceMappingURL=gamesbyuser.resolve.js.map

/***/ }),

/***/ "./src/app/gamesbyyear.resolve.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GamesByYearResolve; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GamesByYearResolve = (function () {
    function GamesByYearResolve(dataService) {
        this.dataService = dataService;
    }
    GamesByYearResolve.prototype.resolve = function (route) {
        console.log('Page is ', route.params['page']);
        return this.dataService.getGamesByYear(route.params['year'], route.params['page']);
    };
    return GamesByYearResolve;
}());
GamesByYearResolve = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__data_service__["a" /* DataService */]) === "function" && _a || Object])
], GamesByYearResolve);

var _a;
//# sourceMappingURL=gamesbyyear.resolve.js.map

/***/ }),

/***/ "./src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-static-top\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button class=\"navbar-toggle collapsed\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" routerLink=\"/\">LOGD</a>\n    </div>\n    <div class=\"collapse navbar-collapse\" id=\"hf-nav\">\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li class=\"dropdown\" appDropdown *ngIf=\"authService.loggedIn()\">\n          <a style=\"cursor: pointer\" class=\"dropdown-toggle\" role=\"button\">\n            PROFILE <span class=\"caret\"></span>\n          </a>\n          <ul class=\"dropdown-menu\">\n            <li><a routerLink=\"/\">Home</a></li>\n            <li><a [routerLink]=\"['/', authService.user?.username]\">Profile</a></li>\n            <li><a [routerLink]=\"['/', authService.user?.username, 'games']\">Games</a></li>\n            <li><a [routerLink]=\"['/', authService.user?.username, 'log']\">Log</a></li>\n            <li><a [routerLink]=\"['/', authService.user?.username, 'lists']\">Lists</a></li>\n            <li><a (click)=\"onLogOut()\">Logout</a></li>\n          </ul>\n        </li>\n        <li><a routerLink=\"/login\" *ngIf=\"!authService.loggedIn()\">SIGN IN</a></li>\n        <li><a routerLink=\"/register\" *ngIf=\"!authService.loggedIn()\">CREATE ACCOUNT</a></li>\n        <li><a routerLink=\"/games\">GAMES</a></li>\n        <li><a routerLink=\"/lists\">LISTS</a></li>\n        <li><a routerLink=\"/gamers\">PEOPLE</a></li>\n      </ul>\n    </div>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = (function () {
    function HeaderComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.onLogOut = function () {
        this.authService.logout();
        console.log('Logged out');
        this.router.navigate(['/login']);
        return false;
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-header',
        template: __webpack_require__("./src/app/header/header.component.html"),
        styles: [__webpack_require__("./src/app/header/header.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], HeaderComponent);

var _a, _b;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("./src/app/home/home.component.html"),
        styles: [__webpack_require__("./src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "./src/app/just-reviewed/just-reviewed.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".component-label {\n\tmargin-top: 20px;\n\tmargin-bottom: 0px;\n}\n\n.component-rule {\n\tmargin-top: 0;\n}\n\n.just-reviewed {\n\toverflow: hidden;\n}\n\n.just-reviewed img {\n\theight: 118px;\n\twidth: 100%;\n\tposition: relative;\n\tleft: -5px;\n\tborder-radius: 4px;\n}\n\n.just-reviewed .col-xs-1 {\n\tpadding-right: 5px;\n\tpadding-left: 5px;\n}\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/just-reviewed/just-reviewed.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row just-reviewed\">\n  <div class=\"col-xs-12\">\n    <p class=\"component-label\">JUST REVIEWED</p>\n    <hr class=\"component-rule\">\n    <div class=\"col-xs-1\" *ngFor=\"let game of games\">\n      <a [routerLink]=\"['/games', game.id]\">\n        <img src=\"{{ game.thumbnail }}\" class=\"just-reviewed-img\">\n      </a>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/just-reviewed/just-reviewed.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JustReviewedComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var JustReviewedComponent = (function () {
    function JustReviewedComponent(dataService) {
        this.dataService = dataService;
        this.games = [];
    }
    JustReviewedComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.dataService.getGames().subscribe(
        //   (response) => {
        //     this.games = response.json().slice(0, 12);
        //   }
        // );
        this.dataService.getJustReviewed().subscribe(function (response) {
            _this.games = response.slice(0, 12);
        });
    };
    return JustReviewedComponent;
}());
JustReviewedComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-just-reviewed',
        template: __webpack_require__("./src/app/just-reviewed/just-reviewed.component.html"),
        styles: [__webpack_require__("./src/app/just-reviewed/just-reviewed.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__data_service__["a" /* DataService */]) === "function" && _a || Object])
], JustReviewedComponent);

var _a;
//# sourceMappingURL=just-reviewed.component.js.map

/***/ }),

/***/ "./src/app/landing/landing.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "span {\n    display: inline-block;\n}\n\n.img-list {\n\tmargin-top: 0;\n\tdisplay: inline;\n}\n\n.img-list span {\n\theight: 70px; \n\twidth: 40px; \n\tbackground: white; \n\tmargin-right: -30px; \n\tborder: 1px solid black; \n\tborder-radius: 4px; \n\tbox-shadow:2px 0 7px #000;\n\tposition: relative;\n}\n\n.img-list span:nth-of-type(1) {\n\tz-index: 15;\n}\n\n.img-list span:nth-of-type(2) {\n\tz-index: 14;\n}\n\n.img-list span:nth-of-type(3) {\n\tz-index: 13;\n}\n\n.img-list span:nth-of-type(4) {\n\tz-index: 12;\n}\n\n.img-list span:nth-of-type(5) {\n\tz-index: 11;\n\tmargin-right: 5px;\n}\n\n.component-label {\n\tmargin-top: 20px;\n\tmargin-bottom: 0px;\n}\n\n.component-rule {\n\tmargin-top: 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/landing/landing.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 style=\"text-align: center; margin: 40px\">What are you playing? <a href=\"\">Start a log</a> and tell your friends</h2>\n\n<app-popular-games></app-popular-games>\n\n<div class=\"row\">\n  <div class=\"col-xs-4\" style=\"margin: 40px auto 20px auto\">\n    <p>\n      <i class=\"fa fa-calendar-check-o fa-5x\"></i>\n      <span class=\"h3\">\n        Keep a game log\n      </span>\n    </p>\n    <p>\n      <a href=\"\">Keep a log</a> of games you play. Add reviews and ratings as you go. Follow your friends to \n      keep track of what they're playing.\n    </p>\n  </div>\n  <div class=\"col-xs-4\" style=\"margin: 40px auto 20px auto\">\n    <p>\n      <span class=\"img-list\">\n        <span></span>\n        <span></span>\n        <span></span>\n        <span></span>\n        <span></span>\n      </span>\n      <span class=\"h3\" style=\"position: absolute; top: 20px;\">\n        Create and Share Lists\n      </span>\n    </p>\n    <p>\n      <a href=\"\">Compile and share lists</a> of games: lists of favorites, your library, a wishlist, or a worst list.\n      Keep lists private or share them with the community.\n    </p>\n  </div>\n  <div class=\"col-xs-4\" style=\"margin: 40px auto 20px auto\">\n    <p>\n      <i class=\"fa fa-user fa-5x\"></i>\n      <span class=\"h3\">\n        Follow your friends\n      </span>\n    </p>\n    <p>\n      <a href=\"\">Follow</a> users you know or who interest you. See their activity on your homepage, and watch as your \n      own profile grows followers and prestige.\n    </p>\n  </div>\n</div>\n\n<app-just-reviewed></app-just-reviewed>\n\n<h2 style=\"text-align: center; margin: 40px auto 20px auto\">Write and share reviews. Create lists. Share your life in gaming.</h2>\n\n<div class=\"row\" *ngIf=\"reviews\">\n  <div class=\"col-xs-12 col-sm-7\">\n    <p class=\"component-label\">RECENT REVIEWS <span class=\"pull-right\"><a routerLink=\"/reviews/recent\">MORE</a></span></p>\n    <hr class=\"component-rule\">\n    <app-review-list [reviews]=\"reviews.slice(0, 3)\"></app-review-list>\n  </div>\n  <div class=\"col-xs-12 col-sm-4 col-sm-offset-1\" *ngIf=\"lists\">\n    <p class=\"component-label\">STAFF PICKS</p>\n    <hr class=\"component-rule\">\n     <app-lists-list [lists]=\"lists.slice(0, 5)\"></app-lists-list> \n  </div>\n</div>"

/***/ }),

/***/ "./src/app/landing/landing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LandingComponent = (function () {
    function LandingComponent(dataService, authService) {
        this.dataService = dataService;
        this.authService = authService;
        this.lists = [];
        this.reviews = [];
    }
    LandingComponent.prototype.ngOnInit = function () {
        var _this = this;
        //console.log(this.authService.user);
        this.dataService.getLists().subscribe(function (response) {
            _this.lists = response.json();
        });
        this.dataService.getRecentReviews().subscribe(function (reviews) {
            console.log(reviews);
            _this.reviews = reviews;
        });
    };
    return LandingComponent;
}());
LandingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-landing',
        template: __webpack_require__("./src/app/landing/landing.component.html"),
        styles: [__webpack_require__("./src/app/landing/landing.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], LandingComponent);

var _a, _b;
//# sourceMappingURL=landing.component.js.map

/***/ }),

/***/ "./src/app/large-list/large-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".list img {\n\tposition: relative;\n\tborder-radius: 4px;\n\tbox-shadow: 2px 0 7px #000;\n\tmargin-right: -120px;\n\theight: 212px;\n}\n\n.list.long img {\n\tmargin-right: -55px;\n}\n\n.list img:nth-of-type(1) {\n\tz-index: 15;\n}\n\n.list img:nth-of-type(2) {\n\tz-index: 14;\n}\n\n.list img:nth-of-type(3) {\n\tz-index: 13;\n}\n\n.list img:nth-of-type(4) {\n\tz-index: 12;\n}\n\n.list img:nth-of-type(5) {\n\tz-index: 11;\n}\n\n.attribution span {\n\tmargin-left: 5px;\n}\n\n.attribution img {\n\theight: 25px;\n\tmargin-right: 5px;\n}\n\n.attribution.comment-data {\n\tvertical-align: middle;\n}\n\n.user {\n\tvertical-align: middle;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/large-list/large-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"list\">\n  <img src=\"/assets/SOTC.png\">\n  <img src=\"/assets/me.png\">\n  <img src=\"/assets/hl2.png\">\n  <img src=\"/assets/journey.png\">\n  <img src=\"/assets/SOTC.png\">\n</div>\n<h3>Best Video Games Involving 16 Giant Bosses</h3>\n<div class=\"attribution\">\n  <p>\n    <img src=\"/assets/profile.png\" class=\"img-circle\">\n    <strong class=\"user\"> David Scheuermann</strong>\n    <a href=\"#\" class=\"like\"><i class=\"fa fa-heart fa-1\"> 1</i></a>\n    <span class=\"comment-data\"><i class=\"fa fa-comment fa-1\"> 1</i></span>\n  </p>\n</div>\n<hr>"

/***/ }),

/***/ "./src/app/large-list/large-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LargeListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LargeListComponent = (function () {
    function LargeListComponent() {
    }
    LargeListComponent.prototype.ngOnInit = function () {
    };
    return LargeListComponent;
}());
LargeListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-large-list',
        template: __webpack_require__("./src/app/large-list/large-list.component.html"),
        styles: [__webpack_require__("./src/app/large-list/large-list.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LargeListComponent);

//# sourceMappingURL=large-list.component.js.map

/***/ }),

/***/ "./src/app/list-detail/list-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".list-group-item {\n\toverflow: hidden;\n\tcolor: black;\n\ttext-align: center;\n}\n\n.toggled {\n\tcolor: black;\n}\n\ni {\n\tcolor: gray;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/list-detail/list-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"list\">\n  <div class=\"col-xs-9\">\n    <!-- <img src=\"/assets/profile.png\" class=\"img-circle\" style=\"height: 25px; margin-right: 5px\"> -->\n    <app-avatar [avatar]=\"list?.user?.avatar\" [height]=\"'25px'\" style=\"margin-right: 5px;\"></app-avatar>\n    List by <a [routerLink]=\"['/', list?.user?.username]\" style=\"color: black; cursor: pointer\"><strong>{{ list.user.username }}</strong></a>\n    <h2>{{ list.title }}</h2>\n    <p style=\"white-space: pre-line;\">{{ list.description }}</p>\n    <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <div style=\"display: inline-block;\" *ngFor=\"let game of list.games; let i = index\">\n            <a [routerLink]=\"['/games/', game.id]\">\n              <img src=\"{{ game.cover }}\" alt=\"\" style=\"height: 200px; width: 152px; border-radius: 4px; margin-right: 15px;\">\n            </a>\n            <p style=\"text-align: center\">{{ i+1 }}</p>\n          </div>\n        </div>\n      </div>\n  </div>\n  <div class=\"div col-xs-3\">\n      <ul class=\"list-group\" *ngIf=\"authService.loggedIn()\">\n        <li class=\"list-group-item\" *ngIf=\"authService.user?.username === list?.user?.username\"><i class=\"fa fa-heart toggled\"></i> {{ list.likesCount }} Likes</li>\n        <li class=\"list-group-item\" *ngIf=\"authService.user?.username !== list?.user?.username\">\n          <button style=\"padding: 0; border: none; background: none;\" (click)=\"toggleLike()\">\n            <i class=\"fa fa-heart\" [ngClass]=\"{ toggled: like }\"></i>\n            Like this list? {{ list.likesCount }}\n          </button>\n        </li>\n        <li class=\"list-group-item\">Clone This List</li>\n        <li class=\"list-group-item\" *ngIf=\"authService.user.username === list?.user?.username\"><a [routerLink]=\"['/lists', list._id, 'edit']\">Edit or Delete List</a></li>\n        <li class=\"list-group-item\" *ngIf=\"authService.user.username === list?.user?.username\">Make this list private</li>\n      </ul>\n      <ul class=\"list-group\" *ngIf=\"!authService.loggedIn()\">\n          <li class=\"list-group-item\">You Must Be Logged In To Like A List</li>\n        </ul>\n  </div>\n  \n</div>\n\n\n"

/***/ }),

/***/ "./src/app/list-detail/list-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListDetailComponent = (function () {
    function ListDetailComponent(route, dataService, authService) {
        this.route = route;
        this.dataService = dataService;
        this.authService = authService;
    }
    ListDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.dataService.getListById(_this.id).subscribe(function (response) {
                _this.list = response.json();
                if (_this.authService.loggedIn()) {
                    _this.dataService.getListLike(_this.list._id, _this.authService.user._id)
                        .subscribe(function (response) {
                        if (response.success) {
                            _this.like = response.like;
                        }
                    });
                }
            });
        });
    };
    ListDetailComponent.prototype.toggleLike = function () {
        var _this = this;
        if (!this.like) {
            console.log('Like');
            this.dataService.addListLike(this.list._id, this.authService.user._id)
                .subscribe(function (response) {
                if (response.success) {
                    _this.like = response.like;
                }
                else {
                    console.log(response.msg);
                }
            });
        }
        else {
            console.log('Delete');
            this.dataService.deleteLike(this.like._id)
                .subscribe(function (response) {
                if (response.success) {
                    _this.like = undefined;
                }
            });
        }
    };
    return ListDetailComponent;
}());
ListDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'app-list-detail',
        template: __webpack_require__("./src/app/list-detail/list-detail.component.html"),
        styles: [__webpack_require__("./src/app/list-detail/list-detail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__auth_service__["a" /* AuthService */]) === "function" && _c || Object])
], ListDetailComponent);

var _a, _b, _c;
//# sourceMappingURL=list-detail.component.js.map

/***/ }),

/***/ "./src/app/list-edit/list-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/list-edit/list-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <h2>New List</h2>\n    <hr>\n    <form #f=\"ngForm\">\n      <div class=\"form-group\">\n        <label for=\"name\">Name of List</label>\n        <input id=\"name\" type=\"text\" name=\"name\" class=\"form-control\" [(ngModel)]=\"name\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"description\">Description</label>\n        <textarea rows=\"8\" name=\"description\" class=\"form-control\" id=\"description\" [(ngModel)]=\"description\"></textarea>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"search\">ADD A GAME</label>\n        <input type=\"text\" name=\"search\" (input)=\"onSearch(f)\" [(ngModel)]=\"search\">\n        <ul class=\"list-group\" style=\"max-height: 200px;z-index: 1001;position: absolute;overflow: hidden;overflow-y: auto;\">\n          <li class=\"list-group-item\" *ngFor=\"let result of searchResults | async\" style=\"width: 300px; cursor: pointer\" (click)=\"onSelectedGame(result)\">{{ result.name }} <span *ngIf=\"result.first_release_date\">({{ result.first_release_date | date:'y' }})</span></li>\n        </ul>\n\n        <div class=\"form-group pull-right\">\n          <button type=\"button\" (click)=\"onDelete()\">{{ editMode ? 'Delete' : 'Cancel' }}</button>\n          <button type=\"button\" (click)=\"onSave()\">Save</button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <ul class=\"list-group\" dnd-sortable-container [sortableData]=\"games\">\n        <li *ngFor=\"let game of games; let i = index\" class=\"list-group-item\" dnd-sortable [sortableIndex]=\"i\">\n          <div>\n            <img src=\"{{ game.cover }}\" alt=\"\" style=\"display: inline-block; height: 70px; width: 55px; border-radius: 4px;\">\n            <h2 style=\"display: inline-block\">{{game.name}} <small>{{ game.release.year }}</small></h2>\n            <i class=\"fa fa-times fa-3x pull-right\" (click)=\"onRemove(i)\"></i>\n          </div>\n        </li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/list-edit/list-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ListEditComponent = (function () {
    function ListEditComponent(http, route, router, authService, dataService) {
        var _this = this;
        this.http = http;
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.dataService = dataService;
        this.games = [];
        this.search = '';
        this.url = 'https://images.igdb.com/igdb/image/upload/t_cover_small/';
        this.editMode = false;
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.editMode = (params['id'] != null);
        });
    }
    ListEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (_this.id) {
                // get list
                _this.dataService.getListById(_this.id)
                    .map(function (response) { return response.json(); })
                    .subscribe(function (response) {
                    //populate form with list data
                    _this.list = response;
                    _this.games = response.games;
                    _this.name = _this.list.title;
                    _this.description = _this.list.description;
                });
            }
        });
    };
    ListEditComponent.prototype.onSearch = function (form) {
        var query = form.value.search;
        if (query === '') {
            this.searchResults = null;
            return false;
        }
        var params = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["URLSearchParams"]();
        params.set('query', query);
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["RequestOptions"]();
        requestOptions.params = params;
        this.searchResults = this.http.get('/api/search', requestOptions)
            .map(function (response) {
            return response.json().body;
        });
    };
    ListEditComponent.prototype.onSelectedGame = function (result) {
        var _this = this;
        //game is selected, then get from database and store database id in list
        console.log(result);
        this.searchResults = null;
        this.search = '';
        // get result id then get from data base and add result to list
        this.dataService.getGameByIGDBId(result.id)
            .subscribe(function (response) {
            _this.games.push(response.json());
        });
    };
    ListEditComponent.prototype.onSave = function () {
        var _this = this;
        var body = {
            // user: this.authService.user,
            title: this.form.value.name,
            description: this.form.value.description,
            games: this.games,
            comments: [],
            likes: [],
        };
        // const body = {
        //   list: obj
        // };
        // if edit mode
        // call put request
        // else call post request
        if (this.editMode) {
            // this.http.put('http://localhost:3000/lists/' + this.list._id, body)
            //   .map(response => response.json())
            this.dataService.updateList(this.list._id, body)
                .subscribe(function (response) {
                if (response.success) {
                    _this.list = response.list;
                }
            });
        }
        else {
            //post list
            // this.http.post('http://localhost:3000/lists', body)
            //   .map(response => response.json())
            this.dataService.postList(body)
                .subscribe(function (response) {
                if (response.success) {
                    _this.editMode = true;
                    _this.list = response.list;
                }
            });
        }
    };
    ListEditComponent.prototype.onDelete = function () {
        var _this = this;
        console.log(this.list._id);
        if (this.editMode) {
            // call delete request
            this.dataService.deleteList(this.list._id).subscribe(function (response) {
                if (response.success) {
                    _this.router.navigate(['/games']);
                }
            });
        }
        else {
            this.router.navigate(['/games']);
        }
        // navigate to games
    };
    ListEditComponent.prototype.onRemove = function (index) {
        console.log('remove: ', index);
        this.games.splice(index, 1);
    };
    return ListEditComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_core__["ViewChild"])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], ListEditComponent.prototype, "form", void 0);
ListEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
        selector: 'app-list-edit',
        template: __webpack_require__("./src/app/list-edit/list-edit.component.html"),
        styles: [__webpack_require__("./src/app/list-edit/list-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__auth_service__["a" /* AuthService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _f || Object])
], ListEditComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=list-edit.component.js.map

/***/ }),

/***/ "./src/app/list/list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".list img {\n\tposition: relative;\n\tborder-radius: 4px;\n\tbox-shadow: 2px 0 7px #000;\n\tmargin-right: -25px;\n\theight: 125px;\n\twidth: 93px;\n}\n\n.list.large img {\n\tmargin-right: -115px;\n\theight: 212px;\n\twidth: 161px;\n}\n\n.list.long img {\n\tmargin-right: -55px;\n}\n\n.list img:nth-of-type(1) {\n\tz-index: 15;\n}\n\n.list img:nth-of-type(2) {\n\tz-index: 14;\n}\n\n.list img:nth-of-type(3) {\n\tz-index: 13;\n}\n\n.list img:nth-of-type(4) {\n\tz-index: 12;\n}\n\n.list img:nth-of-type(5) {\n\tz-index: 11;\n}\n\n.attribution span {\n\tmargin-left: 5px;\n}\n\n.attribution img {\n\theight: 25px;\n\tmargin-right: 5px;\n}\n\n.attribution.comment-data {\n\tvertical-align: middle;\n}\n\n.user {\n\tvertical-align: middle;\n}\n\na:hover {\n\ttext-decoration: none;\n}\n\n.toggled {\n\tcolor: black;\n}\n\ni {\n\tcolor: gray;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"list\" [ngClass]=\"{large: type === 'large'}\">\n  <img *ngFor=\"let game of games\" src=\"{{ game.cover }}\">\n</div>\n<a [routerLink]=\"['/lists', list._id.toString()]\" style=\"color: black\">\n  <h3>{{ list.title }}</h3>\n</a>\n<div class=\"attribution\">\n  <p>\n    <a [routerLink]=\"['/', list?.user?.username]\"><app-avatar [avatar]=\"list?.user?.avatar\" [height]=\"'25px'\" style=\"margin-right: 5px;\"></app-avatar></a>\n    <a [routerLink]=\"['/', list?.user?.username]\" style=\"color: black;\"><strong class=\"user\"> {{ list.user.username }}</strong></a>\n    <button style=\"padding: 0; border: none; background: none\" (click)=\"toggleLike()\" [disabled]=\"!authService.loggedIn() || (list?.user._id === authService?.user?._id)\">\n      <i class=\"fa fa-heart fa-1\" [ngClass]=\"{ toggled: like }\"> {{ list.likesCount }}</i>\n    </button>\n    <span class=\"comment-data\"><i class=\"fa fa-comment fa-1\"> {{ list.comments.length }}</i></span>\n  </p>\n</div>\n<hr *ngIf=\"type !== 'large'\">"

/***/ }),

/***/ "./src/app/list/list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListComponent = (function () {
    function ListComponent(dataService, authService) {
        this.dataService = dataService;
        this.authService = authService;
        this.type = '';
        this.games = [];
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.games = this.list.games.slice(0, 5);
        if (this.authService.loggedIn()) {
            this.user = this.authService.user;
            this.dataService.getListLike(this.list._id, this.user._id)
                .subscribe(function (response) {
                if (response.success) {
                    _this.like = response.like;
                }
            });
        }
    };
    ListComponent.prototype.toggleLike = function () {
        var _this = this;
        if (!this.like) {
            this.dataService.addListLike(this.list._id, this.user._id)
                .subscribe(function (response) {
                if (response.success) {
                    _this.like = response.like;
                    _this.list.likesCount = _this.list.likesCount + 1;
                }
            });
        }
        else {
            this.dataService.deleteLike(this.like._id)
                .subscribe(function (response) {
                if (response.success) {
                    _this.like = undefined;
                    _this.list.likesCount = _this.list.likesCount - 1;
                }
            });
        }
    };
    return ListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ListComponent.prototype, "type", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ListComponent.prototype, "list", void 0);
ListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-list',
        template: __webpack_require__("./src/app/list/list.component.html"),
        styles: [__webpack_require__("./src/app/list/list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], ListComponent);

var _a, _b;
//# sourceMappingURL=list.component.js.map

/***/ }),

/***/ "./src/app/lists-feature/lists-feature.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/lists-feature/lists-feature.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-xs-12\">\n        <p class=\"component-label\">POPULAR LISTS <span class=\"pull-right\"><a routerLink=\"/lists/popular\">MORE</a></span></p>\n        <hr class=\"component-rule\">\n        <div class=\"row\">\n            <div class=\"col-xs-4\" *ngFor=\"let list of lists\">\n                <app-list [type]=\"'large'\" [list]=list></app-list>\n            </div>\n        </div>\n        \n    </div>\n</div>"

/***/ }),

/***/ "./src/app/lists-feature/lists-feature.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListsFeatureComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListsFeatureComponent = (function () {
    function ListsFeatureComponent(dataService) {
        this.dataService = dataService;
        this.lists = [];
    }
    ListsFeatureComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getLists().subscribe(function (response) {
            _this.lists = response.json().slice(0, 3);
            console.log(_this.lists);
        });
    };
    return ListsFeatureComponent;
}());
ListsFeatureComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-lists-feature',
        template: __webpack_require__("./src/app/lists-feature/lists-feature.component.html"),
        styles: [__webpack_require__("./src/app/lists-feature/lists-feature.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__data_service__["a" /* DataService */]) === "function" && _a || Object])
], ListsFeatureComponent);

var _a;
//# sourceMappingURL=lists-feature.component.js.map

/***/ }),

/***/ "./src/app/lists-list/lists-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".component-label {\n\tmargin-top: 20px;\n\tmargin-bottom: 0px;\n}\n\n.component-rule {\n\tmargin-top: 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/lists-list/lists-list.component.html":
/***/ (function(module, exports) {

module.exports = "<app-list *ngFor=\"let list of lists\" [list]=list></app-list>\n\n"

/***/ }),

/***/ "./src/app/lists-list/lists-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListsListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListsListComponent = (function () {
    function ListsListComponent(dataService) {
        this.dataService = dataService;
    }
    ListsListComponent.prototype.ngOnInit = function () {
    };
    return ListsListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Array)
], ListsListComponent.prototype, "lists", void 0);
ListsListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-lists-list',
        template: __webpack_require__("./src/app/lists-list/lists-list.component.html"),
        styles: [__webpack_require__("./src/app/lists-list/lists-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__data_service__["a" /* DataService */]) === "function" && _a || Object])
], ListsListComponent);

var _a;
//# sourceMappingURL=lists-list.component.js.map

/***/ }),

/***/ "./src/app/lists-page/lists-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/lists-page/lists-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-xs-12\">\n      <p class=\"component-label\">LISTS</p>\n      <hr class=\"component-rule\">\n      <app-long-list *ngFor=\"let list of lists\" [list]=list></app-long-list>\n      <button class=\"btn btn-primary\" *ngIf=\"page > 1\" (click)=\"onPrevious()\">Previous</button>\n      <button class=\"btn btn-primary pull-right\" *ngIf=\"lists?.length === 10\" style=\"margin-right: 10px\" (click)=\"onNext()\">Next</button>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/lists-page/lists-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListsPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListsPageComponent = (function () {
    function ListsPageComponent(route, router) {
        this.route = route;
        this.router = router;
        this.page = 1;
    }
    ListsPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.lists = this.route.snapshot.data['lists'];
        this.route.params.subscribe(function (params) {
            if (params['page'] > 1) {
                _this.page = +params['page'];
            }
            _this.lists = _this.route.snapshot.data['lists'];
        });
    };
    ListsPageComponent.prototype.onNext = function () {
        if (this.page === 1) {
            this.router.navigate([(this.page + 1)], { relativeTo: this.route });
        }
        else {
            this.router.navigate(['../', this.page + 1], { relativeTo: this.route });
        }
    };
    ListsPageComponent.prototype.onPrevious = function () {
        if (this.page === 2) {
            console.log(this.page);
            this.router.navigate(['../'], { relativeTo: this.route });
        }
        else {
            this.router.navigate(['../', this.page - 1], { relativeTo: this.route });
        }
    };
    return ListsPageComponent;
}());
ListsPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-lists-page',
        template: __webpack_require__("./src/app/lists-page/lists-page.component.html"),
        styles: [__webpack_require__("./src/app/lists-page/lists-page.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _b || Object])
], ListsPageComponent);

var _a, _b;
//# sourceMappingURL=lists-page.component.js.map

/***/ }),

/***/ "./src/app/lists/lists.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".component-label {\n\tmargin-top: 20px;\n\tmargin-bottom: 0px;\n}\n\n.component-rule {\n\tmargin-top: 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/lists/lists.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 style=\"text-align: center; margin: 40px;\">Collect, curate, and share. Lists are the perfect way to group games.</h2>\n\n<app-lists-feature></app-lists-feature>\n\n<div class=\"row\">\n    <div class=\"col-xs-7\">\n        <p class=\"component-label\">RECENT LISTS <a class=\"pull-right\" routerLink=\"/lists/recent\">MORE</a></p>\n        <hr class=\"component-rule\">\n        <app-long-lists-list [lists]=\"lists.slice(5, 10)\"></app-long-lists-list>\n    </div>\n    <div class=\"col-xs-4 col-xs-offset-1\">\n        <p class=\"component-label\">STAFF PICKS</p>\n        <hr class=\"component-rule\">\n        <app-lists-list [lists]=\"lists.slice(0, 5)\"></app-lists-list>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/lists/lists.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListsComponent = (function () {
    function ListsComponent(dataService) {
        this.dataService = dataService;
        this.lists = [];
    }
    ListsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getLists().subscribe(function (response) {
            _this.lists = response.json();
        });
    };
    return ListsComponent;
}());
ListsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-lists',
        template: __webpack_require__("./src/app/lists/lists.component.html"),
        styles: [__webpack_require__("./src/app/lists/lists.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__data_service__["a" /* DataService */]) === "function" && _a || Object])
], ListsComponent);

var _a;
//# sourceMappingURL=lists.component.js.map

/***/ }),

/***/ "./src/app/listsbydate.resolve.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListsByDateResolve; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListsByDateResolve = (function () {
    function ListsByDateResolve(dataService) {
        this.dataService = dataService;
    }
    ListsByDateResolve.prototype.resolve = function (route) {
        console.log('Page is ', route.params['page']);
        return this.dataService.getRecentLists(route.params['page']);
    };
    return ListsByDateResolve;
}());
ListsByDateResolve = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__data_service__["a" /* DataService */]) === "function" && _a || Object])
], ListsByDateResolve);

var _a;
//# sourceMappingURL=listsbydate.resolve.js.map

/***/ }),

/***/ "./src/app/listsbypopularity.resolve.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListsByPopularityResolve; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListsByPopularityResolve = (function () {
    function ListsByPopularityResolve(dataService) {
        this.dataService = dataService;
    }
    ListsByPopularityResolve.prototype.resolve = function (route) {
        console.log('Page is ', route.params['page']);
        return this.dataService.getPopularLists(route.params['page']);
    };
    return ListsByPopularityResolve;
}());
ListsByPopularityResolve = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__data_service__["a" /* DataService */]) === "function" && _a || Object])
], ListsByPopularityResolve);

var _a;
//# sourceMappingURL=listsbypopularity.resolve.js.map

/***/ }),

/***/ "./src/app/log-list/log-list-item/log-list-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".rating i {\n\tfloat: left;\n    font-size: 2rem;\n}\n\n.rating {\n\tvertical-align: middle;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/log-list/log-list-item/log-list-item.component.html":
/***/ (function(module, exports) {

module.exports = "\n    <td class=\"calendar-date\">\n      <i class=\"fa fa-calendar-o fa-5x\" style=\"margin-right: -20px; margin-bottom: 10px;\"></i>\n      <span style=\"display: inline-block; font-size: 15px; position: relative; text-align: center; left: -34px;\" >\n        <p style=\"margin: 0 auto\">JUN</p>\n        <p style=\"margin: 0 auto\">2017</p>\n      </span>\n    </td>\n    <td class=\"calendar-day\" style=\"text-align: center\">\n      <span style=\"font-size: 35px; padding-top: 50px\">\n        10\n      </span>\n    </td>\n    <td class=\"game info\">\n      <div style=\"display: inline-block; margin-left: 20px; min-width: 450px\">\n        <img src=\"/assets/SOTC_thumb.png\" style=\"height: 50px; border-radius: 4px; margin: 10px 5px 10px 0\">\n        <h3 style=\"display: inline-block; vertical-align: middle; margin-top: 10px\">Shadow of the Colossus</h3>\n      </div>\n    </td>\n    <td class=\"release-date\">\n      <h3 style=\"text-align: center; vertical-align: middle; margin-top: 10px\">2005</h3>\n    </td>\n    <td class=\"rating\">\n      <span class=\"rating\" style=\"display: inline-block; margin-left: 20px; margin-right: 20px\">\n        <i class=\"fa fa-star fa-1\"></i>\n        <i class=\"fa fa-star fa-1\"></i>\n        <i class=\"fa fa-star fa-1\"></i>\n        <i class=\"fa fa-star fa-1\"></i>\n        <i class=\"fa fa-star fa-1\"></i>\n      </span>\n    </td>\n    <td class=\"like\">\n      <i class=\"fa fa-heart fa-1\" style=\"margin-left: 30px; margin-right: 30px\"></i>\n    </td>\n    <td class=\"replay\">\n        <i class=\"fa fa-refresh fa-1\" style=\"margin-left: 30px; margin-right: 30px;\"></i>\n    </td>\n    <td class=\"review\" style=\"min-width: 100px\">\n\n    </td>\n    <td class=\"edit\" style=\"min-width: 100px\">\n\n    </td>\n"

/***/ }),

/***/ "./src/app/log-list/log-list-item/log-list-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogListItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LogListItemComponent = (function () {
    function LogListItemComponent() {
    }
    LogListItemComponent.prototype.ngOnInit = function () {
    };
    return LogListItemComponent;
}());
LogListItemComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-log-list-item',
        template: __webpack_require__("./src/app/log-list/log-list-item/log-list-item.component.html"),
        styles: [__webpack_require__("./src/app/log-list/log-list-item/log-list-item.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LogListItemComponent);

//# sourceMappingURL=log-list-item.component.js.map

/***/ }),

/***/ "./src/app/log-list/log-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".rating i {\n\tfloat: left;\n    font-size: 2rem;\n}\n\n.rating {\n\tvertical-align: middle;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/log-list/log-list.component.html":
/***/ (function(module, exports) {

module.exports = "<table id=\"log-table\" *ngIf=\"logs\">\n    <thead>\n      <tr>\n        <th scope=\"col\">Month</th>\n        <th scope=\"col\" style=\"text-align: center\">Day</th>\n        <th scope=\"col\" style=\"padding-left: 20px\">Game</th>\n        <th scope=\"col\">Released</th>\n        <th scope=\"col\" style=\"padding-left: 20px\">Rating</th>\n        <th scope=\"col\" style=\"text-align: center\">Like</th>\n        <th scope=\"col\" style=\"text-align: center\">Replay</th>\n        <th scope=\"col\" style=\"text-align: center\">Review</th>\n        <th scope=\"col\" style=\"text-align: center\">Edit</th>\n      </tr>\n    </thead>\n    <tbody>\n      <!-- <tr class=\"log-entry-row\" style=\"border-bottom: 1px solid black\">\n        <app-log-list-item></app-log-list-item>\n      </tr> -->\n      <tr class=\"log-entry-row\" style=\"border-bottom: 1px solid black\" *ngFor=\"let log of logs; let i = index\">\n          <td class=\"calendar-date\">\n            <i class=\"fa fa-calendar-o fa-5x\" style=\"margin-right: -20px; margin-bottom: 10px;\"></i>\n            <span style=\"display: inline-block; font-size: 15px; position: relative; text-align: center; left: -34px;\" >\n              <p style=\"margin: 0 auto\">{{ log.logDate | date:'MMM' }}</p>\n              <p style=\"margin: 0 auto\">{{ log.logDate | date:'y' }}</p>\n            </span>\n          </td>\n          <td class=\"calendar-day\" style=\"text-align: center\">\n            <span style=\"font-size: 35px; padding-top: 50px\">\n              {{ log.logDate | date:'dd' }}\n            </span>\n          </td>\n          <td class=\"game info\">\n            <div style=\"display: inline-block; margin-left: 20px; min-width: 450px\">\n              <img [src]=\"log.game.thumbnail\" style=\"height: 50px; width: 38px; border-radius: 4px; margin: 10px 5px 10px 0\">\n              <h3 style=\"display: inline-block; vertical-align: middle; margin-top: 10px\">{{ log.game.name }}</h3>\n            </div>\n          </td>\n          <td class=\"release-date\">\n            <h3 style=\"text-align: center; vertical-align: middle; margin-top: 10px\">{{ log.game.release.year }}</h3>\n          </td>\n          <td class=\"rating\">\n            <app-star-rating [rating]=\"log.rating.toString()\" [game]=\"log.game\" [name]=\"log._id.toString()\" [disabled]=\"true\" style=\"display: inline-block; margin-left: 20px; margin-right: 20px; font-size: 8px;\"></app-star-rating>\n          </td>\n          <td class=\"like\">\n            <button (click)=\"toggleLike(log.game)\" style=\"background: none; border: none; margin: 0; padding: 0;\">\n              <i class=\"fa fa-heart fa-1\" style=\"margin-left: 30px; margin-right: 30px\"></i>\n            </button>\n          </td>\n          <td class=\"replay\">\n              <i *ngIf=\"log.replay\" class=\"fa fa-refresh fa-1\" style=\"margin-left: 30px; margin-right: 30px;\"></i>\n          </td>\n          <td class=\"review\" style=\"min-width: 100px\">\n            <a [routerLink]=\"['/games', log.game._id, 'reviews', log._id]\" *ngIf=\"log.text\">\n              <i *ngIf=\"log.text\" class=\"fa fa-align-left fa-1\" style=\"margin-left: 30px; margin-right: 30px\"></i>\n            </a>\n          </td>\n          <td class=\"edit\" style=\"min-width: 100px\">\n            <a [routerLink]=\"['/games', log.game._id, 'reviews', log._id, 'edit']\" style=\"color:black;\"><i class=\"fa fa-pencil fa-1\" style=\"margin-left: 30px; margin-right: 30px\"></i></a>\n          </td>\n        </tr>\n    </tbody>\n  </table>\n\n\n<!-- <table id=\"log-table\">\n  <thead>\n    <tr>\n      <th scope=\"col\">Month</th>\n      <th scope=\"col\" style=\"text-align: center\">Day</th>\n      <th scope=\"col\" style=\"padding-left: 20px\">Game</th>\n      <th scope=\"col\">Released</th>\n      <th scope=\"col\" style=\"padding-left: 20px\">Rating</th>\n      <th scope=\"col\" style=\"text-align: center\">Like</th>\n      <th scope=\"col\" style=\"text-align: center\">Replay</th>\n      <th scope=\"col\" style=\"text-align: center\">Review</th>\n      <th scope=\"col\" style=\"text-align: center\">Edit</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr class=\"log-entry-row\" style=\"border-bottom: 1px solid black\">\n      <td class=\"calendar-date\">\n        <i class=\"fa fa-calendar-o fa-5x\" style=\"margin-right: -20px; margin-bottom: 10px;\"></i>\n        <span style=\"display: inline-block; font-size: 15px; position: relative; text-align: center; left: -34px;\" >\n          <p style=\"margin: 0 auto\">JUN</p>\n          <p style=\"margin: 0 auto\">2017</p>\n        </span>\n      </td>\n      <td class=\"calendar-day\" style=\"text-align: center\">\n        <span style=\"font-size: 35px; padding-top: 50px\">\n          10\n        </span>\n      </td>\n      <td class=\"game info\">\n        <div style=\"display: inline-block; margin-left: 20px; min-width: 450px\">\n          <img src=\"/assets/SOTC_thumb.png\" style=\"height: 50px; border-radius: 4px; margin: 10px 5px 10px 0\">\n          <h3 style=\"display: inline-block; vertical-align: middle; margin-top: 10px\">Shadow of the Colossus</h3>\n        </div>\n      </td>\n      <td class=\"release-date\">\n        <h3 style=\"text-align: center; vertical-align: middle; margin-top: 10px\">2005</h3>\n      </td>\n      <td class=\"rating\">\n        <span class=\"rating\" style=\"display: inline-block; margin-left: 20px; margin-right: 20px\">\n          <i class=\"fa fa-star fa-1\"></i>\n          <i class=\"fa fa-star fa-1\"></i>\n          <i class=\"fa fa-star fa-1\"></i>\n          <i class=\"fa fa-star fa-1\"></i>\n          <i class=\"fa fa-star fa-1\"></i>\n        </span>\n      </td>\n      <td class=\"like\">\n        <i class=\"fa fa-heart fa-1\" style=\"margin-left: 30px; margin-right: 30px\"></i>\n      </td>\n      <td class=\"replay\">\n          <i class=\"fa fa-refresh fa-1\" style=\"margin-left: 30px; margin-right: 30px;\"></i>\n      </td>\n      <td class=\"review\" style=\"min-width: 100px\">\n\n      </td>\n      <td class=\"edit\" style=\"min-width: 100px\">\n\n      </td>\n    </tr>\n    <tr class=\"log-entry-row\" style=\"border-bottom: 1px solid black\">\n      <td class=\"calendar-date\">\n        \n      </td>\n      <td class=\"calendar-day\" style=\"text-align: center\">\n        <span style=\"font-size: 35px; padding-top: 50px\">\n          09\n        </span>\n      </td>\n      <td class=\"game info\">\n        <div style=\"display: inline-block; margin-left: 20px; min-width: 450px\">\n          <img src=\"/assets/SOTC_thumb.png\" style=\"height: 50px; border-radius: 4px; margin: 10px 5px 10px 0\">\n          <h3 style=\"display: inline-block; vertical-align: middle; margin-top: 10px\">Shadow of the Colossus</h3>\n        </div>\n      </td>\n      <td class=\"release-date\">\n        <h3 style=\"text-align: center; vertical-align: middle; margin-top: 10px\">2005</h3>\n      </td>\n      <td class=\"rating\">\n        <span class=\"rating\" style=\"display: inline-block; margin-left: 20px; margin-right: 20px\">\n          <i class=\"fa fa-star fa-1\"></i>\n          <i class=\"fa fa-star fa-1\"></i>\n          <i class=\"fa fa-star fa-1\"></i>\n          <i class=\"fa fa-star fa-1\"></i>\n          <i class=\"fa fa-star fa-1\"></i>\n        </span>\n      </td>\n      <td class=\"like\">\n        <i class=\"fa fa-heart fa-1\" style=\"margin-left: 30px; margin-right: 30px\"></i>\n      </td>\n      <td class=\"replay\">\n          <i class=\"fa fa-refresh fa-1\" style=\"margin-left: 30px; margin-right: 30px;\"></i>\n      </td>\n      <td class=\"review\" style=\"min-width: 100px\">\n\n      </td>\n      <td class=\"edit\" style=\"min-width: 100px\">\n\n      </td>\n    </tr>\n    <tr class=\"log-entry-row\" style=\"border-bottom: 1px solid black\">\n      <td class=\"calendar-date\">\n        \n      </td>\n      <td class=\"calendar-day\" style=\"text-align: center\">\n        <span style=\"font-size: 35px; padding-top: 50px\">\n          08\n        </span>\n      </td>\n      <td class=\"game info\">\n        <div style=\"display: inline-block; margin-left: 20px; min-width: 450px\">\n          <img src=\"/assets/SOTC_thumb.png\" style=\"height: 50px; border-radius: 4px; margin: 10px 5px 10px 0\">\n          <h3 style=\"display: inline-block; vertical-align: middle; margin-top: 10px\">Shadow of the Colossus</h3>\n        </div>\n      </td>\n      <td class=\"release-date\">\n        <h3 style=\"text-align: center; vertical-align: middle; margin-top: 10px\">2005</h3>\n      </td>\n      <td class=\"rating\">\n        <span class=\"rating\" style=\"display: inline-block; margin-left: 20px; margin-right: 20px\">\n          <i class=\"fa fa-star fa-1\"></i>\n          <i class=\"fa fa-star fa-1\"></i>\n          <i class=\"fa fa-star fa-1\"></i>\n          <i class=\"fa fa-star fa-1\"></i>\n          <i class=\"fa fa-star fa-1\"></i>\n        </span>\n      </td>\n      <td class=\"like\">\n        <i class=\"fa fa-heart fa-1\" style=\"margin-left: 30px; margin-right: 30px\"></i>\n      </td>\n      <td class=\"replay\">\n          <i class=\"fa fa-refresh fa-1\" style=\"margin-left: 30px; margin-right: 30px;\"></i>\n      </td>\n      <td class=\"review\" style=\"min-width: 100px\">\n\n      </td>\n      <td class=\"edit\" style=\"min-width: 100px\">\n\n      </td>\n    </tr>\n    <tr class=\"log-entry-row\" style=\"border-bottom: 1px solid black\">\n      <td class=\"calendar-date\">\n        \n      </td>\n      <td class=\"calendar-day\" style=\"text-align: center\">\n        <span style=\"font-size: 35px; padding-top: 50px\">\n          07\n        </span>\n      </td>\n      <td class=\"game info\">\n        <div style=\"display: inline-block; margin-left: 20px; min-width: 450px\">\n          <img src=\"/assets/SOTC_thumb.png\" style=\"height: 50px; border-radius: 4px; margin: 10px 5px 10px 0\">\n          <h3 style=\"display: inline-block; vertical-align: middle; margin-top: 10px\">Shadow of the Colossus</h3>\n        </div>\n      </td>\n      <td class=\"release-date\">\n        <h3 style=\"text-align: center; vertical-align: middle; margin-top: 10px\">2005</h3>\n      </td>\n      <td class=\"rating\">\n        <span class=\"rating\" style=\"display: inline-block; margin-left: 20px; margin-right: 20px\">\n          <i class=\"fa fa-star fa-1\"></i>\n          <i class=\"fa fa-star fa-1\"></i>\n          <i class=\"fa fa-star fa-1\"></i>\n          <i class=\"fa fa-star fa-1\"></i>\n          <i class=\"fa fa-star fa-1\"></i>\n        </span>\n      </td>\n      <td class=\"like\">\n        <i class=\"fa fa-heart fa-1\" style=\"margin-left: 30px; margin-right: 30px\"></i>\n      </td>\n      <td class=\"replay\">\n          <i class=\"fa fa-refresh fa-1\" style=\"margin-left: 30px; margin-right: 30px;\"></i>\n      </td>\n      <td class=\"review\" style=\"min-width: 100px\">\n\n      </td>\n      <td class=\"edit\" style=\"min-width: 100px\">\n\n      </td>\n    </tr>\n    <tr class=\"log-entry-row\" style=\"border-bottom: 1px solid black\">\n      <td class=\"calendar-date\">\n        \n      </td>\n      <td class=\"calendar-day\" style=\"text-align: center\">\n        <span style=\"font-size: 35px; padding-top: 50px\">\n          06\n        </span>\n      </td>\n      <td class=\"game info\">\n        <div style=\"display: inline-block; margin-left: 20px; min-width: 450px\">\n          <img src=\"/assets/SOTC_thumb.png\" style=\"height: 50px; border-radius: 4px; margin: 10px 5px 10px 0\">\n          <h3 style=\"display: inline-block; vertical-align: middle; margin-top: 10px\">Shadow of the Colossus</h3>\n        </div>\n      </td>\n      <td class=\"release-date\">\n        <h3 style=\"text-align: center; vertical-align: middle; margin-top: 10px\">2005</h3>\n      </td>\n      <td class=\"rating\">\n        <span class=\"rating\" style=\"display: inline-block; margin-left: 20px; margin-right: 20px\">\n          <i class=\"fa fa-star fa-1\"></i>\n          <i class=\"fa fa-star fa-1\"></i>\n          <i class=\"fa fa-star fa-1\"></i>\n          <i class=\"fa fa-star fa-1\"></i>\n          <i class=\"fa fa-star fa-1\"></i>\n        </span>\n      </td>\n      <td class=\"like\">\n        <i class=\"fa fa-heart fa-1\" style=\"margin-left: 30px; margin-right: 30px\"></i>\n      </td>\n      <td class=\"replay\">\n          <i class=\"fa fa-refresh fa-1\" style=\"margin-left: 30px; margin-right: 30px;\"></i>\n      </td>\n      <td class=\"review\" style=\"min-width: 100px\">\n\n      </td>\n      <td class=\"edit\" style=\"min-width: 100px\">\n\n      </td>\n    </tr>\n    <tr class=\"log-entry-row\" style=\"border-bottom: 1px solid black\">\n      <td class=\"calendar-date\">\n        \n      </td>\n      <td class=\"calendar-day\" style=\"text-align: center\">\n        <span style=\"font-size: 35px; padding-top: 50px\">\n          05\n        </span>\n      </td>\n      <td class=\"game info\">\n        <div style=\"display: inline-block; margin-left: 20px; min-width: 450px\">\n          <img src=\"/assets/SOTC_thumb.png\" style=\"height: 50px; border-radius: 4px; margin: 10px 5px 10px 0\">\n          <h3 style=\"display: inline-block; vertical-align: middle; margin-top: 10px\">Shadow of the Colossus</h3>\n        </div>\n      </td>\n      <td class=\"release-date\">\n        <h3 style=\"text-align: center; vertical-align: middle; margin-top: 10px\">2005</h3>\n      </td>\n      <td class=\"rating\">\n        <span class=\"rating\" style=\"display: inline-block; margin-left: 20px; margin-right: 20px\">\n          <i class=\"fa fa-star fa-1\"></i>\n          <i class=\"fa fa-star fa-1\"></i>\n          <i class=\"fa fa-star fa-1\"></i>\n          <i class=\"fa fa-star fa-1\"></i>\n          <i class=\"fa fa-star fa-1\"></i>\n        </span>\n      </td>\n      <td class=\"like\">\n        <i class=\"fa fa-heart fa-1\" style=\"margin-left: 30px; margin-right: 30px\"></i>\n      </td>\n      <td class=\"replay\">\n          <i class=\"fa fa-refresh fa-1\" style=\"margin-left: 30px; margin-right: 30px;\"></i>\n      </td>\n      <td class=\"review\" style=\"min-width: 100px\">\n\n      </td>\n      <td class=\"edit\" style=\"min-width: 100px\">\n\n      </td>\n    </tr>\n    <tr class=\"log-entry-row\" style=\"border-bottom: 1px solid black\">\n      <td class=\"calendar-date\">\n        \n      </td>\n      <td class=\"calendar-day\" style=\"text-align: center\">\n        <span style=\"font-size: 35px; padding-top: 50px\">\n          04\n        </span>\n      </td>\n      <td class=\"game info\">\n        <div style=\"display: inline-block; margin-left: 20px; min-width: 450px\">\n          <img src=\"/assets/SOTC_thumb.png\" style=\"height: 50px; border-radius: 4px; margin: 10px 5px 10px 0\">\n          <h3 style=\"display: inline-block; vertical-align: middle; margin-top: 10px\">Shadow of the Colossus</h3>\n        </div>\n      </td>\n      <td class=\"release-date\">\n        <h3 style=\"text-align: center; vertical-align: middle; margin-top: 10px\">2005</h3>\n      </td>\n      <td class=\"rating\">\n        <span class=\"rating\" style=\"display: inline-block; margin-left: 20px; margin-right: 20px\">\n          <i class=\"fa fa-star fa-1\"></i>\n          <i class=\"fa fa-star fa-1\"></i>\n          <i class=\"fa fa-star fa-1\"></i>\n          <i class=\"fa fa-star fa-1\"></i>\n          <i class=\"fa fa-star fa-1\"></i>\n        </span>\n      </td>\n      <td class=\"like\">\n        <i class=\"fa fa-heart fa-1\" style=\"margin-left: 30px; margin-right: 30px\"></i>\n      </td>\n      <td class=\"replay\">\n          <i class=\"fa fa-refresh fa-1\" style=\"margin-left: 30px; margin-right: 30px;\"></i>\n      </td>\n      <td class=\"review\" style=\"min-width: 100px\">\n\n      </td>\n      <td class=\"edit\" style=\"min-width: 100px\">\n\n      </td>\n    </tr>\n    <tr class=\"log-entry-row\" style=\"border-bottom: 1px solid black\">\n      <td class=\"calendar-date\">\n        \n      </td>\n      <td class=\"calendar-day\" style=\"text-align: center\">\n        <span style=\"font-size: 35px; padding-top: 50px\">\n          03\n        </span>\n      </td>\n      <td class=\"game info\">\n        <div style=\"display: inline-block; margin-left: 20px; min-width: 450px\">\n          <img src=\"/assets/SOTC_thumb.png\" style=\"height: 50px; border-radius: 4px; margin: 10px 5px 10px 0\">\n          <h3 style=\"display: inline-block; vertical-align: middle; margin-top: 10px\">Shadow of the Colossus</h3>\n        </div>\n      </td>\n      <td class=\"release-date\">\n        <h3 style=\"text-align: center; vertical-align: middle; margin-top: 10px\">2005</h3>\n      </td>\n      <td class=\"rating\">\n        <span class=\"rating\" style=\"display: inline-block; margin-left: 20px; margin-right: 20px\">\n          <i class=\"fa fa-star fa-1\"></i>\n          <i class=\"fa fa-star fa-1\"></i>\n          <i class=\"fa fa-star fa-1\"></i>\n          <i class=\"fa fa-star fa-1\"></i>\n          <i class=\"fa fa-star fa-1\"></i>\n        </span>\n      </td>\n      <td class=\"like\">\n        <i class=\"fa fa-heart fa-1\" style=\"margin-left: 30px; margin-right: 30px\"></i>\n      </td>\n      <td class=\"replay\">\n          <i class=\"fa fa-refresh fa-1\" style=\"margin-left: 30px; margin-right: 30px;\"></i>\n      </td>\n      <td class=\"review\" style=\"min-width: 100px\">\n\n      </td>\n      <td class=\"edit\" style=\"min-width: 100px\">\n\n      </td>\n    </tr>\n    <tr class=\"log-entry-row\" style=\"border-bottom: 1px solid black\">\n      <td class=\"calendar-date\">\n        \n      </td>\n      <td class=\"calendar-day\" style=\"text-align: center\">\n        <span style=\"font-size: 35px; padding-top: 50px\">\n          02\n        </span>\n      </td>\n      <td class=\"game info\">\n        <div style=\"display: inline-block; margin-left: 20px; min-width: 450px\">\n          <img src=\"/assets/SOTC_thumb.png\" style=\"height: 50px; border-radius: 4px; margin: 10px 5px 10px 0\">\n          <h3 style=\"display: inline-block; vertical-align: middle; margin-top: 10px\">Shadow of the Colossus</h3>\n        </div>\n      </td>\n      <td class=\"release-date\">\n        <h3 style=\"text-align: center; vertical-align: middle; margin-top: 10px\">2005</h3>\n      </td>\n      <td class=\"rating\">\n        <span class=\"rating\" style=\"display: inline-block; margin-left: 20px; margin-right: 20px\">\n          <i class=\"fa fa-star fa-1\"></i>\n          <i class=\"fa fa-star fa-1\"></i>\n          <i class=\"fa fa-star fa-1\"></i>\n          <i class=\"fa fa-star fa-1\"></i>\n          <i class=\"fa fa-star fa-1\"></i>\n        </span>\n      </td>\n      <td class=\"like\">\n        <i class=\"fa fa-heart fa-1\" style=\"margin-left: 30px; margin-right: 30px\"></i>\n      </td>\n      <td class=\"replay\">\n          <i class=\"fa fa-refresh fa-1\" style=\"margin-left: 30px; margin-right: 30px;\"></i>\n      </td>\n      <td class=\"review\" style=\"min-width: 100px\">\n\n      </td>\n      <td class=\"edit\" style=\"min-width: 100px\">\n\n      </td>\n    </tr>\n    <tr class=\"log-entry-row\" style=\"border-bottom: 1px solid black\">\n      <td class=\"calendar-date\">\n        \n      </td>\n      <td class=\"calendar-day\" style=\"text-align: center\">\n        <span style=\"font-size: 35px; padding-top: 50px\">\n          01\n        </span>\n      </td>\n      <td class=\"game info\">\n        <div style=\"display: inline-block; margin-left: 20px; min-width: 450px\">\n          <img src=\"/assets/SOTC_thumb.png\" style=\"height: 50px; border-radius: 4px; margin: 10px 5px 10px 0\">\n          <h3 style=\"display: inline-block; vertical-align: middle; margin-top: 10px\">Shadow of the Colossus</h3>\n        </div>\n      </td>\n      <td class=\"release-date\">\n        <h3 style=\"text-align: center; vertical-align: middle; margin-top: 10px\">2005</h3>\n      </td>\n      <td class=\"rating\">\n        <span class=\"rating\" style=\"display: inline-block; margin-left: 20px; margin-right: 20px\">\n          <i class=\"fa fa-star fa-1\"></i>\n          <i class=\"fa fa-star fa-1\"></i>\n          <i class=\"fa fa-star fa-1\"></i>\n          <i class=\"fa fa-star fa-1\"></i>\n          <i class=\"fa fa-star fa-1\"></i>\n        </span>\n      </td>\n      <td class=\"like\">\n        <i class=\"fa fa-heart fa-1\" style=\"margin-left: 30px; margin-right: 30px\"></i>\n      </td>\n      <td class=\"replay\">\n          <i class=\"fa fa-refresh fa-1\" style=\"margin-left: 30px; margin-right: 30px;\"></i>\n      </td>\n      <td class=\"review\" style=\"min-width: 100px\">\n\n      </td>\n      <td class=\"edit\" style=\"min-width: 100px\">\n\n      </td>\n    </tr>\n    <tr class=\"log-entry-row\" style=\"border-bottom: 1px solid black\">\n      <td class=\"calendar-date\">\n        <i class=\"fa fa-calendar-o fa-5x\" style=\"margin-right: -20px; margin-bottom: 10px;\"></i>\n        <span style=\"display: inline-block; font-size: 15px; position: relative; text-align: center; left: -34px;\" >\n          <p style=\"margin: 0 auto\">MAY</p>\n          <p style=\"margin: 0 auto\">2017</p>\n        </span>\n      </td>\n      <td class=\"calendar-day\" style=\"text-align: center\">\n        <span style=\"font-size: 35px; padding-top: 50px\">\n          31\n        </span>\n      </td>\n      <td class=\"game info\">\n        <div style=\"display: inline-block; margin-left: 20px; min-width: 450px\">\n          <img src=\"/assets/SOTC_thumb.png\" style=\"height: 50px; border-radius: 4px; margin: 10px 5px 10px 0\">\n          <h3 style=\"display: inline-block; vertical-align: middle; margin-top: 10px\">Shadow of the Colossus</h3>\n        </div>\n      </td>\n      <td class=\"release-date\">\n        <h3 style=\"text-align: center; vertical-align: middle; margin-top: 10px\">2005</h3>\n      </td>\n      <td class=\"rating\">\n        <span class=\"rating\" style=\"display: inline-block; margin-left: 20px; margin-right: 20px\">\n          <i class=\"fa fa-star fa-1\"></i>\n          <i class=\"fa fa-star fa-1\"></i>\n          <i class=\"fa fa-star fa-1\"></i>\n          <i class=\"fa fa-star fa-1\"></i>\n          <i class=\"fa fa-star fa-1\"></i>\n        </span>\n      </td>\n      <td class=\"like\">\n        <i class=\"fa fa-heart fa-1\" style=\"margin-left: 30px; margin-right: 30px\"></i>\n      </td>\n      <td class=\"replay\">\n          <i class=\"fa fa-refresh fa-1\" style=\"margin-left: 30px; margin-right: 30px;\"></i>\n      </td>\n      <td class=\"review\" style=\"min-width: 100px\">\n\n      </td>\n      <td class=\"edit\" style=\"min-width: 100px\">\n\n      </td>\n    </tr>\n  </tbody>\n</table> -->"

/***/ }),

/***/ "./src/app/log-list/log-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("./src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogListComponent = (function () {
    function LogListComponent(userService, dataService) {
        this.userService = userService;
        this.dataService = dataService;
    }
    LogListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.user.subscribe(function (user) {
            if (user) {
                _this.logs = user.log;
                console.log("log", _this.logs);
            }
        });
    };
    LogListComponent.prototype.toggleLike = function (game) {
    };
    return LogListComponent;
}());
LogListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-log-list',
        template: __webpack_require__("./src/app/log-list/log-list.component.html"),
        styles: [__webpack_require__("./src/app/log-list/log-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__data_service__["a" /* DataService */]) === "function" && _b || Object])
], LogListComponent);

var _a, _b;
//# sourceMappingURL=log-list.component.js.map

/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-8 col-md-offset-2\">\n    <h2>Sign In</h2>\n    <form (ngSubmit)=\"onLogin(f)\" #f=\"ngForm\">\n      <div class=\"form-group\">\n        <label for=\"username\">Username</label>\n        <input type=\"text\" id=\"username\" name=\"username\" ngModel class=\"form-control\" required>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" id=\"password\" name=\"password\" ngModel class=\"form-control\" required>\n      </div>\n      <button [disabled]=\"!f.valid\" type=\"submit\" class=\"btn btn-primary\">Register</button>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLogin = function (form) {
        var _this = this;
        var user = {
            username: form.value.username,
            password: form.value.password
        };
        this.authService.authenticateUser(user).subscribe(function (response) {
            if (response.success) {
                console.log('In login');
                // store user data
                _this.authService.storeUserData(response.token, response.user);
                // navigate to home
                _this.router.navigate(['/games']);
            }
            else {
                console.log('Something went wrong');
                // navigate to login
                _this.router.navigate(['/login']);
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("./src/app/login/login.component.html"),
        styles: [__webpack_require__("./src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "./src/app/long-list/long-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".list img {\n\tposition: relative;\n\tborder-radius: 4px;\n\tbox-shadow: 2px 0 7px #000;\n\tmargin-right: -25px;\n\theight: 118px;\n}\n\n.large .list img {\n\tmargin-right: -120px;\n\theight: 212px;\n}\n\n.list.long img {\n\tmargin-right: -55px;\n\theight: 118px;\n\twidth: 90px;\n}\n\n.list img:nth-of-type(1) {\n\tz-index: 15;\n}\n\n.list img:nth-of-type(2) {\n\tz-index: 14;\n}\n\n.list img:nth-of-type(3) {\n\tz-index: 13;\n}\n\n.list img:nth-of-type(4) {\n\tz-index: 12;\n}\n\n.list img:nth-of-type(5) {\n\tz-index: 11;\n}\n\n.attribution span {\n\tmargin-left: 5px;\n}\n\n.attribution img {\n\theight: 25px;\n\tmargin-right: 5px;\n}\n\n.attribution.comment-data {\n\tvertical-align: middle;\n}\n\n.user {\n\tvertical-align: middle;\n}\n\na:hover {\n\ttext-decoration: none;\n}\n\n.toggled {\n\tcolor: black;\n}\n\ni {\n\tcolor: gray;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/long-list/long-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-5\">\n    <div class=\"list long\">\n      <img *ngFor=\"let game of games\" src=\"{{ game.cover }}\">\n    </div>\n  </div>\n  <div class=\"col-xs-7\">\n    <span class=\"long-list-info\">\n      <a [routerLink]=\"['/lists', list._id]\" style=\"color: black\">\n        <h3>{{ list.title }}</h3>\n      </a>\n      <div class=\"attribution\">\n        <p>\n          <!-- <img src=\"/assets/profile.png\" class=\"img-circle\"> -->\n          <app-avatar [avatar]=\"list?.user?.avatar\" [height]=\"'25px'\" style=\"margin-right: 5px;\"></app-avatar>\n          <strong class=\"user\"> {{ list.user.name }}</strong>\n          <span style=\"vertical-align: middle\">{{ list.games.length }} Games </span>\n          <button style=\"padding: 0; border: none; background: none\" (click)=\"toggleLike()\" [disabled]=\"!authService.loggedIn() || (list?.user._id === authService.user._id)\">\n            <i class=\"fa fa-heart fa-1\" [ngClass]=\"{ toggled: like }\"> {{ list.likesCount }}</i>\n          </button>\n          <!-- <a href=\"#\" class=\"like\"><i class=\"fa fa-heart fa-1\"> {{ list.likes.length }}</i></a> -->\n          <span class=\"comment-data\"><i class=\"fa fa-comment fa-1\"> {{ list.comments.length }}</i></span>\n        </p>\n      </div>\n    </span>\n  </div>\n</div>\n<hr>\n"

/***/ }),

/***/ "./src/app/long-list/long-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LongListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LongListComponent = (function () {
    function LongListComponent(dataService, authService) {
        this.dataService = dataService;
        this.authService = authService;
        this.games = [];
    }
    LongListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.games = this.list.games.slice(0, 5);
        if (this.authService.loggedIn()) {
            this.dataService.getListLike(this.list._id, this.authService.user._id)
                .subscribe(function (response) {
                if (response.success) {
                    _this.like = response.like;
                }
            });
        }
    };
    LongListComponent.prototype.toggleLike = function () {
        var _this = this;
        if (!this.like) {
            this.dataService.addListLike(this.list._id, this.authService.user._id)
                .subscribe(function (response) {
                if (response.success) {
                    _this.like = response.like;
                    _this.list.likesCount = _this.list.likesCount + 1;
                }
            });
        }
        else {
            this.dataService.deleteLike(this.like._id)
                .subscribe(function (response) {
                if (response.success) {
                    _this.like = undefined;
                    _this.list.likesCount = _this.list.likesCount - 1;
                }
            });
        }
    };
    return LongListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
    __metadata("design:type", Object)
], LongListComponent.prototype, "list", void 0);
LongListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-long-list',
        template: __webpack_require__("./src/app/long-list/long-list.component.html"),
        styles: [__webpack_require__("./src/app/long-list/long-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], LongListComponent);

var _a, _b;
//# sourceMappingURL=long-list.component.js.map

/***/ }),

/***/ "./src/app/long-lists-list/long-lists-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".component-label {\n\tmargin-top: 20px;\n\tmargin-bottom: 0px;\n}\n\n.component-rule {\n\tmargin-top: 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/long-lists-list/long-lists-list.component.html":
/***/ (function(module, exports) {

module.exports = "<app-long-list *ngFor=\"let list of lists\" [list]=list></app-long-list>\n\n"

/***/ }),

/***/ "./src/app/long-lists-list/long-lists-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LongListsListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LongListsListComponent = (function () {
    function LongListsListComponent(dataService) {
        this.dataService = dataService;
    }
    LongListsListComponent.prototype.ngOnInit = function () {
    };
    return LongListsListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Array)
], LongListsListComponent.prototype, "lists", void 0);
LongListsListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-long-lists-list',
        template: __webpack_require__("./src/app/long-lists-list/long-lists-list.component.html"),
        styles: [__webpack_require__("./src/app/long-lists-list/long-lists-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__data_service__["a" /* DataService */]) === "function" && _a || Object])
], LongListsListComponent);

var _a;
//# sourceMappingURL=long-lists-list.component.js.map

/***/ }),

/***/ "./src/app/popular-gamers/popular-gamers.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "span {\n    display: inline-block;\n}\n\n.gamer {\n\tvertical-align: middle;\n}\n\n.gamer img {\n\theight: 50px;\n\tmargin-right: 15px;\n}\n\n.gamer h4 {\n\tmargin: 10px 0 0;\n}\n\n.gamer i {\n\tfloat: right;\n\tmargin: 8px 0 0;\n}\n\n.component-label {\n\tmargin-top: 20px;\n\tmargin-bottom: 0px;\n}\n\n.component-rule {\n\tmargin-top: 0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/popular-gamers/popular-gamers.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <p class=\"component-label\">POPULAR GAMERS</p>\n  <hr class=\"component-rule\">\n  <div class=\"gamer\">\n    <img src=\"/assets/profile.png\" class=\"img-circle\">\n    <span style=\"vertical-align: middle\">\n      <h4>David Scheuermann</h4>\n      <p>1,112 Films,4 Reviews, 3 Lists</p>\n    </span>\n    <i class=\"fa fa-plus-circle fa-3x\" style=\"color: grey\"></i>\n  </div>\n  <div class=\"gamer\">\n    <img src=\"/assets/profile.png\" class=\"img-circle\">\n    <span style=\"vertical-align: middle\">\n      <h4>David Scheuermann</h4>\n      <p>1,112 Films,4 Reviews, 3 Lists</p>\n    </span>\n    <i class=\"fa fa-plus-circle fa-3x\" style=\"color: grey\"></i>\n  </div>\n  <div class=\"gamer\">\n    <img src=\"/assets/profile.png\" class=\"img-circle\">\n    <span style=\"vertical-align: middle\">\n      <h4>David Scheuermann</h4>\n      <p>1,112 Films,4 Reviews, 3 Lists</p>\n    </span>\n    <i class=\"fa fa-plus-circle fa-3x\" style=\"color: grey\"></i>\n  </div>\n  <div class=\"gamer\">\n    <img src=\"/assets/profile.png\" class=\"img-circle\">\n    <span style=\"vertical-align: middle\">\n      <h4>David Scheuermann</h4>\n      <p>1,112 Films,4 Reviews, 3 Lists</p>\n    </span>\n    <i class=\"fa fa-plus-circle fa-3x\" style=\"color: grey\"></i>\n  </div>\n  <div class=\"gamer\">\n    <img src=\"/assets/profile.png\" class=\"img-circle\">\n    <span style=\"vertical-align: middle\">\n      <h4>David Scheuermann</h4>\n      <p>1,112 Films,4 Reviews, 3 Lists</p>\n    </span>\n    <i class=\"fa fa-plus-circle fa-3x\" style=\"color: grey\"></i>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/popular-gamers/popular-gamers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopularGamersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PopularGamersComponent = (function () {
    function PopularGamersComponent() {
    }
    PopularGamersComponent.prototype.ngOnInit = function () {
    };
    return PopularGamersComponent;
}());
PopularGamersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-popular-gamers',
        template: __webpack_require__("./src/app/popular-gamers/popular-gamers.component.html"),
        styles: [__webpack_require__("./src/app/popular-gamers/popular-gamers.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PopularGamersComponent);

//# sourceMappingURL=popular-gamers.component.js.map

/***/ }),

/***/ "./src/app/popular-games/popular-games.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".popular .col-xs-3 {\n    max-height: 390px;\n}\n\n.row.equal {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    display: -webkit-flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n}\n\n.row.equal .thumbnail {\n    height: 100%;\n    padding: 1px;\n}\n\n.row.equal .thumbnail > img {\n    height: 100%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/popular-games/popular-games.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row equal popular\">\n  <div class=\"col-xs-3\" *ngFor=\"let game of games\">\n    <a [routerLink]=\"['/games', game.id]\" class=\"thumbnail\">\n      <img src=\"{{ game.cover }}\">\n    </a>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/popular-games/popular-games.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopularGamesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PopularGamesComponent = (function () {
    function PopularGamesComponent(dataService) {
        this.dataService = dataService;
        // imageURLs: string[] = [
        //   "/assets/SOTC.png",
        //   "/assets/me.png",
        //   "/assets/hl2.png",
        //   "/assets/journey.png"
        // ];
        this.games = [];
    }
    PopularGamesComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.dataService.getGames().subscribe(
        //   (response) => {
        //     // console.log(response.json());
        //     const list = response.json();
        //     // console.log(list);
        //     const random = this.randomize(list);
        //     random.forEach(
        //       (game) => {
        //         this.games.push(game);
        //       }
        //     );
        //   },
        //   (error) => console.log(error)
        // );
        this.dataService.getPopularGames().subscribe(function (response) {
            if (response.success) {
                _this.games = response.games.splice(0, 4);
            }
        });
    };
    // randomize games
    PopularGamesComponent.prototype.randomize = function (games) {
        var list = [];
        var _loop_1 = function (i) {
            var index = this_1.getRandomInt(0, games.length);
            var game = games[index];
            // check if game with id is already in list
            var bool = list.find(function (element) {
                return element.id === game.id;
            });
            if (bool) {
                // console.log('Already listed');
                i--;
            }
            else {
                list.push(game);
            }
            out_i_1 = i;
        };
        var this_1 = this, out_i_1;
        for (var i = 0; i < 4; i++) {
            _loop_1(i);
            i = out_i_1;
        }
        // console.log('list is');
        // console.log(list);
        return list;
    };
    //random number
    PopularGamesComponent.prototype.getRandomInt = function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    };
    return PopularGamesComponent;
}());
PopularGamesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-popular-games',
        template: __webpack_require__("./src/app/popular-games/popular-games.component.html"),
        styles: [__webpack_require__("./src/app/popular-games/popular-games.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__data_service__["a" /* DataService */]) === "function" && _a || Object])
], PopularGamesComponent);

var _a;
//# sourceMappingURL=popular-games.component.js.map

/***/ }),

/***/ "./src/app/ratings-graph/ratings-graph.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "span {\n    display: inline-block;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/ratings-graph/ratings-graph.component.html":
/***/ (function(module, exports) {

module.exports = "<p class=\"component-label\">RATINGS</p>\n<hr class=\"component-rule\">\n<span class=\"rating-block\">\n  <span><i class=\"fa fa-star fa-1\"></i></span>\n  <span class=\"rating-graph\">\n    <span class=\"rating-bar\"  *ngFor=\"let rating of graph?.ratings\" style=\"width: 15px; height: 2px; background: black; margin: 0 1px; border-radius: 2px\" [style.height]=\"rating === 0 ? '2px' : ((rating/max) * 30) + 'px'\"></span>\n    <!-- <span class=\"rating-bar\" style=\"width: 15px; height: 4px; background: black; margin: 0 -1px; border-radius: 2px\"></span>\n    <span class=\"rating-bar\" style=\"width: 15px; height: 6px; background: black; margin: 0 -1px; border-radius: 2px\"></span>\n    <span class=\"rating-bar\" style=\"width: 15px; height: 19px; background: black; margin: 0 -1px; border-radius: 2px\"></span>\n    <span class=\"rating-bar\" style=\"width: 15px; height: 13px; background: black; margin: 0 -1px; border-radius: 2px\"></span>\n    <span class=\"rating-bar\" style=\"width: 15px; height: 11px; background: black; margin: 0 -1px; border-radius: 2px\"></span>\n    <span class=\"rating-bar\" style=\"width: 15px; height: 15px; background: black; margin: 0 -1px; border-radius: 2px\"></span>\n    <span class=\"rating-bar\" style=\"width: 15px; height: 22px; background: black; margin: 0 -1px; border-radius: 2px\"></span>\n    <span class=\"rating-bar\" style=\"width: 15px; height: 26px; background: black; margin: 0 -1px; border-radius: 2px\"></span>\n    <span class=\"rating-bar\" style=\"width: 15px; height: 30px; background: black; margin: 0 -1px; border-radius: 2px\"></span> -->\n  </span>\n  <span>\n    <p style=\"text-align: center; margin-bottom: 0\">{{ rating?.toFixed(1) }}</p>\n    <span class=\"rating\">\n      <i class=\"fa fa-star fa-1\"></i>\n      <i class=\"fa fa-star fa-1\"></i>\n      <i class=\"fa fa-star fa-1\"></i>\n      <i class=\"fa fa-star fa-1\"></i>\n      <i class=\"fa fa-star fa-1\"></i>\n    </span>\n  </span>\n</span>"

/***/ }),

/***/ "./src/app/ratings-graph/ratings-graph.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RatingsGraphComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RatingsGraphComponent = (function () {
    function RatingsGraphComponent() {
    }
    RatingsGraphComponent.prototype.ngOnInit = function () {
        this.maxIndex = this.graph.max;
        this.max = this.graph.ratings[this.maxIndex];
    };
    return RatingsGraphComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], RatingsGraphComponent.prototype, "graph", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], RatingsGraphComponent.prototype, "rating", void 0);
RatingsGraphComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-ratings-graph',
        template: __webpack_require__("./src/app/ratings-graph/ratings-graph.component.html"),
        styles: [__webpack_require__("./src/app/ratings-graph/ratings-graph.component.css")]
    }),
    __metadata("design:paramtypes", [])
], RatingsGraphComponent);

//# sourceMappingURL=ratings-graph.component.js.map

/***/ }),

/***/ "./src/app/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-8 col-md-offset-2\">\n    <h2>Register</h2>\n    <form (ngSubmit)=\"onRegister(f)\" #f=\"ngForm\">\n      <div class=\"form-group\">\n        <label for=\"username\">Username</label>\n        <input type=\"text\" id=\"username\" name=\"username\" ngModel class=\"form-control\" required>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"name\">Name</label>\n        <input type=\"text\" id=\"name\" name=\"name\" ngModel class=\"form-control\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"email\">Email</label>\n        <input type=\"email\" id=\"email\" name=\"email\" ngModel class=\"form-control\" required email>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" id=\"password\" name=\"password\" ngModel class=\"form-control\" required>\n      </div>\n      <div class=\"form-group\">\n          <label for=\"confirmPassword\">Confirm Password</label>\n          <input type=\"password\" id=\"confirmPassword\" name=\"confirmPassword\" ngModel class=\"form-control\" required>\n        </div>\n      <button [disabled]=\"!f.valid\" type=\"submit\" class=\"btn btn-primary\">Register</button>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__validate_service__ = __webpack_require__("./src/app/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    function RegisterComponent(authService, validateService, router) {
        this.authService = authService;
        this.validateService = validateService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegister = function (form) {
        var _this = this;
        var username = form.value.username;
        var name = form.value.name;
        var email = form.value.email;
        var password = form.value.password;
        var confirmPassword = form.value.confirmPassword;
        var user = {
            username: username,
            name: name,
            email: email,
            password: password,
            confirmPassword: confirmPassword
        };
        console.log(user);
        console.log(user.confirmPassword);
        if (!this.validateService.validateRegister(user)) {
            console.log('Invalid user');
            return false;
        }
        //Register User
        this.authService.registerUser(user).subscribe(function (response) {
            if (response.success) {
                console.log('Registered');
                _this.authService.storeUserData(response.token, response.user);
                _this.router.navigate(['/', user.username, 'edit']);
            }
            else {
                console.log('An error occurred');
                console.log(response.msg);
                _this.router.navigate(['/register']);
            }
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__("./src/app/register/register.component.html"),
        styles: [__webpack_require__("./src/app/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__validate_service__["a" /* ValidateService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], RegisterComponent);

var _a, _b, _c;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "./src/app/review-detail/review-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "i {\n\tcolor: grey;\n}\n\n.toggled {\n\tcolor: black;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/review-detail/review-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"review\">\n  <div class=\"col-xs-2\">\n    <img [src]=\"review.game.cover\" alt=\"\" style=\"height: 230px; width: 100%; border-radius: 4px;\">\n  </div>\n  <div class=\"col-xs-7\">\n    <div>\n      <app-avatar [avatar]=\"review?.user?.avatar\" [height]=\"'30px'\"></app-avatar>\n      <p style=\"display: inline-block\">Review by {{ review.user.username }}</p>\n    </div>\n    <hr style=\"margin-top: 0\">\n    <h1>{{ review.game.name }} <small>{{ review.game.release.year }}</small></h1>\n    <p style=\"white-space: pre-line;\">\n      {{ review.text }}\n    </p>\n    <button style=\"padding: 0; border: none; background: none;\" (click)=\"toggleLike()\" [disabled]=\"!authService.loggedIn() || (review?.user._id === authService.user._id)\">\n      <i class=\"fa fa-heart\" [ngClass]=\"{ toggled: like }\"></i>\n      Like Review\n    </button>\n    {{ review?.likesCount }}\n  </div>\n  <div class=\"col-xs-3\">\n    <app-game-dashboard [review]=\"review\" [game]=\"review.game\"></app-game-dashboard>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/review-detail/review-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReviewDetailComponent = (function () {
    function ReviewDetailComponent(route, dataService, authService) {
        var _this = this;
        this.route = route;
        this.dataService = dataService;
        this.authService = authService;
        this.route.params.subscribe(function (params) {
            _this.id = params['reviewId'];
        });
    }
    ReviewDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('in review detail');
        this.dataService.getReview(this.id).subscribe(function (response) {
            if (response.success) {
                _this.review = response.review;
                _this.dataService.getReviewLike(_this.id, _this.review.user._id)
                    .subscribe(function (likeResponse) {
                    if (likeResponse.success) {
                        _this.like = likeResponse.like;
                    }
                });
            }
        });
    };
    ReviewDetailComponent.prototype.toggleLike = function () {
        var _this = this;
        if (!this.like) {
            this.dataService.addReviewLike(this.review._id, this.authService.user._id)
                .subscribe(function (response) {
                if (response.success) {
                    _this.like = response.like;
                    _this.review.likesCount = _this.review.likesCount + 1;
                }
                else {
                    console.log(response.msg);
                }
            });
        }
        else {
            this.dataService.deleteLike(this.like._id)
                .subscribe(function (response) {
                if (response.success) {
                    _this.like = undefined;
                    _this.review.likesCount = _this.review.likesCount - 1;
                }
            });
        }
    };
    return ReviewDetailComponent;
}());
ReviewDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'app-review-detail',
        template: __webpack_require__("./src/app/review-detail/review-detail.component.html"),
        styles: [__webpack_require__("./src/app/review-detail/review-detail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__auth_service__["a" /* AuthService */]) === "function" && _c || Object])
], ReviewDetailComponent);

var _a, _b, _c;
//# sourceMappingURL=review-detail.component.js.map

/***/ }),

/***/ "./src/app/review-edit/review-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".rating {\n    margin: 0;\n}\n\ni {\n    color: grey;\n}\n\n.toggled {\n    color: black;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/review-edit/review-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"game\">\n  <div class=\"col-xs-3\">\n\t\t\t\t<img src=\"{{ game?.cover }}\" style=\"height: 333px; width: 100%\">\n  </div>\n  <div class=\"col-xs-9\">\n    <h1 style=\"margin-top: 0\">{{ game?.name }} <small>{{ game?.release.year }}</small></h1>\n    <form #f=\"ngForm\" (ngSubmit)=\"submit(f)\">\n      <!-- <my-date-picker name=\"date\" [(ngModel)]=\"date\" [options]=\"datePickerOptions\" style=\"display: block\"></my-date-picker> -->\n      <div style=\"display: block\">\n        <app-datepicker [date]=\"date\" (datePicked)=\"onDatePicked($event)\"></app-datepicker>\n      </div>\n      <div style=\"display: block\">\n        <app-star-rating style=\"display: inline-flex; position: relative; right: 9px\" [disabled]=\"false\" [game]=\"game\" [user]=\"user\" [rating]=\"rating.toString()\" [ratingObj]=\"ratingObj\" (rated)=\"onRated($event)\"></app-star-rating>\n        <button type=\"button\" style=\"padding: 0; border: none; background: none; position: relative; float: right\" (click)=\"toggleLike()\">\n          <i class=\"fa fa-heart fa-3x\" style=\"position: relative; float: right\" [ngClass]=\"{ toggled: like }\"></i>\n        </button>\n      </div>\n    \n      <div class=\"form-group\">\n        <label for=\"review\">Review: </label>\n        <textarea class=\"form-control\" id=\"review\" name=\"review\" rows=\"9\" [(ngModel)]=\"text\"></textarea>\n      </div>\n      \n      <button type=\"submit\" class=\"btn btn-primary pull-right\">SAVE</button>\n      <button type=\"button\" class=\"btn btn-warning pull-right\" style=\"margin-right: 10px;\" *ngIf=\"editMode\" (click)=\"onDelete()\">DELETE</button>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/review-edit/review-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ReviewEditComponent = (function () {
    function ReviewEditComponent(route, dataService, authService, http) {
        var _this = this;
        this.route = route;
        this.dataService = dataService;
        this.authService = authService;
        this.http = http;
        this.liked = false;
        this.rating = 0;
        this.datePickerOptions = {};
        this.editMode = false;
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.reviewId = params['reviewId'];
            _this.editMode = (params['reviewId'] != null);
        });
    }
    ReviewEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.authService.user;
        if (this.editMode) {
            this.dataService.getReview(this.reviewId)
                .subscribe(function (response) {
                if (response.success) {
                    console.log('Edit mode!');
                    _this.review = response.review;
                    _this.game = _this.review.game;
                    _this.rating = _this.review.rating;
                    console.log(_this.review);
                    _this.date = new Date(_this.review.logDate);
                    _this.logDate = _this.review.logDate;
                    _this.text = _this.review.text;
                    _this.dataService.getGameLike(_this.game._id, _this.user._id)
                        .subscribe(function (response) {
                        if (response.success) {
                            _this.like = response.like;
                        }
                    });
                }
            });
        }
        else {
            this.dataService.getGameById(this.id).subscribe(function (response) {
                _this.game = response.json();
                // get rating for game if it exists
                _this.dataService.getRating(_this.game._id, _this.user._id)
                    .subscribe(function (response) {
                    if (response.success) {
                        _this.ratingObj = response.rating;
                        _this.rating = _this.ratingObj.rating;
                    }
                });
                _this.dataService.getGameLike(_this.game._id, _this.user._id)
                    .subscribe(function (response) {
                    if (response.success) {
                        _this.like = response.like;
                    }
                });
            });
        }
    };
    ReviewEditComponent.prototype.toggleLike = function () {
        var _this = this;
        if (!this.like) {
            this.dataService.addGameLike(this.game._id, this.user._id)
                .subscribe(function (response) {
                if (response.success) {
                    _this.like = response.like;
                }
                else {
                    console.log(response.msg);
                }
            });
        }
        else {
            this.dataService.deleteLike(this.like._id)
                .subscribe(function (response) {
                if (response.success) {
                    _this.like = undefined;
                }
                else {
                    console.log(response.msg);
                }
            });
        }
    };
    ReviewEditComponent.prototype.submit = function (form) {
        console.log(this.rating);
        console.log(this.editMode);
        var body = {
            // user: this.user._id,
            game: this.game._id,
            rating: this.rating,
            text: form.value.review,
            logDate: this.logDate,
        };
        // const body = {
        //   review: review
        // };
        if (this.editMode) {
            // this.http.put('http://localhost:3000/reviews/' + this.reviewId, body)
            //   .map(response => response.json())
            this.dataService.updateReview(this.reviewId, body)
                .subscribe(function (response) {
                if (response.success) {
                    console.log(response.msg);
                }
            });
        }
        else {
            // this.http.post('http://localhost:3000/reviews', body)
            // .map(response => response.json())
            this.dataService.postReview(body)
                .subscribe(function (response) {
                console.log(response);
            });
        }
    };
    ReviewEditComponent.prototype.onRated = function (rating) {
        this.rating = +rating;
    };
    ReviewEditComponent.prototype.onDatePicked = function (date) {
        this.logDate = date;
        console.log(date);
    };
    ReviewEditComponent.prototype.onDelete = function () {
        // this.http.delete('http://localhost:3000/reviews/' + this.reviewId)
        //   .map(response => response.json())
        console.log('in delete');
        console.log('reviewid', this.reviewId);
        this.dataService.deleteReview(this.reviewId)
            .subscribe(function (response) {
            if (response.success) {
                console.log(response.msg);
            }
        });
    };
    return ReviewEditComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_core__["ViewChild"])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], ReviewEditComponent.prototype, "form", void 0);
ReviewEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
        selector: 'app-review-edit',
        template: __webpack_require__("./src/app/review-edit/review-edit.component.html"),
        styles: [__webpack_require__("./src/app/review-edit/review-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__data_service__["a" /* DataService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["Http"]) === "function" && _e || Object])
], ReviewEditComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=review-edit.component.js.map

/***/ }),

/***/ "./src/app/review-list/review-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".component-label {\n\tmargin-top: 20px;\n\tmargin-bottom: 0px;\n}\n\n.component-rule {\n\tmargin-top: 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/review-list/review-list.component.html":
/***/ (function(module, exports) {

module.exports = "<app-review *ngFor=\"let review of reviews\" [review]=review></app-review>"

/***/ }),

/***/ "./src/app/review-list/review-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReviewListComponent = (function () {
    function ReviewListComponent(dataService) {
        this.dataService = dataService;
    }
    ReviewListComponent.prototype.ngOnInit = function () {
        // this.dataService.getReviews().subscribe(
        //   (response) => {
        //     this.reviews = response.json();
        //   },
        //   (error) => console.log(error)
        // );
    };
    return ReviewListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Array)
], ReviewListComponent.prototype, "reviews", void 0);
ReviewListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-review-list',
        template: __webpack_require__("./src/app/review-list/review-list.component.html"),
        styles: [__webpack_require__("./src/app/review-list/review-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__data_service__["a" /* DataService */]) === "function" && _a || Object])
], ReviewListComponent);

var _a;
//# sourceMappingURL=review-list.component.js.map

/***/ }),

/***/ "./src/app/review/review.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".thumb {\n\theight: 118px;\n\twidth: 90px;\n\tborder-radius: 4px;\n}\n\nspan {\n    display: inline-block;\n}\n\n.attribution span {\n\tmargin-left: 5px;\n}\n\n.rating i {\n\tfloat: left;\n}\n\n.rating {\n\tvertical-align: middle;\n}\n\n.attribution img {\n\theight: 25px;\n\tmargin-right: 5px;\n}\n\n.attribution.comment-data {\n\tvertical-align: middle;\n}\n\n.user {\n\tvertical-align: middle;\n}\n\ni {\n\tcolor: gray;\n}\n\n.toggled {\n\tcolor: black;\n}\n\na {\n\tcolor: black;\n}\n\na:hover {\n\ttext-decoration: none;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/review/review.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-2\">\n    <a [routerLink]=\"['/games', game.id]\"><img class=\"thumb\" src=\"{{ game.thumbnail }}\"></a>\n  </div>\n  <div class=\"col-xs-10\">\n    <a [routerLink]=\"['/games', game._id, 'reviews', review._id]\"><h1>{{ game.name }} <small>{{ game.release.year }}</small></h1></a>\n    <div class=\"attribution\">\n      <p>\n        <!-- <img src=\"/assets/profile.png\" class=\"img-circle\"> -->\n        <a [routerLink]=\"['/', review?.user?.username]\"><app-avatar [avatar]=\"review?.user?.avatar\" [height]=\"'25px'\" style=\"margin-right: 5px;\"></app-avatar></a>\n        <a [routerLink]=\"['/', review?.user?.username]\"><strong class=\"user\">{{ review.user.username }}</strong></a>\n        <app-star-rating [name]=\"review._id.toString()\" [rating]=\"review.rating.toString()\" [disabled]=\"true\" style=\"display: inline-block; font-size: 8px; vertical-align: middle;\"></app-star-rating>\n        <span class=\"comment-data\"><i class=\"fa fa-comment fa-1\"> {{ review.comments.length }}</i></span>\n      </p>\n    </div>\n    <p style=\"white-space: pre-line;\">{{ review.text }}</p>\n    <button *ngIf=\"authService.loggedIn() && (authService.user._id !== review.user._id)\" style=\"background: none; border: none; margin: 0;\" [ngClass]=\"{ toggled: like }\" (click)=\"toggleLike()\">\n      <i class=\"fa fa-heart fa-1\" [ngClass]=\"{ toggled: like }\"></i> Like this review? {{ review.likesCount }} likes\n    </button>\n    <p *ngIf=\"!authService.loggedIn() || (authService.user._id === review.user._id)\"><i class=\"fa fa-heart fa-1 toggled\"></i> {{ review.likesCount }} Likes</p>\n  </div>\n</div>\n<hr>"

/***/ }),

/***/ "./src/app/review/review.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReviewComponent = (function () {
    function ReviewComponent(authService, dataService) {
        this.authService = authService;
        this.dataService = dataService;
        this.game = { name: '', release: {} };
    }
    ReviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.game = this.review.game;
        if (this.authService.loggedIn()) {
            this.dataService.getReviewLike(this.review._id, this.authService.user._id)
                .subscribe(function (response) {
                if (response.success) {
                    _this.like = response.like;
                }
            });
        }
    };
    ReviewComponent.prototype.toggleLike = function () {
        var _this = this;
        if (!this.like) {
            this.dataService.addReviewLike(this.review._id, this.authService.user._id)
                .subscribe(function (response) {
                if (response.success) {
                    _this.like = response.like;
                    _this.review.likesCount = _this.review.likesCount + 1;
                }
                else {
                    console.log(response.msg);
                }
            });
        }
        else {
            this.dataService.deleteLike(this.like._id)
                .subscribe(function (response) {
                if (response.success) {
                    _this.like = undefined;
                    _this.review.likesCount = _this.review.likesCount - 1;
                }
            });
        }
    };
    return ReviewComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ReviewComponent.prototype, "review", void 0);
ReviewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-review',
        template: __webpack_require__("./src/app/review/review.component.html"),
        styles: [__webpack_require__("./src/app/review/review.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__data_service__["a" /* DataService */]) === "function" && _b || Object])
], ReviewComponent);

var _a, _b;
//# sourceMappingURL=review.component.js.map

/***/ }),

/***/ "./src/app/reviews-page/reviews-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/reviews-page/reviews-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <p class=\"component-label\">REVIEWS</p>\n    <hr class=\"component-rule\">\n    <app-review *ngFor=\"let review of reviews\" [review]=review></app-review>\n    <button class=\"btn btn-primary\" *ngIf=\"page > 1\" (click)=\"onPrevious()\">Previous</button>\n    <button class=\"btn btn-primary pull-right\" *ngIf=\"reviews?.length === 10\" style=\"margin-right: 10px\" (click)=\"onNext()\">Next</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/reviews-page/reviews-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewsPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReviewsPageComponent = (function () {
    function ReviewsPageComponent(route, router) {
        this.route = route;
        this.router = router;
        this.page = 1;
    }
    ReviewsPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.reviews = this.route.snapshot.data['reviews'];
        console.log('Reviews', this.reviews);
        this.route.params.subscribe(function (params) {
            if (params['page'] > 1) {
                _this.page = +params['page'];
            }
        });
    };
    ReviewsPageComponent.prototype.onNext = function () {
        if (this.page === 1) {
            this.router.navigate([(this.page + 1)], { relativeTo: this.route });
        }
        else {
            this.router.navigate(['../', this.page + 1], { relativeTo: this.route });
        }
    };
    ReviewsPageComponent.prototype.onPrevious = function () {
        if (this.page === 2) {
            this.router.navigate(['../'], { relativeTo: this.route });
        }
        else {
            this.router.navigate(['../', this.page - 1], { relativeTo: this.route });
        }
    };
    return ReviewsPageComponent;
}());
ReviewsPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-reviews-page',
        template: __webpack_require__("./src/app/reviews-page/reviews-page.component.html"),
        styles: [__webpack_require__("./src/app/reviews-page/reviews-page.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _b || Object])
], ReviewsPageComponent);

var _a, _b;
//# sourceMappingURL=reviews-page.component.js.map

/***/ }),

/***/ "./src/app/reviewsbydate.resolve.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewsByDateResolve; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReviewsByDateResolve = (function () {
    function ReviewsByDateResolve(dataService) {
        this.dataService = dataService;
    }
    ReviewsByDateResolve.prototype.resolve = function (route) {
        console.log('Page is ', route.params['page']);
        return this.dataService.getRecentReviews(route.params['page']);
    };
    return ReviewsByDateResolve;
}());
ReviewsByDateResolve = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__data_service__["a" /* DataService */]) === "function" && _a || Object])
], ReviewsByDateResolve);

var _a;
//# sourceMappingURL=reviewsbydate.resolve.js.map

/***/ }),

/***/ "./src/app/reviewsbypopularity.resolve.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewsByPopularityResolve; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReviewsByPopularityResolve = (function () {
    function ReviewsByPopularityResolve(dataService) {
        this.dataService = dataService;
    }
    ReviewsByPopularityResolve.prototype.resolve = function (route) {
        console.log('Page is ', route.params['page']);
        return this.dataService.getPopularReviews(route.params['page']);
    };
    return ReviewsByPopularityResolve;
}());
ReviewsByPopularityResolve = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__data_service__["a" /* DataService */]) === "function" && _a || Object])
], ReviewsByPopularityResolve);

var _a;
//# sourceMappingURL=reviewsbypopularity.resolve.js.map

/***/ }),

/***/ "./src/app/search/search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <div>\n      <img src=\"/assets/SOTC.png\" alt=\"\" style=\"height: 118px; width: 90px;\">\n      <div style=\"display: inline-block\">\n        <h2 style=\"margin: 0\">Shadow of the Colossus <small>2005</small></h2>\n        <h3 style=\"margin: 0\">Team Ico - Sony Computer Entertainment</h3>\n      </div>\n    </div>\n    \n    <hr>\n    \n    <div>\n      <img src=\"/assets/SOTC.png\" alt=\"\" style=\"height: 118px; width: 90px;\">\n      <div style=\"display: inline-block\">\n        <h2 style=\"margin: 0\">Shadow of the Colossus <small>2005</small></h2>\n        <h3 style=\"margin: 0\">Team Ico - Sony Computer Entertainment</h3>\n      </div>\n    </div>\n   \n    <hr>\n\n    <div>\n      <img src=\"/assets/SOTC.png\" alt=\"\" style=\"height: 118px; width: 90px;\">\n      <div style=\"display: inline-block\">\n        <h2 style=\"margin: 0\">Shadow of the Colossus <small>2005</small></h2>\n        <h3 style=\"margin: 0\">Team Ico - Sony Computer Entertainment</h3>\n      </div>\n    </div>\n    <hr>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchComponent = (function () {
    function SearchComponent() {
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    return SearchComponent;
}());
SearchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-search',
        template: __webpack_require__("./src/app/search/search.component.html"),
        styles: [__webpack_require__("./src/app/search/search.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SearchComponent);

//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ "./src/app/staff-picks/staff-picks.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".staff-picks img {\n\twidth: 100%;\n\theight: 147px;\n\tborder-radius: 4px;\n    margin-bottom: 15px;\n}\n\n.component-label {\n\tmargin-top: 20px;\n\tmargin-bottom: 0px;\n}\n\n.component-rule {\n\tmargin-top: 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/staff-picks/staff-picks.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <p class=\"component-label\">STAFF PICKS</p>\n  <hr class=\"component-rule\">\n  <div class=\"row staff-picks\">\n    <div class=\"col-xs-4\" *ngFor=\"let game of games\">\n      <a [routerLink]=\"['/games', game.id]\">\n        <img src=\"{{ game.cover }}\">\n      </a>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/staff-picks/staff-picks.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaffPicksComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StaffPicksComponent = (function () {
    function StaffPicksComponent(dataService) {
        this.dataService = dataService;
        this.games = [];
    }
    StaffPicksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getStaffPicks().subscribe(function (response) {
            _this.games = response.json();
        });
    };
    return StaffPicksComponent;
}());
StaffPicksComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-staff-picks',
        template: __webpack_require__("./src/app/staff-picks/staff-picks.component.html"),
        styles: [__webpack_require__("./src/app/staff-picks/staff-picks.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__data_service__["a" /* DataService */]) === "function" && _a || Object])
], StaffPicksComponent);

var _a;
//# sourceMappingURL=staff-picks.component.js.map

/***/ }),

/***/ "./src/app/star-rating/star-rating.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css);", ""]);

// module
exports.push([module.i, "/****** Style Star Rating Widget *****/\n\n.rating { \n  border: none;\n   float: left; \n   /* margin: 0 52px; */\n}\n\n.rating > input { display: none; margin: 0 } \n.rating > label:before { \n  margin: 2px;\n  font-size: 2em;\n  font-family: FontAwesome;\n  display: inline-block;\n  content: \"\\F005\";\n}\n\n.rating > .half:before { \n  content: \"\\F089\";\n  position: absolute;\n}\n\n.delete {\n  color: white;\n}\n\n.delete:hover {\n  color: black;\n  cursor: pointer;\n}\n\n.rating > label { \n  color: #ddd; \n  float: right; \n}\n\n/***** CSS Magic to Highlight Stars on Hover *****/\n\n.rating > input:checked ~ label, /* show gold star when clicked */\n.rating:not(:checked):not(:disabled) > label:hover, /* hover current star */\n.rating:not(:checked):not(:disabled) > label:hover ~ label { color: #000000;  } /* hover previous stars in list */\n\n.rating > input:checked:not(:disabled) + label:hover, /* hover current star when changing rating */\n.rating > input:checked:not(:disabled) ~ label:hover,\n/* .rating > label:hover ~ input:checked:not(:disabled) ~ label,  lighten current selection  */\n.rating > input:checked:not(:disabled) ~ label:hover ~ label { color: grey;  } ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/star-rating/star-rating.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <span class=\"delete\" style=\"display: flex; position: absolute; left: 50px; top: 52px;\" (click)=\"onDelete()\">X</span> -->\n <span class=\"delete\" style=\"display: flex; padding-top: 10px\" (click)=\"onDelete()\" *ngIf=\"ratingObj\">X</span> \n<fieldset class=\"rating\" [disabled]=\"disabled\" [id]=\"name\" (change)=\"onChange(value)\">\n    <input type=\"radio\" id=\"star5\" [name]=\"name\" value=\"5\" [(ngModel)]=\"rating\"  [disabled]=\"disabled\"/><label class = \"full\" for=\"star5\" title=\"Awesome - 5 stars\"></label>\n    <input type=\"radio\" id=\"star4half\" [name]=\"name\" value=\"4.5\" [(ngModel)]=\"rating\"  [disabled]=\"disabled\"/><label class=\"half\" for=\"star4half\" title=\"Pretty good - 4.5 stars\"></label>\n    <input type=\"radio\" id=\"star4\" [name]=\"name\" value=\"4\" [(ngModel)]=\"rating\"  [disabled]=\"disabled\"/><label class = \"full\" for=\"star4\" title=\"Pretty good - 4 stars\"></label>\n    <input type=\"radio\" id=\"star3half\" [name]=\"name\" value=\"3.5\" [(ngModel)]=\"rating\"  [disabled]=\"disabled\"/><label class=\"half\" for=\"star3half\" title=\"Meh - 3.5 stars\"></label>\n    <input type=\"radio\" id=\"star3\" [name]=\"name\" value=\"3\" [(ngModel)]=\"rating\"  [disabled]=\"disabled\"/><label class = \"full\" for=\"star3\" title=\"Meh - 3 stars\"></label>\n    <input type=\"radio\" id=\"star2half\" [name]=\"name\" value=\"2.5\" [(ngModel)]=\"rating\"  [disabled]=\"disabled\"/><label class=\"half\" for=\"star2half\" title=\"Kinda bad - 2.5 stars\"></label>\n    <input type=\"radio\" id=\"star2\" [name]=\"name\" value=\"2\" [(ngModel)]=\"rating\"  [disabled]=\"disabled\"/><label class = \"full\" for=\"star2\" title=\"Kinda bad - 2 stars\"></label>\n    <input type=\"radio\" id=\"star1half\" [name]=\"name\" value=\"1.5\" [(ngModel)]=\"rating\"  [disabled]=\"disabled\"/><label class=\"half\" for=\"star1half\" title=\"Meh - 1.5 stars\"></label>\n    <input type=\"radio\" id=\"star1\" [name]=\"name\" value=\"1\" [(ngModel)]=\"rating\"  [disabled]=\"disabled\"/><label class = \"full\" for=\"star1\" title=\"Sucks big time - 1 star\"></label>\n    <input type=\"radio\" id=\"starhalf\" [name]=\"name\" value=\".5\" [(ngModel)]=\"rating\"  [disabled]=\"disabled\"/><label class=\"half\" for=\"starhalf\" title=\"Sucks big time - 0.5 stars\"></label>\n</fieldset> "

/***/ }),

/***/ "./src/app/star-rating/star-rating.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StarRatingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StarRatingComponent = (function () {
    function StarRatingComponent(authService, http, dataService) {
        this.authService = authService;
        this.http = http;
        this.dataService = dataService;
        this.disabled = false;
        this.rated = new __WEBPACK_IMPORTED_MODULE_3__angular_core__["EventEmitter"]();
    }
    StarRatingComponent.prototype.ngOnInit = function () {
        this.user = this.authService.user;
    };
    StarRatingComponent.prototype.onChange = function (value) {
        var _this = this;
        //rating object {user (ObjectId), rating(Number), date(when)} ? is date necessary
        this.dataService.postRating(this.user._id, this.game._id, +this.rating)
            .subscribe(function (response) {
            if (response.success) {
                _this.ratingObj = response.rating;
                _this.rated.emit(_this.rating);
            }
            else {
                console.log('Reponse error', response.msg);
                _this.rating = "0";
            }
        }, function (error) {
            console.log(error);
            _this.rating = "0";
        });
    };
    StarRatingComponent.prototype.onDelete = function () {
        var _this = this;
        // delete rating
        this.dataService.deleteRating(this.ratingObj._id)
            .subscribe(function (response) {
            if (response.success) {
                _this.ratingObj = undefined;
                _this.rating = "0";
            }
            else {
                console.log(response.msg);
            }
        });
    };
    return StarRatingComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])(),
    __metadata("design:type", Object)
], StarRatingComponent.prototype, "rating", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])(),
    __metadata("design:type", Object)
], StarRatingComponent.prototype, "disabled", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])(),
    __metadata("design:type", Object)
], StarRatingComponent.prototype, "game", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])(),
    __metadata("design:type", Object)
], StarRatingComponent.prototype, "user", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Output"])(),
    __metadata("design:type", Object)
], StarRatingComponent.prototype, "rated", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])(),
    __metadata("design:type", Object)
], StarRatingComponent.prototype, "ratingObj", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])(),
    __metadata("design:type", Object)
], StarRatingComponent.prototype, "name", void 0);
StarRatingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'app-star-rating',
        template: __webpack_require__("./src/app/star-rating/star-rating.component.html"),
        styles: [__webpack_require__("./src/app/star-rating/star-rating.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__data_service__["a" /* DataService */]) === "function" && _c || Object])
], StarRatingComponent);

var _a, _b, _c;
//# sourceMappingURL=star-rating.component.js.map

/***/ }),

/***/ "./src/app/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = (function () {
    function UserService(dataService) {
        this.dataService = dataService;
        this.user = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["BehaviorSubject"](undefined);
    }
    UserService.prototype.getUser = function () {
        return this.user.asObservable();
    };
    UserService.prototype.refresh = function (username) {
        var _this = this;
        this.dataService.getUserByUsername(username).subscribe(function (response) {
            if (response.success) {
                // let userObj = response.user;
                // let popularReviews = userObj.reviews.sort()
                _this.user.next(response.user);
            }
        });
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "./src/app/user/avatar/avatar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/user/avatar/avatar.component.html":
/***/ (function(module, exports) {

module.exports = "<img *ngIf=\"avatar\" src=\"{{ 'http://localhost:3000/avatars/' +  avatar + '#' + date}}\" alt=\"\" class=\"img-circle\" [style.height]=\"height\" [style.width]=\"height\">\n<i *ngIf=\"!avatar\" class=\"fa fa-user-circle\" [style.font-size]=\"height\"></i>\n"

/***/ }),

/***/ "./src/app/user/avatar/avatar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvatarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AvatarComponent = (function () {
    function AvatarComponent() {
    }
    AvatarComponent.prototype.ngOnInit = function () {
    };
    return AvatarComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], AvatarComponent.prototype, "avatar", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], AvatarComponent.prototype, "height", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], AvatarComponent.prototype, "date", void 0);
AvatarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-avatar',
        template: __webpack_require__("./src/app/user/avatar/avatar.component.html"),
        styles: [__webpack_require__("./src/app/user/avatar/avatar.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AvatarComponent);

//# sourceMappingURL=avatar.component.js.map

/***/ }),

/***/ "./src/app/user/backlog/backlog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img {\n    width: 105px;\n    height: 145px;\n    border-radius: 4px;\n    margin: 5px 5px 5px 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/user/backlog/backlog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"backlog\">\n  <div class=\"col-xs-12\">\n      <a *ngFor=\"let obj of backlog.slice(start, start+50)\" [routerLink]=\"['/games', obj.game.id]\">\n        <img [src]=\"obj.game.cover\">\n      </a>\n      <button class=\"btn btn-primary\" *ngIf=\"page > 1\" (click)=\"onPrevious()\">Previous</button>\n      <button class=\"btn btn-primary pull-right\" *ngIf=\"backlog?.slice(start, start + 50).length === 50\" style=\"margin-right: 10px\" (click)=\"onNext()\">Next</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/user/backlog/backlog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("./src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BacklogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BacklogComponent = (function () {
    function BacklogComponent(userService, route, router) {
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.page = 1;
        this.start = 0;
    }
    BacklogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.user.subscribe(function (user) {
            if (user) {
                _this.backlog = user.backlog;
                _this.route.params.subscribe(function (params) {
                    if (params['page'] > 1) {
                        _this.page = +params['page'];
                        _this.start = (_this.page - 1) * 10;
                    }
                    console.log(_this.backlog);
                });
            }
        });
    };
    return BacklogComponent;
}());
BacklogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-backlog',
        template: __webpack_require__("./src/app/user/backlog/backlog.component.html"),
        styles: [__webpack_require__("./src/app/user/backlog/backlog.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _c || Object])
], BacklogComponent);

var _a, _b, _c;
//# sourceMappingURL=backlog.component.js.map

/***/ }),

/***/ "./src/app/user/profile-edit/profile-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/user/profile-edit/profile-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <form action=\"\" (ngSubmit)=\"onSubmit(f)\" >\n  <div class=\"form-group\">\n      <label for=\"avatar\">BROWSE</label>\n      <input type=\"file\" name=\"avatar\" id=\"avatar\" class=\"form-control-file\" #f>\n      <br>\n      <button type=\"submit\" class=\"btn btn-primary\">SUBMIT</button>\n  </div>\n  \n</form> -->\n\n<form #f=\"ngForm\">\n  <div class=\"row\">\n    <div class=\"col-xs-6\">\n      <div class=\"form-group\">\n        <label for=\"username\">Username:</label>\n        <input class=\"form-control\" type=\"text\" name=\"username\" id=\"username\" [(ngModel)]=\"username\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"name\">Name:</label>\n        <input class=\"form-control\" type=\"text\" name=\"name\" id=\"name\" [(ngModel)]=\"name\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"email\">Email:</label>\n        <input class=\"form-control\" type=\"email\" name=\"email\" id=\"email\" [(ngModel)]=\"email\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"bio\">Bio:</label>\n        <textarea class=\"form-control\" class=\"form-control\" id=\"bio\" name=\"bio\" rows=\"9\" [(ngModel)]=\"bio\"></textarea>\n      </div>\n      <button type=\"submit\" (click)=\"onSubmit()\">SAVE</button>\n    </div>\n    <div class=\"col-xs-6\">\n      <div>\n          <app-avatar [avatar]=\"avatar\" [height]=\"'100px'\" style=\"display: inline-block;\" [date]=\"date\"></app-avatar>\n          <div style=\"display: inline-block\">\n            <h4>AVATAR</h4>\n            <p>Upload a picture to help friends identify your posts</p>\n          </div>\n      </div>\n      <div class=\"form-group\" style=\"margin-top: 10px;\">\n          <input type=\"file\" name=\"avatar\" id=\"avatar\" class=\"form-control-file\" (change)=\"onUpload()\" #file style=\"display: inline-block;\">\n          <button *ngIf=\"avatar\" style=\"display: inline-block\" (click)=\"onRemoveAvatar()\">Remove</button>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"search\">ADD A GAME</label>\n        <input type=\"text\" name=\"search\" (input)=\"onSearch(f)\" [(ngModel)]=\"search\" [attr.disabled]=\"favorites.length === 4 ? true : null\">\n        <ul class=\"list-group\" style=\"max-height: 200px;z-index: 1001;position: absolute;overflow: hidden;overflow-y: auto;\">\n          <li class=\"list-group-item\" *ngFor=\"let result of searchResults | async\" style=\"width: 300px; cursor: pointer\" (click)=\"onSelectedGame(result)\">{{ result.name }} <span *ngIf=\"result.release_dates\">({{ result.release_dates[0].y }})</span></li>\n        </ul>\n      </div>\n      <ul class=\"list-group\" dnd-sortable-container [sortableData]=\"favorites\">\n        <li *ngFor=\"let game of favorites; let i = index\" class=\"list-group-item\" dnd-sortable [sortableIndex]=\"i\">\n          <div>\n            <img src=\"{{ game.cover }}\" alt=\"\" style=\"display: inline-block; height: 70px; width: 55px; border-radius: 4px;\">\n            <h2 style=\"display: inline-block\">{{game.name}} <small>{{ game.release.year }}</small></h2>\n            <i class=\"fa fa-times fa-3x pull-right\" (click)=\"onRemove(i)\"></i>\n          </div>\n        </li>\n    </ul>\n    </div>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/user/profile-edit/profile-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_service__ = __webpack_require__("./src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProfileEditComponent = (function () {
    function ProfileEditComponent(http, authService, dataService, userService) {
        this.http = http;
        this.authService = authService;
        this.dataService = dataService;
        this.userService = userService;
        this.search = '';
        this.favorites = [];
        this.date = Date.now();
    }
    ProfileEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.user.subscribe(function (user) {
            if (user) {
                _this.username = user.username;
                _this.name = user.name;
                _this.email = user.email;
                _this.bio = user.bio;
                _this.favorites = user.favorites;
                _this.avatar = user.avatar;
                console.log(user);
                _this.user = user;
                console.log('This user is ', _this.user);
            }
        });
        // this.username = this.user.username;
        // this.name = this.user.name;
        // this.email = this.user.email;
        // this.bio = this.user.bio;
        // this.favorites = this.user.favorites;
        // this.avatar = this.user.avatar;
    };
    ProfileEditComponent.prototype.onSearch = function (form) {
        var query = form.value.search;
        if (query === '') {
            this.searchResults = null;
            return false;
        }
        var params = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["URLSearchParams"]();
        params.set('query', query);
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["RequestOptions"]();
        requestOptions.params = params;
        this.searchResults = this.http.get('/api/search', requestOptions).map(function (response) {
            return response.json().body;
        });
    };
    ProfileEditComponent.prototype.onSelectedGame = function (result) {
        var _this = this;
        //game is selected, then get from database and store database id in list
        console.log(result);
        this.searchResults = null;
        this.search = '';
        // get result id then get from data base and add result to list
        this.dataService.getGameByIGDBId(result.id)
            .subscribe(function (response) {
            _this.favorites.push(response.json());
        });
    };
    ProfileEditComponent.prototype.onRemove = function (index) {
        console.log('remove: ', index);
        this.favorites.splice(index, 1);
    };
    ProfileEditComponent.prototype.onRemoveAvatar = function () {
        // set avatar to undefined
        this.avatar = undefined;
        console.log(this.input.nativeElement);
        this.input.nativeElement.value = '';
        console.log(this.avatar);
        //set user avatar to undefined
    };
    ProfileEditComponent.prototype.onUpload = function () {
        var _this = this;
        console.log(this.input.nativeElement.files);
        var files = this.input.nativeElement.files;
        if (files && files[0]) {
            var formData = new FormData();
            formData.append('user', this.authService.user.username);
            formData.append('avatar', files[0]);
            var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["Headers"]();
            headers.append('Authorization', this.authService.authToken);
            this.http.post('/api/users/avatar', formData, { headers: headers })
                .map(function (response) { return response.json(); })
                .subscribe(function (response) {
                if (response.success) {
                    console.log(response.msg);
                    _this.avatar = response.avatar;
                    _this.date = Date.now();
                    console.log(_this.avatar);
                }
            });
        }
    };
    ProfileEditComponent.prototype.onSubmit = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["Headers"]();
        headers.append('Authorization', this.authService.authToken);
        // update user
        var body = {
            data: {
                username: this.username,
                name: this.name,
                email: this.email,
                bio: this.bio,
                avatar: this.avatar,
                favorites: this.favorites
            }
        };
        console.log(body);
        this.http.put('/api/users/' + this.user._id, body, { headers: headers })
            .map(function (response) { return response.json(); })
            .subscribe(function (response) {
            if (response.success) {
                // this.authService.storeUserData(this.authService.authToken, response.user);
                _this.user = response.user;
                console.log(_this.user);
                console.log(_this.authService.user);
            }
            else {
                console.log('Submit failed');
                console.log(response);
            }
        });
    };
    return ProfileEditComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_core__["ViewChild"])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], ProfileEditComponent.prototype, "form", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_core__["ViewChild"])('file'),
    __metadata("design:type", Object)
], ProfileEditComponent.prototype, "input", void 0);
ProfileEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
        selector: 'app-profile-edit',
        template: __webpack_require__("./src/app/user/profile-edit/profile-edit.component.html"),
        styles: [__webpack_require__("./src/app/user/profile-edit/profile-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__user_service__["a" /* UserService */]) === "function" && _e || Object])
], ProfileEditComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=profile-edit.component.js.map

/***/ }),

/***/ "./src/app/user/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row.equal {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    display: -webkit-flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n}\n\n.row.equal .thumbnail {\n    height: 100%;\n    padding: 1px;\n}\n\n.row.equal .thumbnail > img {\n    height: 100%;\n}\n\n.row.equal > .col-xs-3 {\n\tmax-height: 250px;\n}\n\n.component-label {\n\tmargin-top: 20px;\n\tmargin-bottom: 0px;\n}\n\n.component-rule {\n\tmargin-top: 0;\n}\n\n.list img {\n\tposition: relative;\n\tborder-radius: 4px;\n\tbox-shadow: 2px 0 7px #000;\n\tmargin-right: -25px;\n\theight: 118px;\n\twidth: 93px;\n}\n\n.list img:nth-of-type(1) {\n\tz-index: 15;\n}\n\n.list img:nth-of-type(2) {\n\tz-index: 14;\n}\n\n.list img:nth-of-type(3) {\n\tz-index: 13;\n}\n\n.list img:nth-of-type(4) {\n\tz-index: 12;\n}\n\n.list img:nth-of-type(5) {\n\tz-index: 11;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/user/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-7\">\n    <div class=\"row\">\n      <div class=\"col-xs-12\">\n        <p class=\"component-label\">FAVORITE GAMES</p>\n        <hr class=\"component-rule\">\n        <div class=\"row equal\">\n          <div class=\"col-xs-3\" *ngFor=\"let game of user?.favorites\">\n            <a href=\"#\" class=\"thumbnail\">\n              <img src=\"{{ game.cover }}\">\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n    \n    <div class=\"row\">\n      <div class=\"col-xs-12\">\n        <p class=\"component-label\">RECENT ACTIVITY</p>\n        <hr class=\"component-rule\">\n        <div class=\"row equal\">\n          <div class=\"col-xs-3\" *ngFor=\"let rating of user?.ratings.slice(0, 4)\">\n            <a href=\"#\" class=\"thumbnail\">\n              <img src=\"{{ rating.game.cover }}\">\n              <app-star-rating [rating]=\"rating.rating.toString()\" [disabled]=\"true\" style=\"font-size: 8px; display: inline-block; margin-bottom: 10px;\"></app-star-rating>\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n    \n    <div class=\"row\" style=\"margin-top: 20px;\">\n      <p class=\"component-label\">RECENT REVIEWS <span class=\"pull-right\"><a routerLink=\"reviews\">MORE</a></span></p>\n      <hr class=\"component-rule\">\n      <div class=\"col-xs-12\">\n          <app-review-list [reviews]=\"user?.reviews.slice(0, 3)\"></app-review-list>          \n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-xs-4 col-xs-offset-1\">\n    <div class=\"row\">\n      <p class=\"component-label\">BIO</p>\n      <hr class=\"component-rule\">\n      <p style=\"white-space: pre-line\">{{ user?.bio}}</p>\n    </div>\n\n    <div class=\"row\">\n      <p class=\"component-label\">BACKLOG</p>\n      <hr class=\"component-rule\">\n      <div class=\"list\">\n        <!-- <img src=\"/assets/SOTC_thumb.png\">\n        <img src=\"/assets/SOTC_thumb.png\">\n        <img src=\"/assets/SOTC_thumb.png\">\n        <img src=\"/assets/SOTC_thumb.png\">\n        <img src=\"/assets/SOTC_thumb.png\"> -->\n        <img class=\"large\" *ngFor=\"let item of user?.backlog.slice(0, 5)\" src=\"{{ item.game.cover }}\">\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <p class=\"component-label\">RECENT LISTS</p>\n      <hr class=\"component-rule\">\n      <app-lists-list [lists]=\"user?.lists.slice(0, 5)\"></app-lists-list>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/user/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_service__ = __webpack_require__("./src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileComponent = (function () {
    function ProfileComponent(userService) {
        this.userService = userService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.user.subscribe(function (user) {
            _this.user = user;
        });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__("./src/app/user/profile/profile.component.html"),
        styles: [__webpack_require__("./src/app/user/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__user_service__["a" /* UserService */]) === "function" && _a || Object])
], ProfileComponent);

var _a;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "./src/app/user/user-feature/user-feature-item/user-feature-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".favorites img{\n    height: 90px;\n    width: 70px;\n    border-radius: 4px;\n    margin: 2px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/user/user-feature/user-feature-item/user-feature-item.component.html":
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"['/', user?.username]\"><app-avatar [avatar]=\"user.avatar\" [height]=\"'200px'\"></app-avatar></a>  \n<a [routerLink]=\"['/', user?.username]\" style=\"color: black\"><strong style=\"display:block;\">{{user.username}}</strong></a>  \n<p><a [routerLink]=\"['/', user?.username, 'games']\" style=\"color: black; cursor: pointer\">{{ user.playedCount }} Games</a> <a [routerLink]=\"['/', user?.username, 'reviews']\" style=\"color: black; cursor: pointer\">{{ user.reviews.length }} Reviews</a></p>\n<div class=\"favorites\" style=\"display: inline-block\">\n  <a [routerLink]=\"['/games', favorite.id]\" *ngFor=\"let favorite of user.favorites.slice(0, 3)\"><img [src]=\"favorite.thumbnail\" alt=\"\" ></a>\n</div>\n"

/***/ }),

/***/ "./src/app/user/user-feature/user-feature-item/user-feature-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserFeatureItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserFeatureItemComponent = (function () {
    function UserFeatureItemComponent() {
    }
    UserFeatureItemComponent.prototype.ngOnInit = function () {
    };
    return UserFeatureItemComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], UserFeatureItemComponent.prototype, "user", void 0);
UserFeatureItemComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user-feature-item',
        template: __webpack_require__("./src/app/user/user-feature/user-feature-item/user-feature-item.component.html"),
        styles: [__webpack_require__("./src/app/user/user-feature/user-feature-item/user-feature-item.component.css")]
    }),
    __metadata("design:paramtypes", [])
], UserFeatureItemComponent);

//# sourceMappingURL=user-feature-item.component.js.map

/***/ }),

/***/ "./src/app/user/user-feature/user-feature.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".favorites img{\n    height: 90px;\n    width: 70px;\n    border-radius: 4px;\n    margin: 2px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/user/user-feature/user-feature.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <h3 style=\"text-align: center\">Video game lovers, critics, and friends — find popular contributors here</h3>\n  <hr>\n  <div class=\"col-xs-3\" style=\"text-align: center\" *ngFor=\"let user of users\">\n    <app-user-feature-item [user]=\"user\"></app-user-feature-item>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/user/user-feature/user-feature.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserFeatureComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserFeatureComponent = (function () {
    function UserFeatureComponent() {
    }
    UserFeatureComponent.prototype.ngOnInit = function () {
    };
    return UserFeatureComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], UserFeatureComponent.prototype, "users", void 0);
UserFeatureComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user-feature',
        template: __webpack_require__("./src/app/user/user-feature/user-feature.component.html"),
        styles: [__webpack_require__("./src/app/user/user-feature/user-feature.component.css")]
    }),
    __metadata("design:paramtypes", [])
], UserFeatureComponent);

//# sourceMappingURL=user-feature.component.js.map

/***/ }),

/***/ "./src/app/user/user-game-gallery/user-game-gallery.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img {\n    width: 105px;\n    height: 145px;\n    border-radius: 4px;\n    margin: 5px 5px 5px 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/user/user-game-gallery/user-game-gallery.component.html":
/***/ (function(module, exports) {

module.exports = "<p class=\"component-label\">RECENT REVIEWS</p>\n<hr class=\"component-rule\">\n<div class=\"row\" style=\"margin-bottom: 50px\">\n  <div class=\"col-xs-12\">\n    <a [routerLink]=\"['/games', play.game.id]\" *ngFor=\"let play of played?.slice(start, start+50)\">\n      <img src=\"{{ play.game.cover }}\" alt=\"\">\n    </a>\n    <button class=\"btn btn-primary\" *ngIf=\"page > 1\" (click)=\"onPrevious()\">Previous</button>\n    <button class=\"btn btn-primary pull-right\" *ngIf=\"played?.slice(start, start + 50).length === 50\" style=\"margin-right: 10px\" (click)=\"onNext()\">Next</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/user/user-game-gallery/user-game-gallery.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("./src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserGameGalleryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserGameGalleryComponent = (function () {
    function UserGameGalleryComponent(userService, route, router) {
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.page = 1;
        this.start = 0;
    }
    UserGameGalleryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.user.subscribe(function (user) {
            if (user) {
                _this.played = user.played;
                console.log(_this.played);
                _this.route.params.subscribe(function (params) {
                    if (params['page'] > 1) {
                        _this.page = +params['page'];
                        _this.start = (_this.page - 1) * 50;
                    }
                });
            }
        });
    };
    UserGameGalleryComponent.prototype.onNext = function () {
        if (this.page === 1) {
            this.router.navigate([(this.page + 1)], { relativeTo: this.route });
        }
        else {
            this.router.navigate(['../', this.page + 1], { relativeTo: this.route });
        }
    };
    UserGameGalleryComponent.prototype.onPrevious = function () {
        if (this.page === 2) {
            this.router.navigate(['../'], { relativeTo: this.route });
        }
        else {
            this.router.navigate(['../', this.page - 1], { relativeTo: this.route });
        }
    };
    return UserGameGalleryComponent;
}());
UserGameGalleryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-user-game-gallery',
        template: __webpack_require__("./src/app/user/user-game-gallery/user-game-gallery.component.html"),
        styles: [__webpack_require__("./src/app/user/user-game-gallery/user-game-gallery.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _c || Object])
], UserGameGalleryComponent);

var _a, _b, _c;
//# sourceMappingURL=user-game-gallery.component.js.map

/***/ }),

/***/ "./src/app/user/user-info/user-info.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".user-stats {\n\ttext-align: right;\n\tpadding-top: 40px;\n}\n\n.user-info {\n\tpadding-left: 10px;\n\tpadding-right: 10px;\n\tborder-right: 1px solid white;\n\tdisplay: inline-block;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/user/user-info/user-info.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row \">\n  <div class=\"col-xs-2\">\n    <!-- <img src=\"{{/assets/profile.png}}\" class=\"img-circle\" height=\"150px\"> -->\n    <app-avatar [avatar]=\"user?.avatar\" [height]=\"'150px'\"></app-avatar>\n  </div>\n  <div class=\"col-xs-4\" style=\"padding: 20px\">\n    <h3>{{ user?.name }}</h3>\n    <button class=\"btn btn-primary\" *ngIf=\"authService?.user?.username === user?.username\">EDIT PROFILE</button>\n  </div>\n  <div class=\"col-xs-5 col-xs-offset-1 pull-right user-stats\">\n    <div class=\"user-info\">\n      <h4>{{ user?.playedCount }}</h4>\n      <p>Games</p>\n    </div>\n    <div class=\"user-info\">\n      <h4>{{ user?.playedCount }}</h4>\n      <p>This Year</p>\n    </div>\n    <div class=\"user-info\">\n      <h4>{{ user?.lists.length }}</h4>\n      <p>Lists</p>\n    </div>\n    <div class=\"user-info\">\n      <h4>0</h4>\n      <p>Following</p>\n    </div>\n    <div class=\"user-info\">\n      <h4>0</h4>\n      <p>Followers</p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/user/user-info/user-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("./src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserInfoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserInfoComponent = (function () {
    function UserInfoComponent(userService, authService) {
        this.userService = userService;
        this.authService = authService;
    }
    UserInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUser().subscribe(function (user) {
            _this.user = user;
        });
    };
    return UserInfoComponent;
}());
UserInfoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-user-info',
        template: __webpack_require__("./src/app/user/user-info/user-info.component.html"),
        styles: [__webpack_require__("./src/app/user/user-info/user-info.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], UserInfoComponent);

var _a, _b;
//# sourceMappingURL=user-info.component.js.map

/***/ }),

/***/ "./src/app/user/user-list-mini/user-list-mini-item/user-list-mini-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "span {\n    display: inline-block;\n}\n\n.gamer {\n\tvertical-align: middle;\n}\n\n.gamer img {\n\theight: 50px;\n\tmargin-right: 15px;\n}\n\n.gamer h4 {\n\tmargin: 10px 0 0;\n}\n\n.gamer i {\n\tfloat: right;\n\tmargin: 8px 0 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/user/user-list-mini/user-list-mini-item/user-list-mini-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"gamer\">\n  <!-- <img src=\"/assets/profile.png\" class=\"img-circle\"> -->\n  <a [routerLink]=\"['/', user?.username]\"><app-avatar [avatar]=\"user?.avatar\" [height]=\"'50px'\"></app-avatar></a>\n  <span style=\"vertical-align: middle\">\n    <a [routerLink]=\"['/', user?.username]\" style=\"color: black;\"><h4>{{ user?.username }}</h4></a>  \n    <p><a [routerLink]=\"['/', user?.username, 'games']\" style=\"color: black;\">{{ user?.playedCount }} Games</a>, <a [routerLink]=\"['/', user?.username, 'reviews']\" style=\"color: black;\">{{ user?.reviews.length }} Reviews</a>, <a [routerLink]=\"['/', user?.username, 'lists']\" style=\"color: black;\">{{ user?.lists.length }} Lists</a></p>\n  </span>\n  <i class=\"fa fa-plus-circle fa-3x\" style=\"color: grey\"></i>\n</div>"

/***/ }),

/***/ "./src/app/user/user-list-mini/user-list-mini-item/user-list-mini-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserListMiniItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserListMiniItemComponent = (function () {
    function UserListMiniItemComponent() {
    }
    UserListMiniItemComponent.prototype.ngOnInit = function () {
    };
    return UserListMiniItemComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], UserListMiniItemComponent.prototype, "user", void 0);
UserListMiniItemComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user-list-mini-item',
        template: __webpack_require__("./src/app/user/user-list-mini/user-list-mini-item/user-list-mini-item.component.html"),
        styles: [__webpack_require__("./src/app/user/user-list-mini/user-list-mini-item/user-list-mini-item.component.css")]
    }),
    __metadata("design:paramtypes", [])
], UserListMiniItemComponent);

//# sourceMappingURL=user-list-mini-item.component.js.map

/***/ }),

/***/ "./src/app/user/user-list-mini/user-list-mini.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/user/user-list-mini/user-list-mini.component.html":
/***/ (function(module, exports) {

module.exports = "<p class=\"component-label\">POPULAR GAMERS</p>\n<hr class=\"component-rule\">\n<app-user-list-mini-item *ngFor=\"let user of users\" [user]=\"user\"></app-user-list-mini-item>"

/***/ }),

/***/ "./src/app/user/user-list-mini/user-list-mini.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserListMiniComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserListMiniComponent = (function () {
    function UserListMiniComponent() {
    }
    UserListMiniComponent.prototype.ngOnInit = function () {
    };
    return UserListMiniComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], UserListMiniComponent.prototype, "users", void 0);
UserListMiniComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user-list-mini',
        template: __webpack_require__("./src/app/user/user-list-mini/user-list-mini.component.html"),
        styles: [__webpack_require__("./src/app/user/user-list-mini/user-list-mini.component.css")]
    }),
    __metadata("design:paramtypes", [])
], UserListMiniComponent);

//# sourceMappingURL=user-list-mini.component.js.map

/***/ }),

/***/ "./src/app/user/user-list/user-list-item/user-list-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/user/user-list/user-list-item/user-list-item.component.html":
/***/ (function(module, exports) {

module.exports = "<hr>\n<div>\n  <!-- <img src=\"{{/assets/profile.png}}\" alt=\"\" style=\"height: 50px\" class=\"img-circle\"> -->\n  <a [routerLink]=\"['/', user?.username]\"><app-avatar [avatar]=\"user?.avatar\" [height]=\"'50px'\"></app-avatar></a>\n  <div style=\"margin-left: 5px; vertical-align: middle; display: inline-block\">\n    <a [routerLink]=\"['/', user?.username]\" style=\"color: black;\"><strong>{{ user?.username }}</strong></a>\n    <a [routerLink]=\"['/', user?.username, 'reviews']\" style=\"color: black;\"><p style=\"margin-bottom: 0\">{{ user?.reviews.length}} Reviews</p></a>\n  </div>\n  <div style=\"display: inline-block\" class=\"pull-right\">\n    <i class=\"fa fa-gamepad\" style=\"margin-left: 75px; font-size: 2em; vertical-align: super\"><span style=\"font-size: 12px; vertical-align: middle; margin-left: 5px\"><a [routerLink]=\"['/', user?.username, 'games']\" style=\"color: black;\">{{ user.playedCount }}</a></span></i>\n    <i class=\"fa fa-th-large\" style=\"margin-left: 75px; font-size: 2em; vertical-align: super\"><span style=\"font-size: 12px; vertical-align: middle; margin-left: 5px\"><a [routerLink]=\"['/', user?.username, 'lists']\" style=\"color: black;\">{{ user.lists.length }}</a></span></i>\n    <i class=\"fa fa-heart\" style=\"margin-left: 75px; font-size: 2em; vertical-align: super\"><span style=\"font-size: 12px; vertical-align: middle; margin-left: 5px\"><a style=\"color: black\">{{ user.gameLikesCount }}</a></span></i>\n    <button style=\"background: none; border: none; margin: 0;\" (click)=\"onFollow()\"><i class=\"fa fa-plus-circle fa-3x\" style=\"margin-left: 75px; color: grey\"></i></button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/user/user-list/user-list-item/user-list-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserListItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserListItemComponent = (function () {
    function UserListItemComponent() {
    }
    UserListItemComponent.prototype.ngOnInit = function () {
    };
    UserListItemComponent.prototype.onFollow = function () {
        console.log('Follow user:', this.user.username);
    };
    return UserListItemComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], UserListItemComponent.prototype, "user", void 0);
UserListItemComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user-list-item',
        template: __webpack_require__("./src/app/user/user-list/user-list-item/user-list-item.component.html"),
        styles: [__webpack_require__("./src/app/user/user-list/user-list-item/user-list-item.component.css")]
    }),
    __metadata("design:paramtypes", [])
], UserListItemComponent);

//# sourceMappingURL=user-list-item.component.js.map

/***/ }),

/***/ "./src/app/user/user-list/user-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/user/user-list/user-list.component.html":
/***/ (function(module, exports) {

module.exports = "<app-user-list-item *ngFor=\"let user of users\" [user]=\"user\"></app-user-list-item>\n\n"

/***/ }),

/***/ "./src/app/user/user-list/user-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserListComponent = (function () {
    function UserListComponent() {
    }
    UserListComponent.prototype.ngOnInit = function () {
    };
    return UserListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], UserListComponent.prototype, "users", void 0);
UserListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user-list',
        template: __webpack_require__("./src/app/user/user-list/user-list.component.html"),
        styles: [__webpack_require__("./src/app/user/user-list/user-list.component.css")]
    }),
    __metadata("design:paramtypes", [])
], UserListComponent);

//# sourceMappingURL=user-list.component.js.map

/***/ }),

/***/ "./src/app/user/user-lists/user-lists.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".component-label {\n\tmargin-top: 20px;\n\tmargin-bottom: 0px;\n}\n\n.component-rule {\n\tmargin-top: 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/user/user-lists/user-lists.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-9\">\n    <p class=\"component-label\">ALL LISTS</p>\n    <hr class=\"component-rule\">\n    <app-long-list *ngFor=\"let list of lists?.slice(start, start+10)\" [list]=list></app-long-list>\n    <button class=\"btn btn-primary\" *ngIf=\"page > 1\" (click)=\"onPrevious()\">Previous</button>\n    <button class=\"btn btn-primary pull-right\" *ngIf=\"lists?.slice(start, start+10).length === 10\" style=\"margin-right: 10px\" (click)=\"onNext()\">Next</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/user/user-lists/user-lists.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("./src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserListsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserListsComponent = (function () {
    function UserListsComponent(userService, route, router) {
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.page = 1;
        this.start = 0;
    }
    UserListsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.user.subscribe(function (user) {
            if (user) {
                _this.lists = user.lists;
                console.log(_this.lists);
                _this.route.params.subscribe(function (params) {
                    if (params['page'] > 1) {
                        _this.page = +params['page'];
                        console.log('Page', _this.page);
                        _this.start = (_this.page - 1) * 10;
                        console.log(_this.lists.slice(_this.start, _this.start + 10));
                    }
                });
                console.log('Otherwise', _this.page);
            }
        });
    };
    UserListsComponent.prototype.onNext = function () {
        if (this.page === 1) {
            this.router.navigate([(this.page + 1)], { relativeTo: this.route });
        }
        else {
            this.router.navigate(['../', this.page + 1], { relativeTo: this.route });
        }
    };
    UserListsComponent.prototype.onPrevious = function () {
        if (this.page === 2) {
            this.router.navigate(['../'], { relativeTo: this.route });
        }
        else {
            this.router.navigate(['../', this.page - 1], { relativeTo: this.route });
        }
    };
    return UserListsComponent;
}());
UserListsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-user-lists',
        template: __webpack_require__("./src/app/user/user-lists/user-lists.component.html"),
        styles: [__webpack_require__("./src/app/user/user-lists/user-lists.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _c || Object])
], UserListsComponent);

var _a, _b, _c;
//# sourceMappingURL=user-lists.component.js.map

/***/ }),

/***/ "./src/app/user/user-nav/user-nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/user/user-nav/user-nav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar\" style=\"display: flex\" *ngIf=\"user\">\n  <ul class=\"nav navbar-nav navbar-center profile-nav\" style=\"margin: 0 auto\">\n    <li>\n      <a [routerLink]=\"['/', user?.username]\">Profile</a>\n    </li>\n    <!-- <li>\n      <a>Activity</a>\n    </li> -->\n    <li>\n      <a routerLink=\"games\">Games</a>\n    </li>\n    <li>\n      <a routerLink=\"log\">Log</a>\n    </li>\n    <li>\n      <a routerLink=\"reviews\">Reviews</a>\n    </li>\n    <li>\n      <a routerLink=\"lists\">Lists</a>\n    </li>\n    <li>\n      <a routerLink=\"backlog\">Backlog</a>\n    </li>\n    <li>\n      <a href=\"\">Network</a>\n    </li>\n  </ul>\n</nav>"

/***/ }),

/***/ "./src/app/user/user-nav/user-nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_service__ = __webpack_require__("./src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserNavComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserNavComponent = (function () {
    function UserNavComponent(userService) {
        this.userService = userService;
    }
    UserNavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.user.subscribe(function (user) {
            _this.user = user;
        });
    };
    return UserNavComponent;
}());
UserNavComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-user-nav',
        template: __webpack_require__("./src/app/user/user-nav/user-nav.component.html"),
        styles: [__webpack_require__("./src/app/user/user-nav/user-nav.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__user_service__["a" /* UserService */]) === "function" && _a || Object])
], UserNavComponent);

var _a;
//# sourceMappingURL=user-nav.component.js.map

/***/ }),

/***/ "./src/app/user/user-reviews/user-reviews.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/user/user-reviews/user-reviews.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-9\">\n    <p class=\"component-label\">ALL REVIEWS</p>\n    <hr class=\"component-rule\">\n    <app-review *ngFor=\"let review of reviews?.slice(start, start+10)\" [review]=review></app-review>\n    <button class=\"btn btn-primary\" *ngIf=\"page > 1\" (click)=\"onPrevious()\">Previous</button>\n    <button class=\"btn btn-primary pull-right\" *ngIf=\"review?.slice(start, start+10).length === 10\" style=\"margin-right: 10px\" (click)=\"onNext()\">Next</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/user/user-reviews/user-reviews.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("./src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserReviewsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserReviewsComponent = (function () {
    function UserReviewsComponent(userService, route, router) {
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.page = 1;
        this.start = 0;
    }
    UserReviewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.user.subscribe(function (user) {
            if (user) {
                _this.reviews = user.reviews;
                _this.route.params.subscribe(function (params) {
                    if (params['page'] > 1) {
                        _this.page = +params['page'];
                        _this.start = (_this.page - 1) * 10;
                    }
                });
            }
        });
    };
    UserReviewsComponent.prototype.onNext = function () {
        if (this.page === 1) {
            this.router.navigate([(this.page + 1)], { relativeTo: this.route });
        }
        else {
            this.router.navigate(['../', this.page + 1], { relativeTo: this.route });
        }
    };
    UserReviewsComponent.prototype.onPrevious = function () {
        if (this.page === 2) {
            this.router.navigate(['../'], { relativeTo: this.route });
        }
        else {
            this.router.navigate(['../', this.page - 1], { relativeTo: this.route });
        }
    };
    return UserReviewsComponent;
}());
UserReviewsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-user-reviews',
        template: __webpack_require__("./src/app/user/user-reviews/user-reviews.component.html"),
        styles: [__webpack_require__("./src/app/user/user-reviews/user-reviews.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _c || Object])
], UserReviewsComponent);

var _a, _b, _c;
//# sourceMappingURL=user-reviews.component.js.map

/***/ }),

/***/ "./src/app/user/user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<app-user-info></app-user-info>\n<app-user-nav></app-user-nav>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("./src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserComponent = (function () {
    function UserComponent(authService, userService, route) {
        var _this = this;
        this.authService = authService;
        this.userService = userService;
        this.route = route;
        this.route.params.subscribe(function (params) {
            _this.username = params['username'];
            _this.userService.refresh(_this.username);
        });
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.user.subscribe(function (user) {
            _this.user = user;
            console.log('In subscription', _this.user);
        });
    };
    return UserComponent;
}());
UserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'app-user',
        template: __webpack_require__("./src/app/user/user.component.html"),
        styles: [__webpack_require__("./src/app/user/user.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], UserComponent);

var _a, _b, _c;
//# sourceMappingURL=user.component.js.map

/***/ }),

/***/ "./src/app/users/users.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".favorites img{\n    height: 90px;\n    width: 70px;\n    border-radius: 4px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/users/users.component.html":
/***/ (function(module, exports) {

module.exports = "<app-user-feature [users]=\"users?.slice(0, 4)\"></app-user-feature>\n\n<div class=\"row\">\n  <div class=\"col-xs-7\">\n    <app-user-list [users]=\"users\"></app-user-list>\n  </div>\n  <div class=\"col-xs-4 col-xs-offset-1\">\n    <app-user-list-mini [users]=\"users\"></app-user-list-mini>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/users/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsersComponent = (function () {
    function UsersComponent(dataService) {
        this.dataService = dataService;
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getUsers().subscribe(function (response) {
            if (response.success) {
                _this.users = response.users;
                console.log(_this.users);
            }
        });
    };
    return UsersComponent;
}());
UsersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-users',
        template: __webpack_require__("./src/app/users/users.component.html"),
        styles: [__webpack_require__("./src/app/users/users.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__data_service__["a" /* DataService */]) === "function" && _a || Object])
], UsersComponent);

var _a;
//# sourceMappingURL=users.component.js.map

/***/ }),

/***/ "./src/app/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    //must check if there are users with same email or username
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || !(this.validateEmail(user.email)) || !(this.confirmPassword(user.password, user.confirmPassword)) || user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService.prototype.confirmPassword = function (password, confirmPassword) {
        if (password === confirmPassword) {
            console.log('True');
            return true;
        }
        else {
            console.log('False');
            console.log('Password: ', password);
            console.log('Confirm Password ', confirmPassword);
            return false;
        }
    };
    return ValidateService;
}());
ValidateService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ValidateService);

//# sourceMappingURL=validate.service.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map