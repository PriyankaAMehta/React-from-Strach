/* create a heading tag in react. it takes 3 arguments. 1 - tag to create, 2 - an object, 3 - the content to be written inside the tag */
/* {} - this object is used to give attritubes to the tag like id, class etc */
const heading = React.createElement("h1", { id: "heading" }, "Hello World");
console.log(heading);

// on console.log(heading) : gives a JS object and not the html tag.
// like this {$$typeof: Symbol(react.element), type: "h1", key: null, ref: null, props: {id: "heading", children: "Hello World"}, …}
// so this is a react element with type h1. All react elements are objects
// props are nothing but attributes and childrens
// childrens are nothing but the content that goes into tag

/* create a root variable. this is where all react is to be stored. and we are storing in <div id="root"></div>*/
/* this is a DOM function so we are using ReactDOM to create root */
const root = ReactDOM.createRoot(document.getElementById("root"));

/* render method of the DOM renders the heading inside the root*/
root.render(heading);
