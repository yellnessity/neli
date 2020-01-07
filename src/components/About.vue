<template>
  <div class=about>
  <div class="banner">
        <div class="description">
            <div class="description-holder">
            <h1>Нестандартные элементы в интерьере</h1>
            <div class="inner">
            В современном интерьере популярно использовать самые разнообразные
            декоративные элементы, которые способны преобразить дизайн помещения
            и придать ему особый индивидуальный стиль.
            </div>
            <router-link to="/projects"><a href="#">Посмотреть работы</a></router-link>
            </div>
        </div>
  </div>
  <div class="container">
        <div class="projects">
              <div class="title-projects">
                    <h2> Что мы изготовляем </h2>
                    <span> Придадим Вашему интерьеру особый стиль.</span>
              </div>
              <router-link :to="{ name:'project', params: { id: 0, name:'stairs' } }">
              <a href="#" class="block1">
                    <div class="block-wrapper">
                    <span>Лестницы</span>
                    </div>
              </a>
              </router-link>
              <router-link :to="{ name:'project', params: { id: 1, name:'stairs' } }">
              <a href="#" class="block2">
                    <div class="block-wrapper">
                    <span>Водные панели</span>
                    </div>
              </a>
              </router-link>
              <router-link :to="{ name:'project', params: { id: 2, name:'stairs' } }">
              <a href="#" class="block3">
                    <div class="block-wrapper">
                    <span>Лайтбоксы</span>
                    </div>
              </a>
              </router-link>
        </div>
        <div class="advantages">
              <div class="adv-cover">
                    <div class="adv-overlay">
                          <h2> Почему мы? </h2>
                    </div>
              </div>
              <div class="list">
                    <div class="adv1">
                          <h2>Надёжность</h2>
                          <p>Мы работаем с 1996 года</p>
                    </div>
                    <div class="adv2">
                          <h2>На все руки</h2>
                          <p>Наши мастера выполнят
                          работу в соответствии с Вашими требованиями.</p>
                    </div>
                    <div class="adv3">
                          <h2>Время выполнения</h2>
                          <p>Мы выполним Ваш заказ
                          в кратчайшие сроки</p>
                    </div>
              </div>
        </div>
        <div class="clients">
              <div class="clients-cover">
                    <h2> Станьте нашим клиентом! </h2>
              </div>
              <div class="clients-list">
                    <p> Среди наших клиентов: </p>
                    <ul>
                          <li>ТЦ "Гринвич"</li>
                          <li>ТЦ "Алатырь"</li>
                          <li>ТЦ "Галерея 11"</li>
                          <li>ТЦ "Ханой"</li>
                          <li>ЖК "Правобережный"</li>
                          <li>Сеть стоматологий "Белая Ладья"</li>
                    </ul>
              </div>
        </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>

.about {
flex: 1 0 auto;
}

.banner {
height: 400px;
margin: 0 auto;
background: url(img/stairs.jpg) 50% 80% no-repeat;
background-size: 1400px;
width: auto;
position: relative;
}

.description {
background-color: rgba(255,255,250,0.4);
height: 100%;
width: 100%;
margin: 0 auto;
position: absolute;
}

.description-holder {
width: 1000px;
position: relative;
margin: 50px auto;
}

h1 {
font-family: Ubuntu;
width: 720px;
margin: 0;
font-weight: 300;
font-size: 45px;
}

.inner {
margin-top: 25px;
font-family: Roboto;
width: 750px;
}

.description-holder a {
width: 240px;
height: 50px;
margin-top: 30px;
background-color: black;
display: block;
text-align: center;
color: white;
font-family: Roboto;
text-decoration: none;
font-size: 17px;
line-height: 48px;
}

.container {

}

.projects{
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
margin: 0 auto;
width: 1000px;
height: 485px;
margin-top: 50px;
margin-bottom: 50px;
}

.title-projects h2 {
font-size: 35px;
font-weight: 700;
width: 280px;
height: 90px;
letter-spacing: -1px;
padding-left: 20px;
font-family: Ubuntu;
border-left: 7px solid black;
}

.title-projects span {
font-family: Roboto;
color: #696969;
width: 200px;
display: block;
}

.title-projects, .block1, .block2, .block3 {
position: relative;
display: block;
width: 485px;
height: 235px;
}

.block1 {
background: url(img/stairs_projects.jpg) 35% 35%;
}

.block2 {
background: url(img/water_panels_projects.jpg) 50% 70%;
background-size: 500px;
}

.block3 {
background: url(img/lightboxes_projects.jpg) 35% 15%;
background-size: 500px;
}


.block1:hover > .block-wrapper, .block2:hover > .block-wrapper, .block3:hover > .block-wrapper {
background-color: rgba(0,0,0,0.6);
}

.block-wrapper {
background-color: rgba(0,0,0,0.2);
width: 100%;
height: 100%;
}

.block1 span, .block2 span, .block3 span {
position: absolute;
font-size: 20px;
font-family: Roboto;
color: white;
text-decoration: none;
text-align: bottom;
bottom: 0px;
padding: 20px 30px;
}

.advantages{
display: flex;
margin: 0 auto;
width: auto;
height: 350px;
margin-bottom: 50px;
}

.adv-cover {
width: 50%;
background-image: url(img/advantages-cover.jpg);
height: 100%;
background-position: 15% 45%;
background-size: 800px;
position: relative;
}

.adv-overlay {
width: 100%;
height: 100%;
background-color: rgba(255,255,255,0.5);
position: absolute;
}

.adv-cover h2 {
font-size: 40px;
width: 140px;
font-family: Ubuntu;
font-weight: 700;
border-left: 7px solid black;
margin: 20% auto;
padding-left: 15px;
height: 93px;
}

.list {
margin-left: 75px;
border-left: 5px solid black;
height: auto;
width: 50%;
display: flex;
align-self: center;
flex-direction: column;
}

.adv1,.adv2,.adv3 {
background-size: 60px;
background-repeat: no-repeat;
background-position: 10% 50%;
}

.adv2 {
margin-top: 35px;
margin-bottom: 35px;
}

.adv1 > h2, .adv2 > h2, .adv3 > h2 {
font-family: Ubuntu;
font-size: 25px;
margin-left: 22%;
letter-spacing: -1px;
margin-top: 0;
}

.adv1 > p, .adv2 > p, .adv3 > p {
font-family: Roboto;
font-size: 15px;
margin-left: 22%;
margin-bottom: 0;
margin-top: -10px;
color: #696969;
width: 200px;
}

.adv1 {
background-image: url(img/verified.png);
}

.adv2 {
background-image: url(img/tools.png);
}

.adv3 {
background-image: url(img/clock.png);
}

.clients{
display: flex;
margin: 0 auto;
width: auto;
height: 250px;
margin-bottom: 50px;
}

.clients-cover {
width: 50%;
height: 100%;
position: relative;
}

.clients-cover h2 {
font-size: 40px;
width: 305px;
font-family: Ubuntu;
font-weight: 700;
position: absolute;
margin-left: 37%;
border-left: 7px solid black;
padding-left: 15px;
height: auto;
}

.clients-list {
    margin-left: 75px;
    height: auto;
    width: 50%;
    display: flex;
    flex-direction: column;
}

.clients-list p {
font-family: Ubuntu;
font-size: 25px;
margin-top: 40px;
font-weight: bold;
letter-spacing: -1px;
}

.clients-list li {
font-family: Roboto;
font-size: 15px;
color: #696969;
}

</style>
