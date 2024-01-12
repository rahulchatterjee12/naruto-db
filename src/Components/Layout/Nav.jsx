import { useRef } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";

function Nav() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle(
            "responsive_nav"
        );
    };

    return (
        <header>
            <h3>LOGO</h3>
            <nav >
                <a href="/#">Home</a>
                <a href="/#">My work</a>
                <a href="/#">Blog</a>
                <a href="/#">About me</a>
                <button
                    className="nav-btn nav-close-btn"
                    onClick={showNavbar}>
                    {/* <FaTimes /> */}
                    O
                </button>
            </nav>
            <button
                className="nav-btn"
                onClick={showNavbar}>
                C
                {/* <FaBars /> */}
            </button>
        </header>
    );
}

export default Nav;