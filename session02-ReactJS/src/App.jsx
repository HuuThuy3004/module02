import React, { Component } from 'react'
import Parent from './components/Parent'

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      count: 0,
      title: "Rikkel Academy",
      name:"Tran Minh Hoang"
    }
  }

  increaseCount = ()=>{
    this.setState({
      count: this.state.count + 1,
      title: "Thuy"
    });
  }

  render() {
    return (
      <>
        <div>App</div>
        <p>count: {this.state.count}</p>
        <p>count: {this.state.title}</p>
        <button onClick={this.increaseCount}>Increase</button>
        <Parent name={this.state.name}></Parent>
      </>
    )
  }


}



