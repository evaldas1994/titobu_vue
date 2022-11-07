<template>
<div>
  TranferIndex
</div>
</template>

<script>
export default {
  name: "TransferIndex",
  data() {
    return {
      errors: [],
      loading: [],
    }
  },
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
  }
}
</script>

<style scoped>

</style>