<template>
  <div class="footer">
    <div id="contact">
      <a id="contact" href="mailto:sandramoen01@gmail.com" target="_top">Send en e-post!</a>
    </div>
    <div id="social-media">
      <a
        href="https://www.facebook.com/sandra.doe.543"
        style="color:white"
        @mousedown="trackInteraction('Facebook')"
      >
        <img class="icons" src="../assets/facebook_icon.png" alt="facebook icon" loading="lazy" />
      </a>
      <a
        href="https://www.youtube.com/channel/UCiWvUG5AeJ1lAkvlq0V-2cg?view_as=subscriber"
        style="color:white"
        @mousedown="trackInteraction('Youtube')"
      >
        <img class="icons" src="../assets/youtube_icon.png" alt="youtube icon" loading="lazy" />
      </a>
      <a
        href="https://github.com/Slideshow776"
        style="color:white"
        @mousedown="trackInteraction('Github')"
      >
        <img class="icons" src="../assets/github_icon.png" alt="github icon" loading="lazy" />
      </a>
      <a
        href="https://sandramoen.itch.io"
        style="color:white"
        @mousedown="trackInteraction('ItchIO')"
      >
        <img class="icons" src="../assets/itchio_icon.png" alt="itchio icon" loading="lazy" />
      </a>
      <a
        href="https://twitter.com/sandra7764"
        style="color:white"
        @mousedown="trackInteraction('Twitter')"
      >
        <img class="icons" src="../assets/twitter_icon.png" alt="twitter icon" loading="lazy" />
      </a>
      <a
        href="https://store.steampowered.com/curator/43659177-Sandra-Moen/"
        style="color:white"
        @mousedown="trackInteraction('Steam')"
      >
        <img class="icons" src="../assets/steam_icon.png" alt="twitter icon" loading="lazy" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  methods: {
    trackInteraction (label) {
      window.dataLayer.push({ event: String(label) })
    }
  }
}
</script>

<style scoped>
.icons {
  width: 2.75em;
  margin-right: 0.5em;
  margin-top: 0.35em;
}
.icons:hover {
  opacity: 0.6;
}
.footer {
  background-color: #aebd38;
  position: fixed;
  left: 0rem;
  bottom: 0;
  width: 100%;
  text-align: center;
  color: rgb(0, 0, 0);
  display: flex;
  justify-content: center;
  height: 3rem;
}

li {
  list-style-type: none;
}

#contact {
  position: relative;
  top: 0.4rem;
  color: rgb(0, 0, 0);
  font-weight: 600;
  margin-right: 0.5em;
}

#contact:hover {
  color: #68829e;
}

.fa {
  padding: 1rem;
  font-size: 2rem;
  width: 3rem;
  text-align: center;
  text-decoration: none;
  position: relative;
  top: 0.5rem;
  color: #000000;
}

.fa:hover {
  color: #68829e;
}
</style>
