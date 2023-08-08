document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
  
    taskForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const taskDescription = taskInput.value;
      if (taskDescription !== '') {
        addTask(taskDescription);
        taskInput.value = '';
        saveTask(taskDescription);
      }
    });
  
    function addTask(description) {
      const taskItem = document.createElement('li');
      taskItem.textContent = description;
      taskList.appendChild(taskItem);
    }
  
    function saveTask(description) {
      // Send an HTTP request to the server to save the task
      // Example using fetch API:
      fetch('/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ description: description })
      })
      .then(response => response.json())
      .then(data => {
        console.log('Task saved:', data);
      })
      .catch(error => {
        console.error('Error saving task:', error);
      });
    }
  
    const messageForm = document.getElementById('message-form');
    const messageInput = document.getElementById('message-input');
    const messageList = document.getElementById('message-list');
  
    messageForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const messageText = messageInput.value;
      if (messageText !== '') {
        addMessage(messageText);
        messageInput.value = '';
        sendMessage(messageText);
      }
    });
  
    function addMessage(text) {
      const messageItem = document.createElement('li');
      messageItem.textContent = text;
      messageList.appendChild(messageItem);
    }
  
    function sendMessage(text) {
      // Send an HTTP request to the server to send the message
      // Example using fetch API:
      fetch('/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: text })
      })
      .then(response => response.json())
      .then(data => {
        console.log('Message sent:', data);
      })
      .catch(error => {
        console.error('Error sending message:', error);
      });
    }
  });
  