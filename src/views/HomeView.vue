<template>
  <NavBarleft></NavBarleft>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import NavBarleft from "../components/NavBarleft.vue";

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    NavBarleft
  }
}
</script>
