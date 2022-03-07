import React, { Component } from 'react'
import Match from '../Components/Match'
import Chat from '../Components/Chat/Chat'
import { io } from 'socket.io-client'
import './Austausch.css'

class Austausch extends Component {
	constructor(props) {
		super(props)

		this.state = {}
	}

	render() {
		return (
			<>
				<section id="part_5" tabIndex="5">
					<Match language={this.props.language} />
					<Chat />
					<h2>Test</h2>
					{this.props.firstAnnahme}
					{this.props.language}
				</section>
			</>
		)
	}
}

export default Austausch
