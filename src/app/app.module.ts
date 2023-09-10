import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TopheaderComponent } from './topheader/topheader.component';
import { HeaderComponent } from './header/header.component';
import { TopmenuComponent } from './header/topmenu/topmenu.component';
import { MainMenuComponent } from './header/main-menu/main-menu.component';
import { ProductListComponent } from './product-list/product-list.component';
@NgModule({
  declarations: [
    AppComponent,
    TopheaderComponent,
    HeaderComponent,
    TopmenuComponent,
    MainMenuComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
