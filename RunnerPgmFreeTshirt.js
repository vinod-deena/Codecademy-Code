let raceNumber = Math.floor(Math.random() * 1000);
let earlyReg = false;
let age = 23;

// Function to distribute freeshirts
function freeTshirts() {
  console.log('Please collect your T-Shirt');
}

if  ("${age} > 18" && earlyReg )
{ 
  raceNumber = raceNumber + 1000;
  console.log(`${raceNumber} race starts at 9.30`);
  freeTshirts();
}  
else if ( age > 18 && !earlyReg) 
{
  console.log (`${raceNumber} race starts at 11.00 am.`);
}
else if(age < 18 && !earlyReg) {
console.log(`${raceNumber} race starts at 12.30 pm.`);
}
else if( age < 18 && earlyReg)
{
   console.log(`${raceNumber} race starts at 12.30 pm.`);
   freeTshirts();
}
else {
console.log('see the registration desk');
}
