import Country from '../Country/Country';
import './countryList.css';

const CountryList = ({ stats }) => {
	return (
		<div className="countryList">{stats.map((country) => <Country key={country.country} stats={country} />)}</div>
	);
};

export default CountryList;
