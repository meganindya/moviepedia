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

/***/ "./src/components/all-movies/all-movie-details/all-movie-details.component.css":
/*!*************************************************************************************!*\
  !*** ./src/components/all-movies/all-movie-details/all-movie-details.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .row {\n    position: relative;\n    top: -815px;\n} */\n\n.background {\n    position: absolute;\n    z-index: 0;\n    width: calc(100% + 30px);\n    margin-left: -15px;\n    height: calc(100vh - 56px);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n\n.container {\n    width: 850px;\n    height: calc(100vh - 56px);\n    margin-left: auto;\n    margin-right: auto;\n    display: grid;\n    align-items: center;\n    justify-content: center;\n    filter: alpha(opacity=90);\n    opacity: 0.9;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL2FsbC1tb3ZpZXMvYWxsLW1vdmllLWRldGFpbHMvYWxsLW1vdmllLWRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0lBR0k7O0FBRUo7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1Qiw2QkFBNkI7SUFDN0IsdUJBQXVCO0NBQzFCOztBQUVEO0lBQ0ksYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsd0JBQXdCO0lBQ3hCLDBCQUEwQjtJQUMxQixhQUFhO0NBQ2hCIiwiZmlsZSI6InNyYy9jb21wb25lbnRzL2FsbC1tb3ZpZXMvYWxsLW1vdmllLWRldGFpbHMvYWxsLW1vdmllLWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC5yb3cge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IC04MTVweDtcbn0gKi9cblxuLmJhY2tncm91bmQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAwO1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgKyAzMHB4KTtcbiAgICBtYXJnaW4tbGVmdDogLTE1cHg7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTZweCk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDg1MHB4O1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDU2cHgpO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTkwKTtcbiAgICBvcGFjaXR5OiAwLjk7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/components/all-movies/all-movie-details/all-movie-details.component.html":
/*!**************************************************************************************!*\
  !*** ./src/components/all-movies/all-movie-details/all-movie-details.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n    class=\"background\"\n    [ngStyle]=\"{\n        'background-image':\n            'url(https://image.tmdb.org/t/p/original/' +\n            movie.backdrop_path +\n            ')'\n    }\"\n></div>\n<div class=\"container\">\n    <div *ngIf=\"movie\">\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <div class=\"card\">\n                    <div class=\"card-header\">\n                        {{ movie.title }}\n                    </div>\n                    <div class=\"card-body\">\n                        <div class=\"row\">\n                            <div class=\"col-sm-5\">\n                                <img\n                                    src=\"https://image.tmdb.org/t/p/w500/{{\n                                        movie.poster_path\n                                    }}\"\n                                    class=\"img-fluid\"\n                                    alt=\"{{ movie.title }}\"\n                                />\n                            </div>\n                            <div class=\"col-sm-7\">\n                                <ul class=\"list-group\">\n                                    <li class=\"list-group-item\">\n                                        <strong>Release Date: </strong>\n                                        {{\n                                            movie.release_date\n                                                | date: 'dd-MM-yyyy'\n                                        }}\n                                    </li>\n                                    <li class=\"list-group-item\">\n                                        <strong>Tagline: </strong>\n                                        {{ movie.tagline }}\n                                    </li>\n                                    <li class=\"list-group-item\">\n                                        <strong>Summary: </strong>\n                                        {{ movie.overview }}\n                                    </li>\n                                    <li class=\"list-group-item\">\n                                        <strong>Runtime: </strong>\n                                        {{ movie.runtime }}\n                                    </li>\n                                    <li class=\"list-group-item\">\n                                        <strong>Budget: </strong>\n                                        {{ movie.budget }}\n                                    </li>\n                                    <li class=\"list-group-item\">\n                                        <strong>Vote Average: </strong>\n                                        {{ movie.vote }}\n                                    </li>\n                                    <li class=\"list-group-item\">\n                                        <strong>Genre: </strong>\n                                        <span\n                                            *ngFor=\"let genre of movie.genres\"\n                                            class=\"badge badge-primary mr-2\"\n                                        >\n                                            {{ genre.name }}\n                                        </span>\n                                    </li>\n                                    <li class=\"list-group-item\">\n                                        <a\n                                            href=\"{{ movie.homepage }}\"\n                                            target=\"_blank\"\n                                        >\n                                            Movie Homepage\n                                        </a>\n                                        <a\n                                            href=\"https://www.imdb.com/title/{{\n                                                movie.imdb_id\n                                            }}\"\n                                            target=\"_blank\"\n                                            class=\"btn btn-sm btn-info float-right\"\n                                        >\n                                            IMDB Link\n                                        </a>\n                                    </li>\n                                </ul>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <!-- /.card -->\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/components/all-movies/all-movie-details/all-movie-details.component.ts":
/*!************************************************************************************!*\
  !*** ./src/components/all-movies/all-movie-details/all-movie-details.component.ts ***!
  \************************************************************************************/
/*! exports provided: AllMovieDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllMovieDetailsComponent", function() { return AllMovieDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_all_movies_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/all-movies.service */ "./src/services/all-movies.service.ts");




var AllMovieDetailsComponent = /** @class */ (function () {
    function AllMovieDetailsComponent(router, allMovieService) {
        this.router = router;
        this.allMovieService = allMovieService;
    }
    AllMovieDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params.subscribe(function (params) {
            var id = params['movieID'];
            _this.allMovieService.getMovie(id).subscribe(function (data) {
                _this.movie = data;
            });
        });
    };
    AllMovieDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-all-movie-details',
            template: __webpack_require__(/*! ./all-movie-details.component.html */ "./src/components/all-movies/all-movie-details/all-movie-details.component.html"),
            styles: [__webpack_require__(/*! ./all-movie-details.component.css */ "./src/components/all-movies/all-movie-details/all-movie-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_all_movies_service__WEBPACK_IMPORTED_MODULE_3__["AllMoviesService"]])
    ], AllMovieDetailsComponent);
    return AllMovieDetailsComponent;
}());



/***/ }),

