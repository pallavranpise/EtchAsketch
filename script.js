let n = 1;
const container = document.querySelector(".container");
const play = document.createElement("button");
const decrease = document.createElement("button");
const increase = document.createElement("button");

play.innerHTML = "play"
increase.innerHTML = "increase";
decrease.innerHTML = "decrease";
document.querySelector('body').insertBefore(play,container);
document.querySelector('body').insertBefore(increase,container);
document.querySelector('body').insertBefore(decrease,container);

increase.addEventListener("click",()=>{n++;makeGrid()});
decrease.addEventListener("click",()=>{n--;makeGrid()});


function makeGrid(){
    container.innerHTML = '';
    const widthe = parseInt(window.getComputedStyle(container).width, 10);
    
    for (let index = 1; index <= n*n; index++) {

        const mydiv = document.createElement("button");
        mydiv.classList.add('flipped');

        mydiv.style.cssText=`width:${Math.floor(widthe/(n))}px;height:${Math.floor(widthe/(n))}px`;
        mydiv.innerHTML = index;
        
        container.appendChild(mydiv);
    }
    flipped();
}

function flipped(){
    
    const cards = container.querySelectorAll('.flipped');
    cards.forEach(key=>key.addEventListener('mouseover',function() {
        key.style.cssText += 'filter: brightness(50%);';
    }));
    
}



play.addEventListener("click", () => {
    makeGrid();
    
});


