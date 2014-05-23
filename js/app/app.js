"use strict";

define([ "model/customer", "controller/customer" , "view/main" , "service/customer", "service/logger"],
    function (Customer, customerController, mainView, customerService, logger) {
        logger.debug('Application has initialized');
        return {
            run: function () {
                /*if(customerService.getCustomers().length==0) {   // seed customer data

                 customerService.saveAll([
                 new Customer('firstName', 'middleName', 'lastName', new Date(), 'email', 'city', 'active'),
                 new Customer('firstName2', 'middleName2', 'lastName2', new Date(), 'email2', 'city2', 'active2'),
                 new Customer('firstName3', 'middleName3', 'lastName3', new Date(), 'email3', 'city3', 'active3')
                 ]);
                 }*/
                mainView.buildLayout();
                customerController.init();
            }

        }
    }
);