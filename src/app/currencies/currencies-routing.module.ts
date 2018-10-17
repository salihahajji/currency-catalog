import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayerComponent } from './components/displayer/displayer.component';
import { OneCurrencyComponent } from './components/one-currency/one-currency.component';

const currenciesModuleRoutes: Routes = [
  { 
    path: '', component: DisplayerComponent
   },
  {
    path: '#/currency/:id', component: OneCurrencyComponent
  },
  {
    path: '**', component: DisplayerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(currenciesModuleRoutes)],
  exports: [RouterModule]
})
export class CurrenciesRoutingModule { }
export const routingComponents = [DisplayerComponent, OneCurrencyComponent];