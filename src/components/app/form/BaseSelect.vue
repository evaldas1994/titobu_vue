<template>
  <div>
    <label :for="name" :id="name" class="form-label">{{ label }}:</label>
    <select
        :id="name"
        :class="selectClass"
        :aria-label="name"
        v-bind:disabled="disabled"
        @input="$emit('update:modelValue', $event.target.value)"
    >
      <option
          v-for="(option, index) in options"
          :key="index" :value="option[value]"
          :selected="model[name] === option[value]"
      >
        {{ option[text] }}
      </option>
    </select>
    <small v-if="errors['type']" class="font-italic error">Blogai įvestas laukas!</small>
  </div>
</template>

<script>
export default {
  name: "BaseSelect.vue",
  props: {
    name: {
      type: String
    },
    label: {
      type: String
    },
    options: {
      type: Object,
    },
    errors: {
      type: Object,
      default: () => {}
    },
    model: {
      type: Object,
    },
    value: {
      type: String,
      default: 'id'
    },
    text: {
      type: String,
      default: 'name'
    },
    disabled: {
      type: Boolean,
      default: false,
    }
  },
  computed: {
    selectClass() {
      return ['form-control form-field form-select', this.errors.length ? 'error' : null].join(' ')
    },
  }
}
</script>

<style scoped>
select {
  overflow-y: auto;
  max-height: 50px;
}
</style>