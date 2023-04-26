<script setup lang="ts">
import { isIE } from '~/lib/index'

interface IconProps {
  color?: string
  name: string
  size?: number | string
}

withDefaults(defineProps<IconProps> (), {
  color: '#374151',
  size: 6,
})

const Icons: Record<string, string> = {
  'campsite': 'https://api.iconify.design/carbon:campsite.svg',
  'moon': 'https://api.iconify.design/carbon:moon.svg',
  'sun': 'https://api.iconify.design/carbon:sun.svg',
  'logo-github': 'https://api.iconify.design/carbon:logo-github.svg',
  'pedestrian': 'https://api.iconify.design/carbon:pedestrian.svg',
}

const IconName: Record<string, string> = {
  'campsite': 'i-carbon-campsite',
  'moon': 'i-carbon-moon',
  'sun': 'i-carbon-sun',
  'logo-github': 'i-carbon-logo-github',
  'pedestrian': 'i-carbon-pedestrian',
}
</script>

<template>
  <div :class="isIE ? `w-${size} h-${size}` : ''" display-context inline-block text-center>
    <div v-if="isIE" :class="`w-${size} h-${size}`" :style="{ backgroundImage: `url(${Icons[name]})`, backgroundSize: '100% 100%' }" />
    <div v-else :class="`${IconName[name]} text-${size}`" inline-block />
  </div>
</template>
