import React from 'react';
import './App.css';
import CountryList from './Components/CountryList/CountryList';
import SearchBox from './Components/SearchBox/SearchBox';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			stats: [],
			countries: [],
			searchField: ''
		};
	}

	async componentDidMount() {
		const response = await fetch('https://covid19-api.org/api/countries');
		const countries = await response.json();
		this.setState({ countries });
		console.log(countries);
		this.state.countries.forEach(async (country) => {
			const response = await fetch(`https://covid19-api.org/api/status/${country.alpha2}`);
			const data = await response.json();
			// console.log(data);
			if (data)
				this.setState((prevState) => ({
					stats: prevState.stats.concat({ data })
				}));
		});
	}
	handleChange = (e) => this.setState({ searchField: e.target.value });

	render() {
		const { countries, searchField, stats } = this.state;
		const filteredCountries = countries.filter((country) =>
			country.name.toLowerCase().includes(searchField.toLowerCase())
		);
		return (
			<div className="App">
				<h1 className="dashboard">Covid 2019 Snapshot</h1>
				<p className="text-white">
					Number of countries limited by API provider. Feel free to refresh for a new set of countries!
				</p>
				<SearchBox
					placeholder="                  Search by country name.."
					handleChange={this.handleChange}
					className="search-box"
				/>

				<CountryList stats={stats} countries={filteredCountries} />

				<div className="allproject">
					<a href="https://tioye.dev/dist/projects/allproject.html" target="_blank" rel="noreferrer">
						View my other projects
					</a>
				</div>
			</div>
		);
	}
}

export default App;
