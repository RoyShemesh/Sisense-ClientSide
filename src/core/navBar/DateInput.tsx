import React, { Dispatch, SetStateAction } from 'react';

export default function DateInput({ setState, msg, defaultValue }: Props) {
	return (
		<div className="flex flex-row  ">
			<p className="text-2xl text-slate-50 font-thin ">{msg}:</p>
			<input
				className="   md:p-1 p-0.5 border-2 rounded-xl border-blue-200"
				type="date"
				defaultValue={defaultValue}
				onChange={(e) => {
					setState(e.target.value);
				}}
				max={new Date().toISOString().slice(0, 10)}
			/>
		</div>
	);
}

interface Props {
	setState: Dispatch<SetStateAction<string>>;
	defaultValue: string;
	msg: string;
}
