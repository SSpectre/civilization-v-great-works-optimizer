export type City = {
    id: number;
    name: string;
    buildings: Building[];
}

export type Building = {
    name: string;
    greatWorkType: string;
    slots: number;
}

export type GreatWork = {
    id: number;
    name: string;
    type: string;
    civilization: string;
    era: string;
}