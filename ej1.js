function calculateTotal(items, tax, discount) {
  let value = 0;
  items.forEach((number) => (value += number));

  value += value * tax;

  if (discount) {
    value -= value * discount;
  }

  return value.toFixed(2);
}

const items = [10, 20, 30];
const tax = 0.05;
const discount = 0.1;

const finalValue = calculateTotal(items, tax, discount);
console.log(`Total: ${finalValue}`);
