import { AfterContentInit, Component, ViewChild } from '@angular/core';

import { MediaChange, ObservableMedia } from '@angular/flex-layout';
import { MatGridList } from '@angular/material';
import { CurrenciesService } from '../../services/currencies.service';
import { CurrencyWithMeta } from "../../models/currency-with-meta";
import { Currency } from "../../models/currency";

@Component({
  selector: 'app-displayer',
  templateUrl: './displayer.component.html',
  styleUrls: ['./displayer.component.css']
})
export class DisplayerComponent implements AfterContentInit {
  @ViewChild('grid') grid: MatGridList;

  gridByBreakpoint = {
    xl: 8,
    lg: 6,
    md: 4,
    sm: 2,
    xs: 1
  }

  constructor(private observableMedia: ObservableMedia, private currenciesService: CurrenciesService) { }

  ngAfterContentInit() {
    this.observableMedia.asObservable().subscribe((change: MediaChange) => {
      this.grid.cols = this.gridByBreakpoint[change.mqAlias];
    });
  }

  currencies: Currency[] = [];
  total: number = 99;

  ngOnInit() {
    this.getAllCurrencies(10, 1, "", "");
  }

  public getAllCurrencies(pageSize, pageNumber, filterKey, filterValue) {
    this.currenciesService.getAllCurrencies(pageSize, pageNumber, filterKey, filterValue).subscribe((currencyWithMeta: CurrencyWithMeta) => {
      this.total = currencyWithMeta.meta.total;
      this.currencies = currencyWithMeta.data;
    }), (error: any) => {
      console.log("Application does not work");
    };
  }

  public onPaginateChange(event) {
    this.getAllCurrencies(event.pageSize, event.pageIndex + 1, "", "");
  }

  public onSearch(event) {
    this.getAllCurrencies(10, 1, event.filterKey, event.filterValue);
  }
}