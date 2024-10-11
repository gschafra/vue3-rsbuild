import { defineConfig } from '@rsbuild/core';
import { pluginTypeCheck } from '@rsbuild/plugin-type-check';
import { pluginVue } from '@rsbuild/plugin-vue';

export default defineConfig({
  plugins: [
    pluginVue(),
    pluginTypeCheck({
      enable: process.env.NODE_ENV === 'development',
    }),
  ],
});
