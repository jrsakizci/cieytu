import React from 'react';

const Button = ({type, children, click }) => {
    return (
        <button className={type+"-btn"} onClick={click}>{children}</button>
    );
}
export default Button;