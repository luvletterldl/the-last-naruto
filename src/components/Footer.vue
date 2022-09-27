<script lang="ts" setup>
import { isDark, toggleDark } from '~/composables'
</script>

<template>
  <nav text-xl w-14 mx-auto mt-6 flex justify-between>
    <button icon-btn @click="toggleDark()">
      <carbon-icon :name="isDark ? 'moon' : 'sun'" />
    </button>

    <a
      icon-btn
      rel="noreferrer"
      href="https://github.com/luvletterldl/the-last-naruto"
      target="_blank"
      title="GitHub"
    >
      <carbon-icon name="logo-github" />
    </a>
  </nav>
</template>
