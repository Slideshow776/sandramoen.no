<template>
    <div>
      <md-card md-with-hover v-bind:key="item.id" v-for="item in games">
        <md-card-media>
          <img :src="item.image" alt="cover-image">
        </md-card-media>

        <md-card-header>
          <div class="md-title">{{item.title}}</div>
          <div class="md-subhead">{{item.subtitle}}</div>
        </md-card-header>

        <md-card-content>
          {{item.description}}
          <br>
          <a :href="item.link">Spillet kan lastes ned her</a>
        </md-card-content>
      </md-card>
    </div>
</template>

<script>
import json from '@/assets/games.json'
export default {
  name: 'Games',
  data: () => ({
    games: json
  })
}
</script>

<style scoped>
img {
  /* min-height:20rem; */
  width: auto;
  height: auto;
  max-height:20rem;
}

.md-card-media {
  overflow: hidden;
}

.md-card {
  margin: .5rem;
  display: inline-block;
  vertical-align: top;
  background-color:#585858;
  max-width:35rem;
  height:35rem;
}
</style>
