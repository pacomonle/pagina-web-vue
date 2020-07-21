<template>
  <div class='general'>
   
    <div class="center">
    <section id="content">
      <h2 class="subheader">Bienvenido</h2>

      <h1>{{titulo}}</h1>
      <h4>{{subtitulo}}</h4>
      <hr />
      <h2>Reactividad</h2>
      <input type="text" v-model="nombre" />
         {{nombre}}
      <pre>
         {{$data}}
      </pre>
      <hr />
      <h2>Directivas Concidcionales</h2>
      <input type="number" v-model='edad'>
         mi edad es: {{edad}}
         <p style="color: red; font-weight:bold;" v-if="edad && edad>=18">
           NolitoxD te dice: ERES MAYOR DE EDAD!!!
         </p>
         <p style="color: green; font-weight:bold;" v-else>
           NolitoxD te dice: ERES MENOR DE EDAD!!!
         </p>
         <hr>
         <h2>Directiva iterativa</h2>
         <ol>
            <li v-for="(heroe, index) in heroes" :key="index">{{heroe}}</li> 
         </ol>
     </section>
      <Sidebar></Sidebar>
     <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import Sidebar from "./Sidebar";

export default {
  name: "MiComponente",
  components:{
    Sidebar
  },
  data() {
    return {
      titulo: "Mi Componente",
      subtitulo: "Soy el subtitulo de mi componente",
      nombre: "",
      edad: 20,
      heroes: ['Batman','Superman','Spiderman','Capitan AMerica']
    };
  }
};
</script>

<style>
</style>