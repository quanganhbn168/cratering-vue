<template>
  <button :class="btnClass" @click="$emit('click')">
    <slot />
  </button>
</template>

<script setup>
const props = defineProps({
  variant: { type: String, default: 'primary' },
  size: { type: String, default: '' }
})

const btnClass = computed(() => {
  return `btn btn-${props.variant} ${props.size ? 'btn-' + props.size : ''}`
})
</script>