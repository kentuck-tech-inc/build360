import React from 'react';

import './Login.css';

export default function Login(props) {
  return (
    <div className="Login">
      <h1 className="Login__title">Chatkit React Getting Started</h1>
      <div className="Login__button" onClick={() => login('jane', 'raedwa01')}>
        Log in as <b>Jane</b>
      </div>
      <div className="Login__button" onClick={() => login('raedwa01', 'jane')}>
        Log in as <b>Rob</b>
      </div>
    </div>
  );
}

function login(userId, otherUserId) {
  window.location.href = `?userId=${userId}&otherUserId=${otherUserId}`;
}