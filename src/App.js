import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import EditExpense from "./components/edit-expense.component";
import ExpensesList from "./components/expenses-listing.component";
import CreateExpense from "./components/create-expense.component";
import HomePage from "./components/depan";

function App() {
  return (<Router>
    <div className="App">
     
      
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand>
            <Link to={"/"} className="nav-link">
              keluarberapa
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
                  Daftar Pegeluaran
                  </Link>
                </Nav>
      
            </Navbar.Collapse>
        </Container>
        </Navbar>
      
  <Container> 
      <br/>

        <Row>
          <Col md={12}>
            <div className="wrapper">
              <Switch>
                <Route exact path='/' component={HomePage} /> 
                <Route path="/buat-pengeluaran" component={CreateExpense} />
                <Route path="/edit-pengeluaran/:id" component={EditExpense} />
                <Route path="/daftar-pengeluaran" component={ExpensesList} />
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    
  </Router>);
}

export default App;