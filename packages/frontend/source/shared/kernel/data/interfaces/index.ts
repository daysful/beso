// #region module
export interface Simulation {
    id: string;
    name: string;
    generatedAt: number;
    lastRun: number;
    data: any;
}

export interface World {
    id: string;
    name: string;
    generatedAt: number;
    data: any;
}

export interface Tissue {
    id: string;
    name: string;
    generatedAt: number;
    data: any;
}

export interface GlobalIntervention {
    id: string;
    name: string;
    generatedAt: number;
    data: any;
}

export interface TargetedIntervention {
    id: string;
    name: string;
    generatedAt: number;
    data: any;
}

export interface ModulatorFunction {
    id: string;
    name: string;
    generatedAt: number;
    data: any;
}

export interface Modulator {
    id: string;
    name: string;
    generatedAt: number;
    data: any;
}

export interface Network {
    id: string;
    name: string;
    generatedAt: number;
    data: any;
}

export interface Biomolecule {
    id: string;
    name: string;
    generatedAt: number;
    data: any;
}

export interface Reaction {
    id: string;
    name: string;
    generatedAt: number;
    data: any;
}

export interface Channel {
    id: string;
    name: string;
    generatedAt: number;
    data: any;
}

export interface Transporter {
    id: string;
    name: string;
    generatedAt: number;
    data: any;
}



export type PasteLanguage = 'yaml' | 'json' | 'deon';
// #endregion module
