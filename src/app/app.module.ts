import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent, FilterPipe } from './containers/main.component';
import { TableComponent } from './components/table.component';
import { SearchComponent } from './components/search.component';
import { DetailComponent } from './containers/detail.component'

import { AppRoutingModule } from './app.routing';

import { CatalogService } from './services/catalog';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TableComponent,
    SearchComponent,
    DetailComponent,
    FilterPipe
  ],
  exports: [
    MainComponent,
    TableComponent,
    SearchComponent,
    DetailComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    CatalogService,
    FilterPipe
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
