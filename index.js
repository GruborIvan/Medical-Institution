import Doktor from './models/Doktor.js'
import Pacijent from './models/Pacijent.js';
import PregledFactory from './helpers/PregledFactory.js';
import vrstePregledaEnum from './constants.js';


// Kreiranje doktora.
var doktorMilan = new Doktor('Milan', 'Marinkovic', 'Ortoped');
console.log(doktorMilan);


// Kreiranje pacijenta.
var pacijentDragan = new Pacijent('Nikola', 'Filipovic', '2839472837381', '6697');
console.log(pacijentDragan);


var factory = new PregledFactory(); // FACTORY.


// Odabir izabranog lekara od strane pacijenta.
pacijentDragan.selectIzabranogLekara(doktorMilan);
console.log(pacijentDragan);

// Dr. Milan zakazuje pregled nivoa secera pacijentu Draganu.
doktorMilan.zakaziPregled(factory.getPregled(vrstePregledaEnum[2]), pacijentDragan);


// Dr. Milan zakazuje pregled krvnog pritiska pacijentu Draganu.
doktorMilan.zakaziPregled(factory.getPregled(vrstePregledaEnum[0]), pacijentDragan);


console.log('Svi pregledi pacijenta Dragana:');
console.log(pacijentDragan.pregledi);

// Obavljanje pregleda!
pacijentDragan.obaviPregled();
pacijentDragan.obaviPregled();