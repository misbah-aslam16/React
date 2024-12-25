import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FiPhoneCall } from "react-icons/fi";
import { IoBagOutline, IoSearch } from "react-icons/io5";

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
  <Container fluid>
    {/* Logo */}
    <Navbar.Brand href="#">
      <img src="./images/logo.PNG" alt="Logo" />
    </Navbar.Brand>

    {/* Navbar Toggle Button */}
    <Navbar.Toggle aria-controls="navbarScroll" />

    {/* Collapsible Navbar Section */}
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="mx-auto my-lg-2 my-lg-0 gap-lg-3 gap-sm-1 "
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        {/* Home Link */}
        <Nav.Link href="#action1">Home</Nav.Link>

        {/* Menu Dropdown */}
        <NavDropdown title="Menu" id="menuDropdown">
          <NavDropdown.Item href="#action3">Menu</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
        </NavDropdown>

        {/* Services Dropdown */}
        <NavDropdown title="Services" id="servicesDropdown">
          <NavDropdown.Item href="#action6">Service 1</NavDropdown.Item>
          <NavDropdown.Item href="#action7">Service 2</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action8">Service 3</NavDropdown.Item>
        </NavDropdown>

        {/* Offers Link */}
        <Nav.Link href="#action2">Offers</Nav.Link>
      </Nav>

      {/* Right Section */}
      <Form className="d-flex gap-4 align-items-center">
        <IoSearch size={30} />
        <IoBagOutline size={30} />
        <Button
          className="mx-2 px-3 d-flex align-items-center rounded-pill"
          style={{ backgroundColor: '#39DB4A', borderColor: '#39DB4A' }}
        >
          <FiPhoneCall className="me-2" /> Contact
        </Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>

  );
}

export default Header;