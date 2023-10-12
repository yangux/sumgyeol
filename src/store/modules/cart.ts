// 뒤에 as const 를 붙여줌으로써 나중에 액션 객체를 만들게 action.type 의 값을 추론하는 과정에서
// action.type 이 string 으로 추론되지 않고 'counter/INCREASE' 와 같이 실제 문자열 값으로 추론 되도록 해줍니다.
const ADD = "cart/ADD" as const;

interface List {
  name: string;
  brand: string;
  originalPrice: number;
  discountRate: number;
  image: string;
}
export const add = (payload: List) => {
  return { type: ADD, payload };
};

// type
type CartAction = ReturnType<typeof add>;

type CartState = {
  list: Array<object>;
};

const initialState: CartState = {
  list: [],
};

export default function cart(
  state: CartState = initialState,
  action: CartAction
): CartState {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        list: state.list.concat({
          name: action.payload.name,
          brand: action.payload.brand,
          originalPrice: action.payload.originalPrice,
          discountRate: action.payload.discountRate,
          image: action.payload.image,
        }),
      };
    default:
      return state;
  }
}
