<template>
<div>
  <div class="container">
    <div class="row mt-4" v-show="categoryBalanceAnalyticsData">
      <div v-for="item in categoryBalanceAnalyticsData" :key="item" class="col-12 col-sm-6 col-md-4 col-xl-3">
                <CategoryBalanceAnalyticsCard
                  :item="item"
                />
      </div>
    </div>
    <div class="row mt-4">
      <base-grid
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
export default {
  name: "HomePage",
  data() {
    return {
      errors: [],
      loading: [],

      categoryBalanceAnalyticsData: null,
      transfers: null,
    }
  },
  components: {BaseGrid, CategoryBalanceAnalyticsCard},
  methods: {
    getCategoryBalanceAnalyticsData() {
      this.setLoading(['categoryBalanceAnalyticsData'])

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
            this.removeLoading(['categoryBalanceAnalyticsData'])
          })

    },
    getTransfers() {
      this.setLoading(['transfers'])

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
            this.removeLoading(['transfers'])
          })
    },

    isLoading(key) {
      return this.loading.includes(key)
    },
    setLoading(keys) {
      keys.forEach((key) => {
        this.loading.push(key)
      })

      return this.loading
    },
    removeLoading(keys) {
      keys.forEach((key) => {
        for( var i = 0; i < this.loading.length; i++){

          if ( this.loading[i] === key) {

            this.loading.splice(i, 1);
          }
        }
      })

      return this.loading
    }
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