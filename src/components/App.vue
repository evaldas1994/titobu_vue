<template>
  <div class="font vh-100 vw-100">
    <div v-if="auth">
      <NavigationComponent/>
      <base-notification/>
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
import BaseNotification from "@/components/app/notification/BaseNotification";

export default {
  components: {
    BaseNotification,
    LoginPage,
    NavigationComponent,
  },
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

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');

.bg {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1037%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(239%2c 239%2c 239%2c 1)'%3e%3c/rect%3e%3cpath d='M0%2c604.375C109.099%2c581.921%2c176.268%2c479.368%2c263.811%2c410.498C341.741%2c349.19%2c447.601%2c313.369%2c486.071%2c221.981C524.297%2c131.174%2c479.782%2c30.551%2c464.74%2c-66.819C449.873%2c-163.055%2c454.726%2c-265.787%2c398.441%2c-345.251C339.712%2c-428.166%2c249.307%2c-489.28%2c150.067%2c-511.082C53.705%2c-532.252%2c-38.691%2c-479.831%2c-135.84%2c-462.63C-247.714%2c-442.822%2c-391.885%2c-489.864%2c-464.284%2c-402.305C-537.063%2c-314.286%2c-451.213%2c-180.182%2c-463.293%2c-66.612C-474.728%2c40.886%2c-553.933%2c137.346%2c-532.968%2c243.398C-510.014%2c359.51%2c-442.231%2c469.265%2c-344.234%2c535.638C-245.351%2c602.611%2c-116.977%2c628.45%2c0%2c604.375' fill='%23e3e3e3'%3e%3c/path%3e%3cpath d='M1440 967.428C1522.843 964.856 1613.026 982.4870000000001 1681.562 935.8779999999999 1749.713 889.531 1767.6190000000001 800.13 1798.416 723.683 1827.815 650.707 1855.464 578.68 1857.149 500.023 1859.0720000000001 410.214 1853.124 318.576 1808.7649999999999 240.46300000000002 1758.949 152.74200000000002 1691.217 62.40100000000001 1593.784 36.25999999999999 1496.6970000000001 10.211999999999989 1397.176 62.11099999999999 1306.618 105.74099999999999 1227.066 144.06900000000002 1153.277 196.125 1106.5059999999999 271.026 1063.425 340.017 1065.345 424.039 1057.319 504.979 1049.655 582.266 1038.75 658.725 1060.672 733.233 1084.941 815.719 1115.441 906.012 1188.603 951.181 1261.533 996.2080000000001 1354.331 970.087 1440 967.428' fill='%23fbfbfb'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1037'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.font {
  font-family: 'Inter', sans-serif;
}

.top-text {
  height: 132px;

  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
}

.color-blue-bg {
  background: linear-gradient(180deg, rgba(5, 0, 254, 0.45) 0%, #000000 100%);
  /*box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);*/
}
.color-red-bg {
  background: linear-gradient(180deg, rgba(254, 0, 0, 0.44) 0%, #000000 100%);
  /*box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);*/
}
.color-green-bg {
  background: linear-gradient(180deg, rgba(30, 218, 0, 0.48) 0%, #000000 100%);
  /*box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);*/
}
.color-yellow-bg {
  background: linear-gradient(180deg, rgba(255, 199, 0, 0.5) 0%, #000000 100%);
  /*box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);*/
}
.color-blue-light-bg {
  background: linear-gradient(180deg, rgba(0, 197, 209, 0.47) 0%, #000000 100%);
  /*box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);*/
}
.color-purple-bg {
  background: linear-gradient(180deg, rgba(112, 0, 255, 0.51) 0%, #000000 100%);
  /*box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);*/
}
.color-black-bg {
  background: linear-gradient(180deg, rgba(142, 142, 142, 0.46) 0%, #000000 100%);
  /*box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);*/
}

.color-orange-bg {
  background: linear-gradient(180deg, rgba(255, 77, 0, 0.45) 0%, #000000 99.99%, #000000 100%);
}
.color-yellow-light-bg {
  background: linear-gradient(180deg, rgba(250, 255, 0, 0.45) 0%, #000000 99.99%, #000000 100%);
}
.color-green-light-bg {
  background: linear-gradient(180deg, #00E39F 0%, #000000 100%, rgba(46, 211, 162, 0.44) 100%);
}

.color-blue-icon {
  background: linear-gradient(180deg, #0047FF 0%, #000000 100%);
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.color-red-icon {
  background: linear-gradient(180deg, #FF0000 0%, #000000 100%);
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.color-green-icon {
  background: linear-gradient(180deg, #12b701 0%, #000000 100%);
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);


  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.color-yellow-icon {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(180deg, #FFC700 0%, #000000 100%);
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);


  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.color-blue-light-icon {
  background: linear-gradient(180deg, #00CAD7 0%, #000000 100%);
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);


  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.color-purple-icon {
  background: linear-gradient(180deg, #7000FF 0%, #000000 100%);
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);


  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.color-black-icon {
  background: linear-gradient(180deg, rgba(92, 92, 92, 0.42) 0%, #000000 100%);
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);


  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.color-orange-icon {
  background: linear-gradient(180deg, #FF6B00 0%, #000000 100%);
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);


  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.color-yellow-light-icon {
  background: linear-gradient(180deg, #D5DA00 0%, #000000 100%);
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);


  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.color-green-light-icon {
  background: linear-gradient(180deg, #00E39F 0%, #000000 100%, rgba(46, 211, 162, 0.44) 100%);
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);


  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.color-text-title {
  color: #292929;
  font-weight: 700;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.color-text-card-balance {
  color: #E4E4E4;
  font-weight: 700;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  height: 100%;
}

.p-10px {
  padding: 10px;
}

.mt-10px {
  margin-top: 10px;
}
.mt-20px {
  margin-top: 10px;
}

.mt-30px {
  margin-top: 30px;
}

.divider {
  width: 100%;
  height: 0px;

  border: 1px solid #D9D9D9;
}

.error {
  color: #b00000;
  border-color: #b00000;
  font-size: 10px;
}
.font-italic {
  font-style: italic;
}

.form-label {
  width: 100%;
  height: 18px;

  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  margin-bottom: 0px;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.form-field {
  width: 100%;
  height: 32px;
  line-height: 18px;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0px;
}

.card-32 {
  width: 100%;
  height: 32px;
  line-height: 18px;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0px;
}

.card-32-no-shadow {
  width: 100%;
  height: 32px;
  line-height: 18px;
}

.btn-save {
  width: 100%;
  height: 32px;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0px;
}

/* Hide scrollbar for Chrome, Safari and Opera */
.hide-scrollbar-1::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.hide-scrollbar-2 {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

.custom-card-shadow {
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
}
.icon-24 {
  font-size: 24px;
}
.icon-32 {
  font-size: 30px;
}
</style>