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

#29 Made some progress, but not as much as would have liked this weekend.

#30 Finished Week-2 of the Second-Class. Now on to Week-3.

#31 Well on to the Week-3 of the Second-Class. Going to try to finish it tomorrow.

#32 Have another peer-reviewed hw to submit in order to finish Week-3.

#33 Going to finish the peer-reviewed hw tomorrow.

#34 This is a trial GIT commit. Watching a video on YouTube.

#35 On week-5 of the 2nd-class. This is the last week of this class.

#36 Going to try to finish the 5th-week tomorrow.

#36 On the final test of the 5th-week of the Second-Class.

#37 Finished the Second-Class. Moved on to the Third-Class; one the first-week now.

#38 Started the Third-Class; on the first-week of the third-class.

#39 Making slow progress on the Third-Class. Wrapped up some other work yesterday. Didn't make as much progress on class as wanted.

#40 Going to continue on the Third-Class.

#41 On vacation for the next few days. Don't really know how much coding will happen.

#42 Didn't do much coding. Was out all day today ... vacation
    
#43 Last day of vacation. Going home tomorrow. Back to coding the next day.
    
#44 Back from vacation. Will resume UX/Coding tomorrow morning.

#45 Resumed the UX/Coding progress. Got to make sure make up the time.

#46 Making progress again on the UX/Coding Class.
    
#47 Have gotten into Figma and digital wire-frames.

#48 Making progress on the Third-Week of the Third-Class of Seven Total.

#49 Almost done with the Third-Week of the Third-Class of Seven. Going to wrap it up tomorrow morning.

#50 One more assignemnt to submit to wrap up the class.

#51 Going to try to complete the two assignments to move on to the next class.

#52 Have only one more assingment to complete and submit to finish the Third-Class.

#53 Finished the Third-Class. Moved on to the Fourth-Class.

#54 Started the Fourth-Class. There are three more classes after this one.

#55 Well on my way in the Fourth-Class. Working through my first-week.

#56 Almost done with the first-week. Hoping to finish tomorrow.

#57 Didn't get anything done today on the class. Nor today either. Have to move along a little faster.

#58 Moving right along in the Fourth-Class. Have moved on the the next weeks to try to get the videos out of the way.

#59 Done with all the vidoes. Now need to do all the assignments. 

#60 Going to try and wrap up all the assignments from Fourth-Class tomorrow.

#61 Need to re-work the last assignment. Passed the Second-Week. Need to pass Third-Week and Fourth-Week of the Fourth-Class.

#62 Passed the Third-Week. Now on to the Fourth-Week and wrapping up the Fourth-Class.

#63 Need to finalize and submit the Fourth-Week final submission and then move on to the Fifth-Class.

#64 Almost done with the last assignment of the Fourth-Class.

#65 Passed the Fourth-Class. Now on the Fifth-Class .. which has six-weeks.

#66 Started the Fifth-Class. Moving right along in week-one.

#67 Making progress. Almost done with first-week of the Fifth-Class.

#68 Wrapping up the first-week tomorrow.

#69 Decided to do all the videos and quizes in all the weeks before finishing the peer-reviewed assignements in each week.

#70 Finished Week-2; moved on to Week-3. Moving from week to week to finish all the videos.

#71 Finished Week-3. Now have to do all the HW for Week-1 and Week-2.

#72 Moved on to Week-4; which does not have an assignment. Week 1, 2 and 5, 6 have an assignment.

#73 Moved on to Week-5 to wrap up all the videos. Still working on the 5th week.

#74 Will try to finish up the HW for Week-1 and Week-2 tomorrow. Made some progress today on the HW for the Week-1.

#75 Finished the first two pages that need to be submitted. Finished almost the entire first half of the app. Will submit tomorrow morning.

#76 Moved on to Week-5 and Week-6.

#77 Started working on the APP to make it better.
    
#78 Trying to figure out how to orient (in the future-reading-list-sub) the <divs> the way I need them.

#79 Still trying to figure out how to orient the divs.

#80 Figured out the new orientation for the <divs>. Also installed the new Material-Ui.

#81 Figured out how to push to the finished-reading-component from the currently-reading component. Making good progress

#82 Managed to delete an entire collection by sending DELETE-API the wrong way. Spent a day re-entering my book list.

#83 Added all the data back to the future-reading-list collection.

