import React, { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";


const ScrollButton = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true);
        } else if (scrolled <= 300) {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
            
        });
    };

    window.addEventListener("scroll", toggleVisible);

    return (
        <a className="scroll_button">
            <FaArrowCircleUp size={70}
                onClick={scrollToTop}
                style={{    
                            visibility: visible ? 'visible' : 'hidden',
                            opacity: visible ? 1 : 0,
                            transition: 'opacity 1s ease-in-out',
                }}
            />
        </a>
    );
};

export default ScrollButton;