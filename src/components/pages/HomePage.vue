<template>
<div>
  <div class="container">
    <div class="row mt-4 position-relative" style="min-height: 150px">
      <LoadingComponent
          v-if="isLoading('categoryBalanceAnalyticsData')"
      />
      <div v-else v-for="item in categoryBalanceAnalyticsData" :key="item" class="col-12 col-sm-6 col-md-4 col-xl-3">
                <CategoryBalanceAnalyticsCard
                  :item="item"
                />
      </div>
    </div>
    <div class="row mt-4 position-relative" style="min-height: 150px">
      <LoadingComponent
          v-if="isLoading('transfer')"
      />
      <base-grid
        v-else
        :items="transfers"
        :headers="['Nr.', 'Pavadinimas', 'Kaina', 'Kategorija', 'Sąskaita', 'Data']"
        :columns="['id', 'name', 'amount', 'category_name', 'account_name', 'created_at']"
      />
    </div>
  </div>
</div>
</template>

<script>
import CategoryBalanceAnalyticsCard from "@/components/analytics/CategoryBalanceAnalyticsCard.vue";
import BaseGrid from "@/components/app/grid/BaseGrid.vue";
import LoadingComponent from "@/components/app/LoadingComponent.vue";
export default {
  name: "HomePage",
  components: {
    BaseGrid,
    CategoryBalanceAnalyticsCard,
    LoadingComponent
  },
  computed: {
    loading() {
      return this.$store.state.loading
    }
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
              this.categoryBalanceAnalyticsData = response.data.data
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
</style>