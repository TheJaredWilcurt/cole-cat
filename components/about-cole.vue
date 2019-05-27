<template>
  <div>
    <h1 class="mt-5 mb-5">About Cole Catherine</h1>

    <div class="row">

      <div class="d-block d-md-none col-12 text-center mb-3">
        <img
          :src="photo"
          :alt="caption"
          class="img-fluid"
        />
      </div>

      <div class="col-12 col-md-6">
        <div class="mb-3">
          <p>
            Also known by many pseudonyms, she is a painter currently conceiving pieces from Portland, Oregon under the epithet ‘<em>The Heart Factory</em>’.

            Cole's first print was sold at the <strong>Canon Art Collective Benefit</strong> in 2003, an event that took place in Beavercreek, Ohio.

            The event was coordinated by friends of Cole to help raise funds for expenses of a life altering surgery, an affliction that impaired Cole at age 18.

            She regards that experience as an inspiration for her artwork.
          </p>
          <p>
            On August 31st &amp; September 1st, 2012 she exhibited her work at <strong>The Pancakes &amp; Booze Art Show</strong> (Portland, OR), her first professional exhibition.

            Her first ceramic piece was shown in the <strong>Cascade gallery</strong> at PCC during the 2013 student show.

            In May, 2013 she donated a painting to the <strong>I Heart Art Foundation</strong> and it was auctioned off for a fundrasier at Portland Art Museum its proceeds were placed in a scholarship fund for low-income art students.
          </p>
          <p>
            It wasn't until Cole produced a piece entailing an image of a heart for her aunt, that the umbrella term for her work became known as ‘The Heart Factory’.

            She has received a Scholastic Key Award for her photography at the age of 16 and a runner up award from a contest at The Great Frame Up in Wheeling, IL circa 2002.

            She is also a published poet and has a digital design background but in recent years her creativity has focused mainly on painting.

            Though her artworks range from influences of “Sci-fi &amp; fantasy, space...the stuff within space, colors, and dreams”, conceptually her work returns to the heart from which it came.

            Inspiration also came in the form of travel and life experiences.

            Albeit, stylistic similarities are thin, a few of the artists Cole admires are Van Gogh, Robert &amp; Beverly Spotts, Catherine Anne Sutera, and Ruth Jane Williams.
          </p>
        </div>
      </div>

      <div class="d-none d-md-block col-md-6 text-right">
        <img
          :src="photo"
          :alt="caption"
          class="img-fluid"
        />
      </div>

    </div>

  </div>
</template>

<script>
module.exports = {
  name: 'about-cole',
  data: function () {
    return {
      photo: 'cole.jpg',
      caption: 'Cole Catherine'
    };
  }
};
</script>
