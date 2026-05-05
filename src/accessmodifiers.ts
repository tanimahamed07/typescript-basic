// access >> modifier

class BankAccount {
  readonly userId: number;
  public userName: string;
  //   private userBalance: number;
  protected userBalance: number;

  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this.userBalance = userBalance;
  }
  addBalance(balance: number) {
    this.userBalance = this.userBalance + balance;
  }
}

class StudentBankAccount extends BankAccount {}

const tanimBankAccount = new BankAccount(111, "Tanim", 0);
tanimBankAccount.addBalance(100);
tanimBankAccount.addBalance(50);
// tanimBankAccount.userId = 303
