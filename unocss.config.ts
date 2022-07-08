import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
  // transformerDirectives,
  // transformerVariantGroup,
} from 'unocss';

export default defineConfig({
  shortcuts: [],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetWebFonts({
      fonts: {
        // sans: 'DM Sans',
        // serif: 'DM Serif Display',
        // mono: 'DM Mono',
      },
    }),
  ],
  rules: [
    [
      /^text-(.*)$/,
      ([, c], { theme }) => {
        if (theme.colors[c]) {
          return {
            color: theme.colors[c],
          };
        }
      },
    ],
  ],
  theme: {
    colors: {},
  },
  // transformers: [
  //   transformerDirectives(),
  //   transformerVariantGroup(),
  // ],
});
