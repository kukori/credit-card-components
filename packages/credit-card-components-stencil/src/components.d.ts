/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface CardExpirationInput {
        "error": boolean;
        "name": string;
        "value": string;
    }
    interface CardFormContainer {
    }
    interface CardHolderInput {
        "error": boolean;
        "name": string;
        "value": string;
    }
    interface CreditCardInput {
        "error": boolean;
        "name": string;
        "value": string;
    }
    interface CvvInput {
        "error": boolean;
        "name": string;
        "value": string;
    }
    interface ErrorMessage {
    }
}
export interface CardExpirationInputCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLCardExpirationInputElement;
}
export interface CardHolderInputCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLCardHolderInputElement;
}
export interface CreditCardInputCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLCreditCardInputElement;
}
export interface CvvInputCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLCvvInputElement;
}
declare global {
    interface HTMLCardExpirationInputElement extends Components.CardExpirationInput, HTMLStencilElement {
    }
    var HTMLCardExpirationInputElement: {
        prototype: HTMLCardExpirationInputElement;
        new (): HTMLCardExpirationInputElement;
    };
    interface HTMLCardFormContainerElement extends Components.CardFormContainer, HTMLStencilElement {
    }
    var HTMLCardFormContainerElement: {
        prototype: HTMLCardFormContainerElement;
        new (): HTMLCardFormContainerElement;
    };
    interface HTMLCardHolderInputElement extends Components.CardHolderInput, HTMLStencilElement {
    }
    var HTMLCardHolderInputElement: {
        prototype: HTMLCardHolderInputElement;
        new (): HTMLCardHolderInputElement;
    };
    interface HTMLCreditCardInputElement extends Components.CreditCardInput, HTMLStencilElement {
    }
    var HTMLCreditCardInputElement: {
        prototype: HTMLCreditCardInputElement;
        new (): HTMLCreditCardInputElement;
    };
    interface HTMLCvvInputElement extends Components.CvvInput, HTMLStencilElement {
    }
    var HTMLCvvInputElement: {
        prototype: HTMLCvvInputElement;
        new (): HTMLCvvInputElement;
    };
    interface HTMLErrorMessageElement extends Components.ErrorMessage, HTMLStencilElement {
    }
    var HTMLErrorMessageElement: {
        prototype: HTMLErrorMessageElement;
        new (): HTMLErrorMessageElement;
    };
    interface HTMLElementTagNameMap {
        "card-expiration-input": HTMLCardExpirationInputElement;
        "card-form-container": HTMLCardFormContainerElement;
        "card-holder-input": HTMLCardHolderInputElement;
        "credit-card-input": HTMLCreditCardInputElement;
        "cvv-input": HTMLCvvInputElement;
        "error-message": HTMLErrorMessageElement;
    }
}
declare namespace LocalJSX {
    interface CardExpirationInput {
        "error"?: boolean;
        "name"?: string;
        "onChange"?: (event: CardExpirationInputCustomEvent<string>) => void;
        "onChanged"?: (event: CardExpirationInputCustomEvent<string>) => void;
        "value"?: string;
    }
    interface CardFormContainer {
    }
    interface CardHolderInput {
        "error"?: boolean;
        "name"?: string;
        "onChange"?: (event: CardHolderInputCustomEvent<string>) => void;
        "onChanged"?: (event: CardHolderInputCustomEvent<string>) => void;
        "value"?: string;
    }
    interface CreditCardInput {
        "error"?: boolean;
        "name"?: string;
        "onChange"?: (event: CreditCardInputCustomEvent<string>) => void;
        "onChanged"?: (event: CreditCardInputCustomEvent<string>) => void;
        "value"?: string;
    }
    interface CvvInput {
        "error"?: boolean;
        "name"?: string;
        "onChange"?: (event: CvvInputCustomEvent<string>) => void;
        "onChanged"?: (event: CvvInputCustomEvent<string>) => void;
        "value"?: string;
    }
    interface ErrorMessage {
    }
    interface IntrinsicElements {
        "card-expiration-input": CardExpirationInput;
        "card-form-container": CardFormContainer;
        "card-holder-input": CardHolderInput;
        "credit-card-input": CreditCardInput;
        "cvv-input": CvvInput;
        "error-message": ErrorMessage;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "card-expiration-input": LocalJSX.CardExpirationInput & JSXBase.HTMLAttributes<HTMLCardExpirationInputElement>;
            "card-form-container": LocalJSX.CardFormContainer & JSXBase.HTMLAttributes<HTMLCardFormContainerElement>;
            "card-holder-input": LocalJSX.CardHolderInput & JSXBase.HTMLAttributes<HTMLCardHolderInputElement>;
            "credit-card-input": LocalJSX.CreditCardInput & JSXBase.HTMLAttributes<HTMLCreditCardInputElement>;
            "cvv-input": LocalJSX.CvvInput & JSXBase.HTMLAttributes<HTMLCvvInputElement>;
            "error-message": LocalJSX.ErrorMessage & JSXBase.HTMLAttributes<HTMLErrorMessageElement>;
        }
    }
}
