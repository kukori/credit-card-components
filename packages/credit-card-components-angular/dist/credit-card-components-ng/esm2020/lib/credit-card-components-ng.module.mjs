import { APP_INITIALIZER, NgModule } from '@angular/core';
import { DIRECTIVES } from './stencil-generated';
import { defineCustomElements } from 'credit-card-components-stencil/loader';
import * as i0 from "@angular/core";
import * as i1 from "./stencil-generated/components";
export class CreditCardComponentsNgModule {
}
CreditCardComponentsNgModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: CreditCardComponentsNgModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CreditCardComponentsNgModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: CreditCardComponentsNgModule, declarations: [i1.CardExpirationInput, i1.CardFormContainer, i1.CardHolderInput, i1.CreditCardInput, i1.CvvInput, i1.ErrorMessage], exports: [i1.CardExpirationInput, i1.CardFormContainer, i1.CardHolderInput, i1.CreditCardInput, i1.CvvInput, i1.ErrorMessage] });
CreditCardComponentsNgModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: CreditCardComponentsNgModule, providers: [
        {
            provide: APP_INITIALIZER,
            useFactory: () => {
                return defineCustomElements();
            },
        },
    ] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: CreditCardComponentsNgModule, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlZGl0LWNhcmQtY29tcG9uZW50cy1uZy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9jcmVkaXQtY2FyZC1jb21wb25lbnRzLW5nL3NyYy9saWIvY3JlZGl0LWNhcmQtY29tcG9uZW50cy1uZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDOzs7QUFjN0UsTUFBTSxPQUFPLDRCQUE0Qjs7eUhBQTVCLDRCQUE0QjswSEFBNUIsNEJBQTRCOzBIQUE1Qiw0QkFBNEIsYUFUNUI7UUFDVDtZQUNFLE9BQU8sRUFBRSxlQUFlO1lBQ3hCLFVBQVUsRUFBRSxHQUFHLEVBQUU7Z0JBQ2YsT0FBTyxvQkFBb0IsRUFBRSxDQUFDO1lBQ2hDLENBQUM7U0FDRjtLQUNGOzJGQUVVLDRCQUE0QjtrQkFaeEMsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxHQUFHLFVBQVUsQ0FBQztvQkFDN0IsT0FBTyxFQUFFLENBQUMsR0FBRyxVQUFVLENBQUM7b0JBQ3hCLFNBQVMsRUFBRTt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsZUFBZTs0QkFDeEIsVUFBVSxFQUFFLEdBQUcsRUFBRTtnQ0FDZixPQUFPLG9CQUFvQixFQUFFLENBQUM7NEJBQ2hDLENBQUM7eUJBQ0Y7cUJBQ0Y7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBUFBfSU5JVElBTElaRVIsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBESVJFQ1RJVkVTIH0gZnJvbSAnLi9zdGVuY2lsLWdlbmVyYXRlZCc7XG5pbXBvcnQgeyBkZWZpbmVDdXN0b21FbGVtZW50cyB9IGZyb20gJ2NyZWRpdC1jYXJkLWNvbXBvbmVudHMtc3RlbmNpbC9sb2FkZXInO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFsuLi5ESVJFQ1RJVkVTXSxcbiAgZXhwb3J0czogWy4uLkRJUkVDVElWRVNdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBBUFBfSU5JVElBTElaRVIsXG4gICAgICB1c2VGYWN0b3J5OiAoKSA9PiB7XG4gICAgICAgIHJldHVybiBkZWZpbmVDdXN0b21FbGVtZW50cygpO1xuICAgICAgfSxcbiAgICB9LFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIENyZWRpdENhcmRDb21wb25lbnRzTmdNb2R1bGUgeyB9XG4iXX0=