import { Component } from '@angular/core'
import { DummyProductComponent } from "../dummy-product/dummy-product.component";

@Component({
    selector: 'app-template-flow',
    templateUrl: './template-flow.component.html',
    styleUrl: './template-flow.component.scss',
    imports: [DummyProductComponent],
})
export class TemplateFlowComponent {

}
