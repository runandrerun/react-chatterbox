// LOAD DATA

export const loadMessages = () => {
  return (dispatch) => {
    fetchRates()
      .then(messagesData => {
        dispatch(setMessages(messagesData));
      });
  };
};

// SET DATA

const setMessages = (messages) => {
  return {
    type: 'LOAD_RATES',
    payload: {
      messages
    },
  };
};
