function orderWeight(string) {
    let numbers = string.split(' ');
    console.log(numbers);
    let sortedNumbers = numbers.sort((a,b)=>{
      let aValue = sumString(a);
      let bValue = sumString(b);
      if(aValue == bValue) {
       console.log(a.charAt(0))
       console.log(b.charAt(0))
      } else return aValue - bValue;
})
    let final = sortedNumbers.join(' ');
console.log(final)
    return final;
}

function sumString(string) {
let sum = 0;
let number = string.split('')
for(let i=0;i < number.length; i++){
let digit = Number(number[i]);
sum += digit
}
return sum;
}