/***/ "./src/components/all-movies/all-movies.component.css":
/*!************************************************************!*\
  !*** ./src/components/all-movies/all-movies.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search-bar {\n    width: 70%;\n    margin: 2rem auto 4rem auto;\n}\n\n.search-bar button {\n    border-left: 1px solid lightgray;\n}\n\n.movie-type {\n    width: inherit;\n    margin-bottom: 1rem;\n    text-align: center;\n    color: white;\n}\n\n.movies {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    margin-bottom: 2rem;\n}\n\n.movies:first-of-type {\n    margin: 0;\n}\n\n.movies .movie {\n    position: relative;\n    text-align: center;\n    font-size: 1rem;\n}\n\n.movie {\n    width: 290px;\n    height: 737px;\n    margin: 1rem 0.625rem 2rem 0.625rem;\n}\n\n.card {\n    background-color: black;\n    color: white;\n}\n\n.card-header {\n    border: none;\n}\n\n.card-body {\n    position: relative;\n    padding: 0;\n    border-left: 1px solid #333;\n    border-right: 1px solid #333;\n}\n\n.card-body > h4 {\n    margin: 1.25rem 0.5rem 0.625rem 0.5rem;\n    text-align: center !important;\n    font-size: 1.125rem;\n    font-weight: 700 !important;\n}\n\n.movie-description {\n    width: 100%;\n    position: absolute;\n    bottom: 0;\n}\n\n.movie-description span {\n    display: block;\n    font-size: 0.875rem;\n    line-height: 1.25rem;\n}\n\n.movie-description span:last-of-type::after {\n    width: inherit;\n    height: 1px;\n    display: block;\n    content: '';\n    margin: 1.25rem 1.25rem 0 1.25rem;\n    background: white;\n}\n\n.movie-description > h5 {\n    margin: 1rem 0;\n}\n\n.card a {\n    border-radius: 0 0 0.25rem 0.25rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL2FsbC1tb3ZpZXMvYWxsLW1vdmllcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLDRCQUE0QjtDQUMvQjs7QUFFRDtJQUNJLGlDQUFpQztDQUNwQzs7QUFFRDtJQUNJLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLHdCQUF3QjtJQUN4QixvQkFBb0I7Q0FDdkI7O0FBRUQ7SUFDSSxVQUFVO0NBQ2I7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGdCQUFnQjtDQUNuQjs7QUFFRDtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2Qsb0NBQW9DO0NBQ3ZDOztBQUVEO0lBQ0ksd0JBQXdCO0lBQ3hCLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSxhQUFhO0NBQ2hCOztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCw0QkFBNEI7SUFDNUIsNkJBQTZCO0NBQ2hDOztBQUVEO0lBQ0ksdUNBQXVDO0lBQ3ZDLDhCQUE4QjtJQUM5QixvQkFBb0I7SUFDcEIsNEJBQTRCO0NBQy9COztBQUVEO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixVQUFVO0NBQ2I7O0FBRUQ7SUFDSSxlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLHFCQUFxQjtDQUN4Qjs7QUFFRDtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osZUFBZTtJQUNmLFlBQVk7SUFDWixrQ0FBa0M7SUFDbEMsa0JBQWtCO0NBQ3JCOztBQUVEO0lBQ0ksZUFBZTtDQUNsQjs7QUFFRDtJQUNJLG1DQUFtQztDQUN0QyIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9hbGwtbW92aWVzL2FsbC1tb3ZpZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2gtYmFyIHtcbiAgICB3aWR0aDogNzAlO1xuICAgIG1hcmdpbjogMnJlbSBhdXRvIDRyZW0gYXV0bztcbn1cblxuLnNlYXJjaC1iYXIgYnV0dG9uIHtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbn1cblxuLm1vdmllLXR5cGUge1xuICAgIHdpZHRoOiBpbmhlcml0O1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm1vdmllcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cblxuLm1vdmllczpmaXJzdC1vZi10eXBlIHtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5tb3ZpZXMgLm1vdmllIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLm1vdmllIHtcbiAgICB3aWR0aDogMjkwcHg7XG4gICAgaGVpZ2h0OiA3MzdweDtcbiAgICBtYXJnaW46IDFyZW0gMC42MjVyZW0gMnJlbSAwLjYyNXJlbTtcbn1cblxuLmNhcmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNhcmQtaGVhZGVyIHtcbiAgICBib3JkZXI6IG5vbmU7XG59XG5cbi5jYXJkLWJvZHkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzMzMztcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMzMzO1xufVxuXG4uY2FyZC1ib2R5ID4gaDQge1xuICAgIG1hcmdpbjogMS4yNXJlbSAwLjVyZW0gMC42MjVyZW0gMC41cmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xufVxuXG4ubW92aWUtZGVzY3JpcHRpb24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG59XG5cbi5tb3ZpZS1kZXNjcmlwdGlvbiBzcGFuIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI1cmVtO1xufVxuXG4ubW92aWUtZGVzY3JpcHRpb24gc3BhbjpsYXN0LW9mLXR5cGU6OmFmdGVyIHtcbiAgICB3aWR0aDogaW5oZXJpdDtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjb250ZW50OiAnJztcbiAgICBtYXJnaW46IDEuMjVyZW0gMS4yNXJlbSAwIDEuMjVyZW07XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi5tb3ZpZS1kZXNjcmlwdGlvbiA+IGg1IHtcbiAgICBtYXJnaW46IDFyZW0gMDtcbn1cblxuLmNhcmQgYSB7XG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDAuMjVyZW0gMC4yNXJlbTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/components/all-movies/all-movies.component.html":
/*!*************************************************************!*\
  !*** ./src/components/all-movies/all-movies.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css\">\n<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>\n<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js\"></script>-->\n\n<!-- Search Bar -->\n\n<form class=\"search-bar container\">\n    <div class=\"input-group input-group-md\">\n        <input\n            type=\"text\"\n            class=\"form-control\"\n            name=\"movie\"\n            placeholder=\"Search\"\n            [(ngModel)]=\"movie\"\n        />\n        <div class=\"input-group-append\">\n            <button\n                class=\"btn btn-light\"\n                type=\"submit\"\n                (click)=\"searchMovies()\"\n            >\n                <i class=\"fas fa-search\"></i>\n            </button>\n        </div>\n    </div>\n</form>\n\n<!--Searched Movies-->\n\n<div class=\"movies\">\n    <div *ngFor=\"let movie of search_result; let i = index\">\n        <div *ngIf=\"i < 15\">\n            <div class=\"card movie\">\n                <div class=\"card-header bg-dark text-white\">\n                    &nbsp;{{ movie.release_date | date: 'mediumDate' }}&nbsp;\n                </div>\n\n                <div class=\"card-body clearfix\">\n                    <img\n                        class=\"img-fluid\"\n                        src=\"https://image.tmdb.org/t/p/w500/{{\n                            movie.poster_path\n                        }}\"\n                        alt=\"{{ movie.original_title }}\"\n                        style=\"height: 460px\"\n                    />\n\n                    <h4>{{ movie.original_title }}</h4>\n\n                    <div class=\"movie-description\">\n                        <span\n                            >Popularity:\n                            {{ movie.popularity | number: '1.0-1' }}</span\n                        >\n                        <span>Vote count: {{ movie.vote_count }}</span>\n\n                        <h5>\n                            <i class=\"fas fa-star\"></i>&nbsp;&nbsp;{{\n                                movie.vote_average\n                            }}\n                        </h5>\n                    </div>\n                </div>\n\n                <a\n                    routerLink=\"/movie/{{ movie.id }}\"\n                    class=\"btn btn-block btn-outline-info\"\n                    >Movie Details</a\n                >\n            </div>\n        </div>\n    </div>\n</div>\n\n<!-- Popular Movies -->\n\n<div class=\"movie-type\">\n    <h1>Popular Movies</h1>\n</div>\n\n<div class=\"movies\">\n    <div *ngFor=\"let popular of popular_movies; let i = index\">\n        <div *ngIf=\"i < 15\">\n            <div class=\"card movie\">\n                <div class=\"card-header bg-dark text-white\">\n                    {{ popular.release_date | date: 'mediumDate' }}\n                </div>\n\n                <div class=\"card-body clearfix\">\n                    <img\n                        class=\"img-fluid\"\n                        src=\"https://image.tmdb.org/t/p/w500/{{\n                            popular.poster_path\n                        }}\"\n                        alt=\"{{ popular.original_title }}\"\n                        style=\"height: 460px\"\n                    />\n\n                    <h4>{{ popular.original_title }}</h4>\n\n                    <div class=\"movie-description\">\n                        <span\n                            >Popularity:\n                            {{ popular.popularity | number: '1.0-1' }}</span\n                        >\n                        <span>Vote count: {{ popular.vote_count }}</span>\n\n                        <h5>\n                            <i class=\"fas fa-star\"></i>&nbsp;&nbsp;{{\n                                popular.vote_average\n                            }}\n                        </h5>\n                    </div>\n                </div>\n\n                <a\n                    routerLink=\"/movie/{{ popular.id }}\"\n                    class=\"btn btn-block btn-outline-info\"\n                    >Movie Details</a\n                >\n            </div>\n        </div>\n    </div>\n</div>\n\n<!-- Upcoming Movies -->\n\n<div class=\"movie-type\">\n    <h1>Upcoming Movies</h1>\n</div>\n\n<div class=\"movies\">\n    <div *ngFor=\"let upcoming of upcoming_movies; let i = index\">\n        <div *ngIf=\"i < 15\">\n            <div class=\"card movie\">\n                <div class=\"card-header bg-dark text-white\">\n                    {{ upcoming.release_date | date: 'mediumDate' }}\n                </div>\n\n                <div class=\"card-body clearfix\">\n                    <img\n                        class=\"img-fluid\"\n                        src=\"https://image.tmdb.org/t/p/w500/{{\n                            upcoming.poster_path\n                        }}\"\n                        alt=\"{{ upcoming.original_title }}\"\n                        style=\"height: 460px\"\n                    />\n\n                    <h4>{{ upcoming.original_title }}</h4>\n\n                    <div class=\"movie-description\">\n                        <span\n                            >Popularity:\n                            {{ upcoming.popularity | number: '1.0-1' }}</span\n                        >\n                        <span>Vote count: {{ upcoming.vote_count }}</span>\n\n                        <h5>\n                            <i class=\"fas fa-star\"></i>&nbsp;&nbsp;{{\n                                upcoming.vote_average\n                            }}\n                        </h5>\n                    </div>\n                </div>\n\n                <a\n                    routerLink=\"/movie/{{ upcoming.id }}\"\n                    class=\"btn btn-block btn-outline-info\"\n                    >Movie Details</a\n                >\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/components/all-movies/all-movies.component.ts":
/*!***********************************************************!*\
  !*** ./src/components/all-movies/all-movies.component.ts ***!
  \***********************************************************/
