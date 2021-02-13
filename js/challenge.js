let i = -1;
let t = 0;
let interval = setInterval(countUp, 1000);
function countUp(){
    i++;
    document.querySelector('h1#counter').textContent = i;
    t = 0;
}
increment();