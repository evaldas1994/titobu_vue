<template>
    <div :class="[`color-${bg}-bg custom-card-shadow py-1`]" @click="$emit('update:modelValue', value)">
      <div v-if="loading" class="top-card-title color-text-card-balance d-flex justify-content-center align-items-center ">
        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
      </div>

      <div v-else>
        <span class="top-card-title color-text-card-balance d-flex justify-content-center align-items-center">{{ title1 }}</span>
        <span v-if="title2" class="top-card-description color-text-card-balance d-flex justify-content-center align-items-center">{{ title2 }}</span>
      </div>
    </div>
</template>

<script>
export default {
  name: "BaseCube.vue",
  props: {
    title1: {
      type: [String, Number],
      default: 'Example'
    },
    title2: {
      type: [String, Number],
      default: ''
    },
    bg: {
      type: String,
      default: 'grey'
    },
    value: {
      type: String,
      default: null
    },
    loading: {
      type: Boolean,
    }
  }
}
</script>

<style scoped>

</style>