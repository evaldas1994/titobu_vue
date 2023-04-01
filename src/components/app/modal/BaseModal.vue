<template>
  <div class="modal fade" :id="id" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content rounded-0">
        <div class="modal-header">
          <h5 class="modal-title" :id="`${id}Label`">{{ title }}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <slot name="content"></slot>
        </div>
        <div class="modal-footer">
          <slot name="close"></slot>
          <slot name="submit"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseModal.vue",
  props: {
    id: {
      type: [String],
    },
    title: {
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