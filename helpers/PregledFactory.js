import KrvniPritisakPregled from '../models/Pregledi/KrvniPritisakPregled.js';
import NivoHolesterolaPregled from '../models/Pregledi/NivoHolesterolaPregled.js';
import NivoSeceraPregled from '../models/Pregledi/NivoSeceraPregled.js';
import vrstePregledaEnum from '../constants.js';

class PregledFactory {

    getPregled(pregledType) {
        switch (pregledType) {
            case vrstePregledaEnum[0] : return new KrvniPritisakPregled();
            case vrstePregledaEnum[1] : return new NivoHolesterolaPregled();
            case vrstePregledaEnum[2] : return new NivoSeceraPregled();
            default : break;
        }
    }

}

export default PregledFactory;