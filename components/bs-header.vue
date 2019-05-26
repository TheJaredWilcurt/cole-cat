<template>
  <div class="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
    <div class="container">
      <a href="/#" class="navbar-brand">Cole-Catherine Williams</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="showNav = !showNav"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        :class="{ 'show': showNav }"
        class="navbar-collapse collapse"
      >
        <ul class="navbar-nav">
          <li
            v-for="(link, linkIndex) in links"
            :key="'navLink' + linkIndex"
            class="nav-item"
          >
            <a
              v-if="link.url"
              v-text="link.name"
              :href="link.url"
              :target="link.external ? '_blank' : '_self'"
              class="nav-link"
              @click="showNav = false"
            ></a>
            <span v-else class="nav-link">
              {{ link.name }}
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
module.exports = {
  name: 'bs-header',
  data: function () {
    return {
      showNav: false,
      links: [
        {
          name: 'Instagram',
          url: '#',
          external: true
        },
        {
          name: 'Contact',
          url: '#contact'
        }
      ]
    };
  }
};
</script>
