var sum = myFunction1(1,2,"+");

function myFunction1(number1,number2,action){
if(action==="+"){
    return number1 + number2;

}
    
}
console.log(sum);

var minus = myFunction2(1,2,"-");
function myFunction2(number1,number2,action){
    if(action==="-"){
        return number1 - number2;
    }
}
console.log(minus)

var multiply = myFunction3(1,2,"*");
function myFunction3(number1,number2,action){
    if(action==="*"){
        return number1 * number2;
    }
}
console.log(multiply);

var divide = myFunction4(1,2,"/");
function myFunction4(number1,number2,action){
    if(action==="/"){
        return number2 / number2;
    }
}
console.log(divide);

console.log(Math.pow(5,2));


let text = "Text";
let tag = "<p>";

myFunc(text,tag);

function myFunc(str1, str2){
    let str3 = str2.substring(0,1) + "/" + str2.substring(1);
    console.log(str2+str1+str3);
}

console.log(farhenheittocelsius(5));
console.log(celsiustofarhenheit(20));

function farhenheittocelsius(farhenheit){
    return farhenheit+" F = "+ ((5/9)*(farhenheit-32))+" C"
}

function celsiustofarhenheit(celsius){
    return celsius+" C = "+ ((9/5)*celsius + 32) + " F";
}


