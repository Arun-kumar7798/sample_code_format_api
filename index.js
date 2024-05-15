// index.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes');

app.use(bodyParser.json());
app.use('/api', routes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// curl http://localhost:3000/api/posts | yq .
// curl -X POST -H "Content-Type: application/json" -d '{"title":"sample testing title", "content":"This is the content of the new post"}'http://localhost:3000/api/posts | yq .

