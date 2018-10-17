import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrenciesRoutingModule, routingComponents } from './currencies-routing.module';
import { MatToolbarModule, MatCardModule, MatGridListModule, MatPaginatorModule, MatSelectModule, MatInputModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';

import { DisplayerComponent } from './components/displayer/displayer.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  imports: [
    CommonModule, 
    CurrenciesRoutingModule, 
    MatToolbarModule,
    MatCardModule,    
    FlexLayoutModule,
    MatGridListModule,
    HttpClientModule,
    MatPaginatorModule,
    BrowserAnimationsModule, 
    MatFormFieldModule,
    MatSelectModule, 
    MatInputModule
  ],
  declarations: [routingComponents, DisplayerComponent, SearchComponent],
  exports: [routingComponents, DisplayerComponent]
})
export class CurrenciesModule { }
