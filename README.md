# preposisjon
Er det "i" eller "på" framfor namnet? Det har du sikkert lurt på ofte. No kan du la denne pakken lure for deg.

## Installer
```bash
npm install --save preposisjon
```

## Bruk
Importer først.

```javascript
var preposisjon = require('preposisjon')
```
eller
```javascript
import preposisjon from 'preposisjon'
```

Kall funksjonen med stadsnamn for å få tilhøyrande preposisjon. Til dømes:

```javascript
var voss = `Eg er ${preposisjon('Voss')} Voss!`
console.log(voss) // Eg er på Voss!
```

Funksjonen returnerer anten `'i'` eller `'på'`. `'på'` blir returnert dersom det finst reglar som tilseier at `'på'` er riktig preposisjon. Viss ikkje det er tilfellet, vil `'i'` bli returnert.

### API

Du kan bruke REST-APIet. Grunn-URL er `https://preposisjon.no/api`. Send stadsnamn som query-parameter `place`. Eksempel:

```
GET https://preposisjon.no/api?place=Voss
```

Gir svaret:

```
{ "preposisjon": "på" }
```

### CLI

Du kan også bruke `preposisjon` frå kommandolinja.

```
npm i -g preposisjon
```

```
> preposisjon Voss
på
```

## Bidra
Pull requests er meir enn velkomne! Berre hugs å køyre `npm test` først ;)

## Typar

Typar for både TypeScript og Flow er inkludert. TypeScript skal fungere ut av boksen. For Flow, pass på at libdef-fila er inkludert i din flowconfig:

```
[libs]
node_modules/preposisjon/lib/types.flow.js
```
