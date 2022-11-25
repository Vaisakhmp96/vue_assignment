<template>
  <div id="app">
  

   <div>
    <b-nav tabs fill>
      <b-nav-item active><router-link to="/">About</router-link></b-nav-item>
      <b-nav-item active><router-link to="/dataCalculator">Hobbies</router-link></b-nav-item>
      <b-nav-item active><router-link to="/AchiVements">Achivements</router-link></b-nav-item>
      <b-nav-item active><router-link to="/conTacts">Contacts</router-link></b-nav-item>
      </b-nav>
     </div>
      
      
      <router-view></router-view>
  </div>
  </template>
  
  <script>
//   import dataCalculator from './components/dataCalculator.vue';

import { RouterLink } from 'vue-router';

//   import About from './components/AboutPage.vue'
  export default {
      name: 'App',
      components: {
    RouterLink
}
  };
  </script>
  
  <style scoped>

  /* header {
  width: 100%;
  height: 5rem;
  background-color: #11005c;
  margin: 0px;
  padding: 0px;
}

nav {
  height: 100%;
  margin: 0px;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 2rem;
}

a {
  text-decoration: none;
  background: transparent;
  border: 1px solid transparent;
  cursor: pointer;
  color: white;
  padding: 0.5rem 1.5rem;
  display: inline-block; */


a:hover,
a:active,
a.active {
  color: #f1a80a;
  border-color: #f1a80a;
  background-color: #1a037e;
}
  </style>
  