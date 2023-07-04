import styled from "styled-components";
import { type Product } from "../../../types";
import { ProductStock } from "../../../styles";
import { COLORS } from "../../../constants/colors";
import { formattedPrice } from "../../../services/utils/formattedPrice";

const Card = styled.div`
  padding: 20px;
  border-radius: 5px;
  background-color: #f2f2f2;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProductName = styled.h1`
  font-family: "Josefin Sans", sans-serif;
  font-weight: 500;
`;

const ProductPrice = styled.p`
  font-family: "Josefin Sans", sans-serif;
  font-weight: 500;
  color: ${COLORS.PRIMARY};
`;

const Index = ({ name, price, amount }: Product) => {
  return (
    <li>
      <Card>
        <Header>
          <div>
            <ProductName>{name}</ProductName>
          </div>
          <div>
            <ProductPrice>${formattedPrice(price)}</ProductPrice>
          </div>
        </Header>
        <ProductStock>Cantidad: {amount}</ProductStock>
      </Card>
    </li>
  );
};

export default Index;
