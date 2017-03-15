import TwentyTwenty from './src/TwentyTwenty.vue'

function install(Vue) {
  Vue.component('twentytwenty', TwentyTwenty)
}

export default {
  install
}

if (typeof window !== 'undefined' && window.Vue) {
  Vue.use( {
    install
  })
}
