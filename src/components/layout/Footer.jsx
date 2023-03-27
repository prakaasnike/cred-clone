import React from 'react'

const Footer = () => {
    const date = new Date(Date.now()).getFullYear().toString();
    return (
        <div>
            {/* Footer */}
            <footer>
                {/* Copyright */}
                <p>&copy; {date} My Company</p>
            </footer>
        </div>
    )
}

export default Footer