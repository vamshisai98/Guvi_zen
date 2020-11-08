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
    console.log('working');
    var table = document.getElementById("showTable");
    table.style.display = "block";
    table.innerHTML = "  <table class=\"table\" id=\"table\">\n<thead>\n  <tr>\n    <th scope=\"col\">ID</th>\n    <th scope=\"col\">Name</th>\n    <th scope=\"col\">Discount</th>\n    <th scope=\"col\">Total Amount</th>\n    <th scope=\"col\">Amount After Discount</th>\n    <th scope=\"col\">Balance</th>\n    <th scope=\"col\">Deposit</th>\n    <th scope=\"col\">Withdraw</th>\n    <th scope=\"col\">Closing Balance</th>\n  </tr>\n</thead>\n<tbody>\n  <tr>\n    <th scope=\"row\">1</th>\n    <td>Mark</td>\n    <td>Otto</td>\n    <td>@mdo</td>\n  </tr>\n  <tr>\n    <th scope=\"row\">2</th>\n    <td>Jacob</td>\n    <td>Thornton</td>\n    <td>@fat</td>\n  </tr>\n  <tr>\n    <th scope=\"row\">3</th>\n    <td>Larry</td>\n    <td>the Bird</td>\n    <td>@twitter</td>\n  </tr>\n</tbody>\n</table>\n\n<button type=\"button\" class=\"btn btn-danger\" id=\"closeBtn\" onclick=\"closeTable()\">Close</button>\n";
    var addcustomer = document.getElementById('addcustomer');
    addcustomer.style.pointerEvents = "none";
}
function closeTable() {
    var table = document.getElementById('showTable');
    table.style.display = 'none';
    var addcustomer = document.getElementById('addcustomer');
    addcustomer.style.pointerEvents = "fill";
}
