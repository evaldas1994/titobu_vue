<template>
<div>
  <nav class="navbar navbar-dark side_nav_bg_color">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">
        <span class="logo logo_ti">TI</span>
        <span class="logo logo_to">TO</span>
        <span class="logo logo_bu">BU</span>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">
            <a class="navbar-brand" href="/">
              <span class="logo logo_ti">TI</span>
              <span class="logo logo_to">TO</span>
              <span class="logo logo_bu">BU</span>
            </a>
          </h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
              <router-link class="router-link" to="/categories">Kategorijos</router-link>
            </li>
            <li class="nav-item">
              <router-link class="router-link" to="/accounts">Sąskaitos</router-link>
            </li>

            <hr class="hr" />

            <li class="nav-item cursor-pointer">
              <router-link @click="logout()" class="router-link-log-out" to="#">Atsijungti</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</div>
</template>

<script>
export default {
  name: "NavigationComponent",
  methods: {
    logout() {
      localStorage.removeItem('bearer_token')
      window.location.href = '/'
    }
  }
}
</script>

<style scoped>
.side_nav_bg_color {
  background: linear-gradient(180deg, #00BF93 0%, #00523F 100%);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
}
.logo {
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 2px;
}
.logo_ti {
  color: #BFD834;
}
.logo_to {
  color: #00AEAD;
}
.logo_bu {
  color: #72CC50;
}

.router-link {
  color: #72CC50;
  text-decoration: none;
  font-size: 20px;
}

.router-link:hover {
  color: #98d780;
}

.router-link-log-out {
  color: #b20101;
  text-decoration: none;
  font-size: 20px;
}

.router-link-log-out:hover {
  color: #cb0808;
}
</style>