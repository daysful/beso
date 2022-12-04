// #region module
export interface Simulation {
    id: string;
    name: string;
    generatedAt: number;
    lastRun: number;
}

export interface World {
    id: string;
    name: string;
    generatedAt: number;
}

export interface Tissue {
    id: string;
    name: string;
    generatedAt: number;
}

export interface GlobalIntervention {
    id: string;
    name: string;
    generatedAt: number;
}

export interface TargetedIntervention {
    id: string;
    name: string;
    generatedAt: number;
}

export interface Modulator {
    id: string;
    name: string;
    generatedAt: number;
}

export interface Network {
    id: string;
    name: string;
    generatedAt: number;
}

export interface Biomolecule {
    id: string;
    name: string;
    generatedAt: number;
}

export interface Reaction {
    id: string;
    name: string;
    generatedAt: number;
}

export interface Channel {
    id: string;
    name: string;
    generatedAt: number;
}
// #endregion module
