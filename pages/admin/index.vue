<template>
  <div>
    <h1>
      {{ content }}
    </h1>
    <h1 v-if="error">{{ error }}</h1>
    <button type="button" @click="logout">Logout</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  beforeMount() {
    if (!this.isAuthenticated && localStorage.getItem("token") == null) {
      this.$router.push("/register");
    } else if (localStorage.getItem("token") !== null) {
      this.$store.dispatch("auth/getToken");
      const token = this.$store.state.auth.accessToken;
      this.fetchDataFromFirebase(token);
    } else {
    }
  },
  data() {
    return {
      loggedIn: false,
      content: "",
      token: null,
      error: ""
    };
  },
  computed: {
    ...mapGetters("auth", ["isAuthenticated"])
  },
  methods: {
    logout() {
      localStorage.removeItem("token");
    },
    fetchDataFromFirebase(token) {
      fetch(
        `https://oteacher-login-default-rtdb.asia-southeast1.firebasedatabase.app/auth/-McxKeFASLp0ZWWIhQDR/content.json?auth=${token}`
      )
        .then(res => res.json())
        .then(data => {
          return (this.content = data);
        })
        .catch(err => console.warn(err));
    }
  }
};
</script>

<style scoped>
h1 {
  color: red;
}
</style>
