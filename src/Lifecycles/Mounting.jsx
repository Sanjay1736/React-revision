import { Component } from "react";

export class Mounting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "Sanjay",
      Address: "India",
      Role: "Student",
    };
  }
  getName= ()=> {
    this.setState({ ...this.state, Name: "Linux" });
    console.log(this);
  }
  render() {
    return (
      <>
        <h1>Mounting</h1>
        <p>Name:{this.state.Name}</p>
        <button onClick={this.getName}>GetDeatils</button>
      </>
    );
  }
}
