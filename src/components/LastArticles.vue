<template >
<div lass='general'>
   <Slider texto='Bienvenido al Curso de Vue con Francisco Monleon'
          home= true>
    </Slider>
    <div class="center">
       <section id="content">
            <h2 class="subheader">Últimos artículos</h2>
  
            <!--Listado articulos-->
            <div id="articles">
                
               <Articles :articles='articles'></Articles>
            
               
            </div>

        </section>
       <Sidebar></Sidebar>
       <div class="clearfix"></div>
    </div>
</div>
</template>

<script>
import Sidebar from './Sidebar'
import Slider from './Slider'
import Articles from './Articles'
import axios from 'axios'
import { Global } from "../Global";


export default {
    name: 'LastArticles',
    data() {
        return {
         url: Global.url,
         articles: null
        }
    },
    components:{
        Sidebar,
        Slider,
        Articles
    },
    mounted() {
   this.getLastArticles()
 },
 methods:{
 async getLastArticles(){
  /*
    axios.get(this.url + '/articles/') 
         .then( res => {
          // console.log(res)
           if(res.data.status==='success'){
              this.articles = res.data.articles
              console.log(this.articles)
           }
           })
           */
    
     try {
       const response = await axios.get(this.url + '/articles/true')
      // console.log(response.data.articles)
       this.articles = response.data.articles
       console.log(this.articles)
    
    } catch (error) {
       console.log('error', error)
     }
     
   }
 }
}
</script>

<style scoped>

</style>