function solution(digits){
let topNumber = 0;
for(i=0; i < digits.length; i++) {
 let numberComponents = Number([digits[i], digits[i+1], digits[i+2], digits [i+3], digits[i+4]].join(''))
  if(numberComponents > topNumber) {
topNumber = numberComponents;
}
}
return topNumber;
}
