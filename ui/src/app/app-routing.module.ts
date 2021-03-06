import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GoodsListRoute} from "./routes/goods-list.route";
import {AddGoodsRoute} from "./routes/add-goods.route";
import {GoodsItemRoute} from "./routes/goods-item.route";
import {BasketRoute} from "./routes/basket.route";
import {AboutRoute} from "./routes/about.route";

export const routes: Routes = [
  { path: '', redirectTo: 'context', pathMatch: 'full' },
  {
    path: 'goods',
    children: [
      { path: '', component: GoodsListRoute },
      { path: 'add', component: AddGoodsRoute },
      { path: 'show/:name', component: GoodsItemRoute },
      { path: 'show/my/basket', component: BasketRoute }
    ]
  },
  { path: 'about', component: AboutRoute },
  { path: '**', redirectTo: 'goods', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
