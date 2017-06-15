import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GoodsListRoute} from "./routes/goods-list.route";

export const routes: Routes = [
  { path: '', redirectTo: 'context', pathMatch: 'full' },
  {
    path: 'goods',
    children: [
      { path: '', component: GoodsListRoute }
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
