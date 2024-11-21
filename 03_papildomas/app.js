console.log('Nd3 (papildomi)');

// 1. Html faile sukurkite ul tagą (tiesiogiai). Į sukurtą tagą, su JS, sudėkite li tagus su iš masyvo A nuskaitytais gyvūnais.
const A = [
    'Bebras',
    'Zebras',
    'Vilkas',
    'Lapė',
    'Barsukas',
    'Voverė',
    'Laukinis katinas',
    'Šuo',
    'Naminis katinas',
];

const B = [
    'Kalakutas',
    'Višta',
    'Antis',
    'Žąsis',
    'Ančiasnapis'
];

const C = [
    'Višta',
    'Gaidys',
    'Šernas',
    'Lapė',
    'Vilkas',
    'Šuo dingo',
    'Barsukas',
    'Voverė',
    'Šuo',
    'Naminis katinas',
    'Laukinis katinas',
    'Šuo atsirado',
    'Bebras',
    'Ožys'
];



//sprendimas

const ul = document.querySelector('#nr1');
A.forEach(A => {
    let li = document.createElement('li');
    li.innerText = A;
    ul.appendChild(li);

})


//2. Html faile sukurkite ul tagą (tiesiogiai). Į sukurtą tagą, su JS, sudėkite li tagus su iš masyvo A nuskaitytais gyvūnais išdėliotais abėcėline tvarka.

//????? klausimas 1: kodedėl nesigauna tarpas nors sąrašą padariau naują ir atskirą, nepridėtą prie to paties? dedu ir į atskirus id vis tiek gaunasi kaip vienas sąrašas, jei tiesiai į body dedu irgi gaunasi vienas sąrašas.

//sprendimas
const naujasUl = document.querySelector('#nr2');

A.sort((a, b) => a.localeCompare(b, 'lt'))
    .forEach(A => {
        const li = document.createElement('li');
        li.innerText = A;
        naujasUl.appendChild(li);
    })

//3. Html faile sukurkite ul tagą (tiesiogiai). Į sukurtą tagą, su JS, sudėkite li tagus su iš masyvų A ir B nuskaitytais gyvūnais išdėliotais abėcėline tvarka (Rūšiavimas turi būti bendras tarp abiejų masyvų, NE kiekvieno atskirai).#pamastykKaip

//sprendimas

const listas = document.querySelector('#nr3');
const AB = [...A, ...B];

AB.sort((a, b) => a.localeCompare(b, 'lt'))
    .forEach(AB => {
        const sar = document.createElement('li');
        sar.innerText = AB;
        listas.appendChild(sar);

    })

// 4. Html faile sukurkite section tagą (tiesiogiai). Į sukurtą tagą, su JS, sudėkite div tagus, kurie yra mėlyni apskritimai su centre užrašytais iš masyvo A nuskaitytais gyvūnais.

const burbulai = document.querySelector('#nr4');


A.forEach(A => {
    const divas = document.createElement('div');
    divas.style.width = '100px';
    divas.style.height = '100px';
    divas.style.borderRadius = '50px';
    divas.style.backgroundColor = 'skyblue';
    divas.style.textAlign = 'center';
    divas.innerText = A;
    divas.style.display = 'flex'
    divas.style.alignItems = 'center';
    divas.style.justifyContent = 'center'
    burbulai.style.display = 'flex';
    burbulai.appendChild(divas);
});

//??? nepavyksta padaryti ir nesuprantu kaip padaryti, kad kiekvienas žodis atsidurtų atskirame burbule. kol kas gaunasi tik vieas burbulas su vienu žodžiu. Nesuprantu kaip tai


//5. Html faile sukurkite section tagą (tiesiogiai). Į sukurtą tagą, su JS, sudėkite div tagus, kurie yra raudoni apskritimai su centre centre užrašytais iš masyvo B nuskaitytais gyvūnais ir tų gyvūnų raidžių skaičiumi.


const burbulai2 = document.querySelector('#nr5');


B.forEach(B => {
    const divas2 = document.createElement('div');
    divas2.style.width = '100px';
    divas2.style.height = '100px';
    divas2.style.borderRadius = '50px';
    divas2.style.backgroundColor = 'crimson';
    divas2.style.textAlign = 'center';
    divas2.innerText = B + ' ' + B.length;
    divas2.style.display = 'flex'
    divas2.style.alignItems = 'center';
    divas2.style.justifyContent = 'center';
    burbulai2.style.display = 'flex';
    burbulai2.appendChild(divas2);
});



// 6. Html faile sukurkite section tagą (tiesiogiai). Į sukurtą tagą, su JS, sudėkite div tagus, kurie yra žali apskritimai su centre užrašytais gyvūnais, nuskaityto iš masyvo A. Dėkite tik tuos gyvūnus, kurie savo pavadinime turi tik vieną žodį.

