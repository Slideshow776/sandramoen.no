<template>
  <div>
    <md-card md-with-hover v-bind:key="item.id" v-for="item in games">
      <md-card-media>
        <a target="_blank" :href="item.link" @mousedown="trackInteraction(item.title)">
          <img
            style="max-height:20rem;width:auto;!important"
            :src="item.image"
            alt="cover-image"
            loading="lazy"
          />
        </a>
      </md-card-media>

      <md-card-header>
        <div class="md-title">{{item.title}}</div>
        <div class="md-subhead">{{item.subtitle}}</div>
      </md-card-header>

      <md-card-content>
        {{item.description}}
        <br>
        <a
          target="_blank"
          :href="item.link"
          @mousedown="trackInteraction(item.title)"
        >Spillet finnes her</a>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
import json from '@/assets/games.json'
/* import mixin from '../mixin' */
export default {
  name: 'Games',
  data: () => ({
    games: json
  }),
  methods: {
    trackInteraction (label) {
      window.dataLayer.push({ event: String(label) })
    }
  }
}
</script>

<style scoped>
.md-card {
  margin: 0.5rem;
  display: inline-block;
  vertical-align: top;
  background-color: #585858;
  max-width: 35rem;
  min-height: 35rem;
}
</style>
