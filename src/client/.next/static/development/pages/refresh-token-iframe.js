((window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/refresh-token-iframe.js"],{

/***/ "../../node_modules/@firebase/app/dist/index.cjs.js":
/*!*******************************************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/@firebase/app/dist/index.cjs.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, '__esModule', { value: true });

var util = __webpack_require__(/*! @firebase/util */ "../../node_modules/@firebase/util/dist/index.cjs.js");

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var contains = function (obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
};
var DEFAULT_ENTRY_NAME = '[DEFAULT]';
// An array to capture listeners before the true auth functions
// exist
var tokenListeners = [];
/**
 * Global context object for a collection of services using
 * a shared authentication state.
 */
var FirebaseAppImpl = /** @class */ (function () {
    function FirebaseAppImpl(options, config, firebase_) {
        this.firebase_ = firebase_;
        this.isDeleted_ = false;
        this.services_ = {};
        this.name_ = config.name;
        this._automaticDataCollectionEnabled =
            config.automaticDataCollectionEnabled || false;
        this.options_ = util.deepCopy(options);
        this.INTERNAL = {
            getUid: function () { return null; },
            getToken: function () { return Promise.resolve(null); },
            addAuthTokenListener: function (callback) {
                tokenListeners.push(callback);
                // Make sure callback is called, asynchronously, in the absence of the auth module
                setTimeout(function () { return callback(null); }, 0);
            },
            removeAuthTokenListener: function (callback) {
                tokenListeners = tokenListeners.filter(function (listener) { return listener !== callback; });
            }
        };
    }
    Object.defineProperty(FirebaseAppImpl.prototype, "automaticDataCollectionEnabled", {
        get: function () {
            this.checkDestroyed_();
            return this._automaticDataCollectionEnabled;
        },
        set: function (val) {
            this.checkDestroyed_();
            this._automaticDataCollectionEnabled = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FirebaseAppImpl.prototype, "name", {
        get: function () {
            this.checkDestroyed_();
            return this.name_;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FirebaseAppImpl.prototype, "options", {
        get: function () {
            this.checkDestroyed_();
            return this.options_;
        },
        enumerable: true,
        configurable: true
    });
    FirebaseAppImpl.prototype.delete = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.checkDestroyed_();
            resolve();
        })
            .then(function () {
            _this.firebase_.INTERNAL.removeApp(_this.name_);
            var services = [];
            Object.keys(_this.services_).forEach(function (serviceKey) {
                Object.keys(_this.services_[serviceKey]).forEach(function (instanceKey) {
                    services.push(_this.services_[serviceKey][instanceKey]);
                });
            });
            return Promise.all(services.map(function (service) {
                return service.INTERNAL.delete();
            }));
        })
            .then(function () {
            _this.isDeleted_ = true;
            _this.services_ = {};
        });
    };
    /**
     * Return a service instance associated with this app (creating it
     * on demand), identified by the passed instanceIdentifier.
     *
     * NOTE: Currently storage is the only one that is leveraging this
     * functionality. They invoke it by calling:
     *
     * ```javascript
     * firebase.app().storage('STORAGE BUCKET ID')
     * ```
     *
     * The service name is passed to this already
     * @internal
     */
    FirebaseAppImpl.prototype._getService = function (name, instanceIdentifier) {
        if (instanceIdentifier === void 0) { instanceIdentifier = DEFAULT_ENTRY_NAME; }
        this.checkDestroyed_();
        if (!this.services_[name]) {
            this.services_[name] = {};
        }
        if (!this.services_[name][instanceIdentifier]) {
            /**
             * If a custom instance has been defined (i.e. not '[DEFAULT]')
             * then we will pass that instance on, otherwise we pass `null`
             */
            var instanceSpecifier = instanceIdentifier !== DEFAULT_ENTRY_NAME
                ? instanceIdentifier
                : undefined;
            var service = this.firebase_.INTERNAL.factories[name](this, this.extendApp.bind(this), instanceSpecifier);
            this.services_[name][instanceIdentifier] = service;
        }
        return this.services_[name][instanceIdentifier];
    };
    /**
     * Callback function used to extend an App instance at the time
     * of service instance creation.
     */
    FirebaseAppImpl.prototype.extendApp = function (props) {
        var _this = this;
        // Copy the object onto the FirebaseAppImpl prototype
        util.deepExtend(this, props);
        /**
         * If the app has overwritten the addAuthTokenListener stub, forward
         * the active token listeners on to the true fxn.
         *
         * TODO: This function is required due to our current module
         * structure. Once we are able to rely strictly upon a single module
         * implementation, this code should be refactored and Auth should
         * provide these stubs and the upgrade logic
         */
        if (props.INTERNAL && props.INTERNAL.addAuthTokenListener) {
            tokenListeners.forEach(function (listener) {
                _this.INTERNAL.addAuthTokenListener(listener);
            });
            tokenListeners = [];
        }
    };
    /**
     * This function will throw an Error if the App has already been deleted -
     * use before performing API actions on the App.
     */
    FirebaseAppImpl.prototype.checkDestroyed_ = function () {
        if (this.isDeleted_) {
            error('app-deleted', { name: this.name_ });
        }
    };
    return FirebaseAppImpl;
}());
// Prevent dead-code elimination of these methods w/o invalid property
// copying.
(FirebaseAppImpl.prototype.name && FirebaseAppImpl.prototype.options) ||
    FirebaseAppImpl.prototype.delete ||
    console.log('dc');
/**
 * Return a firebase namespace object.
 *
 * In production, this will be called exactly once and the result
 * assigned to the 'firebase' global.  It may be called multiple times
 * in unit tests.
 */
function createFirebaseNamespace() {
    var apps_ = {};
    var factories = {};
    var appHooks = {};
    // A namespace is a plain JavaScript Object.
    var namespace = {
        // Hack to prevent Babel from modifying the object returned
        // as the firebase namespace.
        __esModule: true,
        initializeApp: initializeApp,
        app: app,
        apps: null,
        Promise: Promise,
        SDK_VERSION: '5.9.0',
        INTERNAL: {
            registerService: registerService,
            createFirebaseNamespace: createFirebaseNamespace,
            extendNamespace: extendNamespace,
            createSubscribe: util.createSubscribe,
            ErrorFactory: util.ErrorFactory,
            removeApp: removeApp,
            factories: factories,
            useAsService: useAsService,
            Promise: Promise,
            deepExtend: util.deepExtend
        }
    };
    // Inject a circular default export to allow Babel users who were previously
    // using:
    //
    //   import firebase from 'firebase';
    //   which becomes: var firebase = require('firebase').default;
    //
    // instead of
    //
    //   import * as firebase from 'firebase';
    //   which becomes: var firebase = require('firebase');
    util.patchProperty(namespace, 'default', namespace);
    // firebase.apps is a read-only getter.
    Object.defineProperty(namespace, 'apps', {
        get: getApps
    });
    /**
     * Called by App.delete() - but before any services associated with the App
     * are deleted.
     */
    function removeApp(name) {
        var app = apps_[name];
        callAppHooks(app, 'delete');
        delete apps_[name];
    }
    /**
     * Get the App object for a given name (or DEFAULT).
     */
    function app(name) {
        name = name || DEFAULT_ENTRY_NAME;
        if (!contains(apps_, name)) {
            error('no-app', { name: name });
        }
        return apps_[name];
    }
    util.patchProperty(app, 'App', FirebaseAppImpl);
    function initializeApp(options, rawConfig) {
        if (rawConfig === void 0) { rawConfig = {}; }
        if (typeof rawConfig !== 'object' || rawConfig === null) {
            var name_1 = rawConfig;
            rawConfig = { name: name_1 };
        }
        var config = rawConfig;
        if (config.name === undefined) {
            config.name = DEFAULT_ENTRY_NAME;
        }
        var name = config.name;
        if (typeof name !== 'string' || !name) {
            error('bad-app-name', { name: name + '' });
        }
        if (contains(apps_, name)) {
            error('duplicate-app', { name: name });
        }
        var app = new FirebaseAppImpl(options, config, namespace);
        apps_[name] = app;
        callAppHooks(app, 'create');
        return app;
    }
    /*
     * Return an array of all the non-deleted FirebaseApps.
     */
    function getApps() {
        // Make a copy so caller cannot mutate the apps list.
        return Object.keys(apps_).map(function (name) { return apps_[name]; });
    }
    /*
     * Register a Firebase Service.
     *
     * firebase.INTERNAL.registerService()
     *
     * TODO: Implement serviceProperties.
     */
    function registerService(name, createService, serviceProperties, appHook, allowMultipleInstances) {
        // Cannot re-register a service that already exists
        if (factories[name]) {
            error('duplicate-service', { name: name });
        }
        // Capture the service factory for later service instantiation
        factories[name] = createService;
        // Capture the appHook, if passed
        if (appHook) {
            appHooks[name] = appHook;
            // Run the **new** app hook on all existing apps
            getApps().forEach(function (app) {
                appHook('create', app);
            });
        }
        // The Service namespace is an accessor function ...
        var serviceNamespace = function (appArg) {
            if (appArg === void 0) { appArg = app(); }
            if (typeof appArg[name] !== 'function') {
                // Invalid argument.
                // This happens in the following case: firebase.storage('gs:/')
                error('invalid-app-argument', { name: name });
            }
            // Forward service instance lookup to the FirebaseApp.
            return appArg[name]();
        };
        // ... and a container for service-level properties.
        if (serviceProperties !== undefined) {
            util.deepExtend(serviceNamespace, serviceProperties);
        }
        // Monkey-patch the serviceNamespace onto the firebase namespace
        namespace[name] = serviceNamespace;
        // Patch the FirebaseAppImpl prototype
        FirebaseAppImpl.prototype[name] = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var serviceFxn = this._getService.bind(this, name);
            return serviceFxn.apply(this, allowMultipleInstances ? args : []);
        };
        return serviceNamespace;
    }
    /**
     * Patch the top-level firebase namespace with additional properties.
     *
     * firebase.INTERNAL.extendNamespace()
     */
    function extendNamespace(props) {
        util.deepExtend(namespace, props);
    }
    function callAppHooks(app, eventName) {
        Object.keys(factories).forEach(function (serviceName) {
            // Ignore virtual services
            var factoryName = useAsService(app, serviceName);
            if (factoryName === null) {
                return;
            }
            if (appHooks[factoryName]) {
                appHooks[factoryName](eventName, app);
            }
        });
    }
    // Map the requested service to a registered service name
    // (used to map auth to serverAuth service when needed).
    function useAsService(app, name) {
        if (name === 'serverAuth') {
            return null;
        }
        var useService = name;
        var options = app.options;
        return useService;
    }
    return namespace;
}
function error(code, args) {
    throw appErrors.create(code, args);
}
// TypeScript does not support non-string indexes!
// let errors: {[code: AppError: string} = {
var errors = {
    'no-app': "No Firebase App '{$name}' has been created - " +
        'call Firebase App.initializeApp()',
    'bad-app-name': "Illegal App name: '{$name}",
    'duplicate-app': "Firebase App named '{$name}' already exists",
    'app-deleted': "Firebase App named '{$name}' already deleted",
    'duplicate-service': "Firebase service named '{$name}' already registered",
    'sa-not-supported': 'Initializing the Firebase SDK with a service ' +
        'account is only allowed in a Node.js environment. On client ' +
        'devices, you should instead initialize the SDK with an api key and ' +
        'auth domain',
    'invalid-app-argument': 'firebase.{$name}() takes either no argument or a ' +
        'Firebase App instance.'
};
var appErrors = new util.ErrorFactory('app', 'Firebase', errors);

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Node detection logic from: https://github.com/iliakan/detect-node/
var isNode = false;
try {
    isNode =
        Object.prototype.toString.call(global.process) === '[object process]';
}
catch (e) { }
isNode &&
    console.warn("\nWarning: This is a browser-targeted Firebase bundle but it appears it is being\nrun in a Node environment.  If running in a Node environment, make sure you\nare using the bundle specified by the \"main\" field in package.json.\n\nIf you are using Webpack, you can specify \"main\" as the first item in\n\"resolve.mainFields\":\nhttps://webpack.js.org/configuration/resolve/#resolvemainfields\n\nIf using Rollup, use the rollup-plugin-node-resolve plugin and set \"module\"\nto false and \"main\" to true:\nhttps://github.com/rollup/rollup-plugin-node-resolve\n");
var firebase = createFirebaseNamespace();

exports.firebase = firebase;
exports.default = firebase;
//# sourceMappingURL=index.cjs.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../node_modules/@firebase/auth/dist/auth.esm.js":
/*!*******************************************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/@firebase/auth/dist/auth.esm.js ***!
  \*******************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/app */ "../../node_modules/@firebase/app/dist/index.cjs.js");
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_firebase_app__WEBPACK_IMPORTED_MODULE_0__);
(function() {var g,aa=aa||{},k=this;function l(a){return"string"==typeof a}function ba(a){return"boolean"==typeof a}var ca=/^[\w+/_-]+[=]{0,2}$/,da=null;function ea(){}
function fa(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function ha(a){return null===a}function ia(a){return"array"==fa(a)}function ja(a){var b=fa(a);return"array"==b||"object"==b&&"number"==typeof a.length}function n(a){return"function"==fa(a)}function q(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}var ka="closure_uid_"+(1E9*Math.random()>>>0),ma=0;function na(a,b,c){return a.call.apply(a.bind,arguments)}
function oa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function r(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?r=na:r=oa;return r.apply(null,arguments)}
function pa(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}var qa=Date.now||function(){return+new Date};function t(a,b){function c(){}c.prototype=b.prototype;a.pb=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.gd=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};function ra(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}};function u(a){if(Error.captureStackTrace)Error.captureStackTrace(this,u);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}t(u,Error);u.prototype.name="CustomError";function sa(a,b){a=a.split("%s");for(var c="",d=a.length-1,e=0;e<d;e++)c+=a[e]+(e<b.length?b[e]:"%s");u.call(this,c+a[d])}t(sa,u);sa.prototype.name="AssertionError";function ta(a,b){throw new sa("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));};function ua(a,b){this.c=a;this.f=b;this.b=0;this.a=null}ua.prototype.get=function(){if(0<this.b){this.b--;var a=this.a;this.a=a.next;a.next=null}else a=this.c();return a};function va(a,b){a.f(b);100>a.b&&(a.b++,b.next=a.a,a.a=b)};function wa(){this.b=this.a=null}var ya=new ua(function(){return new xa},function(a){a.reset()});wa.prototype.add=function(a,b){var c=ya.get();c.set(a,b);this.b?this.b.next=c:this.a=c;this.b=c};function za(){var a=Aa,b=null;a.a&&(b=a.a,a.a=a.a.next,a.a||(a.b=null),b.next=null);return b}function xa(){this.next=this.b=this.a=null}xa.prototype.set=function(a,b){this.a=a;this.b=b;this.next=null};xa.prototype.reset=function(){this.next=this.b=this.a=null};var Ba=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(l(a))return l(b)&&1==b.length?a.indexOf(b,0):-1;for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},v=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=l(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};
function Ca(a,b){var c=a.length,d=l(a)?a.split(""):a;for(--c;0<=c;--c)c in d&&b.call(void 0,d[c],c,a)}
var Da=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e=l(a)?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));return d},Ea=Array.prototype.some?function(a,b){return Array.prototype.some.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=l(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a))return!0;return!1};
function Fa(a){a:{var b=Ga;for(var c=a.length,d=l(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:l(a)?a.charAt(b):a[b]}function Ha(a,b){return 0<=Ba(a,b)}function Ia(a,b){b=Ba(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}function w(a,b){var c=0;Ca(a,function(d,e){b.call(void 0,d,e,a)&&1==Array.prototype.splice.call(a,e,1).length&&c++})}function Ja(a){return Array.prototype.concat.apply([],arguments)}
function Ka(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};var La=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},Ma=/&/g,Na=/</g,Oa=/>/g,Pa=/"/g,Qa=/'/g,Ra=/\x00/g,Sa=/[\x00&<>"']/;function y(a,b){return-1!=a.indexOf(b)}function Ta(a,b){return a<b?-1:a>b?1:0};var Ua;a:{var Va=k.navigator;if(Va){var Wa=Va.userAgent;if(Wa){Ua=Wa;break a}}Ua=""}function z(a){return y(Ua,a)};function Xa(a,b){for(var c in a)b.call(void 0,a[c],c,a)}function Ya(a){for(var b in a)return!1;return!0}function Za(a){var b={},c;for(c in a)b[c]=a[c];return b}var $a="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ab(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<$a.length;f++)c=$a[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};function bb(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")}function cb(a){Sa.test(a)&&(-1!=a.indexOf("&")&&(a=a.replace(Ma,"&amp;")),-1!=a.indexOf("<")&&(a=a.replace(Na,"&lt;")),-1!=a.indexOf(">")&&(a=a.replace(Oa,"&gt;")),-1!=a.indexOf('"')&&(a=a.replace(Pa,"&quot;")),-1!=a.indexOf("'")&&(a=a.replace(Qa,"&#39;")),-1!=a.indexOf("\x00")&&(a=a.replace(Ra,"&#0;")));return a};function db(a){k.setTimeout(function(){throw a;},0)}var eb;
function fb(){var a=k.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!z("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow;a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host;a=r(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});if("undefined"!==typeof a&&!z("Trident")&&!z("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var a=c.xb;c.xb=null;a()}};return function(a){d.next={xb:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};document.documentElement.appendChild(b)}:function(a){k.setTimeout(a,0)}};function hb(a,b){ib||jb();kb||(ib(),kb=!0);Aa.add(a,b)}var ib;function jb(){if(k.Promise&&k.Promise.resolve){var a=k.Promise.resolve(void 0);ib=function(){a.then(lb)}}else ib=function(){var a=lb;!n(k.setImmediate)||k.Window&&k.Window.prototype&&!z("Edge")&&k.Window.prototype.setImmediate==k.setImmediate?(eb||(eb=fb()),eb(a)):k.setImmediate(a)}}var kb=!1,Aa=new wa;function lb(){for(var a;a=za();){try{a.a.call(a.b)}catch(b){db(b)}va(ya,a)}kb=!1};function A(a,b){this.a=mb;this.i=void 0;this.f=this.b=this.c=null;this.g=this.h=!1;if(a!=ea)try{var c=this;a.call(b,function(a){nb(c,ob,a)},function(a){if(!(a instanceof pb))try{if(a instanceof Error)throw a;throw Error("Promise rejected.");}catch(e){}nb(c,qb,a)})}catch(d){nb(this,qb,d)}}var mb=0,ob=2,qb=3;function rb(){this.next=this.f=this.b=this.g=this.a=null;this.c=!1}rb.prototype.reset=function(){this.f=this.b=this.g=this.a=null;this.c=!1};var sb=new ua(function(){return new rb},function(a){a.reset()});
function tb(a,b,c){var d=sb.get();d.g=a;d.b=b;d.f=c;return d}function B(a){if(a instanceof A)return a;var b=new A(ea);nb(b,ob,a);return b}function C(a){return new A(function(b,c){c(a)})}function ub(a,b,c){vb(a,b,c,null)||hb(pa(b,a))}function wb(a){return new A(function(b,c){var d=a.length,e=[];if(d)for(var f=function(a,c){d--;e[a]=c;0==d&&b(e)},h=function(a){c(a)},m=0,p;m<a.length;m++)p=a[m],ub(p,pa(f,m),h);else b(e)})}
function xb(a){return new A(function(b){var c=a.length,d=[];if(c)for(var e=function(a,e,f){c--;d[a]=e?{Eb:!0,value:f}:{Eb:!1,reason:f};0==c&&b(d)},f=0,h;f<a.length;f++)h=a[f],ub(h,pa(e,f,!0),pa(e,f,!1));else b(d)})}A.prototype.then=function(a,b,c){return yb(this,n(a)?a:null,n(b)?b:null,c)};A.prototype.$goog_Thenable=!0;g=A.prototype;g.ia=function(a,b){a=tb(a,a,b);a.c=!0;zb(this,a);return this};g.s=function(a,b){return yb(this,null,a,b)};
g.cancel=function(a){this.a==mb&&hb(function(){var b=new pb(a);Ab(this,b)},this)};function Ab(a,b){if(a.a==mb)if(a.c){var c=a.c;if(c.b){for(var d=0,e=null,f=null,h=c.b;h&&(h.c||(d++,h.a==a&&(e=h),!(e&&1<d)));h=h.next)e||(f=h);e&&(c.a==mb&&1==d?Ab(c,b):(f?(d=f,d.next==c.f&&(c.f=d),d.next=d.next.next):Bb(c),Cb(c,e,qb,b)))}a.c=null}else nb(a,qb,b)}function zb(a,b){a.b||a.a!=ob&&a.a!=qb||Db(a);a.f?a.f.next=b:a.b=b;a.f=b}
function yb(a,b,c,d){var e=tb(null,null,null);e.a=new A(function(a,h){e.g=b?function(c){try{var e=b.call(d,c);a(e)}catch(x){h(x)}}:a;e.b=c?function(b){try{var e=c.call(d,b);void 0===e&&b instanceof pb?h(b):a(e)}catch(x){h(x)}}:h});e.a.c=a;zb(a,e);return e.a}g.Pc=function(a){this.a=mb;nb(this,ob,a)};g.Qc=function(a){this.a=mb;nb(this,qb,a)};
function nb(a,b,c){a.a==mb&&(a===c&&(b=qb,c=new TypeError("Promise cannot resolve to itself")),a.a=1,vb(c,a.Pc,a.Qc,a)||(a.i=c,a.a=b,a.c=null,Db(a),b!=qb||c instanceof pb||Eb(a,c)))}function vb(a,b,c,d){if(a instanceof A)return zb(a,tb(b||ea,c||null,d)),!0;if(ra(a))return a.then(b,c,d),!0;if(q(a))try{var e=a.then;if(n(e))return Fb(a,e,b,c,d),!0}catch(f){return c.call(d,f),!0}return!1}
function Fb(a,b,c,d,e){function f(a){m||(m=!0,d.call(e,a))}function h(a){m||(m=!0,c.call(e,a))}var m=!1;try{b.call(a,h,f)}catch(p){f(p)}}function Db(a){a.h||(a.h=!0,hb(a.Yb,a))}function Bb(a){var b=null;a.b&&(b=a.b,a.b=b.next,b.next=null);a.b||(a.f=null);return b}g.Yb=function(){for(var a;a=Bb(this);)Cb(this,a,this.a,this.i);this.h=!1};
function Cb(a,b,c,d){if(c==qb&&b.b&&!b.c)for(;a&&a.g;a=a.c)a.g=!1;if(b.a)b.a.c=null,Gb(b,c,d);else try{b.c?b.g.call(b.f):Gb(b,c,d)}catch(e){Hb.call(null,e)}va(sb,b)}function Gb(a,b,c){b==ob?a.g.call(a.f,c):a.b&&a.b.call(a.f,c)}function Eb(a,b){a.g=!0;hb(function(){a.g&&Hb.call(null,b)})}var Hb=db;function pb(a){u.call(this,a)}t(pb,u);pb.prototype.name="cancel";function Ib(){0!=Jb&&(Kb[this[ka]||(this[ka]=++ma)]=this);this.qa=this.qa;this.ja=this.ja}var Jb=0,Kb={};Ib.prototype.qa=!1;function Lb(a){if(!a.qa&&(a.qa=!0,a.va(),0!=Jb)){var b=a[ka]||(a[ka]=++ma);if(0!=Jb&&a.ja&&0<a.ja.length)throw Error(a+" did not empty its onDisposeCallbacks queue. This probably means it overrode dispose() or disposeInternal() without calling the superclass' method.");delete Kb[b]}}Ib.prototype.va=function(){if(this.ja)for(;this.ja.length;)this.ja.shift()()};function Mb(a){Mb[" "](a);return a}Mb[" "]=ea;function Nb(a,b){var c=Ob;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)};var Pb=z("Opera"),Qb=z("Trident")||z("MSIE"),Rb=z("Edge"),Sb=Rb||Qb,Tb=z("Gecko")&&!(y(Ua.toLowerCase(),"webkit")&&!z("Edge"))&&!(z("Trident")||z("MSIE"))&&!z("Edge"),Ub=y(Ua.toLowerCase(),"webkit")&&!z("Edge");function Vb(){var a=k.document;return a?a.documentMode:void 0}var Wb;
a:{var Xb="",Yb=function(){var a=Ua;if(Tb)return/rv:([^\);]+)(\)|;)/.exec(a);if(Rb)return/Edge\/([\d\.]+)/.exec(a);if(Qb)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Ub)return/WebKit\/(\S+)/.exec(a);if(Pb)return/(?:Version)[ \/]?(\S+)/.exec(a)}();Yb&&(Xb=Yb?Yb[1]:"");if(Qb){var Zb=Vb();if(null!=Zb&&Zb>parseFloat(Xb)){Wb=String(Zb);break a}}Wb=Xb}var Ob={};
function $b(a){return Nb(a,function(){for(var b=0,c=La(String(Wb)).split("."),d=La(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var h=c[f]||"",m=d[f]||"";do{h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];m=/(\d*)(\D*)(.*)/.exec(m)||["","","",""];if(0==h[0].length&&0==m[0].length)break;b=Ta(0==h[1].length?0:parseInt(h[1],10),0==m[1].length?0:parseInt(m[1],10))||Ta(0==h[2].length,0==m[2].length)||Ta(h[2],m[2]);h=h[3];m=m[3]}while(0==b)}return 0<=b})}var ac;var bc=k.document;
ac=bc&&Qb?Vb()||("CSS1Compat"==bc.compatMode?parseInt(Wb,10):5):void 0;var cc=Object.freeze||function(a){return a};var dc=!Qb||9<=Number(ac),ec=Qb&&!$b("9"),fc=function(){if(!k.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});try{k.addEventListener("test",ea,b),k.removeEventListener("test",ea,b)}catch(c){}return a}();function D(a,b){this.type=a;this.b=this.target=b;this.Kb=!0}D.prototype.preventDefault=function(){this.Kb=!1};function gc(a,b){D.call(this,a?a.type:"");this.relatedTarget=this.b=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.pointerId=0;this.pointerType="";this.a=null;if(a){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.b=b;if(b=a.relatedTarget){if(Tb){a:{try{Mb(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==
c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.key=a.key||"";this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=
a.metaKey;this.pointerId=a.pointerId||0;this.pointerType=l(a.pointerType)?a.pointerType:hc[a.pointerType]||"";this.a=a;a.defaultPrevented&&this.preventDefault()}}t(gc,D);var hc=cc({2:"touch",3:"pen",4:"mouse"});gc.prototype.preventDefault=function(){gc.pb.preventDefault.call(this);var a=this.a;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,ec)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};gc.prototype.f=function(){return this.a};var ic="closure_listenable_"+(1E6*Math.random()|0),jc=0;function kc(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.Ma=e;this.key=++jc;this.oa=this.Ia=!1}function lc(a){a.oa=!0;a.listener=null;a.proxy=null;a.src=null;a.Ma=null};function mc(a){this.src=a;this.a={};this.b=0}mc.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.a[f];a||(a=this.a[f]=[],this.b++);var h=nc(a,b,d,e);-1<h?(b=a[h],c||(b.Ia=!1)):(b=new kc(b,this.src,f,!!d,e),b.Ia=c,a.push(b));return b};function oc(a,b){var c=b.type;c in a.a&&Ia(a.a[c],b)&&(lc(b),0==a.a[c].length&&(delete a.a[c],a.b--))}function nc(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.oa&&f.listener==b&&f.capture==!!c&&f.Ma==d)return e}return-1};var pc="closure_lm_"+(1E6*Math.random()|0),qc={},rc=0;function sc(a,b,c,d,e){if(d&&d.once)tc(a,b,c,d,e);else if(ia(b))for(var f=0;f<b.length;f++)sc(a,b[f],c,d,e);else c=uc(c),a&&a[ic]?vc(a,b,c,q(d)?!!d.capture:!!d,e):wc(a,b,c,!1,d,e)}
function wc(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var h=q(e)?!!e.capture:!!e,m=xc(a);m||(a[pc]=m=new mc(a));c=m.add(b,c,d,h,f);if(!c.proxy){d=yc();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)fc||(e=h),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(zc(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");rc++}}
function yc(){var a=Ac,b=dc?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);if(!c)return c};return b}function tc(a,b,c,d,e){if(ia(b))for(var f=0;f<b.length;f++)tc(a,b[f],c,d,e);else c=uc(c),a&&a[ic]?Bc(a,b,c,q(d)?!!d.capture:!!d,e):wc(a,b,c,!0,d,e)}
function E(a,b,c,d,e){if(ia(b))for(var f=0;f<b.length;f++)E(a,b[f],c,d,e);else(d=q(d)?!!d.capture:!!d,c=uc(c),a&&a[ic])?(a=a.o,b=String(b).toString(),b in a.a&&(f=a.a[b],c=nc(f,c,d,e),-1<c&&(lc(f[c]),Array.prototype.splice.call(f,c,1),0==f.length&&(delete a.a[b],a.b--)))):a&&(a=xc(a))&&(b=a.a[b.toString()],a=-1,b&&(a=nc(b,c,d,e)),(c=-1<a?b[a]:null)&&Cc(c))}
function Cc(a){if("number"!=typeof a&&a&&!a.oa){var b=a.src;if(b&&b[ic])oc(b.o,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(zc(c),d):b.addListener&&b.removeListener&&b.removeListener(d);rc--;(c=xc(b))?(oc(c,a),0==c.b&&(c.src=null,b[pc]=null)):lc(a)}}}function zc(a){return a in qc?qc[a]:qc[a]="on"+a}
function Dc(a,b,c,d){var e=!0;if(a=xc(a))if(b=a.a[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.oa&&(f=Ec(f,d),e=e&&!1!==f)}return e}function Ec(a,b){var c=a.listener,d=a.Ma||a.src;a.Ia&&Cc(a);return c.call(d,b)}
function Ac(a,b){if(a.oa)return!0;if(!dc){if(!b)a:{b=["window","event"];for(var c=k,d=0;d<b.length;d++)if(c=c[b[d]],null==c){b=null;break a}b=c}d=b;b=new gc(d,this);c=!0;if(!(0>d.keyCode||void 0!=d.returnValue)){a:{var e=!1;if(0==d.keyCode)try{d.keyCode=-1;break a}catch(h){e=!0}if(e||void 0==d.returnValue)d.returnValue=!0}d=[];for(e=b.b;e;e=e.parentNode)d.push(e);a=a.type;for(e=d.length-1;0<=e;e--){b.b=d[e];var f=Dc(d[e],a,!0,b);c=c&&f}for(e=0;e<d.length;e++)b.b=d[e],f=Dc(d[e],a,!1,b),c=c&&f}return c}return Ec(a,
new gc(b,this))}function xc(a){a=a[pc];return a instanceof mc?a:null}var Fc="__closure_events_fn_"+(1E9*Math.random()>>>0);function uc(a){if(n(a))return a;a[Fc]||(a[Fc]=function(b){return a.handleEvent(b)});return a[Fc]};function F(){Ib.call(this);this.o=new mc(this);this.Rb=this;this.Wa=null}t(F,Ib);F.prototype[ic]=!0;F.prototype.addEventListener=function(a,b,c,d){sc(this,a,b,c,d)};F.prototype.removeEventListener=function(a,b,c,d){E(this,a,b,c,d)};
F.prototype.dispatchEvent=function(a){var b,c=this.Wa;if(c)for(b=[];c;c=c.Wa)b.push(c);c=this.Rb;var d=a.type||a;if(l(a))a=new D(a,c);else if(a instanceof D)a.target=a.target||c;else{var e=a;a=new D(d,c);ab(a,e)}e=!0;if(b)for(var f=b.length-1;0<=f;f--){var h=a.b=b[f];e=Gc(h,d,!0,a)&&e}h=a.b=c;e=Gc(h,d,!0,a)&&e;e=Gc(h,d,!1,a)&&e;if(b)for(f=0;f<b.length;f++)h=a.b=b[f],e=Gc(h,d,!1,a)&&e;return e};
F.prototype.va=function(){F.pb.va.call(this);if(this.o){var a=this.o,b=0,c;for(c in a.a){for(var d=a.a[c],e=0;e<d.length;e++)++b,lc(d[e]);delete a.a[c];a.b--}}this.Wa=null};function vc(a,b,c,d,e){a.o.add(String(b),c,!1,d,e)}function Bc(a,b,c,d,e){a.o.add(String(b),c,!0,d,e)}
function Gc(a,b,c,d){b=a.o.a[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var h=b[f];if(h&&!h.oa&&h.capture==c){var m=h.listener,p=h.Ma||h.src;h.Ia&&oc(a.o,h);e=!1!==m.call(p,d)&&e}}return e&&0!=d.Kb};function Hc(a,b,c){if(n(a))c&&(a=r(a,c));else if(a&&"function"==typeof a.handleEvent)a=r(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:k.setTimeout(a,b||0)}function Ic(a){var b=null;return(new A(function(c,d){b=Hc(function(){c(void 0)},a);-1==b&&d(Error("Failed to schedule timer."))})).s(function(a){k.clearTimeout(b);throw a;})};function Jc(a){if(a.S&&"function"==typeof a.S)return a.S();if(l(a))return a.split("");if(ja(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}b=[];c=0;for(d in a)b[c++]=a[d];return b}function Kc(a){if(a.U&&"function"==typeof a.U)return a.U();if(!a.S||"function"!=typeof a.S){if(ja(a)||l(a)){var b=[];a=a.length;for(var c=0;c<a;c++)b.push(c);return b}b=[];c=0;for(var d in a)b[c++]=d;return b}}
function Lc(a,b){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,void 0);else if(ja(a)||l(a))v(a,b,void 0);else for(var c=Kc(a),d=Jc(a),e=d.length,f=0;f<e;f++)b.call(void 0,d[f],c&&c[f],a)};function Mc(a,b){this.b={};this.a=[];this.c=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Mc)for(c=a.U(),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}g=Mc.prototype;g.S=function(){Nc(this);for(var a=[],b=0;b<this.a.length;b++)a.push(this.b[this.a[b]]);return a};g.U=function(){Nc(this);return this.a.concat()};
g.clear=function(){this.b={};this.c=this.a.length=0};function Nc(a){if(a.c!=a.a.length){for(var b=0,c=0;b<a.a.length;){var d=a.a[b];Oc(a.b,d)&&(a.a[c++]=d);b++}a.a.length=c}if(a.c!=a.a.length){var e={};for(c=b=0;b<a.a.length;)d=a.a[b],Oc(e,d)||(a.a[c++]=d,e[d]=1),b++;a.a.length=c}}g.get=function(a,b){return Oc(this.b,a)?this.b[a]:b};g.set=function(a,b){Oc(this.b,a)||(this.c++,this.a.push(a));this.b[a]=b};
g.forEach=function(a,b){for(var c=this.U(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};function Oc(a,b){return Object.prototype.hasOwnProperty.call(a,b)};var Pc=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Qc(a,b){if(a){a=a.split("&");for(var c=0;c<a.length;c++){var d=a[c].indexOf("="),e=null;if(0<=d){var f=a[c].substring(0,d);e=a[c].substring(d+1)}else f=a[c];b(f,e?decodeURIComponent(e.replace(/\+/g," ")):"")}}};function Rc(a,b){this.b=this.o=this.c="";this.i=null;this.h=this.g="";this.f=!1;if(a instanceof Rc){this.f=void 0!==b?b:a.f;Sc(this,a.c);this.o=a.o;this.b=a.b;Tc(this,a.i);this.g=a.g;b=a.a;var c=new Uc;c.c=b.c;b.a&&(c.a=new Mc(b.a),c.b=b.b);Vc(this,c);this.h=a.h}else a&&(c=String(a).match(Pc))?(this.f=!!b,Sc(this,c[1]||"",!0),this.o=Wc(c[2]||""),this.b=Wc(c[3]||"",!0),Tc(this,c[4]),this.g=Wc(c[5]||"",!0),Vc(this,c[6]||"",!0),this.h=Wc(c[7]||"")):(this.f=!!b,this.a=new Uc(null,this.f))}
Rc.prototype.toString=function(){var a=[],b=this.c;b&&a.push(Xc(b,Yc,!0),":");var c=this.b;if(c||"file"==b)a.push("//"),(b=this.o)&&a.push(Xc(b,Yc,!0),"@"),a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.i,null!=c&&a.push(":",String(c));if(c=this.g)this.b&&"/"!=c.charAt(0)&&a.push("/"),a.push(Xc(c,"/"==c.charAt(0)?Zc:$c,!0));(c=this.a.toString())&&a.push("?",c);(c=this.h)&&a.push("#",Xc(c,ad));return a.join("")};
function Sc(a,b,c){a.c=c?Wc(b,!0):b;a.c&&(a.c=a.c.replace(/:$/,""))}function Tc(a,b){if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.i=b}else a.i=null}function Vc(a,b,c){b instanceof Uc?(a.a=b,bd(a.a,a.f)):(c||(b=Xc(b,cd)),a.a=new Uc(b,a.f))}function G(a,b,c){a.a.set(b,c)}function dd(a,b){return a.a.get(b)}function ed(a){return a instanceof Rc?new Rc(a):new Rc(a,void 0)}function fd(a,b){var c=new Rc(null,void 0);Sc(c,"https");a&&(c.b=a);b&&(c.g=b);return c}
function Wc(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Xc(a,b,c){return l(a)?(a=encodeURI(a).replace(b,gd),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function gd(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Yc=/[#\/\?@]/g,$c=/[#\?:]/g,Zc=/[#\?]/g,cd=/[#\?@]/g,ad=/#/g;function Uc(a,b){this.b=this.a=null;this.c=a||null;this.f=!!b}
function hd(a){a.a||(a.a=new Mc,a.b=0,a.c&&Qc(a.c,function(b,c){a.add(decodeURIComponent(b.replace(/\+/g," ")),c)}))}function id(a){var b=Kc(a);if("undefined"==typeof b)throw Error("Keys are undefined");var c=new Uc(null,void 0);a=Jc(a);for(var d=0;d<b.length;d++){var e=b[d],f=a[d];ia(f)?jd(c,e,f):c.add(e,f)}return c}g=Uc.prototype;g.add=function(a,b){hd(this);this.c=null;a=kd(this,a);var c=this.a.get(a);c||this.a.set(a,c=[]);c.push(b);this.b+=1;return this};
function ld(a,b){hd(a);b=kd(a,b);Oc(a.a.b,b)&&(a.c=null,a.b-=a.a.get(b).length,a=a.a,Oc(a.b,b)&&(delete a.b[b],a.c--,a.a.length>2*a.c&&Nc(a)))}g.clear=function(){this.a=this.c=null;this.b=0};function md(a,b){hd(a);b=kd(a,b);return Oc(a.a.b,b)}g.forEach=function(a,b){hd(this);this.a.forEach(function(c,d){v(c,function(c){a.call(b,c,d,this)},this)},this)};g.U=function(){hd(this);for(var a=this.a.S(),b=this.a.U(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};
g.S=function(a){hd(this);var b=[];if(l(a))md(this,a)&&(b=Ja(b,this.a.get(kd(this,a))));else{a=this.a.S();for(var c=0;c<a.length;c++)b=Ja(b,a[c])}return b};g.set=function(a,b){hd(this);this.c=null;a=kd(this,a);md(this,a)&&(this.b-=this.a.get(a).length);this.a.set(a,[b]);this.b+=1;return this};g.get=function(a,b){if(!a)return b;a=this.S(a);return 0<a.length?String(a[0]):b};function jd(a,b,c){ld(a,b);0<c.length&&(a.c=null,a.a.set(kd(a,b),Ka(c)),a.b+=c.length)}
g.toString=function(){if(this.c)return this.c;if(!this.a)return"";for(var a=[],b=this.a.U(),c=0;c<b.length;c++){var d=b[c],e=encodeURIComponent(String(d));d=this.S(d);for(var f=0;f<d.length;f++){var h=e;""!==d[f]&&(h+="="+encodeURIComponent(String(d[f])));a.push(h)}}return this.c=a.join("&")};function kd(a,b){b=String(b);a.f&&(b=b.toLowerCase());return b}function bd(a,b){b&&!a.f&&(hd(a),a.c=null,a.a.forEach(function(a,b){var c=b.toLowerCase();b!=c&&(ld(this,b),jd(this,c,a))},a));a.f=b};var nd=!Qb||9<=Number(ac);function od(a,b){this.a=a===pd&&b||"";this.b=qd}od.prototype.na=!0;od.prototype.ma=function(){return this.a};od.prototype.toString=function(){return"Const{"+this.a+"}"};function rd(a){if(a instanceof od&&a.constructor===od&&a.b===qd)return a.a;ta("expected object of type Const, got '"+a+"'");return"type_error:Const"}var qd={},pd={};function sd(){this.a="";this.b=td}sd.prototype.na=!0;sd.prototype.ma=function(){return this.a};sd.prototype.toString=function(){return"TrustedResourceUrl{"+this.a+"}"};function ud(a){if(a instanceof sd&&a.constructor===sd&&a.b===td)return a.a;ta("expected object of type TrustedResourceUrl, got '"+a+"' of type "+fa(a));return"type_error:TrustedResourceUrl"}
function vd(a,b){var c=rd(a);if(!wd.test(c))throw Error("Invalid TrustedResourceUrl format: "+c);a=c.replace(xd,function(a,e){if(!Object.prototype.hasOwnProperty.call(b,e))throw Error('Found marker, "'+e+'", in format string, "'+c+'", but no valid label mapping found in args: '+JSON.stringify(b));a=b[e];return a instanceof od?rd(a):encodeURIComponent(String(a))});return yd(a)}var xd=/%{(\w+)}/g,wd=/^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i,td={};
function yd(a){var b=new sd;b.a=a;return b};function zd(){this.a="";this.b=Ad}zd.prototype.na=!0;zd.prototype.ma=function(){return this.a};zd.prototype.toString=function(){return"SafeUrl{"+this.a+"}"};function Bd(a){if(a instanceof zd&&a.constructor===zd&&a.b===Ad)return a.a;ta("expected object of type SafeUrl, got '"+a+"' of type "+fa(a));return"type_error:SafeUrl"}var Cd=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
function Dd(a){if(a instanceof zd)return a;a="object"==typeof a&&a.na?a.ma():String(a);Cd.test(a)||(a="about:invalid#zClosurez");return Ed(a)}var Ad={};function Ed(a){var b=new zd;b.a=a;return b}Ed("about:blank");function Fd(){this.a="";this.b=Gd}Fd.prototype.na=!0;Fd.prototype.ma=function(){return this.a};Fd.prototype.toString=function(){return"SafeHtml{"+this.a+"}"};function Hd(a){if(a instanceof Fd&&a.constructor===Fd&&a.b===Gd)return a.a;ta("expected object of type SafeHtml, got '"+a+"' of type "+fa(a));return"type_error:SafeHtml"}var Gd={};function Id(a){var b=new Fd;b.a=a;return b}Id("<!DOCTYPE html>");Id("");Id("<br>");function Jd(a,b){a.src=ud(b);if(null===da)b:{b=k.document;if((b=b.querySelector&&b.querySelector("script[nonce]"))&&(b=b.nonce||b.getAttribute("nonce"))&&ca.test(b)){da=b;break b}da=""}b=da;b&&a.setAttribute("nonce",b)};function Kd(a){var b=document;return l(a)?b.getElementById(a):a}function Ld(a,b){Xa(b,function(b,d){b&&"object"==typeof b&&b.na&&(b=b.ma());"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:Md.hasOwnProperty(d)?a.setAttribute(Md[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})}
var Md={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function Nd(a,b,c){var d=arguments,e=document,f=String(d[0]),h=d[1];if(!nd&&h&&(h.name||h.type)){f=["<",f];h.name&&f.push(' name="',cb(h.name),'"');if(h.type){f.push(' type="',cb(h.type),'"');var m={};ab(m,h);delete m.type;h=m}f.push(">");f=f.join("")}f=e.createElement(f);h&&(l(h)?f.className=h:ia(h)?f.className=h.join(" "):Ld(f,h));2<d.length&&Od(e,f,d);return f}
function Od(a,b,c){function d(c){c&&b.appendChild(l(c)?a.createTextNode(c):c)}for(var e=2;e<c.length;e++){var f=c[e];!ja(f)||q(f)&&0<f.nodeType?d(f):v(Pd(f)?Ka(f):f,d)}}function Pd(a){if(a&&"number"==typeof a.length){if(q(a))return"function"==typeof a.item||"string"==typeof a.item;if(n(a))return"function"==typeof a.item}return!1};function Qd(a){var b=[];Rd(new Sd,a,b);return b.join("")}function Sd(){}
function Rd(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(ia(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Rd(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Td(d,c),c.push(":"),Rd(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Td(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}var Ud={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Vd=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;
function Td(a,b){b.push('"',a.replace(Vd,function(a){var b=Ud[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),Ud[a]=b);return b}),'"')};/*

 Copyright 2017 Google Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function Wd(){var a=H();return Qb&&!!ac&&11==ac||/Edge\/\d+/.test(a)}function Xd(){return k.window&&k.window.location.href||self&&self.location&&self.location.href||""}function Yd(a,b){b=b||k.window;var c="about:blank";a&&(c=Bd(Dd(a)));b.location.href=c}function Zd(a,b){var c=[],d;for(d in a)d in b?typeof a[d]!=typeof b[d]?c.push(d):"object"==typeof a[d]&&null!=a[d]&&null!=b[d]?0<Zd(a[d],b[d]).length&&c.push(d):a[d]!==b[d]&&c.push(d):c.push(d);for(d in b)d in a||c.push(d);return c}
function $d(){var a=H();a=ae(a)!=be?null:(a=a.match(/\sChrome\/(\d+)/i))&&2==a.length?parseInt(a[1],10):null;return a&&30>a?!1:!Qb||!ac||9<ac}function ce(a){a=(a||H()).toLowerCase();return a.match(/android/)||a.match(/webos/)||a.match(/iphone|ipad|ipod/)||a.match(/blackberry/)||a.match(/windows phone/)||a.match(/iemobile/)?!0:!1}function de(a){a=a||k.window;try{a.close()}catch(b){}}
function ee(a,b,c){var d=Math.floor(1E9*Math.random()).toString();b=b||500;c=c||600;var e=(window.screen.availHeight-c)/2,f=(window.screen.availWidth-b)/2;b={width:b,height:c,top:0<e?e:0,left:0<f?f:0,location:!0,resizable:!0,statusbar:!0,toolbar:!1};c=H().toLowerCase();d&&(b.target=d,y(c,"crios/")&&(b.target="_blank"));ae(H())==fe&&(a=a||"http://localhost",b.scrollbars=!0);c=a||"";(a=b)||(a={});d=window;b=c instanceof zd?c:Dd("undefined"!=typeof c.href?c.href:String(c));c=a.target||c.target;e=[];
for(h in a)switch(h){case "width":case "height":case "top":case "left":e.push(h+"="+a[h]);break;case "target":case "noopener":case "noreferrer":break;default:e.push(h+"="+(a[h]?1:0))}var h=e.join(",");(z("iPhone")&&!z("iPod")&&!z("iPad")||z("iPad")||z("iPod"))&&d.navigator&&d.navigator.standalone&&c&&"_self"!=c?(h=d.document.createElement("A"),b instanceof zd||b instanceof zd||(b="object"==typeof b&&b.na?b.ma():String(b),Cd.test(b)||(b="about:invalid#zClosurez"),b=Ed(b)),h.href=Bd(b),h.setAttribute("target",
c),a.noreferrer&&h.setAttribute("rel","noreferrer"),a=document.createEvent("MouseEvent"),a.initMouseEvent("click",!0,!0,d,1),h.dispatchEvent(a),h={}):a.noreferrer?(h=d.open("",c,h),a=Bd(b),h&&(Sb&&y(a,";")&&(a="'"+a.replace(/'/g,"%27")+"'"),h.opener=null,a=Id('<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url='+cb(a)+'">'),h.document.write(Hd(a)),h.document.close())):(h=d.open(Bd(b),c,h))&&a.noopener&&(h.opener=null);if(h)try{h.focus()}catch(m){}return h}
function ge(a){return new A(function(b){function c(){Ic(2E3).then(function(){if(!a||a.closed)b();else return c()})}return c()})}var he=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ie=/^[^@]+@[^@]+$/;function je(){var a=null;return(new A(function(b){"complete"==k.document.readyState?b():(a=function(){b()},tc(window,"load",a))})).s(function(b){E(window,"load",a);throw b;})}
function ke(){return le(void 0)?je().then(function(){return new A(function(a,b){var c=k.document,d=setTimeout(function(){b(Error("Cordova framework is not ready."))},1E3);c.addEventListener("deviceready",function(){clearTimeout(d);a()},!1)})}):C(Error("Cordova must run in an Android or iOS file scheme."))}function le(a){a=a||H();return!("file:"!==me()||!a.toLowerCase().match(/iphone|ipad|ipod|android/))}function ne(){var a=k.window;try{return!(!a||a==a.top)}catch(b){return!1}}
function oe(){return"object"!==typeof k.window&&"function"===typeof k.importScripts}function pe(){return _firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL.hasOwnProperty("reactNative")?"ReactNative":_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL.hasOwnProperty("node")?"Node":oe()?"Worker":"Browser"}function qe(){var a=pe();return"ReactNative"===a||"Node"===a}function re(){for(var a=50,b=[];0<a;)b.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62*Math.random()))),a--;return b.join("")}var fe="Firefox",be="Chrome";
function ae(a){var b=a.toLowerCase();if(y(b,"opera/")||y(b,"opr/")||y(b,"opios/"))return"Opera";if(y(b,"iemobile"))return"IEMobile";if(y(b,"msie")||y(b,"trident/"))return"IE";if(y(b,"edge/"))return"Edge";if(y(b,"firefox/"))return fe;if(y(b,"silk/"))return"Silk";if(y(b,"blackberry"))return"Blackberry";if(y(b,"webos"))return"Webos";if(!y(b,"safari/")||y(b,"chrome/")||y(b,"crios/")||y(b,"android"))if(!y(b,"chrome/")&&!y(b,"crios/")||y(b,"edge/")){if(y(b,"android"))return"Android";if((a=a.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/))&&
2==a.length)return a[1]}else return be;else return"Safari";return"Other"}var se={Wc:"FirebaseCore-web",Yc:"FirebaseUI-web"};function te(a,b){b=b||[];var c=[],d={},e;for(e in se)d[se[e]]=!0;for(e=0;e<b.length;e++)"undefined"!==typeof d[b[e]]&&(delete d[b[e]],c.push(b[e]));c.sort();b=c;b.length||(b=["FirebaseCore-web"]);c=pe();"Browser"===c?(d=H(),c=ae(d)):"Worker"===c&&(d=H(),c=ae(d)+"-"+c);return c+"/JsCore/"+a+"/"+b.join(",")}function H(){return k.navigator&&k.navigator.userAgent||""}
function I(a,b){a=a.split(".");b=b||k;for(var c=0;c<a.length&&"object"==typeof b&&null!=b;c++)b=b[a[c]];c!=a.length&&(b=void 0);return b}function ue(){try{var a=k.localStorage,b=ve();if(a)return a.setItem(b,"1"),a.removeItem(b),Wd()?!!k.indexedDB:!0}catch(c){return oe()&&!!k.indexedDB}return!1}function we(){return(xe()||"chrome-extension:"===me()||le())&&!qe()&&ue()&&!oe()}function xe(){return"http:"===me()||"https:"===me()}function me(){return k.location&&k.location.protocol||null}
function ye(a){a=a||H();return ce(a)||ae(a)==fe?!1:!0}function ze(a){return"undefined"===typeof a?null:Qd(a)}function Ae(a){var b={},c;for(c in a)a.hasOwnProperty(c)&&null!==a[c]&&void 0!==a[c]&&(b[c]=a[c]);return b}function Be(a){if(null!==a)return JSON.parse(a)}function ve(a){return a?a:Math.floor(1E9*Math.random()).toString()}function Ce(a){a=a||H();return"Safari"==ae(a)||a.toLowerCase().match(/iphone|ipad|ipod/)?!1:!0}
function De(){var a=k.___jsl;if(a&&a.H)for(var b in a.H)if(a.H[b].r=a.H[b].r||[],a.H[b].L=a.H[b].L||[],a.H[b].r=a.H[b].L.concat(),a.CP)for(var c=0;c<a.CP.length;c++)a.CP[c]=null}function Ee(a,b){if(a>b)throw Error("Short delay should be less than long delay!");this.a=a;this.c=b;a=H();b=pe();this.b=ce(a)||"ReactNative"===b}
Ee.prototype.get=function(){var a=k.navigator;return(a&&"boolean"===typeof a.onLine&&(xe()||"chrome-extension:"===me()||"undefined"!==typeof a.connection)?a.onLine:1)?this.b?this.c:this.a:Math.min(5E3,this.a)};function Fe(){var a=k.document;return a&&"undefined"!==typeof a.visibilityState?"visible"==a.visibilityState:!0}
function Ge(){var a=k.document,b=null;return Fe()||!a?B():(new A(function(c){b=function(){Fe()&&(a.removeEventListener("visibilitychange",b,!1),c())};a.addEventListener("visibilitychange",b,!1)})).s(function(c){a.removeEventListener("visibilitychange",b,!1);throw c;})}function He(a){try{var b=new Date(parseInt(a,10));if(!isNaN(b.getTime())&&!/[^0-9]/.test(a))return b.toUTCString()}catch(c){}return null}function Ie(){return!(!I("fireauth.oauthhelper",k)&&!I("fireauth.iframe",k))}
function Je(){var a=k.navigator;return a&&a.serviceWorker&&a.serviceWorker.controller||null}function Ke(){var a=k.navigator;return a&&a.serviceWorker?B().then(function(){return a.serviceWorker.ready}).then(function(a){return a.active||null}).s(function(){return null}):B(null)};var Le={};function Me(a){Le[a]||(Le[a]=!0,"undefined"!==typeof console&&"function"===typeof console.warn&&console.warn(a))};var Ne;try{var Oe={};Object.defineProperty(Oe,"abcd",{configurable:!0,enumerable:!0,value:1});Object.defineProperty(Oe,"abcd",{configurable:!0,enumerable:!0,value:2});Ne=2==Oe.abcd}catch(a){Ne=!1}function J(a,b,c){Ne?Object.defineProperty(a,b,{configurable:!0,enumerable:!0,value:c}):a[b]=c}function K(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&J(a,c,b[c])}function Pe(a){var b={};K(b,a);return b}function Qe(a){var b={},c;for(c in a)a.hasOwnProperty(c)&&(b[c]=a[c]);return b}
function Re(a,b){if(!b||!b.length)return!0;if(!a)return!1;for(var c=0;c<b.length;c++){var d=a[b[c]];if(void 0===d||null===d||""===d)return!1}return!0}function Se(a){var b=a;if("object"==typeof a&&null!=a){b="length"in a?[]:{};for(var c in a)J(b,c,Se(a[c]))}return b};function Te(a){var b={},c=a[Ue],d=a[Ve];a=a[We];if(!a||a!=Xe&&!c)throw Error("Invalid provider user info!");b[Ye]=d||null;b[Ze]=c||null;J(this,$e,a);J(this,af,Se(b))}var Xe="EMAIL_SIGNIN",Ue="email",Ve="newEmail",We="requestType",Ze="email",Ye="fromEmail",af="data",$e="operation";function L(a,b){this.code=bf+a;this.message=b||cf[a]||""}t(L,Error);L.prototype.C=function(){return{code:this.code,message:this.message}};L.prototype.toJSON=function(){return this.C()};function df(a){var b=a&&a.code;return b?new L(b.substring(bf.length),a.message):null}
var bf="auth/",cf={"argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",
"code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",
"dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-already-in-use":"The email address is already in use by another account.","expired-action-code":"The action code has expired. ","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal error has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",
"invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal error has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure use the verification code provided by the user.",
"invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.",
"invalid-email":"The email address is badly formatted.","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is malformed or has expired.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",
"invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",
"wrong-password":"The password is invalid or the user does not have a password.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.",
"invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",
"missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal error has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The OIDC ID token requires a valid unhashed nonce.",
"missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network error (such as timeout, interrupted connection or unreachable host) has occurred.",
"no-auth-event":"An internal error has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',
"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.",
"rejected-credential":"The request contains malformed or mismatching credentials.",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-persistence-type":"The current environment does not support the specified persistence type.",
"user-cancelled":"User did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled."};function ef(a){var b=a[ff];if("undefined"===typeof b)throw new L("missing-continue-uri");if("string"!==typeof b||"string"===typeof b&&!b.length)throw new L("invalid-continue-uri");this.h=b;this.b=this.a=null;this.g=!1;var c=a[gf];if(c&&"object"===typeof c){b=c[hf];var d=c[jf];c=c[kf];if("string"===typeof b&&b.length){this.a=b;if("undefined"!==typeof d&&"boolean"!==typeof d)throw new L("argument-error",jf+" property must be a boolean when specified.");this.g=!!d;if("undefined"!==typeof c&&("string"!==
typeof c||"string"===typeof c&&!c.length))throw new L("argument-error",kf+" property must be a non empty string when specified.");this.b=c||null}else{if("undefined"!==typeof b)throw new L("argument-error",hf+" property must be a non empty string when specified.");if("undefined"!==typeof d||"undefined"!==typeof c)throw new L("missing-android-pkg-name");}}else if("undefined"!==typeof c)throw new L("argument-error",gf+" property must be a non null object when specified.");this.f=null;if((b=a[lf])&&"object"===
typeof b)if(b=b[mf],"string"===typeof b&&b.length)this.f=b;else{if("undefined"!==typeof b)throw new L("argument-error",mf+" property must be a non empty string when specified.");}else if("undefined"!==typeof b)throw new L("argument-error",lf+" property must be a non null object when specified.");b=a[nf];if("undefined"!==typeof b&&"boolean"!==typeof b)throw new L("argument-error",nf+" property must be a boolean when specified.");this.c=!!b;a=a[of];if("undefined"!==typeof a&&("string"!==typeof a||"string"===
typeof a&&!a.length))throw new L("argument-error",of+" property must be a non empty string when specified.");this.i=a||null}var gf="android",of="dynamicLinkDomain",nf="handleCodeInApp",lf="iOS",ff="url",jf="installApp",kf="minimumVersion",hf="packageName",mf="bundleId";
function pf(a){var b={};b.continueUrl=a.h;b.canHandleCodeInApp=a.c;if(b.androidPackageName=a.a)b.androidMinimumVersion=a.b,b.androidInstallApp=a.g;b.iOSBundleId=a.f;b.dynamicLinkDomain=a.i;for(var c in b)null===b[c]&&delete b[c];return b};function qf(a){return Da(a,function(a){a=a.toString(16);return 1<a.length?a:"0"+a}).join("")};var rf=null,sf=null;function tf(a){var b="";uf(a,function(a){b+=String.fromCharCode(a)});return b}function uf(a,b){function c(b){for(;d<a.length;){var c=a.charAt(d++),e=sf[c];if(null!=e)return e;if(!/^[\s\xa0]*$/.test(c))throw Error("Unknown base64 encoding at char: "+c);}return b}vf();for(var d=0;;){var e=c(-1),f=c(0),h=c(64),m=c(64);if(64===m&&-1===e)break;b(e<<2|f>>4);64!=h&&(b(f<<4&240|h>>2),64!=m&&b(h<<6&192|m))}}
function vf(){if(!rf){rf={};sf={};for(var a=0;65>a;a++)rf[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a),sf[rf[a]]=a,62<=a&&(sf["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a)]=a)}};function wf(a){this.c=a.sub;qa();this.a=a.provider_id||a.firebase&&a.firebase.sign_in_provider||null;this.b=!!a.is_anonymous||"anonymous"==this.a}wf.prototype.f=function(){return this.b};function xf(a){return(a=yf(a))&&a.sub&&a.iss&&a.aud&&a.exp?new wf(a):null}function yf(a){if(!a)return null;a=a.split(".");if(3!=a.length)return null;a=a[1];for(var b=(4-a.length%4)%4,c=0;c<b;c++)a+=".";try{return JSON.parse(tf(a))}catch(d){}return null};var zf={bd:{bb:"https://www.googleapis.com/identitytoolkit/v3/relyingparty/",jb:"https://securetoken.googleapis.com/v1/token",id:"p"},dd:{bb:"https://staging-www.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/",jb:"https://staging-securetoken.sandbox.googleapis.com/v1/token",id:"s"},ed:{bb:"https://www-googleapis-test.sandbox.google.com/identitytoolkit/v3/relyingparty/",jb:"https://test-securetoken.sandbox.googleapis.com/v1/token",id:"t"}};
function Af(a){for(var b in zf)if(zf[b].id===a)return a=zf[b],{firebaseEndpoint:a.bb,secureTokenEndpoint:a.jb};return null}var Bf;Bf=Af("__EID__")?"__EID__":void 0;var Cf="oauth_consumer_key oauth_nonce oauth_signature oauth_signature_method oauth_timestamp oauth_token oauth_version".split(" "),Df=["client_id","response_type","scope","redirect_uri","state"],Ef={Xc:{Na:"locale",Ba:500,Aa:600,Oa:"facebook.com",ib:Df},Zc:{Na:null,Ba:500,Aa:620,Oa:"github.com",ib:Df},$c:{Na:"hl",Ba:515,Aa:680,Oa:"google.com",ib:Df},fd:{Na:"lang",Ba:485,Aa:705,Oa:"twitter.com",ib:Cf}};function Ff(a){for(var b in Ef)if(Ef[b].Oa==a)return Ef[b];return null};function Gf(a){var b={};b["facebook.com"]=Hf;b["google.com"]=If;b["github.com"]=Jf;b["twitter.com"]=Kf;var c=a&&a[Lf];try{if(c)return b[c]?new b[c](a):new Mf(a);if("undefined"!==typeof a[Nf])return new Of(a)}catch(d){}return null}var Nf="idToken",Lf="providerId";
function Of(a){var b=a[Lf];if(!b&&a[Nf]){var c=xf(a[Nf]);c&&c.a&&(b=c.a)}if(!b)throw Error("Invalid additional user info!");if("anonymous"==b||"custom"==b)b=null;c=!1;"undefined"!==typeof a.isNewUser?c=!!a.isNewUser:"identitytoolkit#SignupNewUserResponse"===a.kind&&(c=!0);J(this,"providerId",b);J(this,"isNewUser",c)}function Mf(a){Of.call(this,a);a=Be(a.rawUserInfo||"{}");J(this,"profile",Se(a||{}))}t(Mf,Of);
function Hf(a){Mf.call(this,a);if("facebook.com"!=this.providerId)throw Error("Invalid provider ID!");}t(Hf,Mf);function Jf(a){Mf.call(this,a);if("github.com"!=this.providerId)throw Error("Invalid provider ID!");J(this,"username",this.profile&&this.profile.login||null)}t(Jf,Mf);function If(a){Mf.call(this,a);if("google.com"!=this.providerId)throw Error("Invalid provider ID!");}t(If,Mf);
function Kf(a){Mf.call(this,a);if("twitter.com"!=this.providerId)throw Error("Invalid provider ID!");J(this,"username",a.screenName||null)}t(Kf,Mf);function Pf(a){this.a=ed(a)};function Qf(a){var b=ed(a),c=dd(b,"link"),d=dd(ed(c),"link");b=dd(b,"deep_link_id");return dd(ed(b),"link")||b||d||c||a};function Rf(a,b){return a.then(function(a){if(a[M]){var c=xf(a[M]);if(!c||b!=c.c)throw new L("user-mismatch");return a}throw new L("user-mismatch");}).s(function(a){throw a&&a.code&&a.code==bf+"user-not-found"?new L("user-mismatch"):a;})}function Sf(a,b){if(b)this.a=b;else throw new L("internal-error","failed to construct a credential");J(this,"providerId",a);J(this,"signInMethod",a)}Sf.prototype.la=function(a){return Tf(a,Uf(this))};
Sf.prototype.b=function(a,b){var c=Uf(this);c.idToken=b;return Vf(a,c)};Sf.prototype.f=function(a,b){return Rf(Wf(a,Uf(this)),b)};function Uf(a){return{pendingToken:a.a,requestUri:"http://localhost"}}Sf.prototype.C=function(){return{providerId:this.providerId,signInMethod:this.signInMethod,pendingToken:this.a}};
function Xf(a,b,c){this.a=null;if(b.idToken||b.accessToken)b.idToken&&J(this,"idToken",b.idToken),b.accessToken&&J(this,"accessToken",b.accessToken),b.nonce&&!b.pendingToken&&J(this,"nonce",b.nonce),b.pendingToken&&(this.a=b.pendingToken);else if(b.oauthToken&&b.oauthTokenSecret)J(this,"accessToken",b.oauthToken),J(this,"secret",b.oauthTokenSecret);else throw new L("internal-error","failed to construct a credential");J(this,"providerId",a);J(this,"signInMethod",c)}
Xf.prototype.la=function(a){return Tf(a,Yf(this))};Xf.prototype.b=function(a,b){var c=Yf(this);c.idToken=b;return Vf(a,c)};Xf.prototype.f=function(a,b){var c=Yf(this);return Rf(Wf(a,c),b)};
function Yf(a){var b={};a.idToken&&(b.id_token=a.idToken);a.accessToken&&(b.access_token=a.accessToken);a.secret&&(b.oauth_token_secret=a.secret);b.providerId=a.providerId;a.nonce&&!a.a&&(b.nonce=a.nonce);b={postBody:id(b).toString(),requestUri:"http://localhost"};a.a&&(delete b.postBody,b.pendingToken=a.a);return b}
Xf.prototype.C=function(){var a={providerId:this.providerId,signInMethod:this.signInMethod};this.idToken&&(a.oauthIdToken=this.idToken);this.accessToken&&(a.oauthAccessToken=this.accessToken);this.secret&&(a.oauthTokenSecret=this.secret);this.nonce&&(a.nonce=this.nonce);this.a&&(a.pendingToken=this.a);return a};function Zf(a,b){this.Fc=b||[];K(this,{providerId:a,isOAuthProvider:!0});this.zb={};this.eb=(Ff(a)||{}).Na||null;this.ab=null}Zf.prototype.Da=function(a){this.zb=Za(a);return this};
function $f(a){if("string"!==typeof a||0!=a.indexOf("saml."))throw new L("argument-error",'SAML provider IDs must be prefixed with "saml."');Zf.call(this,a,[])}t($f,Zf);function N(a){Zf.call(this,a,Df);this.a=[]}t(N,Zf);N.prototype.ua=function(a){Ha(this.a,a)||this.a.push(a);return this};N.prototype.Fb=function(){return Ka(this.a)};
N.prototype.credential=function(a,b,c){if(!a&&!b)throw new L("argument-error","credential failed: must provide the ID token and/or the access token.");return new Xf(this.providerId,{idToken:a||null,accessToken:b||null,nonce:c||null},this.providerId)};function ag(){N.call(this,"facebook.com")}t(ag,N);J(ag,"PROVIDER_ID","facebook.com");J(ag,"FACEBOOK_SIGN_IN_METHOD","facebook.com");
function bg(a){if(!a)throw new L("argument-error","credential failed: expected 1 argument (the OAuth access token).");var b=a;q(a)&&(b=a.accessToken);return(new ag).credential(null,b)}function cg(){N.call(this,"github.com")}t(cg,N);J(cg,"PROVIDER_ID","github.com");J(cg,"GITHUB_SIGN_IN_METHOD","github.com");function dg(a){if(!a)throw new L("argument-error","credential failed: expected 1 argument (the OAuth access token).");var b=a;q(a)&&(b=a.accessToken);return(new cg).credential(null,b)}
function eg(){N.call(this,"google.com");this.ua("profile")}t(eg,N);J(eg,"PROVIDER_ID","google.com");J(eg,"GOOGLE_SIGN_IN_METHOD","google.com");function fg(a,b){var c=a;q(a)&&(c=a.idToken,b=a.accessToken);return(new eg).credential(c,b)}function gg(){Zf.call(this,"twitter.com",Cf)}t(gg,Zf);J(gg,"PROVIDER_ID","twitter.com");J(gg,"TWITTER_SIGN_IN_METHOD","twitter.com");
function hg(a,b){var c=a;q(c)||(c={oauthToken:a,oauthTokenSecret:b});if(!c.oauthToken||!c.oauthTokenSecret)throw new L("argument-error","credential failed: expected 2 arguments (the OAuth access token and secret).");return new Xf("twitter.com",c,"twitter.com")}function ig(a,b,c){this.a=a;this.c=b;J(this,"providerId","password");J(this,"signInMethod",c===O.EMAIL_LINK_SIGN_IN_METHOD?O.EMAIL_LINK_SIGN_IN_METHOD:O.EMAIL_PASSWORD_SIGN_IN_METHOD)}
ig.prototype.la=function(a){return this.signInMethod==O.EMAIL_LINK_SIGN_IN_METHOD?P(a,jg,{email:this.a,oobCode:this.c}):P(a,kg,{email:this.a,password:this.c})};ig.prototype.b=function(a,b){return this.signInMethod==O.EMAIL_LINK_SIGN_IN_METHOD?P(a,lg,{idToken:b,email:this.a,oobCode:this.c}):P(a,mg,{idToken:b,email:this.a,password:this.c})};ig.prototype.f=function(a,b){return Rf(this.la(a),b)};ig.prototype.C=function(){return{email:this.a,password:this.c,signInMethod:this.signInMethod}};
function O(){K(this,{providerId:"password",isOAuthProvider:!1})}function ng(a,b){b=og(b);if(!b)throw new L("argument-error","Invalid email link!");return new ig(a,b,O.EMAIL_LINK_SIGN_IN_METHOD)}function og(a){a=Qf(a);a=new Pf(a);var b=dd(a.a,"oobCode")||null;return"signIn"===(dd(a.a,"mode")||null)&&b?b:null}K(O,{PROVIDER_ID:"password"});K(O,{EMAIL_LINK_SIGN_IN_METHOD:"emailLink"});K(O,{EMAIL_PASSWORD_SIGN_IN_METHOD:"password"});
function pg(a){if(!(a.Ua&&a.Ta||a.Fa&&a.$))throw new L("internal-error");this.a=a;J(this,"providerId","phone");J(this,"signInMethod","phone")}pg.prototype.la=function(a){return a.Va(qg(this))};pg.prototype.b=function(a,b){var c=qg(this);c.idToken=b;return P(a,rg,c)};pg.prototype.f=function(a,b){var c=qg(this);c.operation="REAUTH";a=P(a,sg,c);return Rf(a,b)};
pg.prototype.C=function(){var a={providerId:"phone"};this.a.Ua&&(a.verificationId=this.a.Ua);this.a.Ta&&(a.verificationCode=this.a.Ta);this.a.Fa&&(a.temporaryProof=this.a.Fa);this.a.$&&(a.phoneNumber=this.a.$);return a};function qg(a){return a.a.Fa&&a.a.$?{temporaryProof:a.a.Fa,phoneNumber:a.a.$}:{sessionInfo:a.a.Ua,code:a.a.Ta}}
function tg(a){try{this.a=a||_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.auth()}catch(b){throw new L("argument-error","Either an instance of firebase.auth.Auth must be passed as an argument to the firebase.auth.PhoneAuthProvider constructor, or the default firebase App instance must be initialized via firebase.initializeApp().");}K(this,{providerId:"phone",isOAuthProvider:!1})}
tg.prototype.Va=function(a,b){var c=this.a.b;return B(b.verify()).then(function(d){if(!l(d))throw new L("argument-error","An implementation of firebase.auth.ApplicationVerifier.prototype.verify() must return a firebase.Promise that resolves with a string.");switch(b.type){case "recaptcha":return ug(c,{phoneNumber:a,recaptchaToken:d}).then(function(a){"function"===typeof b.reset&&b.reset();return a},function(a){"function"===typeof b.reset&&b.reset();throw a;});default:throw new L("argument-error",
'Only firebase.auth.ApplicationVerifiers with type="recaptcha" are currently supported.');}})};function vg(a,b){if(!a)throw new L("missing-verification-id");if(!b)throw new L("missing-verification-code");return new pg({Ua:a,Ta:b})}K(tg,{PROVIDER_ID:"phone"});K(tg,{PHONE_SIGN_IN_METHOD:"phone"});
function wg(a){if(a.temporaryProof&&a.phoneNumber)return new pg({Fa:a.temporaryProof,$:a.phoneNumber});var b=a&&a.providerId;if(!b||"password"===b)return null;var c=a&&a.oauthAccessToken,d=a&&a.oauthTokenSecret,e=a&&a.nonce,f=a&&a.oauthIdToken,h=a&&a.pendingToken;try{switch(b){case "google.com":return fg(f,c);case "facebook.com":return bg(c);case "github.com":return dg(c);case "twitter.com":return hg(c,d);default:return c||d||f||h?h?0==b.indexOf("saml.")?new Sf(b,h):new Xf(b,{pendingToken:h,idToken:a.oauthIdToken,
accessToken:a.oauthAccessToken},b):(new N(b)).credential(f,c,e):null}}catch(m){return null}}function xg(a){if(!a.isOAuthProvider)throw new L("invalid-oauth-provider");};function yg(a,b,c,d,e,f){this.b=a;this.c=b||null;this.f=c||null;this.g=d||null;this.h=f||null;this.a=e||null;if(this.f||this.a){if(this.f&&this.a)throw new L("invalid-auth-event");if(this.f&&!this.g)throw new L("invalid-auth-event");}else throw new L("invalid-auth-event");}yg.prototype.C=function(){return{type:this.b,eventId:this.c,urlResponse:this.f,sessionId:this.g,postBody:this.h,error:this.a&&this.a.C()}};
function zg(a){a=a||{};return a.type?new yg(a.type,a.eventId,a.urlResponse,a.sessionId,a.error&&df(a.error),a.postBody):null};/*

 Copyright 2018 Google Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function Ag(){this.b=null;this.a=[]}var Bg=null;Ag.prototype.subscribe=function(a){var b=this;this.a.push(a);this.b||(this.b=function(a){for(var c=0;c<b.a.length;c++)b.a[c](a)},a=I("universalLinks.subscribe",k),"function"===typeof a&&a(null,this.b))};Ag.prototype.unsubscribe=function(a){w(this.a,function(b){return b==a})};function Cg(a){var b="unauthorized-domain",c=void 0,d=ed(a);a=d.b;d=d.c;"chrome-extension"==d?c=bb("This chrome extension ID (chrome-extension://%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.",a):"http"==d||"https"==d?c=bb("This domain (%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.",a):b="operation-not-supported-in-this-environment";
L.call(this,b,c)}t(Cg,L);function Dg(a,b,c){L.call(this,a,c);a=b||{};a.Ab&&J(this,"email",a.Ab);a.$&&J(this,"phoneNumber",a.$);a.credential&&J(this,"credential",a.credential)}t(Dg,L);Dg.prototype.C=function(){var a={code:this.code,message:this.message};this.email&&(a.email=this.email);this.phoneNumber&&(a.phoneNumber=this.phoneNumber);var b=this.credential&&this.credential.C();b&&ab(a,b);return a};Dg.prototype.toJSON=function(){return this.C()};
function Eg(a){if(a.code){var b=a.code||"";0==b.indexOf(bf)&&(b=b.substring(bf.length));var c={credential:wg(a)};if(a.email)c.Ab=a.email;else if(a.phoneNumber)c.$=a.phoneNumber;else if(!c.credential)return new L(b,a.message||void 0);return new Dg(b,c,a.message)}return null};function Fg(){}Fg.prototype.c=null;function Gg(a){return a.c||(a.c=a.b())};var Hg;function Ig(){}t(Ig,Fg);Ig.prototype.a=function(){var a=Jg(this);return a?new ActiveXObject(a):new XMLHttpRequest};Ig.prototype.b=function(){var a={};Jg(this)&&(a[0]=!0,a[1]=!0);return a};
function Jg(a){if(!a.f&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.f=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.f}Hg=new Ig;function Kg(){}t(Kg,Fg);Kg.prototype.a=function(){var a=new XMLHttpRequest;if("withCredentials"in a)return a;if("undefined"!=typeof XDomainRequest)return new Lg;throw Error("Unsupported browser");};Kg.prototype.b=function(){return{}};
function Lg(){this.a=new XDomainRequest;this.readyState=0;this.onreadystatechange=null;this.responseType=this.responseText=this.response="";this.status=-1;this.statusText="";this.a.onload=r(this.fc,this);this.a.onerror=r(this.Gb,this);this.a.onprogress=r(this.gc,this);this.a.ontimeout=r(this.kc,this)}g=Lg.prototype;g.open=function(a,b,c){if(null!=c&&!c)throw Error("Only async requests are supported.");this.a.open(a,b)};
g.send=function(a){if(a)if("string"==typeof a)this.a.send(a);else throw Error("Only string data is supported");else this.a.send()};g.abort=function(){this.a.abort()};g.setRequestHeader=function(){};g.getResponseHeader=function(a){return"content-type"==a.toLowerCase()?this.a.contentType:""};g.fc=function(){this.status=200;this.response=this.responseText=this.a.responseText;Mg(this,4)};g.Gb=function(){this.status=500;this.response=this.responseText="";Mg(this,4)};g.kc=function(){this.Gb()};
g.gc=function(){this.status=200;Mg(this,1)};function Mg(a,b){a.readyState=b;if(a.onreadystatechange)a.onreadystatechange()}g.getAllResponseHeaders=function(){return"content-type: "+this.a.contentType};function Ng(a,b,c){this.reset(a,b,c,void 0,void 0)}Ng.prototype.a=null;var Og=0;Ng.prototype.reset=function(a,b,c,d,e){"number"==typeof e||Og++;d||qa();delete this.a};function Pg(a){this.f=a;this.b=this.c=this.a=null}function Qg(a,b){this.name=a;this.value=b}Qg.prototype.toString=function(){return this.name};var Rg=new Qg("SEVERE",1E3),Sg=new Qg("WARNING",900),Tg=new Qg("CONFIG",700),Ug=new Qg("FINE",500);function Vg(a){if(a.c)return a.c;if(a.a)return Vg(a.a);ta("Root logger has no level set.");return null}Pg.prototype.log=function(a,b,c){if(a.value>=Vg(this).value)for(n(b)&&(b=b()),a=new Ng(a,String(b),this.f),c&&(a.a=c),c=this;c;)c=c.a};var Wg={},Xg=null;
function Yg(a){Xg||(Xg=new Pg(""),Wg[""]=Xg,Xg.c=Tg);var b;if(!(b=Wg[a])){b=new Pg(a);var c=a.lastIndexOf("."),d=a.substr(c+1);c=Yg(a.substr(0,c));c.b||(c.b={});c.b[d]=b;b.a=c;Wg[a]=b}return b};function Zg(a,b){a&&a.log(Ug,b,void 0)};function $g(a){this.f=a}t($g,Fg);$g.prototype.a=function(){return new ah(this.f)};$g.prototype.b=function(a){return function(){return a}}({});function ah(a){F.call(this);this.u=a;this.readyState=bh;this.status=0;this.responseType=this.responseText=this.response=this.statusText="";this.onreadystatechange=null;this.i=new Headers;this.b=null;this.m="GET";this.g="";this.a=!1;this.h=Yg("goog.net.FetchXmlHttp");this.l=this.c=this.f=null}t(ah,F);var bh=0;g=ah.prototype;
g.open=function(a,b){if(this.readyState!=bh)throw this.abort(),Error("Error reopening a connection");this.m=a;this.g=b;this.readyState=1;ch(this)};g.send=function(a){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.a=!0;var b={headers:this.i,method:this.m,credentials:void 0,cache:void 0};a&&(b.body=a);this.u.fetch(new Request(this.g,b)).then(this.jc.bind(this),this.La.bind(this))};
g.abort=function(){this.response=this.responseText="";this.i=new Headers;this.status=0;this.c&&this.c.cancel("Request was aborted.");1<=this.readyState&&this.a&&4!=this.readyState&&(this.a=!1,dh(this,!1));this.readyState=bh};
g.jc=function(a){this.a&&(this.f=a,this.b||(this.b=a.headers,this.readyState=2,ch(this)),this.a&&(this.readyState=3,ch(this),this.a&&("arraybuffer"===this.responseType?a.arrayBuffer().then(this.hc.bind(this),this.La.bind(this)):"undefined"!==typeof k.ReadableStream&&"body"in a?(this.response=this.responseText="",this.c=a.body.getReader(),this.l=new TextDecoder,eh(this)):a.text().then(this.ic.bind(this),this.La.bind(this)))))};function eh(a){a.c.read().then(a.ec.bind(a)).catch(a.La.bind(a))}
g.ec=function(a){if(this.a){var b=this.l.decode(a.value?a.value:new Uint8Array(0),{stream:!a.done});b&&(this.response=this.responseText+=b);a.done?dh(this,!0):ch(this);3==this.readyState&&eh(this)}};g.ic=function(a){this.a&&(this.response=this.responseText=a,dh(this,!0))};g.hc=function(a){this.a&&(this.response=a,dh(this,!0))};g.La=function(a){var b=this.h;b&&b.log(Sg,"Failed to fetch url "+this.g,a instanceof Error?a:Error(a));this.a&&dh(this,!0)};
function dh(a,b){b&&a.f&&(a.status=a.f.status,a.statusText=a.f.statusText);a.readyState=4;a.f=null;a.c=null;a.l=null;ch(a)}g.setRequestHeader=function(a,b){this.i.append(a,b)};g.getResponseHeader=function(a){return this.b?this.b.get(a.toLowerCase())||"":((a=this.h)&&a.log(Sg,"Attempting to get response header but no headers have been received for url: "+this.g,void 0),"")};
g.getAllResponseHeaders=function(){if(!this.b){var a=this.h;a&&a.log(Sg,"Attempting to get all response headers but no headers have been received for url: "+this.g,void 0);return""}a=[];for(var b=this.b.entries(),c=b.next();!c.done;)c=c.value,a.push(c[0]+": "+c[1]),c=b.next();return a.join("\r\n")};function ch(a){a.onreadystatechange&&a.onreadystatechange.call(a)};function fh(a){F.call(this);this.headers=new Mc;this.D=a||null;this.c=!1;this.w=this.a=null;this.h=this.N=this.l="";this.f=this.I=this.i=this.G=!1;this.g=0;this.u=null;this.m=gh;this.v=this.O=!1}t(fh,F);var gh="";fh.prototype.b=Yg("goog.net.XhrIo");var hh=/^https?$/i,ih=["POST","PUT"];
function jh(a,b,c,d,e){if(a.a)throw Error("[goog.net.XhrIo] Object is active with another request="+a.l+"; newUri="+b);c=c?c.toUpperCase():"GET";a.l=b;a.h="";a.N=c;a.G=!1;a.c=!0;a.a=a.D?a.D.a():Hg.a();a.w=a.D?Gg(a.D):Gg(Hg);a.a.onreadystatechange=r(a.Jb,a);try{Zg(a.b,kh(a,"Opening Xhr")),a.I=!0,a.a.open(c,String(b),!0),a.I=!1}catch(h){Zg(a.b,kh(a,"Error opening Xhr: "+h.message));lh(a,h);return}b=d||"";var f=new Mc(a.headers);e&&Lc(e,function(a,b){f.set(b,a)});e=Fa(f.U());d=k.FormData&&b instanceof
k.FormData;!Ha(ih,c)||e||d||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");f.forEach(function(a,b){this.a.setRequestHeader(b,a)},a);a.m&&(a.a.responseType=a.m);"withCredentials"in a.a&&a.a.withCredentials!==a.O&&(a.a.withCredentials=a.O);try{mh(a),0<a.g&&(a.v=nh(a.a),Zg(a.b,kh(a,"Will abort after "+a.g+"ms if incomplete, xhr2 "+a.v)),a.v?(a.a.timeout=a.g,a.a.ontimeout=r(a.Ga,a)):a.u=Hc(a.Ga,a.g,a)),Zg(a.b,kh(a,"Sending request")),a.i=!0,a.a.send(b),a.i=!1}catch(h){Zg(a.b,
kh(a,"Send error: "+h.message)),lh(a,h)}}function nh(a){return Qb&&$b(9)&&"number"==typeof a.timeout&&void 0!==a.ontimeout}function Ga(a){return"content-type"==a.toLowerCase()}g=fh.prototype;g.Ga=function(){"undefined"!=typeof aa&&this.a&&(this.h="Timed out after "+this.g+"ms, aborting",Zg(this.b,kh(this,this.h)),this.dispatchEvent("timeout"),this.abort(8))};function lh(a,b){a.c=!1;a.a&&(a.f=!0,a.a.abort(),a.f=!1);a.h=b;oh(a);ph(a)}
function oh(a){a.G||(a.G=!0,a.dispatchEvent("complete"),a.dispatchEvent("error"))}g.abort=function(){this.a&&this.c&&(Zg(this.b,kh(this,"Aborting")),this.c=!1,this.f=!0,this.a.abort(),this.f=!1,this.dispatchEvent("complete"),this.dispatchEvent("abort"),ph(this))};g.va=function(){this.a&&(this.c&&(this.c=!1,this.f=!0,this.a.abort(),this.f=!1),ph(this,!0));fh.pb.va.call(this)};g.Jb=function(){this.qa||(this.I||this.i||this.f?qh(this):this.yc())};g.yc=function(){qh(this)};
function qh(a){if(a.c&&"undefined"!=typeof aa)if(a.w[1]&&4==rh(a)&&2==sh(a))Zg(a.b,kh(a,"Local request error detected and ignored"));else if(a.i&&4==rh(a))Hc(a.Jb,0,a);else if(a.dispatchEvent("readystatechange"),4==rh(a)){Zg(a.b,kh(a,"Request complete"));a.c=!1;try{var b=sh(a);a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}var d;if(!(d=c)){var e;if(e=0===b){var f=String(a.l).match(Pc)[1]||null;if(!f&&k.self&&k.self.location){var h=k.self.location.protocol;
f=h.substr(0,h.length-1)}e=!hh.test(f?f.toLowerCase():"")}d=e}if(d)a.dispatchEvent("complete"),a.dispatchEvent("success");else{try{var m=2<rh(a)?a.a.statusText:""}catch(p){Zg(a.b,"Can not get status: "+p.message),m=""}a.h=m+" ["+sh(a)+"]";oh(a)}}finally{ph(a)}}}function ph(a,b){if(a.a){mh(a);var c=a.a,d=a.w[0]?ea:null;a.a=null;a.w=null;b||a.dispatchEvent("ready");try{c.onreadystatechange=d}catch(e){(a=a.b)&&a.log(Rg,"Problem encountered resetting onreadystatechange: "+e.message,void 0)}}}
function mh(a){a.a&&a.v&&(a.a.ontimeout=null);a.u&&(k.clearTimeout(a.u),a.u=null)}function rh(a){return a.a?a.a.readyState:0}function sh(a){try{return 2<rh(a)?a.a.status:-1}catch(b){return-1}}function th(a){try{return a.a?a.a.responseText:""}catch(b){return Zg(a.b,"Can not get responseText: "+b.message),""}}
g.getResponse=function(){try{if(!this.a)return null;if("response"in this.a)return this.a.response;switch(this.m){case gh:case "text":return this.a.responseText;case "arraybuffer":if("mozResponseArrayBuffer"in this.a)return this.a.mozResponseArrayBuffer}var a=this.b;a&&a.log(Rg,"Response type "+this.m+" is not supported on this browser",void 0);return null}catch(b){return Zg(this.b,"Can not get response: "+b.message),null}};function kh(a,b){return b+" ["+a.N+" "+a.l+" "+sh(a)+"]"};/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
function uh(a){var b=vh;this.g=[];this.v=b;this.u=a||null;this.f=this.a=!1;this.c=void 0;this.l=this.w=this.i=!1;this.h=0;this.b=null;this.o=0}uh.prototype.cancel=function(a){if(this.a)this.c instanceof uh&&this.c.cancel();else{if(this.b){var b=this.b;delete this.b;a?b.cancel(a):(b.o--,0>=b.o&&b.cancel())}this.v?this.v.call(this.u,this):this.l=!0;this.a||(a=new wh(this),xh(this),yh(this,!1,a))}};uh.prototype.m=function(a,b){this.i=!1;yh(this,a,b)};function yh(a,b,c){a.a=!0;a.c=c;a.f=!b;zh(a)}
function xh(a){if(a.a){if(!a.l)throw new Ah(a);a.l=!1}}function Bh(a,b){Ch(a,null,b,void 0)}function Ch(a,b,c,d){a.g.push([b,c,d]);a.a&&zh(a)}uh.prototype.then=function(a,b,c){var d,e,f=new A(function(a,b){d=a;e=b});Ch(this,d,function(a){a instanceof wh?f.cancel():e(a)});return f.then(a,b,c)};uh.prototype.$goog_Thenable=!0;function Dh(a){return Ea(a.g,function(a){return n(a[1])})}
function zh(a){if(a.h&&a.a&&Dh(a)){var b=a.h,c=Eh[b];c&&(k.clearTimeout(c.a),delete Eh[b]);a.h=0}a.b&&(a.b.o--,delete a.b);b=a.c;for(var d=c=!1;a.g.length&&!a.i;){var e=a.g.shift(),f=e[0],h=e[1];e=e[2];if(f=a.f?h:f)try{var m=f.call(e||a.u,b);void 0!==m&&(a.f=a.f&&(m==b||m instanceof Error),a.c=b=m);if(ra(b)||"function"===typeof k.Promise&&b instanceof k.Promise)d=!0,a.i=!0}catch(p){b=p,a.f=!0,Dh(a)||(c=!0)}}a.c=b;d&&(m=r(a.m,a,!0),d=r(a.m,a,!1),b instanceof uh?(Ch(b,m,d),b.w=!0):b.then(m,d));c&&(b=
new Fh(b),Eh[b.a]=b,a.h=b.a)}function Ah(){u.call(this)}t(Ah,u);Ah.prototype.message="Deferred has already fired";Ah.prototype.name="AlreadyCalledError";function wh(){u.call(this)}t(wh,u);wh.prototype.message="Deferred was canceled";wh.prototype.name="CanceledError";function Fh(a){this.a=k.setTimeout(r(this.c,this),0);this.b=a}Fh.prototype.c=function(){delete Eh[this.a];throw this.b;};var Eh={};function Gh(a){var b={},c=b.document||document,d=ud(a),e=document.createElement("SCRIPT"),f={Lb:e,Ga:void 0},h=new uh(f),m=null,p=null!=b.timeout?b.timeout:5E3;0<p&&(m=window.setTimeout(function(){Hh(e,!0);var a=new Ih(Jh,"Timeout reached for loading script "+d);xh(h);yh(h,!1,a)},p),f.Ga=m);e.onload=e.onreadystatechange=function(){e.readyState&&"loaded"!=e.readyState&&"complete"!=e.readyState||(Hh(e,b.hd||!1,m),xh(h),yh(h,!0,null))};e.onerror=function(){Hh(e,!0,m);var a=new Ih(Kh,"Error while loading script "+
d);xh(h);yh(h,!1,a)};f=b.attributes||{};ab(f,{type:"text/javascript",charset:"UTF-8"});Ld(e,f);Jd(e,a);Lh(c).appendChild(e);return h}function Lh(a){var b;return(b=(a||document).getElementsByTagName("HEAD"))&&0!=b.length?b[0]:a.documentElement}function vh(){if(this&&this.Lb){var a=this.Lb;a&&"SCRIPT"==a.tagName&&Hh(a,!0,this.Ga)}}
function Hh(a,b,c){null!=c&&k.clearTimeout(c);a.onload=ea;a.onerror=ea;a.onreadystatechange=ea;b&&window.setTimeout(function(){a&&a.parentNode&&a.parentNode.removeChild(a)},0)}var Kh=0,Jh=1;function Ih(a,b){var c="Jsloader error (code #"+a+")";b&&(c+=": "+b);u.call(this,c);this.code=a}t(Ih,u);function Mh(a){this.f=a}t(Mh,Fg);Mh.prototype.a=function(){return new this.f};Mh.prototype.b=function(){return{}};
function Nh(a,b,c){this.b=a;a=b||{};this.i=a.secureTokenEndpoint||"https://securetoken.googleapis.com/v1/token";this.o=a.secureTokenTimeout||Oh;this.f=Za(a.secureTokenHeaders||Ph);this.g=a.firebaseEndpoint||"https://www.googleapis.com/identitytoolkit/v3/relyingparty/";this.h=a.firebaseTimeout||Qh;this.a=Za(a.firebaseHeaders||Rh);c&&(this.a["X-Client-Version"]=c,this.f["X-Client-Version"]=c);c="Node"==pe();c=k.XMLHttpRequest||c&&_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL.node&&_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL.node.XMLHttpRequest;if(!c&&
!oe())throw new L("internal-error","The XMLHttpRequest compatibility library was not found.");this.c=void 0;oe()?this.c=new $g(self):qe()?this.c=new Mh(c):this.c=new Kg}var Sh,M="idToken",Oh=new Ee(3E4,6E4),Ph={"Content-Type":"application/x-www-form-urlencoded"},Qh=new Ee(3E4,6E4),Rh={"Content-Type":"application/json"};function Th(a,b){b?a.a["X-Firebase-Locale"]=b:delete a.a["X-Firebase-Locale"]}
function Uh(a,b){b?(a.a["X-Client-Version"]=b,a.f["X-Client-Version"]=b):(delete a.a["X-Client-Version"],delete a.f["X-Client-Version"])}function Vh(a,b,c,d,e,f,h){$d()||oe()?a=r(a.m,a):(Sh||(Sh=new A(function(a,b){Wh(a,b)})),a=r(a.l,a));a(b,c,d,e,f,h)}
Nh.prototype.m=function(a,b,c,d,e,f){if(oe()&&("undefined"===typeof k.fetch||"undefined"===typeof k.Headers||"undefined"===typeof k.Request))throw new L("operation-not-supported-in-this-environment","fetch, Headers and Request native APIs or equivalent Polyfills must be available to support HTTP requests from a Worker environment.");var h=new fh(this.c);if(f){h.g=Math.max(0,f);var m=setTimeout(function(){h.dispatchEvent("timeout")},f)}vc(h,"complete",function(){m&&clearTimeout(m);var a=null;try{a=
JSON.parse(th(this))||null}catch(x){a=null}b&&b(a)});Bc(h,"ready",function(){m&&clearTimeout(m);Lb(this)});Bc(h,"timeout",function(){m&&clearTimeout(m);Lb(this);b&&b(null)});jh(h,a,c,d,e)};var Xh=new od(pd,"https://apis.google.com/js/client.js?onload=%{onload}"),Yh="__fcb"+Math.floor(1E6*Math.random()).toString();
function Wh(a,b){if(((window.gapi||{}).client||{}).request)a();else{k[Yh]=function(){((window.gapi||{}).client||{}).request?a():b(Error("CORS_UNSUPPORTED"))};var c=vd(Xh,{onload:Yh});Bh(Gh(c),function(){b(Error("CORS_UNSUPPORTED"))})}}
Nh.prototype.l=function(a,b,c,d,e){var f=this;Sh.then(function(){window.gapi.client.setApiKey(f.b);var h=window.gapi.auth.getToken();window.gapi.auth.setToken(null);window.gapi.client.request({path:a,method:c,body:d,headers:e,authType:"none",callback:function(a){window.gapi.auth.setToken(h);b&&b(a)}})}).s(function(a){b&&b({error:{message:a&&a.message||"CORS_UNSUPPORTED"}})})};
function Zh(a,b){return new A(function(c,d){"refresh_token"==b.grant_type&&b.refresh_token||"authorization_code"==b.grant_type&&b.code?Vh(a,a.i+"?key="+encodeURIComponent(a.b),function(a){a?a.error?d($h(a)):a.access_token&&a.refresh_token?c(a):d(new L("internal-error")):d(new L("network-request-failed"))},"POST",id(b).toString(),a.f,a.o.get()):d(new L("internal-error"))})}
function ai(a,b,c,d,e,f){var h=ed(a.g+b);G(h,"key",a.b);f&&G(h,"cb",qa().toString());var m="GET"==c;if(m)for(var p in d)d.hasOwnProperty(p)&&G(h,p,d[p]);return new A(function(b,f){Vh(a,h.toString(),function(a){a?a.error?f($h(a,e||{})):b(a):f(new L("network-request-failed"))},c,m?void 0:Qd(Ae(d)),a.a,a.h.get())})}function bi(a){a=a.email;if(!l(a)||!ie.test(a))throw new L("invalid-email");}function ci(a){"email"in a&&bi(a)}
function di(a,b){return P(a,ei,{identifier:b,continueUri:xe()?Xd():"http://localhost"}).then(function(a){return a.allProviders||[]})}function fi(a,b){return P(a,ei,{identifier:b,continueUri:xe()?Xd():"http://localhost"}).then(function(a){return a.signinMethods||[]})}function gi(a){return P(a,hi,{}).then(function(a){return a.authorizedDomains||[]})}function ii(a){if(!a[M])throw new L("internal-error");}
function ji(a){if(a.phoneNumber||a.temporaryProof){if(!a.phoneNumber||!a.temporaryProof)throw new L("internal-error");}else{if(!a.sessionInfo)throw new L("missing-verification-id");if(!a.code)throw new L("missing-verification-code");}}Nh.prototype.Ra=function(){return P(this,ki,{})};Nh.prototype.qb=function(a,b){return P(this,li,{idToken:a,email:b})};Nh.prototype.rb=function(a,b){return P(this,mg,{idToken:a,password:b})};var mi={displayName:"DISPLAY_NAME",photoUrl:"PHOTO_URL"};g=Nh.prototype;
g.sb=function(a,b){var c={idToken:a},d=[];Xa(mi,function(a,f){var e=b[f];null===e?d.push(a):f in b&&(c[f]=e)});d.length&&(c.deleteAttribute=d);return P(this,li,c)};g.lb=function(a,b){a={requestType:"PASSWORD_RESET",email:a};ab(a,b);return P(this,ni,a)};g.mb=function(a,b){a={requestType:"EMAIL_SIGNIN",email:a};ab(a,b);return P(this,oi,a)};g.kb=function(a,b){a={requestType:"VERIFY_EMAIL",idToken:a};ab(a,b);return P(this,pi,a)};function ug(a,b){return P(a,qi,b)}g.Va=function(a){return P(this,ri,a)};
function si(a,b,c){return P(a,ti,{idToken:b,deleteProvider:c})}function ui(a){if(!a.requestUri||!a.sessionId&&!a.postBody&&!a.pendingToken)throw new L("internal-error");}function vi(a,b){b.oauthIdToken&&b.providerId&&0==b.providerId.indexOf("oidc.")&&!b.pendingToken&&(a.sessionId?b.nonce=a.sessionId:a.postBody&&(a=new Uc(a.postBody),md(a,"nonce")&&(b.nonce=a.get("nonce"))));return b}
function wi(a){var b=null;a.needConfirmation?(a.code="account-exists-with-different-credential",b=Eg(a)):"FEDERATED_USER_ID_ALREADY_LINKED"==a.errorMessage?(a.code="credential-already-in-use",b=Eg(a)):"EMAIL_EXISTS"==a.errorMessage?(a.code="email-already-in-use",b=Eg(a)):a.errorMessage&&(b=xi(a.errorMessage));if(b)throw b;if(!a[M])throw new L("internal-error");}function Tf(a,b){b.returnIdpCredential=!0;return P(a,yi,b)}function Vf(a,b){b.returnIdpCredential=!0;return P(a,zi,b)}
function Wf(a,b){b.returnIdpCredential=!0;b.autoCreate=!1;return P(a,Ai,b)}function Bi(a){if(!a.oobCode)throw new L("invalid-action-code");}g.$a=function(a,b){return P(this,Ci,{oobCode:a,newPassword:b})};g.Ja=function(a){return P(this,Di,{oobCode:a})};g.Xa=function(a){return P(this,Ei,{oobCode:a})};
var Ei={endpoint:"setAccountInfo",B:Bi,da:"email"},Di={endpoint:"resetPassword",B:Bi,J:function(a){var b=a.requestType;if(!b||!a.email&&"EMAIL_SIGNIN"!=b)throw new L("internal-error");}},Fi={endpoint:"signupNewUser",B:function(a){bi(a);if(!a.password)throw new L("weak-password");},J:ii,R:!0},ei={endpoint:"createAuthUri"},Gi={endpoint:"deleteAccount",T:["idToken"]},ti={endpoint:"setAccountInfo",T:["idToken","deleteProvider"],B:function(a){if(!ia(a.deleteProvider))throw new L("internal-error");}},jg=
{endpoint:"emailLinkSignin",T:["email","oobCode"],B:bi,J:ii,R:!0},lg={endpoint:"emailLinkSignin",T:["idToken","email","oobCode"],B:bi,J:ii,R:!0},Hi={endpoint:"getAccountInfo"},oi={endpoint:"getOobConfirmationCode",T:["requestType"],B:function(a){if("EMAIL_SIGNIN"!=a.requestType)throw new L("internal-error");bi(a)},da:"email"},pi={endpoint:"getOobConfirmationCode",T:["idToken","requestType"],B:function(a){if("VERIFY_EMAIL"!=a.requestType)throw new L("internal-error");},da:"email"},ni={endpoint:"getOobConfirmationCode",
T:["requestType"],B:function(a){if("PASSWORD_RESET"!=a.requestType)throw new L("internal-error");bi(a)},da:"email"},hi={vb:!0,endpoint:"getProjectConfig",Ib:"GET"},Ii={vb:!0,endpoint:"getRecaptchaParam",Ib:"GET",J:function(a){if(!a.recaptchaSiteKey)throw new L("internal-error");}},Ci={endpoint:"resetPassword",B:Bi,da:"email"},qi={endpoint:"sendVerificationCode",T:["phoneNumber","recaptchaToken"],da:"sessionInfo"},li={endpoint:"setAccountInfo",T:["idToken"],B:ci,R:!0},mg={endpoint:"setAccountInfo",
T:["idToken"],B:function(a){ci(a);if(!a.password)throw new L("weak-password");},J:ii,R:!0},ki={endpoint:"signupNewUser",J:ii,R:!0},yi={endpoint:"verifyAssertion",B:ui,Pa:vi,J:wi,R:!0},Ai={endpoint:"verifyAssertion",B:ui,Pa:vi,J:function(a){if(a.errorMessage&&"USER_NOT_FOUND"==a.errorMessage)throw new L("user-not-found");if(a.errorMessage)throw xi(a.errorMessage);if(!a[M])throw new L("internal-error");},R:!0},zi={endpoint:"verifyAssertion",B:function(a){ui(a);if(!a.idToken)throw new L("internal-error");
},Pa:vi,J:wi,R:!0},Ji={endpoint:"verifyCustomToken",B:function(a){if(!a.token)throw new L("invalid-custom-token");},J:ii,R:!0},kg={endpoint:"verifyPassword",B:function(a){bi(a);if(!a.password)throw new L("wrong-password");},J:ii,R:!0},ri={endpoint:"verifyPhoneNumber",B:ji,J:ii},rg={endpoint:"verifyPhoneNumber",B:function(a){if(!a.idToken)throw new L("internal-error");ji(a)},J:function(a){if(a.temporaryProof)throw a.code="credential-already-in-use",Eg(a);ii(a)}},sg={Xb:{USER_NOT_FOUND:"user-not-found"},
endpoint:"verifyPhoneNumber",B:ji,J:ii};function P(a,b,c){if(!Re(c,b.T))return C(new L("internal-error"));var d=b.Ib||"POST",e;return B(c).then(b.B).then(function(){b.R&&(c.returnSecureToken=!0);return ai(a,b.endpoint,d,c,b.Xb,b.vb||!1)}).then(function(a){e=a;return b.Pa?b.Pa(c,e):e}).then(b.J).then(function(){if(!b.da)return e;if(!(b.da in e))throw new L("internal-error");return e[b.da]})}function xi(a){return $h({error:{errors:[{message:a}],code:400,message:a}})}
function $h(a,b){var c=(a.error&&a.error.errors&&a.error.errors[0]||{}).reason||"";var d={keyInvalid:"invalid-api-key",ipRefererBlocked:"app-not-authorized"};if(c=d[c]?new L(d[c]):null)return c;c=a.error&&a.error.message||"";d={INVALID_CUSTOM_TOKEN:"invalid-custom-token",CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_EMAIL:"invalid-email",INVALID_PASSWORD:"wrong-password",USER_DISABLED:"user-disabled",
MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_OR_INVALID_NONCE:"missing-or-invalid-nonce",INVALID_MESSAGE_PAYLOAD:"invalid-message-payload",INVALID_RECIPIENT_EMAIL:"invalid-recipient-email",INVALID_SENDER:"invalid-sender",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",
EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",INVALID_PROVIDER_ID:"invalid-provider-id",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",CORS_UNSUPPORTED:"cors-unsupported",DYNAMIC_LINK_NOT_ACTIVATED:"dynamic-link-not-activated",INVALID_APP_ID:"invalid-app-id",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",WEAK_PASSWORD:"weak-password",
OPERATION_NOT_ALLOWED:"operation-not-allowed",USER_CANCELLED:"user-cancelled",CAPTCHA_CHECK_FAILED:"captcha-check-failed",INVALID_APP_CREDENTIAL:"invalid-app-credential",INVALID_CODE:"invalid-verification-code",INVALID_PHONE_NUMBER:"invalid-phone-number",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_APP_CREDENTIAL:"missing-app-credential",MISSING_CODE:"missing-verification-code",MISSING_PHONE_NUMBER:"missing-phone-number",MISSING_SESSION_INFO:"missing-verification-id",
QUOTA_EXCEEDED:"quota-exceeded",SESSION_EXPIRED:"code-expired",REJECTED_CREDENTIAL:"rejected-credential",INVALID_CONTINUE_URI:"invalid-continue-uri",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",MISSING_IOS_BUNDLE_ID:"missing-ios-bundle-id",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_DYNAMIC_LINK_DOMAIN:"invalid-dynamic-link-domain",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",INVALID_CERT_HASH:"invalid-cert-hash"};ab(d,b||{});b=(b=c.match(/^[^\s]+\s*:\s*(.*)$/))&&1<b.length?
b[1]:void 0;for(var e in d)if(0===c.indexOf(e))return new L(d[e],b);!b&&a&&(b=ze(a));return new L("internal-error",b)};function Ki(a){this.b=a;this.a=null;this.gb=Li(this)}
function Li(a){return Mi().then(function(){return new A(function(b,c){I("gapi.iframes.getContext")().open({where:document.body,url:a.b,messageHandlersFilter:I("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"),attributes:{style:{position:"absolute",top:"-100px",width:"1px",height:"1px"}},dontclear:!0},function(d){function e(){clearTimeout(f);b()}a.a=d;a.a.restyle({setHideOnLeave:!1});var f=setTimeout(function(){c(Error("Network Error"))},Ni.get());d.ping(e).then(e,function(){c(Error("Network Error"))})})})})}
function Oi(a,b){return a.gb.then(function(){return new A(function(c){a.a.send(b.type,b,c,I("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))})})}function Pi(a,b){a.gb.then(function(){a.a.register("authEvent",b,I("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))})}var Qi=new od(pd,"https://apis.google.com/js/api.js?onload=%{onload}"),Ri=new Ee(3E4,6E4),Ni=new Ee(5E3,15E3),Si=null;
function Mi(){return Si?Si:Si=(new A(function(a,b){function c(){De();I("gapi.load")("gapi.iframes",{callback:a,ontimeout:function(){De();b(Error("Network Error"))},timeout:Ri.get()})}if(I("gapi.iframes.Iframe"))a();else if(I("gapi.load"))c();else{var d="__iframefcb"+Math.floor(1E6*Math.random()).toString();k[d]=function(){I("gapi.load")?c():b(Error("Network Error"))};d=vd(Qi,{onload:d});B(Gh(d)).s(function(){b(Error("Network Error"))})}})).s(function(a){Si=null;throw a;})};function Ti(a,b,c){this.i=a;this.g=b;this.h=c;this.f=null;this.a=fd(this.i,"/__/auth/iframe");G(this.a,"apiKey",this.g);G(this.a,"appName",this.h);this.b=null;this.c=[]}Ti.prototype.toString=function(){this.f?G(this.a,"v",this.f):ld(this.a.a,"v");this.b?G(this.a,"eid",this.b):ld(this.a.a,"eid");this.c.length?G(this.a,"fw",this.c.join(",")):ld(this.a.a,"fw");return this.a.toString()};function Ui(a,b,c,d,e){this.m=a;this.l=b;this.c=c;this.o=d;this.h=this.g=this.i=null;this.a=e;this.f=null}
Ui.prototype.toString=function(){var a=fd(this.m,"/__/auth/handler");G(a,"apiKey",this.l);G(a,"appName",this.c);G(a,"authType",this.o);if(this.a.isOAuthProvider){var b=this.a;try{var c=_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.app(this.c).auth().ea()}catch(m){c=null}b.ab=c;G(a,"providerId",this.a.providerId);b=this.a;c=Ae(b.zb);for(var d in c)c[d]=c[d].toString();d=b.Fc;c=Za(c);for(var e=0;e<d.length;e++){var f=d[e];f in c&&delete c[f]}b.eb&&b.ab&&!c[b.eb]&&(c[b.eb]=b.ab);Ya(c)||G(a,"customParameters",ze(c))}"function"===typeof this.a.Fb&&
(b=this.a.Fb(),b.length&&G(a,"scopes",b.join(",")));this.i?G(a,"redirectUrl",this.i):ld(a.a,"redirectUrl");this.g?G(a,"eventId",this.g):ld(a.a,"eventId");this.h?G(a,"v",this.h):ld(a.a,"v");if(this.b)for(var h in this.b)this.b.hasOwnProperty(h)&&!dd(a,h)&&G(a,h,this.b[h]);this.f?G(a,"eid",this.f):ld(a.a,"eid");h=Vi(this.c);h.length&&G(a,"fw",h.join(","));return a.toString()};function Vi(a){try{return _firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.app(a).auth().ya()}catch(b){return[]}}
function Wi(a,b,c,d,e){this.l=a;this.f=b;this.b=c;this.c=d||null;this.h=e||null;this.m=this.u=this.v=null;this.g=[];this.o=this.a=null}
function Xi(a){var b=Xd();return gi(a).then(function(a){a:{var c=ed(b),e=c.c;c=c.b;for(var f=0;f<a.length;f++){var h=a[f];var m=c;var p=e;0==h.indexOf("chrome-extension://")?m=ed(h).b==m&&"chrome-extension"==p:"http"!=p&&"https"!=p?m=!1:he.test(h)?m=m==h:(h=h.split(".").join("\\."),m=(new RegExp("^(.+\\."+h+"|"+h+")$","i")).test(m));if(m){a=!0;break a}}a=!1}if(!a)throw new Cg(Xd());})}
function Yi(a){if(a.o)return a.o;a.o=je().then(function(){if(!a.u){var b=a.c,c=a.h,d=Vi(a.b),e=new Ti(a.l,a.f,a.b);e.f=b;e.b=c;e.c=Ka(d||[]);a.u=e.toString()}a.i=new Ki(a.u);Zi(a)});return a.o}g=Wi.prototype;g.Ea=function(a,b,c){var d=new L("popup-closed-by-user"),e=new L("web-storage-unsupported"),f=this,h=!1;return this.ga().then(function(){$i(f).then(function(c){c||(a&&de(a),b(e),h=!0)})}).s(function(){}).then(function(){if(!h)return ge(a)}).then(function(){if(!h)return Ic(c).then(function(){b(d)})})};
g.Mb=function(){var a=H();return!ye(a)&&!Ce(a)};g.Hb=function(){return!1};
g.Db=function(a,b,c,d,e,f,h){if(!a)return C(new L("popup-blocked"));if(h&&!ye())return this.ga().s(function(b){de(a);e(b)}),d(),B();this.a||(this.a=Xi(aj(this)));var m=this;return this.a.then(function(){var b=m.ga().s(function(b){de(a);e(b);throw b;});d();return b}).then(function(){xg(c);if(!h){var d=bj(m.l,m.f,m.b,b,c,null,f,m.c,void 0,m.h);Yd(d,a)}}).s(function(a){"auth/network-request-failed"==a.code&&(m.a=null);throw a;})};
function aj(a){a.m||(a.v=a.c?te(a.c,Vi(a.b)):null,a.m=new Nh(a.f,Af(a.h),a.v));return a.m}g.Ca=function(a,b,c){this.a||(this.a=Xi(aj(this)));var d=this;return this.a.then(function(){xg(b);var e=bj(d.l,d.f,d.b,a,b,Xd(),c,d.c,void 0,d.h);Yd(e)}).s(function(a){"auth/network-request-failed"==a.code&&(d.a=null);throw a;})};g.ga=function(){var a=this;return Yi(this).then(function(){return a.i.gb}).s(function(){a.a=null;throw new L("network-request-failed");})};g.Qb=function(){return!0};
function bj(a,b,c,d,e,f,h,m,p,x){a=new Ui(a,b,c,d,e);a.i=f;a.g=h;a.h=m;a.b=Za(p||null);a.f=x;return a.toString()}function Zi(a){if(!a.i)throw Error("IfcHandler must be initialized!");Pi(a.i,function(b){var c={};if(b&&b.authEvent){var d=!1;b=zg(b.authEvent);for(c=0;c<a.g.length;c++)d=a.g[c](b)||d;c={};c.status=d?"ACK":"ERROR";return B(c)}c.status="ERROR";return B(c)})}
function $i(a){var b={type:"webStorageSupport"};return Yi(a).then(function(){return Oi(a.i,b)}).then(function(a){if(a&&a.length&&"undefined"!==typeof a[0].webStorageSupport)return a[0].webStorageSupport;throw Error();})}g.wa=function(a){this.g.push(a)};g.Ka=function(a){w(this.g,function(b){return b==a})};function cj(a){this.a=a||_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL.reactNative&&_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL.reactNative.AsyncStorage;if(!this.a)throw new L("internal-error","The React Native compatibility library was not found.");this.type="asyncStorage"}g=cj.prototype;g.get=function(a){return B(this.a.getItem(a)).then(function(a){return a&&Be(a)})};g.set=function(a,b){return B(this.a.setItem(a,ze(b)))};g.P=function(a){return B(this.a.removeItem(a))};g.Y=function(){};g.ca=function(){};function dj(a){this.b=a;this.a={};this.c=r(this.f,this)}var ej=[];function fj(){var a=oe()?self:null;v(ej,function(c){c.b==a&&(b=c)});if(!b){var b=new dj(a);ej.push(b)}return b}
dj.prototype.f=function(a){var b=a.data.eventType,c=a.data.eventId,d=this.a[b];if(d&&0<d.length){a.ports[0].postMessage({status:"ack",eventId:c,eventType:b,response:null});var e=[];v(d,function(b){e.push(B().then(function(){return b(a.origin,a.data.data)}))});xb(e).then(function(d){var e=[];v(d,function(a){e.push({fulfilled:a.Eb,value:a.value,reason:a.reason?a.reason.message:void 0})});v(e,function(a){for(var b in a)"undefined"===typeof a[b]&&delete a[b]});a.ports[0].postMessage({status:"done",eventId:c,
eventType:b,response:e})})}};dj.prototype.subscribe=function(a,b){Ya(this.a)&&this.b.addEventListener("message",this.c);"undefined"===typeof this.a[a]&&(this.a[a]=[]);this.a[a].push(b)};dj.prototype.unsubscribe=function(a,b){"undefined"!==typeof this.a[a]&&b?(w(this.a[a],function(a){return a==b}),0==this.a[a].length&&delete this.a[a]):b||delete this.a[a];Ya(this.a)&&this.b.removeEventListener("message",this.c)};function gj(a){this.a=a}gj.prototype.postMessage=function(a,b){this.a.postMessage(a,b)};function hj(a){this.c=a;this.b=!1;this.a=[]}
function ij(a,b,c,d){var e,f=c||{},h,m,p,x=null;if(a.b)return C(Error("connection_unavailable"));var gb=d?800:50,la="undefined"!==typeof MessageChannel?new MessageChannel:null;return(new A(function(c,d){la?(e=Math.floor(Math.random()*Math.pow(10,20)).toString(),la.port1.start(),m=setTimeout(function(){d(Error("unsupported_event"))},gb),h=function(a){a.data.eventId===e&&("ack"===a.data.status?(clearTimeout(m),p=setTimeout(function(){d(Error("timeout"))},3E3)):"done"===a.data.status?(clearTimeout(p),
"undefined"!==typeof a.data.response?c(a.data.response):d(Error("unknown_error"))):(clearTimeout(m),clearTimeout(p),d(Error("invalid_response"))))},x={messageChannel:la,onMessage:h},a.a.push(x),la.port1.addEventListener("message",h),a.c.postMessage({eventType:b,eventId:e,data:f},[la.port2])):d(Error("connection_unavailable"))})).then(function(b){jj(a,x);return b}).s(function(b){jj(a,x);throw b;})}
function jj(a,b){if(b){var c=b.messageChannel,d=b.onMessage;c&&(c.port1.removeEventListener("message",d),c.port1.close());w(a.a,function(a){return a==b})}}hj.prototype.close=function(){for(;0<this.a.length;)jj(this,this.a[0]);this.b=!0};function kj(){if(!lj())throw new L("web-storage-unsupported");this.c={};this.a=[];this.b=0;this.l=k.indexedDB;this.type="indexedDB";this.g=this.o=this.f=this.i=null;this.u=!1;this.h=null;var a=this;oe()&&self?(this.o=fj(),this.o.subscribe("keyChanged",function(b,c){return mj(a).then(function(b){0<b.length&&v(a.a,function(a){a(b)});return{keyProcessed:Ha(b,c.key)}})}),this.o.subscribe("ping",function(){return B(["keyChanged"])})):Ke().then(function(b){if(a.h=b)a.g=new hj(new gj(b)),ij(a.g,"ping",null,
!0).then(function(b){b[0].fulfilled&&Ha(b[0].value,"keyChanged")&&(a.u=!0)}).s(function(){})})}var nj;function oj(a){return new A(function(b,c){var d=a.l.deleteDatabase("firebaseLocalStorageDb");d.onsuccess=function(){b()};d.onerror=function(a){c(Error(a.target.error))}})}
function pj(a){return new A(function(b,c){var d=a.l.open("firebaseLocalStorageDb",1);d.onerror=function(a){try{a.preventDefault()}catch(f){}c(Error(a.target.error))};d.onupgradeneeded=function(a){a=a.target.result;try{a.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(f){c(f)}};d.onsuccess=function(d){d=d.target.result;d.objectStoreNames.contains("firebaseLocalStorage")?b(d):oj(a).then(function(){return pj(a)}).then(function(a){b(a)}).s(function(a){c(a)})}})}
function qj(a){a.m||(a.m=pj(a));return a.m}function lj(){try{return!!k.indexedDB}catch(a){return!1}}function rj(a){return a.objectStore("firebaseLocalStorage")}function sj(a,b){return a.transaction(["firebaseLocalStorage"],b?"readwrite":"readonly")}function tj(a){return new A(function(b,c){a.onsuccess=function(a){a&&a.target?b(a.target.result):b()};a.onerror=function(a){c(a.target.error)}})}g=kj.prototype;
g.set=function(a,b){var c=!1,d,e=this;return qj(this).then(function(b){d=b;b=rj(sj(d,!0));return tj(b.get(a))}).then(function(f){var h=rj(sj(d,!0));if(f)return f.value=b,tj(h.put(f));e.b++;c=!0;f={};f.fbase_key=a;f.value=b;return tj(h.add(f))}).then(function(){e.c[a]=b;return uj(e,a)}).ia(function(){c&&e.b--})};function uj(a,b){return a.g&&a.h&&Je()===a.h?ij(a.g,"keyChanged",{key:b},a.u).then(function(){}).s(function(){}):B()}
g.get=function(a){return qj(this).then(function(b){return tj(rj(sj(b,!1)).get(a))}).then(function(a){return a&&a.value})};g.P=function(a){var b=!1,c=this;return qj(this).then(function(d){b=!0;c.b++;return tj(rj(sj(d,!0))["delete"](a))}).then(function(){delete c.c[a];return uj(c,a)}).ia(function(){b&&c.b--})};
function mj(a){return qj(a).then(function(a){var b=rj(sj(a,!1));return b.getAll?tj(b.getAll()):new A(function(a,c){var d=[],e=b.openCursor();e.onsuccess=function(b){(b=b.target.result)?(d.push(b.value),b["continue"]()):a(d)};e.onerror=function(a){c(a.target.error)}})}).then(function(b){var c={},d=[];if(0==a.b){for(d=0;d<b.length;d++)c[b[d].fbase_key]=b[d].value;d=Zd(a.c,c);a.c=c}return d})}g.Y=function(a){0==this.a.length&&vj(this);this.a.push(a)};
g.ca=function(a){w(this.a,function(b){return b==a});0==this.a.length&&wj(this)};function vj(a){function b(){a.f=setTimeout(function(){a.i=mj(a).then(function(b){0<b.length&&v(a.a,function(a){a(b)})}).then(function(){b()}).s(function(a){"STOP_EVENT"!=a.message&&b()})},800)}wj(a);b()}function wj(a){a.i&&a.i.cancel("STOP_EVENT");a.f&&(clearTimeout(a.f),a.f=null)};function xj(a){var b=this,c=null;this.a=[];this.type="indexedDB";this.c=a;this.b=B().then(function(){if(lj()){var a=ve(),e="__sak"+a;nj||(nj=new kj);c=nj;return c.set(e,a).then(function(){return c.get(e)}).then(function(b){if(b!==a)throw Error("indexedDB not supported!");return c.P(e)}).then(function(){return c}).s(function(){return b.c})}return b.c}).then(function(a){b.type=a.type;a.Y(function(a){v(b.a,function(b){b(a)})});return a})}g=xj.prototype;g.get=function(a){return this.b.then(function(b){return b.get(a)})};
g.set=function(a,b){return this.b.then(function(c){return c.set(a,b)})};g.P=function(a){return this.b.then(function(b){return b.P(a)})};g.Y=function(a){this.a.push(a)};g.ca=function(a){w(this.a,function(b){return b==a})};function yj(){this.a={};this.type="inMemory"}g=yj.prototype;g.get=function(a){return B(this.a[a])};g.set=function(a,b){this.a[a]=b;return B()};g.P=function(a){delete this.a[a];return B()};g.Y=function(){};g.ca=function(){};function zj(){if(!Aj()){if("Node"==pe())throw new L("internal-error","The LocalStorage compatibility library was not found.");throw new L("web-storage-unsupported");}this.a=Bj()||_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL.node.localStorage;this.type="localStorage"}function Bj(){try{var a=k.localStorage,b=ve();a&&(a.setItem(b,"1"),a.removeItem(b));return a}catch(c){return null}}
function Aj(){var a="Node"==pe();a=Bj()||a&&_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL.node&&_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL.node.localStorage;if(!a)return!1;try{return a.setItem("__sak","1"),a.removeItem("__sak"),!0}catch(b){return!1}}g=zj.prototype;g.get=function(a){var b=this;return B().then(function(){var c=b.a.getItem(a);return Be(c)})};g.set=function(a,b){var c=this;return B().then(function(){var d=ze(b);null===d?c.P(a):c.a.setItem(a,d)})};g.P=function(a){var b=this;return B().then(function(){b.a.removeItem(a)})};
g.Y=function(a){k.window&&sc(k.window,"storage",a)};g.ca=function(a){k.window&&E(k.window,"storage",a)};function Cj(){this.type="nullStorage"}g=Cj.prototype;g.get=function(){return B(null)};g.set=function(){return B()};g.P=function(){return B()};g.Y=function(){};g.ca=function(){};function Dj(){if(!Ej()){if("Node"==pe())throw new L("internal-error","The SessionStorage compatibility library was not found.");throw new L("web-storage-unsupported");}this.a=Fj()||_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL.node.sessionStorage;this.type="sessionStorage"}function Fj(){try{var a=k.sessionStorage,b=ve();a&&(a.setItem(b,"1"),a.removeItem(b));return a}catch(c){return null}}
function Ej(){var a="Node"==pe();a=Fj()||a&&_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL.node&&_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL.node.sessionStorage;if(!a)return!1;try{return a.setItem("__sak","1"),a.removeItem("__sak"),!0}catch(b){return!1}}g=Dj.prototype;g.get=function(a){var b=this;return B().then(function(){var c=b.a.getItem(a);return Be(c)})};g.set=function(a,b){var c=this;return B().then(function(){var d=ze(b);null===d?c.P(a):c.a.setItem(a,d)})};g.P=function(a){var b=this;return B().then(function(){b.a.removeItem(a)})};g.Y=function(){};
g.ca=function(){};function Gj(){var a={};a.Browser=Hj;a.Node=Ij;a.ReactNative=Jj;a.Worker=Kj;this.a=a[pe()]}var Lj,Hj={A:zj,Sa:Dj},Ij={A:zj,Sa:Dj},Jj={A:cj,Sa:Cj},Kj={A:zj,Sa:Cj};var Mj={ad:"local",NONE:"none",cd:"session"};function Nj(a){var b=new L("invalid-persistence-type"),c=new L("unsupported-persistence-type");a:{for(d in Mj)if(Mj[d]==a){var d=!0;break a}d=!1}if(!d||"string"!==typeof a)throw b;switch(pe()){case "ReactNative":if("session"===a)throw c;break;case "Node":if("none"!==a)throw c;break;default:if(!ue()&&"none"!==a)throw c;}}
function Oj(){var a=!Ce(H())&&ne()?!0:!1,b=ye(),c=ue();this.m=a;this.h=b;this.o=c;this.a={};Lj||(Lj=new Gj);a=Lj;try{this.g=!Wd()&&Ie()||!k.indexedDB?new a.a.A:new xj(oe()?new yj:new a.a.A)}catch(d){this.g=new yj,this.h=!0}try{this.i=new a.a.Sa}catch(d){this.i=new yj}this.l=new yj;this.f=r(this.Pb,this);this.b={}}var Pj;function Qj(){Pj||(Pj=new Oj);return Pj}function Rj(a,b){switch(b){case "session":return a.i;case "none":return a.l;default:return a.g}}
function Sj(a,b){return"firebase:"+a.name+(b?":"+b:"")}function Tj(a,b,c){var d=Sj(b,c),e=Rj(a,b.A);return a.get(b,c).then(function(f){var h=null;try{h=Be(k.localStorage.getItem(d))}catch(m){}if(h&&!f)return k.localStorage.removeItem(d),a.set(b,h,c);h&&f&&"localStorage"!=e.type&&k.localStorage.removeItem(d)})}g=Oj.prototype;g.get=function(a,b){return Rj(this,a.A).get(Sj(a,b))};function Uj(a,b,c){c=Sj(b,c);"local"==b.A&&(a.b[c]=null);return Rj(a,b.A).P(c)}
g.set=function(a,b,c){var d=Sj(a,c),e=this,f=Rj(this,a.A);return f.set(d,b).then(function(){return f.get(d)}).then(function(b){"local"==a.A&&(e.b[d]=b)})};g.addListener=function(a,b,c){a=Sj(a,b);this.o&&(this.b[a]=k.localStorage.getItem(a));Ya(this.a)&&(Rj(this,"local").Y(this.f),this.h||(Wd()||!Ie())&&k.indexedDB||!this.o||Vj(this));this.a[a]||(this.a[a]=[]);this.a[a].push(c)};
g.removeListener=function(a,b,c){a=Sj(a,b);this.a[a]&&(w(this.a[a],function(a){return a==c}),0==this.a[a].length&&delete this.a[a]);Ya(this.a)&&(Rj(this,"local").ca(this.f),Wj(this))};function Vj(a){Wj(a);a.c=setInterval(function(){for(var b in a.a){var c=k.localStorage.getItem(b),d=a.b[b];c!=d&&(a.b[b]=c,c=new gc({type:"storage",key:b,target:window,oldValue:d,newValue:c,a:!0}),a.Pb(c))}},1E3)}function Wj(a){a.c&&(clearInterval(a.c),a.c=null)}
g.Pb=function(a){if(a&&a.f){var b=a.a.key;if(null==b)for(var c in this.a){var d=this.b[c];"undefined"===typeof d&&(d=null);var e=k.localStorage.getItem(c);e!==d&&(this.b[c]=e,this.Ya(c))}else if(0==b.indexOf("firebase:")&&this.a[b]){"undefined"!==typeof a.a.a?Rj(this,"local").ca(this.f):Wj(this);if(this.m)if(c=k.localStorage.getItem(b),d=a.a.newValue,d!==c)null!==d?k.localStorage.setItem(b,d):k.localStorage.removeItem(b);else if(this.b[b]===d&&"undefined"===typeof a.a.a)return;var f=this;c=function(){if("undefined"!==
typeof a.a.a||f.b[b]!==k.localStorage.getItem(b))f.b[b]=k.localStorage.getItem(b),f.Ya(b)};Qb&&ac&&10==ac&&k.localStorage.getItem(b)!==a.a.newValue&&a.a.newValue!==a.a.oldValue?setTimeout(c,10):c()}}else v(a,r(this.Ya,this))};g.Ya=function(a){this.a[a]&&v(this.a[a],function(a){a()})};function Xj(a){this.a=a;this.b=Qj()}var Yj={name:"authEvent",A:"local"};function Zj(a){return a.b.get(Yj,a.a).then(function(a){return zg(a)})};function ak(){this.a=Qj()};function bk(){this.b=-1};function ck(a,b){this.b=dk;this.f=k.Uint8Array?new Uint8Array(this.b):Array(this.b);this.g=this.c=0;this.a=[];this.i=a;this.h=b;this.o=k.Int32Array?new Int32Array(64):Array(64);void 0!==ek||(k.Int32Array?ek=new Int32Array(fk):ek=fk);this.reset()}var ek;t(ck,bk);for(var dk=64,gk=dk-1,hk=[],ik=0;ik<gk;ik++)hk[ik]=0;var jk=Ja(128,hk);ck.prototype.reset=function(){this.g=this.c=0;this.a=k.Int32Array?new Int32Array(this.h):Ka(this.h)};
function kk(a){for(var b=a.f,c=a.o,d=0,e=0;e<b.length;)c[d++]=b[e]<<24|b[e+1]<<16|b[e+2]<<8|b[e+3],e=4*d;for(b=16;64>b;b++){e=c[b-15]|0;d=c[b-2]|0;var f=(c[b-16]|0)+((e>>>7|e<<25)^(e>>>18|e<<14)^e>>>3)|0,h=(c[b-7]|0)+((d>>>17|d<<15)^(d>>>19|d<<13)^d>>>10)|0;c[b]=f+h|0}d=a.a[0]|0;e=a.a[1]|0;var m=a.a[2]|0,p=a.a[3]|0,x=a.a[4]|0,gb=a.a[5]|0,la=a.a[6]|0;f=a.a[7]|0;for(b=0;64>b;b++){var Vl=((d>>>2|d<<30)^(d>>>13|d<<19)^(d>>>22|d<<10))+(d&e^d&m^e&m)|0;h=x&gb^~x&la;f=f+((x>>>6|x<<26)^(x>>>11|x<<21)^(x>>>
25|x<<7))|0;h=h+(ek[b]|0)|0;h=f+(h+(c[b]|0)|0)|0;f=la;la=gb;gb=x;x=p+h|0;p=m;m=e;e=d;d=h+Vl|0}a.a[0]=a.a[0]+d|0;a.a[1]=a.a[1]+e|0;a.a[2]=a.a[2]+m|0;a.a[3]=a.a[3]+p|0;a.a[4]=a.a[4]+x|0;a.a[5]=a.a[5]+gb|0;a.a[6]=a.a[6]+la|0;a.a[7]=a.a[7]+f|0}
function lk(a,b,c){void 0===c&&(c=b.length);var d=0,e=a.c;if(l(b))for(;d<c;)a.f[e++]=b.charCodeAt(d++),e==a.b&&(kk(a),e=0);else if(ja(b))for(;d<c;){var f=b[d++];if(!("number"==typeof f&&0<=f&&255>=f&&f==(f|0)))throw Error("message must be a byte array");a.f[e++]=f;e==a.b&&(kk(a),e=0)}else throw Error("message must be string or array");a.c=e;a.g+=c}
var fk=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,
4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298];function mk(){ck.call(this,8,nk)}t(mk,ck);var nk=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225];function ok(a,b,c,d,e){this.l=a;this.i=b;this.o=c;this.m=d||null;this.u=e||null;this.h=b+":"+c;this.v=new ak;this.g=new Xj(this.h);this.f=null;this.b=[];this.a=this.c=null}function pk(a){return new L("invalid-cordova-configuration",a)}g=ok.prototype;
g.ga=function(){return this.za?this.za:this.za=ke().then(function(){if("function"!==typeof I("universalLinks.subscribe",k))throw pk("cordova-universal-links-plugin-fix is not installed");if("undefined"===typeof I("BuildInfo.packageName",k))throw pk("cordova-plugin-buildinfo is not installed");if("function"!==typeof I("cordova.plugins.browsertab.openUrl",k))throw pk("cordova-plugin-browsertab is not installed");if("function"!==typeof I("cordova.InAppBrowser.open",k))throw pk("cordova-plugin-inappbrowser is not installed");
},function(){throw new L("cordova-not-ready");})};function qk(){for(var a=20,b=[];0<a;)b.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62*Math.random()))),a--;return b.join("")}function rk(a){var b=new mk;lk(b,a);a=[];var c=8*b.g;56>b.c?lk(b,jk,56-b.c):lk(b,jk,b.b-(b.c-56));for(var d=63;56<=d;d--)b.f[d]=c&255,c/=256;kk(b);for(d=c=0;d<b.i;d++)for(var e=24;0<=e;e-=8)a[c++]=b.a[d]>>e&255;return qf(a)}
g.Ea=function(a,b){b(new L("operation-not-supported-in-this-environment"));return B()};g.Db=function(){return C(new L("operation-not-supported-in-this-environment"))};g.Qb=function(){return!1};g.Mb=function(){return!0};g.Hb=function(){return!0};
g.Ca=function(a,b,c){if(this.c)return C(new L("redirect-operation-pending"));var d=this,e=k.document,f=null,h=null,m=null,p=null;return this.c=B().then(function(){xg(b);return sk(d)}).then(function(){return tk(d,a,b,c)}).then(function(){return(new A(function(a,b){h=function(){var b=I("cordova.plugins.browsertab.close",k);a();"function"===typeof b&&b();d.a&&"function"===typeof d.a.close&&(d.a.close(),d.a=null);return!1};d.wa(h);m=function(){f||(f=Ic(2E3).then(function(){b(new L("redirect-cancelled-by-user"))}))};
p=function(){Fe()&&m()};e.addEventListener("resume",m,!1);H().toLowerCase().match(/android/)||e.addEventListener("visibilitychange",p,!1)})).s(function(a){return uk(d).then(function(){throw a;})})}).ia(function(){m&&e.removeEventListener("resume",m,!1);p&&e.removeEventListener("visibilitychange",p,!1);f&&f.cancel();h&&d.Ka(h);d.c=null})};
function tk(a,b,c,d){var e=qk(),f=new yg(b,d,null,e,new L("no-auth-event")),h=I("BuildInfo.packageName",k);if("string"!==typeof h)throw new L("invalid-cordova-configuration");var m=I("BuildInfo.displayName",k),p={};if(H().toLowerCase().match(/iphone|ipad|ipod/))p.ibi=h;else if(H().toLowerCase().match(/android/))p.apn=h;else return C(new L("operation-not-supported-in-this-environment"));m&&(p.appDisplayName=m);e=rk(e);p.sessionId=e;var x=bj(a.l,a.i,a.o,b,c,null,d,a.m,p,a.u);return a.ga().then(function(){var b=
a.h;return a.v.a.set(Yj,f.C(),b)}).then(function(){var b=I("cordova.plugins.browsertab.isAvailable",k);if("function"!==typeof b)throw new L("invalid-cordova-configuration");var c=null;b(function(b){if(b){c=I("cordova.plugins.browsertab.openUrl",k);if("function"!==typeof c)throw new L("invalid-cordova-configuration");c(x)}else{c=I("cordova.InAppBrowser.open",k);if("function"!==typeof c)throw new L("invalid-cordova-configuration");b=H();b=!(!b.match(/(iPad|iPhone|iPod).*OS 7_\d/i)&&!b.match(/(iPad|iPhone|iPod).*OS 8_\d/i));
a.a=c(x,b?"_blank":"_system","location=yes")}})})}function vk(a,b){for(var c=0;c<a.b.length;c++)try{a.b[c](b)}catch(d){}}function sk(a){a.f||(a.f=a.ga().then(function(){return new A(function(b){function c(d){b(d);a.Ka(c);return!1}a.wa(c);wk(a)})}));return a.f}function uk(a){var b=null;return Zj(a.g).then(function(c){b=c;c=a.g;return Uj(c.b,Yj,c.a)}).then(function(){return b})}
function wk(a){function b(b){d=!0;e&&e.cancel();uk(a).then(function(d){var e=c;if(d&&b&&b.url){var f=null;e=Qf(b.url);-1!=e.indexOf("/__/auth/callback")&&(f=ed(e),f=Be(dd(f,"firebaseError")||null),f=(f="object"===typeof f?df(f):null)?new yg(d.b,d.c,null,null,f):new yg(d.b,d.c,e,d.g));e=f||c}vk(a,e)})}var c=new yg("unknown",null,null,null,new L("no-auth-event")),d=!1,e=Ic(500).then(function(){return uk(a).then(function(){d||vk(a,c)})}),f=k.handleOpenURL;k.handleOpenURL=function(a){0==a.toLowerCase().indexOf(I("BuildInfo.packageName",
k).toLowerCase()+"://")&&b({url:a});if("function"===typeof f)try{f(a)}catch(m){console.error(m)}};Bg||(Bg=new Ag);Bg.subscribe(b)}g.wa=function(a){this.b.push(a);sk(this).s(function(b){"auth/invalid-cordova-configuration"===b.code&&(b=new yg("unknown",null,null,null,new L("no-auth-event")),a(b))})};g.Ka=function(a){w(this.b,function(b){return b==a})};function xk(a){this.a=a;this.b=Qj()}var yk={name:"pendingRedirect",A:"session"};function zk(a){return a.b.set(yk,"pending",a.a)}function Ak(a){return Uj(a.b,yk,a.a)}function Bk(a){return a.b.get(yk,a.a).then(function(a){return"pending"==a})};function Ck(a,b,c){this.u=a;this.o=b;this.l=c;this.h=[];this.f=!1;this.i=r(this.cb,this);this.b=new Dk;this.m=new Ek;this.g=new xk(this.o+":"+this.l);this.c={};this.c.unknown=this.b;this.c.signInViaRedirect=this.b;this.c.linkViaRedirect=this.b;this.c.reauthViaRedirect=this.b;this.c.signInViaPopup=this.m;this.c.linkViaPopup=this.m;this.c.reauthViaPopup=this.m;this.a=Fk(this.u,this.o,this.l,Bf)}function Fk(a,b,c,d){var e=_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.SDK_VERSION||null;return le()?new ok(a,b,c,e,d):new Wi(a,b,c,e,d)}g=Ck.prototype;
g.reset=function(){this.f=!1;this.a.Ka(this.i);this.a=Fk(this.u,this.o,this.l)};g.Za=function(){this.b.Za()};function Gk(a){a.f||(a.f=!0,a.a.wa(a.i));var b=a.a;return a.a.ga().s(function(c){a.a==b&&a.reset();throw c;})}function Hk(a){a.a.Mb()&&Gk(a).s(function(b){var c=new yg("unknown",null,null,null,new L("operation-not-supported-in-this-environment"));Ik(b)&&a.cb(c)});a.a.Hb()||Jk(a.b)}
g.subscribe=function(a){Ha(this.h,a)||this.h.push(a);if(!this.f){var b=this;Bk(this.g).then(function(a){a?Ak(b.g).then(function(){Gk(b).s(function(a){var c=new yg("unknown",null,null,null,new L("operation-not-supported-in-this-environment"));Ik(a)&&b.cb(c)})}):Hk(b)}).s(function(){Hk(b)})}};g.unsubscribe=function(a){w(this.h,function(b){return b==a})};
g.cb=function(a){if(!a)throw new L("invalid-auth-event");for(var b=!1,c=0;c<this.h.length;c++){var d=this.h[c];if(d.wb(a.b,a.c)){(b=this.c[a.b])&&b.h(a,d);b=!0;break}}Jk(this.b);return b};var Kk=new Ee(2E3,1E4),Lk=new Ee(3E4,6E4);Ck.prototype.fa=function(){return this.b.fa()};function Mk(a,b,c,d,e,f){return a.a.Db(b,c,d,function(){a.f||(a.f=!0,a.a.wa(a.i))},function(){a.reset()},e,f)}function Ik(a){return a&&"auth/cordova-not-ready"==a.code?!0:!1}
Ck.prototype.Ca=function(a,b,c){var d=this,e;return zk(this.g).then(function(){return d.a.Ca(a,b,c).s(function(a){if(Ik(a))throw new L("operation-not-supported-in-this-environment");e=a;return Ak(d.g).then(function(){throw e;})}).then(function(){return d.a.Qb()?new A(function(){}):Ak(d.g).then(function(){return d.fa()}).then(function(){}).s(function(){})})})};Ck.prototype.Ea=function(a,b,c,d){return this.a.Ea(c,function(c){a.ha(b,null,c,d)},Kk.get())};var Nk={};
function Ok(a,b,c){var d=b+":"+c;Nk[d]||(Nk[d]=new Ck(a,b,c));return Nk[d]}function Dk(){this.b=null;this.f=[];this.c=[];this.a=null;this.i=this.g=!1}Dk.prototype.reset=function(){this.b=null;this.a&&(this.a.cancel(),this.a=null)};
Dk.prototype.h=function(a,b){if(a){this.reset();this.g=!0;var c=a.b,d=a.c,e=a.a&&"auth/web-storage-unsupported"==a.a.code,f=a.a&&"auth/operation-not-supported-in-this-environment"==a.a.code;this.i=!(!e&&!f);"unknown"!=c||e||f?a.a?(Pk(this,!0,null,a.a),B()):b.xa(c,d)?Qk(this,a,b):C(new L("invalid-auth-event")):(Pk(this,!1,null,null),B())}else C(new L("invalid-auth-event"))};function Jk(a){a.g||(a.g=!0,Pk(a,!1,null,null))}Dk.prototype.Za=function(){this.g&&!this.i&&Pk(this,!1,null,null)};
function Qk(a,b,c){c=c.xa(b.b,b.c);var d=b.f,e=b.g,f=b.h,h=!!b.b.match(/Redirect$/);c(d,e,f).then(function(b){Pk(a,h,b,null)}).s(function(b){Pk(a,h,null,b)})}function Rk(a,b){a.b=function(){return C(b)};if(a.c.length)for(var c=0;c<a.c.length;c++)a.c[c](b)}function Sk(a,b){a.b=function(){return B(b)};if(a.f.length)for(var c=0;c<a.f.length;c++)a.f[c](b)}function Pk(a,b,c,d){b?d?Rk(a,d):Sk(a,c):Sk(a,{user:null});a.f=[];a.c=[]}
Dk.prototype.fa=function(){var a=this;return new A(function(b,c){a.b?a.b().then(b,c):(a.f.push(b),a.c.push(c),Tk(a))})};function Tk(a){var b=new L("timeout");a.a&&a.a.cancel();a.a=Ic(Lk.get()).then(function(){a.b||(a.g=!0,Pk(a,!0,null,b))})}function Ek(){}Ek.prototype.h=function(a,b){if(a){var c=a.b,d=a.c;a.a?(b.ha(a.b,null,a.a,a.c),B()):b.xa(c,d)?Uk(a,b):C(new L("invalid-auth-event"))}else C(new L("invalid-auth-event"))};
function Uk(a,b){var c=a.c,d=a.b;b.xa(d,c)(a.f,a.g,a.h).then(function(a){b.ha(d,a,null,c)}).s(function(a){b.ha(d,null,a,c)})};function Vk(){this.tb=!1;Object.defineProperty(this,"appVerificationDisabled",{get:function(){return this.tb},set:function(a){this.tb=a},enumerable:!1})};function Wk(a,b){this.a=b;J(this,"verificationId",a)}Wk.prototype.confirm=function(a){a=vg(this.verificationId,a);return this.a(a)};function Xk(a,b,c,d){return(new tg(a)).Va(b,c).then(function(a){return new Wk(a,d)})};function Yk(a){var b=yf(a);if(!(b&&b.exp&&b.auth_time&&b.iat))throw new L("internal-error","An internal error occurred. The token obtained by Firebase appears to be malformed. Please retry the operation.");K(this,{token:a,expirationTime:He(1E3*b.exp),authTime:He(1E3*b.auth_time),issuedAtTime:He(1E3*b.iat),signInProvider:b.firebase&&b.firebase.sign_in_provider?b.firebase.sign_in_provider:null,claims:b})};function Zk(a,b,c){this.h=a;this.i=b;this.g=c;this.c=3E4;this.f=96E4;this.b=null;this.a=this.c;if(this.f<this.c)throw Error("Proactive refresh lower bound greater than upper bound!");}Zk.prototype.start=function(){this.a=this.c;$k(this,!0)};function al(a,b){if(b)return a.a=a.c,a.g();b=a.a;a.a*=2;a.a>a.f&&(a.a=a.f);return b}function $k(a,b){a.stop();a.b=Ic(al(a,b)).then(function(){return Ge()}).then(function(){return a.h()}).then(function(){$k(a,!0)}).s(function(b){a.i(b)&&$k(a,!1)})}
Zk.prototype.stop=function(){this.b&&(this.b.cancel(),this.b=null)};function bl(a){this.f=a;this.b=this.a=null;this.c=0}bl.prototype.C=function(){return{apiKey:this.f.b,refreshToken:this.a,accessToken:this.b,expirationTime:this.c}};function cl(a,b){var c=b[M],d=b.refreshToken;b=dl(b.expiresIn);a.b=c;a.c=b;a.a=d}function el(a,b){a.b=b.b;a.a=b.a;a.c=b.c}function dl(a){return qa()+1E3*parseInt(a,10)}
function fl(a,b){return Zh(a.f,b).then(function(b){a.b=b.access_token;a.c=dl(b.expires_in);a.a=b.refresh_token;return{accessToken:a.b,expirationTime:a.c,refreshToken:a.a}}).s(function(b){"auth/user-token-expired"==b.code&&(a.a=null);throw b;})}bl.prototype.getToken=function(a){a=!!a;return this.b&&!this.a?C(new L("user-token-expired")):a||!this.b||qa()>this.c-3E4?this.a?fl(this,{grant_type:"refresh_token",refresh_token:this.a}):B(null):B({accessToken:this.b,expirationTime:this.c,refreshToken:this.a})};function gl(a,b){this.a=a||null;this.b=b||null;K(this,{lastSignInTime:He(b||null),creationTime:He(a||null)})}function hl(a){return new gl(a.a,a.b)}gl.prototype.C=function(){return{lastLoginAt:this.b,createdAt:this.a}};function il(a,b,c,d,e,f){K(this,{uid:a,displayName:d||null,photoURL:e||null,email:c||null,phoneNumber:f||null,providerId:b})}function jl(a,b){D.call(this,a);for(var c in b)this[c]=b[c]}t(jl,D);
function Q(a,b,c){this.G=[];this.l=a.apiKey;this.m=a.appName;this.u=a.authDomain||null;a=_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.SDK_VERSION?te(_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.SDK_VERSION):null;this.b=new Nh(this.l,Af(Bf),a);this.h=new bl(this.b);kl(this,b[M]);cl(this.h,b);J(this,"refreshToken",this.h.a);ll(this,c||{});F.call(this);this.I=!1;this.u&&we()&&(this.a=Ok(this.u,this.l,this.m));this.N=[];this.i=null;this.w=ml(this);this.V=r(this.Ha,this);var d=this;this.ka=null;this.ta=function(a){d.pa(a.g)};this.X=null;this.O=[];this.sa=function(a){nl(d,
a.c)};this.W=null}t(Q,F);Q.prototype.pa=function(a){this.ka=a;Th(this.b,a)};Q.prototype.ea=function(){return this.ka};function ol(a,b){a.X&&E(a.X,"languageCodeChanged",a.ta);(a.X=b)&&sc(b,"languageCodeChanged",a.ta)}function nl(a,b){a.O=b;Uh(a.b,_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.SDK_VERSION?te(_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.SDK_VERSION,a.O):null)}Q.prototype.ya=function(){return Ka(this.O)};function pl(a,b){a.W&&E(a.W,"frameworkChanged",a.sa);(a.W=b)&&sc(b,"frameworkChanged",a.sa)}Q.prototype.Ha=function(){this.w.b&&(this.w.stop(),this.w.start())};
function ql(a){try{return _firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.app(a.m).auth()}catch(b){throw new L("internal-error","No firebase.auth.Auth instance is available for the Firebase App '"+a.m+"'!");}}function ml(a){return new Zk(function(){return a.F(!0)},function(a){return a&&"auth/network-request-failed"==a.code?!0:!1},function(){var b=a.h.c-qa()-3E5;return 0<b?b:0})}function rl(a){a.D||a.w.b||(a.w.start(),E(a,"tokenChanged",a.V),sc(a,"tokenChanged",a.V))}function sl(a){E(a,"tokenChanged",a.V);a.w.stop()}
function kl(a,b){a.ra=b;J(a,"_lat",b)}function tl(a,b){w(a.N,function(a){return a==b})}function ul(a){for(var b=[],c=0;c<a.N.length;c++)b.push(a.N[c](a));return xb(b).then(function(){return a})}function vl(a){a.a&&!a.I&&(a.I=!0,a.a.subscribe(a))}
function ll(a,b){K(a,{uid:b.uid,displayName:b.displayName||null,photoURL:b.photoURL||null,email:b.email||null,emailVerified:b.emailVerified||!1,phoneNumber:b.phoneNumber||null,isAnonymous:b.isAnonymous||!1,metadata:new gl(b.createdAt,b.lastLoginAt),providerData:[]})}J(Q.prototype,"providerId","firebase");function wl(){}function xl(a){return B().then(function(){if(a.D)throw new L("app-deleted");})}function yl(a){return Da(a.providerData,function(a){return a.providerId})}
function zl(a,b){b&&(Al(a,b.providerId),a.providerData.push(b))}function Al(a,b){w(a.providerData,function(a){return a.providerId==b})}function Bl(a,b,c){("uid"!=b||c)&&a.hasOwnProperty(b)&&J(a,b,c)}
function Cl(a,b){a!=b&&(K(a,{uid:b.uid,displayName:b.displayName,photoURL:b.photoURL,email:b.email,emailVerified:b.emailVerified,phoneNumber:b.phoneNumber,isAnonymous:b.isAnonymous,providerData:[]}),b.metadata?J(a,"metadata",hl(b.metadata)):J(a,"metadata",new gl),v(b.providerData,function(b){zl(a,b)}),el(a.h,b.h),J(a,"refreshToken",a.h.a))}g=Q.prototype;g.reload=function(){var a=this;return R(this,xl(this).then(function(){return Dl(a).then(function(){return ul(a)}).then(wl)}))};
function Dl(a){return a.F().then(function(b){var c=a.isAnonymous;return El(a,b).then(function(){c||Bl(a,"isAnonymous",!1);return b})})}g.dc=function(a){return this.F(a).then(function(a){return new Yk(a)})};g.F=function(a){var b=this;return R(this,xl(this).then(function(){return b.h.getToken(a)}).then(function(a){if(!a)throw new L("internal-error");a.accessToken!=b.ra&&(kl(b,a.accessToken),b.dispatchEvent(new jl("tokenChanged")));Bl(b,"refreshToken",a.refreshToken);return a.accessToken}))};
function Fl(a,b){b[M]&&a.ra!=b[M]&&(cl(a.h,b),a.dispatchEvent(new jl("tokenChanged")),kl(a,b[M]),Bl(a,"refreshToken",a.h.a))}function El(a,b){return P(a.b,Hi,{idToken:b}).then(r(a.zc,a))}
g.zc=function(a){a=a.users;if(!a||!a.length)throw new L("internal-error");a=a[0];ll(this,{uid:a.localId,displayName:a.displayName,photoURL:a.photoUrl,email:a.email,emailVerified:!!a.emailVerified,phoneNumber:a.phoneNumber,lastLoginAt:a.lastLoginAt,createdAt:a.createdAt});for(var b=Gl(a),c=0;c<b.length;c++)zl(this,b[c]);Bl(this,"isAnonymous",!(this.email&&a.passwordHash)&&!(this.providerData&&this.providerData.length))};
function Gl(a){return(a=a.providerUserInfo)&&a.length?Da(a,function(a){return new il(a.rawId,a.providerId,a.email,a.displayName,a.photoUrl,a.phoneNumber)}):[]}g.hb=function(a){var b=this,c=null;return R(this,a.f(this.b,this.uid).then(function(a){Fl(b,a);c=Hl(b,a,"reauthenticate");b.i=null;return b.reload()}).then(function(){return c}),!0)};
g.Ac=function(a){Me("firebase.User.prototype.reauthenticateWithCredential is deprecated. Please use firebase.User.prototype.reauthenticateAndRetrieveDataWithCredential instead.");return this.hb(a).then(function(){})};function Il(a,b){return Dl(a).then(function(){if(Ha(yl(a),b))return ul(a).then(function(){throw new L("provider-already-linked");})})}
g.fb=function(a){var b=this,c=null;return R(this,Il(this,a.providerId).then(function(){return b.F()}).then(function(c){return a.b(b.b,c)}).then(function(a){c=Hl(b,a,"link");return Jl(b,a)}).then(function(){return c}))};g.rc=function(a){Me("firebase.User.prototype.linkWithCredential is deprecated. Please use firebase.User.prototype.linkAndRetrieveDataWithCredential instead.");return this.fb(a).then(function(a){return a.user})};
g.sc=function(a,b){var c=this;return R(this,Il(this,"phone").then(function(){return Xk(ql(c),a,b,r(c.fb,c))}))};g.Bc=function(a,b){var c=this;return R(this,B().then(function(){return Xk(ql(c),a,b,r(c.hb,c))}),!0)};function Hl(a,b,c){var d=wg(b);b=Gf(b);return Pe({user:a,credential:d,additionalUserInfo:b,operationType:c})}function Jl(a,b){Fl(a,b);return a.reload().then(function(){return a})}
g.qb=function(a){var b=this;return R(this,this.F().then(function(c){return b.b.qb(c,a)}).then(function(a){Fl(b,a);return b.reload()}))};g.Tc=function(a){var b=this;return R(this,this.F().then(function(c){return a.b(b.b,c)}).then(function(a){Fl(b,a);return b.reload()}))};g.rb=function(a){var b=this;return R(this,this.F().then(function(c){return b.b.rb(c,a)}).then(function(a){Fl(b,a);return b.reload()}))};
g.sb=function(a){if(void 0===a.displayName&&void 0===a.photoURL)return xl(this);var b=this;return R(this,this.F().then(function(c){return b.b.sb(c,{displayName:a.displayName,photoUrl:a.photoURL})}).then(function(a){Fl(b,a);Bl(b,"displayName",a.displayName||null);Bl(b,"photoURL",a.photoUrl||null);v(b.providerData,function(a){"password"===a.providerId&&(J(a,"displayName",b.displayName),J(a,"photoURL",b.photoURL))});return ul(b)}).then(wl))};
g.Rc=function(a){var b=this;return R(this,Dl(this).then(function(c){return Ha(yl(b),a)?si(b.b,c,[a]).then(function(a){var c={};v(a.providerUserInfo||[],function(a){c[a.providerId]=!0});v(yl(b),function(a){c[a]||Al(b,a)});c[tg.PROVIDER_ID]||J(b,"phoneNumber",null);return ul(b)}):ul(b).then(function(){throw new L("no-such-provider");})}))};
g.delete=function(){var a=this;return R(this,this.F().then(function(b){return P(a.b,Gi,{idToken:b})}).then(function(){a.dispatchEvent(new jl("userDeleted"))})).then(function(){for(var b=0;b<a.G.length;b++)a.G[b].cancel("app-deleted");ol(a,null);pl(a,null);a.G=[];a.D=!0;sl(a);J(a,"refreshToken",null);a.a&&a.a.unsubscribe(a)})};
g.wb=function(a,b){return"linkViaPopup"==a&&(this.g||null)==b&&this.f||"reauthViaPopup"==a&&(this.g||null)==b&&this.f||"linkViaRedirect"==a&&(this.aa||null)==b||"reauthViaRedirect"==a&&(this.aa||null)==b?!0:!1};g.ha=function(a,b,c,d){"linkViaPopup"!=a&&"reauthViaPopup"!=a||d!=(this.g||null)||(c&&this.v?this.v(c):b&&!c&&this.f&&this.f(b),this.c&&(this.c.cancel(),this.c=null),delete this.f,delete this.v)};
g.xa=function(a,b){return"linkViaPopup"==a&&b==(this.g||null)?r(this.Bb,this):"reauthViaPopup"==a&&b==(this.g||null)?r(this.Cb,this):"linkViaRedirect"==a&&(this.aa||null)==b?r(this.Bb,this):"reauthViaRedirect"==a&&(this.aa||null)==b?r(this.Cb,this):null};g.tc=function(a){var b=this;return Kl(this,"linkViaPopup",a,function(){return Il(b,a.providerId).then(function(){return ul(b)})},!1)};g.Cc=function(a){return Kl(this,"reauthViaPopup",a,function(){return B()},!0)};
function Kl(a,b,c,d,e){if(!we())return C(new L("operation-not-supported-in-this-environment"));if(a.i&&!e)return C(a.i);var f=Ff(c.providerId),h=ve(a.uid+":::"),m=null;(!ye()||ne())&&a.u&&c.isOAuthProvider&&(m=bj(a.u,a.l,a.m,b,c,null,h,_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.SDK_VERSION||null));var p=ee(m,f&&f.Ba,f&&f.Aa);d=d().then(function(){Ll(a);if(!e)return a.F().then(function(){})}).then(function(){return Mk(a.a,p,b,c,h,!!m)}).then(function(){return new A(function(c,d){a.ha(b,null,new L("cancelled-popup-request"),a.g||null);
a.f=c;a.v=d;a.g=h;a.c=a.a.Ea(a,b,p,h)})}).then(function(a){p&&de(p);return a?Pe(a):null}).s(function(a){p&&de(p);throw a;});return R(a,d,e)}g.uc=function(a){var b=this;return Ml(this,"linkViaRedirect",a,function(){return Il(b,a.providerId)},!1)};g.Dc=function(a){return Ml(this,"reauthViaRedirect",a,function(){return B()},!0)};
function Ml(a,b,c,d,e){if(!we())return C(new L("operation-not-supported-in-this-environment"));if(a.i&&!e)return C(a.i);var f=null,h=ve(a.uid+":::");d=d().then(function(){Ll(a);if(!e)return a.F().then(function(){})}).then(function(){a.aa=h;return ul(a)}).then(function(b){a.ba&&(b=a.ba,b=b.b.set(Nl,a.C(),b.a));return b}).then(function(){return a.a.Ca(b,c,h)}).s(function(b){f=b;if(a.ba)return Ol(a.ba);throw f;}).then(function(){if(f)throw f;});return R(a,d,e)}
function Ll(a){if(!a.a||!a.I){if(a.a&&!a.I)throw new L("internal-error");throw new L("auth-domain-config-required");}}g.Bb=function(a,b,c){var d=this;this.c&&(this.c.cancel(),this.c=null);var e=null,f=this.F().then(function(e){return Vf(d.b,{requestUri:a,postBody:c,sessionId:b,idToken:e})}).then(function(a){e=Hl(d,a,"link");return Jl(d,a)}).then(function(){return e});return R(this,f)};
g.Cb=function(a,b,c){var d=this;this.c&&(this.c.cancel(),this.c=null);var e=null,f=B().then(function(){return Rf(Wf(d.b,{requestUri:a,sessionId:b,postBody:c}),d.uid)}).then(function(a){e=Hl(d,a,"reauthenticate");Fl(d,a);d.i=null;return d.reload()}).then(function(){return e});return R(this,f,!0)};g.kb=function(a){var b=this,c=null;return R(this,this.F().then(function(b){c=b;return"undefined"===typeof a||Ya(a)?{}:pf(new ef(a))}).then(function(a){return b.b.kb(c,a)}).then(function(a){if(b.email!=a)return b.reload()}).then(function(){}))};
function R(a,b,c){var d=Pl(a,b,c);a.G.push(d);d.ia(function(){Ia(a.G,d)});return d}function Pl(a,b,c){return a.i&&!c?(b.cancel(),C(a.i)):b.s(function(b){!b||"auth/user-disabled"!=b.code&&"auth/user-token-expired"!=b.code||(a.i||a.dispatchEvent(new jl("userInvalidated")),a.i=b);throw b;})}g.toJSON=function(){return this.C()};
g.C=function(){var a={uid:this.uid,displayName:this.displayName,photoURL:this.photoURL,email:this.email,emailVerified:this.emailVerified,phoneNumber:this.phoneNumber,isAnonymous:this.isAnonymous,providerData:[],apiKey:this.l,appName:this.m,authDomain:this.u,stsTokenManager:this.h.C(),redirectEventId:this.aa||null};this.metadata&&ab(a,this.metadata.C());v(this.providerData,function(b){a.providerData.push(Qe(b))});return a};
function Ql(a){if(!a.apiKey)return null;var b={apiKey:a.apiKey,authDomain:a.authDomain,appName:a.appName},c={};if(a.stsTokenManager&&a.stsTokenManager.accessToken&&a.stsTokenManager.expirationTime)c[M]=a.stsTokenManager.accessToken,c.refreshToken=a.stsTokenManager.refreshToken||null,c.expiresIn=(a.stsTokenManager.expirationTime-qa())/1E3;else return null;var d=new Q(b,c,a);a.providerData&&v(a.providerData,function(a){a&&zl(d,Pe(a))});a.redirectEventId&&(d.aa=a.redirectEventId);return d}
function Rl(a,b,c,d){var e=new Q(a,b);c&&(e.ba=c);d&&nl(e,d);return e.reload().then(function(){return e})}function Sl(a,b,c,d){b=b||{apiKey:a.l,authDomain:a.u,appName:a.m};var e=a.h,f={};f[M]=e.b;f.refreshToken=e.a;f.expiresIn=(e.c-qa())/1E3;b=new Q(b,f);c&&(b.ba=c);d&&nl(b,d);Cl(b,a);return b};function Tl(a){this.a=a;this.b=Qj()}var Nl={name:"redirectUser",A:"session"};function Ol(a){return Uj(a.b,Nl,a.a)}function Ul(a,b){return a.b.get(Nl,a.a).then(function(a){a&&b&&(a.authDomain=b);return Ql(a||{})})};function Wl(a){this.a=a;this.b=Qj();this.c=null;this.f=Xl(this);this.b.addListener(Yl("local"),this.a,r(this.g,this))}Wl.prototype.g=function(){var a=this,b=Yl("local");Zl(this,function(){return B().then(function(){return a.c&&"local"!=a.c.A?a.b.get(b,a.a):null}).then(function(c){if(c)return $l(a,"local").then(function(){a.c=b})})})};function $l(a,b){var c=[],d;for(d in Mj)Mj[d]!==b&&c.push(Uj(a.b,Yl(Mj[d]),a.a));c.push(Uj(a.b,am,a.a));return wb(c)}
function Xl(a){var b=Yl("local"),c=Yl("session"),d=Yl("none");return Tj(a.b,b,a.a).then(function(){return a.b.get(c,a.a)}).then(function(e){return e?c:a.b.get(d,a.a).then(function(c){return c?d:a.b.get(b,a.a).then(function(c){return c?b:a.b.get(am,a.a).then(function(a){return a?Yl(a):b})})})}).then(function(b){a.c=b;return $l(a,b.A)}).s(function(){a.c||(a.c=b)})}var am={name:"persistence",A:"session"};function Yl(a){return{name:"authUser",A:a}}
Wl.prototype.nb=function(a){var b=null,c=this;Nj(a);return Zl(this,function(){return a!=c.c.A?c.b.get(c.c,c.a).then(function(d){b=d;return $l(c,a)}).then(function(){c.c=Yl(a);if(b)return c.b.set(c.c,b,c.a)}):B()})};function bm(a){return Zl(a,function(){return a.b.set(am,a.c.A,a.a)})}function cm(a,b){return Zl(a,function(){return a.b.set(a.c,b.C(),a.a)})}function dm(a){return Zl(a,function(){return Uj(a.b,a.c,a.a)})}
function em(a,b){return Zl(a,function(){return a.b.get(a.c,a.a).then(function(a){a&&b&&(a.authDomain=b);return Ql(a||{})})})}function Zl(a,b){a.f=a.f.then(b,b);return a.f};function fm(a){this.l=!1;J(this,"settings",new Vk);J(this,"app",a);if(S(this).options&&S(this).options.apiKey)a=_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.SDK_VERSION?te(_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.SDK_VERSION):null,this.b=new Nh(S(this).options&&S(this).options.apiKey,Af(Bf),a);else throw new L("invalid-api-key");this.N=[];this.m=[];this.I=[];this.Tb=_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL.createSubscribe(r(this.oc,this));this.O=void 0;this.Ub=_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL.createSubscribe(r(this.pc,this));gm(this,null);this.h=new Wl(S(this).options.apiKey+":"+S(this).name);this.w=
new Tl(S(this).options.apiKey+":"+S(this).name);this.V=T(this,hm(this));this.i=T(this,im(this));this.X=!1;this.ka=r(this.Oc,this);this.Ha=r(this.Z,this);this.ra=r(this.bc,this);this.sa=r(this.mc,this);this.ta=r(this.nc,this);jm(this);this.INTERNAL={};this.INTERNAL["delete"]=r(this.delete,this);this.INTERNAL.logFramework=r(this.vc,this);this.u=0;F.call(this);km(this);this.G=[]}t(fm,F);function lm(a){D.call(this,"languageCodeChanged");this.g=a}t(lm,D);
function mm(a){D.call(this,"frameworkChanged");this.c=a}t(mm,D);g=fm.prototype;g.nb=function(a){a=this.h.nb(a);return T(this,a)};g.pa=function(a){this.W===a||this.l||(this.W=a,Th(this.b,this.W),this.dispatchEvent(new lm(this.ea())))};g.ea=function(){return this.W};g.Uc=function(){var a=k.navigator;this.pa(a?a.languages&&a.languages[0]||a.language||a.userLanguage||null:null)};g.vc=function(a){this.G.push(a);Uh(this.b,_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.SDK_VERSION?te(_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.SDK_VERSION,this.G):null);this.dispatchEvent(new mm(this.G))};
g.ya=function(){return Ka(this.G)};function km(a){Object.defineProperty(a,"lc",{get:function(){return this.ea()},set:function(a){this.pa(a)},enumerable:!1});a.W=null}g.toJSON=function(){return{apiKey:S(this).options.apiKey,authDomain:S(this).options.authDomain,appName:S(this).name,currentUser:U(this)&&U(this).C()}};function nm(a){return a.Sb||C(new L("auth-domain-config-required"))}
function jm(a){var b=S(a).options.authDomain,c=S(a).options.apiKey;b&&we()&&(a.Sb=a.V.then(function(){if(!a.l){a.a=Ok(b,c,S(a).name);a.a.subscribe(a);U(a)&&vl(U(a));if(a.D){vl(a.D);var d=a.D;d.pa(a.ea());ol(d,a);d=a.D;nl(d,a.G);pl(d,a);a.D=null}return a.a}}))}g.wb=function(a,b){switch(a){case "unknown":case "signInViaRedirect":return!0;case "signInViaPopup":return this.g==b&&!!this.f;default:return!1}};
g.ha=function(a,b,c,d){"signInViaPopup"==a&&this.g==d&&(c&&this.v?this.v(c):b&&!c&&this.f&&this.f(b),this.c&&(this.c.cancel(),this.c=null),delete this.f,delete this.v)};g.xa=function(a,b){return"signInViaRedirect"==a||"signInViaPopup"==a&&this.g==b&&this.f?r(this.ac,this):null};
g.ac=function(a,b,c){var d=this;a={requestUri:a,postBody:c,sessionId:b};this.c&&(this.c.cancel(),this.c=null);var e=null,f=null,h=Tf(d.b,a).then(function(a){e=wg(a);f=Gf(a);return a});a=d.V.then(function(){return h}).then(function(a){return om(d,a)}).then(function(){return Pe({user:U(d),credential:e,additionalUserInfo:f,operationType:"signIn"})});return T(this,a)};
g.Mc=function(a){if(!we())return C(new L("operation-not-supported-in-this-environment"));var b=this,c=Ff(a.providerId),d=ve(),e=null;(!ye()||ne())&&S(this).options.authDomain&&a.isOAuthProvider&&(e=bj(S(this).options.authDomain,S(this).options.apiKey,S(this).name,"signInViaPopup",a,null,d,_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.SDK_VERSION||null));var f=ee(e,c&&c.Ba,c&&c.Aa);c=nm(this).then(function(b){return Mk(b,f,"signInViaPopup",a,d,!!e)}).then(function(){return new A(function(a,c){b.ha("signInViaPopup",null,new L("cancelled-popup-request"),
b.g);b.f=a;b.v=c;b.g=d;b.c=b.a.Ea(b,"signInViaPopup",f,d)})}).then(function(a){f&&de(f);return a?Pe(a):null}).s(function(a){f&&de(f);throw a;});return T(this,c)};g.Nc=function(a){if(!we())return C(new L("operation-not-supported-in-this-environment"));var b=this,c=nm(this).then(function(){return bm(b.h)}).then(function(){return b.a.Ca("signInViaRedirect",a)});return T(this,c)};
g.fa=function(){if(!we())return C(new L("operation-not-supported-in-this-environment"));var a=this,b=nm(this).then(function(){return a.a.fa()}).then(function(a){return a?Pe(a):null});return T(this,b)};
g.Sc=function(a){if(!a)return C(new L("null-user"));var b=this,c={};c.apiKey=S(this).options.apiKey;c.authDomain=S(this).options.authDomain;c.appName=S(this).name;var d=Sl(a,c,b.w,b.ya());return T(this,this.i.then(function(){if(S(b).options.apiKey!=a.l)return d.reload()}).then(function(){if(U(b)&&a.uid==U(b).uid)return Cl(U(b),a),b.Z(a);gm(b,d);vl(d);return b.Z(d)}).then(function(){pm(b)}))};
function om(a,b){var c={};c.apiKey=S(a).options.apiKey;c.authDomain=S(a).options.authDomain;c.appName=S(a).name;return a.V.then(function(){return Rl(c,b,a.w,a.ya())}).then(function(b){if(U(a)&&b.uid==U(a).uid)return Cl(U(a),b),a.Z(b);gm(a,b);vl(b);return a.Z(b)}).then(function(){pm(a)})}
function gm(a,b){U(a)&&(tl(U(a),a.Ha),E(U(a),"tokenChanged",a.ra),E(U(a),"userDeleted",a.sa),E(U(a),"userInvalidated",a.ta),sl(U(a)));b&&(b.N.push(a.Ha),sc(b,"tokenChanged",a.ra),sc(b,"userDeleted",a.sa),sc(b,"userInvalidated",a.ta),0<a.u&&rl(b));J(a,"currentUser",b);b&&(b.pa(a.ea()),ol(b,a),nl(b,a.G),pl(b,a))}g.ob=function(){var a=this,b=this.i.then(function(){if(!U(a))return B();gm(a,null);return dm(a.h).then(function(){pm(a)})});return T(this,b)};
function qm(a){var b=Ul(a.w,S(a).options.authDomain).then(function(b){if(a.D=b)b.ba=a.w;return Ol(a.w)});return T(a,b)}function hm(a){var b=S(a).options.authDomain,c=qm(a).then(function(){return em(a.h,b)}).then(function(b){return b?(b.ba=a.w,a.D&&(a.D.aa||null)==(b.aa||null)?b:b.reload().then(function(){return cm(a.h,b).then(function(){return b})}).s(function(c){return"auth/network-request-failed"==c.code?b:dm(a.h)})):null}).then(function(b){gm(a,b||null)});return T(a,c)}
function im(a){return a.V.then(function(){return a.fa()}).s(function(){}).then(function(){if(!a.l)return a.ka()}).s(function(){}).then(function(){if(!a.l){a.X=!0;var b=a.h;b.b.addListener(Yl("local"),b.a,a.ka)}})}
g.Oc=function(){var a=this;return em(this.h,S(this).options.authDomain).then(function(b){if(!a.l){var c;if(c=U(a)&&b){c=U(a).uid;var d=b.uid;c=void 0===c||null===c||""===c||void 0===d||null===d||""===d?!1:c==d}if(c)return Cl(U(a),b),U(a).F();if(U(a)||b)gm(a,b),b&&(vl(b),b.ba=a.w),a.a&&a.a.subscribe(a),pm(a)}})};g.Z=function(a){return cm(this.h,a)};g.bc=function(){pm(this);this.Z(U(this))};g.mc=function(){this.ob()};g.nc=function(){this.ob()};
function rm(a,b){var c=null,d=null;return T(a,b.then(function(b){c=wg(b);d=Gf(b);return om(a,b)}).then(function(){return Pe({user:U(a),credential:c,additionalUserInfo:d,operationType:"signIn"})}))}g.oc=function(a){var b=this;this.addAuthTokenListener(function(){a.next(U(b))})};g.pc=function(a){var b=this;sm(this,function(){a.next(U(b))})};g.xc=function(a,b,c){var d=this;this.X&&_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.Promise.resolve().then(function(){n(a)?a(U(d)):n(a.next)&&a.next(U(d))});return this.Tb(a,b,c)};
g.wc=function(a,b,c){var d=this;this.X&&_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.Promise.resolve().then(function(){d.O=d.getUid();n(a)?a(U(d)):n(a.next)&&a.next(U(d))});return this.Ub(a,b,c)};g.cc=function(a){var b=this,c=this.i.then(function(){return U(b)?U(b).F(a).then(function(a){return{accessToken:a}}):null});return T(this,c)};g.Nb=function(a){var b=this;return this.i.then(function(){return rm(b,P(b.b,Ji,{token:a}))}).then(function(a){var c=a.user;Bl(c,"isAnonymous",!1);b.Z(c);return a})};
g.Gc=function(a){Me("firebase.auth.Auth.prototype.signInAndRetrieveDataWithCustomToken is deprecated. Please use firebase.auth.Auth.prototype.signInWithCustomToken instead.");return this.Nb(a)};g.Hc=function(a,b){Me("firebase.auth.Auth.prototype.signInAndRetrieveDataWithEmailAndPassword is deprecated. Please use firebase.auth.Auth.prototype.signInWithEmailAndPassword instead.");return this.Ob(a,b)};g.Ob=function(a,b){var c=this;return this.i.then(function(){return rm(c,P(c.b,kg,{email:a,password:b}))})};
g.yb=function(a,b){var c=this;return this.i.then(function(){return rm(c,P(c.b,Fi,{email:a,password:b}))})};g.Wb=function(a,b){Me("firebase.auth.Auth.prototype.createUserAndRetrieveDataWithEmailAndPassword is deprecated. Please use firebase.auth.Auth.prototype.createUserWithEmailAndPassword instead.");return this.yb(a,b)};g.Jc=function(a){Me("firebase.auth.Auth.prototype.signInWithCredential is deprecated. Please use firebase.auth.Auth.prototype.signInAndRetrieveDataWithCredential instead.");return this.Qa(a).then(function(a){return a.user})};
g.Qa=function(a){var b=this;return this.i.then(function(){return rm(b,a.la(b.b))})};g.Ra=function(){var a=this;return this.i.then(function(){var b=U(a);if(b&&b.isAnonymous){var c=Pe({providerId:null,isNewUser:!1});return Pe({user:b,credential:null,additionalUserInfo:c,operationType:"signIn"})}return rm(a,a.b.Ra()).then(function(b){var c=b.user;Bl(c,"isAnonymous",!0);a.Z(c);return b})})};
g.Ic=function(){Me("firebase.auth.Auth.prototype.signInAnonymouslyAndRetrieveData is deprecated. Please use firebase.auth.Auth.prototype.signInAnonymously instead.");return this.Ra()};function S(a){return a.app}function U(a){return a.currentUser}g.getUid=function(){return U(this)&&U(this).uid||null};function tm(a){return U(a)&&U(a)._lat||null}
function pm(a){if(a.X){for(var b=0;b<a.m.length;b++)if(a.m[b])a.m[b](tm(a));if(a.O!==a.getUid()&&a.I.length)for(a.O=a.getUid(),b=0;b<a.I.length;b++)if(a.I[b])a.I[b](tm(a))}}g.Vb=function(a){this.addAuthTokenListener(a);this.u++;0<this.u&&U(this)&&rl(U(this))};g.Ec=function(a){var b=this;v(this.m,function(c){c==a&&b.u--});0>this.u&&(this.u=0);0==this.u&&U(this)&&sl(U(this));this.removeAuthTokenListener(a)};
g.addAuthTokenListener=function(a){var b=this;this.m.push(a);T(this,this.i.then(function(){b.l||Ha(b.m,a)&&a(tm(b))}))};g.removeAuthTokenListener=function(a){w(this.m,function(b){return b==a})};function sm(a,b){a.I.push(b);T(a,a.i.then(function(){!a.l&&Ha(a.I,b)&&a.O!==a.getUid()&&(a.O=a.getUid(),b(tm(a)))}))}
g.delete=function(){this.l=!0;for(var a=0;a<this.N.length;a++)this.N[a].cancel("app-deleted");this.N=[];this.h&&(a=this.h,a.b.removeListener(Yl("local"),a.a,this.ka));this.a&&(this.a.unsubscribe(this),this.a.Za());return _firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.Promise.resolve()};function T(a,b){a.N.push(b);b.ia(function(){Ia(a.N,b)});return b}
g.Zb=function(a){Me("firebase.auth.Auth.prototype.fetchProvidersForEmail is deprecated. Please use firebase.auth.Auth.prototype.fetchSignInMethodsForEmail instead.");return T(this,di(this.b,a))};g.$b=function(a){return T(this,fi(this.b,a))};g.qc=function(a){return!!og(a)};g.mb=function(a,b){var c=this;return T(this,B().then(function(){var a=new ef(b);if(!a.c)throw new L("argument-error",nf+" must be true when sending sign in link to email");return pf(a)}).then(function(b){return c.b.mb(a,b)}).then(function(){}))};
g.Vc=function(a){return this.Ja(a).then(function(a){return a.data.email})};g.$a=function(a,b){return T(this,this.b.$a(a,b).then(function(){}))};g.Ja=function(a){return T(this,this.b.Ja(a).then(function(a){return new Te(a)}))};g.Xa=function(a){return T(this,this.b.Xa(a).then(function(){}))};g.lb=function(a,b){var c=this;return T(this,B().then(function(){return"undefined"===typeof b||Ya(b)?{}:pf(new ef(b))}).then(function(b){return c.b.lb(a,b)}).then(function(){}))};
g.Lc=function(a,b){return T(this,Xk(this,a,b,r(this.Qa,this)))};g.Kc=function(a,b){var c=this;return T(this,B().then(function(){var d=ng(a,b||Xd());return c.Qa(d)}))};function um(){}um.prototype.render=function(){};um.prototype.reset=function(){};um.prototype.getResponse=function(){};um.prototype.execute=function(){};function vm(){this.a={};this.b=1E12}var wm=null;vm.prototype.render=function(a,b){this.a[this.b.toString()]=new xm(a,b);return this.b++};vm.prototype.reset=function(a){var b=ym(this,a);a=zm(a);b&&a&&(b.delete(),delete this.a[a])};vm.prototype.getResponse=function(a){return(a=ym(this,a))?a.getResponse():null};vm.prototype.execute=function(a){(a=ym(this,a))&&a.execute()};function ym(a,b){return(b=zm(b))?a.a[b]||null:null}function zm(a){return(a="undefined"===typeof a?1E12:a)?a.toString():null}
function xm(a,b){this.g=!1;this.c=b;this.a=this.b=null;this.h="invisible"!==this.c.size;this.f=Kd(a);var c=this;this.i=function(){c.execute()};this.h?this.execute():sc(this.f,"click",this.i)}xm.prototype.getResponse=function(){Am(this);return this.b};
xm.prototype.execute=function(){Am(this);var a=this;this.a||(this.a=setTimeout(function(){a.b=re();var b=a.c.callback,c=a.c["expired-callback"];if(b)try{b(a.b)}catch(d){}a.a=setTimeout(function(){a.a=null;a.b=null;if(c)try{c()}catch(d){}a.h&&a.execute()},6E4)},500))};xm.prototype.delete=function(){Am(this);this.g=!0;clearTimeout(this.a);this.a=null;E(this.f,"click",this.i)};function Am(a){if(a.g)throw Error("reCAPTCHA mock was already deleted!");};function Bm(){}Bm.prototype.g=function(){wm||(wm=new vm);return B(wm)};Bm.prototype.c=function(){};var Cm=null;function Dm(){this.b=k.grecaptcha?Infinity:0;this.f=null;this.a="__rcb"+Math.floor(1E6*Math.random()).toString()}var Em=new od(pd,"https://www.google.com/recaptcha/api.js?onload=%{onload}&render=explicit&hl=%{hl}"),Fm=new Ee(3E4,6E4);
Dm.prototype.g=function(a){var b=this;return new A(function(c,d){var e=setTimeout(function(){d(new L("network-request-failed"))},Fm.get());if(!k.grecaptcha||a!==b.f&&!b.b){k[b.a]=function(){if(k.grecaptcha){b.f=a;var f=k.grecaptcha.render;k.grecaptcha.render=function(a,c){a=f(a,c);b.b++;return a};clearTimeout(e);c(k.grecaptcha)}else clearTimeout(e),d(new L("internal-error"));delete k[b.a]};var f=vd(Em,{onload:b.a,hl:a||""});B(Gh(f)).s(function(){clearTimeout(e);d(new L("internal-error","Unable to load external reCAPTCHA dependencies!"))})}else clearTimeout(e),
c(k.grecaptcha)})};Dm.prototype.c=function(){this.b--};var Gm=null;function Hm(a,b,c,d,e,f,h){J(this,"type","recaptcha");this.c=this.f=null;this.D=!1;this.l=b;this.g=null;h?(Cm||(Cm=new Bm),h=Cm):(Gm||(Gm=new Dm),h=Gm);this.m=h;this.a=c||{theme:"light",type:"image"};this.h=[];if(this.a[Im])throw new L("argument-error","sitekey should not be provided for reCAPTCHA as one is automatically provisioned for the current project.");this.i="invisible"===this.a[Jm];if(!k.document)throw new L("operation-not-supported-in-this-environment","RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment with DOM support.");
if(!Kd(b)||!this.i&&Kd(b).hasChildNodes())throw new L("argument-error","reCAPTCHA container is either not found or already contains inner elements!");this.u=new Nh(a,f||null,e||null);this.v=d||function(){return null};var m=this;this.o=[];var p=this.a[Km];this.a[Km]=function(a){Lm(m,a);if("function"===typeof p)p(a);else if("string"===typeof p){var b=I(p,k);"function"===typeof b&&b(a)}};var x=this.a[Mm];this.a[Mm]=function(){Lm(m,null);if("function"===typeof x)x();else if("string"===typeof x){var a=
I(x,k);"function"===typeof a&&a()}}}var Km="callback",Mm="expired-callback",Im="sitekey",Jm="size";function Lm(a,b){for(var c=0;c<a.o.length;c++)try{a.o[c](b)}catch(d){}}function Nm(a,b){w(a.o,function(a){return a==b})}function Om(a,b){a.h.push(b);b.ia(function(){Ia(a.h,b)});return b}g=Hm.prototype;
g.za=function(){var a=this;return this.f?this.f:this.f=Om(this,B().then(function(){if(xe()&&!oe())return je();throw new L("operation-not-supported-in-this-environment","RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment.");}).then(function(){return a.m.g(a.v())}).then(function(b){a.g=b;return P(a.u,Ii,{})}).then(function(b){a.a[Im]=b.recaptchaSiteKey}).s(function(b){a.f=null;throw b;}))};
g.render=function(){Pm(this);var a=this;return Om(this,this.za().then(function(){if(null===a.c){var b=a.l;if(!a.i){var c=Kd(b);b=Nd("DIV");c.appendChild(b)}a.c=a.g.render(b,a.a)}return a.c}))};g.verify=function(){Pm(this);var a=this;return Om(this,this.render().then(function(b){return new A(function(c){var d=a.g.getResponse(b);if(d)c(d);else{var e=function(b){b&&(Nm(a,e),c(b))};a.o.push(e);a.i&&a.g.execute(a.c)}})}))};g.reset=function(){Pm(this);null!==this.c&&this.g.reset(this.c)};
function Pm(a){if(a.D)throw new L("internal-error","RecaptchaVerifier instance has been destroyed.");}g.clear=function(){Pm(this);this.D=!0;this.m.c();for(var a=0;a<this.h.length;a++)this.h[a].cancel("RecaptchaVerifier instance has been destroyed.");if(!this.i){a=Kd(this.l);for(var b;b=a.firstChild;)a.removeChild(b)}};
function Qm(a,b,c){var d=!1;try{this.b=c||_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.app()}catch(h){throw new L("argument-error","No firebase.app.App instance is currently initialized.");}if(this.b.options&&this.b.options.apiKey)c=this.b.options.apiKey;else throw new L("invalid-api-key");var e=this,f=null;try{f=this.b.auth().ya()}catch(h){}try{d=this.b.auth().settings.appVerificationDisabledForTesting}catch(h){}f=_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.SDK_VERSION?te(_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.SDK_VERSION,f):null;Hm.call(this,c,a,b,function(){try{var a=e.b.auth().ea()}catch(m){a=
null}return a},f,Af(Bf),d)}t(Qm,Hm);function Rm(a,b,c,d){a:{c=Array.prototype.slice.call(c);var e=0;for(var f=!1,h=0;h<b.length;h++)if(b[h].optional)f=!0;else{if(f)throw new L("internal-error","Argument validator encountered a required argument after an optional argument.");e++}f=b.length;if(c.length<e||f<c.length)d="Expected "+(e==f?1==e?"1 argument":e+" arguments":e+"-"+f+" arguments")+" but got "+c.length+".";else{for(e=0;e<c.length;e++)if(f=b[e].optional&&void 0===c[e],!b[e].M(c[e])&&!f){b=b[e];if(0>e||e>=Sm.length)throw new L("internal-error",
"Argument validator received an unsupported number of arguments.");c=Sm[e];d=(d?"":c+" argument ")+(b.name?'"'+b.name+'" ':"")+"must be "+b.K+".";break a}d=null}}if(d)throw new L("argument-error",a+" failed: "+d);}var Sm="First Second Third Fourth Fifth Sixth Seventh Eighth Ninth".split(" ");function V(a,b){return{name:a||"",K:"a valid string",optional:!!b,M:l}}function Tm(a,b){return{name:a||"",K:"a boolean",optional:!!b,M:ba}}
function W(a,b){return{name:a||"",K:"a valid object",optional:!!b,M:q}}function Um(a,b){return{name:a||"",K:"a function",optional:!!b,M:n}}function Vm(a,b){return{name:a||"",K:"null",optional:!!b,M:ha}}function Wm(){return{name:"",K:"an HTML element",optional:!1,M:function(a){return!!(a&&a instanceof Element)}}}function Xm(){return{name:"auth",K:"an instance of Firebase Auth",optional:!0,M:function(a){return!!(a&&a instanceof fm)}}}
function Ym(){return{name:"app",K:"an instance of Firebase App",optional:!0,M:function(a){return!!(a&&a instanceof _firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.app.App)}}}function Zm(a){return{name:a?a+"Credential":"credential",K:a?"a valid "+a+" credential":"a valid credential",optional:!1,M:function(b){if(!b)return!1;var c=!a||b.providerId===a;return!(!b.la||!c)}}}
function $m(){return{name:"authProvider",K:"a valid Auth provider",optional:!1,M:function(a){return!!(a&&a.providerId&&a.hasOwnProperty&&a.hasOwnProperty("isOAuthProvider"))}}}function an(){return{name:"applicationVerifier",K:"an implementation of firebase.auth.ApplicationVerifier",optional:!1,M:function(a){return!!(a&&l(a.type)&&n(a.verify))}}}function X(a,b,c,d){return{name:c||"",K:a.K+" or "+b.K,optional:!!d,M:function(c){return a.M(c)||b.M(c)}}};function Y(a,b){for(var c in b){var d=b[c].name;a[d]=bn(d,a[c],b[c].j)}}function cn(a,b){for(var c in b){var d=b[c].name;d!==c&&Object.defineProperty(a,d,{get:pa(function(a){return this[a]},c),set:pa(function(a,b,c,d){Rm(a,[c],[d],!0);this[b]=d},d,c,b[c].ub),enumerable:!0})}}function Z(a,b,c,d){a[b]=bn(b,c,d)}
function bn(a,b,c){function d(){var a=Array.prototype.slice.call(arguments);Rm(e,c,a);return b.apply(this,a)}if(!c)return b;var e=dn(a),f;for(f in b)d[f]=b[f];for(f in b.prototype)d.prototype[f]=b.prototype[f];return d}function dn(a){a=a.split(".");return a[a.length-1]};Y(fm.prototype,{Xa:{name:"applyActionCode",j:[V("code")]},Ja:{name:"checkActionCode",j:[V("code")]},$a:{name:"confirmPasswordReset",j:[V("code"),V("newPassword")]},yb:{name:"createUserWithEmailAndPassword",j:[V("email"),V("password")]},Wb:{name:"createUserAndRetrieveDataWithEmailAndPassword",j:[V("email"),V("password")]},Zb:{name:"fetchProvidersForEmail",j:[V("email")]},$b:{name:"fetchSignInMethodsForEmail",j:[V("email")]},fa:{name:"getRedirectResult",j:[]},qc:{name:"isSignInWithEmailLink",j:[V("emailLink")]},
wc:{name:"onAuthStateChanged",j:[X(W(),Um(),"nextOrObserver"),Um("opt_error",!0),Um("opt_completed",!0)]},xc:{name:"onIdTokenChanged",j:[X(W(),Um(),"nextOrObserver"),Um("opt_error",!0),Um("opt_completed",!0)]},lb:{name:"sendPasswordResetEmail",j:[V("email"),X(W("opt_actionCodeSettings",!0),Vm(null,!0),"opt_actionCodeSettings",!0)]},mb:{name:"sendSignInLinkToEmail",j:[V("email"),W("actionCodeSettings")]},nb:{name:"setPersistence",j:[V("persistence")]},Qa:{name:"signInAndRetrieveDataWithCredential",
j:[Zm()]},Ra:{name:"signInAnonymously",j:[]},Ic:{name:"signInAnonymouslyAndRetrieveData",j:[]},Jc:{name:"signInWithCredential",j:[Zm()]},Nb:{name:"signInWithCustomToken",j:[V("token")]},Gc:{name:"signInAndRetrieveDataWithCustomToken",j:[V("token")]},Ob:{name:"signInWithEmailAndPassword",j:[V("email"),V("password")]},Kc:{name:"signInWithEmailLink",j:[V("email"),V("emailLink",!0)]},Hc:{name:"signInAndRetrieveDataWithEmailAndPassword",j:[V("email"),V("password")]},Lc:{name:"signInWithPhoneNumber",j:[V("phoneNumber"),
an()]},Mc:{name:"signInWithPopup",j:[$m()]},Nc:{name:"signInWithRedirect",j:[$m()]},Sc:{name:"updateCurrentUser",j:[X(function(a){return{name:"user",K:"an instance of Firebase User",optional:!!a,M:function(a){return!!(a&&a instanceof Q)}}}(),Vm(),"user")]},ob:{name:"signOut",j:[]},toJSON:{name:"toJSON",j:[V(null,!0)]},Uc:{name:"useDeviceLanguage",j:[]},Vc:{name:"verifyPasswordResetCode",j:[V("code")]}});cn(fm.prototype,{lc:{name:"languageCode",ub:X(V(),Vm(),"languageCode")}});fm.Persistence=Mj;
fm.Persistence.LOCAL="local";fm.Persistence.SESSION="session";fm.Persistence.NONE="none";
Y(Q.prototype,{"delete":{name:"delete",j:[]},dc:{name:"getIdTokenResult",j:[Tm("opt_forceRefresh",!0)]},F:{name:"getIdToken",j:[Tm("opt_forceRefresh",!0)]},fb:{name:"linkAndRetrieveDataWithCredential",j:[Zm()]},rc:{name:"linkWithCredential",j:[Zm()]},sc:{name:"linkWithPhoneNumber",j:[V("phoneNumber"),an()]},tc:{name:"linkWithPopup",j:[$m()]},uc:{name:"linkWithRedirect",j:[$m()]},hb:{name:"reauthenticateAndRetrieveDataWithCredential",j:[Zm()]},Ac:{name:"reauthenticateWithCredential",j:[Zm()]},Bc:{name:"reauthenticateWithPhoneNumber",
j:[V("phoneNumber"),an()]},Cc:{name:"reauthenticateWithPopup",j:[$m()]},Dc:{name:"reauthenticateWithRedirect",j:[$m()]},reload:{name:"reload",j:[]},kb:{name:"sendEmailVerification",j:[X(W("opt_actionCodeSettings",!0),Vm(null,!0),"opt_actionCodeSettings",!0)]},toJSON:{name:"toJSON",j:[V(null,!0)]},Rc:{name:"unlink",j:[V("provider")]},qb:{name:"updateEmail",j:[V("email")]},rb:{name:"updatePassword",j:[V("password")]},Tc:{name:"updatePhoneNumber",j:[Zm("phone")]},sb:{name:"updateProfile",j:[W("profile")]}});
Y(vm.prototype,{execute:{name:"execute"},render:{name:"render"},reset:{name:"reset"},getResponse:{name:"getResponse"}});Y(um.prototype,{execute:{name:"execute"},render:{name:"render"},reset:{name:"reset"},getResponse:{name:"getResponse"}});Y(A.prototype,{ia:{name:"finally"},s:{name:"catch"},then:{name:"then"}});cn(Vk.prototype,{appVerificationDisabled:{name:"appVerificationDisabledForTesting",ub:Tm("appVerificationDisabledForTesting")}});Y(Wk.prototype,{confirm:{name:"confirm",j:[V("verificationCode")]}});
Z(O,"credential",function(a,b){return new ig(a,b)},[V("email"),V("password")]);Y(ag.prototype,{ua:{name:"addScope",j:[V("scope")]},Da:{name:"setCustomParameters",j:[W("customOAuthParameters")]}});Z(ag,"credential",bg,[X(V(),W(),"token")]);Z(O,"credentialWithLink",ng,[V("email"),V("emailLink")]);Y(cg.prototype,{ua:{name:"addScope",j:[V("scope")]},Da:{name:"setCustomParameters",j:[W("customOAuthParameters")]}});Z(cg,"credential",dg,[X(V(),W(),"token")]);
Y(eg.prototype,{ua:{name:"addScope",j:[V("scope")]},Da:{name:"setCustomParameters",j:[W("customOAuthParameters")]}});Z(eg,"credential",fg,[X(V(),X(W(),Vm()),"idToken"),X(V(),Vm(),"accessToken",!0)]);Y(gg.prototype,{Da:{name:"setCustomParameters",j:[W("customOAuthParameters")]}});Z(gg,"credential",hg,[X(V(),W(),"token"),V("secret",!0)]);
Y(N.prototype,{ua:{name:"addScope",j:[V("scope")]},credential:{name:"credential",j:[X(V(),Vm(),"idToken",!0),X(V(),Vm(),"accessToken",!0),X(V(),Vm(),"nonce",!0)]},Da:{name:"setCustomParameters",j:[W("customOAuthParameters")]}});Z(tg,"credential",vg,[V("verificationId"),V("verificationCode")]);Y(tg.prototype,{Va:{name:"verifyPhoneNumber",j:[V("phoneNumber"),an()]}});Y(L.prototype,{toJSON:{name:"toJSON",j:[V(null,!0)]}});Y(Dg.prototype,{toJSON:{name:"toJSON",j:[V(null,!0)]}});
Y(Cg.prototype,{toJSON:{name:"toJSON",j:[V(null,!0)]}});Y(Qm.prototype,{clear:{name:"clear",j:[]},render:{name:"render",j:[]},verify:{name:"verify",j:[]}});
(function(){if("undefined"!==typeof _firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a&&_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL&&_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL.registerService){var a={Auth:fm,Error:L};Z(a,"EmailAuthProvider",O,[]);Z(a,"FacebookAuthProvider",ag,[]);Z(a,"GithubAuthProvider",cg,[]);Z(a,"GoogleAuthProvider",eg,[]);Z(a,"TwitterAuthProvider",gg,[]);Z(a,"OAuthProvider",N,[V("providerId")]);Z(a,"SAMLAuthProvider",$f,[V("providerId")]);Z(a,"PhoneAuthProvider",tg,[Xm()]);Z(a,"RecaptchaVerifier",Qm,[X(V(),Wm(),"recaptchaContainer"),W("recaptchaParameters",!0),Ym()]);
_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL.registerService("auth",function(a,c){a=new fm(a);c({INTERNAL:{getUid:r(a.getUid,a),getToken:r(a.cc,a),addAuthTokenListener:r(a.Vb,a),removeAuthTokenListener:r(a.Ec,a)}});return a},a,function(a,c){if("create"===a)try{c.auth()}catch(d){}});_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL.extendNamespace({User:Q})}else throw Error("Cannot find the firebase namespace; be sure to include firebase-app.js before this library.");})();}).apply(typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : {});

//# sourceMappingURL=auth.esm.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../node_modules/@firebase/polyfill/dist/index.esm.js":
/*!************************************************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/@firebase/polyfill/dist/index.esm.js ***!
  \************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var whatwg_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! whatwg-fetch */ "../../node_modules/@firebase/polyfill/node_modules/whatwg-fetch/fetch.js");
/* harmony import */ var whatwg_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(whatwg_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var promise_polyfill_lib_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! promise-polyfill/lib/polyfill */ "../../node_modules/promise-polyfill/lib/polyfill.js");
/* harmony import */ var promise_polyfill_lib_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(promise_polyfill_lib_polyfill__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_fn_array_find__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/fn/array/find */ "../../node_modules/@firebase/polyfill/node_modules/core-js/fn/array/find.js");
/* harmony import */ var core_js_fn_array_find__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_fn_array_find__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_fn_array_find_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/fn/array/find-index */ "../../node_modules/@firebase/polyfill/node_modules/core-js/fn/array/find-index.js");
/* harmony import */ var core_js_fn_array_find_index__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_fn_array_find_index__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_fn_object_assign__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/fn/object/assign */ "../../node_modules/@firebase/polyfill/node_modules/core-js/fn/object/assign.js");
/* harmony import */ var core_js_fn_object_assign__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_fn_object_assign__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_fn_string_starts_with__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/fn/string/starts-with */ "../../node_modules/@firebase/polyfill/node_modules/core-js/fn/string/starts-with.js");
/* harmony import */ var core_js_fn_string_starts_with__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_fn_string_starts_with__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_fn_string_repeat__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/fn/string/repeat */ "../../node_modules/@firebase/polyfill/node_modules/core-js/fn/string/repeat.js");
/* harmony import */ var core_js_fn_string_repeat__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_fn_string_repeat__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_fn_symbol__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/fn/symbol */ "../../node_modules/@firebase/polyfill/node_modules/core-js/fn/symbol/index.js");
/* harmony import */ var core_js_fn_symbol__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_fn_symbol__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_fn_symbol_iterator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/fn/symbol/iterator */ "../../node_modules/@firebase/polyfill/node_modules/core-js/fn/symbol/iterator.js");
/* harmony import */ var core_js_fn_symbol_iterator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_fn_symbol_iterator__WEBPACK_IMPORTED_MODULE_8__);










/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "../../node_modules/@firebase/polyfill/node_modules/core-js/fn/array/find-index.js":
/*!**************************************************************************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/@firebase/polyfill/node_modules/core-js/fn/array/find-index.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.array.find-index */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/es6.array.find-index.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_core.js").Array.findIndex;


/***/ }),

/***/ "../../node_modules/@firebase/polyfill/node_modules/core-js/fn/array/find.js":
/*!********************************************************************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/@firebase/polyfill/node_modules/core-js/fn/array/find.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.array.find */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/es6.array.find.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_core.js").Array.find;


/***/ }),

/***/ "../../node_modules/@firebase/polyfill/node_modules/core-js/fn/object/assign.js":
/*!***********************************************************************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/@firebase/polyfill/node_modules/core-js/fn/object/assign.js ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.assign */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/es6.object.assign.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_core.js").Object.assign;


/***/ }),

/***/ "../../node_modules/@firebase/polyfill/node_modules/core-js/fn/string/repeat.js":
/*!***********************************************************************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/@firebase/polyfill/node_modules/core-js/fn/string/repeat.js ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.string.repeat */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/es6.string.repeat.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_core.js").String.repeat;


/***/ }),

/***/ "../../node_modules/@firebase/polyfill/node_modules/core-js/fn/string/starts-with.js":
/*!****************************************************************************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/@firebase/polyfill/node_modules/core-js/fn/string/starts-with.js ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.string.starts-with */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/es6.string.starts-with.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_core.js").String.startsWith;


/***/ }),

/***/ "../../node_modules/@firebase/polyfill/node_modules/core-js/fn/symbol/index.js":
/*!**********************************************************************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/@firebase/polyfill/node_modules/core-js/fn/symbol/index.js ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.symbol */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/es6.symbol.js");
__webpack_require__(/*! ../../modules/es6.object.to-string */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/es6.object.to-string.js");
__webpack_require__(/*! ../../modules/es7.symbol.async-iterator */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/es7.symbol.async-iterator.js");
__webpack_require__(/*! ../../modules/es7.symbol.observable */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/es7.symbol.observable.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_core.js").Symbol;


/***/ }),

/***/ "../../node_modules/@firebase/polyfill/node_modules/core-js/fn/symbol/iterator.js":
/*!*************************************************************************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/@firebase/polyfill/node_modules/core-js/fn/symbol/iterator.js ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.string.iterator */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/es6.string.iterator.js");
__webpack_require__(/*! ../../modules/web.dom.iterable */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/web.dom.iterable.js");
module.exports = __webpack_require__(/*! ../../modules/_wks-ext */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_wks-ext.js").f('iterator');


/***/ }),

/***/ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_a-function.js":
/*!**************************************************************************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/@firebase/polyfill/node_modules/core-js/modules/_a-function.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_add-to-unscopables.js":
/*!**********************************************************************************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/@firebase/polyfill/node_modules/core-js/modules/_add-to-unscopables.js ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(/*! ./_wks */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_wks.js")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(/*! ./_hide */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_hide.js")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_an-object.js":
/*!*************************************************************************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/@firebase/polyfill/node_modules/core-js/modules/_an-object.js ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_array-includes.js":
/*!******************************************************************************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/@firebase/polyfill/node_modules/core-js/modules/_array-includes.js ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_array-methods.js":
/*!*****************************************************************************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/@firebase/polyfill/node_modules/core-js/modules/_array-methods.js ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(/*! ./_ctx */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_ctx.js");
var IObject = __webpack_require__(/*! ./_iobject */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_iobject.js");
var toObject = __webpack_require__(/*! ./_to-object */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_to-length.js");
var asc = __webpack_require__(/*! ./_array-species-create */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_array-species-create.js");
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_array-species-constructor.js":
/*!*****************************************************************************************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/@firebase/polyfill/node_modules/core-js/modules/_array-species-constructor.js ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_is-object.js");
var isArray = __webpack_require__(/*! ./_is-array */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_is-array.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_wks.js")('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_array-species-create.js":
/*!************************************************************************************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/@firebase/polyfill/node_modules/core-js/modules/_array-species-create.js ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(/*! ./_array-species-constructor */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_array-species-constructor.js");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_classof.js":
/*!***********************************************************************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/@firebase/polyfill/node_modules/core-js/modules/_classof.js ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_cof.js":
/*!*******************************************************************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/@firebase/polyfill/node_modules/core-js/modules/_cof.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_core.js":
/*!********************************************************************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/@firebase/polyfill/node_modules/core-js/modules/_core.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_ctx.js":
/*!*******************************************************************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/@firebase/polyfill/node_modules/core-js/modules/_ctx.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_defined.js":
/*!***********************************************************************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/@firebase/polyfill/node_modules/core-js/modules/_defined.js ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_descriptors.js":
/*!***************************************************************************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/@firebase/polyfill/node_modules/core-js/modules/_descriptors.js ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_dom-create.js":
/*!**************************************************************************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/@firebase/polyfill/node_modules/core-js/modules/_dom-create.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_enum-bug-keys.js":
/*!*****************************************************************************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/@firebase/polyfill/node_modules/core-js/modules/_enum-bug-keys.js ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_enum-keys.js":
/*!*************************************************************************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/@firebase/polyfill/node_modules/core-js/modules/_enum-keys.js ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(/*! ./_object-keys */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_object-pie.js");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_export.js":
/*!**********************************************************************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/@firebase/polyfill/node_modules/core-js/modules/_export.js ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_core.js");
var hide = __webpack_require__(/*! ./_hide */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_hide.js");
var redefine = __webpack_require__(/*! ./_redefine */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_redefine.js");
var ctx = __webpack_require__(/*! ./_ctx */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_ctx.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_fails-is-regexp.js":
/*!*******************************************************************************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/@firebase/polyfill/node_modules/core-js/modules/_fails-is-regexp.js ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var MATCH = __webpack_require__(/*! ./_wks */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_wks.js")('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) { /* empty */ }
  } return true;
};


/***/ }),

/***/ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_fails.js":
/*!*********************************************************************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/@firebase/polyfill/node_modules/core-js/modules/_fails.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_function-to-string.js":
/*!**********************************************************************************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/@firebase/polyfill/node_modules/core-js/modules/_function-to-string.js ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_shared */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_shared.js")('native-function-to-string', Function.toString);


/***/ }),

/***/ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_global.js":
/*!**********************************************************************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/@firebase/polyfill/node_modules/core-js/modules/_global.js ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_has.js":
/*!*******************************************************************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/@firebase/polyfill/node_modules/core-js/modules/_has.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_hide.js":
/*!********************************************************************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/@firebase/polyfill/node_modules/core-js/modules/_hide.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_html.js":
/*!********************************************************************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/@firebase/polyfill/node_modules/core-js/modules/_html.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_ie8-dom-define.js":
/*!******************************************************************************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/@firebase/polyfill/node_modules/core-js/modules/_ie8-dom-define.js ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_iobject.js":
/*!***********************************************************************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/@firebase/polyfill/node_modules/core-js/modules/_iobject.js ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_is-array.js":
/*!************************************************************************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/@firebase/polyfill/node_modules/core-js/modules/_is-array.js ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_is-object.js":
/*!*************************************************************************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/@firebase/polyfill/node_modules/core-js/modules/_is-object.js ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_is-regexp.js":
/*!*************************************************************************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/@firebase/polyfill/node_modules/core-js/modules/_is-regexp.js ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__(/*! ./_is-object */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_is-object.js");
var cof = __webpack_require__(/*! ./_cof */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_cof.js");
var MATCH = __webpack_require__(/*! ./_wks */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_wks.js")('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),

/***/ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_iter-create.js":
/*!***************************************************************************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/@firebase/polyfill/node_modules/core-js/modules/_iter-create.js ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_iter-define.js":
/*!***************************************************************************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/@firebase/polyfill/node_modules/core-js/modules/_iter-define.js ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_iter-step.js":
/*!*************************************************************************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/@firebase/polyfill/node_modules/core-js/modules/_iter-step.js ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_iterators.js":
/*!*************************************************************************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/@firebase/polyfill/node_modules/core-js/modules/_iterators.js ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_library.js":
/*!***********************************************************************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/@firebase/polyfill/node_modules/core-js/modules/_library.js ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_meta.js":
/*!********************************************************************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/@firebase/polyfill/node_modules/core-js/modules/_meta.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_has.js");
var setDesc = __webpack_require__(/*! ./_object-dp */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_object-assign.js":
/*!*****************************************************************************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/@firebase/polyfill/node_modules/core-js/modules/_object-assign.js ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(/*! ./_object-keys */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_object-pie.js");
var toObject = __webpack_require__(/*! ./_to-object */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_iobject.js");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(/*! ./_fails */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_fails.js")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_object-create.js":
/*!*****************************************************************************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/@firebase/polyfill/node_modules/core-js/modules/_object-create.js ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_object-dp.js":
/*!*************************************************************************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/@firebase/polyfill/node_modules/core-js/modules/_object-dp.js ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_object-dps.js":
/*!**************************************************************************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/@firebase/polyfill/node_modules/core-js/modules/_object-dps.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_object-gopd.js":
/*!***************************************************************************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/@firebase/polyfill/node_modules/core-js/modules/_object-gopd.js ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_object-gopn-ext.js":
/*!*******************************************************************************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/@firebase/polyfill/node_modules/core-js/modules/_object-gopn-ext.js ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(/*! ./_to-iobject */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_to-iobject.js");
var gOPN = __webpack_require__(/*! ./_object-gopn */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_object-gopn.js").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_object-gopn.js":
/*!***************************************************************************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/@firebase/polyfill/node_modules/core-js/modules/_object-gopn.js ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_object-keys-internal.js");
var hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_enum-bug-keys.js").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_object-gops.js":
/*!***************************************************************************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/@firebase/polyfill/node_modules/core-js/modules/_object-gops.js ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_object-gpo.js":
/*!**************************************************************************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/@firebase/polyfill/node_modules/core-js/modules/_object-gpo.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_object-keys-internal.js":
/*!************************************************************************************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/@firebase/polyfill/node_modules/core-js/modules/_object-keys-internal.js ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_object-keys.js":
/*!***************************************************************************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/@firebase/polyfill/node_modules/core-js/modules/_object-keys.js ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_object-pie.js":
/*!**************************************************************************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/@firebase/polyfill/node_modules/core-js/modules/_object-pie.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_property-desc.js":
/*!*****************************************************************************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/@firebase/polyfill/node_modules/core-js/modules/_property-desc.js ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_redefine.js":
/*!************************************************************************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/@firebase/polyfill/node_modules/core-js/modules/_redefine.js ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_has.js");
var SRC = __webpack_require__(/*! ./_uid */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_uid.js")('src');
var $toString = __webpack_require__(/*! ./_function-to-string */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_function-to-string.js");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(/*! ./_core */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_core.js").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_set-to-string-tag.js":
/*!*********************************************************************************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/@firebase/polyfill/node_modules/core-js/modules/_set-to-string-tag.js ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_shared-key.js":
/*!**************************************************************************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/@firebase/polyfill/node_modules/core-js/modules/_shared-key.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_shared.js":
/*!**********************************************************************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/@firebase/polyfill/node_modules/core-js/modules/_shared.js ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_string-at.js":
/*!*************************************************************************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/@firebase/polyfill/node_modules/core-js/modules/_string-at.js ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_string-context.js":
/*!******************************************************************************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/@firebase/polyfill/node_modules/core-js/modules/_string-context.js ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// helper for String#{startsWith, endsWith, includes}
var isRegExp = __webpack_require__(/*! ./_is-regexp */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_is-regexp.js");
var defined = __webpack_require__(/*! ./_defined */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_defined.js");

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};


/***/ }),

/***/ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_string-repeat.js":
/*!*****************************************************************************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/@firebase/polyfill/node_modules/core-js/modules/_string-repeat.js ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toInteger = __webpack_require__(/*! ./_to-integer */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_defined.js");

module.exports = function repeat(count) {
  var str = String(defined(this));
  var res = '';
  var n = toInteger(count);
  if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) res += str;
  return res;
};


/***/ }),

/***/ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_to-absolute-index.js":
/*!*********************************************************************************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/@firebase/polyfill/node_modules/core-js/modules/_to-absolute-index.js ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_to-integer.js":
/*!**************************************************************************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/@firebase/polyfill/node_modules/core-js/modules/_to-integer.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_to-iobject.js":
/*!**************************************************************************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/@firebase/polyfill/node_modules/core-js/modules/_to-iobject.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_to-length.js":
/*!*************************************************************************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/@firebase/polyfill/node_modules/core-js/modules/_to-length.js ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_to-object.js":
/*!*************************************************************************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/@firebase/polyfill/node_modules/core-js/modules/_to-object.js ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_to-primitive.js":
/*!****************************************************************************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/@firebase/polyfill/node_modules/core-js/modules/_to-primitive.js ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_uid.js":
/*!*******************************************************************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/@firebase/polyfill/node_modules/core-js/modules/_uid.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_wks-define.js":
/*!**************************************************************************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/@firebase/polyfill/node_modules/core-js/modules/_wks-define.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_core.js");
var LIBRARY = __webpack_require__(/*! ./_library */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_library.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_wks-ext.js");
var defineProperty = __webpack_require__(/*! ./_object-dp */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_object-dp.js").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_wks-ext.js":
/*!***********************************************************************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/@firebase/polyfill/node_modules/core-js/modules/_wks-ext.js ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(/*! ./_wks */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_wks.js");


/***/ }),

/***/ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_wks.js":
/*!*******************************************************************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/@firebase/polyfill/node_modules/core-js/modules/_wks.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/es6.array.find-index.js":
/*!***********************************************************************************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/@firebase/polyfill/node_modules/core-js/modules/es6.array.find-index.js ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
var $export = __webpack_require__(/*! ./_export */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_export.js");
var $find = __webpack_require__(/*! ./_array-methods */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_array-methods.js")(6);
var KEY = 'findIndex';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(/*! ./_add-to-unscopables */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_add-to-unscopables.js")(KEY);


/***/ }),

/***/ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/es6.array.find.js":
/*!*****************************************************************************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/@firebase/polyfill/node_modules/core-js/modules/es6.array.find.js ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = __webpack_require__(/*! ./_export */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_export.js");
var $find = __webpack_require__(/*! ./_array-methods */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_array-methods.js")(5);
var KEY = 'find';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(/*! ./_add-to-unscopables */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_add-to-unscopables.js")(KEY);


/***/ }),

/***/ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/es6.array.iterator.js":
/*!*********************************************************************************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/@firebase/polyfill/node_modules/core-js/modules/es6.array.iterator.js ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_add-to-unscopables.js");
var step = __webpack_require__(/*! ./_iter-step */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_iter-step.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_iterators.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/es6.object.assign.js":
/*!********************************************************************************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/@firebase/polyfill/node_modules/core-js/modules/es6.object.assign.js ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(/*! ./_export */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_export.js");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(/*! ./_object-assign */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_object-assign.js") });


/***/ }),

/***/ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/es6.object.to-string.js":
/*!***********************************************************************************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/@firebase/polyfill/node_modules/core-js/modules/es6.object.to-string.js ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.3.6 Object.prototype.toString()
var classof = __webpack_require__(/*! ./_classof */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_classof.js");
var test = {};
test[__webpack_require__(/*! ./_wks */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_wks.js")('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  __webpack_require__(/*! ./_redefine */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_redefine.js")(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}


/***/ }),

/***/ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/es6.string.iterator.js":
/*!**********************************************************************************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/@firebase/polyfill/node_modules/core-js/modules/es6.string.iterator.js ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(/*! ./_string-at */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_string-at.js")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(/*! ./_iter-define */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_iter-define.js")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/es6.string.repeat.js":
/*!********************************************************************************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/@firebase/polyfill/node_modules/core-js/modules/es6.string.repeat.js ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_export.js");

$export($export.P, 'String', {
  // 21.1.3.13 String.prototype.repeat(count)
  repeat: __webpack_require__(/*! ./_string-repeat */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_string-repeat.js")
});


/***/ }),

/***/ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/es6.string.starts-with.js":
/*!*************************************************************************************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/@firebase/polyfill/node_modules/core-js/modules/es6.string.starts-with.js ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.18 String.prototype.startsWith(searchString [, position ])

var $export = __webpack_require__(/*! ./_export */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_export.js");
var toLength = __webpack_require__(/*! ./_to-length */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_to-length.js");
var context = __webpack_require__(/*! ./_string-context */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_string-context.js");
var STARTS_WITH = 'startsWith';
var $startsWith = ''[STARTS_WITH];

$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_fails-is-regexp.js")(STARTS_WITH), 'String', {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = context(this, searchString, STARTS_WITH);
    var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = String(searchString);
    return $startsWith
      ? $startsWith.call(that, search, index)
      : that.slice(index, index + search.length) === search;
  }
});


/***/ }),

/***/ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/es6.symbol.js":
/*!*************************************************************************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/@firebase/polyfill/node_modules/core-js/modules/es6.symbol.js ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(/*! ./_global */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_global.js");
var has = __webpack_require__(/*! ./_has */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_has.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_descriptors.js");
var $export = __webpack_require__(/*! ./_export */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_redefine.js");
var META = __webpack_require__(/*! ./_meta */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_meta.js").KEY;
var $fails = __webpack_require__(/*! ./_fails */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_fails.js");
var shared = __webpack_require__(/*! ./_shared */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_shared.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_set-to-string-tag.js");
var uid = __webpack_require__(/*! ./_uid */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_uid.js");
var wks = __webpack_require__(/*! ./_wks */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_wks.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_wks-ext.js");
var wksDefine = __webpack_require__(/*! ./_wks-define */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_wks-define.js");
var enumKeys = __webpack_require__(/*! ./_enum-keys */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_enum-keys.js");
var isArray = __webpack_require__(/*! ./_is-array */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_is-array.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_is-object.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_to-primitive.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_property-desc.js");
var _create = __webpack_require__(/*! ./_object-create */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_object-create.js");
var gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_object-gopn-ext.js");
var $GOPD = __webpack_require__(/*! ./_object-gopd */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_object-gopd.js");
var $DP = __webpack_require__(/*! ./_object-dp */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_object-dp.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_object-keys.js");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(/*! ./_object-gopn */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_object-gopn.js").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(/*! ./_object-pie */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_object-pie.js").f = $propertyIsEnumerable;
  __webpack_require__(/*! ./_object-gops */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_object-gops.js").f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_library.js")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/es7.symbol.async-iterator.js":
/*!****************************************************************************************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/@firebase/polyfill/node_modules/core-js/modules/es7.symbol.async-iterator.js ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_wks-define.js")('asyncIterator');


/***/ }),

/***/ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/es7.symbol.observable.js":
/*!************************************************************************************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/@firebase/polyfill/node_modules/core-js/modules/es7.symbol.observable.js ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_wks-define.js")('observable');


/***/ }),

/***/ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/web.dom.iterable.js":
/*!*******************************************************************************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/@firebase/polyfill/node_modules/core-js/modules/web.dom.iterable.js ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__(/*! ./es6.array.iterator */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/es6.array.iterator.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_object-keys.js");
var redefine = __webpack_require__(/*! ./_redefine */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_redefine.js");
var global = __webpack_require__(/*! ./_global */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_iterators.js");
var wks = __webpack_require__(/*! ./_wks */ "../../node_modules/@firebase/polyfill/node_modules/core-js/modules/_wks.js");
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),

/***/ "../../node_modules/@firebase/polyfill/node_modules/whatwg-fetch/fetch.js":
/*!*****************************************************************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/@firebase/polyfill/node_modules/whatwg-fetch/fetch.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function(self) {
  'use strict';

  if (self.fetch) {
    return
  }

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && (function() {
      try {
        new Blob()
        return true
      } catch(e) {
        return false
      }
    })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  }

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ]

    var isDataView = function(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj)
    }

    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name)
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value)
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift()
        return {done: value === undefined, value: value}
      }
    }

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      }
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {}

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value)
      }, this)
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1])
      }, this)
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name])
      }, this)
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name)
    value = normalizeValue(value)
    var oldValue = this.map[name]
    this.map[name] = oldValue ? oldValue+','+value : value
  }

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)]
  }

  Headers.prototype.get = function(name) {
    name = normalizeName(name)
    return this.has(name) ? this.map[name] : null
  }

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  }

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value)
  }

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this)
      }
    }
  }

  Headers.prototype.keys = function() {
    var items = []
    this.forEach(function(value, name) { items.push(name) })
    return iteratorFor(items)
  }

  Headers.prototype.values = function() {
    var items = []
    this.forEach(function(value) { items.push(value) })
    return iteratorFor(items)
  }

  Headers.prototype.entries = function() {
    var items = []
    this.forEach(function(value, name) { items.push([name, value]) })
    return iteratorFor(items)
  }

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result)
      }
      reader.onerror = function() {
        reject(reader.error)
      }
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsArrayBuffer(blob)
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsText(blob)
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf)
    var chars = new Array(view.length)

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i])
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength)
      view.set(new Uint8Array(buf))
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false

    this._initBody = function(body) {
      this._bodyInit = body
      if (!body) {
        this._bodyText = ''
      } else if (typeof body === 'string') {
        this._bodyText = body
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString()
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer)
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer])
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body)
      } else {
        throw new Error('unsupported BodyInit type')
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8')
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type)
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
        }
      }
    }

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this)
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      }

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      }
    }

    this.text = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    }

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      }
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    }

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

  function normalizeMethod(method) {
    var upcased = method.toUpperCase()
    return (methods.indexOf(upcased) > -1) ? upcased : method
  }

  function Request(input, options) {
    options = options || {}
    var body = options.body

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url
      this.credentials = input.credentials
      if (!options.headers) {
        this.headers = new Headers(input.headers)
      }
      this.method = input.method
      this.mode = input.mode
      if (!body && input._bodyInit != null) {
        body = input._bodyInit
        input.bodyUsed = true
      }
    } else {
      this.url = String(input)
    }

    this.credentials = options.credentials || this.credentials || 'omit'
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers)
    }
    this.method = normalizeMethod(options.method || this.method || 'GET')
    this.mode = options.mode || this.mode || null
    this.referrer = null

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body)
  }

  Request.prototype.clone = function() {
    return new Request(this, { body: this._bodyInit })
  }

  function decode(body) {
    var form = new FormData()
    body.trim().split('&').forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers()
    // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
    // https://tools.ietf.org/html/rfc7230#section-3.2
    var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ')
    preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(':')
      var key = parts.shift().trim()
      if (key) {
        var value = parts.join(':').trim()
        headers.append(key, value)
      }
    })
    return headers
  }

  Body.call(Request.prototype)

  function Response(bodyInit, options) {
    if (!options) {
      options = {}
    }

    this.type = 'default'
    this.status = options.status === undefined ? 200 : options.status
    this.ok = this.status >= 200 && this.status < 300
    this.statusText = 'statusText' in options ? options.statusText : 'OK'
    this.headers = new Headers(options.headers)
    this.url = options.url || ''
    this._initBody(bodyInit)
  }

  Body.call(Response.prototype)

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  }

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''})
    response.type = 'error'
    return response
  }

  var redirectStatuses = [301, 302, 303, 307, 308]

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  }

  self.Headers = Headers
  self.Request = Request
  self.Response = Response

  self.fetch = function(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init)
      var xhr = new XMLHttpRequest()

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        }
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
        var body = 'response' in xhr ? xhr.response : xhr.responseText
        resolve(new Response(body, options))
      }

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.open(request.method, request.url, true)

      if (request.credentials === 'include') {
        xhr.withCredentials = true
      } else if (request.credentials === 'omit') {
        xhr.withCredentials = false
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob'
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value)
      })

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
    })
  }
  self.fetch.polyfill = true
})(typeof self !== 'undefined' ? self : this);


/***/ }),

/***/ "../../node_modules/@firebase/util/dist/index.cjs.js":
/*!********************************************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/@firebase/util/dist/index.cjs.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var tslib_1 = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview Firebase constants.  Some of these (@defines) can be overridden at compile-time.
 */
var CONSTANTS = {
    /**
     * @define {boolean} Whether this is the client Node.js SDK.
     */
    NODE_CLIENT: false,
    /**
     * @define {boolean} Whether this is the Admin Node.js SDK.
     */
    NODE_ADMIN: false,
    /**
     * Firebase SDK Version
     */
    SDK_VERSION: '${JSCORE_VERSION}'
};

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Throws an error if the provided assertion is falsy
 * @param {*} assertion The assertion to be tested for falsiness
 * @param {!string} message The message to display if the check fails
 */
var assert = function (assertion, message) {
    if (!assertion) {
        throw assertionError(message);
    }
};
/**
 * Returns an Error object suitable for throwing.
 * @param {string} message
 * @return {!Error}
 */
var assertionError = function (message) {
    return new Error('Firebase Database (' +
        CONSTANTS.SDK_VERSION +
        ') INTERNAL ASSERT FAILED: ' +
        message);
};

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var stringToByteArray = function (str) {
    // TODO(user): Use native implementations if/when available
    var out = [], p = 0;
    for (var i = 0; i < str.length; i++) {
        var c = str.charCodeAt(i);
        if (c < 128) {
            out[p++] = c;
        }
        else if (c < 2048) {
            out[p++] = (c >> 6) | 192;
            out[p++] = (c & 63) | 128;
        }
        else if ((c & 0xfc00) == 0xd800 &&
            i + 1 < str.length &&
            (str.charCodeAt(i + 1) & 0xfc00) == 0xdc00) {
            // Surrogate Pair
            c = 0x10000 + ((c & 0x03ff) << 10) + (str.charCodeAt(++i) & 0x03ff);
            out[p++] = (c >> 18) | 240;
            out[p++] = ((c >> 12) & 63) | 128;
            out[p++] = ((c >> 6) & 63) | 128;
            out[p++] = (c & 63) | 128;
        }
        else {
            out[p++] = (c >> 12) | 224;
            out[p++] = ((c >> 6) & 63) | 128;
            out[p++] = (c & 63) | 128;
        }
    }
    return out;
};
/**
 * Turns an array of numbers into the string given by the concatenation of the
 * characters to which the numbers correspond.
 * @param {Array<number>} bytes Array of numbers representing characters.
 * @return {string} Stringification of the array.
 */
var byteArrayToString = function (bytes) {
    // TODO(user): Use native implementations if/when available
    var out = [], pos = 0, c = 0;
    while (pos < bytes.length) {
        var c1 = bytes[pos++];
        if (c1 < 128) {
            out[c++] = String.fromCharCode(c1);
        }
        else if (c1 > 191 && c1 < 224) {
            var c2 = bytes[pos++];
            out[c++] = String.fromCharCode(((c1 & 31) << 6) | (c2 & 63));
        }
        else if (c1 > 239 && c1 < 365) {
            // Surrogate Pair
            var c2 = bytes[pos++];
            var c3 = bytes[pos++];
            var c4 = bytes[pos++];
            var u = (((c1 & 7) << 18) | ((c2 & 63) << 12) | ((c3 & 63) << 6) | (c4 & 63)) -
                0x10000;
            out[c++] = String.fromCharCode(0xd800 + (u >> 10));
            out[c++] = String.fromCharCode(0xdc00 + (u & 1023));
        }
        else {
            var c2 = bytes[pos++];
            var c3 = bytes[pos++];
            out[c++] = String.fromCharCode(((c1 & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
        }
    }
    return out.join('');
};
// Static lookup maps, lazily populated by init_()
var base64 = {
    /**
     * Maps bytes to characters.
     * @type {Object}
     * @private
     */
    byteToCharMap_: null,
    /**
     * Maps characters to bytes.
     * @type {Object}
     * @private
     */
    charToByteMap_: null,
    /**
     * Maps bytes to websafe characters.
     * @type {Object}
     * @private
     */
    byteToCharMapWebSafe_: null,
    /**
     * Maps websafe characters to bytes.
     * @type {Object}
     * @private
     */
    charToByteMapWebSafe_: null,
    /**
     * Our default alphabet, shared between
     * ENCODED_VALS and ENCODED_VALS_WEBSAFE
     * @type {string}
     */
    ENCODED_VALS_BASE: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz' + '0123456789',
    /**
     * Our default alphabet. Value 64 (=) is special; it means "nothing."
     * @type {string}
     */
    get ENCODED_VALS() {
        return this.ENCODED_VALS_BASE + '+/=';
    },
    /**
     * Our websafe alphabet.
     * @type {string}
     */
    get ENCODED_VALS_WEBSAFE() {
        return this.ENCODED_VALS_BASE + '-_.';
    },
    /**
     * Whether this browser supports the atob and btoa functions. This extension
     * started at Mozilla but is now implemented by many browsers. We use the
     * ASSUME_* variables to avoid pulling in the full useragent detection library
     * but still allowing the standard per-browser compilations.
     *
     * @type {boolean}
     */
    HAS_NATIVE_SUPPORT: typeof atob === 'function',
    /**
     * Base64-encode an array of bytes.
     *
     * @param {Array<number>|Uint8Array} input An array of bytes (numbers with
     *     value in [0, 255]) to encode.
     * @param {boolean=} opt_webSafe Boolean indicating we should use the
     *     alternative alphabet.
     * @return {string} The base64 encoded string.
     */
    encodeByteArray: function (input, opt_webSafe) {
        if (!Array.isArray(input)) {
            throw Error('encodeByteArray takes an array as a parameter');
        }
        this.init_();
        var byteToCharMap = opt_webSafe
            ? this.byteToCharMapWebSafe_
            : this.byteToCharMap_;
        var output = [];
        for (var i = 0; i < input.length; i += 3) {
            var byte1 = input[i];
            var haveByte2 = i + 1 < input.length;
            var byte2 = haveByte2 ? input[i + 1] : 0;
            var haveByte3 = i + 2 < input.length;
            var byte3 = haveByte3 ? input[i + 2] : 0;
            var outByte1 = byte1 >> 2;
            var outByte2 = ((byte1 & 0x03) << 4) | (byte2 >> 4);
            var outByte3 = ((byte2 & 0x0f) << 2) | (byte3 >> 6);
            var outByte4 = byte3 & 0x3f;
            if (!haveByte3) {
                outByte4 = 64;
                if (!haveByte2) {
                    outByte3 = 64;
                }
            }
            output.push(byteToCharMap[outByte1], byteToCharMap[outByte2], byteToCharMap[outByte3], byteToCharMap[outByte4]);
        }
        return output.join('');
    },
    /**
     * Base64-encode a string.
     *
     * @param {string} input A string to encode.
     * @param {boolean=} opt_webSafe If true, we should use the
     *     alternative alphabet.
     * @return {string} The base64 encoded string.
     */
    encodeString: function (input, opt_webSafe) {
        // Shortcut for Mozilla browsers that implement
        // a native base64 encoder in the form of "btoa/atob"
        if (this.HAS_NATIVE_SUPPORT && !opt_webSafe) {
            return btoa(input);
        }
        return this.encodeByteArray(stringToByteArray(input), opt_webSafe);
    },
    /**
     * Base64-decode a string.
     *
     * @param {string} input to decode.
     * @param {boolean=} opt_webSafe True if we should use the
     *     alternative alphabet.
     * @return {string} string representing the decoded value.
     */
    decodeString: function (input, opt_webSafe) {
        // Shortcut for Mozilla browsers that implement
        // a native base64 encoder in the form of "btoa/atob"
        if (this.HAS_NATIVE_SUPPORT && !opt_webSafe) {
            return atob(input);
        }
        return byteArrayToString(this.decodeStringToByteArray(input, opt_webSafe));
    },
    /**
     * Base64-decode a string.
     *
     * In base-64 decoding, groups of four characters are converted into three
     * bytes.  If the encoder did not apply padding, the input length may not
     * be a multiple of 4.
     *
     * In this case, the last group will have fewer than 4 characters, and
     * padding will be inferred.  If the group has one or two characters, it decodes
     * to one byte.  If the group has three characters, it decodes to two bytes.
     *
     * @param {string} input Input to decode.
     * @param {boolean=} opt_webSafe True if we should use the web-safe alphabet.
     * @return {!Array<number>} bytes representing the decoded value.
     */
    decodeStringToByteArray: function (input, opt_webSafe) {
        this.init_();
        var charToByteMap = opt_webSafe
            ? this.charToByteMapWebSafe_
            : this.charToByteMap_;
        var output = [];
        for (var i = 0; i < input.length;) {
            var byte1 = charToByteMap[input.charAt(i++)];
            var haveByte2 = i < input.length;
            var byte2 = haveByte2 ? charToByteMap[input.charAt(i)] : 0;
            ++i;
            var haveByte3 = i < input.length;
            var byte3 = haveByte3 ? charToByteMap[input.charAt(i)] : 64;
            ++i;
            var haveByte4 = i < input.length;
            var byte4 = haveByte4 ? charToByteMap[input.charAt(i)] : 64;
            ++i;
            if (byte1 == null || byte2 == null || byte3 == null || byte4 == null) {
                throw Error();
            }
            var outByte1 = (byte1 << 2) | (byte2 >> 4);
            output.push(outByte1);
            if (byte3 != 64) {
                var outByte2 = ((byte2 << 4) & 0xf0) | (byte3 >> 2);
                output.push(outByte2);
                if (byte4 != 64) {
                    var outByte3 = ((byte3 << 6) & 0xc0) | byte4;
                    output.push(outByte3);
                }
            }
        }
        return output;
    },
    /**
     * Lazy static initialization function. Called before
     * accessing any of the static map variables.
     * @private
     */
    init_: function () {
        if (!this.byteToCharMap_) {
            this.byteToCharMap_ = {};
            this.charToByteMap_ = {};
            this.byteToCharMapWebSafe_ = {};
            this.charToByteMapWebSafe_ = {};
            // We want quick mappings back and forth, so we precompute two maps.
            for (var i = 0; i < this.ENCODED_VALS.length; i++) {
                this.byteToCharMap_[i] = this.ENCODED_VALS.charAt(i);
                this.charToByteMap_[this.byteToCharMap_[i]] = i;
                this.byteToCharMapWebSafe_[i] = this.ENCODED_VALS_WEBSAFE.charAt(i);
                this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]] = i;
                // Be forgiving when decoding and correctly decode both encodings.
                if (i >= this.ENCODED_VALS_BASE.length) {
                    this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)] = i;
                    this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)] = i;
                }
            }
        }
    }
};
/**
 * URL-safe base64 encoding
 * @param {!string} str
 * @return {!string}
 */
var base64Encode = function (str) {
    var utf8Bytes = stringToByteArray(str);
    return base64.encodeByteArray(utf8Bytes, true);
};
/**
 * URL-safe base64 decoding
 *
 * NOTE: DO NOT use the global atob() function - it does NOT support the
 * base64Url variant encoding.
 *
 * @param {string} str To be decoded
 * @return {?string} Decoded result, if possible
 */
var base64Decode = function (str) {
    try {
        return base64.decodeString(str, true);
    }
    catch (e) {
        console.error('base64Decode failed: ', e);
    }
    return null;
};

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Do a deep-copy of basic JavaScript Objects or Arrays.
 */
function deepCopy(value) {
    return deepExtend(undefined, value);
}
/**
 * Copy properties from source to target (recursively allows extension
 * of Objects and Arrays).  Scalar values in the target are over-written.
 * If target is undefined, an object of the appropriate type will be created
 * (and returned).
 *
 * We recursively copy all child properties of plain Objects in the source- so
 * that namespace- like dictionaries are merged.
 *
 * Note that the target can be a function, in which case the properties in
 * the source Object are copied onto it as static properties of the Function.
 */
function deepExtend(target, source) {
    if (!(source instanceof Object)) {
        return source;
    }
    switch (source.constructor) {
        case Date:
            // Treat Dates like scalars; if the target date object had any child
            // properties - they will be lost!
            var dateValue = source;
            return new Date(dateValue.getTime());
        case Object:
            if (target === undefined) {
                target = {};
            }
            break;
        case Array:
            // Always copy the array source and overwrite the target.
            target = [];
            break;
        default:
            // Not a plain Object - treat it as a scalar.
            return source;
    }
    for (var prop in source) {
        if (!source.hasOwnProperty(prop)) {
            continue;
        }
        target[prop] = deepExtend(target[prop], source[prop]);
    }
    return target;
}
// TODO: Really needed (for JSCompiler type checking)?
function patchProperty(obj, prop, value) {
    obj[prop] = value;
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Deferred = /** @class */ (function () {
    function Deferred() {
        var _this = this;
        this.promise = new Promise(function (resolve, reject) {
            _this.resolve = resolve;
            _this.reject = reject;
        });
    }
    /**
     * Our API internals are not promiseified and cannot because our callback APIs have subtle expectations around
     * invoking promises inline, which Promises are forbidden to do. This method accepts an optional node-style callback
     * and returns a node-style callback which will resolve or reject the Deferred's promise.
     * @param {((?function(?(Error)): (?|undefined))| (?function(?(Error),?=): (?|undefined)))=} callback
     * @return {!function(?(Error), ?=)}
     */
    Deferred.prototype.wrapCallback = function (callback) {
        var _this = this;
        return function (error, value) {
            if (error) {
                _this.reject(error);
            }
            else {
                _this.resolve(value);
            }
            if (typeof callback === 'function') {
                // Attaching noop handler just in case developer wasn't expecting
                // promises
                _this.promise.catch(function () { });
                // Some of our callbacks don't expect a value and our own tests
                // assert that the parameter length is 1
                if (callback.length === 1) {
                    callback(error);
                }
                else {
                    callback(error, value);
                }
            }
        };
    };
    return Deferred;
}());

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns navigator.userAgent string or '' if it's not defined.
 * @return {string} user agent string
 */
var getUA = function () {
    if (typeof navigator !== 'undefined' &&
        typeof navigator['userAgent'] === 'string') {
        return navigator['userAgent'];
    }
    else {
        return '';
    }
};
/**
 * Detect Cordova / PhoneGap / Ionic frameworks on a mobile device.
 *
 * Deliberately does not rely on checking `file://` URLs (as this fails PhoneGap in the Ripple emulator) nor
 * Cordova `onDeviceReady`, which would normally wait for a callback.
 *
 * @return {boolean} isMobileCordova
 */
var isMobileCordova = function () {
    return (typeof window !== 'undefined' &&
        !!(window['cordova'] || window['phonegap'] || window['PhoneGap']) &&
        /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(getUA()));
};
/**
 * Detect React Native.
 *
 * @return {boolean} True if ReactNative environment is detected.
 */
var isReactNative = function () {
    return (typeof navigator === 'object' && navigator['product'] === 'ReactNative');
};
/**
 * Detect Node.js.
 *
 * @return {boolean} True if Node.js environment is detected.
 */
var isNodeSdk = function () {
    return CONSTANTS.NODE_CLIENT === true || CONSTANTS.NODE_ADMIN === true;
};

var ERROR_NAME = 'FirebaseError';
var captureStackTrace = Error
    .captureStackTrace;
// Export for faking in tests
function patchCapture(captureFake) {
    var result = captureStackTrace;
    captureStackTrace = captureFake;
    return result;
}
var FirebaseError = /** @class */ (function () {
    function FirebaseError(code, message) {
        this.code = code;
        this.message = message;
        // We want the stack value, if implemented by Error
        if (captureStackTrace) {
            // Patches this.stack, omitted calls above ErrorFactory#create
            captureStackTrace(this, ErrorFactory.prototype.create);
        }
        else {
            try {
                // In case of IE11, stack will be set only after error is raised.
                // https://docs.microsoft.com/en-us/scripting/javascript/reference/stack-property-error-javascript
                throw Error.apply(this, arguments);
            }
            catch (err) {
                this.name = ERROR_NAME;
                // Make non-enumerable getter for the property.
                Object.defineProperty(this, 'stack', {
                    get: function () {
                        return err.stack;
                    }
                });
            }
        }
    }
    return FirebaseError;
}());
// Back-door inheritance
FirebaseError.prototype = Object.create(Error.prototype);
FirebaseError.prototype.constructor = FirebaseError;
FirebaseError.prototype.name = ERROR_NAME;
var ErrorFactory = /** @class */ (function () {
    function ErrorFactory(service, serviceName, errors) {
        this.service = service;
        this.serviceName = serviceName;
        this.errors = errors;
        // Matches {$name}, by default.
        this.pattern = /\{\$([^}]+)}/g;
        // empty
    }
    ErrorFactory.prototype.create = function (code, data) {
        if (data === undefined) {
            data = {};
        }
        var template = this.errors[code];
        var fullCode = this.service + '/' + code;
        var message;
        if (template === undefined) {
            message = 'Error';
        }
        else {
            message = template.replace(this.pattern, function (match, key) {
                var value = data[key];
                return value !== undefined ? value.toString() : '<' + key + '?>';
            });
        }
        // Service: Error message (service/code).
        message = this.serviceName + ': ' + message + ' (' + fullCode + ').';
        var err = new FirebaseError(fullCode, message);
        // Populate the Error object with message parts for programmatic
        // accesses (e.g., e.file).
        for (var prop in data) {
            if (!data.hasOwnProperty(prop) || prop.slice(-1) === '_') {
                continue;
            }
            err[prop] = data[prop];
        }
        return err;
    };
    return ErrorFactory;
}());

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Evaluates a JSON string into a javascript object.
 *
 * @param {string} str A string containing JSON.
 * @return {*} The javascript object representing the specified JSON.
 */
function jsonEval(str) {
    return JSON.parse(str);
}
/**
 * Returns JSON representing a javascript object.
 * @param {*} data Javascript object to be stringified.
 * @return {string} The JSON contents of the object.
 */
function stringify(data) {
    return JSON.stringify(data);
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Decodes a Firebase auth. token into constituent parts.
 *
 * Notes:
 * - May return with invalid / incomplete claims if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 *
 * @param {?string} token
 * @return {{header: *, claims: *, data: *, signature: string}}
 */
var decode = function (token) {
    var header = {}, claims = {}, data = {}, signature = '';
    try {
        var parts = token.split('.');
        header = jsonEval(base64Decode(parts[0]) || '');
        claims = jsonEval(base64Decode(parts[1]) || '');
        signature = parts[2];
        data = claims['d'] || {};
        delete claims['d'];
    }
    catch (e) { }
    return {
        header: header,
        claims: claims,
        data: data,
        signature: signature
    };
};
/**
 * Decodes a Firebase auth. token and checks the validity of its time-based claims. Will return true if the
 * token is within the time window authorized by the 'nbf' (not-before) and 'iat' (issued-at) claims.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 *
 * @param {?string} token
 * @return {boolean}
 */
var isValidTimestamp = function (token) {
    var claims = decode(token).claims, now = Math.floor(new Date().getTime() / 1000), validSince, validUntil;
    if (typeof claims === 'object') {
        if (claims.hasOwnProperty('nbf')) {
            validSince = claims['nbf'];
        }
        else if (claims.hasOwnProperty('iat')) {
            validSince = claims['iat'];
        }
        if (claims.hasOwnProperty('exp')) {
            validUntil = claims['exp'];
        }
        else {
            // token will expire after 24h by default
            validUntil = validSince + 86400;
        }
    }
    return (now && validSince && validUntil && now >= validSince && now <= validUntil);
};
/**
 * Decodes a Firebase auth. token and returns its issued at time if valid, null otherwise.
 *
 * Notes:
 * - May return null if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 *
 * @param {?string} token
 * @return {?number}
 */
var issuedAtTime = function (token) {
    var claims = decode(token).claims;
    if (typeof claims === 'object' && claims.hasOwnProperty('iat')) {
        return claims['iat'];
    }
    return null;
};
/**
 * Decodes a Firebase auth. token and checks the validity of its format. Expects a valid issued-at time.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 *
 * @param {?string} token
 * @return {boolean}
 */
var isValidFormat = function (token) {
    var decoded = decode(token), claims = decoded.claims;
    return !!claims && typeof claims === 'object' && claims.hasOwnProperty('iat');
};
/**
 * Attempts to peer into an auth token and determine if it's an admin auth token by looking at the claims portion.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 *
 * @param {?string} token
 * @return {boolean}
 */
var isAdmin = function (token) {
    var claims = decode(token).claims;
    return typeof claims === 'object' && claims['admin'] === true;
};

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// See http://www.devthought.com/2012/01/18/an-object-is-not-a-hash/
var contains = function (obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
};
var safeGet = function (obj, key) {
    if (Object.prototype.hasOwnProperty.call(obj, key))
        return obj[key];
    // else return undefined.
};
/**
 * Enumerates the keys/values in an object, excluding keys defined on the prototype.
 *
 * @param {?Object.<K,V>} obj Object to enumerate.
 * @param {!function(K, V)} fn Function to call for each key and value.
 * @template K,V
 */
var forEach = function (obj, fn) {
    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            fn(key, obj[key]);
        }
    }
};
/**
 * Copies all the (own) properties from one object to another.
 * @param {!Object} objTo
 * @param {!Object} objFrom
 * @return {!Object} objTo
 */
var extend = function (objTo, objFrom) {
    forEach(objFrom, function (key, value) {
        objTo[key] = value;
    });
    return objTo;
};
/**
 * Returns a clone of the specified object.
 * @param {!Object} obj
 * @return {!Object} cloned obj.
 */
var clone = function (obj) {
    return extend({}, obj);
};
/**
 * Returns true if obj has typeof "object" and is not null.  Unlike goog.isObject(), does not return true
 * for functions.
 *
 * @param obj {*} A potential object.
 * @returns {boolean} True if it's an object.
 */
var isNonNullObject = function (obj) {
    return typeof obj === 'object' && obj !== null;
};
var isEmpty = function (obj) {
    for (var key in obj) {
        return false;
    }
    return true;
};
var getCount = function (obj) {
    var rv = 0;
    for (var key in obj) {
        rv++;
    }
    return rv;
};
var map = function (obj, f, opt_obj) {
    var res = {};
    for (var key in obj) {
        res[key] = f.call(opt_obj, obj[key], key, obj);
    }
    return res;
};
var findKey = function (obj, fn, opt_this) {
    for (var key in obj) {
        if (fn.call(opt_this, obj[key], key, obj)) {
            return key;
        }
    }
    return undefined;
};
var findValue = function (obj, fn, opt_this) {
    var key = findKey(obj, fn, opt_this);
    return key && obj[key];
};
var getAnyKey = function (obj) {
    for (var key in obj) {
        return key;
    }
};
var getValues = function (obj) {
    var res = [];
    var i = 0;
    for (var key in obj) {
        res[i++] = obj[key];
    }
    return res;
};
/**
 * Tests whether every key/value pair in an object pass the test implemented
 * by the provided function
 *
 * @param {?Object.<K,V>} obj Object to test.
 * @param {!function(K, V)} fn Function to call for each key and value.
 * @template K,V
 */
var every = function (obj, fn) {
    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            if (!fn(key, obj[key])) {
                return false;
            }
        }
    }
    return true;
};

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns a querystring-formatted string (e.g. &arg=val&arg2=val2) from a params
 * object (e.g. {arg: 'val', arg2: 'val2'})
 * Note: You must prepend it with ? when adding it to a URL.
 *
 * @param {!Object} querystringParams
 * @return {string}
 */
var querystring = function (querystringParams) {
    var params = [];
    forEach(querystringParams, function (key, value) {
        if (Array.isArray(value)) {
            value.forEach(function (arrayVal) {
                params.push(encodeURIComponent(key) + '=' + encodeURIComponent(arrayVal));
            });
        }
        else {
            params.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
        }
    });
    return params.length ? '&' + params.join('&') : '';
};
/**
 * Decodes a querystring (e.g. ?arg=val&arg2=val2) into a params object (e.g. {arg: 'val', arg2: 'val2'})
 *
 * @param {string} querystring
 * @return {!Object}
 */
var querystringDecode = function (querystring) {
    var obj = {};
    var tokens = querystring.replace(/^\?/, '').split('&');
    tokens.forEach(function (token) {
        if (token) {
            var key = token.split('=');
            obj[key[0]] = key[1];
        }
    });
    return obj;
};

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Copyright 2011 The Closure Library Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
/**
 * @fileoverview Abstract cryptographic hash interface.
 *
 * See Sha1 and Md5 for sample implementations.
 *
 */
/**
 * Create a cryptographic hash instance.
 *
 * @constructor
 * @struct
 */
var Hash = /** @class */ (function () {
    function Hash() {
        /**
         * The block size for the hasher.
         * @type {number}
         */
        this.blockSize = -1;
    }
    return Hash;
}());

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview SHA-1 cryptographic hash.
 * Variable names follow the notation in FIPS PUB 180-3:
 * http://csrc.nist.gov/publications/fips/fips180-3/fips180-3_final.pdf.
 *
 * Usage:
 *   var sha1 = new sha1();
 *   sha1.update(bytes);
 *   var hash = sha1.digest();
 *
 * Performance:
 *   Chrome 23:   ~400 Mbit/s
 *   Firefox 16:  ~250 Mbit/s
 *
 */
/**
 * SHA-1 cryptographic hash constructor.
 *
 * The properties declared here are discussed in the above algorithm document.
 * @constructor
 * @extends {Hash}
 * @final
 * @struct
 */
var Sha1 = /** @class */ (function (_super) {
    tslib_1.__extends(Sha1, _super);
    function Sha1() {
        var _this = _super.call(this) || this;
        /**
         * Holds the previous values of accumulated variables a-e in the compress_
         * function.
         * @type {!Array<number>}
         * @private
         */
        _this.chain_ = [];
        /**
         * A buffer holding the partially computed hash result.
         * @type {!Array<number>}
         * @private
         */
        _this.buf_ = [];
        /**
         * An array of 80 bytes, each a part of the message to be hashed.  Referred to
         * as the message schedule in the docs.
         * @type {!Array<number>}
         * @private
         */
        _this.W_ = [];
        /**
         * Contains data needed to pad messages less than 64 bytes.
         * @type {!Array<number>}
         * @private
         */
        _this.pad_ = [];
        /**
         * @private {number}
         */
        _this.inbuf_ = 0;
        /**
         * @private {number}
         */
        _this.total_ = 0;
        _this.blockSize = 512 / 8;
        _this.pad_[0] = 128;
        for (var i = 1; i < _this.blockSize; ++i) {
            _this.pad_[i] = 0;
        }
        _this.reset();
        return _this;
    }
    Sha1.prototype.reset = function () {
        this.chain_[0] = 0x67452301;
        this.chain_[1] = 0xefcdab89;
        this.chain_[2] = 0x98badcfe;
        this.chain_[3] = 0x10325476;
        this.chain_[4] = 0xc3d2e1f0;
        this.inbuf_ = 0;
        this.total_ = 0;
    };
    /**
     * Internal compress helper function.
     * @param {!Array<number>|!Uint8Array|string} buf Block to compress.
     * @param {number=} opt_offset Offset of the block in the buffer.
     * @private
     */
    Sha1.prototype.compress_ = function (buf, opt_offset) {
        if (!opt_offset) {
            opt_offset = 0;
        }
        var W = this.W_;
        // get 16 big endian words
        if (typeof buf === 'string') {
            for (var i = 0; i < 16; i++) {
                // TODO(user): [bug 8140122] Recent versions of Safari for Mac OS and iOS
                // have a bug that turns the post-increment ++ operator into pre-increment
                // during JIT compilation.  We have code that depends heavily on SHA-1 for
                // correctness and which is affected by this bug, so I've removed all uses
                // of post-increment ++ in which the result value is used.  We can revert
                // this change once the Safari bug
                // (https://bugs.webkit.org/show_bug.cgi?id=109036) has been fixed and
                // most clients have been updated.
                W[i] =
                    (buf.charCodeAt(opt_offset) << 24) |
                        (buf.charCodeAt(opt_offset + 1) << 16) |
                        (buf.charCodeAt(opt_offset + 2) << 8) |
                        buf.charCodeAt(opt_offset + 3);
                opt_offset += 4;
            }
        }
        else {
            for (var i = 0; i < 16; i++) {
                W[i] =
                    (buf[opt_offset] << 24) |
                        (buf[opt_offset + 1] << 16) |
                        (buf[opt_offset + 2] << 8) |
                        buf[opt_offset + 3];
                opt_offset += 4;
            }
        }
        // expand to 80 words
        for (var i = 16; i < 80; i++) {
            var t = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
            W[i] = ((t << 1) | (t >>> 31)) & 0xffffffff;
        }
        var a = this.chain_[0];
        var b = this.chain_[1];
        var c = this.chain_[2];
        var d = this.chain_[3];
        var e = this.chain_[4];
        var f, k;
        // TODO(user): Try to unroll this loop to speed up the computation.
        for (var i = 0; i < 80; i++) {
            if (i < 40) {
                if (i < 20) {
                    f = d ^ (b & (c ^ d));
                    k = 0x5a827999;
                }
                else {
                    f = b ^ c ^ d;
                    k = 0x6ed9eba1;
                }
            }
            else {
                if (i < 60) {
                    f = (b & c) | (d & (b | c));
                    k = 0x8f1bbcdc;
                }
                else {
                    f = b ^ c ^ d;
                    k = 0xca62c1d6;
                }
            }
            var t = (((a << 5) | (a >>> 27)) + f + e + k + W[i]) & 0xffffffff;
            e = d;
            d = c;
            c = ((b << 30) | (b >>> 2)) & 0xffffffff;
            b = a;
            a = t;
        }
        this.chain_[0] = (this.chain_[0] + a) & 0xffffffff;
        this.chain_[1] = (this.chain_[1] + b) & 0xffffffff;
        this.chain_[2] = (this.chain_[2] + c) & 0xffffffff;
        this.chain_[3] = (this.chain_[3] + d) & 0xffffffff;
        this.chain_[4] = (this.chain_[4] + e) & 0xffffffff;
    };
    Sha1.prototype.update = function (bytes, opt_length) {
        // TODO(johnlenz): tighten the function signature and remove this check
        if (bytes == null) {
            return;
        }
        if (opt_length === undefined) {
            opt_length = bytes.length;
        }
        var lengthMinusBlock = opt_length - this.blockSize;
        var n = 0;
        // Using local instead of member variables gives ~5% speedup on Firefox 16.
        var buf = this.buf_;
        var inbuf = this.inbuf_;
        // The outer while loop should execute at most twice.
        while (n < opt_length) {
            // When we have no data in the block to top up, we can directly process the
            // input buffer (assuming it contains sufficient data). This gives ~25%
            // speedup on Chrome 23 and ~15% speedup on Firefox 16, but requires that
            // the data is provided in large chunks (or in multiples of 64 bytes).
            if (inbuf == 0) {
                while (n <= lengthMinusBlock) {
                    this.compress_(bytes, n);
                    n += this.blockSize;
                }
            }
            if (typeof bytes === 'string') {
                while (n < opt_length) {
                    buf[inbuf] = bytes.charCodeAt(n);
                    ++inbuf;
                    ++n;
                    if (inbuf == this.blockSize) {
                        this.compress_(buf);
                        inbuf = 0;
                        // Jump to the outer loop so we use the full-block optimization.
                        break;
                    }
                }
            }
            else {
                while (n < opt_length) {
                    buf[inbuf] = bytes[n];
                    ++inbuf;
                    ++n;
                    if (inbuf == this.blockSize) {
                        this.compress_(buf);
                        inbuf = 0;
                        // Jump to the outer loop so we use the full-block optimization.
                        break;
                    }
                }
            }
        }
        this.inbuf_ = inbuf;
        this.total_ += opt_length;
    };
    /** @override */
    Sha1.prototype.digest = function () {
        var digest = [];
        var totalBits = this.total_ * 8;
        // Add pad 0x80 0x00*.
        if (this.inbuf_ < 56) {
            this.update(this.pad_, 56 - this.inbuf_);
        }
        else {
            this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));
        }
        // Add # bits.
        for (var i = this.blockSize - 1; i >= 56; i--) {
            this.buf_[i] = totalBits & 255;
            totalBits /= 256; // Don't use bit-shifting here!
        }
        this.compress_(this.buf_);
        var n = 0;
        for (var i = 0; i < 5; i++) {
            for (var j = 24; j >= 0; j -= 8) {
                digest[n] = (this.chain_[i] >> j) & 255;
                ++n;
            }
        }
        return digest;
    };
    return Sha1;
}(Hash));

/**
 * Helper to make a Subscribe function (just like Promise helps make a
 * Thenable).
 *
 * @param executor Function which can make calls to a single Observer
 *     as a proxy.
 * @param onNoObservers Callback when count of Observers goes to zero.
 */
function createSubscribe(executor, onNoObservers) {
    var proxy = new ObserverProxy(executor, onNoObservers);
    return proxy.subscribe.bind(proxy);
}
/**
 * Implement fan-out for any number of Observers attached via a subscribe
 * function.
 */
var ObserverProxy = /** @class */ (function () {
    /**
     * @param executor Function which can make calls to a single Observer
     *     as a proxy.
     * @param onNoObservers Callback when count of Observers goes to zero.
     */
    function ObserverProxy(executor, onNoObservers) {
        var _this = this;
        this.observers = [];
        this.unsubscribes = [];
        this.observerCount = 0;
        // Micro-task scheduling by calling task.then().
        this.task = Promise.resolve();
        this.finalized = false;
        this.onNoObservers = onNoObservers;
        // Call the executor asynchronously so subscribers that are called
        // synchronously after the creation of the subscribe function
        // can still receive the very first value generated in the executor.
        this.task
            .then(function () {
            executor(_this);
        })
            .catch(function (e) {
            _this.error(e);
        });
    }
    ObserverProxy.prototype.next = function (value) {
        this.forEachObserver(function (observer) {
            observer.next(value);
        });
    };
    ObserverProxy.prototype.error = function (error) {
        this.forEachObserver(function (observer) {
            observer.error(error);
        });
        this.close(error);
    };
    ObserverProxy.prototype.complete = function () {
        this.forEachObserver(function (observer) {
            observer.complete();
        });
        this.close();
    };
    /**
     * Subscribe function that can be used to add an Observer to the fan-out list.
     *
     * - We require that no event is sent to a subscriber sychronously to their
     *   call to subscribe().
     */
    ObserverProxy.prototype.subscribe = function (nextOrObserver, error, complete) {
        var _this = this;
        var observer;
        if (nextOrObserver === undefined &&
            error === undefined &&
            complete === undefined) {
            throw new Error('Missing Observer.');
        }
        // Assemble an Observer object when passed as callback functions.
        if (implementsAnyMethods(nextOrObserver, ['next', 'error', 'complete'])) {
            observer = nextOrObserver;
        }
        else {
            observer = {
                next: nextOrObserver,
                error: error,
                complete: complete
            };
        }
        if (observer.next === undefined) {
            observer.next = noop;
        }
        if (observer.error === undefined) {
            observer.error = noop;
        }
        if (observer.complete === undefined) {
            observer.complete = noop;
        }
        var unsub = this.unsubscribeOne.bind(this, this.observers.length);
        // Attempt to subscribe to a terminated Observable - we
        // just respond to the Observer with the final error or complete
        // event.
        if (this.finalized) {
            this.task.then(function () {
                try {
                    if (_this.finalError) {
                        observer.error(_this.finalError);
                    }
                    else {
                        observer.complete();
                    }
                }
                catch (e) {
                    // nothing
                }
                return;
            });
        }
        this.observers.push(observer);
        return unsub;
    };
    // Unsubscribe is synchronous - we guarantee that no events are sent to
    // any unsubscribed Observer.
    ObserverProxy.prototype.unsubscribeOne = function (i) {
        if (this.observers === undefined || this.observers[i] === undefined) {
            return;
        }
        delete this.observers[i];
        this.observerCount -= 1;
        if (this.observerCount === 0 && this.onNoObservers !== undefined) {
            this.onNoObservers(this);
        }
    };
    ObserverProxy.prototype.forEachObserver = function (fn) {
        if (this.finalized) {
            // Already closed by previous event....just eat the additional values.
            return;
        }
        // Since sendOne calls asynchronously - there is no chance that
        // this.observers will become undefined.
        for (var i = 0; i < this.observers.length; i++) {
            this.sendOne(i, fn);
        }
    };
    // Call the Observer via one of it's callback function. We are careful to
    // confirm that the observe has not been unsubscribed since this asynchronous
    // function had been queued.
    ObserverProxy.prototype.sendOne = function (i, fn) {
        var _this = this;
        // Execute the callback asynchronously
        this.task.then(function () {
            if (_this.observers !== undefined && _this.observers[i] !== undefined) {
                try {
                    fn(_this.observers[i]);
                }
                catch (e) {
                    // Ignore exceptions raised in Observers or missing methods of an
                    // Observer.
                    // Log error to console. b/31404806
                    if (typeof console !== 'undefined' && console.error) {
                        console.error(e);
                    }
                }
            }
        });
    };
    ObserverProxy.prototype.close = function (err) {
        var _this = this;
        if (this.finalized) {
            return;
        }
        this.finalized = true;
        if (err !== undefined) {
            this.finalError = err;
        }
        // Proxy is no longer needed - garbage collect references
        this.task.then(function () {
            _this.observers = undefined;
            _this.onNoObservers = undefined;
        });
    };
    return ObserverProxy;
}());
/** Turn synchronous function into one called asynchronously. */
function async(fn, onError) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        Promise.resolve(true)
            .then(function () {
            fn.apply(void 0, args);
        })
            .catch(function (error) {
            if (onError) {
                onError(error);
            }
        });
    };
}
/**
 * Return true if the object passed in implements any of the named methods.
 */
function implementsAnyMethods(obj, methods) {
    if (typeof obj !== 'object' || obj === null) {
        return false;
    }
    for (var _i = 0, methods_1 = methods; _i < methods_1.length; _i++) {
        var method = methods_1[_i];
        if (method in obj && typeof obj[method] === 'function') {
            return true;
        }
    }
    return false;
}
function noop() {
    // do nothing
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Check to make sure the appropriate number of arguments are provided for a public function.
 * Throws an error if it fails.
 *
 * @param {!string} fnName The function name
 * @param {!number} minCount The minimum number of arguments to allow for the function call
 * @param {!number} maxCount The maximum number of argument to allow for the function call
 * @param {!number} argCount The actual number of arguments provided.
 */
var validateArgCount = function (fnName, minCount, maxCount, argCount) {
    var argError;
    if (argCount < minCount) {
        argError = 'at least ' + minCount;
    }
    else if (argCount > maxCount) {
        argError = maxCount === 0 ? 'none' : 'no more than ' + maxCount;
    }
    if (argError) {
        var error = fnName +
            ' failed: Was called with ' +
            argCount +
            (argCount === 1 ? ' argument.' : ' arguments.') +
            ' Expects ' +
            argError +
            '.';
        throw new Error(error);
    }
};
/**
 * Generates a string to prefix an error message about failed argument validation
 *
 * @param {!string} fnName The function name
 * @param {!number} argumentNumber The index of the argument
 * @param {boolean} optional Whether or not the argument is optional
 * @return {!string} The prefix to add to the error thrown for validation.
 */
function errorPrefix(fnName, argumentNumber, optional) {
    var argName = '';
    switch (argumentNumber) {
        case 1:
            argName = optional ? 'first' : 'First';
            break;
        case 2:
            argName = optional ? 'second' : 'Second';
            break;
        case 3:
            argName = optional ? 'third' : 'Third';
            break;
        case 4:
            argName = optional ? 'fourth' : 'Fourth';
            break;
        default:
            throw new Error('errorPrefix called with argumentNumber > 4.  Need to update it?');
    }
    var error = fnName + ' failed: ';
    error += argName + ' argument ';
    return error;
}
/**
 * @param {!string} fnName
 * @param {!number} argumentNumber
 * @param {!string} namespace
 * @param {boolean} optional
 */
function validateNamespace(fnName, argumentNumber, namespace, optional) {
    if (optional && !namespace)
        return;
    if (typeof namespace !== 'string') {
        //TODO: I should do more validation here. We only allow certain chars in namespaces.
        throw new Error(errorPrefix(fnName, argumentNumber, optional) +
            'must be a valid firebase namespace.');
    }
}
function validateCallback(fnName, argumentNumber, callback, optional) {
    if (optional && !callback)
        return;
    if (typeof callback !== 'function')
        throw new Error(errorPrefix(fnName, argumentNumber, optional) +
            'must be a valid function.');
}
function validateContextObject(fnName, argumentNumber, context, optional) {
    if (optional && !context)
        return;
    if (typeof context !== 'object' || context === null)
        throw new Error(errorPrefix(fnName, argumentNumber, optional) +
            'must be a valid context object.');
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Code originally came from goog.crypt.stringToUtf8ByteArray, but for some reason they
// automatically replaced '\r\n' with '\n', and they didn't handle surrogate pairs,
// so it's been modified.
// Note that not all Unicode characters appear as single characters in JavaScript strings.
// fromCharCode returns the UTF-16 encoding of a character - so some Unicode characters
// use 2 characters in Javascript.  All 4-byte UTF-8 characters begin with a first
// character in the range 0xD800 - 0xDBFF (the first character of a so-called surrogate
// pair).
// See http://www.ecma-international.org/ecma-262/5.1/#sec-15.1.3
/**
 * @param {string} str
 * @return {Array}
 */
var stringToByteArray$1 = function (str) {
    var out = [], p = 0;
    for (var i = 0; i < str.length; i++) {
        var c = str.charCodeAt(i);
        // Is this the lead surrogate in a surrogate pair?
        if (c >= 0xd800 && c <= 0xdbff) {
            var high = c - 0xd800; // the high 10 bits.
            i++;
            assert(i < str.length, 'Surrogate pair missing trail surrogate.');
            var low = str.charCodeAt(i) - 0xdc00; // the low 10 bits.
            c = 0x10000 + (high << 10) + low;
        }
        if (c < 128) {
            out[p++] = c;
        }
        else if (c < 2048) {
            out[p++] = (c >> 6) | 192;
            out[p++] = (c & 63) | 128;
        }
        else if (c < 65536) {
            out[p++] = (c >> 12) | 224;
            out[p++] = ((c >> 6) & 63) | 128;
            out[p++] = (c & 63) | 128;
        }
        else {
            out[p++] = (c >> 18) | 240;
            out[p++] = ((c >> 12) & 63) | 128;
            out[p++] = ((c >> 6) & 63) | 128;
            out[p++] = (c & 63) | 128;
        }
    }
    return out;
};
/**
 * Calculate length without actually converting; useful for doing cheaper validation.
 * @param {string} str
 * @return {number}
 */
var stringLength = function (str) {
    var p = 0;
    for (var i = 0; i < str.length; i++) {
        var c = str.charCodeAt(i);
        if (c < 128) {
            p++;
        }
        else if (c < 2048) {
            p += 2;
        }
        else if (c >= 0xd800 && c <= 0xdbff) {
            // Lead surrogate of a surrogate pair.  The pair together will take 4 bytes to represent.
            p += 4;
            i++; // skip trail surrogate.
        }
        else {
            p += 3;
        }
    }
    return p;
};

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

exports.assert = assert;
exports.assertionError = assertionError;
exports.base64 = base64;
exports.base64Decode = base64Decode;
exports.base64Encode = base64Encode;
exports.CONSTANTS = CONSTANTS;
exports.deepCopy = deepCopy;
exports.deepExtend = deepExtend;
exports.patchProperty = patchProperty;
exports.Deferred = Deferred;
exports.getUA = getUA;
exports.isMobileCordova = isMobileCordova;
exports.isNodeSdk = isNodeSdk;
exports.isReactNative = isReactNative;
exports.ErrorFactory = ErrorFactory;
exports.FirebaseError = FirebaseError;
exports.patchCapture = patchCapture;
exports.jsonEval = jsonEval;
exports.stringify = stringify;
exports.decode = decode;
exports.isAdmin = isAdmin;
exports.issuedAtTime = issuedAtTime;
exports.isValidFormat = isValidFormat;
exports.isValidTimestamp = isValidTimestamp;
exports.clone = clone;
exports.contains = contains;
exports.every = every;
exports.extend = extend;
exports.findKey = findKey;
exports.findValue = findValue;
exports.forEach = forEach;
exports.getAnyKey = getAnyKey;
exports.getCount = getCount;
exports.getValues = getValues;
exports.isEmpty = isEmpty;
exports.isNonNullObject = isNonNullObject;
exports.map = map;
exports.safeGet = safeGet;
exports.querystring = querystring;
exports.querystringDecode = querystringDecode;
exports.Sha1 = Sha1;
exports.async = async;
exports.createSubscribe = createSubscribe;
exports.errorPrefix = errorPrefix;
exports.validateArgCount = validateArgCount;
exports.validateCallback = validateCallback;
exports.validateContextObject = validateContextObject;
exports.validateNamespace = validateNamespace;
exports.stringLength = stringLength;
exports.stringToByteArray = stringToByteArray$1;
//# sourceMappingURL=index.cjs.js.map


/***/ }),

/***/ "../../node_modules/firebase/app/dist/index.cjs.js":
/*!******************************************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/firebase/app/dist/index.cjs.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

__webpack_require__(/*! @firebase/polyfill */ "../../node_modules/@firebase/polyfill/dist/index.esm.js");
var firebase = _interopDefault(__webpack_require__(/*! @firebase/app */ "../../node_modules/@firebase/app/dist/index.cjs.js"));

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

module.exports = firebase;
//# sourceMappingURL=index.cjs.js.map


/***/ }),

/***/ "../../node_modules/firebase/auth/dist/index.esm.js":
/*!*******************************************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/firebase/auth/dist/index.esm.js ***!
  \*******************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _firebase_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/auth */ "../../node_modules/@firebase/auth/dist/auth.esm.js");


/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "../../node_modules/isomorphic-fetch/fetch-npm-browserify.js":
/*!****************************************************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/isomorphic-fetch/fetch-npm-browserify.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// the whatwg-fetch polyfill installs the fetch() function
// on the global object (window or self)
//
// Return that as the export for use in Webpack, Browserify etc.
__webpack_require__(/*! whatwg-fetch */ "../../node_modules/whatwg-fetch/fetch.js");
module.exports = self.fetch.bind(self);


/***/ }),

/***/ "../../node_modules/next/node_modules/@babel/runtime/regenerator/index.js":
/*!*****************************************************************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/next/node_modules/@babel/runtime/regenerator/index.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "../../node_modules/next/node_modules/regenerator-runtime/runtime-module.js");


/***/ }),

/***/ "../../node_modules/next/node_modules/regenerator-runtime/runtime-module.js":
/*!*******************************************************************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/next/node_modules/regenerator-runtime/runtime-module.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ "../../node_modules/next/node_modules/regenerator-runtime/runtime.js");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),

/***/ "../../node_modules/next/node_modules/regenerator-runtime/runtime.js":
/*!************************************************************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/next/node_modules/regenerator-runtime/runtime.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),

/***/ "../../node_modules/process/browser.js":
/*!******************************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/process/browser.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "../../node_modules/promise-polyfill/lib/polyfill.js":
/*!********************************************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/promise-polyfill/lib/polyfill.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(setImmediate, global) {

/**
 * @this {Promise}
 */
function finallyConstructor(callback) {
  var constructor = this.constructor;
  return this.then(
    function(value) {
      return constructor.resolve(callback()).then(function() {
        return value;
      });
    },
    function(reason) {
      return constructor.resolve(callback()).then(function() {
        return constructor.reject(reason);
      });
    }
  );
}

// Store setTimeout reference so promise-polyfill will be unaffected by
// other code modifying setTimeout (like sinon.useFakeTimers())
var setTimeoutFunc = setTimeout;

function noop() {}

// Polyfill for Function.prototype.bind
function bind(fn, thisArg) {
  return function() {
    fn.apply(thisArg, arguments);
  };
}

/**
 * @constructor
 * @param {Function} fn
 */
function Promise(fn) {
  if (!(this instanceof Promise))
    throw new TypeError('Promises must be constructed via new');
  if (typeof fn !== 'function') throw new TypeError('not a function');
  /** @type {!number} */
  this._state = 0;
  /** @type {!boolean} */
  this._handled = false;
  /** @type {Promise|undefined} */
  this._value = undefined;
  /** @type {!Array<!Function>} */
  this._deferreds = [];

  doResolve(fn, this);
}

function handle(self, deferred) {
  while (self._state === 3) {
    self = self._value;
  }
  if (self._state === 0) {
    self._deferreds.push(deferred);
    return;
  }
  self._handled = true;
  Promise._immediateFn(function() {
    var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
    if (cb === null) {
      (self._state === 1 ? resolve : reject)(deferred.promise, self._value);
      return;
    }
    var ret;
    try {
      ret = cb(self._value);
    } catch (e) {
      reject(deferred.promise, e);
      return;
    }
    resolve(deferred.promise, ret);
  });
}

function resolve(self, newValue) {
  try {
    // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
    if (newValue === self)
      throw new TypeError('A promise cannot be resolved with itself.');
    if (
      newValue &&
      (typeof newValue === 'object' || typeof newValue === 'function')
    ) {
      var then = newValue.then;
      if (newValue instanceof Promise) {
        self._state = 3;
        self._value = newValue;
        finale(self);
        return;
      } else if (typeof then === 'function') {
        doResolve(bind(then, newValue), self);
        return;
      }
    }
    self._state = 1;
    self._value = newValue;
    finale(self);
  } catch (e) {
    reject(self, e);
  }
}

function reject(self, newValue) {
  self._state = 2;
  self._value = newValue;
  finale(self);
}

function finale(self) {
  if (self._state === 2 && self._deferreds.length === 0) {
    Promise._immediateFn(function() {
      if (!self._handled) {
        Promise._unhandledRejectionFn(self._value);
      }
    });
  }

  for (var i = 0, len = self._deferreds.length; i < len; i++) {
    handle(self, self._deferreds[i]);
  }
  self._deferreds = null;
}

/**
 * @constructor
 */
function Handler(onFulfilled, onRejected, promise) {
  this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
  this.onRejected = typeof onRejected === 'function' ? onRejected : null;
  this.promise = promise;
}

/**
 * Take a potentially misbehaving resolver function and make sure
 * onFulfilled and onRejected are only called once.
 *
 * Makes no guarantees about asynchrony.
 */
function doResolve(fn, self) {
  var done = false;
  try {
    fn(
      function(value) {
        if (done) return;
        done = true;
        resolve(self, value);
      },
      function(reason) {
        if (done) return;
        done = true;
        reject(self, reason);
      }
    );
  } catch (ex) {
    if (done) return;
    done = true;
    reject(self, ex);
  }
}

Promise.prototype['catch'] = function(onRejected) {
  return this.then(null, onRejected);
};

Promise.prototype.then = function(onFulfilled, onRejected) {
  // @ts-ignore
  var prom = new this.constructor(noop);

  handle(this, new Handler(onFulfilled, onRejected, prom));
  return prom;
};

Promise.prototype['finally'] = finallyConstructor;

Promise.all = function(arr) {
  return new Promise(function(resolve, reject) {
    if (!arr || typeof arr.length === 'undefined')
      throw new TypeError('Promise.all accepts an array');
    var args = Array.prototype.slice.call(arr);
    if (args.length === 0) return resolve([]);
    var remaining = args.length;

    function res(i, val) {
      try {
        if (val && (typeof val === 'object' || typeof val === 'function')) {
          var then = val.then;
          if (typeof then === 'function') {
            then.call(
              val,
              function(val) {
                res(i, val);
              },
              reject
            );
            return;
          }
        }
        args[i] = val;
        if (--remaining === 0) {
          resolve(args);
        }
      } catch (ex) {
        reject(ex);
      }
    }

    for (var i = 0; i < args.length; i++) {
      res(i, args[i]);
    }
  });
};

Promise.resolve = function(value) {
  if (value && typeof value === 'object' && value.constructor === Promise) {
    return value;
  }

  return new Promise(function(resolve) {
    resolve(value);
  });
};

Promise.reject = function(value) {
  return new Promise(function(resolve, reject) {
    reject(value);
  });
};

Promise.race = function(values) {
  return new Promise(function(resolve, reject) {
    for (var i = 0, len = values.length; i < len; i++) {
      values[i].then(resolve, reject);
    }
  });
};

// Use polyfill for setImmediate for performance gains
Promise._immediateFn =
  (typeof setImmediate === 'function' &&
    function(fn) {
      setImmediate(fn);
    }) ||
  function(fn) {
    setTimeoutFunc(fn, 0);
  };

Promise._unhandledRejectionFn = function _unhandledRejectionFn(err) {
  if (typeof console !== 'undefined' && console) {
    console.warn('Possible Unhandled Promise Rejection:', err); // eslint-disable-line no-console
  }
};

/** @suppress {undefinedVars} */
var globalNS = (function() {
  // the only reliable means to get the global object is
  // `Function('return this')()`
  // However, this causes CSP violations in Chrome apps.
  if (typeof self !== 'undefined') {
    return self;
  }
  if (typeof window !== 'undefined') {
    return window;
  }
  if (typeof global !== 'undefined') {
    return global;
  }
  throw new Error('unable to locate global object');
})();

if (!('Promise' in globalNS)) {
  globalNS['Promise'] = Promise;
} else if (!globalNS.Promise.prototype['finally']) {
  globalNS.Promise.prototype['finally'] = finallyConstructor;
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../timers-browserify/main.js */ "../../node_modules/timers-browserify/main.js").setImmediate, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../node_modules/react/index.js":
/*!***********************************************************************************************!*\
  !*** delegated ../../node_modules/react/index.js from dll-reference dll_5f8aad59119281538d0e ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_5f8aad59119281538d0e */ "dll-reference dll_5f8aad59119281538d0e"))("../../node_modules/react/index.js");

/***/ }),

/***/ "../../node_modules/setimmediate/setImmediate.js":
/*!****************************************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/setimmediate/setImmediate.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "../../node_modules/process/browser.js")))

/***/ }),

/***/ "../../node_modules/timers-browserify/main.js":
/*!*************************************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/timers-browserify/main.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "../../node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../node_modules/tslib/tslib.es6.js":
/*!******************************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/tslib/tslib.es6.js ***!
  \******************************************************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "../../node_modules/uuid/index.js":
/*!*************************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/uuid/index.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var v1 = __webpack_require__(/*! ./v1 */ "../../node_modules/uuid/v1.js");
var v4 = __webpack_require__(/*! ./v4 */ "../../node_modules/uuid/v4.js");

var uuid = v4;
uuid.v1 = v1;
uuid.v4 = v4;

module.exports = uuid;


/***/ }),

/***/ "../../node_modules/uuid/lib/bytesToUuid.js":
/*!***********************************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/uuid/lib/bytesToUuid.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([bth[buf[i++]], bth[buf[i++]], 
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]]]).join('');
}

module.exports = bytesToUuid;


/***/ }),

/***/ "../../node_modules/uuid/lib/rng-browser.js":
/*!***********************************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/uuid/lib/rng-browser.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));

if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}


/***/ }),

/***/ "../../node_modules/uuid/v1.js":
/*!**********************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/uuid/v1.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(/*! ./lib/rng */ "../../node_modules/uuid/lib/rng-browser.js");
var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ "../../node_modules/uuid/lib/bytesToUuid.js");

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;
var _clockseq;

// Previous uuid creation time
var _lastMSecs = 0;
var _lastNSecs = 0;

// See https://github.com/broofa/node-uuid for API details
function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];

  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

  // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189
  if (node == null || clockseq == null) {
    var seedBytes = rng();
    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [
        seedBytes[0] | 0x01,
        seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]
      ];
    }
    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  }

  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

  // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock
  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

  // Time since last uuid creation (in msecs)
  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

  // Per 4.2.1.2, Bump clockseq on clock regression
  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  }

  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  }

  // Per 4.2.1.2 Throw error if too many uuids are requested
  if (nsecs >= 10000) {
    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;

  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
  msecs += 12219292800000;

  // `time_low`
  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff;

  // `time_mid`
  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff;

  // `time_high_and_version`
  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
  b[i++] = tmh >>> 16 & 0xff;

  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
  b[i++] = clockseq >>> 8 | 0x80;

  // `clock_seq_low`
  b[i++] = clockseq & 0xff;

  // `node`
  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf ? buf : bytesToUuid(b);
}

module.exports = v1;


/***/ }),

/***/ "../../node_modules/uuid/v4.js":
/*!**********************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/uuid/v4.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(/*! ./lib/rng */ "../../node_modules/uuid/lib/rng-browser.js");
var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ "../../node_modules/uuid/lib/bytesToUuid.js");

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


/***/ }),

/***/ "../../node_modules/webpack/buildin/global.js":
/*!**********************************************************************************************************!*\
  !*** delegated ../../node_modules/webpack/buildin/global.js from dll-reference dll_5f8aad59119281538d0e ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_5f8aad59119281538d0e */ "dll-reference dll_5f8aad59119281538d0e"))("../../node_modules/webpack/buildin/global.js");

/***/ }),

/***/ "../../node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "../../node_modules/whatwg-fetch/fetch.js":
/*!*********************************************************************************!*\
  !*** /Volumes/Data/Techkids Software/excado/node_modules/whatwg-fetch/fetch.js ***!
  \*********************************************************************************/
/*! exports provided: Headers, Request, Response, DOMException, fetch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Headers", function() { return Headers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Request", function() { return Request; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Response", function() { return Response; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMException", function() { return DOMException; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetch", function() { return fetch; });
var support = {
  searchParams: 'URLSearchParams' in self,
  iterable: 'Symbol' in self && 'iterator' in Symbol,
  blob:
    'FileReader' in self &&
    'Blob' in self &&
    (function() {
      try {
        new Blob()
        return true
      } catch (e) {
        return false
      }
    })(),
  formData: 'FormData' in self,
  arrayBuffer: 'ArrayBuffer' in self
}

function isDataView(obj) {
  return obj && DataView.prototype.isPrototypeOf(obj)
}

if (support.arrayBuffer) {
  var viewClasses = [
    '[object Int8Array]',
    '[object Uint8Array]',
    '[object Uint8ClampedArray]',
    '[object Int16Array]',
    '[object Uint16Array]',
    '[object Int32Array]',
    '[object Uint32Array]',
    '[object Float32Array]',
    '[object Float64Array]'
  ]

  var isArrayBufferView =
    ArrayBuffer.isView ||
    function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
}

function normalizeName(name) {
  if (typeof name !== 'string') {
    name = String(name)
  }
  if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) {
    throw new TypeError('Invalid character in header field name')
  }
  return name.toLowerCase()
}

function normalizeValue(value) {
  if (typeof value !== 'string') {
    value = String(value)
  }
  return value
}

// Build a destructive iterator for the value list
function iteratorFor(items) {
  var iterator = {
    next: function() {
      var value = items.shift()
      return {done: value === undefined, value: value}
    }
  }

  if (support.iterable) {
    iterator[Symbol.iterator] = function() {
      return iterator
    }
  }

  return iterator
}

function Headers(headers) {
  this.map = {}

  if (headers instanceof Headers) {
    headers.forEach(function(value, name) {
      this.append(name, value)
    }, this)
  } else if (Array.isArray(headers)) {
    headers.forEach(function(header) {
      this.append(header[0], header[1])
    }, this)
  } else if (headers) {
    Object.getOwnPropertyNames(headers).forEach(function(name) {
      this.append(name, headers[name])
    }, this)
  }
}

Headers.prototype.append = function(name, value) {
  name = normalizeName(name)
  value = normalizeValue(value)
  var oldValue = this.map[name]
  this.map[name] = oldValue ? oldValue + ', ' + value : value
}

Headers.prototype['delete'] = function(name) {
  delete this.map[normalizeName(name)]
}

Headers.prototype.get = function(name) {
  name = normalizeName(name)
  return this.has(name) ? this.map[name] : null
}

Headers.prototype.has = function(name) {
  return this.map.hasOwnProperty(normalizeName(name))
}

Headers.prototype.set = function(name, value) {
  this.map[normalizeName(name)] = normalizeValue(value)
}

Headers.prototype.forEach = function(callback, thisArg) {
  for (var name in this.map) {
    if (this.map.hasOwnProperty(name)) {
      callback.call(thisArg, this.map[name], name, this)
    }
  }
}

Headers.prototype.keys = function() {
  var items = []
  this.forEach(function(value, name) {
    items.push(name)
  })
  return iteratorFor(items)
}

Headers.prototype.values = function() {
  var items = []
  this.forEach(function(value) {
    items.push(value)
  })
  return iteratorFor(items)
}

Headers.prototype.entries = function() {
  var items = []
  this.forEach(function(value, name) {
    items.push([name, value])
  })
  return iteratorFor(items)
}

if (support.iterable) {
  Headers.prototype[Symbol.iterator] = Headers.prototype.entries
}

function consumed(body) {
  if (body.bodyUsed) {
    return Promise.reject(new TypeError('Already read'))
  }
  body.bodyUsed = true
}

function fileReaderReady(reader) {
  return new Promise(function(resolve, reject) {
    reader.onload = function() {
      resolve(reader.result)
    }
    reader.onerror = function() {
      reject(reader.error)
    }
  })
}

function readBlobAsArrayBuffer(blob) {
  var reader = new FileReader()
  var promise = fileReaderReady(reader)
  reader.readAsArrayBuffer(blob)
  return promise
}

function readBlobAsText(blob) {
  var reader = new FileReader()
  var promise = fileReaderReady(reader)
  reader.readAsText(blob)
  return promise
}

function readArrayBufferAsText(buf) {
  var view = new Uint8Array(buf)
  var chars = new Array(view.length)

  for (var i = 0; i < view.length; i++) {
    chars[i] = String.fromCharCode(view[i])
  }
  return chars.join('')
}

function bufferClone(buf) {
  if (buf.slice) {
    return buf.slice(0)
  } else {
    var view = new Uint8Array(buf.byteLength)
    view.set(new Uint8Array(buf))
    return view.buffer
  }
}

function Body() {
  this.bodyUsed = false

  this._initBody = function(body) {
    this._bodyInit = body
    if (!body) {
      this._bodyText = ''
    } else if (typeof body === 'string') {
      this._bodyText = body
    } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
      this._bodyBlob = body
    } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
      this._bodyFormData = body
    } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
      this._bodyText = body.toString()
    } else if (support.arrayBuffer && support.blob && isDataView(body)) {
      this._bodyArrayBuffer = bufferClone(body.buffer)
      // IE 10-11 can't handle a DataView body.
      this._bodyInit = new Blob([this._bodyArrayBuffer])
    } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
      this._bodyArrayBuffer = bufferClone(body)
    } else {
      this._bodyText = body = Object.prototype.toString.call(body)
    }

    if (!this.headers.get('content-type')) {
      if (typeof body === 'string') {
        this.headers.set('content-type', 'text/plain;charset=UTF-8')
      } else if (this._bodyBlob && this._bodyBlob.type) {
        this.headers.set('content-type', this._bodyBlob.type)
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
      }
    }
  }

  if (support.blob) {
    this.blob = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return Promise.resolve(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(new Blob([this._bodyArrayBuffer]))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as blob')
      } else {
        return Promise.resolve(new Blob([this._bodyText]))
      }
    }

    this.arrayBuffer = function() {
      if (this._bodyArrayBuffer) {
        return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
      } else {
        return this.blob().then(readBlobAsArrayBuffer)
      }
    }
  }

  this.text = function() {
    var rejected = consumed(this)
    if (rejected) {
      return rejected
    }

    if (this._bodyBlob) {
      return readBlobAsText(this._bodyBlob)
    } else if (this._bodyArrayBuffer) {
      return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
    } else if (this._bodyFormData) {
      throw new Error('could not read FormData body as text')
    } else {
      return Promise.resolve(this._bodyText)
    }
  }

  if (support.formData) {
    this.formData = function() {
      return this.text().then(decode)
    }
  }

  this.json = function() {
    return this.text().then(JSON.parse)
  }

  return this
}

// HTTP methods whose capitalization should be normalized
var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

function normalizeMethod(method) {
  var upcased = method.toUpperCase()
  return methods.indexOf(upcased) > -1 ? upcased : method
}

function Request(input, options) {
  options = options || {}
  var body = options.body

  if (input instanceof Request) {
    if (input.bodyUsed) {
      throw new TypeError('Already read')
    }
    this.url = input.url
    this.credentials = input.credentials
    if (!options.headers) {
      this.headers = new Headers(input.headers)
    }
    this.method = input.method
    this.mode = input.mode
    this.signal = input.signal
    if (!body && input._bodyInit != null) {
      body = input._bodyInit
      input.bodyUsed = true
    }
  } else {
    this.url = String(input)
  }

  this.credentials = options.credentials || this.credentials || 'same-origin'
  if (options.headers || !this.headers) {
    this.headers = new Headers(options.headers)
  }
  this.method = normalizeMethod(options.method || this.method || 'GET')
  this.mode = options.mode || this.mode || null
  this.signal = options.signal || this.signal
  this.referrer = null

  if ((this.method === 'GET' || this.method === 'HEAD') && body) {
    throw new TypeError('Body not allowed for GET or HEAD requests')
  }
  this._initBody(body)
}

Request.prototype.clone = function() {
  return new Request(this, {body: this._bodyInit})
}

function decode(body) {
  var form = new FormData()
  body
    .trim()
    .split('&')
    .forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
  return form
}

function parseHeaders(rawHeaders) {
  var headers = new Headers()
  // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
  // https://tools.ietf.org/html/rfc7230#section-3.2
  var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ')
  preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
    var parts = line.split(':')
    var key = parts.shift().trim()
    if (key) {
      var value = parts.join(':').trim()
      headers.append(key, value)
    }
  })
  return headers
}

Body.call(Request.prototype)

function Response(bodyInit, options) {
  if (!options) {
    options = {}
  }

  this.type = 'default'
  this.status = options.status === undefined ? 200 : options.status
  this.ok = this.status >= 200 && this.status < 300
  this.statusText = 'statusText' in options ? options.statusText : 'OK'
  this.headers = new Headers(options.headers)
  this.url = options.url || ''
  this._initBody(bodyInit)
}

Body.call(Response.prototype)

Response.prototype.clone = function() {
  return new Response(this._bodyInit, {
    status: this.status,
    statusText: this.statusText,
    headers: new Headers(this.headers),
    url: this.url
  })
}

Response.error = function() {
  var response = new Response(null, {status: 0, statusText: ''})
  response.type = 'error'
  return response
}

var redirectStatuses = [301, 302, 303, 307, 308]

Response.redirect = function(url, status) {
  if (redirectStatuses.indexOf(status) === -1) {
    throw new RangeError('Invalid status code')
  }

  return new Response(null, {status: status, headers: {location: url}})
}

var DOMException = self.DOMException
try {
  new DOMException()
} catch (err) {
  DOMException = function(message, name) {
    this.message = message
    this.name = name
    var error = Error(message)
    this.stack = error.stack
  }
  DOMException.prototype = Object.create(Error.prototype)
  DOMException.prototype.constructor = DOMException
}

function fetch(input, init) {
  return new Promise(function(resolve, reject) {
    var request = new Request(input, init)

    if (request.signal && request.signal.aborted) {
      return reject(new DOMException('Aborted', 'AbortError'))
    }

    var xhr = new XMLHttpRequest()

    function abortXhr() {
      xhr.abort()
    }

    xhr.onload = function() {
      var options = {
        status: xhr.status,
        statusText: xhr.statusText,
        headers: parseHeaders(xhr.getAllResponseHeaders() || '')
      }
      options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
      var body = 'response' in xhr ? xhr.response : xhr.responseText
      resolve(new Response(body, options))
    }

    xhr.onerror = function() {
      reject(new TypeError('Network request failed'))
    }

    xhr.ontimeout = function() {
      reject(new TypeError('Network request failed'))
    }

    xhr.onabort = function() {
      reject(new DOMException('Aborted', 'AbortError'))
    }

    xhr.open(request.method, request.url, true)

    if (request.credentials === 'include') {
      xhr.withCredentials = true
    } else if (request.credentials === 'omit') {
      xhr.withCredentials = false
    }

    if ('responseType' in xhr && support.blob) {
      xhr.responseType = 'blob'
    }

    request.headers.forEach(function(value, name) {
      xhr.setRequestHeader(name, value)
    })

    if (request.signal) {
      request.signal.addEventListener('abort', abortXhr)

      xhr.onreadystatechange = function() {
        // DONE (success or failure)
        if (xhr.readyState === 4) {
          request.signal.removeEventListener('abort', abortXhr)
        }
      }
    }

    xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
  })
}

fetch.polyfill = true

if (!self.fetch) {
  self.fetch = fetch
  self.Headers = Headers
  self.Request = Request
  self.Response = Response
}


/***/ }),

/***/ "./config/default.config.ts":
/*!**********************************!*\
  !*** ./config/default.config.ts ***!
  \**********************************/
/*! exports provided: config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony import */ var _override_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./override.config */ "./config/override.config.ts");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var config = _objectSpread({
  appName: '',
  firebase: {
    apiKey: '',
    authDomain: '',
    databaseURL: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: ''
  },
  url: {
    main: '',
    api: '',
    shop: ''
  },
  i18n: {
    VN: 'vn',
    EN: 'en',
    defaultLang: 'vn'
  },
  upload: {
    allowImageExt: /\.(gif|jpg|jpeg|tiff|png|JPG|PNG|JPEG|GIF|TIFF)$/,
    allowExcelExt: /\.(csv|xls|xlsm|xlsx|xml|xlsb|xlam)$/,
    shopIntroImageNumber: 10
  },
  googleMaps: {
    apiKey: 'AIzaSyBWcb9PYE2yddvlnN53fB76Y1XSfjURHFk' // 'AIzaSyCvrUsYnz-hSv0rZF3zAx7gx98uz4O-bvM',

  },
  cookies: {
    domain: '',
    maxAge: 0
  },
  regex: {
    password: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
    email: /^[a-z][a-z0-9_\.]{5,40}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/,
    phone: /^([+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*){8,}$/
  }
}, _override_config__WEBPACK_IMPORTED_MODULE_0__["overrideConfig"]);

/***/ }),

/***/ "./config/index.ts":
/*!*************************!*\
  !*** ./config/index.ts ***!
  \*************************/
/*! exports provided: config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _default_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default.config */ "./config/default.config.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "config", function() { return _default_config__WEBPACK_IMPORTED_MODULE_0__["config"]; });



/***/ }),

/***/ "./config/override.config.ts":
/*!***********************************!*\
  !*** ./config/override.config.ts ***!
  \***********************************/
/*! exports provided: overrideConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "overrideConfig", function() { return overrideConfig; });
var overrideConfig = {
  appName: 'excado-develop',
  facebookAppId: '329120894475942',
  firebase: {
    apiKey: 'AIzaSyDaNVSsb66VTC7olY2VuAiKmO-J5e_PDYM',
    authDomain: 'techkids-ac7a7.firebaseapp.com',
    databaseURL: 'https://techkids-ac7a7.firebaseio.com',
    projectId: 'techkids-ac7a7',
    storageBucket: 'techkids-ac7a7.appspot.com',
    messagingSenderId: '809846546437'
  },
  url: {
    main: 'http://timmay.local:3000',
    api: 'http://localhost:3000/api',
    shop: 'http://shopDomain.timmay.local:3000'
  },
  cookies: {
    domain: 'timmay.local',
    maxAge: 60 * 60 * 1000
  }
};

/***/ }),

/***/ "./core/checkFollowStatus.ts":
/*!***********************************!*\
  !*** ./core/checkFollowStatus.ts ***!
  \***********************************/
/*! exports provided: checkFollowStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkFollowStatus", function() { return checkFollowStatus; });
var checkFollowStatus = function checkFollowStatus(profileState, item) {
  return profileState && profileState.authUser && item && item.followBy.indexOf(profileState.authUser.id) !== -1 ? true : false;
};

/***/ }),

/***/ "./core/checkIsMobile.ts":
/*!*******************************!*\
  !*** ./core/checkIsMobile.ts ***!
  \*******************************/
/*! exports provided: isMobile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMobile", function() { return isMobile; });
var isMobile = function isMobile(req) {
  var userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
  return userAgent.match(/Android/i) || userAgent.match(/webOS/i) || userAgent.match(/iPhone/i) || userAgent.match(/iPad/i) || userAgent.match(/iPod/i) || userAgent.match(/BlackBerry/i) || userAgent.match(/Windows Phone/i) ? true : false;
};

/***/ }),

/***/ "./core/checkPermission.ts":
/*!*********************************!*\
  !*** ./core/checkPermission.ts ***!
  \*********************************/
/*! exports provided: checkPermission */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkPermission", function() { return checkPermission; });
var checkPermission = function checkPermission(authUser, requiredPermission) {
  if (!requiredPermission) {
    return true;
  }

  return requiredPermission && authUser && authUser.permissions && authUser.permissions.indexOf(requiredPermission) > -1;
};

/***/ }),

/***/ "./core/checkSubdomain.ts":
/*!********************************!*\
  !*** ./core/checkSubdomain.ts ***!
  \********************************/
/*! exports provided: checkSubdomain */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkSubdomain", function() { return checkSubdomain; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../../node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services */ "./services/index.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./config/index.ts");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var checkSubdomain =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(req, res, next) {
    var shopDomain, authUserId, serviceProxies, shopResult, allowPaths;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(req.subdomains && req.subdomains.length > 0)) {
              _context.next = 15;
              break;
            }

            shopDomain = '';

            if (_config__WEBPACK_IMPORTED_MODULE_2__["config"].url.main === "https://timmay.vn" && req.subdomains[0] !== "www") {
              shopDomain = req.subdomains[0];
            } else if (_config__WEBPACK_IMPORTED_MODULE_2__["config"].url.main === "https://test.timmay.vn" && req.subdomains[1] !== "www") {
              shopDomain = req.subdomains[1];
            } else if (_config__WEBPACK_IMPORTED_MODULE_2__["config"].url.main.indexOf("techkids.io") > -1 && req.subdomains[1] !== "www") {
              shopDomain = req.subdomains[1];
            } else if (req.subdomains[0] !== "www") {
              shopDomain = req.subdomains[0];
            }

            if (!shopDomain) {
              _context.next = 12;
              break;
            }

            authUserId = req.authUser ? req.authUser.id : '';
            serviceProxies = Object(_services__WEBPACK_IMPORTED_MODULE_1__["getServiceProxy"])();
            _context.next = 8;
            return serviceProxies.findShopByDomain(shopDomain, authUserId);

          case 8:
            shopResult = _context.sent;

            if (shopResult) {
              req.shopInfo = shopResult;
              allowPaths = ['/thong-tin-cua-hang', '/bai-dang-cua-hang'];

              if (allowPaths.indexOf(req.url) > -1 || req.url.indexOf('/bai-dang-cua-hang') > -1) {
                next();
              } else {
                res.redirect('/thong-tin-cua-hang');
              }
            } else {
              // custom 404 page
              res.redirect("".concat(_config__WEBPACK_IMPORTED_MODULE_2__["config"].url.main, "/not-found"));
            }

            _context.next = 13;
            break;

          case 12:
            next();

          case 13:
            _context.next = 16;
            break;

          case 15:
            next();

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function checkSubdomain(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./core/clearCookie.ts":
/*!*****************************!*\
  !*** ./core/clearCookie.ts ***!
  \*****************************/
/*! exports provided: clearCookie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearCookie", function() { return clearCookie; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../../node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./config/index.ts");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var clearCookie =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_req, res) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            res.clearCookie('token', {
              domain: _config__WEBPACK_IMPORTED_MODULE_1__["config"].cookies.domain
            }).redirect('/');

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function clearCookie(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./core/constants.ts":
/*!***************************!*\
  !*** ./core/constants.ts ***!
  \***************************/
/*! exports provided: newsStatus, newsTypeConst, notificationState, reportResults, priceRanges, newsStates, newsTypes, storePackages, paymentMethods, reportReasons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newsStatus", function() { return newsStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newsTypeConst", function() { return newsTypeConst; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notificationState", function() { return notificationState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reportResults", function() { return reportResults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "priceRanges", function() { return priceRanges; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newsStates", function() { return newsStates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newsTypes", function() { return newsTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storePackages", function() { return storePackages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paymentMethods", function() { return paymentMethods; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reportReasons", function() { return reportReasons; });
// PENDING / PUBLIC / STOPPED / REJECTED / DELETED
var newsStatus = {
  PENDING: 'PENDING',
  PUBLIC: 'PUBLIC',
  STOPPED: 'STOPPED',
  REJECTED: 'REJECTED',
  DELETED: 'DELETED'
};
var newsTypeConst = {
  SELL: 'SELL',
  LEASE: 'LEASE',
  BUY: 'BUY',
  RENT: 'RENT'
};
var notificationState = {
  READ: 'READ',
  UNREAD: 'UNREAD'
};
var reportResults = {
  SKIP: 'SKIP',
  DELETE: 'DELETE'
};
var priceRanges = [{
  min: 100000000,
  max: 500000000
}, {
  min: 500000000,
  max: 1000000000
}, {
  min: 1000000000,
  max: 5000000000
}, {
  min: 5000000000,
  max: 10000000000
}, {
  min: 10000000000,
  max: 50000000000
}];
var newsStates = [{
  value: 'NEW',
  label: 'Mới'
}, {
  value: 'USED',
  label: 'Nhập bãi'
}, {
  value: 'LIQUIDATE',
  label: 'Thanh lý'
}];
var newsTypes = [{
  value: 'SELL',
  label: 'Cần bán'
}, {
  value: 'LEASE',
  label: 'Cần cho thuê'
}, {
  value: 'BUY',
  label: 'Cần mua'
}, {
  value: 'RENT',
  label: 'Cần thuê'
}];
var storePackages = [{
  label: '1 tháng',
  value: 86400 * 30 * 1000,
  price: 100000,
  imageUrl: ''
}, {
  label: '3 tháng',
  value: 3 * 86400 * 30 * 1000,
  price: 300000,
  imageUrl: '/static/images/tag30k.png'
}, {
  label: '6 tháng',
  value: 6 * 86400 * 30 * 1000,
  price: 600000,
  imageUrl: '/static/images/tag50k.png'
}, {
  label: '12 tháng',
  value: 12 * 86400 * 30 * 1000,
  price: 1200000,
  imageUrl: '/static/images/tag990k.png'
}];
var paymentMethods = [{
  label: 'Thẻ ngân hàng nội địa',
  value: 'domesticCard',
  imageUrl: ['/static/images/credit-card.png']
}, {
  label: 'Thẻ quốc tế',
  value: 'globalCard',
  imageUrl: ['/static/images/Visa.png', '/static/images/Mastercard.png']
}, {
  label: 'Ví momo',
  value: 'momoWallet',
  imageUrl: ['/static/images/momo.png']
}];
var reportReasons = [{
  label: 'Báo tin đã bán',
  value: 'SOLD'
}, {
  label: 'Báo tin vi phạm',
  value: 'VIOLATE'
}, {
  label: 'Báo tin đăng sai',
  value: 'WRONG_INFO'
}];

/***/ }),

/***/ "./core/convertVietnamese.ts":
/*!***********************************!*\
  !*** ./core/convertVietnamese.ts ***!
  \***********************************/
/*! exports provided: convertVietnamese */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertVietnamese", function() { return convertVietnamese; });
var convertVietnamese = function convertVietnamese(str) {
  var result = str.toLowerCase();
  result = result.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/gi, 'a');
  result = result.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/gi, 'e');
  result = result.replace(/ì|í|ị|ỉ|ĩ/gi, 'i');
  result = result.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/gi, 'o');
  result = result.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/gi, 'u');
  result = result.replace(/ỳ|ý|ỵ|ỷ|ỹ/gi, 'y');
  result = result.replace(/đ/gi, 'd');
  result = result.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/gi, ' ');
  result = result.replace(/ + /gi, ' ');
  result = result.trim();
  return result;
};

/***/ }),

/***/ "./core/firebase.ts":
/*!**************************!*\
  !*** ./core/firebase.ts ***!
  \**************************/
/*! exports provided: initializeFirebaseApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeFirebaseApp", function() { return initializeFirebaseApp; });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "../../node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ "../../node_modules/firebase/auth/dist/index.esm.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./config/index.ts");



var initializeFirebaseApp = function initializeFirebaseApp() {
  if (!firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.apps.length) {
    firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(_config__WEBPACK_IMPORTED_MODULE_2__["config"].firebase);
  }

  firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.auth().setPersistence(firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.auth.Auth.Persistence.LOCAL) // tslint:disable-next-line:no-console
  .catch(function (error) {
    return console.log(error);
  });
};

/***/ }),

/***/ "./core/formatter.ts":
/*!***************************!*\
  !*** ./core/formatter.ts ***!
  \***************************/
/*! exports provided: formatMoney */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatMoney", function() { return formatMoney; });
var formatter = new Intl.NumberFormat('de-DE', {
  style: 'currency',
  currency: 'VND',
  currencyDisplay: 'code',
  minimumFractionDigits: 0
});
var formatMoney = formatter.format;


/***/ }),

/***/ "./core/generateFilters.ts":
/*!*********************************!*\
  !*** ./core/generateFilters.ts ***!
  \*********************************/
/*! exports provided: generateFilters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateFilters", function() { return generateFilters; });
var generateFilters = function generateFilters(query, metadataState) {
  var availableFilters = {};

  if (query.keyword) {
    availableFilters.keyword = query.keyword;
  }

  if (query.minPrice) {
    availableFilters.minPrice = query.minPrice;
  }

  if (query.maxPrice) {
    availableFilters.maxPrice = query.maxPrice;
  }

  if (query.minWeight) {
    availableFilters.weightRange = metadataState.weightRanges.filter(function (item) {
      return item.min === Number(query.minWeight);
    })[0]._id;
  }

  if (query.state) {
    availableFilters.state = query.state;
  }

  if (query.newsType) {
    availableFilters.newsType = query.newsType;
  }

  if (query.category) {
    availableFilters.category = metadataState.categories.filter(function (item) {
      return item.slug === query.category;
    })[0]._id;
  }

  if (query.brand) {
    availableFilters.brand = metadataState.brands.filter(function (item) {
      return item.slug === query.brand;
    })[0]._id;
  }

  if (query.location) {
    availableFilters.location = metadataState.provinces.filter(function (item) {
      return item.slug === query.location;
    })[0]._id;
  }

  return availableFilters;
};

/***/ }),

/***/ "./core/generateRecentViewedKey.ts":
/*!*****************************************!*\
  !*** ./core/generateRecentViewedKey.ts ***!
  \*****************************************/
/*! exports provided: generateRecentViewedKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateRecentViewedKey", function() { return generateRecentViewedKey; });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "../../node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./config/index.ts");


var recentViewedCookie = 'recent_viewed';
var generateRecentViewedKey = function generateRecentViewedKey(req, res, next) {
  if (!req.cookies[recentViewedCookie]) {
    var recentViewedKey = Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])();
    res.cookie(recentViewedCookie, recentViewedKey, {
      domain: _config__WEBPACK_IMPORTED_MODULE_1__["config"].cookies.domain
    });
  }

  next();
};

/***/ }),

/***/ "./core/generateSearchUrl.ts":
/*!***********************************!*\
  !*** ./core/generateSearchUrl.ts ***!
  \***********************************/
/*! exports provided: generateSearchUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateSearchUrl", function() { return generateSearchUrl; });
var generateSearchUrl = function generateSearchUrl(filters) {
  var filterValues = {};

  if (filters.keyword) {
    filterValues.keyword = filters.keyword;
  }

  if (Number(filters.minPrice)) {
    filterValues.minPrice = Number(filters.minPrice);
  }

  if (Number(filters.maxPrice)) {
    filterValues.maxPrice = Number(filters.maxPrice);
  }

  if (Number(filters.minWeight)) {
    filterValues.minWeight = Number(filters.minWeight);
  }

  if (Number(filters.maxWeight)) {
    filterValues.maxWeight = Number(filters.maxWeight);
  }

  if (filters.state) {
    filterValues.state = filters.state;
  }

  if (filters.newsType) {
    filterValues.newsType = filters.newsType;
  }

  if (filters.category) {
    filterValues.category = filters.category;
  }

  if (filters.brand) {
    filterValues.brand = filters.brand;
  }

  if (filters.model) {
    filterValues.model = filters.model;
  }

  if (filters.location) {
    filterValues.location = filters.location;
  }

  return Object.keys(filterValues).sort().map(function (item) {
    return "".concat(item, "=").concat(filterValues[item]);
  }).join('&');
};

/***/ }),

/***/ "./core/getBase64Image.ts":
/*!********************************!*\
  !*** ./core/getBase64Image.ts ***!
  \********************************/
/*! exports provided: getBase64Image */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBase64Image", function() { return getBase64Image; });
var getBase64Image = function getBase64Image(img, callback) {
  var reader = new FileReader();
  reader.addEventListener('load', function () {
    return callback(reader.result);
  });
  reader.readAsDataURL(img);
};

/***/ }),

/***/ "./core/getImageUrl.ts":
/*!*****************************!*\
  !*** ./core/getImageUrl.ts ***!
  \*****************************/
/*! exports provided: getImageUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getImageUrl", function() { return getImageUrl; });
var getImageUrl = function getImageUrl(imageUrl, imageType) {
  return imageUrl ? imageUrl.indexOf('.jpg') === -1 && imageUrl.indexOf('.png') === -1 ? "".concat(imageUrl, "-").concat(imageType, ".jpg") : imageUrl : '';
};

/***/ }),

/***/ "./core/getMenuConfigs.ts":
/*!********************************!*\
  !*** ./core/getMenuConfigs.ts ***!
  \********************************/
/*! exports provided: getMenuConfigs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMenuConfigs", function() { return getMenuConfigs; });
/* harmony import */ var _modules_admin_menuConfigs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/admin/menuConfigs */ "./modules/admin/menuConfigs.ts");

var getMenuConfigs = function getMenuConfigs() {
  return [_modules_admin_menuConfigs__WEBPACK_IMPORTED_MODULE_0__["authMenuConfigs"], _modules_admin_menuConfigs__WEBPACK_IMPORTED_MODULE_0__["appMenuConfigs"], _modules_admin_menuConfigs__WEBPACK_IMPORTED_MODULE_0__["statisticsMenuConfigs"]];
};

/***/ }),

/***/ "./core/getShopUrl.ts":
/*!****************************!*\
  !*** ./core/getShopUrl.ts ***!
  \****************************/
/*! exports provided: getShopUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getShopUrl", function() { return getShopUrl; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./config/index.ts");

var getShopUrl = function getShopUrl(shopDomain) {
  return _config__WEBPACK_IMPORTED_MODULE_0__["config"].url.shop.replace('shopDomain', shopDomain);
};

/***/ }),

/***/ "./core/index.ts":
/*!***********************!*\
  !*** ./core/index.ts ***!
  \***********************/
/*! exports provided: initializeFirebaseApp, setCookie, formatMoney, submitLoginForm, validateField, clearCookie, metadata, getBase64Image, getImageUrl, newsStatus, newsTypeConst, notificationState, reportResults, priceRanges, newsStates, newsTypes, storePackages, paymentMethods, reportReasons, checkSubdomain, checkFollowStatus, getShopUrl, generateSearchUrl, generateFilters, generateRecentViewedKey, isMobile, convertVietnamese, getMenuConfigs, checkPermission */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./firebase */ "./core/firebase.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initializeFirebaseApp", function() { return _firebase__WEBPACK_IMPORTED_MODULE_0__["initializeFirebaseApp"]; });

/* harmony import */ var _setCookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setCookie */ "./core/setCookie.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCookie", function() { return _setCookie__WEBPACK_IMPORTED_MODULE_1__["setCookie"]; });

/* harmony import */ var _formatter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formatter */ "./core/formatter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatMoney", function() { return _formatter__WEBPACK_IMPORTED_MODULE_2__["formatMoney"]; });

/* harmony import */ var _submitLoginForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./submitLoginForm */ "./core/submitLoginForm.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "submitLoginForm", function() { return _submitLoginForm__WEBPACK_IMPORTED_MODULE_3__["submitLoginForm"]; });

/* harmony import */ var _validateField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./validateField */ "./core/validateField.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "validateField", function() { return _validateField__WEBPACK_IMPORTED_MODULE_4__["validateField"]; });

/* harmony import */ var _clearCookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./clearCookie */ "./core/clearCookie.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clearCookie", function() { return _clearCookie__WEBPACK_IMPORTED_MODULE_5__["clearCookie"]; });

/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./metadata */ "./core/metadata.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "metadata", function() { return _metadata__WEBPACK_IMPORTED_MODULE_6__["metadata"]; });

/* harmony import */ var _getBase64Image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./getBase64Image */ "./core/getBase64Image.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBase64Image", function() { return _getBase64Image__WEBPACK_IMPORTED_MODULE_7__["getBase64Image"]; });

/* harmony import */ var _getImageUrl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./getImageUrl */ "./core/getImageUrl.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getImageUrl", function() { return _getImageUrl__WEBPACK_IMPORTED_MODULE_8__["getImageUrl"]; });

/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./constants */ "./core/constants.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "newsStatus", function() { return _constants__WEBPACK_IMPORTED_MODULE_9__["newsStatus"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "newsTypeConst", function() { return _constants__WEBPACK_IMPORTED_MODULE_9__["newsTypeConst"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notificationState", function() { return _constants__WEBPACK_IMPORTED_MODULE_9__["notificationState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reportResults", function() { return _constants__WEBPACK_IMPORTED_MODULE_9__["reportResults"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "priceRanges", function() { return _constants__WEBPACK_IMPORTED_MODULE_9__["priceRanges"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "newsStates", function() { return _constants__WEBPACK_IMPORTED_MODULE_9__["newsStates"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "newsTypes", function() { return _constants__WEBPACK_IMPORTED_MODULE_9__["newsTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "storePackages", function() { return _constants__WEBPACK_IMPORTED_MODULE_9__["storePackages"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "paymentMethods", function() { return _constants__WEBPACK_IMPORTED_MODULE_9__["paymentMethods"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reportReasons", function() { return _constants__WEBPACK_IMPORTED_MODULE_9__["reportReasons"]; });

/* harmony import */ var _checkSubdomain__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./checkSubdomain */ "./core/checkSubdomain.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkSubdomain", function() { return _checkSubdomain__WEBPACK_IMPORTED_MODULE_10__["checkSubdomain"]; });

/* harmony import */ var _checkFollowStatus__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./checkFollowStatus */ "./core/checkFollowStatus.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkFollowStatus", function() { return _checkFollowStatus__WEBPACK_IMPORTED_MODULE_11__["checkFollowStatus"]; });

/* harmony import */ var _getShopUrl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./getShopUrl */ "./core/getShopUrl.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getShopUrl", function() { return _getShopUrl__WEBPACK_IMPORTED_MODULE_12__["getShopUrl"]; });

/* harmony import */ var _generateSearchUrl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./generateSearchUrl */ "./core/generateSearchUrl.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateSearchUrl", function() { return _generateSearchUrl__WEBPACK_IMPORTED_MODULE_13__["generateSearchUrl"]; });

/* harmony import */ var _generateFilters__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./generateFilters */ "./core/generateFilters.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateFilters", function() { return _generateFilters__WEBPACK_IMPORTED_MODULE_14__["generateFilters"]; });

/* harmony import */ var _generateRecentViewedKey__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./generateRecentViewedKey */ "./core/generateRecentViewedKey.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateRecentViewedKey", function() { return _generateRecentViewedKey__WEBPACK_IMPORTED_MODULE_15__["generateRecentViewedKey"]; });

/* harmony import */ var _checkIsMobile__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./checkIsMobile */ "./core/checkIsMobile.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isMobile", function() { return _checkIsMobile__WEBPACK_IMPORTED_MODULE_16__["isMobile"]; });

/* harmony import */ var _convertVietnamese__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./convertVietnamese */ "./core/convertVietnamese.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "convertVietnamese", function() { return _convertVietnamese__WEBPACK_IMPORTED_MODULE_17__["convertVietnamese"]; });

/* harmony import */ var _getMenuConfigs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./getMenuConfigs */ "./core/getMenuConfigs.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMenuConfigs", function() { return _getMenuConfigs__WEBPACK_IMPORTED_MODULE_18__["getMenuConfigs"]; });

/* harmony import */ var _checkPermission__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./checkPermission */ "./core/checkPermission.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkPermission", function() { return _checkPermission__WEBPACK_IMPORTED_MODULE_19__["checkPermission"]; });






















/***/ }),

/***/ "./core/metadata.ts":
/*!**************************!*\
  !*** ./core/metadata.ts ***!
  \**************************/
/*! exports provided: metadata */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metadata", function() { return metadata; });
var metadata = {};

/***/ }),

/***/ "./core/setCookie.ts":
/*!***************************!*\
  !*** ./core/setCookie.ts ***!
  \***************************/
/*! exports provided: setCookie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCookie", function() { return setCookie; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../../node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./config/index.ts");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var setCookie =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(req, res) {
    var token;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            token = req.body.token;
            res.cookie('token', "Bearer ".concat(token), {
              domain: _config__WEBPACK_IMPORTED_MODULE_1__["config"].cookies.domain
            }).redirect('/');

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function setCookie(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./core/submitLoginForm.ts":
/*!*********************************!*\
  !*** ./core/submitLoginForm.ts ***!
  \*********************************/
/*! exports provided: submitLoginForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submitLoginForm", function() { return submitLoginForm; });
var submitLoginForm = function submitLoginForm(idToken) {
  var form = document.getElementById('form');
  var input = document.createElement('input');
  input.type = 'text';
  input.name = 'token';
  input.value = idToken;
  form.appendChild(input);
  form.submit();
};

/***/ }),

/***/ "./core/validateField.ts":
/*!*******************************!*\
  !*** ./core/validateField.ts ***!
  \*******************************/
/*! exports provided: validateField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateField", function() { return validateField; });
var validateField = function validateField(params) {
  try {
    params.validateSchema.validateSyncAt(params.fieldName, params.context.values);
    params.context.setFieldError(params.fieldName, '');
  } catch (error) {
    params.context.setFieldError(params.fieldName, error.message);
  }
};

/***/ }),

/***/ "./modules/admin/menuConfigs.ts":
/*!**************************************!*\
  !*** ./modules/admin/menuConfigs.ts ***!
  \**************************************/
/*! exports provided: appMenuConfigs, authMenuConfigs, statisticsMenuConfigs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appMenuConfigs", function() { return appMenuConfigs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authMenuConfigs", function() { return authMenuConfigs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "statisticsMenuConfigs", function() { return statisticsMenuConfigs; });
var appMenuConfigs = {
  name: 'appManagement',
  icon: 'qrcode',
  items: [{
    name: 'reportsManagement',
    path: '/quan-ly/bao-cao-vi-pham',
    permission: '',
    children: []
  }, {
    name: 'brandsManagement',
    path: '/quan-ly/danh-sach-hang',
    permission: '',
    children: []
  }, {
    name: 'categoriesManagement',
    path: '/quan-ly/chung-loai-may',
    permission: '',
    children: []
  }, {
    name: 'modelsManagement',
    path: '/quan-ly/danh-sach-models',
    permission: '',
    children: []
  }, {
    name: 'weightRangesManagement',
    path: '/quan-ly/khoang-trong-luong',
    permission: '',
    children: []
  }, {
    name: 'rentalPeriodsManagement',
    path: '/quan-ly/thoi-gian-thue',
    permission: '',
    children: []
  }, {
    name: 'featureBrandsManagement',
    path: '/quan-ly/hang-hop-tac',
    permission: '',
    children: []
  }, {
    name: 'adsenseManagement',
    path: '/quan-ly/quang-cao',
    permission: '',
    children: []
  }, {
    name: 'uploadExcelFile',
    path: '/quan-ly/dang-tin',
    permission: '',
    children: []
  }]
};
var authMenuConfigs = {
  name: 'authManagement',
  icon: 'user',
  items: [{
    name: 'usersManagement',
    path: '/quan-ly/nguoi-dung',
    permission: '',
    children: []
  }]
};
var statisticsMenuConfigs = {
  name: 'statisticsManagement',
  icon: 'rise',
  items: [{
    name: 'newsStatistics',
    path: '/quan-ly/thong-ke-tin-bai',
    permission: '',
    children: []
  }]
};

/***/ }),

/***/ "./pages/refresh-token-iframe.tsx":
/*!****************************************!*\
  !*** ./pages/refresh-token-iframe.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app */ "../../node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ "../../node_modules/firebase/auth/dist/index.esm.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core */ "./core/index.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var RefreshTokenIframe =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RefreshTokenIframe, _React$Component);

  function RefreshTokenIframe() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, RefreshTokenIframe);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(RefreshTokenIframe)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "refreshTokenInterval", void 0);

    return _this;
  }

  _createClass(RefreshTokenIframe, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      Object(_core__WEBPACK_IMPORTED_MODULE_3__["initializeFirebaseApp"])();
      firebase_app__WEBPACK_IMPORTED_MODULE_1___default.a.auth().onAuthStateChanged(function (user) {
        if (user) {
          _this2.refreshTokenInterval = setInterval(function () {
            firebase_app__WEBPACK_IMPORTED_MODULE_1___default.a.auth().currentUser.getIdToken(true).then(function (idToken) {
              Object(_core__WEBPACK_IMPORTED_MODULE_3__["submitLoginForm"])(idToken);
            });
          }, 30 * 60 * 1000);
        }
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.refreshTokenInterval);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        id: "form",
        method: "post",
        action: "/auth/login",
        style: {
          display: 'none'
        }
      }));
    }
  }]);

  return RefreshTokenIframe;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (RefreshTokenIframe);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/refresh-token-iframe")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "../../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./services/index.ts":
/*!***************************!*\
  !*** ./services/index.ts ***!
  \***************************/
/*! exports provided: getServiceProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServiceProxy", function() { return getServiceProxy; });
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/auth */ "../../node_modules/firebase/auth/dist/index.esm.js");
/* harmony import */ var _service_proxies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service-proxies */ "./services/service-proxies.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./config/index.ts");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-fetch */ "../../node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3__);





var getAuthHttp = function getAuthHttp(idToken) {
  return {
    fetch: function fetch(url, option) {
      option.headers.Authorization = "".concat(idToken);
      option.headers['Access-Control-Allow-Origin'] = '*';
      option.credentials = 'include';
      return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default()(url, option);
    }
  };
};

var getServiceProxy = function getServiceProxy() {
  var idToken = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var httpOption = getAuthHttp(idToken);
  return new _service_proxies__WEBPACK_IMPORTED_MODULE_1__["ServiceProxy"](_config__WEBPACK_IMPORTED_MODULE_2__["config"].url.api, httpOption);
};



/***/ }),

/***/ "./services/service-proxies.ts":
/*!*************************************!*\
  !*** ./services/service-proxies.ts ***!
  \*************************************/
/*! exports provided: ServiceProxy, State, Reason, ActivateRolePayloadOperation, DeactivateRolePayloadOperation, UpdateRolePayloadOperation, FacebookLoginProvider, GoogleLoginProvider, PhoneLoginProvider, EmailLoginProvider, UpdateUserPayloadOperation, UpdateProfilePayloadOperation, ActivateUserPayloadOperation, DeactivateUserPayloadOperation, UpdateAvatarPayloadOperation, UpdateAdsensePayloadOperation, UpdateFeatureBrandPayloadOperation, UpdateRentalPeriodPayloadOperation, UpdateWeightRangePayloadOperation, ReadNotificationPayloadOperation, ReadAllNotificationsPayloadOperation, NotificationState, NotificationType, UpdateReportPayloadOperation, ReportState, ReportResolvedResult, CreateReportPayloadReason, UpdateIntroImagesShopPayloadOperation, UpdateLogoImageShopPayloadOperation, DeactivateShopPayloadOperation, ActivateShopPayloadOperation, UpdateShopPayloadOperation, UpdateBrandPayloadOperation, UpdateCategoryPayloadOperation, Payload9ResolvedResult, ReportsReason, SwaggerException */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceProxy", function() { return ServiceProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "State", function() { return State; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Reason", function() { return Reason; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivateRolePayloadOperation", function() { return ActivateRolePayloadOperation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeactivateRolePayloadOperation", function() { return DeactivateRolePayloadOperation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateRolePayloadOperation", function() { return UpdateRolePayloadOperation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacebookLoginProvider", function() { return FacebookLoginProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleLoginProvider", function() { return GoogleLoginProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhoneLoginProvider", function() { return PhoneLoginProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailLoginProvider", function() { return EmailLoginProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateUserPayloadOperation", function() { return UpdateUserPayloadOperation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateProfilePayloadOperation", function() { return UpdateProfilePayloadOperation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivateUserPayloadOperation", function() { return ActivateUserPayloadOperation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeactivateUserPayloadOperation", function() { return DeactivateUserPayloadOperation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateAvatarPayloadOperation", function() { return UpdateAvatarPayloadOperation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateAdsensePayloadOperation", function() { return UpdateAdsensePayloadOperation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateFeatureBrandPayloadOperation", function() { return UpdateFeatureBrandPayloadOperation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateRentalPeriodPayloadOperation", function() { return UpdateRentalPeriodPayloadOperation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateWeightRangePayloadOperation", function() { return UpdateWeightRangePayloadOperation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadNotificationPayloadOperation", function() { return ReadNotificationPayloadOperation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadAllNotificationsPayloadOperation", function() { return ReadAllNotificationsPayloadOperation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationState", function() { return NotificationState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationType", function() { return NotificationType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateReportPayloadOperation", function() { return UpdateReportPayloadOperation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportState", function() { return ReportState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportResolvedResult", function() { return ReportResolvedResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateReportPayloadReason", function() { return CreateReportPayloadReason; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateIntroImagesShopPayloadOperation", function() { return UpdateIntroImagesShopPayloadOperation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateLogoImageShopPayloadOperation", function() { return UpdateLogoImageShopPayloadOperation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeactivateShopPayloadOperation", function() { return DeactivateShopPayloadOperation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivateShopPayloadOperation", function() { return ActivateShopPayloadOperation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateShopPayloadOperation", function() { return UpdateShopPayloadOperation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateBrandPayloadOperation", function() { return UpdateBrandPayloadOperation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateCategoryPayloadOperation", function() { return UpdateCategoryPayloadOperation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Payload9ResolvedResult", function() { return Payload9ResolvedResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsReason", function() { return ReportsReason; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwaggerException", function() { return SwaggerException; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* tslint:disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v12.0.5.0 (NJsonSchema v9.13.2.0 (Newtonsoft.Json v11.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------
// ReSharper disable InconsistentNaming
var ServiceProxy =
/*#__PURE__*/
function () {
  function ServiceProxy(baseUrl, http) {
    _classCallCheck(this, ServiceProxy);

    _defineProperty(this, "http", void 0);

    _defineProperty(this, "baseUrl", void 0);

    _defineProperty(this, "jsonParseReviver", undefined);

    this.http = http ? http : window;
    this.baseUrl = baseUrl ? baseUrl : "http://localhost:3000/api";
  }
  /**
   * Register user
   * @param body (optional) 
   * @return successful operation
   */


  _createClass(ServiceProxy, [{
    key: "registerUser",
    value: function registerUser(body) {
      var _this = this;

      var url_ = this.baseUrl + "/auth";
      url_ = url_.replace(/[?&]$/, "");
      var content_ = JSON.stringify(body);
      var options_ = {
        body: content_,
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this.processRegisterUser(_response);
      });
    }
  }, {
    key: "processRegisterUser",
    value: function processRegisterUser(response) {
      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          return;
        });
      } else if (status === 201) {
        return response.text().then(function (_responseText) {
          return;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Find permissions list of all modules
     * @return successful operation
     */

  }, {
    key: "findPermissions",
    value: function findPermissions() {
      var _this2 = this;

      var url_ = this.baseUrl + "/permissions";
      url_ = url_.replace(/[?&]$/, "");
      var options_ = {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this2.processFindPermissions(_response);
      });
    }
  }, {
    key: "processFindPermissions",
    value: function processFindPermissions(response) {
      var _this3 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this3.jsonParseReviver);
          return result200;
        });
      } else if (status === 201) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Check role name exist
     * @param roleName roleName
     * @return successful operation
     */

  }, {
    key: "checkRoleNameExist",
    value: function checkRoleNameExist(roleName) {
      var _this4 = this;

      var url_ = this.baseUrl + "/roles/customs/check-name-exist/{roleName}";
      if (roleName === undefined || roleName === null) throw new Error("The parameter 'roleName' must be defined.");
      url_ = url_.replace("{roleName}", encodeURIComponent("" + roleName));
      url_ = url_.replace(/[?&]$/, "");
      var options_ = {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this4.processCheckRoleNameExist(_response);
      });
    }
  }, {
    key: "processCheckRoleNameExist",
    value: function processCheckRoleNameExist(response) {
      var _this5 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this5.jsonParseReviver);
          return result200;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Find all roles
     * @return successful operation
     */

  }, {
    key: "getAllRoles",
    value: function getAllRoles() {
      var _this6 = this;

      var url_ = this.baseUrl + "/roles/customs/get-all";
      url_ = url_.replace(/[?&]$/, "");
      var options_ = {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this6.processGetAllRoles(_response);
      });
    }
  }, {
    key: "processGetAllRoles",
    value: function processGetAllRoles(response) {
      var _this7 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this7.jsonParseReviver);
          return result200;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Find role by id
     * @param roleId roleId
     * @return successful operation
     */

  }, {
    key: "findRoleById",
    value: function findRoleById(roleId) {
      var _this8 = this;

      var url_ = this.baseUrl + "/roles/{roleId}";
      if (roleId === undefined || roleId === null) throw new Error("The parameter 'roleId' must be defined.");
      url_ = url_.replace("{roleId}", encodeURIComponent("" + roleId));
      url_ = url_.replace(/[?&]$/, "");
      var options_ = {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this8.processFindRoleById(_response);
      });
    }
  }, {
    key: "processFindRoleById",
    value: function processFindRoleById(response) {
      var _this9 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this9.jsonParseReviver);
          return result200;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Update role
     * @param roleId roleId
     * @param body (optional) 
     * @return successful operation
     */

  }, {
    key: "updateRole",
    value: function updateRole(roleId, body) {
      var _this10 = this;

      var url_ = this.baseUrl + "/roles/{roleId}";
      if (roleId === undefined || roleId === null) throw new Error("The parameter 'roleId' must be defined.");
      url_ = url_.replace("{roleId}", encodeURIComponent("" + roleId));
      url_ = url_.replace(/[?&]$/, "");
      var content_ = JSON.stringify(body);
      var options_ = {
        body: content_,
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this10.processUpdateRole(_response);
      });
    }
  }, {
    key: "processUpdateRole",
    value: function processUpdateRole(response) {
      var _this11 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this11.jsonParseReviver);
          return result200;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Find roles
     * @param search (optional) search
     * @param permissions (optional) filter by permissions
     * @param first number of records returned
     * @param sortBy sort field
     * @param before (optional) before token
     * @param after (optional) after token
     * @return successful operation
     */

  }, {
    key: "findRoles",
    value: function findRoles(search, permissions, first, sortBy, before, after) {
      var _this12 = this;

      var url_ = this.baseUrl + "/roles?";
      if (search === null) throw new Error("The parameter 'search' cannot be null.");else if (search !== undefined) url_ += "search=" + encodeURIComponent("" + search) + "&";
      if (permissions === null) throw new Error("The parameter 'permissions' cannot be null.");else if (permissions !== undefined) permissions && permissions.forEach(function (item) {
        url_ += "permissions=" + encodeURIComponent("" + item) + "&";
      });
      if (first === undefined || first === null) throw new Error("The parameter 'first' must be defined and cannot be null.");else url_ += "first=" + encodeURIComponent("" + first) + "&";
      if (sortBy === undefined || sortBy === null) throw new Error("The parameter 'sortBy' must be defined and cannot be null.");else url_ += "sortBy=" + encodeURIComponent("" + sortBy) + "&";
      if (before === null) throw new Error("The parameter 'before' cannot be null.");else if (before !== undefined) url_ += "before=" + encodeURIComponent("" + before) + "&";
      if (after === null) throw new Error("The parameter 'after' cannot be null.");else if (after !== undefined) url_ += "after=" + encodeURIComponent("" + after) + "&";
      url_ = url_.replace(/[?&]$/, "");
      var options_ = {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this12.processFindRoles(_response);
      });
    }
  }, {
    key: "processFindRoles",
    value: function processFindRoles(response) {
      var _this13 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this13.jsonParseReviver);
          return result200;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Create role
     * @param body (optional) 
     * @return successful operation
     */

  }, {
    key: "createRole",
    value: function createRole(body) {
      var _this14 = this;

      var url_ = this.baseUrl + "/roles";
      url_ = url_.replace(/[?&]$/, "");
      var content_ = JSON.stringify(body);
      var options_ = {
        body: content_,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this14.processCreateRole(_response);
      });
    }
  }, {
    key: "processCreateRole",
    value: function processCreateRole(response) {
      var _this15 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this15.jsonParseReviver);
          return result200;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Find profile
     * @return successful operation
     */

  }, {
    key: "findProfile",
    value: function findProfile() {
      var _this16 = this;

      var url_ = this.baseUrl + "/profiles";
      url_ = url_.replace(/[?&]$/, "");
      var options_ = {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this16.processFindProfile(_response);
      });
    }
  }, {
    key: "processFindProfile",
    value: function processFindProfile(response) {
      var _this17 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this17.jsonParseReviver);
          return result200;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Find use profile for guess view
     * @param userId userId
     * @return successful operation
     */

  }, {
    key: "findPublicProfile",
    value: function findPublicProfile(userId) {
      var _this18 = this;

      var url_ = this.baseUrl + "/profiles/{userId}";
      if (userId === undefined || userId === null) throw new Error("The parameter 'userId' must be defined.");
      url_ = url_.replace("{userId}", encodeURIComponent("" + userId));
      url_ = url_.replace(/[?&]$/, "");
      var options_ = {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this18.processFindPublicProfile(_response);
      });
    }
  }, {
    key: "processFindPublicProfile",
    value: function processFindPublicProfile(response) {
      var _this19 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this19.jsonParseReviver);
          return result200;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Update profile
     * @param userId userId
     * @param body (optional) 
     * @return successful operation
     */

  }, {
    key: "updateProfile",
    value: function updateProfile(userId, body) {
      var _this20 = this;

      var url_ = this.baseUrl + "/profiles/{userId}";
      if (userId === undefined || userId === null) throw new Error("The parameter 'userId' must be defined.");
      url_ = url_.replace("{userId}", encodeURIComponent("" + userId));
      url_ = url_.replace(/[?&]$/, "");
      var content_ = JSON.stringify(body);
      var options_ = {
        body: content_,
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this20.processUpdateProfile(_response);
      });
    }
  }, {
    key: "processUpdateProfile",
    value: function processUpdateProfile(response) {
      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          return;
        });
      } else if (status === 201) {
        return response.text().then(function (_responseText) {
          return;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Find users
     * @param search (optional) search
     * @param roles (optional) filter by roles
     * @param first number of records returned
     * @param sortBy sort field
     * @param before (optional) before token
     * @param after (optional) after token
     * @return successful operation
     */

  }, {
    key: "findUsers",
    value: function findUsers(search, roles, first, sortBy, before, after) {
      var _this21 = this;

      var url_ = this.baseUrl + "/users?";
      if (search === null) throw new Error("The parameter 'search' cannot be null.");else if (search !== undefined) url_ += "search=" + encodeURIComponent("" + search) + "&";
      if (roles === null) throw new Error("The parameter 'roles' cannot be null.");else if (roles !== undefined) roles && roles.forEach(function (item) {
        url_ += "roles=" + encodeURIComponent("" + item) + "&";
      });
      if (first === undefined || first === null) throw new Error("The parameter 'first' must be defined and cannot be null.");else url_ += "first=" + encodeURIComponent("" + first) + "&";
      if (sortBy === undefined || sortBy === null) throw new Error("The parameter 'sortBy' must be defined and cannot be null.");else url_ += "sortBy=" + encodeURIComponent("" + sortBy) + "&";
      if (before === null) throw new Error("The parameter 'before' cannot be null.");else if (before !== undefined) url_ += "before=" + encodeURIComponent("" + before) + "&";
      if (after === null) throw new Error("The parameter 'after' cannot be null.");else if (after !== undefined) url_ += "after=" + encodeURIComponent("" + after) + "&";
      url_ = url_.replace(/[?&]$/, "");
      var options_ = {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this21.processFindUsers(_response);
      });
    }
  }, {
    key: "processFindUsers",
    value: function processFindUsers(response) {
      var _this22 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this22.jsonParseReviver);
          return result200;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Create user
     * @param body (optional) 
     * @return successful operation
     */

  }, {
    key: "createUser",
    value: function createUser(body) {
      var _this23 = this;

      var url_ = this.baseUrl + "/users";
      url_ = url_.replace(/[?&]$/, "");
      var content_ = JSON.stringify(body);
      var options_ = {
        body: content_,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this23.processCreateUser(_response);
      });
    }
  }, {
    key: "processCreateUser",
    value: function processCreateUser(response) {
      var _this24 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this24.jsonParseReviver);
          return result200;
        });
      } else if (status === 201) {
        return response.text().then(function (_responseText) {
          var result201 = null;
          result201 = _responseText === "" ? null : JSON.parse(_responseText, _this24.jsonParseReviver);
          return result201;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Check phone number exist
     * @param phoneNo phoneNo
     * @return successful operation
     */

  }, {
    key: "checkPhoneNoExist",
    value: function checkPhoneNoExist(phoneNo) {
      var _this25 = this;

      var url_ = this.baseUrl + "/users/customs/check-phone-number-exist/{phoneNo}";
      if (phoneNo === undefined || phoneNo === null) throw new Error("The parameter 'phoneNo' must be defined.");
      url_ = url_.replace("{phoneNo}", encodeURIComponent("" + phoneNo));
      url_ = url_.replace(/[?&]$/, "");
      var options_ = {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this25.processCheckPhoneNoExist(_response);
      });
    }
  }, {
    key: "processCheckPhoneNoExist",
    value: function processCheckPhoneNoExist(response) {
      var _this26 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this26.jsonParseReviver);
          return result200;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Check email exist
     * @param email email
     * @return successful operation
     */

  }, {
    key: "checkEmailExist",
    value: function checkEmailExist(email) {
      var _this27 = this;

      var url_ = this.baseUrl + "/users/customs/check-email-exist/{email}";
      if (email === undefined || email === null) throw new Error("The parameter 'email' must be defined.");
      url_ = url_.replace("{email}", encodeURIComponent("" + email));
      url_ = url_.replace(/[?&]$/, "");
      var options_ = {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this27.processCheckEmailExist(_response);
      });
    }
  }, {
    key: "processCheckEmailExist",
    value: function processCheckEmailExist(response) {
      var _this28 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this28.jsonParseReviver);
          return result200;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Find user by id
     * @param userId userId
     * @return successful operation
     */

  }, {
    key: "findUserById",
    value: function findUserById(userId) {
      var _this29 = this;

      var url_ = this.baseUrl + "/users/{userId}";
      if (userId === undefined || userId === null) throw new Error("The parameter 'userId' must be defined.");
      url_ = url_.replace("{userId}", encodeURIComponent("" + userId));
      url_ = url_.replace(/[?&]$/, "");
      var options_ = {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this29.processFindUserById(_response);
      });
    }
  }, {
    key: "processFindUserById",
    value: function processFindUserById(response) {
      var _this30 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this30.jsonParseReviver);
          return result200;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Update user
     * @param userId userId
     * @param body (optional) 
     * @return successful operation
     */

  }, {
    key: "updateUser",
    value: function updateUser(userId, body) {
      var _this31 = this;

      var url_ = this.baseUrl + "/users/{userId}";
      if (userId === undefined || userId === null) throw new Error("The parameter 'userId' must be defined.");
      url_ = url_.replace("{userId}", encodeURIComponent("" + userId));
      url_ = url_.replace(/[?&]$/, "");
      var content_ = JSON.stringify(body);
      var options_ = {
        body: content_,
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this31.processUpdateUser(_response);
      });
    }
  }, {
    key: "processUpdateUser",
    value: function processUpdateUser(response) {
      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          return;
        });
      } else if (status === 201) {
        return response.text().then(function (_responseText) {
          return;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * update adsense
     * @param adsenseId adsenseId
     * @param body (optional) 
     * @return successful operation
     */

  }, {
    key: "updateAdsense",
    value: function updateAdsense(adsenseId, body) {
      var _this32 = this;

      var url_ = this.baseUrl + "/adsense/{adsenseId}";
      if (adsenseId === undefined || adsenseId === null) throw new Error("The parameter 'adsenseId' must be defined.");
      url_ = url_.replace("{adsenseId}", encodeURIComponent("" + adsenseId));
      url_ = url_.replace(/[?&]$/, "");
      var content_ = JSON.stringify(body);
      var options_ = {
        body: content_,
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this32.processUpdateAdsense(_response);
      });
    }
  }, {
    key: "processUpdateAdsense",
    value: function processUpdateAdsense(response) {
      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          return;
        });
      } else if (status === 201) {
        return response.text().then(function (_responseText) {
          return;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Create adsense
     * @param body (optional) 
     * @return successful operation
     */

  }, {
    key: "createAdsense",
    value: function createAdsense(body) {
      var _this33 = this;

      var url_ = this.baseUrl + "/adsense";
      url_ = url_.replace(/[?&]$/, "");
      var content_ = JSON.stringify(body);
      var options_ = {
        body: content_,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this33.processCreateAdsense(_response);
      });
    }
  }, {
    key: "processCreateAdsense",
    value: function processCreateAdsense(response) {
      var _this34 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this34.jsonParseReviver);
          return result200;
        });
      } else if (status === 201) {
        return response.text().then(function (_responseText) {
          var result201 = null;
          result201 = _responseText === "" ? null : JSON.parse(_responseText, _this34.jsonParseReviver);
          return result201;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Get adsense
     * @param first limit size
     * @param sortBy order by
     * @param before (optional) before
     * @param after (optional) after
     * @return successful operation
     */

  }, {
    key: "getAdsense",
    value: function getAdsense(first, sortBy, before, after) {
      var _this35 = this;

      var url_ = this.baseUrl + "/adsense?";
      if (first === undefined || first === null) throw new Error("The parameter 'first' must be defined and cannot be null.");else url_ += "first=" + encodeURIComponent("" + first) + "&";
      if (sortBy === undefined || sortBy === null) throw new Error("The parameter 'sortBy' must be defined and cannot be null.");else url_ += "sortBy=" + encodeURIComponent("" + sortBy) + "&";
      if (before === null) throw new Error("The parameter 'before' cannot be null.");else if (before !== undefined) url_ += "before=" + encodeURIComponent("" + before) + "&";
      if (after === null) throw new Error("The parameter 'after' cannot be null.");else if (after !== undefined) url_ += "after=" + encodeURIComponent("" + after) + "&";
      url_ = url_.replace(/[?&]$/, "");
      var options_ = {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this35.processGetAdsense(_response);
      });
    }
  }, {
    key: "processGetAdsense",
    value: function processGetAdsense(response) {
      var _this36 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this36.jsonParseReviver);
          return result200;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * update feature brand
     * @param featureBrandId featureBrandId
     * @param body (optional) 
     * @return successful operation
     */

  }, {
    key: "updateFeatureBrand",
    value: function updateFeatureBrand(featureBrandId, body) {
      var _this37 = this;

      var url_ = this.baseUrl + "/feature-brands/{featureBrandId}";
      if (featureBrandId === undefined || featureBrandId === null) throw new Error("The parameter 'featureBrandId' must be defined.");
      url_ = url_.replace("{featureBrandId}", encodeURIComponent("" + featureBrandId));
      url_ = url_.replace(/[?&]$/, "");
      var content_ = JSON.stringify(body);
      var options_ = {
        body: content_,
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this37.processUpdateFeatureBrand(_response);
      });
    }
  }, {
    key: "processUpdateFeatureBrand",
    value: function processUpdateFeatureBrand(response) {
      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          return;
        });
      } else if (status === 201) {
        return response.text().then(function (_responseText) {
          return;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Get feature brands
     * @param first limit size
     * @param sortBy order by
     * @param before (optional) before
     * @param after (optional) after
     * @return successful operation
     */

  }, {
    key: "getFeatureBrands",
    value: function getFeatureBrands(first, sortBy, before, after) {
      var _this38 = this;

      var url_ = this.baseUrl + "/feature-brands?";
      if (first === undefined || first === null) throw new Error("The parameter 'first' must be defined and cannot be null.");else url_ += "first=" + encodeURIComponent("" + first) + "&";
      if (sortBy === undefined || sortBy === null) throw new Error("The parameter 'sortBy' must be defined and cannot be null.");else url_ += "sortBy=" + encodeURIComponent("" + sortBy) + "&";
      if (before === null) throw new Error("The parameter 'before' cannot be null.");else if (before !== undefined) url_ += "before=" + encodeURIComponent("" + before) + "&";
      if (after === null) throw new Error("The parameter 'after' cannot be null.");else if (after !== undefined) url_ += "after=" + encodeURIComponent("" + after) + "&";
      url_ = url_.replace(/[?&]$/, "");
      var options_ = {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this38.processGetFeatureBrands(_response);
      });
    }
  }, {
    key: "processGetFeatureBrands",
    value: function processGetFeatureBrands(response) {
      var _this39 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this39.jsonParseReviver);
          return result200;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Create feature brand for ads
     * @param body (optional) 
     * @return successful operation
     */

  }, {
    key: "createFeatureBrand",
    value: function createFeatureBrand(body) {
      var _this40 = this;

      var url_ = this.baseUrl + "/feature-brands";
      url_ = url_.replace(/[?&]$/, "");
      var content_ = JSON.stringify(body);
      var options_ = {
        body: content_,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this40.processCreateFeatureBrand(_response);
      });
    }
  }, {
    key: "processCreateFeatureBrand",
    value: function processCreateFeatureBrand(response) {
      var _this41 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this41.jsonParseReviver);
          return result200;
        });
      } else if (status === 201) {
        return response.text().then(function (_responseText) {
          var result201 = null;
          result201 = _responseText === "" ? null : JSON.parse(_responseText, _this41.jsonParseReviver);
          return result201;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Update rental period
     * @param rentalPeriodId rental period id
     * @param body (optional) 
     * @return successful operation
     */

  }, {
    key: "updateRentalPeriod",
    value: function updateRentalPeriod(rentalPeriodId, body) {
      var _this42 = this;

      var url_ = this.baseUrl + "/rental-periods/{rentalPeriodId}";
      if (rentalPeriodId === undefined || rentalPeriodId === null) throw new Error("The parameter 'rentalPeriodId' must be defined.");
      url_ = url_.replace("{rentalPeriodId}", encodeURIComponent("" + rentalPeriodId));
      url_ = url_.replace(/[?&]$/, "");
      var content_ = JSON.stringify(body);
      var options_ = {
        body: content_,
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this42.processUpdateRentalPeriod(_response);
      });
    }
  }, {
    key: "processUpdateRentalPeriod",
    value: function processUpdateRentalPeriod(response) {
      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          return;
        });
      } else if (status === 201) {
        return response.text().then(function (_responseText) {
          return;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Create rental period item
     * @param body (optional) 
     * @return successful operation
     */

  }, {
    key: "createRentalPeriod",
    value: function createRentalPeriod(body) {
      var _this43 = this;

      var url_ = this.baseUrl + "/rental-periods";
      url_ = url_.replace(/[?&]$/, "");
      var content_ = JSON.stringify(body);
      var options_ = {
        body: content_,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this43.processCreateRentalPeriod(_response);
      });
    }
  }, {
    key: "processCreateRentalPeriod",
    value: function processCreateRentalPeriod(response) {
      var _this44 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this44.jsonParseReviver);
          return result200;
        });
      } else if (status === 201) {
        return response.text().then(function (_responseText) {
          var result201 = null;
          result201 = _responseText === "" ? null : JSON.parse(_responseText, _this44.jsonParseReviver);
          return result201;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Get rental periods
     * @return successful operation
     */

  }, {
    key: "getAllRentalPeriods",
    value: function getAllRentalPeriods() {
      var _this45 = this;

      var url_ = this.baseUrl + "/rental-periods/customs/get-all";
      url_ = url_.replace(/[?&]$/, "");
      var options_ = {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this45.processGetAllRentalPeriods(_response);
      });
    }
  }, {
    key: "processGetAllRentalPeriods",
    value: function processGetAllRentalPeriods(response) {
      var _this46 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this46.jsonParseReviver);
          return result200;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Update weight range
     * @param weightRangeId weight range Id
     * @param body (optional) 
     * @return successful operation
     */

  }, {
    key: "updateWeightRange",
    value: function updateWeightRange(weightRangeId, body) {
      var _this47 = this;

      var url_ = this.baseUrl + "/weight-ranges/{weightRangeId}";
      if (weightRangeId === undefined || weightRangeId === null) throw new Error("The parameter 'weightRangeId' must be defined.");
      url_ = url_.replace("{weightRangeId}", encodeURIComponent("" + weightRangeId));
      url_ = url_.replace(/[?&]$/, "");
      var content_ = JSON.stringify(body);
      var options_ = {
        body: content_,
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this47.processUpdateWeightRange(_response);
      });
    }
  }, {
    key: "processUpdateWeightRange",
    value: function processUpdateWeightRange(response) {
      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          return;
        });
      } else if (status === 201) {
        return response.text().then(function (_responseText) {
          return;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Create weight range item
     * @param body (optional) 
     * @return successful operation
     */

  }, {
    key: "createWeightRange",
    value: function createWeightRange(body) {
      var _this48 = this;

      var url_ = this.baseUrl + "/weight-ranges";
      url_ = url_.replace(/[?&]$/, "");
      var content_ = JSON.stringify(body);
      var options_ = {
        body: content_,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this48.processCreateWeightRange(_response);
      });
    }
  }, {
    key: "processCreateWeightRange",
    value: function processCreateWeightRange(response) {
      var _this49 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this49.jsonParseReviver);
          return result200;
        });
      } else if (status === 201) {
        return response.text().then(function (_responseText) {
          var result201 = null;
          result201 = _responseText === "" ? null : JSON.parse(_responseText, _this49.jsonParseReviver);
          return result201;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Get weight ranges
     * @return successful operation
     */

  }, {
    key: "getAllWeightRanges",
    value: function getAllWeightRanges() {
      var _this50 = this;

      var url_ = this.baseUrl + "/weight-ranges/customs/get-all";
      url_ = url_.replace(/[?&]$/, "");
      var options_ = {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this50.processGetAllWeightRanges(_response);
      });
    }
  }, {
    key: "processGetAllWeightRanges",
    value: function processGetAllWeightRanges(response) {
      var _this51 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this51.jsonParseReviver);
          return result200;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Get common search keywords
     * @param first limit size
     * @param sortBy order by
     * @param before (optional) before
     * @param after (optional) after
     * @return successful operation
     */

  }, {
    key: "getCommonKeywords",
    value: function getCommonKeywords(first, sortBy, before, after) {
      var _this52 = this;

      var url_ = this.baseUrl + "/common-keywords?";
      if (first === undefined || first === null) throw new Error("The parameter 'first' must be defined and cannot be null.");else url_ += "first=" + encodeURIComponent("" + first) + "&";
      if (sortBy === undefined || sortBy === null) throw new Error("The parameter 'sortBy' must be defined and cannot be null.");else url_ += "sortBy=" + encodeURIComponent("" + sortBy) + "&";
      if (before === null) throw new Error("The parameter 'before' cannot be null.");else if (before !== undefined) url_ += "before=" + encodeURIComponent("" + before) + "&";
      if (after === null) throw new Error("The parameter 'after' cannot be null.");else if (after !== undefined) url_ += "after=" + encodeURIComponent("" + after) + "&";
      url_ = url_.replace(/[?&]$/, "");
      var options_ = {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this52.processGetCommonKeywords(_response);
      });
    }
  }, {
    key: "processGetCommonKeywords",
    value: function processGetCommonKeywords(response) {
      var _this53 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this53.jsonParseReviver);
          return result200;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Create recent viewed item
     * @param body (optional) 
     * @return successful operation
     */

  }, {
    key: "createRecentViewed",
    value: function createRecentViewed(body) {
      var _this54 = this;

      var url_ = this.baseUrl + "/recent-viewed";
      url_ = url_.replace(/[?&]$/, "");
      var content_ = JSON.stringify(body);
      var options_ = {
        body: content_,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this54.processCreateRecentViewed(_response);
      });
    }
  }, {
    key: "processCreateRecentViewed",
    value: function processCreateRecentViewed(response) {
      var _this55 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this55.jsonParseReviver);
          return result200;
        });
      } else if (status === 201) {
        return response.text().then(function (_responseText) {
          var result201 = null;
          result201 = _responseText === "" ? null : JSON.parse(_responseText, _this55.jsonParseReviver);
          return result201;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Get recent viewed items by users or uuid key
     * @param first limit size
     * @param sortBy order by
     * @param before (optional) before
     * @param after (optional) after
     * @return successful operation
     */

  }, {
    key: "getRecentViewed",
    value: function getRecentViewed(first, sortBy, before, after) {
      var _this56 = this;

      var url_ = this.baseUrl + "/recent-viewed?";
      if (first === undefined || first === null) throw new Error("The parameter 'first' must be defined and cannot be null.");else url_ += "first=" + encodeURIComponent("" + first) + "&";
      if (sortBy === undefined || sortBy === null) throw new Error("The parameter 'sortBy' must be defined and cannot be null.");else url_ += "sortBy=" + encodeURIComponent("" + sortBy) + "&";
      if (before === null) throw new Error("The parameter 'before' cannot be null.");else if (before !== undefined) url_ += "before=" + encodeURIComponent("" + before) + "&";
      if (after === null) throw new Error("The parameter 'after' cannot be null.");else if (after !== undefined) url_ += "after=" + encodeURIComponent("" + after) + "&";
      url_ = url_.replace(/[?&]$/, "");
      var options_ = {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this56.processGetRecentViewed(_response);
      });
    }
  }, {
    key: "processGetRecentViewed",
    value: function processGetRecentViewed(response) {
      var _this57 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this57.jsonParseReviver);
          return result200;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Search news most follow
     * @param shopId (optional) shop Id
     * @param first limit size
     * @param sortBy order by
     * @param otherSortBy other order by
     * @param before (optional) before
     * @param after (optional) after
     * @return successful operation
     */

  }, {
    key: "searchNewsMostFollow",
    value: function searchNewsMostFollow(shopId, first, sortBy, otherSortBy, before, after) {
      var _this58 = this;

      var url_ = this.baseUrl + "/search-news-most-follow?";
      if (shopId === null) throw new Error("The parameter 'shopId' cannot be null.");else if (shopId !== undefined) url_ += "shopId=" + encodeURIComponent("" + shopId) + "&";
      if (first === undefined || first === null) throw new Error("The parameter 'first' must be defined and cannot be null.");else url_ += "first=" + encodeURIComponent("" + first) + "&";
      if (sortBy === undefined || sortBy === null) throw new Error("The parameter 'sortBy' must be defined and cannot be null.");else url_ += "sortBy=" + encodeURIComponent("" + sortBy) + "&";
      if (otherSortBy === undefined || otherSortBy === null) throw new Error("The parameter 'otherSortBy' must be defined and cannot be null.");else url_ += "otherSortBy=" + encodeURIComponent("" + otherSortBy) + "&";
      if (before === null) throw new Error("The parameter 'before' cannot be null.");else if (before !== undefined) url_ += "before=" + encodeURIComponent("" + before) + "&";
      if (after === null) throw new Error("The parameter 'after' cannot be null.");else if (after !== undefined) url_ += "after=" + encodeURIComponent("" + after) + "&";
      url_ = url_.replace(/[?&]$/, "");
      var options_ = {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this58.processSearchNewsMostFollow(_response);
      });
    }
  }, {
    key: "processSearchNewsMostFollow",
    value: function processSearchNewsMostFollow(response) {
      var _this59 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this59.jsonParseReviver);
          return result200;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Count unread notification
     * @param ownerId owner id
     * @return successful operation
     */

  }, {
    key: "countUnreadNotifications",
    value: function countUnreadNotifications(ownerId) {
      var _this60 = this;

      var url_ = this.baseUrl + "/notifications/{ownerId}";
      if (ownerId === undefined || ownerId === null) throw new Error("The parameter 'ownerId' must be defined.");
      url_ = url_.replace("{ownerId}", encodeURIComponent("" + ownerId));
      url_ = url_.replace(/[?&]$/, "");
      var options_ = {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this60.processCountUnreadNotifications(_response);
      });
    }
  }, {
    key: "processCountUnreadNotifications",
    value: function processCountUnreadNotifications(response) {
      var _this61 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this61.jsonParseReviver);
          return result200;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Read notifications
     * @param ownerId owner id
     * @param body (optional) 
     * @return successful operation
     */

  }, {
    key: "readNotifications",
    value: function readNotifications(ownerId, body) {
      var _this62 = this;

      var url_ = this.baseUrl + "/notifications/{ownerId}";
      if (ownerId === undefined || ownerId === null) throw new Error("The parameter 'ownerId' must be defined.");
      url_ = url_.replace("{ownerId}", encodeURIComponent("" + ownerId));
      url_ = url_.replace(/[?&]$/, "");
      var content_ = JSON.stringify(body);
      var options_ = {
        body: content_,
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this62.processReadNotifications(_response);
      });
    }
  }, {
    key: "processReadNotifications",
    value: function processReadNotifications(response) {
      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          return;
        });
      } else if (status === 201) {
        return response.text().then(function (_responseText) {
          return;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Find notifications
     * @param first number of records returned
     * @param sortBy sort field
     * @param before (optional) before token
     * @param after (optional) after token
     * @return successful operation
     */

  }, {
    key: "findNotifications",
    value: function findNotifications(first, sortBy, before, after) {
      var _this63 = this;

      var url_ = this.baseUrl + "/notifications?";
      if (first === undefined || first === null) throw new Error("The parameter 'first' must be defined and cannot be null.");else url_ += "first=" + encodeURIComponent("" + first) + "&";
      if (sortBy === undefined || sortBy === null) throw new Error("The parameter 'sortBy' must be defined and cannot be null.");else url_ += "sortBy=" + encodeURIComponent("" + sortBy) + "&";
      if (before === null) throw new Error("The parameter 'before' cannot be null.");else if (before !== undefined) url_ += "before=" + encodeURIComponent("" + before) + "&";
      if (after === null) throw new Error("The parameter 'after' cannot be null.");else if (after !== undefined) url_ += "after=" + encodeURIComponent("" + after) + "&";
      url_ = url_.replace(/[?&]$/, "");
      var options_ = {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this63.processFindNotifications(_response);
      });
    }
  }, {
    key: "processFindNotifications",
    value: function processFindNotifications(response) {
      var _this64 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this64.jsonParseReviver);
          return result200;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Update report
     * @param reportId report id
     * @param body (optional) 
     * @return successful operation
     */

  }, {
    key: "updateReport",
    value: function updateReport(reportId, body) {
      var _this65 = this;

      var url_ = this.baseUrl + "/reports/{reportId}";
      if (reportId === undefined || reportId === null) throw new Error("The parameter 'reportId' must be defined.");
      url_ = url_.replace("{reportId}", encodeURIComponent("" + reportId));
      url_ = url_.replace(/[?&]$/, "");
      var content_ = JSON.stringify(body);
      var options_ = {
        body: content_,
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this65.processUpdateReport(_response);
      });
    }
  }, {
    key: "processUpdateReport",
    value: function processUpdateReport(response) {
      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          return;
        });
      } else if (status === 201) {
        return response.text().then(function (_responseText) {
          return;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Find report by id
     * @param reportId report id
     * @return successful operation
     */

  }, {
    key: "findReportById",
    value: function findReportById(reportId) {
      var _this66 = this;

      var url_ = this.baseUrl + "/reports/{reportId}";
      if (reportId === undefined || reportId === null) throw new Error("The parameter 'reportId' must be defined.");
      url_ = url_.replace("{reportId}", encodeURIComponent("" + reportId));
      url_ = url_.replace(/[?&]$/, "");
      var options_ = {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this66.processFindReportById(_response);
      });
    }
  }, {
    key: "processFindReportById",
    value: function processFindReportById(response) {
      var _this67 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this67.jsonParseReviver);
          return result200;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Create report
     * @param body (optional) 
     * @return successful operation
     */

  }, {
    key: "createReport",
    value: function createReport(body) {
      var _this68 = this;

      var url_ = this.baseUrl + "/reports";
      url_ = url_.replace(/[?&]$/, "");
      var content_ = JSON.stringify(body);
      var options_ = {
        body: content_,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this68.processCreateReport(_response);
      });
    }
  }, {
    key: "processCreateReport",
    value: function processCreateReport(response) {
      var _this69 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this69.jsonParseReviver);
          return result200;
        });
      } else if (status === 201) {
        return response.text().then(function (_responseText) {
          var result201 = null;
          result201 = _responseText === "" ? null : JSON.parse(_responseText, _this69.jsonParseReviver);
          return result201;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Find reports
     * @param search (optional) state filter
     * @param state (optional) state filter
     * @param reason (optional) reason filter
     * @param first number of records returned
     * @param sortBy sort field
     * @param before (optional) before token
     * @param after (optional) after token
     * @return successful operation
     */

  }, {
    key: "findReports",
    value: function findReports(search, state, reason, first, sortBy, before, after) {
      var _this70 = this;

      var url_ = this.baseUrl + "/reports?";
      if (search === null) throw new Error("The parameter 'search' cannot be null.");else if (search !== undefined) url_ += "search=" + encodeURIComponent("" + search) + "&";
      if (state === null) throw new Error("The parameter 'state' cannot be null.");else if (state !== undefined) url_ += "state=" + encodeURIComponent("" + state) + "&";
      if (reason === null) throw new Error("The parameter 'reason' cannot be null.");else if (reason !== undefined) url_ += "reason=" + encodeURIComponent("" + reason) + "&";
      if (first === undefined || first === null) throw new Error("The parameter 'first' must be defined and cannot be null.");else url_ += "first=" + encodeURIComponent("" + first) + "&";
      if (sortBy === undefined || sortBy === null) throw new Error("The parameter 'sortBy' must be defined and cannot be null.");else url_ += "sortBy=" + encodeURIComponent("" + sortBy) + "&";
      if (before === null) throw new Error("The parameter 'before' cannot be null.");else if (before !== undefined) url_ += "before=" + encodeURIComponent("" + before) + "&";
      if (after === null) throw new Error("The parameter 'after' cannot be null.");else if (after !== undefined) url_ += "after=" + encodeURIComponent("" + after) + "&";
      url_ = url_.replace(/[?&]$/, "");
      var options_ = {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this70.processFindReports(_response);
      });
    }
  }, {
    key: "processFindReports",
    value: function processFindReports(response) {
      var _this71 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this71.jsonParseReviver);
          return result200;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Find shop by owner id
     * @param ownerId shop owner id
     * @return successful operation
     */

  }, {
    key: "findShopByOwner",
    value: function findShopByOwner(ownerId) {
      var _this72 = this;

      var url_ = this.baseUrl + "/shop/get-by-owner/{ownerId}";
      if (ownerId === undefined || ownerId === null) throw new Error("The parameter 'ownerId' must be defined.");
      url_ = url_.replace("{ownerId}", encodeURIComponent("" + ownerId));
      url_ = url_.replace(/[?&]$/, "");
      var options_ = {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this72.processFindShopByOwner(_response);
      });
    }
  }, {
    key: "processFindShopByOwner",
    value: function processFindShopByOwner(response) {
      var _this73 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this73.jsonParseReviver);
          return result200;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Find shop by id
     * @param shopDomain shop domain
     * @param authId (optional) authUserId
     * @return successful operation
     */

  }, {
    key: "findShopByDomain",
    value: function findShopByDomain(shopDomain, authId) {
      var _this74 = this;

      var url_ = this.baseUrl + "/shop/get-by-domain/{shopDomain}?";
      if (shopDomain === undefined || shopDomain === null) throw new Error("The parameter 'shopDomain' must be defined.");
      url_ = url_.replace("{shopDomain}", encodeURIComponent("" + shopDomain));
      if (authId === null) throw new Error("The parameter 'authId' cannot be null.");else if (authId !== undefined) url_ += "authId=" + encodeURIComponent("" + authId) + "&";
      url_ = url_.replace(/[?&]$/, "");
      var options_ = {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this74.processFindShopByDomain(_response);
      });
    }
  }, {
    key: "processFindShopByDomain",
    value: function processFindShopByDomain(response) {
      var _this75 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this75.jsonParseReviver);
          return result200;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Find news by id
     * @param shopId shop id
     * @return successful operation
     */

  }, {
    key: "findShopById",
    value: function findShopById(shopId) {
      var _this76 = this;

      var url_ = this.baseUrl + "/shop/{shopId}";
      if (shopId === undefined || shopId === null) throw new Error("The parameter 'shopId' must be defined.");
      url_ = url_.replace("{shopId}", encodeURIComponent("" + shopId));
      url_ = url_.replace(/[?&]$/, "");
      var options_ = {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this76.processFindShopById(_response);
      });
    }
  }, {
    key: "processFindShopById",
    value: function processFindShopById(response) {
      var _this77 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this77.jsonParseReviver);
          return result200;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Update shop
     * @param shopId shop id
     * @param body (optional) 
     * @return successful operation
     */

  }, {
    key: "updateShop",
    value: function updateShop(shopId, body) {
      var _this78 = this;

      var url_ = this.baseUrl + "/shop/{shopId}";
      if (shopId === undefined || shopId === null) throw new Error("The parameter 'shopId' must be defined.");
      url_ = url_.replace("{shopId}", encodeURIComponent("" + shopId));
      url_ = url_.replace(/[?&]$/, "");
      var content_ = JSON.stringify(body);
      var options_ = {
        body: content_,
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this78.processUpdateShop(_response);
      });
    }
  }, {
    key: "processUpdateShop",
    value: function processUpdateShop(response) {
      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          return;
        });
      } else if (status === 201) {
        return response.text().then(function (_responseText) {
          return;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Create shops
     * @param body (optional) 
     * @return successful operation
     */

  }, {
    key: "createShop",
    value: function createShop(body) {
      var _this79 = this;

      var url_ = this.baseUrl + "/shop";
      url_ = url_.replace(/[?&]$/, "");
      var content_ = JSON.stringify(body);
      var options_ = {
        body: content_,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this79.processCreateShop(_response);
      });
    }
  }, {
    key: "processCreateShop",
    value: function processCreateShop(response) {
      var _this80 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this80.jsonParseReviver);
          return result200;
        });
      } else if (status === 201) {
        return response.text().then(function (_responseText) {
          var result201 = null;
          result201 = _responseText === "" ? null : JSON.parse(_responseText, _this80.jsonParseReviver);
          return result201;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Find shops
     * @param search (optional) search query
     * @param isActive (optional) isActive filter
     * @param owner (optional) owner filter
     * @param first number of records returned
     * @param sortBy sort field
     * @param before (optional) before token
     * @param after (optional) after token
     * @return successful operation
     */

  }, {
    key: "findShops",
    value: function findShops(search, isActive, owner, first, sortBy, before, after) {
      var _this81 = this;

      var url_ = this.baseUrl + "/shop?";
      if (search === null) throw new Error("The parameter 'search' cannot be null.");else if (search !== undefined) url_ += "search=" + encodeURIComponent("" + search) + "&";
      if (isActive === null) throw new Error("The parameter 'isActive' cannot be null.");else if (isActive !== undefined) url_ += "isActive=" + encodeURIComponent("" + isActive) + "&";
      if (owner === null) throw new Error("The parameter 'owner' cannot be null.");else if (owner !== undefined) url_ += "owner=" + encodeURIComponent("" + owner) + "&";
      if (first === undefined || first === null) throw new Error("The parameter 'first' must be defined and cannot be null.");else url_ += "first=" + encodeURIComponent("" + first) + "&";
      if (sortBy === undefined || sortBy === null) throw new Error("The parameter 'sortBy' must be defined and cannot be null.");else url_ += "sortBy=" + encodeURIComponent("" + sortBy) + "&";
      if (before === null) throw new Error("The parameter 'before' cannot be null.");else if (before !== undefined) url_ += "before=" + encodeURIComponent("" + before) + "&";
      if (after === null) throw new Error("The parameter 'after' cannot be null.");else if (after !== undefined) url_ += "after=" + encodeURIComponent("" + after) + "&";
      url_ = url_.replace(/[?&]$/, "");
      var options_ = {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this81.processFindShops(_response);
      });
    }
  }, {
    key: "processFindShops",
    value: function processFindShops(response) {
      var _this82 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this82.jsonParseReviver);
          return result200;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Find news by id
     * @param newsId newsId
     * @return successful operation
     */

  }, {
    key: "findNewsById",
    value: function findNewsById(newsId) {
      var _this83 = this;

      var url_ = this.baseUrl + "/news/{newsId}";
      if (newsId === undefined || newsId === null) throw new Error("The parameter 'newsId' must be defined.");
      url_ = url_.replace("{newsId}", encodeURIComponent("" + newsId));
      url_ = url_.replace(/[?&]$/, "");
      var options_ = {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this83.processFindNewsById(_response);
      });
    }
  }, {
    key: "processFindNewsById",
    value: function processFindNewsById(response) {
      var _this84 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this84.jsonParseReviver);
          return result200;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Update news
     * @param newsId newsId
     * @param body (optional) 
     * @return successful operation
     */

  }, {
    key: "updateNews",
    value: function updateNews(newsId, body) {
      var _this85 = this;

      var url_ = this.baseUrl + "/news/{newsId}";
      if (newsId === undefined || newsId === null) throw new Error("The parameter 'newsId' must be defined.");
      url_ = url_.replace("{newsId}", encodeURIComponent("" + newsId));
      url_ = url_.replace(/[?&]$/, "");
      var content_ = JSON.stringify(body);
      var options_ = {
        body: content_,
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this85.processUpdateNews(_response);
      });
    }
  }, {
    key: "processUpdateNews",
    value: function processUpdateNews(response) {
      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          return;
        });
      } else if (status === 201) {
        return response.text().then(function (_responseText) {
          return;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Find news statistics for admin
     * @param startDate startDate
     * @param endDate endDate
     * @return successful operation
     */

  }, {
    key: "findNewsStatisticsInfo",
    value: function findNewsStatisticsInfo(startDate, endDate) {
      var _this86 = this;

      var url_ = this.baseUrl + "/news/statistics/info?";
      if (startDate === undefined || startDate === null) throw new Error("The parameter 'startDate' must be defined and cannot be null.");else url_ += "startDate=" + encodeURIComponent("" + startDate) + "&";
      if (endDate === undefined || endDate === null) throw new Error("The parameter 'endDate' must be defined and cannot be null.");else url_ += "endDate=" + encodeURIComponent("" + endDate) + "&";
      url_ = url_.replace(/[?&]$/, "");
      var options_ = {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this86.processFindNewsStatisticsInfo(_response);
      });
    }
  }, {
    key: "processFindNewsStatisticsInfo",
    value: function processFindNewsStatisticsInfo(response) {
      var _this87 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this87.jsonParseReviver);
          return result200;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Find news by owner
     * @param ownerId ownerId
     * @param status news status
     * @param first number of records returned
     * @param sortBy sort field
     * @param before (optional) before token
     * @param after (optional) after token
     * @return successful operation
     */

  }, {
    key: "findNewsByOwner",
    value: function findNewsByOwner(ownerId, status, first, sortBy, before, after) {
      var _this88 = this;

      var url_ = this.baseUrl + "/news/get-by-owner/{ownerId}?";
      if (ownerId === undefined || ownerId === null) throw new Error("The parameter 'ownerId' must be defined.");
      url_ = url_.replace("{ownerId}", encodeURIComponent("" + ownerId));
      if (status === undefined || status === null) throw new Error("The parameter 'status' must be defined and cannot be null.");else url_ += "status=" + encodeURIComponent("" + status) + "&";
      if (first === undefined || first === null) throw new Error("The parameter 'first' must be defined and cannot be null.");else url_ += "first=" + encodeURIComponent("" + first) + "&";
      if (sortBy === undefined || sortBy === null) throw new Error("The parameter 'sortBy' must be defined and cannot be null.");else url_ += "sortBy=" + encodeURIComponent("" + sortBy) + "&";
      if (before === null) throw new Error("The parameter 'before' cannot be null.");else if (before !== undefined) url_ += "before=" + encodeURIComponent("" + before) + "&";
      if (after === null) throw new Error("The parameter 'after' cannot be null.");else if (after !== undefined) url_ += "after=" + encodeURIComponent("" + after) + "&";
      url_ = url_.replace(/[?&]$/, "");
      var options_ = {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this88.processFindNewsByOwner(_response);
      });
    }
  }, {
    key: "processFindNewsByOwner",
    value: function processFindNewsByOwner(response) {
      var _this89 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this89.jsonParseReviver);
          return result200;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Find news
     * @param keyword (optional) search keyword
     * @param state (optional) product state (old/new)
     * @param priceType (optional) price type (fixed/negociate)
     * @param minPrice (optional) min price
     * @param maxPrice (optional) max price
     * @param newsType (optional) news type (sell/buy/...)
     * @param owner (optional) news owner id
     * @param shop (optional) shop id
     * @param location (optional) location (only by city)
     * @param type (optional) product type (may ui/may xuc/may dao)
     * @param brand (optional) product's brand
     * @param model (optional) product model
     * @param first number of records returned
     * @param sortBy sort field
     * @param before (optional) before token
     * @param after (optional) after token
     * @return successful operation
     */

  }, {
    key: "findNews",
    value: function findNews(keyword, state, priceType, minPrice, maxPrice, newsType, owner, shop, location, type, brand, model, first, sortBy, before, after) {
      var _this90 = this;

      var url_ = this.baseUrl + "/news?";
      if (keyword === null) throw new Error("The parameter 'keyword' cannot be null.");else if (keyword !== undefined) url_ += "keyword=" + encodeURIComponent("" + keyword) + "&";
      if (state === null) throw new Error("The parameter 'state' cannot be null.");else if (state !== undefined) url_ += "state=" + encodeURIComponent("" + state) + "&";
      if (priceType === null) throw new Error("The parameter 'priceType' cannot be null.");else if (priceType !== undefined) url_ += "priceType=" + encodeURIComponent("" + priceType) + "&";
      if (minPrice === null) throw new Error("The parameter 'minPrice' cannot be null.");else if (minPrice !== undefined) url_ += "minPrice=" + encodeURIComponent("" + minPrice) + "&";
      if (maxPrice === null) throw new Error("The parameter 'maxPrice' cannot be null.");else if (maxPrice !== undefined) url_ += "maxPrice=" + encodeURIComponent("" + maxPrice) + "&";
      if (newsType === null) throw new Error("The parameter 'newsType' cannot be null.");else if (newsType !== undefined) url_ += "newsType=" + encodeURIComponent("" + newsType) + "&";
      if (owner === null) throw new Error("The parameter 'owner' cannot be null.");else if (owner !== undefined) url_ += "owner=" + encodeURIComponent("" + owner) + "&";
      if (shop === null) throw new Error("The parameter 'shop' cannot be null.");else if (shop !== undefined) url_ += "shop=" + encodeURIComponent("" + shop) + "&";
      if (location === null) throw new Error("The parameter 'location' cannot be null.");else if (location !== undefined) url_ += "location=" + encodeURIComponent("" + location) + "&";
      if (type === null) throw new Error("The parameter 'type' cannot be null.");else if (type !== undefined) url_ += "type=" + encodeURIComponent("" + type) + "&";
      if (brand === null) throw new Error("The parameter 'brand' cannot be null.");else if (brand !== undefined) url_ += "brand=" + encodeURIComponent("" + brand) + "&";
      if (model === null) throw new Error("The parameter 'model' cannot be null.");else if (model !== undefined) url_ += "model=" + encodeURIComponent("" + model) + "&";
      if (first === undefined || first === null) throw new Error("The parameter 'first' must be defined and cannot be null.");else url_ += "first=" + encodeURIComponent("" + first) + "&";
      if (sortBy === undefined || sortBy === null) throw new Error("The parameter 'sortBy' must be defined and cannot be null.");else url_ += "sortBy=" + encodeURIComponent("" + sortBy) + "&";
      if (before === null) throw new Error("The parameter 'before' cannot be null.");else if (before !== undefined) url_ += "before=" + encodeURIComponent("" + before) + "&";
      if (after === null) throw new Error("The parameter 'after' cannot be null.");else if (after !== undefined) url_ += "after=" + encodeURIComponent("" + after) + "&";
      url_ = url_.replace(/[?&]$/, "");
      var options_ = {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this90.processFindNews(_response);
      });
    }
  }, {
    key: "processFindNews",
    value: function processFindNews(response) {
      var _this91 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this91.jsonParseReviver);
          return result200;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Create news
     * @param body (optional) 
     * @return successful operation
     */

  }, {
    key: "createNews",
    value: function createNews(body) {
      var _this92 = this;

      var url_ = this.baseUrl + "/news";
      url_ = url_.replace(/[?&]$/, "");
      var content_ = JSON.stringify(body);
      var options_ = {
        body: content_,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this92.processCreateNews(_response);
      });
    }
  }, {
    key: "processCreateNews",
    value: function processCreateNews(response) {
      var _this93 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this93.jsonParseReviver);
          return result200;
        });
      } else if (status === 201) {
        return response.text().then(function (_responseText) {
          var result201 = null;
          result201 = _responseText === "" ? null : JSON.parse(_responseText, _this93.jsonParseReviver);
          return result201;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Find brands
     * @param search (optional) search query to filter brands
     * @param first search query to filter brands
     * @param sortBy search query to filter brands
     * @param before (optional) before token
     * @param after (optional) after token
     * @return successful operation
     */

  }, {
    key: "findBrands",
    value: function findBrands(search, first, sortBy, before, after) {
      var _this94 = this;

      var url_ = this.baseUrl + "/brands?";
      if (search === null) throw new Error("The parameter 'search' cannot be null.");else if (search !== undefined) url_ += "search=" + encodeURIComponent("" + search) + "&";
      if (first === undefined || first === null) throw new Error("The parameter 'first' must be defined and cannot be null.");else url_ += "first=" + encodeURIComponent("" + first) + "&";
      if (sortBy === undefined || sortBy === null) throw new Error("The parameter 'sortBy' must be defined and cannot be null.");else url_ += "sortBy=" + encodeURIComponent("" + sortBy) + "&";
      if (before === null) throw new Error("The parameter 'before' cannot be null.");else if (before !== undefined) url_ += "before=" + encodeURIComponent("" + before) + "&";
      if (after === null) throw new Error("The parameter 'after' cannot be null.");else if (after !== undefined) url_ += "after=" + encodeURIComponent("" + after) + "&";
      url_ = url_.replace(/[?&]$/, "");
      var options_ = {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this94.processFindBrands(_response);
      });
    }
  }, {
    key: "processFindBrands",
    value: function processFindBrands(response) {
      var _this95 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this95.jsonParseReviver);
          return result200;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Create brand
     * @param body (optional) 
     * @return successful operation
     */

  }, {
    key: "createBrand",
    value: function createBrand(body) {
      var _this96 = this;

      var url_ = this.baseUrl + "/brands";
      url_ = url_.replace(/[?&]$/, "");
      var content_ = JSON.stringify(body);
      var options_ = {
        body: content_,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this96.processCreateBrand(_response);
      });
    }
  }, {
    key: "processCreateBrand",
    value: function processCreateBrand(response) {
      var _this97 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this97.jsonParseReviver);
          return result200;
        });
      } else if (status === 201) {
        return response.text().then(function (_responseText) {
          var result201 = null;
          result201 = _responseText === "" ? null : JSON.parse(_responseText, _this97.jsonParseReviver);
          return result201;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Find brands list
     * @return successful operation
     */

  }, {
    key: "findBrandList",
    value: function findBrandList() {
      var _this98 = this;

      var url_ = this.baseUrl + "/brands/customs/find-brand-list";
      url_ = url_.replace(/[?&]$/, "");
      var options_ = {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this98.processFindBrandList(_response);
      });
    }
  }, {
    key: "processFindBrandList",
    value: function processFindBrandList(response) {
      var _this99 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this99.jsonParseReviver);
          return result200;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Find brand detail by slug
     * @param brandSlug brandSlug
     * @return successful operation
     */

  }, {
    key: "findBrandDetail",
    value: function findBrandDetail(brandSlug) {
      var _this100 = this;

      var url_ = this.baseUrl + "/brands/customs/find-brand-detail/{brandSlug}";
      if (brandSlug === undefined || brandSlug === null) throw new Error("The parameter 'brandSlug' must be defined.");
      url_ = url_.replace("{brandSlug}", encodeURIComponent("" + brandSlug));
      url_ = url_.replace(/[?&]$/, "");
      var options_ = {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this100.processFindBrandDetail(_response);
      });
    }
  }, {
    key: "processFindBrandDetail",
    value: function processFindBrandDetail(response) {
      var _this101 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this101.jsonParseReviver);
          return result200;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Find top brands
     * @return successful operation
     */

  }, {
    key: "findTopBrands",
    value: function findTopBrands() {
      var _this102 = this;

      var url_ = this.baseUrl + "/brands/customs/find-top-brands";
      url_ = url_.replace(/[?&]$/, "");
      var options_ = {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this102.processFindTopBrands(_response);
      });
    }
  }, {
    key: "processFindTopBrands",
    value: function processFindTopBrands(response) {
      var _this103 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this103.jsonParseReviver);
          return result200;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Find brand by id
     * @param brandId brandId
     * @return successful operation
     */

  }, {
    key: "findBrandById",
    value: function findBrandById(brandId) {
      var _this104 = this;

      var url_ = this.baseUrl + "/brands/{brandId}";
      if (brandId === undefined || brandId === null) throw new Error("The parameter 'brandId' must be defined.");
      url_ = url_.replace("{brandId}", encodeURIComponent("" + brandId));
      url_ = url_.replace(/[?&]$/, "");
      var options_ = {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this104.processFindBrandById(_response);
      });
    }
  }, {
    key: "processFindBrandById",
    value: function processFindBrandById(response) {
      var _this105 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this105.jsonParseReviver);
          return result200;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Update brand
     * @param brandId brandId
     * @param body (optional) 
     * @return successful operation
     */

  }, {
    key: "updateBrand",
    value: function updateBrand(brandId, body) {
      var _this106 = this;

      var url_ = this.baseUrl + "/brands/{brandId}";
      if (brandId === undefined || brandId === null) throw new Error("The parameter 'brandId' must be defined.");
      url_ = url_.replace("{brandId}", encodeURIComponent("" + brandId));
      url_ = url_.replace(/[?&]$/, "");
      var content_ = JSON.stringify(body);
      var options_ = {
        body: content_,
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this106.processUpdateBrand(_response);
      });
    }
  }, {
    key: "processUpdateBrand",
    value: function processUpdateBrand(response) {
      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          return;
        });
      } else if (status === 201) {
        return response.text().then(function (_responseText) {
          return;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Find categories
     * @return successful operation
     */

  }, {
    key: "findCategories",
    value: function findCategories() {
      var _this107 = this;

      var url_ = this.baseUrl + "/categories";
      url_ = url_.replace(/[?&]$/, "");
      var options_ = {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this107.processFindCategories(_response);
      });
    }
  }, {
    key: "processFindCategories",
    value: function processFindCategories(response) {
      var _this108 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this108.jsonParseReviver);
          return result200;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Create category
     * @param body (optional) 
     * @return successful operation
     */

  }, {
    key: "createCategory",
    value: function createCategory(body) {
      var _this109 = this;

      var url_ = this.baseUrl + "/categories";
      url_ = url_.replace(/[?&]$/, "");
      var content_ = JSON.stringify(body);
      var options_ = {
        body: content_,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this109.processCreateCategory(_response);
      });
    }
  }, {
    key: "processCreateCategory",
    value: function processCreateCategory(response) {
      var _this110 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this110.jsonParseReviver);
          return result200;
        });
      } else if (status === 201) {
        return response.text().then(function (_responseText) {
          var result201 = null;
          result201 = _responseText === "" ? null : JSON.parse(_responseText, _this110.jsonParseReviver);
          return result201;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Find category detail by slug
     * @param categorySlug categorySlug
     * @return successful operation
     */

  }, {
    key: "findCategoryDetail",
    value: function findCategoryDetail(categorySlug) {
      var _this111 = this;

      var url_ = this.baseUrl + "/categories/customs/find-category-detail/{categorySlug}";
      if (categorySlug === undefined || categorySlug === null) throw new Error("The parameter 'categorySlug' must be defined.");
      url_ = url_.replace("{categorySlug}", encodeURIComponent("" + categorySlug));
      url_ = url_.replace(/[?&]$/, "");
      var options_ = {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this111.processFindCategoryDetail(_response);
      });
    }
  }, {
    key: "processFindCategoryDetail",
    value: function processFindCategoryDetail(response) {
      var _this112 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this112.jsonParseReviver);
          return result200;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Find category by id
     * @param categoryId categoryId
     * @return successful operation
     */

  }, {
    key: "findCategoryById",
    value: function findCategoryById(categoryId) {
      var _this113 = this;

      var url_ = this.baseUrl + "/categories/{categoryId}";
      if (categoryId === undefined || categoryId === null) throw new Error("The parameter 'categoryId' must be defined.");
      url_ = url_.replace("{categoryId}", encodeURIComponent("" + categoryId));
      url_ = url_.replace(/[?&]$/, "");
      var options_ = {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this113.processFindCategoryById(_response);
      });
    }
  }, {
    key: "processFindCategoryById",
    value: function processFindCategoryById(response) {
      var _this114 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this114.jsonParseReviver);
          return result200;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Update category
     * @param categoryId categoryId
     * @param body (optional) 
     * @return successful operation
     */

  }, {
    key: "updateCategory",
    value: function updateCategory(categoryId, body) {
      var _this115 = this;

      var url_ = this.baseUrl + "/categories/{categoryId}";
      if (categoryId === undefined || categoryId === null) throw new Error("The parameter 'categoryId' must be defined.");
      url_ = url_.replace("{categoryId}", encodeURIComponent("" + categoryId));
      url_ = url_.replace(/[?&]$/, "");
      var content_ = JSON.stringify(body);
      var options_ = {
        body: content_,
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this115.processUpdateCategory(_response);
      });
    }
  }, {
    key: "processUpdateCategory",
    value: function processUpdateCategory(response) {
      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          return;
        });
      } else if (status === 201) {
        return response.text().then(function (_responseText) {
          return;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Find models
     * @param search (optional) search string
     * @param brand (optional) brand
     * @param category (optional) category
     * @param first search query to filter brands
     * @param sortBy search query to filter brands
     * @param before (optional) before token
     * @param after (optional) after token
     * @return successful operation
     */

  }, {
    key: "findModels",
    value: function findModels(search, brand, category, first, sortBy, before, after) {
      var _this116 = this;

      var url_ = this.baseUrl + "/models?";
      if (search === null) throw new Error("The parameter 'search' cannot be null.");else if (search !== undefined) url_ += "search=" + encodeURIComponent("" + search) + "&";
      if (brand === null) throw new Error("The parameter 'brand' cannot be null.");else if (brand !== undefined) url_ += "brand=" + encodeURIComponent("" + brand) + "&";
      if (category === null) throw new Error("The parameter 'category' cannot be null.");else if (category !== undefined) url_ += "category=" + encodeURIComponent("" + category) + "&";
      if (first === undefined || first === null) throw new Error("The parameter 'first' must be defined and cannot be null.");else url_ += "first=" + encodeURIComponent("" + first) + "&";
      if (sortBy === undefined || sortBy === null) throw new Error("The parameter 'sortBy' must be defined and cannot be null.");else url_ += "sortBy=" + encodeURIComponent("" + sortBy) + "&";
      if (before === null) throw new Error("The parameter 'before' cannot be null.");else if (before !== undefined) url_ += "before=" + encodeURIComponent("" + before) + "&";
      if (after === null) throw new Error("The parameter 'after' cannot be null.");else if (after !== undefined) url_ += "after=" + encodeURIComponent("" + after) + "&";
      url_ = url_.replace(/[?&]$/, "");
      var options_ = {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this116.processFindModels(_response);
      });
    }
  }, {
    key: "processFindModels",
    value: function processFindModels(response) {
      var _this117 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this117.jsonParseReviver);
          return result200;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Create model
     * @param body (optional) 
     * @return successful operation
     */

  }, {
    key: "createModel",
    value: function createModel(body) {
      var _this118 = this;

      var url_ = this.baseUrl + "/models";
      url_ = url_.replace(/[?&]$/, "");
      var content_ = JSON.stringify(body);
      var options_ = {
        body: content_,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this118.processCreateModel(_response);
      });
    }
  }, {
    key: "processCreateModel",
    value: function processCreateModel(response) {
      var _this119 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this119.jsonParseReviver);
          return result200;
        });
      } else if (status === 201) {
        return response.text().then(function (_responseText) {
          var result201 = null;
          result201 = _responseText === "" ? null : JSON.parse(_responseText, _this119.jsonParseReviver);
          return result201;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Find model by id
     * @param modelId modelId
     * @return successful operation
     */

  }, {
    key: "findModelById",
    value: function findModelById(modelId) {
      var _this120 = this;

      var url_ = this.baseUrl + "/models/{modelId}";
      if (modelId === undefined || modelId === null) throw new Error("The parameter 'modelId' must be defined.");
      url_ = url_.replace("{modelId}", encodeURIComponent("" + modelId));
      url_ = url_.replace(/[?&]$/, "");
      var options_ = {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this120.processFindModelById(_response);
      });
    }
  }, {
    key: "processFindModelById",
    value: function processFindModelById(response) {
      var _this121 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this121.jsonParseReviver);
          return result200;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Update model
     * @param modelId modelId
     * @param body (optional) 
     * @return successful operation
     */

  }, {
    key: "updateModel",
    value: function updateModel(modelId, body) {
      var _this122 = this;

      var url_ = this.baseUrl + "/models/{modelId}";
      if (modelId === undefined || modelId === null) throw new Error("The parameter 'modelId' must be defined.");
      url_ = url_.replace("{modelId}", encodeURIComponent("" + modelId));
      url_ = url_.replace(/[?&]$/, "");
      var content_ = JSON.stringify(body);
      var options_ = {
        body: content_,
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this122.processUpdateModel(_response);
      });
    }
  }, {
    key: "processUpdateModel",
    value: function processUpdateModel(response) {
      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          return;
        });
      } else if (status === 201) {
        return response.text().then(function (_responseText) {
          return;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Find provinces
     * @return successful operation
     */

  }, {
    key: "findProvinces",
    value: function findProvinces() {
      var _this123 = this;

      var url_ = this.baseUrl + "/provinces";
      url_ = url_.replace(/[?&]$/, "");
      var options_ = {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this123.processFindProvinces(_response);
      });
    }
  }, {
    key: "processFindProvinces",
    value: function processFindProvinces(response) {
      var _this124 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this124.jsonParseReviver);
          return result200;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Create province
     * @param body (optional) 
     * @return successful operation
     */

  }, {
    key: "createProvince",
    value: function createProvince(body) {
      var _this125 = this;

      var url_ = this.baseUrl + "/provinces";
      url_ = url_.replace(/[?&]$/, "");
      var content_ = JSON.stringify(body);
      var options_ = {
        body: content_,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this125.processCreateProvince(_response);
      });
    }
  }, {
    key: "processCreateProvince",
    value: function processCreateProvince(response) {
      var _this126 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this126.jsonParseReviver);
          return result200;
        });
      } else if (status === 201) {
        return response.text().then(function (_responseText) {
          var result201 = null;
          result201 = _responseText === "" ? null : JSON.parse(_responseText, _this126.jsonParseReviver);
          return result201;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Find province by id
     * @param provinceId provinceId
     * @return successful operation
     */

  }, {
    key: "findProvinceById",
    value: function findProvinceById(provinceId) {
      var _this127 = this;

      var url_ = this.baseUrl + "/provinces/{provinceId}";
      if (provinceId === undefined || provinceId === null) throw new Error("The parameter 'provinceId' must be defined.");
      url_ = url_.replace("{provinceId}", encodeURIComponent("" + provinceId));
      url_ = url_.replace(/[?&]$/, "");
      var options_ = {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this127.processFindProvinceById(_response);
      });
    }
  }, {
    key: "processFindProvinceById",
    value: function processFindProvinceById(response) {
      var _this128 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this128.jsonParseReviver);
          return result200;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Update province
     * @param province provinceId
     * @param body (optional) 
     * @return successful operation
     */

  }, {
    key: "updateProvince",
    value: function updateProvince(province, body) {
      var _this129 = this;

      var url_ = this.baseUrl + "/provinces/{provinceId}";
      if (province === undefined || province === null) throw new Error("The parameter 'province' must be defined.");
      url_ = url_.replace("{province}", encodeURIComponent("" + province));
      url_ = url_.replace(/[?&]$/, "");
      var content_ = JSON.stringify(body);
      var options_ = {
        body: content_,
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this129.processUpdateProvince(_response);
      });
    }
  }, {
    key: "processUpdateProvince",
    value: function processUpdateProvince(response) {
      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          return;
        });
      } else if (status === 201) {
        return response.text().then(function (_responseText) {
          return;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Search by elasticsearch
     * @param keyword (optional) search keyword
     * @param state (optional) product state (old/new)
     * @param priceType (optional) price type (fixed/negociate)
     * @param minPrice (optional) min price
     * @param maxPrice (optional) max price
     * @param weightRange (optional) weight range
     * @param otherNewsType (optional) news type (sell/buy/...)
     * @param newsType (optional) news type (sell/buy/...)
     * @param categoryId (optional) categoryID
     * @param owner (optional) news owner id
     * @param shop (optional) shop id
     * @param location (optional) location (only by city)
     * @param type (optional) product type (may ui/may xuc/may dao)
     * @param brand (optional) product's brand
     * @param model (optional) product model
     * @param first number of records returned
     * @param sortBy sort field
     * @param before (optional) before token
     * @param after (optional) after token
     * @return successful operation
     */

  }, {
    key: "searchElasticsearch",
    value: function searchElasticsearch(keyword, state, priceType, minPrice, maxPrice, weightRange, otherNewsType, newsType, categoryId, owner, shop, location, type, brand, model, first, sortBy, before, after) {
      var _this130 = this;

      var url_ = this.baseUrl + "/search?";
      if (keyword === null) throw new Error("The parameter 'keyword' cannot be null.");else if (keyword !== undefined) url_ += "keyword=" + encodeURIComponent("" + keyword) + "&";
      if (state === null) throw new Error("The parameter 'state' cannot be null.");else if (state !== undefined) url_ += "state=" + encodeURIComponent("" + state) + "&";
      if (priceType === null) throw new Error("The parameter 'priceType' cannot be null.");else if (priceType !== undefined) url_ += "priceType=" + encodeURIComponent("" + priceType) + "&";
      if (minPrice === null) throw new Error("The parameter 'minPrice' cannot be null.");else if (minPrice !== undefined) url_ += "minPrice=" + encodeURIComponent("" + minPrice) + "&";
      if (maxPrice === null) throw new Error("The parameter 'maxPrice' cannot be null.");else if (maxPrice !== undefined) url_ += "maxPrice=" + encodeURIComponent("" + maxPrice) + "&";
      if (weightRange === null) throw new Error("The parameter 'weightRange' cannot be null.");else if (weightRange !== undefined) url_ += "weightRange=" + encodeURIComponent("" + weightRange) + "&";
      if (otherNewsType === null) throw new Error("The parameter 'otherNewsType' cannot be null.");else if (otherNewsType !== undefined) url_ += "otherNewsType=" + encodeURIComponent("" + otherNewsType) + "&";
      if (newsType === null) throw new Error("The parameter 'newsType' cannot be null.");else if (newsType !== undefined) url_ += "newsType=" + encodeURIComponent("" + newsType) + "&";
      if (categoryId === null) throw new Error("The parameter 'categoryId' cannot be null.");else if (categoryId !== undefined) url_ += "categoryId=" + encodeURIComponent("" + categoryId) + "&";
      if (owner === null) throw new Error("The parameter 'owner' cannot be null.");else if (owner !== undefined) url_ += "owner=" + encodeURIComponent("" + owner) + "&";
      if (shop === null) throw new Error("The parameter 'shop' cannot be null.");else if (shop !== undefined) url_ += "shop=" + encodeURIComponent("" + shop) + "&";
      if (location === null) throw new Error("The parameter 'location' cannot be null.");else if (location !== undefined) url_ += "location=" + encodeURIComponent("" + location) + "&";
      if (type === null) throw new Error("The parameter 'type' cannot be null.");else if (type !== undefined) url_ += "type=" + encodeURIComponent("" + type) + "&";
      if (brand === null) throw new Error("The parameter 'brand' cannot be null.");else if (brand !== undefined) url_ += "brand=" + encodeURIComponent("" + brand) + "&";
      if (model === null) throw new Error("The parameter 'model' cannot be null.");else if (model !== undefined) url_ += "model=" + encodeURIComponent("" + model) + "&";
      if (first === undefined || first === null) throw new Error("The parameter 'first' must be defined and cannot be null.");else url_ += "first=" + encodeURIComponent("" + first) + "&";
      if (sortBy === undefined || sortBy === null) throw new Error("The parameter 'sortBy' must be defined and cannot be null.");else url_ += "sortBy=" + encodeURIComponent("" + sortBy) + "&";
      if (before === null) throw new Error("The parameter 'before' cannot be null.");else if (before !== undefined) url_ += "before=" + encodeURIComponent("" + before) + "&";
      if (after === null) throw new Error("The parameter 'after' cannot be null.");else if (after !== undefined) url_ += "after=" + encodeURIComponent("" + after) + "&";
      url_ = url_.replace(/[?&]$/, "");
      var options_ = {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this130.processSearchElasticsearch(_response);
      });
    }
  }, {
    key: "processSearchElasticsearch",
    value: function processSearchElasticsearch(response) {
      var _this131 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this131.jsonParseReviver);
          return result200;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Follow
     * @param id newsId
     * @param body (optional) 
     * @return successful operation
     */

  }, {
    key: "follow",
    value: function follow(id, body) {
      var _this132 = this;

      var url_ = this.baseUrl + "/follows/{id}";
      if (id === undefined || id === null) throw new Error("The parameter 'id' must be defined.");
      url_ = url_.replace("{id}", encodeURIComponent("" + id));
      url_ = url_.replace(/[?&]$/, "");
      var content_ = JSON.stringify(body);
      var options_ = {
        body: content_,
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this132.processFollow(_response);
      });
    }
  }, {
    key: "processFollow",
    value: function processFollow(response) {
      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          return;
        });
      } else if (status === 201) {
        return response.text().then(function (_responseText) {
          return;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Find follow by user/news
     * @param id id
     * @param type type
     * @param newsType (optional) type
     * @param first first
     * @param sortBy sortBy
     * @param before (optional) before
     * @param after (optional) after
     * @return successful operation
     */

  }, {
    key: "findFollow",
    value: function findFollow(id, type, newsType, first, sortBy, before, after) {
      var _this133 = this;

      var url_ = this.baseUrl + "/follows?";
      if (id === undefined || id === null) throw new Error("The parameter 'id' must be defined and cannot be null.");else url_ += "id=" + encodeURIComponent("" + id) + "&";
      if (type === undefined || type === null) throw new Error("The parameter 'type' must be defined and cannot be null.");else url_ += "type=" + encodeURIComponent("" + type) + "&";
      if (newsType === null) throw new Error("The parameter 'newsType' cannot be null.");else if (newsType !== undefined) url_ += "newsType=" + encodeURIComponent("" + newsType) + "&";
      if (first === undefined || first === null) throw new Error("The parameter 'first' must be defined and cannot be null.");else url_ += "first=" + encodeURIComponent("" + first) + "&";
      if (sortBy === undefined || sortBy === null) throw new Error("The parameter 'sortBy' must be defined and cannot be null.");else url_ += "sortBy=" + encodeURIComponent("" + sortBy) + "&";
      if (before === null) throw new Error("The parameter 'before' cannot be null.");else if (before !== undefined) url_ += "before=" + encodeURIComponent("" + before) + "&";
      if (after === null) throw new Error("The parameter 'after' cannot be null.");else if (after !== undefined) url_ += "after=" + encodeURIComponent("" + after) + "&";
      url_ = url_.replace(/[?&]$/, "");
      var options_ = {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this133.processFindFollow(_response);
      });
    }
  }, {
    key: "processFindFollow",
    value: function processFindFollow(response) {
      var _this134 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this134.jsonParseReviver);
          return result200;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
  }]);

  return ServiceProxy;
}();
var State;

(function (State) {
  State["PENDING"] = "PENDING";
  State["RESOLVED"] = "RESOLVED";
})(State || (State = {}));

var Reason;

(function (Reason) {
  Reason["WRONG_INFO"] = "WRONG_INFO";
  Reason["SOLD"] = "SOLD";
  Reason["VIOLATE"] = "VIOLATE";
})(Reason || (Reason = {}));

var ActivateRolePayloadOperation;

(function (ActivateRolePayloadOperation) {
  ActivateRolePayloadOperation["Activate"] = "activate";
})(ActivateRolePayloadOperation || (ActivateRolePayloadOperation = {}));

var DeactivateRolePayloadOperation;

(function (DeactivateRolePayloadOperation) {
  DeactivateRolePayloadOperation["Deactivate"] = "deactivate";
})(DeactivateRolePayloadOperation || (DeactivateRolePayloadOperation = {}));

var UpdateRolePayloadOperation;

(function (UpdateRolePayloadOperation) {
  UpdateRolePayloadOperation["UpdateDetail"] = "updateDetail";
})(UpdateRolePayloadOperation || (UpdateRolePayloadOperation = {}));

var FacebookLoginProvider;

(function (FacebookLoginProvider) {
  FacebookLoginProvider["Facebook"] = "facebook";
})(FacebookLoginProvider || (FacebookLoginProvider = {}));

var GoogleLoginProvider;

(function (GoogleLoginProvider) {
  GoogleLoginProvider["Google"] = "google";
})(GoogleLoginProvider || (GoogleLoginProvider = {}));

var PhoneLoginProvider;

(function (PhoneLoginProvider) {
  PhoneLoginProvider["Phone"] = "phone";
})(PhoneLoginProvider || (PhoneLoginProvider = {}));

var EmailLoginProvider;

(function (EmailLoginProvider) {
  EmailLoginProvider["Email"] = "email";
})(EmailLoginProvider || (EmailLoginProvider = {}));

var UpdateUserPayloadOperation;

(function (UpdateUserPayloadOperation) {
  UpdateUserPayloadOperation["UpdateDetail"] = "updateDetail";
})(UpdateUserPayloadOperation || (UpdateUserPayloadOperation = {}));

var UpdateProfilePayloadOperation;

(function (UpdateProfilePayloadOperation) {
  UpdateProfilePayloadOperation["UpdateDetail"] = "updateDetail";
})(UpdateProfilePayloadOperation || (UpdateProfilePayloadOperation = {}));

var ActivateUserPayloadOperation;

(function (ActivateUserPayloadOperation) {
  ActivateUserPayloadOperation["Activate"] = "activate";
})(ActivateUserPayloadOperation || (ActivateUserPayloadOperation = {}));

var DeactivateUserPayloadOperation;

(function (DeactivateUserPayloadOperation) {
  DeactivateUserPayloadOperation["Deactivate"] = "deactivate";
})(DeactivateUserPayloadOperation || (DeactivateUserPayloadOperation = {}));

var UpdateAvatarPayloadOperation;

(function (UpdateAvatarPayloadOperation) {
  UpdateAvatarPayloadOperation["UpdateAvatar"] = "updateAvatar";
})(UpdateAvatarPayloadOperation || (UpdateAvatarPayloadOperation = {}));

var UpdateAdsensePayloadOperation;

(function (UpdateAdsensePayloadOperation) {
  UpdateAdsensePayloadOperation["UpdateDetail"] = "updateDetail";
})(UpdateAdsensePayloadOperation || (UpdateAdsensePayloadOperation = {}));

var UpdateFeatureBrandPayloadOperation;

(function (UpdateFeatureBrandPayloadOperation) {
  UpdateFeatureBrandPayloadOperation["UpdateDetail"] = "updateDetail";
})(UpdateFeatureBrandPayloadOperation || (UpdateFeatureBrandPayloadOperation = {}));

var UpdateRentalPeriodPayloadOperation;

(function (UpdateRentalPeriodPayloadOperation) {
  UpdateRentalPeriodPayloadOperation["UpdateDetail"] = "updateDetail";
})(UpdateRentalPeriodPayloadOperation || (UpdateRentalPeriodPayloadOperation = {}));

var UpdateWeightRangePayloadOperation;

(function (UpdateWeightRangePayloadOperation) {
  UpdateWeightRangePayloadOperation["UpdateDetail"] = "updateDetail";
})(UpdateWeightRangePayloadOperation || (UpdateWeightRangePayloadOperation = {}));

var ReadNotificationPayloadOperation;

(function (ReadNotificationPayloadOperation) {
  ReadNotificationPayloadOperation["ReadNotification"] = "readNotification";
})(ReadNotificationPayloadOperation || (ReadNotificationPayloadOperation = {}));

var ReadAllNotificationsPayloadOperation;

(function (ReadAllNotificationsPayloadOperation) {
  ReadAllNotificationsPayloadOperation["ReadAllNotifications"] = "readAllNotifications";
})(ReadAllNotificationsPayloadOperation || (ReadAllNotificationsPayloadOperation = {}));

var NotificationState;

(function (NotificationState) {
  NotificationState["READ"] = "READ";
  NotificationState["UNREAD"] = "UNREAD";
})(NotificationState || (NotificationState = {}));

var NotificationType;

(function (NotificationType) {
  NotificationType["FOLLOW_USER"] = "FOLLOW_USER";
  NotificationType["FOLLOW_SHOP"] = "FOLLOW_SHOP";
  NotificationType["CREATE_NEWS"] = "CREATE_NEWS";
})(NotificationType || (NotificationType = {}));

var UpdateReportPayloadOperation;

(function (UpdateReportPayloadOperation) {
  UpdateReportPayloadOperation["ResolveReport"] = "resolveReport";
})(UpdateReportPayloadOperation || (UpdateReportPayloadOperation = {}));

var ReportState;

(function (ReportState) {
  ReportState["PENDING"] = "PENDING";
  ReportState["RESOLVED"] = "RESOLVED";
})(ReportState || (ReportState = {}));

var ReportResolvedResult;

(function (ReportResolvedResult) {
  ReportResolvedResult["SKIP"] = "SKIP";
  ReportResolvedResult["DELETE"] = "DELETE";
})(ReportResolvedResult || (ReportResolvedResult = {}));

var CreateReportPayloadReason;

(function (CreateReportPayloadReason) {
  CreateReportPayloadReason["WRONG_INFO"] = "WRONG_INFO";
  CreateReportPayloadReason["SOLD"] = "SOLD";
  CreateReportPayloadReason["VIOLATE"] = "VIOLATE";
})(CreateReportPayloadReason || (CreateReportPayloadReason = {}));

var UpdateIntroImagesShopPayloadOperation;

(function (UpdateIntroImagesShopPayloadOperation) {
  UpdateIntroImagesShopPayloadOperation["UpdateCover"] = "updateCover";
})(UpdateIntroImagesShopPayloadOperation || (UpdateIntroImagesShopPayloadOperation = {}));

var UpdateLogoImageShopPayloadOperation;

(function (UpdateLogoImageShopPayloadOperation) {
  UpdateLogoImageShopPayloadOperation["UpdateAvatar"] = "updateAvatar";
})(UpdateLogoImageShopPayloadOperation || (UpdateLogoImageShopPayloadOperation = {}));

var DeactivateShopPayloadOperation;

(function (DeactivateShopPayloadOperation) {
  DeactivateShopPayloadOperation["Deactivate"] = "deactivate";
})(DeactivateShopPayloadOperation || (DeactivateShopPayloadOperation = {}));

var ActivateShopPayloadOperation;

(function (ActivateShopPayloadOperation) {
  ActivateShopPayloadOperation["Activate"] = "activate";
})(ActivateShopPayloadOperation || (ActivateShopPayloadOperation = {}));

var UpdateShopPayloadOperation;

(function (UpdateShopPayloadOperation) {
  UpdateShopPayloadOperation["UpdateDetail"] = "updateDetail";
})(UpdateShopPayloadOperation || (UpdateShopPayloadOperation = {}));

var UpdateBrandPayloadOperation;

(function (UpdateBrandPayloadOperation) {
  UpdateBrandPayloadOperation["UpdateDetail"] = "updateDetail";
})(UpdateBrandPayloadOperation || (UpdateBrandPayloadOperation = {}));

var UpdateCategoryPayloadOperation;

(function (UpdateCategoryPayloadOperation) {
  UpdateCategoryPayloadOperation["UdpateDetail"] = "udpateDetail";
})(UpdateCategoryPayloadOperation || (UpdateCategoryPayloadOperation = {}));

var Payload9ResolvedResult;

(function (Payload9ResolvedResult) {
  Payload9ResolvedResult["SKIP"] = "SKIP";
  Payload9ResolvedResult["DELETE"] = "DELETE";
})(Payload9ResolvedResult || (Payload9ResolvedResult = {}));

var ReportsReason;

(function (ReportsReason) {
  ReportsReason["WRONG_INFO"] = "WRONG_INFO";
  ReportsReason["SOLD"] = "SOLD";
  ReportsReason["VIOLATE"] = "VIOLATE";
})(ReportsReason || (ReportsReason = {}));

var SwaggerException =
/*#__PURE__*/
function (_Error) {
  _inherits(SwaggerException, _Error);

  function SwaggerException(message, status, response, headers, result) {
    var _this135;

    _classCallCheck(this, SwaggerException);

    _this135 = _possibleConstructorReturn(this, _getPrototypeOf(SwaggerException).call(this));

    _defineProperty(_assertThisInitialized(_this135), "message", void 0);

    _defineProperty(_assertThisInitialized(_this135), "status", void 0);

    _defineProperty(_assertThisInitialized(_this135), "response", void 0);

    _defineProperty(_assertThisInitialized(_this135), "headers", void 0);

    _defineProperty(_assertThisInitialized(_this135), "result", void 0);

    _defineProperty(_assertThisInitialized(_this135), "isSwaggerException", true);

    _this135.message = message;
    _this135.status = status;
    _this135.response = response;
    _this135.headers = headers;
    _this135.result = result;
    return _this135;
  }

  _createClass(SwaggerException, null, [{
    key: "isSwaggerException",
    value: function isSwaggerException(obj) {
      return obj.isSwaggerException === true;
    }
  }]);

  return SwaggerException;
}(_wrapNativeSuper(Error));

function throwException(message, status, response, headers, result) {
  if (result !== null && result !== undefined) throw result;else throw new SwaggerException(message, status, response, headers, null);
}

/***/ }),

/***/ 53:
/*!**********************************************!*\
  !*** multi ./pages/refresh-token-iframe.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__NEXT_REGISTER_PAGE('/refresh-token-iframe', function() {
module.exports = __webpack_require__(/*! ./pages/refresh-token-iframe.tsx */"./pages/refresh-token-iframe.tsx");

return { page: module.exports.default }});

/***/ }),

/***/ "dll-reference dll_5f8aad59119281538d0e":
/*!*******************************************!*\
  !*** external "dll_5f8aad59119281538d0e" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_5f8aad59119281538d0e;

/***/ })

},[[53,"static/runtime/webpack.js"]]]));;
//# sourceMappingURL=refresh-token-iframe.js.map