let display = document.getElementById("display");

let isOperatorClicked = false;
let isEqualClicked = false;

let operator = '';
let firstnum;
let secondnum;

function reset() {
    isOperatorClicked = false;
    isEqualClicked = false;

    operator = '';
    firstnum = undefined;
    secondnum = undefined;
    display.value = "";
}

function clickNumber(number) {
    if (isOperatorClicked == true) {
        firstnum = display.value;
        console.log(firstnum);

        display.value = number;
        isOperatorClicked = false;

    } else {
        display.value += number;
    }
}

function clickOperator( operatorValue ) {
    isOperatorClicked = true;
    operator = operatorValue;
    isEqualClicked = false;
}

function clickEqual() {

    if (isEqualClicked) {
        firstnum = parseInt(display.value);
    } else {
        firstnum = parseInt(firstnum);
        secondnum = parseInt(display.value);
    }

    console.log('clickEqual()', firstnum, secondnum);

    let result;

    if (operator === '+') {
        result = firstnum + secondnum;
    } else if (operator === '-') {
        result = firstnum - secondnum;
    } else if (operator === '*'){
        result = firstnum * secondnum;
    }else if (operator === '/'){
        result = firstnum / secondnum;
    }

    display.value = result;
    isEqualClicked = true;
}