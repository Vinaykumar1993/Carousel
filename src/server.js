var React= require("react");
var express = require("express");
var path=require("path");
var fs = require("fs");
var { renderToString } = require("react-dom/server");
const app_exp = express();
// app_exp.use( express.static( path.resolve( __dirname, "../dist" ) ) );

app_exp.get('/', (req, res) => {
  // const app = ReactDOMServer.renderToString(App);

  const indexFile = path.resolve('./build/index.html');
  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Something went wrong:', err);
      return res.status(500).send('Oops, better luck next time!');
    }

    return res.send(data);
  });
});
app_exp.use(express.static('./build'));

app_exp.listen( 3000 );
