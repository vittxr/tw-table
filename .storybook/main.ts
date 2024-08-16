// import type { StorybookConfig } from "@storybook/react-webpack5";
import { StorybookConfig } from '@storybook/react-vite';
 

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: '@storybook/react-vite', // 👈 Add this
  docs: {
    autodocs: "tag",
  },
};
export default config;
