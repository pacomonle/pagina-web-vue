<template>
  <div class='general'>
   <Slider :texto='"Busqueda: "+searchString'></Slider>
    <div class="center">
      <section id="content">
                <h1 class="subheader" v-if="articles">Articulos encontrados</h1>
                 <h1 class="subheader" v-else>Sin resultados</h1>
              <div id="articles" v-if="articles">
                <Articles :articles='articles'></Articles>
              </div>
              <div v-else>
                  <h3>No hay articulos encontrados</h3>
                  <h5>prueba con otra busqueda</h5>
              </div>
      </section>
      <Sidebar></Sidebar>
       <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import Slider from './Slider'
import Sidebar from './Sidebar'
import Articles from './Articles'
import axios from 'axios'
import { Global } from "../Global";
export default {
name: 'Search',
data() {
    return {
        url : Global.url,
        articles: null,
        searchString: null
    }
},
components:{
   Slider,
   Sidebar,
   Articles
 },
 mounted() {
  this.searchString = this.$route.params.searchString
   this.getArticlesBySearch(this.searchString)
 },
 
 methods:{
  getArticlesBySearch(searchString){

    axios.get(this.url + 'search/'+ searchString) 
         .then( res => {
          // console.log(res)
           if(res.data.status==='success'){
              this.articles = res.data.articles
              console.log(this.articles)
           }
           })
    /* 
     try {
       const data = await axios.get('http://localhost:3900/api/articles')
       console.log(data)
    
    } catch (error) {
       console.log('error', error)
     }
     */
   }
 }
}
</script>

<style>

</style>