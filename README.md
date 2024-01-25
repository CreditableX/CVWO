# README

Setup Process
GameForum was built using ViteJS, ReactJS as well as the MUI component library for the frontend, and Ruby on Rails with SQLite for the backend. Both frontend and backend are placed into the same repository.
Required Downloads
1.	Ruby on rails and SQLite – read the documentation here (alternatively, download SQLite here and ruby on rails here)
Setting Up
1.	Clone the repository using the following commands: 
git clone https://github.com/CreditableX/CVWO
2.	Open up two command line interfaces.
3.	Run the Rails backend with the following commands
cd cvwo
rails s
4.	Run the React frontend with the following commands
cd blog3/client
npm run dev
5.	The Vite terminal should provide a link to the hosted webpage (default: port 5173). Click on the link or copy it to your browser to open the application.

Testing the forum app
Several posts, comments and users have been created to test the forum functionality out. 
Username	Type	Password
bob	regular	123
john	regular	123

User functionalities are as follows:
If not logged in, one can only view comments and posts.
Logged in users can create posts and comments and can edit or delete only their own posts and comments.
Common Errors
A server is already running when running the command rails s
-	Check cvwo/tmp/pids and delete the file server.pid


