

// rule two number
function makeRed() {
    document.body.style.backgroundColor = 'red'
}

// rule three number
const makePurple = document.getElementById('make-purple');
makePurple.onclick = function () {
    document.body.style.backgroundColor = 'purple'
}

// rule three number optional system

const makeBlue = document.getElementById('make-blue');

makeBlue.onclick = makeBlueColor;
function makeBlueColor() {
    document.body.style.backgroundColor = 'blue'
}


// rule four number addEventListener

const makeGreen= document.getElementById('make-green').addEventListener('click',function(){
    
    document.body.style.backgroundColor='green'
})


// rule four number optional system

const makeYellow=document.getElementById('make-yellow').addEventListener('click',makeYellowColor)

function makeYellowColor(){
    document.body.style.backgroundColor='yellow'
}

