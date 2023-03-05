<template>
    <div class="book">
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/book">book</router-link>
      </nav>
      <h1>book book book</h1>
      <img id="poke"  alt="Vue logo" :src="imgUrl"/>
      <h1>{{ getStateTitle }}</h1>
      <button @click="fn_changeTitle">Click</button>
      <hr />

    </div>
  </template>
<script>
// import { createNamespacedHelpers } from 'vuex';

// const bookHelper = createNamespacedHelpers('book');

export default{
    data(){
        return {
            imgUrl : require('../assets/logo.png'),
        }
    },
    methods:{
        fn_changeTitle(){
            this.$store.dispatch('callBookMutation', { newTitle : '망나뇽' });
            this.imgUrl = require('../assets/logo2.png');
        },

    },
    computed :{
        getStateTitle(){
            return this.$store.getters.getTitle;
        },
        // ...bookHelper.mapGetters([
        //     'getTitle'
        // ])
    },
}
</script>

<style scoped>
#poke{
    width : 250px;
    height: 200px;
}
</style>