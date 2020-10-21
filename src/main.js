import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

const config = {
  apiKey: "AIzaSyDceVoym5XlLnRpioOZBvwnXfpq6j3KeSg",
  authDomain: "vue-firebase-9a74d.firebaseapp.com",
  databaseURL: "https://vue-firebase-9a74d.firebaseio.com",
  projectId: "vue-firebase-9a74d",
  storageBucket: "vue-firebase-9a74d.appspot.com",
  messagingSenderId: "189527776412",
  appId: "1:189527776412:web:08a62fbf4d5ebc957ae159"
};

firebase.initializeApp(config);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
