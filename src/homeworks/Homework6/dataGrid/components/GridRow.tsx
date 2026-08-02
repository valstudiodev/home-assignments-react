import { GridRowProps } from "@/homeworks/Homework6/dataGrid/types";
import { memo } from "react";

function GridRow({ product }: GridRowProps): React.JSX.Element {
  console.log('-----Grid Row render-----', product.title);

  return (
    <article
      className="card w-full">
      <div
        className="card__inner flex flex-col gap-3
        bg-bg-card p-2 h-full"
        key={product.id}>
        <h3 className="card__title text-center
        text-2xl underline"
        >
          {product.title}
        </h3>
        <p className="card__desc grow">{product.description}</p>
        <div className="card__info flex 
        items-center gap-2 justify-between">
          <span className="card__category
          bg-amber-900 rounded-2xl px-2 py-1"
          >
            {product.category}
          </span>
          <span className="card__price 
          bg-gray px-2 py-1 rounded-2xl"
          >
            {product.price}
          </span>
        </div>
      </div>
    </article>
  )
}

export default memo(GridRow)