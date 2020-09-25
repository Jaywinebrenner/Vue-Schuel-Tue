import Vue from 'vue'
import App from './App.vue'
import Tasks from './components/Tasks'
import NotFound from "./components/NotFound";

Vue.config.productionTip = false

const routes = {
  '/': App,
  '/tasks': Tasks,
  '/notfound': NotFound
};


new Vue({
  data: {
    currentRoute: window.location.pathname,
  },

  computed: {
    currentComponent() {
      return routes[this.currentRoute] || NotFound;
    }
  },

  render: function (h) {
    return h(this.currentComponent)
  },
}).$mount('#app')
