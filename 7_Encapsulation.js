// ! Encapsulation
// ? Encapsulation is the packing of data and functions into one component (for example, a class) and then controlling access to that component to make a "blackbox" out of the object.

class BankAccount {
  customerName;
  accountNumber;

  // ? whichever property you wanna make private, just put a # before its name

  #balance = 0;

  constructor(customerName, balance = 0) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.#balance = balance;
  }

  deposit(amount) {
    this.#balance += amount;
  }

  withdraw(amount) {
    this.#balance -= amount;
  }

  // ? only methods inside the class can access its private properties

  // ! setters
  // ? old way
  // setBalance(amount){
  //     if(isNaN(amount)){
  //         throw new Error('Please enter valid amount!')
  //     }
  //     this.#balance = amount
  // }

  // ? new way
  set balance(amount) {
    if (isNaN(amount)) {
      throw new Error("Please enter valid amount!");
    }
    this.#balance = amount;
  }

  // ! getters
  // ? old way
  // getBalance(){
  //     return this.#balance;
  // }

  // ? new way
  get balance() {
    return this.#balance;
  }
}

class CurrentAccount extends BankAccount {
  transactionLimit = 50000;

  constructor(customerName, balance = 0) {
    super(customerName, balance);
  }

  takeBuisnessLoan(amount) {
    console.log("Taking buisness loan : " + amount);
  }
}

const johnAccount = new CurrentAccount("John Doe", 1000);
console.log(johnAccount);
// ? now this below line will give error because balance is private property and we cannot change it from outside

// johnAccount.#balance = 2000;

// ? here we can use a property that is defined under the same class where this private property is defined and then by using the method we can change the property

// ? old way
// johnAccount.setBalance(1200);
// ? new way
johnAccount.balance = 1200;

console.log(johnAccount);

// ? this below line will throw error bcz private property is not accessible outside class, but we can make a method inside the class by which we can access it

// console.log(johnAccount.#balance);

// * now we can access it using a method that is defined under the class

// ? old way
// console.log(johnAccount.getBalance())

// ? new way
console.log(johnAccount.balance);
