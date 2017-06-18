import { Injectable } from '@angular/core';
import { AbstractService } from './abstract.service';
import { Http, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class ContentService extends AbstractService{

  constructor(http: Http) {
    super(http);
  }

  getGoods(): Observable<any[]>{
    return this.get('/goods');
  }

  submitGoods(goods: any) {
    let body = `name=${goods.name}&type=${goods.type}&price=${goods.price}`;
    //let body = `username=${this.login}&password=${this.password}`;
    return this.get('/goods/add' + '?' + body);
  }

  getGoodsItem(name: string): Observable<any[]>{
    return this.get('/good?name=' + name);
  }

  // getContentById(id): Observable<any> {
  //   let options = new RequestOptions();
  //   let params = new URLSearchParams();
  //
  //   params.set('content_id', id.toString());
  //   options.search = params;
  //
  //   return this.getById('/content', options);
  // }
  //
  // getLinkedContexts(id): Observable<any> {
  //   let options = new RequestOptions();
  //   let params = new URLSearchParams();
  //
  //   params.set('content_id', id.toString());
  //   options.search = params;
  //
  //   return this.getById('/content_contexts', options);
  // }
  //
  // deleteContent(id): Observable<any> {
  //   let options = new RequestOptions();
  //   let params = new URLSearchParams();
  //
  //   params.set('content_id', id.toString());
  //   options.search = params;
  //
  //   return this.delete('/delete_content', options);
  // }
}
