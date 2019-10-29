import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ECharts from 'vue-echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/tooltip'

Vue.config.productionTip = false

Vue.component('vue-echarts', ECharts)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
