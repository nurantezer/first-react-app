import React, {Component} from 'react'

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: props.count || 0,
    };
    this.handleInc = this.handleInc.bind(this);
  }

  handleInc() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  handleDec = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };
  render() {
    return (
      <div className="container text-center mt-4">
        <h1>COUNT:{this.state.count}</h1>
        <button className="btn btn-success" onClick={this.handleInc}>
          INC
        </button>
        <button onClick={this.handleDec} className="btn btn-warning">
          DEC
        </button>
      </div>
    );
  }
}



export default Counter