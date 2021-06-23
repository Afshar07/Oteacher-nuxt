<template>
  <div class="teacher-container d-flex align-items-center" dir="rtl">
    <img :src="img" alt="Teacher pic" class="teacher-pic" />
    <div class="name-divide d-flex flex-column align-items-center">
      <p class="teacher-name m-0">{{ name }}</p>
      <main-dividers></main-dividers>
    </div>
  </div>
</template>
<script>
import MainDividers from "../utilities/MainDividers.vue";
export default {
  components: { MainDividers },
  props: ["img", "name"],
  data() {
    return {};
  },
};
</script>
<style scoped>
.teacher-container {
  width: 100%;
}
.teacher-pic {
  width: 6rem;
  margin: 1rem 0 1rem 1rem;
}
.teacher-name {
  font-size: 1.3rem;
  font-weight: bold;
}
</style>
