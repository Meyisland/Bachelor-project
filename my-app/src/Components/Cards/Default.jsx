import React, { Component } from 'react'
import './Default.css'

class Default extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const { title, image, button, name, setCardState } = this.props
		return (
			<>
				<h3>{title}</h3>
				<p>{image}</p>
				<a
					class="buttonDefault"
					// href="#part_4"
					onClick={() => setCardState(name, 'question')}
				>
					GO
				</a>{' '}
				{/* <button onclick="href = #part_2"> GO</button>{" "} */}
			</>
		)
	}
}

export default Default
