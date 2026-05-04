type CartItem = {
  name: string;
  price: number;
  quantity?: number;
};
const product: CartItem = {
  name: "bike",
  price: 100,
  quantity: 6,
};

const calculateTotal = ({ Cart: CartItem }) => {};

console.log(calculateTotal(product));
