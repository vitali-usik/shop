import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GoodsListRoute} from "./routes/goods-list.route";
import {AddGoodsRoute} from "./routes/add-goods.route";

export const routes: Routes = [
  { path: '', redirectTo: 'context', pathMatch: 'full' },
  {
    path: 'goods',
    children: [
      { path: '', component: GoodsListRoute },
      { path: 'add', component: AddGoodsRoute }
    ]
  },
  { path: '**', redirectTo: 'goods', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
