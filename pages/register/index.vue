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
      <phone-input class="w-75"></phone-input>
      <label for="password">Password</label>
      <input
        type="password"
        name="password"
        v-model="password"
        @input="setPassword"
      />
      <div class="checkbox-container d-flex align-items-center my-4">
        <input type="checkbox" name="checkbox" class="ms-3" />
        <label for="checkbox">
          شرایط و قوانین استفاده از سایت اُتیچر را مطالعه کرده و می‌پذیرم
        </label>
      </div>
      <main-button class="signup-btn mb-5" id="sign-up-btn" @click="signUp"
        >ثبت نام</main-button
      >
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
      password: ""
    };
  },
  methods: {
    redirectHome() {
      this.$router.push("/");
    },
    setPassword() {
      // send the number to setPhoneNumber action
      this.$store.dispatch("setPassword", this.password);
    },
    signUp() {
      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCruPS7a6p-Ws7WMrLOm0iGjrkFpwWGXDQ",
        {
          method: "POST",
          body: JSON.stringify({
            email: this.$store.getters.finalEmail,
            password: this.$store.getters.finalPassword,
            returnSecureToken: true
          })
        }
      )
        .then(res => res.json())
        .then(data => console.log(data));
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
