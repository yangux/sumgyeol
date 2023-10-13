import styled from "styled-components";
import CartListItem from "./CartListItem";
import { BtnCloseContainer } from "../styles/BtnCloseStyle";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { addComma } from "../utils/price";

const SideBarContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 480px;
  background-color: #ffffff;
  box-shadow: -5px 5px 25px 10px rgba(0, 0, 0, 0.2);
  padding: 30px 40px 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  z-index: 1000;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const TabMenu = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;

  li {
    width: 48%;
    text-align: center;
    padding: 1em;
    border-bottom: 1px solid black;
  }
`;

const CartList = styled.ul`
  display: block;
  width: 100%;
  max-height: 80%;
  overflow-y: scroll;
  flex-grow: 2;
  margin-top: 20px;
  position: relative;
`;
const FirstMessage = styled.h3`
  text-align: center;
  word-break: keep-all;
  line-height: 1.5;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--text-gray-30);
  font-size: 1rem;
`;
const PriceArea = styled.ul`
  flex-basis: 120px;
  width: 100%;
  padding: 20px 0 70px;

  li:last-child {
    border-top: 1px solid #000;
    margin-top: 10px;
    padding-top: 10px;
    p {
      font-size: 1.2rem;
      font-weight: bold;
      color: #000;
    }
  }
`;
const PriceListItem = styled.li`
  display: flex;
  justify-content: space-between;
  color: var(--text-gray-60);
  line-height: 1.6;

  p {
    font-size: 12px;
  }
`;
const BtnArea = styled.div`
  width: 100%;
  & button:first-of-type {
    margin-bottom: 10px;
    border: 1px solid #000;
    color: #000;
    background-color: #fff;
  }
  & button:first-of-type:hover {
    background-color: #eee;
  }
`;
const Btn = styled.button`
  appearance: none;
  background-color: #000;
  color: white;
  border: 0;
  padding: 0.8em 1em;
  width: 100%;
  border-radius: 5px;
  cursor: pointer;
`;

export default function MyPage({ setModal }: any) {
  const cartList = useSelector((state: RootState) => state.cart.list);
  const cartAddedList = cartList.filter((item:any) => item.added);
  const firstMessage = useSelector(
    (state: RootState) => state.cart.firstMessage
  );
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);
  const discountedPrice = useSelector(
    (state: RootState) => state.cart.discountedPrice
  );
  const finalPrice = useSelector((state: RootState) => state.cart.finalPrice);
  const deliberyFee = 3000;
  return (
    <SideBarContainer>
      <BtnCloseContainer className="isBig" onClick={() => setModal(false)} />
      <TabMenu>
        <li>장인작품</li>
        <li>체험하기</li>
      </TabMenu>
      <CartList>
        {firstMessage && <FirstMessage>{firstMessage}</FirstMessage>}
        {cartAddedList.map((data: any, i:number) => (
          <CartListItem
            name={data.name}
            brand={data.brand}
            originalPrice={data.originalPrice}
            discountRate={data.discountRate}
            image={data.image}
            key={i}
          />
        ))}
      </CartList>
      <PriceArea>
        <PriceListItem>
          <p>상품 금액</p>
          <p>{addComma(totalPrice)} 원</p>
        </PriceListItem>
        <PriceListItem>
          <p>할인 금액</p>
          <p>-{addComma(discountedPrice)} 원</p>
        </PriceListItem>
        <PriceListItem>
          <p>배송비</p>
          <p>+{addComma(deliberyFee)} 원</p>
        </PriceListItem>
        <PriceListItem>
          <p>결제 예정 금액</p>
          <p>{finalPrice === 0 ? 0 : addComma(finalPrice + 3000)} 원</p>
        </PriceListItem>
      </PriceArea>
      <BtnArea>
        <Btn>비회원으로 구매하기</Btn>
        <Btn>로그인하기</Btn>
      </BtnArea>
    </SideBarContainer>
  );
}
