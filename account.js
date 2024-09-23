const account = {
    owner: 'Alice',
    balance: 1000,
  
    deposit(amount) {
      this.balance += amount;
      console.log(`Депозит: ${amount}. Текущий баланс: ${this.balance}`);
    },
  
    withdraw(amount) {
      if (amount > this.balance) {
        console.log(`Недостаточно средств для снятия: ${amount}`);
      } else {
        this.balance -= amount;
        console.log(`Снято: ${amount}. Текущий баланс: ${this.balance}`);
      }
    },
  
    getBalance() {
      return this.balance;
    },
  
    getOwner() {
      return this.owner;
    }
  };

  console.log(`Владелец аккаунта: ${account.getOwner()}`); 
  
  account.deposit(500);      
  account.withdraw(200);     
  account.withdraw(2000);   
  console.log(account.getBalance());
  