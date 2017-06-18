import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ContentService} from "../services/content.service";

@Component({
  templateUrl: 'goods-item.route.html'
})
export class GoodsItemRoute implements OnInit {

  name: string;
  good: any;
  isLoading: boolean = true;

  constructor(private routeParams: ActivatedRoute, private contentService: ContentService) {}

  ngOnInit(): void {
    this.routeParams.params.subscribe(
      (params) => {
        this.name = params['name'];
        this.getGoodsItem(this.name);
      },
      (err) => {
        console.log('GoodsItemRoute ngOnInit()', err);
      }
    )
  }

  getGoodsItem(name: string): void {
    this.contentService.getGoodsItem(name).subscribe(
      (data) => {
        this.good = data;
        this.isLoading = false;
        console.log('data', data);
      },
      (err) => {
        console.log('err', err);
      }
    )
  }
}
