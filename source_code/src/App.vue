<template>
  <div id="app">
    <h1 id="header">Sandras Hjemmeside</h1>
    <md-tabs md-sync-route class="md-primary" md-alignment="centered">
      <md-tab id="tab-about" md-label="Om meg">
        <About />
      </md-tab>
      <md-tab id="tab-games" md-label="Spill">
        <Games />
      </md-tab>
    </md-tabs>
    <Footer />
  </div>
</template>

<script>
import About from './components/About'
import Games from './components/Games'
import Footer from './components/Footer'
export default {
  name: 'App',
  data () {
    return {
    }
  },
  components: {
    About,
    Games,
    Footer
  }
}
</script>

<style src="./Viewport.scss" lang="scss"></style>
