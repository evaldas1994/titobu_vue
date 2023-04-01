<template>
  <div>
    <div>
      <div class="container">
        <!--        Top Title-->
        <div class="row mt-10px">
          <div class="top-text d-flex justify-content-center align-items-center color-text-title text-center">Laikotarpiai</div>
        </div>

        <!--        Cube-->
        <div class="row mt-10px">
          <div class="col-6">
            <base-cube
                :title1="thisPeriod"
                title2="9"
                bg="green"
                @click="model.name=thisPeriod; model.period=thisPeriod"
            />
          </div>
          <div class="col-6">
            <base-cube
                :title1="nextPeriod"
                title2="0"
                bg="red"
                @click="model.name=nextPeriod; model.period=nextPeriod"
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
            <base-input
                name="period"
                v-model="model.period"
                label="Laikotarpis"
                :model="model"
                :errors="errors"
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
                @click="isLoading(['save'])
                  ? unsetLoading(['save'])
                  : setLoading(['save'])"
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
                :headers="['Nr.', 'Pavadinimas', 'Laikotarpis']"
                :columns="['id', 'name', 'period']"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'

import BaseGrid from '@/components/app/grid/BaseGrid.vue';
import BaseCube from '@/components/app/cube/BaseCube.vue';
import BaseInput from '@/components/app/form/BaseInput.vue';
import BaseButton from '@/components/app/form/BaseButton.vue';
import axios from "axios";

export default {
  name: "PeriodPage",
  components: {
    BaseGrid,
    BaseCube,
    BaseInput,
    BaseButton,
  },
  data() {
    return {
      errors: {},
      model: {},
      gridData: [
        {
          id: 2,
          name: '2023-01',
          period: '2023-01'
        },
        {
          id: 1,
          name: '2023-01',
          period: '2023-01'
        },
      ],
    }
  },
  computed: {
    ...mapGetters([
      'isLoading',
      'loading',
      'thisPeriod',
      'nextPeriod',
    ]),
  },
  methods: {
    ...mapActions([
      'setLoading',
      'unsetLoading',
    ]),

    setAxiosParams() {
      axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('bearer_token')}`;
      axios.defaults.headers.common['Content-Type'] = 'application/json'
      axios.defaults.headers.common['Accept'] = 'application/json'
    },
    getCategoryByPeriod() {
      this.setLoading(['category-by-period'])

      axios
          .get(`${this.baseUrl}/api/analytics/category-by-period`)
          .then(response => {
            console.log(response.data.data)
            this.categoryByType = response.data.data
          })
          .finally(() => {
            this.unsetLoading(['category-by-period'])
          })
    },
  },
  created() {
    this.model.period = this.thisPeriod;
    this.model.name = this.thisPeriod;
  },
  mounted() {
    this.setAxiosParams();
    this.getCategoryByPeriod();
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