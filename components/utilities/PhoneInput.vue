<template>
  <form class="input-form">
    <label for="phone-number" class="phone-label" ref="inputLabel"
      >شماره همراه</label
    >
    <input
      type="email"
      name="phone-number"
      class="phone-number-input w-100"
      id="phone-number"
      @focusout="removeFocusClass"
      @focus="addFocusClass"
      v-model="number"
    />
  </form>
</template>

<script>
export default {
  data() {
    return {
      // bind the input with number
      number: ""
    };
  },
  methods: {
    addFocusClass() {
      this.$refs.inputLabel.classList.add("focused");
    },
    removeFocusClass() {
      this.$refs.inputLabel.classList.remove("focused");
    },
    setNumber() {
      // send the number to setPhoneNumber action
      this.$emit("email", this.number);
    }
  },
  emits: ["email"]
};
</script>
<style scoped>
.input-form {
  position: relative;
}
.phone-number-input {
  height: 4rem;
  outline: none;
  padding: none;
  direction: ltr;
}
.phone-label {
  position: absolute;
  bottom: 1.3rem;
  right: 0.8rem;
  font-size: 1.2rem;
  transition: all 0.5s;
  cursor: text;
}
.focused {
  transform: translateY(-0.8rem) scale(0.9) !important;
  color: #5592e9;
}
</style>
