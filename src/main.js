import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuelidate from 'vuelidate'
import LastArticles from "./components/LastArticles.vue";
import Heroes from "./components/Heroes.vue";
import MiComponente from "./components/MiComponente.vue";
import Search from "./components/Search.vue";
import Pagina from "./components/Pagina.vue";
import Article from "./components/Article.vue";
import Formulario from "./components/Formulario.vue";
import Blog from "./components/Blog.vue";
import Redirect from "./components/Redirect.vue";
import CreateArticle from "./components/CreateArticle.vue";
import EditArticle from "./components/EditArticle.vue";
import Error404 from "./components/Error404.vue";


Vue.config.productionTip = false

Vue.use(Vuelidate)
Vue.use(VueRouter)

const moment = require('moment')
require ('moment/locale/es')
Vue.use(require('vue-moment'), {moment})


const routes = [
{path: '/home', component: LastArticles},
{path: '/ultimos-articulos', component: LastArticles},
{path: '/formulario', component: Formulario},
{path: '/blog', component: Blog},
{path: '/crear-articulo', name:'create', component: CreateArticle},
{path: '/editar-articulo/:id', name:'edit', component: EditArticle},
{path: '/articulo/:id', name:'articulo', component: Article},
{path: '/buscador/:searchString', component: Search},
{path: '/redirect/:searchString', component: Redirect},
{path: '/pagina/:id?', name:'pagina', component: Pagina},
{path: '/hola-mundo', component: Heroes},
{path: '/mi-componente', component: MiComponente},
{path: '/', component: LastArticles},
{path: '*', component: Error404}

]

const router = new VueRouter({
  routes,
  mode:'history'
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
