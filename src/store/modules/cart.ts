// 뒤에 as const 를 붙여줌으로써 나중에 액션 객체를 만들게 action.type 의 값을 추론하는 과정에서
// action.type 이 string 으로 추론되지 않고 'counter/INCREASE' 와 같이 실제 문자열 값으로 추론 되도록 해줍니다.
const SUM = "cart/SUM" as const;

export const sum = () => ({
  type: SUM,
});

// type
type CartAction = ReturnType<typeof sum>;

type CartState = {
  list: Array<object>;
};

const initialState: CartState = {
  list: [
    {
      name: "한송이 화병",
      brand: "수북도예",
      originalPrice: 51000,
      discountRate: 50,
      image: "/assets/workitem/한송이 화병.jpg",
    },
  ],
};

export default function cart(
  state: CartState = initialState,
  action: CartAction
): CartState {
  switch (action.type) {
    default:
      return state;
  }
}
