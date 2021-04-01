import fs from 'fs';
import dateFns from 'date-fns'

class Logger {

    static instance = this

    static getInstance() {
        return this.instance;
    }

    static logDoctorCreation(doktor) {
        var logString = '\n [' + dateFns.format(new Date(), 'HH:mm:ss') + '] Kreiran novi doktor ' + doktor.ime + ' ' + doktor.prezime;
        this.writeFile('logFile.txt',logString);
        console.log(logString);
    }

    static logPacijentCreation(pacijent) {
        var logString = '\n [' + dateFns.format(new Date(), 'HH:mm:ss') + '] Kreiran novi pacijent ' + pacijent.ime + ' ' + pacijent.prezime + ' ' + pacijent.jmbg;
        this.writeFile('logFile.txt',logString);
        console.log(logString);
    }

    static logSetIzabraniLekar(pacijent,doktor) {
        var logString = '\n [' + dateFns.format(new Date(), 'HH:mm:ss') + '] Pacijent ' + pacijent.ime + ' ' + pacijent.prezime + '  je odabrao lekara ' + doktor.ime + ' ' + doktor.prezime;
        this.writeFile('logFile.txt',logString);
        console.log(logString);
    }

    static logZakazivanjePregleda(pregled,lekar,pacijent) {
        var logString = '\n [' + dateFns.format(new Date(), 'HH:mm:ss') + '] Lekar ' + lekar.ime + ' je zakazao pregled' + pregled.tipPregleda + ' pacijentu ' + pacijent.ime + ' ' + pacijent.prezime;
        this.writeFile('logFile.txt',logString);
        console.log(logString);
    }

    static logizvrsavanjePregleda(lekar,pacijent,pregled) {
        var logString = '\n [' + dateFns.format(new Date(), 'HH:mm:ss') + '] Pacijent ' + pacijent.ime + ' ' + pacijent.prezime + ' je obavio pregled kod lekara ' + lekar.ime + ' ' + lekar.prezime;
        logString += '\n ' + pregled.GetInfoOPregledu() + '\n';
        this.writeFile('logFile.txt',logString);
        console.log(logString);
    }

    static writeFile (filePath, fileContent) {
        return new Promise((resolve, reject) => {
         fs.appendFile(filePath, fileContent, writeFileError => {
          if (writeFileError) {
           reject(writeFileError);
           return;
          }
       
          resolve(filePath);
         });
        });
    }

}

export default Logger;