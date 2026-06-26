let myInput=document.getElementById("myInput");
let myResult=document.getElementById("myResult");
let toCelsius=document.getElementById("toCelsius");
let toFahrenheit=document.getElementById("toFahrenheit");
let mySubmit=document.getElementById("mySubmit");



function convert(myInput){
   if(toFahrenheit.checked){
    myInput=(myInput*9/5)+32;
    myResult.textContent = myInput.toFixed(1) +"ºF"
   }
   else if(toCelsius.checked){
    myInput=(myInput-32)*5/9;
    myResult.textContent = myInput.toFixed(1) +"ºC"
   }
   
}


