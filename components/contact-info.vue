<template>
  <div id="contact">
    <h1 class="mt-5 mb-5">Contact</h1>

    <div class="row">

      <div class="d-block d-md-none col-12 text-center mb-3">
        <img :src="photo" :alt="caption" />
      </div>

      <div class="col-12 col-md-6">
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
  data: function () {
    return {
      photo: '/cole.jpg',
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
