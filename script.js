// Memilih elemen-elemen yang diperlukan
var messageInput = document.getElementById('message-input');
var sendButton = document.getElementById('send-button');
var chatMessages = document.getElementById('chat-messages');

// Fungsi untuk mengirim pesan
function sendMessage() {
    var message = messageInput.value;

    if (message.trim() !== '') {
        var messageElement = document.createElement('div');
        messageElement.textContent = message;
        chatMessages.appendChild(messageElement);

        // Mengosongkan input pesan setelah mengirim
        messageInput.value = '';
    }
}

// Menambahkan event listener pada tombol kirim
sendButton.addEventListener('click', sendMessage);

// Menambahkan event listener pada input pesan untuk memungkinkan pengiriman pesan dengan tombol Enter
messageInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});


// Fungsi untuk mengirim pesan
function sendMessage() {
    var message = messageInput.value;

    if (message.trim() !== '') {
        var messageElement = document.createElement('div');
        messageElement.textContent = message;
        chatMessages.appendChild(messageElement);

        // Menyimpan pesan ke localStorage
        var messages = JSON.parse(localStorage.getItem('chatMessages')) || [];
        messages.push({ content: message, timestamp: new Date().getTime() });
        localStorage.setItem('chatMessages', JSON.stringify(messages));

        // Mengosongkan input pesan setelah mengirim
        messageInput.value = '';
    }
}

// Fungsi untuk memuat pesan-pesan dari localStorage
function loadMessages() {
    var messages = JSON.parse(localStorage.getItem('chatMessages')) || [];

    // Menghapus pesan yang lebih dari 6 jam
    var currentTime = new Date().getTime();
    messages = messages.filter(function (msg) {
        return (currentTime - msg.timestamp) < (6 * 60 * 60 * 1000);
    });

    // Menampilkan pesan-pesan di chatbox
    messages.forEach(function (msg) {
        var messageElement = document.createElement('div');
        messageElement.textContent = msg.content;
        chatMessages.appendChild(messageElement);
    });
}

// Memanggil fungsi loadMessages saat halaman dimuat
loadMessages();

// 