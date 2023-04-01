<template>
  <div>
    <div>
      <div class="container">
        <!--        Top Title-->
        <div class="row mt-10px">
          <div class="top-text d-flex justify-content-center align-items-center color-text-title text-center">Kategorijų limitai pagal laikotarpius</div>
        </div>

        <!--        Cube-->
        <div class="row mt-10px">
          <div v-for="(item) in periodByCategory"
               :key="item.id"
               class="col-6"
          >
            <base-cube
                :title1="item.period"
                :title2="`${formatAmount(item.balance)} (${item.count})`"
                bg="red"
                @click="model.period_id=item.id"
            />
          </div>
        </div>
        <div class="row mt-20px">
          <div
              v-for="(item, index) in categoriesIn"
              :key="index"
              class="col-4 mt-10px">
            <base-cube
                :title1="item.name.toUpperCase()"
                :title2="formatAmount(item.pivot.limit)"
                bg="green"
                @click="model.limit=formatAmount(item.pivot.limit)"
            />
          </div>
          <div class="row flex-nowrap overflow-scroll" v-if="categoriesInWithoutBalance.length > 0">
            <div
                v-for="(item, index) in categoriesInWithoutBalance"
                :key="index"
                class="w-auto pe-1 rounded">
              <base-cube
                  :title1="item.name.toUpperCase()"
                  bg="black"
                  class="px-2"
                  @click="model.category_id=item.id;"
              />
            </div>
          </div>
        </div>
        <div class="row mt-20px">
          <div
              v-for="(item, index) in categoriesOut"
              :key="index"
              class="col-4 mt-10px">
            <base-cube
                :title1="item.name.toUpperCase()"
                :title2="formatAmount(item.pivot.limit)"
                bg="red"
                @click="model.limit=formatAmount(item.pivot.limit)"
            />
          </div>
          <div class="row flex-nowrap overflow-scroll" v-if="categoriesOutWithoutBalance.length > 0">
            <div
                v-for="(item, index) in categoriesOutWithoutBalance"
                :key="index"
                class="w-auto pe-1 rounded">
              <base-cube
                  :title1="item.name.toUpperCase()"
                  bg="black"
                  class="px-2"
                  @click="model.category_id=item.id;"
              />
            </div>
          </div>
        </div>

        <!--        Divider-->
        <div class="row mt-30px">
          <div class="col-12">
            <div class="divider"/>
          </div>
        </div>

        <!--        Form-->
        <div class="row mt-30px">
          <div class="col-6">
            <base-input
                name="limit"
                v-model="model.limit"
                label="Limitas"
                :model="model"
                :errors="errors"
            />
          </div>
          <div class="col-6">
            <base-select
                name="period_id"
                v-model="model.period_id"
                label="Laikotarpis"
                text="period"
                :options="periodByCategory"
                :errors="errors"
                :model="model"
            />
          </div>
        </div>
        <div class="row mt-10px">
          <div class="col-6">
          </div>
          <div class="col-6">
            <base-select
                name="category_id"
                v-model="model.category_id"
                label="Kategorija"
                :options="categoriesWithoutBalance"
                :errors="errors"
                :model="model"
            />
          </div>
        </div>
        <div class="row mt-10px">
          <div class="col-6">
          </div>
          <div class="col-6">
            <base-button
                name="save"
                label="Saugoti"
                color-name="green"
                @click="save()"
            />
          </div>
        </div>

        <!--        Divider-->
        <div class="row mt-30px">
          <div class="col-12">
            <div class="divider"></div>
          </div>
        </div>

        <!--        Grid-->
        <div class="row mt-30px">
          <div class="col-12">
            <base-grid
                :items="gridData"
                :headers="['Nr.', 'Laikotarpis', 'Kategorija', 'Limitas']"
                :columns="['id', 'period_period', 'category_name', 'limit']"
            >
              <template #edit="{ item }">
                <base-icon
                    icon="fa-regular fa-pen-to-square"
                    color-name="blue"
                    class="pe-2"
                    @click="focus=item.id"
                    data-bs-toggle="modal" data-bs-target="#edit"
                />
              </template>
              <template #delete="{ item }">
                <base-icon
                    icon="fa-solid fa-trash-can"
                    color-name="blue"
                    class="pe-2"
                    @click="focus=item.id"
                    data-bs-toggle="modal" data-bs-target="#delete"
                />
              </template>
            </base-grid>
          </div>
        </div>
      </div>
    </div>

    <!--    modals-->
    <base-modal
        id="edit"
        title="Redaguoti"
    >
      <template #content v-if="modelEdit">
        <!--        Form-->
        <div class="row">
          <div class="col-6">
            <base-input
                name="limit"
                v-model="modelEdit.limit"
                label="Limitas"
                :model="modelEdit"
                :errors="errors"
            />
          </div>
        </div>
      </template>

      <template #close>
        <base-button
            data-bs-dismiss="modal"
            name="save"
            label="Grįžti"
            color-name="blue"
        />
      </template>
      <template #submit>
        <base-button
            data-bs-dismiss="modal"
            name="save"
            label="Saugoti"
            color-name="red"
            @click="update()"
        />
      </template>
    </base-modal>
    <base-modal
        id="delete"
        title="Ar tikrai norite ištrinti?"
    >
      <template #content>
        <base-grid
            v-if="modelEdit"
            :items="[modelEdit]"
            :headers="['Nr.', 'Laikotarpis', 'Kategorija', 'Limitas']"
            :columns="['id', 'period_period', 'category_name', 'limit']"
        />
      </template>

      <template #close>
        <base-button
            data-bs-dismiss="modal"
            name="save"
            label="Ne"
            color-name="blue"
        />
      </template>
      <template #submit>
        <base-button
            data-bs-dismiss="modal"
            name="save"
            label="Taip"
            color-name="red"
            @click="deleteItem()"
        />
      </template>
    </base-modal>
  </div>
