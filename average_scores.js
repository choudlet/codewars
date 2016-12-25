function average(scores) {
    sum= scores.reduce((a,b)=>{
    return a+b;
});
return Math.round(sum / scores.length);
}
