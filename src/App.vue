<template>
  <div id="app">
    <Header></Header>
    <!--
    <Slider></Slider>
    <div class="center">
    -->
    
      <!--
       <LastArticles></LastArticles>
      -->
      <router-view></router-view>
      <!--
    <Sidebar></Sidebar>
       <div class="clearfix"></div>
    </div>
      -->
     
    <Footer></Footer>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header'
// import Slider from './components/Slider'
// import Sidebar from './components/Sidebar'
//import LastArticles from './components/LastArticles'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
  //  Slider,
   // Sidebar,
    //LastArticles,
    Footer
    }
}
</script>

<style>
/*
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
*/
@import './assets/css/styles.css';

</style>
