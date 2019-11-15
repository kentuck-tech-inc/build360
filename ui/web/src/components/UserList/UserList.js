import React from 'react';
import { withChatkit } from '@pusher/chatkit-client-react';
import './UserList.css';

function UserListEl({ userId, chatkit }) {
  console.log(chatkit)
  return (
    <div className="UserList">

    </div>
  );
}

export const UserList = withChatkit(UserListEl)