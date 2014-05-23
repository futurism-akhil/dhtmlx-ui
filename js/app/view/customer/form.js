define(["view/main",
        '../../../config',
        'common/helper',
        'model/customer',
        'service/logger'],
    function (mainView, config, helper, Customer, logger) {
        logger.debug('Customer Form View has initialized');
        var toolbar, form;
        return {
            getToolBar: function () {
                return toolbar;
            },
            getCustomerForm: function () {
                return form;
            },
            showForm: function (nodeId) {
                var tabbar = mainView.getTabBar();
                this.createFormTab(tabbar, nodeId);
            }, startEdit: function (customer) {
                this.showForm("customer^CN^12");
                //this.getCustomerForm().setFormData(customer);
                logger.debug('Edit customer: ' + customer.id);
            },
            createFormTab: function (tabbar, tabId) {
                var pages = mainView.getPages();
                if (!pages[tabId]) {
                    tabbar.addTab(tabId, "Customer Form", "100px");
                    var tab = tabbar.cells(tabId);
                    var formJson = [ // settings
                        { type: "settings", position: "label-left", labelWidth: 130, inputWidth: 120 },
                        // id
                        { type: "hidden", name: "id" },
                        // firstName
                        { type: "input", name: "firstName", required: true, label: "First Name:" },
                        // middleInitial
                        { type: "input", name: "middleName", label: "Middle Name:" },
                        // lastName
                        { type: "input", name: "lastName", required: true, label: "Last Name:" },
                        // dob
                        { type: "calendar", enableTime: false, dateFormat: "%n-%j-%Y", name: "dob", required: true, label: "Date of Birth:", inputWidth: 80 },
                        //
                        {type: "input", name: "email", required: true, validate: "ValidEmail", label: "Email:" },
                        //City
                        { type: "input", name: "city", label: "City Name:" },
                        // active
                        { type: "checkbox", name: "active", label: "Active:" } //,
                        /*// buttons
                         {
                         type: "block",
                         width: 300,
                         list: [
                         //  { type: "button", value: "Save", name: "save" },
                         // { type: "newcolumn" },
                         { type: "button", value: "Reset", name: "reset" }
                         ]
                         }*/
                    ];
                    toolbar = tab.attachToolbar();
                    form = tab.attachForm(formJson);
                    form.clear();

                    toolbar.setIconPath(config.toolBarIconPath);
                    toolbar.loadXMLString(config.createCustomerToolbarXML, function () {
                    });
                    pages[tabId] = {tab: tab, toolBar: toolbar};
                    logger.debug('Customer Form tab created Id:' + tabId);
                }

                tabbar.setTabActive(tabId);
                logger.debug('Active tab Id:' + tabId);
            }
        }
    }
);