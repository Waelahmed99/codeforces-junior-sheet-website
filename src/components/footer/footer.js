import React from 'react'
import './footer.css'
import icpcSCU from './icpc-scu.png'

function Footer() {
    return (
        <footer>
            <img src={icpcSCU} alt="icpcSCU"/>
            <a 
                href="https://www.facebook.com/ICPCSCU/"
                rel="noopener noreferrer"
                target="_blank">
                <div className="desc">
                    <p>Website is Made and Maintained by</p>
                    <p>@Suez Canal University ICPC Community</p>
                </div>
            </a>

            <a 
                href="https://www.youtube.com/channel/UC8OxKsmAyrGAfBiluhpLkbA"
                rel="noopener noreferrer"
                target="_blank">
                <div className="desc">
                    <p>Sheets are Written and Maintained by</p>
                    <p>@Arabic Competitive Programming</p>
                </div>
            </a>
        </footer>
    )
}

export default Footer