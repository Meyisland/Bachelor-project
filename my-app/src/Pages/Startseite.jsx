import React, { Component } from 'react'
import './Startseite.css'

class Startseite extends Component {
	state = {}
	render() {
		return (
			<section id="startseite" tabIndex="1">
				<h2 class="black">The Big B</h2>
				<p class="black">
					Das Projekt richtet sich an Designende, die dafür offen sind, über
					sich selbst zu reflektieren und bereit dazu sind, sich mit ihren
					eigenen Biases auseinander zu setzten. Das Projekt dient als
					Unterstützung darin, auf die eigenen Biases aufmerksam zu machen und
					darüber aufzuklären welchen Einfluss diese auf den Designprozess
					nehmen können.
				</p>
				{/* <ul>
					<li>
						<a href="#part_2">Info</a>
					</li>
					<li>
						<a href="#part_3">Annhamen</a>
					</li>
					<li>
						<a href="#part_4">Prinzipien</a>
					</li>
				</ul>
				<p></p> */}
			</section>
		)
	}
}

export default Startseite
