import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 1,
    };
  }

  render() {
    const { name } = this.props;
    const { count, count2 } = this.state;
    return (
      <div className="user-card">
        <h2>Name : {name}</h2>
        <h3>Location : Hanau</h3>
        <h4>Contact : @mehta_pri </h4>
        <h2>Count = {count}</h2>
        <h2>Count2 = {count}</h2>
      </div>
    );
  }
}

export default UserClass;
