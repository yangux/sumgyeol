export interface Item {
  name: string;
  originalPrice: number;
  discountRate: number;
  reviewCount: number;
  likeCount: number;
}

export const itemArr: Item[] = [
  {
    name: "[박숨결 장인] 나비문양 나전칠기 찻상",
    originalPrice: 120000,
    discountRate: 50,
    reviewCount: 43,
    likeCount: 112,
  },
];
