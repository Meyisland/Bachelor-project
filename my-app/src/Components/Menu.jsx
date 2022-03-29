import './Menu.css'
import React, { Component } from 'react'

class Menu extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		const { activeSection, changeSection } = this.props

		return (
			<nav>
				<ul id="navigation">
					<li className={activeSection == 'start' ? 'active' : ''}>
						<a href="#startseite" onClick={() => changeSection('start')}>
							Startseite
						</a>
					</li>
					<li className={activeSection == 'formular' ? 'active' : ''}>
						<a href="#formular" onClick={() => changeSection('formular')}>
							Projektformular
						</a>
					</li>
					<li className={activeSection == 'test' ? 'active' : ''}>
						<a href="#test" onClick={() => changeSection('test')}>
							Test
						</a>
					</li>
					<li className={activeSection == 'chat' ? 'active' : ''}>
						<a href="#chat" onClick={() => changeSection('chat')}>
							Buddy Chat
						</a>
					</li>
				</ul>
			</nav>
		)
	}
}
export default Menu
