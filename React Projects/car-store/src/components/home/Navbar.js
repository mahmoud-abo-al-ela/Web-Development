import { Navbar, Nav, Container } from "react-bootstrap";
import { useState, useEffect, useRef } from "react";
import classes from "./Navbar.module.css";
import Cart from "../Cart";

function Navs() {
  const [isBackdrop, setIsBackdrop] = useState(true);
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const sectionsRef = useRef([]);

  useEffect(() => {
    sectionsRef.current = [
      document.querySelector("#home"),
      document.querySelector("#about"),
      document.querySelector("#services"),
      document.querySelector("#cars"),
      document.querySelector("#contact-us"),
    ];
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;

      sectionsRef.current.forEach((section, index) => {
        if (
          section.offsetTop - 100 <= currentPosition &&
          section.offsetTop + section.offsetHeight - 100 > currentPosition
        ) {
          setActiveLink(section.id);
        }

        const isBottom =
          window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 50;
        if (isBottom) {
          setActiveLink("contact-us");
        }
        if (window.pageYOffset > 0) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navbarClasses = `${classes.navbar} fixed-top ${
    scrolled ? classes.scrolled : ""
  }`;

  const toggleHandler = () => {
    setIsBackdrop(!isBackdrop);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  return (
    <>
      <Navbar isBackdrop={isBackdrop} className={navbarClasses} expand="md">
        <Container>
          <Navbar.Brand>
            <h1 className={classes.brand}>
              <span>Your</span>Car
            </h1>
          </Navbar.Brand>
          <div className={classes.toggle}>
            <Nav.Link
              href="#cart"
              className={`d-md-none ${classes.link_cart} `}
            >
              <Cart />
            </Nav.Link>

            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              onClick={toggleHandler}
            />
          </div>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link
                href="#home"
                className={`${classes.link} ${
                  activeLink === "home" ? classes.active : ""
                }`}
                onClick={() => handleLinkClick("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#about"
                className={`${classes.link} ${
                  activeLink === "about" ? classes.active : ""
                }`}
                onClick={() => handleLinkClick("about")}
              >
                About
              </Nav.Link>
              <Nav.Link
                href="#services"
                className={`${classes.link} ${
                  activeLink === "services" ? classes.active : ""
                }`}
                onClick={() => handleLinkClick("services")}
              >
                Services
              </Nav.Link>
              <Nav.Link
                href="#cars"
                className={`${classes.link} ${
                  activeLink === "cars" ? classes.active : ""
                }`}
                onClick={() => handleLinkClick("cars")}
              >
                Cars
              </Nav.Link>
              <Nav.Link
                href="#contact-us"
                className={`${classes.link} ${
                  activeLink === "contact-us" ? classes.active : ""
                }`}
                onClick={() => handleLinkClick("contact-us")}
              >
                Contact Us
              </Nav.Link>
              <Nav.Link
                href="#cart"
                className={`d-none d-md-block ${classes.link_cart} `}
              >
                <Cart />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {!isBackdrop && <div className={classes.navbarBackdrop} />}
    </>
  );
}

export default Navs;
