/**
 * Created by Administrator on 5/14/2014.
 */

"use strict";

define(['../../config', 'common/helper'],
    function (config, common) {
        var logLvl = config.logLvl;

        console.log('[' + new Date().toISOString() + '] Logger has initialized');

        return {
            debug: function (msg) {
                if (logLvl <= 1)  console.log(common.formatMsg(msg));
            },
            error: function (msg) {
                if (logLvl <= 3)  console.error(common.formatMsg(msg));
            }
        }

    });