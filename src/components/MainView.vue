<template>
  <ul>
    <li class="box1">Lorem, isum.</li>
    <li class="box2">Lorem.</li>
    <li class="box3">Lem, dolr.</li>
    <li class="box4">Lorem, ips.</li>
    <li class="box5">Lor</li>
    <li class="box6">Lorem sit.</li>
    <li class="box7">Lorem eaque.</li>
    <li class="box8">lore</li>
    <li class="box9">lorem</li>
  </ul>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    props: ["id", "price", "src", "name", "desc"]
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  font-family: Arial, Helvetica, sans-serif;
}
ul {
  width: 960px;
  margin: auto;
  padding: 100px 0;
  display: flex;
  flex-wrap: wrap;
}
li {
  width: 200px;
  height: 200px;
  text-align: center;
  line-height: 200px;
  margin: 0 60px -40px;
  position: relative;
  font-size: 30px;
}
li::before {
  content: "";
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  transform: rotate(45deg);
}
li:nth-child(n + 4) {
  left: 160px;
}
li:nth-child(n + 7) {
  left: 0;
}
.box1::before {
  background-color: #D8DBE2;
}
.box2::before {
  background-color: #A9BCD0;
}
.box3::before {
  background-color: #58A4B0;
}
.box4::before {
  background-color: #DBDFFD;
}
.box5::before {
  background-color: #9BA3EB;
}
.box6::before {
  background-color: #646FD4;
}
.box7::before {
  background-color: #FAF0D7;
}
.box8::before {
  background-color: #FFD9C0;
}
.box9::before {
  background-color: #F4BFBF;
}
li:hover {
  color: #aaa;
  transition: .5s;
}
li:hover::before {
  transition: .6s;
  background-color: #EBD8C3;
}
</style>