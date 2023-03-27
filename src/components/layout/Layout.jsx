import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div>
            <Header />

            {/* Main Content */}
            <main>
                {children}
            </main>

            <Footer />
        </div>
    );
};

export default Layout;
