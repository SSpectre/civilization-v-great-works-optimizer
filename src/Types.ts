export type City = {
    id: number;
    name: string;
    buildings: Building[];
    multiplier: number;
}

export type Building = {
    name: string;
    greatWorkType: string;
    slots: number;
    multiplierBonus: number;
    cityID: number;
    greatWorks: GreatWork[];
}

export type GreatWork = {
    id: number;
    name: string;
    type: string;
    civilization: string;
    era: string;
}