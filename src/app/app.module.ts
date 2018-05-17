import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { TableComponent } from './components/table.component';
import { SearchComponent } from './components/search.component';

import { CatalogService } from './services/catalog';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    SearchComponent
  ],
  exports: [
    TableComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [CatalogService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
