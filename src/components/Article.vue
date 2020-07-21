<template>
  <div class='general'>
    <div class="center">
      <section id="content">
               <article class="article-item article-detail" v-if="article">
                <div class="image-wrap">
                    <img :src="url+'get-image/'+article.image" :alt="article.title" width="100" v-if="article.image"/>
                    <img src="../assets/images/descarga.png" :alt="article.title" width="100" v-else/>
                </div>

                <h1 class="subheader">{{article.title}}</h1>
                <span class="date">
                           {{article.date | moment('from', 'now')}}
                </span>
                <p>
                    {{article.content}}
                </p>
                <div class="clearfix"></div>
                <router-link :to="'/editar-articulo/'+article._id" class="btn btn-warning">Editar</router-link>
                <a @click='deleteArticle(article._id)' class="btn btn-danger">Eliminar</a>
            </article>
      </section>
      <Sidebar></Sidebar>
       <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import Sidebar from './Sidebar'
import { Global } from "../Global.js";
import axios from 'axios'
import swal from 'sweetalert'
import Swal from 'sweetalert2';

export default {
name:'Article',
data() {
    return {
        url: Global.url,
        article: null
    }
},
mounted() {
    const articleId = this.$route.params.id
    console.log(articleId)
    
    this.getArticle(articleId)
},
methods: {
        getArticle(articleId){
            axios.get(this.url+'/article/'+ articleId)
                    .then(res=>{
                        console.log(res.status)
                        if(res.status === 200){
                            this.article = res.data.article
                        }
                    })
            },
        deleteArticle(articleId){
        Swal.fire({
                title: 'estas seguro?',
                text: 'una vez borrado ya no podras recuperar el articulo',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, borralo!'
                }).then((result) => {
                if (result.value) {
                     console.log(articleId)
                        axios.delete(this.url+'/article/'+articleId)
                                .then(
                                    res=>{
                                        console.log(res)
                                        swal(
                                                'Articulo borrado',
                                                'El articulo se ha borrado correctamente :)',
                                                'success'
                                            )
                                        this.$router.push('/blog')
                                    })
                    Swal.fire(
                    'Borrado!',
                    'El articulo ha sido borrado.',
                    'success'
                    )
                }
             })
        }
},
components: {
    Sidebar
}

}
</script>

<style>

</style>