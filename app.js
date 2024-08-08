/*-------------------------------- Constants --------------------------------*/
const input = [""]


/*-------------------------------- Variables --------------------------------*/
let inputIndex= 0
let operator
/*------------------------ Cached Element References ------------------------*/

const display = document.querySelector(".display")
const calculator = document.querySelector("#calculator")

/*----------------------------- Event Listeners -----------------------------*/

calculator.addEventListener("click",(e)=> {
    console.log(e.target.innerText)
    if(e.target.classList.contains("number")) {
        input[inputIndex] += (e.target.innerText)
        display.textContent = input[inputIndex]
    }
    if(e.target.classList.contains("operator")) {
        inputIndex += 1
        input[inputIndex] = " "
        operator = (e.target.innerText)
    }
    if(e.target.innerText === "=") {
        let num1 = input[0]
        let num2 = input[1]
        console.log(parseInt(num1) + parseInt(num2))
        display.textContent = eval(`${num1} ${operator} ${num2}`)
    }

    if(operator === "C") {
        display.textContent=" "
        operator= " "
    }
    console.log(input)
})

/*-------------------------------- Functions --------------------------------*/




  

  
  



