<template>
  <img :src="picture" alt="results" style="width: 100%" />
  <button @click="publishResults" :disabled="isButtonLocked">
    Publish results
  </button>
</template>

<script>
import Picture from "../assets/banana.png";

export default {
  data() {
    return {
      picture: Picture,
      isButtonLocked: true,
      error: false
    };
  },
  methods: {
    publishResults() {
      console.log("Publish the result");
    }
  },
  mounted() {
    console.log("Start");
  },
  name: "Linkedin"
};
</script>
