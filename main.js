document.getElementById("answerdisplay").innerHTML = 0;

var num1 = 0;
var num2 = 0;
var curr_operator = '';



function writeNumber(number) {
    if (curr_operator != '' && document.getElementById("answerdisplay").innerHTML == num1) {
        document.getElementById("answerdisplay").innerHTML = number
    }
    else if (document.getElementById("answerdisplay").innerHTML == 0){
        document.getElementById("answerdisplay").innerHTML = number
    }
    else {
        document.getElementById("answerdisplay").innerHTML += number;
        total_char_count++;
    }
}

function writeOperator(operator) {
    num1 = Number(document.getElementById("answerdisplay").innerHTML);
    curr_operator = operator;
}

function clearText() {
    document.getElementById("answerdisplay").innerHTML = 0;
    num1 = 0;
    num2 = 0;
    curr_operator = '';
}

function solve() {
    num2 = Number(document.getElementById("answerdisplay").innerHTML);
    //alert(`Num1: ${num1}\nOperand: ${curr_operator}\nNum2: ${num2}`);
    
    if(curr_operator == "x") { num1 = num1 * num2; }
    else if(curr_operator == "/") { num1 = num1 / num2; }
    else if(curr_operator == "+") { num1 = num1 + num2; }
    else if(curr_operator == "-") { num1 = num1 - num2; }

    document.getElementById("answerdisplay").innerHTML = num1;
    curr_operator = '';
    num2 = 0;

}