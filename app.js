Vue.use(Lightbox);

const app = new Vue({
  el: '#app',
  template: '<app-composition></app-composition>',
  components: {
    'app-composition': httpVueLoader('components/app-composition.vue')
  }
});
