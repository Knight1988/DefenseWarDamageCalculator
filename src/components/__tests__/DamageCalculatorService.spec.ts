import { describe, it, expect } from 'vitest'
import {DamageCalculatorService} from "../../services/DamageCalculatorService";
import {DamageInput} from "../../models/DamageInput";

const damageCalculatorService = new DamageCalculatorService();
describe('DamageCalculatorTests', () => {
    const testCases = [
        { input: { baseDamage: 143, masteryAttackPower: 30 }, expectedOutput: 185 },
        { input: { baseDamage: 143, masteryAttackPower: 20, starAttackPower: 50 }, expectedOutput: 256 },
        { input: { baseDamage: 143, masteryAttackPower: 20, starAttackPower: 50, additionDamage: 30 }, expectedOutput: 332 },
    ];

    for (const { input, expectedOutput } of testCases) {
        it(`should return ${expectedOutput} when input is ${JSON.stringify(input)}`, () => {
            const newInput = {
                ...new DamageInput(),
                ...input
            }
            const output = damageCalculatorService.calculateDamage(newInput);
            expect(output).toBe(expectedOutput);
        });
    }
});

describe('CritDamageCalculatorTests', () => {
    const testCases = [
        { input: { baseDamage: 143, masteryCritDamage: 150 }, expectedOutput: 500 },
        { input: { baseDamage: 143, masteryAttackPower: 10, masteryCritDamage: 100 }, expectedOutput: 471 },
        { input: { baseDamage: 143, masteryAttackPower: 20, masteryCritDamage: 50 }, expectedOutput: 427 },
        { input: { baseDamage: 143, masteryCritDamage: 150, starAttackPower: 50 }, expectedOutput: 749 },
        { input: { baseDamage: 143, masteryAttackPower: 10, masteryCritDamage: 100, starAttackPower: 50 }, expectedOutput: 705 },
        { input: { baseDamage: 143, masteryAttackPower: 30, masteryCritDamage: 0, starAttackPower: 50 }, expectedOutput: 554 },
        { input: { baseDamage: 143, masteryCritDamage: 150, additionDamage: 30 }, expectedOutput: 650 },
        { input: { baseDamage: 143, masteryAttackPower: 10, masteryCritDamage: 100, additionDamage: 30 }, expectedOutput: 612 },
        { input: { baseDamage: 143, masteryCritDamage: 150, starAttackPower: 50, additionDamage: 30 }, expectedOutput: 973 },
        { input: { baseDamage: 143, masteryAttackPower: 10, masteryCritDamage: 100, starAttackPower: 50, additionDamage: 30 }, expectedOutput: 916 },
        { input: { baseDamage: 154, coreCritDamage: 20 }, expectedOutput: 338 },
    ];

    for (const { input, expectedOutput } of testCases) {
        it(`should return ${expectedOutput} when input is ${JSON.stringify(input)}`, () => {
            const newInput = {
                ...new DamageInput(),
                ...input
            }
            const output = damageCalculatorService.calculateCritDamage(newInput);
            expect(output).toBe(expectedOutput);
        });
    }
});