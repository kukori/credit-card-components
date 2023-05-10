import { APP_INITIALIZER, NgModule } from '@angular/core';
import { DIRECTIVES } from './stencil-generated';
import { defineCustomElements } from 'credit-card-components-stencil/loader';
import * as i0 from "@angular/core";
import * as i1 from "./stencil-generated/components";
class CreditCardComponentsNgModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: CreditCardComponentsNgModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.0", ngImport: i0, type: CreditCardComponentsNgModule, declarations: [i1.CardExpirationInput, i1.CardFormContainer, i1.CardHolderInput, i1.CreditCardInput, i1.CvvInput, i1.ErrorMessage], exports: [i1.CardExpirationInput, i1.CardFormContainer, i1.CardHolderInput, i1.CreditCardInput, i1.CvvInput, i1.ErrorMessage] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: CreditCardComponentsNgModule, providers: [
            {
                provide: APP_INITIALIZER,
                useFactory: () => {
                    return defineCustomElements();
                },
            },
        ] }); }
}
export { CreditCardComponentsNgModule };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: CreditCardComponentsNgModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [...DIRECTIVES],
                    exports: [...DIRECTIVES],
                    providers: [
                        {
                            provide: APP_INITIALIZER,
                            useFactory: () => {
                                return defineCustomElements();
                            },
                        },
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlZGl0LWNhcmQtY29tcG9uZW50cy1uZy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9jcmVkaXQtY2FyZC1jb21wb25lbnRzLW5nL3NyYy9saWIvY3JlZGl0LWNhcmQtY29tcG9uZW50cy1uZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDOzs7QUFJN0UsTUFZYSw0QkFBNEI7OEdBQTVCLDRCQUE0QjsrR0FBNUIsNEJBQTRCOytHQUE1Qiw0QkFBNEIsYUFUNUI7WUFDVDtnQkFDRSxPQUFPLEVBQUUsZUFBZTtnQkFDeEIsVUFBVSxFQUFFLEdBQUcsRUFBRTtvQkFDZixPQUFPLG9CQUFvQixFQUFFLENBQUM7Z0JBQ2hDLENBQUM7YUFDRjtTQUNGOztTQUVVLDRCQUE0QjsyRkFBNUIsNEJBQTRCO2tCQVp4QyxRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLEdBQUcsVUFBVSxDQUFDO29CQUM3QixPQUFPLEVBQUUsQ0FBQyxHQUFHLFVBQVUsQ0FBQztvQkFDeEIsU0FBUyxFQUFFO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxlQUFlOzRCQUN4QixVQUFVLEVBQUUsR0FBRyxFQUFFO2dDQUNmLE9BQU8sb0JBQW9CLEVBQUUsQ0FBQzs0QkFDaEMsQ0FBQzt5QkFDRjtxQkFDRjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFQUF9JTklUSUFMSVpFUiwgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERJUkVDVElWRVMgfSBmcm9tICcuL3N0ZW5jaWwtZ2VuZXJhdGVkJztcbmltcG9ydCB7IGRlZmluZUN1c3RvbUVsZW1lbnRzIH0gZnJvbSAnY3JlZGl0LWNhcmQtY29tcG9uZW50cy1zdGVuY2lsL2xvYWRlcic7XG5cblxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFsuLi5ESVJFQ1RJVkVTXSxcbiAgZXhwb3J0czogWy4uLkRJUkVDVElWRVNdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBBUFBfSU5JVElBTElaRVIsXG4gICAgICB1c2VGYWN0b3J5OiAoKSA9PiB7XG4gICAgICAgIHJldHVybiBkZWZpbmVDdXN0b21FbGVtZW50cygpO1xuICAgICAgfSxcbiAgICB9LFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIENyZWRpdENhcmRDb21wb25lbnRzTmdNb2R1bGUgeyB9XG4iXX0=