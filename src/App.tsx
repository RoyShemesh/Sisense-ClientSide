import React, { useState } from 'react';
import Footer from './core/footer/Footer';
import HomePage from './core/hompePage/HomePage';
import NavationBar from './core/navBar/NavigationBar';
import './styles/main.css';

function App() {
	const [from, setFrom] = useState<string>('2021-06-01');
	const [to, setTo] = useState<string>('2021-12-31');
	return (
		<div className="">
			<NavationBar to={to} from={from} />
			<HomePage setTo={setTo} setFrom={setFrom} />
			<Footer />
		</div>
	);
}

export default App;
