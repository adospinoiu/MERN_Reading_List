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

#30 Created a new db.js file (AddNewBook) that has a schema of the information that will be pushed to the database when a new book is added by the user.

#31 Add the Middleware Line and then add the POST-API to push the data into the database. Test it with Insomnia to see if it works.

#32 IT WORKS!!! The POST-API successfully pushed data from Insomnia into the Atlas-Database and created a new-collection as it was described in the schema established

#33 Install AXIOS on the front-end folder

#34 Retrieve the data from the user (i.e. title, author, recommended) and utilize setState to pass the data with an axios call to the database.

#35 IT WORKS!!! Information entered by the user (i.e. title, author, recommended) is sent to the database

#36 Create the GET-API route and insert the code in the App.js file. 

#37 The ReadingList-Component (i.e. the add-new-book subcomponent) performs a POST when the user enters the data for a new book. The POST-API is triggered by an onClick-event when the user hits 'submit'. The data then has to be fetched (i.e. a GET-API) and passed back to the ReadingList-Component which has to filter it down to the future-reading-list subcomponent in order for it to be rendered in the list

#38 IT WORKS!!! Data entered by the user is successfully pushed into the database with a POST-API route, then (when the browser is re-freshed) there is a GET-API route that pulls the data from the database and sends it down to the sub-component to render on the browser.

#39 IT WORKS!!! The future-reading-list sub-component of the main reading-list component now renders data correctly with all the associated CSS.

#40 Roadblock. Now that I can add new books to the 'future-reading-list-subcomponent; I now need to be able to "drag" a future-book to the currently-reading section. I need to be able to drag it, THEN start making comments for that specific book. Problem is ... I don't know how to drag-and-drop. So forward progress is paused until I teach myself how to drag-and-drop. Appears that react-beautiful-dnd is what I have to learn

#41 Roadblock Update. So I've learned a bit about how to make a <div> draggable. It is not that difficult. Just add the 'draggable' attribute to the div. However, 'dropping' and then making sure the data follows the div is the next thing I need to figure out. This will involve State and Ref probably.

#42 Starting to think I'm better off rendering a button in each of the books ....

#43 Decided to move away from the Drag-n-Drop because I was stuck too long. I'm going to move forward with moving the information from section to section with buttons.

#44 Interesting side-note: learned something interesting about the useEffect-Hook. Right now, my GET API call is in a useEffect hook. So there is a GET CALL to the database to grab the data which will be passed down to the component to render it. The useEffect-Hook, at the end, where the [] are ... if I place a 'monitor' in the [newBook] (a monitor such as ... the newBook variable changing) ... the useEffect-Hook will fire on a consistent basis. In essence do a GET-CALL to the database all the time. This might not be a good idea because it will bombard the database with GET CALLS all the time. NOT GOOD.

BETTER: --- The GET CALL needs to be re-triggered WHEN there is a change in the database. So that the user does not have to 'refresh' to grab the new data from the database. (i.e. PUSHER)

#45 I got IT!!! Part of the problem anyway. But I got it. So the data is pulled with a GET API call, then it is passed down the the right component and when the specific render is clicked, I can identify which specifc rendered information is clicked! (HINT: had to make the onClick a function).

$46 Added scroll-ability to the Reading-List-SubComponent to enable to scroll up-and-down to see the whole list

#47 Started working on the POST-API to post the data from the Future-Reading-List Subcomponent to the Currently-Reading-List Subcomponent when a div is clicked

$48 There is something going on with the secondary POST that is executed from the Future-Reading-List-Subcomponent when the onClick is activated. The information is not being passed on. Not sure why yet.

#49 I think I got it. I have to have a function within a function. First I have to setState for all the variables from the data being passed down. Then once all the setState(s) are set, I have to send that information using a POST-Route. So a function within a function.

#50 I got IT!!! It works!!! The issue was trying to use useState again. So I'm using useState to pass the information from the main component to the subComponent. Then I tried the same useState to pass information from one subComponent to the next. That doesn't work. I had to remove the second instance of useState and simply pass the information on using variables. Then the POST worked perfectly!

#51 The pass-through of information now works. The information is passed from the entry fields to the future-reading-list subcomponent. Then upon a user click, the desired book from the reading-list is moved to the currently-reading-list-subcomponent. So the information now works and flows properly! Next up is the notes section which needs to be tied to the currently-reading-list clicked on item.

