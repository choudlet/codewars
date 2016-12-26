function calculateYears(principal, interest, tax, desired) {
    console.log(principal, interest, tax, desired);
    let amount = principal;
    let years = 0;
    while(amount < desired) {
    let change = (amount * interest) - (amount * interest * tax);
    amount += change;
    years++
    console.log(amount, change, years);
}
  return years;
