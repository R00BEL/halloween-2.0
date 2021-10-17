<template>
  <img :src="picture" alt="results" style="width: 100%"/>
  <button>Send result</button>
</template>

<script>
import Picture from "../assets/banana.png"
export default {
  data() {
    return {
      picture: Picture
    }
  },
  name: 'App',
}
</script>