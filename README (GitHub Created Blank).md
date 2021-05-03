# MERN_Reading_List

#1 Create the REACT APP with the installation line "npx create-react-app reading_list-front-end". The last part of the installation line is actually the name of the folder that will be created where the React Install files will be.

#2 Delete the un-necessary files installed by the React Installation: App.test.js; logo.svg and setupTests.js. Remove the 'import logo' from App.js

#3 Remove all the default-css from App.css file. Also include code at the top of index.css to remove all the preset margins from default installation

***BASIC LAYOUT of the app was the first thing completed***

#4 Add the high level components to App.js file and then create the associated .js files and the .css files for the high level components in the src-folder

#5 Add minimal css to App.css for styling the main background and for styling the background of the <div> where the components are going to be displayed

#6 'rfce' to start with in each of the components will import the generic first few lines needed for each component

#7 Start with a generic <p> in each component and then import all the components (with CTRL + SPACEBAR) in the App.js file

#8 Add a bit of generic css to each of the component.css files in order to better see the different components

#9 Install @material-ui/core on the front-end to be able to import icons. Also install @material-ui/icons

#10 Major Time Spent Observation: spent alot of time trying to figure out the CSS to properly position everything. It is very helpful to 'border' all the <div>(s) to be able to see where things are and to move them around

#11 Completed the Add-New-Book-To-Reading-List section. Most of the time spent on the css to make it look cool. 

#12 On the Currently-Reading-Section, decided to call a component that will have the information in it. So in essence there will be a sub-component to this component

#13 On the Future-Reading-Section, decided to call a component that will have the information in it. So in essence there will be a sub-component to this component as well

#14 All three sub-sections of the first component are now complete. Begin working on the middle component (i.e. the book notes component)

#15 Middle component has three distinct sections: top-header, body-notes, and footer

#16 Work on the third component that has the 'already-read-books-section"

#17 All three-main-components are now completed. The CSS was a bit difficult, but once I figured out the right layout and pattern, it started coming together.

#18 The three-main-components, some have sub-components where information will need to flow-up or flow-down.

#19 MVP for the front-end is now complete. Moving to the back-end.

#20 First install 'npm-init' to install Node.js on the back-end. Ensure the "entry point" is indicated as 'server.js'

#21 To the package.json file ensure you add the 'scripts' of "start": "node server.js" and to the main section add "type": "module" to be able to use ES6 notation.

#22 Make sure there is a .gitignore file of the back-end as well. (Copy it from the front end).

#23 Install Express and Mongoose on the back-end and create the initial server.js file

#24 Establish the basic server.js lines that set-up the server and establish the first API to the generic address to ensure the PORT is working.

#25 Set-up Mongod-Atlas so the database is established
    - Create a 'free cluster' after you have created the project and givent it a name. The cluster is where the database will actually be stored

#26 Establish the Network Access to the cluster/database. You can limit it to only a certain IP-Address or you can establish to give it access from anywhere. Confirm your selection after you make it.

#27 Establish the Database Access to the cluster/database. Select the way you wish to authenticate by the given options. If you select a user/psw ... ensure you randomly generate the password for added security. But ALSO COPY that password and save it somewhere.

#28 Connect the application to the database by first retrieving the URL you will need from clusters > connect > connect your application. This URL has three important pieces of information in it: the admin, the password (which you will have to enter), and the database name. Copy the URL and paste it in your server.js file on the back-end.

#29 Added the DB-Config lines to server.js to establish connection to the database


