<template>
 <div class='general'>
   <Slider texto='Blog'></Slider>
    <div class="center">
      <section id="content">
                <h1 class="subheader">Blog</h1>
              <div id="articles" v-if="articles">
                <Articles :articles='articles'></Articles>
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
 name:'Blog',
 data() {
     return {
         url: Global.url,
         articles: null
     }
 },
 components:{
   Slider,
   Sidebar,
   Articles
 },
 mounted() {
   this.getArticles()
 },
 methods:{
  getArticles(){

    axios.get(this.url + '/articles/') 
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