import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ApiProductService {
  private _http = inject(HttpClient);
  private urlBase: string = 'http://localhost:8080/api/v1/products/';

  getProducts(): Observable<IProduct[]> {
    return this._http.get<IProduct[]>(this.urlBase);
  }

  getProduct(id: number): Observable<IProduct> {
    return this._http.get<IProduct>(`${this.urlBase}/${id}`);
  }

  addProduct(product: IProduct): Observable<IProduct> {
    return this._http.post<IProduct>(this.urlBase, product);
  }

  updateProduct(product: IProduct): Observable<IProduct> {
    return this._http.put<IProduct>(`${this.urlBase}/${product.id}`, product);
  }

  deleteProduct(id: number): Observable<IProduct> {
    return this._http.delete<IProduct>(`${this.urlBase}/${id}`);
  }
}
