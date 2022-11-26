<template>
  <div class="bg-image vh-100 vw-100">
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
.bg-image {
  background-image: url('https://image.winudf.com/v2/image/Y29tLmF3ZXNvbWV3YWxscGFwZXIuY2hyaXN0bWFzNTkyMF9zY3JlZW5fM184cncwdmIzMw/screen-3.jpg?fakeurl=1&type=.webp');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
}
</style>