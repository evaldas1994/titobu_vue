<template>
<div>
  <div class="my-2">
    <div class="card custom_card">
      <div class="card-body overflow-hidden">

        <div class="container">
          <div class="row mb-2">
            <div class="col-8 px-0 mh-100 d-flex">
              <div class="container-fluid overflow-hidden px-0">
                <div class="row h-100 d-flex flex-column justify-content-center">
                  <div class="col-12">
                    <div class="mb-1 title text-uppercase">
                      <span class="text-nowrap">{{this.item.name}}</span>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="balance text-uppercase">
                      <span class="text-nowrap">{{this.item.balance}}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-4 mh-100 d-flex align-items-center justify-content-end px-0">
              <i @click="$router.push(`/transfer/create-by-category/${this.item.id}`)" class="bi bi-arrow-right-circle icon"></i>
            </div>
          </div>
          <div class="progress" :style="{height: 2 + 'px'}">
            <div class="progress-bar" role="progressbar" :style="{width: this.item.balance/this.item.balance_month * 100 + '%'}" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <div class="row mt-2">
            <div class="col-4 px-0">
              <div class="container-fluid overflow-hidden">
                <div class="row">
                  <div class="col-12 px-0">
                    <span class="balance_details text-nowrap">{{ this.item.balance_month}}</span>
                  </div>
                  <small class="balance_month_small text-nowrap px-0">Mėnuo</small>
                </div>
              </div>
            </div>
            <div class="col-4 px-sm-1">
              <div class="container-fluid">
                <div class="row  text-center">
                  <div class="col-12 px-sm-1">
                    <span class="balance_details text-nowrap">{{ this.item.balance_day}}</span>
                  </div>
                    <small class="balance_month_small text-nowrap">Diena</small>
                </div>
              </div>
            </div>
            <div class="col-4 px-0">
              <div class="container-fluid">
                <div class="row text-end">
                  <div class="col-12 px-0">
                    <span :class="balanceErrorClass">{{ this.item.balance_today}}</span>
                  </div>
                  <small class="balance_month_small text-nowrap text-end px-0">Šiandien</small>
                </div>
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
export default {
  name: "CategoryBalanceAnalyticsCard",
  props: {
    item: Object,
  },
  computed: {
    balanceErrorClass() {
      return ['balance_details', 'text-nowrap', 'overflow-hidden', parseFloat(this.item.balance_today) < 0 ? 'error' : null].join(' ')
    }
  },
}
</script>

<style scoped>
.custom_card {
  background: #FFFFFF;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
}

.title {
  font-weight: 700;
  font-size: 13px;
  line-height: 16px;
  color: #8898AA;
}

.balance {
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #474747;
}

.balance_details {
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 17px;
  text-align: center;
  color: #495057;
}

.icon {
  font-size: 40px;
  cursor: pointer;
  color: #00523F;
}
.icon:hover {
  color: #00BF93;
}

.balance_month_small {
  font-size: 10px;
}

.error {
  color: #b00000;
  border-color: #b00000;
}

</style>