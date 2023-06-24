// ! Constructor Function 

// ? Constructor function should always starts with Capital Letter

function BankAccount(customerName, balance = 0) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;
    
    // ? you can make custom methods for object

    this.deposit = (amount) => {
        this.balance += amount;
    }

    this.withdraw = (amount) => {
        if(this.balance - amount < 0){
            console.log('You Cannot have this much money in your account!')
        }else{
            this.balance -= amount
        }
    }

}

// ? Everytime, While making the new element from the constructor function, call the constructor by 'new' keyword

const rakeshAccount = new BankAccount('Rakesh K', 1000);
const johnAccount = new BankAccount('John Doe')

console.log(rakeshAccount);
console.log(johnAccount)

// ? you can access properties inside the object 

console.log(rakeshAccount.balance);

// ? You can also change the values

rakeshAccount.balance = 500;
console.log(rakeshAccount.balance);


// ? you can use custom made methods 

rakeshAccount.deposit(200);

console.log(rakeshAccount.balance)


console.log(rakeshAccount, johnAccount);

// ? johnAccount balance is 0;
// ? let's make it 1000;

johnAccount.deposit(1000);
console.log(johnAccount);

rakeshAccount.withdraw(500);
console.log(rakeshAccount.balance)

rakeshAccount.deposit(500);
console.log(rakeshAccount)