/**
 * Created by Administrator on 5/14/2014.
 */
define(["model/customer",
        "service/storage",
        "common/errors",
        "service/logger"],
    function (Customer, storage, erros, logger) {
        var customers;
        return {
            getCustomers: function () {
                debugger;
                if (typeof customers === "undefined") {
                    this.read();
                }
                //
                return customers;
            },
            read: function () {
                customers = storage.read('customer');
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
                customers.push(customer);
                if (persist)this.persist();
            },
            saveAll: function (customerArray) {
                var me = this;
                if (customerArray.length == 0) return;

                customerArray.forEach(function (customer) {
                    me.save(customer, false);
                });

                this.persist();
            },
            persist: function () {
                storage.save('customer', customers);
            },
            remove: function (id, persist) {
                if (typeof persist == "undefined") persist = true;
                var j = customers.length;
                while (j--) {
                    if (customers[i].id == id) {
                        break;
                    }
                }
                customers.splice(j, 1);
                if (persist)this.persist();
            }
        }
    });