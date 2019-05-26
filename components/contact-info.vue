<template>
  <div id="contact">
    <h1 class="mt-5 mb-5">Contact</h1>

    <div class="row">

      <div class="col-8">
        <ul>
          <li><strong>E-Mail:</strong> <a :href="'mailto:' + email">{{ email }}</a></li>
          <li><strong>Phone:</strong> <a :href="'tel:' + phone">{{ phone }}</a></li>
          <li
            v-for="(link, linkIndex) in links"
            :key="'link' + linkIndex"
          >
            <a v-if="link.url" :href="link.url">{{ link.name }}</a>
            <span v-else>{{ link.name }}</span>
          </li>
        </ul>
      </div>

      <div class="col-4">
        <img src="/cole.jpg" alt="Cole Catherine" />
      </div>

    </div>

  </div>
</template>

<script>
module.exports = {
  name: 'contact-info',
  data: function () {
    return {
      email: 'username@site.com',
      phone: '1-800-123-4567',
      links: [
        {
          name: 'Instagram',
          url: '#'
        },
        {
          name: 'Facebook',
          url: '#'
        },
        {
          name: 'Twitter',
          url: '#'
        }
      ]
    };
  }
};
</script>
