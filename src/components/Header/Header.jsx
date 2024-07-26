import { useState } from "react"
import { BiMenuAltRight } from "react-icons/bi"
import "./Header.css"
import OutsideClickHandler from "react-outside-click-handler"

const Header = () => {

    const [menuOpened, setMenuOpened] = useState(false);

    const getMenuStyles = (menuOpened) => {
        if (document.documentElement.clientWidth <= 800) {
            return {
                right: !menuOpened && "-100%"
            }
        }
    }


    return (
        <section className="h-wrapper">
            <div className="paddings innerWidth h-container">

                <img src="./logo.png" alt="" width={100} />

                <OutsideClickHandler onOutsideClick={() => setMenuOpened(false)}>
                    <div className="flexCenter h-menu"
                        style={getMenuStyles(menuOpened)}
                    >
                        <a href="#residencies" className="hover">Resdencies</a>
                        <a href="#our-values" className="hover">Our Values</a>
                        <a href="#contact-us" className="hover">Contact Us</a>
                        <a href="#get-started" className="hover">Get Started</a>
                        <button className="button" >
                            <a href="">Contact</a>
                        </button>
                    </div>
                </OutsideClickHandler>
                {/* menu icons */}
                <div className="menu-icon"
                    onClick={() => setMenuOpened((prev) => !prev)}
                >
                    <BiMenuAltRight size={30} />
                </div>

            </div>


        </section>
    )
}

export default Header