import React from 'react';
import './App.css';
import {
  ChatkitProvider,
  TokenProvider
} from "@pusher/chatkit-client-react"

import Chat from './Chat';
import UserList from './UserList';
import Login from './Login';
import chatkitLogo from './chatkit-logo.svg';

const instanceLocator = "v1:us1:294a4690-7f3c-466d-9ce4-16c37331651a";

const tokenProvider = new TokenProvider({
  url: "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/294a4690-7f3c-466d-9ce4-16c37331651a/token"
});

function App() {
  const urlParams = new URLSearchParams(window.location.search);
  const userId = urlParams.get('userId');
  const otherUserId = urlParams.get('otherUserId');
  return (
    <div className="App">
      {userId && otherUserId ? (
        <>
          <div className="App__chatwindow">
            <ChatkitProvider
              instanceLocator={instanceLocator}
              tokenProvider={tokenProvider}
              userId={userId}
            >
              <UserList userId={userId}/>
              <Chat otherUserId={otherUserId} />
            </ChatkitProvider>
          </div>
        </>
      ): (
        <Login />
      )}
      <div className="App__backdrop">
        <img
          className="App__backdrop__logo"
          src={chatkitLogo}
          alt="Chatkit logo"
        />
      </div>
    </div>
  );
}
export default App;
