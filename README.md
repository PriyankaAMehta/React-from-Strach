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
2. there are 2 ways of getting/configuring react into the project. The first way is using the CDN and the other way is using the create react app method via react.org
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
