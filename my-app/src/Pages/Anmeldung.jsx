import React, { Component } from 'react'
import Input from '../Components/Input'

class Anmeldung extends Component {
	state = {}
	render() {
		return (
			<section id="formular" tabIndex="2">
				<h2>Anmeldung</h2>
				<div>
					<Input
						submitForm={this.props.submitForm}

						// submitFirstAnnahme={(annahme) =>
						//   this.setState({ submitedFirstAnnahme: annahme })
						// }
					/>
				</div>
			</section>
		)
	}
}

export default Anmeldung
