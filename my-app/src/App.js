
import './App.css';
import Form from ".//Form";

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
	<h2>HTML</h2>
  <div>
  
    </div>
</section>
<section id="part_3" tabindex="3">
	<h2>CSS</h2>
<Form/>
	<p><code></code>
	</p>
	<p></p>
</section>
<section id="part_4" tabindex="4">
	<h2>JavaScript</h2>
	<p>JavaScripte haben Zugriff auf das Browserfenster und das darin angezeigte HTML-Dokument.
		Ihre wichtigste Aufgabe besteht darin, auf Benutzereingaben im Dokument zu reagieren
		(z.B. klickt der Benutzer auf ein Element oder gibt einen Text in ein Formularfeld
		ein). JavaScripte können daraufhin Änderungen im gegenwärtig angezeigten HTML-Dokument
		vornehmen. Diese Änderungen finden nur im Browser, genauer gesagt im Arbeitsspeicher
		des Rechners statt, während das Dokument auf dem Web-Server unangetastet bleibt.</p>
	<p> Die Änderungen können sowohl den Inhalt als auch die Darstellung des Dokuments betreffen.
		Auf diese Weise kann ein Dokument interaktiv und »dynamisch« gestaltet werden.
		Das bedeutet, es kann auf Benutzereingaben reagieren und sich ändern, ohne dass
		ein neues Dokument vom Web-Server abgerufen werden muss. Beispielsweise können
		Zusatzinformationen eingeblendet werden, sobald der Anwender mit der Maus auf ein
		bestimmtes HTML-Element klickt. </p>
</section>
<section id="part_5" tabindex="5">
	<h2>SVG</h2>
	<p>SVG ist das einzige im Web breit einsetzbare Vektorgrafik-Format.
		Damit lassen sich in allen Viewport-Auflösungen gestochen scharfe Grafiken darstellen.</p>
	<p>Man sollte es einsetzen, wenn sich die meisten Bildelemente mit SVG-Formen ausdrücken
		lassen und eine clientseitige Skalierbarkeit oder eine Dynamik gewünscht ist.</p>
</section>
<section id="part_6" tabindex="6">
	<h2>SVG</h2>
	<p>SVG ist das einzige im Web breit einsetzbare Vektorgrafik-Format.
		Damit lassen sich in allen Viewport-Auflösungen gestochen scharfe Grafiken darstellen.</p>
	<p>Man sollte es einsetzen, wenn sich die meisten Bildelemente mit SVG-Formen ausdrücken
		lassen und eine clientseitige Skalierbarkeit oder eine Dynamik gewünscht ist.</p>
</section>

    </div>
  );
}

export default App;
