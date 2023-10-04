import WorkItem from "../components/work/WorkItem";
import { itemArr } from "../utils/workItems";

export default function Work() {
  return (
    <>
      {itemArr.map((data, i) => (
        <WorkItem
          name={data.name}
          originalPrice={data.originalPrice}
          discountRate={data.discountRate}
          reviewCount={data.reviewCount}
          likeCount={data.likeCount}
          key={i}
        />
      ))}
    </>
  );
}
