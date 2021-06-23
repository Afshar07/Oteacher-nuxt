<template>
  <div class="learning-container d-lg-flex col-md-12 col-lg-12">
    <div
      class="left-section col-md-12 col-lg-5 col-sm-12 d-md-flex flex-md-column align-items-md-center"
      dir="rtl"
    >
      <h1 class="heading-primary">
        <mark class="highlighted">یادگیری آنلاین زبان </mark>
        <br />
        <span class="heading-primary-second">
          با سه گام کوتاه آغاز می‌شود
        </span>
      </h1>
      <div class="three-steps-container mt-5 col-md-12 align-items-md-center d-md-flex flex-md-column ">
        <steps-to-start
          v-for="step in stepsData"
          :key="step.id"
          :title="step.title"
          :text="step.text"
          :bgColor="step.color"
          :iconUrl="step.icon"
        ></steps-to-start>
      </div>
    </div>
    <div class="right-section col-md-9 col-lg-6 me-5">
      <div class="teacher-name">
        <teachers-name :img="teacher1Pic" :name="teacher1Name"></teachers-name>
        <teachers-name :img="teacher2Pic" :name="teacher2Name"></teachers-name>
      </div>
      <teacher-rated class="teacher-rated"></teacher-rated>
      <session-calendar class="session-calendar"></session-calendar>
      <session-reservation class="session-reservation"></session-reservation>
    </div>
  </div>
</template>

<script>
import TeachersName from "./animated/TeachersName.vue";
import TeacherRated from "./animated/TeacherRated.vue";
import SessionCalendar from "./animated/SessionCalendar.vue";
import SessionReservation from "./animated/SessionReservation.vue";
import StepsToStart from "./StepsToStart.vue";
import steps from "../steps.json";
export default {
  components: {
    TeachersName,
    TeacherRated,
    SessionCalendar,
    SessionReservation,
    StepsToStart,
  },
  data() {
    return {
      stepsData: steps,
      teacher1Pic: require("../assets/teacher1.png"),
      teacher2Pic: require("../assets/teacher2.png"),
      teacher1Name: "استاد نگین معتضدی",
      teacher2Name: "استاد محمد عمرانی",
      removeBlur: false,
    };
  },
};
</script>
<style scoped>
.right-section {
  height: 100vh;
  background: url("../assets/orbit.svg") no-repeat 20rem 10rem;
  position: relative;
}
.teacher-name {
  position: absolute;
  top: 15rem;
  left: 10rem;
  width: 26rem;
  padding: 1rem 2rem 0 2rem;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  animation: left-right 6s ease infinite, removeBlur 18s ease 3s infinite;
}
.teacher-rated {
  position: absolute;
  top: 8rem;
  right: 0;
  animation: up-down 8s ease infinite, removeBlur 10s ease 5s infinite;
}
.session-reservation {
  position: absolute;
  top: 43rem;
  left: 4rem;
  animation: right-left 6s ease infinite, removeBlur 13s ease infinite;
}
.session-calendar {
  position: absolute;
  top: 33rem;
  right: -4rem;

  animation: left-right 6s ease infinite, removeBlur 15s ease 7s infinite;
}

.teacher-name,
.teacher-rated,
.session-calendar,
.session-reservation {
  filter: blur(0.25rem);
}
.teacher-name:hover,
.teacher-rated:hover,
.session-calendar:hover,
.session-reservation:hover {
  filter: blur(0) !important;
  transition: all 0.4s !important;
}
.heading-primary {
  font-weight: bold;
  line-height: 4.3rem;
}

@keyframes up-down {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-3rem);
  }
  100% {
    transform: translateY(0);
  }
}
@keyframes left-right {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-3rem);
  }
  100% {
    transform: translateX(0);
  }
}
@keyframes right-left {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(5rem);
  }
  100% {
    transform: translateX(0);
  }
}
@keyframes removeBlur {
  0% {
    filter: blur(0.25rem);
  }
  20% {
    filter: blur(0);
  }
  40% {
    filter: blur(0);
  }
  60% {
    filter: blur(0.25rem);
  }
  80% {
    filter: blur(0.25rem);
  }
  100% {
    filter: blur(0.25rem);
  }
}
</style>
