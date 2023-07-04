import styled, { createGlobalStyle } from "styled-components";
import { COLORS } from "../constants/colors";

export default createGlobalStyle`
  *,
    ::before {
        box-sizing: border-box;
    }
    body {
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      background-color: ${({ theme }) => theme.body};
      transition: background-color 0.35s ease-out;
    }
    h1,
    h2,
    h3,
    h4,
    p {
      margin: 0;
    }
    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    /* Firefox */
    input[type="number"] {
      -moz-appearance: textfield;
    }
    /* Sonner */
    [data-sonner-toast] [data-content] {
      font-family: "Josefin Sans", sans-serif;
      font-size: 15px;
      font-weight: 400;
    }
`;

export const Wrapper = styled.section`
  padding: 50px 20px;
  max-width: 950px;
  margin: auto;
`;

export const Logo = styled.h1`
  font-family: "Josefin Sans", sans-serif;
  font-weight: 400;
  color: ${({ theme }) => theme.title};
  @media screen and (max-width: 900px) {
    font-size: 22px;
  }
`;

export const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 27px;
  font-family: "Josefin Sans", sans-serif;
  font-weight: 700;
  color: ${({ theme }) => theme.title};
`;

export const ProductStock = styled.p`
  font-family: "Josefin Sans", sans-serif;
  font-weight: 500;
  color: #707070;
  font-size: 13px;
  margin: 5px 0;
`;

export const ButtonSubmit = styled.button`
  background-color: ${({ disabled }) => (disabled ? "grey" : COLORS.PRIMARY)};
  border: none;
  padding: 5px;
  border-radius: 3px;
  color: ${COLORS.LIGHT};
  font-family: "Josefin Sans", sans-serif;
  font-weight: 400;
  cursor: pointer;
  font-size: 15px;
`;

export const ButtonOutlined = styled.button`
  margin-right: 10px;
  border: none;
  background-color: transparent;
  padding: 5px;
  font-size: 15px;
  border-radius: 3px;
  font-family: "Josefin Sans", sans-serif;
  font-weight: 400;
  color: ${({ theme }) => theme.title};
  cursor: pointer;
`;
