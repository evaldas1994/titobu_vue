<template>
  <div>
    <button
        :class="[
            'btn-save',
            `color-${color}-bg`,
            'color-text-card-balance'
          ]"
        type="button"
    >
      <span v-if="isLoading([name])" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
      <span v-else>{{ label }}</span>
    </button>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: "BaseButton.vue",
  data() {
    return {

    }
  },
  props: {
    name: {
      type: String
    },
    label: {
      type: String
    },
    color: {
      type: String,
      default: 'grey'
    },
  },
  methods: {
    ...mapActions([
      'setLoading',
      'unsetLoading',
    ]),
  },
  computed: {
    ...mapGetters([
      'isLoading',
      'loading',
    ]),
  },
}
</script>

<style scoped>

</style>