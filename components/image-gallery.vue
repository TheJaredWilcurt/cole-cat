<template>
  <div>
    <h1 class="mb-5">Art Gallery</h1>

    <div class="mb-4">
      <strong>Categories:</strong>
      <select v-model="selectedFilter" class="custom-select w-auto">
        <option value="all">All</option>
        <option
          v-for="(filter, filterIndex) in filters"
          v-text="capitalizeFirstLetter(filter)"
          :key="'filter' + filterIndex"
          :value="filter"
        ></option>
      </select>
    </div>

    <div class="d-flex flex-column justify-content-center align-items-center flex-sm-row justify-content-sm-between flex-wrap">
      <template v-for="(image, imageIndex) in images">
        <img
          v-if="selectedFilter === 'all' || selectedFilter === image.filter"
          :key="'image' + imageIndex"
          :src="image.thumbnail || image.name"
          :alt="image.alt"
          class="img-fluid img-thumbnail mb-3"
          @click="showLightbox(image.name)"
        />
      </template>
    </div>

    <lightbox
      :images="images"
      :directory="''"
      :filter="selectedFilter"
      ref="lightbox"
    ></lightbox>
  </div>
</template>

<script>
module.exports = {
  name: 'image-gallery',
  props: {
    allFiles: {
      type: Array,
      required: true
    }
  },
  data: function () {
    return {
      selectedFilter: 'all'
    };
  },
  methods: {
    showLightbox: function (imageName) {
      this.$refs.lightbox.show(imageName);
    },
    capitalizeFirstLetter: function (phrase) {
      return phrase.charAt(0).toUpperCase() + phrase.slice(1);
    }
  },
  computed: {
    imageFiles: function () {
      return this.allFiles.filter(function (file) {
        return !!(
          file.path.startsWith('gallery/') &&
          file.path.includes('.') &&
          !file.path.endsWith('.md')
        );
      });
    },
    images: function () {
      let images = [];

      this.imageFiles.forEach(function (file) {
        // gallery/paintings/Mr._Cool.jpg
        let src = file.path;
        // Mr._Cool.jpg
        let filename = src.split('/')[src.split('/').length - 1];
        // Mr._Cool
        let alt = filename.split('.').slice(0, -1).join('.');
        // Mr. Cool
        alt = alt.split('_').join(' ');

        // Don't add thumbnails to the list
        if (alt.endsWith(' th')) {
          return;
        }

        let filter = 'all';
        // gallery/paintings/Mr._Cool.jpg => ['gallery', 'paintings', 'Mr._Cool.jpg']
        if (src.split('/').length > 2) {
          // filter = 'paintings'
          filter = src.split('/')[1];
        }

        let thumbnail = false;

        this.imageFiles.forEach(function (thumb) {
          // Mr._Cool_th.jpg
          let thumbFilename = thumb.path.split('/')[thumb.path.split('/').length - 1];
          // Mr. Cool th
          let thumbAlt = thumbFilename.split('.').slice(0, -1).join('.').split('_').join(' ');
          // mr. cool th === mr. cool th
          if (thumbAlt.toLowerCase() === alt.toLowerCase() + ' th') {
            thumbnail = thumb.path;
          }
        });
        images.push({
          name: src,
          thumbnail: thumbnail,
          alt: alt,
          filter: filter,
          id: src
        });
      }.bind(this));

      return images;
    },
    filters: function () {
      let filters = [];
      this.images.forEach(function (image) {
        filters.push(image.filter);
      });
      return new Set(filters);
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
</style>
