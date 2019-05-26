<template>
  <div>
    <link
      :href="'https://stackpath.bootstrapcdn.com/bootswatch/4.3.1/' + selected + '/bootstrap.min.css'"
      rel="stylesheet"
    />
    <div class="form-group">
      <select
        v-model="selected"
        class="custom-select"
      >
        <option
          v-for="(style, styleIndex) in styles"
          v-text="style"
          :key="'style' + styleIndex"
        ></option>
      </select>
    </div>
  </div>
</template>

<script>
module.exports = {
  name: 'style-swapper',
  data: function () {
    return {
      selected: 'minty',
      styles: [
        'cerulean',
        'cosmo',
        'cyborg',
        'darkly',
        'flatly',
        'journal',
        'litera',
        'lumen',
        'lux',
        'materia',
        'minty',
        'pulse',
        'sandstone',
        'simplex',
        'sketchy',
        'slate',
        'solar',
        'spacelab',
        'superhero',
        'united',
        'yeti'
      ]
    };
  }
};
</script>
