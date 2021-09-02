import React, { Component } from 'react'
import "./App.css"

export class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      coinType: "",
      headNumber: 0,
      tailNumber: 0
    }
  }
  handleClick = () => {
    let number = Math.floor(Math.random() * 10) + 1;
    alert(number)
    if (number % 2 === 0) {
      this.setState({
        count: this.state.count + 1,
        coinType: "head",
        headNumber: this.state.headNumber + 1,
        tailNumber: this.state.tailNumber
      })
    } else {
      this.setState({
        count: this.state.count + 1,
        coinType: "tail",
        headNumber: this.state.headNumber,
        tailNumber: this.state.tailNumber + 1
      })
    }
  }
  render() {
    return (
      <>
        <div className="main">
          <div className="contain text-center">
            <div className="mar">
              <h3>Let's flip a coin!</h3>
              <button className="btn btn-dark button" onClick={() => this.handleClick()}>FLIP ME!</button>
              <div>
                {this.state.coinType === "head" && (<img src="../HeadCoin.jpg" alt="headimage" className="image" />)}
                {this.state.coinType === "tail" && (<img src="../TailCoin.jpg" alt="tailimage" className="image" />)}
              </div>
              <p>Out of {this.state.count} flips, there have been {this.state.headNumber} heads and {this.state.tailNumber} tails.</p>
            </div>
          </div>
        </div>

      </>
    )
  }
}

export default App

