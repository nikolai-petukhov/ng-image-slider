import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';
import { SliderComponent } from './slider/slider.component';
import { HttpClientModule } from '@angular/common/http';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    SliderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  entryComponents: [SliderComponent],
  providers: [],
  bootstrap: []
})
export class AppModule {
  constructor(private injector: Injector) {
    const slider = createCustomElement(SliderComponent, { injector });
    customElements.define('my-slider', slider);
  }

  ngBootstrap() {}
}

