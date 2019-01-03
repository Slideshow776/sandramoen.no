<template>
    <div id="component">
      <md-card md-with-hover v-bind:key="item.id" v-for="item in games">
        <md-card-media>
          <img :src="item.image" style="width:15rem;" alt="cover-image">
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
