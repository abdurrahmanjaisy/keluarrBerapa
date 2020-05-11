import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

export default class HalamanDepan extends Component {

    render() {
        return (<div className="form-wrapper">
                <Card className="text-center">
            <Card.Header>buatKamu</Card.Header>
            <Card.Body>
            <Card.Title>manage ur self!</Card.Title>
            <Card.Text>
            it's not about how much money you make. it's how you save it :)
                </Card.Text>
            <Button href="http://localhost:3000/buat-pengeluaran">
                Atur Keuanganmu!
                
            </Button>
            </Card.Body>
            <Card.Footer className="text-muted">dariAku</Card.Footer>
        </Card>
        </div>)
    }
}