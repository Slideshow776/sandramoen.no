<template>
  <div class="about">
    <h3>Velkommen til min hjemmeside!</h3>
    <img src="../assets/experimental_small.jpg" alt="logo" loading="lazy" />
    <h3>Sandra Moen</h3>
    <hr />
    <p id="ingress">
      Fra egen erfaring med profesjonelle, akademiske og personlige prosjekter har jeg lært at det er viktig
      å ha god struktur med vektlegging på at andre enkelt skal kunne lese og forstå koden min. Selv
      om jeg er en utvikler har jeg også en fot innenfor design, det er avgjørende at programmet ikke
      bare følger beste praksis, men også svarer til brukerforventninger og i tillegg gir en god opplevelse.
      De beste timene er om morgenene, god diett, kropp, sinn og samhold gir en jevn og balansert
      arbeidsflyt.
    </p>
    <div style="text-align:left">
      <div class="title">
        <div class="markers"></div>
        <h3>Utdanning</h3>
      </div>
      <table>
        <tr>
          <td valign="top" style="width:5rem;">2016-2018</td>
          <td>
            <span>Mastergrad i Computer Science</span>, Universitetet i Stavanger
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <span>Opplæring i:</span> algoritmeteori, distribuerte systemer, statistikk, data-intensive systemer,
            websikkerhet, data mining, simulering og ytelsesanalyse, trådløs kommunikasjon
          </td>
        </tr>
      </table>
      <table>
        <tr>
          <td valign="top" style="width:5rem;">2011-2016</td>
          <td>
            <span>Bachelorgrad i Dataingeniørfag</span> Universitetet i Stavanger
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <span>Opplæring i:</span> programmering, algoritmer, programvareutvikling, matematikk, kjemi, fysikk,
            bedriftsøkonomi, webprogrammering og interaksjonsdesign, datagrafikk, kommunikasjonsnettverk,
            operativsystemer, databaser, statistikk
          </td>
        </tr>
      </table>
      <div class="title">
        <div class="markers"></div>
        <h3>Arbeidserfaring</h3>
      </div>
      <table>
        <tr>
          <td valign="top" style="width:5rem;">2020</td>
          <td>
            <span>Systemutvikler</span>,
            <a target="_blank" href="https://www.knowit.no/tjenester/experience/">Knowit Experience</a>, Oslo (pågående)
          </td>
        </tr>
        <tr>
          <td valign="top">mars</td>
          <td>Frontend utvikling av webbaserte løsninger</td>
        </tr>
        <tr>
          <td valign="top" style="width:5rem;">2019-2020</td>
          <td>
            <span>Enonic Specialist</span>,
            <a target="_blank" href="https://enonic.com">Enonic</a>, Oslo
          </td>
        </tr>
        <tr>
          <td valign="top">april-mars</td>
          <td>
            Frontend utvikling av webbasert
            <a
              target="_blank"
              href="https://market.enonic.com/vendors/enonic/event-theme"
              @mousedown="trackInteraction('EventTheme')"
            >markedsapplikasjon</a>, lagd i Enonic XP vha. Javascript og
            Thymeleaf. Migreringsarbeid og videreutvikling av kundenettsider vba. Enonic XP.
          </td>
        </tr>
        <tr>
          <td valign="top" style="width:5rem;">2018-2019</td>
          <td>
            <span>Data Engineer</span>,
            <a target="_blank" href="https://redperformance.no">RED Performance</a>, Oslo
          </td>
        </tr>
        <tr>
          <td valign="top">juni-mars</td>
          <td>
            Full-Stack utvikling av webbaserte interne forretningssystemer, lagd i Vue.js (Javascript) og
            Python. Webanalyse og sporing med fokus på Google Analytics og Google Tag Manager.
          </td>
        </tr>
        <tr>
          <td valign="top" style="width:5rem;">2017</td>
          <td>
            <span>Frontend Webutvikler</span>,
            <a target="_blank" href="https://www.knowit.no">Knowit</a>, Stavanger
          </td>
        </tr>
        <tr>
          <td valign="top">juni-august</td>
          <td>
            Utviklet
            <a
              target="_blank"
              href="http://olapp.no/#/"
              @mousedown="trackInteraction('Ølapp')"
            >webapplikasjon</a> for kunde, lagd i React-Redux (Javascript)
          </td>
        </tr>
      </table>
      <div class="title">
        <div class="markers"></div>
        <h3>Masteroppgave</h3>
      </div>
      <table>
        <tr>
          <td valign="top" style="width:5rem;">tittel</td>
          <td>
            <span
              style="font-weight:bold"
            >Automated collection of multi-source spatial information for emergency management</span>
          </td>
        </tr>
        <tr>
          <td valign="top">beskrivelse</td>
          <td>
            <a
              target="_blank"
              href="https://github.com/Slideshow776/DATMAS-V18"
              @mousedown="trackInteraction('Masteroppgave')"
            >Prototype</a> av analyseverktøy i forsøk på å oppdage når influensasesongen starter vha. datasett
            og API fra flere kilder
          </td>
        </tr>
      </table>
      <div class="title">
        <div class="markers"></div>
        <h3>Bacheloroppgave</h3>
      </div>
      <table>
        <tr>
          <td valign="top" style="width:5rem;">tittel</td>
          <td style="position:relative;left:-.5rem">
            <strong>Grunnleggende spillutvikling i Java</strong>
          </td>
        </tr>
        <tr>
          <td valign="top">beskrivelse</td>
          <td>
            Lage spillmotor, struktur og kartgenerator som støtter et enkelt
            <a
              target="_blank"
              href="https://github.com/Slideshow776/Legacy-Games/tree/master/Janne's%20Adventure"
              @mousedown="trackInteraction('Bacheloroppgave')"
            >sidescrolling platformer</a>
            spill
          </td>
        </tr>
      </table>

      <div class="title">
        <div class="markers"></div>
        <h3>Programmeringsspråk</h3>
      </div>
      <table>
        <!-- Programmeringsspråk -->
        <tr>
          <td valign="top" style="width:5rem;">Java</td>
          <td>Mye erfaring</td>
        </tr>
        <tr>
          <td>JavaScript</td>
          <td>Mye erfaring</td>
        </tr>
        <tr>
          <td>CSS</td>
          <td>Mye erfaring</td>
        </tr>
        <tr>
          <td>Python</td>
          <td>Mye erfaring</td>
        </tr>
        <tr>
          <td>Kotlin</td>
          <td>Mye erfaring</td>
        </tr>
        <tr>
          <td>Go</td>
          <td>Endel erfaring</td>
        </tr>
        <tr>
          <td>C#</td>
          <td>Endel erfaring</td>
        </tr>
        <tr>
          <td>GLSL</td>
          <td>Noe erfaring</td>
        </tr>
      </table>

      <div class="title">
        <div class="markers"></div>
        <h3>Rammeverk</h3>
      </div>
      <table>
        <!-- Rammeverk -->
        <tr>
          <td valign="top" style="width:5rem;">Enonic XP</td>
          <td>Mye erfaring, har lisens</td>
        </tr>
        <tr>
          <td>Sass</td>
          <td>Mye erfaring</td>
        </tr>
        <tr>
          <td>Vue</td>
          <td>Endel erfaring</td>
        </tr>
        <tr>
          <td>Flask</td>
          <td>Endel erfaring</td>
        </tr>
        <tr>
          <td>React</td>
          <td>Noe erfaring</td>
        </tr>
      </table>

      <div class="title">
        <div class="markers"></div>
        <h3>Interesser</h3>
      </div>
      <table>
        <tr>
          <td>Spillprogrammering</td>
        </tr>
        <tr>
          <td>
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=oUHmHHSbLbU"
              @mousedown="trackInteraction('Fekting')"
            >Fekting</a>
          </td>
        </tr>
      </table>

      <div class="title">
        <div class="markers"></div>
        <h3>Språk</h3>
      </div>
      <table>
        <!-- Språk -->
        <tr>
          <td valign="top" style="width:4.6rem;">Norsk</td>
          <td>
            <strong>Flytende</strong> muntlig og skriftlig
          </td>
        </tr>
        <tr>
          <td>Engelsk</td>
          <td>
            <strong>Flytende</strong> muntlig og skriftlig
          </td>
        </tr>
      </table>
    </div>
    <div v-if="showMe"></div>
    <!-- The hack div -->
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      showMe: true
    }
  },
  mounted () {
    setTimeout(() => {
      this.showMe = false
    }, 500) // A hack to force rerendering of component so that it displays properly
  },
  methods: {
    trackInteraction (label) {
      window.dataLayer.push({ event: String(label) })
    }
  }
}
</script>

<style scoped lang="scss">
$foreground-color: #8cadd1;
#ingress {
  font-style: italic;
}

strong {
  margin-left: 0.5rem;
}

.title {
  display: flex;
  margin-bottom: -1rem;
  color: $foreground-color;
}

.markers {
  position: relative;
  top: 1.5rem;
  height: 0.5rem;
  width: 4.3rem;
  margin-right: 1rem;
  background-color: #8cadd1;
}

span {
  font-weight: 600;
}

li {
  font-size: 1rem;
  list-style-type: none;
}

.about {
  position: relative;
  top: -1rem;
  padding-top: 2rem;
  max-width: 50rem;
  margin: auto;
}

img {
  height: 100%;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 15rem;
}

a,
a:hover,
a:visited {
  color: #aebd38;
}
</style>
