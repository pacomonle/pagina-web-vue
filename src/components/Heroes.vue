<template>
<div class='general'>
  
    <div class="center">
    
      <section id="content">
                  <h2 class="subheader">{{misDatos | mayusculas | concatYear('aqui empezo todo')}}</h2>
        <div class="hello">
          <p>
            For a guide and recipes on how to configure / customize this project,<br>
            check out the
            <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
          </p>
          <h3>Installed CLI Plugins</h3>
          <ul>
            <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
            <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
          </ul>
          <h3>Essential Links</h3>
          <ul>
            <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
            <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
            <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
            <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
            <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
          </ul>
          <h3>Ecosystem</h3>
          <ul>
            <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
            <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
            <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
            <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
            <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
          </ul>
        </div> 
        <hr>
        <div id='atricles'>
          <h1>MI HEROE FAVORITO ES: {{miHeroe}} </h1>
          <div class='article-item' v-for="(heroe, index) in heroesMayuscula" :key="index">
            <Heroe :heroe='heroe'
                v-on:heroe-favorito='haLLegadoHeroeFavorito(heroe)'></Heroe>
          </div>
        </div>
        </section>
         <Sidebar></Sidebar>
       <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import Heroe from "./Heroe";
import Sidebar from "./Sidebar";

export default {
  name: 'HelloWorld',
  components:{
   Heroe,
   Sidebar
  },
  props: {
 
  },
  data() {
    return {
      nombre: 'Francisco',
      apellido: 'Monleon',
      miHeroe:null,
      heroes:[
        {nombre: 'Superman', poder:'volar', imagen:'https://th.bing.com/th/id/OIP.i7RihyU7Se004qk6aS0wQwHaJ4?w=198&h=264&c=7&o=5&pid=1.7'},
        {nombre: 'Spiderman', poder:'trepar', imagen:'https://th.bing.com/th/id/OIP.374uyDtmfO4sGQ2LzffwkgHaEK?w=304&h=180&c=7&o=5&pid=1.7'},
        {nombre: 'Batman', poder:'fuerza', imagen:'https://th.bing.com/th/id/OIP.EWCnLExm-LyZ5qeOxL3ePAHaIr?w=198&h=232&c=7&o=5&pid=1.7'}
      ]
    }
  },
  filters:{
    mayusculas(value){
       return value.toUpperCase()
    },
    concatYear(value, message){
      const date = new Date()
      return value + '-' + date.getFullYear() + '-' + message
    }
  },
  computed:{
     heroesMayuscula(){
         this.heroes.forEach(element => {
             element.nombre = element.nombre.toUpperCase()
         });
         return this.heroes
     },
     misDatos(){
       return this.nombre + '-' + this.apellido
     }
  },
  mounted:{
 
  },
  methods: {
    haLLegadoHeroeFavorito(heroe){
      // console.log(heroe.nombre)
      this.miHeroe= heroe.nombre
    
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
