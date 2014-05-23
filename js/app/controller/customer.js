"use strict";

define(["view/main", "model/customer",
        "view/customer/list", "view/customer/form" ,
        "service/customer" , "service/logger",
        "common/events"],
    function (mainView, Customer, customerListView, customerFormView, customerService, logger, eventBus) {

        logger.debug('Customer Controller has initialized');

        return {
            init: function init() {
                var tree = mainView.getTree();
                var me = this;
                tree.attachEvent("onClick", function (id) {
                    var attr = id.split("^")[1];
                    switch (attr) {
                        case  "C":
                            break;
                        case  "CL":
                            customerListView.showList(id, customerService.getCustomers());
                            // hook the listeners
                            var toolbar1 = customerListView.getToolBar();
                            toolbar1.attachEvent("onClick",
                                function (id) {
                                    me.handleToolbarClickList(id, me);
                                }
                            );
                            break;
                        case  "CN":
                            customerFormView.showForm(id);
                            var toolbar2 = customerFormView.getToolBar();
                            toolbar2.attachEvent("onClick", me.handleToolbarClickForm);

                            break;
                    }
                    return true;
                });
                eventBus.on('customerDataChanged',
                    function () {
                        customerListView.reloadData(customerService.getCustomers());
                    }
                );
            },
            handleToolbarClickForm: function (itemId, scope) {
                logger.debug(itemId + ' clicked');
                var me = scope || this;

                switch (itemId) {
                    case 'new':
                        var newForm = customerFormView.getCustomerForm();
                        newForm.clear();
                        break;
                    case 'save':
                        var saveForm = customerFormView.getCustomerForm();

                        if (!saveForm.validate()) {
                            alert('Please correct the validation error and try again..');
                            return;
                        }

                        var customerObj = Customer.buildCustomer(saveForm.getFormData());
                        if (customerObj.id) {
                            //storage.updateUser(formData);
                            try {
                                customerService.update(customerObj.id, customerObj);
                                saveForm.clear();
                            } catch (e) {
                                logger.error(e);
                                alert(e);
                            }
                        } else {
                            //storage.createUser(formData);
                            try {
                                customerService.save(customerObj);
                                saveForm.clear();
                            } catch (e) {
                                logger.error(e);
                                alert(e);
                            }
                        }
                        break;
                }
            },
            handleToolbarClickList: function (itemId, scope) {
                var me = scope || this;
                //alert('button click' + itemId);
                logger.debug(itemId + ' clicked');
                var grid = customerListView.getGrid();
                var row = grid.getSelected();
                if (!row) {
                    alert('Please select row..');
                    return;
                }
                var customerId = row.split('^')[1] || 0;
                switch (itemId) {
                    case 'edit_row':
                        var customer = customerService.get(customerId);

                        customerFormView.showForm("customer^CN^12");
                        customerFormView.getCustomerForm().setFormData(customer);
                        var toolbar2 = customerFormView.getToolBar();
                        toolbar2.attachEvent("onClick", function (id) {
                                debugger;
                                me.handleToolbarClickForm(id, me);
                            }
                        );

                        break;
                    case 'delete_row':

                        customerService.remove(customerId);
                        grid.deleteRow(row);
                        if (grid.getRowsNum() > 0)grid.selectRow(0);
                        break;
                    default :
                        alert(' functionality is not implemented');
                }
            },
            customerList: function () {
                var customerList = customerService.getCustomers();
                for (var i = 0, ii = customerList.length; i < ii; i++) {
                    alert(customerList[i].name);
                }
            }

        }
    });
