<template>
    <section class="articles-component">
       
        <div class="articles-list" v-if="articles && articles.length >=1">
            <article class="article-item" v-for="(article, index) in articles" :key="index">
                            <div class="image-wrap" v-if="article.image">
                                <img :src="url + '/get-image/'+ article.image" :alt="article.title" />
                            </div>
                            <div class="image-wrap" v-if="!article.image">
                                <img src="../assets/images/descarga.png" :alt="article.title" />
                            </div>
                            <h2>
                            <router-link :to="{name:'articulo', params:{id:article._id}}">
                              {{article.title}}
                            </router-link>
                            </h2>
                            <span class="date">
                                    {{article.date | moment('from', 'now')}}
                                </span>
                            <router-link :to="'articulo/'+article._id">Leer más</router-link>

                            <div class="clearfix"></div>
            </article>
        </div>
         <div class="articles-list" v-else-if="articles && articles.length <=0"> 
           No hay articulos para mostrar
        </div>
        <div class="articles-list" v-else>
            Cargando...
        </div>
    </section>
</template>

<script>
import { Global } from "../Global";
export default {
name: 'Articles',
data() {
    return {
         url: Global.url
    }
}, 
props:['articles']
}
</script>

<style>

</style>