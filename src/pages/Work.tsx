import WorkItem from "../components/work/WorkItem";
import { itemArr } from "../utils/workItemsdata";

export default function Work() {
  return (
    <>
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
    </>
  );
}
