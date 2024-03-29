# The Last Naruto

![The Last Naruto Logo](./public/logo.webp)

[中文](https://juejin.cn/post/7122016953593495560)

# Features

- 👍 Support IE11 by [@vitejs/plugin-legacy](https://github.com/vitejs/vite/tree/main/packages/plugin-legacy)

- ⚡️ [Vue 2.7](https://github.com/vuejs/vue), [Vite 4](https://github.com/vitejs/vite), [pnpm](https://pnpm.io/), [ESBuild](https://github.com/evanw/esbuild) - born with fastness

- 🗂 [File based routing](./src/pages)

- 📦 [Components auto importing](./src/components)

- 🎨 [UnoCSS](https://github.com/antfu/unocss) - The instant on-demand atomic CSS engine.

- 😃 Use icons from any icon sets in [Pure CSS](https://github.com/antfu/unocss/tree/main/packages/preset-icons)
  - IE11([partial support](./src/components/icons/README.md))

- 🔥 Use the [new `<script setup>` style](https://github.com/vuejs/rfcs/pull/227)

- ✅ Use [Vitest](http://vitest.dev/) for unit and components testing

- 🦾 TypeScript, of course

- ☁️ Deploy on Netlify, zero-config

# Pre-packed

### UI Frameworks

- [UnoCSS](https://github.com/antfu/unocss) - The instant on-demand atomic CSS engine.

### Icons

- [Iconify](https://iconify.design) - use icons from any icon sets [🔍Icônes](https://icones.netlify.app/)
  - IE11([partial support](./src/components/icons/README.md))
- [Pure CSS Icons via UnoCSS](https://github.com/antfu/unocss/tree/main/packages/preset-icons)

### Plugins

- [Vue Router@3](https://github.com/vuejs/vue-router)
  - [`vite-plugin-pages`](https://github.com/hannoeru/vite-plugin-pages) - file system based routing
- [`unplugin-auto-import`](https://github.com/antfu/unplugin-auto-import) - Directly use Vue Composition API and others without importing
- [`unplugin-vue-components`](https://github.com/antfu/unplugin-vue-components) - components auto import
- [VueUse](https://github.com/antfu/vueuse) - collection of useful composition APIs

## Try it now!

### GitHub Template

[Create a repo from this template on GitHub](https://github.com/luvletterldl/the-last-naruto/generate).

### Clone to local

If you prefer to do it manually with the cleaner git history

```bash
npx degit luvletterldl/the-last-naruto my-vue2.7
cd my-vue2.7
pnpm i # If you don't have pnpm installed, run: npm install -g pnpm
```

# Acknowledgement

[vitesse-lite](https://github.com/antfu/vitesse-lite)

[ie11CustomProperties](https://github.com/nuxodin/ie11CustomProperties)
