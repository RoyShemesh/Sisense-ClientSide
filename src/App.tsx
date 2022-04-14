import React, { useState } from 'react';
import Footer from './core/footer/Footer';
import HomePage from './core/hompePage/HomePage';
import NavationBar from './core/navBar/NavigationBar';
import './styles/main.css';
import { Status } from './utils/interface';

function App() {
	const [status, setStatus] = useState<Status[]>([]);
	const [perTimeStamp, setPerTimeStamp] = useState<string>('day');
	return (
		<div className="">
			<NavationBar setStatus={setStatus} setPerTimeStamp={setPerTimeStamp} />
			<HomePage status={status} perTimeStamp={perTimeStamp} />
			<Footer />
		</div>
	);
}

export default App;
