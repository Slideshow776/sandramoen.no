<template>
  <div class="about">
    <h3>Velkommen til min hjemmeside!</h3>
    <img src="../assets/experimental.jpg" alt="logo">
    <h3>Sandra Moen</h3>
    <hr>
    <p>Fra egen erfaring med profesjonelle, akademiske og personlige prosjekter har jeg lært at det er viktig
å ha god struktur med vektlegging på at andre enkelt skal kunne lese og forstå koden min. Selv
om jeg er en utvikler har jeg også en fot innenfor design, det er avgjørende at programmet ikke
bare følger beste praksis, men også svarer til brukerforventninger og i tillegg gir en god opplevelse.
De beste timene er om morgenene, god diett, kropp, sinn og samhold gir en jevn og balansert
arbeidsflyt.</p>
    <div style="text-align:left">
      <div class="title">
        <div class="markers"></div><h3>Utdannelse</h3>
      </div>
        <ul>
          <li>2016-2018 <strong>Mastergrad i Computer Science</strong>, Universitetet i Stavanger</li>
          <div class="sub-description">
          <span>Opplæring i:</span> algoritmeteori, distribuerte systemer, statistikk, data-intensive systemer,
websikkerhet, data mining, simulering og ytelsesanalyse, trådløs kommunikasjon
          </div>
          <li>2011-2016 <strong>Bachelorgrad i Dataingeniørfag</strong>, Universitetet i Stavanger</li>
          <div class="sub-description">
            <span>Opplæring i:</span> programmering, algoritmer, programvareutvikling, matematikk, kjemi, fysikk,
bedriftsøkonomi, webprogrammering og interaksjonsdesign, datagrafikk, kommunikasjonsnettverk,
operativsystemer, databaser, statistikk
          </div>
        </ul>
      <div class="title">
        <div class="markers"></div><h3>Arbeidserfaring</h3>
      </div>
          <ul>
            <li>2018-2019 <strong>Data Engineer</strong>, RedPerformance, Oslo (pågående)</li>
            <div class="sub-description">
              Full-Stack utvikling av webbaserte interne forretningssystemer, lagd i Vue.js (Javascript) og
Python. Webanalyse og sporing med fokus på Google Analytics og Google Tag Manager.
            </div>
            <li>2017 <span style="margin-right:2.7rem;"></span> <strong>Full-Stack Webutvikler</strong>, Knowit Stavanger, (juni-august)</li>
            <div class="sub-description">
              Utviklet <a href="http://olapp.no/#/">webapplikasjon</a> for kunde, lagd i React-Redux (Javascript)
            </div>
          </ul>
      <div class="title">
        <div class="markers"></div><h3>Masteroppgave</h3>
      </div>
        <ul>
          <li>tittel <span style="margin-right:3rem;"></span> <strong>Automated collection of multi-source spatial information for emergency management</strong></li>
          <div class="sub-description"><a href="https://github.com/Slideshow776/DATMAS-V18">Prototype</a> av analyseverktøy i forsøk på å oppdage når influensasesongen starter vha. datasett
og API fra flere kilder.</div>
        </ul>
      <div class="title">
        <div class="markers"></div><h3>Bacheloroppgave</h3>
      </div>
        <ul>
          <li>tittel <span style="margin-right:3rem;"></span> <strong>Grunnleggende spillutvikling i Java</strong></li>
          <div class="sub-description">Lage spillmotor, struktur og kartgenerator som støtter et enkelt <a href="https://github.com/Slideshow776/Legacy-Games/tree/master/Janne's%20Adventure">sidescrolling platformer</a>
spill.</div>
        </ul>
      <div class="title">
        <div class="markers"></div><h3>Programmeringsspråk</h3>
      </div>
        <ul>
          <li>Java <span style="margin-right:3.3rem;"></span>Mye erfaring</li>
          <li>JavaScript <span style="margin-right:.7rem;"></span>Mye erfaring</li>
          <li>Python <span style="margin-right:2.3rem;"></span>Mye erfaring</li>
          <li>Go <span style="margin-right:4.1rem;"></span>Endel erfaring</li>
          <li>Kotlin <span style="margin-right:2.9rem;"></span>Litt erfaring</li>
        </ul>
      <div class="title">
        <div class="markers"></div><h3>Interesser</h3>
      </div>
        <ul>
          <li>Spillprogrammering</li>
          <li>Fekting</li>
        </ul>
      <div class="title">
        <div class="markers"></div><h3>Språk</h3>
      </div>
        <ul>
          <li>Norsk <span style="margin-right:2.4rem;"></span><strong>Flytende</strong> muntlig og skriftlig</li>
          <li>Engelsk <span style="margin-right:1.4rem;"></span><strong>Flytende</strong> muntlig og skriftlig</li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>

strong {
  margin-left:.5rem;
}

.title {
  display:flex;
  margin-bottom:-1rem;
  color:rgb(255, 248, 181);
}

span {
  font-weight: 600;
}

.sub-description {
  position:relative;
  left:5.7rem;
  margin-top:.25rem;
  margin-bottom:1rem;
  width:75%;
}

li {
  font-size: 1rem;
  list-style-type:none;
}

.markers {
  position: relative;
  top: 1.5rem;
  height: .5rem;
  width: 5rem;
  margin-right:1rem;
  background-color:#9211e8;
}

.about {
  /* margin-top: -2rem;
  margin-right: -1rem;
  margin-left: -1rem; */
  position: relative;
  top:-1rem;
  padding-top: 2rem;
  min-height: 300vh;
  max-width: 50rem;
  margin:auto;
}

img {
  height: 100%;
  border: 1px solid #ddd;
  border-radius: 4px;
  width:15rem;
}

</style>
