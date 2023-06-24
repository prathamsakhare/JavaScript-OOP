
// ? In real life we have many types of bank accounts, bankAccount, currentAccount etc...

// ! BankAccount

function BankAccount(customerName, balance = 0) {

    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;
    
}

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

// ! CurrentAccount

function CurrentAccount(customerName, balance = 0) {

    // this.customerName = customerName;
    // this.accountNumber = Date.now();
    // this.balance = balance;

    // ! to inherit all the properties from a class, you should call it 
    // * this is constructor linking
    BankAccount.call(this, customerName, balance);

    // * here the first parameter is this keyword, and then all the properties that you need to get from the customer
    
    this.transactionLimit = 50000;
    
}

const rakeshAccount = new CurrentAccount('Rakesh K.', 100)
console.log(rakeshAccount);

// ! To inherit Prototypes, you should use method Object.create({className})

CurrentAccount.prototype = Object.create(BankAccount.prototype);

const rakeshAccount2 = new CurrentAccount('Rakesh K.', 100)
console.log(rakeshAccount2);


CurrentAccount.prototype.takeBuisnessLoadn = function (amount){
    console.log('Taking buisness load : ' + amount);
}

// CurrentAccount.prototype.deposit = function (amount){
//     this.balance += amount;
// }

// CurrentAccount.prototype.withdraw = function (amount) {
//     if(this.balance - amount < 0){
//         console.log('You Cannot have this much money in your account!')
//     }else{
//         this.balance -= amount
//     }
// }

// ! Saving Account

function SavingAccount(customerName, balance = 0) {

    // this.customerName = customerName;
    // this.accountNumber = Date.now();
    // this.balance = balance;
    // ! inheriting properties
    BankAccount.call(this, customerName, balance);
    this.transactionLimit = 50000;
    
}

// ! inheriting prototypes / methods
SavingAccount.prototype = Object.create(BankAccount.prototype);

// ? using inherited prototypes

const rakeshAccount3 = new SavingAccount('Rakesh', 100);

rakeshAccount3.deposit(100);
console.log(rakeshAccount3);

rakeshAccount3.withdraw(100);
console.log(rakeshAccount3);



SavingAccount.prototype.takePersonalLoan = function (amount){
    console.log('Taking personal load : ' + amount);
}

// SavingAccount.prototype.deposit = function (amount){
//     this.balance += amount;
// }

// SavingAccount.prototype.withdraw = function (amount) {
//     if(this.balance - amount < 0){
//         console.log('You Cannot have this much money in your account!')
//     }else{
//         this.balance -= amount
//     }
// }

// * Do you see any thing abnormal? 
// * while making each type of account, we have to repeat our code too much times, in order to avoid that we are gonna be using inheritance, the commented  lines above are the repeatation of code that can be avoided by using inheritance





