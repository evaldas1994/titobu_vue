<template>
    <i
        :class="[
                    'fa',
                    icon,
                    `color-${color}-icon`,
                    iconClass
                  ]"
    />
</template>

<script>
export default {
  name: "BaseIcon.vue",
  data() {
    return {

    }
  },
  props: {
    icon: {
      type: String
    },
    color: {
      type: String,
      default: 'grey'
    },
    iconClass: {
      type: String,
      default: ''
    }
  },
}
</script>

<style scoped>

</style>