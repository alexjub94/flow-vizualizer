import Nav from "react-bootstrap/Nav";
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar({refreshClbk} : {refreshClbk: () => void}) {
    return (
        <Navbar variant={"dark"} bg={"dark"} expand="lg">
        <Navbar.Brand href="#home">Flow visualizer</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    );
}