/*! exports provided: AllMoviesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllMoviesComponent", function() { return AllMoviesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_all_movies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/all-movies.service */ "./src/services/all-movies.service.ts");



var AllMoviesComponent = /** @class */ (function () {
    function AllMoviesComponent(allMovieService) {
        var _this = this;
        this.allMovieService = allMovieService;
        this.allMovieService.getUpcomingMovies().subscribe(function (data) {
            _this.upcoming_movies = data['results'];
        });
        this.allMovieService.getPopularMovies().subscribe(function (data) {
            _this.popular_movies = data['results'];
        });
    }
    AllMoviesComponent.prototype.searchMovies = function () {
        var _this = this;
        this.allMovieService.searchMovie(this.movie).subscribe(function (data) {
            _this.search_result = data['results'];
        });
    };
    AllMoviesComponent.prototype.ngOnInit = function () { };
    AllMoviesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-all-movies',
            template: __webpack_require__(/*! ./all-movies.component.html */ "./src/components/all-movies/all-movies.component.html"),
            styles: [__webpack_require__(/*! ./all-movies.component.css */ "./src/components/all-movies/all-movies.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_all_movies_service__WEBPACK_IMPORTED_MODULE_2__["AllMoviesService"]])
    ], AllMoviesComponent);
    return AllMoviesComponent;
}());



/***/ }),

/***/ "./src/components/app-routing.module.ts":
/*!**********************************************!*\
  !*** ./src/components/app-routing.module.ts ***!
  \**********************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _movies_movies_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./movies/movies.component */ "./src/components/movies/movies.component.ts");
/* harmony import */ var _all_movies_all_movies_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./all-movies/all-movies.component */ "./src/components/all-movies/all-movies.component.ts");
/* harmony import */ var _movies_movies_detail_movies_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./movies/movies-detail/movies-detail.component */ "./src/components/movies/movies-detail/movies-detail.component.ts");
/* harmony import */ var _movies_movie_start_movie_start_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./movies/movie-start/movie-start.component */ "./src/components/movies/movie-start/movie-start.component.ts");
/* harmony import */ var _movies_movie_edit_movie_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./movies/movie-edit/movie-edit.component */ "./src/components/movies/movie-edit/movie-edit.component.ts");
/* harmony import */ var _all_movies_all_movie_details_all_movie_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./all-movies/all-movie-details/all-movie-details.component */ "./src/components/all-movies/all-movie-details/all-movie-details.component.ts");
/* harmony import */ var _people_people_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./people/people.component */ "./src/components/people/people.component.ts");
/* harmony import */ var _people_people_detail_people_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./people/people-detail/people-detail.component */ "./src/components/people/people-detail/people-detail.component.ts");











