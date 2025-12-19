const express = require('express');
const path = require('path');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;


app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));


app.post('/api/audit-request', (req, res) => {
  const { name, email, company, phone } = req.body;
  
  console.log('Audit Request:', { name, email, company, phone });
  
  res.json({
    success: true,
    message: 'Free audit request received. We will contact you within 24 hours.',
    reference: `AUDIT-${Date.now()}`
  });
});

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  
  console.log('Contact Form:', { name, email, message });
  
  res.json({
    success: true,
    message: 'Message received. Thank you for contacting LegacyShield IT.'
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`);
  console.log(` Access at: http://localhost:${PORT}`);
});