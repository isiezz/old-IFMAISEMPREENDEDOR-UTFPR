import { useState, useEffect } from "react";
import { Navbar, Nav, Container, Image } from "react-bootstrap";
import IF_logo from "../images/IF logo.png";
import Instagram from "../images/Instagram icon.png";

export const TopNavbar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
        if (window.scrollY > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="https://www.youtube.com/@TVIFSULDEMINAS">
            <Image src={IF_logo.src} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#menu" className={activeLink === 'menu' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('menu')}>menu</Nav.Link>
              <Nav.Link href="#sobre" className={activeLink === 'sobre' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('sobre')}>sobre</Nav.Link>
              <Nav.Link href="#pdca" className={activeLink === 'pdca' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('pdca')}>pdca</Nav.Link>
              <Nav.Link href="#equipe" className={activeLink === 'equipe' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('equipe')}>equipe</Nav.Link>
              <Nav.Link href="#empresas" className={activeLink === 'empresas' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('empresas')}>empresas</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="instagram-projeto">
                <a href="https://instagram.com/ifmaisempreendedorutfprr"><Image src={Instagram.src} alt="Instagram" /></a>
              </div>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}