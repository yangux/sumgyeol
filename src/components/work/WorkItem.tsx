import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { addComma, getSalePrice } from "../../utils/price";
import { Item } from "../../utils/workItemsdata";

const ItemContainer = styled.div`
  display: inline-block;
  min-width: 200px;
  border-radius: 5px;
  margin-bottom: 40px;
  overflow: hidden;

  &.mainSize {
    width: 480px;
    height: 682px;
    border: 1px solid red;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    & img {
      width: 480px;
      height: 530px;
    }
  }
`;
const ItemImg = styled.div`
  width: 100%;
  height: 200px;
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
        <More>
          <div>
            <FontAwesomeIcon icon={faCommentDots} />
            <p>{reviewCount}</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faHeart} />
            <p>{likeCount}</p>
          </div>
        </More>
      </ItemDesc>
    </ItemContainer>
  );
}
