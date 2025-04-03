import { useState, useEffect } from 'react';

export default function useLocalStorage(key, initialValue) {
    const [saveValue, setSaveValue] = useState(() => {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(saveValue));
    }, [key, saveValue]);

    const setValue = (value) => {
        const valueToSave = value instanceof Function ? value(saveValue) : value;
        setSaveValue(valueToSave);
    };

    return [saveValue, setValue];
}