#84 Making small progress forward one day at a time.

#85 Need to get back to doing the design program through coursera

#86 Going to try and wrap up another class tomorrow.

#87 Didn't get to do much coding this weekend because of the garage sales.

#88 The class is starting to fall behind now.

#89 Need to start moving on the class again. Going to resume tomorrow.

#90 Didn't get anything done on the class today. Will resume tomorrow.

#91 going to try a different approach starting tomorrow.

#92 Need to wrap up the class already.

#93 Going to focus on finish the class tomorrow.

#94 Finished week-5 of the class. Have to finish week-6 next.

#95 Need to finish the 6th-week so I can wrap up this 5th-class. On the last assignment of the 6th-week right now.

#96 Trying to finish it up before the end of the year to move on to the next class.

#97 Have only a few more slides to complete. Then will be totally done.

#98 Finished Week-5 and Class-5. Started Class-6 and am done with Week-1.

#99 Moving along in the class. Going to finish soon!

#100 Have finished all the lectures for Week-1 and Week-2. Going to be doing the assignments of the first two weeks next.

#101 Finished up all the assignments for Week-1. Will finish assignment for Week-2.

#102 Week-1 is all complete. Need to finish Week-2 work. Have moved on to Week-3.

#103 Moving through Week-3 as I finish the HW for Week-2.

#104 Finished my book this morning. Hoping to spend some time on the class tomorrow morning.

#105 Didn't spend much time on the class this morning. But did start Week-3 lectures.

#106 Finished all the lectures for Week-3. Need to do the assingment for Week-2 and Week-3.

#107 Will continue working with the HW and the class tomorrow morning.

#108 Didn't really get much work done on it this morning. Caught up on most of the news.

#109 Going to try to wrap up HW for Week-2 tomorrow.

#110 Didn't get as much done as I wanted to. Having a hard time motivating to finish this UX Design course. But will wrap it up.

#111 Going to do everything possible to wrap up Week-2 work tomorrow.

#112 Completed all Week-2. Going to do the lectures for Week-4 and start assignment for Week-3

#113 Started working on the lectures for Week-4. Moved on to Week-5 and Week-6 as well.

#114 Moving right along on Week-5. Going to finish it up tomorrow. Didn't get to finish Week-5 today. Will move along in it tomorrow.

#115 Moving along. Will finish Week-6 tomorrow. Almost finished with Week-6 lectures. Then have to wrap up the HW.

#116 Going to try and finish up most of it this weekend. Still working on wrapping up this weekend.

#117 Finished all the lectures of Week-6. Going to start finishing the rest of the HW for each week now.

#118 Finished Week-3. Only have Week-4 and Week-5 left to submit for HW grade.

#119 Need to wrap up Week-4 and Week-5 HW. Those are the last of the two for this class. Ends on 2/14.

#120 Going to finisht the Week-4 and Week-5 HW this weekend.

#121 Added another book to the reading list. Trying to change the CSS so that it's not so crowded at the top.

#122 Almost done with the HW for Week-4. Should be able to wrap it up tomorrow and submit.

#123 Submitted Week-4 HW. Need to just finish now for Week-5 work.

#124 Still waiting for the grade for the Week-4 HW.
    
#125 Grade for Week-4 has posted now. Only have Week-5 HW left to submit. Then the class is done.
    
#126 Need to finish now the Week-5 HW in order to pass the class and wrap it up.

#127 Almost done. Just need to wrap up already with this class. That will leave the last of the classes.

#128 Made some good progress on the last HW today. Going to try and wrap up tomorrow.

#129 Finished the class! Now on the 7th and last class.

#130 Have started the 7-th and last class of the program. Moving along making progress in the class.

#131 Made some additional progress today. Making headway on the last class.

#132 Wrapped up all the vidoes from Week-1 of the last class.

#133 Almost finished all the HW for the week-1. Should finish tomorrow.

#134 Finished all of Week-1. Moved on to Week-2. Started Week-2 and am moving right along in it.

#135 Moving along on Week-2 of the class. More than half done with Week-2.

#136 Should be able to wrap up Week-2 this week. Almost done with Week-2. Just need to finish the HW.

#137 Moving along as fast as I can to wrap up. Trying to wrap up to complete the class.

#138 Been gone for a while for work travel and then been really busy this week.

#139 Trying to get back into the grove of thinks. Trying ...

