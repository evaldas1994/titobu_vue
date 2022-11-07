<template>
<div class="vh-100 vw-100 d-flex justify-content-center align-items-center">
  <div class="card custom_card">
    <h5 class="card-header">Prisijungimas</h5>
    <div class="card-body">
      <div class="mb-3">
        <label for="email" class="form-label">El. paštas</label>
        <input type="email" :class="inputClass" id="email" placeholder="admin@gmail.com" v-model="credentials.email">
        <small v-if="errors.length" class="font-italic error">Blogas el. paštas.</small>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Slaptažodis</label>
        <input type="password" :class="inputClass" id="password" placeholder="*****"  v-model="credentials.password">
        <small v-if="errors.length" class="font-italic error">Blogas slaptažodis.</small>
      </div>
      <button @click="submit()" class="btn btn-primary" type="button" :disabled="isLoading('submit')">
        <span v-if="isLoading('submit')" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        Prisijungti
      </button>

    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      credentials: {
        email: 'admin@gmail.com',
        password: 'password',
      },
      errors: [],
      loading: []
    }
  },
  computed: {
    inputClass() {
      return ['form-control', this.errors.length ? 'error' : null].join(' ')
    }
  },
  methods: {
    submit() {
      this.setLoading(['submit'])
      this.axios.post(this.baseUrl + '/api/tokens/create', this.credentials)
        .catch((error) => {
          if (error.response.status === 401) {
            this.errors = ['errors']
          }
        })
        .then((response) => {
          if (response.status === 200) {
            localStorage.setItem('bearer_token', response.data.token)
            window.location.href = '/'
          }
      })
      .finally(() => {
        this.removeLoading(['submit'])
      })
    },
    isLoading(key) {
      return this.loading.includes(key)
    },
    setLoading(keys) {
      console.log(keys)
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
  }
}
</script>

<style scoped>
.custom_card {
  background: #FFFFFF;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  width: 700px;
}

.error {
  color: #b00000;
  border-color: #b00000;
}

.font-italic {
  font-style: italic;
}
</style>