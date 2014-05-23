"use strict";

define(function () {


    return {
        formatMsg: function (msg) {
            return '[' + new Date().toISOString() + '] ' + msg;
        },
        setDateFormat: function (date) {
            var d = (date.getMonth() + 1);
            d += "-" + date.getDate();
            d += "-" + date.getFullYear();
            return d;
        },
        buildJsonData: function (jsonArray, idPrefix) {
            var keys = jsonArray.length > 0 ? _.keys(jsonArray[0]) : [];
            //var i=0;

            var rows = _.map(jsonArray, function (obj) {
                var id = idPrefix + '^' + (obj.id);
                var rowData = _.map(keys, function (k) {
                    return obj[k] || "";
                });

                return {
                    id: id,
                    userdata: obj,
                    data: rowData
                };
            });
            if (rows.length > 0) {
                rows[0].selected = true;
            }
            return {
                total_count: jsonArray.length,
                pos: 0,
                rows: rows
            };

        }
    }

});
