steps to start : Each commit is designed to learn step by step towards REACT

Step 1 : Basic to create a GIT repo for learning.

1. create a folder and name it something like react series
2. open the folder in the vs code
3. add the emmet extension.
4. write html:5 in vs code and hit enter. it gives the basic html sekelton.
5. save the file as index.html
6. run git init. This creates a .git folder in your project, turning it into a Git repository.
7. Add Files to the Repositor To track files using command git add .
8. Commit Your Changes using command : git commit -m "Initial commit". This saves your changes in Git with a message.
9. Connect to a Remote Repository (GitHub/GitLab/etc.)
10. Create a repository on GitHub (or any Git hosting service).
11. Copy the repository URL (HTTPS or SSH).
12. Add it as a remote: git remote add origin https://github.com/username/repo.git
13. Check the remote: git remote -v

STEP 2 :

1. Create a hello world programme using html first. check the commit.
2. Create the same hello world programme using JS.

STEP 3 :

1. getting react into the project via CDN
2. there are 2 ways of getting/configuring react into the project. The first way is using the CDN and the other way is via npm.
3. CDN : Content Delivery Network. This is a website where the libraries are hosted like ex: where the react is hosted and we pull react into the project.
4. react.development.js - this file contains all the metods or functions. react is nothing but the JS code. so this file contains all the functions.
5. react-dom.development.js - This is the react library for dom operations. This is we need to modify the dom.
6. why are there 2 react CDN links ? - React does not just work on browsers, it also works on mobiles via react native , also there is react 3D so there are different platforms where react can be used so there are diffrent functond and methods but the react.development.js is the core react file and the react-dom.development.js is like a bridge between react and browser and it changes according to the platform.
7. Who developed react - Facebook developer
8. So when the react CDN links are inserted into the project, on right click , you get the inspect element and under the console write React , on typing this , you can now see all the react functions. like {children: object, component: .... } so on. that means react is inserted into the project.
9. When you include React via a CDN, it attaches itself to the global browser scope using capitalized names.
   <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
   <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
   These scripts create global variables:
   React and ReactDOM
   They do not create:
   react and reactDOM
   So typing react in the console gives:
   ❌ Uncaught ReferenceError: react is not defined
   Variables in JS are case sensitive.
10. Split the html,css,JS files. check the commits.
11. Create elements with react.
12. react.createElement("h1", {id: "heading"}, "hello world");
13. react.createElement takes 3 arguments : 1- tag to be created , 2- {} object with tag attributes like id, class etc. 3- childrens means something that goes into the tag like other tags or content.
14. when creting multiple childrens using react.createElement, react will throw an error saying : Warning: Each child in a list should have a unique "key" prop.
    so for now ignore this waring but its an important understanding.
15. creating element using react.createElement is very messy and can become complicated and hence JSX was created.
16. The main branch covers the First Step in React
17. The app-ignition branch is the next step in react. This is using the create-create app.
18. React is a JavaScript library for building user interfaces. Unlike a full framework that controls the entire application, React is flexible and can be added only where it is needed. This means you do not have to build your whole website using React.
    React can be mounted to any specific DOM element, most commonly a <div>, by selecting that element and rendering React components inside it. For example, you might use React to control just a small part of a page, such as a header, a form, or a dashboard section, while the rest of the page is built using plain HTML, CSS, or another technology.
    Because of this flexibility, React can be:
    Added to an existing website without rewriting everything
    Used to manage a single component or an entire application
    Rendered inside any chosen container element (like <div id="root">)
    In short, React works inside the DOM, not instead of it, and it gives developers control over where and how much of the application is powered by React. 19. use git checkout branch_name to switch to new branch. you can also use git switch branch_name if you are using newer git version.

STEP 4 : BRANCH - APP-IGNITION

1. check the branch app-ignition and check the app-ignition.txt file under Notes for important learnings for the branch app-ignition.
2. app-ignition branch helps to understand how to create your own create-react app which is production ready and not directly by using the command create-react app. This shows how much engineering goes behind the create-react app command used directly using command.
3. Install npm for installing all the packages via : npm init. check what happens on installation in the NOTES FOLDER
4. Install the first package : The Bundler : Parcel via: npm install -D parcel. check what happens on installation in the NOTES FOLDER, what is -D in the npm install -D parcel command.
5. On installing parcel, 2 files are generated - package-lock.json and node_modules.
6. create .git-ignore file and put the node_modules in it.
7. When cloning the project, node_modules can be installed with npm install command.

8. CDN is not the prefered way to install react so install react from npm as a package.
9. npm install react installs the react and npm install react-dom installs the react-dom.
10. add type="module"to <script type="module" src="App.js"></script> in index.html. import react and react-dom from node_module : import React from "react";
    import ReactDOM from "react-dom/client";

STEP 5 : branch APP-FOUNDATION

1. check the branch APP-FOUNDATION and app-foundation.txt under notes folder for components and {}. It has examples about what are components and {} with examples.
2. check the branch APP-PROPS&CONFIGDRIVENUI branch and Notes/app-props&ConfigDrivenUI.txt for props and What is config driven UI.
3. Code the UI for food app beginning with header , restaturant cards.
4. Use Config Driven UI concept. Used Swiggy API to showcase various restaurants using props, props destructuring.
5. Look at the commits on this branch for various props concept.
6. props in react are the properties. We use props to pass data from one component to other.
7. functional components in react are nothing but the normal JavaScript functions and props are nothing but passing aruguments to to the functional component. Read more : (Notes/app-props&ConfigDrivenUI.txt).
8. Websites like food delivery apps, ecommerce websites use Data Driven Config for developing the UI. Example shown using the live swiggy api.

STEP 6 : branch APP-REACTHOOKS

1. Restructure the app : create the folder structure and split the app into diffrent components.
