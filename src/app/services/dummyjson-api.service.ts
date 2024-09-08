import { HttpClient, HttpParams } from '@angular/common/http'
import { inject, Injectable } from '@angular/core'
import { APIProduct, APIProductList, APIProductWithRandom } from '../models/api-products.model'
import { map } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DummyJsonApiService {

  private readonly url = 'https://dummyjson.com/';
  private readonly http = inject(HttpClient)

  getProduct(id: number) {
    return this.get<APIProduct>(`products/${id}`)
  }
  getProducts(skip?: number, limit?: number) {
    let params = new HttpParams()
    if (skip !== undefined) {
      params = params.set('skip', skip)
    }
    if (limit !== undefined) {
      params = params.set('limit', limit)
    }

    return this.get<APIProductList>(`products`, { params }).pipe(
      map(data => {
        data.products = data.products.map(product => ({ ...product, random: Math.random() }))
        return data
      }),
      map(data => {
        data.products.sort((a, b) => (a as APIProductWithRandom).random - (b as APIProductWithRandom).random)
        return data
      })
    )
  }
  private get<T>(endpoint: string, options?: {}) {
    return this.http.get<T>(this.url + endpoint, options)
  }
}
