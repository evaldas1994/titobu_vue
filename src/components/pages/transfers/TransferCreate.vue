<template>
  <div>
    <div class="container mt-4">
      <div class="row position-relative">
        <div class="col-12 col-sm-6 col col-md-3">
          <div class="mb-3">
            <label for="name" class="form-label">Pavadinimas</label>
            <input type="text" :class="inputClass" id="name" v-model="model.name">
            <small v-if="errors['name']"  class="font-italic error">Blogas pavadinimas.</small>
          </div>
        </div>
        <div class="col-12 col-sm-6 col col-md-3">
          <div class="mb-3">
            <label for="amount" class="form-label">Suma</label>
            <input type="number" :class="inputClass" id="amount" v-model="model.amount">
            <small v-if="errors['amount']"  class="font-italic error">Bloga suma</small>
          </div>
        </div>
        <div class="col-12 col-sm-6 col col-md-3">

        </div>
        <div class="col-12 col-sm-6 col col-md-3">
          <div class="mb-3">
            <label for="account_id" id="account_id" class="form-label">Sąskaita</label>
            <select id="account_id" :class="selectClass" aria-label="account_id" v-model="model.account_id">
              <option
                  v-for="account in this.accounts"
                  :key="account.id"
                  :value="account.id"
              >
                {{ account.name }}
              </option>
            </select>
            <small v-if="errors['account_id']"  class="font-italic error">Bloga sąskaita</small>
          </div>
        </div>
        <div class="col-12 d-flex align-items-end justify-content-end">
          <button @click="submit()" class="btn btn-primary" type="button" :disabled="isLoading('category') || isLoading('account') || isLoading('submit')">
          <span v-if="isLoading('category') || isLoading('account') || isLoading('submit')" class="spinner-border spinner-border-sm" role="status"
                aria-hidden="true"></span>
            Saugoti
          </button>
        </div>
      </div>
      <div class="row mt-4 position-relative">
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

import BaseGrid from "@/components/app/grid/BaseGrid.vue";
import LoadingComponent from "@/components/app/LoadingComponent";

export default {
  name: "TransferCreate",
  components: {
    BaseGrid,
    LoadingComponent
  },
  data() {
    return {
      errors: [],
      model: {
        category_id: this.$route.params.category_id ? this.$route.params.category_id : 2,
      },
      transfers: null,
      category: [],
      accounts: []
    }
  },
  watch: {
    transfers(newValue) {
      console.log(newValue);
    }
  },
  computed: {
    inputClass() {
      return ['form-control', this.errors.length ? 'error' : null].join(' ')
    },
    selectClass() {
      return ['form-control', 'form-select', this.errors.length ? 'error' : null].join(' ')
    },
    loading() {
      return this.$store.state.loading
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

      this.axios.get(this.baseUrl + `/api/transfers/get-by-category/${this.$route.params.category_id}`)
          .catch((error) => {
            if (error.response.status === 401) {
              localStorage.removeItem('bearer_token')
              window.location.href = '/'
            }
          })
          .then((response) => {
            if (response.status === 200) {
              this.transfers = response.data.data
              console.log(response.data.data);
            }
          })
          .finally(() => {
            this.$store.commit('unsetLoading', ['transfer'])
          })
    },
    getCategory() {
      this.$store.commit('setLoading', ['category'])

      this.axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('bearer_token')}`;
      this.axios.defaults.headers.common['Content-Type'] = 'application/json'
      this.axios.defaults.headers.common['Accept'] = 'application/json'

      this.axios.get(this.baseUrl + '/api/categories/' + this.$route.params.category_id)
          .catch((error) => {
            if (error.response.status === 401) {
              localStorage.removeItem('bearer_token')
              window.location.href = '/'
            }
          })
          .then((response) => {
            if (response.status === 200) {
              this.category = response.data
              this.model.account_id = this.category.account_id
            }
          })
          .finally(() => {
            this.$store.commit('unsetLoading', ['category'])
          })
    },
    getAccounts() {
      this.$store.commit('setLoading', ['account'])

      this.axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('bearer_token')}`;
      this.axios.defaults.headers.common['Content-Type'] = 'application/json'
      this.axios.defaults.headers.common['Accept'] = 'application/json'

      this.axios.get(this.baseUrl + '/api/accounts')
          .catch((error) => {
            if (error.response.status === 401) {
              localStorage.removeItem('bearer_token')
              window.location.href = '/'
            }
          })
          .then((response) => {
            if (response.status === 200) {
              this.accounts = response.data.data
            }
          })
          .finally(() => {
            this.$store.commit('unsetLoading', ['account'])
          })
    },
    isLoading(key) {
      return this.loading.includes(key)
    },
    submit() {
      this.$store.commit('setLoading', ['submit'])

      this.axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('bearer_token')}`;
      this.axios.defaults.headers.common['Content-Type'] = 'application/json'
      this.axios.defaults.headers.common['Accept'] = 'application/json'

      this.axios.post(this.baseUrl + '/api/transfers', this.model)
          .catch((error) => {
            if (error.response.status === 401) {
                localStorage.removeItem('bearer_token')
                window.location.href = '/'
            }
            if (error.response.status === 422) {
              this.errors = error.response.data.errors
            }
          })
          .then((response) => {
            if (response && response.status === 201) {
              this.$router.push('/')
            }
          })
          .finally(() => {
            this.$store.commit('unsetLoading', ['submit'])
          })
    },
  },
  created() {
    this.getCategoryBalanceAnalyticsData()
    this.getTransfers()
    this.getCategory()
    this.getAccounts()
    console.log(this.baseUrl)
  }
}
</script>

<style scoped>
.error {
  color: #b00000;
  border-color: #b00000;
}
.font-italic {
  font-style: italic;
}
</style>