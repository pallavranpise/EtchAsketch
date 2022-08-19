let n = 2;
const container = document.querySelector(".container");
const mybutton = document.createElement("button");
mybutton.innerHTML = "play";
document.querySelector('body').insertBefore(mybutton,container);


mybutton.addEventListener("click", () => {
    container.innerHTML = '';
    n++;
    for (let index = 1; index <= n*n; index++) {
        const mydiv = document.createElement("button");
        // mydiv.classList.add('flipped');
        mydiv.style.cssText=`width:${Math.floor(500/(n))}px;height:${Math.floor(500/(n))}px`;
        mydiv.innerHTML = index;

        container.appendChild(mydiv);
    }
});

const cards = document.querySelector('button');
Array.from(cards).forEach(card => {
    console.log('card');
  card.addEventListener( 'click', function() {
    // card.classList.add('is-flipped');
    card.innerHTML = 'b';
  });
})
