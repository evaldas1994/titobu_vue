<template>
  <div>
    <div>
      <div class="container">
        <!--        Top Title-->
        <div class="row mt-10px">
          <div class="top-text d-flex justify-content-center align-items-center color-black-icon text-center"><span>{{ formatAmount(total) }}</span></div>
        </div>

        <!--        Cube-->
        <div class="row mt-10px">
          <div class="col-4">
            <base-cube
                :title1="formatAmount(totalIn)"
                bg="green"
                @click="$router.push('/earnings')"
                :loading="isLoading(['mounted'])"
            />
          </div>
          <div class="col-4">
            <base-cube
                :title1="formatAmount(totalIn - totalOut)"
                bg="yellow"
                :loading="isLoading(['mounted'])"
            />
          </div>
          <div class="col-4">
            <base-cube
                :title1="formatAmount(totalOut)"
                bg="red"
                @click="$router.push('/expenses')"
                :loading="isLoading(['mounted'])"
            />
          </div>
        </div>

        <!--        Divider-->
        <div class="row mt-30px">
          <div class="col-12">
            <div class="divider"></div>
          </div>
        </div>

        <!--        Circles-->
        <div class="row mt-20px">
          <div class="col-6 mt-10px"
               v-for="(item, index) in categoryBalanceAnalyticsData"
               :key="index"
          >
            <category-balance-analytics-card1
              :item="item"
            />
          </div>
        </div>

        <!--        Divider-->
        <div class="row mt-30px">
          <div class="col-12">
            <div class="divider"></div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'

import BaseCube from '@/components/app/cube/BaseCube.vue';
import CategoryBalanceAnalyticsCard1 from '@/components/analytics/CategoryBalanceAnalyticsCard1.vue';
import axios from "axios";

export default {
  name: "ExpensesPage",
  components: {
    BaseCube,
    CategoryBalanceAnalyticsCard1,
  },
  data() {
    return {
      total: 0,
      totalIn: 0,
      totalOut: 0,

      categoryBalanceAnalyticsData: [],
    }
  },
  computed: {
    ...mapGetters([
      'isLoading',
      'loading',
      'formatAmount',
    ]),
  },

  methods: {
    ...mapActions([
      'setLoading',
      'unsetLoading',
    ]),
  },
  created() {
    console.log(this.baseUrl);
  },
  mounted() {
    this.setLoading(['mounted'])

    console.log(localStorage.getItem('bearer_token'))
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('bearer_token')}`;
    axios.defaults.headers.common['Content-Type'] = 'application/json'
    axios.defaults.headers.common['Accept'] = 'application/json'

    axios
        .get('http://titobu.test/api/analytics/analytic-by-category')
        .then(response => {
          this.categoryBalanceAnalyticsData = response.data.data

          this.total = response.data.total
          this.totalIn = response.data.total_earnings
          this.totalOut = response.data.total_expenses

          console.log(response)
          this.unsetLoading(['mounted'])
        })
        .catch(error => {
          console.log(error)
          this.errored = true
        })
        .finally(() => this.loading = false)
  }
}
</script>

<style scoped>
.top-text {
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 77px;
  display: flex;
  align-items: center;
  text-align: center;
}
</style>