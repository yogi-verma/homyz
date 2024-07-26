import "./Footer.css"
import { FaInstagram } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"



const Footer = () => {
    return (
        <section className="f-wrapper">
            <div className="innerWidth f-container">


                {/* Left Side */}
                <div className="flexColStart f-left">
                    <img src="./logo2.png" alt="logo" width={120} />

                    <span className="secondaryText">
                        Our vision is to make all people
                        the best place to live for them.
                    </span>
                </div>


                {/* Right Side */}
                <div className="flexColStart f-right">
                    <span className="primaryText">Information</span> 
                    <span className="secondaryText">Gurugram, Haryana(India)</span> 
                    
                    <div className="flexCenter f-menu">
                        <a href="https://www.instagram.com/its_yogiiii_22/"><span><FaInstagram/></span></a>
                        <a href="www.linkedin.com/in/pys123"><span><FaLinkedin/></span></a>
                        <a href="https://github.com/yogi-verma"><span><FaGithub/></span></a>
                        <a href=""><span><FaTwitter/></span></a>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Footer