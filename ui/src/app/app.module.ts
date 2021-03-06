import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ContentListRoute } from './routes/content-list/content-list';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { PopoverModule } from 'ngx-bootstrap';
import {GoodsListRoute} from "./routes/goods-list.route";
import {AddGoodsRoute} from "./routes/add-goods.route";
import {GoodsItemRoute} from "./routes/goods-item.route";
import {BasketRoute} from "./routes/basket.route";
import {AboutRoute} from "./routes/about.route";

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    PopoverModule.forRoot()
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  declarations: [
    AppComponent,
    ContentListRoute,
    GoodsListRoute,
    AddGoodsRoute,
    GoodsItemRoute,
    BasketRoute,
    AboutRoute
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