var appRoutes = [
    {
        path: 'movies',
        component: _movies_movies_component__WEBPACK_IMPORTED_MODULE_3__["MoviesComponent"],
        children: [
            { path: '', component: _movies_movie_start_movie_start_component__WEBPACK_IMPORTED_MODULE_6__["MovieStartComponent"] },
            { path: 'new', component: _movies_movie_edit_movie_edit_component__WEBPACK_IMPORTED_MODULE_7__["MovieEditComponent"] },
            { path: ':id', component: _movies_movies_detail_movies_detail_component__WEBPACK_IMPORTED_MODULE_5__["MoviesDetailComponent"] },
            { path: ':id/edit', component: _movies_movie_edit_movie_edit_component__WEBPACK_IMPORTED_MODULE_7__["MovieEditComponent"] }
        ]
    },
    { path: '', component: _all_movies_all_movies_component__WEBPACK_IMPORTED_MODULE_4__["AllMoviesComponent"] },
    { path: 'movie/:movieID', component: _all_movies_all_movie_details_all_movie_details_component__WEBPACK_IMPORTED_MODULE_8__["AllMovieDetailsComponent"] },
    { path: 'people', component: _people_people_component__WEBPACK_IMPORTED_MODULE_9__["PeopleComponent"] },
    { path: 'people/:peopleID', component: _people_people_detail_people_detail_component__WEBPACK_IMPORTED_MODULE_10__["PeopleDetailComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/components/app.component.css":
/*!******************************************!*\
  !*** ./src/components/app.component.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background {\n    background-color: black;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL2FwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksd0JBQXdCO0NBQzNCIiwiZmlsZSI6InNyYy9jb21wb25lbnRzL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuIl19 */"

/***/ }),

/***/ "./src/components/app.component.html":
/*!*******************************************!*\
  !*** ./src/components/app.component.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header (featureSelected)=\"onNavigate($event)\"></app-header>\n\n<div class=\"container-fluid background\">\n    <div class=\"row no-gutters\">\n        <div class=\"col-md-12\">\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/components/app.component.ts":
/*!*****************************************!*\
  !*** ./src/components/app.component.ts ***!
  \*****************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.loadedFeature = 'movie';
    }
    AppComponent.prototype.onNavigate = function (feature) {
        this.loadedFeature = feature;
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/components/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/components/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/components/app.module.ts":
/*!**************************************!*\
  !*** ./src/components/app.module.ts ***!
  \**************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/components/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/components/header/header.component.ts");
/* harmony import */ var _movies_movies_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./movies/movies.component */ "./src/components/movies/movies.component.ts");
/* harmony import */ var _movies_movie_list_movie_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./movies/movie-list/movie-list.component */ "./src/components/movies/movie-list/movie-list.component.ts");
/* harmony import */ var _movies_movie_list_movie_item_movie_item_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./movies/movie-list/movie-item/movie-item.component */ "./src/components/movies/movie-list/movie-item/movie-item.component.ts");
/* harmony import */ var _movies_movies_detail_movies_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./movies/movies-detail/movies-detail.component */ "./src/components/movies/movies-detail/movies-detail.component.ts");
/* harmony import */ var _movies_movie_start_movie_start_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./movies/movie-start/movie-start.component */ "./src/components/movies/movie-start/movie-start.component.ts");
/* harmony import */ var _movies_movie_edit_movie_edit_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./movies/movie-edit/movie-edit.component */ "./src/components/movies/movie-edit/movie-edit.component.ts");
/* harmony import */ var _all_movies_all_movies_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./all-movies/all-movies.component */ "./src/components/all-movies/all-movies.component.ts");
/* harmony import */ var _all_movies_all_movie_details_all_movie_details_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./all-movies/all-movie-details/all-movie-details.component */ "./src/components/all-movies/all-movie-details/all-movie-details.component.ts");
/* harmony import */ var _people_people_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./people/people.component */ "./src/components/people/people.component.ts");
/* harmony import */ var _people_people_detail_people_detail_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./people/people-detail/people-detail.component */ "./src/components/people/people-detail/people-detail.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./app-routing.module */ "./src/components/app-routing.module.ts");
/* harmony import */ var _services_all_movies_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../services/all-movies.service */ "./src/services/all-movies.service.ts");
/* harmony import */ var _services_movies_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../services/movies.service */ "./src/services/movies.service.ts");
/* harmony import */ var _services_people_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../services/people.service */ "./src/services/people.service.ts");





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _movies_movies_component__WEBPACK_IMPORTED_MODULE_7__["MoviesComponent"],
                _movies_movie_list_movie_list_component__WEBPACK_IMPORTED_MODULE_8__["MovieListComponent"],
                _movies_movie_list_movie_item_movie_item_component__WEBPACK_IMPORTED_MODULE_9__["MovieItemComponent"],
                _movies_movies_detail_movies_detail_component__WEBPACK_IMPORTED_MODULE_10__["MoviesDetailComponent"],
                _all_movies_all_movies_component__WEBPACK_IMPORTED_MODULE_13__["AllMoviesComponent"],
                _movies_movie_start_movie_start_component__WEBPACK_IMPORTED_MODULE_11__["MovieStartComponent"],
                _movies_movie_edit_movie_edit_component__WEBPACK_IMPORTED_MODULE_12__["MovieEditComponent"],
                _all_movies_all_movie_details_all_movie_details_component__WEBPACK_IMPORTED_MODULE_14__["AllMovieDetailsComponent"],
                _people_people_component__WEBPACK_IMPORTED_MODULE_15__["PeopleComponent"],
                _people_people_detail_people_detail_component__WEBPACK_IMPORTED_MODULE_16__["PeopleDetailComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_17__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [_services_all_movies_service__WEBPACK_IMPORTED_MODULE_18__["AllMoviesService"], _services_movies_service__WEBPACK_IMPORTED_MODULE_19__["MovieService"], _services_people_service__WEBPACK_IMPORTED_MODULE_20__["PeopleService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/components/header/header.component.css":
/*!****************************************************!*\
  !*** ./src/components/header/header.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\n    margin: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7Q0FDYiIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuYXYge1xuICAgIG1hcmdpbjogMDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/components/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/components/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm navbar-light bg-light\">\n    <a class=\"navbar-brand\" routerLink=\"\">Moviepedia</a>\n\n    <button\n        class=\"navbar-toggler\"\n        type=\"button\"\n        data-toggle=\"collapse\"\n        data-target=\"#navbarNav\"\n        aria-controls=\"navbarNavAltMarkup\"\n        aria-expanded=\"false\"\n        aria-label=\"Toggle navigation\"\n    >\n        <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarNavAltMarkup\">\n        <ul class=\"navbar-nav\">\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" routerLink=\"/people\">Cast</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" routerLink=\"/movies\">Movies</a>\n            </li>\n        </ul>\n    </div>\n\n    <!-- <ul class=\"nav navbar-nav navbar-right\">\n        <a style=\"cursor: pointer\" (click)=\"onSaveData()\">Save Data</a>\n        <a style=\"cursor: pointer\" (click)=\"onFetchData()\">Fetch Data</a>\n    </ul> -->\n</nav>\n"

/***/ }),

/***/ "./src/components/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/components/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_save_data_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/save/data-storage.service */ "./src/services/save/data-storage.service.ts");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(dataStorageService) {
        this.dataStorageService = dataStorageService;
    }
    HeaderComponent.prototype.ngOnInit = function () { };
    HeaderComponent.prototype.onSaveData = function () {
        this.dataStorageService
            .storeMovies()
            .subscribe(function (response) {
            console.log(response);
        });
    };
    HeaderComponent.prototype.onFetchData = function () {
        this.dataStorageService.getMovies();
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/components/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_save_data_storage_service__WEBPACK_IMPORTED_MODULE_2__["DataStorageService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/components/movies/movie-edit/movie-edit.component.css":
/*!*******************************************************************!*\
  !*** ./src/components/movies/movie-edit/movie-edit.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div,\nlabel {\n    color: white;\n}\n\n.edit {\n    margin-left: 40%;\n    margin-top: 16%;\n}\n\n.btn-success {\n    margin-right: 50px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL21vdmllcy9tb3ZpZS1lZGl0L21vdmllLWVkaXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxhQUFhO0NBQ2hCOztBQUVEO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtDQUNuQjs7QUFFRDtJQUNJLG1CQUFtQjtDQUN0QiIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9tb3ZpZXMvbW92aWUtZWRpdC9tb3ZpZS1lZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYsXG5sYWJlbCB7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4uZWRpdCB7XG4gICAgbWFyZ2luLWxlZnQ6IDQwJTtcbiAgICBtYXJnaW4tdG9wOiAxNiU7XG59XG5cbi5idG4tc3VjY2VzcyB7XG4gICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/components/movies/movie-edit/movie-edit.component.html":
/*!********************************************************************!*\
  !*** ./src/components/movies/movie-edit/movie-edit.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-xs-12 edit\">\n        <form [formGroup]=\"movieForm\" (ngSubmit)=\"onSubmit()\">\n            <div class=\"row\">\n                <div class=\"col-xs-12\">\n                    <button\n                        type=\"submit\"\n                        class=\"btn btn-success\"\n                        [disabled]=\"!movieForm.valid\"\n                    >\n                        Save\n                    </button>\n                    <button\n                        type=\"button\"\n                        class=\"btn btn-danger\"\n                        (click)=\"onCancel()\"\n                    >\n                        Cancel\n                    </button>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-xs-12\">\n                    <div class=\"form-group\">\n                        <label for=\"name\">Name</label>\n                        <input\n                            type=\"text\"\n                            id=\"name\"\n                            formControlName=\"name\"\n                            class=\"form-control\"\n                        />\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-xs-12\">\n                    <div class=\"form-group\">\n                        <label for=\"imagePath\">Image URL</label>\n                        <input\n                            type=\"text\"\n                            id=\"imagePath\"\n                            formControlName=\"imagePath\"\n                            class=\"form-control\"\n                            #imagePath\n                        />\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-xs-12\">\n                    <img [src]=\"imagePath.value\" class=\"img-responsive\" />\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-xs-12\">\n                    <div class=\"form-group\">\n                        <label for=\"description\">Description</label>\n                        <textarea\n                            type=\"text\"\n                            id=\"description\"\n                            class=\"form-control\"\n                            formControlName=\"description\"\n                            rows=\"6\"\n                        ></textarea>\n                    </div>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/components/movies/movie-edit/movie-edit.component.ts":
/*!******************************************************************!*\
  !*** ./src/components/movies/movie-edit/movie-edit.component.ts ***!
  \******************************************************************/
/*! exports provided: MovieEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieEditComponent", function() { return MovieEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_movies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/movies.service */ "./src/services/movies.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var MovieEditComponent = /** @class */ (function () {
    function MovieEditComponent(route, movieService, router) {
        this.route = route;
        this.movieService = movieService;
        this.router = router;
        this.editMode = false;
    }
    MovieEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
            _this.editMode = params['id'] != null;
        });
        this.initForm();
    };
    MovieEditComponent.prototype.onSubmit = function () {
        if (this.editMode) {
            this.movieService.updateMovie(this.id, this.movieForm.value);
        }
        else {
            this.movieService.addMovie(this.movieForm.value);
        }
        this.onCancel();
    };
    MovieEditComponent.prototype.onCancel = function () {
        this.router.navigate(['../'], { relativeTo: this.route });
    };
    MovieEditComponent.prototype.initForm = function () {
        var movieName = '';
        var movieImagePath = '';
        var movieDescription = '';
        if (this.editMode) {
            var movie = this.movieService.getMovie(this.id);
            movieName = movie.name;
            movieImagePath = movie.imagePath;
            movieDescription = movie.description;
        }
        this.movieForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](movieName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            imagePath: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](movieImagePath, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](movieDescription, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
        });
    };
    MovieEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movie-edit',
            template: __webpack_require__(/*! ./movie-edit.component.html */ "./src/components/movies/movie-edit/movie-edit.component.html"),
            styles: [__webpack_require__(/*! ./movie-edit.component.css */ "./src/components/movies/movie-edit/movie-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_movies_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], MovieEditComponent);
    return MovieEditComponent;
}());



