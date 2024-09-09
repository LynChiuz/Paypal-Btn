const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
// biome-ignore lint/style/useNodejsImportProtocol: <explanation>
const path = require('path');

// Thông tin PayPal
const CLIENT_ID = 'YOUR_PAYPAL_CLIENT_ID';
const SECRET = 'YOUR_PAYPAL_SECRET';
const PAYPAL_API = 'https://api-m.sandbox.paypal.com'; // Sử dụng api-m.paypal.com cho môi trường production

const app = express();
app.use(bodyParser.json());
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Trang chủ với nút thanh toán PayPal
app.get('/', (req, res) => {
  res.render('index');
});
// Khởi chạy server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
