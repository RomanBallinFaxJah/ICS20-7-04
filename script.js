document.getElementById('button').addEventListener('click', checkDiscount)
let age
let day

function checkDiscount () {
  age = document.getElementById('age').value
  day = document.getElementById('day').value
  
// check if requirements met
  if ((day.toLowerCase() === 'tuesday' || day.toLowerCase() === 'thursday') && (age > 12 && age < 21)) {
      document.getElementById('answer').innerHTML = 'You are eligible for a discount'
  } 
  else {
    document.getElementById('answer').innerHTML = 'You are ineligible for a discount'
  } 
} 
