console.log('objektinis programavimas ND');

// 1. Sukurti klasę Kibiras1. Konstruktoriuje sukurti savybę akmenuKiekis  kuri lygi 0. Parašyti šiai klasei metodus, pridedančius akmenis: prideti1Akmeni() pridetiDaugAkmenu(kiekis) ir metodą išvedantį akmenų kiekį į konsolę- kiekPririnktaAkmenu(). Sukurti vieną kibiro objektą ir pademonstruoti akmenų rinkimą į kibirą ir rezultatų išvedimą.

class Kibiras1 {

    static visiAkmenys = 0;
    static akmenuSkaiciusVisuoseKibiruose(akmenuKiekis) {
        this.akmenuKiekis = visiAkmenys;
    }

    constructor(akmenuKiekis = 0) {
        this.akmenuKiekis = akmenuKiekis;

    }
    static akmenuSkaiciusVisuoseKibiruose(akmenuKiekis) {
        Kibiras1.visiAkmenys = akmenuKiekis;
    }

    prideti1Akmeni() {
        this.akmenuKiekis += 1
        console.log('Dabar turiu ' + this.akmenuKiekis + ' akmenis kibire');
        Kibiras1.visiAkmenys++;
    }
    pridetiDaugAkmenu(kiekis) {
        this.akmenuKiekis += kiekis;
        console.log('Dar įdėjau ' + kiekis + ' akmenis į kibirą');
        Kibiras1.visiAkmenys += kiekis;
    }
    kiekPririnktaAkmenu() {
        console.log('Viso akmenų kibire yra ' + this.akmenuKiekis);

    }
    static akmenuSkaiciusVisuoseKibiruose(){
        console.log('Dabar visuose kibiruose yra: ' + Kibiras1.visiAkmenys + ' akmeų');
        
    }

}
const kib1 = new Kibiras1()
const kib2 = new Kibiras1()

console.log(kib1);

kib1.prideti1Akmeni()
kib1.prideti1Akmeni()
kib1.pridetiDaugAkmenu(6)
kib1.kiekPririnktaAkmenu()

kib2.prideti1Akmeni()
kib2.prideti1Akmeni()
kib2.pridetiDaugAkmenu(4)
kib2.kiekPririnktaAkmenu()

Kibiras1.akmenuSkaiciusVisuoseKibiruose()



// 2. Sukurti klasę Pinigine. Konstruktoriuje sukurti dvi savybes popieriniaiPinigai ir metaliniaiPinigai. Parašyti metodą ideti(kiekis), kuris prideda pinigus į piniginę. Jeigu kiekis nedidesnis už 2, tai prideda prie metaliniaiPinigai, jeigu kitaip- prie popieriniaiPinigai. Parašykite metodą skaiciuoti(), kuris suskaičiuotų ir išvestų į konsolę popieriniaiPinigai ir metaliniaiPinigai sumą. Sukurti klasės objektą ir pademonstruoti veikimą. Nesvarbu kokios popierinės kupiūros ir metalinės monetos egzistuoja realiame pasaulyje.



class Pinigine {

    constructor(popieriniaiPinigai = 0, metaliniaiPinigai = 0) {
        this.popieriniaiPinigai = popieriniaiPinigai;
        this.metaliniaiPinigai = metaliniaiPinigai;
        //constructor() {                       //jei naujas tai skliausteliuose rašome jai kartais ką nors pakeisime, bet jei nepakeisime tada nieko nerašome. prie this po lygybės ten rašome 0(objekto kintamasis)
        // this.popieriniaiPinigai = 0;
        // this.metaliniaiPinigai = 0;

    }
    ideti(pinigas) {
        if (pinigas > 0 && pinigas <= 2) {
            this.metaliniaiPinigai += pinigas
            console.log('monetos ' + pinigas);
            return;
        }
        if (pinigas > 2) {
            this.popieriniaiPinigai += pinigas
            console.log('popieriniai ' + pinigas);
            return;
        }

    }
    skaiciuoti() {

        const visaSuma = this.popieriniaiPinigai + this.metaliniaiPinigai
        console.log('Iš viso turiu ' + this.popieriniaiPinigai + ' popierinių ir ' + this.metaliniaiPinigai + ' monetų. Bendrai turiu ' + visaSuma + ' pinigų.');


    }

}

const pinigai = new Pinigine(8, 1)
console.log(pinigai);

pinigai.ideti(1.5)
pinigai.ideti(6)

pinigai.skaiciuoti()




// 3. Sukurti klasę Troleibusas. Konstruktoriuje sukurti savybę keleiviuSkaicius kuri yra lygi 0. Parašyti du metodus: ilipa(keleiviuSkaicius) ir islipa(keleiviuSkaicius). O taip pat parašyti metoda vaziuoja(), kuris į konsolę išvestų troleibusu važiuojančių keleivių skaičių. Atkreipkite dėmesį, kad troleibusu važiuoti neigiamas keleivių skaičius negali.


