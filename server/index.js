const express = require('express');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');

const app = express();
app.use(cors());
const port = process.env.PORT || 9999;


const proxy = createProxyMiddleware({
  target: 'http://localhost:7777',
  changeOrigin: true, // for vhosted sites, changes host header to target's host
  logLevel: 'debug',
});

app.use('/', express.static(path.join(__dirname, '../client/dist')));

app.use('/review/:productId', proxy);

app.listen(port, () => {
  console.log(`Proxy running on port ${port}.`);
});