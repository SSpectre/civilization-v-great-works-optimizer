export type City = {
    id: number;
    name: string;
    buildings: Building[];
}

export type Building = {
    id: number;
    name: string;
}

export type GreatWork = {
    id: number;
    name: string;
    type: string;
    civilization: string;
    era: string;
}