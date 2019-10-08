<template>
 <v-container v-on:click="ja">
    <router-link to=/shoppingCar >
    <div>
        <h1>
            escriba el articulo de que desea comprar
        </h1>
        <div class="list-group-item">
            <Item v-for="(obj, index) in object" 
            :key="index" 
            :title="obj.title" 
            :price="obj.price"
            :seller="method(obj.seller.id)" 
            :imgUrl="obj.thumbnail">
            </Item>
        </div>
    </div>
    </router-link>
    <router-view>
    </router-view>
    </v-container>
</template>
<script>
import Item from './item.vue';

export default {
    name: 'List',
    props: ['object', 'method', 'string'],
    components: {
       Item
    },
        methods: {
        ja:function() {
            console.log("funciona");
            
        },
}
}
</script>
<style scoped>

</style>