webpackJsonp([0],{

/***/ 152:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 152;

/***/ }),

/***/ 195:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 195;

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__FirstPage_firstpage__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Signin_signin__ = __webpack_require__(283);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = (function () {
    function HomePage(app, menu, firebaseAuth) {
        this.firebaseAuth = firebaseAuth;
        menu.enable(true);
        this.user = firebaseAuth.authState;
        if (this.user._isScalar == false) {
            console.log("fail");
            this.rootPage = __WEBPACK_IMPORTED_MODULE_4__Signin_signin__["a" /* SigninPage */];
        }
        else {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_3__FirstPage_firstpage__["a" /* MainPage */];
        }
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_3__FirstPage_firstpage__["a" /* MainPage */] },
        ];
    }
    HomePage.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    return HomePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
], HomePage.prototype, "nav", void 0);
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({template:/*ion-inline-start:"D:\Works\ionic\xperia\src\pages\home\home.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n    </ion-content>\n\n  </ion-menu>\n\n  <!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n  <ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"D:\Works\ionic\xperia\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(251);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MainPage = (function () {
    function MainPage(navCtrl, alertCtrl, db) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.db = db;
        this.products = this.db.list('/Products');
        console.log("item");
    }
    MainPage.prototype.doCheckbox = function () {
        var _this = this;
        var alert = this.alertCtrl.create();
        alert.setTitle('Filter');
        alert.addInput({
            type: 'checkbox',
            label: 'Brands',
            value: 'value1',
            disabled: true
        });
        alert.addInput({
            type: 'checkbox',
            label: 'Royal Canin',
            value: 'value2',
            checked: true
        });
        alert.addInput({
            type: 'checkbox',
            label: 'Pedigree',
            value: 'value3'
        });
        alert.addButton('Cancel');
        alert.addButton({
            text: 'Okay',
            handler: function (data) {
                console.log('Checkbox data:', data);
                _this.testCheckboxOpen = false;
                _this.testCheckboxResult = data;
            }
        });
        alert.present().then(function () {
            _this.testCheckboxOpen = true;
        });
    };
    return MainPage;
}());
MainPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'page-main',template:/*ion-inline-start:"D:\Works\ionic\xperia\src\pages\FirstPage\firstpage.html"*/'<ion-header >\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Home</ion-title>\n\n  </ion-navbar>\n\n  </ion-header>\n\n  <ion-content >\n\n     <ion-searchbar ion-fixed style="" (ionInput)="getItems($event)"></ion-searchbar>\n\n\n\n     <ion-fab top right edge>\n\n        <button ion-fab mini (click)="doCheckbox()"><ion-icon name="funnel"></ion-icon></button>\n\n      </ion-fab>\n\n\n\n     <div style="margin-top:6rem;" >\n\n\n\n\n\n\n\n    <ion-card *ngFor="let product of products | async"  >\n\n\n\n      <img style="max-height:20rem;" src="../assets/img/pet2.jpg"/>\n\n\n\n      <ion-card-content>\n\n        <ion-card-title style="font-size:18px;">\n\n           {{product.brand}}  {{product.Type}}  Dog Food {{product.name}}, {{product.Weight}} Pack\n\n        </ion-card-title>\n\n        <p>by {{product.brand}}</p>\n\n      </ion-card-content>\n\n\n\n      <ion-row no-padding>\n\n        <ion-col text-left>\n\n          <p style="padding-left:10%;color:#DC143C;">&#8377;{{product.discount}} &nbsp;<del style="color:#000;">&#8377;{{product.price}}</del></p>\n\n          <p style="padding-left:10%;">saves &#8377;{{product.price-product.discount}}</p>\n\n        </ion-col>\n\n\n\n        <ion-col text-right>\n\n          <button ion-button clear small color="danger" icon-start style="margin-right:20%;">\n\n          <!--  <ion-icon name=\'share-alt\'></ion-icon> -->\n\n            Buy\n\n          </button>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n  </ion-card>\n\n\n\n\n\n\n\n  </div>\n\n  </ion-content>\n\n'/*ion-inline-end:"D:\Works\ionic\xperia\src\pages\FirstPage\firstpage.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
], MainPage);

//# sourceMappingURL=firstpage.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SigninPage = (function () {
    function SigninPage(alerCtrl, firebaseAuth) {
        this.alerCtrl = alerCtrl;
        this.firebaseAuth = firebaseAuth;
    }
    SigninPage.prototype.log = function () {
        this.login(this.email, this.pass);
    };
    SigninPage.prototype.login = function (email, password) {
        var _this = this;
        this.firebaseAuth
            .auth
            .signInWithEmailAndPassword(email, password)
            .then(function (value) {
            console.log('Nice, it worked!');
            window.location.href = "";
        })
            .catch(function (err) {
            _this.doAlert(err);
        });
    };
    SigninPage.prototype.doAlert = function (error) {
        var alert = this.alerCtrl.create({
            title: 'Login Failed',
            message: error,
            buttons: ['Ok']
        });
        alert.present();
    };
    return SigninPage;
}());
SigninPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'page-signin',template:/*ion-inline-start:"D:\Works\ionic\xperia\src\pages\Signin\signin.html"*/'<ion-header fixed>\n\n  <ion-navbar>\n\n    <ion-title>Log In</ion-title>\n\n  </ion-navbar>\n\n  </ion-header>\n\n\n\n<ion-content>\n\n  <ion-list style="margin-left:6%;margin-right:6%; margin-top:20%;">\n\n    <ion-item >\n\n      <ion-label  color="primary" stacked>Email</ion-label>\n\n      <ion-input type="email" [(ngModel)]="email" required> </ion-input>\n\n    </ion-item>\n\n\n\n</ion-list>\n\n<ion-list style="margin-left:6%;margin-right:6%;margin-top:3rem;">\n\n<ion-item >\n\n  <ion-label color="primary" stacked >Password</ion-label>\n\n  <ion-input [(ngModel)]="pass" type="password" required minlength="4"></ion-input>\n\n</ion-item>\n\n</ion-list>\n\n   <button style="margin-left:40%;margin-top:8rem;" ion-button round (click)="log()">Log In</button>\n\n   <p color="primary"  style="margin-top:5rem;margin-left:32%;" ><a routerLink="/register" routerLinkActive="active">Don\'t have an account yet?</a></p>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Works\ionic\xperia\src\pages\Signin\signin.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]])
], SigninPage);

