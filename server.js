const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// Daftar pesan
let chatMessages = [];

// Event saat koneksi socket terbentuk
io.on('connection', (socket) => {
  console.log('A user connected');

  // Mengirim pesan saat koneksi terjalin
  socket.emit('chatMessages', chatMessages);

  // Menerima pesan dari pengguna dan menyimpannya
  socket.on('sendMessage', (message) => {
    chatMessages.push(message);
    // Meneruskan pesan ke semua pengguna yang terhubung
    io.emit('newMessage', message);
  });

  // Event saat socket disconnect
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
