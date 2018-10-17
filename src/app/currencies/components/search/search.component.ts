import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CurrenciesService } from '../../services/currencies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() public searchPage = new EventEmitter();

  filterKey: string;
  filterValue: string;

  searchKey = [
    { name: 'Any', value: 'search' },
    { name: 'Id', value: 'id' },
    { name: 'Code', value: 'code' },
    { name: 'Name', value: 'name' },
    { name: 'Type', value: 'currency_type' }
  ];

  constructor(currenciesService: CurrenciesService) {
  }

  ngOnInit() {
    this.filterKey = 'search';
  }

  updatekey(key) {
    this.filterKey = key;
    this.searchPage.emit({
      filterKey: this.filterKey.toString(),
      filterValue: this.filterValue.toString()
    });
  }

  updateValue(value) {
    this.filterValue = value;
    this.searchPage.emit({
      filterValue: this.filterValue.toString(),
      filterKey: this.filterKey.toString()
    });
  }

}
