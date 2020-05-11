import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import EditExpense from "./components/edit-expense.component";
import ExpensesList from "./components/expenses-listing.component";
import CreateExpense from "./components/create-expense.component";

function App() {
  return (<Router>
    <div className="App">
     
      
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand>
            <Link to={"/"} className="nav-link">
              M&S
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

  {/* <Row className="justify-content-md-center">
    
    <Col md="auto">Pantau terus pengeluaranmu!</Col>
    
  </Row> */}
      <br/>

<Card className="text-center">
        <Card.Header>buatKamu</Card.Header>
        <Card.Body>
          <Card.Title>manage ur self!</Card.Title>
          <Card.Text>
          It's not about how much money you make. It's how you save it :)
              </Card.Text>
          <Button href="http://localhost:3000/buat-pengeluaran">
              Atur Keuanganmu!
            
          </Button>
        </Card.Body>
        <Card.Footer className="text-muted">dariAku</Card.Footer>
      </Card> 

<br/>

      <Container>
        <Row>
          <Col md={12}>
            <div className="wrapper">
              <Switch>
                {/* {<Route exact path='/edi-pengeluara/:id' component={CreateExpense} />  */}
                <Route path="/buat-pengeluaran" component={CreateExpense} />
                <Route path="/edit-pengeluaran/:id" component={EditExpense} />
                <Route path="/daftar-pengeluaran" component={ExpensesList} />
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
      </Container>
    </div>
    
  </Router>);
}

export default App;