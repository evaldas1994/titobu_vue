<template>
<div>
  <div class="my-2 me-3">
    <div class="card custom_card p-0">
      <div @click="iconActive = !iconActive" class="card-body overflow-hidden p-0 m-0 d-flex align-items-center justify-content-center icon">
        <font-awesome-icon v-if="!iconActive" :icon="item.icon" />
        <div v-else class="balance_details d-flex justify-content-around align-items-center flex-md-column icon">
          <div :class="item.account_balance < 0 ? 'title text-danger' : 'title'">{{ item.account_balance }}</div>
          <div :class="item.balance_month === item.balance ? 'title text-success' : 'title text-danger' ">{{ item.balance_month }}</div>
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
  data() {
    return {
      iconActive: true,
    }
  },
  computed: {
    balanceErrorClass() {
      return ['balance_details', 'text-nowrap', 'overflow-hidden', parseFloat(this.item.balance_today) < 0 ? 'error' : null].join(' ')
    },
  },
}
</script>

<style scoped>
.custom_card {
  background-color:rgba(255, 255, 255, 0.9);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 100px;
  width: 70px;
  height: 70px;
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
.icon-inactive {
  font-size: 40px;
  cursor: pointer;
  color: #d2d2d2;
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