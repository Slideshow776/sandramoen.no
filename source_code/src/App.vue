<template>
  <div id="app">
    <h1 id="brand">Sandras Hjemmeside</h1>
    <md-tabs md-sync-route class="md-primary" md-alignment="centered">
      <md-tab id="tab-home" md-label="Om meg">
        <Home />
      </md-tab>
      <md-tab id="tab-games" md-label="Spill">
        <Games />
      </md-tab>
    </md-tabs>
    <Footer />
  </div>
</template>

<script>
import Home from './components/Home'
import Games from './components/Games'
import Footer from './components/Footer'
export default {
  name: 'App',
  data () {
    return {
    }
  },
  components: {
    Home,
    Games,
    Footer
  }
}
</script>

<style src="./Viewport.scss" lang="scss"></style>
