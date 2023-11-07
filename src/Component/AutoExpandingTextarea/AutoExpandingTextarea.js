import React, { useEffect, useRef } from "react";

const AutoExpandingTextarea = ({ value, onChange, placeholder, onEnterPress }) => {
    const textareaRef = useRef(null);

    const resizeTextarea = () => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = 'auto';
            textarea.style.height = textarea.scrollHeight + 'px'; 
        }
    };

    useEffect(() => {
        resizeTextarea();
    }, [value]);

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            if (onEnterPress) {
                onEnterPress(); 
            }
        }
    };

    return (
        <textarea
            ref={textareaRef}
            rows={1}
            value={value}
            onChange={(e) => {
                onChange(e);
                resizeTextarea();
            }}
            placeholder={placeholder}
            onKeyDown={handleKeyDown}
        />
    );
};

export default AutoExpandingTextarea;
