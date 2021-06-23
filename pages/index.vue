<template>
  <div class="main-container">
    <oteacher-intro class="col-md-12 col-lg-12"></oteacher-intro>
    <div
      class="supported-langs d-flex flex-wrap col-md-12 col-lg-12"
      dir="rtl"
      v-if="loadMore"
    >
      <supported-langs
        v-for="country in countryData"
        :key="country.id"
        :name="country.name"
        :flag="country.flag"
      ></supported-langs>
      <div
        class="load-container d-flex flex-column align-items-center"
        @click="loadMoreFlags"
      >
        <img :src="loadMoreImg" alt="" class="load-img" />
        <p class="show-text">مخفی کردن</p>
      </div>
    </div>
    <div
      class="supported-langs d-flex flex-wrap col-12 col-md-12"
      dir="rtl"
      v-else
    >
      <supported-langs
        v-for="country in countryData.slice(0, 8)"
        :key="country.id"
        :name="country.name"
        :flag="country.flag"
      ></supported-langs>
      <div
        class="load-container d-flex flex-column align-items-center"
        @click="loadMoreFlags"
      >
        <img :src="loadMoreImg" alt="" class="load-img" />
        <p class="show-text">دیگر زبان‌ها</p>
      </div>
    </div>
    <learning-steps class="col-md-9"></learning-steps>
  </div>
</template>
<script>
import OteacherIntro from "../components/OteacherIntro.vue";
import SupportedLangs from "../components/SupportedLangs.vue";
import LearningSteps from "../components/LearningSteps.vue";
import data from "../data.json";

export default {
  components: {
    OteacherIntro,
    SupportedLangs,
    LearningSteps
  },

  data() {
    return {
      countryData: data,
      loadMore: false,
      loadMoreImg: require("../assets/flags/showmore.svg")
    };
  },
  methods: {
    loadMoreFlags() {
      this.loadMore = !this.loadMore;
    }
  }
};
</script>
<style>
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
  font-family: "iranyekan", sans-serif !important;
  font-weight: 100;
}
html {
  font-size: 62.5%;
}
body {
  box-sizing: border-box;
  height: 100%;
  overflow-x: hidden !important;
}
</style>
<style scoped>
.supported-langs {
  margin-top: 8rem;
  margin-left: 0;
  margin-right: 0 !important;
}

.supported-langs {
  margin: 0 auto 5rem auto;
  padding: 0 4rem;
}
.load-container {
  width: 10rem;
  border-radius: 10px;
  transition: all 0.3s;
  cursor: pointer;
}
.load-container:hover {
  box-shadow: 0px 2px 10px 2px rgb(95, 175, 238, 0.1);
}
.load-img {
  width: 4rem;
  margin-top: 2rem;
}
.show-text {
  margin-top: 1rem;
  font-size: 1.3rem;
}
</style>
