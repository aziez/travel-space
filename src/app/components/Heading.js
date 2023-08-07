import Image from "next/image";
import { Container, Nav, Navbar } from "react-bootstrap";

const Heading = () => {
  return (
    <Navbar className="h-full" expand="md">
      <Container>
        <Navbar.Brand href="/">
          <Image
            alt="logo"
            src={"./assets/shared/logo.svg"}
            width={64}
            height={64}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
      <div className="w-full border-b border-gray-400"></div>
      <Navbar.Collapse id="basic-navbar-nav">
        <div className="w-full px-10 py-2 bg-white bg-opacity-10 backdrop-blur-lg drop-shadow-lg">
          <Nav variant="underline" defaultActiveKey="/home">
            <Nav.Link href="/home" className="text-white whitespace-nowrap">
              <b>00 </b>HOME
            </Nav.Link>
            <Nav.Link
              href="/destination"
              className="text-white whitespace-nowrap"
            >
              <b>01</b> DESTINATION
            </Nav.Link>
            <Nav.Link href="/crew" className="text-white whitespace-nowrap">
              <b>02 </b>CREW
            </Nav.Link>
            <Nav.Link href="/tech" className="text-white whitespace-nowrap">
              <b>03 </b>TECHNOLOGY
            </Nav.Link>
          </Nav>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Heading;
