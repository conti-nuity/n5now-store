import React from "react";
import styled from "styled-components";

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-rows: 1fr;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

interface ProductList {
  children: React.ReactNode;
}

const Index = ({ children }: ProductList) => {
  return <Content>{children}</Content>;
};

export default Index;
