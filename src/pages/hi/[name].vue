<script setup lang="ts">
import { router } from '~/main'

const props = defineProps<{ name: string }>()
</script>

<template>
  <div>
    <carbon-icon name="pedestrian" text-4xl size="14" />
    <p>Hi, {{ props.name }}</p>
    <p text-sm op50>
      <em>Dynamic route!</em>
    </p>

    <div>
      <button class="btn m-3 text-sm mt-8" @click="router.back()">
        Back
      </button>
    </div>
  </div>
</template>
