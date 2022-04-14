import React, { ForwardedRef } from 'react';

function DateInput({ msg, defaultValue }: Props, ref: ForwardedRef<HTMLInputElement>) {
	return (
		<div className="flex">
			<p className="text-2xl text-black font-thin ">{msg}:</p>
			<input
				className="md:p-1 p-0.5 border-2 rounded-xl border-blue-200"
				type="date"
				defaultValue={defaultValue}
				ref={ref}
				max={new Date().toISOString().slice(0, 10)}
			/>
		</div>
	);
}
const FancyDateInput = React.forwardRef<HTMLInputElement, Props>(DateInput);
export default FancyDateInput;
interface Props {
	defaultValue: string;
	msg: string;
}
