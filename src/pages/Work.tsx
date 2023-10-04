import styled from "styled-components";
import WorkItem from "../components/work/WorkItem";
import { itemArr } from "../utils/workItems";

const GridContainer = styled.div`
  max-width: 1080px;
  margin: 50px auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 10px;
`;

export default function Work() {
  return (
    <>
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
    </>
  );
}
