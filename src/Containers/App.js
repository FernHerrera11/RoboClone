import React, {Component} from 'react';
import CardList from '../Components/CardList';
// import { robots } from './robots';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
// import './App.css';




//Creating a class fuctions, that extends the index.js root variable
//The extension creates a constructor to create state on the main 
//component for the App.js
class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: [],
			searchfield: ''
		}  					 

	}
//componentDidMount calls it after the component is added to the screen
//Common place to start data fetching, set subscriptions, manipulate the DOM nodes. 
	//Have to impliment componentWillUnmount, and componentDidUpdate
	//These are life cycle methods to avoid bugs, with state, and props
	componentDidMount() { //componentDidMount doesnt take parameters. 
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState({robots: users}));
		//componentDidMount Should not return anything.    				   
	}
// function what takes in an event to see changes in search bar
	onSearchChange = (event) => {
		//sets state(to change the searchfield to the eventtargetvalue)
		this.setState({searchfield: event.target.value });
	

	}

	//Renders this to the page. 
	render(){
//returns filters robots list from API and sets it to filteredRObots
			const { robots, searchfield} = this.state;
			const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})
			
		if (!robots.length){
				return <h1> Loading ..... </h1>
			}else{
				return(
 
					<div className='tc'>
					<h1>RoboCOpsunited </h1>
					  <SearchBox searchChange={this.onSearchChange} />
					  <Scroll>
						<CardList robots={filteredRobots} />
					  </Scroll>
					</div>
			
					);
			
			}

	
	}
	

}
export default App;