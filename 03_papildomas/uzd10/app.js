
function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}


function randomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padEnd(6, '0');
}

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


//10. Uždavinį atlikite atskirame html faile. Visame ekrane atsitiktine tvarka “išmėtykite“ iš masyvo C nuskaitytus gyvūnus. Kad būtų daugiau gyvūnų, tą patį masyvą nuskaitykite 10 kartų. Gyvūnų pavadinimų raidžių dydis- atsitiktinis nuo 10px iki 100px. Gyvūnų pavadinimų raidžių spalva atsitiktinė. Pavadinimai turi tolygiai (pagal funkciją rand()) dengti visą ekraną (funkcijos duotos 02. DOM ir Cycles (one & four edition)).#fun



let words = '';



// for (let i = 0; i < 10; i++) {

//     C.forEach (words => {
//         const fontSize = rand(10, 100);
//         const color = randomColor();
//         const top = rand(0, window.innerHeight - fontSize);
//         const left = rand(0, window.innerWidth - fontSize);

//     words += `<div style='
//     position: absolute;
//     font-size: ${fontSize}px;
//     color: ${color};
//     opacity: 0.5;
//     top: ${top}px;
//     left: ${left}px;
//     '>${C[i]}</div>`



// })}

// document.body.innerHTML = words;


// console.log(words);


for (let i = 0; i < 10; i++) {

    for (let j = 0; j < C.length; j++) {
        const fontSize = rand(10, 100);
        const color = randomColor();
        const top = rand(0, window.innerHeight - fontSize);
        const left = rand(0, window.innerWidth - fontSize);
        words += `<div style='
            position: absolute;
            font-size: ${fontSize}px;
            color: ${color};
            opacity: 0.8;
            top: ${top}px;
            left: ${left}px;
         '> ${C[j]}</div>`;

    }

}
document.body.style.height = '100vh';
document.body.style.position = 'relative';
document.body.innerHTML = words

console.log(words);


