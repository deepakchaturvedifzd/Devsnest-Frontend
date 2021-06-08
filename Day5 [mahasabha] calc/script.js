

window.onload = function exampleFunction() {
  
    
function addfunc()
{
    let operand1 = Number(document.querySelector(".number1").value);
    let operand2 = Number(document.querySelector(".number2").value);

    // alert(operand1+operand2);
    console.log("pressed");

    let outputTxt = document.querySelector(".txt");

    outputTxt.innerHTML= operand1 + operand2;
}
function sub()
{
    let operand1 = Number(document.querySelector(".number1").value);
    let operand2 = Number(document.querySelector(".number2").value);

        let outputTxt = document.querySelector(".txt");

    outputTxt.innerHTML= operand1 - operand2;
}
function mul()
{
    let operand1 = Number(document.querySelector(".number1").value);
    let operand2 = Number(document.querySelector(".number2").value);  
    
        let outputTxt = document.querySelector(".txt");

    outputTxt.innerHTML= operand1 * operand2;
}
function div()
{
    let operand1 = Number(document.querySelector(".number1").value);
    let operand2 = Number(document.querySelector(".number2").value)
    
        let outputTxt = document.querySelector(".txt");

    outputTxt.innerHTML= operand1 / operand2;;       
}

document.querySelector(".addBtn").addEventListener("click",addfunc);

document.querySelector(".sub-btn").addEventListener("click",sub);

document.querySelector(".mul-btn").addEventListener("click",mul);

document.querySelector(".div-btn").addEventListener("click",div);
}