<template>
  <span class="icon-container" :style="containerStyle"
    ><img :src="iconUrl" alt="Magnifier Icon" class="icon"
  /></span>
</template>

<style scoped>
:root {
  --bg-color: #20b2ff80 !important;
}

.icon-container {
  position: relative;
  margin-left: 1rem;
}
.icon-container::before {
  position: absolute;
  top: 0.5rem;
  right: -1rem;
  content: " ";
  width: 2.5rem;
  height: 2.5rem;
  background-color: var(--bg-color);
  border-radius: 50% !important;
  z-index: -1;
}
.icon {
  width: 2.4rem;
}
</style>
<script>
export default {
  props: ["iconUrl", "bgColor"],
  data() {
    return {
      containerStyle: { "--bg-color": this.bgColor },
    };
  },
};
</script>
