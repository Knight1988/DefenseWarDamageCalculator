<template>
  <div class="row">
    <div class="col-6">
      <div class="row">
        <div class="col-4">
          <button class="btn btn-primary">Crit chance 30%</button>
        </div>
        <div class="col-4">
          <button class="btn btn-primary">Attack Speed 0%</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MasteryPointAllocation",
  data() {
    return {
      line1:
          {
            critChancePoint: 3,
            attackSpeedPoint: 0,
            manaPoint: 0
          }
    }
  }
}
</script>

<style scoped>

</style>