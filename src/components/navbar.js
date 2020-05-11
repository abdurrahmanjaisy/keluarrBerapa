import React, {Component} from "react";
import {Link} from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.css";

class Navvbar extends Component {
 render(){
   return (
    <Navbar bg="dark" variant="dark" expand="lg">
    <Navbar.Brand>
      <Link to={"/"} className="nav-link">
        keluarBerapa
      </Link>
    </Navbar.Brand>
    
    <Navbar.Toggle aria-controls="basic-navbar-nav" />

    <Container>
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav.Link href="https://keluarberapa.herokuapp.com/docs">
            apiDocs
          </Nav.Link>
          <Nav>
            <Link to={"/buat-pengeluaran"} className="nav-link" >
            Buat Pengeluaran
            </Link>
          </Nav>
          <Nav>
            <Link to={"/daftar-pengeluaran"} className="nav-link">
            Daftar Pengeluaran
            </Link>
          </Nav>
      </Navbar.Collapse>
    </Container>

  </Navbar>
        )
    }
}
export default Navbar;