<template>
  <NavBarleft></NavBarleft>
  <Describe
    @choosen="putIntoCart"
    v-for="item in showProducts"
    :key="item.id"
    :="item"
  ></Describe>
  <a @click="productFilter = 'all'" href="javascript:;">所有商品</a>
  <a @click="productFilter = 'buy'" href="javascript:;">結帳</a>
  <!-- <router-link to="/cart"><a @click="productFilter='buy'" href="javascript:;">結帳</a></router-link> -->
</template>

<script>
import Describe from "../components/DescribeView.vue";
import NavBarleft from "../components/NavBarleft.vue";

export default {
  components: {
    Describe,
    NavBarleft,
  },
  data() {
    return {
      choosenProduct: [],
      productFilter: "all",
      imgs: [
        { id: 1, src: "../img/01盾勇.jpg", desc: "001", price: 1800 },
        { id: 2, src: "../img/02太空機器人.jpg", desc: "002", price: 1500 },
        { id: 3, src: "../img/03雛田.jpg", desc: "003", price: 1490 },
        { id: 4, src: "../img/04lancer.jpg", desc: "004", price: 2000 },
        { id: 5, src: "../img/05喜多川.jpg", desc: "005", price: 1750 },
        { id: 6, src: "../img/06伏黑.jpg", desc: "006", price: 1660 },
        { id: 7, src: "../img/07艾連.jpg", desc: "007", price: 2100 },
        { id: 8, src: "../img/08波吉.jpg", desc: "008", price: 1800 },
        { id: 9, src: "../img/10惠惠.jpg", desc: "009", price: 1850 },
      ],
    };
  },
  computed: {
    showProducts() {
      switch (this.productFilter) {
        case "all":
          return this.imgs;
          break;
        case "buy":
          return this.imgs.filter((item) => item.count > 0);
      }
      console.log(item);
    },
    // sum() {
    //   let sum = 0;
    //   this.imgs.forEach(function (item) {
    //     sum += item.price * item.count;
    //   });
    // },
  },
  methods: {
    putIntoCart(info) {
      this.imgs.map(function (item) {
        if (item.id == info.id) {
          item.count = info.count;
        }
      });
      //console.log(this.imgs)
    },

  },
  watch: {},
  mouted() {
    //用來塞入BS的JS
    (function () {});
  },
};
</script>

<style scoped>
img {
  width: 100%;
  border: transparent;
}
</style>

