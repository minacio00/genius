let order = [];
let clickedOrder = [];
let score = 0;


const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

const shuffleOrder = () =>{
    let colorOrder = Math.floor(Math.random()*4);
    order[order.length] = colorOrder
    clickedOrder = [];

    order.forEach((element,index) => {
        let elementColor = createColorElement(order[index]);
        lightColor(elementColor, Number(index)+1);
    });
}

const lightColor = (element,number) =>{
    number = number*500;
    setTimeout(()=>{
        element.classList.add('selected');
    },tempo-250);
    setTimeout(()=>{
        element.classList.remove('selected');
    })
}

const checkOrder = ()=>{
    for(let i in clickedOrder){
        if(clickedOrder[i] != order[i]){
            lose();
            break;
        }
    }
    if(clickedOrder.length == order.length){
        alert(`Pontuação ${score}\nVocê acertou`);
        nextLevel();
    }
}

let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');
    setTimeout(() => {
        createColorElement(color).classList.remove('select');
    })

    checkOrder();
}