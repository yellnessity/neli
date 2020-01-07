import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import About from './components/About.vue'
import Projects from './components/Projects.vue'
import Project from './components/Project.vue'
import Contacts from './components/Contacts.vue'

require('./components/globals');
Vue.use(VueRouter);

var router = new VueRouter({
  routes: [
    { path: '/', component: About },
    { path: '/projects', component: Projects },
    { path: '/project/:name', name:'project', component: Project },
    { path: '/contacts', component: Contacts }
  ]
})

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
