import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "dummy",
      },
    };
    console.log("child constructor called");
  }

  //1st the constructor is called, then render is called and then componentDidMount is called.
  //react gives this componentDidMount Method. this is called when the component is mounted on the page as name suggest
  async componentDidMount() {
    console.log(this.props.name + "child componentDidMount is called");
    const data = await fetch("https://api.github.com/users/PriyankaAMehta");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log("componentDidUpdate was called");
  }
  render() {
    console.log("child render called");
    const { name } = this.state.userInfo;
    //debugger;
    return (
      <div className="user-card">
        <h2>Name : {name}</h2>
        <h3>Location : Hanau</h3>
        <h4>Contact : @mehta_pri </h4>
      </div>
    );
  }
}

export default UserClass;
