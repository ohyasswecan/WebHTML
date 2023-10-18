const express = require('express');
const app = express();
const cors = require('cors'); // Import the cors package

app.use(express.json());
app.use(cors()); // Enable CORS for all routes

app.post('/save', (req, res) => {
  const xmlData = req.body.xmlData; // XML data sent from the client
  fs.writeFile('Boat.xml', xmlData, (err) => {
    if (err) {
      console.error('Error writing to Boat.xml:', err);
      res.status(500).send('Error writing to Boat.xml');
    } else {
      console.log('XML data saved successfully.');
      res.send('XML data saved successfully.');
    }
  });


  // Send the PUT request
  xmlhttp.send('new xml string');
  res.send('XML data saved successfully.');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});

