import { Component } from "react";

import UserClass from "./UserClass";

// some people write Component instead of React.Component and import {Componenent} from "react"
class AboutComponent extends Component {
  constructor(props) {
    super(props);
    console.log("Parent constructor called");
  }
  componentDidMount() {
    console.log("Parent componentDidMount is called");
  }

  /* AboutComponent is the parent component of child USerClass.
  Always first the constructor is called, then the render is called. But now react sees that there is a child called userClass 
  component, so it has not yet finished mounting so it goes to its child,  then calls childs constructor first then 
  the childs render and then it calls the childs componentDidMount()  because the child component has mounted properly 
  and then finally calls the componentDidMount() of the parent.

  */

  /*componentDidMount() is used to make API calls 
  Why componentDidMount() is used to call API? 
  because we first want to render the compoenet and the make API call
  */

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
