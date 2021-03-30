<template>
  <div class="hello">
<div class="bar">
  <a>
<img src="./../assets/logo-app.png" alt="">
  </a>
  

<div class="bar-contant" id="nav">
<!-- <div class="response" id="nav"> -->
 <router-link to="/" tag="li">Home</router-link>
 <router-link to="/login" tag="li">Features</router-link>
 <router-link to="/" tag="li">Screens</router-link>
 <router-link to="/" tag="li">Team</router-link>
 <router-link to="/" tag="li">Support</router-link>
 <router-link to="/" tag="li">Hello</router-link>

</div>
<p class="icon" @click="topfunction()">☰</p>
  </div>
  <div class="content">
    <img src="./../assets/IMG2954.JPG" alt="">
  </div>
  <div class="bottom" id="bottom"></div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: ""
    }
  },
  mounted()
  {
    window.onscroll=function()
    {
      Scroll();
    }
  },
  methods:
  {
    // Scroll()
    // {
    //   var bottom=document.getElementById("bottom");
    //   if((document.body.screenTop>0) || (document.documentElement.scrollTop>0))
    //   {
    //     // bottom.style.
    //   }
    // },
    topfunction()
    {
      var nav=document.getElementById("nav");
      if(nav.className==="bar-contant")
      {
        nav.className="response";
      }
      else
      {
        nav.className="bar-contant";
      }
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  list-style: none;
  text-decoration: none;
}
.bar{
  width: 100%;
  height: 10vh;
  display: flex;
  flex-direction:row;
  justify-content: space-between;
}
.bar-contant
{
  width: 65%;
  display: flex;
  justify-content: space-around;
}
.bar li
{
  display: inline-block;
  line-height: 10vh;
  font-size: 1.3rem;
  padding: 0 1rem;
  cursor: pointer;
}
.bar li:first-child
{
  background-color: rgb(221, 84, 112);
  color: white;
  border-radius: 5%;
}
.bar li:hover{
    background-color: rgb(221, 84, 112);
  color: white;
  border-radius: 5%;
}
.router-link-active {
  text-decoration: none;
}
.icon
{
  display: none;
}

@media screen and (max-width: 888px)
{
  .bar-contant
  {
    display: none;
  }
  .icon
  {
    color: rgb(20, 20, 20);
    float:right;
    display: block;
    font-size: 2rem;
    margin-top: 0;
    cursor: pointer;
  }
.bar .response
{
  width: 50%;
  z-index: 1000;
}
.bar .response li
{
  color:black;
  background-color: rgb(255, 255, 255);
  text-align: center;
  display: block;
  width: 100%;
  border-radius: none;
}
.bar .response li:hover
{
  color:rgb(255, 255, 255);
  background-color: rgb(0, 0, 0);
  border-radius: none;
}
}
@media screen and (min-width: 888px)
{
.response
{
  width: 65%;
  display: flex;
  justify-content: space-around;
}
.bar .response li
{
  display: inline-block;
  line-height: 10vh;
  font-size: 1.3rem;
  padding: 0 1rem;
  cursor: pointer;
}
.bar .response li:first-child
{
  background-color: rgb(221, 84, 112);
  color: white;
  border-radius: 5%;
}
.bar .response li:hover{
    background-color: rgb(221, 84, 112);
  color: white;
  border-radius: 5%;
}
}

</style>