const burbulai3 = document.querySelector('#nr6');

const katinai = A.filter(pavadinimas => {
    const vienas = pavadinimas.split(" ");
    return vienas.length === 1
})

katinai.forEach(pavadinimas => {
    const div = document.createElement('div');
    div.innerText = pavadinimas;
    div.style.width = '100px';
    div.style.height = '100px';
    div.style.borderRadius = '50px';
    div.style.backgroundColor = 'green';
    div.style.textAlign = 'center';
    div.style.display = 'flex'
    div.style.alignItems = 'center';
    div.style.justifyContent = 'center';
    burbulai3.style.display = 'flex';
    burbulai3.appendChild(div);
})


// 7. Html faile sukurkite section tagą (tiesiogiai). Į sukurtą tagą, su JS, sudėkite span tagus, kurie yra geltoni apskritimai su centre užrašytais iš masyvo B nuskaitytų gyvūnų pavadinimų raidėm. Kiekvienas span tagas- atskira raidė. (visų gyvūnų visos raidės atskiruose span taguose).#ciklasCikle


//??????? kodėl man gaunasi vienas žodis, o ne atskiros eilutės su atskirais žodžiais?
const uzd7 = document.querySelector('#nr7')


B.forEach(B => {
    let raides = B.split('');
    const divas1 = document.createElement('div')
    raides.forEach(raides => {
        let span = document.createElement('span');
        span.innerText = raides;
        span.style.width = '40px';
        span.style.height = '40px';
        span.style.borderRadius = '20px';
        span.style.backgroundColor = 'yellow';
        span.style.textAlign = 'center';
        span.style.display = 'inline-flex'
        span.style.alignItems = 'center';
        span.style.justifyContent = 'center';
        divas1.appendChild(span);

    })
uzd7.appendChild(divas1)

})

//8. Html faile sukurkite du ul tagus (tiesiogiai). Į  vieną sukurtą tagą, su JS, sudėkite li tagus su iš masyvo C nuskaitytais gyvūnais, kurių pavadinimas ne ilgesnis kaip 6 raidės, į kitą likusius.



// C.forEach(C => {
//     let li = document.createElement('li');
//     li.innerText = C;
//     ul.appendChild(li);

// })

// for (let i = 0; i < C.length; i++) {
//     if ([i] > 6){
//         let ilgesni = document.createElement('li');
//         ilgesni.innerText = C;
//         uzd8ul.appendChild(ilgesni);
//     }
    
// }


//??? kodėl nepavyksta atskirti dviejų lentelių?
const uzd8ul = document.querySelector('#nr8 .vienas');
const uzd8ul2 = document.querySelector('#nr8 .du');

const ilgesni = C.filter(zodis => zodis.length > 6);
const trumpesni = C.filter(zodis1 => zodis1.length <= 6);

ilgesni.forEach(ilgesni => {
    let li = document.createElement('li');
    li.innerText = ilgesni;
    li.style.color = 'green'
    uzd8ul.appendChild(li);
})
trumpesni.forEach(trumpesni => {
    let li1 = document.createElement('li');
    li1.innerText = trumpesni;
    li1.style.color = 'blue'
    uzd8ul2.appendChild(li1)
})




//9. Html faile sukurkite ul tagą (tiesiogiai). Į sukurtą tagą, su JS, sudėkite li tagus su iš masyvo B nuskaitytais gyvūnais. Išfiltruokite ir nedėkite šunų.

const uzd9 = document.querySelector('#nr9');

C
    .filter(gyvunas => gyvunas !== 'Šuo' && gyvunas !== 'Šuo dingo' && gyvunas !== 'Šuo atsirado')
    .forEach(gyvunas => {
        const li = document.createElement('li');
        li.innerText = gyvunas;
        uzd9.appendChild(li);
    });




//10. Uždavinį atlikite atskirame html faile. Visame ekrane atsitiktine tvarka “išmėtykite“ iš masyvo C nuskaitytus gyvūnus. Kad būtų daugiau gyvūnų, tą patį masyvą nuskaitykite 10 kartų. Gyvūnų pavadinimų raidžių dydis- atsitiktinis nuo 10px iki 100px. Gyvūnų pavadinimų raidžių spalva atsitiktinė. Pavadinimai turi tolygiai (pagal funkciją rand()) dengti visą ekraną (funkcijos duotos 02. DOM ir Cycles (one & four edition)).#fun


const totalWords = C * 10;
let words = '';

for (let i = 0; i < totalWords; i++) {
    const element = array[i];
    
}





















