<template>
  <div>
    <bs-header></bs-header>
    <div class="container">
      <network-error
        v-if="networkError"
        @dismissed="networkError = false"
      ></network-error>
      <loading-spinner v-if="loading"></loading-spinner>

      <image-gallery :all-files="allFiles"></image-gallery>
      <hr id="about" />
      <about-cole></about-cole>
      <hr id="contact" />
      <contact-info></contact-info>
    </div>
  </div>
</template>

<script>
module.exports = {
  name: 'app-composition',
  components: {
    'network-error': httpVueLoader('components/network-error.vue'),
    'loading-spinner': httpVueLoader('components/loading-spinner.vue'),
    'about-cole': httpVueLoader('components/about-cole.vue'),
    'bs-header': httpVueLoader('components/bs-header.vue'),
    'contact-info': httpVueLoader('components/contact-info.vue'),
    'image-gallery': httpVueLoader('components/image-gallery.vue')
  },
  data: function () {
    return {
      loading: true,
      networkError: false,
      allFiles: []
    };
  },
  methods: {
    getGitTree: function () {
      this.loading = true;
      axios.get('https://api.github.com/repos/TheJaredWilcurt/cole-cat/git/trees/master?recursive=1')
        .then((response) => {
          this.allFiles = response.data.tree;
          this.networkError = false;
          this.loading = false;
        })
        .catch((err) => {
          if (err) {
            this.networkError = true;
          }
          this.loading = false;
        });
    }
  },
  created: function () {
    if (!this.allFiles.length) {
      this.getGitTree();
    }
  }
};
</script>

<style scoped>
hr {
  margin-top: 100px;
  margin-bottom: 100px;
}
</style>
