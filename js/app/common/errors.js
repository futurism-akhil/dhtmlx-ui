"use strict";

define(['service/logger'], function (logger) {

    logger.debug('Common error module has initialized');

    var errorLvl = {
        high: 100,
        medium: 50,
        low: 25
    };

    function buildError(name, lvl, msg) {
        return {
            name: name,
            level: lvl,
            message: msg,
            toString: function () {
                return this.name + ": " + this.message;
            }
        };
    }

    return {
        dataSave: function (msg) {
            return  buildError("Save Data", errorLvl.high, (msg) ? msg : "Unable to save data");
        }, invalidType: function (msg) {
            return  buildError("Invalid data type", errorLvl.high, (msg) ? msg : "Invalid data type found");
        }
    }
});
