import React from 'react'

const Button = ({ buttonText, onClick, prefix }) => {

    return (
        <button onClick={onClick} className="button ">
            {prefix} {onClick} {buttonText}
        </button>
    )
}

export default Button