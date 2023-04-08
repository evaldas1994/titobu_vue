<template>
  <div>
    <div>
      <div class="container-fluid px-3">
        <!--        Top Title-->
        <div class="row px-2 mt-10px">
          <div class="top-text d-flex justify-content-center align-items-center color-red-icon text-center"><span>{{ formatAmount(total) }}</span></div>
        </div>

        <!--        Cube-->
        <div class="row px-2" v-if="!$route.params.category_id">
          <div v-for="(item, index) in expenseByCategory"
               :key="index"
               class="col-4 px-1 mt-10px"
          >
            <base-cube
                :title1="item.name.toUpperCase()"
                :title2="formatAmount(item.amount)"
                :bg="item.color"
                @click="model.category_id=item.id"
            />
          </div>
        </div>

        <!--        Divider-->
        <div class="row px-2 mt-30px">
          <div class="col-12 px-1">
            <div class="divider"/>
          </div>
        </div>

        <!--        Form-->
        <div class="row px-2 mt-30px">
          <div class="col-6 px-1">
            <base-input
                name="amount"
                v-model="model.amount"
                label="Suma"
                :model="model"
                :errors="errors"
            />
          </div>
          <div class="col-6 px-1">
            <base-select
                v-if="!$route.params.category_id"
                name="category_id"
                v-model="model.category_id"
                label="Kategorija"
                :options="expenseByCategory"
                :errors="errors"
                :model="model"
            />
          </div>
        </div>
        <div class="row px-2 mt-10px">
          <div class="col-12 px-1">
            <base-input
                name="name"
                v-model="model.name"
                label="Komentaras"
                :model="model"
                :errors="errors"
            />
          </div>
        </div>
        <div class="row px-2 mt-10px">
          <div class="col-6 px-1">
          </div>
          <div class="col-6 px-1">
            <base-button
                name="save"
                label="Saugoti"
                color="green"
                @click="save()"
            />
          </div>
        </div>

        <!--        Divider-->
        <div class="row px-2 mt-30px">
          <div class="col-12 px-1">
            <div class="divider"></div>
          </div>
        </div>

        <!--        Grid-->
        <div class="row px-2 mt-30px">
          <div class="col-12 px-1">
            <base-grid
                :items="gridData"
                :headers="['Nr.', 'Šaltinis', 'Komentaras', 'Suma']"
                :columns="['id', 'category_name', 'name', 'amount']"
            >
              <template #edit="{ item }">
                <base-icon
                    icon="fa-regular fa-pen-to-square"
                    color="blue"
                    class="pe-2"
                    @click="focus=item.id"
                    data-bs-toggle="modal" data-bs-target="#edit"
                />
              </template>
              <template #delete="{ item }">
                <base-icon
                    icon="fa-solid fa-trash-can"
                    color="blue"
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
        <div class="row px-2 mt-30px">
          <div class="col-6 px-1">
            <base-input
                name="amount"
                v-model="modelEdit.amount"
                label="Suma"
                :model="modelEdit"
                :errors="errors"
            />
          </div>
          <div class="col-6 px-1">
            <base-select
                name="category_id"
                v-model="modelEdit.category_id"
                label="Šaltinis"
                :options="expenseByCategory"
                :errors="errors"
                :model="modelEdit"
            />
          </div>
        </div>
        <div class="row px-2 mt-10px">
          <div class="col-12 px-1">
            <base-input
                name="name"
                v-model="modelEdit.name"
                label="Komentaras"
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
            color="blue"
        />
      </template>
      <template #submit>
        <base-button
            data-bs-dismiss="modal"
            name="save"
            label="Saugoti"
            color="red"
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
            :headers="['Nr.', 'Šaltinis', 'Komentaras', 'Suma']"
            :columns="['id', 'category_name', 'name', 'amount']"
        />
      </template>

      <template #close>
        <base-button
            data-bs-dismiss="modal"
            name="save"
            label="Ne"
            color="blue"
        />
      </template>
      <template #submit>
        <base-button
            data-bs-dismiss="modal"
            name="save"
            label="Taip"
            color="red"
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
  name: "ExpensesPage",
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
      gridData: [],
      total: 0,
      expenseByCategory: [],
    }
  },
  computed: {
    ...mapGetters([
      'isLoading',
      'loading',
      'formatAmount',
    ]),

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
          .post(`${this.baseUrl}/api/transfers`, this.model)
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
            this.getExpenseByCategory();
            this.unsetLoading(['save'])
            this.getGridData();
          })
    },
    update() {
      this.setLoading(['update'])
      this.resetErrors();

      axios
          .put(`${this.baseUrl}/api/transfers/${this.focus}`, this.modelEdit)
          .then(response => {
            this.data = response.data;

            this.setModelDefaults();
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
            this.getExpenseByCategory();
            this.unsetLoading(['update'])
            this.getGridData();
          })
    },
    getExpenseByCategory() {
      this.setLoading(['expense-by-category', 'save'])

      axios
          .get(`${this.baseUrl}/api/analytics/expense-by-category`)
          .then(response => {
            this.total = response.data.total
            this.expenseByCategory = response.data.data
            this.model.category_id = this.$route.params.category_id
              ? this.$route.params.category_id
              : response.data.data[0]?.id;
          })
          .finally(() => {
            this.unsetLoading(['expense-by-category', 'save'])
          })
    },
    getGridData() {
      this.setLoading(['expense-by-category-grid'])

      const url = this.$route.params.category_id
        ? `${this.baseUrl}/api/transfers/by-category/${this.$route.params.category_id}`
        : `${this.baseUrl}/api/transfers`;

      axios
          .get(url)
          .then(response => {
            this.gridData = response.data.data
          })
          .finally(() => {
            this.unsetLoading(['expense-by-category-grid'])
          })
    },
    deleteItem() {
      this.setLoading(['delete-item'])
      this.resetErrors();

      axios
          .delete(`${this.baseUrl}/api/transfers/${ this.focus }`)
          .then(() => {
            this.removeItem(this.focus);

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
      this.model.amount = null;
      this.model.name = null;

      if (this.$route.params.category_id)
        this.model.category_id = this.$route.params.category_id;
    },
    resetErrors() {
      this.errors = {};
    },
  },
  mounted() {
    this.setAxiosParams();
    this.getExpenseByCategory();
    this.getGridData();
    this.setModelDefaults();
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