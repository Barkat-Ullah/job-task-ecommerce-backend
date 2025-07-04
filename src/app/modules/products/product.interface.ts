export type TProduct = {
  title: string;
  price: number;
  category: 'Electronics' | 'Fashion' | 'Beauty' | 'Sports' | 'Home';
  description: string;
  quantity: number;
  inStock: boolean;
  image?: string;
};

export type TOrder = {
  email: string;
  product: string;
  quantity: number;
  totalPrice: number;
};
