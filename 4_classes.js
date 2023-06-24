// ! Classes in JavaScript

// ? Javascript's object model is prototype-based, rather than class-based, which makes it hard to understand. The class syntax is a useful tool, but it is really only syntactic sugar to make the model easier to understand. In reality, a JS class is actually a function, with a prototype associated with it.

class BankAccount{
    // ? variables inside this  == properties 
    // ? functions inside this == methods
    // ? Hoisting do not work with classes
    
    // ! properties
    customerName;
    accountNumber;
    balance = 0;

    // ? to get parameters, classes don't have braces after their names, so in order to get parameters, we use constructor method inside the class

    // ! Methods
    // ? methods made in classes directly gets stored in prototype
    constructor(customerName, balance = 0){
        this.customerName = customerName;
        this.accountNumber = Date.now();
        this.balance = balance;

    }

    deposit(amount){
        this.balance += amount;
    }

    withdraw(amount){
        this.balance -= amount;
    }

}

const rakeshAccount = new BankAccount("Rakesh K", 100);
console.log(rakeshAccount);
rakeshAccount.deposit(100);
console.log(rakeshAccount);