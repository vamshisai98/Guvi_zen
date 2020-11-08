// interface CustomerData{
//     id:number
//     name:string
//     discount?:number
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Customer = /** @class */ (function () {
    function Customer(custDetails) {
        this.ID = custDetails.ID;
        this.name = custDetails.name;
        this.discount = custDetails.discount;
    }
    Customer.prototype.getID = function () {
        return this.ID;
    };
    Customer.prototype.getName = function () {
        return this.name;
    };
    Customer.prototype.getDiscount = function () {
        return this.discount;
    };
    Customer.prototype.setDiscount = function (discount) {
        this.discount = discount;
    };
    Customer.prototype.toString = function () {
        return "Customer name is " + this.name + " and Id is " + this.ID;
    };
    return Customer;
}());
var CustomerInvoice = /** @class */ (function (_super) {
    __extends(CustomerInvoice, _super);
    function CustomerInvoice(custDet, invoiceDet) {
        var _this = _super.call(this, custDet) || this;
        _this.invoiceID = invoiceDet.invoiceID;
        _this.customer = invoiceDet.customer;
        _this.amount = invoiceDet.amount;
        return _this;
    }
    CustomerInvoice.prototype.getInoviceID = function () {
        return this.invoiceID;
    };
    CustomerInvoice.prototype.getCustomer = function () {
        return this.customer;
    };
    CustomerInvoice.prototype.setCustomer = function (customers) {
        var customer = {
            ID: customers.ID,
            name: customers.name,
            discount: customers.discount
        };
        return customer;
    };
    CustomerInvoice.prototype.getAmount = function () {
        return "Amount available is " + this.amount;
    };
    CustomerInvoice.prototype.setAmount = function (amount) {
        this.amount = amount;
    };
    CustomerInvoice.prototype.getCutomerName = function () {
        return "Customer Name is " + this.name;
    };
    CustomerInvoice.prototype.getAmountAfterDiscount = function () {
        var afterDiscount = this.amount - (this.amount * (this.discount / 100));
        return afterDiscount;
    };
    return CustomerInvoice;
}(Customer));
var customerInfo = new CustomerInvoice({
    ID: 2,
    name: "vamshi",
    discount: 3
}, {
    invoiceID: 32,
    amount: 30000,
    customer: {
        ID: 2,
        name: "vamshi",
        discount: 3
    }
});
console.log("parent");
console.log(customerInfo.getID());
console.log(customerInfo.getName());
console.log(customerInfo.getDiscount());
console.log(customerInfo.setDiscount(25));
console.log(customerInfo.toString());
console.log("child");
console.log(customerInfo.getInoviceID());
console.log(customerInfo.getCustomer());
console.log(customerInfo.setCustomer({ ID: 45, name: "Anirudh", discount: 5 }));
console.log(customerInfo.getAmount());
console.log(customerInfo.setAmount(30000));
console.log(customerInfo.getCutomerName());
console.log(customerInfo.getAmountAfterDiscount());
function showTable() {
    console.log("working");
    var table = document.getElementById("showTable");
    table.style.display = "block";
    table.innerHTML = "  <table class=\"table\" id=\"table\">\n<thead>\n  <tr>\n    <th scope=\"col\">ID</th>\n    <th scope=\"col\">Name</th>\n    <th scope=\"col\">Discount</th>\n    <th scope=\"col\">Total Amount</th>\n    <th scope=\"col\">Amount After Discount</th>\n    <th scope=\"col\">Balance</th>\n    <th scope=\"col\">Deposit</th>\n    <th scope=\"col\">Withdraw</th>\n    <th scope=\"col\">Closing Balance</th>\n  </tr>\n</thead>\n<tbody>\n  <tr>\n    <th scope=\"row\">1</th>\n    <td>Mark</td>\n    <td>Otto</td>\n    <td>@mdo</td>\n  </tr>\n  <tr>\n    <th scope=\"row\">2</th>\n    <td>Jacob</td>\n    <td>Thornton</td>\n    <td>@fat</td>\n  </tr>\n  <tr>\n    <th scope=\"row\">3</th>\n    <td>Larry</td>\n    <td>the Bird</td>\n    <td>@twitter</td>\n  </tr>\n</tbody>\n</table>\n\n<button type=\"button\" class=\"btn btn-danger\" id=\"closeBtn\" onclick=\"closeTable()\">Close</button>\n";
    var addcustomer = document.getElementById("addcustomer");
    addcustomer.style.pointerEvents = "none";
}
function closeTable() {
    var table = document.getElementById("showTable");
    table.style.display = "none";
    var addcustomer = document.getElementById("addcustomer");
    addcustomer.style.pointerEvents = "fill";
}
