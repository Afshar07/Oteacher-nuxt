<template>
  <div class="reserve-container d-flex align-items-center" dir="rtl">
    <img :src="reserveIcon" alt="reservation icon" class="reserve-icon" />
    <div class="text-divider">
      <p class="reserve-text">کلاس مورد نظر شما با موفقیت رزرو شد</p>
      <div class="divider-container">
        <main-dividers></main-dividers>
      </div>
    </div>
  </div>
</template>

<script>
import MainDividers from "../utilities/MainDividers.vue";
export default {
  components: { MainDividers },
  data() {
    return {
      reserveIcon: require("../../assets/reservation.svg"),
    };
  },
};
</script>

<style scoped>
.reserve-container {
  width: 33rem;
  padding: 2rem;
  margin: 3rem;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
}
.reserve-icon {
  margin-left: 3rem;
}
.reserve-text {
  font-size: 1.3rem;
}
.divider-container {
  width: 14rem;
}
</style>
