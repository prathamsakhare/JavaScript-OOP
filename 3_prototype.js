// ! Prototype 
// ? Prototypes are the mechanism by which JavaScript objects inherit features from one another

// ? Tip : Array and objects are built in constructors in JavaScript

function BankAccount(customerName, balance = 0) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;

    // ? Now these methods, we can store them in prototype of the constructor function and inherit them as we need ...

    // ! Previous method 
    // this.deposit = (amount) => {
    //     this.balance += amount;
    // }

    // this.withdraw = (amount) => {
    //     if(this.balance - amount < 0){
    //         console.log('You Cannot have this much money in your account!')
    //     }else{
    //         this.balance -= amount
    //     }
    // }

    // ! New method
    BankAccount.prototype.deposit = function (amount){
        this.balance += amount;
    }

    BankAccount.prototype.withdraw = function (amount) {
        if(this.balance - amount < 0){
            console.log('You Cannot have this much money in your account!')
        }else{
            this.balance -= amount
        }
    }
}

const rakeshAccount = new BankAccount('Rakesh K.');

console.log(rakeshAccount);

rakeshAccount.deposit(100);
console.log(rakeshAccount);

