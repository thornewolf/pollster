## Pollster

Fulfilling your public polling needs you never knew you had. Pollster allows you to easily create polls and share them with your friends. You can also freely participate in public polls, view results, and discuss them with online strangers! Pollster ... poll now!

## Creators

Donovan Evangelio - Loyola Marymount University - Google Intern

Nathan Wesley - Southern Methodist University - AT&T Intern

Thorne Wolfenbarger - Embry-Riddle Aeronautical University - Google Intern
## Scripts

To run scripts, ensure you have the latest version of NodeJS and NPM. There are three package.json files: root, client, and server. Root controls the entire application. Client controls client dependencies. Server controls server dependencies.

```
npm run install-all
```

Installs dependencies for the entire application. This should be the first script run after pulling the source code.

```
npm run build
```

Builds the client and server asynchronously. This script will not accept any flags for nodemon or react. If you want to build the components with special flags, they must be done separately. This script is for convenience. The server can be run after creating a .env file in ```server/``` and inserting the connection string to the MongoDB cluster: ATLAS_URI=[CONNECTION STRING]