/***/ }),

/***/ "./src/components/movies/movie-list/movie-item/movie-item.component.css":
/*!******************************************************************************!*\
  !*** ./src/components/movies/movie-list/movie-item/movie-item.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".item {\n    margin: 15px;\n    width: 200%;\n    left: -255px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL21vdmllcy9tb3ZpZS1saXN0L21vdmllLWl0ZW0vbW92aWUtaXRlbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhO0NBQ2hCIiwiZmlsZSI6InNyYy9jb21wb25lbnRzL21vdmllcy9tb3ZpZS1saXN0L21vdmllLWl0ZW0vbW92aWUtaXRlbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLml0ZW0ge1xuICAgIG1hcmdpbjogMTVweDtcbiAgICB3aWR0aDogMjAwJTtcbiAgICBsZWZ0OiAtMjU1cHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/components/movies/movie-list/movie-item/movie-item.component.html":
/*!*******************************************************************************!*\
  !*** ./src/components/movies/movie-list/movie-item/movie-item.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a\n    style=\"cursor: pointer\"\n    [routerLink]=\"[index]\"\n    routerLinkActive=\"active\"\n    class=\"list-group-item clearfix item\"\n>\n    <div class=\"pull-left\">\n        <h4 class=\"list-group-item-heading\">{{ movie.name }}</h4>\n        <p class=\"list-group-item-text\">{{ movie.description }}</p>\n    </div>\n    <span class=\"pull-right\">\n        <img\n            [src]=\"movie.imagePath\"\n            alt=\"{{ movie.name }}\"\n            class=\"img-responsive\"\n            style=\"max-height: 50px\"\n        />\n    </span>\n</a>\n"

/***/ }),

/***/ "./src/components/movies/movie-list/movie-item/movie-item.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/components/movies/movie-list/movie-item/movie-item.component.ts ***!
  \*****************************************************************************/
/*! exports provided: MovieItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieItemComponent", function() { return MovieItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _movie_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../movie.model */ "./src/components/movies/movie.model.ts");



var MovieItemComponent = /** @class */ (function () {
    // @Output() movieSelected = new EventEmitter<void>();
    function MovieItemComponent() {
    }
    MovieItemComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _movie_model__WEBPACK_IMPORTED_MODULE_2__["Movie"])
    ], MovieItemComponent.prototype, "movie", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], MovieItemComponent.prototype, "index", void 0);
    MovieItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movie-item',
            template: __webpack_require__(/*! ./movie-item.component.html */ "./src/components/movies/movie-list/movie-item/movie-item.component.html"),
            styles: [__webpack_require__(/*! ./movie-item.component.css */ "./src/components/movies/movie-list/movie-item/movie-item.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MovieItemComponent);
    return MovieItemComponent;
}());



/***/ }),

/***/ "./src/components/movies/movie-list/movie-list.component.css":
/*!*******************************************************************!*\
  !*** ./src/components/movies/movie-list/movie-list.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".new {\n    margin: 15px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL21vdmllcy9tb3ZpZS1saXN0L21vdmllLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7Q0FDaEIiLCJmaWxlIjoic3JjL2NvbXBvbmVudHMvbW92aWVzL21vdmllLWxpc3QvbW92aWUtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5ldyB7XG4gICAgbWFyZ2luOiAxNXB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/components/movies/movie-list/movie-list.component.html":
/*!********************************************************************!*\
  !*** ./src/components/movies/movie-list/movie-list.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-xs-12\">\n        <button class=\"btn btn-success new\" (click)=\"onNewMovie()\">\n            New Movie\n        </button>\n    </div>\n</div>\n<hr />\n<div class=\"row\">\n    <hr />\n    <div class=\"col-xs-12\">\n        <app-movie-item\n            *ngFor=\"let moviee of movies; let i = index\"\n            [movie]=\"moviee\"\n            [index]=\"i\"\n        ></app-movie-item>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/components/movies/movie-list/movie-list.component.ts":
/*!******************************************************************!*\
  !*** ./src/components/movies/movie-list/movie-list.component.ts ***!
  \******************************************************************/
/*! exports provided: MovieListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieListComponent", function() { return MovieListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_movies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/movies.service */ "./src/services/movies.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var MovieListComponent = /** @class */ (function () {
    function MovieListComponent(movieService, router, route) {
        this.movieService = movieService;
        this.router = router;
        this.route = route;
        this.movies = [];
    }
    MovieListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.movieService.moviesChanged.subscribe(function (movies) {
            _this.movies = movies;
        });
        this.movies = this.movieService.getMovies();
    };
    MovieListComponent.prototype.onNewMovie = function () {
        this.router.navigate(['new'], { relativeTo: this.route });
    };
    MovieListComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    MovieListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movie-list',
            template: __webpack_require__(/*! ./movie-list.component.html */ "./src/components/movies/movie-list/movie-list.component.html"),
            styles: [__webpack_require__(/*! ./movie-list.component.css */ "./src/components/movies/movie-list/movie-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_movies_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], MovieListComponent);
    return MovieListComponent;
}());



/***/ }),

/***/ "./src/components/movies/movie-start/movie-start.component.css":
/*!*********************************************************************!*\
  !*** ./src/components/movies/movie-start/movie-start.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".select {\n    margin-top: 50%;\n    margin-left: 30%;\n}\n\nh1 {\n    color: white;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL21vdmllcy9tb3ZpZS1zdGFydC9tb3ZpZS1zdGFydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtDQUNwQjs7QUFFRDtJQUNJLGFBQWE7Q0FDaEIiLCJmaWxlIjoic3JjL2NvbXBvbmVudHMvbW92aWVzL21vdmllLXN0YXJ0L21vdmllLXN0YXJ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VsZWN0IHtcbiAgICBtYXJnaW4tdG9wOiA1MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDMwJTtcbn1cblxuaDEge1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/components/movies/movie-start/movie-start.component.html":
/*!**********************************************************************!*\
  !*** ./src/components/movies/movie-start/movie-start.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"select\">Please select a movie !!!</h1>\n"

/***/ }),

