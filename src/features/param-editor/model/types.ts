export interface Param {
	id: number;
	name: string;
	type: 'string';
}

export interface ParamValue {
	paramId: number;
	value: string;
}

export type Color = {
	id: number;
	name: string;
	hex: string;
};

export interface Model {
	paramValues: ParamValue[];
	colors: Color[];
}
