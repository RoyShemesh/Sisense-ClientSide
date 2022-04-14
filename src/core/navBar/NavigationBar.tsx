import React from 'react';
import { Disclosure } from '@headlessui/react';
import 'notyf/notyf.min.css';

const navigation = [
	{ name: 'Home', href: '/', current: true },
	{ name: 'Who am I', href: '/#WhoAmI', current: false },
];
function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(' ');
}
export default function NavationBar({ from, to }: Props) {
	console.log(from, to);

	return (
		<Disclosure as="nav" className="bg-blue-400  w-full fixed z-10 top-0">
			{() => (
				<div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
					<div className="relative flex items-center justify-between h-auto p-2 md:p-1">
						{/* <div className="flex-1 flex flex-col items-center justify-center  ">
							<div className="flex-shrink-0 md:flex md:items-center  ">
								<h1 className="text-3xl text-slate-50  font-semibold">Grocery shop</h1>
							</div>
							<div className="flex-shrink-0 md:flex md:items-center  ">
								<h1 className="hidden md:flex text-xl text-slate-50 font-thin">
									Currently showing dates between: {from} to: {to}
								</h1>
							</div>
						</div> */}
						<div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
							<div className="flex-shrink-0 flex items-center">
								<h1 className="text-3xl text-slate-50  font-semibold">Grocery shop</h1>
							</div>
							<div className="hidden sm:block sm:ml-6">
								<div className="flex space-x-4">
									{navigation.map((item) => (
										<a
											key={item.name}
											href={item.href}
											className={classNames(
												item.current
													? 'bg-blue-300 text-white'
													: 'text-white hover:bg-blue-200 hover:text-white',
												'px-3 py-2 rounded-md text-sm font-medium'
											)}
											aria-current={item.current ? 'page' : undefined}
										>
											{item.name}
										</a>
									))}
								</div>
							</div>
						</div>
						<div className="flex-shrink-0 right-0 md:flex md:items-center  ">
							<h1 className="hidden md:flex text-xl text-slate-50 ">
								Shown dates: {from.split('-').reverse().join('/')}-
								{to.split('-').reverse().join('/')}
							</h1>
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
