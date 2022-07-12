<script setup lang="ts">
import { router } from '~/main'
const name = ref('')
function go() {
  if (name.value)
    router.push(`/hi/${encodeURIComponent(name.value)}`)
}
</script>

<template>
  <div>
    <div i-carbon-campsite text-4xl inline-block />
    <header w-120 my-3 mx-auto flex items-center justify-between>
      <img w-30 src="https://user-images.githubusercontent.com/499550/176823239-f59d75de-1d24-4b2d-b04b-fcc95db2903e.png" alt="naruto logo">
      🔗
      <img w-30 src="https://upload.wikimedia.org/wikipedia/commons/c/c0/IE11_Cyan_rgb_vertical.svg" alt="ie11 logo">
      🔗
      <img w-10 src="https://vitejs.dev/logo.svg" alt="vite logo">
    </header>
    <p>
      <a
        rel="noreferrer"
        href="https://github.com/luvletterldl/the-last-naruto"
        target="_blank"
      >
        The Last Naruto
      </a>
    </p>
    <p>
      <em text-sm op75>Vite + Vue2.7 Starter Template</em>
    </p>

    <div py-4 />

    <input
      id="input"
      v-model="name"
      placeholder="What's your name?"
      type="text"
      autocomplete="false"
      p="x-4 y-2"
      w="250px"
      text="center"
      bg="transparent"
      border="~ rounded gray-200 dark:gray-700"
      outline="none active:none"
      @keydown.enter="go"
    >

    <div>
      <button class="m-3 text-sm btn" :disabled="!name" @click="go">
        Go
      </button>
    </div>
  </div>
</template>
