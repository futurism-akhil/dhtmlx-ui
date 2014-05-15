"use strict";

define(['service/logger'],
    function (logger) {
        var storage = localStorage;
        logger.debug('Local storage has initialised');
        return {
            save: function (key, value) {
                storage.setItem(key, value);
                logger.debug(key + ' has been saved to local storage');
            },
            read: function (key) {
                var data = storage.getItem(key);
                logger.debug('Reading ' + key + ' from local storage');
                return (data) ? JSON.parse(data) : [];
            },
            clear: function () {
                storage.clear();
            }
        }

    });