#140 Trying really hard to get back into the grove of thinks. Maybe tomorrow. 

#141 Wasn't able to get anything done yesterday. Will give it another go tomorrow.

#142 Went for vacation up north for the weekend. Will try to get some stuff done in the morning.

#143 Didn't really get to work on anything today. We are up at the cabin, so didn't have a chance to get something done.

#144 Really need to start getting going again to finish that up.

#145 Still struggling to get back into it. Tomorrow! Tomorrow!

$146 Didn't happen today. Needs to happen tomorrow. I will make sure of it.

#147 Back from a trip. Hoping to start fresh tomorrow.

#148 Have at least started opening the pages to see where I'm at.

#149 Desperately trying to get back into the groove of things.

#150 Still struggling to get back into the grove of things. I think I just need to at least open the website.

#151 Tomorrow another day. Will try to make some progress.

#152 Got the axle out today! But didn't get much done on the class aspect.

#153 Tomorrow morning I will spend at least 20 minutes on it. At least!

#154 Starting to get back into the groove of things.

#155 Tomorrow is a new day, and tomorrow I will start. No excuses.

#156 I started! I really started! I'm going to finish this last class ASAP.

#157 Made more progress today! Getting back into the groove of things ....

#158 Another day ... more progress!

#159 More progress. I'm also trying to learn a bit more of firebase.

#160 Almost done with the lectures. Then have to do all the HW.

#161 Still making some really good progress. Must continue now that on roll.

#162 Working on both the class and a tutorial for Firebase.

#163 Moving right along in the class. Almost done with all the lectures.

#164 More progress today. Little bit every day will get there in the end. Trying to finish up all the lectures and then the readings and finally the two different assignments. 

#165 Didn't make progress today. Had to go to early games. But will make progress tomorrow. So close to being done! Don't stop!

#166 Choose to sleep in. Needed the rest. Will continue tomorrow.

#167 Did make progress today. Did indeed continue with more.

#168 Almost finished with all the vidoes. About to start working on the actual assignments. 

#169 Really need to start wrapping everything up now to complete the class.

#170 Let's see if we can wrap up tomorrow morning. 

#171 Finished one of the assignments! Actually finished! Will try to finish one more tomorrow morning. 

#172 Have been making more progress. Almost done with the next assignment.

#173 Passed the first assignment. Will work on passing the next one.

#174 Going to try and submit the next assignment tomorrow morning. 

#175 Started looking at the last assignment. It is a presentation.

#176 Need to continue working on this. No stopping now. Need to wrap up.

#177 Going to make some more progress tomorrow. 

#178 Found a great vidoe on Web3 and full-stack that am following along on.

#179 Three of thirty-two hours down. Making steady progress everyday.

#180 Moving right along on the tutorial. Hoping to finish alot more tomorrow.

#189 Now up to the 4th hour of the 32 hour video.

#190 Up to 4:30:51 of the video. Still moving along as best as possible.

#191 Made more progress today. Almost to the fifth hour. One-eighth of the way there ...

#192 Moving right along. Not stopping now.

#193 Made some really good progress. Almost 25% of the way through. 

#194 Was stuck. Got helped. Should be able to continue now.

#195 Making some really good progress on the video.

#196 Almost to the 8th hours ... which would be about 25% through the course. Am interested to see what will happen towards the end of the course. 

#197 Moving along. Still moving through. About to reach the 8th hour.

#198 Not stopping. Going to keep on moving forward since I'm about 25% through.

#199 Passed the 8-hour mark. Now officially past the 25% mark ... on to the second 25%.

#200 Can't seem to deploy to the test net. Not enough gas something. Need to figure it out.

#201 Got unstuck. Was able to move forward now. Not sure exactly why it didn't work with the encrypted version.

#202 Moved farther along now. Still making good progress.

#203 Didn't make any progress today. Woke up too late. Tomorrow another day.

#204 Made progress today. Got to Lesson 6.

#205 Need to progress and keep going. Very important not to stall.

#206 Made more progress today. Almost at the 9th hour.

#207 Made it to 9 and a quarter hours! Moving along. At 10-hours ... that will be a third of the way there. Moving on!

208 Nine and a half hours in ... more and more. Keep going. No stopping.

#209 Didn't make any progress today. Took too much time in the morning for other things.

