import { Link } from "react-router-dom";
import styled from "styled-components";
import { type Children } from "../types";

const Button = styled.button`
  margin-bottom: 20px;
  font-family: "Josefin Sans", sans-serif;
  font-weight: 500;
  font-size: 15px;
  border: none;
  padding: 7px 15px;
  cursor: pointer;
  border-radius: 3px;
`;

const Index = ({ children }: Children) => {
  return (
    <Link to="/">
      <Button>{children}</Button>
    </Link>
  );
};

export default Index;
