<template>
  <article>
      <div class="image-wrap">
        <img :src="heroe.imagen" alt="imagen">
      </div>
      <h2>Heroe: {{heroe.nombre}}</h2>
      <span class='date'>
          <h2 :class="{ podergreen : heroe.poder === 'volar',
                        poderred : heroe.poder === 'trepar',
                        poderblue : heroe.poder === 'fuerza'
          }">Poder: {{heroe.poder}}</h2>
      </span>
      <input type="button" value="marcar como favorita"
      @click='pasarFavoritaAlPadre(heroe)'/>
    </article>
    
</template>

<script>
export default {
    name: 'Heroe',
    props:['heroe'],
    data() {
        return {
        
       }
    },
    methods: {
      pasarFavoritaAlPadre(heroe){
        console.log(heroe) 
        this.$emit('heroe-favorito', this.heroe) 
      }
    },
}
</script>

<style scoped>
.podergreen{
  background: green;
  color: white;
  padding: 5px;
  text-align: center;
  width: 200px;
}
.poderred{
  background: red;
  color: white;
  padding: 5px;
  text-align: center;
  width: 200px;
}
.poderblue{
  background: blue;
  color: white;
  padding: 5px;
  text-align: center;
  width: 200px;
}
</style>>

