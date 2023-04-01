<template>
  <div>
    <label :for="name" class="form-label">{{ label }}:</label>
    <input
        autocomplete="off"
        type="text"
        :class="inputClass"
        :id="name"
        @input="$emit('update:modelValue', $event.target.value)"
        :value="value"
    >
    <small v-if="errors['name']" class="font-italic error">Blogai įvestas laukas!</small>
  </div>
</template>

<script>
export default {
  name: "BaseInput.vue",
  props: {
    name: {
      type: String
    },
    label: {
      type: String
    },
    errors: {
      type: Object,
      default: () => {}
      },
    model: {
      type: Object,
    }
  },
  computed: {
    inputClass() {
      return ['form-control form-field', this.errors.length ? 'error' : null].join(' ')
    },
    value() {
      return this.model[this.name];
    }
  },
}
</script>

<style scoped>

</style>