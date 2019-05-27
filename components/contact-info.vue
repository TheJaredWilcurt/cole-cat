<template>
  <div id="contact">
    <h1 class="mt-5 mb-5">Contact</h1>

    <div class="row">

      <div class="d-block d-md-none col-12 text-center mb-3">
        <img :src="photo" :alt="caption" />
      </div>

      <div class="col-12 col-md-6">
        <div class="mb-3">
          <strong>Bio:</strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
          non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <ul>
          <li>
            <strong>E-Mail:</strong>
            <a :href="'mailto:' + email">{{ email }}</a>
          </li>
          <li>
            <strong>Phone:</strong>
            <a :href="'tel:' + phone">{{ phone }}</a>
          </li>
          <li
            v-for="(link, linkIndex) in links"
            :key="'link' + linkIndex"
          >
            <a
              v-if="link.url"
              v-text="link.name"
              :href="link.url"
              :target="link.external ? '_blank' : '_self'"
            ></a>
            <span v-else>{{ link.name }}</span>
          </li>
        </ul>
        <style-swapper></style-swapper>
      </div>

      <div class="d-none d-md-block col-md-6 text-right">
        <img :src="photo" :alt="caption" />
      </div>

    </div>

  </div>
</template>

<script>
module.exports = {
  name: 'contact-info',
  components: {
    'style-swapper': httpVueLoader('components/style-swapper.vue')
  },
  data: function () {
    return {
      photo: 'cole.jpg',
      caption: 'Cole Catherine',
      email: 'username@site.com',
      phone: '1-800-123-4567',
      links: [
        {
          name: 'Instagram',
          url: '#',
          external: true
        },
        {
          name: 'Facebook',
          url: '#',
          external: true
        },
        {
          name: 'Twitter',
          url: '#',
          external: true
        }
      ]
    };
  }
};
</script>
