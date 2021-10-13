import React from 'react'
import Header from './Header'
import MainPage from './MainPage'
import './styles.css'

function HomePage() {
    return (
        <div className="home-wrapper">

            <div className="header">
                <Header />
            </div>

            <div className="body">
                <MainPage />
            </div>

            {/* <div className="footer">
                <Footer />
            </div> */}
            
        </div>
    )
}

export default HomePage