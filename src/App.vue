<script setup lang="ts">
import FlightOptionList from "./components/FlightOptionList.vue";
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="./assets/logo.svg"
      width="64"
      height="64"
    />
  </header>

  <main>
    <FlightOptionList />
  </main>
</template>

<style scoped>
header {
  display: flex;
  place-items: center;
}

main {
  display: flex;
  flex: 1;
  flex-direction: column;
  min-height: 100%;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}
</style>
