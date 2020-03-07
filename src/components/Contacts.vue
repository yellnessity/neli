<template>
<div class="contacts-block">
  <div class="contacts-wrapper">
    <div class="contacts-title">
      <h2>Контакты</h2>
      <div class="stripe"></div>
    </div>
    <div class="contacts-mobile-title">
      <h2>Наши<br>контакты</h2>
    </div>
    <p class="subtitle"> Сделайте первый шаг к осуществлению Вашей задумки!</p>
    <div class="contacts-text">

      <p> г. Екатеринбург, <br>
      ул. Серафимы Дерябиной, <br>
      д. 24, оф. 9032</p>

      <p>+7 982 707 7 207 <br>
      info@neli66.ru</p>

      <div class="contacts-buttons">
      <a href="#"><img width="15px" height="15px" src="./img/instagram.png" /></a>
      <a href="#"><img width="15px" height="15px" src="./img/envelope.png" /></a>
      </div>

    </div>
    <div class="buttons">
    <a href="#"><img width="15px" height="15px" src="./img/instagram.png" /></a>
    <a href="#"><img width="15px" height="15px" src="./img/envelope.png" /></a>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Contacts'
}
</script>

<style scoped>
.contacts-block{
height: 80vh;
width: 100%;
background: url(img/contacts-back.jpg) no-repeat;
flex: 1 0 auto;
display: block;
}

.contacts-wrapper {
height: 400px;
width: 1000px;
background-color: white;
position: absolute;
right: 0px;
bottom: 100px;
}


h2{
font-size: 40px;
letter-spacing: -1px;
font-family: Ubuntu;
font-weight: 500;
line-height: 1;
position: absolute;
left: 20%;
top: 15px;
}

.subtitle{
position: absolute;
top: 23%;
font-family: Roboto;
color: black;
left: 20%;
font-size: 14px;
}

.contacts-text {
position: absolute;
left: 20%;
top: 38%;
display: flex;
flex-direction: row;
font-family: Roboto;
color: #696969;
}

.contacts-text p {
padding-right: 100px;
line-height: 2em;
font-size: 14px;
}

.buttons {
left: 20%;
position: absolute;
bottom: 12%;
display: flex;
flex-direction: row;
}

.buttons a {
margin-right: 20px;
background-color: black;
width: 40px;
height: 40px;
display: flex;
justify-content: center;
align-items: center;
}

@media (max-width: 769px) {

  .contacts-block {
  height: 100vh;
}

  .contacts-wrapper {
    height: 100%;
    width: 100%;
    bottom: 0px;
    display: flex;
    flex-direction: column;
    background: url(img/contacts-back.jpg);
      background-size: 1000px;
      background-position: 35% 100px;
  }

  .contacts-title {
    display: none;
  }

  .contacts-mobile-title {
    display: block;
    height: 170px;
    background-color: white;
    font-weight: 700;
  }

  h2 {
    font-weight: 700;
    letter-spacing: 0;
  }

  .subtitle {
    display: none;
  }

  .contacts-text {
    position: relative;
    display: flex;
    align-self: flex-end;
    flex-direction: column;
    font-family: Roboto;
    color: #696969;
    width: 250px;
    background-color: white;
    padding: 50px 35px;
    margin-top: 15%;
    left: 0;
    right: 0;
    top: 0;
  }

  .contacts-text p {
    padding: 0;
  }

  .buttons {
    display: none;
  }

  .contacts-buttons {
  display: flex;
  flex-direction: row;
  margin-top: 30px;

  }

  .contacts-buttons a {
  margin-right: 20px;
  background-color: black;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  }
}

</style>
