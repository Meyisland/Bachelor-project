// import 'express'
// const app = express()
// import 'http'
// const server = http.createServer(app)
// import Server from 'socket.io'
import io from 'socket.io-client'
// const io = new Server(server)
import './Chat.css'
import React, { Component } from 'react'

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });
class Chat extends Component {
	constructor(props) {
		super(props)
		this.state = {
			messages: [],
			input: '',
			socket: io(),
			// io: new Server(server),
			// app: express(),
			// server: http.createServer(app),
		}

		// let messages = document.getElementById('messages')
		// let form = document.getElementById('form')
		// let input = document.getElementById('input')
	}

	componentDidMount() {
		this.state.socket.on('chat message', (msg) => {
			var item = document.createElement('li')
			item.textContent = msg
			this.setState((prevState) => ({ messages: [...prevState.messages, msg] }))
			window.scrollTo(0, document.body.scrollHeight)
		})
	}

	handleSubmit(e) {
		e.preventDefault()
		const input = this.state.input
		if (input) {
			this.state.socket.emit('chat message', input)
			this.setState({ input: '' })
			console.log('huhu')
		}
	}

	handleChange(e) {
		this.setState({ input: e.target.value })
	}

	render() {
		const { messages } = this.state
		let messageItems = messages.map((msg, index) => <li>{index + msg}</li>)
		// for (let message of messages) {
		// 	const messageItem = <li>{message}</li>
		// 	messageItems = [...messageItems, messageItem]
		// }
		return (
			<div class="container">
				<ul id="messages">{messageItems}</ul>
				<form onSubmit={(e) => this.handleSubmit(e)} id="form" action="">
					<input
						onChange={(e) => this.handleChange(e)}
						id="input"
						autocomplete="off"
					/>
					<button>Send</button>
				</form>
			</div>
		)
	}
}

export default Chat
