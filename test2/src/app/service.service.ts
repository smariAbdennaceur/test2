import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})


export class ServiceService {

  constructor(private http: HttpClient) { }
  getPayloadRmp() {
    return this.http.get(`assets/data/payload-rmp.json`);
  }

  getBrands() {
    return this.http.get(`assets/data/brands.json`);
  }

}
