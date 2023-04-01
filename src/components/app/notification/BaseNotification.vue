<template>
  <div
      v-if="notification"
      class="w-100 position-absolute"
  >
    <div :class="['alert', notification.type === 'success' ? 'alert-success' : 'alert-danger', 'rounded-0', 'd-flex', 'justify-content-between', notification.type ? 'fade show' : 'fade'] " role="alert">
      <div class="d-flex">
        <base-icon
            v-if="notification.type === 'success'"
            icon="fa-regular fa-square-check"
            color-name="green"
            iconClass="icon-24 me-2"
        />

        <base-icon
            v-if="notification.type === 'error'"
            icon="fa-solid fa-triangle-exclamation"
            color-name="red"
            iconClass="icon-24 me-2"
        />
        <div class="text-start">
          {{ notification.message }}
        </div>
      </div>

      <base-icon
          icon="fa-regular fa-rectangle-xmark"
          color-name="red"
          iconClass="icon-24"
          data-bs-dismiss="alert"
      />
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import BaseIcon from "@/components/app/icon/BaseIcon";

export default {
  name: "BaseNotification.vue",
  components: {
    BaseIcon
  },
  props: {

  },
  computed: {
    ...mapGetters([
      'notification',
    ]),
  },
  watch: {
    notification(newValue) {
      if (newValue)
        setTimeout(() => {
          this.resetNotification();
        }, 1500)

    }
  },
  methods: {
    ...mapActions([
      'resetNotification',
    ]),
  }
}
</script>

<style scoped>

</style>