/***/ "./src/components/movies/movie-start/movie-start.component.ts":
/*!********************************************************************!*\
  !*** ./src/components/movies/movie-start/movie-start.component.ts ***!
  \********************************************************************/
/*! exports provided: MovieStartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieStartComponent", function() { return MovieStartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MovieStartComponent = /** @class */ (function () {
    function MovieStartComponent() {
    }
    MovieStartComponent.prototype.ngOnInit = function () { };
    MovieStartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movie-start',
            template: __webpack_require__(/*! ./movie-start.component.html */ "./src/components/movies/movie-start/movie-start.component.html"),
            styles: [__webpack_require__(/*! ./movie-start.component.css */ "./src/components/movies/movie-start/movie-start.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MovieStartComponent);
    return MovieStartComponent;
}());



/***/ }),

/***/ "./src/components/movies/movie.model.ts":
/*!**********************************************!*\
  !*** ./src/components/movies/movie.model.ts ***!
  \**********************************************/
/*! exports provided: Movie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Movie", function() { return Movie; });
var Movie = /** @class */ (function () {
    function Movie(name, description, imagePath) {
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
    }
    return Movie;
}());



/***/ }),

/***/ "./src/components/movies/movies-detail/movies-detail.component.css":
/*!*************************************************************************!*\
  !*** ./src/components/movies/movies-detail/movies-detail.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".detail {\n    margin-left: 35%;\n    margin-top: 15%;\n}\n\ndiv {\n    color: white;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL21vdmllcy9tb3ZpZXMtZGV0YWlsL21vdmllcy1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7Q0FDbkI7O0FBRUQ7SUFDSSxhQUFhO0NBQ2hCIiwiZmlsZSI6InNyYy9jb21wb25lbnRzL21vdmllcy9tb3ZpZXMtZGV0YWlsL21vdmllcy1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZXRhaWwge1xuICAgIG1hcmdpbi1sZWZ0OiAzNSU7XG4gICAgbWFyZ2luLXRvcDogMTUlO1xufVxuXG5kaXYge1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/components/movies/movies-detail/movies-detail.component.html":
/*!**************************************************************************!*\
  !*** ./src/components/movies/movies-detail/movies-detail.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"detail\">\n    <div class=\"row\">\n        <div class=\"col-xs-12\">\n            <img\n                [src]=\"movie.imagePath\"\n                alt=\"{{ movie.name }}\"\n                class=\"img-responsive\"\n                style=\"max-height: 300px\"\n            />\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-xs-12\">\n            <h1>{{ movie.name }}</h1>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-xs-12\">\n            <a style=\"cursor: pointer\" (click)=\"onEditMovie()\"\n                >Edit Movie details</a\n            >\n            <br />\n            <a style=\"cursor: pointer\" (click)=\"onDeleteMovie()\"\n                >Delete Movie</a\n            >\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-xs-12\">\n            {{ movie.description }}\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-xs-12\">Cast</div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/components/movies/movies-detail/movies-detail.component.ts":
/*!************************************************************************!*\
  !*** ./src/components/movies/movies-detail/movies-detail.component.ts ***!
  \************************************************************************/
/*! exports provided: MoviesDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesDetailComponent", function() { return MoviesDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_movies_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/movies.service */ "./src/services/movies.service.ts");




var MoviesDetailComponent = /** @class */ (function () {
    function MoviesDetailComponent(route, movieService, router) {
        this.route = route;
        this.movieService = movieService;
        this.router = router;
    }
    MoviesDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
            _this.movie = _this.movieService.getMovie(_this.id);
        });
    };
    MoviesDetailComponent.prototype.onEditMovie = function () {
        this.router.navigate(['edit'], { relativeTo: this.route });
        // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
    };
    MoviesDetailComponent.prototype.onDeleteMovie = function () {
        this.movieService.deleteMovie(this.id);
        this.router.navigate(['/movies']);
    };
    MoviesDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movies-detail',
            template: __webpack_require__(/*! ./movies-detail.component.html */ "./src/components/movies/movies-detail/movies-detail.component.html"),
            styles: [__webpack_require__(/*! ./movies-detail.component.css */ "./src/components/movies/movies-detail/movies-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_movies_service__WEBPACK_IMPORTED_MODULE_3__["MovieService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MoviesDetailComponent);
    return MoviesDetailComponent;
}());



/***/ }),

/***/ "./src/components/movies/movies.component.css":
/*!****************************************************!*\
  !*** ./src/components/movies/movies.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9tb3ZpZXMvbW92aWVzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/components/movies/movies.component.html":
/*!*****************************************************!*\
  !*** ./src/components/movies/movies.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-5\">\n        <app-movie-list></app-movie-list>\n    </div>\n    <div class=\"col-md-7\">\n        <router-outlet></router-outlet>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/components/movies/movies.component.ts":
/*!***************************************************!*\
  !*** ./src/components/movies/movies.component.ts ***!
  \***************************************************/
/*! exports provided: MoviesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesComponent", function() { return MoviesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_movies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/movies.service */ "./src/services/movies.service.ts");



var MoviesComponent = /** @class */ (function () {
    function MoviesComponent(movieservice) {
        this.movieservice = movieservice;
    }
    MoviesComponent.prototype.ngOnInit = function () {
        // this.movieservice.movieSelected
        // .subscribe(
        //   (movie: Movie) => {
        //     this.selectedMovie = movie;
        //   }
        // );
    };
    MoviesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movies',
            template: __webpack_require__(/*! ./movies.component.html */ "./src/components/movies/movies.component.html"),
            providers: [_services_movies_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"]],
            styles: [__webpack_require__(/*! ./movies.component.css */ "./src/components/movies/movies.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_movies_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"]])
    ], MoviesComponent);
    return MoviesComponent;
}());



/***/ }),

