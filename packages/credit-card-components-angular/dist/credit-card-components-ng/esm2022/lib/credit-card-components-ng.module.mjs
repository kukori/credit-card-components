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
                    declarations: [
                        ...DIRECTIVES
                    ],
                    imports: [],
                    exports: [
                        ...DIRECTIVES
                    ],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlZGl0LWNhcmQtY29tcG9uZW50cy1uZy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9jcmVkaXQtY2FyZC1jb21wb25lbnRzLW5nL3NyYy9saWIvY3JlZGl0LWNhcmQtY29tcG9uZW50cy1uZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDOzs7QUFHN0UsTUFrQmEsNEJBQTRCOzhHQUE1Qiw0QkFBNEI7K0dBQTVCLDRCQUE0QjsrR0FBNUIsNEJBQTRCLGFBVDVCO1lBQ1Q7Z0JBQ0UsT0FBTyxFQUFFLGVBQWU7Z0JBQ3hCLFVBQVUsRUFBRSxHQUFHLEVBQUU7b0JBQ2YsT0FBTyxvQkFBb0IsRUFBRSxDQUFDO2dCQUNoQyxDQUFDO2FBQ0Y7U0FDRjs7U0FFVSw0QkFBNEI7MkZBQTVCLDRCQUE0QjtrQkFsQnhDLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLEdBQUcsVUFBVTtxQkFDZDtvQkFDRCxPQUFPLEVBQUUsRUFDUjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsR0FBRyxVQUFVO3FCQUNkO29CQUNELFNBQVMsRUFBRTt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsZUFBZTs0QkFDeEIsVUFBVSxFQUFFLEdBQUcsRUFBRTtnQ0FDZixPQUFPLG9CQUFvQixFQUFFLENBQUM7NEJBQ2hDLENBQUM7eUJBQ0Y7cUJBQ0Y7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBUFBfSU5JVElBTElaRVIsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBESVJFQ1RJVkVTIH0gZnJvbSAnLi9zdGVuY2lsLWdlbmVyYXRlZCc7XG5pbXBvcnQgeyBkZWZpbmVDdXN0b21FbGVtZW50cyB9IGZyb20gJ2NyZWRpdC1jYXJkLWNvbXBvbmVudHMtc3RlbmNpbC9sb2FkZXInO1xuXG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIC4uLkRJUkVDVElWRVNcbiAgXSxcbiAgaW1wb3J0czogW1xuICBdLFxuICBleHBvcnRzOiBbXG4gICAgLi4uRElSRUNUSVZFU1xuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBBUFBfSU5JVElBTElaRVIsXG4gICAgICB1c2VGYWN0b3J5OiAoKSA9PiB7XG4gICAgICAgIHJldHVybiBkZWZpbmVDdXN0b21FbGVtZW50cygpO1xuICAgICAgfSxcbiAgICB9LFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIENyZWRpdENhcmRDb21wb25lbnRzTmdNb2R1bGUgeyB9XG4iXX0=