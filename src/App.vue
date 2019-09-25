<template>
  <div id="app">
      <nav>     
          <router-link to='/'>Home</router-link> 
          <router-link to='/search'>busqueda</router-link>
          <router-link to='/shoppingCar'>carrito</router-link>
          <router-link to='/item'>item</router-link>
         <router-view /> 
    </nav>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Home from './components/home.vue';
import Item from './components/item.vue';
import ShoppingCar from './components/shoppingCar.vue';
import Search from './components/search.vue';
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'


export default {
  name: 'app',
components: {
    
  }
}
</script>

<style>

</style>
