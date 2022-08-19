let n = 9;
const controls = document.createElement("div");
const container = document.querySelector(".container");
const play = document.createElement("button");
const decrease = document.createElement("button");
const increase = document.createElement("button");
const mode = document.createElement("button");
let grayMode = 0;

play.innerHTML = "play"
increase.innerHTML = "increase";
decrease.innerHTML = "decrease";
mode.innerHTML = "mode";
document.querySelector('body').insertBefore(controls,container);
controls.appendChild(play);
controls.appendChild(increase);
controls.appendChild(decrease);
controls.appendChild(mode);



play.addEventListener("click", () => {makeGrid();});
increase.addEventListener("click",()=>{n++;makeGrid()});
decrease.addEventListener("click",()=>{n--;makeGrid()});
mode.addEventListener("click",()=>{
    if(grayMode===0)mode.innerHTML='black';
    if(grayMode===1)mode.innerHTML='colors';
    if(grayMode===2)mode.innerHTML='gray';

    grayMode++;
    grayMode=(grayMode%3);
    makeGrid()
});


makeGrid();

function makeGrid(){
    container.innerHTML = '';
    const containerWidth = parseInt(window.getComputedStyle(container).width, 10);
    for (let index = 1; index <= n*n; index++) {
        const mydiv = document.createElement("div");
        mydiv.classList.add('flipped');
        mydiv.style.cssText=`width:${Math.floor(containerWidth/(n))}px;height:${Math.floor(containerWidth/(n))}px`;
        container.appendChild(mydiv);       
    }
    flipped(grayMode);
}

function flipped(grayMode){
    const cards = container.querySelectorAll('.flipped');
    cards.forEach(key=>key.addEventListener('mouseover',function() {
        if(grayMode===0){
        const itemColor = Number(this.style.backgroundColor.slice(-4,-1));
        this.style.backgroundColor = `rgba(0,0,0,${itemColor + 0.1})`;
        }else if(grayMode===1){
        this.style.backgroundColor = '#333';
        }else{
        this.style.backgroundColor = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
        }
        
    }));
    
}





