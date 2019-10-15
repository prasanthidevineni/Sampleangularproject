import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable()
export class CoreRestServiceService {

  constructor(private http: Http) { }
  async getRequest(url: string, handler?: (...args: any[]) => void, handleDialog: boolean = true, headers?: any) {
    //this.showLoader(handleDialog);

    url = url;
    console.log('url=' + url);

    const authHeaders = await this.createAuthHeaders(headers);

    // 'http://52.170.26.153/api/country/GetAll'
    this.http.get(url, { headers: authHeaders }).subscribe((res) => {
      if (res.status === 200) {
        handler(res.json());
      } else {
        //this.hideLoader(handleDialog);
      }
      console.log('open get res=' + res.status);
    }, (err: any) => {
      console.log('open get err=' + JSON.stringify(err));
      //this.hideLoader(handleDialog);
    });
  }

  async postRequest(url: string, payload: any, handler?: (...args: any[]) => void, handleDialog: boolean = true, headers?: any) {
    //this.showLoader(handleDialog);

    url = url;
    console.log('url=' + url);

    const authHeaders = await this.createAuthHeaders(headers);

    this.http.post(url, payload, { headers: authHeaders }).subscribe((res) => {
      if (res.status === 200) {
        handler(res.json());
      } else {
        //this.hideLoader(handleDialog);
      }
      console.log('open get res=' + res.status);
    }, (err: any) => {
      console.log('open get err=' + JSON.stringify(err));
      //this.hideLoader(handleDialog);
    });
  }

  async putRequest(url: string, payload: any, handler?: (...args: any[]) => void, handleDialog: boolean = true, headers?: any) {
    //this.showLoader(handleDialog);

    url = url;
    console.log('url=' + url);

    const authHeaders = await this.createAuthHeaders(headers);

    this.http.put(url, payload, { headers: authHeaders }).subscribe((res) => {
      if (res.status === 200) {
        handler(res.json());
      } else {
        //this.hideLoader(handleDialog);
      }
      console.log('open get res=' + res.status);
    }, (err: any) => {
      console.log('open get err=' + JSON.stringify(err));
      //this.hideLoader(handleDialog);
    });
  }

  private createAuthHeaders(head: any): any {
    const headers = new Headers({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'DeviceName': ''
    });

    if (head != null) {
      for (const prop in head) {
        headers.append(prop, head[prop]);
      }
    }

    headers.append('Authorization', '');
    return headers;
  }

}
