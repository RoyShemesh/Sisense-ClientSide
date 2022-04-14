import React from 'react';
import { Disclosure } from '@headlessui/react';
import 'notyf/notyf.min.css';

export default function NavationBar({ from, to }: Props) {
	return (
		<Disclosure as="nav" className="bg-blue-400  w-full fixed z-10 top-0">
			{() => (
				<div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
					<div className="relative flex items-center justify-between h-auto p-2 md:p-1">
						<div className="flex-1 flex flex-col items-center justify-center  ">
							<div className="flex-shrink-0 md:flex md:items-center  ">
								<h1 className="text-3xl text-slate-50  font-semibold">Grocery shop</h1>
							</div>
							<div className="flex-shrink-0 md:flex md:items-center  ">
								<h1 className="hidden md:flex text-xl text-slate-50 font-thin">
									Currently showing dates between: {from} to: {to}
								</h1>
							</div>
						</div>
					</div>
				</div>
			)}
		</Disclosure>
	);
}

interface Props {
	to: string;
	from: string;
}
