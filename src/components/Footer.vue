<script setup>
import { toggleDark } from '~/composables'
</script>

<template>
  <nav text-xl w-14 mx-auto mt-6 flex justify-between>
    <button icon-btn @click="toggleDark()">
      <div dark:i-carbon-moon i-carbon-sun />
    </button>

    <a
      icon-btn
      i-carbon-logo-github
      rel="noreferrer"
      href="https://github.com/luvletterldl/the-last-naruto"
      target="_blank"
      title="GitHub"
    />
  </nav>
</template>
