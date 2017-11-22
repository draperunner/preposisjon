# pronomen
Finn riktig pronomen til stadsnamn. Er det "i" eller "på" framfor namnet? Det har du sikkert lurt på ofte. No kan du la denne pakken lure for deg.

## Installer
```bash
npm install --save pronomen
```

## Bruk
Importer først.

```javascript
var pronomen = require('pronomen') 
```
eller 
```javascript
import pronomen from 'pronomen' 
```

Kall funksjonen med stadsnamn for å få tilhøyrande pronomen. Til dømes:

```javascript
var voss = `Eg er ${pronomen("Voss")} "Voss"`
console.log(voss) // Eg er på Voss
```

## Bidra
Pull requests er meir enn velkomne!
