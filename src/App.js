import React from 'react';
import ListeElements from './components/ListeElements';
import ButtonAdd from './components/ButtonAdd';
import ButtonRevert from './components/ButtonRevert';

import './App.css';
import * as ACTIONS from './redux/actions';
import { connect } from 'react-redux';

class App extends React.Component {
	/* eslint no-useless-constructor: 0 */
	constructor(props) {
		super(props);
	}
	formatTime({ min, sec }) {
		if (min < 10) min = "0" + min;
		if (sec < 10) sec = "0" + sec;
		return `${min}:${sec}`;
	}
	// componentDidMount() {
	// 	setInterval(() => {
	// 		const time = this.props.time;
	// 		this.props.decrTime(time);
	// 	}, 1000);
	// }

	render() {
		// Gestion du Timer
		const time = this.formatTime(this.props.time);

		// Elements de la liste initiale
		var elems = ["Element 1", "Element 2", "Element 3", "Element 4", "Element 5"];
		// Insertion des éléments de départ
		elems.forEach(elem => {
			this.props.add_elem(elem);
		});

		return (
			<div className="App">
				<h1>{time}</h1>

				<div className="list-elem">
					<table><tbody><tr>
						<td>
							<ButtonAdd text="Ajouter" />&nbsp;&nbsp;
						</td>
						<td>
							<ButtonRevert text="Inverser" />
						</td>
					</tr></tbody></table>
					<ListeElements elems={elems} />
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
  	return {
    	time: state.time
  	};
}

function mapDispatchToProps(dispatch) {
	return {
		decrTime: function(time) {
			var action = ACTIONS.decr_time(time);
			dispatch(action);
		},
		add_elem: function(txt) {
			var action = ACTIONS.add_elem(txt);
			dispatch(action);
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
