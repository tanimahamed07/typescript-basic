type Product = {
  id: number;
  name: string;
  price: string;
  color?: string;
  stock: number;
};

type ProductSummary = Pick<Product, "id" | "name" | "price">;

type ProductWithoutStock = Omit<Product, "stock" | "color">;

type ProductWithColor = Required<Product>;

const product: ProductWithColor = {
  id: 222,
  name: "Mouse",
  price: "20",
  stock: 100,
  color: "black",
};

type OptionalProduct = Partial<Product>;

type ProductReadonly = Readonly<Product>;

const emptyObj: Record<string, unknown> = {};

const product1 = {
  id: 222,
  name: "Mouse",
  price: "20",
};
