import { Plugin } from 'vue';
import { applyPolyfills, defineCustomElements } from 'credit-card-components-stencil/loader';

export const ComponentLibrary: Plugin = {
  async install() {
    applyPolyfills().then(() => {
      defineCustomElements();
    });
  },
};