var http = require('http');

http.createServer(function (req, res) {
  res.setHeader('Accesss-Control-Aloow-Origin','*')
  res.setHeader('Accesss-Control-Aloow-Method','GET, POST')
  res.setHeader('Accesss-Control-Aloow-Headers','Content-Type')
  
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end('{"contactSubject": ["General Enquery", "Classes","Schedules","Instructors","Prices","Other" ]}');  
}).listen(5000);