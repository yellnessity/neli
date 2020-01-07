<template>
  <div class="header">
  <div class="container-header">
    <div class="logo">
    Neli
    </div>
    <div class="nav">
    <ul>
    <li><router-link to="/"><a href="#"> О нас </a></router-link></li>
    <li><router-link to="/projects"><a href="#"> Работы </a></router-link></li>
    <li><router-link to="/contacts"><a href="#"> Контакты </a></router-link></li>
    </ul>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'NavHeader'
}
</script>

<style scoped>
.header {
color: white;
height: 70px;
width: 100%;
background-color: black;
}
.container-header{
display: flex;
align-items: center;
justify-content: center;
width: 1000px;
height: 100%;
margin: auto;
}
.logo {
flex-grow: 3;
font-family: "Ubuntu";
font-size: 40px;
}
.nav {
flex-grow: 1;
display: flex;
justify-content: flex-end;
}
ul {
  font-family: "Roboto";
  list-style-type: none;
  padding: 0;
  margin: 0;
}

li {
  display: inline-block;
  padding: 0 20px;
  height: 40px;
  margin-top: 22px;
}
a {
text-decoration: none;
color: white;
height: 100%;
}
li:hover, a:active~li {
text-decoration: none;
color: white;
margin-top: 25px;
border-bottom: 4px solid white;
}
</style>
