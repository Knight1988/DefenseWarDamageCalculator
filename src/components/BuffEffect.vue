<template>
  <div class="row mb-2" v-for="(buff, index) in buffs" :key="index">
    <div class="col-3">
      <select v-model="buff.type" class="form-select" @change="updateValue()">
        <option value="none" selected>Select buff type</option>
        <option value="bariBuff">Bari</option>
        <option value="monaBuff">Mona</option>
      </select>
    </div>
    <div class="col-3"><input @input="updateValue()" v-model="buff.value" class="form-control" placeholder="Enter value"></div>
  </div>
  <div class="row">
    <div class="col-2">
      <button class="btn btn-primary" @click="addBuff"><i class="glyphicon glyphicon-search"></i>Add</button>
    </div>
  </div>
</template>

<script setup>
import {ref, defineEmits} from "vue";

const emit = defineEmits(['update:value'])

const buffs = ref([]);

function addBuff() {
  buffs.value.push({ type: 'none', value: '' });
}

/**
 * Updates the value of the buffs object by aggregating the values of each buff item in the buffs array.
 * If the item's type is "none" or the value is not a number, it is skipped.
 * If the item's type is "bariBuff", the maximum value is taken instead of summing.
 * The new value is emitted through the 'update:value' event.
 */
function updateValue() {
  // Reduce the buffs array to a single object containing the aggregated values for each buff type
  const newValue = buffs.value.reduce((result, item) => {
    // Parse the value of the buff item to an integer
    const value = parseInt(item.value);

    // If the buff item's type is "none" or the value is not a number, skip it
    if (item.type === "none" || isNaN(value)) return result;

    // If the current buff type already exists in the result object, add the value to it
    if (result[item.type]) {
      // If the buff type is "bariBuff", take the maximum value instead of summing
      if (item.type === "bariBuff") {
        result[item.type] = Math.max(result[item.type], value);
      } else {
        result[item.type] += value;
      }
    } else {
      // If the buff type doesn't exist in the result object, create a new property with the type and value
      result[item.type] = value;
    }
    return result;
  }, {});

  // Emit the new value through the 'update:value' event
  emit('update:value', newValue);
}

</script>

<style scoped>

</style>