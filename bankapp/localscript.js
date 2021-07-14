function createUser() {
    let account_number = ac_no.value;
    let password = pwd.value;
    let balance = bal.value;
    let user = {
        account_number: account_number,
        password: password,
        balance: balance

    }
    localStorage.setItem(user.account_number, JSON.stringify(user));
    alert("book created");
    location.reload(true);
}
  function populate(users) {
        let htmlData = ""
        for (let user of users) {
            htmlData += `<div class="card" style="width: 18rem; margin-bottom:10px;">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">account number: ${user.account_number}</li>
          <li class="list-group-item"> password: ${user.password}</li>
          <li class="list-group-item">balance: ${user.balance}</li>
        </ul>
      </div>`
        }
        document.querySelector("#resultarea").innerHTML = htmlData
    }
/*function populate(users) {
    let htmlData = ""
    for (let user of users) {
        htmlData += `<p> account_number:${account_number} password :${password} balance:${balance}</p>`
    }
    resultarea.innerHtml = htmlData
}*/
function listAllUsers() {
    let users = []
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i)
        let user = JSON.parse(localStorage.getItem(key))
        users.push(user)
    }
    populate(users);
}

function signin() {
    let uname = username.value;
    let pass = password.value;
    if (uname in localStorage) {
        let user = JSON.parse(localStorage.getItem(uname))
        if (user.password === pass) {
            sessionStorage.setItem("user", uname);
            alert("login success");
            window.location.href = "userhome.html";
        }
        else {
            alert("failed");
        }
    }
    else {
        alert("user not found")
    }

}
user = sessionStorage.setItem("user");
if (user) {
    profile.innerHtml = `{user}`
}

function displayBalance() {
    let user = sessionStorage.getItem("user");
    let data = JSON.parse(localStorage.getItem(user));
    alert(data.balance);
}
function logout() {
    sessionStorage.removeItem("user");
    location.href = "login.html";
}
function getUser(acno){
let user=JSON.parse(localStorage.getItem(acno));
return user;
}
function fundTransfer() {
    let acc_no = toaccount.value;
    let conf_acno = confirmaccount.value;
    let amt = amount.value;
    if (acc_no in localStorage) {
        let user = sessionStorage.getItem("user");
      //  let account = JSON.parse(localStorage.getItem(user));
        let account=getUser(user);
        if (account.balance < amount) {
            alert("Insufficient Balance");
        }
        else{
             account.balance-=amount;
             localStorage.setItem(user,JSON.stringify(account))
             let credit_ac=getUser(acc_no);
             credit_ac.balance=amount+Number(credit_ac.balance);
             localStorage.setItem(acc_no,JSON.stringify(credit_ac))
        }
    }
    else {
        alert("invalid account number");
    }
}


