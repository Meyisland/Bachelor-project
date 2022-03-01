import React, { Component } from 'react'
import Match from '../Components/Match'
import { io } from 'socket.io-client'
import './Austausch.css'
import Chat from '..Chat/index.'

class Austausch extends Component {
	constructor(props) {
		super(props)

		let socket = io()

		let messages = document.getElementById('messages')
		let form = document.getElementById('form')
		let input = document.getElementById('input')

		form.addEventListener('submit', function (e) {
			e.preventDefault()
			if (input.value) {
				socket.emit('chat message', input.value)
				input.value = ''
				console.log('huhu')
			}
		})

		socket.on('chat message', function (msg) {
			var item = document.createElement('li')
			item.textContent = msg
			messages.appendChild(item)
			window.scrollTo(0, document.body.scrollHeight)
		})

		this.state = {}
	}

	render() {
		return (
			<>
				<Match language={this.props.language} />
				<section id="part_5" tabIndex="5">
					<h2>Test</h2>
					{this.props.firstAnnahme}
					{this.props.language}

					<ul id="messages"></ul>
					<form id="form" action="">
						<input id="input" autocomplete="off" />
						<button>Send</button>
					</form>
				</section>
			</>
		)
	}
}

export default Austausch
