import Logger from '../helpers/Logger.js';
import Person from './Person.js';

export default class Doktor extends Person {

    constructor(ime, prezime, specijalnost) {
        super(ime,prezime);
        this.specijalnost = specijalnost;
        this.pacijenti = [];
        Logger.getInstance().logDoctorCreation(this); // LOGGER
    }

    zakaziPregled(pregled, pacijent) {
        if (!this.pacijenti.includes(pacijent)) {
            throw new Error('Wrong lekar exception!');
        }
        
        pacijent.pregledi.push(pregled);
        Logger.getInstance().logZakazivanjePregleda(pregled,this,pacijent); // LOGGER
    }
}

