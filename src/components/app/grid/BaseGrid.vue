<template>
  <div class="my-2">
    <div class="card custom_card">
      <div class="card-body overflow-hidden">

        <div class="container-fluid overflow-hidden">
          <div class="row">
            <div class="table-responsive px-0">
              <table class="table table-sm">
                <thead>
                <tr>
                  <th scope="col" class="title text-uppercase color-text-title d-flex flex-nowrap">Veiksmai</th>
                  <th scope="col" class="title text-uppercase color-text-title" v-for="header in headers" :key="header">{{ header }}</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="item in items" :key="item.id" class="form-label">
                  <td>
                    <div class="d-flex flex-nowrap">
                      <slot name="edit" :item="item"></slot>
                      <slot name="delete" :item="item"></slot>
                    </div>
                  </td>
                  <td :class="['grid_details']" v-for="(column) in columns" :key="column"><p :class="[this.isFloat(item[column]) && column !== 'id' ? 'd-flex justify-content-end' : '']">{{ item[column] }}</p></td>
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
import {mapGetters} from "vuex";

export default {
  name: "BaseGrid.vue",

  props: {
    items: Object,
    headers: Array,
    columns: Array
  },
  computed: {
    ...mapGetters([
      'isFloat',
    ]),
  },
}
</script>

<style scoped>
.custom_card {
  background-color:rgba(255, 255, 255, 0.9);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0px;
  width: 100%;
}
.title {
  font-size: 13px;
  line-height: 16px;
}

.grid_details {
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 17px;
  color: #495057;
}

p {
  margin: 0;
}

.table-responsive {
  max-height: 200px;
}
</style>