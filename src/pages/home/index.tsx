import { Fragment, useEffect, useState } from "react";
import { geProductList } from "../../services/actions/products";
import { useProductsStore, useCartStore } from "../../store";
import { type Product } from "../../types";
import { FEEDBACK } from "../../constants/feedback";
import ProductList from "../../components/ui/list/ProductList";
import ProductCard from "../../components/ui/card/Product";
import Loading from "../../components/ui/feedback/Loading";
import ErrorMessage from "../../components/ui/feedback/Error";
import NoData from "../../components/ui/feedback/NoData";
import { Wrapper, Title } from "../../styles";

const Index = () => {
  // Products Store
  const products = useProductsStore<any>((state: any) => state.products);
  const setProducts = useProductsStore<any>((state: any) => state.setProducts);

  // Local Storage
  // @ts-ignore
  const localStorageCart = JSON.parse(localStorage.getItem("cart")) || [];

  // Cart Store
  const setCart = useCartStore<any>((state: any) => state.setCart);

  // Feedback
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (localStorageCart.length) {
      setCart(localStorageCart);
    }
    if (!products.length) {
      setLoading(true);
      geProductList()
        .then((res) => {
          setLoading(false);
          setProducts(res);
        })
        .catch((error) => {
          setLoading(false);
          setError(error);
          console.log("Ocurrio un error", error);
        });
    }
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <Wrapper>
        <Title>Productos</Title>
        {loading ? (
          <Loading />
        ) : (
          <Fragment>
            {products.length ? (
              <ProductList>
                {products.length &&
                  products.map((product: Product) => (
                    <ProductCard key={product.id} {...product} />
                  ))}
              </ProductList>
            ) : (
              <Fragment>{!error && <NoData />}</Fragment>
            )}
          </Fragment>
        )}
        {error && <ErrorMessage message={FEEDBACK.ERROR} />}
      </Wrapper>
    </Fragment>
  );
};

export default Index;
