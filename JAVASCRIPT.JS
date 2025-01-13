// console and alert are developers tools used for
//  debugging(finding solutions  ) to codes , alert will alert values
// and console prints out the values to your console.

// alert('john')
// window.alert(7777)
// alert(999999999999999)

// for accessing your console. there are 
// short cut keys are ctrl+shift+i  ,   or f12 key, or right-click and inspect


console.log(88888)
//console.warn(8888888)
//console.info('emmanuel')

// document.getElementById("dem").innerHTML= "hello world !"


// document.getElementById("demo").style.color="red"


// document.getElementById("demo").style.fontSize="100px"


    document.addEventListener("DOMContentLoaded", function () {
        const elements = document.getElementsByClassName("ren");
        for (let i = 0; i < elements.length; i++) {

            elements[i].style.color = "BLUE";
        };
    });


    document.addEventListener("DOMContentLoaded", function(){
        const elements =document.querySelectorAll("#ren");
        elements.forEach(elements => {
            elements.style.color="red"
        })
    })



     
//     let boy = "peter"

//     let  Boy = 999

//     console.log(boy)
//    console.log(Boy)
//     alert(Boy)

// let name = john
let products = ["car", "phone", "watch",true,"name:john"]
console.log(products[3])


const product = ['james', false] 
console.log(product)

var produce = ['jeep', 'home']
console.log(produce)

function variable() {
    let james= "this is my non-constant variable john"
    const john= "this is my constant vatriable"

    console.log(james)
    console.log(john)

}



console.log


// data types are classification datas based on
// different categories. every data types has different value

// string="" or ''
// numbers= 9999
// boolean= true or false
// array=[] has the values inside the square-bracket
// object={} has value inside a curly-bracelets
// undefined
// null

// rule of naming variable: you dont start a variable name
// with a number, but you can end with number for instance name1 instead of"1name"
// variable can start with underscore symbol"__" __name




let count =5
let newCount=++count

// let number = 5;
// let factorial = 5;
// // let count = 5;
// let newCount = ++count; // count is incremented to 6, then newCount is set to 6


let number = 5; // Let's find the factorial of 5
let factorial = 1; // Start with 1 because factorial of 0 is 1

for (let i = 1; i <= number; i++) {
  factorial *= i; // Multiply factorial by i (factorial = factorial * i)
  console.log(`Factorial after multiplying by ${i}: ${factorial}`);
}

console.log(`The factorial of ${number} is ${factorial}`);
// Output: The factorial of 5 is 120