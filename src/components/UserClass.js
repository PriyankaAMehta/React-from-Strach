import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 2,
    };
    console.log("child constructor called");
  }

  //1st the constructor is called, then render is called and then componentDidMount is called.
  //react gives this componentDidMount Method. this is called when the component is mounted on the page as name suggest
  componentDidMount() {
    console.log("child componentDidMount is called");
  }
  render() {
    console.log("child render called");
    const { name } = this.props;
    const { count } = this.state;
    return (
      <div className="user-card">
        <h2>Name : {name}</h2>
        <h3>Location : Hanau</h3>
        <h4>Contact : @mehta_pri </h4>
        <h2>Count = {count}</h2>

        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Click Me
        </button>
      </div>
    );
  }
}

export default UserClass;
