<template>
  <div class="navbar navbar-expand-lg fixed-top navbar-dark bg-primary" bis_skin_checked="1">
    <div class="container" bis_skin_checked="1">
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
        class="collapse navbar-collapse"
        bis_skin_checked="1"
      >
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#">Instagram</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact">Contact</a>
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
      showNav: true
    };
  }
};
</script>
