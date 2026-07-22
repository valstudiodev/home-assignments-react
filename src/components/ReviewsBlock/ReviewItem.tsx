import React from "react";
import { ReviewItemProps } from "./ReviewsTypes";


export function ReviewItem({ user, children }: ReviewItemProps): React.JSX.Element {
  const { id, name, avatar, rating, review, date } = user
  return (
    <article className="review-item flex gap-4 items-start
    bg-gray-900 p-2">
      <img src={avatar} alt="avatar user"
        className="review-item__avatar rounded-full
        w-12.5 h-12.5" />
      <div className="review-item__inner flex flex-col
      gap-4 grow rounded">
        <div className="review-item__content">
          <h2 className="review-item__title text-gray-500 font-semibold">{name}</h2>
          <p className="review-item__text">{review}</p>
          <span className="review-item__rating">
            {rating}
          </span>
          <span className="review-item__date">
            {date}
          </span>
        </div>
        <div className="review-item__actions flex items-center
      gap-3">
          {children && <div className="review-item__actions">{children}</div>}
        </div>
      </div>
    </article>
  )
}