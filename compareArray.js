function findEvenIndex(arr) {

for(i=0; i < arr.length; i++) {

var leftValue;
var rightValue;

for(j = 0; j < i; j++) {

leftValue += arr[j];

}

for(k = i+1; k < arr.length; k++) {

rightValue += arr[k];

}

if (leftValue = rightValue) {
return i;
} else

leftValue = 0;
rightValue = 0;

}

return -1;

}
