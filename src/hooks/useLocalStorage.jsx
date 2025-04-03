import { useState, useEffect } from 'react';

export default function useLocalStorage(key, initialValue) {
    const [saveValue, setSaveValue] = useState(() => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            // Eğer JSON parse edilemezse, direkt değeri döndür
            const item = localStorage.getItem(key);
            return item || initialValue;
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(saveValue));
        } catch (error) {
            // Eğer JSON stringify edilemezse, direkt değeri kaydet
            localStorage.setItem(key, saveValue);
        }
    }, [key, saveValue]);

    const setValue = (value) => {
        const valueToSave = value instanceof Function ? value(saveValue) : value;
        setSaveValue(valueToSave);
    };

    return [saveValue, setValue];
}