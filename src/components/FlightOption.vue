<script lang="ts" setup>
import type Carriers from "@/types/Carriers";
import type Option from "@/types/Option";
import OptionJourney from "./OptionJourney.vue";

defineProps<{
  carriers: Carriers;
  option: Option;
}>();
</script>

<template>
  <div class="flight-option">
    <OptionJourney
      v-for="journey in option.journeys"
      v-bind:key="journey.originPlace.code"
      :journey="journey"
      :carriers="carriers"
    ></OptionJourney>
  </div>
</template>

<style scoped>
.flight-option {
  background-color: var(--color-background-mute);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
  padding: 1rem;
}
</style>
