import {Component, OnInit} from '@angular/core';
import {ContentService} from "../services/content.service";

@Component({
  templateUrl: './goods-list.route.html'
})
export class GoodsListRoute implements OnInit {

  goods: any[];

  constructor(private contentService: ContentService) {}

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
}
