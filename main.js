'use strict'

class BankAccount {
    accountNumber;
    // String representing the account number
    owner;
    // String representing the owner of the account
    transactions;
    // An array of transactions representing the history of all transactions associated with this account

    constructor(accountNumber, owner){
        this.accountNumber = accountNumber;
        this.owner = owner;
        this.transactions = [];
    }

    // methods: balance(), deposit(amt), charge(payee, amt)
    balance(){
        // This method does not take any input, and returns the current balance on the account. 
        // The balance is computed by summing up the amounts in the transactions array.
    let sum= 0;
        for(let i = 0; i < this.transactions.length; i++){
        sum += this.transactions[i].amount;
        }
        return sum;
    }
    // the balance (or amount in bank account) is first set to zero because nothing is in it 
    // loop through all the transactions and then add the amounts of each transaction 
    // the amount is returned.


    charge(payee, amount){
        // This method takes in the payee and amount, 
        // creates a new transaction with the payee and amount, 
        // and adds the transaction to the transaction array.
        // NOTE: You should not be able to charge an amount that would make your balance dip below 0

        let currentBalance = this.balance();
        if(amount > currentBalance){
            // do nothing
        } else {
            let chargeTransaction = new Transaction(-amount, payee);
            this.transactions.push(chargeTransaction)
    };
    }

    deposit(amount){
        // This method takes in a single input, the deposit amount. 
        // This method should create a new transaction representing the deposit, and add it to the transactions array.
        // NOTE: You should not be able to deposit a negative amount
        if (amount > 0){
        let deposits = new Transaction(amount, this.owner);
        this.transactions.push(deposits);
}
    }
}




class Transaction {
    date;
    // not passed into the constructor. set current date automatically
    amount;
    //  The amount of the transaction. 
    // Positive amounts are money going into the account (deposit, refund). 
    // Negative amounts are money coming out of the account (a charge or debit).
    payee;
    // The description or payee on the transaction

    constructor(amount, payee){
        
        this.amount = amount;
        this.payee = payee;
        this.date= new Date();
    }
}

// tests from the zoom recording

if (typeof describe === 'function') {
    
    const assert = require('assert');

    describe("account creation test", function(){
        it('should create a new account correctly', function(){
            let acct1 = new BankAccount('xx4432', "James Doe");
            assert.equal(acct1.owner, 'James Doe');
            assert.equal(acct1.accountNumber, 'xx4432');
            assert.equal(acct1.transactions.length, 0);
            assert.equal(acct1.balance(), 0);
        })
    })


    describe("transaction test", function(){
        it('should create a transaction correctly for a charge', function(){
            let transaction1 = new Transaction(-50.50, "Amazon.com");
            assert.equal(transaction1.amount, -50.50);
            assert.equal(transaction1.payee, 'Amazon.com');
        });

        it('should create a transaction correctly for a deposit', function(){
            let transaction2 = new Transaction(100.00, "Deposit");
            assert.equal(transaction2.amount, 100.00);
            assert.equal(transaction2.payee, "Deposit");
        })
    })

    describe("#testing account balance ", function(){
        it('should create a new account correctly ', function(){
            let acct4 = new BankAccount('xx4432', "James Doe");
            assert.equal(acct4.balance(), 0);
            acct4.deposit(100);
            assert.equal(acct4.balance(), 100);
            acct4.charge("Target", 10);
            assert.equal(acct4.balance(), 90);

        });
    })
}