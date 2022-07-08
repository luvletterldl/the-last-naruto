import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue2';
import legacy from '@vitejs/plugin-legacy';
import Unocss from 'unocss/vite';
import transformerDirective from '@unocss/transformer-directives';
import transformerVariantGroup from '@unocss/transformer-variant-group';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    legacy({
      targets: ['ie >= 11'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
    }),
    // https://github.com/antfu/unocss
    // see unocss.config.ts for config
    Unocss({
      transformers: [transformerVariantGroup(), transformerDirective()],
    }),
  ],
});
