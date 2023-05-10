import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, APP_INITIALIZER, NgModule } from '@angular/core';
import { __decorate } from 'tslib';
import { fromEvent } from 'rxjs';
import { defineCustomElements } from 'credit-card-components-stencil/loader';

/* eslint-disable */
/* tslint:disable */
const proxyInputs = (Cmp, inputs) => {
    const Prototype = Cmp.prototype;
    inputs.forEach((item) => {
        Object.defineProperty(Prototype, item, {
            get() {
                return this.el[item];
            },
            set(val) {
                this.z.runOutsideAngular(() => (this.el[item] = val));
            },
        });
    });
};
const proxyMethods = (Cmp, methods) => {
    const Prototype = Cmp.prototype;
    methods.forEach((methodName) => {
        Prototype[methodName] = function () {
            const args = arguments;
            return this.z.runOutsideAngular(() => this.el[methodName].apply(this.el, args));
        };
    });
};
const proxyOutputs = (instance, el, events) => {
    events.forEach((eventName) => (instance[eventName] = fromEvent(el, eventName)));
};
const defineCustomElement = (tagName, customElement) => {
    if (customElement !== undefined && typeof customElements !== 'undefined' && !customElements.get(tagName)) {
        customElements.define(tagName, customElement);
    }
};
// tslint:disable-next-line: only-arrow-functions
function ProxyCmp(opts) {
    const decorator = function (cls) {
        const { defineCustomElementFn, inputs, methods } = opts;
        if (defineCustomElementFn !== undefined) {
            defineCustomElementFn();
        }
        if (inputs) {
            proxyInputs(cls, inputs);
        }
        if (methods) {
            proxyMethods(cls, methods);
        }
        return cls;
    };
    return decorator;
}

let CardExpirationInput = class CardExpirationInput {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['changed']);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: CardExpirationInput, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0", type: CardExpirationInput, selector: "card-expiration-input", inputs: { error: "error", name: "name", value: "value" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
CardExpirationInput = __decorate([
    ProxyCmp({
        inputs: ['error', 'name', 'value']
    })
], CardExpirationInput);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: CardExpirationInput, decorators: [{
            type: Component,
            args: [{
                    selector: 'card-expiration-input',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['error', 'name', 'value'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let CardFormContainer = class CardFormContainer {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: CardFormContainer, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0", type: CardFormContainer, selector: "card-form-container", ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
CardFormContainer = __decorate([
    ProxyCmp({})
], CardFormContainer);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: CardFormContainer, decorators: [{
            type: Component,
            args: [{
                    selector: 'card-form-container',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: [],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let CardHolderInput = class CardHolderInput {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['changed']);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: CardHolderInput, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0", type: CardHolderInput, selector: "card-holder-input", inputs: { error: "error", name: "name", value: "value" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
CardHolderInput = __decorate([
    ProxyCmp({
        inputs: ['error', 'name', 'value']
    })
], CardHolderInput);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: CardHolderInput, decorators: [{
            type: Component,
            args: [{
                    selector: 'card-holder-input',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['error', 'name', 'value'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let CreditCardInput = class CreditCardInput {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['changed']);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: CreditCardInput, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0", type: CreditCardInput, selector: "credit-card-input", inputs: { error: "error", name: "name", value: "value" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
CreditCardInput = __decorate([
    ProxyCmp({
        inputs: ['error', 'name', 'value']
    })
], CreditCardInput);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: CreditCardInput, decorators: [{
            type: Component,
            args: [{
                    selector: 'credit-card-input',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['error', 'name', 'value'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let CvvInput = class CvvInput {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['changed']);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: CvvInput, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0", type: CvvInput, selector: "cvv-input", inputs: { error: "error", name: "name", value: "value" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
CvvInput = __decorate([
    ProxyCmp({
        inputs: ['error', 'name', 'value']
    })
], CvvInput);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: CvvInput, decorators: [{
            type: Component,
            args: [{
                    selector: 'cvv-input',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['error', 'name', 'value'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let ErrorMessage = class ErrorMessage {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: ErrorMessage, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0", type: ErrorMessage, selector: "error-message", ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
ErrorMessage = __decorate([
    ProxyCmp({})
], ErrorMessage);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: ErrorMessage, decorators: [{
            type: Component,
            args: [{
                    selector: 'error-message',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: [],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });

const DIRECTIVES = [
    CardExpirationInput,
    CardFormContainer,
    CardHolderInput,
    CreditCardInput,
    CvvInput,
    ErrorMessage
];

class CreditCardComponentsNgModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: CreditCardComponentsNgModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.0", ngImport: i0, type: CreditCardComponentsNgModule, declarations: [CardExpirationInput, CardFormContainer, CardHolderInput, CreditCardInput, CvvInput, ErrorMessage], exports: [CardExpirationInput, CardFormContainer, CardHolderInput, CreditCardInput, CvvInput, ErrorMessage] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: CreditCardComponentsNgModule, providers: [
            {
                provide: APP_INITIALIZER,
                useFactory: () => {
                    return defineCustomElements();
                },
            },
        ] }); }
}
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

/*
 * Public API Surface of credit-card-components-ng
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CardExpirationInput, CardFormContainer, CardHolderInput, CreditCardComponentsNgModule, CreditCardInput, CvvInput, DIRECTIVES, ErrorMessage };
//# sourceMappingURL=credit-card-components-ng.mjs.map
