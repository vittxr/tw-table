import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../stories/**/*.stories.@(ts|tsx|js|jsx)'],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        }
      }
    }, 
    "@storybook/addon-interactions",
    "@chromatic-com/storybook"
  ],
  typescript: {
    // type-check stories during Storybook build
    check: true,
    reactDocgen: 'react-docgen-typescript'
  },
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  core: {
    builder: {
      name: '@storybook/builder-vite',
      options: {
        viteConfigPath: './vite.config.ts',
      },
    },
  },
  docs: {},
};



export default config;
