import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatCardModule, MatFormFieldModule, MatInputModule } from '@angular/material';

import {StoreModule} from "@ngrx/store";
import {initialState, reducers} from "./app.state";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";

import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';
import { BananaComponent } from './banana/banana.component';
import {APP_BASE_HREF} from "@angular/common";


@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    RouterModule.forRoot(AppRoutes),
    StoreModule.forRoot(reducers, {initialState}),
    StoreDevtoolsModule.instrument({maxAge: 25})
  ],
  declarations: [
    AppComponent,
    BananaComponent
  ],
  providers: [{provide: APP_BASE_HREF, useValue: ''}],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
