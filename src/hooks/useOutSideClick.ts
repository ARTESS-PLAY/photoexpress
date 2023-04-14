import { useEffect } from 'react';

export const useOutSideClick = (
    ref: React.RefObject<HTMLDivElement> | null,
    handleClick: () => void,
) => {
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (!ref || !ref.current) return;
            const target = e.target as HTMLElement;
            if (!ref.current.contains(target)) {
                handleClick();
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => document.removeEventListener('click', handleClickOutside);
    }, [ref]);
};
