function add(a,b){
    return a + b

}
function subtract(a,b){
    return a - b

}
function multiply(a,b){
    return a * b

}
function division(a,b){
    return a / b

}

function operate(a, op, b){
    if(op === 'add'){
       return add(a,b)
        
    }
    if(op === 'subtract'){
        display.textContent = subtract(a,b)
        
    }
    if(op === 'multiply'){
        display.textContent = multiply(a,b)
       
    }
    if(op === 'divide'){
        display.textContent = division(a,b)
    }
}

function changeDisplay(theid){
    display.textContent += mydict[theid.id]
}

mydict = {'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5, 'six': 6, 'seven': 7, 'eight': 8, 'nine': 9, 'ten': 10, 'zero': 0}


let theSum = []

const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const zero = document.querySelector('#zero');

const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const divide = document.querySelector('#divide');
const times = document.querySelector('#times');

const equals = document.querySelector('#equals');

one.addEventListener('click', function() {changeDisplay(one)
    console.log(`you clicked ${one.id}`)});
two.addEventListener('click', function() {changeDisplay(two)
    console.log(`you clicked ${two.id}`)});
three.addEventListener('click', function() {changeDisplay(three) 
    console.log(`you clicked ${three.id}`)});
four.addEventListener('click', function() {changeDisplay(four) 
    console.log(`you clicked ${four.id}`)});
five.addEventListener('click', function() {changeDisplay(five) 
    console.log(`you clicked ${five.id}`)});
six.addEventListener('click', function() {changeDisplay(six) 
    console.log(`you clicked ${six.id}`)});
seven.addEventListener('click', function() {changeDisplay(seven) 
    console.log(`you clicked ${seven.id}`)});
eight.addEventListener('click', function() {changeDisplay(eight) 
    console.log(`you clicked ${eight.id}`)});
nine.addEventListener('click', function() {changeDisplay(nine) 
    console.log(`you clicked ${nine.id}`)});
zero.addEventListener('click', function() {changeDisplay(zero) 
    console.log(`you clicked ${zero.id}`)});

plus.addEventListener('click', function() {
    theSum.push(parseInt(display.textContent))
    theSum.push('add')
    display.textContent = undefined

});

minus.addEventListener('click', function() {
    theSum.push(parseInt(display.textContent))
    theSum.push('minus')
    display.textContent = undefined

});

divide.addEventListener('click', function() {
    theSum.push(parseInt(display.textContent))
    theSum.push('divide')
    display.textContent = undefined

});
times.addEventListener('click', function() {
    theSum.push(parseInt(display.textContent))
    theSum.push('times')
    display.textContent = undefined

});



equals.addEventListener('click', function() {
    theSum.push(parseInt(display.textContent))
    console.log(theSum)
    for(i=0; i<theSum.length; i++){
        if(theSum[i] === 'add'){
            theSum[i+1]+=theSum[i-1]
            
        }
        if(theSum[i] === 'minus'){
            theSum[i+1] = theSum[i-1]-theSum[i+1]
            
        }
        if(theSum[i] === 'divide'){
            theSum[i+1] = theSum[i-1]/theSum[i+1]
            
        }
        if(theSum[i] === 'times'){
            theSum[i+1] = theSum[i-1]*theSum[i+1]
            
        }
    }
    console.log(theSum)
    display.textContent = `final answer: ${theSum[theSum.length-1]}`

    console.log(`you clicked ${equals.id}`)
});



