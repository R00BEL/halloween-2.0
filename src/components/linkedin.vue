<template>
  <img :src="picture" alt="results" style="width: 100%" />
  <button @click="publishResults">Publish results</button>
</template>

<script>
import Picture from "../assets/banana.png";
export default {
  data() {
    return {
      picture: Picture
    };
  },
  methods: {
    publishResults() {
      console.log("Publish results");
    }
  },
  name: "Linkedin"
};
</script>
