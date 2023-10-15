const charVal =document.getElementById("textarea");
let totalCount =document.getElementById("total-counter");
let remainingcount = document.getElementById("remaining-counter");



let userChar =0;
 //update character

 const updateCounter =() =>{
   userChar = charVal.value.length;
   totalCount.innerText = userChar;
   remainingcount.innerText = 360 -userChar;

  
 };
 charVal.addEventListener("keyup",() => updateCounter());



 //copy text
 const copyText =() => {
   charVal.select();
   charVal.setSelectionRange (0,9999);  //for mobile
   Navigator.clipboard.writeText(charVal.value);//imp
 };



