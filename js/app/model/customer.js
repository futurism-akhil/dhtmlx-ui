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
define(["common/helper"], function (helper) {

    var Customer = function (firstName, middleName, lastName, dob, email, city, active) {
        // this.id = id;
        this.firstName = firstName;
        this.city = city;
        this.middleName = middleName;
        this.lastName = lastName;
        this.dob = helper.setDateFormat(dob);
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

    return Customer;
});
