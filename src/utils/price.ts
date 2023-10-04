export function getSalePrice(
  originalPrice: number,
  discountRate: number
): number {
  return (originalPrice * discountRate) / 100;
}
