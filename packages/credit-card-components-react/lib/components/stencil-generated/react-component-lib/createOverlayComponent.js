var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import ReactDOM from 'react-dom';
import { attachProps, dashToPascalCase, defineCustomElement, setRef } from './utils';
export const createOverlayComponent = (tagName, controller, customElement) => {
    defineCustomElement(tagName, customElement);
    const displayName = dashToPascalCase(tagName);
    const didDismissEventName = `on${displayName}DidDismiss`;
    const didPresentEventName = `on${displayName}DidPresent`;
    const willDismissEventName = `on${displayName}WillDismiss`;
    const willPresentEventName = `on${displayName}WillPresent`;
    let isDismissing = false;
    class Overlay extends React.Component {
        constructor(props) {
            super(props);
            if (typeof document !== 'undefined') {
                this.el = document.createElement('div');
            }
            this.handleDismiss = this.handleDismiss.bind(this);
        }
        static get displayName() {
            return displayName;
        }
        componentDidMount() {
            if (this.props.isOpen) {
                this.present();
            }
        }
        componentWillUnmount() {
            if (this.overlay) {
                this.overlay.dismiss();
            }
        }
        handleDismiss(event) {
            if (this.props.onDidDismiss) {
                this.props.onDidDismiss(event);
            }
            setRef(this.props.forwardedRef, null);
        }
        shouldComponentUpdate(nextProps) {
            // Check if the overlay component is about to dismiss
            if (this.overlay && nextProps.isOpen !== this.props.isOpen && nextProps.isOpen === false) {
                isDismissing = true;
            }
            return true;
        }
        async componentDidUpdate(prevProps) {
            if (this.overlay) {
                attachProps(this.overlay, this.props, prevProps);
            }
            if (prevProps.isOpen !== this.props.isOpen && this.props.isOpen === true) {
                this.present(prevProps);
            }
            if (this.overlay && prevProps.isOpen !== this.props.isOpen && this.props.isOpen === false) {
                await this.overlay.dismiss();
                isDismissing = false;
                /**
                 * Now that the overlay is dismissed
                 * we need to render again so that any
                 * inner components will be unmounted
                 */
                this.forceUpdate();
            }
        }
        async present(prevProps) {
            const _a = this.props, { children, isOpen, onDidDismiss, onDidPresent, onWillDismiss, onWillPresent } = _a, cProps = __rest(_a, ["children", "isOpen", "onDidDismiss", "onDidPresent", "onWillDismiss", "onWillPresent"]);
            const elementProps = Object.assign(Object.assign({}, cProps), { ref: this.props.forwardedRef, [didDismissEventName]: this.handleDismiss, [didPresentEventName]: (e) => this.props.onDidPresent && this.props.onDidPresent(e), [willDismissEventName]: (e) => this.props.onWillDismiss && this.props.onWillDismiss(e), [willPresentEventName]: (e) => this.props.onWillPresent && this.props.onWillPresent(e) });
            this.overlay = await controller.create(Object.assign(Object.assign({}, elementProps), { component: this.el, componentProps: {} }));
            setRef(this.props.forwardedRef, this.overlay);
            attachProps(this.overlay, elementProps, prevProps);
            await this.overlay.present();
        }
        render() {
            /**
             * Continue to render the component even when
             * overlay is dismissing otherwise component
             * will be hidden before animation is done.
             */
            return ReactDOM.createPortal(this.props.isOpen || isDismissing ? this.props.children : null, this.el);
        }
    }
    return React.forwardRef((props, ref) => {
        return _jsx(Overlay, Object.assign({}, props, { forwardedRef: ref }));
    });
};
