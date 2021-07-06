//nested object
var accounts = {
    1000: { acno: 1000, ac_type: "savings", balance: 5000 },
    1001: { acno: 1001, ac_type: "savings", balance: 6000 },
    1002: { acno: 1002, ac_type: "credit", balance: 3000 }

}
// balance of key 1000
console.log(accounts[1000].balance);
//adding new key and value
accounts[1003] = { acno: 1003, ac_type: "savings", balance: 3000 }
console.log(accounts);
var accounts = {
   
    1000: {
        acno: 1000, ac_type: "savings", balance: 5000, c_transactions: [
            { date: "01/06/2021", from: 1002, amount: 1000 },
            { date: "02/05/2021", from: 1003, amount: 500 },
            { date: "03/06/2021", from: 1001, amount: 1000 }]
    },
    1001: {
        acno: 1001, ac_type: "savings", balance: 6000, c_transactions: [
            { date: "01/06/2021", from: 1000, amount: 1000 },
            { date: "02/05/2021", from: 1003, amount: 500 },
            { date: "03/06/2021", from: 1001, amount: 1000 }]
    },
    1002: {
        acno: 1002, ac_type: "credit", balance: 3000, c_transactions: [
            { date: "01/06/2021", from: 1002, amount: 1000 },
            { date: "02/05/2021", from: 1000, amount: 500 },
            { date: "03/06/2021", from: 1001, amount: 1000 }]
    }

}
console.log(accounts[1000]["c_transactions"]);
console.log(accounts[1001].c_transactions);
accounts[1000].c_transactions.filter(transcation=>transcation.amount>500).
forEach(transaction=>console.log(transaction));
var sum=accounts[1000].c_transactions.map(transaction=>transaction.amount).reduce((trans1,trans2)=>trans1+trans2);
console.log(sum);
var amt=accounts[1000].c_transactions.map(transcation=>transcation.amount).reduce((trans1,trans2)=>trans1<trans2?trans1:trans2);
console.log(amt);
accounts[1000].c_transactions.filter(trans=>trans.date).forEach(trans=>console.log(trans));

    



