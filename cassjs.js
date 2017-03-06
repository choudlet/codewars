function parensOk(string) {
var arr = string.split('');

var blank1 = [];
var blank2 = [];

for(var i=0; i < arr.length; i++) {
  if(arr[i] === "(") {

    blank1.push(arr[i]);

  } else if((arr[i] === ")") && (blank1.length >= blank2.length)) {
    blank2.push(arr[i]);
  }
}

if(blank1.length == blank2.length) {
  return true
} else {
  return false;
}

}

console.log(parensOk('()'))
console.log(parensOk('(()'))
console.log(parensOk('(((((((())))))))'))
console.log(parensOk('((())))'))