/***/ "./src/components/people/people-detail/people-detail.component.css":
/*!*************************************************************************!*\
  !*** ./src/components/people/people-detail/people-detail.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n    margin: 0 0 10.5px;\n}\n\n.biography {\n    font-size: 1.4em;\n    font-weight: bold;\n    text-transform: uppercase;\n}\n\n.media-object {\n    float: left;\n    width: 100%;\n}\n\n.item {\n    /* position: relative; */\n    margin: 1rem 0.625rem;\n    width: 180px;\n    text-align: center;\n}\n\n.item:hover {\n    -webkit-transform: scale(1.05);\n            transform: scale(1.05);\n}\n\n.items {\n    margin-top: 30px;\n    margin-bottom: 50px;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n}\n\nimg {\n    width: 180px;\n    margin-bottom: 10.5px;\n}\n\n.character {\n    color: #9e9e9e;\n}\n\n.title {\n    color: #fff;\n}\n\np,\nh1 {\n    color: azure;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL3Blb3BsZS9wZW9wbGUtZGV0YWlsL3Blb3BsZS1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsMEJBQTBCO0NBQzdCOztBQUVEO0lBQ0ksWUFBWTtJQUNaLFlBQVk7Q0FDZjs7QUFFRDtJQUNJLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLCtCQUF1QjtZQUF2Qix1QkFBdUI7Q0FDMUI7O0FBRUQ7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsd0JBQXdCO0NBQzNCOztBQUVEO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtDQUN6Qjs7QUFFRDtJQUNJLGVBQWU7Q0FDbEI7O0FBRUQ7SUFDSSxZQUFZO0NBQ2Y7O0FBRUQ7O0lBRUksYUFBYTtDQUNoQiIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9wZW9wbGUvcGVvcGxlLWRldGFpbC9wZW9wbGUtZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcbiAgICBtYXJnaW46IDAgMCAxMC41cHg7XG59XG5cbi5iaW9ncmFwaHkge1xuICAgIGZvbnQtc2l6ZTogMS40ZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLm1lZGlhLW9iamVjdCB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5pdGVtIHtcbiAgICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7ICovXG4gICAgbWFyZ2luOiAxcmVtIDAuNjI1cmVtO1xuICAgIHdpZHRoOiAxODBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pdGVtOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xufVxuXG4uaXRlbXMge1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuaW1nIHtcbiAgICB3aWR0aDogMTgwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTAuNXB4O1xufVxuXG4uY2hhcmFjdGVyIHtcbiAgICBjb2xvcjogIzllOWU5ZTtcbn1cblxuLnRpdGxlIHtcbiAgICBjb2xvcjogI2ZmZjtcbn1cblxucCxcbmgxIHtcbiAgICBjb2xvcjogYXp1cmU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/components/people/people-detail/people-detail.component.html":
/*!**************************************************************************!*\
  !*** ./src/components/people/people-detail/people-detail.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link\n    rel=\"stylesheet\"\n    href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css\"\n/>\n<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>\n<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js\"></script>\n\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <h1 class=\"page-header\">{{ people.name }}</h1>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"hidden-xxs col-xs-3 col-sm-3 col-md-3 col-lg-3\">\n            <div class=\"person-profile\">\n                <img\n                    class=\"media-object\"\n                    width=\"300\"\n                    src=\"https://image.tmdb.org/t/p/w200/{{\n                        people.profile_path\n                    }}\"\n                    alt=\"{{ people.name }}\"\n                />\n            </div>\n        </div>\n\n        <div class=\"col-xxs-12 col-xs-9 col-sm-9 col-md-9 col-lg-9\">\n            <p class=\"biography\">Biography</p>\n            <p style=\"font-size: 1.1em; text-align: justify\">\n                {{ people.biography }}\n            </p>\n        </div>\n    </div>\n</div>\n\n<div class=\"items\">\n    <div class=\"item\" *ngFor=\"let crew of crews; let i = index\">\n        <a routerLink=\"/movie/{{ crew.id }}\" style=\"text-decoration: none\">\n            <img\n                *ngIf=\"crew.poster_path\"\n                src=\"https://image.tmdb.org/t/p/w200/{{ crew.poster_path }}\"\n                alt=\"{{ people.name }}\"\n            />\n            <img\n                *ngIf=\"!crew.poster_path\"\n                src=\"assets/images/no_poster.jpg\"\n                alt=\"No poster available\"\n            />\n            <p class=\"title\">{{ crew.title }}</p>\n            <p class=\"character\">{{ crew.character }}</p>\n        </a>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/components/people/people-detail/people-detail.component.ts":
/*!************************************************************************!*\
  !*** ./src/components/people/people-detail/people-detail.component.ts ***!
  \************************************************************************/
/*! exports provided: PeopleDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleDetailComponent", function() { return PeopleDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_people_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/people.service */ "./src/services/people.service.ts");




var PeopleDetailComponent = /** @class */ (function () {
    function PeopleDetailComponent(router, peopleService) {
        this.router = router;
        this.peopleService = peopleService;
    }
    PeopleDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params.subscribe(function (params) {
            var id = params['peopleID'];
            _this.peopleService.getDetail(id).subscribe(function (data) {
                _this.people = data;
            });
            _this.peopleService.getCrew(id).subscribe(function (data) {
                _this.crews = data['cast'];
            });
        });
    };
    PeopleDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-people-detail',
            template: __webpack_require__(/*! ./people-detail.component.html */ "./src/components/people/people-detail/people-detail.component.html"),
            styles: [__webpack_require__(/*! ./people-detail.component.css */ "./src/components/people/people-detail/people-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_people_service__WEBPACK_IMPORTED_MODULE_3__["PeopleService"]])
    ], PeopleDetailComponent);
    return PeopleDetailComponent;
}());



/***/ }),

/***/ "./src/components/people/people.component.css":
/*!****************************************************!*\
  !*** ./src/components/people/people.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search-bar {\n    width: 70%;\n    margin: 2rem auto 4rem auto;\n}\n\n.search-bar button {\n    border-left: 1px solid lightgray;\n}\n\n.people .person {\n    position: relative;\n    margin: 1rem 0.625rem;\n    width: 290px;\n    text-align: center;\n}\n\n.person {\n    height: 514px;\n    width: 267pxs;\n}\n\n.person:hover {\n    -webkit-transform: scale(1.03);\n            transform: scale(1.03);\n}\n\n.people {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL3Blb3BsZS9wZW9wbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCw0QkFBNEI7Q0FDL0I7O0FBRUQ7SUFDSSxpQ0FBaUM7Q0FDcEM7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFDSSxjQUFjO0lBQ2QsY0FBYztDQUNqQjs7QUFFRDtJQUNJLCtCQUF1QjtZQUF2Qix1QkFBdUI7Q0FDMUI7O0FBRUQ7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLHdCQUF3QjtDQUMzQiIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9wZW9wbGUvcGVvcGxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoLWJhciB7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBtYXJnaW46IDJyZW0gYXV0byA0cmVtIGF1dG87XG59XG5cbi5zZWFyY2gtYmFyIGJ1dHRvbiB7XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBsaWdodGdyYXk7XG59XG5cbi5wZW9wbGUgLnBlcnNvbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbjogMXJlbSAwLjYyNXJlbTtcbiAgICB3aWR0aDogMjkwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucGVyc29uIHtcbiAgICBoZWlnaHQ6IDUxNHB4O1xuICAgIHdpZHRoOiAyNjdweHM7XG59XG5cbi5wZXJzb246aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XG59XG5cbi5wZW9wbGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuIl19 */"

/***/ }),

/***/ "./src/components/people/people.component.html":
/*!*****************************************************!*\
  !*** ./src/components/people/people.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link\n    rel=\"stylesheet\"\n    href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\"\n/>\n\n<form class=\"search-bar container\">\n    <div class=\"input-group input-group-md\">\n        <input\n            type=\"text\"\n            class=\"form-control\"\n            name=\"person\"\n            placeholder=\"Search Actor/Actress\"\n            [(ngModel)]=\"person\"\n        />\n        <div class=\"input-group-append\">\n            <button\n                class=\"btn btn-light\"\n                type=\"submit\"\n                (click)=\"searchpeople()\"\n            >\n                <i class=\"fas fa-search\"></i>\n            </button>\n        </div>\n    </div>\n</form>\n\n<div class=\"people\">\n    <div *ngFor=\"let people of search_result; let i = index\">\n        <div *ngIf=\"i < 16\">\n            <div class=\"card mt-3 mb-3 person\">\n                <div class=\"card-header text-center card bg-dark text-white\">\n                    {{ people.name }}\n                </div>\n                <div class=\"card\">\n                    <a routerLink=\"/people/{{ people.id }}\">\n                        <img\n                            class=\"card-img-top img-fluid\"\n                            src=\"https://image.tmdb.org/t/p/w300_and_h450_bestv2/{{\n                                people.profile_path\n                            }}\"\n                            alt=\"{{ people.name }}\"\n                            style=\"height: 460px\"\n                        />\n                    </a>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"people\" *ngIf=\"!search_result\">\n    <div *ngFor=\"let people of people_list; let i = index\">\n        <div *ngIf=\"i < 16\">\n            <div class=\"card mt-3 mb-3 person\">\n                <div class=\"card-header text-center card bg-dark text-white\">\n                    {{ people.name }}\n                </div>\n                <div class=\"card\">\n                    <a routerLink=\"/people/{{ people.id }}\">\n                        <img\n                            class=\"card-img-top img-fluid\"\n                            src=\"https://image.tmdb.org/t/p/w300_and_h450_bestv2/{{\n                                people.profile_path\n                            }}\"\n                            alt=\"{{ people.name }}\"\n                            style=\"height: 460px\"\n                        />\n                    </a>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/components/people/people.component.ts":
/*!***************************************************!*\
  !*** ./src/components/people/people.component.ts ***!
  \***************************************************/
