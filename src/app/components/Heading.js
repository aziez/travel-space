import Image from "next/image";
import Link from "next/link";
import { Container, Nav, Navbar } from "react-bootstrap";

const Heading = ({ active }) => {
  return (
    <div className="w-full">
      <Navbar className="h-full w-full" expand="md">
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
            <Nav variant="underline" defaultActiveKey="/" activeKey={active}>
              <Nav.Link
                as={Link}
                href="/"
                className="text-white whitespace-nowrap"
              >
                <b>00 </b>HOME
              </Nav.Link>
              <Nav.Link
                as={Link}
                href="/destination"
                className="text-white whitespace-nowrap"
              >
                <b>01</b> DESTINATION
              </Nav.Link>
              <Nav.Link
                as={Link}
                href="/crew"
                className="text-white whitespace-nowrap"
              >
                <b>02 </b>CREW
              </Nav.Link>
              <Nav.Link
                as={Link}
                href="/tech"
                className="text-white whitespace-nowrap"
              >
                <b>03 </b>TECHNOLOGY
              </Nav.Link>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
export default Heading;
