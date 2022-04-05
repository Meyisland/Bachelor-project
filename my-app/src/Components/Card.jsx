import './Card.css'
import React, { Component } from 'react'
import Default from './Cards/Default'
import Question from './Cards/Question'
import Finish from './Cards/Finish'
import Sequenz from './Cards/Sequenz'
import FinishWrong from './Cards/FinishWrong'

class Card extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const {
			name,
			title,
			image,
			button,
			status,
			questionText,
			setCardState,
			answerText,
			answerTextWrong,
		} = this.props
		return (
			<div class="card">
				{status == 'default' && (
					<Default
						name={name}
						title={title}
						image={image}
						button={button}
						setCardState={setCardState}
					/>
				)}
				{status == 'question' && (
					<Question
						name={name}
						title={title}
						questionText={questionText}
						setCardState={setCardState}
					/>
				)}
				{status == 'finish' && (
					<Finish
						name={name}
						// title={title}
						// questionText={questionText}
						answerText={answerText}
						setCardState={setCardState}
					/>
				)}
				{status == 'finishWrong' && (
					<FinishWrong
						name={name}
						// title={title}
						// questionText={questionText}
						answerTextWrong={answerTextWrong}
						setCardState={setCardState}
					/>
				)}
				{status == 'sequenz' && (
					<Sequenz
						name={name}
						// title={title}
						// questionText={questionText}
						// answerText={answerText}
						setCardState={setCardState}
					/>
				)}
			</div>
		)
	}
}

export default Card
