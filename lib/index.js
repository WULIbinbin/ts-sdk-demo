"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sdk = (function () {
    function Sdk(config) {
        this.config = null;
        this.config = config;
    }
    Sdk.prototype.sayHi = function () {
        return "HI";
    };
    Sdk.prototype.sayHiAsync = function () {
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve("HI");
            }, 1000);
        });
    };
    return Sdk;
}());
exports.default = Sdk;
