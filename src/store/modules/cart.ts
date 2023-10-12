import { getDiscountedPrice, getSalePrice } from "../../utils/price";

// 뒤에 as const 를 붙여줌으로써 나중에 액션 객체를 만들게 action.type 의 값을 추론하는 과정에서
// action.type 이 string 으로 추론되지 않고 'counter/INCREASE' 와 같이 실제 문자열 값으로 추론 되도록 해줍니다.
const ADD = "cart/ADD" as const;
const REMOVE = "cart/REMOVE" as const;

interface List {
  name: string;
  brand?: string;
  originalPrice: number;
  discountRate: number;
  image?: string;
  added?: boolean;
}
export const add = (payload: List) => {
  return { type: ADD, payload };
};
export const remove = (payload: List) => {
  return { type: REMOVE, payload };
};

// type
type CartAction = ReturnType<typeof add> | ReturnType<typeof remove>;

type CartState = {
  list: List[];
  firstMessage: string | null;
  totalPrice: number;
  discountedPrice: number;
  finalPrice: number;
};

const initialState: CartState = {
  list: [],
  firstMessage: "장바구니가 비어있습니다.",
  totalPrice: 0,
  discountedPrice: 0,
  finalPrice: 0,
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
          added: action.payload.added,
        }),
        firstMessage: null,
        totalPrice: state.totalPrice + action.payload.originalPrice,
        discountedPrice:
          state.discountedPrice +
          getDiscountedPrice(
            action.payload.originalPrice,
            action.payload.discountRate
          ),
        finalPrice:
          state.finalPrice +
          getSalePrice(
            action.payload.originalPrice,
            action.payload.discountRate
          ),
      };
    case REMOVE:
      return {
        ...state,
        list: state.list.map((item) => {
          if (item.name === action.payload.name) {
            return {
              ...item,
              added: false,
            };
          } else {
            return item;
          }
        }),
        totalPrice: state.totalPrice - action.payload.originalPrice,
        discountedPrice:
          state.discountedPrice -
          getDiscountedPrice(
            action.payload.originalPrice,
            action.payload.discountRate
          ),
        finalPrice:
          state.finalPrice -
          getSalePrice(
            action.payload.originalPrice,
            action.payload.discountRate
          ),
      };
    default:
      return state;
  }
}
