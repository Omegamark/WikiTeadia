# WikiTeadia

WikiTeadia is meant to be a single source of truth for Chinese tea enthusiasts. Since there are hundreds of official teas in China, the app is meant to ultimately be a group effort to collect any and all information surrounding these teas into one API and one easy to use app.

## Installation Instructions
### Database/Server:
The server uses PostgreSQL, Nodejs, Express and passportjs. For further information on these technologies, please visit their corresponding docs.

1. Clone the repository.
2. Install the Node packages:
  * Navigate to the **wikiTeadia** directory where you cloned the repository and run the following command.
  * **$ ~/wikiTeadia/server/npm install**
3. Create a PostgreSQL database and define its URL in your DOTENV file.
4. Run the knexjs migrations:
  * **$ ~/wikiTeadia/server/knex migrate:latest**
5. Run the knexjs seeds:
  * **$ ~/wikiTeadia/server/knex seed:run**

### Client:
WikiTeadia uses *Angular 1.x* along with Ionic *Framework v1*. Please visit the corresponding docs for installation instructions and troubleshooting.
1. Install Ionic Framework and cordova.
  * $ ~/npm install -g cordova ionic.
2. Assuming you have created your database, defined its URL in your DOTENV file and run the migrations and seeds, you should be ready to launch the app.
  * **$ ~/wikiteadia/client/wikiTeadia/ionic serve --lab**
    * The *--lab* is launches the app in the browser with a phone preview. WikiTeadia was built as a native mobile app, so this view is most representative of what the final product will be.

### That's all, the app ought to load in the browser.
