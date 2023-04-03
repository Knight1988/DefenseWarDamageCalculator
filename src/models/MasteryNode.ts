import {computed } from "vue";

export abstract class MasteryNode {
    public point: number = 0;
    private readonly increment: number;

    get value(): number {
        return this.point * this.increment;
    }

    abstract get displayText(): any;

    get isPrimary(): boolean {
        return this.point > 0;
    }

    constructor(point: number, increment: number) {
        this.point = point;
        this.increment = increment;
    }
}

export class OtherNode extends MasteryNode {
    constructor(point: number) {
        super(point, 0.01);
    }
    public get displayText(): any {
        return computed(() => `Other: ${this.value}`);
    }
}

export class CritChanceNode extends MasteryNode {
    constructor(point: number) {
        super(point, 0.03);
    }

    public get displayText(): any {
        const value = (this.value * 100).toFixed(0)
        return computed(() => `Crit chance: ${value}%`);
    }
}

export class AttackSpeedNode extends MasteryNode {
    constructor(point: number) {
        super(point, 0.05);
    }
    public get displayText(): any {
        const value = (this.value * 100).toFixed(0)
        return computed(() => `Attack speed: ${value}%`);
    }
}

export class DamageNode extends MasteryNode {
    public get displayText(): any {
        const value = (this.value * 100).toFixed(0)
        return computed(() => `Damage: ${value}%`);
    }
}

export class CritDamageNode extends MasteryNode {
    public get displayText(): any {
        const value = (this.value * 100).toFixed(0)
        return computed(() => `Crit Damage: ${value}%`);
    }
}

export class LowStarDamageNode extends MasteryNode {
    constructor(point: number) {
        super(point, 0.5);
    }
    public get displayText(): any {
        const value = (this.value * 100).toFixed(0)
        return computed(() => `1-4 Star damage: ${value}%`);
    }
}

export class HighStarDamageNode extends MasteryNode {
    constructor(point: number) {
        super(point, 0.5);
    }
    public get displayText(): any {
        const value = (this.value * 100).toFixed(0)
        return computed(() => `5-7 Star damage: ${value}%`);
    }
}