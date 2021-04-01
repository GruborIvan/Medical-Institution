import Pregled from './Pregled.js';
import vrstePregledaEnum from '../../constants.js';

class KrvniPritisakPregled extends Pregled {

    constructor() {
        // gornja donja puls
        super(vrstePregledaEnum[0]);
        this.gornjiPritisak = Math.round(Math.random() * 200);
        this.donjiPritisak = Math.round(Math.random() * 120);
        this.puls = Math.round(Math.random() * 180);
    }

    GetInfoOPregledu() {
        return "[Pregled krvnog pritiska | " + this.datumIVremePregleda + "] Gornji pritisak: " + this.gornjiPritisak + " Donji pritisak " + this.donjiPritisak + " Puls: " + this.puls;
    }

}

export default KrvniPritisakPregled;