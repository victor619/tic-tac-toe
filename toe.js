const cells = document.getElementsByClassName(`cells`)
const display = document.getElementById("winner")
let index = -1

Array.from(cells).forEach(cells=>cells.addEventListener(`click`,theGame))

function theGame(e){
     index++
     let num = index%2 == 0 ?`X`:`O`
     e.target.innerHTML = num
}

function Winner(w,x,y,z){
     const boxes = document.getElementsByClassName(`cells`)
     for (let i = 0; i < boxes.length; i++) {
          if(boxes[w].innerHTML == z && boxes[x].innerHTML === z && boxes[y].innerHTML === z ){
               display.innerHTML = `${z} wins`
          }
          // else{
          //      display.innerHTML = `it is a draw`
          // }
     }
}

let watch  = () => (window.addEventListener('click',keepWatch))


function keepWatch(){
Winner(0,1,2,"X")
Winner(3,4,5,"X")
Winner(6,7,8,"X")
Winner(0,3,6,"X")
Winner(1,4,7,"X")
Winner(2,5,8,"X")
Winner(0,4,8,"X")
Winner(2,4,6,"X")

Winner(0,1,2,"O")
Winner(3,4,5,"O")
Winner(6,7,8,"O")
Winner(0,3,6,"O")
Winner(1,4,7,"O")
Winner(2,5,8,"O")
Winner(0,4,8,"O")
Winner(2,4,6,"O")
}
setInterval(watch,1000)
