import { useState, useEffect } from 'react';

export const useTypewriter = (text: string, speed: number = 50, delay: number = 0) => {
    const [displayText, setDisplayText] = useState('');
    const [isTyping, setIsTyping] = useState(false);

    useEffect(() => {
        let timeout: NodeJS.Timeout;

        const startTyping = () => {
            setIsTyping(true);
            let i = 0;
            const interval = setInterval(() => {
                setDisplayText(text.substring(0, i + 1));
                i++;
                if (i > text.length) {
                    clearInterval(interval);
                    setIsTyping(false);
                }
            }, speed);

            return () => clearInterval(interval);
        };

        if (delay > 0) {
            timeout = setTimeout(startTyping, delay);
        } else {
            startTyping();
        }

        return () => clearTimeout(timeout);
    }, [text, speed, delay]);

    return { displayText, isTyping };
};
