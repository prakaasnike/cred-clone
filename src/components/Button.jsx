import React from 'react'

const Button = ({ buttonText, onClick }) => {

    return (
        <button onClick={onClick} className="button ">
            {onClick} {buttonText}
        </button>
    )
}

export default Button