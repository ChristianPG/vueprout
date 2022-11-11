<script lang="ts" setup>
import type Carriers from "@/types/Carriers";
import type Journey from "@/types/Journey";
import { getReadableDate, getTravelingTimeFromMinutes } from "@/utils/time";
import { getReadableStops } from "@/utils/segments";

defineProps<{
  carriers: Carriers;
  journey: Journey;
}>();
</script>

<template>
  <div class="option-journey">
    <div class="origin-container">
      <h2>{{ journey.originPlace.code }}</h2>
      <p>{{ getReadableDate(journey.departureDateTime) }}</p>
    </div>
    <div class="segments-container">
      <p>{{ carriers[journey.segments[0].marketingAirline] }}</p>
      <p>
        {{ getTravelingTimeFromMinutes(journey.duration) }} •
        {{ getReadableStops(journey.layovers.all.length) }}
      </p>
    </div>
    <div class="destination-container">
      <h2>{{ journey.destinationPlace.code }}</h2>
      <p>{{ getReadableDate(journey.arrivalDateTime) }}</p>
    </div>
  </div>
</template>

<style scoped>
.option-journey {
  background-color: var(--color-background-soft);
  border-radius: 1rem;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
}

.origin-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.segments-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.destination-container {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

@media (max-width: 600px) {
  .option-journey {
    flex-direction: column;
    gap: 1rem;
  }

  .origin-container {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .destination-container {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
