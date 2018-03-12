import { List, Map } from 'immutable';

const app = require('express')();
const http = require('http').createServer(app);
// const http = require('http').Server(app);
const io = require('socket.io')(http, { origins: '*:*'});

http.listen(process.env.PORT || 3001, () => {
  console.log('listening on port 3001');
});

app.get('/', (req, res) => {
  res.send('server is running');
});


const idLista = []; // clientes on.
let clientes = List();


// ******************************* Conecta um cliente ao servidor *******************************
io.on("connection", (client) => {
  idLista.push(client.id);
  console.log(idLista);

// ******************************* Retorna o id do cliente *******************************
  client.on('setId', (info) => {
    const dados = JSON.parse(info)
    clientes = clientes.push(Map({[client.id]: dados}));
    let res = clientes.get(clientes.indexOf(client.id)).toObject();
    client.emit('getId', JSON.stringify(res));
  });

// ******************************* Desconecta um cliente do servidor *******************************
  client.on('disconnect', () => {
    console.log('user disconnected', client.id);
    const i = idLista.indexOf(client);
    idLista.splice(i, 1);
    console.log(clientes.toArray());
    clientes = clientes.delete(clientes.indexOf(client.id))
    console.log(clientes.toArray());
    client.disconnect();
  });

});