import { Component, OnInit } from '@angular/core';
import { CurrenciesService } from '../../services/currencies.service';
import { Currency } from '../../models/currency';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-one-currency',
  templateUrl: './one-currency.component.html',
  styleUrls: ['./one-currency.component.css']
})
export class OneCurrencyComponent implements OnInit {
  currency: Currency;
  constructor(private currenciesService: CurrenciesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getCurrencyById();
  }

  private getCurrencyById() {
    this.currenciesService.getCurrencyById(this.route.snapshot.params.id).subscribe((currency: Currency) => {
      this.currency = currency;
    }),
      (error: any) => {
        console.log("Application does not work");
      };
  }
}
