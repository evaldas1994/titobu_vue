<template>
  <div class="bg-color">
    <div v-if="auth">
      <NavigationComponent/>
      <router-view/>
    </div>
    <div v-else>
      <LoginPage/>
    </div>
  </div>
</template>

<script>
import NavigationComponent from "@/components/app/NavigationComponent";
import LoginPage from "@/components/pages/LoginPage";
export default {
  components: {LoginPage, NavigationComponent},
  data() {
    return {

    }
  },
  computed: {
    auth() {
      return !!localStorage.getItem('bearer_token');
    }
  }
}
</script>

<style scoped>
.bg-color {
  background: #F5F7FB;
  width: 100vw;
  min-height: 100vh;
}
</style>