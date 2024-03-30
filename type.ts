import { Product } from '@prisma/client';

type CartItemType = {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
};

export type CartType = {
  products: CartItemType[];
  totalItems: number;
  totalPrice: number;
};

export type ActionTypes = {
  addToCart: (item: CartItemType) => void;
  removeFromCart: (item: CartItemType) => void;
  clearProducts: () => void;
  incrementQuantity: (productId: string) => void;
  decrementQuantity: (productId: string) => void;
};

export type SafeProduct = Omit<Product, 'createdAt'> & {
  createdAt: string;
};
