import { CheckboxProps } from "./CheckboxTypes";
// import { Check } from "lucide-react";

export default function Checkbox({
  label,
  className = '',
  id,
  disabled,
  children,
  ...restProps
}: CheckboxProps): React.JSX.Element {



  return (
    <label
      className='checkbox cursor-pointer'
    >
      <input
        {...restProps}
        // ref={ref}
        className="checkbox__input"
        type="checkbox"
        disabled={disabled}
      />
      <span
        className='checkbox__control'
        aria-hidden="true">

      </span>

      <span className="checkbox__label">

      </span>
    </label>
  )
}