<template>
  <div class="loading-layer">
    <div class="spinner-border" role="status">
      <span class="visually-hidden"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoadingComponent"
}
</script>

<style scoped>
.loading-layer {

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: auto;
  height: auto;
  color: #b00000;

  /*background: #72CC50;*/
  opacity: 0.5;
  z-index: 9;
  font-size: 5px;
}
</style>