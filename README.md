# gig-finder-backend
Websocket server with MongoDB integration for Proximity Gig Finder project

### To run the server
In the project directory: run `npm install` followed by `node server.js`.

### To seed the database
First ensure that the `mongod` daemon is running. Open up a terminal window and run:
```
ps aux | grep -v grep | grep mongod
```
If `mongod` is NOT running then run the `mongod` command in the terminal. If you get an error like `NonExistentPath: Data directory /data/db not found.`
then run:
```
mkdir -p ~/data/db
```
followed by:
```aidl
mongod --dbpath ~/data/db
```
Once `mongod` is running then, from the base project directory, run:
```
node ./database/data/seed.js
```
