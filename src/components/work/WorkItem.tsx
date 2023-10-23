import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentDots,
  faHeart,
  faSquarePlus,
} from "@fortawesome/free-regular-svg-icons";
import { addComma, getSalePrice } from "../../utils/price";
import { Item } from "../../utils/workItemsdata";
import { useDispatch } from "react-redux";
import { add } from "../../store/modules/cart";

const ItemContainer = styled.div`
  display: inline-block;
  min-width: 200px;
  margin-bottom: 40px;

  &.mainSize {
    width: inherit;
    height: 682px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 5px;
    overflow: hidden;
  }
`;
const ItemImg = styled.div`
  width: 100%;
  border-radius: 5px;
  overflow: hidden;

  img {
    width: 100%;
  }
`;
const ItemDesc = styled.ul`
  width: inherit;
  margin-top: 10px;
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
const More = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  color: var(--text-gray-40);

  div {
    display: flex;
    margin-right: 5px;
    font-size: 14px;
    line-height: 14px;
  }
  p {
    margin-left: 0.2rem;
    margin-left: 5px;
    font-size: 12px;
  }
`;
const CartBtn = styled.button`
  appearance: none;
  border: 0;
  background-color: transparent;
  display: flex;
  align-items: center;
  padding: 0.2em 0.45em;
  color: var(--text-gray-40);
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    color: var(--text-gray-60);
  }
`;

export default function WorkItem(props: Item) {
  const {
    name,
    brand,
    originalPrice,
    discountRate,
    reviewCount,
    likeCount,
    image,
    className,
  } = props;
  const dispatch = useDispatch();
  return (
    <ItemContainer className={className}>
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
        {reviewCount && likeCount && (
          <More>
            <div>
              <div>
                <FontAwesomeIcon icon={faCommentDots} />
                <p>{reviewCount}</p>
              </div>
              <div>
                <FontAwesomeIcon icon={faHeart} />
                <p>{likeCount}</p>
              </div>
            </div>
            <CartBtn
              onClick={() =>
                dispatch(
                  add({
                    name: name,
                    brand: brand,
                    originalPrice: originalPrice,
                    discountRate: discountRate,
                    image: image,
                    added: true,
                  })
                )
              }
            >
              <FontAwesomeIcon icon={faSquarePlus} />
              <p>담기</p>
            </CartBtn>
          </More>
        )}
      </ItemDesc>
    </ItemContainer>
  );
}
