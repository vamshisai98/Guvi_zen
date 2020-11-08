// interface CustomerData{
//     id:number
//     name:string
//     discount?:number

// }

// class Customer{
//     customerId:number
//     customerName:string
//     customerDiscount?:number

//     constructor(customer:CustomerData){
//         this.customerName = customer.name
//         this.customerId = customer.id
//         this.customerDiscount=customer.discount
//     }

//     getId():number{
//       return this.customerId
//     }
//     getName():string{
//         return this.customerName
//     }
//     getDiscount():number{
//         return this.customerDiscount

//     }
//     setDiscount(discount:number){
//         this.customerDiscount = discount
//     }
//     toString():string{
//         return `${this.customerName}`
//     }
// }

// interface AccountData{
//    accId:number;
//    accCustomer:Customer;
//     accBal:number;
// }

// class CustomerAccounts extends Customer{
//     accId:number;
//     accCustomer:Customer;
//      accBal:number;
//     constructor( customerData: CustomerData, accountDetails:AccountData){
//         super(customerData)
//         this.accId =accountDetails.accId
//         this.accCustomer=accountDetails.accCustomer
//         this.accBal = accountDetails.accBal
//     }

//     getAccountId():number{
//         return this.customerAccountId
//       }

//       getBalance(){
//           return this.customerBalance
//       }
//       setBalance(){
//           return this.balanceAmount
//       }
//       toString():string{
//         return `hi ${this.customerName}`
//     }
//     getCustomerName(){
//         return this.customerName
//     }
//     getDeposit(){
//         return `${this.customerBalance} +${this.depositAmount}
//     }

// }
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
    return `Amount available is ${this.amount}`;
  }
  setAmount(amount: number) {
    this.amount = amount;
  }
  getCutomerName() {
    return `Customer Name is ${this.name}`;
  }
  getAmountAfterDiscount() {
    let afterDiscount = this.amount - (this.amount * (this.discount / 100));
    return afterDiscount;
  }
}

let customerInfo = new CustomerInvoice(
  {
    ID: 2,
    name: "vamshi",
    discount: 3,
  },
  {
    invoiceID: 32,
    amount: 30000,
    customer: {
      ID: 2,
      name: "vamshi",
      discount: 3,
    },
  }
);
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
console.log(customerInfo.getAmount())
console.log(customerInfo.setAmount(30000))
console.log(customerInfo.getCutomerName())
console.log(customerInfo.getAmountAfterDiscount())


function showTable() {
  console.log("working");
  let table = document.getElementById("showTable");
  table.style.display = "block";
  table.innerHTML = `  <table class="table" id="table">
<thead>
  <tr>
    <th scope="col">ID</th>
    <th scope="col">Name</th>
    <th scope="col">Discount</th>
    <th scope="col">Total Amount</th>
    <th scope="col">Amount After Discount</th>
    <th scope="col">Balance</th>
    <th scope="col">Deposit</th>
    <th scope="col">Withdraw</th>
    <th scope="col">Closing Balance</th>
  </tr>
</thead>
<tbody>
  <tr>
    <th scope="row">1</th>
    <td>Mark</td>
    <td>Otto</td>
    <td>@mdo</td>
  </tr>
  <tr>
    <th scope="row">2</th>
    <td>Jacob</td>
    <td>Thornton</td>
    <td>@fat</td>
  </tr>
  <tr>
    <th scope="row">3</th>
    <td>Larry</td>
    <td>the Bird</td>
    <td>@twitter</td>
  </tr>
</tbody>
</table>

<button type="button" class="btn btn-danger" id="closeBtn" onclick="closeTable()">Close</button>
`;
  let addcustomer = document.getElementById("addcustomer");
  addcustomer.style.pointerEvents = "none";
}

function closeTable() {
  let table = document.getElementById("showTable");
  table.style.display = "none";
  let addcustomer = document.getElementById("addcustomer");
  addcustomer.style.pointerEvents = "fill";
}
