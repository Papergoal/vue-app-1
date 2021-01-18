import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = true;

const app = new Vue({
    el: '#main',

    data: {
        //result: “ ”,
        responseAvailable: false,
        apiKey: '<YOUR_RAPIDAPI_KEY>'
    },
    methods: {
        fetchAPIData() {
        }
    }
})
