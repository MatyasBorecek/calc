const display = document.querySelector(".calculator-screen");
const buttons = document.querySelector(".calculator-keys");
const results = document.querySelector(".results");

let valuesOnDisplay = "";
const conditions =["*", "/", "+", "-", "."];

const _initDisplay = (init="0") =>{
    valuesOnDisplay = "";
    display.innerHTML = init;
};

const _updateDisplay = value =>{

    if(_checkCharacter(value)){
        valuesOnDisplay = valuesOnDisplay.concat(value);
        display.innerHTML = valuesOnDisplay;
    }
    else{
        console.log("Error calculator get undefined instead of your click");
    }

};

const _getCalcVal = () =>{
    valuesOnDisplay = eval(valuesOnDisplay);
    display.innerHTML = valuesOnDisplay;
    _initDisplay(valuesOnDisplay);
};

const _checkValue = (value) =>{
    valLength = valuesOnDisplay.length-1;

    if(conditions.includes(valuesOnDisplay.charAt(valLength)  ) ){
        if(conditions.includes(value)){
           valuesOnDisplay = valuesOnDisplay.replace(/.$/,value);
           display.innerHTML = valuesOnDisplay;
           return true;
        }
    }
    return  false;
};

const _checkCharacter = (char) => {
    return char !== undefined;
};

const _checkEval = () =>{
    return !(eval(valuesOnDisplay) === undefined || NaN);
};

const _print = () => {
        if(_checkEval()){
            results.innerHTML += `<br><h2>${valuesOnDisplay} = ${eval(valuesOnDisplay)}</h2>`;
            _getCalcVal();
        }
        else{
            results.innerHTML += `<br><h2>${valuesOnDisplay} = Error </h2>`;
            _initDisplay('Error');
        }
    };


buttons.addEventListener("click", e => {
    const value = e.target.value;

    if(value === "all-clear"){
        _initDisplay();
        return;
    }
    if(value === "="){
        _print();
        return;
    }
    if(_checkValue(value)){

    }
    else{
        _updateDisplay(value)
    }

});

window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    _initDisplay()
});


