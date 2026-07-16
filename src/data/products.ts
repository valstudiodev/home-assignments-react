import type { Product } from "../components/ProductCard/ProductCard.types";
import apple from "@/assets/img/products/product-img-apple.webp";
import cabbage from "@/assets/img/products/product-img-cabbage.webp";
import capsicum from "@/assets/img/products/product-img-capsicum.webp";
import cauliflower from "@/assets/img/products/product-img-cauliflower.webp";
import chili from "@/assets/img/products/product-img-chili.webp";

export const productsList: Product[] = [
  {
    id: 'product-001',
    imagePath: apple,
    title: 'Green Apple',
    price: 14.99,
    oldPrice: 20.99,
  },
  {
    id: 'product-002',
    imagePath: cabbage,
    title: 'Chinese cabbage',
    price: 12,
  },
  {
    id: 'product-003',
    imagePath: capsicum,
    title: 'Green Capsicum',
    price: 9,
    oldPrice: 20.99,
  },
  {
    id: 'product-004',
    imagePath: cauliflower,
    title: 'Fresh Cauliflower',
    price: 12,
  },
  {
    id: 'product-005',
    imagePath: chili,
    title: 'Green Chili',
    price: 34,
  }
]

export const productItem: Product = {
  id: 'product-001',
  imagePath: apple,
  title: 'Green Apple',
  price: 14.99,
  oldPrice: 20.99,
  badge: 'sale 50%',
}