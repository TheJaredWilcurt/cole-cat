<template>
  <div>
    <h1 class="mb-5">Art Gallery</h1>

    <div class="d-flex flex-column justify-content-center align-items-center flex-sm-row justify-content-sm-between flex-wrap">
      <img
        v-for="(image, imageIndex) in images"
        :key="'image' + imageIndex"
        :src="image.name"
        :alt="image.alt"
        class="img-fluid img-thumbnail mb-3"
        @click="showLightbox(image.name)"
      />
    </div>

    <lightbox :images="images" ref="lightbox"></lightbox>
  </div>
</template>

<script>
module.exports = {
  name: 'image-gallery',
  props: {
    loadData: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  data: function () {
    return {
      loading: true,
      networkError: false,
      allFiles: []
    };
  },
  methods: {
    showLightbox: function (imageName) {
      this.$refs.lightbox.show(imageName);
    },
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
  computed: {
    // Use generated dummy data when not hitting GitHub API
    fakeImages: function () {
      let images = [];
      for (let i = 0; i < 20; i++) {
        images.push({
          name: 'gallery/heart.png',
          alt: 'heart',
          filter: 'all',
          id: 'heart'
        });
      }
      return images;
    },
    imageFiles: function () {
      return this.allFiles.filter(function (file) {
        return file.path.startsWith('gallery/');
      });
    },
    images: function () {
      if (!this.loadData) {
        return this.fakeImages;
      }

      let images = [];

      this.imageFiles.forEach(function (file) {
        // /gallery/Mr.Cool.jpg
        let src = file.path;
        // Mr.Cool.jpg
        let filename = src.split('/')[src.split('/').length - 1];
        // Mr.Cool
        let alt = filename.split('.').slice(0, -1).join('.');

        images.push({
          src: src,
          alt: alt,
          filter: 'all',
          id: alt
        });
      });

      return images;
    }
  },
  created: function () {
    if (this.loadData) {
      this.getGitTree();
    }
  }
};
</script>

<style scoped>
.img-thumbnail {
  max-width: 200px;
  max-height: 200px;
}
.lightbox {
  z-index: 1040;
}
.lightbox-caption {
  display: none;
}
</style>
