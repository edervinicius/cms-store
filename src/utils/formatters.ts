export const formatPrice = (price: number) => {
  return price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};
export const roundRating = (number: number) => {
  if (number % 0.5 === 0) {
    return number;
  }
  return Math.round(number * 2) / 2;
};
