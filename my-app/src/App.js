
import './App.css';
import Form from ".//Form";
import Input from './/Input';

function App() {
  return (
    <div className="App">
      <nav>
	<ul id="navigation">
		<li><a href="#part_1">Startseite</a>
		</li>
		<li><a href="#part_2">Info</a>
		</li>
		<li><a href="#part_3">Annahmen</a>
		</li>
		<li><a href="#part_4">Prinzipien</a>
		</li>
		<li><a href="#part_5">Methodiken</a>
		</li>
    <li><a href="#part_6">Ende</a>
		</li>
	</ul>
</nav>
<section id="part_1" tabindex="1">
	<h2>Unterbewusste Vorurteile</h2>
	<p>Im modernen Webdesign kommt den verschiedenen Webtechniken jeweils eine bestimmte
		Rolle zu.</p>
	<ul>
		<li><a href="#part_2">HTML</a> legt fest, <strong>was</strong> auf der Seite stehen
			soll (struktureller Aufbau einer Webseite)</li>
		<li><a href="#part_3">CSS</a> legt fest, <strong>wie</strong> es dargestellt werden
			soll (Formatierung &amp; Gestaltung)</li>
		<li><a href="#part_4">JavaScript</a> legt fest, was <strong>passieren</strong> soll.
			(interaktive Elemente) .</li>
	</ul>
	<p>
	</p>
</section>
<section id="part_2" tabindex="2">
	<h2>Erste Annahmen</h2>
  <div>
  <Input/>
    </div>
</section>
<section id="part_3" tabindex="3">
	<h2>CSS</h2>
	<p><code></code>
	</p>
	<p></p>
</section>
<section id="part_4" tabindex="4">
	<h2>Test</h2>

</section>
<section id="part_5" tabindex="5">
	<h2>Test</h2>
	
</section>
<section id="part_6" tabindex="6">
	<h2>Annahmen</h2>
	
</section>

    </div>
  );
}

export default App;
