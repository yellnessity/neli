<template>
  <div id="app">
  <nav-header></nav-header>
  <router-view></router-view>
  <contacts-footer></contacts-footer>
  </div>
</template>

<script>
import About from "./components/About";
import Projects from "./components/Projects";
import Project from "./components/Project";
import Contacts from "./components/Contacts";

export default {
  name: 'app',
  components: {About, Projects, Contacts, Project}
}
</script>

<style>
#app {
  margin: 0;
  padding:0;
}
</style>
