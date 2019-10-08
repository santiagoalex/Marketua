<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Marketua</span>
      </v-toolbar-title>
      <div class="mr-2">
          <Search v-on:formSubmit="list"></Search>
      </div>
    </v-app-bar>
  <v-content>
    <List  :object='info' 
    :method='nameSeller'/>    
    </v-content>
        <router-view>
    </router-view>
  </v-app>
</template>

<script>
import Home from './components/home.vue';
import Search from './components/search.vue';
import List from './components/list.vue';

export default {
  name: 'App',
  components: {
    Home,
    Search,
    List,
  },
 data: function() {
    return {
      marketList: "",
      userId: "",
      product: [],
      price: [],
      sellerId: [],
      nameV: [],
      info: [{}]
    };
  },


    methods: {

    list: async function(varSearch) {
    //let Url = "https://api.mercadolibre.com/sites/MCO";
    let Url = "https://api.mercadolibre.com"; 
    this.$http
        .get(`${Url}/sites/MCO/search?q=${varSearch}`)
        .then(res => {
            this.info= res.data.results
        });
        console.log("despues del get");  
        console.log(this.info, "aja"); 
    },

    nameSeller: function(identification){
        
      let Url = "https://api.mercadolibre.com";
      this.$http
      .get(`${Url}/users/${identification}`)
      .then(resp => {
        this.userId=resp.body['nickname'];
        this.nameV[0]=this.userId;
      })
      return  this.nameV[0].toString()
    }
  }
};
</script>
