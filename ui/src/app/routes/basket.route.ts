import {Component, OnInit} from '@angular/core';
import {LocalStorageService} from "../services/local-storage.service";

@Component({
  templateUrl: './basket.route.html'
})
export class BasketRoute implements OnInit {

  goods: any[];
  isLoading: boolean = true;

  constructor(private localStorage: LocalStorageService) {}

  ngOnInit(): void {
    this.goods = this.localStorage.getAllItems();
    this.isLoading = false;
  }

  remove(good): void {
    this.isLoading = true;
    //debugger
    this.localStorage.removeItem(good.name);
    this.ngOnInit();
  }

  // addToBasket(good): void {
  //   this.localStorage.setItem(good.id + good.name, good);
  // }
}
