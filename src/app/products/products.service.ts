import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from './product.interface';
import { map, pluck } from 'rxjs/operators';
import { ApiService } from '../core/api.service';
import { ApiResponse } from '../core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService extends ApiService {
  getProducts(): Observable<Product[]> {
    if (!this.endpointEnabled('bff')) {
      console.warn(
        'Endpoint "bff" is disabled. To enable change your environment.ts config'
      );
      return this.http.get<Product[]>('/assets/products.json');
    }

    const url = this.getUrl('bff', 'products');
    return this.http.get<ApiResponse<Product[]>>(url).pipe(pluck('data'));
  }

  getProductsForCheckout(ids: string[]): Observable<Product[]> {
    if (!ids.length) {
      return of([]);
    }

    return this.getProducts().pipe(
      map((products) => products.filter((product) => ids.includes(product.id)))
    );
  }
}
