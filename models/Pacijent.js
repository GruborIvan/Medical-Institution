import Logger from '../helpers/Logger.js';
import Person from './Person.js';

class Pacijent extends Person{
    
    constructor(ime,prezime,jmbg,brZdravstvKartona) {
        super(ime,prezime);
        this.jmbg = jmbg;
        this.brZdravstvKartona = brZdravstvKartona;
        this.izabraniDoktor = null;
        this.pregledi = [];
        Logger.getInstance().logPacijentCreation(this); // LOGGER
    }

    selectIzabranogLekara(newIzabraniLekar) {
        this.izabraniDoktor = newIzabraniLekar;
        this.izabraniDoktor.pacijenti.push(this);
        Logger.getInstance().logSetIzabraniLekar(this,newIzabraniLekar); // LOGGER
    }

    obaviPregled() {
        // Ako nijedan pregled nije zakazan.
        if (this.pregledi !== []) {
            var pregled = this.pregledi.shift();
            Logger.getInstance().logizvrsavanjePregleda(this.izabraniDoktor, this, pregled);
        }
        else {
            throw new Error("Nema zakazanih pregleda!")
        }
    }

}

export default Pacijent;