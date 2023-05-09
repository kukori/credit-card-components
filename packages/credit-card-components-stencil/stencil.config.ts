import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';
import { angularOutputTarget } from '@stencil/angular-output-target';

export const config: Config = {
  namespace: 'credit-card-components-stencil',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    reactOutputTarget({
      componentCorePackage: 'credit-card-components-stencil',
      proxiesFile: '../credit-card-components-react/lib/components/stencil-generated/index.ts',
    }),
    angularOutputTarget({
      componentCorePackage: 'credit-card-components-stencil',
      directivesProxyFile: '../credit-card-components-angular/projects/credit-card-components-ng/src/lib/stencil-generated/components.ts',
      directivesArrayFile: '../credit-card-components-angular/projects/credit-card-components-ng/src/lib/stencil-generated/index.ts',
    }),
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
