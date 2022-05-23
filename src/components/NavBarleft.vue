<template>
  <h1>GOD SMILE</h1>
  <div class="btn">
    <button @click="change(now - 1)" class="btnPrev">
      <i class="fa-solid fa-angle-left"></i>
    </button>
    <button @click="change(now + 1)" class="btnNext">
      <i class="fa-solid fa-angle-right"></i>
    </button>
  </div>
  <div class="card-slider">
    <div class="card-slider-items">
      <transition-group name="flip-list">
        <div
          class="card-slider-item"
          v-for="item in showImages"
          :key="item.id"
          :data-id="item.id"
        >
          <a href="javascript:;"><img :src="item.src" /></a>
        </div>
      </transition-group>
    </div>
  </div>
  <!-- <Describe :parentDesc="item.desc"></Describe> -->
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
      //切換
      now: 0,
      count: 0,
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
      count: 0,
    };
  },
  computed: {
    allImages() {
      // 10 + 4
      const ary = [];
      const total = this.imgs.length;
      let count;
      if (total > 0) {
        while (ary.length < 10 + 4) {
          count = Math.floor(ary.length / total);
          for (let i = 0; i < total; i++) {
            ary.push({
              id: count + "-" + this.imgs[i].id,
              src: this.imgs[i].src,
            });
            // console.log(count + "-" + this.imgs[i].id);
          }
        }
      }
      return ary;
    },
    showImages() {
      const start = this.now - 4;
      return this.allImages.slice(start).concat(this.allImages.slice(0, start));
    },
  },
  methods: {
    change(index) {
      const limit = this.allImages.length - 1;
      this.now = index < 0 ? limit : index > limit ? 0 : index;
      // if (index < 0) {
      //   this.now = limit
      // } else if (index > limit) {
      //   this.now = 0
      // } else {
      //   this.now = index
      // }
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
.card-slider {
  display: flex;
  width: 100%;
  overflow: hidden;
}
.card-slider-items {
  display: flex;
  width: 100%;
  margin-left: calc(-25% * 2.5);
}
.card-slider-item {
  z-index: 1;
  flex: calc(15% - 20px) 0 0;
  margin: 10px;
  padding: 10px;
}
.card-slider-item:hover {
  width: 800px;
}
.card-slider-item:first-child,
.card-slider-item:last-child {
  z-index: -1;
  visibility: hidden;
  border: transparent;
}

img {
  width: 100%;
  border: transparent;
}

.flip-list-move {
  transition: transform 0.5s;
}
</style>

