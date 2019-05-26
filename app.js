Vue.use(Lightbox);

const app = new Vue({
  el: '#app',
  components: {
    'bs-header': httpVueLoader('components/bs-header.vue'),
    'image-gallery': httpVueLoader('components/image-gallery.vue'),
    'contact-info': httpVueLoader('components/contact-info.vue')
  }
});
