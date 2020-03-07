<template>
  <div class="project" v-if="project">
    <h2> {{ project.title }} </h2>
    <p> {{ project.body }} </p>

    <gallery v-for="image in project.images" :images="image" :thumbnail="image[0]"></gallery>

  </div>
</template>

<script>

var projects_posts = require('../projects')

module.exports = {
  data: function() {
    return {
      projects: projects_posts,
      project: null
    }
  },
  created: function() {
    var projectId = this.$route.params.id
    this.project = this.projects[projectId]
  },
  name: 'Project'
}


</script>

<style scoped>

.project {
display: flex;
flex-direction: column;
padding: 50px 70px;
}

h2 {
font-family: Ubuntu;
font-size: 44px;
width: 900px;
margin-top: 0;
}

p {
font-family: Roboto;
color: #696969;
margin-bottom: 30px;
width: 800px;
}

.image {
background-size: cover;
background-repeat: no-repeat;
background-position: center center;
display: block;
width: 900px;
height: 400px;
}

.another-class {
background-color: transparent;
}

@media (max-width: 769px) {

p {
  width: 100%;
}

}

</style>
