import {Component, OnInit} from '@angular/core';
import {ContentService} from "../services/content.service";
import {LocalStorageService} from "../services/local-storage.service";

@Component({
  templateUrl: './goods-list.route.html'
})
export class GoodsListRoute implements OnInit {

  goods: any[];

  constructor(private contentService: ContentService, private localStorage: LocalStorageService) {}

  ngOnInit(): void {
    this.contentService.getGoods().subscribe(
      (data) => {
        console.log('data', data);
        this.goods = data;
      },
      (err) => {
        console.log('GoodsListRoute ngOnInit() getGoods()', err);
      }
    )
  }

  addToBasket(good): void {
    this.localStorage.setItem(good.name, good);
  }
}
