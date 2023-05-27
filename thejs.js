function add(a,b){ return a + b }
function subtract(a,b){ return a - b }
function multiply(a,b){ return a * b }
function division(a,b){ 
    if(b===0){
        second = null
        alert('cant divide by zero')
        return '0'
    }
    return a / b 
}



function doEqual(){
    
    if(first!=null && second != null && oper != null){
        // first = parseInt(first)
        first = parseFloat(first)
        second = parseFloat(second)
        
        if(oper === 'add'){
            let answer = add(first,second)
            display.textContent = answer
            first = display.textContent
            second = null
            
        }
        if(oper === 'subtract'){
            let answer = subtract(first,second)
            display.textContent = answer
            first = display.textContent
            second = null
            
        }
        if(oper === 'multiply'){
            let answer = multiply(first,second)
            display.textContent = answer
            first = display.textContent
            second = null
        
        }
        if(oper === 'divide'){
            let answer = division(first,second)
            display.textContent = answer
            first = display.textContent
            second = null
            }
            
        }else{
            console.log('nothing ran')
        }
}





function changeDisplay(theid){
    console.log('this function ran')

    if (oper === null && first === null){
        display.textContent = mydict[theid.id]
        first = display.textContent

    }else if (oper === null && first != null){
        display.textContent += mydict[theid.id]
        first = display.textContent
    }else if (oper != null && second === null){
        display.textContent = mydict[theid.id]
        second = display.textContent

    }else if (oper != null && second != null){
        display.textContent += mydict[theid.id]
        second = display.textContent
    }
    
 
    
}

function backspaceer(){

    if(display.textContent != '0'){
        display.textContent = display.textContent.slice(0, -1)
    }

    if(display.textContent === ''){
        if (oper!=null){
            second = null
            display.textContent = '0'
        } else{
            first = null
            display.textContent = '0'
        }
        
    }
    
 
    
}


mydict = {'dot':'.','one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5, 'six': 6, 'seven': 7, 'eight': 8, 'nine': 9, 'ten': 10, 'zero': 0}


let first = null
let oper = null
let second = null
let dotUsed = false


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
const dot = document.querySelector('#dot');

const equals = document.querySelector('#equals');
const back = document.querySelector('#backspace');
const clear = document.querySelector('#clear');

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
dot.addEventListener('click', function() {
    if (dotUsed === false){
    changeDisplay(dot)
    dotUsed = true
    }else{
        alert('only one decimal point per number allowed 🙄')
    }
    
    console.log(`you clicked ${dot.id}`)});

plus.addEventListener('click', function() {
    doEqual()
    oper = 'add'
    dotUsed = false
    
});

minus.addEventListener('click', function() {
    doEqual()
    oper = 'subtract'
    dotUsed = false
    
});

divide.addEventListener('click', function() {
    doEqual()
    oper = 'divide'
    dotUsed = false
    

});
times.addEventListener('click', function() {
    doEqual()
    oper = 'multiply'
    dotUsed = false
    

});



equals.addEventListener('click', doEqual);
back.addEventListener('click', backspaceer);


clear.addEventListener('click', function() {
    first = null
    second = null
    oper = null
    display.textContent = '0'
});

document.addEventListener('keydown', function(event) {
    if (event.key === '/') {
      // Perform some action when the forward slash key is pressed
        doEqual()
        oper = 'divide'
        dotUsed = false
      console.log('Forward slash key pressed!');
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === '*') {
      // Perform some action when the forward slash key is pressed
        doEqual()
        oper = 'multiply'
        dotUsed = false
      console.log('multiply key pressed!');
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === '-') {
      // Perform some action when the forward slash key is pressed
        doEqual()
        oper = 'subtract'
        dotUsed = false
      console.log('Subtract key pressed!');
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === '+') {
      // Perform some action when the forward slash key is pressed
        doEqual()
        oper = 'add'
        dotUsed = false
      console.log('Addition key pressed!');
    }
  });

  var dict = {
    '0': zero,
    '1': one,
    '2': two,
    '3': three,
    '4': four,
    '5': five,
    '6': six,
    '7': seven,
    '8': eight,
    '9': nine
  };
  
  for (var key in dict) {
    (function(key) {
      document.addEventListener('keydown', function(event) {
        if (event.key === key) {
            changeDisplay(dict[key])
          // Perform some action when the corresponding number key is pressed
          console.log('Number key pressed: ' + dict[key]);
        }
      });
    })(key);
  }
  
  