import './Input.css'
import React, { Component } from 'react'

class Input extends Component {
	constructor(props) {
		super(props)

		this.state = {
			firstAnnahme: '',
			language: '',
			submitedFirst: '',
		}
	}

	inputChange = (e) => {
		const firstAnnahme = e.target.value
		this.setState({ firstAnnahme })
	}

	displayNameHandler = () => {
		const { firstAnnahme, language } = this.state
		this.props.submitForm({ firstAnnahme: firstAnnahme, language: language })
		// this.state.socket.emit({ firstAnnahme: firstAnnahme, language: language })
		console.log('huhu')
	}

	render() {
		return (
			<div>
				<form id="AnmeldeForm">
					<div>
						<label>Gebe deine erste Annahme ein</label>
						<input
							type="text"
							name="firstAnnahme"
							onChange={this.inputChange}
						/>
					</div>
					<div>
						<select
							id="languages"
							onChange={(e) => this.setState({ language: e.target.value })}
						>
							<option value="german">German</option>
							<option value="english">english</option>
							<option value="elvish">elvish</option>
							<option value="lolspeak">lolspeak</option>
						</select>
					</div>

					<a
						href="#part_3"
						class="button-submit"
						type="button"
						onClick={this.displayNameHandler}
					>
						Submit
					</a>
					<p></p>
				</form>
			</div>
		)
	}
}
export default Input
