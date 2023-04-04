<template>
  <div class="row">
    <div class="col-6">
      <MasteryPointAllocation @update:value="handleUpdateValue" />
      <BuffEffect />
    </div>
  </div>
  <p>Value: {{ masteryPoints }}</p>
</template>

<script>
import MasteryPointAllocation from "@/components/MasteryPointAllocation.vue";
import {ref} from "vue";
import BuffEffect from "@/components/BuffEffect.vue";

export default {
  name: "DamageCalculator",
  components: {BuffEffect, MasteryPointAllocation},
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