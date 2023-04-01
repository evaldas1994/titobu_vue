<template>
  <div>
    <div>
      <div class="container">
        <!--        Top Title-->
        <div class="row mt-10px">
          <div class="top-text d-flex justify-content-center align-items-center color-text-title text-center">Kategorijos</div>
        </div>

        <!--        Cube-->
        <div class="row mt-10px">
          <div v-for="category in categoryByType" :key="category.id" class="col-6">
            <base-cube
                :title1="category.name"
                :title2="category.count"
                :bg="category.color"
                @click="model.type=category.id"
            />
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
                name="name"
                v-model="model.name"
                label="Pavadinimas"
                :model="model"
                :errors="errors"
            />
          </div>
          <div class="col-6">
            <base-select
                name="type"
                v-model="model.type"
                label="Tipas"
                :options="types"
                :errors="errors"
                :model="model"
                value="value"
            />
          </div>
        </div>
        <div class="row mt-10px">
          <div class="col-3">
            <label class="form-label">Rezultatas:</label>
            <div class="container card-32-no-shadow ">
              <div class="row icon-32 text-center">
                <base-icon
                  :icon="model.icon"
                  :color-name="model.color"
                />
              </div>
            </div>
          </div>
          <div class="col-9">
            <div class="container">
              <div class="row">
                <div class="col-6 ps-0">
                  <label class="form-label">Paveikslėlis:</label>
                  <div
                      class="card-32 color-text-card-balance d-flex align-items-center overflow-scroll hide-scrollbar-1 hide-scrollbar-2 bg-body">
                    <div
                        v-for="(icon, index) in icons"
                        :key="index"
                    >
                      <base-icon
                          :icon="icon"
                          color-name="black"
                          class="px-2"
                          @click="model.icon = icon"
                      />
                    </div>
                  </div>
                  <small v-if="errors['icon']" class="font-italic error">Blogai įvestas laukas!</small>
                </div>
                <div class="col-6 pe-0">
                  <label class="form-label">Spalva:</label>
                  <div class="card-32 d-flex align-items-center overflow-scroll hide-scrollbar-1 hide-scrollbar-2  bg-body">
                    <div v-for="(color, index) in colors" :key="index">
                      <base-icon
                          icon="fa-solid fa-circle"
                          :color-name="color"
                          class="px-2"
                          @click="model.color = color"
                      />
                    </div>
                  </div>
                  <small v-if="errors['color']" class="font-italic error">Blogai įvestas laukas!</small>
                </div>
              </div>
            </div>
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
                :headers="['Nr.', 'Pavadinimas', 'Tipas', 'Paveikslėlis', 'Spalva']"
                :columns="['id', 'name', 'type_name', 'icon', 'color_name']"
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
        <div class="row mt-30px">
          <div class="col-6">
            <base-input
                name="name"
                v-model="modelEdit.name"
                label="Pavadinimas"
                :model="modelEdit"
                :errors="errors"
            />
          </div>
          <div class="col-6">
            <base-select
                name="type"
                v-model="modelEdit.type"
                label="Tipas"
                :options="types"
                :errors="errors"
                :model="modelEdit"
                value="value"
            />
          </div>
        </div>
        <div class="row mt-10px">
          <div class="col-3">
            <label class="form-label">Rezultatas:</label>
            <div class="container card-32-no-shadow ">
              <div class="row icon-32 text-center">
                <base-icon
                    :icon="modelEdit.icon"
                    :color-name="modelEdit.color"
                />
              </div>
            </div>
          </div>
          <div class="col-9">
            <div class="container">
              <div class="row">
                <div class="col-6 ps-0">
                  <label class="form-label">Paveikslėlis:</label>
                  <div
                      class="card-32 color-text-card-balance d-flex align-items-center overflow-scroll hide-scrollbar-1 hide-scrollbar-2 bg-body">
                    <div
                        v-for="(icon, index) in icons"
                        :key="index"
                    >
                      <base-icon
                          :icon="icon"
                          color-name="black"
                          class="px-2"
                          @click="modelEdit.icon = icon"
                      />
                    </div>
                  </div>
                  <small v-if="errors['icon']" class="font-italic error">Blogai įvestas laukas!</small>
                </div>
                <div class="col-6 pe-0">
                  <label class="form-label">Spalva:</label>
                  <div class="card-32 d-flex align-items-center overflow-scroll hide-scrollbar-1 hide-scrollbar-2  bg-body">
                    <div v-for="(color, index) in colors" :key="index">
                      <base-icon
                          icon="fa-solid fa-circle"
                          :color-name="color"
                          class="px-2"
                          @click="modelEdit.color = color"
                      />
                    </div>
                  </div>
                  <small v-if="errors['color']" class="font-italic error">Blogai įvestas laukas!</small>
                </div>
              </div>
            </div>
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
            :headers="['Nr.', 'Pavadinimas', 'Tipas', 'Paveikslėlis', 'Spalva']"
            :columns="['id', 'name', 'type_name', 'icon', 'color_name']"
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
  name: "CategoryPage",
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
      model: {
        'type': 'expenses',
        'icon': 'expenses',
      },
      categoryByType: [],
      icons: [
        'fa-solid fa-utensils',
        'fa-solid fa-heart-pulse',
        'fa-solid fa-shirt',
        'fa-solid fa-car',
        'fa-solid fa-gift',
        'fa-solid fa-receipt',
        'fa-solid fa-masks-theater',

        'fa-solid fa-laptop-code',
        'fa-solid fa-microchip',
        'fa-solid fa-coins',
      ],
      colors: [
        'blue',
        'red',
        'green',
        'yellow',
        'blue-light',
        'purple',
        'black',

        'orange',
        'yellow-light',
        'green-light',
      ],
      gridData: [],
      types: [
        {
          name: 'Išlaidos',
          value: 'expenses',
        },
        {
          name: 'Pajamos',
          value: 'incomes',
        },
      ],
    }
  },
  computed: {
    ...mapGetters([
      'isLoading',
      'loading',
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
          .post(`${this.baseUrl}/api/categories`, this.model)
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
            this.getCategoryByType();
            this.unsetLoading(['save'])
            this.getGridData();
          })
    },
    update() {
      this.setLoading(['update'])
      this.resetErrors();

      axios
          .put(`${this.baseUrl}/api/categories/${this.focus}`, this.modelEdit)
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
            this.getCategoryByType();
            this.unsetLoading(['update'])
            this.getGridData();
          })
    },
    getCategoryByType() {
      this.setLoading(['category-by-type', 'save'])

      axios
          .get(`${this.baseUrl}/api/analytics/category-by-type`)
          .then(response => {
            this.categoryByType = response.data.data
          })
          .finally(() => {
            this.unsetLoading(['category-by-type', 'save'])
          })
    },
    getGridData() {
      this.setLoading(['category-by-type'])

      axios
          .get(`${this.baseUrl}/api/categories`)
          .then(response => {
            this.gridData = response.data.data
          })
          .finally(() => {
            this.unsetLoading(['category-by-type'])
          })
    },
    deleteItem() {
      this.setLoading(['delete-item'])
      this.resetErrors();

      axios
          .delete(`${this.baseUrl}/api/categories/${ this.focus }`)
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
      this.model.name = '';
      this.model.type = this.types[0].value;
      this.model.icon = this.icons[0];
      this.model.color = this.colors[0];
    },
    resetErrors() {
      this.errors = {};
    },
  },
  mounted() {
    this.setAxiosParams();
    this.getCategoryByType();
    this.getGridData();
    this.setModelDefaults();
  }
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