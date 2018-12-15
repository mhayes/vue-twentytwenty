import TwentyTwenty from './src/TwentyTwenty.vue'

function install(Vue) {
  Vue.component('vue-twentytwenty', TwentyTwenty)
  window.TwentyTwenty = TwentyTwenty
}

export {
  TwentyTwenty
}

// Plugin
const plugin = {
  install
};

export default plugin;

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}
