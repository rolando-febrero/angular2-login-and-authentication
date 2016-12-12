/**
 * Created by cfebrero on 11/4/2016.
 */
System.register(['angular2/core', './authentication.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, authentication_service_1;
    var AboutComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (authentication_service_1_1) {
                authentication_service_1 = authentication_service_1_1;
            }],
        execute: function() {
            AboutComponent = (function () {
                function AboutComponent(_service) {
                    this._service = _service;
                }
                /*
                 * using the lifecycle hook ngOnInit to call the function _service.checkCredentials(),
                 * if the user is not logged in he will be redirected to the login screen,
                 * otherwise he will be able to see the component,
                 * */
                AboutComponent.prototype.ngOnInit = function () {
                    this._service.checkCredentials();
                };
                AboutComponent.prototype.logout = function () {
                    this._service.logout();
                };
                AboutComponent = __decorate([
                    core_1.Component({
                        selector: 'login-form',
                        providers: [authentication_service_1.AuthenticationService],
                        template: "\n            <div class=\"container\" style=\"background-color: white\">\n                <div class=\"content\">\n                    <span>Welcome to ABOUT area !</span>\n                    <br />\n                    <br />\n                    <p>This system was created by: <br /><br />\n                    Rolando Febrero<br />\n                    Software Developer<br />\n                    <br /><br />                    \n                    <!-- we shouldn't create the link  this way, we should create a router \n                    component instead, this is only for demo purposes --> \n                    <a href=\"/home\">Home Page</a><br />\n                    <a (click)=\"logout()\" href=\"#\">Logout ?</a><br />  \n                </div>\n            </div>\n    \t"
                    }), 
                    __metadata('design:paramtypes', [authentication_service_1.AuthenticationService])
                ], AboutComponent);
                return AboutComponent;
            }());
            exports_1("AboutComponent", AboutComponent);
        }
    }
});
//# sourceMappingURL=about.component.js.map