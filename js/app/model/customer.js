/*
 *   Customer Object Model
 * */

/*{
 id: 1, // Int
 firstName: "John", // String
 middleInitial: "J", // String
 lastName: "Smith", // String
 dob: 1971-01-09T13:00:00.685Z, // Date
 email: "john@somedomain.com", // String
 active: 1 // Int (0,1)
 }*/

"use strict";

define(["common/helper", 'common/errors'], function (helper, errors) {

    var Customer = function (firstName, middleName, lastName, dob, email, city, active) {
        this.id = undefined;
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.city = city;
        this.dob = dob ? helper.setDateFormat(dob) : undefined;
        this.email = email;
        this.active = active;

        // full Name
        this.getFullName = function () {
            return this.firstName + ' ' + this.middleName + ' ' + this.lastName
        };

        // Short Name
        this.getShortName = function () {

            var fName = this.firstName.split('')[0] || '';
            var mName = this.middleName.split('')[0] || '';
            var lName = this.lastName.split('')[0] || '';

            return fName.toUpperCase() + ' ' + mName + ' ' + lName;
        }
    };

    // adding static builders
    Customer.buildCustomer = function (obj) {
        if (!obj) {
            throw errors.invalidType("Invalid data type found");
        }
        var customerObj = new Customer();
        var objKeys = _.keys(customerObj);
        _.each(objKeys, function (k) {
            if (obj.hasOwnProperty(k)) {
                customerObj[k] = obj[k];
            }
        });
        return customerObj;
    };

    return Customer;
});
