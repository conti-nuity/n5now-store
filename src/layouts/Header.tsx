import { Link } from "react-router-dom";
import { useCartStore } from "../store";
import styled from "styled-components";
import { COLORS } from "../constants/colors";
import { Logo } from "../styles";
import DarkModeSwitch from "../components/ui/darkmode";

const Wrapper = styled.header`
  position: sticky;
  top: 0;
  backdrop-filter: blur(135px);
  background-color: rgba(3, 3, 3, 0.24);
  box-shadow: 0 16px 32px -2px rgba(0, 0, 0, 0.1),
    0 8px 16px -2px rgba(0, 0, 0, 0);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 50px;
  border-bottom: 1px solid #2f2f2f;
  @media screen and (max-width: 900px) {
    padding: 15px 20px;
  }
`;

const ButtonAdmin = styled.button`
  margin-right: 10px;
  border: none;
  background-color: transparent;
  padding: 5px;
  font-size: 15px;
  border-radius: 3px;
  font-family: "Josefin Sans", sans-serif;
  font-weight: 400;
  cursor: pointer;
  color: ${({ theme }) => theme.title};
`;

const ButtonCart = styled.button`
  border: 1px solid ${COLORS.PRIMARY};
  background-color: transparent;
  padding: 5px 10px;
  font-size: 15px;
  border-radius: 3px;
  font-family: "Josefin Sans", sans-serif;
  font-weight: 400;
  cursor: pointer;
  color: ${({ theme }) => theme.title};
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
`;

const Index = () => {
  // Cart Store
  const cart = useCartStore<any>((state: any) => state.cart);
  const products = cart.length;

  return (
    <Wrapper>
      <div>
        <Logo>n5now Store</Logo>
      </div>
      <div>
        <Actions>
          <Link to="/admin">
            <ButtonAdmin>Admin</ButtonAdmin>
          </Link>
          <Link to="/cart">
            <ButtonCart>Carrtio {products !== 0 && products}</ButtonCart>
          </Link>
          <DarkModeSwitch />
        </Actions>
      </div>
    </Wrapper>
  );
};

export default Index;
