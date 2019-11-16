import React from 'react';
import { withChatkit } from '@pusher/chatkit-client-react';
import './UserList.css';

function UserListEl({ userId, chatkit }) {
  const rooms = !chatkit.isLoading
    ? chatkit.currentUser.rooms
    : []
  console.log(chatkit)
  return (
    <div className="UserList">
      <h3>Builders</h3>
      <ul>
      {
        rooms
          .map(room => <li>{room.name}</li>)
      }
      </ul>
    </div>
  );
}

export const UserList = withChatkit(UserListEl)