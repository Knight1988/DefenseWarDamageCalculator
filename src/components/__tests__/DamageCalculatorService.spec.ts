import { describe, it, expect } from 'vitest'
import {DamageCalculatorService} from "../../services/DamageCalculatorService";
import {DamageInput} from "../../models/DamageInput";

const damageCalculatorService = new DamageCalculatorService();
const testCases = [
    {
        input: { baseDamage: 143, masteryAttackPower: 0.6 },
        expectedDamage: 229,
        expectedCritDamage: 458,
    },
    {
        input: { baseDamage: 143, masteryAttackPower: 0.3, masteryCritDamage: 1.5 },
        expectedDamage: 186,
        expectedCritDamage: 651,
    },
    {
        input: { baseDamage: 143, masteryAttackPower: 0, masteryCritDamage: 3 },
        expectedDamage: 143,
        expectedCritDamage: 715,
    },
    {
        input: { baseDamage: 154, masteryAttackPower: 0, masteryCritDamage: 0, coreCritDamage: 0.2 },
        expectedDamage: 154,
        expectedCritDamage: 339,
    },
    {
        input: { baseDamage: 154, masteryAttackPower: 0.3, masteryCritDamage: 1.5, coreCritDamage: 0.2 },
        expectedDamage: 200,
        expectedCritDamage: 740,
    },
    {
        input: { baseDamage: 154, masteryAttackPower: 1.8, masteryCritDamage: 1.5, coreCritDamage: 0.2 },
        expectedDamage: 431,
        expectedCritDamage: 1595,
    },
    {
        input: { baseDamage: 154, masteryAttackPower: 1.8, masteryCritDamage: 1.5, coreCritDamage: 0.2,
            starAttackPower: 0.5 },
        expectedDamage: 647,
        expectedCritDamage: 2394,
    },
    {
        input: { baseDamage: 154, masteryAttackPower: 1.8, masteryCritDamage: 1.5, coreCritDamage: 0.2,
            starAttackPower: 0.5, additionDamage: 0.3 },
        expectedDamage: 841,
        expectedCritDamage: 3112,
    },
    {
        input: { baseDamage: 154, masteryAttackPower: 0, masteryCritDamage: 0, coreCritDamage: 0.2,
            starAttackPower: 0, additionDamage: 0, bariBuff: 0.98 },
        expectedDamage: 305,
        expectedCritDamage: 671,
    },
    {
        input: { baseDamage: 154, masteryAttackPower: 0.3, masteryCritDamage: 0, coreCritDamage: 0.2,
            starAttackPower: 0, additionDamage: 0, bariBuff: 0.98 },
        expectedDamage: 396,
        expectedCritDamage: 871,
    },
    {
        input: { baseDamage: 154, masteryAttackPower: 0.3, masteryCritDamage: 0, coreCritDamage: 0.2,
            starAttackPower: 0, additionDamage: 0, monaBuff: 0.4 },
        expectedDamage: 280,
        expectedCritDamage: 616,
    },
    {
        input: { baseDamage: 154, masteryAttackPower: 0.3, masteryCritDamage: 0, coreCritDamage: 0.2,
            starAttackPower: 0, additionDamage: 0, monaBuff: 0.4, bariBuff: 0.98 },
        expectedDamage: 555,
        expectedCritDamage: 1221,
    },
];
describe('DamageCalculatorTests', () => {
    for (const { input, expectedDamage } of testCases) {
        it(`should return ${expectedDamage} when input is ${JSON.stringify(input)}`, () => {
            const newInput = {
                ...new DamageInput(),
                ...input
            }
            const output = damageCalculatorService.calculateDamage(newInput);
            expect(output).toBe(expectedDamage);
        });
    }
});

describe('CritDamageCalculatorTests', () => {
    for (const { input, expectedCritDamage } of testCases) {
        it(`should return ${expectedCritDamage} when input is ${JSON.stringify(input)}`, () => {
            const newInput = {
                ...new DamageInput(),
                ...input
            }
            const output = damageCalculatorService.calculateCritDamage(newInput);
            expect(output).toBe(expectedCritDamage);
        });
    }
});