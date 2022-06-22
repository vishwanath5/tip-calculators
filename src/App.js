

import React, { Component } from 'react';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bAmount: "",
      service: "",
      name: "",
      customerData: [],
      len: "",
      totalTip: ""
    }
  }

  handler() {

    this.setState({ customerData: [...this.state.customerData, { name: this.state.name, tip: (this.state.service) * (this.state.bAmount) }] })
    console.log(this.state.customerData);
  }
  handler2(e) {
    this.setState({ len: this.state.customerData.length })
    var total = this.state.customerData.map(item => item.tip).reduce((a, b) => a + b, 0)
    this.setState({ totalTip: total })
  }

  render() {
    return (
      <div className="container">
        <div className="header">
          <h1>Tip Calculator</h1>
          
        </div>
        <div className="input">
          <label for="amount">Enter your bill amount</label><br />
          <input type="number" name="amount" id="amount" placeholder="Enter bill amount" value={this.state.bAmount} onChange={(e) => { this.setState({ bAmount: e.target.value }) }} />
          <div className="satisfaction">
            <span><label>How was the Service</label></span>
            <span>
              <select value={this.state.service} onChange={(e) => { this.setState({ service: e.target.value }) }}>
                <option>--Select--</option>
                <option value="0.2">Exellent 20%</option>
                <option value="0.1">Good 10%</option>
                <option value="0.05">Bad 5%</option>
              </select>
            </span>
            <span><input placeholder="Customer Name" value={this.state.name} onChange={(e) => { this.setState({ name: e.target.value }) }} /></span>
            <button onClick={() => { this.handler() }}>Add Customer</button>
          </div>
        </div>
        <div className="output">
          <h2>Customer List</h2>
          
          <hr />
          
            {this.state.customerData.map(item =>
              <li>{`${item.name} offering tip of ${item.tip} rupees.`} </li>
            )}
          
          <hr />

          <input
            type="Button" id="tip"
            value="Calculate Tip & Customer"
            onClick={() => { this.handler2() }}
          />
          <table>
            <tr>
              <th>Total Customer</th>
              <th>Total tip</th>
            </tr>
            <tr>
              <td>{this.state.len}</td>
              <td>{this.state.totalTip}</td>
            </tr>
          </table>
        </div>
        <footer> &copy;2021 Tip-Calculator</footer>
      </div>
      
    );
  }
}

export default App;








