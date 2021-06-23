<template>
  <div>
    <the-header
      class="header-nav m-0 col-12 col-md-10 w-100 col-lg-12"
      :class="stickyNav"
    ></the-header>
    <Nuxt />
  </div>
</template>

<script>
import TheHeader from "../components/TheHeader.vue";
export default {
  components: { TheHeader },
  // beforeMount() {
  //   process.client.addEventListener("scroll", this.handleScroll);
  // },
  beforeMount() {
    if (process.client) {
      window.addEventListener("scroll", this.handleScroll);
    }
  },
  // unmounted() {
  //   window.removeEventListener("scroll", this.handleScroll);
  // },
  name: "App",
  components: { TheHeader },
  data() {
    return {
      isSticky: false
    };
  },
  computed: {
    stickyNav() {
      return this.isSticky ? "nav-sticky" : "";
    }
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 10) {
        this.isSticky = true;
      } else {
        this.isSticky = false;
      }
    }
  }
};
</script>

<style>
.header-nav {
  margin-bottom: 10rem;
  background-color: #fff;
}
.nav-sticky {
  position: sticky;
  top: 0;
  box-shadow: 0 0.1rem 0.8rem rgb(95, 175, 238, 0.1);
}
</style>
