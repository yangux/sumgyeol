import React, { useState } from "react";
import styled from "styled-components";
import { itemArr } from "../../utils/workItemsdata";
import WorkItem from "./WorkItem";
import CategoryMenu from "./CategoryMenu";

const Section = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
`;
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.2rem;

  @media (max-width: 950px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 730px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 540px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default function WorkItemGrid() {
  const [checked, setChecked] = useState<string>("전체");
  const changeCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.id);
  };
  return (
    <Section>
      <CategoryMenu checked={checked} changeCategory={changeCategory} />
      <GridContainer>
        {itemArr.map(
          (data, i) =>
            (checked === "전체" || checked === data.category) && (
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
            )
        )}
      </GridContainer>
    </Section>
  );
}
