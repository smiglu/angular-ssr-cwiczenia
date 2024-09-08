import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { Signal1Component } from '../components/signal1/signal1.component'
import { Signal2Component } from '../components/signal2/signal2.component'

const routes: Routes = [
  { path: '1', component: Signal1Component },
  { path: '2', component: Signal2Component },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignalsRoutingModule {}
