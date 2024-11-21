function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}



//1

const n1 = document.querySelector('#nr1');

let nr1h1 = '';
let nr1h4 = '';



// document.getElementById('#nr1').nr1h1(para);


for (let i = 1; i <= 14; i++) {
    nr1h1 += `<h1>${4}</h1>`;
}

for (let i = 1; i <= 14; i++) {
    nr1h4 += `<h4>${1}</h4>`;
}

let ats = nr1h1 + nr1h4;

nr1.innerHTML = ats;

//kitas būdas

// for (let i = 1; i <= 28; i++){
//     if(i <= 14){
//         nr1h1 += `<h1>${4}</h1>`
//         nr1h4 += `<h4>${1}</h4>`
//     }
// }

//nr1.innerHTML = nr1h1 + nr1h4;



//2


const nr2 = document.querySelector('#nr2');
const nr2skaicius = rand(14, 44);
let nr2ats = '';

for (let i = 0; i <= 44; i++) {
    let nr2skaicius = rand(14, 44);

    if (nr2skaicius % 4 === 0) {
        nr2ats += `<div style="color: red";>${nr2skaicius}</div>`;
    } else {
        nr2ats += `<div style="color: blue";>${nr2skaicius}</div>`;
    }
}
nr2.innerHTML = nr2ats;


//3

const nr3 = document.querySelector('#nr3');

let nr3DivsHtml = '';

for (let i = 1; i <= 14; i++) {
    nr3DivsHtml += `<div></div>`;
}
nr3.innerHTML = nr3DivsHtml;

//su createElement variantas:
// const nr3 = document.querySelector("#nr3");

// for (let i = 0; i < 14; i++) {
//   const nr3DivsHtml = document.createElement("p");
//   nr3DivsHtml.style.width = "50px";
//   nr3DivsHtml.style.height = "50px";
//   nr3DivsHtml.style.border = "1px solid blue";
//   nr3DivsHtml.style.margin = "5px";
//   nr3DivsHtml.style.backgroundColor = "blue";
//   nr3DivsHtml.style.borderRadius = "50%";
//   nr3.appendChild(nr3DivsHtml);
// }


//4

const nr4 = document.querySelector('#nr4');

let nr4divs = '';

for (let i = 0; i <= 8; i++) {
    if (i % 2) {
        nr4divs += `<div style="background-color: blue";></div>`
    } else {
        nr4divs += `<div style="background-color: red";></div>`

    }
}

nr4.innerHTML = nr4divs;

//kitas sprendimo būdas, Manto:
// let circle2 = ""
 
// for (let i = 0; i < 4; i++) {
//       circle2 += `<span style= "display:inline-block; width:50px; height:50px; border-radius:50%; background-color: blue"></span>`
//          circle2 += `<span style= "display:inline-block; width:50px; height:50px; border-radius:50%; background-color: red"></span>`
   
// }
// uzduotis4.innerHTML = circle2


//5

const nr5 = document.querySelector('#nr5');

let nr5divs = '';


for (let i = 4; i <= 14; i++) {
    nr5divs += `<div> 4 x ${i} = ${4 * i}</div>`;
}
nr5.innerHTML = nr5divs;

//kitas sprendimo būdas
// let table = `<table border>`;
// for (let i = 4; i <= 14; i++) {
//     let sum = 4 * i;
//     table += `<tr><td>4*${i}</td> <td>${suma}</td></tr>`
// }

// table += `</table>`

// nr5.innerHTML= table;


// 6

const nr6 = document.querySelector('#nr6');

let nr6divs = '';

for (let i = 1; i < 444; i++) {
    if (i % 44 == 0) {
        nr6divs = nr6divs + '* <br>'
    } else {
        nr6divs = nr6divs + '*'
    }
}
nr6.innerHTML = nr6divs;


// kitas sprendimo būdas:
// const nr6 = document.querySelector('#nr6');

// let star = '';
// for (let i = 1; i <= 444; i++) {
//     star += '<span>*</span>';
// }
// if(i % 44 === 0){
// star += `<br/>`;
// }

// nr6.innerHTML = star;

//7

const nr7 = document.querySelector('#nr7');



// const s7 = document.querySelector('section:nth-of-type(7)');
nr7.style.display = 'flex';
nr7.style.flexWrap = 'wrap';
nr7.style.padding = '20px 0';
nr7.style.position = 'relative';

function randomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padEnd(6, '0');
}


for (let i = 1; i <= 14; i++) {
    let U7 = document.createElement('div');
    U7.style.width = 300 - (i * 20) + 'px';
    U7.style.height = 300 - (i * 20) + 'px';
    U7.style.backgroundColor = randomColor();
    U7.style.position = 'absolute';
    U7.style.left = i + '9px';
    U7.style.top = i + '9px';

    nr7.appendChild(U7);
}


//8

const nr8 = document.querySelector('#nr8');
let kvadratasIsZenklu = "";

for (let i = 0; i < 41; i++) {
    let row = `<div style="display:grid; grid-template-columns:repeat(41, 1.2em)">`
    
    for (let j = 0; j < 41; j++) {
       row += `<span style= "color: green;">&#9632;</span>`;
        
    }

    row += `</div>`
    kvadratasIsZenklu += row
}
nr8.style.position = 'relative';
nr8.style.marginTop = '300px';
nr8.innerHTML = kvadratasIsZenklu;



// 9 


const nr9 =document.querySelector('#nr9');
 let kvadratasSuIstrizaine = "";

 let sizes = 41;

 for (let i = 0; i < sizes; i++) {
    let row = `<div style='display:flex'>`;

    for (let j = 0; j <sizes; j++) {
        let color = '';
        if (i===j || sizes-1-i===j){
            color = 'yellow';
        } else {
            color = 'green';
        }

        row += `<span style="color: ${color}">&#9632;</span>`;
        
    }

    row += `</div>`;
    kvadratasSuIstrizaine += row;
 }

nr9.innerHTML = kvadratasSuIstrizaine;






