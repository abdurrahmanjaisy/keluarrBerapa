import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import ExpenseTableRow from './ExpenseTableRow';


export default class ExpenseList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      expenses: []
    };
  }

  componentDidMount() {
    axios.get('https://keluarberapa.herokuapp.com/api/pengeluaran')
      .then(res => {
        this.setState({
          expenses: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataTable() {
    return this.state.expenses.map((res, i) => {
      return <ExpenseTableRow obj={res} key={i} />;
    });
  }


  render() {
    return (<div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Buat Apa</th>
            <th>Harga</th>
            <th>Deskripsi</th>
            <th>Opsi</th>
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
    </div>);
  }
}