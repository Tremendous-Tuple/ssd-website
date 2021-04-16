(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Documents\School\CEN 3031\ssd-website\src\main.ts */"zUnb");


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





function HomeComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h4", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const blog_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", blog_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](blog_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](blog_r1.excerpt);
} }
const _c0 = function () { return ["/blogs"]; };
class HomeComponent {
    constructor(db) {
        this.db = db;
        this.blogs$ = this.db.collection('blogs', ref => ref.orderBy('date', 'desc').limit(3))
            .snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(changes => {
            return changes.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return Object.assign({ id }, data); //the object that contains blog data also has an element named "id" that has the doccument name of the blog
            });
        }));
    }
    ngOnInit() {
        this.blogs$.subscribe(data => console.log(data));
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 23, vars: 5, consts: [["id", "intro", 1, "row", "justify-content-center"], [1, "col", "col-10"], ["id", "recentBlogs"], [1, "blog-intro"], [1, "blogs", "row", "justify-content-center"], ["class", "post col-11 col-md-4", 4, "ngFor", "ngForOf"], [1, "row", "justify-content-center"], ["role", "button", 1, "btn", "dark-button", 3, "routerLink"], ["id", "upcoming-events", 1, "row"], [1, "col-12", "col-lg-8", "calendar"], ["src", "https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23708090&ctz=America%2FNew_York&src=ufssd.org%40gmail.com&color=%23039BE5&mode=MONTH&showTitle=1&showNav=1&showPrint=0&showTabs=0&showCalendars=0&showTz=1&title=Society%20of%20Software%20Developers", "width", "800", "height", "600", "frameborder", "0", "scrolling", "no", 2, "border-width", "0"], [1, "d-none", "d-lg-block", "col-lg-4", "list"], ["src", "https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23708090&ctz=America%2FNew_York&src=ufssd.org%40gmail.com&color=%23039BE5&mode=AGENDA&showTitle=1&showNav=1&showPrint=0&showTabs=0&showCalendars=0&showTz=1&title=Society%20of%20Software%20Developers", "width", "800", "height", "600", "frameborder", "0", "scrolling", "no", 2, "border-width", "0"], [1, "post", "col-11", "col-md-4"], [1, "thumbnail"], [3, "src"], [1, "title"], [1, "excerpt"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Software Development and Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Spring 2021 meetings");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Tuesdays, 6:15pm over Zoom");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Previous Events");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, HomeComponent_div_13_Template, 7, 3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "View All");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "iframe", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "iframe", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 2, ctx.blogs$));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c0));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: ["#intro[_ngcontent-%COMP%] {\n  background-image: url(\"/../../assets/intro-background.jpg\");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  padding: 20px;\n}\n#intro[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], #intro[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], #intro[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], #intro[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], #intro[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #EEFBFB;\n  text-align: center;\n}\n#recentBlogs[_ngcontent-%COMP%] {\n  margin-top: 25px;\n  padding: 20px 5px;\n  border-radius: 15px;\n  background-color: #B1A296;\n}\n#recentBlogs[_ngcontent-%COMP%]   .blog-intro[_ngcontent-%COMP%], #recentBlogs[_ngcontent-%COMP%]   .blogs[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n#recentBlogs[_ngcontent-%COMP%]   .blog-intro[_ngcontent-%COMP%] {\n  border-bottom: 1px #5D5C61 solid;\n}\n#recentBlogs[_ngcontent-%COMP%]   .blog-intro[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  width: 100%;\n  color: #EEFBFB;\n  text-align: center;\n}\n#recentBlogs[_ngcontent-%COMP%]   .blogs[_ngcontent-%COMP%] {\n  margin-left: 0;\n  margin-right: 0;\n}\n#recentBlogs[_ngcontent-%COMP%]   .blogs[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n#recentBlogs[_ngcontent-%COMP%]   .blogs[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n#recentBlogs[_ngcontent-%COMP%]   .blogs[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n  object-fit: contain;\n  padding: 0 25px;\n  max-width: 100%;\n  height: 150px;\n}\n#recentBlogs[_ngcontent-%COMP%]   .blogs[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], #recentBlogs[_ngcontent-%COMP%]   .blogs[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .excerpt[_ngcontent-%COMP%] {\n  text-align: center;\n}\n#upcoming-events[_ngcontent-%COMP%] {\n  margin-top: 25px;\n  height: 600px;\n}\n#upcoming-events[_ngcontent-%COMP%]   .calendar[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%], #upcoming-events[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n#upcoming-events[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%] {\n  margin: 25px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhvbWUuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSwyREFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUVBLGFBQUE7QUFGSjtBQUlJO0VBQ0ksY0NMSTtFRE1KLGtCQUFBO0FBRlI7QUFNQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQ2pCTztBRGNYO0FBTUk7RUFDSSxtQkFBQTtBQUpSO0FBT0k7RUFDSSxnQ0FBQTtBQUxSO0FBT1E7RUFDSSxXQUFBO0VBQ0EsY0MxQkE7RUQyQkEsa0JBQUE7QUFMWjtBQVNJO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUFQUjtBQVNRO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QUFQWjtBQVNZO0VBQ0ksbUJBQUE7QUFQaEI7QUFTZ0I7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUVBLG1CQUFBO0VBRUEsZUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FBVHBCO0FBYVk7RUFDSSxrQkFBQTtBQVhoQjtBQWlCQTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtBQWRKO0FBaUJRO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUFmWjtBQW1CSTtFQUNJLGNBQUE7QUFqQlIiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi9hc3NldHMvdmFyaWFibGVzLnNjc3NcIjtcclxuXHJcbiNpbnRybyB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy8uLi8uLi9hc3NldHMvaW50cm8tYmFja2dyb3VuZC5qcGcnKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IFxyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgXHJcbiAgICBcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcblxyXG4gICAgaDEsIGgyLCBoMywgaDQsIHAge1xyXG4gICAgICAgIGNvbG9yOiAkdGV4dExpZ2h0O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxufVxyXG5cclxuI3JlY2VudEJsb2dzIHtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGVydGlhcnk7XHJcbiAgICAvL2JhY2tncm91bmQ6ICMwMDAwMDAyZTtcclxuXHJcbiAgICAuYmxvZy1pbnRybywgLmJsb2dzIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5ibG9nLWludHJvIHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggJHNlY29uZGFyeSBzb2xpZDtcclxuXHJcbiAgICAgICAgaDIge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgY29sb3I6ICR0ZXh0TGlnaHQ7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmJsb2dze1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuXHJcbiAgICAgICAgLnBvc3Qge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICAgICAgICAgICAudGh1bWJuYWlsIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgLnRpdGxlLCAuZXhjZXJwdCB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiN1cGNvbWluZy1ldmVudHMge1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgIGhlaWdodDogNjAwcHg7XHJcblxyXG4gICAgLmNhbGVuZGFyLCAubGlzdCB7XHJcbiAgICAgICAgaWZyYW1lIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmxpc3Qge1xyXG4gICAgICAgIG1hcmdpbjogMjVweCAwO1xyXG4gICAgfVxyXG59IiwiLy8kcHJpbWFyeTogIzEyMjMyRTtcclxuJHByaW1hcnk6ICM3MDgwOTA7XHJcbiRzZWNvbmRhcnk6ICM1RDVDNjE7XHJcbiR0ZXJ0aWFyeTogI0IxQTI5NjtcclxuLy8kYmFja2dyb3VuZDogIzIwMzY0NztcclxuJGJhY2tncm91bmQ6ICM3Mzk1QUU7XHJcbiR0ZXh0TGlnaHQ6ICNFRUZCRkI7Il19 */"] });


/***/ }),

/***/ "AytR":
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
const environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyAnXFILKxlGX9A7psFagOBQur4v1QbJb0s",
        authDomain: "ssd-website-b628f.firebaseapp.com",
        databaseURL: "https://ssd-website-b628f-default-rtdb.firebaseio.com",
        projectId: "ssd-website-b628f",
        storageBucket: "ssd-website-b628f.appspot.com",
        messagingSenderId: "725282429431"
    }
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

/***/ "CrdI":
/*!************************************************!*\
  !*** ./src/app/articles/articles.component.ts ***!
  \************************************************/
