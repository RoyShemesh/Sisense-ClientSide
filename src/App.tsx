import React, { useState } from 'react';
import Footer from './core/footer/Footer';
import HomePage from './core/hompePage/HomePage';
import NavationBar from './core/navBar/NavigationBar';
import './styles/main.css';
import { DailyStatus } from './utils/interface';

function App() {
	const [dailyStatus, setDailyStatus] = useState<DailyStatus[]>([]);
	return (
		<div className="">
			<NavationBar setDailyStatus={setDailyStatus} />
			<HomePage dailyStatus={dailyStatus} />
			<Footer />
		</div>
	);
}

export default App;
