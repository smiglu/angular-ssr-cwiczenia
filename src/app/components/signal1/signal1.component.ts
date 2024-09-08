import { APIProductList } from './../../models/api-products.model'
import { Component, DestroyRef, inject } from '@angular/core'
import { DummyJsonApiService } from '../../services/dummyjson-api.service'
import { AsyncPipe, JsonPipe } from '@angular/common'
import { map, Subject } from 'rxjs'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'

@Component({
  selector: 'app-signal1',
  templateUrl: './signal1.component.html',
  styleUrl: './signal1.component.scss',
})
export class Signal1Component {
  private readonly dummyApi = inject(DummyJsonApiService);

  //use: getProducts(skip, limit)
  private data$ = new Subject<APIProductList>

  pageNumber = 0
  productsPerPage = 10
  products$ = this.data$.pipe(map(data => data.products));
  private destroyRef = inject(DestroyRef)

  ngOnInit(): void {
    this.loadData()
  }
  loadData() {
    this.dummyApi.getProducts().pipe(takeUntilDestroyed(this.destroyRef)).subscribe(data => {
      this.data$.next(data)
    })
  }
  onProductAmountChange(amount: string) {
    this.productsPerPage = +amount
  }
  changePage(change: number) {
    const newPage = Math.max(0, this.pageNumber + change)
    this.pageNumber = newPage
  }
}
