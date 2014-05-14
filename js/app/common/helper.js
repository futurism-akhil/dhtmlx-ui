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
        }
    }

});
