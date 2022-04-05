import React from 'react'

class FinishWrong extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		const { name, setCardState, answerTextWrong } = this.props
		return (
			<div>
				<p>{answerTextWrong}</p>
				<a
					class="button"
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
