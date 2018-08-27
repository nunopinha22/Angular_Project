import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule, ActionReducer, MetaReducer } from '@ngrx/store';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';

// REDUX
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { localStorageSync } from 'ngrx-store-localstorage';
import { appReducers, AppState } from './app.reducer';

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  const localStorage = localStorageSync({ rehydrate: true, keys: ['main'] })(reducer);
  return localStorage;
}

const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    EffectsModule.forRoot([]),
    AppRoutingModule,
    StoreModule.forRoot(appReducers, {metaReducers}),
    StoreDevtoolsModule.instrument({ maxAge: 15 }),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
