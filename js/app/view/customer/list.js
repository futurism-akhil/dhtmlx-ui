define(["view/main",
        '../../../config',
        'common/helper',
        'model/customer',
        'service/logger'],
    function (mainView, config, helper, Customer, logger) {
        logger.debug('Customer Form List has initialized');
        var toolbar, grid;
        // var tabId ;
        return {

            showList: function (nodeId, customers) {
                var tabbar = mainView.getTabBar();
                //  tabId = nodeId;
                this.createListTab(tabbar, nodeId, customers);
            },
            reloadData: function (customers) {
                if (!grid) return;
                grid.clearAll();
                grid.parse(helper.buildJsonData(customers, 'cust'), 'json');
            },
            createListTab: function (tabbar, tabId, customers) {
                var pages = mainView.getPages();
                if (!pages[tabId]) {
                    tabbar.addTab(tabId, "Customer List", "100px");
                    var tab = tabbar.cells(tabId);
                    toolbar = tab.attachToolbar();
                    grid = tab.attachGrid();

                    grid.enableMultiselect(true);
                    grid.setHeader(['First Name', 'Middle Name', 'Last Name', 'City', 'DoB', 'Email', 'Active']);
                    grid.enableMultiselect(true);
                    grid.setColTypes("ro,ro,ro,ro,ro,ro,ro");
                    grid.enableMultiselect(false);

                    grid.setColSorting('str,str');
                    grid.enableCellIds(true);
                    grid.setColumnIds('col_firstnm', 'col_city', 'col_3', 'col_4', 'col_5', 'col_6', 'col_7');
                    grid.setIconPath(config.gridIconPath);
                    grid.setImagePath(config.gridIconPath);

                    grid.init();

                    grid.parse(helper.buildJsonData(customers, 'cust'), 'json');

                    //grid.setImagePath(config.gridIconPath) ;

                    toolbar.setIconPath(config.toolBarIconPath);
                    toolbar.loadXMLString(config.listCustomerToolbarXML, function () {
                    });
                    //toolbar.loadXMLString(config.createCustomerToolbarXML, function(){});

                    pages[tabId] = {tab: tab, toolBar: toolbar};
                    logger.debug('Customer List tab created Id:' + tabId);
                }

                tabbar.setTabActive(tabId);
                logger.debug('Active tab Id:' + tabId);
            },
            getGrid: function () {
                return grid;
            },
            getToolBar: function () {
                return toolbar;
            }

        }

    });