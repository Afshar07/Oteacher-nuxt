<template>
  <div class="main-container d-flex flex-column mb-5 me-0">
    <div class="title d-flex">
      <circle-icons :iconUrl="iconUrlMade" :bgColor="bgColor"></circle-icons>
      <h4 class="primary-heading me-3 mt-2">
        {{ title }}
      </h4>
    </div>
    <p class="details-text">
      {{ text }}
    </p>
  </div>
</template>

<script>
import CircleIcons from "./utilities/CircleIcons.vue";
export default {
  components: { CircleIcons },
  props: ["title", "text", "iconUrl", "bgColor"],
  data() {
    return {
      iconUrlMade: require(`../assets/${this.iconUrl}`)
    };
  }
};
</script>

<style scoped>
.main-container {
  width: 70%;
  padding: 1.5rem 4rem;
  box-shadow: 0 0.1rem 0.8rem rgba(95, 175, 238, 0.1);
  border-radius: 20px;
}
.primary-heading {
  font-weight: bold;
}
.details-text {
  margin: 2rem 0 1rem 0;
  font-size: 1.2rem;
  color: #6f7da4;
}
</style>