/*! exports provided: ArticlesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlesComponent", function() { return ArticlesComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "CqG3");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





const _c0 = function (a1) { return ["/articles", a1]; };
function ArticlesComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const article_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, article_r1.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", article_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", article_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](article_r1.description);
} }
class ArticlesComponent {
    constructor(db) {
        this.db = db;
        // The code below will query all the articles
        // and return id + data (e.g. title, description, img)
        this.articles$ = this.db.collection('articles')
            .snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(changes => {
            return changes.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return Object.assign({ id }, data);
            });
        }));
    }
    ngOnInit() {
        this.articles$.subscribe(data => console.log(data));
    }
}
ArticlesComponent.ɵfac = function ArticlesComponent_Factory(t) { return new (t || ArticlesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"])); };
ArticlesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ArticlesComponent, selectors: [["app-articles"]], decls: 8, vars: 3, consts: [["ng-if", "i % 3 === 0", 1, "row"], ["class", "col-sm-4", 4, "ngFor", "ngForOf"], [1, "col-sm-4"], [1, "thumbnail"], [3, "routerLink"], [2, "width", "100%", 3, "src", "alt"], [1, "caption"]], template: function ArticlesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Articles List");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Below is a list of dynamic article links");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ArticlesComponent_div_6_Template, 7, 6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 1, ctx.articles$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcnRpY2xlcy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "DLXL":
/*!**********************************************!*\
  !*** ./src/app/article/article.component.ts ***!
  \**********************************************/
