<template>
  <button class="main-btn">
    <slot></slot>
  </button>
</template>

<style scoped>
.main-btn {
  background-color: transparent;
  padding: 1rem 2rem;
  font-size: 1.4rem;
  border: none;
  border-radius: 9px;
}
.main-btn:focus {
  outline: none;
}
</style>
