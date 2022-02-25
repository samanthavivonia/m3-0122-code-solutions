const express = require('express');
const path = require('path');
const app = express();

const whatIsThisPathFor = path.join(__dirname, 'public');
console.log('whatIsThisPathFor: ', whatIsThisPathFor);

app.use(express.static(whatisThisPathFor));

app.listen(3000, () => {
  console.log('Express server listening on port 3000');
});
