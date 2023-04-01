import type {MasteryNode} from "@/models/MasteryNode";

export class MasteryModel {
    attackPower: number = 0;
    critDamage: number = 0;

    static ParseFromMasteryNodes(nodes: MasteryNode[][]){
        const model = new MasteryModel();
        model.attackPower += nodes[1][0].value;
        model.critDamage += nodes[1][0].value;
    }
}