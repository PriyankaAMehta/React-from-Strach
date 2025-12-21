/* Creating the following structure using React
<div id="parent">
    <div id="child">
        <h1></h1> 
        <h2><h2>
    </div>
    <div id="child">
        <h1></h1> 
        <h2><h2>
    </div>
</div>
*/ /*
react.createElement takes 3 arguments 
: 1- tag to be created , 
2- {} object with tag attributes like id, class etc. 
3- childrens means something that goes into the tag like other tags or content.
*/ /* adding one more tag that means adding multiple childerns can be done using [] array i.e
putting the childerns into []. */ const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child"
    }, [
        React.createElement("h1", {}, "Hello Priyanka"),
        React.createElement("h2", {}, "Hello Shreyansh")
    ]),
    React.createElement("div", {
        id: "child"
    }, [
        React.createElement("h1", {}, "Hello Raj"),
        React.createElement("h2", {}, "Hello Anita")
    ])
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//# sourceMappingURL=Namaste React.6bd02f5a.js.map
