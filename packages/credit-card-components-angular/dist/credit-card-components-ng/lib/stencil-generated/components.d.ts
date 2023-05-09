import { ChangeDetectorRef, ElementRef, EventEmitter, NgZone } from '@angular/core';
import { Components } from 'credit-card-components-stencil';
import * as i0 from "@angular/core";
export declare class CardExpirationInput {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<CardExpirationInput, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CardExpirationInput, "card-expiration-input", never, { "error": { "alias": "error"; "required": false; }; "name": { "alias": "name"; "required": false; }; "value": { "alias": "value"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface CardExpirationInput extends Components.CardExpirationInput {
    changed: EventEmitter<CustomEvent<string>>;
}
export declare class CardFormContainer {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<CardFormContainer, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CardFormContainer, "card-form-container", never, {}, {}, never, ["*"], false, never>;
}
export declare interface CardFormContainer extends Components.CardFormContainer {
}
export declare class CardHolderInput {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<CardHolderInput, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CardHolderInput, "card-holder-input", never, { "error": { "alias": "error"; "required": false; }; "name": { "alias": "name"; "required": false; }; "value": { "alias": "value"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface CardHolderInput extends Components.CardHolderInput {
    changed: EventEmitter<CustomEvent<string>>;
}
export declare class CreditCardInput {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<CreditCardInput, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CreditCardInput, "credit-card-input", never, { "error": { "alias": "error"; "required": false; }; "name": { "alias": "name"; "required": false; }; "value": { "alias": "value"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface CreditCardInput extends Components.CreditCardInput {
    changed: EventEmitter<CustomEvent<string>>;
}
export declare class CvvInput {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<CvvInput, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CvvInput, "cvv-input", never, { "error": { "alias": "error"; "required": false; }; "name": { "alias": "name"; "required": false; }; "value": { "alias": "value"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface CvvInput extends Components.CvvInput {
    changed: EventEmitter<CustomEvent<string>>;
}
export declare class ErrorMessage {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<ErrorMessage, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ErrorMessage, "error-message", never, {}, {}, never, ["*"], false, never>;
}
export declare interface ErrorMessage extends Components.ErrorMessage {
}
