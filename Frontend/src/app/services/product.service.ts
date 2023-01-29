import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = 'http://10.10.3.21:8080/api/v1/products'

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<any>{
    return this.http.get<any[]>(this.baseUrl);
  }

  getProductsByCategory(): Observable<any>{
    return this.http.get<any>(this.baseUrl);
  }

}
