import React, { useState } from "react";
import styled from "styled-components";
import { itemArr } from "../../utils/workItemsdata";
import WorkItem from "./WorkItem";
import CategoryMenu from "./CategoryMenu";

const Section = styled.div`
  max-width: 1120px;
  margin: 50px auto;
`;
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
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
