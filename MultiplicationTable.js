const prompt = (require("prompt-sync"))();

while(true){
let number = Number(prompt("Enter a number:"));

if(Number.isNaN(number)){
    console.log("Not a number, enter a number:");    
    continue
 }   
else{
for(let index = 1; index <= 12; index++){
    let multiplication = number * index;
    console.log(number + " x " + index + " = " + multiplication);
    }
   }
  break
   }
  


