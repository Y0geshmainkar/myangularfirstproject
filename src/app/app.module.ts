import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EInfoComponent } from './e-info/e-info.component';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import {HttpClientModule} from '@angular/common/http';
import { HttpAPIComponent } from './http-api/http-api.component'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    TableComponent,
    EInfoComponent,
    ItemDetailsComponent,
    HttpAPIComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }

