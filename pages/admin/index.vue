<template>
  <div
    class="admin-container d-flex flex-column align-items-center justify-content-center"
  >
    <h1 class="title text-center my-5">
      Admin Panel
    </h1>
    <div class="lds-dual-ring my-5" v-if="!isDataLoaded"></div>
    <div
      v-else
      class="data d-flex flex-column align-items-center justify-content-center my-5"
    >
      <h1 v-if="error">{{ error }}</h1>
      <div v-else v-for="n in 5" :key="n" class="data-container mb-5">
        <p class="data-content mt-3">
          {{ content }}
        </p>
      </div>
    </div>
    <button type="button" class="logout-btn mb-5" @click="logout">
      Logout
    </button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  beforeMount() {
    // Check if the user is authenticated or any token is available in localstorage
    if (!this.isAuthenticated && localStorage.getItem("token") == null) {
      // If not, redirect to login page
      this.$router.push("/login");
    } else if (localStorage.getItem("token") !== null) {
      // if there is, set it and send token to api
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
      error: "",
      isDataLoaded: false
    };
  },
  computed: {
    ...mapGetters("auth", ["isAuthenticated"])
  },
  methods: {
    // Remove the auth token from ls and redirect user to login page
    logout() {
      localStorage.removeItem("token");
      this.$router.push("/login");
    },
    fetchDataFromFirebase(token) {
      // Send a req to api with user token and render it on page if req was a success
      fetch(
        `https://oteacher-login-default-rtdb.asia-southeast1.firebasedatabase.app/auth/-McxKeFASLp0ZWWIhQDR/content.json?auth=${token}`
      )
        .then(res => res.json())
        .then(data => {
          this.isDataLoaded = true;
          return (this.content = data);
        })
        .catch(err => console.warn(err));
    }
  }
};
</script>

<style scoped>
.admin-container {
  width: 100%;
}
.title {
  color: #ff0000;
}
.data {
  width: 100%;
}
.data-container {
  border-radius: 2rem;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  width: 70%;
  min-height: 3rem;
  box-shadow: 0 0.1rem 0.8rem rgba(0, 0, 0, 0.178);
}
.data-content {
  font-size: 2rem;
  color: #008000;
  text-align: center;
  padding: 2rem;
}
.logout-btn {
  width: 30%;
  height: 3rem;
  border: none;
  background-color: #c00000;
  color: #fff;
  font-size: 1.3rem;
  border-radius: 1rem;
  transition: all 0.3s;
}
.logout-btn:hover {
  background-color: #8f0000;
}

/* Spinner styles */
.lds-dual-ring {
  display: inline-block;
  width: 80px;
  height: 80px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #06b400;
  border-color: #06b400 transparent #06b400 transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
