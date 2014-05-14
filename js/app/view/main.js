/**
 * Created by Administrator on 5/14/2014.
 */
define(['service/logger'],
    function (logger) {

        var layout;
        logger.debug('Layout service has initialized');
        debugger;
        return{

            buildLayout: function () {
                layout = new dhtmlXLayoutObject(document.body, "2U");
                logger.debug('Layout Created');
                return layout;
            },

            getMainLayout: function () {
                return layout;
            }

        }

    });