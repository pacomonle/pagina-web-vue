import { HomeComponent } from '../../../aprendiendoangular/src/app/components/home/home.component';
<template>
     <div id="slider" :class="{
         'slider-big': home,
         'slider-small': !home
         }">
    
        <h1>{{texto}}</h1>
        
         <router-link to="/blog" class="btn-white" v-if="home">Ir al blog</router-link> 
    </div>
</template>

<script>
export default {
    name: 'Slider',
    data() {
        return {
            
        }
    },
    props:['texto', 'home']
}
</script>

<style>

</style>