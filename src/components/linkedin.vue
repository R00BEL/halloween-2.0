<template>
  <img :src="picture" alt="results" style="width: 100%" />
  <p v-if="isError">
    You refused to grant access rights. If you change your mind, reload the
    page.
  </p>
  <button @click="publishResults" :disabled="isButtonLocked">
    Publish results
  </button>
</template>

<script>
import Picture from "../assets/banana.png";
import router from "../router";

export default {
  data() {
    return {
      picture: Picture,
      isButtonLocked: true,
      isError: false
    };
  },
  methods: {
    publishResults() {
      console.log("Publish the result");
    }
  },
  mounted() {
    this.isError = !!this.$route.query.error;
    if (this.isError) {
      router.push("");
      return;
    }

    const code = this.$route.query.code;
    if (code) {
      router.push("");
      return;
    }
  },
  name: "Linkedin"
};
</script>
