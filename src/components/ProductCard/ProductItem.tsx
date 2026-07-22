import { ProductCardProps } from "./ProductCard.types";
import { formatPrice } from "./Utilies";
// import styles from "./ProductItem.module.css";

export function ProductItem({ product, children, ...rest }: ProductCardProps): React.JSX.Element {
  const { title, price, imagePath, oldPrice, text, badge } = product

  return (
    <article className="product-card bg-white 
    relative border border-gray-100
    hover:border-success hover-base" {...rest}>
      <div className="product-card__image-wrapper relative 
      p-1.25">
        {badge && <span className="product-badge bg-error
        px-2 py-1 rounded-sm top-2.5 left-2.5 capitalize
        font-semibold text-[14px] absolute">
          {badge}
        </span>}
        <img src={imagePath} alt={text}
          className="product-card__image w-full h-full" />
      </div>
      <div className="product-card__inner p-3 flex
      justify-between gap-2">
        <div className="product-card__content grow">
          <h3 className="product-card__title text-gray-700
        text-[14px]">
            {title}
          </h3>
          <div className="product-card__prices flex
        items-center gap-0.5">
            <span className="product-card__price-current
          font-semibold text-gray-900">
              {formatPrice(price)}
            </span>
            <span className="product-card__price-old 
          text-gray-400 line-through">
              {oldPrice}
            </span>
          </div>
        </div>
        {text && <p className="product-card__text">{text}</p>}
        {children && <div className="product-card__actions">{children}</div>}
      </div>
    </article>
  )
}