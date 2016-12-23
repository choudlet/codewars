const generate = length => {
  let i = 0;
  let string = ''
  while(i<length) {
  string += Math.round(Math.random());
  i++;
}
  return string;
};
