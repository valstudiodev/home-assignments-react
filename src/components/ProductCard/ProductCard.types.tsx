import { ReactElement } from "react";

export interface Product {
  id: string | number;
  imagePath: string;
  title: string;
  price: number;
  oldPrice?: number;
  text?: string;
  badge?: string | number;
  tags?: string[]
}

export interface ProductCardProps {
  product: Product;
  children?: React.ReactNode;
}

export interface ProductListProps {
  products: Product[];
  renderActions?: (product: Product) => React.ReactNode;
}


export interface ProductItemProps {
  id: string;
  title: string;
  titleImg: string;
  price: number;
  image: string;
  oldPrice?: number;
  // children: React.ReactNode;
}

export interface BuittonActionProps {
  className: string | null;
  svg: ReactElement;
  onClick: () => void;
}


export interface ProductActionsProps {
  productId: string;
  onAddCart: (id: string) => void;
  onQuickView: (id: string) => void;
  onFavorite: (id: string) => void;
}

