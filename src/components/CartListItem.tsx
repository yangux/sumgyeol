import styled from "styled-components";
import { Item } from "../utils/workItemsdata";
import { addComma, getSalePrice } from "../utils/price";
import { BtnCloseContainer } from "../styles/BtnCloseStyle";
import { useDispatch } from "react-redux";
import { remove } from "../store/modules/cart";

const CartListItemContainer = styled.li`
  width: calc(100% - 20px);
  height: 140px;
  border-bottom: 1px solid #eee;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  padding-bottom: 10px;
`;
const ItemImg = styled.div`
  width: 120px;
  height: 120px;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
`;
const ItemDesc = styled.ul`
  flex-grow: 2;
  margin: 0 1rem;
`;
const ItemTit = styled.h4`
  width: inherit;
  font-size: 14px;
  line-height: 1.5;
  height: 40px;
  margin-bottom: 10px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
`;
const OriginalPrice = styled.p`
  color: var(--text-gray-30);
  font-size: 12px;
  text-decoration: line-through;
  margin-bottom: 0.2rem;
`;
const DiscountRate = styled.p`
  display: inline;
  font-size: 14px;
  font-weight: bold;
  margin-right: 0.2rem;
  color: var(--main-brown-50);
`;
const SalePrice = styled.h4`
  display: inline;
  font-size: 16px;
  font-weight: bold;
`;
export default function CartListItem(data: Item) {
  const { name, brand, image, originalPrice, discountRate } = data;
  const dispatch = useDispatch();
  return (
    <CartListItemContainer>
      <ItemImg>
        <img src={image} alt={name} />
      </ItemImg>
      <ItemDesc>
        <ItemTit>
          [{brand}] {name}
        </ItemTit>
        <OriginalPrice>{addComma(originalPrice)}원</OriginalPrice>
        <DiscountRate>{discountRate}%</DiscountRate>
        <SalePrice>
          {addComma(getSalePrice(originalPrice, discountRate))}원
        </SalePrice>
      </ItemDesc>
      <BtnCloseContainer
        onClick={() =>
          dispatch(
            remove({
              name: name,
              originalPrice: originalPrice,
              discountRate: discountRate,
            })
          )
        }
      />
    </CartListItemContainer>
  );
}
