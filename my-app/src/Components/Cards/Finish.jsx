import React from 'react'
import './Finish.css'
class Finish extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		const { name, setCardState, answerText } = this.props
		return (
			<div>
				<p>{answerText}</p>
				<a
					class="buttonFinish"
					// href="#part_4"
					onClick={() => setCardState(name, 'default')}
				>
					Back
				</a>{' '}
			</div>
		)
	}
}

export default Finish