class Troleibusas {

    static visiKeleiviai = 0;
    static bendrasKeleiviuSkaicius(keleiviuSkaicius) {
        this.keleiviuSkaicius = visiKeleiviai;

    }

    constructor() {
        this.keleiviuSkaicius = 0;
    }
    static bendrasKeleiviuSkaicius(keleiviuSkaicius) {
        Troleibusas.visiKeleiviai += keleiviuSkaicius;
    }

    ilipa(keleiviuSkaicius) {
        this.keleiviuSkaicius += keleiviuSkaicius;
        Troleibusas.bendrasKeleiviuSkaicius(keleiviuSkaicius);
    }

    islipa(keleiviuSkaicius) {
        const liko = Math.max(this.keleiviuSkaicius - keleiviuSkaicius, 0);
        const pakeitimas = this.keleiviuSkaicius - liko;
        this.keleiviuSkaicius = liko;
        Troleibusas.bendrasKeleiviuSkaicius(-pakeitimas)

        // if(this.keleiviuSkaicius >= keleiviuSkaicius){
        //     this.keleiviuSkaicius -= keleiviuSkaicius;
        // } else{
        //     throw new Error ('Gintare, tiek keleivių nėra')
        // }//innformuoja kodo naudotoją, kad kažką netaip padarė.
    }

    //arba 
    // islipa(islipantys) {
    // if (this.keleiviuSkaicius > islipantys) {
    //     this.keleiviuSkaicius -= islipantys;
    //     }
    // }
    vaziuoja() {
        console.log('Troleibuso keleivių skaičius: ' + this.keleiviuSkaicius);
    }
    static keleiviuSkaiciusVisuoseTroleibusuose() {
        console.log('Bendras keleivių skaičius visuose troleibusuose: ' + Troleibusas.visiKeleiviai);

    }

}

const troleibusas = new Troleibusas()
const troleibusas2 = new Troleibusas()
const troleibusas3 = new Troleibusas()

troleibusas.ilipa(5)
troleibusas.ilipa(5)
troleibusas.islipa(33)
troleibusas.vaziuoja()

troleibusas2.ilipa(1)
troleibusas2.ilipa(5)
troleibusas2.islipa(3)
troleibusas2.vaziuoja()

Troleibusas.keleiviuSkaiciusVisuoseTroleibusuose()


//4. (STATIC) Sukurti metodą keleiviuSkaiciusVisuoseTroleibusuose(), kuris rodytų bendrą keleivių skaičių visuose Troleibusas objektuose. Bendram kelevių skaičiaus skaičiavimui sukurkite statinį metodą bendrasKeleiviuSkaicius(keleiviuSkaicius), kuris pridėtų arba atimtų keleivius iš statinės savybės visiKeleiviai (kurioje yra įrašytas bendras keleivių skaičius). Taip pat atitinkamai modifikuokite metodus ilipa(keleiviuSkaicius) ir islipa(keleiviuSkaicius).

//6. Patobulinti 2 uždavinio piniginę taip, kad būtų galima skaičiuoti kiek piniginėje yra monetų ir kiek banknotų. Parašyti metodą monetos(), kuris skaičiuotų kiek yra piniginėje monetų ir metoda banknotai() - popierinių pinigų skaičiavimui. Kiekvieną atskirą dėjimą (ideti(kiekis) metodo kvietimą) laikykite vienu banknotu ar viena moneta.(kaip ir atlikta).

//7. (STATIC) Klasėje Kibiras1 (pirmas uždavinys) sukurti metodą akmenuSkaiciusVisuoseKibiruose(), kuris rodytų bendrą visuose kibiruose pririnktų akmenų kiekį (visuose sukurtuose Kibiras objektuose). Skaičiuoti akmenim, kurie buvo surinkti visuose objektuose, naudokite statinę savybę visiAkmenys (kurioje yra įrašytas ir saugomas bendras akmenų skaičius). Taip pat atitinkamai modifikuokite metodus prideti1Akmeni(),  pridetiDaugAkmenu(kiekis).

// 8. Sukurti klasę Stikline. Sukurti savybes turis ir kiekis. Turis turi būti pasirenkamas objekto kūrimo metu. Parašyti metodą ipilti(kiekis), kuris keistų savybę kiekis. Jeigu stiklinės tūris yra mažesnis nei pilamas kiekis- kiekis netelpa ir būna lygus tūriui. Parašyti metodą ispilti(), kuris grąžiną kiekį. Pilant išpilamas visas kiekis, tas kas netelpa, nuteka per stalo viršų.  Sukurti metodą stiklinejeYra(), kuris į konsolę atspausdintų kiek stiklinėje yra skysčio. Sukurti tris stiklinės objektus su tūriais: 200, 150, 100. Didžiausią pripilti pilną ir tada ją ispilti į mažesnę stiklinę, o mažesnę į dar mažesnę.