import {Component} from '@angular/core';
import {ContentService} from "../services/content.service";

@Component({
  templateUrl: 'add-goods.route.html'
})
export class AddGoodsRoute {

  goods: any = {
    name: '',
    type: '',
    price: ''
  };

  constructor(private contentService: ContentService) {}

  submit(): void {
    this.contentService.submitGoods(this.goods).subscribe(
      (data) => {
        console.log('uspeh');
      },
      (err) => {
        console.log('err', err);
      }
    )
  }
}
