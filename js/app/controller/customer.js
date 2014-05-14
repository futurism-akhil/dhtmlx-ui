define(["service/customer"],
    function (customerService) {

        debugger;

        return {
            customerList: function () {

                var customerList = customerService.getCustomers();

                for (var i = 0, ii = customerList.length; i < ii; i++) {
                    alert(customerList[i].name);
                }
            }
        }
    });