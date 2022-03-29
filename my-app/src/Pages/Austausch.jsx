import React, { Component } from 'react'
import Match from '../Components/Match'
import Chat from '../Components/Chat/Chat'
import { io } from 'socket.io-client'
import './Austausch.css'

class Austausch extends Component {
	constructor(props) {
		super(props)

		// this.state = {
		// 	firstAnnahme: '',
		// 	language: '',
		// }
	}

	render() {
		return (
			<>
				<section id="chat" tabIndex="5">
					<Match language={this.props.language} />
					<Chat firstAnnahme={this.props.firstAnnahme} />

					{/* <p>{this.props.firstAnnahme}</p>
					{this.props.language} */}

					{/* firstAnnahme={this.props.firstAnnahme}  */}
				</section>
			</>
		)
	}
}

export default Austausch
