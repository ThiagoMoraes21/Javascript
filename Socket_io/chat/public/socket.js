let socket = io('http://localhost:3000');

// passar isso para javascript...

// get all previous messages
socket.on('previousMessages', messages => {
    console.log('Previous messages: ', messages);
    messages.forEach(message => {
        renderMessage(message);
    });
})

// broadcast the message
socket.on('receivedMessage', message => {
    console.log('received message: ', message);
    renderMessage(message);
});

// call the event to shot the messages
$('#chat').submit(function(event) {
    event.preventDefault();
    let author = $('input[name=username]').val();
    let message = $('input[name=massage]').val();

    if(author.length > 0 && message.length > 0) {
        let messageObj = {
            author: author,
            message: message,
        }
        renderMessage(messageObj);
        socket.emit('sendMessage', messageObj);
        $('input[name=massage]').val("");
    }
});

// render the messages on screen
function renderMessage(message) {
    $('.messages').append(`<div class="message">
                                <p class="username">${ message.author }</p>: ${ message.message }
                            </div>`);
}

