// Home.vue

<template>
    <v-container v-on:click="ja">

    <div class="card centralizar" style="width: 20rem;">
        <img class="card-img-top" :src="imgUrl" alt="Card image cap">
        <div class="card-body">
            <h1 class="card-title">{{title}}</h1>
            <p class="card-text">Su vendedor : {{seller}}</p>
            <p class="card-text">Su precio : ${{price}}</p>
        </div>
    </div>
    


    
    </v-container>
</template>
<script>


export default {
    name: 'Item',
    props: {
        title: String,
        price: Number,
        seller: String,
        imgUrl: String
    },
    methods: {
        ja:function() {
            console.log("funciona");
            
        },

    }

};
</script>
<style scoped>

</style>