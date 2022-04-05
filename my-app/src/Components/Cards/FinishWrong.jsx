import React from 'react'
import './FinishWrong.css'

class FinishWrong extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		const { name, setCardState, answerTextWrong } = this.props
		return (
			<div class="textWrapper">
				<p>{answerTextWrong}</p>
				<a
					class="buttonWrong"
					// href="#part_4"
					onClick={() => setCardState(name, 'default')}
				>
					Back
				</a>{' '}
			</div>
		)
	}
}

export default FinishWrong