/*! exports provided: ArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleComponent", function() { return ArticleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/firestore */ "CqG3");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function ArticleComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const article_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](article_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", article_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", article_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](article_r1.description);
} }
class ArticleComponent {
    constructor(db, route) {
        this.db = db;
        this.route = route;
        // set 'id' when page loads from route params.id
        this.route.params.subscribe(params => this.id = params.id);
    }
    ngOnInit() {
        // query Firestore using 'id' when page loads
        this.article$ = this.db
            .doc('articles/' + this.id)
            .valueChanges();
    }
}
ArticleComponent.ɵfac = function ArticleComponent_Factory(t) { return new (t || ArticleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
ArticleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ArticleComponent, selectors: [["app-article"]], decls: 2, vars: 3, consts: [[4, "ngIf"], [1, "img-responsive", 2, "max-width", "50%", "max-height", "50%", 3, "src", "alt"]], template: function ArticleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ArticleComponent_div_0_Template, 6, 4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.article$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcnRpY2xlLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "IYfF":
/*!*************************************************!*\
  !*** ./src/app/shared/services/auth.service.ts ***!
  \*************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AuthService {
    constructor(afs, // Inject Firestore service
    afAuth, // Inject Firebase auth service
    router, ngZone // NgZone service to remove outside scope warning
    ) {
        this.afs = afs;
        this.afAuth = afAuth;
        this.router = router;
        this.ngZone = ngZone;
        /* Saving user data in localstorage when
        logged in and setting up null when logged out */
        this.afAuth.authState.subscribe(user => {
            if (user) {
                this.userData = user;
                localStorage.setItem('user', JSON.stringify(this.userData));
                JSON.parse(localStorage.getItem('user'));
            }
            else {
                localStorage.setItem('user', null);
                JSON.parse(localStorage.getItem('user'));
            }
        });
    }
    // Sign in with email/password
    SignIn(email, password) {
        return this.afAuth.signInWithEmailAndPassword(email, password)
            .then((result) => {
            this.ngZone.run(() => {
                this.SetUserData(result.user);
                this.router.navigate(['']);
            });
        }).catch((error) => {
            window.alert(error.message);
        });
    }
    // Returns true when user is looged in and email is verified
    get isLoggedIn() {
        const user = JSON.parse(localStorage.getItem('user'));
        return (user !== null) ? true : false;
    }
    // Auth logic to run auth providers
    AuthLogin(provider) {
        return this.afAuth.signInWithPopup(provider)
            .then((result) => {
            this.SetUserData(result.user);
            this.ngZone.run(() => {
                this.router.navigate(['']);
            });
        }).catch((error) => {
            window.alert(error);
        });
    }
    /* Setting up user data when sign in with username/password,
    sign up with username/password and sign in with social auth
    provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
    SetUserData(user) {
        const userRef = this.afs.doc(`users/${user.uid}`);
        const userData = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            emailVerified: user.emailVerified
        };
        return userRef.set(userData, {
            merge: true
        });
    }
    // Sign out 
    SignOut() {
        return this.afAuth.signOut().then(() => {
            localStorage.removeItem('user');
            this.router.navigate(['']);
        });
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "LgBW":
/*!****************************************!*\
  !*** ./src/app/blog/blog.component.ts ***!
  \****************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




class BlogComponent {
    constructor(db, route, router) {
        this.db = db;
        this.route = route;
        this.router = router;
        // set 'id' when page loads from route params.id
        this.route.params.subscribe(params => this.id = params.id);
    }
    ngOnInit() {
        this.blog = {
            title: "",
            excerpt: "",
            img: "",
            content: "",
            author: "",
            date: {},
            tags: [""]
        };
        this.tagsInput = "";
        this.newBlog = true;
        // query Firestore using 'id' when page loads
        this.db.doc('blogs/' + this.id).ref.get().then((doc) => {
            if (doc.exists) {
                console.log(doc.data());
                this.blog = doc.data();
                this.newBlog = false; //change to false if we find the id.
                var i = 0;
                for (let tag of this.blog.tags) {
                    var delimeter = "";
                    if (i != 0) {
                        delimeter = ", ";
                    }
                    i++;
                    this.tagsInput = this.tagsInput.concat(delimeter, tag.toString());
                }
            }
            else {
                console.log("There is no document!"); //keep newBlog true. This happens if blogs/new is the current url or the id doesnt exist.
            }
        }).catch(function (error) {
            console.log("There was an error getting your document:", error);
        });
    }
    onImageUpload(event) {
        resizeImage({
            file: event.target.files[0],
            maxSize: 500
        }).then((resizedImage) => {
            console.log("upload resized image");
            let file = resizedImage;
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (e) => {
                this.blog.img = reader.result.toString();
                console.log("image uplaoded successfully");
            };
            reader.onerror = function (error) {
                console.log('Error: ', error);
            };
        }).catch(function (err) {
            console.error(err);
        });
    }
    updateBlog() {
        if (this.newBlog) {
            console.log("Creating new post...");
            const blogsRef = this.db.collection('blogs');
            const blogData = this.blog;
            this.blog.date = new Date();
            console.log(JSON.parse(localStorage.getItem('user')));
            this.blog.author = JSON.parse(localStorage.getItem('user')).email;
            return blogsRef.add(blogData);
        }
        else {
            console.log("Updating old post...");
            const blogsRef = this.db.doc('blogs/' + this.id);
            const blogData = this.blog;
            return blogsRef.set(blogData, {
                merge: true
            });
        }
    }
    submit() {
        this.blog.tags = this.tagsInput.split(",");
        for (var i = 0; i < this.blog.tags.length; i++) {
            this.blog.tags[i] = this.blog.tags[i].trim();
        }
        this.updateBlog();
        this.router.navigate(['blogs']);
    }
    delete() {
        this.db.doc('blogs/' + this.id).delete().then(() => {
            console.log("deleted post");
        })
            .catch((err) => {
            console.log(err);
        });
        this.router.navigate(['blogs']);
    }
}
BlogComponent.ɵfac = function BlogComponent_Factory(t) { return new (t || BlogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
BlogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlogComponent, selectors: [["app-blog"]], decls: 37, vars: 6, consts: [["id", "editor-container", 1, "blog-content"], ["id", "overview", 1, "row"], ["id", "thumbnail", 1, "col-6"], [3, "src"], ["type", "file", "id", "customFile", 1, "form-control", "image-upload", 3, "change"], [1, "col-6", "vertical-middle"], ["id", "title", 1, "form-group"], ["for", "title_"], ["type", "text", "placeholder", "Title", "id", "title_", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", "excerpt", 1, "form-group"], ["for", "excerpt_"], ["placeholder", "Write a sentence or two about your post.", "id", "excerpt_", "rows", "3", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "row"], [1, "col-12"], ["id", "content", 1, "form-group"], ["for", "content_"], ["placeholder", "This input takes in HTML and is the main content of your post.", "id", "content_", "rows", "6", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-4"], ["id", "tags", 1, "form-group"], ["for", "tags_"], ["type", "text", "placeholder", "seperate the tags with \",\"", "id", "tags_", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "row", "submit-row"], [1, "col"], ["role", "button", 1, "btn", "dark-button", 3, "hidden", "click"], [1, "col-auto"], ["role", "button", 1, "btn", "dark-button", 3, "click"]], template: function BlogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function BlogComponent_Template_input_change_4_listener($event) { return ctx.onImageUpload($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BlogComponent_Template_input_ngModelChange_10_listener($event) { return ctx.blog.title = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Exerpt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "textarea", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BlogComponent_Template_textarea_ngModelChange_15_listener($event) { return ctx.blog.excerpt = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "textarea", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BlogComponent_Template_textarea_ngModelChange_22_listener($event) { return ctx.blog.content = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Tags");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BlogComponent_Template_input_ngModelChange_29_listener($event) { return ctx.tagsInput = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BlogComponent_Template_button_click_32_listener() { return ctx.delete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BlogComponent_Template_button_click_35_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.blog.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.blog.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.blog.excerpt);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.blog.content);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.tagsInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.newBlog);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: ["#editor-container[_ngcontent-%COMP%] {\n  padding: 15px;\n  background-color: #ffffff3b;\n  border-radius: 25px;\n}\n\n.blog-content[_ngcontent-%COMP%] {\n  text-align: left !important;\n}\n\n.blog-content[_ngcontent-%COMP%]   .tag-label[_ngcontent-%COMP%] {\n  padding-right: 10px;\n}\n\n.blog-content[_ngcontent-%COMP%]   .submit-row[_ngcontent-%COMP%] {\n  margin-top: 10px !important;\n}\n\n.image-upload[_ngcontent-%COMP%] {\n  background: none;\n  border: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGJsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQUZKOztBQUtBO0VBQ0ksMkJBQUE7QUFGSjs7QUFJSTtFQUNJLG1CQUFBO0FBRlI7O0FBS0k7RUFDSSwyQkFBQTtBQUhSOztBQU9BO0VBQ0ksZ0JBQUE7RUFDQSxTQUFBO0FBSkoiLCJmaWxlIjoiYmxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uL2Fzc2V0cy92YXJpYWJsZXMuc2Nzcyc7XHJcblxyXG5cclxuI2VkaXRvci1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYzYjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbn1cclxuXHJcbi5ibG9nLWNvbnRlbnQge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG5cclxuICAgIC50YWctbGFiZWwge1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnN1Ym1pdC1yb3cge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuLmltYWdlLXVwbG9hZHtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBib3JkZXI6IDA7XHJcbn0iXX0= */", ".talk-bubble[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n  display: inline-block;\n  position: relative;\n  width: 100%;\n  height: auto;\n  background-color: #EEFBFB;\n  opacity: 0.8;\n}\n\n.round[_ngcontent-%COMP%] {\n  border-radius: 30px;\n  -webkit-border-radius: 30px;\n  -moz-border-radius: 30px;\n}\n\n.blog-border[_ngcontent-%COMP%] {\n  border: 3px solid #5D5C61;\n}\n\n#blogs[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n#blogs[_ngcontent-%COMP%]   .new-post[_ngcontent-%COMP%] {\n  width: 80%;\n  background-color: #B1A296;\n  border-radius: 15px;\n  margin-bottom: 15px;\n  font-weight: 600;\n}\n\n#blogs[_ngcontent-%COMP%]   .edit[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  margin-top: -15px;\n  color: #EEFBFB;\n  background-color: #5D5C61;\n  padding: 7px;\n  border-radius: 20px;\n  font-size: 15px;\n  height: 34px;\n}\n\n\n\n.tri-right.btm-left-in[_ngcontent-%COMP%]:before {\n  content: \" \";\n  position: absolute;\n  width: 0;\n  height: 0;\n  left: 35px;\n  right: auto;\n  top: auto;\n  bottom: -27px;\n  border: 13px solid;\n  border-color: #5D5C61 transparent transparent #5D5C61;\n}\n\n.tri-right.btm-left-in[_ngcontent-%COMP%]:after {\n  content: \" \";\n  position: absolute;\n  width: 0;\n  height: 0;\n  left: 38px;\n  right: auto;\n  top: auto;\n  bottom: -20px;\n  border: 12px solid;\n  border-color: #EEFBFB transparent transparent #EEFBFB;\n}\n\n\n\n.blog-content[_ngcontent-%COMP%] {\n  text-align: center;\n  word-break: break-word;\n  padding: 5px;\n}\n\n.blog-content[_ngcontent-%COMP%]   #overview[_ngcontent-%COMP%] {\n  padding: 10px 0;\n}\n\n.blog-content[_ngcontent-%COMP%]   #overview[_ngcontent-%COMP%]   #thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 250px;\n  object-fit: contain;\n  display: block;\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.blog-content[_ngcontent-%COMP%]   #content[_ngcontent-%COMP%] {\n  padding-top: 10px;\n}\n\n.blog-content[_ngcontent-%COMP%]   #meta-data[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.blog-content[_ngcontent-%COMP%]   #meta-data[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 1px 10px;\n  border-radius: 10px;\n  background-color: #708090;\n  opacity: 0.85;\n  margin: 5px;\n}\n\n.blog-content[_ngcontent-%COMP%]   #meta-data[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #EEFBFB;\n  margin: 0;\n  display: inline-block;\n}\n\n.blog-content[_ngcontent-%COMP%]   #meta-data[_ngcontent-%COMP%]   .author[_ngcontent-%COMP%], .blog-content[_ngcontent-%COMP%]   #meta-data[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  opacity: 0.7;\n  text-align: right;\n}\n\n.blog-content[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n\n\n#filters[_ngcontent-%COMP%] {\n  z-index: 2;\n}\n\n#filters[_ngcontent-%COMP%]   .filter-container[_ngcontent-%COMP%] {\n  padding: 10px;\n  background-color: #d5e7ec;\n  border-radius: 10px;\n  position: fixed;\n  border: 3px solid #5D5C61;\n  padding-right: 20px;\n  margin-right: -10px;\n  width: 200px;\n  right: 0;\n}\n\n#filters[_ngcontent-%COMP%]   .hidden[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  width: 0;\n  height: 0;\n  border: 0;\n}\n\n#filters[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n\n#filters[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%] {\n  padding: 10px 0;\n}\n\n#filters[_ngcontent-%COMP%]   .custom-day[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 0.185rem 0.25rem;\n  display: inline-block;\n  height: 2rem;\n  width: 2rem;\n}\n\n#filters[_ngcontent-%COMP%]   .custom-day.focused[_ngcontent-%COMP%] {\n  background-color: #e6e6e6;\n}\n\n#filters[_ngcontent-%COMP%]   .custom-day.range[_ngcontent-%COMP%], #filters[_ngcontent-%COMP%]   .custom-day[_ngcontent-%COMP%]:hover {\n  background-color: #0275d8;\n  color: white;\n}\n\n#filters[_ngcontent-%COMP%]   .custom-day.faded[_ngcontent-%COMP%] {\n  background-color: rgba(2, 117, 216, 0.5);\n}\n\n#filters[_ngcontent-%COMP%]   .submit-filter[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n\n#filters[_ngcontent-%COMP%]   .calendar[_ngcontent-%COMP%] {\n  padding-left: 7px;\n  padding-right: 7px;\n}\n\n@media (max-width: 1500px) and (min-width: 992px) {\n  #blogs[_ngcontent-%COMP%] {\n    margin-right: 200px;\n  }\n}\n\n@media (max-width: 576px) {\n  .filter-header[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .form-group[_ngcontent-%COMP%] {\n    margin-left: auto;\n    margin-right: auto;\n  }\n\n  #filters[_ngcontent-%COMP%] {\n    margin: 15px;\n    text-align: center;\n  }\n\n  .filter-container[_ngcontent-%COMP%] {\n    display: contents;\n  }\n}\n\n.vertical-middle[_ngcontent-%COMP%] {\n  margin-top: auto;\n  margin-bottom: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGJsb2dzLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXHZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkNGUTtFREdSLFlBQUE7QUFESjs7QUFJQTtFQUNJLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSx3QkFBQTtBQURKOztBQUtBO0VBQ0kseUJBQUE7QUFGSjs7QUFLQTtFQUNJLGtCQUFBO0FBRko7O0FBSUk7RUFDSSxVQUFBO0VBQ0EseUJDekJHO0VEMEJILG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUZSOztBQUtJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQ2hDSTtFRGlDSix5QkNyQ0k7RURzQ0osWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFIUjs7QUFPQSxzREFBQTs7QUFDQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EscURBQUE7QUFKSjs7QUFNQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EscURBQUE7QUFISjs7QUFNQSxxQ0FBQTs7QUFDQTtFQUNJLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBSEo7O0FBS0k7RUFDSSxlQUFBO0FBSFI7O0FBTVk7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFFQSxpQkFBQTtFQUNBLGtCQUFBO0FBTGhCOztBQVVJO0VBQ0ksaUJBQUE7QUFSUjs7QUFhUTtFQUNJLGdCQUFBO0FBWFo7O0FBYVk7RUFDSSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkMzR047RUQ0R00sYUFBQTtFQUNBLFdBQUE7QUFYaEI7O0FBYWdCO0VBQ0ksY0MzR1I7RUQ0R1EsU0FBQTtFQUNBLHFCQUFBO0FBWHBCOztBQWdCUTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtBQWRaOztBQWtCSTtFQUNJLFNBQUE7QUFoQlI7O0FBb0JBLHFDQUFBOztBQUNBO0VBQ0ksVUFBQTtBQWpCSjs7QUFtQkk7RUFDSSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFFQSxZQUFBO0VBQ0EsUUFBQTtBQWxCUjs7QUFvQkk7RUFDSSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtBQWxCUjs7QUFvQkk7RUFDSSxlQUFBO0FBbEJSOztBQW9CSTtFQUNJLGVBQUE7QUFsQlI7O0FBb0JJO0VBQ0ksa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFsQlI7O0FBb0JJO0VBQ0kseUJBQUE7QUFsQlI7O0FBb0JJO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0FBbEJSOztBQW9CSTtFQUNJLHdDQUFBO0FBbEJSOztBQW9CSTtFQUNJLGdCQUFBO0FBbEJSOztBQW9CSTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUFsQlI7O0FBc0JBO0VBQ0k7SUFDSSxtQkFBQTtFQW5CTjtBQUNGOztBQXNCQTtFQUNJO0lBQ0ksYUFBQTtFQXBCTjs7RUF1QkU7SUFDSSxpQkFBQTtJQUNBLGtCQUFBO0VBcEJOOztFQXVCRTtJQUNJLFlBQUE7SUFDQSxrQkFBQTtFQXBCTjs7RUF1QkU7SUFDSSxpQkFBQTtFQXBCTjtBQUNGOztBQXVCQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7QUFyQkoiLCJmaWxlIjoiYmxvZ3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi9hc3NldHMvdmFyaWFibGVzLnNjc3MnO1xyXG5cclxuLnRhbGstYnViYmxlIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR0ZXh0TGlnaHQ7XHJcbiAgICBvcGFjaXR5OiAuODtcclxufVxyXG5cclxuLnJvdW5ke1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIFxyXG59XHJcblxyXG4uYmxvZy1ib3JkZXJ7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCAkc2Vjb25kYXJ5O1xyXG59XHJcblxyXG4jYmxvZ3Mge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIC5uZXctcG9zdCB7XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGVydGlhcnk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmVkaXQge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogMTBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtMTVweDtcclxuICAgICAgICBjb2xvcjogJHRleHRMaWdodDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5O1xyXG4gICAgICAgIHBhZGRpbmc6IDdweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICBoZWlnaHQ6IDM0cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qUmlnaHQgdHJpYW5nbGUsIHBsYWNlZCBib3R0b20gbGVmdCBzaWRlIHNsaWdodGx5IGluKi9cclxuLnRyaS1yaWdodC5idG0tbGVmdC1pbjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyAnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICBsZWZ0OiAzNXB4OyBcclxuICAgIHJpZ2h0OiBhdXRvO1xyXG4gICAgdG9wOiBhdXRvO1xyXG4gICAgYm90dG9tOiAtMjdweDtcclxuICAgIGJvcmRlcjogMTNweCBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogJHNlY29uZGFyeSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAkc2Vjb25kYXJ5O1xyXG59XHJcbi50cmktcmlnaHQuYnRtLWxlZnQtaW46YWZ0ZXJ7XHJcbiAgICBjb250ZW50OiAnICc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMDtcclxuICAgIGxlZnQ6IDM4cHg7XHJcbiAgICByaWdodDogYXV0bztcclxuICAgIHRvcDogYXV0bztcclxuICAgIGJvdHRvbTogLTIwcHg7XHJcbiAgICBib3JkZXI6IDEycHggc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6ICR0ZXh0TGlnaHQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgJHRleHRMaWdodFxyXG59XHJcblxyXG4vKioqKioqKioqIElOU0lERSBUSEUgQlVCQkxFICoqKioqKioqL1xyXG4uYmxvZy1jb250ZW50e1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuXHJcbiAgICAjb3ZlcnZpZXcge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuXHJcbiAgICAgICAgI3RodW1ibmFpbCB7XHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAyNTBweDtcclxuICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICNjb250ZW50IHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAjbWV0YS1kYXRhe1xyXG5cclxuICAgICAgICAudGFnc3tcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuXHJcbiAgICAgICAgICAgIC50YWcge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMXB4IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnk7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAuODU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDVweDtcclxuXHJcbiAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHRleHRMaWdodDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmF1dGhvciwuZGF0ZXtcclxuICAgICAgICAgICAgb3BhY2l0eTogLjc7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAucm93e1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxufVxyXG5cclxuLyoqKioqKioqKioqIEZJTFRFUiBTVFlMRVMgKioqKioqKioqKi9cclxuI2ZpbHRlcnMge1xyXG4gICAgei1pbmRleDogMjtcclxuXHJcbiAgICAuZmlsdGVyLWNvbnRhaW5lciB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDVlN2VjO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICRzZWNvbmRhcnk7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IC0xMHB4O1xyXG5cclxuICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICB9XHJcbiAgICAuaGlkZGVuIGlucHV0IHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICB3aWR0aDogMDtcclxuICAgICAgICBoZWlnaHQ6IDA7XHJcbiAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgfVxyXG4gICAgLmZvcm0tZ3JvdXB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLnRhZ3Mge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMDsgXHJcbiAgICB9XHJcbiAgICAuY3VzdG9tLWRheSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDAuMTg1cmVtIDAuMjVyZW07XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGhlaWdodDogMnJlbTtcclxuICAgICAgICB3aWR0aDogMnJlbTtcclxuICAgIH1cclxuICAgIC5jdXN0b20tZGF5LmZvY3VzZWQge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XHJcbiAgICB9XHJcbiAgICAuY3VzdG9tLWRheS5yYW5nZSwgLmN1c3RvbS1kYXk6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyLCAxMTcsIDIxNik7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gICAgLmN1c3RvbS1kYXkuZmFkZWQge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMiwgMTE3LCAyMTYsIDAuNSk7XHJcbiAgICB9XHJcbiAgICAuc3VibWl0LWZpbHRlciB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIH1cclxuICAgIC5jYWxlbmRhcntcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDdweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA3cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxNTAwcHgpIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICAgI2Jsb2dzIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAgIC5maWx0ZXItaGVhZGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC5mb3JtLWdyb3VwIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICB9XHJcblxyXG4gICAgI2ZpbHRlcnMge1xyXG4gICAgICAgIG1hcmdpbjogMTVweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmZpbHRlci1jb250YWluZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGNvbnRlbnRzO1xyXG4gICAgfVxyXG59XHJcblxyXG4udmVydGljYWwtbWlkZGxlIHtcclxuICAgIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG59IiwiLy8kcHJpbWFyeTogIzEyMjMyRTtcclxuJHByaW1hcnk6ICM3MDgwOTA7XHJcbiRzZWNvbmRhcnk6ICM1RDVDNjE7XHJcbiR0ZXJ0aWFyeTogI0IxQTI5NjtcclxuLy8kYmFja2dyb3VuZDogIzIwMzY0NztcclxuJGJhY2tncm91bmQ6ICM3Mzk1QUU7XHJcbiR0ZXh0TGlnaHQ6ICNFRUZCRkI7Il19 */"] });
const resizeImage = (settings) => {
    const file = settings.file;
    const maxSize = settings.maxSize;
    const reader = new FileReader();
    const image = new Image();
    const canvas = document.createElement('canvas');
    const dataURItoBlob = (dataURI) => {
        const bytes = dataURI.split(',')[0].indexOf('base64') >= 0 ?
            atob(dataURI.split(',')[1]) :
            unescape(dataURI.split(',')[1]);
        const mime = dataURI.split(',')[0].split(':')[1].split(';')[0];
        const max = bytes.length;
        const ia = new Uint8Array(max);
        for (var i = 0; i < max; i++)
            ia[i] = bytes.charCodeAt(i);
        return new Blob([ia], { type: mime });
    };
    const resize = () => {
        let width = image.width;
        let height = image.height;
        if (width > height) {
            if (width > maxSize) {
                height *= maxSize / width;
                width = maxSize;
            }
        }
        else {
            if (height > maxSize) {
                width *= maxSize / height;
                height = maxSize;
            }
        }
        canvas.width = width;
        canvas.height = height;
        canvas.getContext('2d').drawImage(image, 0, 0, width, height);
        let dataUrl = canvas.toDataURL('image/jpeg');
        return dataURItoBlob(dataUrl);
    };
    return new Promise((ok, no) => {
        if (!file.type.match(/image.*/)) {
            no(new Error("Not an image"));
            return;
        }
        reader.onload = (readerEvent) => {
            image.onload = () => ok(resize());
            image.src = readerEvent.target.result;
        };
        reader.readAsDataURL(file);
    });
};


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "8tEE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/services/auth.service */ "IYfF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");







const _c0 = function () { return [""]; };
const _c1 = function () { return ["fab", "discord"]; };
const _c2 = function () { return ["fab", "facebook"]; };
const _c3 = function () { return ["fab", "github"]; };
class AppComponent {
    constructor(library, authService) {
        this.authService = authService;
        this.isAdmin = false;
        this.title = 'ssd-website';
        this.discordLink = 'https://discord.gg/5SyB3yx';
        this.facebookLink = 'https://www.facebook.com/groups/ufssd';
        this.gitHubLink = 'https://github.com/ufssd';
        library.addIcons(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faDiscord"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faFacebook"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faGithub"]);
    }
    ngAfterViewInit() {
        if (this.authService.isLoggedIn == true) {
            this.isAdmin = true;
        }
    }
    logOut() {
        this.authService.SignOut().then((result) => { window.location.reload(); });
        console.log("logging in...");
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FaIconLibrary"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 20, vars: 12, consts: [["id", "page-container"], [1, "header", "row"], [1, "title", "col-12", "col-sm-auto", 3, "routerLink"], ["src", "./../assets/SSDLogo.svg", "alt", "ssd_logo", 1, "site-logo"], [1, "spacer", "col-sm", "sign-out"], ["role", "button", 1, "btn", "dark-button", "login-button", 3, "hidden", "click"], [1, "social-icons", "col-12", "col-sm-auto"], [1, "row", "justify-content-center", "align-items-center"], ["target", "_blank", 1, "social-icon", 3, "href"], ["size", "lg", 3, "icon"], ["id", "content", 1, "container"], ["id", "footer"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Society of Software Developers");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_button_click_7_listener() { return ctx.logOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Sign Out");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "fa-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "fa-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "fa-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](8, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx.isAdmin);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx.discordLink, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](9, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx.facebookLink, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](10, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx.gitHubLink, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](11, _c3));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FaIconComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: [".header[_ngcontent-%COMP%] {\n  background-color: #708090;\n  padding: 10px;\n  margin: 0;\n  flex: 0 1 auto;\n}\n.sign-out[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n.site-logo[_ngcontent-%COMP%] {\n  height: 40px;\n  display: inline-block;\n  margin-right: 15px;\n}\n.title[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #EEFBFB;\n  padding: 0;\n}\n.title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 100%;\n  vertical-align: middle;\n  margin-top: auto;\n  margin-bottom: auto;\n}\n.title[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n.spacer[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.social-icons[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.social-icons[_ngcontent-%COMP%]   .social-icon[_ngcontent-%COMP%] {\n  color: #EEFBFB;\n  padding: 0 7px;\n}\n#page-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  height: 100vh;\n}\n#content[_ngcontent-%COMP%] {\n  padding-top: 25px;\n  flex: 1 1 auto;\n}\n#footer[_ngcontent-%COMP%] {\n  background-color: #5D5C61;\n  margin-top: 50px;\n  flex: 0 1 100px;\n  width: 100%;\n  min-height: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcYXNzZXRzXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxvQ0FBQTtBQUNBO0VBQ0kseUJDSE07RURJTixhQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7QUFESjtBQUlBO0VBQ0ksaUJBQUE7QUFESjtBQUlBO0VBQ0ksWUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFESjtBQUlBO0VBQ0ksa0JBQUE7RUFDQSxjQ2hCUTtFRGlCUixVQUFBO0FBREo7QUFHSTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQURSO0FBSUE7RUFDSSxxQkFBQTtBQURKO0FBSUE7RUFDSSxVQUFBO0FBREo7QUFPSTtFQUNJLFlBQUE7QUFKUjtBQU9JO0VBQ0ksY0MzQ0k7RUQ0Q0osY0FBQTtBQUxSO0FBU0E7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FBTko7QUFTQTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtBQU5KO0FBU0E7RUFDSSx5QkNoRVE7RURpRVIsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBTkoiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vYXNzZXRzL3ZhcmlhYmxlcy5zY3NzJztcclxuXHJcbi8qKioqKioqKiAgSEVBREVSIFNUWUxFUyAgKioqKioqKioqKi9cclxuLmhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmbGV4OiAwIDEgYXV0bztcclxufVxyXG5cclxuLnNpZ24tb3V0IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4uc2l0ZS1sb2dvIHtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAkdGV4dExpZ2h0O1xyXG4gICAgcGFkZGluZzogMDtcclxuXHJcbiAgICBoMyB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxuICAgIH1cclxufVxyXG4udGl0bGU6aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uc3BhY2VyIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5zb2NpYWwtaWNvbnMge1xyXG4gICAgLy9tYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICBcclxuICAgIC5yb3d7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5zb2NpYWwtaWNvbntcclxuICAgICAgICBjb2xvcjogJHRleHRMaWdodDsgIFxyXG4gICAgICAgIHBhZGRpbmc6IDAgN3B4OyBcclxuICAgIH1cclxufVxyXG5cclxuI3BhZ2UtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbiNjb250ZW50IHtcclxuICAgIHBhZGRpbmctdG9wOiAyNXB4O1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuXHJcbiNmb290ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeTtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBmbGV4OiAwIDEgMTAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xyXG59IiwiLy8kcHJpbWFyeTogIzEyMjMyRTtcclxuJHByaW1hcnk6ICM3MDgwOTA7XHJcbiRzZWNvbmRhcnk6ICM1RDVDNjE7XHJcbiR0ZXJ0aWFyeTogI0IxQTI5NjtcclxuLy8kYmFja2dyb3VuZDogIzIwMzY0NztcclxuJGJhY2tncm91bmQ6ICM3Mzk1QUU7XHJcbiR0ZXh0TGlnaHQ6ICNFRUZCRkI7Il19 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: firebaseConfig, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firebaseConfig", function() { return firebaseConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _articles_articles_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./articles/articles.component */ "CrdI");
/* harmony import */ var _article_article_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./article/article.component */ "DLXL");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _blogs_blogs_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./blogs/blogs.component */ "qANX");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./blog/blog.component */ "LgBW");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/services/auth.service */ "IYfF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ "fXoL");



















