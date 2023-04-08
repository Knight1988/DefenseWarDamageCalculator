<template>
  <div class="row">
    <div class="col-6">
      <MasteryPointAllocation @update:value="handleUpdateValue" />
      <BuffEffect @update:value="onBuffEffectChanged" />
    </div>
  </div>
  <div class="form">
    <div class="form-group">
      <label for="damage-input">Damage</label>
      <input id="damage-input" v-model="damageInput.baseDamage" type="number" @change="calculateDamage()" />
    </div>

    <div class="form-group">
      <label for="attack-speed-input">Attack Speed</label>
      <input id="attack-speed-input" v-model="damageInput.attackSpeed" type="number" />
    </div>
  </div>
  <p>Value: {{ damageInput }}</p>
</template>

<script setup>
import MasteryPointAllocation from "@/components/MasteryPointAllocation.vue";
import { ref } from "vue";
import BuffEffect from "@/components/BuffEffect.vue";
import {DamageInput} from "@/models/DamageInput";
import {MasteryModel} from "@/models/MasteryModel";

// Create a reactive ref to hold the value
const masteryPoints = ref(new MasteryModel());
const buffEffects = ref({});
const damageInput = ref(new DamageInput());

// Define a function to handle the update event
function handleUpdateValue(newValue) {
  masteryPoints.value = newValue;
  calculateDamage();
}

function onBuffEffectChanged(newValue) {
  buffEffects.value = newValue;
  calculateDamage();
}
function calculateDamage() {
  damageInput.value.masteryAttackPower = masteryPoints.value.attackPower;
  damageInput.value.masteryCritDamage = masteryPoints.value.critDamage;
}
</script>

<style scoped>
.form {
  max-width: 400px;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

input {
  display: block;
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  border: 1px solid #ced4da;
}
</style>