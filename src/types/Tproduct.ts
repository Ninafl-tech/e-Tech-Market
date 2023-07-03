export type TProduct = {
  price: number;
  id: string;
  title: string;
  category: string;
  description: string;
  rating: string;
  amount: string;
  brand: string;
  images: string[];
};

export type TProductsList = {
  product: {
    price: number;
    id: string;
    title: string;
    category: string;
    description: string;
    rating: string;
    amount: string;
    brand: string;
    images: string[];
  };
};
