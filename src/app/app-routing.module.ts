import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { TemplateFlowComponent } from './components/template-flow/template-flow.component'
import { NgOptimizedImage } from '@angular/common'
import { GalleryComponent } from './components/gallery/gallery.component'
import { Signal1Component } from './components/signal1/signal1.component'

const routes: Routes = [
  {
    path: 'signals',
    loadChildren: () => import('./signals/signals.module').then(m => m.SignalsModule)
  },
  { path: 'template-flow', component: TemplateFlowComponent },
  { path: 'ng-optimized-image', component: GalleryComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
