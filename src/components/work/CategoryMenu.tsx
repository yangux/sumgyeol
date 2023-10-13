import styled from "styled-components";

const categories: string[] = ["전체", "옷", "가구", "식기", "필기도구", "기타"];
const MenuContainer = styled.ul`
  display: flex;
  min-width: 800px;
  margin-bottom: 20px;

  li {
    margin-right: 1.2rem;
    line-height: 1.6;

    label {
      cursor: pointer;
      &.off {
        color: var(--text-gray-50);
      }
      &.on {
        font-weight: bold;
        color: var(--main-brown-50);
      }
    }
    input {
      appearance: none;
    }
  }
  @media (max-width: 550px) {
    position: sticky;
    top: 0;
    min-width: 100%;
    background-color: #fff;
    z-index: 1;
    flex-direction: column;
    align-items: center;

    li {
      margin-bottom: 0.5rem;
      margin: 0;
    }
  }
`;

export default function CategoryMenu({ changeCategory }: any) {
  function setColor(e: React.MouseEvent<HTMLElement>): any {
    // 카테고리 메뉴 전체 색상 off
    const menu = document.querySelector("#categoryMenu");
    const menuLabels = menu?.querySelectorAll("label");
    menuLabels?.forEach((menu) => menu.classList.remove("on"));
    menuLabels?.forEach((menu) => menu.classList.add("off"));
    // 클릭한 카테고리만 색상 on
    e.currentTarget.classList.remove("off");
    e.currentTarget.classList.add("on");
  }
  return (
    <MenuContainer id="categoryMenu">
      {categories.map((category, i) => (
        <li key={i}>
          <label
            htmlFor={category}
            className={i === 0 ? "on" : "off"}
            onClick={(e) => {
              setColor(e);
            }}
          >
            <input
              type="radio"
              name="category"
              id={category}
              onChange={(e) => {
                changeCategory(e);
              }}
            />
            {category}
          </label>
        </li>
      ))}
    </MenuContainer>
  );
}
