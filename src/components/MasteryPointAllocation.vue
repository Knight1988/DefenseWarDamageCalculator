<template>
  <div class="row mb-2" v-for="(row, rowIndex) in masteryPoints" :key="rowIndex">
    <div class="col-4" v-for="(button, columnIndex) in row" :key="columnIndex">
      <button :class="{ 'btn-primary': button.isPrimary, 'btn-secondary': !button.isPrimary }"
              class="btn btn-primary"
              @click="masteryClicked(rowIndex, columnIndex)"
      >{{ button.displayText }}</button>
    </div>
  </div>
</template>

<script>
import {reactive} from "vue";
import {
  AttackSpeedNode,
  CritChanceNode,
  CritDamageNode,
  DamageNode, HighStarDamageNode, LowStarDamageNode,
  OtherNode
} from "@/models/MasteryNode";
import {MasteryModel} from "@/models/MasteryModel";

export default {
  name: "MasteryPointAllocation",
  emits: ['update:value'],
  setup(props, context) {
    const masteryPoints = reactive([
      [new CritChanceNode(3), new AttackSpeedNode(0), new OtherNode(0)],
      [new DamageNode(3, 0.05), new CritDamageNode(0, 0.5), new OtherNode(0)],
      [new LowStarDamageNode(1), new HighStarDamageNode(0), new OtherNode(0)],
      [new DamageNode(3, 0.05), new AttackSpeedNode(0), new OtherNode(0)],
    ]);

    const masteryClicked = (rowIndex, columnIndex) => {
      if (rowIndex === 2) {
        adjustPoints(masteryPoints[rowIndex], columnIndex, 1);
      } else {
        adjustPoints(masteryPoints[rowIndex], columnIndex, 3);
      }

      context.emit('update:value', MasteryModel.ParseFromMasteryNodes(masteryPoints))
    };

    const adjustPoints = (arr, index, max) => {
      if (arr[index].point === max) return;
      arr[index].point++;
      while (true) {
        const sum = arr.reduce((total, currentValue) => total + currentValue.point, 0);
        if (sum <= max) break;

        for (let i = 0; i < arr.length; i++) {
          if (i !== index && arr[i].point !== 0) {
            arr[i].point--;
            break;
          }
        }
      }
    }

    return {
      masteryPoints,
      masteryClicked
    }
  }
}
</script>

<style scoped>

</style>