#52 Need to figure out how to "lift state up". Might be difficult to pass information from a child component to a parent component. So looking into learning that now.

#53 Moved the currently-reading subcomponent to the book-component. This way, when a user clicks the option to "move" an item from the 'reading-list-subcomponent' the information is then sent to the main component of the middle. Select information can then be passed from the main middle component down the tree to the children components.

#54 Been really struggling with the 'state' aspect and making sure information flows down properly. Making information "flow-up" seems to be more difficult than flowing information down. I've had to re-structure the components and sub-components several times now to account for the information flow down.

#55 I think I figured it out. Finally. From the parent-component, I have to pass down to the child-component a FUNCTION that will then return back to the parent-component the change in state of the child-component.

#56 That's it!!! I have to pass a function to the child-component. That function will return the data from the child-component to the parent-component!!! DAMN IT. Stay tuned.

#57 Was not able to make any progress today.

#58 IT WORKED!!! I was able to get the click data FROM the child-component back up to the parent-component. Using useState TOO!!!! I had to pass a function to the child-component, from the parent-component. The child-component then used this fuction to return data based on an action done in the child. The data then flowed back up to the parent-component where the useState was utilized to update the info in the parent-component.

#59 IT WORKS!!! The information flows up from the child-component. IT WORKS!!!

#60 Now to try to sync the notes to the particular book selected

#61 Have to figure out how to pull forward different notes based on the book selected

#62 Stuck. It does not like something. When I try to POST the notes typed by the user ... it does not like something in that path. Need to figure it out.

#63 Progress! When the user clicks a book in the Currently-Reading-SubComponent, the title is then displayed on the notes section and the title with the associated note is then POST-Routed when the user hits enter on the note. Yes, progress!

#64 Now, need to do a GET-Request to pull the notes based on the CLICKED-reading-book component. 

#65 Entered GET-Route in server.js to fetch the data from the database for the notes the user inputed

#66 Entered GET-Call in APP.js and confirmed the data (book-notes) is coming from the database.

#67 It works!!! Had to create another sub-component. But it does render all the notes from the database. Now I just have to only display the notes based on the book clicked. Verified the notes do all indeed POST to the database

#68 Now, need to figure out how to display only the messages associated with the clicked book. The clicked book is what tells the app which title the notes are associated with ... so going to need to figure out a way to display only the notes associated with the clicked book.

#69 The information does properly flow up and down from child-component to parent-component based on what the user clicks. Just need to display only what the user clicks on.

#70 Created a new array that is pushed into with only the messages that need to be displayed. This array will then be passed down so the messages can be displayed

#71 YEEEEEAAAAAAA!!!!! IT WORKS EXACTLY AS INTENDED!!!!! YEEEEEAAAAAA!!!!!

#72 Now can start doing some clean-up on the CSS and what not. Have entered almost my entire reading-list in the database. Still have to do a bit of work about the transition of information from main component to main component. And at some point have to work on the last component which will show all the information of "all ready read books".

#73 Uploaded all of my reading list to the database. Started including notes on my first reading book.

#74 Want to implement a search function so that I can search through my reading list rather than just scroll through it.

#75 Decided to try to get a re-design of the page. However, will use a UI Designer so I don't have to learn all that stuff.

#76 Implemented a Search-Function to search the different books in the future-reading-list sub-component

#77 Search functionality works!!! Going to try to modify to use useState.

#78 It WORKS!!! I now have the ability to search through my future-reading-list sub-component

#79 Need to work on the last component now that has all the 'read books'

#80 Showed off the application to a new user. The user immediately wants to start using it; even though it has very basic functionality. So first, I have to figure out how to have more than one user, and the data be specific to them. Then, I will have to work a little more on the graphical user interface.

#81 Progressing well on the Data Analytics side-project. 

#82 No update yet. Still progressing. I need to figure out how to make the app be able to be used by more than one person.

#83 Need to host the backend on Heroku

#84 Need to host the front-end on firebase

#85 No progress on hosting today. Neither today. And I also skipped a day in committs.

#86 There appears to be a new REACT 18. Took a look at some of the changes being advertised.

#87 Looking into the new REACT 18 to see what the differences are.

#88 Trying to figure out how to host the back-end on Heroku and the front-end on FireBase without displaying my log-in credentials

