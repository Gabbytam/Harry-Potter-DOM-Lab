document.addEventListener('DOMContentLoaded', ()=>{
    console.log('DOM is loaded!')
})

const container= document.getElementById('container');
console.log(container);

const h1= document.createElement('h1');
//console.log(h1);
h1.innerText= 'Hogwarts';
//document.body.appendChild(h1); //this would append the created h1 element to the body
container.appendChild(h1);

const h2= document.createElement('h2');
h2.innerText= 'Gabrielle';

const h3= document.createElement('h3');
h3.innerText= 'Slytherin';
//console.log(h3);

const h4= document.createElement('h4');
h4.innerText= 'Fredrick';
h4.className= 'owl';
console.log(h4);

const h4Wand= document.createElement('h4');
h4Wand.innerText= 'Birch Wand with Phoenix Feather Core';

container.appendChild(h2);
container.appendChild(h3);
container.appendChild(h4);
container.appendChild(h4Wand);

let ul= document.createElement('ul');
ul.setAttribute('data-storage','trunk');
//console.log(ul);
ul.innerText='Trunk:';
container.appendChild(ul);


//to be able to see this function work, append the ul to the html(container specifically)
let listItems= ['butter beer', 'invisible cloak', 'magic map', 'time turner', 'leash', 'Bertie Bott\'s Every Flavor [Jelly] Beans'];

function addListItems() { 
    for (var i = 0; i < listItems.length; i++) { 
        let li= document.createElement('li');
        li.innerText= listItems[i];
        if(listItems[i]=== 'invisible cloak'|| listItems[i]==='magic map' || listItems[i]==='time turner'){
            li.className= 'secret';
        } else if(listItems[i]=== 'leash'){
            li.className= 'owl';
        }
        ul.appendChild(li); 
    } 
} 
//DONT FORGET TO CALL THE FUNCTION
addListItems();

let h5= document.createElement('h5');
h5.innerText= 'Spring 2017';
container.appendChild(h5);

let table= document.createElement('table');
container.appendChild(table);
//console.log(table); //check if table is there 


//creating and appending two table headings for Day and Classes, add to table 
let tableHead= document.createElement('thead');
table.appendChild(tableHead);

let th1= document.createElement('th');
th1.innerText= 'Day';
let th2= document.createElement('th');
th2.innerText= 'Classes';

tableHead.appendChild(th1);
tableHead.appendChild(th2);

//creating and appending enough table rows so that table data can later be appended 
let tableRow1= document.createElement('tr');
table.appendChild(tableRow1);
let tableRow2= document.createElement('tr');
table.appendChild(tableRow2);
let tableRow3= document.createElement('tr');
table.appendChild(tableRow3);
let tableRow4= document.createElement('tr');
table.appendChild(tableRow4);
let tableRow5= document.createElement('tr');
table.appendChild(tableRow5);

//creating, editing, and appending table datas for M-F, for day section 
let td1= document.createElement('td');
td1.innerText= 'Monday';
tableRow1.appendChild(td1);

let td2= document.createElement('td');
td2.innerText= 'Tuesday';
tableRow2.appendChild(td2);

let td3= document.createElement('td');
td3.innerText= 'Wednesday';
tableRow3.appendChild(td3);

let td4= document.createElement('td');
td4.innerText= 'Thursday';
tableRow4.appendChild(td4);

let td5= document.createElement('td');
td5.innerText= 'Friday';
tableRow5.appendChild(td5);


//creating table datas to go along side M-F, for the Classes section
let td6= document.createElement('td');
td6.innerText= 'Herbology & Potions & Quidditch practice';
tableRow1.appendChild(td6);

let td7= document.createElement('td');
td7.innerText= 'Divination & Transfiguration';
tableRow2.appendChild(td7);

let td8= document.createElement('td');
td8.innerText= 'History of Magic & Defense Against the Dark Arts';
tableRow3.appendChild(td8);

let td9= document.createElement('td');
td9.innerText= 'Charms & Potions & Quidditch practice';
tableRow4.appendChild(td9);

let td10= document.createElement('td');
td10.innerText= 'Transfiguration & Defense Against the Dark Arts';
tableRow5.appendChild(td10);

