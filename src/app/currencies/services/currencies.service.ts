import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CurrenciesService {
  private apiUrl = 'https://api.openfintech.io/v1';
  private url = 'https://api.myjson.com/bins/teup4';
  private oneCurrencyUrl = 'https://api.myjson.com/bins/11j6m8';

  constructor(private httpClient: HttpClient) { }

  getAllCurrencies(pageSize: number, pageNumber: number, filterKey: string, filterValue: string) {
    var paginationUrl = this.apiUrl + '/currencies?page%5Bnumber%5D=' + pageNumber + '&page%5Bsize%5D=' + pageSize;
    if (filterKey !== undefined && filterValue.length > 0) {
      var searchUrl = paginationUrl + '&filter%5B' + filterKey + '%5D=' + filterValue;
      return this.httpClient.get(`${searchUrl}`, {
        headers: {
          'Accept': 'application/vnd.api+json'
        }
      });
    }
    else {
      return this.httpClient.get(`${paginationUrl}`,
        {
          headers: {
            'Accept': 'application/vnd.api+json'
          }
        });
    }
  }

  getCurrencyById(id: string) {
    var oneCurrencyUrl = this.apiUrl + '/currencies/' + id;
    return this.httpClient.get(`${oneCurrencyUrl}`, {
      headers: {
        'Accept': 'application/vnd.api+json'
      }
    });

  }
}