/*! exports provided: PeopleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleComponent", function() { return PeopleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_people_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/people.service */ "./src/services/people.service.ts");



var PeopleComponent = /** @class */ (function () {
    function PeopleComponent(peopleService) {
        var _this = this;
        this.peopleService = peopleService;
        this.peopleService.getPeople().subscribe(function (data) {
            _this.people_list = data['results'];
        });
    }
    PeopleComponent.prototype.ngOnInit = function () { };
    PeopleComponent.prototype.searchpeople = function () {
        var _this = this;
        this.peopleService.searchPerson(this.person).subscribe(function (data) {
            _this.search_result = data['results'];
        });
    };
    PeopleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-people',
            template: __webpack_require__(/*! ./people.component.html */ "./src/components/people/people.component.html"),
            styles: [__webpack_require__(/*! ./people.component.css */ "./src/components/people/people.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_people_service__WEBPACK_IMPORTED_MODULE_2__["PeopleService"]])
    ], PeopleComponent);
    return PeopleComponent;
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
/* harmony import */ var _components_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/app.module */ "./src/components/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_components_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/services/all-movies.service.ts":
/*!********************************************!*\
  !*** ./src/services/all-movies.service.ts ***!
  \********************************************/
/*! exports provided: AllMoviesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllMoviesService", function() { return AllMoviesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var AllMoviesService = /** @class */ (function () {
    function AllMoviesService(_http) {
        this._http = _http;
        this.movie_url = 'https://api.themoviedb.org/3/';
        this.api_key = '4a7711ce4033e38e64bb7adb7c50cff2';
    }
    AllMoviesService.prototype.getUpcomingMovies = function () {
        return this._http.get(this.movie_url +
            'discover/movie?primary_release_date.gte=2020-11-15&primary_release_date.lte=2021-03-31' +
            '&api_key=' +
            this.api_key);
    };
    AllMoviesService.prototype.getPopularMovies = function () {
        return this._http.get(this.movie_url +
            'discover/movie?sort_by=popularity.desc' +
            '&api_key=' +
            this.api_key);
    };
    AllMoviesService.prototype.searchMovie = function (movie) {
        this.movie_string = movie;
        return this._http.get(this.movie_url +
            'search/movie?query=' +
            this.movie_string +
            '&api_key=' +
            this.api_key);
    };
    AllMoviesService.prototype.getMovie = function (id) {
        return this._http.get(this.movie_url + 'movie/' + id + '?api_key=' + this.api_key);
    };
    AllMoviesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AllMoviesService);
    return AllMoviesService;
}());



/***/ }),

/***/ "./src/services/movies.service.ts":
/*!****************************************!*\
  !*** ./src/services/movies.service.ts ***!
  \****************************************/
/*! exports provided: MovieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieService", function() { return MovieService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _components_movies_movie_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/movies/movie.model */ "./src/components/movies/movie.model.ts");




var MovieService = /** @class */ (function () {
    function MovieService() {
        this.moviesChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.movies = [
            new _components_movies_movie_model__WEBPACK_IMPORTED_MODULE_3__["Movie"]('Movie test', 'Movie details', 'https://s18672.pcdn.co/wp-content/uploads/2018/01/Movie-300x200.jpg'),
            new _components_movies_movie_model__WEBPACK_IMPORTED_MODULE_3__["Movie"]('Movie test 2', 'Movie details 2', 'https://s18672.pcdn.co/wp-content/uploads/2018/01/Movie-300x200.jpg'),
            new _components_movies_movie_model__WEBPACK_IMPORTED_MODULE_3__["Movie"]('Movie test 2', 'Movie details 3', 'https://s18672.pcdn.co/wp-content/uploads/2018/01/Movie-300x200.jpg')
        ];
    }
    MovieService.prototype.getMovie = function (index) {
        return this.movies[index];
    };
    MovieService.prototype.getMovies = function () {
        return this.movies.slice();
    };
    MovieService.prototype.addMovie = function (movie) {
        this.movies.push(movie);
        this.moviesChanged.next(this.movies.slice());
    };
    MovieService.prototype.updateMovie = function (index, newMovie) {
        this.movies[index] = newMovie;
        this.moviesChanged.next(this.movies.slice());
    };
    MovieService.prototype.deleteMovie = function (index) {
        this.movies.splice(index, 1);
        this.moviesChanged.next(this.movies.slice());
    };
    MovieService.prototype.setMovies = function (movies) {
        this.movies = movies;
        this.moviesChanged.next(this.movies.slice());
    };
    MovieService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MovieService);
    return MovieService;
}());



/***/ }),

/***/ "./src/services/people.service.ts":
/*!****************************************!*\
  !*** ./src/services/people.service.ts ***!
  \****************************************/
/*! exports provided: PeopleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleService", function() { return PeopleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var PeopleService = /** @class */ (function () {
    function PeopleService(_http) {
        this._http = _http;
        this.api_key = '4a7711ce4033e38e64bb7adb7c50cff2';
        this.people_url = 'https://api.themoviedb.org/3/';
    }
    PeopleService.prototype.getPeople = function () {
        return this._http.get(this.people_url + 'person/popular?api_key=' + this.api_key);
    };
    // getImage(){
    //   return this._http.get(this.people_url + 'person' + );
    // }
    PeopleService.prototype.getDetail = function (id) {
        return this._http.get(this.people_url + 'person/' + id + '?api_key=' + this.api_key);
    };
    PeopleService.prototype.getCrew = function (id) {
        return this._http.get(this.people_url +
            'person/' +
            id +
            '/movie_credits?api_key=' +
            this.api_key);
    };
    PeopleService.prototype.searchPerson = function (person) {
        this.person_string = person;
        return this._http.get(this.people_url +
            'search/person?api_key=' +
            this.api_key +
            '&language=en-US&query=' +
            this.person_string);
    };
    PeopleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PeopleService);
    return PeopleService;
}());



/***/ }),

/***/ "./src/services/save/data-storage.service.ts":
/*!***************************************************!*\
  !*** ./src/services/save/data-storage.service.ts ***!
  \***************************************************/
/*! exports provided: DataStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataStorageService", function() { return DataStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _movies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../movies.service */ "./src/services/movies.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var DataStorageService = /** @class */ (function () {
    function DataStorageService(httpClient, movieService) {
        this.httpClient = httpClient;
        this.movieService = movieService;
    }
    DataStorageService.prototype.storeMovies = function () {
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpRequest"]('PUT', 'https://moviepedia-4211a.firebaseio.com/movies.json', this.movieService.getMovies(), { reportProgress: true });
        return this.httpClient.request(req);
    };
    DataStorageService.prototype.getMovies = function () {
        var _this = this;
        this.httpClient
            .get('https://moviepedia-4211a.firebaseio.com/movies.json', {
            observe: 'body',
            responseType: 'json'
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (movies) {
            console.log(movies);
            return movies;
        }))
            .subscribe(function (movies) {
            _this.movieService.setMovies(movies);
        });
    };
    DataStorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _movies_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"]])
    ], DataStorageService);
    return DataStorageService;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/meganindya/Projects/GitHub/moviepedia/app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map