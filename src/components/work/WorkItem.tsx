import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { getSalePrice } from "../../utils/price";
import { Item } from "../../utils/workItems";

const ItemContainer = styled.div`
  display: inline-block;
  min-width: 260px;
  height: 330px;
  border-radius: 5px;
  overflow: hidden;
`;
const ItemImg = styled.div`
  width: inherit;
  min-height: 140px;
  background-color: var(--text-gray-20);
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
  color: var(--main-brown-60);
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
  const { name, originalPrice, discountRate, reviewCount, likeCount } = props;
  return (
    <ItemContainer>
      <ItemImg />
      <ItemDesc>
        <ItemTit>{name}</ItemTit>
        <OriginalPrice>{originalPrice}원</OriginalPrice>
        <DiscountRate>{discountRate}%</DiscountRate>
        <SalePrice>{getSalePrice(originalPrice, discountRate)}원</SalePrice>
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
