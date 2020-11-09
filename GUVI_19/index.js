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
        var afterDiscount = this.amount - this.amount * (this.discount / 100);
        return afterDiscount;
    };
    return CustomerInvoice;
}(Customer));
var CusAccounts = /** @class */ (function (_super) {
    __extends(CusAccounts, _super);
    function CusAccounts(custDet, accounts) {
        var _this = _super.call(this, custDet) || this;
        _this.accId = accounts.accId;
        _this.customer = accounts.customer;
        _this.balance = accounts.balance;
        return _this;
    }
    CusAccounts.prototype.getAccId = function () {
        return this.accId;
    };
    CusAccounts.prototype.getCustomer = function () {
        return this.customer;
    };
    CusAccounts.prototype.getBalance = function () {
        return this.balance;
    };
    CusAccounts.prototype.setBalance = function (balance) {
        this.balance = balance;
    };
    CusAccounts.prototype.accString = function () {
        return "Customer " + this.customer.name + " of ID " + this.customer.ID + " of Balance:  " + this.balance.toFixed(2);
    };
    CusAccounts.prototype.getCustomerName = function () {
        return this.customer.name;
    };
    CusAccounts.prototype.setDeposit = function (amount) {
        this.balance += amount;
    };
    CusAccounts.prototype.setWithdraw = function (amount) {
        if (this.balance >= amount) {
            return (this.balance = this.balance - amount);
        }
        else {
            return "amount withdrawn exceeds the current balance";
        }
    };
    return CusAccounts;
}(Customer));
var customerAccounts = new CusAccounts({
    ID: 2,
    name: "vamshi",
    discount: 3
}, {
    accId: 40,
    customer: {
        ID: 2,
        name: "vamshi",
        discount: 3
    },
    balance: 50000
});
console.log("Accounts");
console.log(customerAccounts.getAccId());
console.log(customerAccounts.getCustomer());
console.log(customerAccounts.getBalance());
console.log(customerAccounts.setBalance(50000));
console.log(customerAccounts.accString());
console.log(customerAccounts.getCustomerName());
console.log(customerAccounts.setDeposit(2000));
console.log(customerAccounts.getBalance());
console.log(customerAccounts.setWithdraw(500));
function showTable() {
    console.log("working");
    var table = document.getElementById("showTable");
    table.style.display = "block";
    var addcustomer = document.getElementById("addcustomer");
    addcustomer.style.pointerEvents = "none";
}
function closeTable() {
    var table = document.getElementById("showTable");
    table.style.display = "none";
    var addcustomer = document.getElementById("addcustomer");
    addcustomer.style.pointerEvents = "fill";
}
function addCustomer() {
    var cusID = document.getElementById("inputId").value;
    var cusName = document.getElementById("inputName").value;
    var cusDisc = document.getElementById("inputDiscount").value;
    var cusAmnt = document.getElementById("inputTotalAmnt").value;
    var invoID = document.getElementById("inputInvoiceID").value;
    var accID = document.getElementById("inputAccID").value;
    var bal = document.getElementById("inputBalance").value;
    console.log("button is working");
    console.log(cusID);
    var customerInfo = new CustomerInvoice({
        ID: +cusID,
        name: cusName,
        discount: +cusDisc
    }, {
        invoiceID: +invoID,
        amount: +cusAmnt,
        customer: {
            ID: +cusID,
            name: cusName,
            discount: +cusDisc
        }
    });
    console.log("parent");
    console.log(customerInfo.getID());
    console.log(customerInfo.getName());
    console.log(customerInfo.getDiscount());
    // console.log(customerInfo.setDiscount(25));
    console.log(customerInfo.toString());
    console.log("child");
    console.log(customerInfo.getInoviceID());
    console.log(customerInfo.getCustomer());
    console.log(customerInfo.setCustomer({ ID: 45, name: "Anirudh", discount: 5 }));
    console.log(customerInfo.getAmount());
    // console.log(customerInfo.setAmount(30000));
    console.log(customerInfo.getCutomerName());
    console.log(customerInfo.getAmountAfterDiscount());
    var customerAccounts = new CusAccounts({
        ID: +cusID,
        name: cusName,
        discount: +cusDisc
    }, {
        accId: +accID,
        customer: {
            ID: +cusID,
            name: cusName,
            discount: +cusDisc
        },
        balance: +bal
    });
    console.log("Accounts");
    console.log(customerAccounts.getAccId());
    console.log(customerAccounts.getCustomer());
    console.log(customerAccounts.getBalance());
    console.log(customerAccounts.setBalance(50000));
    console.log(customerAccounts.accString());
    console.log(customerAccounts.getCustomerName());
    console.log(customerAccounts.setDeposit(2000));
    console.log(customerAccounts.getBalance());
    console.log(customerAccounts.setWithdraw(500));
    var tbody = document.getElementById('tbody');
    var tr = document.createElement('tr');
    tr.innerHTML = "<td>" + customerAccounts.getAccId() + "</td> <td>" + customerAccounts.getAccId() + "</td>";
    tbody.append(tr);
}
