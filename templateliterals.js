export default function TemplateLiterals() {

    let price = 10;
let VAT = 0.25;
let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
  return total;
}