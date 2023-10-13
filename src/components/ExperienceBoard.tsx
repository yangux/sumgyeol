import { useState } from "react";
import styled from "styled-components";

export default function ExperienceBoard() {
  const Table = styled.table`
    width: 1000px;
    height: 500px;
    margin: 80px auto;
    text-align: center;
  `;

  const THead = styled.thead`
    width: 100%;
    & td {
      padding: 20px 0;
      border-bottom: 1px solid black;
      font-family: "Pretendard-bold";
    }
  `;

  const Tbody = styled.tbody`
    & td {
      padding: 20px 0;
      font-family: "Pretendard-regular";
      border-bottom: 1px solid #ececec;
    }

    & tr {
      &:hover {
        background-color: #ececec;
      }
    }
  `;

  const BoardData = [
    {
      number: 10,
      title: "열번째 후기입니다.",
      date: "2023-10-12",
      hits: "10",
    },
    {
      number: 9,
      title: "야홉번째 후기입니다.",
      date: "2023-10-12",
      hits: "10",
    },
    {
      number: 8,
      title: "여덟번째 후기입니다.",
      date: "2023-10-12",
      hits: "10",
    },
    {
      number: 7,
      title: "일곱번째 후기입니다.",
      date: "2023-10-12",
      hits: "10",
    },
    {
      number: 6,
      title: "여섯번째 후기입니다.",
      date: "2023-10-12",
      hits: "10",
    },
    {
      number: 5,
      title: "다섯번째 후기입니다.",
      date: "2023-10-12",
      hits: "10",
    },
    {
      number: 4,
      title: "네번째 후기입니다.",
      date: "2023-10-12",
      hits: "10",
    },
    {
      number: 3,
      title: "세번째 후기입니다.",
      date: "2023-10-12",
      hits: "10",
    },
    {
      number: 2,
      title: "두번째 후기입니다.",
      date: "2023-10-12",
      hits: "10",
    },
    {
      number: 1,
      title: "첫번째 후기입니다.",
      date: "2023-10-12",
      hits: "10",
    },
  ];

  const [data, setData] = useState(BoardData);

  return (
    <Table>
      <THead>
        <tr>
          <td>번호</td>
          <td>제목</td>
          <td>작성일</td>
          <td>조회수</td>
        </tr>
      </THead>
      <Tbody>
        {data.map((post) => (
          <tr>
            <td>{post.number}</td>
            <td>
              <a href={""}>{post.title}</a>
            </td>
            <td>{post.date}</td>
            <td>{post.hits}</td>
          </tr>
        ))}
      </Tbody>
    </Table>
  );
}
