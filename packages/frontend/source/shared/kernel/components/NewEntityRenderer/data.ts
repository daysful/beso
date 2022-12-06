// #region module
export interface BaseField {
    label: string;
    type: any,
    state: string;
    value?: any;
    required?: boolean;
    unit?: string;
    help?: string;
}

export interface StringField extends BaseField {
    type: 'string',
    value: string;
}

export interface NumberField extends BaseField {
    type: 'number',
    value: number;
    format: 'integer' | 'float' | 'scientific';
}

export interface BooleanField extends BaseField {
    type: 'boolean',
    value: boolean;
}

export interface FileField extends BaseField {
    type: 'file';
    filetypes?: string[];
}

export type PrimitiveField =
    | StringField
    | NumberField
    | BooleanField
    | FileField;

export interface GroupField extends BaseField {
    type: 'group';
    value: PrimitiveField[];
}

export type NewEntityField =
    | PrimitiveField
    | GroupField;
// #endregion module
