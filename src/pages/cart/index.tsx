import { useProductsStore, useCartStore } from "../../store";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Back from "../../components/Back";
import NoData from "../../components/ui/feedback/NoData";
import CartList from "../../components/ui/list/CartList";
import ProductCart from "../../components/ui/card/ProductCart";
import { type Product } from "../../types";
import { calculateTotalByProduct } from "../../services/utils/calculateTotalByProduct";
import { Wrapper, Title, ButtonSubmit, ButtonOutlined } from "../../styles";
import { useEffect, useRef } from "react";
import { Toaster, toast } from "sonner";
import { formattedPrice } from "../../services/utils/formattedPrice";

const Content = styled.div`
  margin: 40px 0;
  display: grid;
  grid-template-columns: 70% 30%;
  grid-template-rows: 1fr;
  grid-column-gap: 30px;
  grid-row-gap: 0px;
  @media screen and (max-width: 900px) {
    grid-template-columns: 100%;
  }
`;

const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 20px;
`;

const Quantity = styled.p`
  font-family: "Josefin Sans", sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: ${({ theme }) => theme.title};
`;

const Buy = styled.div`
  text-align: right;
`;

const TotalPrice = styled.h1`
  font-family: "Josefin Sans", sans-serif;
  font-weight: 500;
  color: ${({ theme }) => theme.title};
  margin-bottom: 10px;
`;

const Index = () => {
  let navigate = useNavigate();

  // Products Store
  const products = useProductsStore<any>((state: any) => state.products);
  const setProducts = useProductsStore<any>((state: any) => state.setProducts);

  // Cart Store
  const cart = useCartStore<any>((state: any) => state.cart);
  const setCart = useCartStore<any>((state: any) => state.setCart);

  // Local Storage
  // @ts-ignore
  const localStorageCart = JSON.parse(localStorage.getItem("cart")) || [];

  useEffect(() => {
    if (localStorageCart.length) {
      setCart(localStorageCart);
    }
  }, []);

  const total = cart.reduce(function (acc: any, { price, amount }: Product) {
    return acc + calculateTotalByProduct(price, amount);
  }, 0);

  // Clean Cart
  const emptyCartHandle = (showAlert: boolean) => {
    setCart([]);
    localStorage.removeItem("cart");
    showAlert && toast.success("Carrito vaciado");
  };

  const producstRef = useRef<Array<Product>>(products).current;

  // Buy Products
  const buyHandle = () => {
    for (let item of cart) {
      let objIndex = producstRef.findIndex(
        (product: Product) => product.id === item.id
      );
      producstRef[objIndex].amount = producstRef[objIndex].amount - item.amount;
    }
    setProducts(producstRef);
    // Clean cart
    emptyCartHandle(false);
    toast.success("Compra exitosa!");

    // Simulate async process
    setTimeout(() => {
      navigate("/");
    }, 1200);
  };

  return (
    <Wrapper>
      <Back>Regresar</Back>
      <Title>Tu carrito</Title>
      <Quantity>
        {cart.length} {cart.length === 1 ? "Producto" : "Productos"}
      </Quantity>
      {cart.length ? (
        <Content>
          <div>
            <CartList>
              {cart.length &&
                cart.map((product: Product) => (
                  <ProductCart key={product.id} {...product} />
                ))}
            </CartList>
            <Actions>
              <div>
                <ButtonOutlined onClick={() => emptyCartHandle(true)}>
                  Limpiar carrito
                </ButtonOutlined>
              </div>
              <Buy>
                <TotalPrice>Total: ${formattedPrice(total)}</TotalPrice>
                <ButtonSubmit onClick={buyHandle}>Comprar</ButtonSubmit>
              </Buy>
            </Actions>
          </div>
        </Content>
      ) : (
        <NoData message="Carrito vacío" />
      )}
      <Toaster />
    </Wrapper>
  );
};

export default Index;
