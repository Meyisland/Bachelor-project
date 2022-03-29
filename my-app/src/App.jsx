import './App.css'
import React, { Component } from 'react'
// import { io } from 'socket.io-client'

import Menu from './Components/Menu'
import Tests from './Pages/Tests'
import Question from './Components/Cards/Question'
import Anmeldung from './Pages/Anmeldung'
import Startseite from './Pages/Startseite'
import Austausch from './Pages/Austausch'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			firstAnnahme: '',
			language: '',
		}
	}

	render() {
		return (
			<div className="App">
				<Menu
					activeSection={this.state.activeSection}
					changeSection={(section) => this.setState({ activeSection: section })}
				/>

				<Startseite />
				<Anmeldung submitForm={(formData) => this.setState(formData)} />
				<Tests />
				<Austausch
					language={this.state.language}
					firstAnnahme={this.state.firstAnnahme}
				/>
			</div>
		)
	}
}

export default App
