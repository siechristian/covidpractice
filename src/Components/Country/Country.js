import React from 'react';
import './country.css';

const Country = ({ countries, stats }) => {
	return (
		<div className="country">
			<img src={`https://www.countryflags.io/${stats.country}/flat/64.png`} alt={`Flag of ${countries.name}`} />
			<h2>{countries.name}</h2>
			<div className="cases">
				<p>{`Confirmed : ${stats.cases}`}</p>
				<p>{`Active :  ${stats.cases} - ${stats.recoverred} - ${stats.deaths}`} </p>
				<p>{`Deaths : ${stats.deaths}`}</p>
				<p>{`Recovered : ${stats.recovered}`}</p>
			</div>
		</div>
	);
};

export default Country;
