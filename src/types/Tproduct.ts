export type TProduct = {
  price: number;
  id: string;
  title: string;
  category: string;
  description: string;
};

export type TProductsList = {
  product: {
    id: string;
    title: string;
    category: string;
    description: string;
    price: number;
  };
};
