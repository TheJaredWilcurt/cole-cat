const app = new Vue({
  el: '#app',
  data: {
    loading: true,
    networkError: false,
    allFiles: []
  },
  methods: {
    getGitTree: function () {
      this.loading = true;
      axios.get('https://api.github.com/repos/TheJaredWilcurt/cole-cat/git/trees/master?recursive=1')
        .then((response) => {
          this.allFiles = response.data.tree;
          this.networkError = false;
          this.loading = false;
        })
        .catch((err) => {
          if (err) {
            this.networkError = true;
          }
          this.loading = false;
        });
    }
  },
  computed: {
    imageFiles: function () {
      return this.allFiles.filter(function (file) {
        return file.path.startsWith('/images');
      });
    },
    images: function () {
      let images = [];

      this.imageFiles.forEach(function (file) {
        // /images/Mr.Cool.jpg
        let src = file.path;
        // Mr.Cool.jpg
        let filename = src.split('/')[src.split('/').length -1];
        // Mr.Cool
        let alt = filename.split('.').slice(0,-1).join('.');

        images.push({
          src: src,
          alt: alt
        });
      });

      return images;
    }
  },
  created: function () {
    this.getGitTree();
  }
});