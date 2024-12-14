import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './components/app/app.component'
import { DummyProductComponent } from './components/dummy-product/dummy-product.component'
import { TemplateFlowComponent } from './components/template-flow/template-flow.component'
import { GalleryComponent } from './components/gallery/gallery.component'
import { Signal1Component } from './components/signal1/signal1.component'
import { Signal2Component } from './components/signal2/signal2.component'
import { HttpClientModule } from '@angular/common/http'
import { NgOptimizedImage } from '@angular/common'

@NgModule({
  declarations: [
    AppComponent,
    DummyProductComponent,
    TemplateFlowComponent,
    GalleryComponent,
    Signal1Component,
    Signal2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
