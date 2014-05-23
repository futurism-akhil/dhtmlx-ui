/**
 * Created by Administrator on 5/14/2014.
 */
"use strict";
define(["model/customer",
        "service/storage",
        "common/errors",
        "service/logger", "common/events"],
    function (Customer, storage, erros, logger, eventBus) {

        logger.debug('Customer Service has initialized');

        var customers;
        var maxId = 0;
        //var isDataChanged = true;

        function readCustomers() {
            var store = storage.read('customer');
            maxId = store.maxId;
            customers = store.data;
        }

        readCustomers();

        return {
            getCustomers: function () {
                //
                return customers;
            },
            read: function () {
                readCustomers();
            },
            save: function (customer, persist) {
                if (typeof persist == "undefined") persist = true;

                if (!customer) {
                    throw erros.invalidType("Customer value should not be null");
                }
                if (!(customer instanceof Customer)) {
                    throw erros.invalidType("Invalid Customer found, unable to save Customer");
                }
                if (typeof customers === "undefined") {
                    this.read();
                }
                if (!customer.id) customer.id = ++maxId;   // apply id
                customers.push(customer);
                if (persist)this.persist();
            },
            saveAll: function (customerArray) {
                var me = this;
                if (customerArray.length == 0) return;

                customerArray.forEach(function (customer) {
                    if (!customer.id) customer.id = ++maxId;
                    me.save(customer, false);
                });

                this.persist();
            },
            update: function (id, customer, persist) {
                if (typeof persist == "undefined") persist = true;
                var j = customers.length;
                while (j--) {
                    if (customers[j].id == id) {
                        customers[j] = customer;
                        break;
                    }
                }
                if (persist)this.persist();
            },
            get: function (id) {
                var j = customers.length;
                while (j--) {
                    if (customers[j].id == id) {
                        return customers[j];
                    }
                }
                return null;
            },
            persist: function () {
                storage.save('customer', JSON.stringify({maxId: maxId, data: customers}));
                eventBus.fireEvent('customerDataChanged');
            },
            remove: function (id, persist) {
                if (typeof persist == "undefined") persist = true;
                var j = customers.length;
                while (j--) {
                    if (customers[j].id == id) {
                        break;
                    }
                }
                customers.splice(j, 1);
                if (persist)this.persist();
            }
        }
    });