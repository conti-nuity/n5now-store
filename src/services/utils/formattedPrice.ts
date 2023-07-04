export const formattedPrice = (price: number) => {
  return new Intl.NumberFormat("es-MX").format(price);
};
