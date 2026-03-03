import { Component } from "react";

import UserClass from "./UserClass";

// some people write Component instead of React.Component and import {Componenent} from "react"
class AboutComponent extends Component {
  constructor(props) {
    super(props);
    console.log("Parent constructor called");
  }
  render() {
    console.log("Parent render called");
    return (
      <div>
        <h1>About US</h1>

        <UserClass name={"Priyanka Mehta (Class)"} />
      </div>
    );
  }
}
export default AboutComponent;
