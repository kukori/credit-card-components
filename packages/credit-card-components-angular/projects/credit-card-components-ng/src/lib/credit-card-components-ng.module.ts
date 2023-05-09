import { APP_INITIALIZER, NgModule } from '@angular/core';
import { DIRECTIVES } from './stencil-generated';
import { defineCustomElements } from 'credit-card-components-stencil/loader';


@NgModule({
  declarations: [
    ...DIRECTIVES
  ],
  imports: [
  ],
  exports: [
    ...DIRECTIVES
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      multi: true,
      useFactory: () => {
        return defineCustomElements();
      },
    },
  ]
})
export class CreditCardComponentsNgModule { }
