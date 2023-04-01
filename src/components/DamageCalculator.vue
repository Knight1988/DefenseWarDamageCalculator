<template>
  <main>
    <MasteryPointAllocation v-model=value @update:value="handleUpdateValue" />
  </main>
  <p>Value: {{ value }}</p>
</template>

<script>
import MasteryPointAllocation from "@/components/MasteryPointAllocation.vue";
import {ref} from "vue";

export default {
  name: "DamageCalculator",
  components: {MasteryPointAllocation},
  setup() {
    // Create a reactive ref to hold the value
    const value = ref('');

    // Define a function to handle the update event
    function handleUpdateValue(newValue) {
      value.value = newValue;
      console.log(newValue);
    }

    // Return the value and the handleUpdateValue function
    return {
      value,
      handleUpdateValue,
    };
  }
}
</script>

<style scoped>

</style>