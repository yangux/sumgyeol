import styled from "styled-components";

export const BtnCloseContainer = styled.button`
  appearance: none;
  background-color: transparent;
  border: 0;
  width: 24px;
  height: 24px;
  text-indent: 9999px;
  position: relative;
  cursor: pointer;

  &::before,
  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background-color: #000;
    position: absolute;
    top: 50%;
    left: 0;
  }
  &::before {
    transform: rotate(45deg);
  }
  &::after {
    transform: rotate(-45deg);
  }

  &.isBig {
    width: 34px;
    height: 34px;
  }
  &.isBig::before,
  &.isBig::after {
    height: 2px;
  }
`;
