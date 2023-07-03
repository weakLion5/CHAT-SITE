document.addEventListener('DOMContentLoaded', () => {
  const messageInput = document.getElementById('message-input');
  const sendButton = document.getElementById('send-button');
  const chatMessages = document.getElementById('chat-messages');

  sendButton.addEventListener('click', () => {
    const message = messageInput.value.trim();

    if (message !== '') {
      const messageElement = document.createElement('div');
      messageElement.textContent = message;
      chatMessages.appendChild(messageElement);

      messageInput.value = '';
      messageInput.focus();
    }
  });
});
