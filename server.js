const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;
/*
const xmlFilePath = path.join(__dirname, 'test.xml');

const server = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/writeToXML') {
        let body = '';
        req.on('data', chunk => {
            body += chunk;
        });

        req.on('end', () => {
            const xmlData = `<test>${body}</test>\n`;

            if (fs.existsSync(xmlFilePath)) {
                fs.appendFile(xmlFilePath, xmlData, err => {
                    if (err) {
                        res.statusCode = 500;
                        res.end('Error writing to test.xml');
                    } else {
                        res.statusCode = 200;
                        res.end('Content written to test.xml');
                    }
                });
            } else {
                fs.writeFile(xmlFilePath, xmlData, err => {
                    if (err) {
                        res.statusCode = 500;
                        res.end('Error creating test.xml');
                    } else {
                        res.statusCode = 200;
                        res.end('Content written to test.xml');
                    }
                });
            }
        });
    } else if (req.method === 'GET' && req.url === '/test.html') {
        // Serve the test.html file
        const htmlFilePath = path.join(__dirname, 'test.html');
        fs.readFile(htmlFilePath, (err, data) => {
            if (err) {
                res.statusCode = 404;
                res.end('Not Found');
            } else {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');
                res.end(data);
            }
        });
    } else {
        res.statusCode = 404;
        res.end('Not Found');
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
*/

const express = require('express');
const app = express();
//const port = 3000;

app.get('/summary', (req, res) => {
    // Extract parameters from the URL
    const { GuestNum, date, time, bookingSeatsList, total } = req.query;

    // Generate HTML dynamically based on parameters
    const htmlContent = `
        <html>
        <head>
            <title>Booking Summary</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                }
                .summary {
                    background-color: #f9f9f9;
                    padding: 20px;
                    border-radius: 10px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                }
            </style>
        </head>
        <body>
            <div class="summary">
                <h1>Booking Summary</h1>
                <p><strong>Guest Number:</strong> ${GuestNum}</p>
                <p><strong>Date:</strong> ${date}</p>
                <p><strong>Time:</strong> ${time}</p>
                <p><strong>Booking Seats:</strong> ${bookingSeatsList}</p>
                <p><strong>Total:</strong> ${total}</p>
            </div>
        </body>
        </html>
    `;

    // Send the dynamically generated HTML as the response
    res.send(htmlContent);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
