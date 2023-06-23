export type TProduct = {
  brand: string;
  price: number;
  rating: number;
  id: number;
  title: string;
  images: string[];
  category: string;
  name: string;
  description: string;
};

export type TProductsList = {
  product: {
    name: string;
    id: number;
    title: string;
    images: string[];
    category: string;
    description: string;
  };
};
