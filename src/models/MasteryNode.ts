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
        super(point, 1);
    }
    public get displayText(): any {
        return computed(() => `Other: ${this.value}`);
    }
}

export class CritChanceNode extends MasteryNode {
    constructor(point: number) {
        super(point, 3);
    }

    public get displayText(): any {
        return computed(() => `Crit chance: ${this.value}%`);
    }
}

export class AttackSpeedNode extends MasteryNode {
    constructor(point: number) {
        super(point, 5);
    }
    public get displayText(): any {
        return computed(() => `Attack speed: ${this.value}%`);
    }
}

export class DamageNode extends MasteryNode {
    public get displayText(): any {
        return computed(() => `Damage: ${this.value}%`);
    }
}

export class CritDamageNode extends MasteryNode {
    public get displayText(): any {
        return computed(() => `Crit Damage: ${this.value}%`);
    }
}

export class LowStarDamageNode extends MasteryNode {
    constructor(point: number) {
        super(point, 50);
    }
    public get displayText(): any {
        return computed(() => `1-4 Star damage: ${this.value}%`);
    }
}

export class HighStarDamageNode extends MasteryNode {
    constructor(point: number) {
        super(point, 50);
    }
    public get displayText(): any {
        return computed(() => `5-7 Star damage: ${this.value}%`);
    }
}