<template>
  <div>
    <h1 class="mt-5 mb-5">About Cole Catherine</h1>

    <div class="row">

      <div class="d-block d-md-none col-12 text-center mb-3">
        <img
          :src="photo"
          :alt="caption"
          class="img-fluid"
        />
      </div>

      <div class="col-12 col-md-6">
        <div class="mb-3">
          <markdown-content file="content/about.md"></markdown-content>
        </div>
      </div>

      <div class="d-none d-md-block col-md-6 text-right">
        <img
          :src="photo"
          :alt="caption"
          class="img-fluid"
        />
      </div>

    </div>

  </div>
</template>

<script>
module.exports = {
  name: 'about-cole',
  components: {
    'markdown-content': httpVueLoader('components/markdown-content.vue')
  },
  data: function () {
    return {
      photo: 'cole.jpg',
      caption: 'Cole Catherine'
    };
  }
};
</script>
