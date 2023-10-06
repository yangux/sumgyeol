import styled from "styled-components";
import { itemArr } from "../../utils/workItemsdata";
import WorkItem from "./WorkItem";

const Section = styled.div`
  max-width: 1120px;
  margin: 50px auto;
`;
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
`;
const CategoryMenu = styled.ul`
  display: flex;
  margin-bottom: 20px;

  li {
    margin-right: 1.2rem;
    color: var(--text-gray-50);
    cursor: pointer;
    &:not(li:last-child)::after {
      content: "";
      display: inline-block;
      width: 1px;
      height: 80%;
      background-color: var(--text-gray-40);
      margin-left: 1.2rem;
    }
  }
`;

const categories: string[] = [
  "전체",
  "옷",
  "음식",
  "악세사리",
  "가구",
  "식기",
  "필기도구",
  "악기",
  "기타",
];

export default function WorkItemGrid() {
  return (
    <Section>
      <CategoryMenu>
        {categories.map((category, i) => (
          <li>{category}</li>
        ))}
      </CategoryMenu>
      <GridContainer>
        {itemArr.map((data, i) => (
          <WorkItem
            name={data.name}
            brand={data.brand}
            originalPrice={data.originalPrice}
            discountRate={data.discountRate}
            reviewCount={data.reviewCount}
            likeCount={data.likeCount}
            category={data.category}
            image={data.image}
            key={i}
          />
        ))}
      </GridContainer>
    </Section>
  );
}
