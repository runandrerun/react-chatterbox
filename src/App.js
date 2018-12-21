import React from 'react';
import ReactDOM from 'react-dom';
import Chatkit from '@pusher/chatkit';
import MessageFeed from './Containers/MessageFeed';
import './App.css';

const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <div>
        <MessageFeed />
      </div>
    )
  };
};
