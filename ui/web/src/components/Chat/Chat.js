import React, { useState, useEffect } from 'react'
import { withChatkitOneToOne } from '@pusher/chatkit-client-react';
import './Chat.css'

function ChatEl(props) {
  const [pendingMessage, setPendingMessage] = useState('');
  const messageList = React.createRef();

  const handleMessageKeyDown = event => {
    if (event.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleMessageChange = event => {
    setPendingMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (pendingMessage === '') {
      return;
    }
    // TODO: Send message to Chatkit
    props.chatkit.sendSimpleMessage({text:pendingMessage});
    setPendingMessage('');
  };

  useEffect(() => {
    messageList.current.scrollTop = messageList.current.scrollHeight;
  });

  const messages = props.chatkit.messages.map(m => ({
      id: m.id,
      isOwnMessage: m.sender.id === props.chatkit.currentUser.id,
      createdAt: new Date(m.createdAt),
      // This will only work with simple messages.
      // To learn more about displaying multi-part messages see
      // https://pusher.com/docs/chatkit/reference/javascript#messages
      textContent: m.parts[0].payload.content,
  }));
  return (
    <div className="Chat">
      <div className="Chat__titlebar">
        <img
          className="Chat__titlebar__avatar"
          alt="avatar"
        />
        <div className="Chat__titlebar__details">
          <span>{props.chatkit.isLoading
                  ? 'Loading...'
                  : props.chatkit.otherUser.name}
          </span>
        </div>
      </div>
      <div className="Chat__messages" ref={messageList}>
        {messages.map(m => (
          <Message key={m.id} {...m} />
        ))}
      </div>
      <div className="Chat__compose">
        <input
          className="Chat__compose__input"
          type="text"
          placeholder="Type a message..."
          value={pendingMessage}
          onChange={handleMessageChange}
          onKeyDown={handleMessageKeyDown}
        />
        <button className="btn ml-4" onClick={handleSendMessage}>
          Send
        </button>
      </div>
    </div>
  );
}

function Message({ isOwnMessage, isLatestMessage, createdAt, textContent }) {
  return (
    <div
      className={
        isOwnMessage
          ? 'Chat__messages__message__wrapper Chat__messages__message__wrapper--self'
          : 'Chat__messages__message__wrapper Chat__messages__message__wrapper--other'
      }
    >
      <div className="Chat__messages__message__wrapper__inner">
        <div
          className={
            isOwnMessage
              ? 'Chat__messages__message Chat__messages__message--self'
              : 'Chat__messages__message Chat__messages__message--other'
          }
        >
          <div className="Chat__messages__message__content">{textContent}</div>
          <div className="Chat__messages__message__time">
            {createdAt.toLocaleDateString()} {createdAt.toLocaleTimeString()}
          </div>
          <div
            className={
              isOwnMessage
                ? 'Chat__messages__message__arrow alt'
                : 'Chat__messages__message__arrow'
            }
          />
        </div>
      </div>
    </div>
  );
}

export const Chat = withChatkitOneToOne(ChatEl)
