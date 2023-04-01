<template>
  <div>

    <div :class="[`color-${item.color}-bg`]">
      <div class="container py-2">
        <div class="row">
          <div class="col-8 pe-1 px-0 d-flex">
            <div class="container pb-2">
              <div class="row d-flex flex-column justify-content-center">
                <div class="col-12">
                  <div class="mb-1 title text-uppercase">
                    <span class="text-nowrap color-text-title">{{this.item.name}}</span>
                  </div>
                </div>
                <div class="col-12">
                  <div class="balance text-uppercase">
                    <span class="text-nowrap">{{formatAmount(item.balance)}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div class="col-4 ps-1 d-flex align-items-center pb-2  justify-content-end">
            <div :class="['icon-circle', `color-${item.color}-bg`]">
            <i @click="$router.push(`/transfer/create-by-category/${this.item.id}`)" :class="[item.icon, 'icon', `color-${item.color}-icon`]"></i>
            </div>
          </div>
        </div>
        <div class="progress" :style="{height: 2 + 'px'}">
          <div class="progress-bar" role="progressbar" :style="{width: item.balance/item.balance_month * 100 + '%'}" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <div class="row mt-2">
          <div class="container overflow-hidden d-flex">
            <div class="col-4 overflow-hidden">
              <div class="container-fluid overflow-hidden">
                <div class="row">
                  <div class="col-12 px-0">
                    <span class="balance_details text-nowrap">{{ formatAmount(item.balance_month)}}</span>
                  </div>
                  <small class="balance_month_small text-nowrap px-0 text-start">mėnuo</small>
                </div>
              </div>
            </div>
            <div class="col-4 px-sm-1">
              <div class="container-fluid">
                <div class="row text-center">
                  <div class="col-12 px-0">
                    <span class="balance_details text-nowrap">{{ formatAmount(item.balance_day)}}</span>
                  </div>
                  <small class="balance_month_small text-nowrap">diena</small>
                </div>
              </div>
            </div>
            <div class="col-4 px-0">
              <div class="container-fluid">
                <div class="row text-end">
                  <div class="col-12 px-0">
                    <span :class="balanceErrorClass">{{ formatAmount(item.balance_today)}}</span>
                  </div>
                  <small class="balance_month_small text-nowrap text-end px-0">šiandien</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "CategoryBalanceAnalyticsCard",
  props: {
    item: Object,
  },
  computed: {
    ...mapGetters([
      'isLoading',
      'loading',
      'formatAmount',
    ]),

    balanceErrorClass() {
      return ['balance_details', 'text-nowrap', 'overflow-hidden', parseFloat(this.item.balance_today) < 0 ? 'error' : null].join(' ')
    },
    activeCategories() {
      return this.$store.state.activeCategories
    }
  },
  methods: {
    ...mapActions([
      'setLoading',
      'unsetLoading',
      'setNotification',
    ]),

    isActiveCategories(key) {
      return this.activeCategories.includes(key)
    },
  }
}
</script>

<style scoped>
/*.custom_card {*/
/*  background-color:rgba(255, 255, 255, 0.9);*/
/*  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);*/
/*  border-radius: 8px;*/
/*}*/

.title {
  font-weight: 700;
  font-size: 13px;
  line-height: 16px;
  color: #8898AA;
}

.balance {
  height: 24px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;

  /* card/balance */
  color: #E4E4E4;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.balance_details {
  height: 17px;

  font-style: normal;
  /*font-weight: 400;*/
  font-size: 13px;
  line-height: 17px;

  text-align: center;

  /* card/details/amount */
  color: #D9D9D9;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);


  /*font-style: normal;*/
  /*font-weight: 400;*/
  /*font-size: 15px;*/
  /*line-height: 17px;*/
  /*text-align: center;*/
  /*color: #495057;*/
}

.icon {
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  font-size: 25px;
}
.icon:hover {
  color: #00BF93;
}

.icon-circle {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;

  background: rgba(255, 255, 255, 0.18);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.balance_month_small {
  height: 10px;

  font-style: italic;
  font-weight: 400;
  font-size: 6px;
  line-height: 10px;

  text-align: center;

  color: #D9D9D9;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

}
</style>