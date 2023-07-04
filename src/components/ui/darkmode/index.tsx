import { useEffect } from "react";
import { useDarkModeStore } from "../../../store";
import styled from "styled-components";
import ImageSun from "../../../assets/icons/sun.svg";
import ImageMoon from "../../../assets/icons/moon.svg";
import { COLORS } from "../../../constants/colors";

const Wrapper = styled.div`
  margin-left: 10px;
`;

interface Slider {
  active: boolean;
}

const Slider = styled.span<Slider>`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: all 0.4s ease-out;
  border-radius: 2px;
  &::before {
    position: absolute;
    content: ${({ active }) =>
      active ? `url(${ImageMoon})` : `url(${ImageSun})`};
    text-align: center;
    height: 17px;
    width: 17px;
    border-radius: 1px;
    left: 4px;
    bottom: 4px;
    background-color: ${COLORS.LIGHT};
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
`;

const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 42px;
  height: 25px;
  & input {
    opacity: 0;
    width: 0;
    height: 0;
    &:checked + ${Slider} {
      background-color: ${COLORS.PRIMARY};
      &::before {
        -webkit-transform: translateX(17px);
        -ms-transform: translateX(17px);
        transform: translateX(17px);
      }
    }
    &:focus + ${Slider} {
      box-shadow: 0 0 1px ${COLORS.PRIMARY};
    }
  }
`;

const Index = () => {
  // Local Storage
  // @ts-ignore
  const localStorageDarkMode = JSON.parse(localStorage.getItem("darkmode"));

  // Cart Store
  const darkMode = useDarkModeStore<any>((state: any) => state.darkMode);
  const setDarkMode = useDarkModeStore<any>((state: any) => state.setDarkMode);

  const handleChange = (e: any) => {
    let isChecked = e.target.checked;
    setDarkMode(isChecked);
    localStorage.setItem("darkmode", JSON.stringify(isChecked));
  };

  useEffect(() => {
    setDarkMode(localStorageDarkMode);
  }, []);

  return (
    <Wrapper>
      <Switch className="switch">
        <input
          type="checkbox"
          onChange={(e) => handleChange(e)}
          checked={Boolean(darkMode)}
        />
        <Slider active={darkMode} />
        <img src={ImageSun} alt="icon-sun" />
      </Switch>
    </Wrapper>
  );
};

export default Index;
