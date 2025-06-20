/* function doSomething(){
    alert('You did something');
}

addEventListener('click', doSomething); */

/* function doSomething(){
    console.log('You did something');
}

addEventListener('click', doSomething)
 */
/* function doSomething(event){
    console.log(event.type);
}

addEventListener('click', doSomething) */

//many devs abbreviate event to just e 


/* function doSomething(event){
    console.log(event.target);
}

addEventListener('click', doSomething) */


const clickParagraph = document.getElementById('click');
clickParagraph.addEventListener('click',() => console.log('click') );
clickParagraph.addEventListener('mousedown',() => console.log('down') );
clickParagraph.addEventListener('mouseup',() => console.log('up'));

const dblclickParagraph = document.getElementById('dblclick');
dblclickParagraph.addEventListener('dblclick', highlight);
function highlight(event){
event.target.classList.toggle('highlight');
}

const mouseHover = document.getElementById('mouse');
mouseHover.addEventListener('mouseover',highlight);
mouseHover.addEventListener('mouseout',highlight);


addEventListener('keydown',highlight);

addEventListener('keyup', (event) => console.log(`You stopped pressing the key ${event}`));

addEventListener('keypress', (event) => console.log(`You pressed the ${event}`));