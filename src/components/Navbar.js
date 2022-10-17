import {useState} from "react"
import styled from "styled-components";
import logo from "../assets/logo.svg"
import {GiHamburgerMenu} from "react-icons/gi"
import {VscChromeClose} from "react-icons/vsc"

const Navbar = () => {
    const [navToggle, setNavToggle] = useState(false)

    const handleClick = () => {
        setNavToggle(prevState => !prevState)
    }

    return ( 
        <Wrapper>
            <img src={logo} />
            <button 
                onClick={handleClick}
                className="mobile-nav-toggle" 
                aria-controls="primary-navigation" 
                aria-expanded="false">
                <span className="sr-only">Menu</span>
                {!navToggle ? <GiHamburgerMenu size={30} /> : <VscChromeClose size={30} />}
            </button>
            <nav>
                <ul id="primary-navigation" className={navToggle ? "primary-navigation" : "primary-navigation-hidden"}>
                    <li><a href="#"><span className="nav-number">01</span>Home</a></li>
                    <li><a href="#"><span className="nav-number">02</span>About</a></li>
                    <li><a href="#"><span className="nav-number">03</span>Contact</a></li>
                    <li><a href="#"><span className="nav-number">04</span>Destination</a></li>
                </ul>
            </nav>
        </Wrapper>
     );
}


 
export default Navbar;

const Wrapper = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
        margin: 2rem;
    }

    nav {
        display: flex;
        justify-content: space-evenly;
    }

    ul {
        list-style: none;
        display: flex;
        gap: var(--gap, 4rem);
        padding: 0;
        margin: 0;
    }


    a {
        text-decoration: none;
        letter-spacing: 1px;
        font-size: 2rem;
        font-family: var(--font-normal-roboto);
        color: var(--clr-white);     
    }

    .mobile-nav-toggle {
        display: none;
    }


    .nav-number {
        margin-right: 1rem;
        font-weight: bold;
    }


    .primary-navigation-hidden {
        text-align: left;
        background-color: var(--clr-medium-sapphire);
        padding-inline: clamp(3rem, 10vw, 8rem);
        padding-top: 1rem;
        padding-bottom: 1rem;
    }


    .sr-only {
        position: absolute ;
        left: -10000px;
        width: 1px;
        height: 1px;
        top: auto;
        overflow: hidden;
    }

    @media (max-width: 35rem) {
        ul {
            gap: var(--gap, 2rem);
        }

        .primary-navigation {
            position: fixed;
            inset: 0 0 0 30%;
            flex-direction: column;
            padding: min(20vh, 10rem) 2rem;
            transform: translateX(0%); 
            transition: transform  350ms ease-in;
        }

        .primary-navigation-hidden {
            position: fixed;
            inset: 0 0 0 30%;
            flex-direction: column;
            padding: min(20vh, 10rem) 2rem;
            transform: translateX(100%); 
            transition: transform  350ms ease-out;
            text-align: left;
            background-color: var(--clr-medium-sapphire);
        }

        .mobile-nav-toggle {
            position: absolute;
            width: 3rem;
            aspect-ratio: 1;
            top: 4rem;
            right: 4rem;
            z-index: 10;
            display: block;
            border: none;
            background: transparent;
        }
    }

    @media(min-width: 35rem) and (max-width: 55rem) {
        .nav-number {
            display: none;
        }
    }

    @media (prefers-color-scheme: dark) {
        .primary-navigation {
            background-color: var(--clr-light-sapphire);
        }
    }
`