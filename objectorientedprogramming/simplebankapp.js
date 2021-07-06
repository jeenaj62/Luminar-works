class Bank{
    createAccount(account_no,name,balance){
        this.account_no=account_no;
        this.name=name;
        this.balance=balance;
        }
        balanceEnquiry(){
            console.log("your account balance is="+this.balance);
        }
             
        deposit(amt){
          
                this.balance+=amt;
                console.log(`your account ${this.account_no} has been credited by ${amt} your aval balance:${this.balance} `);
            
        }
        withdrawal(amt){
            if(this.balance<amt)
            {
                console.log("Transcation Failed insufficient balance");
            }
            else{
                this.balance-=amt;
                console.log(`your account ${this.account_no} has been debited by ${amt} your aval balance:${this.balance} `);
            }
        }
    }
    
    var obj=new Bank();
    obj.createAccount(1000,"ram",2000);
    obj.withdrawal(5000);
    obj.balanceEnquiry();
    
