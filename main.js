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
    }

    // methods: balance(), deposit(amt), charge(payee, amt)
    balance(){
        // This method does not take any input, and returns the current balance on the account. 
        // The balance is computed by summing up the amounts in the transactions array.
    }

    deposit(amt){
        // This method takes in a single input, the deposit amount. 
        // This method should create a new transaction representing the deposit, and add it to the transactions array.
        // NOTE: You should not be able to deposit a negative amount
    }

    charge(payee, amt){
        // This method takes in the payee and amount, 
        // creates a new transaction with the payee and amount, 
        // and adds the transaction to the transaction array.
        // NOTE: You should not be able to charge an amount that would make your balance dip below 0
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
    }
}