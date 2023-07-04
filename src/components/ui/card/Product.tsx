import { useRef } from "react";
import styled from "styled-components";
import { useCartStore } from "../../../store";
import { type Product } from "../../../types";
import { ProductStock, ButtonSubmit } from "../../../styles";
import { COLORS } from "../../../constants/colors";
import { formattedPrice } from "../../../services/utils/formattedPrice";
import { Toaster, toast } from "sonner";

const Card = styled.div`
  background-color: #f2f2f2;
  padding: 20px;
  border-radius: 10px;
`;

const ProductName = styled.h1`
  font-size: 22px;
  font-family: "Josefin Sans", sans-serif;
  font-weight: 500;
`;

const ProductPrice = styled.p`
  font-family: "Josefin Sans", sans-serif;
  font-weight: 500;
  font-size: 15px;
  color: ${COLORS.PRIMARY};
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
`;

const InputQty = styled.input`
  width: 70px;
  margin-right: 10px;
  padding: 4px;
  font-family: "Josefin Sans", sans-serif;
  font-weight: 400;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-size: 15px;
`;

const Index = ({ id, name, price, amount }: Product) => {
  // Cart Store
  const cart = useCartStore<any>((state: any) => state.cart);
  const setCart = useCartStore<any>((state: any) => state.setCart);

  let inputRef: any = useRef<HTMLInputElement>(null);

  const updateCart = (e: any) => {
    e.preventDefault();

    // Validate if the product has already been added
    const idsProductsCart = cart.map((product: Product) => product.id);
    if (idsProductsCart.includes(id)) {
      toast.error("Este producto ya fue agregado!");
      return false;
    }

    const value: any = inputRef.current?.value;
    const formattedValue = parseInt(value);
    if (value) {
      if (formattedValue <= amount) {
        const new_cart = [
          {
            id,
            name,
            price,
            amount: formattedValue,
          },
          ...cart,
        ];
        // Update cart
        setCart(new_cart);
        localStorage.setItem("cart", JSON.stringify(new_cart));
        // Clean input
        inputRef.current.value = "";
        toast.success("Producto agregado!");
      } else {
        toast.error("No hay suficiente inventario!");
      }
    } else {
      toast.error("Agrega la cantidad!");
    }
  };

  return (
    <Card>
      <Header>
        <div>
          <ProductName>{name}</ProductName>
        </div>
        <div>
          <ProductPrice>${formattedPrice(price)}</ProductPrice>
        </div>
      </Header>
      <div>
        <ProductStock>{amount} Disponibles</ProductStock>
      </div>
      <div>
        <form onSubmit={updateCart}>
          <Actions>
            <div>
              <InputQty
                ref={inputRef}
                name="amount"
                type="number"
                placeholder="cantidad"
                disabled={amount === 0 ?? true}
              />
            </div>
            <div>
              <ButtonSubmit type="submit" disabled={amount === 0 ?? true}>
                Agregar al carrito
              </ButtonSubmit>
            </div>
          </Actions>
        </form>
      </div>
      <Toaster />
    </Card>
  );
};

export default Index;
