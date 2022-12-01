<template>
<div>
  <LoadingComponent
      v-if="isLoading('transfer')"
  />
  <div v-else class="container">
    <div class="row mt-4 position-relative">
      <div class="card custom_card d-flex justify-content-center align-items-center">
        <h1 class="title">{{ categoryBalanceAnalyticsData.total_balance }}</h1>
      </div>

    </div>
    <div class="row mt-4 position-relative overflow-hidden">
      <div class="d-flex overflow-scroll hide-scrollbar">
        <CategoryBalanceAnalyticsCard3
            v-for="item in categoryBalanceAnalyticsData.data" :key="item"
            :item="item"
        />
      </div>
    </div>
    <div class="row mt-4 position-relative d-flex">
        <CategoryBalanceAnalyticsCard1
            v-for="item in categoryBalanceAnalyticsData.data" :key="item"
            :item="item"
        />
      </div>
    <div class="row mt-4 position-relative">
      <base-grid
        :items="transfers"
        :headers="['Nr.', 'Pavadinimas', 'Kaina', 'Kategorija', 'Sąskaita', 'Data']"
        :columns="['id', 'name', 'amount', 'category_name', 'account_name', 'created_at']"
        v-show="false"
      />
    </div>
  </div>
</div>
</template>

<script>
import CategoryBalanceAnalyticsCard1 from "@/components/analytics/CategoryBalanceAnalyticsCard1.vue";
import CategoryBalanceAnalyticsCard3 from "@/components/analytics/CategoryBalanceAnalyticsCard3.vue";
import BaseGrid from "@/components/app/grid/BaseGrid.vue";
import LoadingComponent from "@/components/app/LoadingComponent.vue";
export default {
  name: "HomePage",
  components: {
    BaseGrid,
    CategoryBalanceAnalyticsCard1,
    CategoryBalanceAnalyticsCard3,
    LoadingComponent,
  },
  computed: {
    loading() {
      return this.$store.state.loading
    },
  },
  data() {
    return {
      errors: [],

      categoryBalanceAnalyticsData: null,
      transfers: null,
    }
  },
  methods: {
    getCategoryBalanceAnalyticsData() {
      this.$store.commit('setLoading', ['categoryBalanceAnalyticsData'])

      this.axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('bearer_token')}`;
      this.axios.defaults.headers.common['Content-Type'] = 'application/json'
      this.axios.defaults.headers.common['Accept'] = 'application/json'

      this.axios.get(this.baseUrl + '/api/analytics/out-category-balance')
          .catch((error) => {
            if (error.response.status === 401) {
              localStorage.removeItem('bearer_token')
              window.location.href = '/'
            }
          })
          .then((response) => {
            if (response.status === 200) {
              this.categoryBalanceAnalyticsData = response.data
            }
          })
          .finally(() => {
            this.$store.commit('unsetLoading', ['categoryBalanceAnalyticsData'])
          })
    },
    getTransfers() {
      this.$store.commit('setLoading', ['transfer'])

      this.axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('bearer_token')}`;
      this.axios.defaults.headers.common['Content-Type'] = 'application/json'
      this.axios.defaults.headers.common['Accept'] = 'application/json'

      this.axios.get(this.baseUrl + '/api/transfers')
          .catch((error) => {
            if (error.response.status === 401) {
              localStorage.removeItem('bearer_token')
              window.location.href = '/'
            }
          })
          .then((response) => {
            if (response.status === 200) {
              this.transfers = response.data.data
            }
          })
          .finally(() => {
            this.$store.commit('unsetLoading', ['transfer'])
          })
    },

    isLoading(key) {
      return this.loading.includes(key)
    },
  },
  created() {
    this.getCategoryBalanceAnalyticsData()
    this.getTransfers()
  }
}
</script>

<style scoped>
.icon {
  font-size: 40px;
}

.router-link {
  color: #72CC50;
  text-decoration: none;
  font-size: 40px;
}

.router-link:hover {
  color: #98d780;
}

.hide-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.hide-scrollbar {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

.custom_card {
  background-color:rgba(255, 255, 255, 0.9);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
}

.title {
  font-weight: 700;
  font-size: 50px;
  /*line-height: 16px;*/
  color: #8898AA;
}
</style>