</template>

<script>
import axios from "axios";

import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'

import BaseGrid from '@/components/app/grid/BaseGrid.vue';
import BaseCube from '@/components/app/cube/BaseCube.vue';
import BaseInput from '@/components/app/form/BaseInput.vue';
import BaseSelect from '@/components/app/form/BaseSelect.vue';
import BaseButton from '@/components/app/form/BaseButton.vue';
import BaseIcon from '@/components/app/icon/BaseIcon.vue';
import BaseModal from '@/components/app/modal/BaseModal.vue';


export default {
  name: "PeriodCategoryPage",
  components: {
    BaseGrid,
    BaseCube,
    BaseInput,
    BaseSelect,
    BaseButton,
    BaseIcon,
    BaseModal,
  },
  data() {
    return {
      action: null,
      focus: null,

      errors: {},
      model: {},
      gridData: [
        {
          id: 2,
          name: '2023-01',
          period: '2023-01',
          category: 'Maistas',
          limit: '120.00',
        },
        {
          id: 1,
          name: '2023-01',
          period: '2023-01',
          category: 'Mokesčiai',
          limit: '510.00',
        },
      ],
      periodByCategory: [],
    }
  },
  computed: {
    ...mapGetters([
      'isLoading',
      'loading',
      'thisPeriod',
      'nextPeriod',
      'formatAmount',
    ]),

    categoriesIn() {
      const found = this.periodByCategory.find(element => element.id === this.model.period_id);

      return found ? found.categories_in : [];
    },

    categoriesOut() {
        const found = this.periodByCategory.find(element => element.id === this.model.period_id);

        return found ? found.categories_out : [];
    },
    categoriesWithoutBalance() {

      let result = [];

      result = result.concat(...this.categoriesInWithoutBalance);
      result = result.concat(...this.categoriesOutWithoutBalance);

      return result;
    },

    categoriesInWithoutBalance() {
      const found = this.periodByCategory.find(element => element.id === this.model.period_id);

      return found ? found.categories_in_without_balance : [];
    },

    categoriesOutWithoutBalance() {
      const found = this.periodByCategory.find(element => element.id === this.model.period_id);

      return found ? found.categories_out_without_balance : [];
    },

    modelEdit() {
      if (this.focus) {
        let focus = this.focus;
        return this.gridData.find(function( obj ) {
          return obj.id === focus;
        });
      }

      return null;
    },
  },
  methods: {
    ...mapActions([
      'setLoading',
      'unsetLoading',
      'setNotification',
    ]),

    setAxiosParams() {
      axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('bearer_token')}`;
      axios.defaults.headers.common['Content-Type'] = 'application/json'
      axios.defaults.headers.common['Accept'] = 'application/json'
    },
    save() {
      this.setLoading(['save'])
      this.resetErrors();

      axios
          .post(`${this.baseUrl}/api/period-categories`, this.model)
          .then(response => {
            this.data = response.data

            this.setModelDefaults();
            this.setNotification({
              'type':'success',
              'message':'Sukurta sėkmingai'
            })
          })
          .catch(error => {
            this.errors = error.response.data.errors;

            this.setNotification({
              'type':'error',
              'message':'Nesukurta'
            })
          })
          .finally(() => {
            this.getPeriodByCategory();
            this.unsetLoading(['save'])
            this.getGridData();
          })
    },
    update() {
      this.setLoading(['update'])
      this.resetErrors();

      axios
          .put(`${this.baseUrl}/api/period-categories/${this.focus}`, this.modelEdit)
          .then(response => {
            this.data = response.data;

            this.getGridData();
            this.setNotification({
              'type':'success',
              'message':'Atnaujinta sėkmingai'
            })
          })
          .catch(error => {
            this.errors = error.response.data.errors;

            this.setNotification({
              'type':'error',
              'message':'Neatnaujinta'
            })
          })
          .finally(() => {
            this.getCategoryByType();
            this.unsetLoading(['update'])
            this.getGridData();
          })
    },
    getPeriodByCategory() {
      this.setLoading(['period-by-category', 'save'])

      axios
          .get(`${this.baseUrl}/api/analytics/period-by-category`)
          .then(response => {
            this.periodByCategory = response.data.data
            this.model.period_id = response.data.data[0]?.id;
            this.model.category_id = response.data.data[0].categories_out_without_balance[0]?.id;
          })
          .finally(() => {
            this.unsetLoading(['period-by-category', 'save'])
          })
    },
    getGridData() {
      this.setLoading(['period-by-category-grid'])

      axios
          .get(`${this.baseUrl}/api/period-categories`)
          .then(response => {
            console.log(response.data.data)
            this.gridData = response.data.data
          })
          .finally(() => {
            this.unsetLoading(['period-by-category-grid'])
          })
    },
    deleteItem() {
      this.setLoading(['delete-item'])
      this.resetErrors();

      axios
          .delete(`${this.baseUrl}/api/period-categories/${ this.focus }`)
          .then(() => {
            this.removeItem(this.focus);
            this.getPeriodByCategory();
            this.setNotification({
              'type':'success',
              'message':'Ištrinta sėkmingai'
            })
          })
          .catch(error => {
            this.errors = error.response.data.errors;

            this.setNotification({
              'type':'error',
              'message':'Neištrinta'
            })
          })
          .finally(() => {
            this.focus = null;
            this.unsetLoading(['delete-item'])
          })
    },
    removeItem(id) {
      this.gridData = this.gridData.filter(function( obj ) {
        return obj.id !== id;
      });
    },
    setModelDefaults() {
      this.model.limit = null;
    },
    resetErrors() {
      this.errors = {};
    },
  },
  mounted() {
    this.setAxiosParams();
    this.getPeriodByCategory();
    this.getGridData();
    this.setModelDefaults();
  },
}
</script>

<style>
.custom {
  width: 100%;
  height: 100%;


  background: linear-gradient(180deg, #0047FF 0%, #000000 100%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}


.gradient-icon {
  /*background: #fff;*/
  background: rgb(119, 79, 79, 1);
  color: rgba(255, 0, 0, 1);
}


.top-card-title {
  width: 100%;
  height: 21px;

  font-style: normal;
  font-size: 13px;
  line-height: 16px;
}

.top-card-description {
  width: 100%;
  height: 21px;

  font-style: normal;
  font-size: 15px;
  line-height: 18px;
}

.fa-gradient {
  background: -webkit-gradient(linear, left top, left bottom, from(#f00), to(#333));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>