import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {BodyComponent} from "./page/body/body.component";
import {FooterComponent} from "./page/footer/footer.component";
import {HeaderComponent} from "./page/header/header.component";
import {InitComponent} from "./page/init/init.component";
import {AppRouterModule} from "./app.router.module";

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    FooterComponent,
    HeaderComponent,
    InitComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
