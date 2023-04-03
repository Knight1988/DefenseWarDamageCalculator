<template>
  <main>
    <MasteryPointAllocation @update:value="handleUpdateValue" />
  </main>
  <p>Value: {{ masteryPoints }}</p>
</template>

<script>
import MasteryPointAllocation from "@/components/MasteryPointAllocation.vue";
import {ref} from "vue";

export default {
  name: "DamageCalculator",
  components: {MasteryPointAllocation},
  setup() {
    // Create a reactive ref to hold the value
    const masteryPoints = ref('');

    // Define a function to handle the update event
    function handleUpdateValue(newValue) {
      masteryPoints.value = newValue;
    }

    // Return the value and the handleUpdateValue function
    return {
      masteryPoints,
      handleUpdateValue,
    };
  }
}
</script>

<style scoped>

</style>