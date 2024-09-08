import { Component, DestroyRef, inject, signal } from '@angular/core'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { Subject, map } from 'rxjs'
import { APIProduct, APIProductList } from '../../models/api-products.model'
import { DummyJsonApiService } from '../../services/dummyjson-api.service'

@Component({
  selector: 'app-signal2',
  templateUrl: './signal2.component.html',
  styleUrl: './signal2.component.scss'
})
export class Signal2Component {


  private readonly dummyApi = inject(DummyJsonApiService);

  products = signal<APIProduct[]>([])
  selectedProducts = signal<number[]>([])

  private destroyRef = inject(DestroyRef)

  ngOnInit(): void {
    this.loadData()
  }
  loadData() {
    this.dummyApi.getProducts().pipe(takeUntilDestroyed(this.destroyRef)).subscribe(data => {
      this.products.set(data.products)
    })
  }
  addProductToSelected(idx: number) {
    this.selectedProducts.update(selected => [...selected, idx])
  }
  resetSelected() {
    this.selectedProducts.set([])
  }
}
