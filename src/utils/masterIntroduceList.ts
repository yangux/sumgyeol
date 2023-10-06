export interface List {
  name: string;
  master: string;
  category?: string;
  image: string;
  className?: string;
  brand?:string;
  workPlace?:string;
}

export const listArr: List[] = [
  {
    master: "옥장",
    name: "엄익평",
    category: "공예",
    image: "/assets/master/master1.png",
    brand: "옥공예",
    workPlace: "가원공방",
  },
  {
    master: "홍염장",
    name: "김경열",
    category: "공예",
    image: "/assets/master/master2.png",
    brand: "염색공예",
    workPlace: "전통홍염공방"
  },
  {
    master: "매듭장",
    name: "노미자",
    category: "공예",
    image: "/assets/master/master3.png",
    brand: "직물공예",
    workPlace: "한국문화의집"
  },
  {
    master: "망건장",
    name: "강전향",
    category: "공예",
    image: "/assets/master/master4.jpg",
    brand: "말총공예",
    workPlace: "무형문화재전수교육관",
  },
  {
    master: "악기장",
    name: "고흥곤",
    category: "공예",
    image: "/assets/master/master5.jpg",
    brand: "악기공예",
    workPlace: "고흥곤국악기연구원"
  },
  {
    master: "조각장",
    name: "곽홍찬",
    category: "공예",
    image: "/assets/master/master6.jpg",
    brand: "금속공예",
    workPlace: "곽씨공방"
  },
];
