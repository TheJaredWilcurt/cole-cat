<template>
  <div>
    <bs-header></bs-header>
    <div class="container">
      <image-gallery :load-data="true"></image-gallery>
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
    'about-cole': httpVueLoader('components/about-cole.vue'),
    'bs-header': httpVueLoader('components/bs-header.vue'),
    'contact-info': httpVueLoader('components/contact-info.vue'),
    'image-gallery': httpVueLoader('components/image-gallery.vue')
  }
};
</script>

<style scoped>
hr {
  margin-top: 100px;
  margin-bottom: 100px;
}
</style>
