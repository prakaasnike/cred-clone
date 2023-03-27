import React from 'react'
import { Helmet } from 'react-helmet-async';
const HomePage = () => {
    return (
        <div>
            <Helmet>
                <title>My Page Title</title>
                <meta name="description" content="My page description" />
            </Helmet>
            <h1>Welcome to My Page!</h1>
            <p>This is the content of my page.</p>
        </div>
    )
}

export default HomePage