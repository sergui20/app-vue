<template>
  <div id="app">
    <Header></Header>

    <Notification v-show="searched" :color="showResults ? 'is-success' : 'is-danger'">
      <p v-if="showResults" slot="body">Se han encontrado {{ tracks.length }} resultados</p>
      <p v-if="!showResults" slot="body">No se han encontrado resultados</p>
    </Notification>

    <Loader v-show="isLoading"></Loader>
    <section class="section" v-show="!isLoading">
      <nav class="nav">
        <div class="container">
          <input class="input is-large" type="text" placeholder="Search songs" v-model="searchQuery">
          <a class="button is-info is-large" v-on:click="search">Search</a>
          <a class="button is-info is-large">&times;</a>
          <p><small>{{ searchMessage }}</small></p>
        </div>
      </nav>

      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-one-quarter" v-for="t in tracks" v-bind:key="t.id">
            <MyTracks :class="{ 'is-active' : t.id === selectedTrack }" :track="t" @select="setTrack"></MyTracks>
          </div>
        </div>
      </div>
    </section>

    <Footer></Footer>
  </div>
</template>

<script>
import '../node_modules/bulma/css/bulma.min.css';
import service from './services/platzi-music';

import Footer from './components/layout/Footer';
import Header from './components/layout/Header';

import Track from './components/Track';

import Loader from './components/shared/Loader';
import Notification from './components/shared/Notification';

export default {
  name: 'app',
  components: {
    Footer,
    Header,
    MyTracks: Track,
    Loader,
    Notification
  },
  data() {
    return {
      searchQuery: '',
      tracks: [],
      isLoading: false,
      showResults: false,
      searched: false,
      selectedTrack: ''
    }
  },
  computed: {
    searchMessage() {
      return `Encontrados: ${this.tracks.length}`
    }
  },
  // watch: {
  //   showResults() {
  //     console.log('hey')
  //     if(!this.showResults) {
  //       setTimeout(() => {
  //         this.searched = false
  //       }, 3000)
  //     }
  //   }
  // },
  methods: {
    search() {
      if(!this.searchQuery) return
      this.isLoading = true
      service.getTracks(this.searchQuery)
        .then(res => {
          this.searched = true
          this.showResults = res.length > 0
          this.tracks = res
          this.isLoading = false
        })
    },
    setTrack(id) {
      console.log(id)
      this.selectedTrack = id
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.is-active {
  border: 3px solid #23d160
}
</style>
