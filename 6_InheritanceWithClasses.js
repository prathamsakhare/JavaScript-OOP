class BankAccount{

    customerName;
    accountNumber;
    balance = 0;

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

// ! inheriting class

class CurrentAccount extends BankAccount{
    transactionLimit = 50000;

    constructor(customerName, balance = 0){

        // ? super keyword can help you to inherit the properties from parentClass i.e BankAccount

        super(customerName, balance)
    }

    takeBuisnessLoan (amount){
        console.log('Taking buisness load : ' + amount);
    }


}

const johnAccount = new CurrentAccount('John D.', 1000);

console.log(johnAccount);

// ! the keyword 'extends' inherits all the methods of parentClass to childClass

johnAccount.withdraw(300);
console.log(johnAccount)


class SavingAccount extends BankAccount{
    transactionLimit = 10000;

    constructor(customerName, balance = 0){

        super(customerName, balance)
    }

    takePersonalLoan (amount){
        console.log('Taking personal load : ' + amount);
    }


}

const rakeshAccount = new SavingAccount('Rakesh L', 100);
console.log(rakeshAccount);
rakeshAccount.deposit(100);
console.log(rakeshAccount)