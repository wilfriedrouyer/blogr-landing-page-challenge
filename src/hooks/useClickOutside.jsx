import { useEffect } from "react";

export function useClickOutside(ref, close) {
    useEffect(() => {
        const handleClickOutside = e => {
            if (ref.current && !ref.current.contains(e.target)) {
                close();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousemove', handleClickOutside);
    }, [ref, close]);
}