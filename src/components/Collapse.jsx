import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const CollapseExample = (props) => {
const [isOpen, setIsOpen] = useState(false);

const handleButtonClick = () => {
setIsOpen(!isOpen);
};

return (
<div className="aboutpage">
<button className="aboutbutton" onClick={handleButtonClick}>
<span className="aboutbutton-text">{props.text}</span>
<FiChevronDown className={`aboutbutton-icon ${isOpen ? "aboutbutton-icon-open" : ""}`} />
</button>
{isOpen && (
<div className="abouttext">
<p className="collapse_text">{props.textContent}</p>
</div>
)}
</div>
);
};

export default CollapseExample;