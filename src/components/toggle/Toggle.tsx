import { useState } from "react";

export default function Toggle(): React.JSX.Element {
  const [isOnline, setIsOnline] = useState<boolean>(true)

  function handleToggle(): void {
    setIsOnline(prev => !prev)
    console.log(isOnline);

  }

  return (
    <div className="toggle">
      <h2 className="text-3xl font-bold mb-5">Toggle</h2>
      <span className="toggle__status">
        {isOnline}
      </span>
      <button type="button"
        onClick={handleToggle}
        className="toggle__btn bg-amber-700
        py-2 px-4 rounded-2xl flex-center
        cursor-pointer hover-base hover:bg-amber-900">
        Toggle
      </button>
    </div>
  )
}