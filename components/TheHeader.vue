<template>
  <header class="header col-12">
    <nav class="header__nav d-flex justify-content-between">
      <div class="header__nav--left">
        <img :src="phoneImg" alt="blue phone" class="blue-phone" />
        <div class="header__nav--btns">
          <nuxt-link to="/register">
            <main-button class="signup-btn">ثبت نام</main-button>
          </nuxt-link>
          <nuxt-link to="/login">
            <main-button class="login-btn">ورود</main-button>
          </nuxt-link>
        </div>
      </div>
      <div class="header__nav--right">
        <a href="#" class="nav-links ms-1">انتخاب استاد</a>

        <div class="arrow-down-container">
          <a href="#" class="nav-links ms-1">زبان ها</a>
          <span class="arrow-down">⌄</span>
        </div>
        <div class="arrow-down-container">
          <a href="#" class="nav-links ms-1">اهداف یادگیری</a>
          <span class="arrow-down">⌄</span>
        </div>
        <a href="#" class="nav-links">جذب استاد</a>
        <a href="#" class="nav-links">خدمت سازمانی</a>
        <img
          :src="logoImg"
          alt="Oteacher Logo"
          class="main-logo"
          @click="redirectHome"
        />
      </div>
    </nav>
  </header>
</template>

<script>
import MainButton from "./utilities/MainButton.vue";
export default {
  components: { MainButton },
  data() {
    return {
      phoneImg: require("../assets/blue-phone.svg"),
      logoImg: require("../assets/oteacher-logo.png")
    };
  },
  methods: {
    redirectRegister() {
      this.$router.push("/register/");
    },
    redirectHome() {
      this.$router.push("/");
    }
  }
};
</script>
<style scoped>
.header {
  padding: 2.3rem 1rem 1rem 1rem;
  z-index: 100;
}
.header__nav {
  margin: 0 2.5rem 0 2.5rem;
}
.header__nav--left {
  display: flex;
  align-items: center;
}
.blue-phone {
  cursor: pointer;
  margin: 0 6rem;
}
.header__nav--btns {
  width: 100%;
}
.signup-btn {
  border: 1px solid #3f9eff;
  color: #3f9eff;
  width: 10rem;
  transition: all 0.3s;
}
.signup-btn:hover {
  background-color: rgba(63, 158, 255, 0.2);
}
.login-btn {
  border: none;
  color: #3f9eff;
  width: 10rem;
  transition: all 0.3s;
}
.login-btn:hover {
  border-radius: 9px;
  background-color: rgba(63, 158, 255, 0.2);
}
.main-logo {
  width: 11rem;
  margin-right: 5rem;
  cursor: pointer;
}
.nav-links {
  text-decoration: none;
  color: rgb(80, 80, 80);
  font-size: 1.3rem;
  margin: 0 2rem;
  transition: all 0.3s;
}
.nav-links:hover {
  color: #3f9eff;
}

.arrow-down {
  width: 1rem;
  position: relative;
  font-size: 2.3rem;
}

.arrow-down-container {
  display: inline;
  cursor: pointer;
}
</style>
