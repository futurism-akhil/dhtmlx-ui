/**
 * Created by Administrator on 5/14/2014.
 */

"use strict";

define(['../../config', 'service/logger'],
    function (config, logger) {

        var layout, tree, tabbar, pages = [];
        var events;
        logger.debug('Main Layout service has initialized');

        return{

            buildLayout: function () {

                // layout
                layout = new dhtmlXLayoutObject(document.body, "2U");
                layout.items[0].setText("Menu");
                layout.items[0].setWidth(250);
                layout.items[1].setText("Home");

                // tree
                tree = layout.items[0].attachTree(0);
                tree.setImagePath("./js/lib/dhtmlx/3.6/imgs/tree/");
                tree.loadJSONObject(config.treeMenus);

                // tabbar
                tabbar = layout.items[1].attachTabbar();
                tabbar.setImagePath("./js/lib/dhtmlx/3.6/imgs/tabbar/");
                tabbar.enableForceHiding(true);
                tabbar.enableTabCloseButton(true);
                tabbar.attachEvent("onTabClose", function (id) {
                    delete pages[id];
                    logger.debug('tab closed: ' + id);
                    return true;
                });
                this.createTab('1000', 'Home', config.welcomePage);
                this.setHomePage('1000');
                logger.debug('Layout Created');

                return layout;
            },
            getMainLayout: function () {
                return layout;
            },
            getTree: function () {
                return tree;
            },
            getTabBar: function () {
                return tabbar;
            },
            getPages: function () {
                return pages;
            },
            createTab: function (tabId, text) {
                if (!pages[tabId]) {
                    tabbar.addTab(tabId, text, "100px");
                    var win = tabbar.cells(tabId);
                    var toolbar = win.attachToolbar();
                    pages[tabId] = {tab: win, toolBar: toolbar};
                    logger.debug('New Tab Created Id:' + tabId);

                }
                tabbar.setTabActive(tabId);
                logger.debug('Active tab Id:' + tabId);
            },
            setHomePage: function (tabId) {
                var tab = tabbar.cells(tabId);
                tab.attachURL(config.welcomePage);
                logger.debug('Welcome page set from ' + config.welcomePage);
            }
        }

    });