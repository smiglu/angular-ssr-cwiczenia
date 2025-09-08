import { Component, inject, Input, SimpleChanges } from '@angular/core'
import { DummyJsonApiService } from '../../services/dummyjson-api.service'
import { Observable } from 'rxjs'
import { APIProduct } from '../../models/api-products.model'

@Component({
  selector: 'app-dummy-product',
  templateUrl: './dummy-product.component.html',
  styleUrl: './dummy-product.component.scss',
  standalone: false
})
export class DummyProductComponent {
  @Input({ required: true }) id!: number

  private readonly api = inject(DummyJsonApiService)

  showJsonData = false
  product!: Observable<APIProduct>
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['id'] && this.id > 0) {
      this.product = this.api.getProduct(this.id)
    }
  }
  showAll() {
    this.showJsonData = true
  }
}
