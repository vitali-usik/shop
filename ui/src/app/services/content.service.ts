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
  // saveOrUpdate(content: any) {
  //   return this.post('/upsert_content', content);
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
