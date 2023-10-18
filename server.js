const express = require('express');
const app = express();
const fs = require('fs');

app.use(express.json());

app.post('/save', (req, res) => {
  const xmlData = req.body.xmlData; // XML data sent from the client
  fs.writeFileSync('Boat.xml', xmlData);
  res.send('XML data saved successfully.');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});

function saveXMLData(xmlData) {
    fetch('http://localhost:3000/save', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ xmlData }),
    })
      .then(response => response.text())
      .then(data => {
        console.log(data); // Server response message
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  