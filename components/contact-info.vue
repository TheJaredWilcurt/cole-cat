<template>
  <div>
    <h1 class="mt-5 mb-5">Contact</h1>
    <div class="row">
      <div class="col-12">
        <ul>
          <li>{{ location }}</li>
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
    </div>
  </div>
</template>

<script>
module.exports = {
  name: 'contact-info',
  data: function () {
    return {
      location: 'Portland, OR',
      email: 'ColesHeartArt@gmail.com',
      phone: '1-317-874-5385',
      links: [
        {
          name: 'Facebook',
          url: 'https://www.facebook.com/hope.anne.jones',
          external: true
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/explore/tags/colesheartart/',
          external: true
        },
        {
          name: 'Twitter',
          url: 'https://twitter.com/search?q=ColesHeartArt',
          external: true
        }
      ]
    };
  }
};
</script>
