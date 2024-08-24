import { Link, Outlet } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import {Container,Nav,Navbar,NavDropdown } from 'react-bootstrap/';


const Layout = () => {
   return (<>
     
     <ToastContainer/>

     <Navbar collapseOnSelect expand="lg" className="navbar navbar-dark bg-dark px-3">
      <Container>
        <Navbar.Brand as={Link} to="/">CRUD Method</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/add">Add</Nav.Link>
            <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
     {/* <nav id="navbar-example2" className="navbar navbar-dark bg-dark px-3">
     <div class="container">
  <a className="navbar-brand" href="#">CRUD Method</a>
  <ul className="nav nav-pills">
    <li className="nav-item">
        
      <Link to="/" className="nav-link" href="#scrollspyHeading1">Home</Link>
    </li>
    <li className="nav-item">
    <Link to="/About" className="nav-link" href="#scrollspyHeading2">About</Link>
    </li>
    <li className="nav-item">
    <Link to="/add" className="nav-link" href="#scrollspyHeading2">Add</Link>
    </li>
   
  </ul>
  </div>
</nav> */}

      <Outlet />


   </>)
}
export default Layout;