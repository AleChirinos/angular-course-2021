import { Component, OnInit } from '@angular/core';

import {WalletService} from "./services/wallet.service";
import {TransactionService} from "./services/transaction.service";

import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  wallets: any[] = [];
  transactions: any[] = [];

  mSubGet: Subscription;
  mSubPost: Subscription;
  mSubDelete: Subscription;
  mSubPut: Subscription;

  masForm: FormGroup;

  currentDate = new Date();
  

  editId: any;
  edit: boolean;

  constructor(private walletService: WalletService,
              private transactionService: TransactionService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.edit = false;
    this.loadWallets();
    this.loadTransactions();
    this.masForm = this.formBuilder.group({
      date: this.currentDate.toLocaleDateString(),
      from: '',
      to: '',
      quantity: '',
      moneyType: '',
      mineType: '',
      miner: ''
    });
  }

  onMine(transaction: any): void {
    const walletFROM = this.wallets.find(w => w.wallet === transaction.from);
    const walletTO = this.wallets.find(w => w.wallet === transaction.to);

    walletFROM[transaction.moneyType] = walletFROM[transaction.moneyType] - transaction.quantity;
    walletTO[transaction.moneyType] = walletTO[transaction.moneyType] + transaction.quantity;

    this.transactionService.delete(transaction.id).subscribe(() => this.loadTransactions());
    this.walletService.update(walletFROM.id, walletFROM).subscribe(res => this.loadWallets());
    this.walletService.update(walletTO.id, walletTO).subscribe(res => this.loadWallets());
  }

  getTransactionsStatus(): boolean {
    const aux = this.transactions.filter(t => t.mineType === 'PoS' && t.miner < 5);
    return this.transactions.length === aux.length;
  }

  getTotalCoin(type: string): number {
    return this.wallets.reduce((acc, value) => acc + (value[type] > 0 ? value[type] : 0), 0);
  }

  loadTransactions(): void {
    this.transactionService.getAll().subscribe(res =>
      this.transactions = Object.entries(res).map((s: any) => ({id: s[0], ...s[1]}))
    );
  }

  loadWallets(): void {
    this.walletService.getAll().subscribe(res =>
      this.wallets = Object.entries(res).map((s: any) => ({id: s[0], ...s[1]}))
    );
  }

  onCreate(): void{
    console.log(this.masForm.value);
    this.mSubPost = this.transactionService.create(this.masForm.value).subscribe(
      res => {
        console.log('ADD RES', res);
        this.loadTransactions();
      },
      error => {
        console.log('ADD ERROR', error);
      }
    );
  }

  onUpdate(): void{
    this.mSubPut = this.transactionService.update(this.editId, this.masForm.value).subscribe(
      res => {
        console.log('UPDATE RES', res);
        this.loadTransactions();
      },
      error => {
        console.log('UPDATE ERROR', error);
      }
    );
  }

  onEdit(transaction: any): void{
    this.editId = transaction.id;
    this.masForm.patchValue(transaction);
    this.edit = true;
  }

  notEdit(): void{
    this.edit = false;
    this.editId = '';

    this.masForm.patchValue({
      from: '',
      to: '',
      quantity: '',
      moneyType: '',
      mineType: '',
      miner: ''
    });
  }
}
