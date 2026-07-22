// Spinner.tsx
import React from 'react';
import './spinner.scss';

export type SpinnerSize = 'small' | 'medium' | 'large';

export interface SpinnerProps {
  size?: SpinnerSize;
  overlay?: boolean;
  label?: string;
  className?: string;
}

export const Spinner: React.FC<SpinnerProps> = ({
  size = 'medium',
  overlay = false,
  label = 'Loading...',
  className = '',
}) => {
  const containerClasses = [
    'spinner-container',
    `spinner-container--${size}`,
    overlay ? 'spinner-container--overlay' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={containerClasses} role="status" aria-label={label}>
      <div className="spinner-container__circle" />
    </div>
  );
};