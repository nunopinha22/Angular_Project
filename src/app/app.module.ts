import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent, FilterPipe } from './app.component';
import { TableComponent } from './components/table.component';
import { SearchComponent } from './components/search.component';


import { CatalogService } from './services/catalog';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    SearchComponent,
    FilterPipe
  ],
  exports: [
    TableComponent,
    SearchComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    CatalogService,
    FilterPipe
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
