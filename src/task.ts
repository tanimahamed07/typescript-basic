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

const calculateTotal = ({ price, quantity = 1 }: CartItem) => {
  return price * quantity
};

calculateTotal(product);


