// type CheckboxSize = 'sm' | 'md' | 'lg'

// type CheckboxShape = 'square' | 'rounded' | 'circle'

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  className?: string;
}

