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
  /* outline: 1px solid #f00; */
  margin: 0 60px -40px;
  /*960/3-200=120 左右各60*/
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
  /* outline: 1px solid #00f; */
  transform: rotate(45deg);
}
li:nth-child(n + 4) {
  left: 160px;
}
li:nth-child(n + 7) {
  left: 0;
}
.box1::before {
  background-color: #3ed0cd;
}
.box2::before {
  background-color: #2d887c;
}
.box3::before {
  background-color: #0e8482;
}
.box4::before {
  background-color: #3e78d0;
}
.box5::before {
  background-color: #1d539e;
}
.box6::before {
  background-color: #171add;
}
.box7::before {
  background-color: #d0a93e;
}
.box8::before {
  background-color: #d88116;
}
.box9::before {
  background-color: #d06c3e;
}
li:hover {
  color: #fff;
}
li:hover::before {
  background-color: #000;
}
</style>