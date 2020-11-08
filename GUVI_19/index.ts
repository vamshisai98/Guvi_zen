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

// // let customerDetails = new Customer({'','',''})

function showTable() {
    console.log('working')
    let table = document.getElementById("showTable");
    table.style.display = "block"
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
    let addcustomer = document.getElementById('addcustomer')
    addcustomer.style.pointerEvents = "none"
}

function closeTable() {
    let table = document.getElementById('showTable')
    table.style.display = 'none'
    let addcustomer = document.getElementById('addcustomer')
    addcustomer.style.pointerEvents = "fill"
}