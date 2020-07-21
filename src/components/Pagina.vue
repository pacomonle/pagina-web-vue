<template>
<div class='general'>
   <Slider texto='Pagina de pruebas'></Slider>
    <div class="center">
    <section id="content">
                <h2 class="subheader">Pagina de pruebas</h2>
                <h3>id desde url: {{id_desde_url}}</h3>
                <button @click='actualizarNombre'>Actualizar Nombre</button>
                <button @click='redirigir'>Redirigir</button>
                <h4>{{nombre}}</h4>
    </section>
    <Sidebar></Sidebar>
       <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import Slider from './Slider'
import Sidebar from "./Sidebar"

export default {
 name:'Pagina',
 data() {
     return {
         id_desde_url: null,
         nombre: 'Paco Monleon'
     }
 },
 components:{
     Slider,
     Sidebar
 },
 created(){
    console.log('created')
 },
 mounted() {
     this.id_desde_url= this.$route.params.id
 },
 updated() {
     console.log('updated')
 },
 methods: {
     actualizarNombre(){
        this.nombre = 'NolitoxD'
        console.log(this.nombre)
     },
     redirigir(){
         // redirigir a otra ruta
        this.$router.push('/home')
       // this.$router.push({name: 'pagina', params:{id: "redirigiendo"}})
     }
 }
}
</script>

<style>

</style>