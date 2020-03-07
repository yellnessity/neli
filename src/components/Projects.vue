<template>
<div class="projects_wrapper">
      <div class="project1">
            <router-link :to="{ name:'project', params: { id: 0, name:'stairs' } }">
            <a href="#" class="project-cover">
                  <div class="project-wrapper">

                  </div>
            </a>
            </router-link>
            <div class="project_title">
                  <div class="stripe"></div>
                  <h2> Лестницы интерьерные </h2>
                  <router-link :to="{ name:'project', params: { id: 0, name:'stairs' } }"><a href="#"> Подробнее > </a> </router-link>
            </div>
      </div>
      <div class="project2">
            <div class="project_title">
                  <div class="stripe"></div>
                  <h2> Ограждения, перегородки, полы из стекла и металла </h2>
                  <router-link :to="{ name:'project', params: { id: 1, name:'borders' } }">
                  <a href="#"> Подробнее > </a></router-link>
            </div>
            <router-link :to="{ name:'project', params: { id: 1, name:'borders' } }">
            <a href="#" class="project-cover">
                  <div class="project-wrapper">
                  </div>
            </a>
            </router-link>
      </div>
      <div class="project3">
            <router-link :to="{ name:'project', params: { id: 2, name:'terraces' } }">
            <a href="#" class="project-cover">
                  <div class="project-wrapper">
                  </div>
            </a>
            </router-link>
            <div class="project_title">
                  <div class="stripe"></div>
                  <h2> Остекление террас </h2>
                  <router-link :to="{ name:'project', params: { id: 2, name:'terraces' } }"><a href="#"> Подробнее > </a></router-link>
            </div>
      </div>
      <div class="project4">
            <div class="project_title">
                  <div class="stripe"></div>
                  <h2> Интерьерные водопады </h2>
                  <router-link :to="{ name:'project', params: { id: 3, name:'waterfalls' } }"><a href="#"> Подробнее > </a></router-link>
            </div>
            <router-link :to="{ name:'project', params: { id: 3, name:'waterfalls' } }">
            <a href="#" class="project-cover">
                  <div class="project-wrapper">
                  </div>
            </a>
            </router-link>
      </div>
      <div class="project5">
            <router-link :to="{ name:'project', params: { id: 4, name:'waterpanels' } }">
            <a href="#" class="project-cover">
                  <div class="project-wrapper">
                  </div>
            </a>
            </router-link>
            <div class="project_title">
                  <div class="stripe"></div>
                  <h2> Водные панели и колонны </h2>
                  <router-link :to="{ name:'project', params: { id: 4, name:'waterpanels' } }"><a href="#"> Подробнее > </a></router-link>
            </div>
      </div>
      <div class="project6">
            <div class="project_title">
                  <div class="stripe"></div>
                  <h2> Дизайнерские светильники </h2>
                  <router-link :to="{ name:'project', params: { id: 5, name:'lamps' } }"><a href="#"> Подробнее > </a></router-link>
            </div>
            <router-link :to="{ name:'project', params: { id: 5, name:'lamps' } }">
            <a href="#" class="project-cover">
                  <div class="project-wrapper">
                  </div>
            </a>
            </router-link>
      </div>
      <div class="project7">
            <a href="#" class="project-cover">
                  <div class="project-wrapper">
                  </div>
            </a>
            <div class="project_title">
                  <div class="stripe"></div>
                  <h2> Малые архитектурные формы </h2>
                  <router-link :to="{ name:'project', params: { id: 6 } }"><a href="#"> Подробнее > </a></router-link>
            </div>
      </div>
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
  name: 'Projects'
}
</script>

<style scoped>
a {
text-decoration: none;
}

.projects_wrapper {
padding: 50px 50px;
display: flex;
    flex-direction: column;
}


.project1, .project2, .project3, .project4, .project5, .project6, .project7{
position: relative;
display: flex;
margin-bottom: 50px;
}

.project-cover {
display: block;
width: 550px;
height: 275px;
background-size: cover;
background-position: inherit;
}

.project1 .project-cover {
background-image: url(img/stairs_projects.jpg);
}

.project2 .project-cover {
background-image: url('https://drive.google.com/uc?export=view&id=1z-aPjZfZ5OOn17uTxuYg3UtiA1zQ26iD');
}

.project3 .project-cover {
background-image: url('https://drive.google.com/uc?export=view&id=16bHMXprXf3PBYBClzNSFaExgYfm86WSx');
}

.project4 .project-cover {
background-image: url('https://drive.google.com/uc?export=view&id=1VdOtk8LXLSeFWbTqdYfKe_qOIFyVidU2');
}

.project5 .project-cover {
background-image: url('https://drive.google.com/uc?export=view&id=1ov1vWtQBnKfOqf1HgR3Kb3pxNn5Bt-Am');
}

.project6 .project-cover {
background-image: url('https://drive.google.com/uc?export=view&id=1gmTRhDNdGMUlPY2LjlkzMTED7UFQJJEh');
}

.project-wrapper {
background-color: rgba(0,0,0,0.2);
width: 100%;
height: 100%;
}

.project-cover:hover > .project-wrapper {
background-color: rgba(0,0,0,0.6);
}

.project_title {
margin: 0 70px;
font-family: Ubuntu;
font-size: 27px;
width: 50%;
}

.project_title a {
font-family: Roboto;
font-size: 15px;
color: #696969;
}

.project_wrapper a {
display: none;
}


.stripe {
margin-top: 10px;
height: 5px;
width: 150px;
background-color: black;
}

@media (max-width: 769px) {

body {
  margin: 0;
}

.projects_wrapper {
  padding: 0;

}

.project-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.project-wrapper::after {
    font-family: Roboto;
    color: white;
    font-size: 23px;
    width: 300px;
    text-align: center;
}

.project1 .project-wrapper::after {
  content: "Лестницы интерьерные";
}

.project2 .project-wrapper::after {
  content: "Ограждения, перегородки, полы из стекла и металла";
}

.project3 .project-wrapper::after {
  content: "Остекление террас";
}

.project4 .project-wrapper::after {
  content: "Интерьерные водопады";
}

.project5 .project-wrapper::after {
  content: "Водные панели и колонны";
}

.project6 .project-wrapper::after {
  content: "Дизайнерские светильники";
}

.project7 .project-wrapper::after {
  content: "Малые архитектурные формы";
}

.project1, .project2, .project3, .project4, .project5, .project6, .project7 {
  width: 100%;
  margin: 0;
  display: block;
}

.project-cover {
  width: auto;

}

.project_title {
  display: none;
}


}

</style>
