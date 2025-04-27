import { forwardRef, useImperativeHandle } from 'react';
import { Param, Model } from '../model/types';
import { useParamEditor } from '../lib/useParamEditor';

export interface ParamEditorHandle {
	getModel(): Model;
}

interface Props {
	params: Param[];
	model: Model;
}

export const ParamEditor = forwardRef<ParamEditorHandle, Props>(({ params, model }, ref) => {
	const { paramValues, handleChange, getModel } = useParamEditor(model);

	useImperativeHandle(ref, () => ({ getModel }), [getModel]);

	return (
		<div>
			{params.map((param) => (
				<div key={param.id} style={{ marginBottom: 12 }}>
					<label
						style={{
							display: 'block',
							fontWeight: 500,
							marginBottom: 4,
						}}>
						{param.name}
					</label>
					<input
						type="text"
						value={paramValues.find((pv) => pv.paramId === param.id)?.value || ''}
						onChange={(e) => handleChange(param.id, e.target.value)}
						style={{ padding: 6, width: '100%', fontSize: '1rem' }}
					/>
				</div>
			))}
		</div>
	);
});
ParamEditor.displayName = 'ParamEditor';
