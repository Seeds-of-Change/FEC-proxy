const express = require('express');
const path = require('path');
const app = express();
// const cors = require('cors');
const port = process.env.PORT || 9999;

// app.use(cors());
app.use(express.static(path.join(__dirname, '../public')));

app.listen(port, () => {
  console.log(`Server is running on port ${port}!`)
})