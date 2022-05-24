import { createStore } from 'vuex'

export default createStore({
  //存放數據
  state: {
    imgs: [
      {
        id: 1,
        name: "拉芙塔莉雅",
        src: "../img/01盾勇.jpg",
        desc: "001",
        price: 1800,
      },
      {
        id: 2,
        name: "太空機器人",
        src: "../img/02太空機器人.jpg",
        desc: "002",
        price: 1500,
      },
      {
        id: 3,
        name: "日向雛田",
        src: "../img/03雛田.jpg",
        desc: "003",
        price: 1490,
      },
      {
        id: 4,
        name: "阿爾托莉亞",
        src: "../img/04lancer.jpg",
        desc: "004",
        price: 2000,
      },
      {
        id: 5,
        name: "喜多川佑介",
        src: "../img/05喜多川.jpg",
        desc: "005",
        price: 1750,
      },
      {
        id: 6,
        name: "伏黑惠",
        src: "../img/06伏黑.jpg",
        desc: "006",
        price: 1660,
      },
      {
        id: 7,
        name: "艾連葉卡",
        src: "../img/07艾連.jpg",
        desc: "007",
        price: 2100,
      },
      {
        id: 8,
        name: "波吉",
        src: "../img/08波吉.jpg",
        desc: "008",
        price: 1800,
      },
      {
        id: 9,
        name: "空條承太郎",
        src: "../img/10承太郎.jpg",
        desc: "009",
        price: 1850,
      },
    ],

  },
  //類似computed
  getters: {
  },
  //改變數據狀態
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
