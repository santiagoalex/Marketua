<template>
    <div id="busqueda">
        <form v-on:submit="formSubmit">
            <input type="text" v-model="list" placeholder="Search..">
            <button >
                <v-icon>fas fa-search</v-icon>
            </button>
        </form>
    </div>
</template>
<script>
export default {
    name: 'Search',
    data(){
      return{
          list:''
      }
    },
    methods:{
      formSubmit(e){      
        this.$emit('formSubmit', this.list);
        e.preventDefault();
      }
    }

}
</script>
<style scoped>

</style>