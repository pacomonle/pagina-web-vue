<template src='./CreateArticle.html'></template>

<script>
import Slider from './Slider'
import Sidebar from './Sidebar'
import axios from 'axios'
import { Global } from "../Global";
import Article from "../models/Article";
import { required } from "vuelidate/lib/validators";
import swal from 'sweetalert'

export default {
name: 'CreateArticle',
data() {
    return {
        url: Global.url,
        article: new Article('','',null,''),
        submitted:false,
        file:''
    }
},
validations:{
  article:{
      title:{
          required
        },
        content:{
            required
        }
  }
 
},
mounted() {
  console.log(this.article)
},
methods: {
  fileChange(){
    // recoger el fichero del input
      this.file= this.$refs.file.files[0]
      console.log(this.file)
  },
  save(article){
    console.log(article)
    this.submitted=true
    this.$v.$touch()
    if(this.$v.$invalid){
      return false
    }else{
     
      axios.post(this.url+'save', this.article)
              .then(response => {
                console.log(response.data)
                if(response.data.status==='success'){

                 // subida del archivo del formulario para pasarlo por peticion AJAX
                 if(this.file !== '' && this.file !== null && this.file !== undefined){
                  const formData = new FormData()
                  formData.append(
                    'file0',
                    this.file,
                    this.file.name
                  )
                  console.log(formData)
                  console.log(response.data.article._id)
                  let articleId= response.data.article._id
                  axios.post(this.url+'upload-image/'+articleId, formData)
                       .then(res=>{
                         console.log(res.data)
                         if(res.data.article){
                              swal(
                                'Articulo creado',
                                'El articulo se ha creado correctamente :)',
                                'success'
                              )
                              this.article = res.data.article
                              this.$router.push('/blog')
                         }else{
                           //mostrar alerta error
                            swal(
                                'Articulo fallido',
                                'El articulo n0 se ha podido crear :(',
                                'error'
                              )
                         }
                       })
                       .catch(error=>{
                         console.log(error)
                       })
                 }else{
                    swal(
                                'Articulo creado',
                                'El articulo se ha creado correctamente :)',
                                'success'
                              )
                     this.article = response.data.article
                     this.$router.push('/blog')
                 }
                 
                }
              })
              .catch(error => {
                console.log(error)
              })
    }
   
  }
},
components:{
   Slider,
   Sidebar 
 },


}

</script>

<style>

</style>