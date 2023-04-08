import type {DamageInput} from "@/models/DamageInput";
import {DamageOutput} from "@/models/DamageOutput";

export class DamageCalculatorService {
    public calculateAll(input: DamageInput): DamageOutput {
        const damageOutput = new DamageOutput();
        damageOutput.damage = this.calculateDamage(input);
        damageOutput.critDamage = this.calculateCritDamage(input);
        return damageOutput;
    }
    public calculateDamage(input: DamageInput): number {
        const bonusDamage = 1 + input.masteryAttackPower;
        let damage = input.baseDamage * bonusDamage;
        if (input.starAttackPower !== 0) {
            damage = damage * (input.starAttackPower + 1);
        }
        if (input.additionDamage !== 0) {
            damage = damage * (input.additionDamage + 1);
        }
        if (input.bariBuff !== 0) {
            damage = damage * (input.bariBuff + 1);
        }
        if (input.monaBuff !== 0) {
            damage = damage * (input.monaBuff + 1);
        }
        return Math.round(damage);
    }

    public calculateCritDamage(input: DamageInput): number {
        const damage = this.calculateDamage(input);

        const critDamageBonus = 1 + input.masteryCritDamage + input.coreCritDamage;
        let critDamage = damage + damage * critDamageBonus;
        critDamage = Math.round(critDamage);
        return critDamage;
    }
}