//# sourceMappingURL=signin.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupPage = (function () {
    function SignupPage(alerCtrl, firebaseAuth) {
        this.alerCtrl = alerCtrl;
        this.firebaseAuth = firebaseAuth;
    }
    SignupPage.prototype.signup = function (email, password) {
        this.firebaseAuth
            .auth
            .createUserWithEmailAndPassword(email, password)
            .then(function (value) {
            console.log('Success!', value);
        })
            .catch(function (err) {
            console.log('Something went wrong:', err.message);
        });
    };
    return SignupPage;
}());
SignupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'page-signup',template:/*ion-inline-start:"D:\Works\ionic\xperia\src\pages\signup\signup.html"*/'\n<ion-header fixed>\n  <ion-navbar>\n    <ion-title>Sign Up</ion-title>\n  </ion-navbar>\n  </ion-header>\n\n\n  <ion-list style="margin-top:7rem;margin-left:6%;margin-right:6%; ">\n\n    <ion-item>\n      <ion-label stacked>Full Name</ion-label>\n      <ion-input type="text" required></ion-input>\n    </ion-item>\n    </ion-list>\n\n    <ion-list style="margin-left:6%;margin-right:6%; ">\n  <ion-item>\n    <ion-label stacked>Email</ion-label>\n    <ion-input type="email"></ion-input>\n  </ion-item>\n</ion-list>\n\n      <ion-list style="margin-left:6%;margin-right:6%; ">\n    <ion-item>\n      <ion-label stacked>New Password</ion-label>\n      <ion-input type="password"></ion-input>\n    </ion-item>\n\n  </ion-list>\n\n  <ion-list style="margin-left:6%;margin-right:6%; ">\n  <ion-item>\n  <ion-label stacked>Confirm Password</ion-label>\n  <ion-input type="password"></ion-input>\n  </ion-item>\n\n  </ion-list>\n  <div padding style="margin-top:-2%;">\n    <button ion-button color="primary" block>Sign Up</button>\n  </div>\n'/*ion-inline-end:"D:\Works\ionic\xperia\src\pages\signup\signup.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]])
], SignupPage);

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(296);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_router__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_FirstPage_firstpage__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_Signin_signin__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_signup_signup__ = __webpack_require__(284);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var config = {
    apiKey: "AIzaSyAREdPE_8pxyMf5852NL622vobIBR-Enbw",
    authDomain: "xperia-94cd1.firebaseapp.com",
    databaseURL: "https://xperia-94cd1.firebaseio.com",
    projectId: "xperia-94cd1",
    storageBucket: "xperia-94cd1.appspot.com",
    messagingSenderId: "743628871051"
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_FirstPage_firstpage__["a" /* MainPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_Signin_signin__["a" /* SigninPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_signup_signup__["a" /* SignupPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_router__["a" /* routes */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */]),
            __WEBPACK_IMPORTED_MODULE_6_angularfire2__["a" /* AngularFireModule */].initializeApp(config),
            __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__["b" /* AngularFireAuthModule */],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_FirstPage_firstpage__["a" /* MainPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_Signin_signin__["a" /* SigninPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_signup_signup__["a" /* SignupPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["w" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export router */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_home_home__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_signup_signup__ = __webpack_require__(284);



var router = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__pages_home_home__["a" /* HomePage */], pathMatch: 'full' },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_2__pages_signup_signup__["a" /* SignupPage */] }
];
var routes = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(router);
//# sourceMappingURL=app.router.js.map

/***/ }),

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(235);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({template:/*ion-inline-start:"D:\Works\ionic\xperia\src\app\app.html"*/'<router-outlet ></router-outlet>\n'/*ion-inline-end:"D:\Works\ionic\xperia\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[285]);
//# sourceMappingURL=main.js.map