import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useProductsStore } from "../../store";
import Input from "../../components/form/Input";
import { Wrapper, Title } from "../../styles";
import { generateId } from "../../services/utils/generateId";
import { ButtonSubmit } from "../../styles";
import Back from "../../components/Back";
import { Toaster, toast } from "sonner";

const Legend = styled.p`
  font-family: "Josefin Sans", sans-serif;
  font-weight: 500;
  font-size: 17px;
  color: ${({ theme }) => theme.title};
`;

const ContentForm = styled.div`
  margin-top: 30px;
  background-color: #f2f2f2;
  padding: 20px;
  width: fit-content;
  border-radius: 6px;
`;

const Index = () => {
  // Products Store
  const products = useProductsStore<any>((state: any) => state.products);
  const setProducts = useProductsStore<any>((state: any) => state.setProducts);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (dataForm: any) => {
    const newProdut = {
      id: generateId(),
      ...dataForm,
    };
    setProducts([newProdut, ...products]);
    toast.success("Producto agregado!");
    reset();
  };

  return (
    <Wrapper>
      <Back>Regresar</Back>
      <Title>Panel de administración</Title>
      <Legend>Agrega nuevos productos al inventario</Legend>
      <ContentForm>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Input
              type="text"
              register={register}
              errors={errors}
              keyName="name"
              placeholder="Nombre del producto"
              required={true}
            />
          </div>
          <div>
            <Input
              type="number"
              register={register}
              errors={errors}
              keyName="price"
              placeholder="Precio"
              required={true}
            />
          </div>
          <div>
            <Input
              type="number"
              register={register}
              errors={errors}
              keyName="amount"
              placeholder="Inventario"
              required={true}
            />
          </div>
          <ButtonSubmit>Agregar</ButtonSubmit>
        </form>
      </ContentForm>
      <Toaster />
    </Wrapper>
  );
};

export default Index;
