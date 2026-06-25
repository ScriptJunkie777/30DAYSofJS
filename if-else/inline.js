//window.alert(`this is not the website youve wished for is it`)
//let firstName="nikhil";let bro=19;console.log(`my name is  ${bro}`);let broAge =(19,true);


//let firstName="nikhil gowda"
//let age=19;
//let isStudent=true;
//document.getElementById("1").textContent = `your name is ${firstName}`;
//document.getElementById("2").textContent = `You are ${age} years old`;
//document.getElementById("3").textContent = `Enrolled:${isStudent}`;

//let username=window.prompt("whats your name");



/*
document.getElementById("myCheck").onclick = function(){
username= document.getElementById("myText").value;
  document.getElementById("myH1").textContent = `Hello ${username}`
}
  */
  
/*
let radius;
const PI = 3.14159;
let circumference;

document.getElementById("mySubmit").onclick = function(){
  radius = document.getElementById("myText").value;
  radius = Number(radius);
  circumference = 2 * PI * radius;
  
  document.getElementById("myAns").textContent = `the circumference is ${circumference}cm`
}
  */

/*
const decreaseBtn=document.getElementById("decreaseBtn");
const resetBtn=document.getElementById("resetBtn");
const increaseBtn=document.getElementById("increaseBtn");

const countLabel =document.getElementById("countLabel");
let count=0;


increaseBtn.onclick=function(){
  count++;
  countLabel.textContent=count;

}

decreaseBtn.onclick=function(){
  count--;
  countLabel.textContent=count;

}

resetBtn.onclick=function(){
  count=0;
  countLabel.textContent=count;

}*/
/*
const myCheckBox= document.getElementById("myCheckBox");
const VisaBtn= document.getElementById("visaBtn");
const masteCardBtn= document.getElementById("masteCardBtn");
const rupayBtn= document.getElementById("rupayBtn");
const mySubmit= document.getElementById("mySubmit");
const myParagraph= document.getElementById("myParagraph");
const myPayment= document.getElementById("myPayment");

mySubmit.onclick = function(){

  if(myCheckBox.checked){
    myParagraph.textContent = `YOU ARE SUBSCRIBED THANK YOU`;
  }
  else {
     myParagraph.textContent = `YOU ARE not SUBSCRIBED `;
  }
}
*/
const myInput=document.getElementById("myInput");
const mySubmit=document.getElementById("mySubmit");
const myResult=document.getElementById("myResult");
let age;
mySubmit.onclick = function(){
  if(age<0){
    
    myResult.textContent =`you are a child twin`
  }
  else if(age>100){
  
    
  }
  else if(age>=18){
    myResult.textContent =`you are cool asf`
  }
  else{

    myResult.textContent = `you must be 18+ to watch this cringe ass shit`
  }
}