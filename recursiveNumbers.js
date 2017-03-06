function goT(num) {
  if(num===1) {
    return 1;
  }
if(num%3===0) {
  console.log(`${num} 0`)
  num = num / 3
  return goT(num);
} else if ((num+1)%3==0) {
  console.log(`${num} 1`)
  num = (num+1) / 3
  return goT(num);
} else if ((num-1)%3===0) {
  console.log(`${num} -1`)
  num = (num-1) / 3
  return goT(num);
}
}

goT(10)
