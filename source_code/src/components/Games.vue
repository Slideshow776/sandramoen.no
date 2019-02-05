<template>
    <div id="component">
      <md-card class="card" md-with-hover v-bind:key="item.id" v-for="item in games">
        <md-card-media>
          <img :src="item.image" alt="cover-image">
        </md-card-media>

        <md-card-header>
          <div class="md-title">{{item.title}}</div>
          <div class="md-subhead">{{item.subtitle}}</div>
        </md-card-header>

        <md-card-content>
          {{item.description}}
          <a :href="item.link">Link</a>
        </md-card-content>
      </md-card>
    </div>
</template>

<script>
import json from '@/assets/games.json'
export default {
  name: 'Games',
  data: () => ({
    games: json,
    showDescription: false
  }),
  mounted () {},
  computed: {},
  methods: {}
}
</script>

<style scoped>

.card {
  background-color:#585858;
}

img {
  width:15rem;
}

#component {
  min-height: 100vh;
}

.md-card {
    margin: .5rem;
    display: inline-block;
    vertical-align: top;;
}

.md-card-media {
    display: flex;
    align-items: center;
    justify-content: center;
}

img {
  height:10rem;
}

</style>
