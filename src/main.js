import "bootstrap/dist/css/bootstrap.css"
import { createApp } from 'vue'
import { createStore } from 'vuex'

const store = createStore({
    state () {
        return {
            count: 0,
            loading: [],
            activeCategories: [],
        }
    },
    mutations: {
        increment (state) {
            state.count++
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
)

let app = createApp(App);

// app.config.globalProperties.baseUrl = 'http://back-titobu.test'
app.config.globalProperties.baseUrl = 'http://back.titobu.eu'
app
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(VueAxios, axios)
    .use(router)
    .use(store)
    .mount('#app')

