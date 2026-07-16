import { BuittonActionProps } from "./ProductCard.types";

export function ButtonAction({ className = '', svg, onClick }: BuittonActionProps): React.JSX.Element {
  const styles = `flex-center bg-gray-50 
                w-10 h-10 rounded-full    
                cursor-pointer hover-base 
                hover:bg-success text-gray-700
                hover:text-white`

  return (
    <button type="button" onClick={onClick}
      className={`${className} ${styles}`}>
      {svg}
    </button>
  )
}