#89 Going to try to host the back-end tomorrow on Heroku

#90 Deploying the back-end to Heroku. Followed THE STEPS:
1) set-up the new application on Heroku DASHBOARD
2) run the commands (in the terminal: IN THE BACK-END FOLDER) that Heroku Dashboard indicates
    - 'heroku login' to login in through the CLI
    - 'git init' to create a git repo on the back-end folder
    - 'heroku git:remote -a mern-reading-list-backend' to link the git repo you created with the app on Heroku Dashboard
    - follow the three steps to add, commit, and push

**You will know the back-end is deployed successfuly: On the Heroku Dashboard, click on the app, go to settings, go down to domain, click on the link it indicates. The test API end-point (i.e. 'Hello World') should be displayed

#91 Make sure to update the URL the axios called is made from (i.e. on the front-end). Update the URL to the URL indicated on the Heroku app where your app is deployed (i.e. the domains name)

#92 On the front-end install firebase with 'npm i firebase-tools' in the terminal

#93 Deploy the front-end to Firebase. Follow THE STEPS:
1) set-up the new application on FireBase DASHBOARD
2) run the commands (in the terminal: IN THE FRONT-END FOLDER)
    - 'firebase login' to login in through the CLI

#94 On the front-end run 'firebase init' to start the deploy process on firebase. Go through all the prompts
    - choose Hosting
    - for the public directory question MAKE SURE you indicate 'build'
    - CRITICAL: 'yes' for single-page app question

#95 On the front-end run 'npm run build' to build the production-version of the project. This is the folder/version that will be hosted live on the internet

#96 On the front-end run 'firebase deploy' to deploy the front-end on firebase. Then go to the firebase dashboard; under 'hosting' check the domain name and click the link to see the app live

#97 IT'S ALIVE!!! IT'S DEPLOYED AND IT WORKS!!!


### REV 1.1 (Started Working on it 9/1/2021) ###

#1 Installed Pusher on the front-end (by mistake) and also installed it on the back-end (the correct place to install it)
    - front-end (npm install pusher-js)
    - back-end (npm install pusher)

#2 After installing Pusher on the front-end and back-end ... DON'T FORGET ... to add the import (at the top) in server.js file (back-end) and app.js file (front-end)

#3 Added the Pusher-Code to the front-end and the back-end. For some reason it is not triggering.

#4 Corrected the Pusher-Code on the back-end. IT WORKS NOW. Adding a new book to the Reading-List does push the addition to the front-end without re-rendering the whole code.

#5 Added Pusher-Code for book-notes section so that component updates without re-rendering also when a new note is add.

#6 Going to re-desing the U.I. after learning some U.I. Basics.

#7 Need to push the new back-end and front-end to heroku and firebase respectively

#8 REV 1.1 Is COMPLETE. Added Pusher-Code so that I don't need to reload the page to see the books being added to the reading list, or the notes being added while reading a book.

#9 Pushed the updated code. It is now live on the internet.

#10 Have started reviewing some UX-Code to make the UI better.

#11 Thinking about using FIGMA someway to make the UI better.

#12 Learning about FIGMA on YouTube and thinking about starting Google UX Cert.

#13 Going to try make some descent progress tomorrow on the APP.

#14 Unfortunately, no progress today. Woke up too late and did not do much coding.

#15 Will sign-up for the UX Google Class tomorrow.

#16 Joined the Google UX Class! Started it yesterday to be able to build a better UI for the app.

#17 In the first week. Of the first class. There are a total of 7-classes.
    
#18 Power supply died in computer (desktop). Bought a new one and waiting for it to be delivered.
    
#19 Soccer practice started today. Power supply ordered and waiting on it.

#20 Moving right along in the UX-Class. Already on Week 2 of the First Class.
    
#21 Went up to Phoenix for the weekend. Still making head-way on the UX-Class.

#22 Got a new audio-book from WSJ+. Making progress in the class.

#23 Almost done with the first class which was a 4-week class.

#24 Going to wrap up the first class (4-weeks) tomorrow.

#25 Finished First-Class this morning. Moved on to Second-Class. It is a 5-week long class.

#26 Moving right along in the Second-Class on the 1st-week.

#27 Finished the 1st-week of the Second-Class. Now on the 2nd-week.

#28 Have to do some sort of assignment that will be peer-reviewed. 