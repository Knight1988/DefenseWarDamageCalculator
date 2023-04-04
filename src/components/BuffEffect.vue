<template>
  <div class="row mb-2" v-for="(buff, index) in buffs" :key="index">
    <div class="col-3">
      <select class="form-select" aria-label="Default select example">
        <option selected>Select buff type</option>
        <option value="bariBuff">Bari</option>
        <option value="monaBuff">Mona</option>
      </select>
    </div>
    <div class="col-3"><input v-model="buff.value" class="form-control" placeholder="Enter value"></div>
  </div>
  <div class="row">
    <div class="col-2">
      <button class="btn btn-primary" @click="addBuff"><i class="glyphicon glyphicon-search"></i>Add</button>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";

const buffs = ref([]);

function addBuff() {
  buffs.value.push({ value: '' });
}
</script>

<style scoped>

</style>