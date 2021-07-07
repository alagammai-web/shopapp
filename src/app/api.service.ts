import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }


  apiURL ="https://fakestoreapi.com/products";

  getProducts(){
    return this.http.get<any>(`${this.apiURL}`);
  }
}
