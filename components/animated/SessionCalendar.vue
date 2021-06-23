<template>
  <div class="calendar-container text d-flex flex-column align-items-center">
    <img :src="calendarIcon" alt="calendar icon" class="calendar-icon" />
    <div class="calendar-title-container d-flex align-items-center">
      <h2 class="calendar-title">ساعت برگزاری کلاس من</h2>
      <span class="calendar-badge badge">آزمایشی رایگان</span>
    </div>
    <p class="calendar-time text-center mt-4">
      دوشنبه 30 اردیبهشت ؛ ساعت 11:00 - 12:30
    </p>
    <div class="divide-container ms-auto">
      <main-dividers class="divider align-self-start"></main-dividers>
    </div>
  </div>
</template>

<script>
import MainDividers from "../utilities/MainDividers.vue";
export default {
  components: { MainDividers },
  data() {
    return {
      calendarIcon: require("../../assets/calendar-icon.svg"),
    };
  },
};
</script>

<style scoped>
.calendar-container {
  direction: rtl;
  position: relative;
  background-color: #fff;
  width: 29.5rem;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  border-radius: 20px;
}
.calendar-icon {
  padding: 0.5rem;
  background-color: #fff;
  box-shadow: 0px 2px 10px 2px rgb(95, 175, 238, 0.1);
  border-radius: 10px;
  position: absolute;
  right: -1rem;
  top: -1rem;
}
.calendar-title {
  font-size: 1.4rem;
  word-spacing: -0.4rem;
  margin-left: 4rem;
}
.calendar-badge {
  color: #000;
  padding: 0.7rem 1.5rem;
  background-color: #ebf9fc;
  border-radius: 10px;
}
.calendar-time {
  color: #9da0aa;
  font-size: 1.2rem;
}
.divide-container {
  width: 60%;
}
.divider >>> hr {
  margin: 0.4rem;
}
</style>
