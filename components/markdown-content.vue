<template>
  <div>
    <network-error
      v-if="networkError"
      @dismissed="networkError = false"
    ></network-error>
    <loading-spinner v-if="loading"></loading-spinner>
    <div v-html="content"></div>
  </div>
</template>

<script>
module.exports = {
  name: 'markdown-content',
  components: {
    'network-error': httpVueLoader('components/network-error.vue'),
    'loading-spinner': httpVueLoader('components/loading-spinner.vue')
  },
  props: {
    file: {
      type: String,
      required: true
    }
  },
  data: function () {
    return {
      loading: true,
      networkError: false,
      content: ''
    };
  },
  methods: {
    getMarkdown: function () {
      this.loading = true;
      axios.get(this.file)
        .then((response) => {
          this.content = marked(response.data);
          this.networkError = false;
        })
        .catch((err) => {
          if (err) {
            this.networkError = true;
          }
        })
        .finally(() => {
          this.loading = false;
        });
    }
  },
  created: function () {
    this.getMarkdown();
  }
};
</script>