const firebaseConfig = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].firebaseConfig;
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({ providers: [_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_16__["AuthService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_9__["AngularFireModule"].initializeApp(firebaseConfig),
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__["AngularFireAuthModule"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__["AngularFirestoreModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _articles_articles_component__WEBPACK_IMPORTED_MODULE_5__["ArticlesComponent"],
        _article_article_component__WEBPACK_IMPORTED_MODULE_6__["ArticleComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
        _blogs_blogs_component__WEBPACK_IMPORTED_MODULE_13__["BlogsComponent"],
        _blog_blog_component__WEBPACK_IMPORTED_MODULE_14__["BlogComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_9__["AngularFireModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__["AngularFireAuthModule"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__["AngularFirestoreModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"]] }); })();


/***/ }),

/***/ "eRTK":
/*!********************************************!*\
  !*** ./src/app/shared/guard/auth.guard.ts ***!
  \********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/auth.service */ "IYfF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(next, state) {
        if (this.authService.isLoggedIn !== true) {
            this.router.navigate(['login']);
        }
        return true;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "qANX":
/*!******************************************!*\
  !*** ./src/app/blogs/blogs.component.ts ***!
  \******************************************/
/*! exports provided: BlogsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogsComponent", function() { return BlogsComponent; });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/auth.service */ "IYfF");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");











function BlogsComponent_ng_template_34_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("mouseenter", function BlogsComponent_ng_template_34_Template_span_mouseenter_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11); const date_r8 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r10.hoveredDate = date_r8; })("mouseleave", function BlogsComponent_ng_template_34_Template_span_mouseleave_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r12.hoveredDate = null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const date_r8 = ctx.$implicit;
    const focused_r9 = ctx.focused;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("focused", focused_r9)("range", ctx_r2.isRange(date_r8))("faded", ctx_r2.isHovered(date_r8) || ctx_r2.isInside(date_r8));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", date_r8.day, " ");
} }
function BlogsComponent_div_71_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](tag_r16);
} }
const _c0 = function (a1) { return ["/blogs", a1]; };
const _c1 = function () { return ["fas", "pencil-alt"]; };
function BlogsComponent_div_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "fa-icon", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "img", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, BlogsComponent_div_71_div_17_Template, 3, 1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](24, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const blog_r13 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](13, _c0, blog_r13.id))("hidden", !ctx_r7.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](15, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", blog_r13.img, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](blog_r13.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](blog_r13.excerpt);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", blog_r13.content, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", blog_r13.tags);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Author: ", blog_r13.author, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](24, 10, blog_r13.date.toDate(), "dd MMM YYYY"));
} }
const _c2 = function () { return ["fas", "calendar-alt"]; };
class BlogsComponent {
    constructor(authService, library, db, calendar, formatter) {
        this.authService = authService;
        this.db = db;
        this.calendar = calendar;
        this.formatter = formatter;
        this.hoveredDate = null;
        this.isAdmin = false;
        this.fromDate = calendar.getToday();
        this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
        this.tags = {
            gm: true,
            gbm: true,
            projects: true,
            outreach: true,
            fundraisers: true
        };
        library.addIcons(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faCommentAlt"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faPencilAlt"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faCalendarAlt"]);
        console.log(library);
        // The code below will query all the blogs and return id + data
        //  This method is poorly optimized and not scallable. Later we should try only pulling needed documents.
        this.blogs$ = this.db.collection('blogs', ref => ref.orderBy('date', 'desc'))
            .snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(changes => {
            return changes.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return Object.assign({ id }, data); //the object that contains blog data also has an element named "id" that has the doccument name of the blog
            });
        }));
    }
    ngOnInit() {
        this.blogs$.subscribe(data => console.log(data)); //check the console for blogs data whenever the page loads or data updates
        if (this.authService.isLoggedIn == true) {
            this.isAdmin = true;
        }
    }
    /****** DATE PICKER FUNCTIONS ******/
    onDateSelection(date) {
        if (!this.fromDate && !this.toDate) {
            this.fromDate = date;
        }
        else if (this.fromDate && !this.toDate && date && date.after(this.fromDate)) {
            this.toDate = date;
        }
        else {
            this.toDate = null;
            this.fromDate = date;
        }
    }
    isHovered(date) {
        return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
    }
    isInside(date) {
        return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
    }
    isRange(date) {
        return date.equals(this.fromDate) || (this.toDate && date.equals(this.toDate)) || this.isInside(date) || this.isHovered(date);
    }
    validateInput(currentValue, input) {
        const parsed = this.formatter.parse(input);
        return parsed && this.calendar.isValid(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDate"].from(parsed)) ? _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDate"].from(parsed) : currentValue;
    }
    /************ FILTER FUNCTIONS ***********/
    submitFilters() {
        //This function can be used to filter through blogs$ and alter it to a new object to fit the parameters.
        //This method will only change the data displayed after "submit" is pressed.
        //Another method is to filter the *ngFor
        //I believe this will make the data change as the user inputs data.
        //A tutorial on this can be found here: https://javascript.plainenglish.io/how-to-apply-filters-to-ngfor-in-angular-dc7c1b608712
        console.log("searchtext: " + this.searchText);
        console.log("tags: ");
        console.log(this.tags);
        console.log("From: ");
        console.log(this.fromDate);
        console.log("To: ");
        console.log(this.toDate);
    }
}
BlogsComponent.ɵfac = function BlogsComponent_Factory(t) { return new (t || BlogsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FaIconLibrary"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCalendar"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDateParserFormatter"])); };
BlogsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: BlogsComponent, selectors: [["app-blogs"]], decls: 74, vars: 26, consts: [[1, "row", "justify-content-center"], ["id", "filters"], [1, "filter-container"], [1, "filter-header"], ["type", "text", "placeholder", "Search", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "tags"], [1, "form-check"], ["type", "checkbox", "value", "", "id", "flexCheckDefault", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "flexCheckDefault", 1, "form-check-label"], ["for", "flexCheckChecked", 1, "form-check-label"], [1, "d-none", "d-sm-flex", "form-inline"], [1, "hidden"], [1, "input-group"], ["name", "datepicker", "ngbDatepicker", "", "outsideDays", "hidden", "tabindex", "-1", 1, "form-control", 3, "autoClose", "displayMonths", "dayTemplate", "startDate", "dateSelect"], ["datepicker", "ngbDatepicker"], ["t", ""], [1, "form-group"], ["placeholder", "yyyy-mm-dd", "name", "dpFromDate", 1, "form-control", 3, "value", "input"], ["dpFromDate", ""], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-outline-secondary", "calendar", 3, "click"], ["size", "md", 3, "icon"], [1, "form-group", 2, "margin-top", "5px"], ["placeholder", "yyyy-mm-dd", "name", "dpToDate", 1, "form-control", 3, "value", "input"], ["dpToDate", ""], [1, "d-flex", "d-sm-none", "form-inline"], ["placeholder", "yyyy-mm-dd", "name", "from_dp", "ngbDatepicker", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["df", "ngbDatepicker"], ["placeholder", "yyyy-mm-dd", "name", "to_dp", "ngbDatepicker", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["dt", "ngbDatepicker"], [2, "display", "none"], ["role", "button", 1, "btn", "dark-button", "submit-filter", 3, "click"], ["id", "blogs", 1, "col-12", "col-sm-9", "col-lg"], ["href", "/blogs/new/", "role", "button", 1, "btn", "new-post", 3, "hidden"], ["class", "talk-bubble blog-border tri-right round btm-left-in", 4, "ngFor", "ngForOf"], [1, "col-12", "col-sm-3", "col-lg-auto"], [1, "custom-day", 3, "mouseenter", "mouseleave"], [1, "talk-bubble", "blog-border", "tri-right", "round", "btm-left-in"], [1, "edit", 3, "routerLink", "hidden"], ["size", "lg", 3, "icon"], [1, "blog-content"], ["id", "overview", 1, "row"], ["id", "thumbnail", 1, "col-6"], [3, "src"], [1, "col-6", "vertical-middle"], ["id", "title"], ["id", "excerpt"], ["id", "content", 3, "innerHTML"], ["id", "meta-data", 1, "row"], [1, "col", "tags"], ["class", "tag", 4, "ngFor", "ngForOf"], [1, "col-auto", "author"], [1, "col-auto", "date"], [1, "tag"]], template: function BlogsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function BlogsComponent_Template_input_ngModelChange_5_listener($event) { return ctx.searchText = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function BlogsComponent_Template_input_ngModelChange_8_listener($event) { return ctx.tags.gm = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, " General Meetings ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function BlogsComponent_Template_input_ngModelChange_12_listener($event) { return ctx.tags.gbm = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, " GBMs ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function BlogsComponent_Template_input_ngModelChange_16_listener($event) { return ctx.tags.projects = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, " Projects ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function BlogsComponent_Template_input_ngModelChange_20_listener($event) { return ctx.tags.outreach = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, " Outreach ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function BlogsComponent_Template_input_ngModelChange_24_listener($event) { return ctx.tags.fundraisers = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, " Fundraisers ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Date Range");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "input", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("dateSelect", function BlogsComponent_Template_input_dateSelect_32_listener($event) { return ctx.onDateSelection($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](34, BlogsComponent_ng_template_34_Template, 2, 7, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "input", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("input", function BlogsComponent_Template_input_input_38_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](39); return ctx.fromDate = ctx.validateInput(ctx.fromDate, _r3.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BlogsComponent_Template_button_click_41_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](33); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](42, "fa-icon", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "input", 23, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("input", function BlogsComponent_Template_input_input_45_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](46); return ctx.toDate = ctx.validateInput(ctx.toDate, _r4.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BlogsComponent_Template_button_click_48_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](33); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](49, "fa-icon", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "form", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "input", 26, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function BlogsComponent_Template_input_ngModelChange_53_listener($event) { return ctx.fromDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BlogsComponent_Template_button_click_56_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](54); return _r5.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](57, "fa-icon", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "input", 28, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function BlogsComponent_Template_input_ngModelChange_60_listener($event) { return ctx.toDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BlogsComponent_Template_button_click_63_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](61); return _r6.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](64, "fa-icon", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](65, "hr", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BlogsComponent_Template_button_click_66_listener() { return ctx.submitFilters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](70, "New Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](71, BlogsComponent_div_71_Template, 25, 16, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](72, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](73, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.searchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.tags.gm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.tags.gbm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.tags.projects);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.tags.outreach);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.tags.fundraisers);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("autoClose", "outside")("displayMonths", 2)("dayTemplate", _r1)("startDate", ctx.fromDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.formatter.format(ctx.fromDate));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](22, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.formatter.format(ctx.toDate));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](23, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.fromDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](24, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.toDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](25, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", !ctx.isAdmin);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](72, 20, ctx.blogs$));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbInputDatepicker"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FaIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]], styles: [".talk-bubble[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n  display: inline-block;\n  position: relative;\n  width: 100%;\n  height: auto;\n  background-color: #EEFBFB;\n  opacity: 0.8;\n}\n\n.round[_ngcontent-%COMP%] {\n  border-radius: 30px;\n  -webkit-border-radius: 30px;\n  -moz-border-radius: 30px;\n}\n\n.blog-border[_ngcontent-%COMP%] {\n  border: 3px solid #5D5C61;\n}\n\n#blogs[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n#blogs[_ngcontent-%COMP%]   .new-post[_ngcontent-%COMP%] {\n  width: 80%;\n  background-color: #B1A296;\n  border-radius: 15px;\n  margin-bottom: 15px;\n  font-weight: 600;\n}\n\n#blogs[_ngcontent-%COMP%]   .edit[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  margin-top: -15px;\n  color: #EEFBFB;\n  background-color: #5D5C61;\n  padding: 7px;\n  border-radius: 20px;\n  font-size: 15px;\n  height: 34px;\n}\n\n\n\n.tri-right.btm-left-in[_ngcontent-%COMP%]:before {\n  content: \" \";\n  position: absolute;\n  width: 0;\n  height: 0;\n  left: 35px;\n  right: auto;\n  top: auto;\n  bottom: -27px;\n  border: 13px solid;\n  border-color: #5D5C61 transparent transparent #5D5C61;\n}\n\n.tri-right.btm-left-in[_ngcontent-%COMP%]:after {\n  content: \" \";\n  position: absolute;\n  width: 0;\n  height: 0;\n  left: 38px;\n  right: auto;\n  top: auto;\n  bottom: -20px;\n  border: 12px solid;\n  border-color: #EEFBFB transparent transparent #EEFBFB;\n}\n\n\n\n.blog-content[_ngcontent-%COMP%] {\n  text-align: center;\n  word-break: break-word;\n  padding: 5px;\n}\n\n.blog-content[_ngcontent-%COMP%]   #overview[_ngcontent-%COMP%] {\n  padding: 10px 0;\n}\n\n.blog-content[_ngcontent-%COMP%]   #overview[_ngcontent-%COMP%]   #thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 250px;\n  object-fit: contain;\n  display: block;\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.blog-content[_ngcontent-%COMP%]   #content[_ngcontent-%COMP%] {\n  padding-top: 10px;\n}\n\n.blog-content[_ngcontent-%COMP%]   #meta-data[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.blog-content[_ngcontent-%COMP%]   #meta-data[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 1px 10px;\n  border-radius: 10px;\n  background-color: #708090;\n  opacity: 0.85;\n  margin: 5px;\n}\n\n.blog-content[_ngcontent-%COMP%]   #meta-data[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #EEFBFB;\n  margin: 0;\n  display: inline-block;\n}\n\n.blog-content[_ngcontent-%COMP%]   #meta-data[_ngcontent-%COMP%]   .author[_ngcontent-%COMP%], .blog-content[_ngcontent-%COMP%]   #meta-data[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  opacity: 0.7;\n  text-align: right;\n}\n\n.blog-content[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n\n\n#filters[_ngcontent-%COMP%] {\n  z-index: 2;\n}\n\n#filters[_ngcontent-%COMP%]   .filter-container[_ngcontent-%COMP%] {\n  padding: 10px;\n  background-color: #d5e7ec;\n  border-radius: 10px;\n  position: fixed;\n  border: 3px solid #5D5C61;\n  padding-right: 20px;\n  margin-right: -10px;\n  width: 200px;\n  right: 0;\n}\n\n#filters[_ngcontent-%COMP%]   .hidden[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  width: 0;\n  height: 0;\n  border: 0;\n}\n\n#filters[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n\n#filters[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%] {\n  padding: 10px 0;\n}\n\n#filters[_ngcontent-%COMP%]   .custom-day[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 0.185rem 0.25rem;\n  display: inline-block;\n  height: 2rem;\n  width: 2rem;\n}\n\n#filters[_ngcontent-%COMP%]   .custom-day.focused[_ngcontent-%COMP%] {\n  background-color: #e6e6e6;\n}\n\n#filters[_ngcontent-%COMP%]   .custom-day.range[_ngcontent-%COMP%], #filters[_ngcontent-%COMP%]   .custom-day[_ngcontent-%COMP%]:hover {\n  background-color: #0275d8;\n  color: white;\n}\n\n#filters[_ngcontent-%COMP%]   .custom-day.faded[_ngcontent-%COMP%] {\n  background-color: rgba(2, 117, 216, 0.5);\n}\n\n#filters[_ngcontent-%COMP%]   .submit-filter[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n\n#filters[_ngcontent-%COMP%]   .calendar[_ngcontent-%COMP%] {\n  padding-left: 7px;\n  padding-right: 7px;\n}\n\n@media (max-width: 1500px) and (min-width: 992px) {\n  #blogs[_ngcontent-%COMP%] {\n    margin-right: 200px;\n  }\n}\n\n@media (max-width: 576px) {\n  .filter-header[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .form-group[_ngcontent-%COMP%] {\n    margin-left: auto;\n    margin-right: auto;\n  }\n\n  #filters[_ngcontent-%COMP%] {\n    margin: 15px;\n    text-align: center;\n  }\n\n  .filter-container[_ngcontent-%COMP%] {\n    display: contents;\n  }\n}\n\n.vertical-middle[_ngcontent-%COMP%] {\n  margin-top: auto;\n  margin-bottom: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGJsb2dzLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXHZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkNGUTtFREdSLFlBQUE7QUFESjs7QUFJQTtFQUNJLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSx3QkFBQTtBQURKOztBQUtBO0VBQ0kseUJBQUE7QUFGSjs7QUFLQTtFQUNJLGtCQUFBO0FBRko7O0FBSUk7RUFDSSxVQUFBO0VBQ0EseUJDekJHO0VEMEJILG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUZSOztBQUtJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQ2hDSTtFRGlDSix5QkNyQ0k7RURzQ0osWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFIUjs7QUFPQSxzREFBQTs7QUFDQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EscURBQUE7QUFKSjs7QUFNQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EscURBQUE7QUFISjs7QUFNQSxxQ0FBQTs7QUFDQTtFQUNJLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBSEo7O0FBS0k7RUFDSSxlQUFBO0FBSFI7O0FBTVk7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFFQSxpQkFBQTtFQUNBLGtCQUFBO0FBTGhCOztBQVVJO0VBQ0ksaUJBQUE7QUFSUjs7QUFhUTtFQUNJLGdCQUFBO0FBWFo7O0FBYVk7RUFDSSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkMzR047RUQ0R00sYUFBQTtFQUNBLFdBQUE7QUFYaEI7O0FBYWdCO0VBQ0ksY0MzR1I7RUQ0R1EsU0FBQTtFQUNBLHFCQUFBO0FBWHBCOztBQWdCUTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtBQWRaOztBQWtCSTtFQUNJLFNBQUE7QUFoQlI7O0FBb0JBLHFDQUFBOztBQUNBO0VBQ0ksVUFBQTtBQWpCSjs7QUFtQkk7RUFDSSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFFQSxZQUFBO0VBQ0EsUUFBQTtBQWxCUjs7QUFvQkk7RUFDSSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtBQWxCUjs7QUFvQkk7RUFDSSxlQUFBO0FBbEJSOztBQW9CSTtFQUNJLGVBQUE7QUFsQlI7O0FBb0JJO0VBQ0ksa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFsQlI7O0FBb0JJO0VBQ0kseUJBQUE7QUFsQlI7O0FBb0JJO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0FBbEJSOztBQW9CSTtFQUNJLHdDQUFBO0FBbEJSOztBQW9CSTtFQUNJLGdCQUFBO0FBbEJSOztBQW9CSTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUFsQlI7O0FBc0JBO0VBQ0k7SUFDSSxtQkFBQTtFQW5CTjtBQUNGOztBQXNCQTtFQUNJO0lBQ0ksYUFBQTtFQXBCTjs7RUF1QkU7SUFDSSxpQkFBQTtJQUNBLGtCQUFBO0VBcEJOOztFQXVCRTtJQUNJLFlBQUE7SUFDQSxrQkFBQTtFQXBCTjs7RUF1QkU7SUFDSSxpQkFBQTtFQXBCTjtBQUNGOztBQXVCQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7QUFyQkoiLCJmaWxlIjoiYmxvZ3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi9hc3NldHMvdmFyaWFibGVzLnNjc3MnO1xyXG5cclxuLnRhbGstYnViYmxlIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR0ZXh0TGlnaHQ7XHJcbiAgICBvcGFjaXR5OiAuODtcclxufVxyXG5cclxuLnJvdW5ke1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIFxyXG59XHJcblxyXG4uYmxvZy1ib3JkZXJ7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCAkc2Vjb25kYXJ5O1xyXG59XHJcblxyXG4jYmxvZ3Mge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIC5uZXctcG9zdCB7XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGVydGlhcnk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmVkaXQge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogMTBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtMTVweDtcclxuICAgICAgICBjb2xvcjogJHRleHRMaWdodDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5O1xyXG4gICAgICAgIHBhZGRpbmc6IDdweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICBoZWlnaHQ6IDM0cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qUmlnaHQgdHJpYW5nbGUsIHBsYWNlZCBib3R0b20gbGVmdCBzaWRlIHNsaWdodGx5IGluKi9cclxuLnRyaS1yaWdodC5idG0tbGVmdC1pbjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyAnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICBsZWZ0OiAzNXB4OyBcclxuICAgIHJpZ2h0OiBhdXRvO1xyXG4gICAgdG9wOiBhdXRvO1xyXG4gICAgYm90dG9tOiAtMjdweDtcclxuICAgIGJvcmRlcjogMTNweCBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogJHNlY29uZGFyeSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAkc2Vjb25kYXJ5O1xyXG59XHJcbi50cmktcmlnaHQuYnRtLWxlZnQtaW46YWZ0ZXJ7XHJcbiAgICBjb250ZW50OiAnICc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMDtcclxuICAgIGxlZnQ6IDM4cHg7XHJcbiAgICByaWdodDogYXV0bztcclxuICAgIHRvcDogYXV0bztcclxuICAgIGJvdHRvbTogLTIwcHg7XHJcbiAgICBib3JkZXI6IDEycHggc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6ICR0ZXh0TGlnaHQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgJHRleHRMaWdodFxyXG59XHJcblxyXG4vKioqKioqKioqIElOU0lERSBUSEUgQlVCQkxFICoqKioqKioqL1xyXG4uYmxvZy1jb250ZW50e1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuXHJcbiAgICAjb3ZlcnZpZXcge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuXHJcbiAgICAgICAgI3RodW1ibmFpbCB7XHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAyNTBweDtcclxuICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICNjb250ZW50IHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAjbWV0YS1kYXRhe1xyXG5cclxuICAgICAgICAudGFnc3tcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuXHJcbiAgICAgICAgICAgIC50YWcge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMXB4IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnk7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAuODU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDVweDtcclxuXHJcbiAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHRleHRMaWdodDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmF1dGhvciwuZGF0ZXtcclxuICAgICAgICAgICAgb3BhY2l0eTogLjc7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAucm93e1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxufVxyXG5cclxuLyoqKioqKioqKioqIEZJTFRFUiBTVFlMRVMgKioqKioqKioqKi9cclxuI2ZpbHRlcnMge1xyXG4gICAgei1pbmRleDogMjtcclxuXHJcbiAgICAuZmlsdGVyLWNvbnRhaW5lciB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDVlN2VjO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICRzZWNvbmRhcnk7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IC0xMHB4O1xyXG5cclxuICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICB9XHJcbiAgICAuaGlkZGVuIGlucHV0IHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICB3aWR0aDogMDtcclxuICAgICAgICBoZWlnaHQ6IDA7XHJcbiAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgfVxyXG4gICAgLmZvcm0tZ3JvdXB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLnRhZ3Mge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMDsgXHJcbiAgICB9XHJcbiAgICAuY3VzdG9tLWRheSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDAuMTg1cmVtIDAuMjVyZW07XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGhlaWdodDogMnJlbTtcclxuICAgICAgICB3aWR0aDogMnJlbTtcclxuICAgIH1cclxuICAgIC5jdXN0b20tZGF5LmZvY3VzZWQge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XHJcbiAgICB9XHJcbiAgICAuY3VzdG9tLWRheS5yYW5nZSwgLmN1c3RvbS1kYXk6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyLCAxMTcsIDIxNik7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gICAgLmN1c3RvbS1kYXkuZmFkZWQge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMiwgMTE3LCAyMTYsIDAuNSk7XHJcbiAgICB9XHJcbiAgICAuc3VibWl0LWZpbHRlciB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIH1cclxuICAgIC5jYWxlbmRhcntcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDdweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA3cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxNTAwcHgpIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICAgI2Jsb2dzIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAgIC5maWx0ZXItaGVhZGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC5mb3JtLWdyb3VwIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICB9XHJcblxyXG4gICAgI2ZpbHRlcnMge1xyXG4gICAgICAgIG1hcmdpbjogMTVweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmZpbHRlci1jb250YWluZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGNvbnRlbnRzO1xyXG4gICAgfVxyXG59XHJcblxyXG4udmVydGljYWwtbWlkZGxlIHtcclxuICAgIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG59IiwiLy8kcHJpbWFyeTogIzEyMjMyRTtcclxuJHByaW1hcnk6ICM3MDgwOTA7XHJcbiRzZWNvbmRhcnk6ICM1RDVDNjE7XHJcbiR0ZXJ0aWFyeTogI0IxQTI5NjtcclxuLy8kYmFja2dyb3VuZDogIzIwMzY0NztcclxuJGJhY2tncm91bmQ6ICM3Mzk1QUU7XHJcbiR0ZXh0TGlnaHQ6ICNFRUZCRkI7Il19 */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _blogs_blogs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blogs/blogs.component */ "qANX");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blog/blog.component */ "LgBW");
/* harmony import */ var _articles_articles_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./articles/articles.component */ "CrdI");
/* harmony import */ var _article_article_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./article/article.component */ "DLXL");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/guard/auth.guard */ "eRTK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");

