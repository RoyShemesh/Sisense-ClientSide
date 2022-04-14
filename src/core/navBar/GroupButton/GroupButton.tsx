/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Dispatch, SetStateAction } from 'react';
import EachBtn from './EachBtn';

export default function GroupButton({ setPerTimeStamp }: Props) {
	return (
		<div>
			<ul className="flex items-center max-w-md mx-auto font-thin">
				<EachBtn timestamp="Day" selected setPerTimeStamp={setPerTimeStamp} />
				<EachBtn timestamp="Week" selected={false} setPerTimeStamp={setPerTimeStamp} />
				<EachBtn timestamp="Month" selected={false} setPerTimeStamp={setPerTimeStamp} />
			</ul>
		</div>
	);
}

interface Props {
	setPerTimeStamp: Dispatch<SetStateAction<string>>;
}
