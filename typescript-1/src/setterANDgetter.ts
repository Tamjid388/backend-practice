// npx ts-node src/AccessModifiers.ts

class BankAccount {
  readonly userId: number;
  public userName: string;
  private _userBalance: number;
  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this._userBalance = userBalance;
  }

  //   addBalance(balance: number) {
  //     this._userBalance += balance;
  //   }

  // --> Using Setter

  set addBalance(amount: number) {
    this._userBalance += amount;
  }

  // getBalance() {
  //     return this._userBalance;
  //   }

  //  --> Using Getter

  get getBalance() {
    return this._userBalance;
  }
}

class StudentAccount extends BankAccount {}

const useraccount1 = new BankAccount(2213, "tamjid", 25000);

useraccount1.addBalance=4000
console.log(useraccount1.getBalance);


// console.log(useraccount1.getBalance());
