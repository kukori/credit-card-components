import { applyPolyfills, defineCustomElements } from 'credit-card-components-stencil/loader';
export const ComponentLibrary = {
    async install() {
        applyPolyfills().then(() => {
            defineCustomElements();
        });
    },
};
//# sourceMappingURL=plugin.js.map