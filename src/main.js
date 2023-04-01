import "bootstrap/dist/css/bootstrap.css"
import moment from 'moment'
import numeral from 'numeral'

import { createApp } from 'vue'
import { createStore } from 'vuex'

const store = createStore({
    state () {
        return {
            notification: null,
            count: 0,
            loading: [],
            activeCategories: [],
        }
    },
    mutations: {
        setNotification (state, notification) {
            state.notification = notification
        },
        resetNotification (state) {
            state.notification = null
        },

        setLoading (state, loading) {
            let localLoading = state.loading
            loading.forEach((item) => {
                localLoading.push(item)
            })
            state.loading = [...new Set(localLoading)]
        },
        unsetLoading (state, loading) {
            let localLoading = state.loading
            loading.forEach((item) => {
                let index = localLoading.indexOf(item);
                if (index !== -1) {
                    localLoading.splice(index, 1);
                }
            })
            state.loading = [...new Set(localLoading)]
        },

        setActiveCategories (state, categories) {

            let localActiveCategories = state.activeCategories
            categories.forEach((item) => {
                localActiveCategories.push(item)
            })
            state.activeCategories = [...new Set(localActiveCategories)]
        },
        unsetActiveCategories (state, categories) {
            let localActiveCategories = state.activeCategories
            categories.forEach((item) => {
                let index = localActiveCategories.indexOf(item);
                if (index !== -1) {
                    localActiveCategories.splice(index, 1);
                }
            })
            state.activeCategories = [...new Set(localActiveCategories)]
        }
    },
    actions: {
        setNotification ({ commit }, notification) {
            commit('setNotification', notification)
        },
        resetNotification ({ commit }) {
            commit('resetNotification')
        },
        setLoading ({ commit }, loading) {
            commit('setLoading', loading)
        },
        unsetLoading ({ commit }, loading) {
            commit('unsetLoading', loading)
        },
    },

    getters: {
        notification(state) {
            return state.notification;
        },

        isLoading: (state) => (valuesArray) => {
            return state.loading.some(val => valuesArray.includes(val));
        },
        loading (state) {
            return state.loading;
        },
        thisPeriod () {
            return moment().format('YYYY-MM');
        },
        nextPeriod () {
            return moment().add(1, 'months').format('YYYY-MM');
        },

        formatAmount: () => (amount) => {
            return numeral(amount).format('0,0.00').replace(",", " ");
        },
        isFloat: () => (amount) => {
            let pattern = /^-?\d+(\.\d+)?$/;
            return pattern.test(amount);
        }
    }
})

import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './components/App.vue'

import router from "./router";

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
    faUserSecret,
    faReceipt,
    faLandmarkFlag,
    faBaby,
    faBuilding,
    faCar,
    faUtensils,
    faHeartPulse,
    faShirt,
    faGift,
    faSignal,
    faPiggyBank,
    faBook,
} from '@fortawesome/free-solid-svg-icons'

library.add(
    faUserSecret,
    faReceipt,
    faLandmarkFlag,
    faBaby,
    faBuilding,
    faCar,
    faUtensils,
    faHeartPulse,
    faShirt,
    faGift,
    faSignal,
    faPiggyBank,
    faBook,
)

let app = createApp(App);

// app.config.globalProperties.baseUrl = 'http://titobu.test'
app.config.globalProperties.baseUrl = 'http://back.titobu.eu'
app
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(VueAxios, axios)
    .use(router)
    .use(store)
    .mount('#app')

