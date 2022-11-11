<script setup lang="ts">
import { ref, onBeforeMount } from "vue";

import FlightOption from "./FlightOption.vue";
import { getFlightOptions } from "@/services/flightOptionService";
import type FlightOptions from "@/types/FlightOptions";

const flightOptions = ref<FlightOptions>();

onBeforeMount(async () => {
  flightOptions.value = await getFlightOptions();
});
</script>

<template>
  <div v-if="flightOptions">
    <FlightOption
      v-for="option in flightOptions.options"
      v-bind:key="option.itineraryPrice + option.duration"
      :option="option"
      :carriers="flightOptions.carriers"
    />
  </div>
  <div class="loader-container" v-else>
    <div class="loader"></div>
  </div>
</template>

<style>
.loader-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
}
</style>
