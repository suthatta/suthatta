import React, {useState } from "react";
import LogoImg from "../assets/logo.png";
import {
    NavbarContainer,
    LeftContainer,
    RightContainer,
    NavbarExtendedContainer,
    NavbarInnerContainer,
    NavbarLinkContainer,
    NavbarLink,
    Logo,
    OpenLinksButton,
    NavbarLinkExtended,
} from "../styles/Navbar.style"

// import logo and add on Rightcontainer <Logo src={LogoImg}></Logo>

function Navbar(){

    const [extendNavbar, setExtendNavbar] = useState(false);

    return (<NavbarContainer extendNavbar={extendNavbar}>
        <NavbarInnerContainer>
          <LeftContainer>
            <NavbarLinkContainer>
              <NavbarLink to="/"> Home</NavbarLink>
              <NavbarLink to="/project"> Projects</NavbarLink>
              <NavbarLink to="/contact"> Contact</NavbarLink>
              <NavbarLink to="/about"> About</NavbarLink>
              <OpenLinksButton
                onClick={() => {
                  setExtendNavbar((curr) => !curr);
                }}
              >
                {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
              </OpenLinksButton>
            </NavbarLinkContainer>
          </LeftContainer>
          <RightContainer>
          <Logo src={LogoImg}></Logo>
          </RightContainer>
        </NavbarInnerContainer>
        {extendNavbar && (
          <NavbarExtendedContainer>
            <NavbarLinkExtended to="/"> Home</NavbarLinkExtended>
            <NavbarLinkExtended to="/products"> Products</NavbarLinkExtended>
            <NavbarLinkExtended to="/contact"> Contact Us</NavbarLinkExtended>
            <NavbarLinkExtended to="/about"> About Us</NavbarLinkExtended>
          </NavbarExtendedContainer>
        )}
      </NavbarContainer>
    );
  }


export default Navbar;