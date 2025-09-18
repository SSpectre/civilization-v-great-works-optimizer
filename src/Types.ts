export type City = {
    id: number;
    name: string;
    buildings: Building[];
    multiplier: number;
}

export type Building = {
    id: number;
    name: string;
    greatWorkType: string;
    slots: number;
    multiplierBonus: number;
    themingBonus: number;
    cityID: number;
    greatWorks: GreatWork[];
    instructions: Instruction[];
}

export type Instruction = {
    tourism: number;
    conditions: boolean;
    buildingID: number;
}

export type GreatWork = {
    id: number;
    name: string;
    type: string;
    civilization: string;
    era: string;
}