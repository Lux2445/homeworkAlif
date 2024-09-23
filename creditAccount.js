const creditAccount = {
    owner: 'John Doe', 
    balance: 0,      
    creditLimit: 5000,
    apr: 0.18,      

    deposit(amount) {
        this.balance += amount;
        console.log(`Пополнение на: ${amount}. Текущий баланс: ${this.balance}`);
    },

    withdraw(amount) {
        if (this.balance - amount < -this.creditLimit) {
            console.log('Превышен кредитный лимит. Операция отклонена.');
        } else {
            this.balance -= amount;
            console.log(`Снято: ${amount}. Текущий баланс: ${this.balance}`);
        }
    },

    applyInterest() {
        if (this.balance < 0) {
            const interest = Math.abs(this.balance) * (this.apr / 12);
            this.balance -= interest;
            console.log(`Начислены проценты: ${interest.toFixed(2)}. Текущий баланс: ${this.balance.toFixed(2)}`);
        } else {
            console.log('Задолженности нет, проценты не начислены.');
        }
    },

    getBalance() {
        return this.balance;
    },

    getDebt() {
        return this.balance < 0 ? Math.abs(this.balance) : 0;
    }
};

creditAccount.deposit(1000);     
creditAccount.withdraw(2000);  
creditAccount.applyInterest();  
console.log(`Задолженность: ${creditAccount.getDebt()}`); 
