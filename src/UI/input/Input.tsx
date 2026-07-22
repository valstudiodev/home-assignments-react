import { useId } from "react";


type InputSize = 'sm' | 'md' | 'lg'

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  error?: string;
  helperText?: string;
  inputSize?: InputSize;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export default function Input({
  label,
  error,
  helperText,
  inputSize,
  leftIcon,
  rightIcon,
  className = '',
  disabled = false,
  required = false,
  id,
  style,
  ...props
}: InputProps): React.JSX.Element {

  const generateId = useId()
  const inputId = id || generateId
  const errorId = `${inputId}-error`
  const helperId = `${inputId}-helper`

  const getContainerStyles = (): React.CSSProperties => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    fontFamily: 'sans-serif',
    width: '100%',
    ...style
  });

  const getInputStyles = (): React.CSSProperties => {
    const baseStyle: React.CSSProperties = {
      width: '100%',
      boxSizing: 'border-box',
      borderRadius: '6px',
      border: `1px solid ${error ? '#ff0000' : '#ccc'}`,
      backgroundColor: disabled ? '#f5f5f5' : '#fff',
      color: disabled ? '#999' : '#333',
      cursor: disabled ? 'not-allowed' : 'text',
      transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
      paddingLeft: leftIcon ? '36px' : undefined,
      paddingRight: rightIcon ? '36px' : undefined,
    };

    const sizes: Record<InputSize, React.CSSProperties> = {
      sm: { paddingTop: '6px', paddingBottom: '6px', fontSize: '13px' },
      md: { paddingTop: '10px', paddingBottom: '10px', fontSize: '15px' },
      lg: { paddingTop: '14px', paddingBottom: '14px', fontSize: '17px' },
    };

    return { ...baseStyle, ...sizes[inputSize] };
  }


  const ariaDescribedBy = [
    error ? errorId : null,
    helperText ? helperId : null
  ].filter(Boolean).join(' ') || undefined;

  return (
    <div style={getContainerStyles()}
      className={`input-container ${className}`}>

      {label && (
        <label
          htmlFor={inputId}
          style={{ fontSize: '14px', fontWeight: 500, color: disabled ? '#999' : '#333' }}>
          {label}
          {required && <span aria-hidden="true" style={{ color: '#ff0000', marginLeft: '4px' }}>*</span>}
        </label>
      )}


      <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>

        {/* left icon */}
        {leftIcon && (
          <span
            aria-hidden="true"
            style={{ position: 'absolute', left: '12px', display: 'flex', color: '#666' }}
          ></span>
        )}

        {/* ====== input ===== */}
        <input
          type="text"
          className="pl-2"
          id={inputId}
          disabled={disabled}
          required={required}
          style={getInputStyles()}

          // АТРИБУТИ ДОСТУПНОСТІ (A11y):
          aria-required={required} // Повідомляє про обов'язковість поля
          aria-invalid={!!error} // Сигналізує скрінрідеру про наявність помилки валідації
          aria-describedby={ariaDescribedBy} // Пов'язує інпут із текстом помилки/підказки нижче

          {...props}
        />

        {/* right icon */}
        {rightIcon && (
          <span
            aria-hidden='true'
            style={{ position: 'absolute', right: '12px', display: 'flex', color: '#666' }}
          >
            {rightIcon}
          </span>
        )}
      </div>

      {/* Допоміжний текст */}
      {helperText && !error && (
        <span
          id={helperId}
          style={{ fontSize: '12px', color: '#666' }}
        >
          {helperText}
        </span>
      )}

      {/* Текст помилки */}
      {error && (
        <span
          id={errorId}
          role='alert' // Скрінрідер негайно озвучить помилку, якщо вона з'явиться динамічно
          style={{ fontSize: '12px', color: '#ff0000', fontWeight: 500 }}
        >
          {error}
        </span>
      )}
    </div>
  )
}