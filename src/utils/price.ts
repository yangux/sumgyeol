export function getDiscountedPrice(
  originalPrice: number,
  discountRate: number
): number {
  return (originalPrice * discountRate) / 100;
}

export function getSalePrice(
  originalPrice: number,
  discountRate: number
): number {
  return originalPrice - getDiscountedPrice(originalPrice, discountRate);
}

export function addComma(price: number): any {
  const chunkArr = [];
  const reverse = price.toString().split("").reverse().join("");
  const size = 3;
  for (let i = 0; i < reverse.length; i += size) {
    chunkArr.push(reverse.slice(i, i + size));
  }
  return chunkArr.join(",").split("").reverse().join("");
}
