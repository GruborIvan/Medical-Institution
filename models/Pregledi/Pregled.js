import dateFns from 'date-fns'

class Pregled {

    constructor(tipPregleda) {
        if (this.constructor === Pregled) {
            throw new Error('Its not possible to create an instance of abstract class.');
        }

        this.tipPregleda = tipPregleda;
        this.datumIVremePregleda = dateFns.format(new Date(), 'HH:mm:ss');
    }

    GetInfoOPregledu() {
        throw new Error('You have to implement this method in child classes!');
    }
}

export default Pregled;