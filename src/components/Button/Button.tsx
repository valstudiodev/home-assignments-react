import { ButtonProps } from "./ButtonTypes";
import './style.scss'

export function Button(
  { children,
    className = '',
    variant = 'primary',
    size = 'md',
    isLoading = false,
    disabled = false,
    leftIcon,
    rightIcon,
    ...props }: ButtonProps): React.JSX.Element {

  const baseClass = 'btn';
  const variantClass = `${baseClass}--${variant}`;
  const sizeClass = `${baseClass}--${size}`;
  const loadingClass = isLoading ? `${baseClass}--loading` : '';

  const computedClasses = [
    baseClass,
    variantClass,
    sizeClass,
    loadingClass,
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      className={computedClasses}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && <span className={`${baseClass}__loader`} />}

      {!isLoading && leftIcon && (
        <span className={`${baseClass}__icon ${baseClass}__icon--left`}>
          {leftIcon}
        </span>
      )}

      <span className={`${baseClass}__text`}>{children}</span>

      {!isLoading && rightIcon && (
        <span className={`${baseClass}__icon ${baseClass}__icon--right`}>
          {rightIcon}
        </span>
      )}
    </button>
  )
}