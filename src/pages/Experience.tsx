import React, { useRef, useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ExperienceList from "../components/ExperienceList";
import { ExperienceInfo } from "../utils/interface";
import ExperienceBoard from "../components/ExperienceBoard";

export default function Experience() {
  const [activeTab, setActiveTab] = useState("tab1"); // 탭
  const [selectedProvince, setSelectedProvince] = useState(""); // 지역 검색 필터
  const [selectedKind, setSelectedKind] = useState(""); // 체험종류 검색 필터

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  const Contents = styled.div`
    width: 1200px;
    margin: 80px auto 200px;
  `;

  const Button = styled.button`
    width: 50%;
    height: 80px;
    border-radius: 10px 10px 0 0;
    border: 0;
    background-color: #ececec;
    box-shadow: 0px 0px 10px #999;
    font-size: 1.2rem;
    font-weight: 500;
    cursor: pointer;

    &.active {
      background-color: #ba6844;
      color: #ffffff;
    }
  `;

  const Filtering = styled.div`
    flex-wrap: wrap;
    margin-bottom: 30px;
  `;

  const Select = styled.select`
    width: 130px;
    height: 55px;
    background-color: black;
    border-radius: 10px;
    color: #fff;
    position: relative;
    cursor: pointer;
    text-align-last: center;
  `;

  const Option = styled.option`
    text-align: center;
  `;

  const citycategory: string[] = [
    "강원특별자치도",
    "경기도",
    "경상북도",
    "경상남도",
    "광주광역시",
    "대구광역시",
    "대전광역시",
    "부산광역시",
    "서울특별시",
    "세종특별자치시",
    "인천광역시",
    "울산광역시",
    "전라남도",
    "전라북도",
    "제주특별자치도",
    "충청남도",
    "충청북도",
  ];

  const activecategory: string[] = ["강의", "전시회", "만들기"];

  const Search = styled.div`
    float: right;

    & input {
      width: 15rem;
      height: 55px;
      border-radius: 5px;
      background-color: #e5e5e5;
      border: 0;
      padding-left: 15px;
    }

    & button {
      width: 5rem;
      height: 55px;
      border-radius: 5px;
      background-color: black;
      color: #fff;
      border: 0;
      cursor: pointer;
    }
  `;

  const exArr: ExperienceInfo[] = [
    {
      src: "/assets/ex_02.png",
      provinces: "경기도",
      kind: "전시회",
      title: "생옻칠 수저만들기",
      text: "짚을 이용한 공예품을 만들어 농촌생활문화 체험 새끼줄 꼬기, 망태기 및 삼태기 만들기, 멍석 만들기 체험",
      date: "매주 주말, 공휴일 10:00 ~ 13:00, 13:00 ~ 16:00",
      location: "하회마을 남촌댁(염행당)",
      people: "매회 30명 내외",
    },
    {
      src: "/assets/ex_01.png",
      provinces: "경상북도",
      kind: "강의",
      title: "짚 공예품 강의",
      text: "짚을 이용한 공예품을 만들어 농촌생활문화 체험 새끼줄 꼬기, 망태기 및 삼태기 만들기, 멍석 만들기 체험",
      date: "매주 주말, 공휴일 10:00 ~ 13:00, 13:00 ~ 16:00",
      location: "하회마을 남촌댁(염행당)",
      people: "매회 30명 내외",
    },
    {
      src: "/assets/ex_02.png",
      provinces: "경상남도",
      kind: "만들기",
      title: "도자기 만들기",
      text: "짚을 이용한 공예품을 만들어 농촌생활문화 체험 새끼줄 꼬기, 망태기 및 삼태기 만들기, 멍석 만들기 체험",
      date: "매주 주말, 공휴일 10:00 ~ 13:00, 13:00 ~ 16:00",
      location: "하회마을 남촌댁(염행당)",
      people: "매회 30명 내외",
    },
    {
      src: "/assets/ex_01.png",
      provinces: "광주광역시",
      kind: "전시회",
      title: "부채 제작",
      text: "짚을 이용한 공예품을 만들어 농촌생활문화 체험 새끼줄 꼬기, 망태기 및 삼태기 만들기, 멍석 만들기 체험",
      date: "매주 주말, 공휴일 10:00 ~ 13:00, 13:00 ~ 16:00",
      location: "하회마을 남촌댁(염행당)",
      people: "매회 30명 내외",
    },
    {
      src: "/assets/ex_02.png",
      provinces: "대구광역시",
      kind: "강의",
      title: "생옻칠 수저만들기",
      text: "짚을 이용한 공예품을 만들어 농촌생활문화 체험 새끼줄 꼬기, 망태기 및 삼태기 만들기, 멍석 만들기 체험",
      date: "매주 주말, 공휴일 10:00 ~ 13:00, 13:00 ~ 16:00",
      location: "하회마을 남촌댁(염행당)",
      people: "매회 30명 내외",
    },
    {
      src: "/assets/ex_01.png",
      provinces: "대전광역시",
      kind: "전시회",
      title: "짚 공예품 만들기",
      text: "짚을 이용한 공예품을 만들어 농촌생활문화 체험 새끼줄 꼬기, 망태기 및 삼태기 만들기, 멍석 만들기 체험",
      date: "매주 주말, 공휴일 10:00 ~ 13:00, 13:00 ~ 16:00",
      location: "하회마을 남촌댁(염행당)",
      people: "매회 30명 내외",
    },
    {
      src: "/assets/ex_02.png",
      provinces: "부산광역시",
      kind: "만들기",
      title: "짚 공예품 만들기",
      text: "짚을 이용한 공예품을 만들어 농촌생활문화 체험 새끼줄 꼬기, 망태기 및 삼태기 만들기, 멍석 만들기 체험",
      date: "매주 주말, 공휴일 10:00 ~ 13:00, 13:00 ~ 16:00",
      location: "하회마을 남촌댁(염행당)",
      people: "매회 30명 내외",
    },
    {
      src: "/assets/ex_01.png",
      provinces: "서울특별시",
      kind: "강의",
      title: "짚 공예품 만들기",
      text: "짚을 이용한 공예품을 만들어 농촌생활문화 체험 새끼줄 꼬기, 망태기 및 삼태기 만들기, 멍석 만들기 체험",
      date: "매주 주말, 공휴일 10:00 ~ 13:00, 13:00 ~ 16:00",
      location: "하회마을 남촌댁(염행당)",
      people: "매회 30명 내외",
    },
    {
      src: "/assets/ex_02.png",
      provinces: "세종특별자치시",
      kind: "전시회",
      title: "수저 공예품 만들기",
      text: "짚을 이용한 공예품을 만들어 농촌생활문화 체험 새끼줄 꼬기, 망태기 및 삼태기 만들기, 멍석 만들기 체험",
      date: "매주 주말, 공휴일 10:00 ~ 13:00, 13:00 ~ 16:00",
      location: "하회마을 남촌댁(염행당)",
      people: "매회 30명 내외",
    },
    {
      src: "/assets/ex_01.png",
      provinces: "인천광역시",
      kind: "만들기",
      title: "짚 공예품 만들기",
      text: "짚을 이용한 공예품을 만들어 농촌생활문화 체험 새끼줄 꼬기, 망태기 및 삼태기 만들기, 멍석 만들기 체험",
      date: "매주 주말, 공휴일 10:00 ~ 13:00, 13:00 ~ 16:00",
      location: "하회마을 남촌댁(염행당)",
      people: "매회 30명 내외",
    },
    {
      src: "/assets/ex_02.png",
      provinces: "울산광역시",
      kind: "만들기",
      title: "짚 공예품 만들기",
      text: "짚을 이용한 공예품을 만들어 농촌생활문화 체험 새끼줄 꼬기, 망태기 및 삼태기 만들기, 멍석 만들기 체험",
      date: "매주 주말, 공휴일 10:00 ~ 13:00, 13:00 ~ 16:00",
      location: "하회마을 남촌댁(염행당)",
      people: "매회 30명 내외",
    },
    {
      src: "/assets/ex_01.png",
      provinces: "전라남도",
      kind: "전시회",
      title: "짚 공예품 만들기",
      text: "짚을 이용한 공예품을 만들어 농촌생활문화 체험 새끼줄 꼬기, 망태기 및 삼태기 만들기, 멍석 만들기 체험",
      date: "매주 주말, 공휴일 10:00 ~ 13:00, 13:00 ~ 16:00",
      location: "하회마을 남촌댁(염행당)",
      people: "매회 30명 내외",
    },
    {
      src: "/assets/ex_02.png",
      provinces: "전라북도",
      kind: "전시회",
      title: "짚 공예품 만들기",
      text: "짚을 이용한 공예품을 만들어 농촌생활문화 체험 새끼줄 꼬기, 망태기 및 삼태기 만들기, 멍석 만들기 체험",
      date: "매주 주말, 공휴일 10:00 ~ 13:00, 13:00 ~ 16:00",
      location: "하회마을 남촌댁(염행당)",
      people: "매회 30명 내외",
    },
    {
      src: "/assets/ex_01.png",
      provinces: "제주특별자치시",
      kind: "강의",
      title: "짚 공예품 만들기",
      text: "짚을 이용한 공예품을 만들어 농촌생활문화 체험 새끼줄 꼬기, 망태기 및 삼태기 만들기, 멍석 만들기 체험",
      date: "매주 주말, 공휴일 10:00 ~ 13:00, 13:00 ~ 16:00",
      location: "하회마을 남촌댁(염행당)",
      people: "매회 30명 내외",
    },
    {
      src: "/assets/ex_02.png",
      provinces: "충청남도",
      kind: "만들기",
      title: "짚 공예품 만들기",
      text: "짚을 이용한 공예품을 만들어 농촌생활문화 체험 새끼줄 꼬기, 망태기 및 삼태기 만들기, 멍석 만들기 체험",
      date: "매주 주말, 공휴일 10:00 ~ 13:00, 13:00 ~ 16:00",
      location: "하회마을 남촌댁(염행당)",
      people: "매회 30명 내외",
    },
    {
      src: "/assets/ex_01.png",
      provinces: "충청북도",
      kind: "강의",
      title: "짚 공예품 만들기",
      text: "짚을 이용한 공예품을 만들어 농촌생활문화 체험 새끼줄 꼬기, 망태기 및 삼태기 만들기, 멍석 만들기 체험",
      date: "매주 주말, 공휴일 10:00 ~ 13:00, 13:00 ~ 16:00",
      location: "하회마을 남촌댁(염행당)",
      people: "매회 30명 내외",
    },
  ];

  const NouFound = styled.p`
    width: 80%;
    padding: 100px 0;
    box-shadow: 0px 0px 10px #999;
    border-radius: 10px;
    margin: 200px auto;
    text-align: center;
    font-size: 25px;

    & button {
      border: 0;
      border-radius: 5px;
      background-color: black;
      color: white;
      font-size: 18px;
      margin-top: 30px;
      padding: 10px 30px;
      cursor: pointer;
    }
  `;

  let newArr: ExperienceInfo[] = [];
  const [searchArr, setSearchArr] = useState<ExperienceInfo[]>([]);
  const searchInput = useRef<HTMLInputElement>(null);

  // 검색 로직
  const handleValueInput = () => {
    newArr = [];
    exArr.forEach((el, i) => {
      if (searchInput.current) {
        if (el.title.includes(searchInput.current?.value)) {
          newArr.push(el);
        }
      }
    });
    setSearchArr(newArr);
  };

  const enterkey = useRef<HTMLButtonElement>(null);
  const InputEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    console.log(searchInput.current?.value);

    // enter 눌렸을 때 if문
    if (e.key === "Enter") {
      handleValueInput();
    }
  };

  return (
    <>
      <Header />
      <Contents>
        {/* 필터 */}

        <Filtering>
          {/* 지역 필터링 */}
          <Select
            style={{ marginRight: "10px" }}
            onChange={(e) => {
              setSelectedProvince(e.target.value);
            }}
          >
            <Option value="전국">전국</Option>
            {citycategory.map((city, index) => (
              <Option
                key={index}
                value={city}
                selected={city === selectedProvince ? true : false}
              >
                {city}
              </Option>
            ))}
          </Select>

          {/* 체험종류 필터링 */}
          <Select
            style={{ backgroundColor: "white", color: "black" }}
            onChange={(e) => {
              setSelectedKind(e.target.value);
            }}
          >
            <Option value="">체험종류</Option>
            {activecategory.map((active, index) => (
              <Option
                key={index}
                value={active}
                selected={active === selectedKind ? true : false}
              >
                {active}
              </Option>
            ))}
          </Select>

          <Search>
            <input
              type="text"
              placeholder="체험명을 검색하세요."
              ref={searchInput}
              onKeyDown={(e) => InputEnter(e)}
            />
            <button
              type="submit"
              ref={enterkey}
              onClick={() => handleValueInput()}
            >
              검색
            </button>
          </Search>
        </Filtering>

        {/* 탭 */}
        <div>
          <Button
            className={activeTab === "tab1" ? "active" : ""}
            onClick={() => handleTabClick("tab1")}
          >
            체험신청
          </Button>

          <Button
            className={activeTab === "tab2" ? "active" : ""}
            onClick={() => handleTabClick("tab2")}
          >
            체험후기
          </Button>
        </div>

        {/* 탭 내용 */}
        {/* 체험하기 리스트 */}
        <div className="tab-content">
          {activeTab === "tab1" && (
            <div className="card_box">
              {searchArr.length === 0
                ? exArr.map((el, index) => {
                    return (
                      <ExperienceList
                        src={el.src}
                        provinces={el.provinces}
                        kind={el.kind}
                        title={el.title}
                        text={el.text}
                        date={el.date}
                        location={el.location}
                        people={el.people}
                        provincesState={selectedProvince}
                        activeState={selectedKind}
                        key={index}
                      />
                    );
                  })
                : searchArr.map((el, index) => {
                    return (
                      <ExperienceList
                        src={el.src}
                        provinces={el.provinces}
                        kind={el.kind}
                        title={el.title}
                        text={el.text}
                        date={el.date}
                        location={el.location}
                        people={el.people}
                        provincesState={selectedProvince}
                        activeState={selectedKind}
                        key={index}
                      />
                    );
                  })}

              {/* 필터링된 결과가 없을 때 표시될 문구 */}
              {exArr.length === 0 && (
                <NouFound>
                  검색하신 체험명이 없습니다.
                  <a href="">
                    <button>체험 전체보기</button>
                  </a>
                </NouFound>
              )}
            </div>
          )}

          {activeTab === "tab2" && (
            <div>
              <ExperienceBoard />
            </div>
          )}
        </div>
      </Contents>
      <Footer />
    </>
  );
}
