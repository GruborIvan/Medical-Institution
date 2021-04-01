class Person {
    constructor(ime,prez) {

        if (this.constructor === Person) {
            throw new Error('This class is defined as abstract.')
        }

        this.ime = ime;
        this.prezime = prez;
    }
}

export default Person;