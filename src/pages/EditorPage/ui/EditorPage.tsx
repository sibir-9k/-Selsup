import React, { useRef } from 'react';
import { ParamEditor, ParamEditorHandle } from '../../../features/param-editor/ui/ParamEditor';
import { Param, Model } from '../../../features/param-editor/model/types';

const params: Param[] = [
	{ id: 1, name: 'Назначение', type: 'string' },
	{ id: 2, name: 'Длина', type: 'string' },
];

const initialModel: Model = {
	paramValues: [
		{ paramId: 1, value: 'повседневное' },
		{ paramId: 2, value: 'макси' },
	],
	colors: [],
};

export const EditorPage: React.FC = () => {
	const editorRef = useRef<ParamEditorHandle>(null);

	const handlePrint = () => {
		const model = editorRef.current?.getModel();
		console.log('Актуальная модель:', model);
		alert(JSON.stringify(model, null, 2));
	};

	return (
		<div style={{ maxWidth: 400, margin: '2rem auto', fontFamily: 'sans-serif' }}>
			<h2>Редактор параметров</h2>
			<ParamEditor ref={editorRef} params={params} model={initialModel} />
			<button
				onClick={handlePrint}
				style={{
					marginTop: 16,
					padding: '8px 12px',
					cursor: 'pointer',
					fontSize: '1rem',
				}}>
				Показать модель
			</button>
		</div>
	);
};
