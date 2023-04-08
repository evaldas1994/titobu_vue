<template>
  <div>
    <div>
      <div class="container-fluid px-3">
        <!--        Top Title-->
        <div class="row mt-10px">
          <div class="top-text d-flex justify-content-center align-items-center">
            <span v-if="!showTitleDetails" @click="showTitleDetails = !showTitleDetails" class="color-black-icon">{{ formatAmount(total) }}</span>
            <div v-if="showTitleDetails" @click="showTitleDetails = !showTitleDetails">
              <ul class="list-group color-text-title">
                <li class="list-group-item color-text-title color-text-card-balance h6 color-black-icon d-flex justify-content-between mb-0">
                  <span class="pe-2">Praėjęs laikotarpis:</span>
                  <span class="ps-2">{{ formatAmount(total) }}</span>
                </li>
                <li class="list-group-item color-text-title color-text-card-balance h6 color-black-icon d-flex justify-content-between mb-0">
                  <span class="pe-2">Šis laikotarpis:</span>
                  <span class="ps-2">{{ formatAmount(totalIn - totalOut) }}</span>
                </li>
                <li class="list-group-item color-text-title color-text-card-balance h6 color-black-icon d-flex justify-content-between mb-0">
                  <span class="pe-2">Taupymai:</span>
                  <span class="ps-2">{{ formatAmount(totalSavings) }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!--        Cube-->
        <div class="row mt-10px px-2">
          <div class="col-4 px-1">
            <base-cube
                :title1="formatAmount(totalIn)"
                bg="green"
                @click="$router.push('/earnings')"
                :loading="isLoading(['mounted'])"
            />
          </div>
          <div class="col-4 px-1">
            <base-cube
                :title1="formatAmount(totalIn - totalOut)"
                bg="yellow"
                :loading="isLoading(['mounted'])"
            />
          </div>
          <div class="col-4 px-1">
            <base-cube
                :title1="formatAmount(totalOut)"
                bg="red"
                @click="$router.push('/expenses')"
                :loading="isLoading(['mounted'])"
            />
          </div>
        </div>

        <!--        Divider-->
        <div class="row mt-30px px-2">
          <div class="col-12 px-1">
            <div class="divider"></div>
          </div>
        </div>

        <!--        Circles-->
        <div class="row mt-20px px-2">
          <div class="col-6 px-1 mt-10px"
               v-for="(item, index) in categoryBalanceAnalyticsData"
               :key="index"
          >
            <category-balance-analytics-card1
              :item="item"
            />
          </div>
        </div>

        <!--        Divider-->
        <div class="row mt-30px px-2">
          <div class="col-12 px-1">
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
      totalSavings: 0,
      showTitleDetails: false,

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
        .get(`${this.baseUrl}/api/analytics/analytic-by-category`)
        .then(response => {
          this.categoryBalanceAnalyticsData = response.data.data

          this.total = response.data.total
          this.totalIn = response.data.total_earnings
          this.totalOut = response.data.total_expenses
          this.totalSavings = response.data.total_savings

          console.log(response)
          this.unsetLoading(['mounted'])
        })
        .catch(error => {
          console.log(error)
          this.errored = true
        })
        .finally(() => this.unsetLoading(['mounted']))
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