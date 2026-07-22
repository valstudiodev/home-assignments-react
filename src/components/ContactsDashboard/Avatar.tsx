import React from "react";
import './avatar.scss';

type AvatarSize = 'sm' | 'md' | 'lg'
type AvatarShape = 'circle' | 'square'

interface Avatar {
  src?: string;
  alt?: string;
  icon?: React.ReactNode;
  initials?: string;
  size?: AvatarSize;
  shape?: AvatarShape;
  className?: string;
}

export function Avatar({ src, alt = '', icon, initials, size = 'md', shape = 'circle', className = '' }: Avatar): React.JSX.Element {
  if (!src && !icon && !initials) {
    return <></>;
  }

  const baseClass = 'avatar'
  const modifiers = [
    `${baseClass}`,
    `${baseClass}--size-${size}`,
    `${baseClass}--shape-${shape}`,
    className,
  ].filter(Boolean).join(' ')

  function renderContent() {
    if (src) {
      return (
        <img
          src={src}
          alt={alt}
          className={`${baseClass}__image`}
          loading="lazy"
        />
      )
    }

    if (icon) {
      return (
        <div className={`${baseClass}__icon`} aria-hidden='true'>
          {icon}
        </div>
      )
    }

    if (initials) {
      return (
        <span className={`${baseClass}__initials`}>
          {initials.slice(0, 2).toUpperCase()}
        </span>
      )
    }

    return null
  }

  return (
    <div className={modifiers}>
      {renderContent()}
    </div>
  )
}