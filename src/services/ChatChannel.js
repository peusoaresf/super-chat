export default {
  subscribeToNewMessage: function (eventCallback) {
    console.log('Subscribed to new messages');

    const callApi = () => {
      fetch('https://api.adviceslip.com/advice')
        .then((response) => response.json())
        .then((json) => {
          let id = Math.floor(Math.random() * 10)

          eventCallback({
            id: (new Date()).getTime(),
            sentBy: id,
            text: json.slip.advice,
            chatId: id,
            sentAt: new Date()
          });
        })
        .catch((error) => console.error(error));
    };

    const randomTimer = () => {
      callApi();
      let ms = Math.floor(Math.random() * 5000) + 1000; // returns a random integer from 1000 to 5000
      setTimeout(randomTimer, ms);
    }
    setTimeout(() => {
      randomTimer();
    }, 2000);
  },
  unsubscribeFromNewMessage: function () {
    console.log('Unsubscribed from new messages');
    clearInterval(this.timerId);
  },
  sendMessage: function (message) {
    console.log('Sending message: ' + JSON.stringify(message));
  }
}