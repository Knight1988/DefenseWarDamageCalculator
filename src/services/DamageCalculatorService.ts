import {DamageInput} from "@/models/DamageInput";

export class DamageCalculatorService {
    public calculateDamage(input: DamageInput): number {
        let damage = input.baseDamage * (1 + (input.masteryAttackPower / 100));
        damage = Math.floor(damage);
        if (input.starAttackPower !== 0) {
            damage = damage * (input.starAttackPower + 100) / 100;
            damage = Math.floor(damage);
        }
        if (input.additionDamage !== 0) {
            damage = damage * (input.additionDamage + 100) / 100;
            damage = Math.floor(damage);
        }
        return damage;
    }

    public calculateCritDamage(input: DamageInput): number {
        let damage = input.baseDamage * (1 + (input.masteryAttackPower / 100));
        damage = Math.floor(damage);
        if (input.starAttackPower !== 0) {
            damage = damage * (input.starAttackPower + 100) / 100;
            damage = Math.floor(damage);
        }
        if (input.additionDamage !== 0) {
            damage = damage * (input.additionDamage + 100) / 100;
        }

        const critDamageBonus = 100 + input.masteryCritDamage + input.coreCritDamage;
        let critDamage = damage + damage * critDamageBonus / 100 ;
        critDamage = Math.floor(critDamage);
        return critDamage;
    }
}