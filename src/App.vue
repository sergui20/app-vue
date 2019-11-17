<template>
  <div id="app">
    <Header></Header>

    <router-view></router-view>

    <Footer></Footer>
  </div>
</template>

<script>
import 'bulma/css/bulma.min.css';
import '../public/index.css';

import Footer from './components/layout/Footer';
import Header from './components/layout/Header';

export default {
  name: 'app',
  components: {
    Footer,
    Header
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
