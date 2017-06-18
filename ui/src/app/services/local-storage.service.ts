import {Injectable} from '@angular/core';

@Injectable()
export class LocalStorageService {

  getItem(key: string) {
    return localStorage.getItem(key);
  }

  setItem(key: string, value: any) {
    const valueStr = JSON.stringify(value);

    return localStorage.setItem(key, valueStr);
  }

  removeItem(key: string) {
    console.log('key', key);
    return localStorage.removeItem(key);
  }

  getAllItems() {
    var values = [],
      keys = Object.keys(localStorage),
      i = keys.length;

    while (i--) {
      values.push(JSON.parse(localStorage.getItem(keys[i])));
    }

    return values;
  }
}
