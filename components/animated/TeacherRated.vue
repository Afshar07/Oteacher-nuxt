<template>
  <div class="rated-container d-flex flex-column align-items-center">
    <img :src="teacherImg" alt="Teacher pic" class="teacher-pic" />
    <p class="teacher-name mt-4">استاد نوشین خواجوی</p>
    <p class="teacher-details">مدرس زبان انگلیسی</p>
    <div class="divide">
      <main-dividers
        class="dividers d-flex flex-column align-items-center"
      ></main-dividers>
    </div>
    <div class="rates-comments d-flex justify-content-between">
      <img :src="starsImg" alt="ratings" class="ratings" />
      <p class="comments">(از 79 نظر) 4/9</p>
    </div>
  </div>
</template>

<script>
import MainDividers from "../utilities/MainDividers.vue";
export default {
  components: { MainDividers },
  data() {
    return {
      teacherImg: require("../../assets/teacher3.png"),
      starsImg: require("../../assets/ratedstars.svg"),
    };
  },
};
</script>
<style scoped>
.rated-container {
  padding: 2rem;
  width: 25rem;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
}
.teacher-pic {
  width: 6rem;
}
.teacher-name {
  font-size: 1.4rem;
}
.teacher-details {
  color: #9da0aa;
}
.divide {
  width: 14rem;
}
.dividers >>> hr {
  margin: 0.4rem;
}
.rates-comments {
    width: 80%;
}
.comments {
    margin-top: 1rem;
    font-size: 1.2rem;
}
.ratings {
    margin: .7rem;
}
</style>
