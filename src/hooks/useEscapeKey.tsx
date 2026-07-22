import { useEffect } from 'react';

export function useEscapeKey(
  isEnabled: boolean,
  callback: () => void
): void {
  useEffect(() => {
    if (!isEnabled) return;

    function handleKeyDown(event: KeyboardEvent): void {
      if (event.key === 'Escape') {
        callback();
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isEnabled, callback]);
}