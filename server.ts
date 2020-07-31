import express from 'express';

const app = express();
const port = 3001;

// provide access to static files
app.use(express.static('./client/public'));

// catch all to send requests to SPA
app.get('*', (req, res) => res.sendFile(`${ __dirname }/client/public/index.html`));

// start it all up!
app.listen(port, () => console.log(`listening on port: ${ port }`));