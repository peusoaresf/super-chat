export default {
    subscribeToNewMessage: function (eventCallback) {
        this.timerId = setInterval(() => {
            eventCallback({
                id: (new Date()).getTime(),
                sentBy: 2,
                text: (new Date()).toLocaleString()
            });
        }, 5000);
    },
    unsubscribeFromNewMessage: function () {
        clearInterval(this.timerId);
    },
    sendMessage: function (message) {
        console.log('Sending message: ' + JSON.stringify(message));
    }
}