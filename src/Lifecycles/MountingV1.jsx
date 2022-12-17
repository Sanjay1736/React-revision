import { Component } from "react";

export class Mounting1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            FullName: this.props.surname+this.props.name

        }

   }
    static getDerivedStateFromProps() {
      return
  }
    render() {
    return (
      <>
        <h1>LifeCycle</h1>
        <div>FullName:{this.state.FullName}</div>
            <div>Name={this.props.name}</div>
            <div>Surname={this.props.surname}</div>
      </>
    );
  }
}
//1)Constructor
//2)getDerivedStateFromProps()
//Static methods used call the classes