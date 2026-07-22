import { useEffect } from 'react';
import { getScrollbarWidth } from '@/utils/bar/getSceollBarWidth';

export function useLockBodyScroll(isLocked: boolean): void {
  useEffect(() => {
    if (!isLocked) return;

    document.body.classList.add('scroll-lock');
    document.body.style.paddingRight = `${getScrollbarWidth()}px`;

    return () => {
      document.body.classList.remove('scroll-lock');
      document.body.style.paddingRight = '';
    };
  }, [isLocked]);
}