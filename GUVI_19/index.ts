interface CustomerDetails {
  ID: number;
  name: string;
  discount: number;
}
interface InvoiceDetails {
  invoiceID: number;
  amount: number;
  customer?: CustomerDetails;
}
interface AccountDetails {
  accId: number;
  customer: CustomerDetails;
  balance: number;
}

class Customer {
  ID: number;
  name: string;
  discount: number;
  constructor(custDetails: CustomerDetails) {
    this.ID = custDetails.ID;
    this.name = custDetails.name;
    this.discount = custDetails.discount;
  }

  getID() {
    return this.ID;
  }
  getName() {
    return this.name;
  }
  getDiscount() {
    return this.discount;
  }
  setDiscount(discount: number) {
    this.discount = discount;
  }
  toString() {
    return `Customer name is ${this.name} and Id is ${this.ID}`;
  }
}

class CustomerInvoice extends Customer {
  invoiceID: number;
  customer: CustomerDetails;
  amount: number;

  constructor(custDet: CustomerDetails, invoiceDet: InvoiceDetails) {
    super(custDet);
    this.invoiceID = invoiceDet.invoiceID;
    this.customer = invoiceDet.customer;
    this.amount = invoiceDet.amount;
  }

  getInoviceID() {
    return this.invoiceID;
  }
  getCustomer() {
    return this.customer;
  }
  setCustomer(customers: CustomerDetails) {
    let customer: CustomerDetails = {
      ID: customers.ID,
      name: customers.name,
      discount: customers.discount,
    };
    return customer;
  }
  getAmount() {
    return this.amount;
  }
  setAmount(amount: number) {
    this.amount = amount;
  }
  getCutomerName() {
    return `Customer Name is ${this.name}`;
  }
  getAmountAfterDiscount() {
    let afterDiscount = this.amount - this.amount * (this.discount / 100);
    return afterDiscount;
  }
}

class CusAccounts extends Customer {
  accId: number;
  customer: CustomerDetails;
  balance: number;

  constructor(custDet: CustomerDetails, accounts: AccountDetails) {
    super(custDet);
    this.accId = accounts.accId;
    this.customer = accounts.customer;
    this.balance = accounts.balance;
  }
  getAccId() {
    return this.accId;
  }
  getCustomer() {
    return this.customer;
  }
  getBalance() {
    return this.balance;
  }
  setBalance(balance: number) {
    this.balance = balance;
  }
  accString() {
    return `Customer ${this.customer.name} of ID ${
      this.customer.ID
    } of Balance:  ${this.balance.toFixed(2)}`;
  }
  getCustomerName() {
    return this.customer.name;
  }
  setDeposit(amount: number) {
    return (this.balance += amount);
  }
  setWithdraw(amount: number) {
    if (this.balance >= amount) {
      return (this.balance = this.balance - amount);
    } else {
      return `amount withdrawn exceeds the current balance`;
    }
  }
}

let customerAccounts = new CusAccounts(
  {
    ID: 2,
    name: "vamshi",
    discount: 3,
  },
  {
    accId: 40,
    customer: {
      ID: 2,
      name: "vamshi",
      discount: 3,
    },
    balance: 50000,
  }
);
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
  let table = document.getElementById("showTable");
  table.style.display = "block";

  let addcustomer = document.getElementById("addcustomer");
  addcustomer.style.pointerEvents = "none";
}

function closeTable() {
  let table = document.getElementById("showTable");
  table.style.display = "none";
  let addcustomer = document.getElementById("addcustomer");
  addcustomer.style.pointerEvents = "fill";
}

function addCustomer() {
  let cusID = (<HTMLInputElement>document.getElementById("inputId")).value;
  let cusName = (<HTMLInputElement>document.getElementById("inputName")).value;
  let cusDisc = (<HTMLInputElement>document.getElementById("inputDiscount"))
    .value;
  let cusAmnt = (<HTMLInputElement>document.getElementById("inputTotalAmnt"))
    .value;
  let invoID = (<HTMLInputElement>document.getElementById("inputInvoiceID"))
    .value;
  let accID = (<HTMLInputElement>document.getElementById("inputAccID")).value;
  let bal = (<HTMLInputElement>document.getElementById("inputBalance")).value;
  let deposit = (<HTMLInputElement>document.getElementById("inputBalance"))
    .value;
  let withdraw = (<HTMLInputElement>document.getElementById("inputWithdraw"))
    .value;
  console.log("button is working");
  console.log(cusID);
  let customerInfo = new CustomerInvoice(
    {
      ID: +cusID,
      name: cusName,
      discount: +cusDisc,
    },
    {
      invoiceID: +invoID,
      amount: +cusAmnt,
      customer: {
        ID: +cusID,
        name: cusName,
        discount: +cusDisc,
      },
    }
  );
  console.log("parent");
  console.log(customerInfo.getID());
  console.log(customerInfo.getName());
  console.log(customerInfo.getDiscount());
  console.log(customerInfo.toString());
  console.log("child");
  console.log(customerInfo.getInoviceID());
  console.log(customerInfo.getCustomer());
  console.log(
    customerInfo.setCustomer({ ID: 45, name: "Anirudh", discount: 5 })
  );
  console.log(customerInfo.getAmount());
  console.log(customerInfo.getCutomerName());
  console.log(customerInfo.getAmountAfterDiscount());

  let customerAccounts = new CusAccounts(
    {
      ID: +cusID,
      name: cusName,
      discount: +cusDisc,
    },
    {
      accId: +accID,
      customer: {
        ID: +cusID,
        name: cusName,
        discount: +cusDisc,
      },
      balance: +bal,
    }
  );
  console.log("Accounts");
  console.log(customerAccounts.getAccId());
  console.log(customerAccounts.getCustomer());
  console.log(customerAccounts.getBalance());
  console.log(customerAccounts.accString());
  console.log(customerAccounts.getCustomerName());
  console.log(customerAccounts.getBalance());

  let tbody = document.getElementById("tbody");
  let tr = document.createElement("tr");

  tr.innerHTML = `<td>${customerAccounts.getID()}</td> <td>${customerAccounts.getAccId()}</td>  
  <td>${customerInfo.getInoviceID()}</td>
  <td>${customerInfo.getName()}</td>
  <td>${customerInfo.getDiscount()}</td>
  <td>${customerInfo.getAmount()}</td>
  <td>${customerInfo.getAmountAfterDiscount()}</td>
  <td>${customerAccounts.getBalance()}</td>
  <td>${customerAccounts.setDeposit(+deposit)}</td>
  <td>${customerAccounts.setDeposit(+withdraw)}</td>
  <td>${customerAccounts.getBalance()}</td>`;
  tbody.append(tr);
  showTable();
}
