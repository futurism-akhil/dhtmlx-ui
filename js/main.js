"use strict";

require.config({
    baseUrl: './js/app',
    paths: {
        //   'myModule': 'dirA/dirB/dirC/dirD/myModule'
//        'templates': '../templates',
        //      'text': 'libs/text',
        //   dhtmlx:"../lib/dhtmlx/3.6/dhtmlx"
    }
});


require(["app"], function (app) {

    app.run();

});