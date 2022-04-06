# Bachelor-project
website for bias awerness for Designer

Bedienungsanleitung:

Schritt 1: Um den Prototypen zu starten ist ein Endgerät mit Browser unterstützung nötig. Zudem muss sich Node.js auf dem Rechner befinden oder sich 
hier https://nodejs.org/en/download/ runtergeladen werden.

Schritt 2: Ist die Prototyp Datei XX runtergeladen naviegriere im Terminal zu der Datei 
(Auf dem Mac geht das, indem du den Befehl “cd” eingibst und den Ordner aus dem Finder mit hilfe von drag and drop hinter den “cd” Befehl 
ziehst und dann auf enter drückst.)  “my-app” und führe ein “npm install” im Terminal aus. Hierbei werden alle Depencies die für den Prototypen 
laut package.json gebraucht werden automatisch heruntergeladen.

Schritt 3: Ist die Installation fertig öffne die Unterordner my-app mit hilfe des Terminals.
Diese lässt sich nach der Navigation in den Unterordner mit dem Eingabe “npm start” im Terminal öffnen. Ein Browserfenster öffnet sich.

Schritt 4: Um auch die Chatfunktion als Localhost nutzen zu können muss der Server gestartet werden. 
Navigiere dafür in einem weiteren Terminal zum Server Unterordner und starte den Server mit der Eingabe “npm start server.js” 
Somit ist die Chatfunktion im eigenen Netzwerk auf jedem Gerät und in mehreren Tabs benutzbar. Zum Beispiel auch auf dem Handy mit der Eingabe der eigenen 
IP Adresse im Browser Eingabefeld und der Localhost Nummer. Zum Beispiel kann das so ausehen: 127.0.0.1:3000. Nun kannst du mit dir selbst über mehrere Browserfenster 
chatten.

Geschlossen werden kann der Prototyp indem der jeweilige Browser Tab geschlossen wird oder indem im Terminal die Ausführung beendet wird.
