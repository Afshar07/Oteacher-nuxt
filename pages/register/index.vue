<template>
  <div
    class="main-container d-flex flex-column align-items-center m-0 p-0"
    dir="rtl"
  >
    <img :src="logoUrl" alt="Oteacher logo" class="logo mt-5 mb-3" />
    <div class="register-container d-flex flex-column align-items-center">
      <div
        class="title d-flex align-items-center justify-content-between w-100 mb-5"
      >
        <h2>ثبت نام در اُتیچر</h2>
        <img
          :src="closeIcon"
          alt="close icon"
          class="close-icon"
          @click="redirectHome"
        />
      </div>
      <div class="w-100 d-flex justify-content-center">
        <form
          @submit.prevent="onSubmit"
          class="register-form d-flex flex-column align-items-center w-75"
        >
          <label for="email" class="email-label" ref="emailLabel">Email</label>
          <input
            type="email"
            name="email"
            v-model="email"
            class="email-input"
            @focus="emailFocus"
            @focusout="emailRemoveFocus"
          />
          <br />
          <label for="password" class="password-label" ref="passwordLabel"
            >Password</label
          >
          <input
            type="password"
            name="password"
            v-model="password"
            class="password-input"
            @focus="passwordFocus"
            @focusout="passwordRemoveFocus"
          />
          <br />
          <button class="sign-up-btn align-self-center mb-5">ثبت نام</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
      // Send Data to vuex auth.js and send request for signup
      this.$store
        .dispatch("auth/registerUser", {
          email: this.email,
          password: this.password
        })
        .then(() => {
          // Send token and refresh token to local storage
          this.$store.dispatch("auth/setTokenLocalStorage");
          // Push to admin section
          this.$router.push("/admin");
        });
    },
    emailFocus() {
      this.$refs.emailLabel.classList.add("email-focused");
    },
    emailRemoveFocus() {
      // Check the email field and if it's not empty don't remove the class
      if (this.email == "") {
        this.$refs.emailLabel.classList.remove("email-focused");
      }
    },
    passwordFocus() {
      this.$refs.passwordLabel.classList.add("password-focused");
    },
    passwordRemoveFocus() {
      // Check the password field and if it's not empty don't remove the class
      if (this.password == "") {
        this.$refs.passwordLabel.classList.remove("password-focused");
      }
    }
  }
};
</script>

<style scoped>
input {
  outline: none;
}
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
.register-form {
  position: relative;
}
.email-label {
  position: absolute;
  right: 1rem;
  top: 0.8rem;
  transition: all 0.4s;
}
.email-input,
.password-input {
  width: 100%;
  height: 3rem;
  padding: 0.7rem;
  margin-bottom: 1.5rem;
  border-radius: 0.8rem;
  border: 1px solid #37d7ff;
}
.password-label {
  position: absolute;
  top: 6.7rem;
  right: 0.8rem;
  transition: all 0.4s;
}
.email-focused {
  top: -2rem;
  color: #66a6ff;
}
.password-focused {
  top: 4rem;
  color: #66a6ff;
}
.sign-up-btn {
  width: 50%;
  height: 3rem;
  border: none;
  background-color: #378aff;
  color: #fff;
  font-size: 1.3rem;
  border-radius: 1rem;
  transition: all 0.3s;
}
.sign-up-btn:hover {
  background-color: #0e71fc;
}
</style>
