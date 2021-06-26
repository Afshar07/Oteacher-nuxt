<template>
  <div
    class="main-container d-flex flex-column align-items-center m-0 p-0"
    dir="rtl"
  >
    <img :src="logoUrl" alt="Oteacher logo" class="logo mt-5 mb-3" />
    <div class="register-container d-flex flex-column align-items-center">
      <div
        class="title d-flex align-items-center justify-content-between w-100"
      >
        <h2>ثبت نام در اُتیچر</h2>
        <img
          :src="closeIcon"
          alt="close icon"
          class="close-icon"
          @click="redirectHome"
        />
      </div>
      <div>
        <form @submit.prevent="onSubmit">
          <label for="email">Email</label>
          <input type="email" name="email" v-model="email" />
          <br />
          <label for="password">Password</label>
          <input
            type="password"
            name="password"
            v-model="password"
            @keydown.enter="logToken"
          />
          <br />
          <button>ثبت نام</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import PhoneInput from "../../components/utilities/PhoneInput.vue";
import MainButton from "../../components/utilities/MainButton.vue";

export default {
  components: { PhoneInput, MainButton },
  data() {
    return {
      logoUrl: require("../../assets/logo-signup.png"),
      closeIcon: require("../../assets/close.svg"),
      email: "",
      password: ""
    };
  },
  methods: {
    redirectHome() {
      this.$router.push("/");
    },
    onSubmit() {
      this.$store
        .dispatch("auth/registerUser", {
          email: this.email,
          password: this.password
        })
        .then(() => {
          this.$store.dispatch("auth/setTokenLocalStorage");
          this.$router.push("/admin");
        });
    }
  }
};
</script>

<style scoped>
.main-container {
  background: url("../../assets/register-background.png") no-repeat 50%;
  background-size: 50rem;
  height: 100vh;
}
.logo {
  width: 15rem;
}
.register-container {
  width: 30%;
  background-color: #fff;
  border-radius: 20px !important;
}
.title {
  padding: 1rem;
}
.close-icon {
  cursor: pointer;
}
.signup-btn {
  background-color: #3f9eff;
  width: 60%;
  color: #fff;
}
.signup-btn:hover {
  background-color: #0f87ff;
  transition: all 0.3s;
}
</style>
