import React from 'react'
import './Sequenz.css'

class Sequenz extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			name: 'React',
			value: '',
			showFinishBt: false,
			showWrongFinishBt: false,
		}
		this.onValueChange = this.onValueChange.bind(this)
		this.formSubmit = this.formSubmit.bind(this)
	}

	onValueChange(event) {
		this.setState({
			selectedOption: event.target.value,
		})

		if (event.target.value === 'Male') {
			this.setState({ showFinishBt: true })
			// this.setState({ showWrongFinishBt: false })
			console.log(event.target.value)
		} else this.setState({ showFinishBt: false })
		console.log(event.target.value)

		// if (event.target.value === 'Female' || 'Other') {
		// 	this.setState({ showWrongFinishBt: true })
		// 	this.setState({ showFinishBt: false })
		// 	console.log(event.target.value)
		// }
		// } else this.setState({ showWrongFinishBt: false })
		// console.log(event.target.value)
	}

	formSubmit(event) {
		event.preventDefault()
	}

	render() {
		const { name, setCardState } = this.props
		const { showFinishBt, showWrongFinishBt } = this.state

		return (
			<div class="FormWrapper">
				<p>Wähle eine Sqeuenz aus:</p>
				<form onSubmit={this.formSubmit}>
					<div className="radio">
						<label>
							<input
								type="radio"
								value="Um X aufwärts zählen"
								checked={this.state.selectedOption === 'Um X aufwärts zählen'}
								onChange={this.onValueChange}
							/>
							Um X aufwärts zählen
						</label>
					</div>
					<div className="radio">
						<label>
							<input
								type="radio"
								value="Um 2 aufwärts zählen"
								checked={this.state.selectedOption === 'Um 2 aufwärts zählen'}
								onChange={this.onValueChange}
							/>
							Um 2 aufwärts zählen
						</label>
					</div>
					<div className="radio">
						<label>
							<input
								type="radio"
								value="Die ersten beiden addiert ergeben die nächste Zahl"
								checked={
									this.state.selectedOption ===
									'Die ersten beiden addiert ergeben die nächste Zahl'
								}
								onChange={this.onValueChange}
							/>
							Die ersten beiden addiert ergeben die nächste Zahl
						</label>
					</div>
					<div className="radio">
						<label>
							<input
								type="radio"
								value="Male"
								checked={this.state.selectedOption === 'Male'}
								onChange={this.onValueChange}
							/>
							Aufsteigende Zahlen
						</label>
					</div>
					<div className="radio">
						<label>
							<input
								type="radio"
								value="Gerade Zahlen"
								checked={this.state.selectedOption === 'Gerade Zahlen'}
								onChange={this.onValueChange}
							/>
							Gerade Zahlen
						</label>
					</div>
					<div className="radio">
						<label>
							<input
								type="radio"
								value="Die ersten beiden multipiziert ergeben die nächste Zahl"
								checked={
									this.state.selectedOption ===
									'Die ersten beiden multipiziert ergeben die nächste Zahl'
								}
								onChange={this.onValueChange}
							/>
							Die ersten beiden multipiziert ergeben die nächste Zahl
						</label>
					</div>

					{showFinishBt ? (
						<div class="ShowFinishButton">
							<button
								class="button"
								onClick={() => setCardState(name, 'finish')}
							>
								Finish
							</button>
						</div>
					) : (
						<div class="ShowFinishButton">
							<button
								class="button"
								onClick={() => setCardState(name, 'finishWrong')}
							>
								Finish
							</button>
						</div>
					)}
				</form>

				{/* {showResultsBt && (
					<div class="ShowAnswerButton">
						<a
							class="button"
							// href="#part_4"
							onClick={() => setCardState(name, 'sequenz')}
						>
							Show Sequenz
						</a>
					</div>
				)} */}
			</div>
		)
	}
}

export default Sequenz
