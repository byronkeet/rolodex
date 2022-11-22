import { Component } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

import './App.css';

 class App extends Component {
	constructor() {
		super();

		this.state = {
			monsters: [],
			searchField: ''
		}
		console.log('constructor');
	}

	componentDidMount() {
		console.log('componentDidMount');
		fetch('https://jsonplaceholder.typicode.com/users')
		.then((response) => response.json())
		.then((users) => {
			this.setState(() => {
				return { monsters: users };
			})
		});
	}

	onSearchChange = (event) => {
		const searchField = event.target.value.toLowerCase();
		this.setState(() =>{ 
			return { searchField }
		})
	}

	render() {
		console.log('render');

		const { monsters, searchField } = this.state;
		const { onSearchChange } = this;

		const filteredMonsters = monsters.filter((monster) => monster.name.toLowerCase().includes(searchField));

		return (
			<div className="App">
				<h1 className='app-title'>Monsters Rolodex</h1>
				<SearchBox
					placeholder='Search monsters'
					className='search-box'
					onChangeHandler={onSearchChange}
				/>
				<CardList monsters={filteredMonsters} />
			</div>
		);
	}
}

export default App;
