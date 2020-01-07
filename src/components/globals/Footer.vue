<template>
  <div class="footer">
  <div class="container-footer">
    <div class="logo">
    <p>Neli</p>
    </div>
    <div class="address">
      <p> г. Екатеринбург
      ул. Серафимы Дерябиной,
      д.24, оф.9032 </p>
    </div>
    <div class="contacts">
    <div class="telephone">8-982-707-7-207</div>
    <div class="mail">info@neli66.ru</div>
    </div>
    <a href="#" class="instagram"><img src="src/components/img/instagram.png" /></a>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.footer {
color: white;
height: 100px;
min-width: 100%;
background-color: black;
flex: 0 0 auto;
}
.container-footer{
display: flex;
align-items: center;
justify-content: center;
height: 100%;
margin: auto;
}
.logo {
font-family: "Ubuntu";
font-size: 40px;
height: 80px;
border-right: 5px solid white;
}

.logo p {
padding-right: 100px;
margin-top: 18px;
}

.address p, .contacts, .instagram {
  font-family: "Roboto";
  padding-left: 130px;
  font-size: 14px;
  width: 155px;
  display: flex;
  align-items: center;
}

.contacts {
flex-direction: column;
align-self: center;
align-items: flex-start;
justify-content: space-evenly;
}

.telephone, .mail {
padding-left: 30px;
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