//import { ErrorComponent } from './error/error.component';









const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'articles', component: _articles_articles_component__WEBPACK_IMPORTED_MODULE_4__["ArticlesComponent"] },
    { path: 'articles/:id', component: _article_article_component__WEBPACK_IMPORTED_MODULE_5__["ArticleComponent"] },
    { path: 'blogs', component: _blogs_blogs_component__WEBPACK_IMPORTED_MODULE_2__["BlogsComponent"] },
    { path: 'blogs/:id', component: _blog_blog_component__WEBPACK_IMPORTED_MODULE_3__["BlogComponent"], canActivate: [_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/auth.service */ "IYfF");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



class LoginComponent {
    constructor(authService) {
        this.authService = authService;
        this.isAdmin = false;
    }
    ngOnInit() {
    }
    login() {
        this.authService.SignIn(this.username, this.password).then((result) => { window.location.reload(); });
        console.log("logging in...");
        console.log("email: " + this.username);
        console.log("password: " + this.password);
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 9, vars: 2, consts: [[1, "login-container", "row", "justify-content-center"], [1, "col-12", "col-md-8", "col-lg-4", "align-self-center"], ["type", "text", "placeholder", "Username", "required", "", "name", "username", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "password", "placeholder", "Password", "required", "", "name", "password", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", "role", "button", 1, "btn", "dark-button", "login-button", 3, "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Administrator Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_5_listener($event) { return ctx.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_6_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_7_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Log In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], styles: [".login-container[_ngcontent-%COMP%] {\n  height: 100%;\n  text-align: center;\n}\n\n.login-button[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0FBQ0oiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmxvZ2luLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map