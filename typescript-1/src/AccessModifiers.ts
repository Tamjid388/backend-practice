// npx ts-node src/AccessModifiers.ts

class BankAccount {
  readonly userId: number;
  public userName: string;
  private userBalance: number;
  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this.userBalance = userBalance;
  }


  addBalance(balance:number){
    this.userBalance+=balance;
  }
}

class StudentAccount extends BankAccount{
    
}



const useraccount1 = new BankAccount(2213, "tamjid", 25000);

useraccount1.addBalance(300)
console.log(useraccount1)
