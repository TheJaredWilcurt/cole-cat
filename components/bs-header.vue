<template>
  <div class="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
    <div class="container">
      <a href="/#" class="navbar-brand">Cole-Catherine</a>
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
        class="navbar-collapse collapse justify-content-between"
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
              data-scroll
              @click="showNav = false"
            ></a>
            <span v-else class="nav-link">
              {{ link.name }}
            </span>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0 text-right">
          <theme-swapper></theme-swapper>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
module.exports = {
  name: 'bs-header',
  components: {
    'theme-swapper': httpVueLoader('components/theme-swapper.vue')
  },
  data: function () {
    return {
      showNav: false,
      links: [
        {
          name: 'Gallery',
          url: '#gallery'
        },
        {
          name: 'About',
          url: '#about'
        },
        {
          name: 'Contact',
          url: '#contact'
        }
      ]
    };
  },
  created: function () {
    const scroll = new SmoothScroll('a[href*="#"]', {
      speed: 1000,
      easing: 'easeOutCubic',
      updateURL: true,
      popstate: true
    });

    setTimeout(function () {
      let hash = window.location.hash;
      if (hash) {
        scroll.animateScroll(document.querySelector(hash));
      }
    }, 350);
  }
};
</script>
