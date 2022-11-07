<template>
  <div class="my-2">
    <div class="card custom_card">
      <div class="card-body overflow-hidden">

        <div class="container-fluid overflow-hidden">
          <div class="row">
            <div class="table-responsive">
              <table class="table table-sm">
                <thead>
                <tr>
                  <th scope="col" class="title text-uppercase" v-for="header in headers" :key="header">{{ header }}</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="item in items" :key="item.id">
                  <td class="grid_details" v-for="column in columns" :key="column">{{ item[column] }}</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "BaseGrid.vue",
  props: {
    items: Object,
    headers: Array,
    columns: Array
  }
}
</script>

<style scoped>
.custom_card {
  /*background: #25680F;*/
  color: #CCCCCC;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
}
.title {
  font-weight: 700;
  font-size: 13px;
  line-height: 16px;
  color: #8898AA;
}

.grid_details {
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 17px;
  color: #495057;
}
</style>