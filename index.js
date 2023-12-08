const WebSocket = require('ws');
const express = require('express');
const http = require('http');

const app = express();
const server = http.createServer(app);

const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
  console.log('Nova conexão WebSocket');

  // Evento para receber mensagens do cliente
  ws.on('message', (message) => {
    console.log(`Mensagem recebida: ${message}`);

    // Aqui você pode processar a mensagem conforme necessário

    // Envia uma resposta de volta para o cliente
    ws.send('Mensagem recebida com sucesso!');
  });
});

// Inicia o servidor na porta especificada
const port = 3002;
server.listen(port, () => {
  console.log(`Servidor WebSocket ouvindo em http://localhost:${port}`);
});
