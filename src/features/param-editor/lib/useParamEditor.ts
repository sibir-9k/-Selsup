import { useState } from 'react';
import { ParamValue, Model } from '../model/types';

export function useParamEditor(initial: Model) {
	const [paramValues, setParamValues] = useState<ParamValue[]>([...initial.paramValues]);

	const handleChange = (paramId: number, value: string) => {
		setParamValues((prev) =>
			prev.some((pv) => pv.paramId === paramId)
				? prev.map((pv) => (pv.paramId === paramId ? { ...pv, value } : pv))
				: [...prev, { paramId, value }]
		);
	};

	const getModel = (): Model => ({
		paramValues,
		colors: initial.colors,
	});

	return { paramValues, handleChange, getModel };
}
