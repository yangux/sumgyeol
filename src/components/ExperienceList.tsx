import styled from "styled-components";
import { ExperienceInfo } from "../utils/interface";

const Cardbox = styled.div`
  width: 1000px;
  height: 400px;
  flex-wrap: wrap;
  background-color: #fcfcfc;
  box-shadow: 0px 0px 10px #999;
  border-radius: 10px;
  margin: 80px auto;
`;

const Imgbox = styled.div`
  width: 50%;
  height: 100%;
  float: left;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
`;

const Infobox = styled.div`
  width: 50%;
  float: right;
  padding: 30px;
`;

const Infotext = styled.p`
  padding: 5px 0;
  line-height: 1.5rem;
`;

const Inforight = styled.span`
  float: right;
`;

const Title = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  padding: 5px 0 15px 0;
`;

const Button = styled.button`
  width: 100%;
  height: 55px;
  color: #fff;
  border: none;
  border-radius: 10px;
  background-color: black;
  margin: 28px auto 0;
  cursor: pointer;

  &:hover {
    background-color: #ba6844;
  }
`;

const handleClick = () => {
  alert("신청이 완료되었습니다.");
};

export default function ExperienceList(props: ExperienceInfo) {
  return (
    <>
      {(props.provincesState === props.provinces ||
        props.provincesState === "" ||
        props.provincesState === "전국") &&
        (props.activeState === props.kind ||
          props.activeState === "" ||
          props.activeState === "체험종류") && (
          <Cardbox>
            <Imgbox>
              <Img alt="Experience Image" src={props.src} />
            </Imgbox>
            <Infobox>
              <Infotext>
                {props.provinces} | {props.kind}
              </Infotext>
              <Title>{props.title}</Title>
              <Infotext>{props.text}</Infotext>
              <hr />
              <Infotext>
                진행기간 :<Inforight>{props.date}</Inforight>
              </Infotext>
              <Infotext>
                진행장소 :<Inforight>{props.location}</Inforight>
              </Infotext>
              <Infotext>
                참가인원 :<Inforight>{props.people}</Inforight>
              </Infotext>
              <Button onClick={handleClick}>신청하기</Button>
            </Infobox>
          </Cardbox>
        )}
    </>
  );
}
