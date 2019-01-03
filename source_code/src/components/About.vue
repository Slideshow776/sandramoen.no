<template>
  <div class="about">
    <h3>Velkommen til Sandra's hjemmeside!</h3>
    <img src="../assets/experimental.jpg" alt="logo">
    <p>Fra egen erfaring med profesjonelle, akademiske og personlige prosjekter har jeg lært at det er viktig
å ha god struktur med vektlegging på at andre enkelt skal kunne lese og forstå koden min. Selv
om jeg er en utvikler har jeg også en fot innenfor design, det er avgjørende at programmet ikke
bare følger beste praksis, men også svarer til brukerforventninger og i tillegg gir en god opplevelse.
De beste timene er om morgenene, god diett, kropp, sinn og samhold gir en jevn og balansert
arbeidsflyt.</p>
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
    }
  }
}
</script>

<style scoped>

.about {
  /* margin-top: -2rem;
  margin-right: -1rem;
  margin-left: -1rem; */
  padding-top: 2rem;
  min-height: 100vh;
}

img {
  height: 100%;
  border: 1px solid #ddd;
  border-radius: 4px;
  width:15rem;
}

</style>
