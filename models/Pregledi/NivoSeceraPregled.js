import Pregled from './Pregled.js';
import dateFns from 'date-fns'
import vrstePregledaEnum from '../../constants.js';

class NivoSeceraPregled extends Pregled {

    constructor() {
        // Vrednost, vreme posl obroka..
        super(vrstePregledaEnum[2]);
        this.nivoSecera = Math.round(Math.random() * 50);
        this.vremePoslObroka = dateFns.format(new Date(), 'HH:mm:ss');
        this.tipPregleda = 'Pregled nivoa secera';
    }

    GetInfoOPregledu() {
        return "[Pregled nivoa secera | " + this.datumIVremePregleda + "]:  Nivo secera: " + this.nivoSecera + " Vreme poslednjeg obroka: " + this.vremePoslObroka;
    }

}

export default NivoSeceraPregled;