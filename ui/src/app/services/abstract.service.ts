import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';

const API_PREFIX = webpack.ENV === 'development' ? '/api' : '/content_management';

@Injectable()
export abstract class AbstractService {

  private headers = new Headers({
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) {}

  protected convert(response: Response) {
    const body = response.json();

    return body || {};
  }

  protected get(url: string) {
    return this.http.get(API_PREFIX + url, this.options).map(this.convert);
  }

  protected getById(url: string, options?: RequestOptions) {
    return this.http.get(API_PREFIX + url, this.options.merge(options)).map(this.convert);
  }

  protected post(url: string, json) {
    let data = JSON.stringify(json);

    return this.http.post(API_PREFIX + url, data, this.options).map(this.convert);
  }

  protected delete(url: string, options?: RequestOptions) {
    return this.http.delete(API_PREFIX + url, this.options.merge(options)).map(this.convert);
  }
}
