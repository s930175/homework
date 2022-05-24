<template>
  <div class="d-inline-block">
    <div class="card me-3 mb-3">
      <img :src="src" alt="" />
      <div>
        <p>
          黏土人 <strong>{{ name }}</strong>
        </p>
        <p>價錢: {{ price }}</p>
        <button @click="reductCount">-</button>
        <span>{{ count }}</span>
        <button @click="addCount">+</button>
        <button @click="addCart">加到收藏</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    reductCount() {
      if (this.count > 0) {
        this.count--;
        this.$emit("choosen", { id: this.id, count: this.count });
      }
    },
    addCount() {
      if (this.count < 5) {
        this.count++;
        this.$emit("choosen", { id: this.id, count: this.count });
      }
    },
    addCart() {
      alert(`成功加入購物車，數量:${this.count}`);
      localStorage.setItem("ProductCount", { id: this.id, count: this.count });
      // this.count = localStorage.getItem('ProductCount')
    },
  },
  computed: {
    //TODO:儲存到localStorage裡
    ProductCount() {
      localStorage.getItem("ProductCount");
    },
  },
  props: ["id", "price", "src", "name", "desc"],
};
</script>

<style scoped>
img {
  width: 300px;
  border: 1px solid #aaaaaa;
  border-radius: 30px;
}
.card {
  vertical-align: middle;
  padding: 10px 5px;
}
</style>