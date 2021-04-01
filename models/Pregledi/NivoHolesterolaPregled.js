import Pregled from './Pregled.js';
import dateFns from 'date-fns'
import vrstePregledaEnum from '../../constants.js';

class NivoHolesterolaPregled extends Pregled {

    constructor() {
        // Vrednost, vreme posl obroka..
        super(vrstePregledaEnum[1]);
        
    }

    obavljanjeMerenja() {
        this.nivoHolesterola = Math.round(Math.random() * 300);
        this.vremePoslObroka = dateFns.format(new Date(), 'HH:mm:ss');
    }

    GetInfoOPregledu() {
        this.obavljanjeMerenja();
        return "[Nivo holesterola pregled | " + this.datumIVremePregleda + "]  Nivo holesterola: " + this.nivoHolesterola + " Vreme poslednjeg obroka: " + this.vremePoslObroka;
    }

}

export default NivoHolesterolaPregled;