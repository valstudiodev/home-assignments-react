import { useState } from "react";
import { ReviewButtonAction } from "./ReviewsTypes";

export function ReviewActionButton({ iconPath }: ReviewButtonAction): React.JSX.Element {
  const [count, setCount] = useState<number>(0)

  function handleCountClick(): void {
    setCount(prev => prev + 1)
  }

  return (
    <button type="button"
      onClick={handleCountClick}
      className="review-actions__btn-like
        relative cursor-pointer">
      {iconPath}
      <span className="absolute -top-1.5 -right-1.5
      text-sm">
        {count}
      </span>
    </button>
  )
}