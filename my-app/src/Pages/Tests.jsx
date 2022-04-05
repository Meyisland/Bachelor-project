import './Tests.css'
import React, { Component } from 'react'
import Card from '../Components/Card'

const democardstates = {
	default: 'default',
	question: 'question',
	answer: 'answer',
	finish: 'finish',
	finishWrong: 'finishWrong',
}

class Tests extends Component {
	constructor(props) {
		super(props)
		this.state = {
			name: 'React',
			showDemo1: democardstates.question,
			cardStates: {
				confirmation: democardstates.default,
				consenus: democardstates.default,
				anchoring: democardstates.default,
			},
		}
	}

	setCardState(name, cardState) {
		console.log(name, cardState)
		this.setState((state) => ({
			cardStates: { ...state.cardStates, [name]: cardState },
		}))
	}

	render() {
		const { showDemo1, cardStates } = this.state

		return (
			<section id={'test'}>
				<div className={'wrapper'}>
					<Card
						name={'confirmation'}
						status={cardStates.confirmation}
						title={'confirmation Bias'}
						questionText={'Führe diese Reihenfolge weiter: 2,4,6 ...'}
						answerText={
							'Gut gemacht, du hast meine Regel erraten. Damit gehörst du zur Ausnahme, nur 20% der Leute, die diesen Test das erste mal machen kommen auf die gesuchte Regel.'
						}
						answerTextWrong={
							'Regel: Aufsteigende Zahlen. Conformation Bias: Ein Confirmation Bias liegt vor, wenn eine Person Informationen sucht und verwendet, die ihre eigenen Ideen oder Überzeugungen unterstützen. Das bedeutet auch, dass Informationen, die die eigenen Ideen oder Überzeugungen nicht unterstützen, ignoriert werden. Dies führt dazu, dass Menschen aufhören, Informationen zu sammeln, wenn die gefundenen Beweise ihre eigenen Ansichten bestätigen, was zu Vorurteilen führen kann. Es werden die Informationen ausgewählt, die die Vorurteile bestätigen.'
						}
						setCardState={(name, state) => this.setCardState(name, state)}
					/>
					<Card
						name={'consenus'}
						status={cardStates.consenus}
						title={'False-consensus bias'}
						setCardState={(name, state) => this.setCardState(name, state)}
					/>
					<Card
						name={'anchoring'}
						status={cardStates.anchoring}
						title={'Anchoring bias'}
					/>
					{/* <div class="card">
          <h3>False-consensus bias</h3>
          <p>insert fancy Grapic here</p>

          <button
            href="#part_4"
            onClick={() => this.hideComponent("showDemo1")}
          >
            Click to hide Demo1 component
          </button>
        </div>

        <div class="card">
          <h3>Anchoring bias</h3>
          <p>insert fancy Grapic here</p>
          <button>GO</button>
        </div> */}
				</div>
			</section>
		)
	}
}
export default Tests
