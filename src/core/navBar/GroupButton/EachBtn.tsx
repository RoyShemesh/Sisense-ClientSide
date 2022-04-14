import React, { Dispatch, SetStateAction } from 'react';

export default function EachBtn({ timestamp, selected, setPerTimeStamp }: Props) {
	return (
		<li className="relative mx-0.5">
			{selected ? (
				<input
					defaultChecked
					onChange={(e) => {
						setPerTimeStamp(e.target.value);
					}}
					className="sr-only peer"
					type="radio"
					value={timestamp}
					name="answer"
					id={`answer_${timestamp}`}
				/>
			) : (
				<input
					onChange={(e) => {
						setPerTimeStamp(e.target.value);
					}}
					className="sr-only peer"
					type="radio"
					value={timestamp}
					name="answer"
					id={`answer_${timestamp}`}
				/>
			)}
			<label
				className="flex  bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-blue-700   peer-checked:ring-2 peer-checked:border-transparent"
				htmlFor={`answer_${timestamp}`}
			>
				{timestamp}
			</label>
		</li>
	);
}
interface Props {
	timestamp: string;
	selected: boolean;
	setPerTimeStamp: Dispatch<SetStateAction<string>>;
}
