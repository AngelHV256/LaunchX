//Levantando el server
console.log('Hola Mundo desde NodeJS');
const http = require('http');
const host = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('content-Type', 'text/plain');
    res.end('Ya pude detener el maldito server'); //ctrl + c para detener la ejecucion de cualquier maldita accion en la terminal
});

server.listen(port, host, () => {
  console.log('server encendido en ' + host + '/' + port);
});