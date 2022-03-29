import React, { Component } from 'react'
import Match from '../Components/Match'
import Chat from '../Components/Chat/Chat'
import { io } from 'socket.io-client'
import './Austausch.css'

class Austausch extends Component {
	constructor(props) {
		super(props)

		this.state = {
			firstAnnahme: '',
			language: '',
		}
	}

	render() {
		return (
			<>
				<section id="chat" tabIndex="5">
					<Match language={this.props.language} />
					<Chat
						language={this.props.language}
						firstAnnahme={this.props.firstAnnahme}
					/>

					{this.props.firstAnnahme}
					{this.props.language}
				</section>
			</>
		)
	}
}

export default Austausch