#210 Made some more progress today. Coming up on the 10th hour which would be 1/3 there.

#211 Keep going! Don't stop!

#212 Didn't make any progress this morning. Will try to pick it back up tomorrow.

#213 No progress today. Had to take day to rest. Tomorrow to continue.

#214 Need to get back in the swing of things. Really want to keep going in progress.

#215 Made a little bit of progress today. Almost at the 10 hour mark.

#216 Little more progress today. Getting there.

#217 Ran out of time this morning. Need to make some progress tomorrow.

#218 Made some really good progress today. Had morning and afternoon to spend on the video.

#219 Made more good progress today. On a roll now. Not stopping.

#220 Still moving forward. Have not stopped yet. Will keep going forward.

#221 Moved forward today. At mark 10:45:32. More progress tomorrow.

#222 Moved forward again today. At mark 10:54:40. Still making progress.

#223 Going to make more progress tomorrow morning.

#224 Didn't make progress this morning. Will tomorrow morning. 

#225 Making progress tomorrow. That is the committment. To make some progress tomorrow.

#226 Good progress made today. Made it all the way to 11:02:15. More progress tomorrow.

#227 More progress made. Made it to 11:17:32. Will continue tomorrow.

#228 Some progress today as well.

#229 More progress today. Made it to 11:30:42. Will continue tomorrow.

#230 Made good progress today. Now at 12:00:00. This is almost half way through.

#231 Made it to 12:08:37 still moving along. Not stopping.

#232 Made it to Lesson 8. Full-Stack now begins. This is at 12:38:53

#233 More progress made today. At 12:45:40.

#234 More progress today. Made it to 12:52:15. Lesson 8 here I come.

#235 Much more progress today. At 13:01:13 today. Going to make more progress tomorrow.

#236 Keep the streak alive. Made it to 13:08:04.

#237 Moving further along now. No stoping. 13:13:09.

#238 No progress made this morning. I just couldn't. But will try tomorrow morning.

#239 No progress today either. Caught up on all the news. Will make good progress tomorrow.

#240 Made good progress today. Have now reached 13:28:14. Moving forward still.

#241 Made more progress today. At 13:34:05. Keep going now.

#242 Made it to Lesson 9! At 13:41:04 ... Now half way through all the lessons. No stopping us now!

#243 Progressing in Lesson 9. Now at 13:45:08. Need to install all the dependencies. That's what's taking a while.

#244 Overslept this morning. Wasn't able to make any progress. But will move forward tomorrow.

#245 Didn't make any progress today. Slept in to catch up on sleep. Making progress tomorrow.

#246 Going to try to make some more progress tomorrow. Will be going on vacation soon though.

#247 Went on vacation for a week. So no contributions. Back now. Will restart tomorrow monrning.

#248 We start tomorrow! No more messing around about finishing the video.

#249 When are you going to stop fidling around and actuall get back to the vidoe? When!?!?

#250 Started getting back into the grove today. Started. Make more progress tomorrow.

#251 Really good progress this morning. Made it to 14:04:18. Going to see if can make more progress this afternoon.

#252 No progress today. But will make good progress tomorrow. Waking up early.

#253 Made progress this morning. Finally got all the dependencies to load correctly.

#254 Made more progress today. Now at 14:28:27. Slowly moving forward ...

#255 Made really good progress today. Now at 14:56:39. Almost half way through the course!

#256 Made more good progress this morning. Now at 15:14:32. Getting to that half-way mark.

#257 Didn't make as much progress as I wanted to this morning. Have moved on to 15:20:02. Going to try more progress tomorrow.

#258 Had to work on various other things this monring. But I did apply to a programming job today. Tomorrow will apply to more.

#259 Not as much progress as I would have wanted today. Still at 15:20:36. Will dedicate more time tomorrow.

#260 Made good progress today. Now at 16:05:57. Now basically half way through the course.

#261 No progress this morning. Life bump. Will try to resume tomorrow.

#262 Applying to jobs now so I can get into the tech world.

#263 Making good progress and maintaining momentum moving forward.

#264 Made more significant progress today. I'm going to keep the momentum going. Do need to look at the doc though.

#265 Making some small progress forward on the AWS Developer Certificate

#266 Made more progress on the AWS Developer Certificate and also send more resumes. Keep going.

#267 Made significant progress in the AWS Certificate and also with more applications and completed resume.


