<template>
<div>
  <nav class="navbar navbar-dark side_nav_bg_color bg">
    <div class="container-fluid">

<!--      Icon-->
      <a class="navbar-brand" href="/">
        <span class="logo logo_ti">TI</span>
        <span class="logo logo_to">TO</span>
        <span class="logo logo_bu">BU</span>
      </a>


      <div class="d-flex">
        <!--      Back-->
        <div
            v-if="$router.currentRoute.value.fullPath !== '/'"
            @click="$router.back()"
        >
          <base-icon
              icon="fa-solid fa-rectangle-xmark"
              color-name="red"
              iconClass="icon-x"
          />
        </div>

        <!--      Hamburger-->
        <div
            class="ps-2"
          data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar"
      >
        <base-icon
            icon="fa-solid fa-bars"
            color-name="black"
            iconClass="icon-x"
        />
      </div>
      </div>

<!--      Sidenav-->
      <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">

<!--        Header-->
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

<!--        Body-->
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <hr class="hr" />

            <li class="nav-item" data-bs-dismiss="offcanvas">
              <router-link class="router-link" to="/earnings">Pajamos</router-link>
            </li>
            <li class="nav-item" data-bs-dismiss="offcanvas">
              <router-link class="router-link" to="/expenses">Išlaidos</router-link>
            </li>

            <hr class="hr" />

            <li class="nav-item" data-bs-dismiss="offcanvas">
              <router-link class="router-link" to="/categories">Kategorijos</router-link>
            </li>
            <li class="nav-item" data-bs-dismiss="offcanvas">
              <router-link class="router-link" to="/period-categories">Kategorijų limitai pagal laikotarpius</router-link>
            </li>

            <hr class="hr" />

            <li class="nav-item cursor-pointer">
              <router-link @click="logout()" class="router-link-log-out" to="#">Atsijungti</router-link>
            </li>

            <hr class="hr" />
          </ul>
        </div>
      </div>
    </div>
  </nav>
</div>
</template>

<script>
import BaseIcon from '@/components/app/icon/BaseIcon.vue';

export default {
  name: "NavigationComponent",
  components: {
    BaseIcon,
  },
  methods: {
    logout() {
      localStorage.removeItem('bearer_token')
      window.location.href = '/'
    }
  }
}
</script>

<style>
.icon-x {
  font-size: 40px;
}
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

.bg {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1037%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(239%2c 239%2c 239%2c 1)'%3e%3c/rect%3e%3cpath d='M0%2c604.375C109.099%2c581.921%2c176.268%2c479.368%2c263.811%2c410.498C341.741%2c349.19%2c447.601%2c313.369%2c486.071%2c221.981C524.297%2c131.174%2c479.782%2c30.551%2c464.74%2c-66.819C449.873%2c-163.055%2c454.726%2c-265.787%2c398.441%2c-345.251C339.712%2c-428.166%2c249.307%2c-489.28%2c150.067%2c-511.082C53.705%2c-532.252%2c-38.691%2c-479.831%2c-135.84%2c-462.63C-247.714%2c-442.822%2c-391.885%2c-489.864%2c-464.284%2c-402.305C-537.063%2c-314.286%2c-451.213%2c-180.182%2c-463.293%2c-66.612C-474.728%2c40.886%2c-553.933%2c137.346%2c-532.968%2c243.398C-510.014%2c359.51%2c-442.231%2c469.265%2c-344.234%2c535.638C-245.351%2c602.611%2c-116.977%2c628.45%2c0%2c604.375' fill='%23e3e3e3'%3e%3c/path%3e%3cpath d='M1440 967.428C1522.843 964.856 1613.026 982.4870000000001 1681.562 935.8779999999999 1749.713 889.531 1767.6190000000001 800.13 1798.416 723.683 1827.815 650.707 1855.464 578.68 1857.149 500.023 1859.0720000000001 410.214 1853.124 318.576 1808.7649999999999 240.46300000000002 1758.949 152.74200000000002 1691.217 62.40100000000001 1593.784 36.25999999999999 1496.6970000000001 10.211999999999989 1397.176 62.11099999999999 1306.618 105.74099999999999 1227.066 144.06900000000002 1153.277 196.125 1106.5059999999999 271.026 1063.425 340.017 1065.345 424.039 1057.319 504.979 1049.655 582.266 1038.75 658.725 1060.672 733.233 1084.941 815.719 1115.441 906.012 1188.603 951.181 1261.533 996.2080000000001 1354.331 970.087 1440 967.428' fill='%23fbfbfb'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1037'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>