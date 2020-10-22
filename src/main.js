import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueGoogleCharts  from 'vue-google-charts'
import firebase from 'firebase'

Vue.use(VueGoogleCharts);
Vue.config.productionTip = false;

let app = '';

firebase.auth().onAuthStateChanged(() =>{
  if(!app){
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app');
  }
});

